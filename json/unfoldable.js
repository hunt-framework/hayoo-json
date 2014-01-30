[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of data structures with 2 type arguments that can be unfolded.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "module",
        "fct-source": "src/Data-Biunfoldable.html",
        "fct-type": "module",
        "title": "Biunfoldable"
      },
      "index": {
        "description": "Class of data structures with type arguments that can be unfolded",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "Biunfoldable",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Biunfoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#t:Biunfoldable",
      "description": {
        "fct-descr": "\u003cp\u003eData structures with 2 type arguments (kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e) that can be unfolded.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a b = Empty | Leaf a | Node (Tree a b) b (Tree a b)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Biunfoldable Tree where\n   biunfold fa fb = choose\n     [ pure Empty\n     , Leaf \u003c$\u003e fa\n     , Node \u003c$\u003e biunfold fa fb \u003c*\u003e fb \u003c*\u003e biunfold fa fb\n     ]\n\u003c/pre\u003e\u003cp\u003ei.e. it follows closely the instance for \u003ccode\u003eBitraversable\u003c/code\u003e, but instead of matching on an input value,\n we \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e from a list of all cases.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "class",
        "fct-source": "src/Data-Biunfoldable.html#Biunfoldable",
        "fct-type": "class",
        "title": "Biunfoldable"
      },
      "index": {
        "description": "Data structures with type arguments kind that can be unfolded For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Biunfoldable Tree where biunfold fa fb choose pure Empty Leaf fa Node biunfold fa fb fb biunfold fa fb i.e it follows closely the instance for Bitraversable but instead of matching on an input value we choose from list of all cases",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "Biunfoldable",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Biunfoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:arbitraryDefault",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a QuickCheck generator, can be used as default instance for \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "Gen (t a b)",
        "fct-source": "src/Data-Biunfoldable.html#arbitraryDefault",
        "fct-type": "function",
        "title": "arbitraryDefault"
      },
      "index": {
        "description": "Provides QuickCheck generator can be used as default instance for Arbitrary",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "arbitraryDefault",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfold",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a way to generate elements, return a way to generate structures containing those elements.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f a -\u003e f b -\u003e f (t a b)",
        "fct-source": "src/Data-Biunfoldable.html#biunfold",
        "fct-type": "method",
        "title": "biunfold"
      },
      "index": {
        "description": "Given way to generate elements return way to generate structures containing those elements",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "biunfold",
        "normalized": "a b-\u003ea c-\u003ea(d b c)",
        "package": "unfoldable",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef(t a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldBF",
      "description": {
        "fct-descr": "\u003cp\u003eBreadth-first unfold, which orders the result by the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f a -\u003e f b -\u003e f (t a b)",
        "fct-source": "src/Data-Biunfoldable.html#biunfoldBF",
        "fct-type": "function",
        "title": "biunfoldBF"
      },
      "index": {
        "description": "Breadth-first unfold which orders the result by the number of choose calls",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "biunfoldBF",
        "normalized": "a b-\u003ea c-\u003ea(d b c)",
        "package": "unfoldable",
        "partial": "BF",
        "signature": "f a-\u003ef b-\u003ef(t a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldBF_",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold the structure breadth-first, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f (t () ())",
        "fct-source": "src/Data-Biunfoldable.html#biunfoldBF_",
        "fct-type": "function",
        "title": "biunfoldBF_"
      },
      "index": {
        "description": "Unfold the structure breadth-first always using as elements",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "biunfoldBF_",
        "normalized": "a(b()())",
        "package": "unfoldable",
        "partial": "BF",
        "signature": "f(t()())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfold_",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold the structure, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f (t () ())",
        "fct-source": "src/Data-Biunfoldable.html#biunfold_",
        "fct-type": "function",
        "title": "biunfold_"
      },
      "index": {
        "description": "Unfold the structure always using as elements",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "biunfold_",
        "normalized": "a(b()())",
        "package": "unfoldable",
        "partial": "",
        "signature": "f(t()())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ebiunfoldr\u003c/code\u003e builds a data structure from a seed value.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "(c -\u003e Maybe (a, c)) -\u003e (c -\u003e Maybe (b, c)) -\u003e c -\u003e Maybe (t a b)",
        "fct-source": "src/Data-Biunfoldable.html#biunfoldr",
        "fct-type": "function",
        "title": "biunfoldr"
      },
      "index": {
        "description": "biunfoldr builds data structure from seed value",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "biunfoldr",
        "normalized": "(a-\u003eMaybe(b,a))-\u003e(a-\u003eMaybe(c,a))-\u003ea-\u003eMaybe(d b c)",
        "package": "unfoldable",
        "partial": "",
        "signature": "(c-\u003eMaybe(a,c))-\u003e(c-\u003eMaybe(b,c))-\u003ec-\u003eMaybe(t a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:fromLists",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a data structure using the lists as input.\n This can fail because there might not be a data structure with the same number\n of element positions as the number of elements in the lists.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "[a] -\u003e [b] -\u003e Maybe (t a b)",
        "fct-source": "src/Data-Biunfoldable.html#fromLists",
        "fct-type": "function",
        "title": "fromLists"
      },
      "index": {
        "description": "Create data structure using the lists as input This can fail because there might not be data structure with the same number of element positions as the number of elements in the lists",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "fromLists",
        "normalized": "[a]-\u003e[b]-\u003eMaybe(c a b)",
        "package": "unfoldable",
        "partial": "Lists",
        "signature": "[a]-\u003e[b]-\u003eMaybe(t a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:randomDefault",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a random value, can be used as default instance for \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Biunfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "g -\u003e (t a b, g)",
        "fct-source": "src/Data-Biunfoldable.html#randomDefault",
        "fct-type": "function",
        "title": "randomDefault"
      },
      "index": {
        "description": "Generate random value can be used as default instance for Random",
        "hierarchy": "Data Biunfoldable",
        "module": "Data.Biunfoldable",
        "name": "randomDefault",
        "normalized": "a-\u003e(b c d,a)",
        "package": "unfoldable",
        "partial": "Default",
        "signature": "g-\u003e(t a b,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of data structures that can be unfolded.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "module",
        "fct-source": "src/Data-Unfoldable.html",
        "fct-type": "module",
        "title": "Unfoldable"
      },
      "index": {
        "description": "Class of data structures that can be unfolded",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "Unfoldable",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unfoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#t:Unfoldable",
      "description": {
        "fct-descr": "\u003cp\u003eData structures that can be unfolded.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Unfoldable Tree where\n   unfold fa = choose\n     [ pure Empty\n     , Leaf \u003c$\u003e fa\n     , Node \u003c$\u003e unfold fa \u003c*\u003e fa \u003c*\u003e unfold fa\n     ]\n\u003c/pre\u003e\u003cp\u003ei.e. it follows closely the instance for \u003ccode\u003eTraversable\u003c/code\u003e, but instead of matching on an input value,\n we \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e from a list of all cases.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing the \u003ccode\u003e\u003ca\u003eUnfoldable\u003c/a\u003e\u003c/code\u003e instance, you can add a \u003ccode\u003ederiving\u003c/code\u003e \u003ccode\u003eGeneric1\u003c/code\u003e\n to your datatype and declare an \u003ccode\u003e\u003ca\u003eUnfoldable\u003c/a\u003e\u003c/code\u003e instance without giving a definition for \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import GHC.Generics\n\n data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a) deriving Generic1\n \n instance Unfoldable Tree\n\u003c/pre\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "class",
        "fct-source": "src/Data-Unfoldable.html#Unfoldable",
        "fct-type": "class",
        "title": "Unfoldable"
      },
      "index": {
        "description": "Data structures that can be unfolded For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Unfoldable Tree where unfold fa choose pure Empty Leaf fa Node unfold fa fa unfold fa i.e it follows closely the instance for Traversable but instead of matching on an input value we choose from list of all cases Instead of manually writing the Unfoldable instance you can add deriving Generic1 to your datatype and declare an Unfoldable instance without giving definition for unfold For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Tree Empty Leaf Node Tree Tree deriving Generic1 instance Unfoldable Tree",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "Unfoldable",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unfoldable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allBreadthFirst",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all the values breadth-first.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "[t ()]",
        "fct-source": "src/Data-Unfoldable.html#allBreadthFirst",
        "fct-type": "function",
        "title": "allBreadthFirst"
      },
      "index": {
        "description": "Generate all the values breadth-first",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "allBreadthFirst",
        "normalized": "[a()]",
        "package": "unfoldable",
        "partial": "Breadth First",
        "signature": "[t()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allDepthFirst",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all the values depth-first.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "[t ()]",
        "fct-source": "src/Data-Unfoldable.html#allDepthFirst",
        "fct-type": "function",
        "title": "allDepthFirst"
      },
      "index": {
        "description": "Generate all the values depth-first",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "allDepthFirst",
        "normalized": "[a()]",
        "package": "unfoldable",
        "partial": "Depth First",
        "signature": "[t()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allToDepth",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate all the values upto a given depth, depth-first.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "Int -\u003e [t ()]",
        "fct-source": "src/Data-Unfoldable.html#allToDepth",
        "fct-type": "function",
        "title": "allToDepth"
      },
      "index": {
        "description": "Generate all the values upto given depth depth-first",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "allToDepth",
        "normalized": "Int-\u003e[a()]",
        "package": "unfoldable",
        "partial": "To Depth",
        "signature": "Int-\u003e[t()]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:arbitraryDefault",
      "description": {
        "fct-descr": "\u003cp\u003eProvides a QuickCheck generator, can be used as default instance for \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "Gen (t a)",
        "fct-source": "src/Data-Unfoldable.html#arbitraryDefault",
        "fct-type": "function",
        "title": "arbitraryDefault"
      },
      "index": {
        "description": "Provides QuickCheck generator can be used as default instance for Arbitrary",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "arbitraryDefault",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a data structure using the list as input.\n This can fail because there might not be a data structure with the same number\n of element positions as the number of elements in the list.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "[a] -\u003e Maybe (t a)",
        "fct-source": "src/Data-Unfoldable.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create data structure using the list as input This can fail because there might not be data structure with the same number of element positions as the number of elements in the list",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "fromList",
        "normalized": "[a]-\u003eMaybe(b a)",
        "package": "unfoldable",
        "partial": "List",
        "signature": "[a]-\u003eMaybe(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:leftMost",
      "description": {
        "fct-descr": "\u003cp\u003eAlways choose the first constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "Maybe (t ())",
        "fct-source": "src/Data-Unfoldable.html#leftMost",
        "fct-type": "function",
        "title": "leftMost"
      },
      "index": {
        "description": "Always choose the first constructor",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "leftMost",
        "normalized": "Maybe(a())",
        "package": "unfoldable",
        "partial": "Most",
        "signature": "Maybe(t())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:randomDefault",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a random value, can be used as default instance for \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "g -\u003e (t a, g)",
        "fct-source": "src/Data-Unfoldable.html#randomDefault",
        "fct-type": "function",
        "title": "randomDefault"
      },
      "index": {
        "description": "Generate random value can be used as default instance for Random",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "randomDefault",
        "normalized": "a-\u003e(b c,a)",
        "package": "unfoldable",
        "partial": "Default",
        "signature": "g-\u003e(t a,g)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:rightMost",
      "description": {
        "fct-descr": "\u003cp\u003eAlways choose the last constructor.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "Maybe (t ())",
        "fct-source": "src/Data-Unfoldable.html#rightMost",
        "fct-type": "function",
        "title": "rightMost"
      },
      "index": {
        "description": "Always choose the last constructor",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "rightMost",
        "normalized": "Maybe(a())",
        "package": "unfoldable",
        "partial": "Most",
        "signature": "Maybe(t())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfold",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a way to generate elements, return a way to generate structures containing those elements.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f a -\u003e f (t a)",
        "fct-source": "src/Data-Unfoldable.html#unfold",
        "fct-type": "method",
        "title": "unfold"
      },
      "index": {
        "description": "Given way to generate elements return way to generate structures containing those elements",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "unfold",
        "normalized": "a b-\u003ea(c b)",
        "package": "unfoldable",
        "partial": "",
        "signature": "f a-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldBF",
      "description": {
        "fct-descr": "\u003cp\u003eBreadth-first unfold, which orders the result by the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f a -\u003e f (t a)",
        "fct-source": "src/Data-Unfoldable.html#unfoldBF",
        "fct-type": "function",
        "title": "unfoldBF"
      },
      "index": {
        "description": "Breadth-first unfold which orders the result by the number of choose calls",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "unfoldBF",
        "normalized": "a b-\u003ea(c b)",
        "package": "unfoldable",
        "partial": "BF",
        "signature": "f a-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldBF_",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold the structure breadth-first, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f (t ())",
        "fct-source": "src/Data-Unfoldable.html#unfoldBF_",
        "fct-type": "function",
        "title": "unfoldBF_"
      },
      "index": {
        "description": "Unfold the structure breadth-first always using as elements",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "unfoldBF_",
        "normalized": "a(b())",
        "package": "unfoldable",
        "partial": "BF",
        "signature": "f(t())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfold_",
      "description": {
        "fct-descr": "\u003cp\u003eUnfold the structure, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "f (t ())",
        "fct-source": "src/Data-Unfoldable.html#unfold_",
        "fct-type": "function",
        "title": "unfold_"
      },
      "index": {
        "description": "Unfold the structure always using as elements",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "unfold_",
        "normalized": "a(b())",
        "package": "unfoldable",
        "partial": "",
        "signature": "f(t())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldr",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eunfoldr\u003c/code\u003e builds a data structure from a seed value. It can be specified as:\n\u003c/p\u003e\u003cpre\u003e unfoldr f z == fromList (Data.List.unfoldr f z)\n\u003c/pre\u003e",
        "fct-module": "Data.Unfoldable",
        "fct-package": "unfoldable",
        "fct-signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e Maybe (t a)",
        "fct-source": "src/Data-Unfoldable.html#unfoldr",
        "fct-type": "function",
        "title": "unfoldr"
      },
      "index": {
        "description": "unfoldr builds data structure from seed value It can be specified as unfoldr fromList Data.List.unfoldr",
        "hierarchy": "Data Unfoldable",
        "module": "Data.Unfoldable",
        "name": "unfoldr",
        "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eMaybe(c b)",
        "package": "unfoldable",
        "partial": "",
        "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eMaybe(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnfolders provide a way to unfold data structures.\n They are basically \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instances, but the \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e method\n allows the unfolder to do something special for the recursive positions\n of the data structure.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "module",
        "fct-source": "src/Data-Unfolder.html",
        "fct-type": "module",
        "title": "Unfolder"
      },
      "index": {
        "description": "Unfolders provide way to unfold data structures They are basically Alternative instances but the choose method allows the unfolder to do something special for the recursive positions of the data structure",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Unfolder",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unfolder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Arb",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of Test.QuickCheck.Gen, with failure \n and a count of the number of recursive positions.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "data",
        "fct-source": "src/Data-Unfolder.html#Arb",
        "fct-type": "data",
        "title": "Arb"
      },
      "index": {
        "description": "variant of Test.QuickCheck.Gen with failure and count of the number of recursive positions",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Arb",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Arb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:BFS",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a generator of values of a given depth.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no values of that depth or deeper.\n The depth is the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Unfolder.html#BFS",
        "fct-type": "newtype",
        "title": "BFS"
      },
      "index": {
        "description": "Return generator of values of given depth Returns Nothing if there are no values of that depth or deeper The depth is the number of choose calls",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "BFS",
        "normalized": "",
        "package": "unfoldable",
        "partial": "BFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:DualA",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDualA\u003c/a\u003e\u003c/code\u003e flips the \u003ccode\u003e\u003c|\u003e\u003c/code\u003e operator from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Unfolder.html#DualA",
        "fct-type": "newtype",
        "title": "DualA"
      },
      "index": {
        "description": "DualA flips the operator from Alternative",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "DualA",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:NT",
      "description": {
        "fct-descr": "\u003cp\u003eNatural transformations\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "data",
        "fct-source": "src/Data-Unfolder.html#NT",
        "fct-type": "data",
        "title": "NT"
      },
      "index": {
        "description": "Natural transformations",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "NT",
        "normalized": "",
        "package": "unfoldable",
        "partial": "NT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:NumConst",
      "description": {
        "fct-descr": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e that does multiplication of the constants for \u003ccode\u003e\u003c*\u003e\u003c/code\u003e and addition for \u003ccode\u003e\u003c|\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Unfolder.html#NumConst",
        "fct-type": "newtype",
        "title": "NumConst"
      },
      "index": {
        "description": "Variant of Constant that does multiplication of the constants for and addition for",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "NumConst",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Num Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Random",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Unfolder.html#Random",
        "fct-type": "newtype",
        "title": "Random"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Random",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Split",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "type",
        "fct-source": "src/Data-Unfolder.html#Split",
        "fct-type": "type",
        "title": "Split"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Split",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Split",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Unfolder",
      "description": {
        "fct-descr": "\u003cp\u003eUnfolders provide a way to unfold data structures.\n The methods have default implementations in terms of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n but you can implement \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e to act on recursive positions of the\n data structure, or simply to provide a faster implementation than \u003ccode\u003e\u003ca\u003easum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "class",
        "fct-source": "src/Data-Unfolder.html#Unfolder",
        "fct-type": "class",
        "title": "Unfolder"
      },
      "index": {
        "description": "Unfolders provide way to unfold data structures The methods have default implementations in terms of Alternative but you can implement choose to act on recursive positions of the data structure or simply to provide faster implementation than asum",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Unfolder",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unfolder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:UnfolderTransformer",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e changes the way an \u003ccode\u003e\u003ca\u003eUnfolder\u003c/a\u003e\u003c/code\u003e unfolds. \n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "class",
        "fct-source": "src/Data-Unfolder.html#UnfolderTransformer",
        "fct-type": "class",
        "title": "UnfolderTransformer"
      },
      "index": {
        "description": "An UnfolderTransformer changes the way an Unfolder unfolds",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "UnfolderTransformer",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unfolder Transformer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:WithRec",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "newtype",
        "fct-source": "src/Data-Unfolder.html#WithRec",
        "fct-type": "newtype",
        "title": "WithRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "WithRec",
        "normalized": "",
        "package": "unfoldable",
        "partial": "With Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:Arb",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "Arb Int (StdGen -\u003e Int -\u003e Maybe a)",
        "fct-source": "src/Data-Unfolder.html#Arb",
        "fct-type": "function",
        "title": "Arb"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Arb",
        "normalized": "Arb Int(StdGen-\u003eInt-\u003eMaybe a)",
        "package": "unfoldable",
        "partial": "Arb",
        "signature": "Arb Int(StdGen-\u003eInt-\u003eMaybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:BFS",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "BFS",
        "fct-source": "src/Data-Unfolder.html#BFS",
        "fct-type": "function",
        "title": "BFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "BFS",
        "normalized": "",
        "package": "unfoldable",
        "partial": "BFS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:DualA",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "DualA",
        "fct-source": "src/Data-Unfolder.html#DualA",
        "fct-type": "function",
        "title": "DualA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "DualA",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:NT",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "NT",
        "fct-source": "src/Data-Unfolder.html#NT",
        "fct-type": "function",
        "title": "NT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "NT",
        "normalized": "",
        "package": "unfoldable",
        "partial": "NT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:NumConst",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "NumConst",
        "fct-source": "src/Data-Unfolder.html#NumConst",
        "fct-type": "function",
        "title": "NumConst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "NumConst",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Num Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:Random",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "Random",
        "fct-source": "src/Data-Unfolder.html#Random",
        "fct-type": "function",
        "title": "Random"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "Random",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:WithRec",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "WithRec",
        "fct-source": "src/Data-Unfolder.html#WithRec",
        "fct-type": "function",
        "title": "WithRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "WithRec",
        "normalized": "",
        "package": "unfoldable",
        "partial": "With Rec",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala",
      "description": {
        "fct-descr": "\u003cp\u003eRun an unfolding function with one argument using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "(t f b -\u003e f b) -\u003e (t f a -\u003e t f b) -\u003e f a -\u003e f b",
        "fct-source": "src/Data-Unfolder.html#ala",
        "fct-type": "function",
        "title": "ala"
      },
      "index": {
        "description": "Run an unfolding function with one argument using an UnfolderTransformer given way to run the transformer",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "ala",
        "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b c)-\u003eb d-\u003eb c",
        "package": "unfoldable",
        "partial": "",
        "signature": "(t f b-\u003ef b)-\u003e(t f a-\u003et f b)-\u003ef a-\u003ef b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala2",
      "description": {
        "fct-descr": "\u003cp\u003eRun an unfolding function with two arguments using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "(t f c -\u003e f c) -\u003e (t f a -\u003e t f b -\u003e t f c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Unfolder.html#ala2",
        "fct-type": "function",
        "title": "ala2"
      },
      "index": {
        "description": "Run an unfolding function with two arguments using an UnfolderTransformer given way to run the transformer",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "ala2",
        "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b e-\u003ea b c)-\u003eb d-\u003eb e-\u003eb c",
        "package": "unfoldable",
        "partial": "",
        "signature": "(t f c-\u003ef c)-\u003e(t f a-\u003et f b-\u003et f c)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala3",
      "description": {
        "fct-descr": "\u003cp\u003eRun an unfolding function with three arguments using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "(t f d -\u003e f d) -\u003e (t f a -\u003e t f b -\u003e t f c -\u003e t f d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
        "fct-source": "src/Data-Unfolder.html#ala3",
        "fct-type": "function",
        "title": "ala3"
      },
      "index": {
        "description": "Run an unfolding function with three arguments using an UnfolderTransformer given way to run the transformer",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "ala3",
        "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b e-\u003ea b f-\u003ea b c)-\u003eb d-\u003eb e-\u003eb f-\u003eb c",
        "package": "unfoldable",
        "partial": "",
        "signature": "(t f d-\u003ef d)-\u003e(t f a-\u003et f b-\u003et f c-\u003et f d)-\u003ef a-\u003ef b-\u003ef c-\u003ef d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:arbUnit",
      "description": {
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "Arb a",
        "fct-source": "src/Data-Unfolder.html#arbUnit",
        "fct-type": "function",
        "title": "arbUnit"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "arbUnit",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Unit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:between",
      "description": {
        "fct-descr": "\u003cp\u003eIf a datatype is enumerable, we can use \u003ccode\u003e\u003ca\u003echooseInt\u003c/a\u003e\u003c/code\u003e to generate a value.\n This is the function to use if you want to unfold a datatype that has no type arguments (has kind \u003ccode\u003e*\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "a -\u003e a -\u003e f a",
        "fct-source": "src/Data-Unfolder.html#between",
        "fct-type": "function",
        "title": "between"
      },
      "index": {
        "description": "If datatype is enumerable we can use chooseInt to generate value This is the function to use if you want to unfold datatype that has no type arguments has kind",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "between",
        "normalized": "a-\u003ea-\u003eb a",
        "package": "unfoldable",
        "partial": "",
        "signature": "a-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:betweenD",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebetweenD\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e to generate a value. It chooses between the lower bound and one\n   of the higher values. This means that f.e. breadth-first unfolding and arbitrary will prefer\n   lower values.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "a -\u003e a -\u003e f a",
        "fct-source": "src/Data-Unfolder.html#betweenD",
        "fct-type": "function",
        "title": "betweenD"
      },
      "index": {
        "description": "betweenD uses choose to generate value It chooses between the lower bound and one of the higher values This means that f.e breadth-first unfolding and arbitrary will prefer lower values",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "betweenD",
        "normalized": "a-\u003ea-\u003eb a",
        "package": "unfoldable",
        "partial": "",
        "signature": "a-\u003ea-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:bfs",
      "description": {
        "fct-descr": "\u003cp\u003eChange the order of unfolding to be breadth-first, by maximum depth of the components.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "BFS f x -\u003e f x",
        "fct-source": "src/Data-Unfolder.html#bfs",
        "fct-type": "function",
        "title": "bfs"
      },
      "index": {
        "description": "Change the order of unfolding to be breadth-first by maximum depth of the components",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "bfs",
        "normalized": "BFS a b-\u003ea b",
        "package": "unfoldable",
        "partial": "",
        "signature": "BFS f x-\u003ef x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:bfsBySum",
      "description": {
        "fct-descr": "\u003cp\u003eChange the order of unfolding to be breadth-first, by the sum of depths of the components.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "BFS f x -\u003e f x",
        "fct-source": "src/Data-Unfolder.html#bfsBySum",
        "fct-type": "function",
        "title": "bfsBySum"
      },
      "index": {
        "description": "Change the order of unfolding to be breadth-first by the sum of depths of the components",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "bfsBySum",
        "normalized": "BFS a b-\u003ea b",
        "package": "unfoldable",
        "partial": "By Sum",
        "signature": "BFS f x-\u003ef x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:boundedEnum",
      "description": {
        "fct-descr": "\u003cp\u003eIf a datatype is also bounded, we choose between all possible values.\n\u003c/p\u003e\u003cpre\u003e boundedEnum = between minBound maxBound\n\u003c/pre\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "f a",
        "fct-source": "src/Data-Unfolder.html#boundedEnum",
        "fct-type": "function",
        "title": "boundedEnum"
      },
      "index": {
        "description": "If datatype is also bounded we choose between all possible values boundedEnum between minBound maxBound",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "boundedEnum",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:boundedEnumD",
      "description": {
        "fct-descr": "\u003cpre\u003e boundedEnumD = betweenD minBound maxBound\n\u003c/pre\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "f a",
        "fct-source": "src/Data-Unfolder.html#boundedEnumD",
        "fct-type": "function",
        "title": "boundedEnumD"
      },
      "index": {
        "description": "boundedEnumD betweenD minBound maxBound",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "boundedEnumD",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Enum",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:choose",
      "description": {
        "fct-descr": "\u003cp\u003eChoose one of the values from the list.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "[f x] -\u003e f x",
        "fct-source": "src/Data-Unfolder.html#choose",
        "fct-type": "method",
        "title": "choose"
      },
      "index": {
        "description": "Choose one of the values from the list",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "choose",
        "normalized": "[a b]-\u003ea b",
        "package": "unfoldable",
        "partial": "",
        "signature": "[f x]-\u003ef x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:chooseInt",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a number \u003ccode\u003en\u003c/code\u003e, return a number between '0' and 'n - 1'.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "Int -\u003e f Int",
        "fct-source": "src/Data-Unfolder.html#chooseInt",
        "fct-type": "method",
        "title": "chooseInt"
      },
      "index": {
        "description": "Given number return number between and",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "chooseInt",
        "normalized": "Int-\u003ea Int",
        "package": "unfoldable",
        "partial": "Int",
        "signature": "Int-\u003ef Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:chooseMonadDefault",
      "description": {
        "fct-descr": "\u003cp\u003eIf an unfolder is monadic, \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e can be implemented in terms of \u003ccode\u003e\u003ca\u003echooseInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "[m x] -\u003e m x",
        "fct-source": "src/Data-Unfolder.html#chooseMonadDefault",
        "fct-type": "function",
        "title": "chooseMonadDefault"
      },
      "index": {
        "description": "If an unfolder is monadic choose can be implemented in terms of chooseInt",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "chooseMonadDefault",
        "normalized": "[a b]-\u003ea b",
        "package": "unfoldable",
        "partial": "Monad Default",
        "signature": "[m x]-\u003em x"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getBFS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "(Int, Split) -\u003e Maybe [f x]",
        "fct-source": "src/Data-Unfolder.html#BFS",
        "fct-type": "function",
        "title": "getBFS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getBFS",
        "normalized": "(Int,Split)-\u003eMaybe[a b]",
        "package": "unfoldable",
        "partial": "BFS",
        "signature": "(Int,Split)-\u003eMaybe[f x]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getDualA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "f a",
        "fct-source": "src/Data-Unfolder.html#DualA",
        "fct-type": "function",
        "title": "getDualA"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getDualA",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Dual",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getNT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "forall a.  f a -\u003e g a",
        "fct-source": "src/Data-Unfolder.html#NT",
        "fct-type": "function",
        "title": "getNT"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getNT",
        "normalized": "a b c d-\u003ee d",
        "package": "unfoldable",
        "partial": "NT",
        "signature": "forall a. f a-\u003eg a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getNumConst",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "a",
        "fct-source": "src/Data-Unfolder.html#NumConst",
        "fct-type": "function",
        "title": "getNumConst"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getNumConst",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Num Const",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getRandom",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "StateT g m a",
        "fct-source": "src/Data-Unfolder.html#Random",
        "fct-type": "function",
        "title": "getRandom"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getRandom",
        "normalized": "",
        "package": "unfoldable",
        "partial": "Random",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getWithRec",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "ReaderT (Int -\u003e NT f f) f a",
        "fct-source": "src/Data-Unfolder.html#WithRec",
        "fct-type": "function",
        "title": "getWithRec"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "getWithRec",
        "normalized": "ReaderT(Int-\u003eNT a a)a b",
        "package": "unfoldable",
        "partial": "With Rec",
        "signature": "ReaderT(Int-\u003eNT f f)f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:lift",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the argument unfolder to the constructed unfolder.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "f a -\u003e t f a",
        "fct-source": "src/Data-Unfolder.html#lift",
        "fct-type": "method",
        "title": "lift"
      },
      "index": {
        "description": "Lift computation from the argument unfolder to the constructed unfolder",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "lift",
        "normalized": "a b-\u003ec a b",
        "package": "unfoldable",
        "partial": "",
        "signature": "f a-\u003et f a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:limitDepth",
      "description": {
        "fct-descr": "\u003cp\u003eLimit the depth of an unfolding.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "Int -\u003e WithRec f a -\u003e f a",
        "fct-source": "src/Data-Unfolder.html#limitDepth",
        "fct-type": "function",
        "title": "limitDepth"
      },
      "index": {
        "description": "Limit the depth of an unfolding",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "limitDepth",
        "normalized": "Int-\u003eWithRec a b-\u003ea b",
        "package": "unfoldable",
        "partial": "Depth",
        "signature": "Int-\u003eWithRec f a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:withRec",
      "description": {
        "fct-descr": "\u003cp\u003eApply a certain function of type \u003ccode\u003ef a -\u003e f a\u003c/code\u003e to the result of a \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e.\n The depth is passed as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, so you can apply a different function at each depth.\n Because of a \u003ccode\u003eforall\u003c/code\u003e, the function needs to be wrapped in a \u003ccode\u003e\u003ca\u003eNT\u003c/a\u003e\u003c/code\u003e constructor.\n See \u003ccode\u003e\u003ca\u003elimitDepth\u003c/a\u003e\u003c/code\u003e for an example how to use this function.\n\u003c/p\u003e",
        "fct-module": "Data.Unfolder",
        "fct-package": "unfoldable",
        "fct-signature": "(Int -\u003e NT f f) -\u003e WithRec f a -\u003e f a",
        "fct-source": "src/Data-Unfolder.html#withRec",
        "fct-type": "function",
        "title": "withRec"
      },
      "index": {
        "description": "Apply certain function of type to the result of choose The depth is passed as Int so you can apply different function at each depth Because of forall the function needs to be wrapped in NT constructor See limitDepth for an example how to use this function",
        "hierarchy": "Data Unfolder",
        "module": "Data.Unfolder",
        "name": "withRec",
        "normalized": "(Int-\u003eNT a a)-\u003eWithRec a b-\u003ea b",
        "package": "unfoldable",
        "partial": "Rec",
        "signature": "(Int-\u003eNT f f)-\u003eWithRec f a-\u003ef a"
      }
    }
  }
]