[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package aims to perform the fiddly details of instantiating induction\nschemas for algebraic data types. The library is parameterised over\nthe type of variables (\u003ccode\u003ev\u003c/code\u003e), constructors (\u003ccode\u003ec\u003c/code\u003e) and types (\u003ccode\u003et\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eLet's see how it looks if you instantiate all these three with String and want\nto do induction over natural numbers. First, one needs to create a type\nenvironment, a \u003ccode\u003e\u003ca\u003eTyEnv\u003c/a\u003e\u003c/code\u003e. For every type (we only have one), we need to list its\nconstructors. For each constructor, we need to list its arguments and whether\nthey are recursive or not.\n\u003c/p\u003e\u003cpre\u003etestEnv :: TyEnv String String\ntestEnv \"Nat\" = Just [ (\"zero\",[]) , (\"succ\",[Rec \"Nat\"]) ]\ntestEnv _ = Nothing\n\u003c/pre\u003e\u003cp\u003eNow, we can use the \u003ccode\u003e\u003ca\u003esubtermInduction\u003c/a\u003e\u003c/code\u003e to get induction hypotheses which are\njust subterms of the conclusion. Normally, you would translate the \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003es from\nthe proof \u003ccode\u003e\u003ca\u003eObligation\u003c/a\u003e\u003c/code\u003es to some other representation, but there is also\nlinearisation functions included (\u003ccode\u003e\u003ca\u003elinObligations\u003c/a\u003e\u003c/code\u003e, for instance.)\n\u003c/p\u003e\u003cpre\u003enatInd :: [String] -\u003e [Int] -\u003e IO ()\nnatInd vars coords = putStrLn\n    $ render\n    $ linObligations strStyle\n    $ unTag (\\(x :~ i) -\u003e x ++ show i)\n    $ subtermInduction testEnv typed_vars coords\n  where\n    typed_vars = zip vars (repeat \"Nat\")\n\u003c/pre\u003e\u003cp\u003eThe library will create fresh variables for you (called \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e variables),\nbut you need to remove them, using for instance \u003ccode\u003e\u003ca\u003eunTag\u003c/a\u003e\u003c/code\u003e. If you want to sync\nit with your own name supply, use \u003ccode\u003e\u003ca\u003eunTagM\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eunTagMapM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAn example invocation:\n\u003c/p\u003e\u003cpre\u003e*Mini\u003e natInd [\"X\"] [0]\nP(zero).\n! [X1 : Nat] : (P(X1) =\u003e P(succ(X1))).\n\u003c/pre\u003e\u003cp\u003eThis means to do induction on the zeroth coord (hence the \u003ccode\u003e0\u003c/code\u003e), and the variable\nis called \u003ca\u003eX\u003c/a\u003e. When using the library, it is up to you to translate the\nabstract \u003ccode\u003eP\u003c/code\u003e predicate to something meaningful.\n\u003c/p\u003e\u003cp\u003eWe can also do induction on several variables:\n\u003c/p\u003e\u003cpre\u003e*Mini\u003e natInd [\"X\",\"Y\"] [0,1]\nP(zero,zero).\n! [Y3 : Nat] : (P(zero,Y3) =\u003e P(zero,succ(Y3))).\n! [X1 : Nat] : (P(X1,zero) =\u003e P(succ(X1),zero)).\n! [X1 : Nat,Y3 : Nat] :\n    (P(X1,Y3) &\n    P(X1,succ(Y3)) &\n    P(succ(X1),Y3)\n     =\u003e P(succ(X1),succ(Y3))).\n\u003c/pre\u003e\u003cp\u003eIn the last step case, all proper subterms of \u003ccode\u003esucc(X1),succ(Y3)\u003c/code\u003e are used as\nhypotheses.\n\u003c/p\u003e\u003cp\u003eA bigger example is in \u003ccode\u003eexample/Example.hs\u003c/code\u003e in the distribution.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "module",
        "fct-source": "src/Induction-Structural.html",
        "fct-type": "module",
        "title": "Structural"
      },
      "index": {
        "description": "This package aims to perform the fiddly details of instantiating induction schemas for algebraic data types The library is parameterised over the type of variables constructors and types Let see how it looks if you instantiate all these three with String and want to do induction over natural numbers First one needs to create type environment TyEnv For every type we only have one we need to list its constructors For each constructor we need to list its arguments and whether they are recursive or not testEnv TyEnv String String testEnv Nat Just zero succ Rec Nat testEnv Nothing Now we can use the subtermInduction to get induction hypotheses which are just subterms of the conclusion Normally you would translate the Term from the proof Obligation to some other representation but there is also linearisation functions included linObligations for instance natInd String Int IO natInd vars coords putStrLn render linObligations strStyle unTag show subtermInduction testEnv typed vars coords where typed vars zip vars repeat Nat The library will create fresh variables for you called Tagged variables but you need to remove them using for instance unTag If you want to sync it with your own name supply use unTagM or unTagMapM An example invocation Mini natInd zero X1 Nat X1 succ X1 This means to do induction on the zeroth coord hence the and the variable is called When using the library it is up to you to translate the abstract predicate to something meaningful We can also do induction on several variables Mini natInd zero zero Y3 Nat zero Y3 zero succ Y3 X1 Nat X1 zero succ X1 zero X1 Nat Y3 Nat X1 Y3 X1 succ Y3 succ X1 Y3 succ X1 succ Y3 In the last step case all proper subterms of succ X1 succ Y3 are used as hypotheses bigger example is in example Example.hs in the distribution",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Structural",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Structural",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Arg",
      "description": {
        "fct-descr": "\u003cp\u003eAn argument to a constructor can be recursive (\u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e) or non-recursive\n (\u003ccode\u003e\u003ca\u003eNonRec\u003c/a\u003e\u003c/code\u003e).  Induction hypotheses will be asserted for \u003ccode\u003e\u003ca\u003eRec\u003c/a\u003e\u003c/code\u003e arguments.\n\u003c/p\u003e\u003cp\u003eFor instance, when doing induction on \u003ccode\u003e[a]\u003c/code\u003e, then \u003ccode\u003e(:)\u003c/code\u003e has two arguments,\n \u003ccode\u003eNonRec a\u003c/code\u003e and \u003ccode\u003eRec [a]\u003c/code\u003e. On the other hand, if doing induction on \u003ccode\u003e[Nat]\u003c/code\u003e,\n then \u003ccode\u003e(:)\u003c/code\u003e has \u003ccode\u003eNonRec Nat\u003c/code\u003e and \u003ccode\u003eRec [Nat]\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eData types can also be exponential. Consider\n\u003c/p\u003e\u003cpre\u003edata Ord = Zero | Succ Ord | Lim (Nat -\u003e Ord)\u003c/pre\u003e\u003cp\u003eHere, the \u003ccode\u003eLim\u003c/code\u003e constructor is exponential. If we describe types and\n constructors with strings, the constructors for this data type is:\n\u003c/p\u003e\u003cpre\u003e[ (\"Zero\",[])\n, (\"Succ\",[Rec \"Ord\"])\n, (\"Lim\",[Exp (\"Nat -\u003e Ord\") [\"Nat\"])\n]\n\u003c/pre\u003e\u003cp\u003eThe first argument to \u003ccode\u003e\u003ca\u003eExp\u003c/a\u003e\u003c/code\u003e is the type of the function, and the second\n argument are the arguments to the function.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "data",
        "fct-source": "src/Induction-Structural-Types.html#Arg",
        "fct-type": "data",
        "title": "Arg"
      },
      "index": {
        "description": "An argument to constructor can be recursive Rec or non-recursive NonRec Induction hypotheses will be asserted for Rec arguments For instance when doing induction on then has two arguments NonRec and Rec On the other hand if doing induction on Nat then has NonRec Nat and Rec Nat Data types can also be exponential Consider data Ord Zero Succ Ord Lim Nat Ord Here the Lim constructor is exponential If we describe types and constructors with strings the constructors for this data type is Zero Succ Rec Ord Lim Exp Nat Ord Nat The first argument to Exp is the type of the function and the second argument are the arguments to the function",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Arg",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Arg",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Hypothesis",
      "description": {
        "fct-descr": "\u003cp\u003eQuantifier lists are represented as tuples of variables and their type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e([(x,t1),(y,t2)],[tm1,tm2])\u003c/pre\u003e\u003cp\u003ecorresponds to the formula\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eforall (x : t1) (y : t2) . P(tm1,tm2)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "type",
        "fct-source": "src/Induction-Structural-Types.html#Hypothesis",
        "fct-type": "type",
        "title": "Hypothesis"
      },
      "index": {
        "description": "Quantifier lists are represented as tuples of variables and their type Example t1 t2 tm1 tm2 corresponds to the formula forall t1 t2 tm1 tm2",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Hypothesis",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Hypothesis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Obligation",
      "description": {
        "fct-descr": "\u003cp\u003eQuantifier lists are represented as tuples of variables and their type.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003eObligation\n    { implicit   = [(x,t1),(y,t2)]\n    , hypotheses = [([],[htm1,htm2])\n                   ,([(z,t3)],[htm3,htm4])\n                   ]\n    , conclusion = [tm1,tm2]\n    }\n\u003c/pre\u003e\u003cp\u003eCorresponds to the formula:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eforall (x : t1) (y : t2) . (P(htm1,htm2) & (forall (z : t3) . P(htm3,htm4)) =\u003e P(tm1,tm2))\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003eThe implicit variables (\u003cem\u003ex\u003c/em\u003e and \u003cem\u003ey\u003c/em\u003e) can be viewed as skolemised, and use\n these three formulae instead:\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eP(htm1,htm2).\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003eforall (z : t3) . P(htm3,htm4).\u003c/em\u003e\n\u003c/p\u003e\u003cp\u003e\u003cem\u003e~ P(tm1,tm2).\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "data",
        "fct-source": "src/Induction-Structural-Types.html#Obligation",
        "fct-type": "data",
        "title": "Obligation"
      },
      "index": {
        "description": "Quantifier lists are represented as tuples of variables and their type Example Obligation implicit t1 t2 hypotheses htm1 htm2 t3 htm3 htm4 conclusion tm1 tm2 Corresponds to the formula forall t1 t2 htm1 htm2 forall t3 htm3 htm4 tm1 tm2 The implicit variables and can be viewed as skolemised and use these three formulae instead htm1 htm2 forall t3 htm3 htm4 tm1 tm2",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Obligation",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Obligation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Predicate",
      "description": {
        "fct-descr": "\u003cp\u003eA list of terms.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003e[tm1,tm2]\u003c/code\u003e corresponds to the formula \u003cem\u003eP(tm1,tm2)\u003c/em\u003e\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "type",
        "fct-source": "src/Induction-Structural-Types.html#Predicate",
        "fct-type": "type",
        "title": "Predicate"
      },
      "index": {
        "description": "list of terms Example tm1 tm2 corresponds to the formula tm1 tm2",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Predicate",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Style",
      "description": {
        "fct-descr": "\u003cp\u003eFunctions for linearising constructors (\u003ccode\u003e\u003ca\u003elinc\u003c/a\u003e\u003c/code\u003e), variables (\u003ccode\u003e\u003ca\u003elinv\u003c/a\u003e\u003c/code\u003e) and\n types (\u003ccode\u003e\u003ca\u003elint\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "data",
        "fct-source": "src/Induction-Structural-Linearise.html#Style",
        "fct-type": "data",
        "title": "Style"
      },
      "index": {
        "description": "Functions for linearising constructors linc variables linv and types lint",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Style",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Tagged",
      "description": {
        "fct-descr": "\u003cp\u003eCheap way of introducing fresh variables. The \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e instances\n only uses the \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e tag.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "data",
        "fct-source": "src/Induction-Structural-Types.html#Tagged",
        "fct-type": "data",
        "title": "Tagged"
      },
      "index": {
        "description": "Cheap way of introducing fresh variables The Eq and Ord instances only uses the Integer tag",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Tagged",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Tagged",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:TaggedObligation",
      "description": {
        "fct-descr": "\u003cp\u003eObligations with tagged variables (see \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eunTag\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "type",
        "fct-source": "src/Induction-Structural-Types.html#TaggedObligation",
        "fct-type": "type",
        "title": "TaggedObligation"
      },
      "index": {
        "description": "Obligations with tagged variables see Tagged and unTag",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "TaggedObligation",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Tagged Obligation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:Term",
      "description": {
        "fct-descr": "\u003cp\u003eThe simple term language only includes variables, constructors and functions.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "data",
        "fct-source": "src/Induction-Structural-Types.html#Term",
        "fct-type": "data",
        "title": "Term"
      },
      "index": {
        "description": "The simple term language only includes variables constructors and functions",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Term",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Term",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#t:TyEnv",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a type, return either that you cannot do induction on is type\n (\u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e), or \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the constructors and a description of their arguments\n (see \u003ccode\u003e\u003ca\u003eArg\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe function \u003cem\u003eshould instantiate type variables\u003c/em\u003e. For instance, if you look\n up the type \u003ccode\u003e[Nat]\u003c/code\u003e, you should return the cons constructor with arguments\n \u003ccode\u003eNat\u003c/code\u003e and \u003ccode\u003e[Nat]\u003c/code\u003e (see \u003ccode\u003e\u003ca\u003eArg\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eExamples of types not possible to do induction on are function spaces and\n type variables. For these, return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "type",
        "fct-source": "src/Induction-Structural-Types.html#TyEnv",
        "fct-type": "type",
        "title": "TyEnv"
      },
      "index": {
        "description": "Given type return either that you cannot do induction on is type Nothing or Just the constructors and description of their arguments see Arg The function should instantiate type variables For instance if you look up the type Nat you should return the cons constructor with arguments Nat and Nat see Arg Examples of types not possible to do induction on are function spaces and type variables For these return Nothing",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "TyEnv",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Ty Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v::-126-",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "v :~ Integer",
        "fct-source": "src/Induction-Structural-Types.html#Tagged",
        "fct-type": "function",
        "title": ":~"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": ":~",
        "normalized": "",
        "package": "structural-induction",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Con",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Con c [Term c v]",
        "fct-source": "src/Induction-Structural-Types.html#Term",
        "fct-type": "function",
        "title": "Con"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Con",
        "normalized": "Con a[Term a b]",
        "package": "structural-induction",
        "partial": "Con",
        "signature": "Con c[Term c v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Exp",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Exp t [t]",
        "fct-source": "src/Induction-Structural-Types.html#Arg",
        "fct-type": "function",
        "title": "Exp"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Exp",
        "normalized": "Exp a[a]",
        "package": "structural-induction",
        "partial": "Exp",
        "signature": "Exp t[t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Fun",
      "description": {
        "fct-descr": "\u003cp\u003eInduction on exponential data types yield assumptions with functions\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Fun v [Term c v]",
        "fct-source": "src/Induction-Structural-Types.html#Term",
        "fct-type": "function",
        "title": "Fun"
      },
      "index": {
        "description": "Induction on exponential data types yield assumptions with functions",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Fun",
        "normalized": "Fun a[Term b a]",
        "package": "structural-induction",
        "partial": "Fun",
        "signature": "Fun v[Term c v]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:NonRec",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "NonRec t",
        "fct-source": "src/Induction-Structural-Types.html#Arg",
        "fct-type": "function",
        "title": "NonRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "NonRec",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Non Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Obligation",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Obligation",
        "fct-source": "src/Induction-Structural-Types.html#Obligation",
        "fct-type": "function",
        "title": "Obligation"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Obligation",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Obligation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Rec",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Rec t",
        "fct-source": "src/Induction-Structural-Types.html#Arg",
        "fct-type": "function",
        "title": "Rec"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Rec",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Style",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Style",
        "fct-source": "src/Induction-Structural-Linearise.html#Style",
        "fct-type": "function",
        "title": "Style"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Style",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:Var",
      "description": {
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Var v",
        "fct-source": "src/Induction-Structural-Types.html#Term",
        "fct-type": "function",
        "title": "Var"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "Var",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:caseAnalysis",
      "description": {
        "fct-descr": "\u003cp\u003eDoes case analysis on a list of typed variables.  This function is equal\n to removing all the hypotheses from \u003ccode\u003e\u003ca\u003esubtermInduction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "TyEnv c t -\u003e [(v, t)] -\u003e [Int] -\u003e [TaggedObligation c v t]",
        "fct-source": "src/Induction-Structural-Subterms.html#caseAnalysis",
        "fct-type": "function",
        "title": "caseAnalysis"
      },
      "index": {
        "description": "Does case analysis on list of typed variables This function is equal to removing all the hypotheses from subtermInduction",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "caseAnalysis",
        "normalized": "TyEnv a b-\u003e[(c,b)]-\u003e[Int]-\u003e[TaggedObligation a c b]",
        "package": "structural-induction",
        "partial": "Analysis",
        "signature": "TyEnv c t-\u003e[(v,t)]-\u003e[Int]-\u003e[TaggedObligation c v t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:conclusion",
      "description": {
        "fct-descr": "\u003cp\u003eThe induction conclusion\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Predicate c v",
        "fct-source": "src/Induction-Structural-Types.html#Obligation",
        "fct-type": "function",
        "title": "conclusion"
      },
      "index": {
        "description": "The induction conclusion",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "conclusion",
        "normalized": "",
        "package": "structural-induction",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:hypotheses",
      "description": {
        "fct-descr": "\u003cp\u003eHypotheses, with explicitly quantified variables\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "[Hypothesis c v t]",
        "fct-source": "src/Induction-Structural-Types.html#Obligation",
        "fct-type": "function",
        "title": "hypotheses"
      },
      "index": {
        "description": "Hypotheses with explicitly quantified variables",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "hypotheses",
        "normalized": "[Hypothesis a b c]",
        "package": "structural-induction",
        "partial": "",
        "signature": "[Hypothesis c v t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:implicit",
      "description": {
        "fct-descr": "\u003cp\u003eImplicitly quantified variables (skolemised)\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "[(v, t)]",
        "fct-source": "src/Induction-Structural-Types.html#Obligation",
        "fct-type": "function",
        "title": "implicit"
      },
      "index": {
        "description": "Implicitly quantified variables skolemised",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "implicit",
        "normalized": "[(a,b)]",
        "package": "structural-induction",
        "partial": "",
        "signature": "[(v,t)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:linObligation",
      "description": {
        "fct-descr": "\u003cp\u003eLinearises an \u003ccode\u003e\u003ca\u003eObligation\u003c/a\u003e\u003c/code\u003e using a given \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e. The output format is\n inspired by TPTP, but with typed quantifiers.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Style c v t -\u003e Obligation c v t -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#linObligation",
        "fct-type": "function",
        "title": "linObligation"
      },
      "index": {
        "description": "Linearises an Obligation using given Style The output format is inspired by TPTP but with typed quantifiers",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "linObligation",
        "normalized": "Style a b c-\u003eObligation a b c-\u003eDoc",
        "package": "structural-induction",
        "partial": "Obligation",
        "signature": "Style c v t-\u003eObligation c v t-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:linObligations",
      "description": {
        "fct-descr": "\u003cp\u003eLinearises a list of \u003ccode\u003e\u003ca\u003eObligation\u003c/a\u003e\u003c/code\u003e, using a given \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Style c v t -\u003e [Obligation c v t] -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#linObligations",
        "fct-type": "function",
        "title": "linObligations"
      },
      "index": {
        "description": "Linearises list of Obligation using given Style",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "linObligations",
        "normalized": "Style a b c-\u003e[Obligation a b c]-\u003eDoc",
        "package": "structural-induction",
        "partial": "Obligations",
        "signature": "Style c v t-\u003e[Obligation c v t]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:linTerm",
      "description": {
        "fct-descr": "\u003cp\u003eLinearises a \u003ccode\u003e\u003ca\u003eTerm\u003c/a\u003e\u003c/code\u003e using a given \u003ccode\u003e\u003ca\u003eStyle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Style c v t -\u003e Term c v -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#linTerm",
        "fct-type": "function",
        "title": "linTerm"
      },
      "index": {
        "description": "Linearises Term using given Style",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "linTerm",
        "normalized": "Style a b c-\u003eTerm a b-\u003eDoc",
        "package": "structural-induction",
        "partial": "Term",
        "signature": "Style c v t-\u003eTerm c v-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:linc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "c -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#Style",
        "fct-type": "function",
        "title": "linc"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "linc",
        "normalized": "a-\u003eDoc",
        "package": "structural-induction",
        "partial": "",
        "signature": "c-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:lint",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "t -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#Style",
        "fct-type": "function",
        "title": "lint"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "lint",
        "normalized": "a-\u003eDoc",
        "package": "structural-induction",
        "partial": "",
        "signature": "t-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:linv",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "v -\u003e Doc",
        "fct-source": "src/Induction-Structural-Linearise.html#Style",
        "fct-type": "function",
        "title": "linv"
      },
      "index": {
        "description": "",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "linv",
        "normalized": "a-\u003eDoc",
        "package": "structural-induction",
        "partial": "",
        "signature": "v-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:render",
      "description": {
        "fct-descr": "\u003cp\u003eRender the \u003ccode\u003eDoc\u003c/code\u003e to a String using the default \u003ccode\u003eStyle\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Doc -\u003e String",
        "fct-type": "function",
        "title": "render"
      },
      "index": {
        "description": "Render the Doc to String using the default Style",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "render",
        "normalized": "Doc-\u003eString",
        "package": "structural-induction",
        "partial": "",
        "signature": "Doc-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:strStyle",
      "description": {
        "fct-descr": "\u003cp\u003eAn example style where constructors, variables and types are represented as \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Style String String String",
        "fct-source": "src/Induction-Structural-Linearise.html#strStyle",
        "fct-type": "function",
        "title": "strStyle"
      },
      "index": {
        "description": "An example style where constructors variables and types are represented as String",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "strStyle",
        "normalized": "",
        "package": "structural-induction",
        "partial": "Style",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:subtermInduction",
      "description": {
        "fct-descr": "\u003cp\u003eSubterm induction: the induction hypotheses will contain the proper\n subterms of the conclusion.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "TyEnv c t -\u003e [(v, t)] -\u003e [Int] -\u003e [TaggedObligation c v t]",
        "fct-source": "src/Induction-Structural-Subterms.html#subtermInduction",
        "fct-type": "function",
        "title": "subtermInduction"
      },
      "index": {
        "description": "Subterm induction the induction hypotheses will contain the proper subterms of the conclusion",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "subtermInduction",
        "normalized": "TyEnv a b-\u003e[(c,b)]-\u003e[Int]-\u003e[TaggedObligation a c b]",
        "package": "structural-induction",
        "partial": "Induction",
        "signature": "TyEnv c t-\u003e[(v,t)]-\u003e[Int]-\u003e[TaggedObligation c v t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:tag",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e tag\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "Tagged v -\u003e Integer",
        "fct-source": "src/Induction-Structural-Types.html#tag",
        "fct-type": "function",
        "title": "tag"
      },
      "index": {
        "description": "The Integer tag",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "tag",
        "normalized": "Tagged a-\u003eInteger",
        "package": "structural-induction",
        "partial": "",
        "signature": "Tagged v-\u003eInteger"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eA document of height 1 containing a literal string.\n \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e satisfies the following laws:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e s \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e t = \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e (s\u003ccode\u003e\u003ca\u003e++\u003c/a\u003e\u003c/code\u003et)\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\" \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e x = x\u003c/code\u003e, if \u003ccode\u003ex\u003c/code\u003e non-empty\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe side condition on the last law is necessary because \u003ccode\u003e\u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e \"\"\u003c/code\u003e\n has height 1, while \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e has no height.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "String -\u003e Doc",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "document of height containing literal string text satisfies the following laws text text text text if non-empty The side condition on the last law is necessary because text has height while empty has no height",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "text",
        "normalized": "String-\u003eDoc",
        "package": "structural-induction",
        "partial": "",
        "signature": "String-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:unTag",
      "description": {
        "fct-descr": "\u003cp\u003eRemoving tagged (fresh) variables\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "(Tagged v -\u003e v') -\u003e [TaggedObligation c v t] -\u003e [Obligation c v' t]",
        "fct-source": "src/Induction-Structural-Types.html#unTag",
        "fct-type": "function",
        "title": "unTag"
      },
      "index": {
        "description": "Removing tagged fresh variables",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "unTag",
        "normalized": "(Tagged a-\u003eb)-\u003e[TaggedObligation c a d]-\u003e[Obligation c b d]",
        "package": "structural-induction",
        "partial": "Tag",
        "signature": "(Tagged v-\u003ev')-\u003e[TaggedObligation c v t]-\u003e[Obligation c v' t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:unTagM",
      "description": {
        "fct-descr": "\u003cp\u003eRemoving tagged (fresh) variables in a monad.\n The remove function is exectued at \u003cem\u003eevery occurence\u003c/em\u003e of a tagged variable.\n This is useful if you want to sync it with your own name supply monad.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "(Tagged v -\u003e m v') -\u003e [TaggedObligation c v t] -\u003e m [Obligation c v' t]",
        "fct-source": "src/Induction-Structural-Types.html#unTagM",
        "fct-type": "function",
        "title": "unTagM"
      },
      "index": {
        "description": "Removing tagged fresh variables in monad The remove function is exectued at every occurence of tagged variable This is useful if you want to sync it with your own name supply monad",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "unTagM",
        "normalized": "(Tagged a-\u003eb c)-\u003e[TaggedObligation d a e]-\u003eb[Obligation d c e]",
        "package": "structural-induction",
        "partial": "Tag",
        "signature": "(Tagged v-\u003em v')-\u003e[TaggedObligation c v t]-\u003em[Obligation c v' t]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/structural-induction/docs/Induction-Structural.html#v:unTagMapM",
      "description": {
        "fct-descr": "\u003cp\u003eRemove tagged (fresh) variables in a monad.\n The remove function is exectued \u003cem\u003eonly once\u003c/em\u003e for each tagged variable,\n and a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e of renamings is returned.\n This is useful if you want to sync it with your own name supply monad.\n\u003c/p\u003e",
        "fct-module": "Induction.Structural",
        "fct-package": "structural-induction",
        "fct-signature": "(Tagged v -\u003e m v') -\u003e [TaggedObligation c v t] -\u003e m ([Obligation c v' t], Map (Tagged v) v')",
        "fct-source": "src/Induction-Structural-Types.html#unTagMapM",
        "fct-type": "function",
        "title": "unTagMapM"
      },
      "index": {
        "description": "Remove tagged fresh variables in monad The remove function is exectued only once for each tagged variable and Map of renamings is returned This is useful if you want to sync it with your own name supply monad",
        "hierarchy": "Induction Structural",
        "module": "Induction.Structural",
        "name": "unTagMapM",
        "normalized": "(Tagged a-\u003eb c)-\u003e[TaggedObligation d a e]-\u003eb([Obligation d c e],Map(Tagged a)c)",
        "package": "structural-induction",
        "partial": "Tag Map",
        "signature": "(Tagged v-\u003em v')-\u003e[TaggedObligation c v t]-\u003em([Obligation c v' t],Map(Tagged v)v')"
      }
    }
  }
]