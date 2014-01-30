[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e0. Given these data types for a simple language:\n\u003c/p\u003e\u003cpre\u003edata Prog a = Prog a [Decl]\n\ndata Decl = VarDecl Var Expr\n          | FunDecl Var [Var] [Decl]\n          | Return Expr\n\ndata Expr = Ref String\n          | Number Int\n          | Add Expr Expr\n          | Mul Expr Expr\n\ndata Var = Var String\n\u003c/pre\u003e\u003cp\u003e----------------------------------------\n\u003c/p\u003e\u003cp\u003e1. Define a \u003ccode\u003ePlate f\u003c/code\u003e data type\n\u003c/p\u003e\u003cp\u003eThe name of the fields should refer to the actual data type: they will be prefixed with a \"p\" here.\nThese field accessors are called projectors for the given plate and the actual data type (see the \u003ccode\u003eProjector p a\u003c/code\u003e type alias).\nYou have to use projectors to provide definition for the \u003ccode\u003emultiplate\u003c/code\u003e method, and also for functions like \u003ccode\u003efoldFor\u003c/code\u003e.\nWith this module, you only need projectors for the \u003ccode\u003e\u003ca\u003eIsProjector\u003c/a\u003e\u003c/code\u003e instance definition.\n(However you do have to use projectors anyway if \u003ccode\u003eList, Maybe, (,)\u003c/code\u003e, etc. are not part of the plate,\nin which case you have to explicitly traverse them to expose their structure to Multiplate. See: point 3.)\n\u003c/p\u003e\u003cpre\u003edata Plate f = Plate\n  { pProg :: forall a. Prog a -\u003e f (Prog a)\n  , pDecl :: Decl -\u003e f Decl\n  , pExpr :: Expr -\u003e f Expr\n  , pVar  :: Var  -\u003e f Var\n  }\n\u003c/pre\u003e\u003cp\u003e----------------------------------------\n\u003c/p\u003e\u003cp\u003e2. Define \u003ccode\u003e\u003ca\u003eIsProjector\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003ePlate\u003c/code\u003e and all the actual data types\n\u003c/p\u003e\u003cpre\u003einstance IsProjector Plate (Prog a) where\n  getProjector _ _ = pProg\n\ninstance IsProjector Plate Decl where\n  getProjector _ _ = pDecl\n\ninstance IsProjector Plate Expr where\n  getProjector _ _ = pExpr\n\ninstance IsProjector Plate Var where\n  getProjector _ _ = pVar\n\u003c/pre\u003e\u003cp\u003e----------------------------------------\n\u003c/p\u003e\u003cp\u003e3. Define a single \u003ccode\u003eMultiplate\u003c/code\u003e instance for \u003ccode\u003ePlate\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eDefinitions required without this module are given in the comments.\n(The \"b\" prefixes in functions stand for \"build\".)\n\u003c/p\u003e\u003cpre\u003e\ninstance Multiplate Plate where\n  mkPlate build = Plate (build pProg) (build pDecl) (build pExpr) (build pVar)\n  multiplate p  = Plate bProg bDecl bExpr bVar where\n\u003c/pre\u003e\u003cpre\u003e    -- you have to define these here to capture the 'p' parameter\n    constr \u003c$\u003e: a = constr \u003c$\u003e (getProjector p a) p a\n    appl   \u003c*\u003e: a = appl   \u003c*\u003e (getProjector p a) p a\n    infixl 4 \u003c$\u003e:\n    infixl 4 \u003c*\u003e:\n\u003c/pre\u003e\u003cpre\u003e\n    -- definitions:\n\u003c/pre\u003e\u003cpre\u003e    -- lists, maybe values, etc. have a Traversable instance, which has to be used for these [*]\n    bProg (Prog a decls)           = Prog \u003c$\u003e pure a \u003c*\u003e traverse (pDecl p) decls    \n\u003c/pre\u003e\u003cpre\u003e    bDecl (VarDecl var expr)       = VarDecl \u003c$\u003e: var \u003c*\u003e: expr\n    -- bDecl (VarDecl str expr)    = VarDecl \u003c$\u003e pVar p var \u003c*\u003e pExpr p expr\n    bDecl (FunDecl var vars decls) = FunDecl \u003c$\u003e: var \u003c*\u003e traverse (pVar p) vars \u003c*\u003e traverse (pDecl p) decls\n    bDecl (Return expr)            = Return \u003c$\u003e: expr\n    -- bDecl (Return expr)         = Return \u003c$\u003e pExpr p expr\n\u003c/pre\u003e\u003cpre\u003e    bExpr (Ref str)                = Ref \u003c$\u003e pure str\n    bExpr (Number int)             = Number \u003c$\u003e pure int\n    bExpr (Add expr expr')         = Add \u003c$\u003e: expr \u003c*\u003e: expr'\n    -- bExpr (Add expr expr')      = Add \u003c$\u003e pExpr p expr \u003c*\u003e pExpr p expr'\n    bExpr (Mul expr expr')         = Mul \u003c$\u003e: expr \u003c*\u003e: expr'\n    -- bExpr (Mul expr expr')      = Mul \u003c$\u003e pExpr p expr \u003c*\u003e pExpr p expr'\n\u003c/pre\u003e\u003cpre\u003e    bVar (Var str)                 = Var \u003c$\u003e pure str\n\u003c/pre\u003e\u003cp\u003e[*] However, tuples for example are not \u003ccode\u003eTraversable\u003c/code\u003e (since they don't have the appropriate kind)\nso instead of \u003ccode\u003etraverse\u003c/code\u003e one can use a function like this:\n\u003c/p\u003e\u003cpre\u003etraverseTuple fa fb (a, b) = (,) \u003c$\u003e fa a \u003c*\u003e fb b\n\nbConstr (Constr a b) = Constr \u003c$\u003e traverseTuple (pTypeOfA p) (pTypeOfB p) (a, b)\n\u003c/pre\u003e\u003cp\u003eOR\nsimply add tuples for the plate definition, just like \u003ccode\u003eExpr\u003c/code\u003e or \u003ccode\u003eDecl\u003c/code\u003e.\nThis also can be done for \u003ccode\u003eList, Maybe\u003c/code\u003e, etc., and then the \u003ccode\u003etraverse\u003c/code\u003e functions can be replaced with \u003ccode\u003e\u003c$\u003e:\u003c/code\u003e, \u003ccode\u003e\u003c*\u003e:\u003c/code\u003e,\nand generic functions defined in this module can be used for these too.\n\u003c/p\u003e\u003cp\u003e----------------------------------------\n\u003c/p\u003e\u003cp\u003e4. Using multiplate\n\u003c/p\u003e\u003cp\u003eIn a given program:\n\u003c/p\u003e\u003cpre\u003evar a = 1;\nfunction func(arg1, arg2){\n  return a + arg1\n}\n\u003c/pre\u003e\u003cp\u003eand its representation:\n\u003c/p\u003e\u003cpre\u003eprog :: Prog ()\nprog = Prog () [VarDecl (Var \"a\") (Number 1)\n               ,FunDecl (Var \"func\") [(Var \"arg1\"), (Var \"arg2\")]\n                    [Return (Add (Ref \"a\") (Ref \"arg1\"))]]\n\u003c/pre\u003e\u003cp\u003eto get the list of variables one has to define a plate by\nupdating another plate containing defaults for all types (\u003ccode\u003epurePlate\u003c/code\u003e) by\nmodifying the field that correpsondes to \u003ccode\u003eVar\u003c/code\u003e data type.\nThen create another plate where the order of traversal is set (\u003ccode\u003epreorderFold\u003c/code\u003e),\nand finally call \u003ccode\u003e\u003ca\u003egfoldFor\u003c/a\u003e\u003c/code\u003e with the plate we defined, and then with the actual data type.\nWithout this module instead of \u003ccode\u003e\u003ca\u003egfoldFor\u003c/a\u003e\u003c/code\u003e one can only use \u003ccode\u003efoldFor\u003c/code\u003e,\nwhich requires an extra argument (a projector), which corresponds to the root datatype:\nin this case it's \u003ccode\u003epProg\u003c/code\u003e because our program has a \u003ccode\u003eProg\u003c/code\u003e data type.\nBut \u003ccode\u003e\u003ca\u003egfoldFor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003egtraverseFor\u003c/a\u003e\u003c/code\u003e, etc. can be used with any data type,\nbecause in the \u003ccode\u003e\u003ca\u003eIsProjector\u003c/a\u003e\u003c/code\u003e instances we already defined what it's projector is.\n\u003c/p\u003e\u003cpre\u003e\nvariablesPlate :: Plate (Constant [String])\nvariablesPlate = preorderFold purePlate { pVar = ((Var str) -\u003e Constant [str]) }\n\nvars :: (IsProjector Plate a) =\u003e a -\u003e [String]\nvars  x = gfoldFor       variablesPlate x\n\nvars' :: Prog a -\u003e [String]\nvars' x =  foldFor pProg variablesPlate x\n\u003c/pre\u003e\u003cpre\u003e\u003e vars prog\n[\"a\",\"func\",\"arg1\",\"arg2\"]\n\u003c/pre\u003e\u003cp\u003e----------------------------------------\n\u003c/p\u003e\u003cp\u003eAll of this code is included in the source at the end of this file for easier copying.\n\u003c/p\u003e\u003cp\u003eMultiplate documentation: \u003ca\u003ehttp://hackage.haskell.org/package/multiplate\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "module",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html",
        "fct-type": "module",
        "title": "Simplified"
      },
      "index": {
        "description": "Given these data types for simple language data Prog Prog Decl data Decl VarDecl Var Expr FunDecl Var Var Decl Return Expr data Expr Ref String Number Int Add Expr Expr Mul Expr Expr data Var Var String Define Plate data type The name of the fields should refer to the actual data type they will be prefixed with here These field accessors are called projectors for the given plate and the actual data type see the Projector type alias You have to use projectors to provide definition for the multiplate method and also for functions like foldFor With this module you only need projectors for the IsProjector instance definition However you do have to use projectors anyway if List Maybe etc are not part of the plate in which case you have to explicitly traverse them to expose their structure to Multiplate See point data Plate Plate pProg forall Prog Prog pDecl Decl Decl pExpr Expr Expr pVar Var Var Define IsProjector instances for Plate and all the actual data types instance IsProjector Plate Prog where getProjector pProg instance IsProjector Plate Decl where getProjector pDecl instance IsProjector Plate Expr where getProjector pExpr instance IsProjector Plate Var where getProjector pVar Define single Multiplate instance for Plate Definitions required without this module are given in the comments The prefixes in functions stand for build instance Multiplate Plate where mkPlate build Plate build pProg build pDecl build pExpr build pVar multiplate Plate bProg bDecl bExpr bVar where you have to define these here to capture the parameter constr constr getProjector appl appl getProjector infixl infixl definitions lists maybe values etc have Traversable instance which has to be used for these bProg Prog decls Prog pure traverse pDecl decls bDecl VarDecl var expr VarDecl var expr bDecl VarDecl str expr VarDecl pVar var pExpr expr bDecl FunDecl var vars decls FunDecl var traverse pVar vars traverse pDecl decls bDecl Return expr Return expr bDecl Return expr Return pExpr expr bExpr Ref str Ref pure str bExpr Number int Number pure int bExpr Add expr expr Add expr expr bExpr Add expr expr Add pExpr expr pExpr expr bExpr Mul expr expr Mul expr expr bExpr Mul expr expr Mul pExpr expr pExpr expr bVar Var str Var pure str However tuples for example are not Traversable since they don have the appropriate kind so instead of traverse one can use function like this traverseTuple fa fb fa fb bConstr Constr Constr traverseTuple pTypeOfA pTypeOfB OR simply add tuples for the plate definition just like Expr or Decl This also can be done for List Maybe etc and then the traverse functions can be replaced with and generic functions defined in this module can be used for these too Using multiplate In given program var function func arg1 arg2 return arg1 and its representation prog Prog prog Prog VarDecl Var Number FunDecl Var func Var arg1 Var arg2 Return Add Ref Ref arg1 to get the list of variables one has to define plate by updating another plate containing defaults for all types purePlate by modifying the field that correpsondes to Var data type Then create another plate where the order of traversal is set preorderFold and finally call gfoldFor with the plate we defined and then with the actual data type Without this module instead of gfoldFor one can only use foldFor which requires an extra argument projector which corresponds to the root datatype in this case it pProg because our program has Prog data type But gfoldFor gtraverseFor etc can be used with any data type because in the IsProjector instances we already defined what it projector is variablesPlate Plate Constant String variablesPlate preorderFold purePlate pVar Var str Constant str vars IsProjector Plate String vars gfoldFor variablesPlate vars Prog String vars foldFor pProg variablesPlate vars prog func arg1 arg2 All of this code is included in the source at the end of this file for easier copying Multiplate documentation http hackage.haskell.org package multiplate",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "Simplified",
        "normalized": "",
        "package": "multiplate-simplified",
        "partial": "Simplified",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#t:IsProjector",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "class",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#IsProjector",
        "fct-type": "class",
        "title": "IsProjector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "IsProjector",
        "normalized": "",
        "package": "multiplate-simplified",
        "partial": "Is Projector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gallFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant All) -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gallFor",
        "fct-type": "function",
        "title": "gallFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gallFor",
        "normalized": "a(Constant All)-\u003eb-\u003eBool",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant All)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:ganyFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant Any) -\u003e a -\u003e Bool",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#ganyFor",
        "fct-type": "function",
        "title": "ganyFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "ganyFor",
        "normalized": "a(Constant Any)-\u003eb-\u003eBool",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant Any)-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:getProjector",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p appl -\u003e a -\u003e Projector p a",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#getProjector",
        "fct-type": "method",
        "title": "getProjector"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "getProjector",
        "normalized": "a b-\u003ec-\u003eProjector a c",
        "package": "multiplate-simplified",
        "partial": "Projector",
        "signature": "p appl-\u003ea-\u003eProjector p a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gfirstFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant (First b)) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gfirstFor",
        "fct-type": "function",
        "title": "gfirstFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gfirstFor",
        "normalized": "a(Constant(First b))-\u003ec-\u003eMaybe b",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant(First b))-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gfoldFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant o) -\u003e a -\u003e o",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gfoldFor",
        "fct-type": "function",
        "title": "gfoldFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gfoldFor",
        "normalized": "a(Constant b)-\u003ec-\u003eb",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant o)-\u003ea-\u003eo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:glastFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant (Last b)) -\u003e a -\u003e Maybe b",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#glastFor",
        "fct-type": "function",
        "title": "glastFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "glastFor",
        "normalized": "a(Constant(Last b))-\u003ec-\u003eMaybe b",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant(Last b))-\u003ea-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gproductFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant (Product n)) -\u003e a -\u003e n",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gproductFor",
        "fct-type": "function",
        "title": "gproductFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gproductFor",
        "normalized": "a(Constant(Product b))-\u003ec-\u003eb",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant(Product n))-\u003ea-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gsumFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p (Constant (Sum n)) -\u003e a -\u003e n",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gsumFor",
        "fct-type": "function",
        "title": "gsumFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gsumFor",
        "normalized": "a(Constant(Sum b))-\u003ec-\u003eb",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p(Constant(Sum n))-\u003ea-\u003en"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gtraverseFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p Identity -\u003e a -\u003e a",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gtraverseFor",
        "fct-type": "function",
        "title": "gtraverseFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gtraverseFor",
        "normalized": "a Identity-\u003eb-\u003eb",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "p Identity-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gtraverseMFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "p m -\u003e a -\u003e m a",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gtraverseMFor",
        "fct-type": "function",
        "title": "gtraverseMFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gtraverseMFor",
        "normalized": "a b-\u003ec-\u003eb c",
        "package": "multiplate-simplified",
        "partial": "MFor",
        "signature": "p m-\u003ea-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/multiplate-simplified/docs/Data-Generics-Multiplate-Simplified.html#v:gunwrapFor",
      "description": {
        "fct-module": "Data.Generics.Multiplate.Simplified",
        "fct-package": "multiplate-simplified",
        "fct-signature": "(o -\u003e b) -\u003e p (Constant o) -\u003e a -\u003e b",
        "fct-source": "src/Data-Generics-Multiplate-Simplified.html#gunwrapFor",
        "fct-type": "function",
        "title": "gunwrapFor"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Generics Multiplate Simplified",
        "module": "Data.Generics.Multiplate.Simplified",
        "name": "gunwrapFor",
        "normalized": "(a-\u003eb)-\u003ec(Constant a)-\u003ed-\u003eb",
        "package": "multiplate-simplified",
        "partial": "For",
        "signature": "(o-\u003eb)-\u003ep(Constant o)-\u003ea-\u003eb"
      }
    }
  }
]