[
  {
    "cmd": "delete-by-query",
    "query": {
      "contexts": [
        "package"
      ],
      "query": {
        "op": "case",
        "type": "word",
        "word": "set-monad"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library exports the \u003ccode\u003eSet\u003c/code\u003e abstract data type and\nset-manipulating functions. These functions behave exactly as their namesakes\nfrom the \u003ccode\u003eData.Set\u003c/code\u003e module of the \u003ccode\u003econtainers\u003c/code\u003e library. In addition, the\n\u003ccode\u003eset-monad\u003c/code\u003e library extends \u003ccode\u003eData.Set\u003c/code\u003e by providing \u003ccode\u003eFunctor\u003c/code\u003e, \u003ccode\u003eApplicative\u003c/code\u003e,\n\u003ccode\u003eAlternative\u003c/code\u003e, \u003ccode\u003eMonad\u003c/code\u003e, and \u003ccode\u003eMonadPlus\u003c/code\u003e instances for sets.\n\u003c/p\u003e\u003cp\u003eIn other words, you can use the \u003ccode\u003eset-monad\u003c/code\u003e library as a drop-in replacement\nfor the \u003ccode\u003eData.Set\u003c/code\u003e module of the \u003ccode\u003econtainers\u003c/code\u003e library and, in addition, you\nwill also get the aforementioned instances which are not available in the\n\u003ccode\u003econtainers\u003c/code\u003e package.\n\u003c/p\u003e\u003cp\u003eIt is not possible to directly implement instances for the aforementioned\nstandard Haskell type classes for the \u003ccode\u003eSet\u003c/code\u003e data type from the \u003ccode\u003econtainers\u003c/code\u003e\nlibrary. This is because the key operations \u003ccode\u003emap\u003c/code\u003e and \u003ccode\u003eunion\u003c/code\u003e, are constrained\nwith \u003ccode\u003eOrd\u003c/code\u003e as follows.\n\u003c/p\u003e\u003cpre\u003e map :: (Ord a, Ord b) =\u003e (a -\u003e b) -\u003e Set a -\u003e Set b\n union :: (Ord a) =\u003e Set a -\u003e Set a -\u003e Set a\n\u003c/pre\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library provides the type class instances by wrapping the\nconstrained \u003ccode\u003eSet\u003c/code\u003e type into a data type that has unconstrained constructors\ncorresponding to monadic combinators. The data type constructors that\nrepresent monadic combinators are evaluated with a constrained run function.\nThis elevates the need to use the constraints in the instance definitions\n(this is what prevents a direct definition). The wrapping and unwrapping\nhappens internally in the library and does not affect its interface.\n\u003c/p\u003e\u003cp\u003eFor details, see the rather compact definitions of the \u003ccode\u003erun\u003c/code\u003e function and\ntype class instances. The left identity and associativity monad laws play a\ncrucial role in the definition of the \u003ccode\u003erun\u003c/code\u003e function. The rest of the code\nshould be self explanatory.\n\u003c/p\u003e\u003cp\u003eThe technique is not new. This library was inspired by [1]. To my knowledge,\nthe original, systematic presentation of the idea to represent monadic\ncombinators as data is given in [2]. There is also a Haskell library that\nprovides a generic infrastructure for the aforementioned wrapping and\nunwrapping [3].\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003eset-monad\u003c/code\u003e library is particularly useful for writing set-oriented code\nusing the do and/or monad comprehension notations. For example, the following\ndefinitions now type check.\n\u003c/p\u003e\u003cpre\u003e s1 :: Set (Int,Int)\n s1 = do a \u003c- fromList [1 .. 4]\n         b \u003c- fromList [1 .. 4]\n         return (a,b)\n\u003c/pre\u003e\u003cpre\u003e -- with -XMonadComprehensions\n s2 :: Set (Int,Int)\n s2 = [ (a,b) | (a,b) \u003c- s1, even a, even b ]\n\u003c/pre\u003e\u003cpre\u003e s3 :: Set Int\n s3 = fmap (+1) (fromList [1 .. 4])\n\u003c/pre\u003e\u003cp\u003eAs noted in [1], the implementation technique can be used for monadic\nlibraries and EDSLs with restricted types (compiled EDSLs often restrict the\ntypes that they can handle). Haskell's standard monad type class can be used\nfor restricted monad instances. There is no need to resort to GHC extensions\nthat rebind the standard monadic combinators with the library or EDSL specific\nones.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e1\u003ccode\u003e]\u003c/code\u003e CSDL Blog: The home of applied functional programming at KU. Monad\nReification in Haskell and the Sunroof Javascript compiler.\n\u003ca\u003ehttp://www.ittc.ku.edu/csdlblog/?p=88\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e2\u003ccode\u003e]\u003c/code\u003e Chuan-kai Lin. 2006. Programming monads operationally with Unimo. In\nProceedings of the eleventh ACM SIGPLAN International Conference on Functional\nProgramming (ICFP '06). ACM.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e[\u003c/code\u003e3\u003ccode\u003e]\u003c/code\u003e Heinrich Apfelmus. The operational package.\n\u003ca\u003ehttp://hackage.haskell.org/package/operational\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Set.Monad",
          "name": "Monad",
          "package": "set-monad",
          "source": "src/Data-Set-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "The set-monad library exports the Set abstract data type and set-manipulating functions These functions behave exactly as their namesakes from the Data.Set module of the containers library In addition the set-monad library extends Data.Set by providing Functor Applicative Alternative Monad and MonadPlus instances for sets In other words you can use the set-monad library as drop-in replacement for the Data.Set module of the containers library and in addition you will also get the aforementioned instances which are not available in the containers package It is not possible to directly implement instances for the aforementioned standard Haskell type classes for the Set data type from the containers library This is because the key operations map and union are constrained with Ord as follows map Ord Ord Set Set union Ord Set Set Set The set-monad library provides the type class instances by wrapping the constrained Set type into data type that has unconstrained constructors corresponding to monadic combinators The data type constructors that represent monadic combinators are evaluated with constrained run function This elevates the need to use the constraints in the instance definitions this is what prevents direct definition The wrapping and unwrapping happens internally in the library and does not affect its interface For details see the rather compact definitions of the run function and type class instances The left identity and associativity monad laws play crucial role in the definition of the run function The rest of the code should be self explanatory The technique is not new This library was inspired by To my knowledge the original systematic presentation of the idea to represent monadic combinators as data is given in There is also Haskell library that provides generic infrastructure for the aforementioned wrapping and unwrapping The set-monad library is particularly useful for writing set-oriented code using the do and or monad comprehension notations For example the following definitions now type check s1 Set Int Int s1 do fromList fromList return with XMonadComprehensions s2 Set Int Int s2 s1 even even s3 Set Int s3 fmap fromList As noted in the implementation technique can be used for monadic libraries and EDSLs with restricted types compiled EDSLs often restrict the types that they can handle Haskell standard monad type class can be used for restricted monad instances There is no need to resort to GHC extensions that rebind the standard monadic combinators with the library or EDSL specific ones CSDL Blog The home of applied functional programming at KU Monad Reification in Haskell and the Sunroof Javascript compiler http www.ittc.ku.edu csdlblog Chuan-kai Lin Programming monads operationally with Unimo In Proceedings of the eleventh ACM SIGPLAN International Conference on Functional Programming ICFP ACM Heinrich Apfelmus The operational package http hackage.haskell.org package operational",
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "Monad",
          "package": "set-monad",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "Set",
          "package": "set-monad",
          "source": "src/Data-Set-Monad.html#Set",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "Set",
          "package": "set-monad",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "(\\\\)",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "(\\\\) \\\\",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "delete",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "delete",
          "normalized": "a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "deleteFindMax",
          "package": "set-monad",
          "signature": "Set a -\u003e (a, Set a)",
          "source": "src/Data-Set-Monad.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "deleteFindMax",
          "normalized": "Set a-\u003e(a,Set a)",
          "package": "set-monad",
          "partial": "Find Max",
          "signature": "Set a-\u003e(a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "deleteFindMin",
          "package": "set-monad",
          "signature": "Set a -\u003e (a, Set a)",
          "source": "src/Data-Set-Monad.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "deleteFindMin",
          "normalized": "Set a-\u003e(a,Set a)",
          "package": "set-monad",
          "partial": "Find Min",
          "signature": "Set a-\u003e(a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "deleteMax",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#deleteMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "deleteMax",
          "normalized": "Set a-\u003eSet a",
          "package": "set-monad",
          "partial": "Max",
          "signature": "Set a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "deleteMin",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#deleteMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "deleteMin",
          "normalized": "Set a-\u003eSet a",
          "package": "set-monad",
          "partial": "Min",
          "signature": "Set a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "difference",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#difference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "difference",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "elems",
          "package": "set-monad",
          "signature": "Set a -\u003e [a]",
          "source": "src/Data-Set-Monad.html#elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "elems",
          "normalized": "Set a-\u003e[a]",
          "package": "set-monad",
          "signature": "Set a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "empty",
          "package": "set-monad",
          "signature": "Set a",
          "source": "src/Data-Set-Monad.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "empty",
          "package": "set-monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "filter",
          "package": "set-monad",
          "signature": "(a -\u003e Bool) -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "(a-\u003eBool)-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "findMax",
          "package": "set-monad",
          "signature": "Set a -\u003e a",
          "source": "src/Data-Set-Monad.html#findMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "findMax",
          "normalized": "Set a-\u003ea",
          "package": "set-monad",
          "partial": "Max",
          "signature": "Set a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "findMin",
          "package": "set-monad",
          "signature": "Set a -\u003e a",
          "source": "src/Data-Set-Monad.html#findMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "findMin",
          "normalized": "Set a-\u003ea",
          "package": "set-monad",
          "partial": "Min",
          "signature": "Set a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "fold",
          "package": "set-monad",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
          "source": "src/Data-Set-Monad.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "package": "set-monad",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "foldl",
          "package": "set-monad",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Set a -\u003e b",
          "source": "src/Data-Set-Monad.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSet b-\u003ea",
          "package": "set-monad",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "foldl'",
          "package": "set-monad",
          "signature": "(b -\u003e a -\u003e b) -\u003e b -\u003e Set a -\u003e b",
          "source": "src/Data-Set-Monad.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSet b-\u003ea",
          "package": "set-monad",
          "signature": "(b-\u003ea-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "foldr",
          "package": "set-monad",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
          "source": "src/Data-Set-Monad.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "package": "set-monad",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "foldr'",
          "package": "set-monad",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e Set a -\u003e b",
          "source": "src/Data-Set-Monad.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "package": "set-monad",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eSet a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "fromAscList",
          "package": "set-monad",
          "signature": "[a] -\u003e Set a",
          "source": "src/Data-Set-Monad.html#fromAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "fromAscList",
          "normalized": "[a]-\u003eSet a",
          "package": "set-monad",
          "partial": "Asc List",
          "signature": "[a]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "fromDistinctAscList",
          "package": "set-monad",
          "signature": "[a] -\u003e Set a",
          "source": "src/Data-Set-Monad.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "fromDistinctAscList",
          "normalized": "[a]-\u003eSet a",
          "package": "set-monad",
          "partial": "Distinct Asc List",
          "signature": "[a]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "fromList",
          "package": "set-monad",
          "signature": "[a] -\u003e Set a",
          "source": "src/Data-Set-Monad.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "fromList",
          "normalized": "[a]-\u003eSet a",
          "package": "set-monad",
          "partial": "List",
          "signature": "[a]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "insert",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "insert",
          "normalized": "a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "intersection",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#intersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "intersection",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "isProperSubsetOf",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "isProperSubsetOf",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "set-monad",
          "partial": "Proper Subset Of",
          "signature": "Set a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "isSubsetOf",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "isSubsetOf",
          "normalized": "Set a-\u003eSet a-\u003eBool",
          "package": "set-monad",
          "partial": "Subset Of",
          "signature": "Set a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "map",
          "package": "set-monad",
          "signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
          "source": "src/Data-Set-Monad.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "package": "set-monad",
          "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "mapMonotonic",
          "package": "set-monad",
          "signature": "(a -\u003e b) -\u003e Set a -\u003e Set b",
          "source": "src/Data-Set-Monad.html#mapMonotonic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "mapMonotonic",
          "normalized": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "package": "set-monad",
          "partial": "Monotonic",
          "signature": "(a-\u003eb)-\u003eSet a-\u003eSet b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:mapMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "maxView",
          "package": "set-monad",
          "signature": "Set a -\u003e Maybe (a, Set a)",
          "source": "src/Data-Set-Monad.html#maxView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "maxView",
          "normalized": "Set a-\u003eMaybe(a,Set a)",
          "package": "set-monad",
          "partial": "View",
          "signature": "Set a-\u003eMaybe(a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "member",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "member",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "set-monad",
          "signature": "a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "minView",
          "package": "set-monad",
          "signature": "Set a -\u003e Maybe (a, Set a)",
          "source": "src/Data-Set-Monad.html#minView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "minView",
          "normalized": "Set a-\u003eMaybe(a,Set a)",
          "package": "set-monad",
          "partial": "View",
          "signature": "Set a-\u003eMaybe(a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "notMember",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#notMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "notMember",
          "normalized": "a-\u003eSet a-\u003eBool",
          "package": "set-monad",
          "partial": "Member",
          "signature": "a-\u003eSet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "null",
          "package": "set-monad",
          "signature": "Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "null",
          "normalized": "Set a-\u003eBool",
          "package": "set-monad",
          "signature": "Set a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "partition",
          "package": "set-monad",
          "signature": "(a -\u003e Bool) -\u003e Set a -\u003e (Set a, Set a)",
          "source": "src/Data-Set-Monad.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)",
          "package": "set-monad",
          "signature": "(a-\u003eBool)-\u003eSet a-\u003e(Set a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "showTree",
          "package": "set-monad",
          "signature": "Set a -\u003e String",
          "source": "src/Data-Set-Monad.html#showTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "showTree",
          "normalized": "Set a-\u003eString",
          "package": "set-monad",
          "partial": "Tree",
          "signature": "Set a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:showTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "showTreeWith",
          "package": "set-monad",
          "signature": "Bool -\u003e Bool -\u003e Set a -\u003e String",
          "source": "src/Data-Set-Monad.html#showTreeWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "showTreeWith",
          "normalized": "Bool-\u003eBool-\u003eSet a-\u003eString",
          "package": "set-monad",
          "partial": "Tree With",
          "signature": "Bool-\u003eBool-\u003eSet a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:showTreeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "singleton",
          "package": "set-monad",
          "signature": "a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "singleton",
          "normalized": "a-\u003eSet a",
          "package": "set-monad",
          "signature": "a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "size",
          "package": "set-monad",
          "signature": "Set a -\u003e Int",
          "source": "src/Data-Set-Monad.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "size",
          "normalized": "Set a-\u003eInt",
          "package": "set-monad",
          "signature": "Set a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "split",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e (Set a, Set a)",
          "source": "src/Data-Set-Monad.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "split",
          "normalized": "a-\u003eSet a-\u003e(Set a,Set a)",
          "package": "set-monad",
          "signature": "a-\u003eSet a-\u003e(Set a,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "splitMember",
          "package": "set-monad",
          "signature": "a -\u003e Set a -\u003e (Set a, Bool, Set a)",
          "source": "src/Data-Set-Monad.html#splitMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "splitMember",
          "normalized": "a-\u003eSet a-\u003e(Set a,Bool,Set a)",
          "package": "set-monad",
          "partial": "Member",
          "signature": "a-\u003eSet a-\u003e(Set a,Bool,Set a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:splitMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "toAscList",
          "package": "set-monad",
          "signature": "Set a -\u003e [a]",
          "source": "src/Data-Set-Monad.html#toAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "toAscList",
          "normalized": "Set a-\u003e[a]",
          "package": "set-monad",
          "partial": "Asc List",
          "signature": "Set a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "toList",
          "package": "set-monad",
          "signature": "Set a -\u003e [a]",
          "source": "src/Data-Set-Monad.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "toList",
          "normalized": "Set a-\u003e[a]",
          "package": "set-monad",
          "partial": "List",
          "signature": "Set a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "union",
          "package": "set-monad",
          "signature": "Set a -\u003e Set a -\u003e Set a",
          "source": "src/Data-Set-Monad.html#union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "union",
          "normalized": "Set a-\u003eSet a-\u003eSet a",
          "package": "set-monad",
          "signature": "Set a-\u003eSet a-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "unions",
          "package": "set-monad",
          "signature": "[Set a] -\u003e Set a",
          "source": "src/Data-Set-Monad.html#unions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "unions",
          "normalized": "[Set a]-\u003eSet a",
          "package": "set-monad",
          "signature": "[Set a]-\u003eSet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.Monad",
          "name": "valid",
          "package": "set-monad",
          "signature": "Set a -\u003e Bool",
          "source": "src/Data-Set-Monad.html#valid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set Monad",
          "module": "Data.Set.Monad",
          "name": "valid",
          "normalized": "Set a-\u003eBool",
          "package": "set-monad",
          "signature": "Set a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/set-monad/docs/Data-Set-Monad.html#v:valid"
      }
    }
  ]
]