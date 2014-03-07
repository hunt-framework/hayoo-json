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
        "word": "unamb"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUnambiguous choice\n\u003c/p\u003e\u003cp\u003eFor non-flat types (where values may be partially defined, rather than\n necessarily bottom or fully defined) and information merging, see the\n lub package, \u003ca\u003ehttp://haskell.org/haskellwiki/Lub\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eSee unamb.cabal for the list of contributors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Unamb",
          "name": "Unamb",
          "package": "unamb",
          "source": "src/Data-Unamb.html",
          "type": "module"
        },
        "index": {
          "description": "Unambiguous choice For non-flat types where values may be partially defined rather than necessarily bottom or fully defined and information merging see the lub package http haskell.org haskellwiki Lub See unamb.cabal for the list of contributors",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "Unamb",
          "package": "unamb",
          "partial": "Unamb",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a particular exception as our representation for waiting forever.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "BothBottom",
          "package": "unamb",
          "source": "src/Data-Unamb.html#BothBottom",
          "type": "data"
        },
        "index": {
          "description": "Use particular exception as our representation for waiting forever",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "BothBottom",
          "package": "unamb",
          "partial": "Both Bottom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#t:BothBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAmbiguous choice operator.  Yield either value.  Evaluates in\n separate threads and picks whichever finishes first.  See also\n \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erace\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "amb",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Unamb.html#amb",
          "type": "function"
        },
        "index": {
          "description": "Ambiguous choice operator Yield either value Evaluates in separate threads and picks whichever finishes first See also unamb and race",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "amb",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "unamb",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:amb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor use when we already know that neither argument is already evaluated\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "amb'",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e IO a",
          "source": "src/Data-Unamb.html#amb%27",
          "type": "function"
        },
        "index": {
          "description": "For use when we already know that neither argument is already evaluated",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "amb'",
          "normalized": "a-\u003ea-\u003eIO a",
          "package": "unamb",
          "signature": "a-\u003ea-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:amb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe value of agreeing values (or undefined/bottom)\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "asAgree",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#asAgree",
          "type": "function"
        },
        "index": {
          "description": "The value of agreeing values or undefined bottom",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "asAgree",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "partial": "Agree",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:asAgree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield a value if a condition is true.  Otherwise undefined.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "assuming",
          "package": "unamb",
          "signature": "Bool -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#assuming",
          "type": "function"
        },
        "index": {
          "description": "Yield value if condition is true Otherwise undefined",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "assuming",
          "normalized": "Bool-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "Bool-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:assuming"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel and\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "pand",
          "package": "unamb",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "source": "src/Data-Unamb.html#pand",
          "type": "function"
        },
        "index": {
          "description": "Parallel and",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "pand",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "unamb",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operation with annihilator element.  For instance, (*) & 0,\n (&&) & \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, (||) & \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e.\n Tests either argument as annihilator, in parallel.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "parAnnihilator",
          "package": "unamb",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#parAnnihilator",
          "type": "function"
        },
        "index": {
          "description": "Binary operation with annihilator element For instance False True min minBound max maxBound Tests either argument as annihilator in parallel",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "parAnnihilator",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "unamb",
          "partial": "Annihilator",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parAnnihilator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Unamb",
          "name": "parAnnihilatorIdentity",
          "package": "unamb",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#parAnnihilatorIdentity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "parAnnihilatorIdentity",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "unamb",
          "partial": "Annihilator Identity",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parAnnihilatorIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a binary commutative operation into one that tries both orders in\n parallel.  Useful when there are special cases that don't require\n evaluating both arguments.  For non-flat types and information merging,\n see \u003ccode\u003eparCommute\u003c/code\u003e in the \u003ccode\u003elub\u003c/code\u003e package.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "parCommute",
          "package": "unamb",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e b",
          "source": "src/Data-Unamb.html#parCommute",
          "type": "function"
        },
        "index": {
          "description": "Turn binary commutative operation into one that tries both orders in parallel Useful when there are special cases that don require evaluating both arguments For non-flat types and information merging see parCommute in the lub package",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "parCommute",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "unamb",
          "partial": "Commute",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parCommute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a binary commutative operation into one that may try both orders.\n unlike parCommute, if one argument is already evaluated, the function is\n tried *only* with that as its first argument and not in both orders. When\n in doubt, use \u003ccode\u003e\u003ca\u003eparCommute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "parCommuteShortCircuit",
          "package": "unamb",
          "signature": "(a -\u003e a -\u003e b) -\u003e a -\u003e a -\u003e b",
          "source": "src/Data-Unamb.html#parCommuteShortCircuit",
          "type": "function"
        },
        "index": {
          "description": "Turn binary commutative operation into one that may try both orders unlike parCommute if one argument is already evaluated the function is tried only with that as its first argument and not in both orders When in doubt use parCommute",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "parCommuteShortCircuit",
          "normalized": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "package": "unamb",
          "partial": "Commute Short Circuit",
          "signature": "(a-\u003ea-\u003eb)-\u003ea-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parCommuteShortCircuit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBinary operation with left & right identity element.  For instance, (*) & 1,\n (&&) & \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, (||) & \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emin\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003emaxBound\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e & \u003ccode\u003e\u003ca\u003eminBound\u003c/a\u003e\u003c/code\u003e.\n Tests either argument as identity, in parallel.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "parIdentity",
          "package": "unamb",
          "signature": "(a -\u003e a -\u003e a) -\u003e a -\u003e a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#parIdentity",
          "type": "function"
        },
        "index": {
          "description": "Binary operation with left right identity element For instance True False min maxBound max minBound Tests either argument as identity in parallel",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "parIdentity",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
          "package": "unamb",
          "partial": "Identity",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:parIdentity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel max with maxBound short-circuit and minBound identity\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "pmax",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#pmax",
          "type": "function"
        },
        "index": {
          "description": "Parallel max with maxBound short-circuit and minBound identity",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "pmax",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel min with minBound short-circuit and maxBound identity\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "pmin",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#pmin",
          "type": "function"
        },
        "index": {
          "description": "Parallel min with minBound short-circuit and maxBound identity",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "pmin",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel multiplication with 0 short-circuit, and 1 identity\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "pmult",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#pmult",
          "type": "function"
        },
        "index": {
          "description": "Parallel multiplication with short-circuit and identity",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "pmult",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:pmult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel or\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "por",
          "package": "unamb",
          "signature": "Bool -\u003e Bool -\u003e Bool",
          "source": "src/Data-Unamb.html#por",
          "type": "function"
        },
        "index": {
          "description": "Parallel or",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "por",
          "normalized": "Bool-\u003eBool-\u003eBool",
          "package": "unamb",
          "signature": "Bool-\u003eBool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:por"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRace two actions against each other in separate threads, and pick\n whichever finishes first.  See also \u003ccode\u003e\u003ca\u003eamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "race",
          "package": "unamb",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/Data-Unamb.html#race",
          "type": "function"
        },
        "index": {
          "description": "Race two actions against each other in separate threads and pick whichever finishes first See also amb",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "race",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "unamb",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:race"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnambiguous choice operator.  Equivalent to the ambiguous choice\n operator, but with arguments restricted to be equal where not bottom,\n so that the choice doesn't matter.  See also \u003ccode\u003e\u003ca\u003eamb\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIf anything kills unamb while it is evaluating (like nested unambs), it can\n be retried later but, unlike most functions, work may be lost.\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "unamb",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#unamb",
          "type": "function"
        },
        "index": {
          "description": "Unambiguous choice operator Equivalent to the ambiguous choice operator but with arguments restricted to be equal where not bottom so that the choice doesn matter See also amb If anything kills unamb while it is evaluating like nested unambs it can be retried later but unlike most functions work may be lost",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "unamb",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unamb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor use when we already know that neither argument is already evaluated\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "unamb'",
          "package": "unamb",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Data-Unamb.html#unamb%27",
          "type": "function"
        },
        "index": {
          "description": "For use when we already know that neither argument is already evaluated",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "unamb'",
          "normalized": "a-\u003ea-\u003ea",
          "package": "unamb",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unamb-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003en-ary \u003ccode\u003e\u003ca\u003eunamb\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Unamb",
          "name": "unambs",
          "package": "unamb",
          "signature": "[a] -\u003e a",
          "source": "src/Data-Unamb.html#unambs",
          "type": "function"
        },
        "index": {
          "description": "n-ary unamb",
          "hierarchy": "Data Unamb",
          "module": "Data.Unamb",
          "name": "unambs",
          "normalized": "[a]-\u003ea",
          "package": "unamb",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/unamb/docs/Data-Unamb.html#v:unambs"
      }
    }
  ]
]