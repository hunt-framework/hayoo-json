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
        "word": "data-nat"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations which are undefined mathematically (\u003ccode\u003e0 / 0\u003c/code\u003e, \u003ccode\u003einfinity * 0\u003c/code\u003e, \u003ccode\u003einfinity - infinity\u003c/code\u003e, etc.)\n also have undefined results in this implementation.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "data-nat",
          "source": "src/Data-Nat.html",
          "type": "module"
        },
        "index": {
          "description": "Operations which are undefined mathematically infinity infinity infinity etc also have undefined results in this implementation",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "data-nat",
          "partial": "Nat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Nat",
          "package": "data-nat",
          "source": "src/Data-Nat.html#Nat",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Nat",
          "package": "data-nat",
          "partial": "Nat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#t:Nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Succ",
          "package": "data-nat",
          "signature": "Succ Nat",
          "source": "src/Data-Nat.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Succ",
          "package": "data-nat",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Nat",
          "name": "Zero",
          "package": "data-nat",
          "signature": "Zero",
          "source": "src/Data-Nat.html#Nat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "Zero",
          "package": "data-nat",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e diff n m | n \u003e= m    = Right (n - m)\n          | otherwise = Left  (m - n)\n\u003c/pre\u003e",
          "module": "Data.Nat",
          "name": "diff",
          "package": "data-nat",
          "signature": "Nat -\u003e Nat -\u003e Either Nat Nat",
          "source": "src/Data-Nat.html#diff",
          "type": "function"
        },
        "index": {
          "description": "diff Right otherwise Left",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "diff",
          "normalized": "Nat-\u003eNat-\u003eEither Nat Nat",
          "package": "data-nat",
          "signature": "Nat-\u003eNat-\u003eEither Nat Nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:diff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the first argument if \u003ccode\u003eZero\u003c/code\u003e, applies the second argument recursively for each \u003ccode\u003eSucc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Nat",
          "name": "foldNat",
          "package": "data-nat",
          "signature": "r -\u003e (r -\u003e r) -\u003e Nat -\u003e r",
          "source": "src/Data-Nat.html#foldNat",
          "type": "function"
        },
        "index": {
          "description": "Returns the first argument if Zero applies the second argument recursively for each Succ",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "foldNat",
          "normalized": "a-\u003e(a-\u003ea)-\u003eNat-\u003ea",
          "package": "data-nat",
          "partial": "Nat",
          "signature": "r-\u003e(r-\u003er)-\u003eNat-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:foldNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVery big!\n\u003c/p\u003e",
          "module": "Data.Nat",
          "name": "infinity",
          "package": "data-nat",
          "signature": "Nat",
          "source": "src/Data-Nat.html#infinity",
          "type": "function"
        },
        "index": {
          "description": "Very big",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "infinity",
          "package": "data-nat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:infinity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShallow deconstruction. Returns the first argument if \u003ccode\u003eZero\u003c/code\u003e, applies the second argument to the inner value if \u003ccode\u003eSucc\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Nat",
          "name": "nat",
          "package": "data-nat",
          "signature": "r -\u003e (Nat -\u003e r) -\u003e Nat -\u003e r",
          "source": "src/Data-Nat.html#nat",
          "type": "function"
        },
        "index": {
          "description": "Shallow deconstruction Returns the first argument if Zero applies the second argument to the inner value if Succ",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "nat",
          "normalized": "a-\u003e(Nat-\u003ea)-\u003eNat-\u003ea",
          "package": "data-nat",
          "signature": "r-\u003e(Nat-\u003er)-\u003eNat-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:nat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild a \u003ccode\u003eNat\u003c/code\u003e from a seed value: the first argument should return the next seed value\n   if the building is to continue, or \u003ccode\u003eNothing\u003c/code\u003e if it is to stop.  A \u003ccode\u003eSucc\u003c/code\u003e is added at each iteration.\n\u003c/p\u003e",
          "module": "Data.Nat",
          "name": "unfoldNat",
          "package": "data-nat",
          "signature": "(a -\u003e Maybe a) -\u003e a -\u003e Nat",
          "source": "src/Data-Nat.html#unfoldNat",
          "type": "function"
        },
        "index": {
          "description": "Build Nat from seed value the first argument should return the next seed value if the building is to continue or Nothing if it is to stop Succ is added at each iteration",
          "hierarchy": "Data Nat",
          "module": "Data.Nat",
          "name": "unfoldNat",
          "normalized": "(a-\u003eMaybe a)-\u003ea-\u003eNat",
          "package": "data-nat",
          "partial": "Nat",
          "signature": "(a-\u003eMaybe a)-\u003ea-\u003eNat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/data-nat/docs/Data-Nat.html#v:unfoldNat"
      }
    }
  ]
]