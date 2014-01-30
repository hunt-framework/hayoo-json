[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations which are undefined mathematically (\u003ccode\u003e0 / 0\u003c/code\u003e, \u003ccode\u003einfinity * 0\u003c/code\u003e, \u003ccode\u003einfinity - infinity\u003c/code\u003e, etc.)\n also have undefined results in this implementation.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "module",
        "fct-source": "src/Data-Nat.html",
        "fct-type": "module",
        "title": "Nat"
      },
      "index": {
        "description": "Operations which are undefined mathematically infinity infinity infinity etc also have undefined results in this implementation",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "Nat",
        "normalized": "",
        "package": "data-nat",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#t:Nat",
      "description": {
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "data",
        "fct-source": "src/Data-Nat.html#Nat",
        "fct-type": "data",
        "title": "Nat"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "Nat",
        "normalized": "",
        "package": "data-nat",
        "partial": "Nat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:Succ",
      "description": {
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "Succ Nat",
        "fct-source": "src/Data-Nat.html#Nat",
        "fct-type": "function",
        "title": "Succ"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "Succ",
        "normalized": "",
        "package": "data-nat",
        "partial": "Succ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:Zero",
      "description": {
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "Zero",
        "fct-source": "src/Data-Nat.html#Nat",
        "fct-type": "function",
        "title": "Zero"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "Zero",
        "normalized": "",
        "package": "data-nat",
        "partial": "Zero",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:diff",
      "description": {
        "fct-descr": "\u003cpre\u003e diff n m | n \u003e= m    = Right (n - m)\n          | otherwise = Left  (m - n)\n\u003c/pre\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "Nat -\u003e Nat -\u003e Either Nat Nat",
        "fct-source": "src/Data-Nat.html#diff",
        "fct-type": "function",
        "title": "diff"
      },
      "index": {
        "description": "diff Right otherwise Left",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "diff",
        "normalized": "Nat-\u003eNat-\u003eEither Nat Nat",
        "package": "data-nat",
        "partial": "",
        "signature": "Nat-\u003eNat-\u003eEither Nat Nat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:foldNat",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the first argument if \u003ccode\u003eZero\u003c/code\u003e, applies the second argument recursively for each \u003ccode\u003eSucc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "r -\u003e (r -\u003e r) -\u003e Nat -\u003e r",
        "fct-source": "src/Data-Nat.html#foldNat",
        "fct-type": "function",
        "title": "foldNat"
      },
      "index": {
        "description": "Returns the first argument if Zero applies the second argument recursively for each Succ",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "foldNat",
        "normalized": "a-\u003e(a-\u003ea)-\u003eNat-\u003ea",
        "package": "data-nat",
        "partial": "Nat",
        "signature": "r-\u003e(r-\u003er)-\u003eNat-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:infinity",
      "description": {
        "fct-descr": "\u003cp\u003eVery big!\n\u003c/p\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "Nat",
        "fct-source": "src/Data-Nat.html#infinity",
        "fct-type": "function",
        "title": "infinity"
      },
      "index": {
        "description": "Very big",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "infinity",
        "normalized": "",
        "package": "data-nat",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:nat",
      "description": {
        "fct-descr": "\u003cp\u003eShallow deconstruction. Returns the first argument if \u003ccode\u003eZero\u003c/code\u003e, applies the second argument to the inner value if \u003ccode\u003eSucc\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "r -\u003e (Nat -\u003e r) -\u003e Nat -\u003e r",
        "fct-source": "src/Data-Nat.html#nat",
        "fct-type": "function",
        "title": "nat"
      },
      "index": {
        "description": "Shallow deconstruction Returns the first argument if Zero applies the second argument to the inner value if Succ",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "nat",
        "normalized": "a-\u003e(Nat-\u003ea)-\u003eNat-\u003ea",
        "package": "data-nat",
        "partial": "",
        "signature": "r-\u003e(Nat-\u003er)-\u003eNat-\u003er"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:unfoldNat",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a \u003ccode\u003eNat\u003c/code\u003e from a seed value: the first argument should return the next seed value\n   if the building is to continue, or \u003ccode\u003eNothing\u003c/code\u003e if it is to stop.  A \u003ccode\u003eSucc\u003c/code\u003e is added at each iteration.\n\u003c/p\u003e",
        "fct-module": "Data.Nat",
        "fct-package": "data-nat",
        "fct-signature": "(a -\u003e Maybe a) -\u003e a -\u003e Nat",
        "fct-source": "src/Data-Nat.html#unfoldNat",
        "fct-type": "function",
        "title": "unfoldNat"
      },
      "index": {
        "description": "Build Nat from seed value the first argument should return the next seed value if the building is to continue or Nothing if it is to stop Succ is added at each iteration",
        "hierarchy": "Data Nat",
        "module": "Data.Nat",
        "name": "unfoldNat",
        "normalized": "(a-\u003eMaybe a)-\u003ea-\u003eNat",
        "package": "data-nat",
        "partial": "Nat",
        "signature": "(a-\u003eMaybe a)-\u003ea-\u003eNat"
      }
    }
  }
]