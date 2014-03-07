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
        "word": "universe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Helpers",
          "name": "Helpers",
          "package": "universe",
          "source": "src/Data-Universe-Helpers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "Helpers",
          "package": "universe",
          "partial": "Helpers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlightly unfair 2-way Cartesian product: given two (possibly infinite)\n lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e have finite\n indices in the input lists, \u003ccode\u003e(v,w)\u003c/code\u003e has finite index in the output list.\n Lower indices occur as the \u003ccode\u003efst\u003c/code\u003e part of the tuple more frequently, but not\n exponentially so.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "(+*+)",
          "package": "universe",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Data-Universe-Helpers.html#%2B%2A%2B",
          "type": "function"
        },
        "index": {
          "description": "Slightly unfair way Cartesian product given two possibly infinite lists produce single list such that whenever and have finite indices in the input lists has finite index in the output list Lower indices occur as the fst part of the tuple more frequently but not exponentially so",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "(+*+) +*+",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "universe",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:-43--42--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFair 2-way interleaving.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "(+++)",
          "package": "universe",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Data-Universe-Helpers.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "description": "Fair way interleaving",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "(+++) +++",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "universe",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlightly unfair n-way Cartesian product: given a finite number of\n (possibly infinite) lists, produce a single list such that whenever \u003ccode\u003evi\u003c/code\u003e has\n finite index in list i for each i, \u003ccode\u003e[v1, ..., vn]\u003c/code\u003e has finite index in the\n output list.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "choices",
          "package": "universe",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Data-Universe-Helpers.html#choices",
          "type": "function"
        },
        "index": {
          "description": "Slightly unfair n-way Cartesian product given finite number of possibly infinite lists produce single list such that whenever vi has finite index in list for each v1 vn has finite index in the output list",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "choices",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "universe",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:choices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnfair n-way interleaving: given a possibly infinite number of (possibly\n infinite) lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e has finite\n index in an input list at finite index, \u003ccode\u003ev\u003c/code\u003e also has finite index in the\n output list. Elements from lists at lower index occur more frequently, but\n not exponentially so.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "diagonal",
          "package": "universe",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-Universe-Helpers.html#diagonal",
          "type": "function"
        },
        "index": {
          "description": "Unfair n-way interleaving given possibly infinite number of possibly infinite lists produce single list such that whenever has finite index in an input list at finite index also has finite index in the output list Elements from lists at lower index occur more frequently but not exponentially so",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "diagonal",
          "normalized": "[[a]]-\u003e[a]",
          "package": "universe",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:diagonal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFair n-way interleaving: given a finite number of (possibly infinite)\n lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e has finite index in one\n of the input lists, \u003ccode\u003ev\u003c/code\u003e also has finite index in the output list. No list's\n elements occur more frequently (on average) than another's.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "interleave",
          "package": "universe",
          "signature": "[[a]] -\u003e [a]",
          "source": "src/Data-Universe-Helpers.html#interleave",
          "type": "function"
        },
        "index": {
          "description": "Fair n-way interleaving given finite number of possibly infinite lists produce single list such that whenever has finite index in one of the input lists also has finite index in the output list No list elements occur more frequently on average than another",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "interleave",
          "normalized": "[[a]]-\u003e[a]",
          "package": "universe",
          "signature": "[[a]]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery unfair 2-way Cartesian product: same guarantee as the slightly unfair\n one, except that lower indices may occur as the \u003ccode\u003efst\u003c/code\u003e part of the tuple\n exponentially more frequently. This mainly exists as a specification to test\n against.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "unfairCartesianProduct",
          "package": "universe",
          "signature": "[a] -\u003e [b] -\u003e [(a, b)]",
          "source": "src/Data-Universe-Helpers.html#unfairCartesianProduct",
          "type": "function"
        },
        "index": {
          "description": "Very unfair way Cartesian product same guarantee as the slightly unfair one except that lower indices may occur as the fst part of the tuple exponentially more frequently This mainly exists as specification to test against",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "unfairCartesianProduct",
          "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
          "package": "universe",
          "partial": "Cartesian Product",
          "signature": "[a]-\u003e[b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:unfairCartesianProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery unfair n-way Cartesian product: same guarantee as the slightly unfair\n one, but not as good in the same sense that the very unfair 2-way product is\n worse than the slightly unfair 2-way product. Mainly for testing purposes.\n\u003c/p\u003e",
          "module": "Data.Universe.Helpers",
          "name": "unfairChoices",
          "package": "universe",
          "signature": "[[a]] -\u003e [[a]]",
          "source": "src/Data-Universe-Helpers.html#unfairChoices",
          "type": "function"
        },
        "index": {
          "description": "Very unfair n-way Cartesian product same guarantee as the slightly unfair one but not as good in the same sense that the very unfair way product is worse than the slightly unfair way product Mainly for testing purposes",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "unfairChoices",
          "normalized": "[[a]]-\u003e[[a]]",
          "package": "universe",
          "partial": "Choices",
          "signature": "[[a]]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:unfairChoices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor many types, the \u003ccode\u003euniverse\u003c/code\u003e should be \u003ccode\u003e[minBound .. maxBound]\u003c/code\u003e;\n \u003ccode\u003e\u003ca\u003euniverseDef\u003c/a\u003e\u003c/code\u003e makes it easy to make such types an instance of \u003ccode\u003eUniverse\u003c/code\u003e via\n the snippet\n\u003c/p\u003e\u003cpre\u003e instance Universe Foo where universe = universeDef\n\u003c/pre\u003e",
          "module": "Data.Universe.Helpers",
          "name": "universeDef",
          "package": "universe",
          "signature": "[a]",
          "source": "src/Data-Universe-Helpers.html#universeDef",
          "type": "function"
        },
        "index": {
          "description": "For many types the universe should be minBound maxBound universeDef makes it easy to make such types an instance of Universe via the snippet instance Universe Foo where universe universeDef",
          "hierarchy": "Data Universe Helpers",
          "module": "Data.Universe.Helpers",
          "name": "universeDef",
          "normalized": "[a]",
          "package": "universe",
          "partial": "Def",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:universeDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances.Eq",
          "name": "Eq",
          "package": "universe",
          "source": "src/Data-Universe-Instances-Eq.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances Eq",
          "module": "Data.Universe.Instances.Eq",
          "name": "Eq",
          "package": "universe",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances.Ord",
          "name": "Ord",
          "package": "universe",
          "source": "src/Data-Universe-Instances-Ord.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances Ord",
          "module": "Data.Universe.Instances.Ord",
          "name": "Ord",
          "package": "universe",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances.Read",
          "name": "Read",
          "package": "universe",
          "source": "src/Data-Universe-Instances-Read.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances Read",
          "module": "Data.Universe.Instances.Read",
          "name": "Read",
          "package": "universe",
          "partial": "Read",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Read.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances.Show",
          "name": "Show",
          "package": "universe",
          "source": "src/Data-Universe-Instances-Show.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances Show",
          "module": "Data.Universe.Instances.Show",
          "name": "Show",
          "package": "universe",
          "partial": "Show",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Show.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances.Traversable",
          "name": "Traversable",
          "package": "universe",
          "source": "src/Data-Universe-Instances-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances Traversable",
          "module": "Data.Universe.Instances.Traversable",
          "name": "Traversable",
          "package": "universe",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe.Instances",
          "name": "Instances",
          "package": "universe",
          "source": "src/Data-Universe-Instances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe Instances",
          "module": "Data.Universe.Instances",
          "name": "Instances",
          "package": "universe",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe",
          "name": "Universe",
          "package": "universe",
          "source": "src/Data-Universe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Universe",
          "module": "Data.Universe",
          "name": "Universe",
          "package": "universe",
          "partial": "Universe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating an instance of this class is a declaration that your \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e\n eventually ends. Minimal definition: no methods defined. By default,\n \u003ccode\u003euniverseF = universe\u003c/code\u003e, but for some types (like \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003e\u003ca\u003euniverseF\u003c/a\u003e\u003c/code\u003e\n method may have a more intuitive ordering.\n\u003c/p\u003e",
          "module": "Data.Universe",
          "name": "Finite",
          "package": "universe",
          "source": "src/Data-Universe.html#Finite",
          "type": "class"
        },
        "index": {
          "description": "Creating an instance of this class is declaration that your universe eventually ends Minimal definition no methods defined By default universeF universe but for some types like Either the universeF method may have more intuitive ordering",
          "hierarchy": "Data Universe",
          "module": "Data.Universe",
          "name": "Finite",
          "package": "universe",
          "partial": "Finite",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#t:Finite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreating an instance of this class is a declaration that your type is\n recursively enumerable (and that \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is that enumeration). In\n particular, you promise that any finite inhabitant has a finite index in\n \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e, and that no inhabitant appears at two different finite indices.\n\u003c/p\u003e",
          "module": "Data.Universe",
          "name": "Universe",
          "package": "universe",
          "source": "src/Data-Universe.html#Universe",
          "type": "class"
        },
        "index": {
          "description": "Creating an instance of this class is declaration that your type is recursively enumerable and that universe is that enumeration In particular you promise that any finite inhabitant has finite index in universe and that no inhabitant appears at two different finite indices",
          "hierarchy": "Data Universe",
          "module": "Data.Universe",
          "name": "Universe",
          "package": "universe",
          "partial": "Universe",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#t:Universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe",
          "name": "universe",
          "package": "universe",
          "signature": "[a]",
          "source": "src/Data-Universe.html#universe",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Universe",
          "module": "Data.Universe",
          "name": "universe",
          "normalized": "[a]",
          "package": "universe",
          "signature": "[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#v:universe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Universe",
          "name": "universeF",
          "package": "universe",
          "signature": "[a]",
          "source": "src/Data-Universe.html#universeF",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Universe",
          "module": "Data.Universe",
          "name": "universeF",
          "normalized": "[a]",
          "package": "universe",
          "signature": "[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#v:universeF"
      }
    }
  ]
]