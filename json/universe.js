[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#",
      "description": {
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Helpers.html",
        "fct-type": "module",
        "title": "Helpers"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "Helpers",
        "normalized": "",
        "package": "universe",
        "partial": "Helpers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:-43--42--43-",
      "description": {
        "fct-descr": "\u003cp\u003eSlightly unfair 2-way Cartesian product: given two (possibly infinite)\n lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e and \u003ccode\u003ew\u003c/code\u003e have finite\n indices in the input lists, \u003ccode\u003e(v,w)\u003c/code\u003e has finite index in the output list.\n Lower indices occur as the \u003ccode\u003efst\u003c/code\u003e part of the tuple more frequently, but not\n exponentially so.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[a] -\u003e [b] -\u003e [(a, b)]",
        "fct-source": "src/Data-Universe-Helpers.html#%2B%2A%2B",
        "fct-type": "function",
        "title": "(+*+)"
      },
      "index": {
        "description": "Slightly unfair way Cartesian product given two possibly infinite lists produce single list such that whenever and have finite indices in the input lists has finite index in the output list Lower indices occur as the fst part of the tuple more frequently but not exponentially so",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "(+*+) +*+",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "universe",
        "partial": "",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:-43--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eFair 2-way interleaving.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Data-Universe-Helpers.html#%2B%2B%2B",
        "fct-type": "function",
        "title": "(+++)"
      },
      "index": {
        "description": "Fair way interleaving",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "(+++) +++",
        "normalized": "[a]-\u003e[a]-\u003e[a]",
        "package": "universe",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:choices",
      "description": {
        "fct-descr": "\u003cp\u003eSlightly unfair n-way Cartesian product: given a finite number of\n (possibly infinite) lists, produce a single list such that whenever \u003ccode\u003evi\u003c/code\u003e has\n finite index in list i for each i, \u003ccode\u003e[v1, ..., vn]\u003c/code\u003e has finite index in the\n output list.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Data-Universe-Helpers.html#choices",
        "fct-type": "function",
        "title": "choices"
      },
      "index": {
        "description": "Slightly unfair n-way Cartesian product given finite number of possibly infinite lists produce single list such that whenever vi has finite index in list for each v1 vn has finite index in the output list",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "choices",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "universe",
        "partial": "",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:diagonal",
      "description": {
        "fct-descr": "\u003cp\u003eUnfair n-way interleaving: given a possibly infinite number of (possibly\n infinite) lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e has finite\n index in an input list at finite index, \u003ccode\u003ev\u003c/code\u003e also has finite index in the\n output list. Elements from lists at lower index occur more frequently, but\n not exponentially so.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Data-Universe-Helpers.html#diagonal",
        "fct-type": "function",
        "title": "diagonal"
      },
      "index": {
        "description": "Unfair n-way interleaving given possibly infinite number of possibly infinite lists produce single list such that whenever has finite index in an input list at finite index also has finite index in the output list Elements from lists at lower index occur more frequently but not exponentially so",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "diagonal",
        "normalized": "[[a]]-\u003e[a]",
        "package": "universe",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:interleave",
      "description": {
        "fct-descr": "\u003cp\u003eFair n-way interleaving: given a finite number of (possibly infinite)\n lists, produce a single list such that whenever \u003ccode\u003ev\u003c/code\u003e has finite index in one\n of the input lists, \u003ccode\u003ev\u003c/code\u003e also has finite index in the output list. No list's\n elements occur more frequently (on average) than another's.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[[a]] -\u003e [a]",
        "fct-source": "src/Data-Universe-Helpers.html#interleave",
        "fct-type": "function",
        "title": "interleave"
      },
      "index": {
        "description": "Fair n-way interleaving given finite number of possibly infinite lists produce single list such that whenever has finite index in one of the input lists also has finite index in the output list No list elements occur more frequently on average than another",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "interleave",
        "normalized": "[[a]]-\u003e[a]",
        "package": "universe",
        "partial": "",
        "signature": "[[a]]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:unfairCartesianProduct",
      "description": {
        "fct-descr": "\u003cp\u003eVery unfair 2-way Cartesian product: same guarantee as the slightly unfair\n one, except that lower indices may occur as the \u003ccode\u003efst\u003c/code\u003e part of the tuple\n exponentially more frequently. This mainly exists as a specification to test\n against.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[a] -\u003e [b] -\u003e [(a, b)]",
        "fct-source": "src/Data-Universe-Helpers.html#unfairCartesianProduct",
        "fct-type": "function",
        "title": "unfairCartesianProduct"
      },
      "index": {
        "description": "Very unfair way Cartesian product same guarantee as the slightly unfair one except that lower indices may occur as the fst part of the tuple exponentially more frequently This mainly exists as specification to test against",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "unfairCartesianProduct",
        "normalized": "[a]-\u003e[b]-\u003e[(a,b)]",
        "package": "universe",
        "partial": "Cartesian Product",
        "signature": "[a]-\u003e[b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:unfairChoices",
      "description": {
        "fct-descr": "\u003cp\u003eVery unfair n-way Cartesian product: same guarantee as the slightly unfair\n one, but not as good in the same sense that the very unfair 2-way product is\n worse than the slightly unfair 2-way product. Mainly for testing purposes.\n\u003c/p\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Data-Universe-Helpers.html#unfairChoices",
        "fct-type": "function",
        "title": "unfairChoices"
      },
      "index": {
        "description": "Very unfair n-way Cartesian product same guarantee as the slightly unfair one but not as good in the same sense that the very unfair way product is worse than the slightly unfair way product Mainly for testing purposes",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "unfairChoices",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "universe",
        "partial": "Choices",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Helpers.html#v:universeDef",
      "description": {
        "fct-descr": "\u003cp\u003eFor many types, the \u003ccode\u003euniverse\u003c/code\u003e should be \u003ccode\u003e[minBound .. maxBound]\u003c/code\u003e;\n \u003ccode\u003e\u003ca\u003euniverseDef\u003c/a\u003e\u003c/code\u003e makes it easy to make such types an instance of \u003ccode\u003eUniverse\u003c/code\u003e via\n the snippet\n\u003c/p\u003e\u003cpre\u003e instance Universe Foo where universe = universeDef\n\u003c/pre\u003e",
        "fct-module": "Data.Universe.Helpers",
        "fct-package": "universe",
        "fct-signature": "[a]",
        "fct-source": "src/Data-Universe-Helpers.html#universeDef",
        "fct-type": "function",
        "title": "universeDef"
      },
      "index": {
        "description": "For many types the universe should be minBound maxBound universeDef makes it easy to make such types an instance of Universe via the snippet instance Universe Foo where universe universeDef",
        "hierarchy": "Data Universe Helpers",
        "module": "Data.Universe.Helpers",
        "name": "universeDef",
        "normalized": "[a]",
        "package": "universe",
        "partial": "Def",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Eq.html#",
      "description": {
        "fct-module": "Data.Universe.Instances.Eq",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances-Eq.html",
        "fct-type": "module",
        "title": "Eq"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances Eq",
        "module": "Data.Universe.Instances.Eq",
        "name": "Eq",
        "normalized": "",
        "package": "universe",
        "partial": "Eq",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Ord.html#",
      "description": {
        "fct-module": "Data.Universe.Instances.Ord",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances-Ord.html",
        "fct-type": "module",
        "title": "Ord"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances Ord",
        "module": "Data.Universe.Instances.Ord",
        "name": "Ord",
        "normalized": "",
        "package": "universe",
        "partial": "Ord",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Read.html#",
      "description": {
        "fct-module": "Data.Universe.Instances.Read",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances-Read.html",
        "fct-type": "module",
        "title": "Read"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances Read",
        "module": "Data.Universe.Instances.Read",
        "name": "Read",
        "normalized": "",
        "package": "universe",
        "partial": "Read",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Show.html#",
      "description": {
        "fct-module": "Data.Universe.Instances.Show",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances-Show.html",
        "fct-type": "module",
        "title": "Show"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances Show",
        "module": "Data.Universe.Instances.Show",
        "name": "Show",
        "normalized": "",
        "package": "universe",
        "partial": "Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances-Traversable.html#",
      "description": {
        "fct-module": "Data.Universe.Instances.Traversable",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances-Traversable.html",
        "fct-type": "module",
        "title": "Traversable"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances Traversable",
        "module": "Data.Universe.Instances.Traversable",
        "name": "Traversable",
        "normalized": "",
        "package": "universe",
        "partial": "Traversable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe-Instances.html#",
      "description": {
        "fct-module": "Data.Universe.Instances",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe Instances",
        "module": "Data.Universe.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "universe",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#",
      "description": {
        "fct-module": "Data.Universe",
        "fct-package": "universe",
        "fct-signature": "module",
        "fct-source": "src/Data-Universe.html",
        "fct-type": "module",
        "title": "Universe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe",
        "module": "Data.Universe",
        "name": "Universe",
        "normalized": "",
        "package": "universe",
        "partial": "Universe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#t:Finite",
      "description": {
        "fct-descr": "\u003cp\u003eCreating an instance of this class is a declaration that your \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e\n eventually ends. Minimal definition: no methods defined. By default,\n \u003ccode\u003euniverseF = universe\u003c/code\u003e, but for some types (like \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e) the \u003ccode\u003e\u003ca\u003euniverseF\u003c/a\u003e\u003c/code\u003e\n method may have a more intuitive ordering.\n\u003c/p\u003e",
        "fct-module": "Data.Universe",
        "fct-package": "universe",
        "fct-signature": "class",
        "fct-source": "src/Data-Universe.html#Finite",
        "fct-type": "class",
        "title": "Finite"
      },
      "index": {
        "description": "Creating an instance of this class is declaration that your universe eventually ends Minimal definition no methods defined By default universeF universe but for some types like Either the universeF method may have more intuitive ordering",
        "hierarchy": "Data Universe",
        "module": "Data.Universe",
        "name": "Finite",
        "normalized": "",
        "package": "universe",
        "partial": "Finite",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#t:Universe",
      "description": {
        "fct-descr": "\u003cp\u003eCreating an instance of this class is a declaration that your type is\n recursively enumerable (and that \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e is that enumeration). In\n particular, you promise that any finite inhabitant has a finite index in\n \u003ccode\u003e\u003ca\u003euniverse\u003c/a\u003e\u003c/code\u003e, and that no inhabitant appears at two different finite indices.\n\u003c/p\u003e",
        "fct-module": "Data.Universe",
        "fct-package": "universe",
        "fct-signature": "class",
        "fct-source": "src/Data-Universe.html#Universe",
        "fct-type": "class",
        "title": "Universe"
      },
      "index": {
        "description": "Creating an instance of this class is declaration that your type is recursively enumerable and that universe is that enumeration In particular you promise that any finite inhabitant has finite index in universe and that no inhabitant appears at two different finite indices",
        "hierarchy": "Data Universe",
        "module": "Data.Universe",
        "name": "Universe",
        "normalized": "",
        "package": "universe",
        "partial": "Universe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#v:universe",
      "description": {
        "fct-module": "Data.Universe",
        "fct-package": "universe",
        "fct-signature": "[a]",
        "fct-source": "src/Data-Universe.html#universe",
        "fct-type": "method",
        "title": "universe"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe",
        "module": "Data.Universe",
        "name": "universe",
        "normalized": "[a]",
        "package": "universe",
        "partial": "",
        "signature": "[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/universe/docs/Data-Universe.html#v:universeF",
      "description": {
        "fct-module": "Data.Universe",
        "fct-package": "universe",
        "fct-signature": "[a]",
        "fct-source": "src/Data-Universe.html#universeF",
        "fct-type": "method",
        "title": "universeF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Universe",
        "module": "Data.Universe",
        "name": "universeF",
        "normalized": "[a]",
        "package": "universe",
        "partial": "",
        "signature": "[a]"
      }
    }
  }
]