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
        "word": "floatshow"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLower level conversion of base-2 numbers to base-10 representations.\n These functions can be used to define \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instances for types which\n don't support the full \u003ccode\u003e\u003ca\u003eRealFloat\u003c/a\u003e\u003c/code\u003e interface but have an analogue to\n \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e (and maybe to \u003ccode\u003e\u003ca\u003eisNaN\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eisInfinite\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eisNegativeZero\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.FShow.Raw",
          "name": "Raw",
          "package": "floatshow",
          "source": "src/Text-FShow-Raw.html",
          "type": "module"
        },
        "index": {
          "description": "Lower level conversion of base-2 numbers to base-10 representations These functions can be used to define Show instances for types which don support the full RealFloat interface but have an analogue to decodeFloat and maybe to isNaN isInfinite and isNegativeZero",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "Raw",
          "package": "floatshow",
          "partial": "Raw",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for types whose values can be decoded into the form\n   \u003ccode\u003em * 2^e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e mantissa \u003ccode\u003em\u003c/code\u003e and an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e exponent \u003ccode\u003ee\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: one of \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edecodeL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eIt is strongly recommended to override the default implementation\n   of \u003ccode\u003e\u003ca\u003eshowDigits\u003c/a\u003e\u003c/code\u003e if the datatype allows distinguishing values\n   without using an exact representation.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "BinDecode",
          "package": "floatshow",
          "source": "src/Text-FShow-Raw.html#BinDecode",
          "type": "class"
        },
        "index": {
          "description": "Class for types whose values can be decoded into the form with an Integer mantissa and an Int exponent Minimal complete definition one of decode and decodeL It is strongly recommended to override the default implementation of showDigits if the datatype allows distinguishing values without using an exact representation",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "BinDecode",
          "package": "floatshow",
          "partial": "Bin Decode",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#t:BinDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for types whose values may be \u003ccode\u003eNaN\u003c/code\u003e or infinite and can\n   otherwise be decoded into the form \u003ccode\u003em * 2^e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "DecimalFormat",
          "package": "floatshow",
          "source": "src/Text-FShow-Raw.html#DecimalFormat",
          "type": "class"
        },
        "index": {
          "description": "Class for types whose values may be NaN or infinite and can otherwise be decoded into the form",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "DecimalFormat",
          "package": "floatshow",
          "partial": "Decimal Format",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#t:DecimalFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Style in which to format the display \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "FormatStyle",
          "package": "floatshow",
          "source": "src/Text-FShow-Raw.html#FormatStyle",
          "type": "data"
        },
        "index": {
          "description": "The Style in which to format the display String",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "FormatStyle",
          "package": "floatshow",
          "partial": "Format Style",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#t:FormatStyle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay in scientific notation, e.g. \u003ccode\u003e1.234e-5\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "Exponent",
          "package": "floatshow",
          "signature": "Exponent",
          "source": "src/Text-FShow-Raw.html#FormatStyle",
          "type": "function"
        },
        "index": {
          "description": "Display in scientific notation e.g e-5",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "Exponent",
          "package": "floatshow",
          "partial": "Exponent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:Exponent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay in standard decimal notation, e.g. \u003ccode\u003e0.0123\u003c/code\u003e\n   or \u003ccode\u003e123.456\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "Fixed",
          "package": "floatshow",
          "signature": "Fixed",
          "source": "src/Text-FShow-Raw.html#FormatStyle",
          "type": "function"
        },
        "index": {
          "description": "Display in standard decimal notation e.g or",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "Fixed",
          "package": "floatshow",
          "partial": "Fixed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:Fixed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e for numbers with magnitude close enough to \u003ccode\u003e1\u003c/code\u003e,\n   \u003ccode\u003e\u003ca\u003eExponent\u003c/a\u003e\u003c/code\u003e otherwise. The default range for using \u003ccode\u003e\u003ca\u003eFixed\u003c/a\u003e\u003c/code\u003e\n   is \u003ccode\u003e0.1 \u003c= |x| \u003c 10^7\u003c/code\u003e, corresponding to \u003ccode\u003e\u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e (-1,7))\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "Generic",
          "package": "floatshow",
          "signature": "Generic (Maybe (Int, Int))",
          "source": "src/Text-FShow-Raw.html#FormatStyle",
          "type": "function"
        },
        "index": {
          "description": "Use Fixed for numbers with magnitude close enough to Exponent otherwise The default range for using Fixed is corresponding to Generic Just",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "Generic",
          "normalized": "Generic(Maybe(Int,Int))",
          "package": "floatshow",
          "partial": "Generic",
          "signature": "Generic(Maybe(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ebinDecFormat\u003c/a\u003e\u003c/code\u003e is the formatter for instances of the \u003ccode\u003e\u003ca\u003eBinDecode\u003c/a\u003e\u003c/code\u003e\n   class. Any special values must be processed before it is called.\n   It fills in the missing arguments before calling \u003ccode\u003e\u003ca\u003erawFormat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "binDecFormat",
          "package": "floatshow",
          "signature": "FormatStyle -\u003e Maybe Int -\u003e a -\u003e String",
          "source": "src/Text-FShow-Raw.html#binDecFormat",
          "type": "function"
        },
        "index": {
          "description": "binDecFormat is the formatter for instances of the BinDecode class Any special values must be processed before it is called It fills in the missing arguments before calling rawFormat",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "binDecFormat",
          "normalized": "FormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "package": "floatshow",
          "partial": "Dec Format",
          "signature": "FormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:binDecFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecimalFormat\u003c/a\u003e\u003c/code\u003e is a slightly higher-level formatter, treating the\n   special cases of \u003ccode\u003eNaN\u003c/code\u003e and infinities.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "decimalFormat",
          "package": "floatshow",
          "signature": "FormatStyle -\u003e Maybe Int -\u003e a -\u003e String",
          "source": "src/Text-FShow-Raw.html#decimalFormat",
          "type": "function"
        },
        "index": {
          "description": "decimalFormat is slightly higher-level formatter treating the special cases of NaN and infinities",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "decimalFormat",
          "normalized": "FormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "package": "floatshow",
          "partial": "Format",
          "signature": "FormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:decimalFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e is analogous to \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "decode",
          "package": "floatshow",
          "signature": "a -\u003e (Integer, Int)",
          "source": "src/Text-FShow-Raw.html#decode",
          "type": "method"
        },
        "index": {
          "description": "decode is analogous to decodeFloat",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "decode",
          "normalized": "a-\u003e(Integer,Int)",
          "package": "floatshow",
          "signature": "a-\u003e(Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003edecodeL\u003c/a\u003e\u003c/code\u003e gives the integer base-\u003ccode\u003e2\u003c/code\u003e logarithm of the mantissa\n   in addition to the result of \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e. If the absolute value of\n   the mantissa always has the same highest set bit (excepting \u003ccode\u003e0\u003c/code\u003e),\n   specifying that as a constant will be faster than calculating the\n   logarithm for each individual mantissa.\n   If \u003ccode\u003ex = m*2^e\u003c/code\u003e with \u003ccode\u003em /= 0\u003c/code\u003e, then\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeL\u003c/a\u003e\u003c/code\u003e x == (\u003ccode\u003e\u003ca\u003eintegerLog2\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eabs\u003c/a\u003e\u003c/code\u003e m), m, e)\u003c/code\u003e must hold.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "decodeL",
          "package": "floatshow",
          "signature": "a -\u003e (Int, Integer, Int)",
          "source": "src/Text-FShow-Raw.html#decodeL",
          "type": "method"
        },
        "index": {
          "description": "decodeL gives the integer base logarithm of the mantissa in addition to the result of decode If the absolute value of the mantissa always has the same highest set bit excepting specifying that as constant will be faster than calculating the logarithm for each individual mantissa If with then decodeL integerLog2 abs must hold",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "decodeL",
          "normalized": "a-\u003e(Int,Integer,Int)",
          "package": "floatshow",
          "signature": "a-\u003e(Int,Integer,Int)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:decodeL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eformatDigits\u003c/a\u003e\u003c/code\u003e builds the display \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e from the digits and\n   the exponent of a nonnegative number.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "formatDigits",
          "package": "floatshow",
          "signature": "FormatStyle-\u003e Int-\u003e Maybe Int-\u003e [Int]-\u003e Int-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "formatDigits builds the display String from the digits and the exponent of nonnegative number",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "formatDigits",
          "normalized": "FormatStyle-\u003eInt-\u003eMaybe Int-\u003e[Int]-\u003eInt-\u003eString",
          "package": "floatshow",
          "partial": "Digits",
          "signature": "FormatStyle-\u003eInt-\u003eMaybe Int-\u003e[Int]-\u003eInt-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:formatDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003efullDecimalDigits\u003c/a\u003e\u003c/code\u003e a e\u003c/code\u003e calculates the number of decimal digits that\n   may be required to exactly display a value \u003ccode\u003ex = m * 2^e\u003c/code\u003e where \u003ccode\u003em\u003c/code\u003e is\n   an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e satisfying \u003ccode\u003e2^a \u003c= m \u003c 2^(a+1)\u003c/code\u003e. Usually, the calculated\n   value is not much larger than the actual number of digits in the\n   exact decimal representation, but it will be if the exponent \u003ccode\u003ee\u003c/code\u003e\n   is negative and has large absolute value and the mantissa is divisible\n   by a large power of \u003ccode\u003e2\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "fullDecimalDigits",
          "package": "floatshow",
          "signature": "Int -\u003e Int -\u003e Int",
          "source": "src/Text-FShow-Raw.html#fullDecimalDigits",
          "type": "function"
        },
        "index": {
          "description": "fullDecimalDigits calculates the number of decimal digits that may be required to exactly display value where is an Integer satisfying Usually the calculated value is not much larger than the actual number of digits in the exact decimal representation but it will be if the exponent is negative and has large absolute value and the mantissa is divisible by large power of",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "fullDecimalDigits",
          "normalized": "Int-\u003eInt-\u003eInt",
          "package": "floatshow",
          "partial": "Decimal Digits",
          "signature": "Int-\u003eInt-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:fullDecimalDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efullRawFormat\u003c/a\u003e\u003c/code\u003e is a low-level formatter producing an exact representation\n   of a value which can be decoded into the form \u003ccode\u003em * 2^e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "fullRawFormat",
          "package": "floatshow",
          "signature": "(a -\u003e (Int, Integer, Int))-\u003e FormatStyle-\u003e a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "fullRawFormat is low-level formatter producing an exact representation of value which can be decoded into the form",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "fullRawFormat",
          "normalized": "(a-\u003e(Int,Integer,Int))-\u003eFormatStyle-\u003ea-\u003eString",
          "package": "floatshow",
          "partial": "Raw Format",
          "signature": "(a-\u003e(Int,Integer,Int))-\u003eFormatStyle-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:fullRawFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003einfTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e defaults to \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "infTest",
          "package": "floatshow",
          "signature": "a -\u003e Bool",
          "source": "src/Text-FShow-Raw.html#infTest",
          "type": "method"
        },
        "index": {
          "description": "infTest defaults to const False",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "infTest",
          "normalized": "a-\u003eBool",
          "package": "floatshow",
          "partial": "Test",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:infTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteger base-\u003ccode\u003e2\u003c/code\u003e logarithm of a positive \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "integerLog2",
          "package": "floatshow",
          "signature": "Integer -\u003e Int",
          "source": "src/Text-FShow-RealFloat-Internals.html#integerLog2",
          "type": "function"
        },
        "index": {
          "description": "Integer base logarithm of positive Integer",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "integerLog2",
          "normalized": "Integer-\u003eInt",
          "package": "floatshow",
          "partial": "Log",
          "signature": "Integer-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:integerLog2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enanTest\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e defaults to \u003ccode\u003e\u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "nanTest",
          "package": "floatshow",
          "signature": "a -\u003e Bool",
          "source": "src/Text-FShow-Raw.html#nanTest",
          "type": "method"
        },
        "index": {
          "description": "nanTest defaults to const False",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "nanTest",
          "normalized": "a-\u003eBool",
          "package": "floatshow",
          "partial": "Test",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:nanTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003enegTest\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e defaults to \u003ccode\u003ex \u003c 0\u003c/code\u003e, it must be overridden if\n   negative zero has to be accounted for.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "negTest",
          "package": "floatshow",
          "signature": "a -\u003e Bool",
          "source": "src/Text-FShow-Raw.html#negTest",
          "type": "method"
        },
        "index": {
          "description": "negTest defaults to it must be overridden if negative zero has to be accounted for",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "negTest",
          "normalized": "a-\u003eBool",
          "package": "floatshow",
          "partial": "Test",
          "signature": "a-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:negTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eposToDigits\u003c/a\u003e\u003c/code\u003e converts a positive number into a list of digits and\n   an exponent. If \u003ccode\u003ex = 10^e*d_1.d_2...d_m...\u003c/code\u003e with \u003ccode\u003ed_1 /= 0\u003c/code\u003e and\n   \u003ccode\u003e0 \u003c= d_i \u003c= 9\u003c/code\u003e, the result is \u003ccode\u003e([d_1,d_2,...,d_m],e)\u003c/code\u003e, where\n   \u003ccode\u003em\u003c/code\u003e is one or two larger than the number of requested digits,\n   provided that \u003ccode\u003e2^(-70776) \u003c= x \u003c 2^248236\u003c/code\u003e (with 64-bit \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003es,\n   the upper bound is about \u003ccode\u003e2^1.3e9\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe number \u003ccode\u003ex\u003c/code\u003e is (indirectly) given in the form\n   \u003ccode\u003emantissa * 2^exponent\u003c/code\u003e, similar to \u003ccode\u003e\u003ca\u003eencodeFloat\u003c/a\u003e\u003c/code\u003e,\n   as the final two arguments. The second argument is the base-2\n   logarithm of the mantissa and the first is the number of decimal\n   digits needed to discriminate between different numbers.\n\u003c/p\u003e\u003cp\u003eIn \u003ccode\u003e\u003ccode\u003e\u003ca\u003eposToDigits\u003c/a\u003e\u003c/code\u003e digs mlog mant exp\u003c/code\u003e, it is assumed that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003edigs \u003e 0\u003c/code\u003e, \u003ccode\u003emlog \u003e= 0\u003c/code\u003e,\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e2^mlog \u003c= mant \u003c 2^(mlog+1)\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThese assumptions are not checked, and if they're not satisfied,\n   wrong results or worse are the consequences. \u003cem\u003eYou have been warned\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe digits argument may be smaller than would be necessary to uniquely\n   determine each value if that is not required. As a rule of thumb,\n   requiring fewer significant digits means faster generation of the\n   representation.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "posToDigits",
          "package": "floatshow",
          "signature": "Int-\u003e Int-\u003e Integer-\u003e Int-\u003e ([Int], Int)",
          "type": "function"
        },
        "index": {
          "description": "posToDigits converts positive number into list of digits and an exponent If with and the result is where is one or two larger than the number of requested digits provided that with bit Int the upper bound is about e9 The number is indirectly given in the form mantissa exponent similar to encodeFloat as the final two arguments The second argument is the base-2 logarithm of the mantissa and the first is the number of decimal digits needed to discriminate between different numbers In posToDigits digs mlog mant exp it is assumed that digs mlog mlog mant mlog These assumptions are not checked and if they re not satisfied wrong results or worse are the consequences You have been warned The digits argument may be smaller than would be necessary to uniquely determine each value if that is not required As rule of thumb requiring fewer significant digits means faster generation of the representation",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "posToDigits",
          "normalized": "Int-\u003eInt-\u003eInteger-\u003eInt-\u003e([Int],Int)",
          "package": "floatshow",
          "partial": "To Digits",
          "signature": "Int-\u003eInt-\u003eInteger-\u003eInt-\u003e([Int],Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:posToDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003erawFormat\u003c/a\u003e\u003c/code\u003e is a low-level formatter. The sign is determined from\n   the sign of the mantissa.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "rawFormat",
          "package": "floatshow",
          "signature": "(a -\u003e (Int, Integer, Int))-\u003e Int-\u003e FormatStyle-\u003e Maybe Int-\u003e a-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "rawFormat is low-level formatter The sign is determined from the sign of the mantissa",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "rawFormat",
          "normalized": "(a-\u003e(Int,Integer,Int))-\u003eInt-\u003eFormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "package": "floatshow",
          "partial": "Format",
          "signature": "(a-\u003e(Int,Integer,Int))-\u003eInt-\u003eFormatStyle-\u003eMaybe Int-\u003ea-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:rawFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of significant digits needed to uniquely determine the\n   value (or however many digits are desired). Usually, \u003ccode\u003e\u003ca\u003eshowDigits\u003c/a\u003e\u003c/code\u003e\n   will be a constant function, but that is not necessary. However,\n   all values of \u003ccode\u003e\u003ca\u003eshowDigits\u003c/a\u003e\u003c/code\u003e must be positive.\n\u003c/p\u003e\u003cp\u003eIf the mantissa always has the same highest bit, \u003ccode\u003ehighBit\u003c/code\u003e, set\n   when it is nonzero,\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003eshowDigits\u003c/a\u003e\u003c/code\u003e _ = 2 + \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e ((highBit+1) * \u003ccode\u003e\u003ca\u003elogBase\u003c/a\u003e\u003c/code\u003e 10 2)\n\u003c/pre\u003e\u003cp\u003eis sufficient to make the values and formatted \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003es\n   uniquely determine each other and in general this is the smallest\n   number to achieve that (calculate the number once and supply the\n   result as a constant).\n\u003c/p\u003e\u003cp\u003eIf the highest set bit of nonzero mantissae varies, things are not\n   so easy. If the width of mantissae is bounded, plugging the largest\n   possible value into the above formula works, but may yield an unduly\n   large number for common cases. Using the formula with \u003ccode\u003ehighBit\u003c/code\u003e\n   determined by the mantissa almost works, but if the representation\n   is rounded at all, with sufficiently many bits in the mantissa,\n   there will be values between the original and the representation.\n   So, with mantissae of width varying over a large range, the only\n   feasible way of obtaining a bijection between values and their\n   decimal representations is printing to full precision in\n   general, optionally capping at the upper limit.\n\u003c/p\u003e\u003cp\u003eThe default implementation prints values exactly, which in general\n   is undesirable because it involves huge \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003es and long\n   representations.\n\u003c/p\u003e",
          "module": "Text.FShow.Raw",
          "name": "showDigits",
          "package": "floatshow",
          "signature": "a -\u003e Int",
          "source": "src/Text-FShow-Raw.html#showDigits",
          "type": "method"
        },
        "index": {
          "description": "The number of significant digits needed to uniquely determine the value or however many digits are desired Usually showDigits will be constant function but that is not necessary However all values of showDigits must be positive If the mantissa always has the same highest bit highBit set when it is nonzero showDigits floor highBit logBase is sufficient to make the values and formatted String uniquely determine each other and in general this is the smallest number to achieve that calculate the number once and supply the result as constant If the highest set bit of nonzero mantissae varies things are not so easy If the width of mantissae is bounded plugging the largest possible value into the above formula works but may yield an unduly large number for common cases Using the formula with highBit determined by the mantissa almost works but if the representation is rounded at all with sufficiently many bits in the mantissa there will be values between the original and the representation So with mantissae of width varying over large range the only feasible way of obtaining bijection between values and their decimal representations is printing to full precision in general optionally capping at the upper limit The default implementation prints values exactly which in general is undesirable because it involves huge Integer and long representations",
          "hierarchy": "Text FShow Raw",
          "module": "Text.FShow.Raw",
          "name": "showDigits",
          "normalized": "a-\u003eInt",
          "package": "floatshow",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-Raw.html#v:showDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFaster \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e representations for floating point types.\n The code is largely taken from code in \u003ca\u003eGHC.Float\u003c/a\u003e and the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e\n instance of \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e in \u003ca\u003eGHC.Num\u003c/a\u003e to get the sequence of digits.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "RealFloat",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html",
          "type": "module"
        },
        "index": {
          "description": "Faster String representations for floating point types The code is largely taken from code in GHC.Float and the Show instance of Integer in GHC.Num to get the sequence of digits",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "RealFloat",
          "package": "floatshow",
          "partial": "Real Float",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for specifying display parameters. The type \u003ccode\u003ea\u003c/code\u003e\n   is supposed to be an IEEE-ish (real) floating-point\n   type with floating-point radix 2, such that the mantissa\n   returned by \u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e satisfies\n\u003c/p\u003e\u003cpre\u003e\n   2^(\u003ccode\u003e\u003ca\u003ebinExp\u003c/a\u003e\u003c/code\u003e x) \u003c= \u003ccode\u003e\u003ca\u003efst\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x) \u003c 2^(\u003ccode\u003e\u003ca\u003ebinExp\u003c/a\u003e\u003c/code\u003e x + 1)\n\u003c/pre\u003e\u003cp\u003efor \u003ccode\u003ex \u003e 0\u003c/code\u003e, so \u003ccode\u003e\u003ccode\u003e\u003ca\u003ebinExp\u003c/a\u003e\u003c/code\u003e x = \u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x - 1\u003c/code\u003e.\n   The number of decimal digits that may be required is calculated\n   with the formula\n\u003c/p\u003e\u003cpre\u003e\n   \u003ccode\u003e\u003ca\u003edecDigits\u003c/a\u003e\u003c/code\u003e x = 2 + \u003ccode\u003e\u003ca\u003efloor\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efloatDigits\u003c/a\u003e\u003c/code\u003e x * \u003ccode\u003e\u003ca\u003elogBase\u003c/a\u003e\u003c/code\u003e 10 2).\n\u003c/pre\u003e\u003cp\u003eThe default implementation uses an approximation of\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003elogBase\u003c/a\u003e\u003c/code\u003e 10 2\u003c/code\u003e sufficient for mantissae of up to\n   several thousand bits. Nevertheless, hardcoding\n   the values in instance declarations may yield\n   better performance.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "DispFloat",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#DispFloat",
          "type": "class"
        },
        "index": {
          "description": "Class for specifying display parameters The type is supposed to be an IEEE-ish real floating-point type with floating-point radix such that the mantissa returned by decodeFloat satisfies binExp fst decodeFloat binExp for so binExp floatDigits The number of decimal digits that may be required is calculated with the formula decDigits floor floatDigits logBase The default implementation uses an approximation of logBase sufficient for mantissae of up to several thousand bits Nevertheless hardcoding the values in instance declarations may yield better performance",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "DispFloat",
          "package": "floatshow",
          "partial": "Disp Float",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:DispFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enewtype wrapper for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003eFShow\u003c/a\u003e\u003c/code\u003e) instance\n   displays numbers rounded to seven significant digits.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "Double7",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#Double7",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for Double The Show and FShow instance displays numbers rounded to seven significant digits",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "Double7",
          "package": "floatshow",
          "partial": "Double",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:Double7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA duplicate of the \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e class.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "FShow",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#FShow",
          "type": "class"
        },
        "index": {
          "description": "duplicate of the Show class",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "FShow",
          "package": "floatshow",
          "partial": "FShow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:FShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enewtype wrapper for \u003ccode\u003e\u003ca\u003eFloat\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003eFShow\u003c/a\u003e\u003c/code\u003e) instance\n   displays numbers rounded to seven significant digits.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "Float7",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#Float7",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for Float The Show and FShow instance displays numbers rounded to seven significant digits",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "Float7",
          "package": "floatshow",
          "partial": "Float",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:Float7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enewtype wrapper for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003eFShow\u003c/a\u003e\u003c/code\u003e) instance\n   displays all significant digits.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "FullDouble",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#FullDouble",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for Double The Show and FShow instance displays all significant digits",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "FullDouble",
          "package": "floatshow",
          "partial": "Full Double",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:FullDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enewtype wrapper for \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e. The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e (and \u003ccode\u003e\u003ca\u003eFShow\u003c/a\u003e\u003c/code\u003e) instance\n   displays all significant digits.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "FullFloat",
          "package": "floatshow",
          "source": "src/Text-FShow-RealFloat.html#FullFloat",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper for Double The Show and FShow instance displays all significant digits",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "FullFloat",
          "package": "floatshow",
          "partial": "Full Float",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#t:FullFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "D7",
          "package": "floatshow",
          "signature": "D7 Double",
          "source": "src/Text-FShow-RealFloat.html#Double7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "D7",
          "package": "floatshow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:D7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "F7",
          "package": "floatshow",
          "signature": "F7 Float",
          "source": "src/Text-FShow-RealFloat.html#Float7",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "F7",
          "package": "floatshow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:F7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "FD",
          "package": "floatshow",
          "signature": "FD",
          "source": "src/Text-FShow-RealFloat.html#FullDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "FD",
          "package": "floatshow",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:FD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "FF",
          "package": "floatshow",
          "signature": "FF",
          "source": "src/Text-FShow-RealFloat.html#FullFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "FF",
          "package": "floatshow",
          "partial": "FF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:FF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe base 2 logarithm of the mantissa returned by\n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeFloat\u003c/a\u003e\u003c/code\u003e x\u003c/code\u003e for \u003ccode\u003ex \u003e 0\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "binExp",
          "package": "floatshow",
          "signature": "a -\u003e Int",
          "source": "src/Text-FShow-RealFloat.html#binExp",
          "type": "method"
        },
        "index": {
          "description": "The base logarithm of the mantissa returned by decodeFloat for",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "binExp",
          "normalized": "a-\u003eInt",
          "package": "floatshow",
          "partial": "Exp",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:binExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of decimal digits that may be needed to\n   uniquely determine a value of type \u003ccode\u003ea\u003c/code\u003e.\n   For faster conversions which need not satisfy\n\u003c/p\u003e\u003cpre\u003e\n   x == \u003ccode\u003e\u003ca\u003eread\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efshow\u003c/a\u003e\u003c/code\u003e x)\n\u003c/pre\u003e\u003cp\u003ea smaller value can be given.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "decDigits",
          "package": "floatshow",
          "signature": "a -\u003e Int",
          "source": "src/Text-FShow-RealFloat.html#decDigits",
          "type": "method"
        },
        "index": {
          "description": "The number of decimal digits that may be needed to uniquely determine value of type For faster conversions which need not satisfy read fshow smaller value can be given",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "decDigits",
          "normalized": "a-\u003eInt",
          "package": "floatshow",
          "partial": "Digits",
          "signature": "a-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:decDigits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "fshow",
          "package": "floatshow",
          "signature": "a -\u003e String",
          "source": "src/Text-FShow-RealFloat.html#fshow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshow",
          "normalized": "a-\u003eString",
          "package": "floatshow",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eDispFloat\u003c/a\u003e\u003c/code\u003e value\n using scientific (exponential) notation (e.g. \u003ccode\u003e2.45e2\u003c/code\u003e, \u003ccode\u003e1.5e-3\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003efshowEFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then \u003ccode\u003e\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e 1 d\u003c/code\u003e digits after the decimal point are shown.\n Analogous to \u003ccode\u003e\u003ccode\u003eshowEFloat\u003c/code\u003e\u003c/code\u003e from \u003ca\u003eNumeric\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "fshowEFloat",
          "package": "floatshow",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowEFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed DispFloat value using scientific exponential notation e.g e2 e-3 In the call fshowEFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then max digits after the decimal point are shown Analogous to showEFloat from Numeric",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowEFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "floatshow",
          "partial": "EFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowEFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eDispFloat\u003c/a\u003e\u003c/code\u003e value\n using standard decimal notation (e.g. \u003ccode\u003e245000\u003c/code\u003e, \u003ccode\u003e0.0015\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003efshowFFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then \u003ccode\u003e\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e 0 d\u003c/code\u003e digits after the decimal point are shown.\n Analogous to \u003ccode\u003e\u003ccode\u003eshowFFloat\u003c/code\u003e\u003c/code\u003e from \u003ca\u003eNumeric\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "fshowFFloat",
          "package": "floatshow",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowFFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed DispFloat value using standard decimal notation e.g In the call fshowFFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then max digits after the decimal point are shown Analogous to showFFloat from Numeric",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowFFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "floatshow",
          "partial": "FFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowFFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eDispFloat\u003c/a\u003e\u003c/code\u003e value to full precision\n using standard decimal notation for arguments whose absolute value lies\n between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n Analogous to \u003ccode\u003e\u003ccode\u003eshowFloat\u003c/code\u003e\u003c/code\u003e from \u003ca\u003eGHC.Float\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "fshowFloat",
          "package": "floatshow",
          "signature": "a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed DispFloat value to full precision using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise Analogous to showFloat from GHC.Float",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowFloat",
          "normalized": "a-\u003eShowS",
          "package": "floatshow",
          "partial": "Float",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a signed \u003ccode\u003e\u003ca\u003eDispFloat\u003c/a\u003e\u003c/code\u003e value\n using standard decimal notation for arguments whose absolute value lies\n between \u003ccode\u003e0.1\u003c/code\u003e and \u003ccode\u003e9,999,999\u003c/code\u003e, and scientific notation otherwise.\n\u003c/p\u003e\u003cp\u003eIn the call \u003ccode\u003e\u003ccode\u003e\u003ca\u003efshowGFloat\u003c/a\u003e\u003c/code\u003e digs val\u003c/code\u003e, if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n the value is shown to full precision; if \u003ccode\u003edigs\u003c/code\u003e is \u003ccode\u003e\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e d\u003c/code\u003e,\n then \u003ccode\u003e\u003ccode\u003e\u003ca\u003emax\u003c/a\u003e\u003c/code\u003e 1 d\u003c/code\u003e digits after the decimal point are shown.\n Analogous to \u003ccode\u003e\u003ccode\u003eshowGFloat\u003c/code\u003e\u003c/code\u003e from \u003ca\u003eNumeric\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "fshowGFloat",
          "package": "floatshow",
          "signature": "Maybe Int -\u003e a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowGFloat",
          "type": "function"
        },
        "index": {
          "description": "Show signed DispFloat value using standard decimal notation for arguments whose absolute value lies between and and scientific notation otherwise In the call fshowGFloat digs val if digs is Nothing the value is shown to full precision if digs is Just then max digits after the decimal point are shown Analogous to showGFloat from Numeric",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowGFloat",
          "normalized": "Maybe Int-\u003ea-\u003eShowS",
          "package": "floatshow",
          "partial": "GFloat",
          "signature": "Maybe Int-\u003ea-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowGFloat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "fshowList",
          "package": "floatshow",
          "signature": "[a] -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowList",
          "normalized": "[a]-\u003eShowS",
          "package": "floatshow",
          "partial": "List",
          "signature": "[a]-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ccode\u003e\u003ca\u003eshows\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, but using an \u003ccode\u003e\u003ca\u003eFShow\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Text.FShow.RealFloat",
          "name": "fshows",
          "package": "floatshow",
          "signature": "a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshows",
          "type": "function"
        },
        "index": {
          "description": "Same as shows but using an FShow instance",
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshows",
          "normalized": "a-\u003eShowS",
          "package": "floatshow",
          "signature": "a-\u003eShowS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshows"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "fshowsPrec",
          "package": "floatshow",
          "signature": "Int -\u003e a -\u003e ShowS",
          "source": "src/Text-FShow-RealFloat.html#fshowsPrec",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "fshowsPrec",
          "normalized": "Int-\u003ea-\u003eShowS",
          "package": "floatshow",
          "partial": "Prec",
          "signature": "Int-\u003ea-\u003eShowS",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:fshowsPrec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "unFD",
          "package": "floatshow",
          "signature": "Double",
          "source": "src/Text-FShow-RealFloat.html#FullDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "unFD",
          "package": "floatshow",
          "partial": "FD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:unFD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.FShow.RealFloat",
          "name": "unFF",
          "package": "floatshow",
          "signature": "Float",
          "source": "src/Text-FShow-RealFloat.html#FullFloat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text FShow RealFloat",
          "module": "Text.FShow.RealFloat",
          "name": "unFF",
          "package": "floatshow",
          "partial": "FF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/floatshow/docs/Text-FShow-RealFloat.html#v:unFF"
      }
    }
  ]
]