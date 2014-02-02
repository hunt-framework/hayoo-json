[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe technique for generating new values is based on the paper\n ''On Generating Unique Names''\n by Lennart Augustsson, Mikael Rittri, and Dan Synek.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "module",
        "fct-source": "src/Data-Supply.html",
        "fct-type": "module",
        "title": "Supply"
      },
      "index": {
        "description": "The technique for generating new values is based on the paper On Generating Unique Names by Lennart Augustsson Mikael Rittri and Dan Synek",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "Supply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#t:Supply",
      "description": {
        "fct-descr": "\u003cp\u003eA type that can be used to generate values on demand.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "data",
        "fct-source": "src/Data-Supply.html#Supply",
        "fct-type": "data",
        "title": "Supply"
      },
      "index": {
        "description": "type that can be used to generate values on demand",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "Supply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:modifySupply",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a new supply by systematically applying a function\n to an existing supply.  This function, together with \u003ccode\u003e\u003ca\u003esupplyValue\u003c/a\u003e\u003c/code\u003e\n form a comonad on \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e (Supply a -\u003e b) -\u003e Supply b",
        "fct-source": "src/Data-Supply.html#modifySupply",
        "fct-type": "function",
        "title": "modifySupply"
      },
      "index": {
        "description": "Generate new supply by systematically applying function to an existing supply This function together with supplyValue form comonad on Supply",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "modifySupply",
        "normalized": "Supply a-\u003e(Supply a-\u003eb)-\u003eSupply b",
        "package": "value-supply",
        "partial": "Supply",
        "signature": "Supply a-\u003e(Supply a-\u003eb)-\u003eSupply b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableEnumSupply",
      "description": {
        "fct-descr": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is \u003ccode\u003etoEnum 0\u003c/code\u003e, new values are generates with \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e.\n WARNING: See comment on \u003ccode\u003e\u003ca\u003enewDupableSupply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newDupableEnumSupply",
        "fct-type": "function",
        "title": "newDupableEnumSupply"
      },
      "index": {
        "description": "supply of values that are in the Enum class The initial value is toEnum new values are generates with succ WARNING See comment on newDupableSupply",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newDupableEnumSupply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Dupable Enum Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableNumSupply",
      "description": {
        "fct-descr": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is 0, new values are generated by adding 1.\n WARNING: See comment on \u003ccode\u003e\u003ca\u003enewDupableSupply\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newDupableNumSupply",
        "fct-type": "function",
        "title": "newDupableNumSupply"
      },
      "index": {
        "description": "supply of values that are in the Num class The initial value is new values are generated by adding WARNING See comment on newDupableSupply",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newDupableNumSupply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Dupable Num Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newDupableSupply",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a new supply of values.\n WARNING: This version is faster then \u003ccode\u003e\u003ca\u003enewSupply\u003c/a\u003e\u003c/code\u003e but it is not completely\n thread safe, so use only if performance is an issue!\n\u003c/p\u003e\u003cp\u003eRules for using the generated supplies:\n   * Supply splitting should be evaluated in a single thread.\n     For example, use \u003ca\u003ecase\u003c/a\u003e with \u003ccode\u003e\u003ca\u003esplit2\u003c/a\u003e\u003c/code\u003e to force the splitting\n     of a supply.\n   * Different threads should work with different supplies.\n     For example, one could (strictly) split a supply, and then\n     fork new threads with the resulting supplies.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "a -\u003e (a -\u003e a) -\u003e IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newDupableSupply",
        "fct-type": "function",
        "title": "newDupableSupply"
      },
      "index": {
        "description": "Create new supply of values WARNING This version is faster then newSupply but it is not completely thread safe so use only if performance is an issue Rules for using the generated supplies Supply splitting should be evaluated in single thread For example use case with split2 to force the splitting of supply Different threads should work with different supplies For example one could strictly split supply and then fork new threads with the resulting supplies",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newDupableSupply",
        "normalized": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
        "package": "value-supply",
        "partial": "Dupable Supply",
        "signature": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newEnumSupply",
      "description": {
        "fct-descr": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is \u003ccode\u003etoEnum 0\u003c/code\u003e, new values are generates with \u003ccode\u003e\u003ca\u003esucc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newEnumSupply",
        "fct-type": "function",
        "title": "newEnumSupply"
      },
      "index": {
        "description": "supply of values that are in the Enum class The initial value is toEnum new values are generates with succ",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newEnumSupply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Enum Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newNumSupply",
      "description": {
        "fct-descr": "\u003cp\u003eA supply of values that are in the \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e class.\n The initial value is 0, new values are generated by adding 1.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newNumSupply",
        "fct-type": "function",
        "title": "newNumSupply"
      },
      "index": {
        "description": "supply of values that are in the Num class The initial value is new values are generated by adding",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newNumSupply",
        "normalized": "",
        "package": "value-supply",
        "partial": "Num Supply",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:newSupply",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new supply of values.\n The arguments specify how to generate values:\n the first argument is an initial value, the\n second specifies how to generate a new value from an existing one.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "a -\u003e (a -\u003e a) -\u003e IO (Supply a)",
        "fct-source": "src/Data-Supply.html#newSupply",
        "fct-type": "function",
        "title": "newSupply"
      },
      "index": {
        "description": "Creates new supply of values The arguments specify how to generate values the first argument is an initial value the second specifies how to generate new value from an existing one",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "newSupply",
        "normalized": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)",
        "package": "value-supply",
        "partial": "Supply",
        "signature": "a-\u003e(a-\u003ea)-\u003eIO(Supply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate an infinite list of supplies.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e [Supply a]",
        "fct-source": "src/Data-Supply.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "Generate an infinite list of supplies",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "split",
        "normalized": "Supply a-\u003e[Supply a]",
        "package": "value-supply",
        "partial": "",
        "signature": "Supply a-\u003e[Supply a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split2",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a supply into two different supplies.\n The resulting supplies are different from the input supply.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e (Supply a, Supply a)",
        "fct-source": "src/Data-Supply.html#split2",
        "fct-type": "function",
        "title": "split2"
      },
      "index": {
        "description": "Split supply into two different supplies The resulting supplies are different from the input supply",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "split2",
        "normalized": "Supply a-\u003e(Supply a,Supply a)",
        "package": "value-supply",
        "partial": "",
        "signature": "Supply a-\u003e(Supply a,Supply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split3",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a supply into three different supplies.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e (Supply a, Supply a, Supply a)",
        "fct-source": "src/Data-Supply.html#split3",
        "fct-type": "function",
        "title": "split3"
      },
      "index": {
        "description": "Split supply into three different supplies",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "split3",
        "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a)",
        "package": "value-supply",
        "partial": "",
        "signature": "Supply a-\u003e(Supply a,Supply a,Supply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:split4",
      "description": {
        "fct-descr": "\u003cp\u003eSplit a supply into four different supplies.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e (Supply a, Supply a, Supply a, Supply a)",
        "fct-source": "src/Data-Supply.html#split4",
        "fct-type": "function",
        "title": "split4"
      },
      "index": {
        "description": "Split supply into four different supplies",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "split4",
        "normalized": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)",
        "package": "value-supply",
        "partial": "",
        "signature": "Supply a-\u003e(Supply a,Supply a,Supply a,Supply a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/value-supply/docs/Data-Supply.html#v:supplyValue",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a supply.  This function, together with\n \u003ccode\u003e\u003ca\u003emodifySupply\u003c/a\u003e\u003c/code\u003e forms a comonad on \u003ccode\u003e\u003ca\u003eSupply\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Supply",
        "fct-package": "value-supply",
        "fct-signature": "Supply a -\u003e a",
        "fct-source": "src/Data-Supply.html#supplyValue",
        "fct-type": "function",
        "title": "supplyValue"
      },
      "index": {
        "description": "Get the value of supply This function together with modifySupply forms comonad on Supply",
        "hierarchy": "Data Supply",
        "module": "Data.Supply",
        "name": "supplyValue",
        "normalized": "Supply a-\u003ea",
        "package": "value-supply",
        "partial": "Value",
        "signature": "Supply a-\u003ea"
      }
    }
  }
]