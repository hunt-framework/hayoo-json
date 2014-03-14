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
        "word": "hinduce-missingh"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.HIUtils",
          "name": "HIUtils",
          "package": "hinduce-missingh",
          "source": "src/Data-List-HIUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "HIUtils",
          "package": "hinduce-missingh",
          "partial": "HIUtils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort, then group\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "aggregate",
          "package": "hinduce-missingh",
          "signature": "[a] -\u003e [[a]]",
          "source": "src/Data-List-HIUtils.html#aggregate",
          "type": "function"
        },
        "index": {
          "description": "Sort then group",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "aggregate",
          "normalized": "[a]-\u003e[[a]]",
          "package": "hinduce-missingh",
          "signature": "[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:aggregate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAggregate an association list, such that keys become unique.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "aggregateAL",
          "package": "hinduce-missingh",
          "signature": "[(a, b)] -\u003e [(a, [b])]",
          "source": "src/Data-List-HIUtils.html#aggregateAL",
          "type": "function"
        },
        "index": {
          "description": "Aggregate an association list such that keys become unique",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "aggregateAL",
          "normalized": "[(a,b)]-\u003e[(a,[b])]",
          "package": "hinduce-missingh",
          "partial": "AL",
          "signature": "[(a,b)]-\u003e[(a,[b])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:aggregateAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort, then group\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "aggregateBy",
          "package": "hinduce-missingh",
          "signature": "(a -\u003e a -\u003e Ordering) -\u003e [a] -\u003e [[a]]",
          "source": "src/Data-List-HIUtils.html#aggregateBy",
          "type": "function"
        },
        "index": {
          "description": "Sort then group",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "aggregateBy",
          "normalized": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[[a]]",
          "package": "hinduce-missingh",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eOrdering)-\u003e[a]-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:aggregateBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalculate the arithmetic mean. May not be numerically robust for some types and lists. Double and Rational should be fine most of the time.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "average",
          "package": "hinduce-missingh",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List-HIUtils.html#average",
          "type": "function"
        },
        "index": {
          "description": "Calculate the arithmetic mean May not be numerically robust for some types and lists Double and Rational should be fine most of the time",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "average",
          "normalized": "[a]-\u003ea",
          "package": "hinduce-missingh",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShortcut for \u003ccode\u003eaverage . map fromIntegral\u003c/code\u003e. Check numerical robustness, see \u003ccode\u003eaverage\u003c/code\u003e above.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "averageI",
          "package": "hinduce-missingh",
          "signature": "[i] -\u003e a",
          "source": "src/Data-List-HIUtils.html#averageI",
          "type": "function"
        },
        "index": {
          "description": "Shortcut for average map fromIntegral Check numerical robustness see average above",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "averageI",
          "normalized": "[a]-\u003eb",
          "package": "hinduce-missingh",
          "signature": "[i]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:averageI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.HIUtils",
          "name": "evenIx",
          "package": "hinduce-missingh",
          "signature": "[b] -\u003e [b]",
          "source": "src/Data-List-HIUtils.html#evenIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "evenIx",
          "normalized": "[a]-\u003e[a]",
          "package": "hinduce-missingh",
          "partial": "Ix",
          "signature": "[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:evenIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the most frequently occurring element. TODO: rewrite for Eq\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "majority",
          "package": "hinduce-missingh",
          "signature": "[a] -\u003e a",
          "source": "src/Data-List-HIUtils.html#majority",
          "type": "function"
        },
        "index": {
          "description": "Find the most frequently occurring element TODO rewrite for Eq",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "majority",
          "normalized": "[a]-\u003ea",
          "package": "hinduce-missingh",
          "signature": "[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:majority"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite integer sequence of the natural numbers, starting at 0\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "nat0",
          "package": "hinduce-missingh",
          "signature": "[n]",
          "source": "src/Data-List-HIUtils.html#nat0",
          "type": "function"
        },
        "index": {
          "description": "Infinite integer sequence of the natural numbers starting at",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "nat0",
          "normalized": "[a]",
          "package": "hinduce-missingh",
          "signature": "[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:nat0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInfinite integer sequence of the natural numbers, starting at 1\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "nat1",
          "package": "hinduce-missingh",
          "signature": "[n]",
          "source": "src/Data-List-HIUtils.html#nat1",
          "type": "function"
        },
        "index": {
          "description": "Infinite integer sequence of the natural numbers starting at",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "nat1",
          "normalized": "[a]",
          "package": "hinduce-missingh",
          "signature": "[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:nat1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.List.HIUtils",
          "name": "oddIx",
          "package": "hinduce-missingh",
          "signature": "[b] -\u003e [b]",
          "source": "src/Data-List-HIUtils.html#oddIx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "oddIx",
          "normalized": "[a]-\u003e[a]",
          "package": "hinduce-missingh",
          "partial": "Ix",
          "signature": "[b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:oddIx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list of integer frequencies into relative frequencies that sum up to 1. Frequencies should be nonnegative.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "relFreq",
          "package": "hinduce-missingh",
          "signature": "[i] -\u003e [f]",
          "source": "src/Data-List-HIUtils.html#relFreq",
          "type": "function"
        },
        "index": {
          "description": "Turn list of integer frequencies into relative frequencies that sum up to Frequencies should be nonnegative",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "relFreq",
          "normalized": "[a]-\u003e[b]",
          "package": "hinduce-missingh",
          "partial": "Freq",
          "signature": "[i]-\u003e[f]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:relFreq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn an association list of integer frequencies into on of relative frequencies that sum up to 1. Frequencies should be nonnegative.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "relFreqAL",
          "package": "hinduce-missingh",
          "signature": "[(a, i)] -\u003e [(a, f)]",
          "source": "src/Data-List-HIUtils.html#relFreqAL",
          "type": "function"
        },
        "index": {
          "description": "Turn an association list of integer frequencies into on of relative frequencies that sum up to Frequencies should be nonnegative",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "relFreqAL",
          "normalized": "[(a,b)]-\u003e[(a,c)]",
          "package": "hinduce-missingh",
          "partial": "Freq AL",
          "signature": "[(a,i)]-\u003e[(a,f)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:relFreqAL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort a list and leave out duplicates. Like \u003ccode\u003enub . sort\u003c/code\u003e but faster.\n\u003c/p\u003e",
          "module": "Data.List.HIUtils",
          "name": "uniqSort",
          "package": "hinduce-missingh",
          "signature": "[a] -\u003e [a]",
          "source": "src/Data-List-HIUtils.html#uniqSort",
          "type": "function"
        },
        "index": {
          "description": "Sort list and leave out duplicates Like nub sort but faster",
          "hierarchy": "Data List HIUtils",
          "module": "Data.List.HIUtils",
          "name": "uniqSort",
          "normalized": "[a]-\u003e[a]",
          "package": "hinduce-missingh",
          "partial": "Sort",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-List-HIUtils.html#v:uniqSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.String.HIUtils",
          "name": "HIUtils",
          "package": "hinduce-missingh",
          "source": "src/Data-String-HIUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data String HIUtils",
          "module": "Data.String.HIUtils",
          "name": "HIUtils",
          "package": "hinduce-missingh",
          "partial": "HIUtils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-String-HIUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad right side with spaces such that \u003ccode\u003elength (pad n s) \u003e= length s + n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.HIUtils",
          "name": "pad",
          "package": "hinduce-missingh",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Data-String-HIUtils.html#pad",
          "type": "function"
        },
        "index": {
          "description": "Pad right side with spaces such that length pad length",
          "hierarchy": "Data String HIUtils",
          "module": "Data.String.HIUtils",
          "name": "pad",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hinduce-missingh",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-String-HIUtils.html#v:pad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad left side with spaces such that \u003ccode\u003elength (pad n s) \u003e= length s + n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.HIUtils",
          "name": "padl",
          "package": "hinduce-missingh",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Data-String-HIUtils.html#padl",
          "type": "function"
        },
        "index": {
          "description": "Pad left side with spaces such that length pad length",
          "hierarchy": "Data String HIUtils",
          "module": "Data.String.HIUtils",
          "name": "padl",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hinduce-missingh",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-String-HIUtils.html#v:padl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePad right side with spaces such that \u003ccode\u003elength (pad n s) \u003e= length s + n\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.String.HIUtils",
          "name": "padr",
          "package": "hinduce-missingh",
          "signature": "Int -\u003e String -\u003e String",
          "source": "src/Data-String-HIUtils.html#padr",
          "type": "function"
        },
        "index": {
          "description": "Pad right side with spaces such that length pad length",
          "hierarchy": "Data String HIUtils",
          "module": "Data.String.HIUtils",
          "name": "padr",
          "normalized": "Int-\u003eString-\u003eString",
          "package": "hinduce-missingh",
          "signature": "Int-\u003eString-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hinduce-missingh/docs/Data-String-HIUtils.html#v:padr"
      }
    }
  ]
]