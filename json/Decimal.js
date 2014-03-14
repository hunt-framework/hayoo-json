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
        "word": "Decimal"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDecimal numbers are represented as \u003ccode\u003em*10^(-e)\u003c/code\u003e where\n \u003ccode\u003em\u003c/code\u003e and \u003ccode\u003ee\u003c/code\u003e are integers.  The exponent \u003ccode\u003ee\u003c/code\u003e is an unsigned Word8.  Hence\n the smallest value that can be represented is \u003ccode\u003e10^-255\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eUnary arithmetic results have the exponent of the argument.  Binary\n arithmetic results have an exponent equal to the maximum of the exponents\n of the arguments.\n\u003c/p\u003e\u003cp\u003eDecimal numbers are defined as instances of \u003ccode\u003eReal\u003c/code\u003e.  This means that\n conventional division is not defined.  Instead the functions \u003ccode\u003edivide\u003c/code\u003e and \n \u003ccode\u003eallocate\u003c/code\u003e will split a decimal amount into lists of results.  These \n results are guaranteed to sum to the original number.  This is a useful\n property when doing financial arithmetic.\n\u003c/p\u003e\u003cp\u003eThe arithmetic on mantissas is always done using \u003ccode\u003eInteger\u003c/code\u003e, regardless of\n the type of \u003ccode\u003eDecimalRaw\u003c/code\u003e being manipulated.  In practice it is recommended\n that \u003ccode\u003eDecimal\u003c/code\u003e be used, with other types being used only where necessary\n (e.g. to conform to a network protocol).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "source": "src/Data-Decimal.html",
          "type": "module"
        },
        "index": {
          "description": "Decimal numbers are represented as where and are integers The exponent is an unsigned Word8 Hence the smallest value that can be represented is Unary arithmetic results have the exponent of the argument Binary arithmetic results have an exponent equal to the maximum of the exponents of the arguments Decimal numbers are defined as instances of Real This means that conventional division is not defined Instead the functions divide and allocate will split decimal amount into lists of results These results are guaranteed to sum to the original number This is useful property when doing financial arithmetic The arithmetic on mantissas is always done using Integer regardless of the type of DecimalRaw being manipulated In practice it is recommended that Decimal be used with other types being used only where necessary e.g to conform to network protocol",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "partial": "Decimal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eArbitrary precision decimal type.  As a rule programs should do decimal\n arithmetic with this type and only convert to other instances of \n \u003ca\u003eDecimalRaw\u003c/a\u003e where required by an external interface.\n\u003c/p\u003e\u003cp\u003eUsing this type is also faster because it avoids repeated conversions\n to and from \u003ccode\u003eInteger\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "source": "src/Data-Decimal.html#Decimal",
          "type": "type"
        },
        "index": {
          "description": "Arbitrary precision decimal type As rule programs should do decimal arithmetic with this type and only convert to other instances of DecimalRaw where required by an external interface Using this type is also faster because it avoids repeated conversions to and from Integer",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "partial": "Decimal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#t:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw decimal arithmetic type constructor.  A decimal value consists of an\n integer mantissa and a negative exponent which is interpreted as the number\n of decimal places.  The value stored in a \u003ccode\u003eDecimal d\u003c/code\u003e is therefore equal to:\n\u003c/p\u003e\u003cpre\u003e decimalMantissa d / (10 ^ decimalPlaces d)\n\u003c/pre\u003e\u003cp\u003eThe \u003ca\u003eShow\u003c/a\u003e instance will add trailing zeros, so \u003ccode\u003eshow $ Decimal 3 1500\u003c/code\u003e\n will return \"1.500\".  Conversely the \u003ca\u003eRead\u003c/a\u003e instance will use the decimal\n places to determine the precision.\n\u003c/p\u003e\u003cp\u003eArithmetic and comparision operators convert their arguments to the \n greater of the two precisions, and return a result of that precision.  \n Regardless of the type of the arguments, all mantissa arithmetic is done\n using \u003ccode\u003eInteger\u003c/code\u003e types, so application developers do not need to worry about\n overflow in the internal algorithms.  However the result of each operator\n will be converted to the mantissa type without checking for overflow.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "DecimalRaw",
          "package": "Decimal",
          "source": "src/Data-Decimal.html#DecimalRaw",
          "type": "data"
        },
        "index": {
          "description": "Raw decimal arithmetic type constructor decimal value consists of an integer mantissa and negative exponent which is interpreted as the number of decimal places The value stored in Decimal is therefore equal to decimalMantissa decimalPlaces The Show instance will add trailing zeros so show Decimal will return Conversely the Read instance will use the decimal places to determine the precision Arithmetic and comparision operators convert their arguments to the greater of the two precisions and return result of that precision Regardless of the type of the arguments all mantissa arithmetic is done using Integer types so application developers do not need to worry about overflow in the internal algorithms However the result of each operator will be converted to the mantissa type without checking for overflow",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "DecimalRaw",
          "package": "Decimal",
          "partial": "Decimal Raw",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#t:DecimalRaw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMultiply a \u003ccode\u003eDecimalRaw\u003c/code\u003e by a \u003ccode\u003eRealFrac\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "(*.)",
          "package": "Decimal",
          "signature": "DecimalRaw i -\u003e r -\u003e DecimalRaw i",
          "source": "src/Data-Decimal.html#%2A.",
          "type": "function"
        },
        "index": {
          "description": "Multiply DecimalRaw by RealFrac value",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "(*.) *.",
          "normalized": "DecimalRaw a-\u003eb-\u003eDecimalRaw a",
          "package": "Decimal",
          "signature": "DecimalRaw i-\u003er-\u003eDecimalRaw i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:-42-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "signature": "Decimal",
          "source": "src/Data-Decimal.html#DecimalRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "Decimal",
          "package": "Decimal",
          "partial": "Decimal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:Decimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a \u003ccode\u003eDecimalRaw\u003c/code\u003e value proportionately with the values in a list.\n The allocated portions are guaranteed to add up to the original value.\n\u003c/p\u003e\u003cp\u003eSome of the allocations may be zero or negative, but the sum of the list \n must not be zero.  The allocation is intended to be as close as possible\n to the following:\n\u003c/p\u003e\u003cpre\u003e let result = allocate d parts\n in all (== d / sum parts) $ zipWith (/) result parts\n\u003c/pre\u003e",
          "module": "Data.Decimal",
          "name": "allocate",
          "package": "Decimal",
          "signature": "DecimalRaw i -\u003e [Integer] -\u003e [DecimalRaw i]",
          "source": "src/Data-Decimal.html#allocate",
          "type": "function"
        },
        "index": {
          "description": "Allocate DecimalRaw value proportionately with the values in list The allocated portions are guaranteed to add up to the original value Some of the allocations may be zero or negative but the sum of the list must not be zero The allocation is intended to be as close as possible to the following let result allocate parts in all sum parts zipWith result parts",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "allocate",
          "normalized": "DecimalRaw a-\u003e[Integer]-\u003e[DecimalRaw a]",
          "package": "Decimal",
          "signature": "DecimalRaw i-\u003e[Integer]-\u003e[DecimalRaw i]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:allocate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003eDecimalRaw\u003c/code\u003e from one base representation to another.  Does\n not check for overflow in the new representation.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "decimalConvert",
          "package": "Decimal",
          "signature": "DecimalRaw a -\u003e DecimalRaw b",
          "source": "src/Data-Decimal.html#decimalConvert",
          "type": "function"
        },
        "index": {
          "description": "Convert DecimalRaw from one base representation to another Does not check for overflow in the new representation",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "decimalConvert",
          "normalized": "DecimalRaw a-\u003eDecimalRaw b",
          "package": "Decimal",
          "partial": "Convert",
          "signature": "DecimalRaw a-\u003eDecimalRaw b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:decimalConvert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Decimal",
          "name": "decimalMantissa",
          "package": "Decimal",
          "signature": "i",
          "source": "src/Data-Decimal.html#DecimalRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "decimalMantissa",
          "package": "Decimal",
          "partial": "Mantissa",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:decimalMantissa"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Decimal",
          "name": "decimalPlaces",
          "package": "Decimal",
          "signature": "Word8",
          "source": "src/Data-Decimal.html#DecimalRaw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "decimalPlaces",
          "package": "Decimal",
          "partial": "Places",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:decimalPlaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDivide a \u003ccode\u003eDecimalRaw\u003c/code\u003e value into one or more portions.  The portions\n will be approximately equal, and the sum of the portions is guaranteed to\n be the original value.\n\u003c/p\u003e\u003cp\u003eThe portions are represented as a list of pairs.  The first part of each\n pair is the number of portions, and the second part is the portion value.\n Hence 10 dollars divided 3 ways will produce \u003ccode\u003e[(2, 3.33), (1, 3.34)]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "divide",
          "package": "Decimal",
          "signature": "DecimalRaw i -\u003e Int -\u003e [(Int, DecimalRaw i)]",
          "source": "src/Data-Decimal.html#divide",
          "type": "function"
        },
        "index": {
          "description": "Divide DecimalRaw value into one or more portions The portions will be approximately equal and the sum of the portions is guaranteed to be the original value The portions are represented as list of pairs The first part of each pair is the number of portions and the second part is the portion value Hence dollars divided ways will produce",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "divide",
          "normalized": "DecimalRaw a-\u003eInt-\u003e[(Int,DecimalRaw a)]",
          "package": "Decimal",
          "signature": "DecimalRaw i-\u003eInt-\u003e[(Int,DecimalRaw i)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:divide"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTry to convert Rational to Decimal with absolute precision\n return string with fail description if not converted\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "eitherFromRational",
          "package": "Decimal",
          "signature": "Rational -\u003e Either String (DecimalRaw i)",
          "source": "src/Data-Decimal.html#eitherFromRational",
          "type": "function"
        },
        "index": {
          "description": "Try to convert Rational to Decimal with absolute precision return string with fail description if not converted",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "eitherFromRational",
          "normalized": "Rational-\u003eEither String(DecimalRaw a)",
          "package": "Decimal",
          "partial": "From Rational",
          "signature": "Rational-\u003eEither String(DecimalRaw i)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:eitherFromRational"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReduce the exponent of the decimal numer to the minimal posible value\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "normalizeDecimal",
          "package": "Decimal",
          "signature": "DecimalRaw i -\u003e DecimalRaw i",
          "source": "src/Data-Decimal.html#normalizeDecimal",
          "type": "function"
        },
        "index": {
          "description": "Reduce the exponent of the decimal numer to the minimal posible value",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "normalizeDecimal",
          "normalized": "DecimalRaw a-\u003eDecimalRaw a",
          "package": "Decimal",
          "partial": "Decimal",
          "signature": "DecimalRaw i-\u003eDecimalRaw i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:normalizeDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a real fractional value into a Decimal of the appropriate \n precision.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "realFracToDecimal",
          "package": "Decimal",
          "signature": "Word8 -\u003e r -\u003e DecimalRaw i",
          "source": "src/Data-Decimal.html#realFracToDecimal",
          "type": "function"
        },
        "index": {
          "description": "Convert real fractional value into Decimal of the appropriate precision",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "realFracToDecimal",
          "normalized": "Word-\u003ea-\u003eDecimalRaw b",
          "package": "Decimal",
          "partial": "Frac To Decimal",
          "signature": "Word-\u003er-\u003eDecimalRaw i",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:realFracToDecimal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRound a \u003ccode\u003eDecimalRaw\u003c/code\u003e to a specified number of decimal places.\n\u003c/p\u003e",
          "module": "Data.Decimal",
          "name": "roundTo",
          "package": "Decimal",
          "signature": "Word8 -\u003e DecimalRaw i -\u003e DecimalRaw Integer",
          "source": "src/Data-Decimal.html#roundTo",
          "type": "function"
        },
        "index": {
          "description": "Round DecimalRaw to specified number of decimal places",
          "hierarchy": "Data Decimal",
          "module": "Data.Decimal",
          "name": "roundTo",
          "normalized": "Word-\u003eDecimalRaw a-\u003eDecimalRaw Integer",
          "package": "Decimal",
          "partial": "To",
          "signature": "Word-\u003eDecimalRaw i-\u003eDecimalRaw Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Decimal/docs/Data-Decimal.html#v:roundTo"
      }
    }
  ]
]