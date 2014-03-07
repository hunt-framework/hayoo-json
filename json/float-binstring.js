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
        "word": "float-binstring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains functions for formatting and parsing floating point\n values as C99 printf/scanf functions with format string \u003ccode\u003e%a\u003c/code\u003e do.\n\u003c/p\u003e\u003cp\u003eFormat is [-]0x\u003cem\u003eh.hhhhh\u003c/em\u003ep&#177;\u003cem\u003eddd\u003c/em\u003e, where \u003cem\u003eh.hhhhh\u003c/em\u003e is significand as\n a hexadecimal floating-point number and \u003cem\u003e&#177;ddd\u003c/em\u003e is exponent as a\n decimal number. Significand has as many digits as needed to exactly\n represent the value, fractional part may be ommitted.\n\u003c/p\u003e\u003cp\u003eInfinity and NaN are represented as \u003ccode\u003e&#177;inf\u003c/code\u003e and \u003ccode\u003enan\u003c/code\u003e accordingly.\n\u003c/p\u003e\u003cp\u003eFor example, \u003ccode\u003e(&#960; &#8759; Double) = 0x1.921fb54442d18p+1\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eAssertion\n\u003c/p\u003e\u003cpre\u003eJust x &#8801; readFloatStr (showFloatStr x)\u003c/pre\u003e\u003cp\u003eholds (modulo bugs and cosmic rays).\n\u003c/p\u003e\u003cp\u003eFloating point radix is assumed to be 2.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Float.BinString",
          "name": "BinString",
          "package": "float-binstring",
          "source": "src/Data-Float-BinString.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains functions for formatting and parsing floating point values as C99 printf scanf functions with format string do Format is h.hhhhh ddd where h.hhhhh is significand as hexadecimal floating-point number and ddd is exponent as decimal number Significand has as many digits as needed to exactly represent the value fractional part may be ommitted Infinity and NaN are represented as inf and nan accordingly For example Double x1.921fb54442d18p Assertion Just readFloatStr showFloatStr holds modulo bugs and cosmic rays Floating point radix is assumed to be",
          "hierarchy": "Data Float BinString",
          "module": "Data.Float.BinString",
          "name": "BinString",
          "package": "float-binstring",
          "partial": "Bin String",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/float-binstring/docs/Data-Float-BinString.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a value from \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Float.BinString",
          "name": "readFloatStr",
          "package": "float-binstring",
          "signature": "String -\u003e Maybe a",
          "source": "src/Data-Float-BinString.html#readFloatStr",
          "type": "function"
        },
        "index": {
          "description": "Parse value from String",
          "hierarchy": "Data Float BinString",
          "module": "Data.Float.BinString",
          "name": "readFloatStr",
          "normalized": "String-\u003eMaybe a",
          "package": "float-binstring",
          "partial": "Float Str",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/float-binstring/docs/Data-Float-BinString.html#v:readFloatStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat a value. Will provide enough digits to reconstruct the value exactly.\n\u003c/p\u003e",
          "module": "Data.Float.BinString",
          "name": "showFloatStr",
          "package": "float-binstring",
          "signature": "a -\u003e String",
          "source": "src/Data-Float-BinString.html#showFloatStr",
          "type": "function"
        },
        "index": {
          "description": "Format value Will provide enough digits to reconstruct the value exactly",
          "hierarchy": "Data Float BinString",
          "module": "Data.Float.BinString",
          "name": "showFloatStr",
          "normalized": "a-\u003eString",
          "package": "float-binstring",
          "partial": "Float Str",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/float-binstring/docs/Data-Float-BinString.html#v:showFloatStr"
      }
    }
  ]
]