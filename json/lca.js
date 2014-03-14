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
        "word": "lca"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides online calculation of the the lowest common ancestor in \u003cem\u003eO(log h)\u003c/em\u003e\n by compressing the spine of the paths using a skew-binary random access\n list.\n\u003c/p\u003e\u003cp\u003eThis library implements the technique described in my talk\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.slideshare.net/ekmett/skewbinary-online-lowest-common-ancestor-search\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eto improve the known asymptotic bounds on both online lowest common ancestor search\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Lowest_common_ancestor\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand the online level ancestor problem:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Level_ancestor_problem\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAlgorithms used here assume that the key values chosen for \u003ccode\u003ek\u003c/code\u003e are\n globally unique.\n\u003c/p\u003e\u003cp\u003eThis version provides access to a monoidal \"summary\" of the\n elided path for many operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "Monoidal",
          "package": "lca",
          "source": "src/Data-LCA-Online-Monoidal.html",
          "type": "module"
        },
        "index": {
          "description": "Provides online calculation of the the lowest common ancestor in log by compressing the spine of the paths using skew-binary random access list This library implements the technique described in my talk http www.slideshare.net ekmett skewbinary-online-lowest-common-ancestor-search to improve the known asymptotic bounds on both online lowest common ancestor search http en.wikipedia.org wiki Lowest common ancestor and the online level ancestor problem http en.wikipedia.org wiki Level ancestor problem Algorithms used here assume that the key values chosen for are globally unique This version provides access to monoidal summary of the elided path for many operations",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "Monoidal",
          "package": "lca",
          "partial": "Monoidal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA compressed \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e as a skew binary random access list\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "Path",
          "package": "lca",
          "source": "src/Data-LCA-Online-Monoidal.html#Path",
          "type": "data"
        },
        "index": {
          "description": "compressed Path as skew binary random access list",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "Path",
          "package": "lca",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Compare to see if two trees have the same leaf key\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "(~=)",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online-Monoidal.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "Compare to see if two trees have the same leaf key",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "(~=) ~=",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Invariant: most operations assume that the keys \u003ccode\u003ek\u003c/code\u003e are globally unique\n\u003c/p\u003e\u003cp\u003eExtend the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with a new node ID and value.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "cons",
          "package": "lca",
          "signature": "Int -\u003e a -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Invariant most operations assume that the keys are globally unique Extend the Path with new node ID and value",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "cons",
          "normalized": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log k)\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements from a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "drop",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#drop",
          "type": "function"
        },
        "index": {
          "description": "log to drop elements from Path",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "drop",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "empty",
          "package": "lca",
          "signature": "Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Path",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "empty",
          "package": "lca",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "fromList",
          "package": "lca",
          "signature": "[(Int, a)] -\u003e Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build Path from list of ID value pairs",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "fromList",
          "normalized": "[(Int,a)]-\u003ePath a",
          "package": "lca",
          "partial": "List",
          "signature": "[(Int,a)]-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log h)\u003c/em\u003e \u003ccode\u003exs `'isAncestorOf'` ys\u003c/code\u003e holds when \u003ccode\u003exs\u003c/code\u003e is a prefix starting at the root of path \u003ccode\u003eys\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "isAncestorOf",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online-Monoidal.html#isAncestorOf",
          "type": "function"
        },
        "index": {
          "description": "log xs isAncestorOf ys holds when xs is prefix starting at the root of path ys",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "isAncestorOf",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "partial": "Ancestor Of",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:isAncestorOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log (h - k))\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ekeep\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis solves the online version of the \"level ancestor problem\" with no preprocessing in \u003cem\u003eO(log h)\u003c/em\u003e time,\n improving known complexity bounds.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Level_ancestor_problem\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "keep",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#keep",
          "type": "function"
        },
        "index": {
          "description": "log to keep elements of Path of length This solves the online version of the level ancestor problem with no preprocessing in log time improving known complexity bounds http en.wikipedia.org wiki Level ancestor problem",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "keep",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log h)\u003c/em\u003e Compute the lowest common ancestor of two paths\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "lca",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#lca",
          "type": "function"
        },
        "index": {
          "description": "log Compute the lowest common ancestor of two paths",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "lca",
          "normalized": "Path a-\u003ePath b-\u003ePath a",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:lca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Determine the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "length",
          "package": "lca",
          "signature": "Path a -\u003e Int",
          "source": "src/Data-LCA-Online-Monoidal.html#length",
          "type": "function"
        },
        "index": {
          "description": "Determine the length of Path",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "length",
          "normalized": "Path a-\u003eInt",
          "package": "lca",
          "signature": "Path a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Re-annotate a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e full of monoidal values using a different \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "map",
          "package": "lca",
          "signature": "(a -\u003e b) -\u003e Path a -\u003e Path b",
          "source": "src/Data-LCA-Online-Monoidal.html#map",
          "type": "function"
        },
        "index": {
          "description": "Re-annotate Path full of monoidal values using different Monoid",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ePath a-\u003ePath b",
          "package": "lca",
          "signature": "(a-\u003eb)-\u003ePath a-\u003ePath b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Re-annotate a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e full of monoidal values/\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ccode\u003e\u003ca\u003emapHom\u003c/a\u003e\u003c/code\u003e f\u003c/code\u003e assumes that f is a \u003ccode\u003e\u003ca\u003eMonoid\u003c/a\u003e\u003c/code\u003e homomorphism, that is to say you must ensure\n\u003c/p\u003e\u003cpre\u003e\n f a `'mappend'` f b = f (a `'mappend'` b)\n f \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emempty\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mapHom",
          "package": "lca",
          "signature": "(a -\u003e b) -\u003e Path a -\u003e Path b",
          "source": "src/Data-LCA-Online-Monoidal.html#mapHom",
          "type": "function"
        },
        "index": {
          "description": "Re-annotate Path full of monoidal values Unlike map mapHom assumes that is Monoid homomorphism that is to say you must ensure mappend mappend mempty mempty",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mapHom",
          "normalized": "(a-\u003eb)-\u003ePath a-\u003ePath b",
          "package": "lca",
          "partial": "Hom",
          "signature": "(a-\u003eb)-\u003ePath a-\u003ePath b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:mapHom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Re-annotate a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e full of monoidal values with access to the key.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mapWithKey",
          "package": "lca",
          "signature": "(Int -\u003e a -\u003e b) -\u003e Path a -\u003e Path b",
          "source": "src/Data-LCA-Online-Monoidal.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "description": "Re-annotate Path full of monoidal values with access to the key",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mapWithKey",
          "normalized": "(Int-\u003ea-\u003eb)-\u003ePath a-\u003ePath b",
          "package": "lca",
          "partial": "With Key",
          "signature": "(Int-\u003ea-\u003eb)-\u003ePath a-\u003ePath b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log k)\u003c/em\u003e to drop \u003ccode\u003ek\u003c/code\u003e elements from a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e and provide a monoidal summary of the dropped elements\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mdrop",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e (a, Path a)",
          "source": "src/Data-LCA-Online-Monoidal.html#mdrop",
          "type": "function"
        },
        "index": {
          "description": "log to drop elements from Path and provide monoidal summary of the dropped elements",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mdrop",
          "normalized": "Int-\u003ePath a-\u003e(a,Path a)",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003e(a,Path a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:mdrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract a monoidal summary of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "measure",
          "package": "lca",
          "signature": "Path a -\u003e a",
          "source": "src/Data-LCA-Online-Monoidal.html#measure",
          "type": "function"
        },
        "index": {
          "description": "Extract monoidal summary of Path",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "measure",
          "normalized": "Path a-\u003ea",
          "package": "lca",
          "signature": "Path a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:measure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log (h - k))\u003c/em\u003e to keep \u003ccode\u003ek\u003c/code\u003e elements of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e, and provide a monoidal summary of the dropped elements\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mkeep",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e (a, Path a)",
          "source": "src/Data-LCA-Online-Monoidal.html#mkeep",
          "type": "function"
        },
        "index": {
          "description": "log to keep elements of Path of length and provide monoidal summary of the dropped elements",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mkeep",
          "normalized": "Int-\u003ePath a-\u003e(a,Path a)",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003e(a,Path a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:mkeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log h)\u003c/em\u003e Compute the lowest common ancestor of two paths along with a monoidal summary of their respective tails.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mlca",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e (a, Path a, b, Path b)",
          "source": "src/Data-LCA-Online-Monoidal.html#mlca",
          "type": "function"
        },
        "index": {
          "description": "log Compute the lowest common ancestor of two paths along with monoidal summary of their respective tails",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "mlca",
          "normalized": "Path a-\u003ePath b-\u003e(a,Path a,b,Path b)",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003e(a,Path a,b,Path b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:mlca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the path is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "null",
          "package": "lca",
          "signature": "Path a -\u003e Bool",
          "source": "src/Data-LCA-Online-Monoidal.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the path is empty",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "null",
          "normalized": "Path a-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "toList",
          "package": "lca",
          "signature": "Path a -\u003e [(Int, a)]",
          "source": "src/Data-LCA-Online-Monoidal.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert Path to list of ID value pairs",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "toList",
          "normalized": "Path a-\u003e[(Int,a)]",
          "package": "lca",
          "partial": "List",
          "signature": "Path a-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e yielding a new monoidal annotation.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "traverse",
          "package": "lca",
          "signature": "(a -\u003e f b) -\u003e Path a -\u003e f (Path b)",
          "source": "src/Data-LCA-Online-Monoidal.html#traverse",
          "type": "function"
        },
        "index": {
          "description": "Traverse Path yielding new monoidal annotation",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003ePath a-\u003eb(Path c)",
          "package": "lca",
          "signature": "(a-\u003ef b)-\u003ePath a-\u003ef(Path b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with access to the node IDs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "traverseWithKey",
          "package": "lca",
          "signature": "(Int -\u003e a -\u003e f b) -\u003e Path a -\u003e f (Path b)",
          "source": "src/Data-LCA-Online-Monoidal.html#traverseWithKey",
          "type": "function"
        },
        "index": {
          "description": "Traverse Path with access to the node IDs",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "traverseWithKey",
          "normalized": "(Int-\u003ea-\u003eb c)-\u003ePath a-\u003eb(Path c)",
          "package": "lca",
          "partial": "With Key",
          "signature": "(Int-\u003ea-\u003ef b)-\u003ePath a-\u003ef(Path b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "uncons",
          "package": "lca",
          "signature": "Path a -\u003e Maybe (Int, a, Path a)",
          "source": "src/Data-LCA-Online-Monoidal.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "uncons",
          "normalized": "Path a-\u003eMaybe(Int,a,Path a)",
          "package": "lca",
          "signature": "Path a-\u003eMaybe(Int,a,Path a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e, slightly faster than \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Monoidal",
          "name": "view",
          "package": "lca",
          "signature": "Path a -\u003e View Path a",
          "source": "src/Data-LCA-Online-Monoidal.html#view",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path slightly faster than uncons",
          "hierarchy": "Data LCA Online Monoidal",
          "module": "Data.LCA.Online.Monoidal",
          "name": "view",
          "normalized": "Path a-\u003eView Path a",
          "package": "lca",
          "signature": "Path a-\u003eView Path a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Monoidal.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eNaive online calculation of the the lowest common ancestor in \u003cem\u003eO(h)\u003c/em\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "Naive",
          "package": "lca",
          "source": "src/Data-LCA-Online-Naive.html",
          "type": "module"
        },
        "index": {
          "description": "Naive online calculation of the the lowest common ancestor in",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "Naive",
          "package": "lca",
          "partial": "Naive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn uncompressed \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with memoized length.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "Path",
          "package": "lca",
          "source": "src/Data-LCA-Online-Naive.html#Path",
          "type": "data"
        },
        "index": {
          "description": "An uncompressed Path with memoized length",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "Path",
          "package": "lca",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Compare to see if two trees have the same leaf key\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "(~=)",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online-Naive.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "Compare to see if two trees have the same leaf key",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "(~=) ~=",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Invariant: most operations assume that the keys \u003ccode\u003ek\u003c/code\u003e are globally unique\n\u003c/p\u003e\u003cp\u003eExtend the path with a new node ID and value.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "cons",
          "package": "lca",
          "signature": "Int -\u003e a -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Naive.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Invariant most operations assume that the keys are globally unique Extend the path with new node ID and value",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "cons",
          "normalized": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(k)\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements from a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "drop",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Naive.html#drop",
          "type": "function"
        },
        "index": {
          "description": "to drop elements from Path",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "drop",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe empty \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "empty",
          "package": "lca",
          "signature": "Path a",
          "source": "src/Data-LCA-Online-Naive.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Path",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "empty",
          "package": "lca",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "fromList",
          "package": "lca",
          "signature": "[(Int, a)] -\u003e Path a",
          "source": "src/Data-LCA-Online-Naive.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build Path from list of ID value pairs",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "fromList",
          "normalized": "[(Int,a)]-\u003ePath a",
          "package": "lca",
          "partial": "List",
          "signature": "[(Int,a)]-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(h)\u003c/em\u003e \u003ccode\u003exs \u003ccode\u003e\u003ca\u003eisAncestorOf\u003c/a\u003e\u003c/code\u003e ys\u003c/code\u003e holds when \u003ccode\u003exs\u003c/code\u003e is a prefix starting at the root of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "isAncestorOf",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online-Naive.html#isAncestorOf",
          "type": "function"
        },
        "index": {
          "description": "xs isAncestorOf ys holds when xs is prefix starting at the root of Path ys",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "isAncestorOf",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "partial": "Ancestor Of",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:isAncestorOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(h - k)\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ekeep\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "keep",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online-Naive.html#keep",
          "type": "function"
        },
        "index": {
          "description": "to keep elements of Path of length",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "keep",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(h)\u003c/em\u003e Compute the lowest common ancestor of two paths\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "lca",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Path a",
          "source": "src/Data-LCA-Online-Naive.html#lca",
          "type": "function"
        },
        "index": {
          "description": "Compute the lowest common ancestor of two paths",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "lca",
          "normalized": "Path a-\u003ePath b-\u003ePath a",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:lca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Determine the length of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "length",
          "package": "lca",
          "signature": "Path a -\u003e Int",
          "source": "src/Data-LCA-Online-Naive.html#length",
          "type": "function"
        },
        "index": {
          "description": "Determine the length of Path",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "length",
          "normalized": "Path a-\u003eInt",
          "package": "lca",
          "signature": "Path a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "null",
          "package": "lca",
          "signature": "Path a -\u003e Bool",
          "source": "src/Data-LCA-Online-Naive.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the Path is empty",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "null",
          "normalized": "Path a-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "toList",
          "package": "lca",
          "signature": "Path a -\u003e [(Int, a)]",
          "source": "src/Data-LCA-Online-Naive.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert Path to list of ID value pairs",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "toList",
          "normalized": "Path a-\u003e[(Int,a)]",
          "package": "lca",
          "partial": "List",
          "signature": "Path a-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with access to the node IDs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "traverseWithKey",
          "package": "lca",
          "signature": "(Int -\u003e a -\u003e f b) -\u003e Path a -\u003e f (Path b)",
          "source": "src/Data-LCA-Online-Naive.html#traverseWithKey",
          "type": "function"
        },
        "index": {
          "description": "Traverse Path with access to the node IDs",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "traverseWithKey",
          "normalized": "(Int-\u003ea-\u003eb c)-\u003ePath a-\u003eb(Path c)",
          "package": "lca",
          "partial": "With Key",
          "signature": "(Int-\u003ea-\u003ef b)-\u003ePath a-\u003ef(Path b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "uncons",
          "package": "lca",
          "signature": "Path a -\u003e Maybe (Int, a, Path a)",
          "source": "src/Data-LCA-Online-Naive.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "uncons",
          "normalized": "Path a-\u003eMaybe(Int,a,Path a)",
          "package": "lca",
          "signature": "Path a-\u003eMaybe(Int,a,Path a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e, slightly faster than \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online.Naive",
          "name": "view",
          "package": "lca",
          "signature": "Path a -\u003e View Path a",
          "source": "src/Data-LCA-Online-Naive.html#view",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path slightly faster than uncons",
          "hierarchy": "Data LCA Online Naive",
          "module": "Data.LCA.Online.Naive",
          "name": "view",
          "normalized": "Path a-\u003eView Path a",
          "package": "lca",
          "signature": "Path a-\u003eView Path a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online-Naive.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides online calculation of the the lowest common ancestor in \u003cem\u003eO(log h)\u003c/em\u003e\n by compressing the spine of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e using a skew-binary random access\n list.\n\u003c/p\u003e\u003cp\u003eThis library implements the technique described in my talk\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://www.slideshare.net/ekmett/skewbinary-online-lowest-common-ancestor-search\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eto improve the known asymptotic bounds on both online lowest common ancestor search\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Lowest_common_ancestor\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eand the online level ancestor problem:\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Level_ancestor_problem\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eAlgorithms used here assume that the key values chosen for \u003ccode\u003ek\u003c/code\u003e are\n globally unique.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.LCA.Online",
          "name": "Online",
          "package": "lca",
          "source": "src/Data-LCA-Online.html",
          "type": "module"
        },
        "index": {
          "description": "Provides online calculation of the the lowest common ancestor in log by compressing the spine of Path using skew-binary random access list This library implements the technique described in my talk http www.slideshare.net ekmett skewbinary-online-lowest-common-ancestor-search to improve the known asymptotic bounds on both online lowest common ancestor search http en.wikipedia.org wiki Lowest common ancestor and the online level ancestor problem http en.wikipedia.org wiki Level ancestor problem Algorithms used here assume that the key values chosen for are globally unique",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "Online",
          "package": "lca",
          "partial": "Online",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompressed paths using skew binary random access lists\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "Path",
          "package": "lca",
          "source": "src/Data-LCA-Online.html#Path",
          "type": "data"
        },
        "index": {
          "description": "Compressed paths using skew binary random access lists",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "Path",
          "package": "lca",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Compare to see if two trees have the same leaf key\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "(~=)",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online.html#~%3D",
          "type": "function"
        },
        "index": {
          "description": "Compare to see if two trees have the same leaf key",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "(~=) ~=",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:-126--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Invariant: most operations assume that the keys \u003ccode\u003ek\u003c/code\u003e are globally unique\n\u003c/p\u003e\u003cp\u003eExtend the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with a new node ID and value.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "cons",
          "package": "lca",
          "signature": "Int -\u003e a -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online.html#cons",
          "type": "function"
        },
        "index": {
          "description": "Invariant most operations assume that the keys are globally unique Extend the Path with new node ID and value",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "cons",
          "normalized": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ea-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log k)\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements from a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "drop",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online.html#drop",
          "type": "function"
        },
        "index": {
          "description": "log to drop elements from Path",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "drop",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "empty",
          "package": "lca",
          "signature": "Path a",
          "source": "src/Data-LCA-Online.html#empty",
          "type": "function"
        },
        "index": {
          "description": "The empty Path",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "empty",
          "package": "lca",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e from a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "fromList",
          "package": "lca",
          "signature": "[(Int, a)] -\u003e Path a",
          "source": "src/Data-LCA-Online.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Build Path from list of ID value pairs",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "fromList",
          "normalized": "[(Int,a)]-\u003ePath a",
          "package": "lca",
          "partial": "List",
          "signature": "[(Int,a)]-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log h)\u003c/em\u003e \u003ccode\u003exs \u003ccode\u003e\u003ca\u003eisAncestorOf\u003c/a\u003e\u003c/code\u003e ys\u003c/code\u003e holds when \u003ccode\u003exs\u003c/code\u003e is a prefix starting at the root of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eys\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "isAncestorOf",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Bool",
          "source": "src/Data-LCA-Online.html#isAncestorOf",
          "type": "function"
        },
        "index": {
          "description": "log xs isAncestorOf ys holds when xs is prefix starting at the root of Path ys",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "isAncestorOf",
          "normalized": "Path a-\u003ePath b-\u003eBool",
          "package": "lca",
          "partial": "Ancestor Of",
          "signature": "Path a-\u003ePath b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:isAncestorOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log (h - k))\u003c/em\u003e to \u003ccode\u003e\u003ccode\u003e\u003ca\u003ekeep\u003c/a\u003e\u003c/code\u003e k\u003c/code\u003e elements of \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eh\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eThis solves the online version of the \"level ancestor problem\" with no preprocessing in \u003cem\u003eO(log h)\u003c/em\u003e time,\n improving known complexity bounds.\n\u003c/p\u003e\u003cp\u003e\u003ca\u003ehttp://en.wikipedia.org/wiki/Level_ancestor_problem\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "keep",
          "package": "lca",
          "signature": "Int -\u003e Path a -\u003e Path a",
          "source": "src/Data-LCA-Online.html#keep",
          "type": "function"
        },
        "index": {
          "description": "log to keep elements of Path of length This solves the online version of the level ancestor problem with no preprocessing in log time improving known complexity bounds http en.wikipedia.org wiki Level ancestor problem",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "keep",
          "normalized": "Int-\u003ePath a-\u003ePath a",
          "package": "lca",
          "signature": "Int-\u003ePath a-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:keep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log h)\u003c/em\u003e Compute the lowest common ancestor of two paths.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "lca",
          "package": "lca",
          "signature": "Path a -\u003e Path b -\u003e Path a",
          "source": "src/Data-LCA-Online.html#lca",
          "type": "function"
        },
        "index": {
          "description": "log Compute the lowest common ancestor of two paths",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "lca",
          "normalized": "Path a-\u003ePath b-\u003ePath a",
          "package": "lca",
          "signature": "Path a-\u003ePath b-\u003ePath a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:lca"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Determine the \u003ccode\u003e\u003ca\u003elength\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "length",
          "package": "lca",
          "signature": "Path a -\u003e Int",
          "source": "src/Data-LCA-Online.html#length",
          "type": "function"
        },
        "index": {
          "description": "Determine the length of Path",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "length",
          "normalized": "Path a-\u003eInt",
          "package": "lca",
          "signature": "Path a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e iff the path is \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "null",
          "package": "lca",
          "signature": "Path a -\u003e Bool",
          "source": "src/Data-LCA-Online.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns True iff the path is empty",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "null",
          "normalized": "Path a-\u003eBool",
          "package": "lca",
          "signature": "Path a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e to a list of \u003ccode\u003e(ID, value)\u003c/code\u003e pairs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "toList",
          "package": "lca",
          "signature": "Path a -\u003e [(Int, a)]",
          "source": "src/Data-LCA-Online.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Convert Path to list of ID value pairs",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "toList",
          "normalized": "Path a-\u003e[(Int,a)]",
          "package": "lca",
          "partial": "List",
          "signature": "Path a-\u003e[(Int,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraverse a \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e with access to the node IDs.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "traverseWithKey",
          "package": "lca",
          "signature": "(Int -\u003e a -\u003e f b) -\u003e Path a -\u003e f (Path b)",
          "source": "src/Data-LCA-Online.html#traverseWithKey",
          "type": "function"
        },
        "index": {
          "description": "Traverse Path with access to the node IDs",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "traverseWithKey",
          "normalized": "(Int-\u003ea-\u003eb c)-\u003ePath a-\u003eb(Path c)",
          "package": "lca",
          "partial": "With Key",
          "signature": "(Int-\u003ea-\u003ef b)-\u003ePath a-\u003ef(Path b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "uncons",
          "package": "lca",
          "signature": "Path a -\u003e Maybe (Int, a, Path a)",
          "source": "src/Data-LCA-Online.html#uncons",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "uncons",
          "normalized": "Path a-\u003eMaybe(Int,a,Path a)",
          "package": "lca",
          "signature": "Path a-\u003eMaybe(Int,a,Path a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the node ID and value from the newest node on the \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003e, slightly faster than \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.LCA.Online",
          "name": "view",
          "package": "lca",
          "signature": "Path a -\u003e View Path a",
          "source": "src/Data-LCA-Online.html#view",
          "type": "function"
        },
        "index": {
          "description": "Extract the node ID and value from the newest node on the Path slightly faster than uncons",
          "hierarchy": "Data LCA Online",
          "module": "Data.LCA.Online",
          "name": "view",
          "normalized": "Path a-\u003eView Path a",
          "package": "lca",
          "signature": "Path a-\u003eView Path a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-Online.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LCA.View",
          "name": "View",
          "package": "lca",
          "source": "src/Data-LCA-View.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data LCA View",
          "module": "Data.LCA.View",
          "name": "View",
          "package": "lca",
          "partial": "View",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-View.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a consistent \u003ccode\u003e\u003ca\u003eView\u003c/a\u003e\u003c/code\u003e for peeling off the bottom node of a path.\n\u003c/p\u003e",
          "module": "Data.LCA.View",
          "name": "View",
          "package": "lca",
          "source": "src/Data-LCA-View.html#View",
          "type": "data"
        },
        "index": {
          "description": "Provides consistent View for peeling off the bottom node of path",
          "hierarchy": "Data LCA View",
          "module": "Data.LCA.View",
          "name": "View",
          "package": "lca",
          "partial": "View",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-View.html#t:View"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LCA.View",
          "name": "Node",
          "package": "lca",
          "signature": "Node !Int a (f a)",
          "source": "src/Data-LCA-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LCA View",
          "module": "Data.LCA.View",
          "name": "Node",
          "package": "lca",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-View.html#v:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.LCA.View",
          "name": "Root",
          "package": "lca",
          "signature": "Root",
          "source": "src/Data-LCA-View.html#View",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data LCA View",
          "module": "Data.LCA.View",
          "name": "Root",
          "package": "lca",
          "partial": "Root",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/lca/docs/Data-LCA-View.html#v:Root"
      }
    }
  ]
]