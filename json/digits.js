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
        "word": "digits"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Digits",
          "name": "Digits",
          "package": "digits",
          "source": "src/Data-Digits.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Digits",
          "module": "Data.Digits",
          "name": "Digits",
          "package": "digits",
          "partial": "Digits",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/digits/docs/Data-Digits.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the digits of a positive integer as a list.\n\u003c/p\u003e",
          "module": "Data.Digits",
          "name": "digits",
          "package": "digits",
          "signature": "n-\u003e n-\u003e [n]",
          "type": "function"
        },
        "index": {
          "description": "Returns the digits of positive integer as list",
          "hierarchy": "Data Digits",
          "module": "Data.Digits",
          "name": "digits",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "digits",
          "signature": "n-\u003en-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digits/docs/Data-Digits.html#v:digits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the digits of a positive integer as a list, in reverse order.\n   This is slightly more efficient than in forward order.\n\u003c/p\u003e",
          "module": "Data.Digits",
          "name": "digitsRev",
          "package": "digits",
          "signature": "n-\u003e n-\u003e [n]",
          "type": "function"
        },
        "index": {
          "description": "Returns the digits of positive integer as list in reverse order This is slightly more efficient than in forward order",
          "hierarchy": "Data Digits",
          "module": "Data.Digits",
          "name": "digitsRev",
          "normalized": "a-\u003ea-\u003e[a]",
          "package": "digits",
          "partial": "Rev",
          "signature": "n-\u003en-\u003e[n]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digits/docs/Data-Digits.html#v:digitsRev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eunDigits . digits should be the identity, in any base.\n\u003c/p\u003e",
          "module": "Data.Digits",
          "name": "prop_digitsRoundTrip",
          "package": "digits",
          "signature": "Integer-\u003e Integer-\u003e Property",
          "type": "function"
        },
        "index": {
          "description": "unDigits digits should be the identity in any base",
          "hierarchy": "Data Digits",
          "module": "Data.Digits",
          "name": "prop_digitsRoundTrip",
          "normalized": "Integer-\u003eInteger-\u003eProperty",
          "package": "digits",
          "partial": "Round Trip",
          "signature": "Integer-\u003eInteger-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digits/docs/Data-Digits.html#v:prop_digitsRoundTrip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a list of digits, and converts them back into a positive integer.\n\u003c/p\u003e",
          "module": "Data.Digits",
          "name": "unDigits",
          "package": "digits",
          "signature": "n-\u003e [n]-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Takes list of digits and converts them back into positive integer",
          "hierarchy": "Data Digits",
          "module": "Data.Digits",
          "name": "unDigits",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "digits",
          "partial": "Digits",
          "signature": "n-\u003e[n]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/digits/docs/Data-Digits.html#v:unDigits"
      }
    }
  ]
]