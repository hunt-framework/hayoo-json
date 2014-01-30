[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParsing and pretty printing of Roman numerals.\n\u003c/p\u003e\u003cp\u003eThis module provides functions for parsing and pretty printing Roman\nnumerals. Because the notation of Roman numerals has varied through\nthe centuries this package allows for some customisation using a\nconfiguration that is passed to the conversion functions.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003etoRoman\u003c/a\u003e\u003c/code\u003e 1729 &#8759; String\n  \"MDCCXXIX\"\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003efromRoman\u003c/a\u003e\u003c/code\u003e \"MDCCXXIX\" &#8759; Maybe Integer\n  Just 1729\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003econvertTo\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003esimpleRoman\u003c/a\u003e\u003c/code\u003e 1729 &#8759; String\n  \"MDCCXXVIIII\"\n\u003c/pre\u003e\u003cpre\u003e\n  \u003e \u003ccode\u003e\u003ca\u003efromRoman\u003c/a\u003e\u003c/code\u003e \"Bla\" &#8759; Maybe Integer\n  Nothing\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "module",
        "fct-source": "src/Text-Numeral-Roman.html",
        "fct-type": "module",
        "title": "Roman"
      },
      "index": {
        "description": "Parsing and pretty printing of Roman numerals This module provides functions for parsing and pretty printing Roman numerals Because the notation of Roman numerals has varied through the centuries this package allows for some customisation using configuration that is passed to the conversion functions Example toRoman String MDCCXXIX fromRoman MDCCXXIX Maybe Integer Just convertTo simpleRoman String MDCCXXVIIII fromRoman Bla Maybe Integer Nothing",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "Roman",
        "normalized": "",
        "package": "roman-numerals",
        "partial": "Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#t:NumeralConfig",
      "description": {
        "fct-descr": "\u003cp\u003eA configuration with which the \u003ccode\u003e\u003ca\u003econvertTo\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econvertFrom\u003c/a\u003e\u003c/code\u003e functions can\n be parameterized.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "data",
        "fct-source": "src/Text-Numeral-Roman.html#NumeralConfig",
        "fct-type": "data",
        "title": "NumeralConfig"
      },
      "index": {
        "description": "configuration with which the convertTo and convertFrom functions can be parameterized",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "NumeralConfig",
        "normalized": "",
        "package": "roman-numerals",
        "partial": "Numeral Config",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#t:StripPrefix",
      "description": {
        "fct-descr": "\u003cp\u003eClass used to overload the input of the parsing functions.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "class",
        "fct-source": "src/Text-Numeral-Roman.html#StripPrefix",
        "fct-type": "class",
        "title": "StripPrefix"
      },
      "index": {
        "description": "Class used to overload the input of the parsing functions",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "StripPrefix",
        "normalized": "",
        "package": "roman-numerals",
        "partial": "Strip Prefix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:convertFrom",
      "description": {
        "fct-descr": "\u003cp\u003eParses a string as a Roman numeral according to the given\n configuration. Result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the input is not a valid numeral.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "NumeralConfig s n -\u003e s -\u003e Maybe n",
        "fct-source": "src/Text-Numeral-Roman.html#convertFrom",
        "fct-type": "function",
        "title": "convertFrom"
      },
      "index": {
        "description": "Parses string as Roman numeral according to the given configuration Result is Nothing if the input is not valid numeral",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "convertFrom",
        "normalized": "NumeralConfig a b-\u003ea-\u003eMaybe b",
        "package": "roman-numerals",
        "partial": "From",
        "signature": "NumeralConfig s n-\u003es-\u003eMaybe n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:convertTo",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a number to a Roman numeral according to the given configuration.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "NumeralConfig s n -\u003e n -\u003e s",
        "fct-source": "src/Text-Numeral-Roman.html#convertTo",
        "fct-type": "function",
        "title": "convertTo"
      },
      "index": {
        "description": "Converts number to Roman numeral according to the given configuration",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "convertTo",
        "normalized": "NumeralConfig a b-\u003eb-\u003ea",
        "package": "roman-numerals",
        "partial": "To",
        "signature": "NumeralConfig s n-\u003en-\u003es"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:fromRoman",
      "description": {
        "fct-descr": "\u003cp\u003eParses a string as a modern Roman numeral.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "s -\u003e Maybe n",
        "fct-source": "src/Text-Numeral-Roman.html#fromRoman",
        "fct-type": "function",
        "title": "fromRoman"
      },
      "index": {
        "description": "Parses string as modern Roman numeral",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "fromRoman",
        "normalized": "a-\u003eMaybe b",
        "package": "roman-numerals",
        "partial": "Roman",
        "signature": "s-\u003eMaybe n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:mkNumConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSmart constructor for a \u003ccode\u003e\u003ca\u003eNumeralConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "s-\u003e s-\u003e [(s, n)]-\u003e NumeralConfig s n",
        "fct-type": "function",
        "title": "mkNumConfig"
      },
      "index": {
        "description": "Smart constructor for NumeralConfig",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "mkNumConfig",
        "normalized": "a-\u003ea-\u003e[(a,b)]-\u003eNumeralConfig a b",
        "package": "roman-numerals",
        "partial": "Num Config",
        "signature": "s-\u003es-\u003e[(s,n)]-\u003eNumeralConfig s n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:modernRoman",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration for Roman numerals as they are commonly used today. The value\n 0 is represented by the empty string. It can be interpreted as not writing\n down a number. This configuration is practically limited to the range\n [1..3999]. Smaller numbers will result in an empty string. Larger numbers\n will result in repeated use of the 'M' symbol.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "NumeralConfig s n",
        "fct-source": "src/Text-Numeral-Roman.html#modernRoman",
        "fct-type": "function",
        "title": "modernRoman"
      },
      "index": {
        "description": "Configuration for Roman numerals as they are commonly used today The value is represented by the empty string It can be interpreted as not writing down number This configuration is practically limited to the range Smaller numbers will result in an empty string Larger numbers will result in repeated use of the symbol",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "modernRoman",
        "normalized": "",
        "package": "roman-numerals",
        "partial": "Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:simpleRoman",
      "description": {
        "fct-descr": "\u003cp\u003eConfiguration for Roman numerals that do not use the rule that a lower rank\n symbol can be placed before a higher rank symbol to denote the difference\n between them. Thus a numeral like \"IV\" will not be accepted or generated by\n this configuration. This configuration is practically limited to the range\n [1..3999]. Smaller numbers will result in an empty string. Larger numbers\n will result in repeated use of the 'M' symbol.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "NumeralConfig s n",
        "fct-source": "src/Text-Numeral-Roman.html#simpleRoman",
        "fct-type": "function",
        "title": "simpleRoman"
      },
      "index": {
        "description": "Configuration for Roman numerals that do not use the rule that lower rank symbol can be placed before higher rank symbol to denote the difference between them Thus numeral like IV will not be accepted or generated by this configuration This configuration is practically limited to the range Smaller numbers will result in an empty string Larger numbers will result in repeated use of the symbol",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "simpleRoman",
        "normalized": "",
        "package": "roman-numerals",
        "partial": "Roman",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:spNull",
      "description": {
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "s -\u003e Bool",
        "fct-source": "src/Text-Numeral-Roman.html#spNull",
        "fct-type": "method",
        "title": "spNull"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "spNull",
        "normalized": "a-\u003eBool",
        "package": "roman-numerals",
        "partial": "Null",
        "signature": "s-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:spStripPrefix",
      "description": {
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "s -\u003e s -\u003e Maybe s",
        "fct-source": "src/Text-Numeral-Roman.html#spStripPrefix",
        "fct-type": "method",
        "title": "spStripPrefix"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "spStripPrefix",
        "normalized": "a-\u003ea-\u003eMaybe a",
        "package": "roman-numerals",
        "partial": "Strip Prefix",
        "signature": "s-\u003es-\u003eMaybe s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/roman-numerals/docs/Text-Numeral-Roman.html#v:toRoman",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a number to a modern Roman numeral.\n\u003c/p\u003e",
        "fct-module": "Text.Numeral.Roman",
        "fct-package": "roman-numerals",
        "fct-signature": "n -\u003e s",
        "fct-source": "src/Text-Numeral-Roman.html#toRoman",
        "fct-type": "function",
        "title": "toRoman"
      },
      "index": {
        "description": "Converts number to modern Roman numeral",
        "hierarchy": "Text Numeral Roman",
        "module": "Text.Numeral.Roman",
        "name": "toRoman",
        "normalized": "a-\u003eb",
        "package": "roman-numerals",
        "partial": "Roman",
        "signature": "n-\u003es"
      }
    }
  }
]