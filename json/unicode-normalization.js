[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#t:UBool",
      "description": {
        "fct-descr": "The internal ICU boolean type.\n See unicode/umachine.h. Be aware that to Haskell, this is a numeric type and\n not a boolean.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#UBool",
        "fct-type": "unknown",
        "title": "UBool"
      },
      "index": {
        "description": "The internal ICU boolean type See unicode umachine.h Be aware that to Haskell this is numeric type and not boolean",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "UBool",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "UBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#t:UChar",
      "description": {
        "fct-descr": "The ICU character type. A UChar is a 16-bit unit of a UTF-16 encoded string\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#UChar",
        "fct-type": "unknown",
        "title": "UChar"
      },
      "index": {
        "description": "The ICU character type UChar is bit unit of UTF-16 encoded string",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "UChar",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "UChar",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#t:UErrorCode",
      "description": {
        "fct-descr": "The internal ICU error code type.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#UErrorCode",
        "fct-type": "unknown",
        "title": "UErrorCode"
      },
      "index": {
        "description": "The internal ICU error code type",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "UErrorCode",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "UError Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:BitPackable",
      "description": {
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "class",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#BitPackable",
        "fct-type": "unknown",
        "title": "BitPackable"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "BitPackable",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "Bit Packable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:cOrderingToOrdering",
      "description": {
        "fct-descr": "Converts a C ordering (-1 means LT, 0 means EQ, 1 means GT) to a Haskell ordering.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "a -\u003e Ordering",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#cOrderingToOrdering",
        "fct-type": "unknown",
        "title": "cOrderingToOrdering"
      },
      "index": {
        "description": "Converts ordering means LT means EQ means GT to Haskell ordering",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "cOrderingToOrdering",
        "normalized": "a-\u003eOrdering",
        "package": "unicode-normalization",
        "partial": "Ordering To Ordering",
        "signature": "a-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:handleError",
      "description": {
        "fct-descr": "\u003cp\u003eProvides simple (i.e. abort-if-anything-wrong) error handling for ICU\n functions.\n\u003c/p\u003e\u003cp\u003eTakes as an argument a function that writes an ICU error code to a certain \n memory address (like most ICU4C functions do). \n\u003c/p\u003e\u003cp\u003eThis function runs the given function, giving it a memory address to write the\n error code to. When the given function indicates an error, it aborts the\n program. Otherwise it just returns the result.\n\u003c/p\u003e",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "(Ptr UErrorCode -\u003e IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#handleError",
        "fct-type": "unknown",
        "title": "handleError"
      },
      "index": {
        "description": "Provides simple i.e abort-if-anything-wrong error handling for ICU functions Takes as an argument function that writes an ICU error code to certain memory address like most ICU4C functions do This function runs the given function giving it memory address to write the error code to When the given function indicates an error it aborts the program Otherwise it just returns the result",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "handleError",
        "normalized": "(Ptr UErrorCode-\u003eIO a)-\u003eIO a",
        "package": "unicode-normalization",
        "partial": "Error",
        "signature": "(Ptr UErrorCode-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:intValue",
      "description": {
        "fct-descr": "Tells of a certain option what its C integer/enum value is.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "a -\u003e Int32",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#intValue",
        "fct-type": "unknown",
        "title": "intValue"
      },
      "index": {
        "description": "Tells of certain option what its integer enum value is",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "intValue",
        "normalized": "a-\u003eInt",
        "package": "unicode-normalization",
        "partial": "Value",
        "signature": "a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:packOptions",
      "description": {
        "fct-descr": "Takes a list of options and encodes it into a C integer.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "[a] -\u003e Int32",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#packOptions",
        "fct-type": "unknown",
        "title": "packOptions"
      },
      "index": {
        "description": "Takes list of options and encodes it into integer",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "packOptions",
        "normalized": "[a]-\u003eInt",
        "package": "unicode-normalization",
        "partial": "Options",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:uBoolToBool",
      "description": {
        "fct-descr": "Converts an ICU bool to a Haskell one, preserving truth or falsehood.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "UBool -\u003e Bool",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#uBoolToBool",
        "fct-type": "unknown",
        "title": "uBoolToBool"
      },
      "index": {
        "description": "Converts an ICU bool to Haskell one preserving truth or falsehood",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "uBoolToBool",
        "normalized": "UBool-\u003eBool",
        "package": "unicode-normalization",
        "partial": "Bool To Bool",
        "signature": "UBool-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:withCompactString",
      "description": {
        "fct-descr": "Runs a raw ICU-type function on a CompactString encoded in UTF16.\n The ICU-type function has type \u003ca\u003ePtr UChar -\u003e Int32 -\u003e a\u003c/a\u003e. This function may\n not modify the memory under the Ptr UChar. The size of the Ptr UChar in 16-bit \n words is passed in as the Int32 argument. Accessing memory from Ptr UChar\n outside of that size also sends us off to lala land, of course.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e (Ptr UChar -\u003e Int32 -\u003e IO a) -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#withCompactString",
        "fct-type": "unknown",
        "title": "withCompactString"
      },
      "index": {
        "description": "Runs raw ICU-type function on CompactString encoded in UTF16 The ICU-type function has type Ptr UChar Int32 This function may not modify the memory under the Ptr UChar The size of the Ptr UChar in bit words is passed in as the Int32 argument Accessing memory from Ptr UChar outside of that size also sends us off to lala land of course",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "withCompactString",
        "normalized": "CompactString UTF Native-\u003e(Ptr UChar-\u003eInt-\u003eIO a)-\u003eIO a",
        "package": "unicode-normalization",
        "partial": "Compact String",
        "signature": "CompactString UTF Native-\u003e(Ptr UChar-\u003eInt-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Base.html#v:withPackedOptions",
      "description": {
        "fct-descr": "Runs a function, expecting a 32-bit integer, with the given options\n     bit-packed into a 32-bit integer.\n",
        "fct-module": "Text.Unicode.Base",
        "fct-package": "unicode-normalization",
        "fct-signature": "[a] -\u003e (Int32 -\u003e IO b) -\u003e IO b",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Base.html#withPackedOptions",
        "fct-type": "unknown",
        "title": "withPackedOptions"
      },
      "index": {
        "description": "Runs function expecting bit integer with the given options bit-packed into bit integer",
        "hierarchy": "Text Unicode Base",
        "module": "Text.Unicode.Base",
        "name": "withPackedOptions",
        "normalized": "[a]-\u003e(Int-\u003eIO b)-\u003eIO b",
        "package": "unicode-normalization",
        "partial": "Packed Options",
        "signature": "[a]-\u003e(Int-\u003eIO b)-\u003eIO b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#t:ComparisonOption",
      "description": {
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#ComparisonOption",
        "fct-type": "unknown",
        "title": "ComparisonOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "ComparisonOption",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "Comparison Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#t:NormalizationCheckResult",
      "description": {
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#NormalizationCheckResult",
        "fct-type": "unknown",
        "title": "NormalizationCheckResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "NormalizationCheckResult",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "Normalization Check Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#t:NormalizationMode",
      "description": {
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#NormalizationMode",
        "fct-type": "unknown",
        "title": "NormalizationMode"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "NormalizationMode",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "Normalization Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#t:NormalizationOption",
      "description": {
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "data",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#NormalizationOption",
        "fct-type": "unknown",
        "title": "NormalizationOption"
      },
      "index": {
        "description": "",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "NormalizationOption",
        "normalized": "",
        "package": "unicode-normalization",
        "partial": "Normalization Option",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:compare",
      "description": {
        "fct-descr": "\u003cp\u003eCompares two Unicode strings for canonical equivalence.\n\u003c/p\u003e\u003cp\u003eTwo Unicode strings are canonically equivalent when their NFD and NFC \n normalizations are equal.\n\u003c/p\u003e",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e CompactString UTF16Native -\u003e [ComparisonOption] -\u003e Ordering",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#compare",
        "fct-type": "unknown",
        "title": "compare"
      },
      "index": {
        "description": "Compares two Unicode strings for canonical equivalence Two Unicode strings are canonically equivalent when their NFD and NFC normalizations are equal",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "compare",
        "normalized": "CompactString UTF Native-\u003eCompactString UTF Native-\u003e[ComparisonOption]-\u003eOrdering",
        "package": "unicode-normalization",
        "partial": "",
        "signature": "CompactString UTF Native-\u003eCompactString UTF Native-\u003e[ComparisonOption]-\u003eOrdering"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:concatenate",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenates two normalized strings, such that the result is also normalized.\n\u003c/p\u003e\u003cp\u003eMore formally:\n   Given that string1 is normalized according to mode and options, and string2\n   is normalized according to mode and options, the result of concatenate\n   string1 string2 mode options will be a concatenation of string1 and string2\n   and be normalized according to mode and options.\n\u003c/p\u003e",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e CompactString UTF16Native -\u003e NormalizationMode -\u003e [NormalizationOption] -\u003e CompactString UTF16Native",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#concatenate",
        "fct-type": "unknown",
        "title": "concatenate"
      },
      "index": {
        "description": "Concatenates two normalized strings such that the result is also normalized More formally Given that string1 is normalized according to mode and options and string2 is normalized according to mode and options the result of concatenate string1 string2 mode options will be concatenation of string1 and string2 and be normalized according to mode and options",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "concatenate",
        "normalized": "CompactString UTF Native-\u003eCompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eCompactString UTF Native",
        "package": "unicode-normalization",
        "partial": "",
        "signature": "CompactString UTF Native-\u003eCompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eCompactString UTF Native"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:isNormalized",
      "description": {
        "fct-descr": "Tells of a string whether it is already normalized according to a certain \n  mode and options\n",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e NormalizationMode -\u003e [NormalizationOption] -\u003e Bool",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#isNormalized",
        "fct-type": "unknown",
        "title": "isNormalized"
      },
      "index": {
        "description": "Tells of string whether it is already normalized according to certain mode and options",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "isNormalized",
        "normalized": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eBool",
        "package": "unicode-normalization",
        "partial": "Normalized",
        "signature": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:normalizationToCInt",
      "description": {
        "fct-descr": "Internal function to convert a NormalizationMode to its C enum value\n",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "NormalizationMode -\u003e CInt",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#normalizationToCInt",
        "fct-type": "unknown",
        "title": "normalizationToCInt"
      },
      "index": {
        "description": "Internal function to convert NormalizationMode to its enum value",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "normalizationToCInt",
        "normalized": "NormalizationMode-\u003eCInt",
        "package": "unicode-normalization",
        "partial": "To CInt",
        "signature": "NormalizationMode-\u003eCInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:normalize",
      "description": {
        "fct-descr": "\u003cp\u003eNormalizes the given string, according to the given normalization type and options.\n\u003c/p\u003e\u003cp\u003eThis function is a higher-level wrapper around raw_normalize.\n\u003c/p\u003e\u003cp\u003eMove this to something like Data.CompactString.Normalization, eventually.\n\u003c/p\u003e\u003cp\u003eGeneralize out the UErrorCode handling.\n\u003c/p\u003e",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e NormalizationMode -\u003e [NormalizationOption] -\u003e CompactString UTF16Native",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#normalize",
        "fct-type": "unknown",
        "title": "normalize"
      },
      "index": {
        "description": "Normalizes the given string according to the given normalization type and options This function is higher-level wrapper around raw normalize Move this to something like Data.CompactString.Normalization eventually Generalize out the UErrorCode handling",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "normalize",
        "normalized": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eCompactString UTF Native",
        "package": "unicode-normalization",
        "partial": "",
        "signature": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eCompactString UTF Native"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unicode-normalization/docs/Text-Unicode-Normalization.html#v:quickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to check quickly whether a string is already normalized according to a certain \n  normalization mode.\n\u003c/p\u003e\u003cp\u003eWhen you get MaybeNormalized as a result, you should normalize the \n  string and compare it to the original to know if it is normalized. You can\n  make ICU do that by calling isNormalized.\n\u003c/p\u003e",
        "fct-module": "Text.Unicode.Normalization",
        "fct-package": "unicode-normalization",
        "fct-signature": "CompactString UTF16Native -\u003e NormalizationMode -\u003e [NormalizationOption] -\u003e NormalizationCheckResult",
        "fct-source": "http://hackage.haskell.org/package/unicode-normalization/docs/src/Text-Unicode-Normalization.html#quickCheck",
        "fct-type": "unknown",
        "title": "quickCheck"
      },
      "index": {
        "description": "Attempts to check quickly whether string is already normalized according to certain normalization mode When you get MaybeNormalized as result you should normalize the string and compare it to the original to know if it is normalized You can make ICU do that by calling isNormalized",
        "hierarchy": "Text Unicode Normalization",
        "module": "Text.Unicode.Normalization",
        "name": "quickCheck",
        "normalized": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eNormalizationCheckResult",
        "package": "unicode-normalization",
        "partial": "Check",
        "signature": "CompactString UTF Native-\u003eNormalizationMode-\u003e[NormalizationOption]-\u003eNormalizationCheckResult"
      }
    }
  }
]