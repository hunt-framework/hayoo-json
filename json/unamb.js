[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnambiguous choice\n\u003c/p\u003e\u003cp\u003eFor non-flat types (where values may be partially defined, rather than\n necessarily bottom or fully defined) and information merging, see the\n lub package, \u003ca\u003ehttp://haskell.org/haskellwiki/Lub\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee unamb.cabal for the list of contributors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "module",
        "fct-source": "src/Data-Unamb.html",
        "fct-type": "module",
        "title": "Unamb"
      },
      "index": {
        "description": "Unambiguous choice For non-flat types where values may be partially defined rather than necessarily bottom or fully defined and information merging see the lub package http haskell.org haskellwiki Lub See unamb.cabal for the list of contributors",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "Unamb",
        "normalized": "",
        "package": "unamb",
        "partial": "Unamb",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#t:BothBottom",
      "description": {
        "fct-descr": "\u003cp\u003eUse a particular exception as our representation for waiting forever.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "data",
        "fct-source": "src/Data-Unamb.html#BothBottom",
        "fct-type": "data",
        "title": "BothBottom"
      },
      "index": {
        "description": "Use particular exception as our representation for waiting forever",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "BothBottom",
        "normalized": "",
        "package": "unamb",
        "partial": "Both Bottom",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:amb",
      "description": {
        "fct-descr": "\u003cp\u003eAmbiguous choice operator.  Yield either value.  Evaluates in\n separate threads and picks whichever finishes first.  See also\n \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e IO a",
        "fct-source": "src/Data-Unamb.html#amb",
        "fct-type": "function",
        "title": "amb"
      },
      "index": {
        "description": "Ambiguous choice operator Yield either value Evaluates in separate threads and picks whichever finishes first See also unamb and race",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "amb",
        "normalized": "a-\u003ea-\u003eIO a",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:amb-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFor use when we already know that neither argument is already evaluated\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e IO a",
        "fct-source": "src/Data-Unamb.html#amb%27",
        "fct-type": "function",
        "title": "amb'"
      },
      "index": {
        "description": "For use when we already know that neither argument is already evaluated",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "amb'",
        "normalized": "a-\u003ea-\u003eIO a",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:asAgree",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of agreeing values (or undefined/bottom)\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#asAgree",
        "fct-type": "function",
        "title": "asAgree"
      },
      "index": {
        "description": "The value of agreeing values or undefined bottom",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "asAgree",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "Agree",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:assuming",
      "description": {
        "fct-descr": "\u003cp\u003eYield a value if a condition is true.  Otherwise undefined.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "Bool -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#assuming",
        "fct-type": "function",
        "title": "assuming"
      },
      "index": {
        "description": "Yield value if condition is true Otherwise undefined",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "assuming",
        "normalized": "Bool-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "Bool-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pand",
      "description": {
        "fct-descr": "\u003cp\u003eParallel and\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Data-Unamb.html#pand",
        "fct-type": "function",
        "title": "pand"
      },
      "index": {
        "description": "Parallel and",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "pand",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "unamb",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parAnnihilator",
      "description": {
        "fct-descr": "\u003cp\u003eBinary operation with annihilator element.  For instance, (*) & 0,\n (&&) & \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, (||) & \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e.\n Tests either argument as annihilator, in parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#parAnnihilator",
        "fct-type": "function",
        "title": "parAnnihilator"
      },
      "index": {
        "description": "Binary operation with annihilator element For instance False True min minBound max maxBound Tests either argument as annihilator in parallel",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "parAnnihilator",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "Annihilator",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parAnnihilatorIdentity",
      "description": {
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#parAnnihilatorIdentity",
        "fct-type": "function",
        "title": "parAnnihilatorIdentity"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "parAnnihilatorIdentity",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "Annihilator Identity",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parCommute",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a binary commutative operation into one that tries both orders in\n parallel.  Useful when there are special cases that don't require\n evaluating both arguments.  For non-flat types and information merging,\n see \u003ccode\u003eparCommute\u003c/code\u003e in the \u003ccode\u003elub\u003c/code\u003e package.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e b",
        "fct-source": "src/Data-Unamb.html#parCommute",
        "fct-type": "function",
        "title": "parCommute"
      },
      "index": {
        "description": "Turn binary commutative operation into one that tries both orders in parallel Useful when there are special cases that don require evaluating both arguments For non-flat types and information merging see parCommute in the lub package",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "parCommute",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
        "package": "unamb",
        "partial": "Commute",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parCommuteShortCircuit",
      "description": {
        "fct-descr": "\u003cp\u003eTurn a binary commutative operation into one that may try both orders.\n unlike parCommute, if one argument is already evaluated, the function is\n tried *only* with that as its first argument and not in both orders. When\n in doubt, use \u003ccode\u003e\u003ca\u003eparCommute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e b",
        "fct-source": "src/Data-Unamb.html#parCommuteShortCircuit",
        "fct-type": "function",
        "title": "parCommuteShortCircuit"
      },
      "index": {
        "description": "Turn binary commutative operation into one that may try both orders unlike parCommute if one argument is already evaluated the function is tried only with that as its first argument and not in both orders When in doubt use parCommute",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "parCommuteShortCircuit",
        "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
        "package": "unamb",
        "partial": "Commute Short Circuit",
        "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eBinary operation with left & right identity element.  For instance, (*) & 1,\n (&&) & \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, (||) & \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e.\n Tests either argument as identity, in parallel.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#parIdentity",
        "fct-type": "function",
        "title": "parIdentity"
      },
      "index": {
        "description": "Binary operation with left right identity element For instance True False min maxBound max minBound Tests either argument as identity in parallel",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "parIdentity",
        "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "Identity",
        "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmax",
      "description": {
        "fct-descr": "\u003cp\u003eParallel max with maxBound short-circuit and minBound identity\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#pmax",
        "fct-type": "function",
        "title": "pmax"
      },
      "index": {
        "description": "Parallel max with maxBound short-circuit and minBound identity",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "pmax",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmin",
      "description": {
        "fct-descr": "\u003cp\u003eParallel min with minBound short-circuit and maxBound identity\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#pmin",
        "fct-type": "function",
        "title": "pmin"
      },
      "index": {
        "description": "Parallel min with minBound short-circuit and maxBound identity",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "pmin",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmult",
      "description": {
        "fct-descr": "\u003cp\u003eParallel multiplication with 0 short-circuit, and 1 identity\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#pmult",
        "fct-type": "function",
        "title": "pmult"
      },
      "index": {
        "description": "Parallel multiplication with short-circuit and identity",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "pmult",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:por",
      "description": {
        "fct-descr": "\u003cp\u003eParallel or\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "Bool -\u003e Bool -\u003e Bool",
        "fct-source": "src/Data-Unamb.html#por",
        "fct-type": "function",
        "title": "por"
      },
      "index": {
        "description": "Parallel or",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "por",
        "normalized": "Bool-\u003eBool-\u003eBool",
        "package": "unamb",
        "partial": "",
        "signature": "Bool-\u003eBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:race",
      "description": {
        "fct-descr": "\u003cp\u003eRace two actions against each other in separate threads, and pick\n whichever finishes first.  See also \u003ccode\u003e\u003ca\u003eamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "IO a -\u003e IO a -\u003e IO a",
        "fct-source": "src/Data-Unamb.html#race",
        "fct-type": "function",
        "title": "race"
      },
      "index": {
        "description": "Race two actions against each other in separate threads and pick whichever finishes first See also amb",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "race",
        "normalized": "IO a-\u003eIO a-\u003eIO a",
        "package": "unamb",
        "partial": "",
        "signature": "IO a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unamb",
      "description": {
        "fct-descr": "\u003cp\u003eUnambiguous choice operator.  Equivalent to the ambiguous choice\n operator, but with arguments restricted to be equal where not bottom,\n so that the choice doesn't matter.  See also \u003ccode\u003e\u003ca\u003eamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf anything kills unamb while it is evaluating (like nested unambs), it can\n be retried later but, unlike most functions, work may be lost.\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#unamb",
        "fct-type": "function",
        "title": "unamb"
      },
      "index": {
        "description": "Unambiguous choice operator Equivalent to the ambiguous choice operator but with arguments restricted to be equal where not bottom so that the choice doesn matter See also amb If anything kills unamb while it is evaluating like nested unambs it can be retried later but unlike most functions work may be lost",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "unamb",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unamb-39-",
      "description": {
        "fct-descr": "\u003cp\u003eFor use when we already know that neither argument is already evaluated\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Data-Unamb.html#unamb%27",
        "fct-type": "function",
        "title": "unamb'"
      },
      "index": {
        "description": "For use when we already know that neither argument is already evaluated",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "unamb'",
        "normalized": "a-\u003ea-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unambs",
      "description": {
        "fct-descr": "\u003cp\u003en-ary \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Unamb",
        "fct-package": "unamb",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Data-Unamb.html#unambs",
        "fct-type": "function",
        "title": "unambs"
      },
      "index": {
        "description": "n-ary unamb",
        "hierarchy": "Data Unamb",
        "module": "Data.Unamb",
        "name": "unambs",
        "normalized": "[a]-\u003ea",
        "package": "unamb",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  }
]