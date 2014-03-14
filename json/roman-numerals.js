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
        "word": "roman-numerals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and pretty printing of Roman numerals.\n\u003c/p\u003e\u003cp\u003eThis module provides functions for parsing and pretty printing Roman\nnumerals. Because the notation of Roman numerals has varied through\nthe centuries this package allows for some customisation using a\nconfiguration that is passed to the conversion functions.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003etoRoman\u003c/a\u003e\u003c/code\u003e 1729 &#8759; String\n  \"MDCCXXIX\"\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003efromRoman\u003c/a\u003e\u003c/code\u003e \"MDCCXXIX\" &#8759; Maybe Integer\n  Just 1729\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003econvertTo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esimpleRoman\u003c/a\u003e\u003c/code\u003e 1729 &#8759; String\n  \"MDCCXXVIIII\"\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003efromRoman\u003c/a\u003e\u003c/code\u003e \"Bla\" &#8759; Maybe Integer\n  Nothing\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Text.Numeral.Roman",
          "name": "Roman",
          "package": "roman-numerals",
          "source": "src/Text-Numeral-Roman.html",
          "type": "module"
        },
        "index": {
          "description": "Parsing and pretty printing of Roman numerals This module provides functions for parsing and pretty printing Roman numerals Because the notation of Roman numerals has varied through the centuries this package allows for some customisation using configuration that is passed to the conversion functions Example toRoman String MDCCXXIX fromRoman MDCCXXIX Maybe Integer Just convertTo simpleRoman String MDCCXXVIIII fromRoman Bla Maybe Integer Nothing",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "Roman",
          "package": "roman-numerals",
          "partial": "Roman",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configuration with which the \u003ccode\u003e\u003ca\u003econvertTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econvertFrom\u003c/a\u003e\u003c/code\u003e functions can\n be parameterized.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "NumeralConfig",
          "package": "roman-numerals",
          "source": "src/Text-Numeral-Roman.html#NumeralConfig",
          "type": "data"
        },
        "index": {
          "description": "configuration with which the convertTo and convertFrom functions can be parameterized",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "NumeralConfig",
          "package": "roman-numerals",
          "partial": "Numeral Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#t:NumeralConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass used to overload the input of the parsing functions.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "StripPrefix",
          "package": "roman-numerals",
          "source": "src/Text-Numeral-Roman.html#StripPrefix",
          "type": "class"
        },
        "index": {
          "description": "Class used to overload the input of the parsing functions",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "StripPrefix",
          "package": "roman-numerals",
          "partial": "Strip Prefix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#t:StripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string as a Roman numeral according to the given\n configuration. Result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is not a valid numeral.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "convertFrom",
          "package": "roman-numerals",
          "signature": "NumeralConfig s n -\u003e s -\u003e Maybe n",
          "source": "src/Text-Numeral-Roman.html#convertFrom",
          "type": "function"
        },
        "index": {
          "description": "Parses string as Roman numeral according to the given configuration Result is Nothing if the input is not valid numeral",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "convertFrom",
          "normalized": "NumeralConfig a b-\u003ea-\u003eMaybe b",
          "package": "roman-numerals",
          "partial": "From",
          "signature": "NumeralConfig s n-\u003es-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:convertFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a number to a Roman numeral according to the given configuration.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "convertTo",
          "package": "roman-numerals",
          "signature": "NumeralConfig s n -\u003e n -\u003e s",
          "source": "src/Text-Numeral-Roman.html#convertTo",
          "type": "function"
        },
        "index": {
          "description": "Converts number to Roman numeral according to the given configuration",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "convertTo",
          "normalized": "NumeralConfig a b-\u003eb-\u003ea",
          "package": "roman-numerals",
          "partial": "To",
          "signature": "NumeralConfig s n-\u003en-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:convertTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a string as a modern Roman numeral.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "fromRoman",
          "package": "roman-numerals",
          "signature": "s -\u003e Maybe n",
          "source": "src/Text-Numeral-Roman.html#fromRoman",
          "type": "function"
        },
        "index": {
          "description": "Parses string as modern Roman numeral",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "fromRoman",
          "normalized": "a-\u003eMaybe b",
          "package": "roman-numerals",
          "partial": "Roman",
          "signature": "s-\u003eMaybe n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:fromRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for a \u003ccode\u003e\u003ca\u003eNumeralConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "mkNumConfig",
          "package": "roman-numerals",
          "signature": "s-\u003e s-\u003e [(s, n)]-\u003e NumeralConfig s n",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for NumeralConfig",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "mkNumConfig",
          "normalized": "a-\u003ea-\u003e[(a,b)]-\u003eNumeralConfig a b",
          "package": "roman-numerals",
          "partial": "Num Config",
          "signature": "s-\u003es-\u003e[(s,n)]-\u003eNumeralConfig s n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:mkNumConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for Roman numerals as they are commonly used today. The value\n 0 is represented by the empty string. It can be interpreted as not writing\n down a number. This configuration is practically limited to the range\n [1..3999]. Smaller numbers will result in an empty string. Larger numbers\n will result in repeated use of the 'M' symbol.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "modernRoman",
          "package": "roman-numerals",
          "signature": "NumeralConfig s n",
          "source": "src/Text-Numeral-Roman.html#modernRoman",
          "type": "function"
        },
        "index": {
          "description": "Configuration for Roman numerals as they are commonly used today The value is represented by the empty string It can be interpreted as not writing down number This configuration is practically limited to the range Smaller numbers will result in an empty string Larger numbers will result in repeated use of the symbol",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "modernRoman",
          "package": "roman-numerals",
          "partial": "Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:modernRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for Roman numerals that do not use the rule that a lower rank\n symbol can be placed before a higher rank symbol to denote the difference\n between them. Thus a numeral like \"IV\" will not be accepted or generated by\n this configuration. This configuration is practically limited to the range\n [1..3999]. Smaller numbers will result in an empty string. Larger numbers\n will result in repeated use of the 'M' symbol.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "simpleRoman",
          "package": "roman-numerals",
          "signature": "NumeralConfig s n",
          "source": "src/Text-Numeral-Roman.html#simpleRoman",
          "type": "function"
        },
        "index": {
          "description": "Configuration for Roman numerals that do not use the rule that lower rank symbol can be placed before higher rank symbol to denote the difference between them Thus numeral like IV will not be accepted or generated by this configuration This configuration is practically limited to the range Smaller numbers will result in an empty string Larger numbers will result in repeated use of the symbol",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "simpleRoman",
          "package": "roman-numerals",
          "partial": "Roman",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:simpleRoman"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Roman",
          "name": "spNull",
          "package": "roman-numerals",
          "signature": "s -\u003e Bool",
          "source": "src/Text-Numeral-Roman.html#spNull",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "spNull",
          "normalized": "a-\u003eBool",
          "package": "roman-numerals",
          "partial": "Null",
          "signature": "s-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:spNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Numeral.Roman",
          "name": "spStripPrefix",
          "package": "roman-numerals",
          "signature": "s -\u003e s -\u003e Maybe s",
          "source": "src/Text-Numeral-Roman.html#spStripPrefix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "spStripPrefix",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "roman-numerals",
          "partial": "Strip Prefix",
          "signature": "s-\u003es-\u003eMaybe s",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:spStripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a number to a modern Roman numeral.\n\u003c/p\u003e",
          "module": "Text.Numeral.Roman",
          "name": "toRoman",
          "package": "roman-numerals",
          "signature": "n -\u003e s",
          "source": "src/Text-Numeral-Roman.html#toRoman",
          "type": "function"
        },
        "index": {
          "description": "Converts number to modern Roman numeral",
          "hierarchy": "Text Numeral Roman",
          "module": "Text.Numeral.Roman",
          "name": "toRoman",
          "normalized": "a-\u003eb",
          "package": "roman-numerals",
          "partial": "Roman",
          "signature": "n-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:toRoman"
      }
    }
  ]
]