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
        "word": "unfoldable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of data structures with 2 type arguments that can be unfolded.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Biunfoldable",
          "name": "Biunfoldable",
          "package": "unfoldable",
          "source": "src/Data-Biunfoldable.html",
          "type": "module"
        },
        "index": {
          "description": "Class of data structures with type arguments that can be unfolded",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "Biunfoldable",
          "package": "unfoldable",
          "partial": "Biunfoldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structures with 2 type arguments (kind \u003ccode\u003e* -\u003e * -\u003e *\u003c/code\u003e) that can be unfolded.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a b = Empty | Leaf a | Node (Tree a b) b (Tree a b)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Biunfoldable Tree where\n   biunfold fa fb = choose\n     [ pure Empty\n     , Leaf \u003c$\u003e fa\n     , Node \u003c$\u003e biunfold fa fb \u003c*\u003e fb \u003c*\u003e biunfold fa fb\n     ]\n\u003c/pre\u003e\u003cp\u003ei.e. it follows closely the instance for \u003ccode\u003eBitraversable\u003c/code\u003e, but instead of matching on an input value,\n we \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e from a list of all cases.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "Biunfoldable",
          "package": "unfoldable",
          "source": "src/Data-Biunfoldable.html#Biunfoldable",
          "type": "class"
        },
        "index": {
          "description": "Data structures with type arguments kind that can be unfolded For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Biunfoldable Tree where biunfold fa fb choose pure Empty Leaf fa Node biunfold fa fb fb biunfold fa fb i.e it follows closely the instance for Bitraversable but instead of matching on an input value we choose from list of all cases",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "Biunfoldable",
          "package": "unfoldable",
          "partial": "Biunfoldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#t:Biunfoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a QuickCheck generator, can be used as default instance for \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "arbitraryDefault",
          "package": "unfoldable",
          "signature": "Gen (t a b)",
          "source": "src/Data-Biunfoldable.html#arbitraryDefault",
          "type": "function"
        },
        "index": {
          "description": "Provides QuickCheck generator can be used as default instance for Arbitrary",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "arbitraryDefault",
          "package": "unfoldable",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:arbitraryDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a way to generate elements, return a way to generate structures containing those elements.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "biunfold",
          "package": "unfoldable",
          "signature": "f a -\u003e f b -\u003e f (t a b)",
          "source": "src/Data-Biunfoldable.html#biunfold",
          "type": "method"
        },
        "index": {
          "description": "Given way to generate elements return way to generate structures containing those elements",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "biunfold",
          "normalized": "a b-\u003ea c-\u003ea(d b c)",
          "package": "unfoldable",
          "signature": "f a-\u003ef b-\u003ef(t a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreadth-first unfold, which orders the result by the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "biunfoldBF",
          "package": "unfoldable",
          "signature": "f a -\u003e f b -\u003e f (t a b)",
          "source": "src/Data-Biunfoldable.html#biunfoldBF",
          "type": "function"
        },
        "index": {
          "description": "Breadth-first unfold which orders the result by the number of choose calls",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "biunfoldBF",
          "normalized": "a b-\u003ea c-\u003ea(d b c)",
          "package": "unfoldable",
          "partial": "BF",
          "signature": "f a-\u003ef b-\u003ef(t a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold the structure breadth-first, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "biunfoldBF_",
          "package": "unfoldable",
          "signature": "f (t () ())",
          "source": "src/Data-Biunfoldable.html#biunfoldBF_",
          "type": "function"
        },
        "index": {
          "description": "Unfold the structure breadth-first always using as elements",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "biunfoldBF_",
          "normalized": "a(b()())",
          "package": "unfoldable",
          "partial": "BF",
          "signature": "f(t()())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldBF_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold the structure, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "biunfold_",
          "package": "unfoldable",
          "signature": "f (t () ())",
          "source": "src/Data-Biunfoldable.html#biunfold_",
          "type": "function"
        },
        "index": {
          "description": "Unfold the structure always using as elements",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "biunfold_",
          "normalized": "a(b()())",
          "package": "unfoldable",
          "signature": "f(t()())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ebiunfoldr\u003c/code\u003e builds a data structure from a seed value.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "biunfoldr",
          "package": "unfoldable",
          "signature": "(c -\u003e Maybe (a, c)) -\u003e (c -\u003e Maybe (b, c)) -\u003e c -\u003e Maybe (t a b)",
          "source": "src/Data-Biunfoldable.html#biunfoldr",
          "type": "function"
        },
        "index": {
          "description": "biunfoldr builds data structure from seed value",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "biunfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003e(a-\u003eMaybe(c,a))-\u003ea-\u003eMaybe(d b c)",
          "package": "unfoldable",
          "signature": "(c-\u003eMaybe(a,c))-\u003e(c-\u003eMaybe(b,c))-\u003ec-\u003eMaybe(t a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:biunfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a data structure using the lists as input.\n This can fail because there might not be a data structure with the same number\n of element positions as the number of elements in the lists.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "fromLists",
          "package": "unfoldable",
          "signature": "[a] -\u003e [b] -\u003e Maybe (t a b)",
          "source": "src/Data-Biunfoldable.html#fromLists",
          "type": "function"
        },
        "index": {
          "description": "Create data structure using the lists as input This can fail because there might not be data structure with the same number of element positions as the number of elements in the lists",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "fromLists",
          "normalized": "[a]-\u003e[b]-\u003eMaybe(c a b)",
          "package": "unfoldable",
          "partial": "Lists",
          "signature": "[a]-\u003e[b]-\u003eMaybe(t a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:fromLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random value, can be used as default instance for \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Biunfoldable",
          "name": "randomDefault",
          "package": "unfoldable",
          "signature": "g -\u003e (t a b, g)",
          "source": "src/Data-Biunfoldable.html#randomDefault",
          "type": "function"
        },
        "index": {
          "description": "Generate random value can be used as default instance for Random",
          "hierarchy": "Data Biunfoldable",
          "module": "Data.Biunfoldable",
          "name": "randomDefault",
          "normalized": "a-\u003e(b c d,a)",
          "package": "unfoldable",
          "partial": "Default",
          "signature": "g-\u003e(t a b,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Biunfoldable.html#v:randomDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eClass of data structures that can be unfolded.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Unfoldable",
          "name": "Unfoldable",
          "package": "unfoldable",
          "source": "src/Data-Unfoldable.html",
          "type": "module"
        },
        "index": {
          "description": "Class of data structures that can be unfolded",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "Unfoldable",
          "package": "unfoldable",
          "partial": "Unfoldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData structures that can be unfolded.\n\u003c/p\u003e\u003cp\u003eFor example, given a data type\n\u003c/p\u003e\u003cpre\u003e data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a)\n\u003c/pre\u003e\u003cp\u003ea suitable instance would be\n\u003c/p\u003e\u003cpre\u003e instance Unfoldable Tree where\n   unfold fa = choose\n     [ pure Empty\n     , Leaf \u003c$\u003e fa\n     , Node \u003c$\u003e unfold fa \u003c*\u003e fa \u003c*\u003e unfold fa\n     ]\n\u003c/pre\u003e\u003cp\u003ei.e. it follows closely the instance for \u003ccode\u003eTraversable\u003c/code\u003e, but instead of matching on an input value,\n we \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e from a list of all cases.\n\u003c/p\u003e\u003cp\u003eInstead of manually writing the \u003ccode\u003e\u003ca\u003eUnfoldable\u003c/a\u003e\u003c/code\u003e instance, you can add a \u003ccode\u003ederiving\u003c/code\u003e \u003ccode\u003eGeneric1\u003c/code\u003e\n to your datatype and declare an \u003ccode\u003e\u003ca\u003eUnfoldable\u003c/a\u003e\u003c/code\u003e instance without giving a definition for \u003ccode\u003e\u003ca\u003eunfold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFor example the previous example can be simplified to just:\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE DeriveGeneric #-}\n\n import GHC.Generics\n\n data Tree a = Empty | Leaf a | Node (Tree a) a (Tree a) deriving Generic1\n \n instance Unfoldable Tree\n\u003c/pre\u003e",
          "module": "Data.Unfoldable",
          "name": "Unfoldable",
          "package": "unfoldable",
          "source": "src/Data-Unfoldable.html#Unfoldable",
          "type": "class"
        },
        "index": {
          "description": "Data structures that can be unfolded For example given data type data Tree Empty Leaf Node Tree Tree suitable instance would be instance Unfoldable Tree where unfold fa choose pure Empty Leaf fa Node unfold fa fa unfold fa i.e it follows closely the instance for Traversable but instead of matching on an input value we choose from list of all cases Instead of manually writing the Unfoldable instance you can add deriving Generic1 to your datatype and declare an Unfoldable instance without giving definition for unfold For example the previous example can be simplified to just LANGUAGE DeriveGeneric import GHC.Generics data Tree Empty Leaf Node Tree Tree deriving Generic1 instance Unfoldable Tree",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "Unfoldable",
          "package": "unfoldable",
          "partial": "Unfoldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#t:Unfoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all the values breadth-first.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "allBreadthFirst",
          "package": "unfoldable",
          "signature": "[t ()]",
          "source": "src/Data-Unfoldable.html#allBreadthFirst",
          "type": "function"
        },
        "index": {
          "description": "Generate all the values breadth-first",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "allBreadthFirst",
          "normalized": "[a()]",
          "package": "unfoldable",
          "partial": "Breadth First",
          "signature": "[t()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allBreadthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all the values depth-first.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "allDepthFirst",
          "package": "unfoldable",
          "signature": "[t ()]",
          "source": "src/Data-Unfoldable.html#allDepthFirst",
          "type": "function"
        },
        "index": {
          "description": "Generate all the values depth-first",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "allDepthFirst",
          "normalized": "[a()]",
          "package": "unfoldable",
          "partial": "Depth First",
          "signature": "[t()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allDepthFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate all the values upto a given depth, depth-first.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "allToDepth",
          "package": "unfoldable",
          "signature": "Int -\u003e [t ()]",
          "source": "src/Data-Unfoldable.html#allToDepth",
          "type": "function"
        },
        "index": {
          "description": "Generate all the values upto given depth depth-first",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "allToDepth",
          "normalized": "Int-\u003e[a()]",
          "package": "unfoldable",
          "partial": "To Depth",
          "signature": "Int-\u003e[t()]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:allToDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a QuickCheck generator, can be used as default instance for \u003ccode\u003e\u003ca\u003eArbitrary\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "arbitraryDefault",
          "package": "unfoldable",
          "signature": "Gen (t a)",
          "source": "src/Data-Unfoldable.html#arbitraryDefault",
          "type": "function"
        },
        "index": {
          "description": "Provides QuickCheck generator can be used as default instance for Arbitrary",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "arbitraryDefault",
          "package": "unfoldable",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:arbitraryDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a data structure using the list as input.\n This can fail because there might not be a data structure with the same number\n of element positions as the number of elements in the list.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "fromList",
          "package": "unfoldable",
          "signature": "[a] -\u003e Maybe (t a)",
          "source": "src/Data-Unfoldable.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create data structure using the list as input This can fail because there might not be data structure with the same number of element positions as the number of elements in the list",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "fromList",
          "normalized": "[a]-\u003eMaybe(b a)",
          "package": "unfoldable",
          "partial": "List",
          "signature": "[a]-\u003eMaybe(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways choose the first constructor.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "leftMost",
          "package": "unfoldable",
          "signature": "Maybe (t ())",
          "source": "src/Data-Unfoldable.html#leftMost",
          "type": "function"
        },
        "index": {
          "description": "Always choose the first constructor",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "leftMost",
          "normalized": "Maybe(a())",
          "package": "unfoldable",
          "partial": "Most",
          "signature": "Maybe(t())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:leftMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a random value, can be used as default instance for \u003ccode\u003e\u003ca\u003eRandom\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "randomDefault",
          "package": "unfoldable",
          "signature": "g -\u003e (t a, g)",
          "source": "src/Data-Unfoldable.html#randomDefault",
          "type": "function"
        },
        "index": {
          "description": "Generate random value can be used as default instance for Random",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "randomDefault",
          "normalized": "a-\u003e(b c,a)",
          "package": "unfoldable",
          "partial": "Default",
          "signature": "g-\u003e(t a,g)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:randomDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlways choose the last constructor.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "rightMost",
          "package": "unfoldable",
          "signature": "Maybe (t ())",
          "source": "src/Data-Unfoldable.html#rightMost",
          "type": "function"
        },
        "index": {
          "description": "Always choose the last constructor",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "rightMost",
          "normalized": "Maybe(a())",
          "package": "unfoldable",
          "partial": "Most",
          "signature": "Maybe(t())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:rightMost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a way to generate elements, return a way to generate structures containing those elements.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "unfold",
          "package": "unfoldable",
          "signature": "f a -\u003e f (t a)",
          "source": "src/Data-Unfoldable.html#unfold",
          "type": "method"
        },
        "index": {
          "description": "Given way to generate elements return way to generate structures containing those elements",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "unfold",
          "normalized": "a b-\u003ea(c b)",
          "package": "unfoldable",
          "signature": "f a-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBreadth-first unfold, which orders the result by the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "unfoldBF",
          "package": "unfoldable",
          "signature": "f a -\u003e f (t a)",
          "source": "src/Data-Unfoldable.html#unfoldBF",
          "type": "function"
        },
        "index": {
          "description": "Breadth-first unfold which orders the result by the number of choose calls",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "unfoldBF",
          "normalized": "a b-\u003ea(c b)",
          "package": "unfoldable",
          "partial": "BF",
          "signature": "f a-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldBF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold the structure breadth-first, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "unfoldBF_",
          "package": "unfoldable",
          "signature": "f (t ())",
          "source": "src/Data-Unfoldable.html#unfoldBF_",
          "type": "function"
        },
        "index": {
          "description": "Unfold the structure breadth-first always using as elements",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "unfoldBF_",
          "normalized": "a(b())",
          "package": "unfoldable",
          "partial": "BF",
          "signature": "f(t())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldBF_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfold the structure, always using \u003ccode\u003e()\u003c/code\u003e as elements.\n\u003c/p\u003e",
          "module": "Data.Unfoldable",
          "name": "unfold_",
          "package": "unfoldable",
          "signature": "f (t ())",
          "source": "src/Data-Unfoldable.html#unfold_",
          "type": "function"
        },
        "index": {
          "description": "Unfold the structure always using as elements",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "unfold_",
          "normalized": "a(b())",
          "package": "unfoldable",
          "signature": "f(t())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfold_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eunfoldr\u003c/code\u003e builds a data structure from a seed value. It can be specified as:\n\u003c/p\u003e\u003cpre\u003e unfoldr f z == fromList (Data.List.unfoldr f z)\n\u003c/pre\u003e",
          "module": "Data.Unfoldable",
          "name": "unfoldr",
          "package": "unfoldable",
          "signature": "(b -\u003e Maybe (a, b)) -\u003e b -\u003e Maybe (t a)",
          "source": "src/Data-Unfoldable.html#unfoldr",
          "type": "function"
        },
        "index": {
          "description": "unfoldr builds data structure from seed value It can be specified as unfoldr fromList Data.List.unfoldr",
          "hierarchy": "Data Unfoldable",
          "module": "Data.Unfoldable",
          "name": "unfoldr",
          "normalized": "(a-\u003eMaybe(b,a))-\u003ea-\u003eMaybe(c b)",
          "package": "unfoldable",
          "signature": "(b-\u003eMaybe(a,b))-\u003eb-\u003eMaybe(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfoldable.html#v:unfoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnfolders provide a way to unfold data structures.\n They are basically \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instances, but the \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e method\n allows the unfolder to do something special for the recursive positions\n of the data structure.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Unfolder",
          "name": "Unfolder",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html",
          "type": "module"
        },
        "index": {
          "description": "Unfolders provide way to unfold data structures They are basically Alternative instances but the choose method allows the unfolder to do something special for the recursive positions of the data structure",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Unfolder",
          "package": "unfoldable",
          "partial": "Unfolder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of Test.QuickCheck.Gen, with failure \n and a count of the number of recursive positions.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "Arb",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#Arb",
          "type": "data"
        },
        "index": {
          "description": "variant of Test.QuickCheck.Gen with failure and count of the number of recursive positions",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Arb",
          "package": "unfoldable",
          "partial": "Arb",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Arb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a generator of values of a given depth.\n Returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no values of that depth or deeper.\n The depth is the number of \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e calls.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "BFS",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#BFS",
          "type": "newtype"
        },
        "index": {
          "description": "Return generator of values of given depth Returns Nothing if there are no values of that depth or deeper The depth is the number of choose calls",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "BFS",
          "package": "unfoldable",
          "partial": "BFS",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:BFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eDualA\u003c/a\u003e\u003c/code\u003e flips the \u003ccode\u003e\u003c|\u003e\u003c/code\u003e operator from \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "DualA",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#DualA",
          "type": "newtype"
        },
        "index": {
          "description": "DualA flips the operator from Alternative",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "DualA",
          "package": "unfoldable",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:DualA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNatural transformations\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "NT",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#NT",
          "type": "data"
        },
        "index": {
          "description": "Natural transformations",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "NT",
          "package": "unfoldable",
          "partial": "NT",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:NT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVariant of \u003ccode\u003e\u003ca\u003eConstant\u003c/a\u003e\u003c/code\u003e that does multiplication of the constants for \u003ccode\u003e\u003c*\u003e\u003c/code\u003e and addition for \u003ccode\u003e\u003c|\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "NumConst",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#NumConst",
          "type": "newtype"
        },
        "index": {
          "description": "Variant of Constant that does multiplication of the constants for and addition for",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "NumConst",
          "package": "unfoldable",
          "partial": "Num Const",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:NumConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "Random",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#Random",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Random",
          "package": "unfoldable",
          "partial": "Random",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "Split",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#Split",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Split",
          "package": "unfoldable",
          "partial": "Split",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfolders provide a way to unfold data structures.\n The methods have default implementations in terms of \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e,\n but you can implement \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e to act on recursive positions of the\n data structure, or simply to provide a faster implementation than \u003ccode\u003e\u003ca\u003easum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "Unfolder",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#Unfolder",
          "type": "class"
        },
        "index": {
          "description": "Unfolders provide way to unfold data structures The methods have default implementations in terms of Alternative but you can implement choose to act on recursive positions of the data structure or simply to provide faster implementation than asum",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Unfolder",
          "package": "unfoldable",
          "partial": "Unfolder",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:Unfolder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e changes the way an \u003ccode\u003e\u003ca\u003eUnfolder\u003c/a\u003e\u003c/code\u003e unfolds. \n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "UnfolderTransformer",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#UnfolderTransformer",
          "type": "class"
        },
        "index": {
          "description": "An UnfolderTransformer changes the way an Unfolder unfolds",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "UnfolderTransformer",
          "package": "unfoldable",
          "partial": "Unfolder Transformer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:UnfolderTransformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "WithRec",
          "package": "unfoldable",
          "source": "src/Data-Unfolder.html#WithRec",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "WithRec",
          "package": "unfoldable",
          "partial": "With Rec",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#t:WithRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "Arb",
          "package": "unfoldable",
          "signature": "Arb Int (StdGen -\u003e Int -\u003e Maybe a)",
          "source": "src/Data-Unfolder.html#Arb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Arb",
          "normalized": "Arb Int(StdGen-\u003eInt-\u003eMaybe a)",
          "package": "unfoldable",
          "partial": "Arb",
          "signature": "Arb Int(StdGen-\u003eInt-\u003eMaybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:Arb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "BFS",
          "package": "unfoldable",
          "signature": "BFS",
          "source": "src/Data-Unfolder.html#BFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "BFS",
          "package": "unfoldable",
          "partial": "BFS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:BFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "DualA",
          "package": "unfoldable",
          "signature": "DualA",
          "source": "src/Data-Unfolder.html#DualA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "DualA",
          "package": "unfoldable",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:DualA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "NT",
          "package": "unfoldable",
          "signature": "NT",
          "source": "src/Data-Unfolder.html#NT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "NT",
          "package": "unfoldable",
          "partial": "NT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:NT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "NumConst",
          "package": "unfoldable",
          "signature": "NumConst",
          "source": "src/Data-Unfolder.html#NumConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "NumConst",
          "package": "unfoldable",
          "partial": "Num Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:NumConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "Random",
          "package": "unfoldable",
          "signature": "Random",
          "source": "src/Data-Unfolder.html#Random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "Random",
          "package": "unfoldable",
          "partial": "Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:Random"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "WithRec",
          "package": "unfoldable",
          "signature": "WithRec",
          "source": "src/Data-Unfolder.html#WithRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "WithRec",
          "package": "unfoldable",
          "partial": "With Rec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:WithRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an unfolding function with one argument using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "ala",
          "package": "unfoldable",
          "signature": "(t f b -\u003e f b) -\u003e (t f a -\u003e t f b) -\u003e f a -\u003e f b",
          "source": "src/Data-Unfolder.html#ala",
          "type": "function"
        },
        "index": {
          "description": "Run an unfolding function with one argument using an UnfolderTransformer given way to run the transformer",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "ala",
          "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b c)-\u003eb d-\u003eb c",
          "package": "unfoldable",
          "signature": "(t f b-\u003ef b)-\u003e(t f a-\u003et f b)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an unfolding function with two arguments using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "ala2",
          "package": "unfoldable",
          "signature": "(t f c -\u003e f c) -\u003e (t f a -\u003e t f b -\u003e t f c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Unfolder.html#ala2",
          "type": "function"
        },
        "index": {
          "description": "Run an unfolding function with two arguments using an UnfolderTransformer given way to run the transformer",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "ala2",
          "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b e-\u003ea b c)-\u003eb d-\u003eb e-\u003eb c",
          "package": "unfoldable",
          "signature": "(t f c-\u003ef c)-\u003e(t f a-\u003et f b-\u003et f c)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an unfolding function with three arguments using an \u003ccode\u003e\u003ca\u003eUnfolderTransformer\u003c/a\u003e\u003c/code\u003e, given a way to run the transformer.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "ala3",
          "package": "unfoldable",
          "signature": "(t f d -\u003e f d) -\u003e (t f a -\u003e t f b -\u003e t f c -\u003e t f d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Data-Unfolder.html#ala3",
          "type": "function"
        },
        "index": {
          "description": "Run an unfolding function with three arguments using an UnfolderTransformer given way to run the transformer",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "ala3",
          "normalized": "(a b c-\u003eb c)-\u003e(a b d-\u003ea b e-\u003ea b f-\u003ea b c)-\u003eb d-\u003eb e-\u003eb f-\u003eb c",
          "package": "unfoldable",
          "signature": "(t f d-\u003ef d)-\u003e(t f a-\u003et f b-\u003et f c-\u003et f d)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:ala3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "arbUnit",
          "package": "unfoldable",
          "signature": "Arb a",
          "source": "src/Data-Unfolder.html#arbUnit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "arbUnit",
          "package": "unfoldable",
          "partial": "Unit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:arbUnit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a datatype is enumerable, we can use \u003ccode\u003e\u003ca\u003echooseInt\u003c/a\u003e\u003c/code\u003e to generate a value.\n This is the function to use if you want to unfold a datatype that has no type arguments (has kind \u003ccode\u003e*\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "between",
          "package": "unfoldable",
          "signature": "a -\u003e a -\u003e f a",
          "source": "src/Data-Unfolder.html#between",
          "type": "function"
        },
        "index": {
          "description": "If datatype is enumerable we can use chooseInt to generate value This is the function to use if you want to unfold datatype that has no type arguments has kind",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "between",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "unfoldable",
          "signature": "a-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebetweenD\u003c/a\u003e\u003c/code\u003e uses \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e to generate a value. It chooses between the lower bound and one\n   of the higher values. This means that f.e. breadth-first unfolding and arbitrary will prefer\n   lower values.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "betweenD",
          "package": "unfoldable",
          "signature": "a -\u003e a -\u003e f a",
          "source": "src/Data-Unfolder.html#betweenD",
          "type": "function"
        },
        "index": {
          "description": "betweenD uses choose to generate value It chooses between the lower bound and one of the higher values This means that f.e breadth-first unfolding and arbitrary will prefer lower values",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "betweenD",
          "normalized": "a-\u003ea-\u003eb a",
          "package": "unfoldable",
          "signature": "a-\u003ea-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:betweenD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the order of unfolding to be breadth-first, by maximum depth of the components.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "bfs",
          "package": "unfoldable",
          "signature": "BFS f x -\u003e f x",
          "source": "src/Data-Unfolder.html#bfs",
          "type": "function"
        },
        "index": {
          "description": "Change the order of unfolding to be breadth-first by maximum depth of the components",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "bfs",
          "normalized": "BFS a b-\u003ea b",
          "package": "unfoldable",
          "signature": "BFS f x-\u003ef x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:bfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange the order of unfolding to be breadth-first, by the sum of depths of the components.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "bfsBySum",
          "package": "unfoldable",
          "signature": "BFS f x -\u003e f x",
          "source": "src/Data-Unfolder.html#bfsBySum",
          "type": "function"
        },
        "index": {
          "description": "Change the order of unfolding to be breadth-first by the sum of depths of the components",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "bfsBySum",
          "normalized": "BFS a b-\u003ea b",
          "package": "unfoldable",
          "partial": "By Sum",
          "signature": "BFS f x-\u003ef x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:bfsBySum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf a datatype is also bounded, we choose between all possible values.\n\u003c/p\u003e\u003cpre\u003e boundedEnum = between minBound maxBound\n\u003c/pre\u003e",
          "module": "Data.Unfolder",
          "name": "boundedEnum",
          "package": "unfoldable",
          "signature": "f a",
          "source": "src/Data-Unfolder.html#boundedEnum",
          "type": "function"
        },
        "index": {
          "description": "If datatype is also bounded we choose between all possible values boundedEnum between minBound maxBound",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "boundedEnum",
          "package": "unfoldable",
          "partial": "Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:boundedEnum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e boundedEnumD = betweenD minBound maxBound\n\u003c/pre\u003e",
          "module": "Data.Unfolder",
          "name": "boundedEnumD",
          "package": "unfoldable",
          "signature": "f a",
          "source": "src/Data-Unfolder.html#boundedEnumD",
          "type": "function"
        },
        "index": {
          "description": "boundedEnumD betweenD minBound maxBound",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "boundedEnumD",
          "package": "unfoldable",
          "partial": "Enum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:boundedEnumD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose one of the values from the list.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "choose",
          "package": "unfoldable",
          "signature": "[f x] -\u003e f x",
          "source": "src/Data-Unfolder.html#choose",
          "type": "method"
        },
        "index": {
          "description": "Choose one of the values from the list",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "choose",
          "normalized": "[a b]-\u003ea b",
          "package": "unfoldable",
          "signature": "[f x]-\u003ef x",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:choose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a number \u003ccode\u003en\u003c/code\u003e, return a number between '0' and 'n - 1'.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "chooseInt",
          "package": "unfoldable",
          "signature": "Int -\u003e f Int",
          "source": "src/Data-Unfolder.html#chooseInt",
          "type": "method"
        },
        "index": {
          "description": "Given number return number between and",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "chooseInt",
          "normalized": "Int-\u003ea Int",
          "package": "unfoldable",
          "partial": "Int",
          "signature": "Int-\u003ef Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:chooseInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf an unfolder is monadic, \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e can be implemented in terms of \u003ccode\u003e\u003ca\u003echooseInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "chooseMonadDefault",
          "package": "unfoldable",
          "signature": "[m x] -\u003e m x",
          "source": "src/Data-Unfolder.html#chooseMonadDefault",
          "type": "function"
        },
        "index": {
          "description": "If an unfolder is monadic choose can be implemented in terms of chooseInt",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "chooseMonadDefault",
          "normalized": "[a b]-\u003ea b",
          "package": "unfoldable",
          "partial": "Monad Default",
          "signature": "[m x]-\u003em x",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:chooseMonadDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getBFS",
          "package": "unfoldable",
          "signature": "(Int, Split) -\u003e Maybe [f x]",
          "source": "src/Data-Unfolder.html#BFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getBFS",
          "normalized": "(Int,Split)-\u003eMaybe[a b]",
          "package": "unfoldable",
          "partial": "BFS",
          "signature": "(Int,Split)-\u003eMaybe[f x]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getBFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getDualA",
          "package": "unfoldable",
          "signature": "f a",
          "source": "src/Data-Unfolder.html#DualA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getDualA",
          "package": "unfoldable",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getDualA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getNT",
          "package": "unfoldable",
          "signature": "forall a.  f a -\u003e g a",
          "source": "src/Data-Unfolder.html#NT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getNT",
          "normalized": "a b c d-\u003ee d",
          "package": "unfoldable",
          "partial": "NT",
          "signature": "forall a. f a-\u003eg a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getNT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getNumConst",
          "package": "unfoldable",
          "signature": "a",
          "source": "src/Data-Unfolder.html#NumConst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getNumConst",
          "package": "unfoldable",
          "partial": "Num Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getNumConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getRandom",
          "package": "unfoldable",
          "signature": "StateT g m a",
          "source": "src/Data-Unfolder.html#Random",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getRandom",
          "package": "unfoldable",
          "partial": "Random",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getRandom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unfolder",
          "name": "getWithRec",
          "package": "unfoldable",
          "signature": "ReaderT (Int -\u003e NT f f) f a",
          "source": "src/Data-Unfolder.html#WithRec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "getWithRec",
          "normalized": "ReaderT(Int-\u003eNT a a)a b",
          "package": "unfoldable",
          "partial": "With Rec",
          "signature": "ReaderT(Int-\u003eNT f f)f a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:getWithRec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a computation from the argument unfolder to the constructed unfolder.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "lift",
          "package": "unfoldable",
          "signature": "f a -\u003e t f a",
          "source": "src/Data-Unfolder.html#lift",
          "type": "method"
        },
        "index": {
          "description": "Lift computation from the argument unfolder to the constructed unfolder",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "unfoldable",
          "signature": "f a-\u003et f a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLimit the depth of an unfolding.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "limitDepth",
          "package": "unfoldable",
          "signature": "Int -\u003e WithRec f a -\u003e f a",
          "source": "src/Data-Unfolder.html#limitDepth",
          "type": "function"
        },
        "index": {
          "description": "Limit the depth of an unfolding",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "limitDepth",
          "normalized": "Int-\u003eWithRec a b-\u003ea b",
          "package": "unfoldable",
          "partial": "Depth",
          "signature": "Int-\u003eWithRec f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:limitDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a certain function of type \u003ccode\u003ef a -\u003e f a\u003c/code\u003e to the result of a \u003ccode\u003e\u003ca\u003echoose\u003c/a\u003e\u003c/code\u003e.\n The depth is passed as \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, so you can apply a different function at each depth.\n Because of a \u003ccode\u003eforall\u003c/code\u003e, the function needs to be wrapped in a \u003ccode\u003e\u003ca\u003eNT\u003c/a\u003e\u003c/code\u003e constructor.\n See \u003ccode\u003e\u003ca\u003elimitDepth\u003c/a\u003e\u003c/code\u003e for an example how to use this function.\n\u003c/p\u003e",
          "module": "Data.Unfolder",
          "name": "withRec",
          "package": "unfoldable",
          "signature": "(Int -\u003e NT f f) -\u003e WithRec f a -\u003e f a",
          "source": "src/Data-Unfolder.html#withRec",
          "type": "function"
        },
        "index": {
          "description": "Apply certain function of type to the result of choose The depth is passed as Int so you can apply different function at each depth Because of forall the function needs to be wrapped in NT constructor See limitDepth for an example how to use this function",
          "hierarchy": "Data Unfolder",
          "module": "Data.Unfolder",
          "name": "withRec",
          "normalized": "(Int-\u003eNT a a)-\u003eWithRec a b-\u003ea b",
          "package": "unfoldable",
          "partial": "Rec",
          "signature": "(Int-\u003eNT f f)-\u003eWithRec f a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unfoldable/docs/Data-Unfolder.html#v:withRec"
      }
    }
  ]
]