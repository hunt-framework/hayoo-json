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
        "word": "luhn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of Luhn's check digit algorithm.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Luhn",
          "name": "Luhn",
          "package": "luhn",
          "source": "src/Luhn.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of Luhn check digit algorithm",
          "hierarchy": "Luhn",
          "module": "Luhn",
          "name": "Luhn",
          "package": "luhn",
          "partial": "Luhn",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/luhn/docs/Luhn.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends a Luhn check digit to the end of a number.\n\u003c/p\u003e",
          "module": "Luhn",
          "name": "addLuhnDigit",
          "package": "luhn",
          "signature": "n-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Appends Luhn check digit to the end of number",
          "hierarchy": "Luhn",
          "module": "Luhn",
          "name": "addLuhnDigit",
          "normalized": "a-\u003ea",
          "package": "luhn",
          "partial": "Luhn Digit",
          "signature": "n-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/luhn/docs/Luhn.html#v:addLuhnDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates that the Luhn check digit (assumed to be the last/least-\n   significant digit in the number) is correct.\n\u003c/p\u003e",
          "module": "Luhn",
          "name": "checkLuhnDigit",
          "package": "luhn",
          "signature": "n-\u003e Bool",
          "type": "function"
        },
        "index": {
          "description": "Validates that the Luhn check digit assumed to be the last least significant digit in the number is correct",
          "hierarchy": "Luhn",
          "module": "Luhn",
          "name": "checkLuhnDigit",
          "normalized": "a-\u003eBool",
          "package": "luhn",
          "partial": "Luhn Digit",
          "signature": "n-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/luhn/docs/Luhn.html#v:checkLuhnDigit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates that a generated check digit validates.\n\u003c/p\u003e",
          "module": "Luhn",
          "name": "prop_checkLuhn",
          "package": "luhn",
          "signature": "Integer-\u003e Property",
          "type": "function"
        },
        "index": {
          "description": "Validates that generated check digit validates",
          "hierarchy": "Luhn",
          "module": "Luhn",
          "name": "prop_checkLuhn",
          "normalized": "Integer-\u003eProperty",
          "package": "luhn",
          "partial": "Luhn",
          "signature": "Integer-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/luhn/docs/Luhn.html#v:prop_checkLuhn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny single number transcription error should result in a failure in\n   the validation of a Luhn check digit. This property validates this.\n\u003c/p\u003e",
          "module": "Luhn",
          "name": "prop_checkSingleError",
          "package": "luhn",
          "signature": "Integer-\u003e Integer-\u003e Integer-\u003e Property",
          "type": "function"
        },
        "index": {
          "description": "Any single number transcription error should result in failure in the validation of Luhn check digit This property validates this",
          "hierarchy": "Luhn",
          "module": "Luhn",
          "name": "prop_checkSingleError",
          "normalized": "Integer-\u003eInteger-\u003eInteger-\u003eProperty",
          "package": "luhn",
          "partial": "Single Error",
          "signature": "Integer-\u003eInteger-\u003eInteger-\u003eProperty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/luhn/docs/Luhn.html#v:prop_checkSingleError"
      }
    }
  ]
]