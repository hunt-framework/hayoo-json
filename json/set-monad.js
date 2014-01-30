[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library exports the \u003ccode\u003eSet\u003c/code\u003e abstract data type and\nset-manipulating functions. These functions behave exactly as their namesakes\nfrom the \u003ccode\u003eData.Set\u003c/code\u003e module of the \u003ccode\u003econtainers\u003c/code\u003e library. In addition, the\n\u003ccode\u003eset-monad\u003c/code\u003e library extends \u003ccode\u003eData.Set\u003c/code\u003e by providing \u003ccode\u003eFunctor\u003c/code\u003e, \u003ccode\u003eApplicative\u003c/code\u003e,\n\u003ccode\u003eAlternative\u003c/code\u003e, \u003ccode\u003eMonad\u003c/code\u003e, and \u003ccode\u003eMonadPlus\u003c/code\u003e instances for sets.\n\u003c/p\u003e\u003cp\u003eIn other words, you can use the \u003ccode\u003eset-monad\u003c/code\u003e library as a drop-in replacement\nfor the \u003ccode\u003eData.Set\u003c/code\u003e module of the \u003ccode\u003econtainers\u003c/code\u003e library and, in addition, you\nwill also get the aforementioned instances which are not available in the\n\u003ccode\u003econtainers\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eIt is not possible to directly implement instances for the aforementioned\nstandard Haskell type classes for the \u003ccode\u003eSet\u003c/code\u003e data type from the \u003ccode\u003econtainers\u003c/code\u003e\nlibrary. This is because the key operations \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003eunion\u003c/code\u003e, are constrained\nwith \u003ccode\u003eOrd\u003c/code\u003e as follows.\n\u003c/p\u003e\u003cpre\u003e map :: (Ord a, Ord b) =\u003e (a -\u003e b) -\u003e Set a -\u003e Set b\n union :: (Ord a) =\u003e Set a -\u003e Set a -\u003e Set a\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library provides the type class instances by wrapping the\nconstrained \u003ccode\u003eSet\u003c/code\u003e type into a data type that has unconstrained constructors\ncorresponding to monadic combinators. The data type constructors that\nrepresent monadic combinators are evaluated with a constrained run function.\nThis elevates the need to use the constraints in the instance definitions\n(this is what prevents a direct definition). The wrapping and unwrapping\nhappens internally in the library and does not affect its interface.\n\u003c/p\u003e\u003cp\u003eFor details, see the rather compact definitions of the \u003ccode\u003erun\u003c/code\u003e function and\ntype class instances. The left identity and associativity monad laws play a\ncrucial role in the definition of the \u003ccode\u003erun\u003c/code\u003e function. The rest of the code\nshould be self explanatory.\n\u003c/p\u003e\u003cp\u003eThe technique is not new. This library was inspired by [1]. To my knowledge,\nthe original, systematic presentation of the idea to represent monadic\ncombinators as data is given in [2]. There is also a Haskell library that\nprovides a generic infrastructure for the aforementioned wrapping and\nunwrapping [3].\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library is particularly useful for writing set-oriented code\nusing the do and/or monad comprehension notations. For example, the following\ndefinitions now type check.\n\u003c/p\u003e\u003cpre\u003e s1 :: Set (Int,Int)\n s1 = do a \u003c- fromList [1 .. 4]\n         b \u003c- fromList [1 .. 4]\n         return (a,b)\n\u003c/pre\u003e\u003cpre\u003e -- with -XMonadComprehensions\n s2 :: Set (Int,Int)\n s2 = [ (a,b) | (a,b) \u003c- s1, even a, even b ]\n\u003c/pre\u003e\u003cpre\u003e s3 :: Set Int\n s3 = fmap (+1) (fromList [1 .. 4])\n\u003c/pre\u003e\u003cp\u003eAs noted in [1], the implementation technique can be used for monadic\nlibraries and EDSLs with restricted types (compiled EDSLs often restrict the\ntypes that they can handle). Haskell's standard monad type class can be used\nfor restricted monad instances. There is no need to resort to GHC extensions\nthat rebind the standard monadic combinators with the library or EDSL specific\nones.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e1\u003ccode\u003e]\u003c/code\u003e CSDL Blog: The home of applied functional programming at KU. Monad\nReification in Haskell and the Sunroof Javascript compiler.\n\u003ca\u003ehttp://www.ittc.ku.edu/csdlblog/?p=88\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e2\u003ccode\u003e]\u003c/code\u003e Chuan-kai Lin. 2006. Programming monads operationally with Unimo. In\nProceedings of the eleventh ACM SIGPLAN International Conference on Functional\nProgramming (ICFP '06). ACM.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e3\u003ccode\u003e]\u003c/code\u003e Heinrich Apfelmus. The operational package.\n\u003ca\u003ehttp://hackage.haskell.org/package/operational\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "module",
        "fct-source": "src/Data-Set-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "The set-monad library exports the Set abstract data type and set-manipulating functions These functions behave exactly as their namesakes from the Data.Set module of the containers library In addition the set-monad library extends Data.Set by providing Functor Applicative Alternative Monad and MonadPlus instances for sets In other words you can use the set-monad library as drop-in replacement for the Data.Set module of the containers library and in addition you will also get the aforementioned instances which are not available in the containers package It is not possible to directly implement instances for the aforementioned standard Haskell type classes for the Set data type from the containers library This is because the key operations map and union are constrained with Ord as follows map Ord Ord Set Set union Ord Set Set Set The set-monad library provides the type class instances by wrapping the constrained Set type into data type that has unconstrained constructors corresponding to monadic combinators The data type constructors that represent monadic combinators are evaluated with constrained run function This elevates the need to use the constraints in the instance definitions this is what prevents direct definition The wrapping and unwrapping happens internally in the library and does not affect its interface For details see the rather compact definitions of the run function and type class instances The left identity and associativity monad laws play crucial role in the definition of the run function The rest of the code should be self explanatory The technique is not new This library was inspired by To my knowledge the original systematic presentation of the idea to represent monadic combinators as data is given in There is also Haskell library that provides generic infrastructure for the aforementioned wrapping and unwrapping The set-monad library is particularly useful for writing set-oriented code using the do and or monad comprehension notations For example the following definitions now type check s1 Set Int Int s1 do fromList fromList return with XMonadComprehensions s2 Set Int Int s2 s1 even even s3 Set Int s3 fmap fromList As noted in the implementation technique can be used for monadic libraries and EDSLs with restricted types compiled EDSLs often restrict the types that they can handle Haskell standard monad type class can be used for restricted monad instances There is no need to resort to GHC extensions that rebind the standard monadic combinators with the library or EDSL specific ones CSDL Blog The home of applied functional programming at KU Monad Reification in Haskell and the Sunroof Javascript compiler http www.ittc.ku.edu csdlblog Chuan-kai Lin Programming monads operationally with Unimo In Proceedings of the eleventh ACM SIGPLAN International Conference on Functional Programming ICFP ACM Heinrich Apfelmus The operational package http hackage.haskell.org package operational",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "set-monad",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#t:Set",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "data",
        "fct-source": "src/Data-Set-Monad.html#Set",
        "fct-type": "data",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "Set",
        "normalized": "",
        "package": "set-monad",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:-92--92-",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#%5C%5C",
        "fct-type": "function",
        "title": "(\\\\)"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "(\\\\) \\\\",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:delete",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "delete",
        "normalized": "a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteFindMax",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e (a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#deleteFindMax",
        "fct-type": "function",
        "title": "deleteFindMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "deleteFindMax",
        "normalized": "Set a-\u003e(a,Set a)",
        "package": "set-monad",
        "partial": "Find Max",
        "signature": "Set a-\u003e(a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteFindMin",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e (a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#deleteFindMin",
        "fct-type": "function",
        "title": "deleteFindMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "deleteFindMin",
        "normalized": "Set a-\u003e(a,Set a)",
        "package": "set-monad",
        "partial": "Find Min",
        "signature": "Set a-\u003e(a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteMax",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#deleteMax",
        "fct-type": "function",
        "title": "deleteMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "deleteMax",
        "normalized": "Set a-\u003eSet a",
        "package": "set-monad",
        "partial": "Max",
        "signature": "Set a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteMin",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#deleteMin",
        "fct-type": "function",
        "title": "deleteMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "deleteMin",
        "normalized": "Set a-\u003eSet a",
        "package": "set-monad",
        "partial": "Min",
        "signature": "Set a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:difference",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "difference",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:elems",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e [a]",
        "fct-source": "src/Data-Set-Monad.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "elems",
        "normalized": "Set a-\u003e[a]",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:empty",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a",
        "fct-source": "src/Data-Set-Monad.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "empty",
        "normalized": "",
        "package": "set-monad",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:filter",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e Bool) -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#filter",
        "fct-type": "function",
        "title": "filter"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "filter",
        "normalized": "(a-\u003eBool)-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:findMax",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e a",
        "fct-source": "src/Data-Set-Monad.html#findMax",
        "fct-type": "function",
        "title": "findMax"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "findMax",
        "normalized": "Set a-\u003ea",
        "package": "set-monad",
        "partial": "Max",
        "signature": "Set a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:findMin",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e a",
        "fct-source": "src/Data-Set-Monad.html#findMin",
        "fct-type": "function",
        "title": "findMin"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "findMin",
        "normalized": "Set a-\u003ea",
        "package": "set-monad",
        "partial": "Min",
        "signature": "Set a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fold",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-Set-Monad.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldl",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-Set-Monad.html#foldl",
        "fct-type": "function",
        "title": "foldl"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "foldl",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSet b-\u003ea",
        "package": "set-monad",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldl-39-",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-Set-Monad.html#foldl%27",
        "fct-type": "function",
        "title": "foldl'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "foldl'",
        "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSet b-\u003ea",
        "package": "set-monad",
        "partial": "",
        "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldr",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-Set-Monad.html#foldr",
        "fct-type": "function",
        "title": "foldr"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "foldr",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldr-39-",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
        "fct-source": "src/Data-Set-Monad.html#foldr%27",
        "fct-type": "function",
        "title": "foldr'"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "foldr'",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromAscList",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "[a] -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "fromAscList",
        "normalized": "[a]-\u003eSet a",
        "package": "set-monad",
        "partial": "Asc List",
        "signature": "[a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromDistinctAscList",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "[a] -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#fromDistinctAscList",
        "fct-type": "function",
        "title": "fromDistinctAscList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "fromDistinctAscList",
        "normalized": "[a]-\u003eSet a",
        "package": "set-monad",
        "partial": "Distinct Asc List",
        "signature": "[a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromList",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "[a] -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "fromList",
        "normalized": "[a]-\u003eSet a",
        "package": "set-monad",
        "partial": "List",
        "signature": "[a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:insert",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "insert",
        "normalized": "a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:intersection",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#intersection",
        "fct-type": "function",
        "title": "intersection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "intersection",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:isProperSubsetOf",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#isProperSubsetOf",
        "fct-type": "function",
        "title": "isProperSubsetOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "isProperSubsetOf",
        "normalized": "Set a-\u003eSet a-\u003eBool",
        "package": "set-monad",
        "partial": "Proper Subset Of",
        "signature": "Set a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:isSubsetOf",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#isSubsetOf",
        "fct-type": "function",
        "title": "isSubsetOf"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "isSubsetOf",
        "normalized": "Set a-\u003eSet a-\u003eBool",
        "package": "set-monad",
        "partial": "Subset Of",
        "signature": "Set a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:map",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
        "fct-source": "src/Data-Set-Monad.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:mapMonotonic",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
        "fct-source": "src/Data-Set-Monad.html#mapMonotonic",
        "fct-type": "function",
        "title": "mapMonotonic"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "mapMonotonic",
        "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
        "package": "set-monad",
        "partial": "Monotonic",
        "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:maxView",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Maybe (a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#maxView",
        "fct-type": "function",
        "title": "maxView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "maxView",
        "normalized": "Set a-\u003eMaybe(a,Set a)",
        "package": "set-monad",
        "partial": "View",
        "signature": "Set a-\u003eMaybe(a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:member",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "member",
        "normalized": "a-\u003eSet a-\u003eBool",
        "package": "set-monad",
        "partial": "",
        "signature": "a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:minView",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Maybe (a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#minView",
        "fct-type": "function",
        "title": "minView"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "minView",
        "normalized": "Set a-\u003eMaybe(a,Set a)",
        "package": "set-monad",
        "partial": "View",
        "signature": "Set a-\u003eMaybe(a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:notMember",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#notMember",
        "fct-type": "function",
        "title": "notMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "notMember",
        "normalized": "a-\u003eSet a-\u003eBool",
        "package": "set-monad",
        "partial": "Member",
        "signature": "a-\u003eSet a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:null",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "null",
        "normalized": "Set a-\u003eBool",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:partition",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "(a -\u003e Bool) -\u003e Set a -\u003e (Set a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#partition",
        "fct-type": "function",
        "title": "partition"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "partition",
        "normalized": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)",
        "package": "set-monad",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:showTree",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e String",
        "fct-source": "src/Data-Set-Monad.html#showTree",
        "fct-type": "function",
        "title": "showTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "showTree",
        "normalized": "Set a-\u003eString",
        "package": "set-monad",
        "partial": "Tree",
        "signature": "Set a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:showTreeWith",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Bool -\u003e Bool -\u003e Set a -\u003e String",
        "fct-source": "src/Data-Set-Monad.html#showTreeWith",
        "fct-type": "function",
        "title": "showTreeWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "showTreeWith",
        "normalized": "Bool-\u003eBool-\u003eSet a-\u003eString",
        "package": "set-monad",
        "partial": "Tree With",
        "signature": "Bool-\u003eBool-\u003eSet a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:singleton",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "singleton",
        "normalized": "a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:size",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Int",
        "fct-source": "src/Data-Set-Monad.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "size",
        "normalized": "Set a-\u003eInt",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:split",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e (Set a, Set a)",
        "fct-source": "src/Data-Set-Monad.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "split",
        "normalized": "a-\u003eSet a-\u003e(Set a,Set a)",
        "package": "set-monad",
        "partial": "",
        "signature": "a-\u003eSet a-\u003e(Set a,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:splitMember",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "a -\u003e Set a -\u003e (Set a, Bool, Set a)",
        "fct-source": "src/Data-Set-Monad.html#splitMember",
        "fct-type": "function",
        "title": "splitMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "splitMember",
        "normalized": "a-\u003eSet a-\u003e(Set a,Bool,Set a)",
        "package": "set-monad",
        "partial": "Member",
        "signature": "a-\u003eSet a-\u003e(Set a,Bool,Set a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:toAscList",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e [a]",
        "fct-source": "src/Data-Set-Monad.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "toAscList",
        "normalized": "Set a-\u003e[a]",
        "package": "set-monad",
        "partial": "Asc List",
        "signature": "Set a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:toList",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e [a]",
        "fct-source": "src/Data-Set-Monad.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "toList",
        "normalized": "Set a-\u003e[a]",
        "package": "set-monad",
        "partial": "List",
        "signature": "Set a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:union",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Set a -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "union",
        "normalized": "Set a-\u003eSet a-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eSet a-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:unions",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "[Set a] -\u003e Set a",
        "fct-source": "src/Data-Set-Monad.html#unions",
        "fct-type": "function",
        "title": "unions"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "unions",
        "normalized": "[Set a]-\u003eSet a",
        "package": "set-monad",
        "partial": "",
        "signature": "[Set a]-\u003eSet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:valid",
      "description": {
        "fct-module": "Data.Set.Monad",
        "fct-package": "set-monad",
        "fct-signature": "Set a -\u003e Bool",
        "fct-source": "src/Data-Set-Monad.html#valid",
        "fct-type": "function",
        "title": "valid"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Set Monad",
        "module": "Data.Set.Monad",
        "name": "valid",
        "normalized": "Set a-\u003eBool",
        "package": "set-monad",
        "partial": "",
        "signature": "Set a-\u003eBool"
      }
    }
  }
]