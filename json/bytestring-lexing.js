[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Double.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently parse floating point literals from a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lex.Double",
        "fct-package": "bytestring-lexing",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lex-Double.html",
        "fct-type": "module",
        "title": "Double"
      },
      "index": {
        "description": "Efficiently parse floating point literals from ByteString",
        "hierarchy": "Data ByteString Lex Double",
        "module": "Data.ByteString.Lex.Double",
        "name": "Double",
        "normalized": "",
        "package": "bytestring-lexing",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Double.html#v:readDouble",
      "description": {
        "fct-descr": "\u003cp\u003eParse the initial portion of the ByteString as a Double precision\n floating point value. The expected form of the numeric literal\n is given by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An optional \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e sign  \n\u003c/li\u003e\u003cli\u003e Decimal digits, OR\n\u003c/li\u003e\u003cli\u003e 0 [oO] and a sequence of octal digits, OR\n\u003c/li\u003e\u003cli\u003e 0 [xX] and a sequence of hexadecimal digits, OR\n\u003c/li\u003e\u003cli\u003e An optional decimal point, followed by a sequence of decimal digits, \n\u003c/li\u003e\u003cli\u003e And an optional exponent\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe result is returned as a pair of a double-precision floating\n point value and the remaining input, or \u003ccode\u003eNothing\u003c/code\u003e should no parse\n be found.\n\u003c/p\u003e\u003cp\u003eFor example, to sum a file of floating point numbers, one per line, \n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8  as S\n import qualified Data.ByteString.Unsafe as S\n import Data.ByteString.Lex.Double\n \n main = print . go 0 =\u003c\u003c S.getContents\n   where\n     go n s = case readDouble s of\n                     Nothing       -\u003e n\n                     Just (k,rest) -\u003e go (n+k) (S.tail rest)\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lex.Double",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (Double, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Double.html#readDouble",
        "fct-type": "function",
        "title": "readDouble"
      },
      "index": {
        "description": "Parse the initial portion of the ByteString as Double precision floating point value The expected form of the numeric literal is given by An optional or sign Decimal digits OR oO and sequence of octal digits OR xX and sequence of hexadecimal digits OR An optional decimal point followed by sequence of decimal digits And an optional exponent The result is returned as pair of double-precision floating point value and the remaining input or Nothing should no parse be found For example to sum file of floating point numbers one per line import qualified Data.ByteString.Char8 as import qualified Data.ByteString.Unsafe as import Data.ByteString.Lex.Double main print go S.getContents where go case readDouble of Nothing Just rest go S.tail rest",
        "hierarchy": "Data ByteString Lex Double",
        "module": "Data.ByteString.Lex.Double",
        "name": "readDouble",
        "normalized": "ByteString-\u003eMaybe(Double,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Double",
        "signature": "ByteString-\u003eMaybe(Double,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Double.html#v:unsafeReadDouble",
      "description": {
        "fct-descr": "\u003cp\u003eBare bones, unsafe wrapper for C's \u003ccode\u003estrtod(3)\u003c/code\u003e. This provides\n a non-copying direct parsing of Double values from a ByteString.\n It uses \u003ccode\u003estrtod\u003c/code\u003e directly on the bytestring buffer. \u003ccode\u003estrtod\u003c/code\u003e\n requires the string to be null terminated, or for a guarantee\n that parsing will find a floating point value before the end of\n the string.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Double",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (Double, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Double.html#unsafeReadDouble",
        "fct-type": "function",
        "title": "unsafeReadDouble"
      },
      "index": {
        "description": "Bare bones unsafe wrapper for strtod This provides non-copying direct parsing of Double values from ByteString It uses strtod directly on the bytestring buffer strtod requires the string to be null terminated or for guarantee that parsing will find floating point value before the end of the string",
        "hierarchy": "Data ByteString Lex Double",
        "module": "Data.ByteString.Lex.Double",
        "name": "unsafeReadDouble",
        "normalized": "ByteString-\u003eMaybe(Double,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Read Double",
        "signature": "ByteString-\u003eMaybe(Double,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for parsing and producing \u003ccode\u003e\u003ca\u003eIntegral\u003c/a\u003e\u003c/code\u003e values from/to\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es based on the \"Char8\" encoding. That is, we assume\n an ASCII-compatible encoding of alphanumeric characters.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lex-Integral.html",
        "fct-type": "module",
        "title": "Integral"
      },
      "index": {
        "description": "Functions for parsing and producing Integral values from to ByteString based on the Char8 encoding That is we assume an ASCII-compatible encoding of alphanumeric characters",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "Integral",
        "normalized": "",
        "package": "bytestring-lexing",
        "partial": "Integral",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:asHexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a bitvector into a lower-case ASCII hexadecimal string.\n This is helpful for visualizing raw binary data, rather than for\n parsing as such.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e ByteString",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#asHexadecimal",
        "fct-type": "function",
        "title": "asHexadecimal"
      },
      "index": {
        "description": "Convert bitvector into lower-case ASCII hexadecimal string This is helpful for visualizing raw binary data rather than for parsing as such",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "asHexadecimal",
        "normalized": "ByteString-\u003eByteString",
        "package": "bytestring-lexing",
        "partial": "Hexadecimal",
        "signature": "ByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:packDecimal",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a non-negative integer into an (unsigned) ASCII decimal\n string. Returns \u003ccode\u003eNothing\u003c/code\u003e on negative inputs.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "a -\u003e Maybe ByteString",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#packDecimal",
        "fct-type": "function",
        "title": "packDecimal"
      },
      "index": {
        "description": "Convert non-negative integer into an unsigned ASCII decimal string Returns Nothing on negative inputs",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "packDecimal",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "bytestring-lexing",
        "partial": "Decimal",
        "signature": "a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:packHexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a non-negative integer into a lower-case ASCII hexadecimal\n string. Returns \u003ccode\u003eNothing\u003c/code\u003e on negative inputs.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "a -\u003e Maybe ByteString",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#packHexadecimal",
        "fct-type": "function",
        "title": "packHexadecimal"
      },
      "index": {
        "description": "Convert non-negative integer into lower-case ASCII hexadecimal string Returns Nothing on negative inputs",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "packHexadecimal",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "bytestring-lexing",
        "partial": "Hexadecimal",
        "signature": "a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:packOctal",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a non-negative integer into an ASCII octal string.\n Returns \u003ccode\u003eNothing\u003c/code\u003e on negative inputs.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "a -\u003e Maybe ByteString",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#packOctal",
        "fct-type": "function",
        "title": "packOctal"
      },
      "index": {
        "description": "Convert non-negative integer into an ASCII octal string Returns Nothing on negative inputs",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "packOctal",
        "normalized": "a-\u003eMaybe ByteString",
        "package": "bytestring-lexing",
        "partial": "Octal",
        "signature": "a-\u003eMaybe ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:readDecimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead an unsigned/non-negative integral value in ASCII decimal\n format. Returns \u003ccode\u003eNothing\u003c/code\u003e if there is no integer at the beginning\n of the string, otherwise returns \u003ccode\u003eJust\u003c/code\u003e the integer read and the\n remainder of the string.\n\u003c/p\u003e\u003cp\u003eIf you are extremely concerned with performance, then it is more\n performant to use this function at \u003ccode\u003eInt\u003c/code\u003e or \u003ccode\u003eWord\u003c/code\u003e and then to\n call \u003ccode\u003e\u003ca\u003efromIntegral\u003c/a\u003e\u003c/code\u003e to perform the conversion at the end. However,\n doing this will make your code succeptible to overflow bugs if\n the target type is larger than \u003ccode\u003eInt\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (a, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#readDecimal",
        "fct-type": "function",
        "title": "readDecimal"
      },
      "index": {
        "description": "Read an unsigned non-negative integral value in ASCII decimal format Returns Nothing if there is no integer at the beginning of the string otherwise returns Just the integer read and the remainder of the string If you are extremely concerned with performance then it is more performant to use this function at Int or Word and then to call fromIntegral to perform the conversion at the end However doing this will make your code succeptible to overflow bugs if the target type is larger than Int",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "readDecimal",
        "normalized": "ByteString-\u003eMaybe(a,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Decimal",
        "signature": "ByteString-\u003eMaybe(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:readDecimal_",
      "description": {
        "fct-descr": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003ereadDecimal\u003c/a\u003e\u003c/code\u003e which does not return the tail of\n the string, and returns \u003ccode\u003e0\u003c/code\u003e instead of \u003ccode\u003eNothing\u003c/code\u003e. This is twice\n as fast for \u003ccode\u003e\u003ca\u003eInt64\u003c/a\u003e\u003c/code\u003e on 32-bit systems, but has identical performance\n to \u003ccode\u003e\u003ca\u003ereadDecimal\u003c/a\u003e\u003c/code\u003e for all other types and architectures.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e a",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#readDecimal_",
        "fct-type": "function",
        "title": "readDecimal_"
      },
      "index": {
        "description": "variant of readDecimal which does not return the tail of the string and returns instead of Nothing This is twice as fast for Int64 on bit systems but has identical performance to readDecimal for all other types and architectures",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "readDecimal_",
        "normalized": "ByteString-\u003ea",
        "package": "bytestring-lexing",
        "partial": "Decimal",
        "signature": "ByteString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:readHexadecimal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a non-negative integral value in ASCII hexadecimal format.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if there is no integer at the beginning of the\n string, otherwise returns \u003ccode\u003eJust\u003c/code\u003e the integer read and the remainder\n of the string.\n\u003c/p\u003e\u003cp\u003eThis function does not recognize the various hexadecimal sigils\n like \"0x\", but because there are so many different variants,\n those are best handled by helper functions which then use this\n function for the actual numerical parsing. This function recognizes\n both upper-case, lower-case, and mixed-case hexadecimal.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (a, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#readHexadecimal",
        "fct-type": "function",
        "title": "readHexadecimal"
      },
      "index": {
        "description": "Read non-negative integral value in ASCII hexadecimal format Returns Nothing if there is no integer at the beginning of the string otherwise returns Just the integer read and the remainder of the string This function does not recognize the various hexadecimal sigils like but because there are so many different variants those are best handled by helper functions which then use this function for the actual numerical parsing This function recognizes both upper-case lower-case and mixed-case hexadecimal",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "readHexadecimal",
        "normalized": "ByteString-\u003eMaybe(a,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Hexadecimal",
        "signature": "ByteString-\u003eMaybe(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:readOctal",
      "description": {
        "fct-descr": "\u003cp\u003eRead a non-negative integral value in ASCII octal format.\n Returns \u003ccode\u003eNothing\u003c/code\u003e if there is no integer at the beginning of the\n string, otherwise returns \u003ccode\u003eJust\u003c/code\u003e the integer read and the remainder\n of the string.\n\u003c/p\u003e\u003cp\u003eThis function does not recognize the various octal sigils like\n \"0o\", but because there are different variants, those are best\n handled by helper functions which then use this function for the\n actual numerical parsing.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (a, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#readOctal",
        "fct-type": "function",
        "title": "readOctal"
      },
      "index": {
        "description": "Read non-negative integral value in ASCII octal format Returns Nothing if there is no integer at the beginning of the string otherwise returns Just the integer read and the remainder of the string This function does not recognize the various octal sigils like but because there are different variants those are best handled by helper functions which then use this function for the actual numerical parsing",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "readOctal",
        "normalized": "ByteString-\u003eMaybe(a,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Octal",
        "signature": "ByteString-\u003eMaybe(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Integral.html#v:readSigned",
      "description": {
        "fct-descr": "\u003cp\u003eAdjust a reading function to recognize an optional leading\n sign. As with the other functions, we assume an ASCII-compatible\n encoding of the sign characters.\n\u003c/p\u003e",
        "fct-module": "Data.ByteString.Lex.Integral",
        "fct-package": "bytestring-lexing",
        "fct-signature": "(ByteString -\u003e Maybe (a, ByteString)) -\u003e ByteString -\u003e Maybe (a, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Integral.html#readSigned",
        "fct-type": "function",
        "title": "readSigned"
      },
      "index": {
        "description": "Adjust reading function to recognize an optional leading sign As with the other functions we assume an ASCII-compatible encoding of the sign characters",
        "hierarchy": "Data ByteString Lex Integral",
        "module": "Data.ByteString.Lex.Integral",
        "name": "readSigned",
        "normalized": "(ByteString-\u003eMaybe(a,ByteString))-\u003eByteString-\u003eMaybe(a,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Signed",
        "signature": "(ByteString-\u003eMaybe(a,ByteString))-\u003eByteString-\u003eMaybe(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Lazy-Double.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEfficiently parse floating point literals from a \u003ccode\u003eByteString\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.ByteString.Lex.Lazy.Double",
        "fct-package": "bytestring-lexing",
        "fct-signature": "module",
        "fct-source": "src/Data-ByteString-Lex-Lazy-Double.html",
        "fct-type": "module",
        "title": "Double"
      },
      "index": {
        "description": "Efficiently parse floating point literals from ByteString",
        "hierarchy": "Data ByteString Lex Lazy Double",
        "module": "Data.ByteString.Lex.Lazy.Double",
        "name": "Double",
        "normalized": "",
        "package": "bytestring-lexing",
        "partial": "Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bytestring-lexing/docs/Data-ByteString-Lex-Lazy-Double.html#v:readDouble",
      "description": {
        "fct-descr": "\u003cp\u003eParse the initial portion of the ByteString as a Double precision\n floating point value. The expected form of the numeric literal\n is given by:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e An optional \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e sign  \n\u003c/li\u003e\u003cli\u003e Decimal digits, OR\n\u003c/li\u003e\u003cli\u003e 0 [oO] and a sequence of octal digits, OR\n\u003c/li\u003e\u003cli\u003e 0 [xX] and a sequence of hexadecimal digits, OR\n\u003c/li\u003e\u003cli\u003e An optional decimal point, followed by a sequence of decimal digits, \n\u003c/li\u003e\u003cli\u003e And an optional exponent\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe result is returned as a pair of a double-precision floating\n point value and the remaining input, or \u003ccode\u003eNothing\u003c/code\u003e should no parse\n be found.\n\u003c/p\u003e\u003cp\u003eFor example, to sum a file of floating point numbers, one per line, \n\u003c/p\u003e\u003cpre\u003e import qualified Data.ByteString.Char8  as S\n import qualified Data.ByteString.Unsafe as S\n import Data.ByteString.Lex.Double\n \n main = print . go 0 =\u003c\u003c S.getContents\n   where\n     go n s = case readDouble s of\n                     Nothing       -\u003e n\n                     Just (k,rest) -\u003e go (n+k) (S.tail rest)\n\u003c/pre\u003e",
        "fct-module": "Data.ByteString.Lex.Lazy.Double",
        "fct-package": "bytestring-lexing",
        "fct-signature": "ByteString -\u003e Maybe (Double, ByteString)",
        "fct-source": "src/Data-ByteString-Lex-Lazy-Double.html#readDouble",
        "fct-type": "function",
        "title": "readDouble"
      },
      "index": {
        "description": "Parse the initial portion of the ByteString as Double precision floating point value The expected form of the numeric literal is given by An optional or sign Decimal digits OR oO and sequence of octal digits OR xX and sequence of hexadecimal digits OR An optional decimal point followed by sequence of decimal digits And an optional exponent The result is returned as pair of double-precision floating point value and the remaining input or Nothing should no parse be found For example to sum file of floating point numbers one per line import qualified Data.ByteString.Char8 as import qualified Data.ByteString.Unsafe as import Data.ByteString.Lex.Double main print go S.getContents where go case readDouble of Nothing Just rest go S.tail rest",
        "hierarchy": "Data ByteString Lex Lazy Double",
        "module": "Data.ByteString.Lex.Lazy.Double",
        "name": "readDouble",
        "normalized": "ByteString-\u003eMaybe(Double,ByteString)",
        "package": "bytestring-lexing",
        "partial": "Double",
        "signature": "ByteString-\u003eMaybe(Double,ByteString)"
      }
    }
  }
]