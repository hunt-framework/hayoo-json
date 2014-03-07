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
        "word": "copilot-language"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBitwise operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "BitWise",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-BitWise.html",
          "type": "module"
        },
        "index": {
          "description": "Bitwise operators",
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "BitWise",
          "package": "copilot-language",
          "partial": "Bit Wise",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eBits\u003c/a\u003e\u003c/code\u003e class defines bitwise operations over integral types.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Bits are numbered from 0 with bit 0 being the least\n  significant bit.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003e.&.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003e.|.\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003exor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ecomplement\u003c/a\u003e\u003c/code\u003e,\n(\u003ccode\u003e\u003ca\u003eshift\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003eshiftL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eshiftR\u003c/a\u003e\u003c/code\u003e)), (\u003ccode\u003e\u003ca\u003erotate\u003c/a\u003e\u003c/code\u003e or (\u003ccode\u003e\u003ca\u003erotateL\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erotateR\u003c/a\u003e\u003c/code\u003e)),\n\u003ccode\u003e\u003ca\u003ebitSize\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisSigned\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etestBit\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ebit\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003epopCount\u003c/a\u003e\u003c/code\u003e.  The latter three can\nbe implemented using \u003ccode\u003e\u003ca\u003etestBitDefault\u003c/a\u003e\u003c/code\u003e, 'bitDefault, and \u003ccode\u003e\u003ca\u003epopCountDefault\u003c/a\u003e\u003c/code\u003e, if\n\u003ccode\u003ea\u003c/code\u003e is also an instance of \u003ccode\u003e\u003ca\u003eNum\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "Bits",
          "package": "copilot-language",
          "type": "class"
        },
        "index": {
          "description": "The Bits class defines bitwise operations over integral types Bits are numbered from with bit being the least significant bit Minimal complete definition xor complement shift or shiftL and shiftR rotate or rotateL and rotateR bitSize isSigned testBit bit and popCount The latter three can be implemented using testBitDefault bitDefault and popCountDefault if is also an instance of Num",
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "Bits",
          "package": "copilot-language",
          "partial": "Bits",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#t:Bits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"or\"\n\u003c/p\u003e",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.|.)",
          "package": "copilot-language",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Bitwise or",
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.|.) .|.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "copilot-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:.-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBitwise \"and\"\n\u003c/p\u003e",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.&.)",
          "package": "copilot-language",
          "signature": "a -\u003e a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Bitwise and",
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.&.) .&.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "copilot-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:.-38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.\u003c\u003c.)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream b -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-BitWise.html#.%3C%3C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.\u003c\u003c.) .\u003c\u003c.",
          "normalized": "Stream a-\u003eStream b-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:.-60--60-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.\u003e\u003e.)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream b -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-BitWise.html#.%3E%3E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.\u003e\u003e.) .\u003e\u003e.",
          "normalized": "Stream a-\u003eStream b-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:.-62--62-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.^.)",
          "package": "copilot-language",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Copilot-Language-Operators-BitWise.html#.%5E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "(.^.) .^.",
          "normalized": "a-\u003ea-\u003ea",
          "package": "copilot-language",
          "signature": "a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:.-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse all the bits in the argument \n\u003c/p\u003e",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "complement",
          "package": "copilot-language",
          "signature": "a -\u003e a",
          "type": "method"
        },
        "index": {
          "description": "Reverse all the bits in the argument",
          "hierarchy": "Copilot Language Operators BitWise",
          "module": "Copilot.Language.Operators.BitWise",
          "name": "complement",
          "normalized": "a-\u003ea",
          "package": "copilot-language",
          "signature": "a-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-BitWise.html#v:complement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBoolean operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "Boolean",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Boolean.html",
          "type": "module"
        },
        "index": {
          "description": "Boolean operators",
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "Boolean",
          "package": "copilot-language",
          "partial": "Boolean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(||)",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(||) ||",
          "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:-124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(&&)",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#%26%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(&&) &&",
          "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:-38--38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(==\u003e)",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#%3D%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "(==\u003e) ==\u003e",
          "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:-61--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "false",
          "package": "copilot-language",
          "signature": "Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "false",
          "package": "copilot-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "not",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#not",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "not",
          "normalized": "Stream Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "true",
          "package": "copilot-language",
          "signature": "Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "true",
          "package": "copilot-language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Boolean",
          "name": "xor",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Boolean.html#xor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Boolean",
          "module": "Copilot.Language.Operators.Boolean",
          "name": "xor",
          "normalized": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Boolean.html#v:xor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType-safe casting operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Cast",
          "name": "Cast",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Cast.html",
          "type": "module"
        },
        "index": {
          "description": "Type-safe casting operators",
          "hierarchy": "Copilot Language Operators Cast",
          "module": "Copilot.Language.Operators.Cast",
          "name": "Cast",
          "package": "copilot-language",
          "partial": "Cast",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Cast.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Cast",
          "name": "cast",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream b",
          "source": "src/Copilot-Language-Operators-Cast.html#cast",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Cast",
          "module": "Copilot.Language.Operators.Cast",
          "name": "cast",
          "normalized": "Stream a-\u003eStream b",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Cast.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConstants.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Constant",
          "name": "Constant",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Constant.html",
          "type": "module"
        },
        "index": {
          "description": "Constants",
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "Constant",
          "package": "copilot-language",
          "partial": "Constant",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constB",
          "package": "copilot-language",
          "signature": "Bool -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Constant.html#constB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constB",
          "normalized": "Bool-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Bool-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constD",
          "package": "copilot-language",
          "signature": "Double -\u003e Stream Double",
          "source": "src/Copilot-Language-Operators-Constant.html#constD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constD",
          "normalized": "Double-\u003eStream Double",
          "package": "copilot-language",
          "signature": "Double-\u003eStream Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constF",
          "package": "copilot-language",
          "signature": "Float -\u003e Stream Float",
          "source": "src/Copilot-Language-Operators-Constant.html#constF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constF",
          "normalized": "Float-\u003eStream Float",
          "package": "copilot-language",
          "signature": "Float-\u003eStream Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI16",
          "package": "copilot-language",
          "signature": "Int16 -\u003e Stream Int16",
          "source": "src/Copilot-Language-Operators-Constant.html#constI16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI16",
          "normalized": "Int-\u003eStream Int",
          "package": "copilot-language",
          "signature": "Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constI16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI32",
          "package": "copilot-language",
          "signature": "Int32 -\u003e Stream Int32",
          "source": "src/Copilot-Language-Operators-Constant.html#constI32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI32",
          "normalized": "Int-\u003eStream Int",
          "package": "copilot-language",
          "signature": "Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constI32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI64",
          "package": "copilot-language",
          "signature": "Int64 -\u003e Stream Int64",
          "source": "src/Copilot-Language-Operators-Constant.html#constI64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI64",
          "normalized": "Int-\u003eStream Int",
          "package": "copilot-language",
          "signature": "Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constI64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI8",
          "package": "copilot-language",
          "signature": "Int8 -\u003e Stream Int8",
          "source": "src/Copilot-Language-Operators-Constant.html#constI8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constI8",
          "normalized": "Int-\u003eStream Int",
          "package": "copilot-language",
          "signature": "Int-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constI8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW16",
          "package": "copilot-language",
          "signature": "Word16 -\u003e Stream Word16",
          "source": "src/Copilot-Language-Operators-Constant.html#constW16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW16",
          "normalized": "Word-\u003eStream Word",
          "package": "copilot-language",
          "signature": "Word-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constW16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW32",
          "package": "copilot-language",
          "signature": "Word32 -\u003e Stream Word32",
          "source": "src/Copilot-Language-Operators-Constant.html#constW32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW32",
          "normalized": "Word-\u003eStream Word",
          "package": "copilot-language",
          "signature": "Word-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constW32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW64",
          "package": "copilot-language",
          "signature": "Word64 -\u003e Stream Word64",
          "source": "src/Copilot-Language-Operators-Constant.html#constW64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW64",
          "normalized": "Word-\u003eStream Word",
          "package": "copilot-language",
          "signature": "Word-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constW64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW8",
          "package": "copilot-language",
          "signature": "Word8 -\u003e Stream Word8",
          "source": "src/Copilot-Language-Operators-Constant.html#constW8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constW8",
          "normalized": "Word-\u003eStream Word",
          "package": "copilot-language",
          "signature": "Word-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constW8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Constant",
          "name": "constant",
          "package": "copilot-language",
          "signature": "a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Constant.html#constant",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Constant",
          "module": "Copilot.Language.Operators.Constant",
          "name": "constant",
          "normalized": "a-\u003eStream a",
          "package": "copilot-language",
          "signature": "a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Constant.html#v:constant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEquality operator.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Eq",
          "name": "Eq",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Eq.html",
          "type": "module"
        },
        "index": {
          "description": "Equality operator",
          "hierarchy": "Copilot Language Operators Eq",
          "module": "Copilot.Language.Operators.Eq",
          "name": "Eq",
          "package": "copilot-language",
          "partial": "Eq",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Eq.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Eq",
          "name": "(/=)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Eq.html#%2F%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Eq",
          "module": "Copilot.Language.Operators.Eq",
          "name": "(/=) /=",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Eq.html#v:-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Eq",
          "name": "(==)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Eq.html#%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Eq",
          "module": "Copilot.Language.Operators.Eq",
          "name": "(==) ==",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Eq.html#v:-61--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eExternal variables, arrays, and functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Extern",
          "name": "Extern",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Extern.html",
          "type": "module"
        },
        "index": {
          "description": "External variables arrays and functions",
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "Extern",
          "package": "copilot-language",
          "partial": "Extern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "extern",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [a] -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Extern.html#extern",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "extern",
          "normalized": "String-\u003eMaybe[a]-\u003eStream a",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[a]-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:extern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArray",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[b]] -\u003e Stream b",
          "source": "src/Copilot-Language-Operators-Extern.html#externArray",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArray",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[b]]-\u003eStream b",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[b]]-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayB",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Bool]] -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayB",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Bool]]-\u003eStream Bool",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Bool]]-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayD",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Double]] -\u003e Stream Double",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayD",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Double]]-\u003eStream Double",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Double]]-\u003eStream Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayF",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Float]] -\u003e Stream Float",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayF",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Float]]-\u003eStream Float",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Float]]-\u003eStream Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI16",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Int16]] -\u003e Stream Int16",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayI16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI16",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayI16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI32",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Int32]] -\u003e Stream Int32",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayI32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI32",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayI32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI64",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Int64]] -\u003e Stream Int64",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayI64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI64",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayI64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI8",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Int8]] -\u003e Stream Int8",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayI8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayI8",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Int]]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayI8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW16",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Word16]] -\u003e Stream Word16",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayW16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW16",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayW16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW32",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Word32]] -\u003e Stream Word32",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayW32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW32",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayW32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW64",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Word64]] -\u003e Stream Word64",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayW64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW64",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayW64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW8",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Size -\u003e Maybe [[Word8]] -\u003e Stream Word8",
          "source": "src/Copilot-Language-Operators-Extern.html#externArrayW8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externArrayW8",
          "normalized": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "package": "copilot-language",
          "partial": "Array",
          "signature": "String-\u003eStream a-\u003eSize-\u003eMaybe[[Word]]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externArrayW8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externB",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Bool] -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Extern.html#externB",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externB",
          "normalized": "String-\u003eMaybe[Bool]-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Bool]-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externD",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Double] -\u003e Stream Double",
          "source": "src/Copilot-Language-Operators-Extern.html#externD",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externD",
          "normalized": "String-\u003eMaybe[Double]-\u003eStream Double",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Double]-\u003eStream Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externF",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Float] -\u003e Stream Float",
          "source": "src/Copilot-Language-Operators-Extern.html#externF",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externF",
          "normalized": "String-\u003eMaybe[Float]-\u003eStream Float",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Float]-\u003eStream Float",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externFun",
          "package": "copilot-language",
          "signature": "String -\u003e [Arg] -\u003e Maybe (Stream a) -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Extern.html#externFun",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externFun",
          "normalized": "String-\u003e[Arg]-\u003eMaybe(Stream a)-\u003eStream a",
          "package": "copilot-language",
          "partial": "Fun",
          "signature": "String-\u003e[Arg]-\u003eMaybe(Stream a)-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI16",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Int16] -\u003e Stream Int16",
          "source": "src/Copilot-Language-Operators-Extern.html#externI16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI16",
          "normalized": "String-\u003eMaybe[Int]-\u003eStream Int",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Int]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externI16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI32",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Int32] -\u003e Stream Int32",
          "source": "src/Copilot-Language-Operators-Extern.html#externI32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI32",
          "normalized": "String-\u003eMaybe[Int]-\u003eStream Int",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Int]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externI32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI64",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Int64] -\u003e Stream Int64",
          "source": "src/Copilot-Language-Operators-Extern.html#externI64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI64",
          "normalized": "String-\u003eMaybe[Int]-\u003eStream Int",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Int]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externI64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI8",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Int8] -\u003e Stream Int8",
          "source": "src/Copilot-Language-Operators-Extern.html#externI8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externI8",
          "normalized": "String-\u003eMaybe[Int]-\u003eStream Int",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Int]-\u003eStream Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externI8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW16",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Word16] -\u003e Stream Word16",
          "source": "src/Copilot-Language-Operators-Extern.html#externW16",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW16",
          "normalized": "String-\u003eMaybe[Word]-\u003eStream Word",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Word]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externW16"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW32",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Word32] -\u003e Stream Word32",
          "source": "src/Copilot-Language-Operators-Extern.html#externW32",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW32",
          "normalized": "String-\u003eMaybe[Word]-\u003eStream Word",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Word]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externW32"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW64",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Word64] -\u003e Stream Word64",
          "source": "src/Copilot-Language-Operators-Extern.html#externW64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW64",
          "normalized": "String-\u003eMaybe[Word]-\u003eStream Word",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Word]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externW64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW8",
          "package": "copilot-language",
          "signature": "String -\u003e Maybe [Word8] -\u003e Stream Word8",
          "source": "src/Copilot-Language-Operators-Extern.html#externW8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "externW8",
          "normalized": "String-\u003eMaybe[Word]-\u003eStream Word",
          "package": "copilot-language",
          "signature": "String-\u003eMaybe[Word]-\u003eStream Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:externW8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeprecated.\n\u003c/p\u003e",
          "module": "Copilot.Language.Operators.Extern",
          "name": "funArg",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Arg",
          "source": "src/Copilot-Language-Operators-Extern.html#funArg",
          "type": "function"
        },
        "index": {
          "description": "Deprecated",
          "hierarchy": "Copilot Language Operators Extern",
          "module": "Copilot.Language.Operators.Extern",
          "name": "funArg",
          "normalized": "Stream a-\u003eArg",
          "package": "copilot-language",
          "partial": "Arg",
          "signature": "Stream a-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Extern.html#v:funArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIntegral class operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Integral",
          "name": "Integral",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Integral.html",
          "type": "module"
        },
        "index": {
          "description": "Integral class operators",
          "hierarchy": "Copilot Language Operators Integral",
          "module": "Copilot.Language.Operators.Integral",
          "name": "Integral",
          "package": "copilot-language",
          "partial": "Integral",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Integral.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Integral",
          "name": "(^)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream b -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Integral.html#%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Integral",
          "module": "Copilot.Language.Operators.Integral",
          "name": "(^) ^",
          "normalized": "Stream a-\u003eStream b-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream b-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Integral.html#v:-94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Integral",
          "name": "div",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Integral.html#div",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Integral",
          "module": "Copilot.Language.Operators.Integral",
          "name": "div",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Integral.html#v:div"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Integral",
          "name": "mod",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Integral.html#mod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Integral",
          "module": "Copilot.Language.Operators.Integral",
          "name": "mod",
          "normalized": "Stream a-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Integral.html#v:mod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLet expressions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Local",
          "name": "Local",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Local.html",
          "type": "module"
        },
        "index": {
          "description": "Let expressions",
          "hierarchy": "Copilot Language Operators Local",
          "module": "Copilot.Language.Operators.Local",
          "name": "Local",
          "package": "copilot-language",
          "partial": "Local",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Local.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Local",
          "name": "local",
          "package": "copilot-language",
          "signature": "Stream a -\u003e (Stream a -\u003e Stream b) -\u003e Stream b",
          "source": "src/Copilot-Language-Operators-Local.html#local",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Local",
          "module": "Copilot.Language.Operators.Local",
          "name": "local",
          "normalized": "Stream a-\u003e(Stream a-\u003eStream b)-\u003eStream b",
          "package": "copilot-language",
          "signature": "Stream a-\u003e(Stream a-\u003eStream b)-\u003eStream b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Local.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eif-then-else.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Mux",
          "name": "Mux",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Mux.html",
          "type": "module"
        },
        "index": {
          "description": "if-then-else",
          "hierarchy": "Copilot Language Operators Mux",
          "module": "Copilot.Language.Operators.Mux",
          "name": "Mux",
          "package": "copilot-language",
          "partial": "Mux",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Mux.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Mux",
          "name": "ifThenElse",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Mux.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Mux",
          "module": "Copilot.Language.Operators.Mux",
          "name": "ifThenElse",
          "normalized": "Stream Bool-\u003eStream a-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "partial": "Then Else",
          "signature": "Stream Bool-\u003eStream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Mux.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Mux",
          "name": "mux",
          "package": "copilot-language",
          "signature": "Stream Bool -\u003e Stream a -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Mux.html#mux",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Mux",
          "module": "Copilot.Language.Operators.Mux",
          "name": "mux",
          "normalized": "Stream Bool-\u003eStream a-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "signature": "Stream Bool-\u003eStream a-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Mux.html#v:mux"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eComparison operators.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Ord",
          "name": "Ord",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Ord.html",
          "type": "module"
        },
        "index": {
          "description": "Comparison operators",
          "hierarchy": "Copilot Language Operators Ord",
          "module": "Copilot.Language.Operators.Ord",
          "name": "Ord",
          "package": "copilot-language",
          "partial": "Ord",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Ord.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003c)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Ord.html#%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Ord",
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003c) \u003c",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Ord.html#v:-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003c=)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Ord.html#%3C%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Ord",
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003c=) \u003c=",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Ord.html#v:-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003e)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Ord.html#%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Ord",
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003e) \u003e",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Ord.html#v:-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003e=)",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Stream a -\u003e Stream Bool",
          "source": "src/Copilot-Language-Operators-Ord.html#%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Ord",
          "module": "Copilot.Language.Operators.Ord",
          "name": "(\u003e=) \u003e=",
          "normalized": "Stream a-\u003eStream a-\u003eStream Bool",
          "package": "copilot-language",
          "signature": "Stream a-\u003eStream a-\u003eStream Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Ord.html#v:-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eStream construction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Operators.Temporal",
          "name": "Temporal",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Operators-Temporal.html",
          "type": "module"
        },
        "index": {
          "description": "Stream construction",
          "hierarchy": "Copilot Language Operators Temporal",
          "module": "Copilot.Language.Operators.Temporal",
          "name": "Temporal",
          "package": "copilot-language",
          "partial": "Temporal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Temporal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Temporal",
          "name": "(++)",
          "package": "copilot-language",
          "signature": "[a] -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Temporal.html#%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Temporal",
          "module": "Copilot.Language.Operators.Temporal",
          "name": "(++) ++",
          "normalized": "[a]-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "signature": "[a]-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Temporal.html#v:-43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Operators.Temporal",
          "name": "drop",
          "package": "copilot-language",
          "signature": "Int -\u003e Stream a -\u003e Stream a",
          "source": "src/Copilot-Language-Operators-Temporal.html#drop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Operators Temporal",
          "module": "Copilot.Language.Operators.Temporal",
          "name": "drop",
          "normalized": "Int-\u003eStream a-\u003eStream a",
          "package": "copilot-language",
          "signature": "Int-\u003eStream a-\u003eStream a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Operators-Temporal.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eReexports \u003ccode\u003ePrelude\u003c/code\u003e from package \u003ca\u003ebase\u003c/a\u003e hiding identifiers redefined by\n Copilot.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Prelude",
          "name": "Prelude",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Prelude.html",
          "type": "module"
        },
        "index": {
          "description": "Reexports Prelude from package base hiding identifiers redefined by Copilot",
          "hierarchy": "Copilot Language Prelude",
          "module": "Copilot.Language.Prelude",
          "name": "Prelude",
          "package": "copilot-language",
          "partial": "Prelude",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Prelude.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTransforms a Copilot Language specification into a Copilot Core\n specification.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language.Reify",
          "name": "Reify",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Reify.html",
          "type": "module"
        },
        "index": {
          "description": "Transforms Copilot Language specification into Copilot Core specification",
          "hierarchy": "Copilot Language Reify",
          "module": "Copilot.Language.Reify",
          "name": "Reify",
          "package": "copilot-language",
          "partial": "Reify",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Reify.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language.Reify",
          "name": "reify",
          "package": "copilot-language",
          "signature": "Spec -\u003e IO Spec",
          "source": "src/Copilot-Language-Reify.html#reify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language Reify",
          "module": "Copilot.Language.Reify",
          "name": "reify",
          "normalized": "Spec-\u003eIO Spec",
          "package": "copilot-language",
          "signature": "Spec-\u003eIO Spec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language-Reify.html#v:reify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain Copilot language export file.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot.Language",
          "name": "Language",
          "package": "copilot-language",
          "source": "src/Copilot-Language.html",
          "type": "module"
        },
        "index": {
          "description": "Main Copilot language export file",
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "Language",
          "package": "copilot-language",
          "partial": "Language",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "Spec",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Spec.html#Spec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "Spec",
          "package": "copilot-language",
          "partial": "Spec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#t:Spec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "Stream",
          "package": "copilot-language",
          "source": "src/Copilot-Language-Stream.html#Stream",
          "type": "data"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "Stream",
          "package": "copilot-language",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "arg",
          "package": "copilot-language",
          "signature": "Stream a -\u003e Arg",
          "source": "src/Copilot-Language-Spec.html#arg",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "arg",
          "normalized": "Stream a-\u003eArg",
          "package": "copilot-language",
          "signature": "Stream a-\u003eArg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:arg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "badUsage",
          "package": "copilot-language",
          "signature": "String -\u003e a",
          "source": "src/Copilot-Language-Error.html#badUsage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "badUsage",
          "normalized": "String-\u003ea",
          "package": "copilot-language",
          "partial": "Usage",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:badUsage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "csv",
          "package": "copilot-language",
          "signature": "Integer -\u003e Spec -\u003e IO ()",
          "source": "src/Copilot-Language-Interpret.html#csv",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "csv",
          "normalized": "Integer-\u003eSpec-\u003eIO()",
          "package": "copilot-language",
          "signature": "Integer-\u003eSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:csv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "impossible",
          "package": "copilot-language",
          "signature": "String -\u003e String -\u003e a",
          "source": "src/Copilot-Language-Error.html#impossible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "impossible",
          "normalized": "String-\u003eString-\u003ea",
          "package": "copilot-language",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:impossible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMuch slower, but pretty-printed interpreter output.  \n\u003c/p\u003e",
          "module": "Copilot.Language",
          "name": "interpret",
          "package": "copilot-language",
          "signature": "Integer -\u003e Spec -\u003e IO ()",
          "source": "src/Copilot-Language-Interpret.html#interpret",
          "type": "function"
        },
        "index": {
          "description": "Much slower but pretty-printed interpreter output",
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "interpret",
          "normalized": "Integer-\u003eSpec-\u003eIO()",
          "package": "copilot-language",
          "signature": "Integer-\u003eSpec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:interpret"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "observer",
          "package": "copilot-language",
          "signature": "String -\u003e Stream a -\u003e Spec",
          "source": "src/Copilot-Language-Spec.html#observer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "observer",
          "normalized": "String-\u003eStream a-\u003eSpec",
          "package": "copilot-language",
          "signature": "String-\u003eStream a-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:observer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "prettyPrint",
          "package": "copilot-language",
          "signature": "Spec -\u003e IO ()",
          "source": "src/Copilot-Language.html#prettyPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "prettyPrint",
          "normalized": "Spec-\u003eIO()",
          "package": "copilot-language",
          "partial": "Print",
          "signature": "Spec-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:prettyPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Copilot.Language",
          "name": "trigger",
          "package": "copilot-language",
          "signature": "String -\u003e Stream Bool -\u003e [Arg] -\u003e Spec",
          "source": "src/Copilot-Language-Spec.html#trigger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Copilot Language",
          "module": "Copilot.Language",
          "name": "trigger",
          "normalized": "String-\u003eStream Bool-\u003e[Arg]-\u003eSpec",
          "package": "copilot-language",
          "signature": "String-\u003eStream Bool-\u003e[Arg]-\u003eSpec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot-Language.html#v:trigger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMain import module for the front-end lanugage.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Copilot",
          "name": "Copilot",
          "package": "copilot-language",
          "source": "src/Copilot.html",
          "type": "module"
        },
        "index": {
          "description": "Main import module for the front-end lanugage",
          "hierarchy": "Copilot",
          "module": "Copilot",
          "name": "Copilot",
          "package": "copilot-language",
          "partial": "Copilot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/copilot-language/docs/Copilot.html#"
      }
    }
  ]
]