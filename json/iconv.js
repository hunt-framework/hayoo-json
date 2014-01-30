[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString encoding conversion\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "module",
        "fct-source": "src/Codec-Text-IConv.html",
        "fct-type": "module",
        "title": "IConv"
      },
      "index": {
        "description": "String encoding conversion",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "IConv",
        "normalized": "",
        "package": "iconv",
        "partial": "IConv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:ConversionError",
      "description": {
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "data",
        "fct-source": "src/Codec-Text-IConv.html#ConversionError",
        "fct-type": "data",
        "title": "ConversionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "ConversionError",
        "normalized": "",
        "package": "iconv",
        "partial": "Conversion Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:EncodingName",
      "description": {
        "fct-descr": "\u003cp\u003eA string encoding name, eg \u003ccode\u003e\"UTF-8\"\u003c/code\u003e or \u003ccode\u003e\"LATIN1\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe range of string encodings available is determined by the capabilities\n of the underlying iconv implementation.\n\u003c/p\u003e\u003cp\u003eWhen using the GNU C or libiconv libraries, the permitted values are listed\n by the \u003ccode\u003eiconv --list\u003c/code\u003e command, and all combinations of the listed values\n are supported.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "type",
        "fct-source": "src/Codec-Text-IConv.html#EncodingName",
        "fct-type": "type",
        "title": "EncodingName"
      },
      "index": {
        "description": "string encoding name eg UTF-8 or LATIN1 The range of string encodings available is determined by the capabilities of the underlying iconv implementation When using the GNU or libiconv libraries the permitted values are listed by the iconv list command and all combinations of the listed values are supported",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "EncodingName",
        "normalized": "",
        "package": "iconv",
        "partial": "Encoding Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:Fuzzy",
      "description": {
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "data",
        "fct-source": "src/Codec-Text-IConv.html#Fuzzy",
        "fct-type": "data",
        "title": "Fuzzy"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "Fuzzy",
        "normalized": "",
        "package": "iconv",
        "partial": "Fuzzy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:Span",
      "description": {
        "fct-descr": "\u003cp\u003eOutput spans from encoding conversion. When nothing goes wrong we\n expect just a bunch of \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003es. If there are conversion errors we get other\n span types.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "data",
        "fct-source": "src/Codec-Text-IConv.html#Span",
        "fct-type": "data",
        "title": "Span"
      },
      "index": {
        "description": "Output spans from encoding conversion When nothing goes wrong we expect just bunch of Span If there are conversion errors we get other span types",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "Span",
        "normalized": "",
        "package": "iconv",
        "partial": "Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:ConversionError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error in the conversion process. If this occurs it will be the\n last span.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "ConversionError !ConversionError",
        "fct-source": "src/Codec-Text-IConv.html#Span",
        "fct-type": "function",
        "title": "ConversionError"
      },
      "index": {
        "description": "An error in the conversion process If this occurs it will be the last span",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "ConversionError",
        "normalized": "",
        "package": "iconv",
        "partial": "Conversion Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Discard",
      "description": {
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "Discard",
        "fct-source": "src/Codec-Text-IConv.html#Fuzzy",
        "fct-type": "function",
        "title": "Discard"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "Discard",
        "normalized": "",
        "package": "iconv",
        "partial": "Discard",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:IncompleteChar",
      "description": {
        "fct-descr": "\u003cp\u003eThis error covers the case where the end of the input has trailing\n bytes that are the initial bytes of a valid character in the input\n encoding. In other words, it looks like the input ended in the middle of\n a multi-byte character. This would often be an indication that the input\n was somehow truncated. Again, the Int parameter is the byte offset in\n the input where the incomplete character starts.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "IncompleteChar Int",
        "fct-source": "src/Codec-Text-IConv.html#ConversionError",
        "fct-type": "function",
        "title": "IncompleteChar"
      },
      "index": {
        "description": "This error covers the case where the end of the input has trailing bytes that are the initial bytes of valid character in the input encoding In other words it looks like the input ended in the middle of multi-byte character This would often be an indication that the input was somehow truncated Again the Int parameter is the byte offset in the input where the incomplete character starts",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "IncompleteChar",
        "normalized": "",
        "package": "iconv",
        "partial": "Incomplete Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:InvalidChar",
      "description": {
        "fct-descr": "\u003cp\u003eThis covers two possible conversion errors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is a byte sequence in the input that is not valid in the input\n encoding.\n\u003c/li\u003e\u003cli\u003e There is a valid character in the input that has no corresponding\n character in the output encoding.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUnfortunately iconv does not let us distinguish these two cases. In\n either case, the Int parameter gives the byte offset in the input of\n the unrecognised bytes or unconvertable character.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "InvalidChar Int",
        "fct-source": "src/Codec-Text-IConv.html#ConversionError",
        "fct-type": "function",
        "title": "InvalidChar"
      },
      "index": {
        "description": "This covers two possible conversion errors There is byte sequence in the input that is not valid in the input encoding There is valid character in the input that has no corresponding character in the output encoding Unfortunately iconv does not let us distinguish these two cases In either case the Int parameter gives the byte offset in the input of the unrecognised bytes or unconvertable character",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "InvalidChar",
        "normalized": "",
        "package": "iconv",
        "partial": "Invalid Char",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Span",
      "description": {
        "fct-descr": "\u003cp\u003eAn ordinary output span in the target encoding\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "Span !ByteString",
        "fct-source": "src/Codec-Text-IConv.html#Span",
        "fct-type": "function",
        "title": "Span"
      },
      "index": {
        "description": "An ordinary output span in the target encoding",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "Span",
        "normalized": "",
        "package": "iconv",
        "partial": "Span",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Transliterate",
      "description": {
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "Transliterate",
        "fct-source": "src/Codec-Text-IConv.html#Fuzzy",
        "fct-type": "function",
        "title": "Transliterate"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "Transliterate",
        "normalized": "",
        "package": "iconv",
        "partial": "Transliterate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:UnexpectedError",
      "description": {
        "fct-descr": "\u003cp\u003eAn unexpected iconv error. The iconv spec lists a number of possible\n expected errors but does not guarantee that there might not be other\n errors.\n\u003c/p\u003e\u003cp\u003eThis error can occur either immediately, which might indicate that the\n iconv installation is messed up somehow, or it could occur later which\n might indicate resource exhaustion or some other internal iconv error.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eerrnoToIOError\u003c/a\u003e\u003c/code\u003e to get slightly more information\n on what the error could possibly be.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "UnexpectedError Errno",
        "fct-source": "src/Codec-Text-IConv.html#ConversionError",
        "fct-type": "function",
        "title": "UnexpectedError"
      },
      "index": {
        "description": "An unexpected iconv error The iconv spec lists number of possible expected errors but does not guarantee that there might not be other errors This error can occur either immediately which might indicate that the iconv installation is messed up somehow or it could occur later which might indicate resource exhaustion or some other internal iconv error Use errnoToIOError to get slightly more information on what the error could possibly be",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "UnexpectedError",
        "normalized": "",
        "package": "iconv",
        "partial": "Unexpected Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:UnsuportedConversion",
      "description": {
        "fct-descr": "\u003cp\u003eThe conversion from the input to output string encoding is not\n supported by the underlying iconv implementation. This is usually\n because a named encoding is not recognised or support for it\n was not enabled on this system.\n\u003c/p\u003e\u003cp\u003eThe POSIX standard does not guarantee that all possible combinations\n of recognised string encoding are supported, however most common\n implementations do support all possible combinations.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "UnsuportedConversion EncodingName EncodingName",
        "fct-source": "src/Codec-Text-IConv.html#ConversionError",
        "fct-type": "function",
        "title": "UnsuportedConversion"
      },
      "index": {
        "description": "The conversion from the input to output string encoding is not supported by the underlying iconv implementation This is usually because named encoding is not recognised or support for it was not enabled on this system The POSIX standard does not guarantee that all possible combinations of recognised string encoding are supported however most common implementations do support all possible combinations",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "UnsuportedConversion",
        "normalized": "",
        "package": "iconv",
        "partial": "Unsuported Conversion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convert",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text from one named string encoding to another.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conversion is done lazily.\n\u003c/li\u003e\u003cli\u003e An exception is thrown if conversion between the two encodings is not\n supported.\n\u003c/li\u003e\u003cli\u003e An exception is thrown if there are any encoding conversion errors.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "convert"
      },
      "index": {
        "description": "Convert text from one named string encoding to another The conversion is done lazily An exception is thrown if conversion between the two encodings is not supported An exception is thrown if there are any encoding conversion errors",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "convert",
        "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
        "package": "iconv",
        "partial": "",
        "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertFuzzy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert text ignoring encoding conversion problems.\n\u003c/p\u003e\u003cp\u003eIf invalid byte sequences are found in the input they are ignored and\n conversion continues if possible. This is not always possible especially\n with stateful encodings. No placeholder character is inserted into the\n output so there will be no indication that invalid byte sequences were\n encountered.\n\u003c/p\u003e\u003cp\u003eIf there are characters in the input that have no direct corresponding\n character in the output encoding then they are dealt in one of two ways,\n depending on the \u003ccode\u003e\u003ca\u003eFuzzy\u003c/a\u003e\u003c/code\u003e argument. We can try and \u003ccode\u003e\u003ca\u003eTransliterate\u003c/a\u003e\u003c/code\u003e them into\n the nearest corresponding character(s) or use a replacement character\n (typically \u003ccode\u003e'?'\u003c/code\u003e or the Unicode replacement character). Alternatively they\n can simply be \u003ccode\u003e\u003ca\u003eDiscard\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e\u003cp\u003eIn either case, no exceptions will occur. In the case of unrecoverable\n errors, the output will simply be truncated. This includes the case of\n unrecognised or unsupported encoding names; the output will be empty.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function only works with the GNU iconv implementation which provides\n this feature beyond what is required by the iconv specification.\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "Fuzzy-\u003e EncodingName-\u003e EncodingName-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "convertFuzzy"
      },
      "index": {
        "description": "Convert text ignoring encoding conversion problems If invalid byte sequences are found in the input they are ignored and conversion continues if possible This is not always possible especially with stateful encodings No placeholder character is inserted into the output so there will be no indication that invalid byte sequences were encountered If there are characters in the input that have no direct corresponding character in the output encoding then they are dealt in one of two ways depending on the Fuzzy argument We can try and Transliterate them into the nearest corresponding character or use replacement character typically or the Unicode replacement character Alternatively they can simply be Discard ed In either case no exceptions will occur In the case of unrecoverable errors the output will simply be truncated This includes the case of unrecognised or unsupported encoding names the output will be empty This function only works with the GNU iconv implementation which provides this feature beyond what is required by the iconv specification",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "convertFuzzy",
        "normalized": "Fuzzy-\u003eEncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
        "package": "iconv",
        "partial": "Fuzzy",
        "signature": "Fuzzy-\u003eEncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertLazily",
      "description": {
        "fct-descr": "\u003cp\u003eThis version provides a more complete but less convenient conversion\n interface. It exposes all the possible error conditions and never throws\n exceptions.\n\u003c/p\u003e\u003cp\u003eThe conversion is still lazy. It returns a list of spans, where a span may\n be an ordinary span of output text or a conversion error. This somewhat\n complex interface allows both for lazy conversion and for precise reporting\n of conversion problems. The other functions \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econvertStrictly\u003c/a\u003e\u003c/code\u003e\n are actually simple wrappers on this function.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e [Span]",
        "fct-type": "function",
        "title": "convertLazily"
      },
      "index": {
        "description": "This version provides more complete but less convenient conversion interface It exposes all the possible error conditions and never throws exceptions The conversion is still lazy It returns list of spans where span may be an ordinary span of output text or conversion error This somewhat complex interface allows both for lazy conversion and for precise reporting of conversion problems The other functions convert and convertStrictly are actually simple wrappers on this function",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "convertLazily",
        "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003e[Span]",
        "package": "iconv",
        "partial": "Lazily",
        "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003e[Span]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertStrictly",
      "description": {
        "fct-descr": "\u003cp\u003eThis variant does the conversion all in one go, so it is able to report\n any conversion errors up front. It exposes all the possible error conditions\n and never throws exceptions\n\u003c/p\u003e\u003cp\u003eThe disadvantage is that no output can be produced before the whole input\n is consumed. This might be problematic for very large inputs.\n\u003c/p\u003e",
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e Either ByteString ConversionError",
        "fct-type": "function",
        "title": "convertStrictly"
      },
      "index": {
        "description": "This variant does the conversion all in one go so it is able to report any conversion errors up front It exposes all the possible error conditions and never throws exceptions The disadvantage is that no output can be produced before the whole input is consumed This might be problematic for very large inputs",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "convertStrictly",
        "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eEither ByteString ConversionError",
        "package": "iconv",
        "partial": "Strictly",
        "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eEither ByteString ConversionError"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:reportConversionError",
      "description": {
        "fct-module": "Codec.Text.IConv",
        "fct-package": "iconv",
        "fct-signature": "ConversionError -\u003e IOError",
        "fct-source": "src/Codec-Text-IConv.html#reportConversionError",
        "fct-type": "function",
        "title": "reportConversionError"
      },
      "index": {
        "description": "",
        "hierarchy": "Codec Text IConv",
        "module": "Codec.Text.IConv",
        "name": "reportConversionError",
        "normalized": "ConversionError-\u003eIOError",
        "package": "iconv",
        "partial": "Conversion Error",
        "signature": "ConversionError-\u003eIOError"
      }
    }
  }
]