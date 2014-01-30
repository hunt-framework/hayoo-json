[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDynamic values with support for rank-1 polymorphic types.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eExamples of fromDynamic\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese examples correspond to the \u003ccode\u003e\u003ca\u003eisInstanceOf\u003c/a\u003e\u003c/code\u003e examples\n in \u003ca\u003eData.Rank1Typeable\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e do f \u003c- fromDynamic (toDynamic (even :: Int -\u003e Bool)) ; return $ (f :: Int -\u003e Int) 0 \n Left \"Cannot unify Int and Bool\"\n \n \u003e do f \u003c- fromDynamic (toDynamic (const 1 :: ANY -\u003e Int)) ; return $ (f :: Int -\u003e Int) 0\n Right 1\n \n \u003e do f \u003c- fromDynamic (toDynamic (unsafeCoerce :: ANY1 -\u003e ANY2)) ; return $ (f :: Int -\u003e Int) 0\n Right 0\n \n \u003e do f \u003c- fromDynamic (toDynamic (id :: ANY -\u003e ANY)) ; return $ (f :: Int -\u003e Bool) 0\n Left \"Cannot unify Bool and Int\"\n \n \u003e do f \u003c- fromDynamic (toDynamic (undefined :: ANY)) ; return $ (f :: Int -\u003e Int) 0\n Right *** Exception: Prelude.undefined\n \n \u003e do f \u003c- fromDynamic (toDynamic (id :: ANY -\u003e ANY)) ; return $ (f :: Int)\n Left \"Cannot unify Int and -\u003e\"\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eExamples of dynApply\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eThese examples correspond to the \u003ccode\u003e\u003ca\u003efunResultTy\u003c/a\u003e\u003c/code\u003e examples\n in \u003ca\u003eData.Rank1Typeable\u003c/a\u003e.\n\u003c/p\u003e\u003cpre\u003e \u003e do app \u003c- toDynamic (id :: ANY -\u003e ANY) `dynApply` toDynamic True ; f \u003c- fromDynamic app ; return $ (f :: Bool)\n Right True\n \n \u003e do app \u003c- toDynamic (const :: ANY -\u003e ANY1 -\u003e ANY) `dynApply` toDynamic True ; f \u003c- fromDynamic app ; return $ (f :: Int -\u003e Bool) 0\n Right True\n \n \u003e do app \u003c- toDynamic (($ True) :: (Bool -\u003e ANY) -\u003e ANY) `dynApply` toDynamic (id :: ANY -\u003e ANY) ; f \u003c- fromDynamic app ; return (f :: Bool)\n Right True\n \n \u003e app \u003c- toDynamic (const :: ANY -\u003e ANY1 -\u003e ANY) `dynApply` toDynamic (id :: ANY -\u003e ANY) ; f \u003c- fromDynamic app ; return $ (f :: Int -\u003e Bool -\u003e Bool) 0 True\n Right True\n \n \u003e do app \u003c- toDynamic ((\\f -\u003e f . f) :: (ANY -\u003e ANY) -\u003e ANY -\u003e ANY) `dynApply` toDynamic (even :: Int -\u003e Bool) ; f \u003c- fromDynamic app ; return (f :: ()) \n Left \"Cannot unify Int and Bool\"\n\u003c/pre\u003e\u003cdl\u003e\u003cdt\u003eUsing toDynamic\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cp\u003eWhen using polymorphic values you need to give an explicit type annotation:\n\u003c/p\u003e\u003cpre\u003e \u003e toDynamic id\n \n \u003cinteractive\u003e:46:1:\n     Ambiguous type variable `a0' in the constraint:\n       (Typeable a0) arising from a use of `toDynamic'\n     Probable fix: add a type signature that fixes these type variable(s)\n     In the expression: toDynamic id\n     In an equation for `it': it = toDynamic id\n\u003c/pre\u003e\u003cp\u003eversus\n\u003c/p\u003e\u003cpre\u003e \u003e toDynamic (id :: ANY -\u003e ANY)\n \u003c\u003cANY -\u003e ANY\u003e\u003e\n\u003c/pre\u003e\u003cp\u003eNote that these type annotation are checked by ghc like any other:\n\u003c/p\u003e\u003cpre\u003e \u003e toDynamic (id :: ANY -\u003e ANY1)\n \n \u003cinteractive\u003e:45:12:\n     Couldn't match expected type `V1' with actual type `V0'\n     Expected type: ANY -\u003e ANY1\n       Actual type: ANY -\u003e ANY\n     In the first argument of `toDynamic', namely `(id :: ANY -\u003e ANY1)'\n     In the expression: toDynamic (id :: ANY -\u003e ANY1)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "module",
        "fct-source": "src/Data-Rank1Dynamic.html",
        "fct-type": "module",
        "title": "Rank1Dynamic"
      },
      "index": {
        "description": "Dynamic values with support for rank-1 polymorphic types Examples of fromDynamic These examples correspond to the isInstanceOf examples in Data.Rank1Typeable do fromDynamic toDynamic even Int Bool return Int Int Left Cannot unify Int and Bool do fromDynamic toDynamic const ANY Int return Int Int Right do fromDynamic toDynamic unsafeCoerce ANY1 ANY2 return Int Int Right do fromDynamic toDynamic id ANY ANY return Int Bool Left Cannot unify Bool and Int do fromDynamic toDynamic undefined ANY return Int Int Right Exception Prelude.undefined do fromDynamic toDynamic id ANY ANY return Int Left Cannot unify Int and Examples of dynApply These examples correspond to the funResultTy examples in Data.Rank1Typeable do app toDynamic id ANY ANY dynApply toDynamic True fromDynamic app return Bool Right True do app toDynamic const ANY ANY1 ANY dynApply toDynamic True fromDynamic app return Int Bool Right True do app toDynamic True Bool ANY ANY dynApply toDynamic id ANY ANY fromDynamic app return Bool Right True app toDynamic const ANY ANY1 ANY dynApply toDynamic id ANY ANY fromDynamic app return Int Bool Bool True Right True do app toDynamic ANY ANY ANY ANY dynApply toDynamic even Int Bool fromDynamic app return Left Cannot unify Int and Bool Using toDynamic When using polymorphic values you need to give an explicit type annotation toDynamic id interactive Ambiguous type variable a0 in the constraint Typeable a0 arising from use of toDynamic Probable fix add type signature that fixes these type variable In the expression toDynamic id In an equation for it it toDynamic id versus toDynamic id ANY ANY ANY ANY Note that these type annotation are checked by ghc like any other toDynamic id ANY ANY1 interactive Couldn match expected type V1 with actual type V0 Expected type ANY ANY1 Actual type ANY ANY In the first argument of toDynamic namely id ANY ANY1 In the expression toDynamic id ANY ANY1",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "Rank1Dynamic",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Rank Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#t:Dynamic",
      "description": {
        "fct-descr": "\u003cp\u003eEncapsulate an object and its type\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "data",
        "fct-source": "src/Data-Rank1Dynamic.html#Dynamic",
        "fct-type": "data",
        "title": "Dynamic"
      },
      "index": {
        "description": "Encapsulate an object and its type",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "Dynamic",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Dynamic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#t:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisInstanceOf\u003c/a\u003e\u003c/code\u003e fails it returns a type error\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#TypeError",
        "fct-type": "type",
        "title": "TypeError"
      },
      "index": {
        "description": "If isInstanceOf fails it returns type error",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "TypeError",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#v:dynApply",
      "description": {
        "fct-descr": "\u003cp\u003eApply one dynamic value to another\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "Dynamic -\u003e Dynamic -\u003e Either TypeError Dynamic",
        "fct-source": "src/Data-Rank1Dynamic.html#dynApply",
        "fct-type": "function",
        "title": "dynApply"
      },
      "index": {
        "description": "Apply one dynamic value to another",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "dynApply",
        "normalized": "Dynamic-\u003eDynamic-\u003eEither TypeError Dynamic",
        "package": "rank1dynamic",
        "partial": "Apply",
        "signature": "Dynamic-\u003eDynamic-\u003eEither TypeError Dynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#v:dynTypeRep",
      "description": {
        "fct-descr": "\u003cp\u003eThe type representation of a dynamic value\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "Dynamic -\u003e TypeRep",
        "fct-source": "src/Data-Rank1Dynamic.html#dynTypeRep",
        "fct-type": "function",
        "title": "dynTypeRep"
      },
      "index": {
        "description": "The type representation of dynamic value",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "dynTypeRep",
        "normalized": "Dynamic-\u003eTypeRep",
        "package": "rank1dynamic",
        "partial": "Type Rep",
        "signature": "Dynamic-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#v:fromDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eEliminate a dynamic value\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "Dynamic -\u003e Either TypeError a",
        "fct-source": "src/Data-Rank1Dynamic.html#fromDynamic",
        "fct-type": "function",
        "title": "fromDynamic"
      },
      "index": {
        "description": "Eliminate dynamic value",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "fromDynamic",
        "normalized": "Dynamic-\u003eEither TypeError a",
        "package": "rank1dynamic",
        "partial": "Dynamic",
        "signature": "Dynamic-\u003eEither TypeError a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Dynamic.html#v:toDynamic",
      "description": {
        "fct-descr": "\u003cp\u003eIntroduce a dynamic value \n\u003c/p\u003e",
        "fct-module": "Data.Rank1Dynamic",
        "fct-package": "rank1dynamic",
        "fct-signature": "a -\u003e Dynamic",
        "fct-source": "src/Data-Rank1Dynamic.html#toDynamic",
        "fct-type": "function",
        "title": "toDynamic"
      },
      "index": {
        "description": "Introduce dynamic value",
        "hierarchy": "Data Rank1Dynamic",
        "module": "Data.Rank1Dynamic",
        "name": "toDynamic",
        "normalized": "a-\u003eDynamic",
        "package": "rank1dynamic",
        "partial": "Dynamic",
        "signature": "a-\u003eDynamic"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRuntime type representation of terms with support for rank-1 polymorphic\n types with type variables of kind *.\n\u003c/p\u003e\u003cp\u003eThe essence of this module is that we use the standard \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e \n representation of \u003ca\u003eData.Typeable\u003c/a\u003e but we introduce a special (empty) data\n type \u003ccode\u003e\u003ca\u003eTypVar\u003c/a\u003e\u003c/code\u003e which represents type variables. \u003ccode\u003e\u003ca\u003eTypVar\u003c/a\u003e\u003c/code\u003e is indexed by an\n arbitrary other data type, giving you an unbounded number of type variables;\n for convenience, we define \u003ccode\u003e\u003ca\u003eANY\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eANY1\u003c/a\u003e\u003c/code\u003e, .., \u003ccode\u003e\u003ca\u003eANY9\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eExamples of isInstanceOf\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e -- We CANNOT use a term of type 'Int -\u003e Bool' as 'Int -\u003e Int'\n \u003e typeOf (undefined :: Int -\u003e Int) `isInstanceOf` typeOf (undefined :: Int -\u003e Bool)\n Left \"Cannot unify Int and Bool\"\n \n -- We CAN use a term of type 'forall a. a -\u003e Int' as 'Int -\u003e Int'\n \u003e typeOf (undefined :: Int -\u003e Int) `isInstanceOf` typeOf (undefined :: ANY -\u003e Int)\n Right ()\n \n -- We CAN use a term of type 'forall a b. a -\u003e b' as 'forall a. a -\u003e a'\n \u003e typeOf (undefined :: ANY -\u003e ANY) `isInstanceOf` typeOf (undefined :: ANY -\u003e ANY1)\n Right ()\n \n -- We CANNOT use a term of type 'forall a. a -\u003e a' as 'forall a b. a -\u003e b'\n \u003e typeOf (undefined :: ANY -\u003e ANY1) `isInstanceOf` typeOf (undefined :: ANY -\u003e ANY)\n Left \"Cannot unify Succ and Zero\"\n \n -- We CAN use a term of type 'forall a. a' as 'forall a. a -\u003e a'\n \u003e typeOf (undefined :: ANY -\u003e ANY) `isInstanceOf` typeOf (undefined :: ANY)\n Right ()\n \n -- We CANNOT use a term of type 'forall a. a -\u003e a' as 'forall a. a'\n \u003e typeOf (undefined :: ANY) `isInstanceOf` typeOf (undefined :: ANY -\u003e ANY)\n Left \"Cannot unify Skolem and -\u003e\"\n\u003c/pre\u003e\u003cp\u003e(Admittedly, the quality of the type errors could be improved.)\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eExamples of funResultTy\u003c/dt\u003e\u003cdd\u003e\n\u003c/dd\u003e\u003c/dl\u003e\u003cpre\u003e -- Apply fn of type (forall a. a -\u003e a) to arg of type Bool gives Bool \n \u003e funResultTy (typeOf (undefined :: ANY -\u003e ANY)) (typeOf (undefined :: Bool))\n Right Bool\n \n -- Apply fn of type (forall a b. a -\u003e b -\u003e a) to arg of type Bool gives forall a. a -\u003e Bool\n \u003e funResultTy (typeOf (undefined :: ANY -\u003e ANY1 -\u003e ANY)) (typeOf (undefined :: Bool))\n Right (ANY -\u003e Bool) -- forall a. a -\u003e Bool\n \n -- Apply fn of type (forall a. (Bool -\u003e a) -\u003e a) to argument of type (forall a. a -\u003e a) gives Bool\n \u003e funResultTy (typeOf (undefined :: (Bool -\u003e ANY) -\u003e ANY)) (typeOf (undefined :: ANY -\u003e ANY))\n Right Bool\n\n -- Apply fn of type (forall a b. a -\u003e b -\u003e a) to arg of type (forall a. a -\u003e a) gives (forall a b. a -\u003e b -\u003e b)\n \u003e funResultTy (typeOf (undefined :: ANY -\u003e ANY1 -\u003e ANY)) (typeOf (undefined :: ANY1 -\u003e ANY1))\n Right (ANY -\u003e ANY1 -\u003e ANY1)\n\n -- Cannot apply function of type (forall a. (a -\u003e a) -\u003e a -\u003e a) to arg of type (Int -\u003e Bool)\n \u003e funResultTy (typeOf (undefined :: (ANY -\u003e ANY) -\u003e (ANY -\u003e ANY))) (typeOf (undefined :: Int -\u003e Bool))\n Left \"Cannot unify Int and Bool\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "module",
        "fct-source": "src/Data-Rank1Typeable.html",
        "fct-type": "module",
        "title": "Rank1Typeable"
      },
      "index": {
        "description": "Runtime type representation of terms with support for rank-1 polymorphic types with type variables of kind The essence of this module is that we use the standard Typeable representation of Data.Typeable but we introduce special empty data type TypVar which represents type variables TypVar is indexed by an arbitrary other data type giving you an unbounded number of type variables for convenience we define ANY ANY1 ANY9 Examples of isInstanceOf We CANNOT use term of type Int Bool as Int Int typeOf undefined Int Int isInstanceOf typeOf undefined Int Bool Left Cannot unify Int and Bool We CAN use term of type forall Int as Int Int typeOf undefined Int Int isInstanceOf typeOf undefined ANY Int Right We CAN use term of type forall as forall typeOf undefined ANY ANY isInstanceOf typeOf undefined ANY ANY1 Right We CANNOT use term of type forall as forall typeOf undefined ANY ANY1 isInstanceOf typeOf undefined ANY ANY Left Cannot unify Succ and Zero We CAN use term of type forall as forall typeOf undefined ANY ANY isInstanceOf typeOf undefined ANY Right We CANNOT use term of type forall as forall typeOf undefined ANY isInstanceOf typeOf undefined ANY ANY Left Cannot unify Skolem and Admittedly the quality of the type errors could be improved Examples of funResultTy Apply fn of type forall to arg of type Bool gives Bool funResultTy typeOf undefined ANY ANY typeOf undefined Bool Right Bool Apply fn of type forall to arg of type Bool gives forall Bool funResultTy typeOf undefined ANY ANY1 ANY typeOf undefined Bool Right ANY Bool forall Bool Apply fn of type forall Bool to argument of type forall gives Bool funResultTy typeOf undefined Bool ANY ANY typeOf undefined ANY ANY Right Bool Apply fn of type forall to arg of type forall gives forall funResultTy typeOf undefined ANY ANY1 ANY typeOf undefined ANY1 ANY1 Right ANY ANY1 ANY1 Cannot apply function of type forall to arg of type Int Bool funResultTy typeOf undefined ANY ANY ANY ANY typeOf undefined Int Bool Left Cannot unify Int and Bool",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "Rank1Typeable",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Rank Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY",
        "fct-type": "type",
        "title": "ANY"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY1",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY1",
        "fct-type": "type",
        "title": "ANY1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY1",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY2",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY2",
        "fct-type": "type",
        "title": "ANY2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY2",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY3",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY3",
        "fct-type": "type",
        "title": "ANY3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY3",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY4",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY4",
        "fct-type": "type",
        "title": "ANY4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY4",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY5",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY5",
        "fct-type": "type",
        "title": "ANY5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY5",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY6",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY6",
        "fct-type": "type",
        "title": "ANY6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY6",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY7",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY7",
        "fct-type": "type",
        "title": "ANY7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY7",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY8",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY8",
        "fct-type": "type",
        "title": "ANY8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY8",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:ANY9",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#ANY9",
        "fct-type": "type",
        "title": "ANY9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "ANY9",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "ANY",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:Succ",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "data",
        "fct-source": "src/Data-Rank1Typeable.html#Succ",
        "fct-type": "data",
        "title": "Succ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "Succ",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:TypVar",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "data",
        "fct-source": "src/Data-Rank1Typeable.html#TypVar",
        "fct-type": "data",
        "title": "TypVar"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "TypVar",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Typ Var",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:TypeError",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eisInstanceOf\u003c/a\u003e\u003c/code\u003e fails it returns a type error\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#TypeError",
        "fct-type": "type",
        "title": "TypeError"
      },
      "index": {
        "description": "If isInstanceOf fails it returns type error",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "TypeError",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Type Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:TypeRep",
      "description": {
        "fct-descr": "\u003cp\u003eDynamic type representation with support for rank-1 types\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "data",
        "fct-source": "src/Data-Rank1Typeable.html#TypeRep",
        "fct-type": "data",
        "title": "TypeRep"
      },
      "index": {
        "description": "Dynamic type representation with support for rank-1 types",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "TypeRep",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Type Rep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:Typeable",
      "description": {
        "fct-descr": "\u003cp\u003eThe class \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e allows a concrete representation of a type to\n be calculated.\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "Typeable"
      },
      "index": {
        "description": "The class Typeable allows concrete representation of type to be calculated",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "Typeable",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Typeable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V0",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V0",
        "fct-type": "type",
        "title": "V0"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V0",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V1",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V1",
        "fct-type": "type",
        "title": "V1"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V1",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V2",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V2",
        "fct-type": "type",
        "title": "V2"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V2",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V3",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V3",
        "fct-type": "type",
        "title": "V3"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V3",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V4",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V4",
        "fct-type": "type",
        "title": "V4"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V4",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V5",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V5",
        "fct-type": "type",
        "title": "V5"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V5",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V6",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V6",
        "fct-type": "type",
        "title": "V6"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V6",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V7",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V7",
        "fct-type": "type",
        "title": "V7"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V7",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V8",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V8",
        "fct-type": "type",
        "title": "V8"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V8",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:V9",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "type",
        "fct-source": "src/Data-Rank1Typeable.html#V9",
        "fct-type": "type",
        "title": "V9"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "V9",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#t:Zero",
      "description": {
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "data",
        "fct-source": "src/Data-Rank1Typeable.html#Zero",
        "fct-type": "data",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "Zero",
        "normalized": "",
        "package": "rank1dynamic",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:funResultTy",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003efunResultTy t1 t2\u003c/code\u003e is the type of the result when applying a function\n of type \u003ccode\u003et1\u003c/code\u003e to an argument of type \u003ccode\u003et2\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "TypeRep -\u003e TypeRep -\u003e Either TypeError TypeRep",
        "fct-source": "src/Data-Rank1Typeable.html#funResultTy",
        "fct-type": "function",
        "title": "funResultTy"
      },
      "index": {
        "description": "funResultTy t1 t2 is the type of the result when applying function of type t1 to an argument of type t2",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "funResultTy",
        "normalized": "TypeRep-\u003eTypeRep-\u003eEither TypeError TypeRep",
        "package": "rank1dynamic",
        "partial": "Result Ty",
        "signature": "TypeRep-\u003eTypeRep-\u003eEither TypeError TypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:isInstanceOf",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003et1 \u003ccode\u003e\u003ca\u003eisInstanceOf\u003c/a\u003e\u003c/code\u003e t2\u003c/code\u003e checks if \u003ccode\u003et1\u003c/code\u003e is an instance of \u003ccode\u003et2\u003c/code\u003e \n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "TypeRep -\u003e TypeRep -\u003e Either TypeError ()",
        "fct-source": "src/Data-Rank1Typeable.html#isInstanceOf",
        "fct-type": "function",
        "title": "isInstanceOf"
      },
      "index": {
        "description": "t1 isInstanceOf t2 checks if t1 is an instance of t2",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "isInstanceOf",
        "normalized": "TypeRep-\u003eTypeRep-\u003eEither TypeError()",
        "package": "rank1dynamic",
        "partial": "Instance Of",
        "signature": "TypeRep-\u003eTypeRep-\u003eEither TypeError()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:mkTyConApp",
      "description": {
        "fct-descr": "\u003cp\u003eInverse of \u003ccode\u003e\u003ca\u003esplitTyConApp\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "TyCon -\u003e [TypeRep] -\u003e TypeRep",
        "fct-source": "src/Data-Rank1Typeable.html#mkTyConApp",
        "fct-type": "function",
        "title": "mkTyConApp"
      },
      "index": {
        "description": "Inverse of splitTyConApp",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "mkTyConApp",
        "normalized": "TyCon-\u003e[TypeRep]-\u003eTypeRep",
        "package": "rank1dynamic",
        "partial": "Ty Con App",
        "signature": "TyCon-\u003e[TypeRep]-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:splitTyConApp",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a type representation into the application of\n a type constructor and its argument\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "TypeRep -\u003e (TyCon, [TypeRep])",
        "fct-source": "src/Data-Rank1Typeable.html#splitTyConApp",
        "fct-type": "function",
        "title": "splitTyConApp"
      },
      "index": {
        "description": "Split type representation into the application of type constructor and its argument",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "splitTyConApp",
        "normalized": "TypeRep-\u003e(TyCon,[TypeRep])",
        "package": "rank1dynamic",
        "partial": "Ty Con App",
        "signature": "TypeRep-\u003e(TyCon,[TypeRep])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:typeOf",
      "description": {
        "fct-descr": "\u003cp\u003eThe type representation of any \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e term\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "a -\u003e TypeRep",
        "fct-source": "src/Data-Rank1Typeable.html#typeOf",
        "fct-type": "function",
        "title": "typeOf"
      },
      "index": {
        "description": "The type representation of any Typeable term",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "typeOf",
        "normalized": "a-\u003eTypeRep",
        "package": "rank1dynamic",
        "partial": "Of",
        "signature": "a-\u003eTypeRep"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/rank1dynamic/docs/Data-Rank1Typeable.html#v:underlyingTypeRep",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the underlying standard (\u003ca\u003eData.Typeable\u003c/a\u003e) type representation\n\u003c/p\u003e",
        "fct-module": "Data.Rank1Typeable",
        "fct-package": "rank1dynamic",
        "fct-signature": "TypeRep -\u003e TypeRep",
        "fct-source": "src/Data-Rank1Typeable.html#underlyingTypeRep",
        "fct-type": "function",
        "title": "underlyingTypeRep"
      },
      "index": {
        "description": "Return the underlying standard Data.Typeable type representation",
        "hierarchy": "Data Rank1Typeable",
        "module": "Data.Rank1Typeable",
        "name": "underlyingTypeRep",
        "normalized": "TypeRep-\u003eTypeRep",
        "package": "rank1dynamic",
        "partial": "Type Rep",
        "signature": "TypeRep-\u003eTypeRep"
      }
    }
  }
]