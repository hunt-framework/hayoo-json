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
        "word": "iconv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString encoding conversion\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Codec.Text.IConv",
          "name": "IConv",
          "package": "iconv",
          "source": "src/Codec-Text-IConv.html",
          "type": "module"
        },
        "index": {
          "description": "String encoding conversion",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "IConv",
          "package": "iconv",
          "partial": "IConv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.IConv",
          "name": "ConversionError",
          "package": "iconv",
          "source": "src/Codec-Text-IConv.html#ConversionError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "ConversionError",
          "package": "iconv",
          "partial": "Conversion Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:ConversionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string encoding name, eg \u003ccode\u003e\"UTF-8\"\u003c/code\u003e or \u003ccode\u003e\"LATIN1\"\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe range of string encodings available is determined by the capabilities\n of the underlying iconv implementation.\n\u003c/p\u003e\u003cp\u003eWhen using the GNU C or libiconv libraries, the permitted values are listed\n by the \u003ccode\u003eiconv --list\u003c/code\u003e command, and all combinations of the listed values\n are supported.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "EncodingName",
          "package": "iconv",
          "source": "src/Codec-Text-IConv.html#EncodingName",
          "type": "type"
        },
        "index": {
          "description": "string encoding name eg UTF-8 or LATIN1 The range of string encodings available is determined by the capabilities of the underlying iconv implementation When using the GNU or libiconv libraries the permitted values are listed by the iconv list command and all combinations of the listed values are supported",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "EncodingName",
          "package": "iconv",
          "partial": "Encoding Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:EncodingName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.IConv",
          "name": "Fuzzy",
          "package": "iconv",
          "source": "src/Codec-Text-IConv.html#Fuzzy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "Fuzzy",
          "package": "iconv",
          "partial": "Fuzzy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:Fuzzy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput spans from encoding conversion. When nothing goes wrong we\n expect just a bunch of \u003ccode\u003e\u003ca\u003eSpan\u003c/a\u003e\u003c/code\u003es. If there are conversion errors we get other\n span types.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "Span",
          "package": "iconv",
          "source": "src/Codec-Text-IConv.html#Span",
          "type": "data"
        },
        "index": {
          "description": "Output spans from encoding conversion When nothing goes wrong we expect just bunch of Span If there are conversion errors we get other span types",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "Span",
          "package": "iconv",
          "partial": "Span",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#t:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error in the conversion process. If this occurs it will be the\n last span.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "ConversionError",
          "package": "iconv",
          "signature": "ConversionError !ConversionError",
          "source": "src/Codec-Text-IConv.html#Span",
          "type": "function"
        },
        "index": {
          "description": "An error in the conversion process If this occurs it will be the last span",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "ConversionError",
          "package": "iconv",
          "partial": "Conversion Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:ConversionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.IConv",
          "name": "Discard",
          "package": "iconv",
          "signature": "Discard",
          "source": "src/Codec-Text-IConv.html#Fuzzy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "Discard",
          "package": "iconv",
          "partial": "Discard",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Discard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis error covers the case where the end of the input has trailing\n bytes that are the initial bytes of a valid character in the input\n encoding. In other words, it looks like the input ended in the middle of\n a multi-byte character. This would often be an indication that the input\n was somehow truncated. Again, the Int parameter is the byte offset in\n the input where the incomplete character starts.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "IncompleteChar",
          "package": "iconv",
          "signature": "IncompleteChar Int",
          "source": "src/Codec-Text-IConv.html#ConversionError",
          "type": "function"
        },
        "index": {
          "description": "This error covers the case where the end of the input has trailing bytes that are the initial bytes of valid character in the input encoding In other words it looks like the input ended in the middle of multi-byte character This would often be an indication that the input was somehow truncated Again the Int parameter is the byte offset in the input where the incomplete character starts",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "IncompleteChar",
          "package": "iconv",
          "partial": "Incomplete Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:IncompleteChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis covers two possible conversion errors:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is a byte sequence in the input that is not valid in the input\n encoding.\n\u003c/li\u003e\u003cli\u003e There is a valid character in the input that has no corresponding\n character in the output encoding.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eUnfortunately iconv does not let us distinguish these two cases. In\n either case, the Int parameter gives the byte offset in the input of\n the unrecognised bytes or unconvertable character.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "InvalidChar",
          "package": "iconv",
          "signature": "InvalidChar Int",
          "source": "src/Codec-Text-IConv.html#ConversionError",
          "type": "function"
        },
        "index": {
          "description": "This covers two possible conversion errors There is byte sequence in the input that is not valid in the input encoding There is valid character in the input that has no corresponding character in the output encoding Unfortunately iconv does not let us distinguish these two cases In either case the Int parameter gives the byte offset in the input of the unrecognised bytes or unconvertable character",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "InvalidChar",
          "package": "iconv",
          "partial": "Invalid Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:InvalidChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordinary output span in the target encoding\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "Span",
          "package": "iconv",
          "signature": "Span !ByteString",
          "source": "src/Codec-Text-IConv.html#Span",
          "type": "function"
        },
        "index": {
          "description": "An ordinary output span in the target encoding",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "Span",
          "package": "iconv",
          "partial": "Span",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.IConv",
          "name": "Transliterate",
          "package": "iconv",
          "signature": "Transliterate",
          "source": "src/Codec-Text-IConv.html#Fuzzy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "Transliterate",
          "package": "iconv",
          "partial": "Transliterate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:Transliterate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn unexpected iconv error. The iconv spec lists a number of possible\n expected errors but does not guarantee that there might not be other\n errors.\n\u003c/p\u003e\u003cp\u003eThis error can occur either immediately, which might indicate that the\n iconv installation is messed up somehow, or it could occur later which\n might indicate resource exhaustion or some other internal iconv error.\n\u003c/p\u003e\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eerrnoToIOError\u003c/a\u003e\u003c/code\u003e to get slightly more information\n on what the error could possibly be.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "UnexpectedError",
          "package": "iconv",
          "signature": "UnexpectedError Errno",
          "source": "src/Codec-Text-IConv.html#ConversionError",
          "type": "function"
        },
        "index": {
          "description": "An unexpected iconv error The iconv spec lists number of possible expected errors but does not guarantee that there might not be other errors This error can occur either immediately which might indicate that the iconv installation is messed up somehow or it could occur later which might indicate resource exhaustion or some other internal iconv error Use errnoToIOError to get slightly more information on what the error could possibly be",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "UnexpectedError",
          "package": "iconv",
          "partial": "Unexpected Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:UnexpectedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe conversion from the input to output string encoding is not\n supported by the underlying iconv implementation. This is usually\n because a named encoding is not recognised or support for it\n was not enabled on this system.\n\u003c/p\u003e\u003cp\u003eThe POSIX standard does not guarantee that all possible combinations\n of recognised string encoding are supported, however most common\n implementations do support all possible combinations.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "UnsuportedConversion",
          "package": "iconv",
          "signature": "UnsuportedConversion EncodingName EncodingName",
          "source": "src/Codec-Text-IConv.html#ConversionError",
          "type": "function"
        },
        "index": {
          "description": "The conversion from the input to output string encoding is not supported by the underlying iconv implementation This is usually because named encoding is not recognised or support for it was not enabled on this system The POSIX standard does not guarantee that all possible combinations of recognised string encoding are supported however most common implementations do support all possible combinations",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "UnsuportedConversion",
          "package": "iconv",
          "partial": "Unsuported Conversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:UnsuportedConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert text from one named string encoding to another.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The conversion is done lazily.\n\u003c/li\u003e\u003cli\u003e An exception is thrown if conversion between the two encodings is not\n supported.\n\u003c/li\u003e\u003cli\u003e An exception is thrown if there are any encoding conversion errors.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Text.IConv",
          "name": "convert",
          "package": "iconv",
          "signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert text from one named string encoding to another The conversion is done lazily An exception is thrown if conversion between the two encodings is not supported An exception is thrown if there are any encoding conversion errors",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "convert",
          "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
          "package": "iconv",
          "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert text ignoring encoding conversion problems.\n\u003c/p\u003e\u003cp\u003eIf invalid byte sequences are found in the input they are ignored and\n conversion continues if possible. This is not always possible especially\n with stateful encodings. No placeholder character is inserted into the\n output so there will be no indication that invalid byte sequences were\n encountered.\n\u003c/p\u003e\u003cp\u003eIf there are characters in the input that have no direct corresponding\n character in the output encoding then they are dealt in one of two ways,\n depending on the \u003ccode\u003e\u003ca\u003eFuzzy\u003c/a\u003e\u003c/code\u003e argument. We can try and \u003ccode\u003e\u003ca\u003eTransliterate\u003c/a\u003e\u003c/code\u003e them into\n the nearest corresponding character(s) or use a replacement character\n (typically \u003ccode\u003e'?'\u003c/code\u003e or the Unicode replacement character). Alternatively they\n can simply be \u003ccode\u003e\u003ca\u003eDiscard\u003c/a\u003e\u003c/code\u003eed.\n\u003c/p\u003e\u003cp\u003eIn either case, no exceptions will occur. In the case of unrecoverable\n errors, the output will simply be truncated. This includes the case of\n unrecognised or unsupported encoding names; the output will be empty.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e This function only works with the GNU iconv implementation which provides\n this feature beyond what is required by the iconv specification.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Codec.Text.IConv",
          "name": "convertFuzzy",
          "package": "iconv",
          "signature": "Fuzzy-\u003e EncodingName-\u003e EncodingName-\u003e ByteString-\u003e ByteString",
          "type": "function"
        },
        "index": {
          "description": "Convert text ignoring encoding conversion problems If invalid byte sequences are found in the input they are ignored and conversion continues if possible This is not always possible especially with stateful encodings No placeholder character is inserted into the output so there will be no indication that invalid byte sequences were encountered If there are characters in the input that have no direct corresponding character in the output encoding then they are dealt in one of two ways depending on the Fuzzy argument We can try and Transliterate them into the nearest corresponding character or use replacement character typically or the Unicode replacement character Alternatively they can simply be Discard ed In either case no exceptions will occur In the case of unrecoverable errors the output will simply be truncated This includes the case of unrecognised or unsupported encoding names the output will be empty This function only works with the GNU iconv implementation which provides this feature beyond what is required by the iconv specification",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "convertFuzzy",
          "normalized": "Fuzzy-\u003eEncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
          "package": "iconv",
          "partial": "Fuzzy",
          "signature": "Fuzzy-\u003eEncodingName-\u003eEncodingName-\u003eByteString-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertFuzzy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis version provides a more complete but less convenient conversion\n interface. It exposes all the possible error conditions and never throws\n exceptions.\n\u003c/p\u003e\u003cp\u003eThe conversion is still lazy. It returns a list of spans, where a span may\n be an ordinary span of output text or a conversion error. This somewhat\n complex interface allows both for lazy conversion and for precise reporting\n of conversion problems. The other functions \u003ccode\u003e\u003ca\u003econvert\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econvertStrictly\u003c/a\u003e\u003c/code\u003e\n are actually simple wrappers on this function.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "convertLazily",
          "package": "iconv",
          "signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e [Span]",
          "type": "function"
        },
        "index": {
          "description": "This version provides more complete but less convenient conversion interface It exposes all the possible error conditions and never throws exceptions The conversion is still lazy It returns list of spans where span may be an ordinary span of output text or conversion error This somewhat complex interface allows both for lazy conversion and for precise reporting of conversion problems The other functions convert and convertStrictly are actually simple wrappers on this function",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "convertLazily",
          "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003e[Span]",
          "package": "iconv",
          "partial": "Lazily",
          "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003e[Span]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertLazily"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis variant does the conversion all in one go, so it is able to report\n any conversion errors up front. It exposes all the possible error conditions\n and never throws exceptions\n\u003c/p\u003e\u003cp\u003eThe disadvantage is that no output can be produced before the whole input\n is consumed. This might be problematic for very large inputs.\n\u003c/p\u003e",
          "module": "Codec.Text.IConv",
          "name": "convertStrictly",
          "package": "iconv",
          "signature": "EncodingName-\u003e EncodingName-\u003e ByteString-\u003e Either ByteString ConversionError",
          "type": "function"
        },
        "index": {
          "description": "This variant does the conversion all in one go so it is able to report any conversion errors up front It exposes all the possible error conditions and never throws exceptions The disadvantage is that no output can be produced before the whole input is consumed This might be problematic for very large inputs",
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "convertStrictly",
          "normalized": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eEither ByteString ConversionError",
          "package": "iconv",
          "partial": "Strictly",
          "signature": "EncodingName-\u003eEncodingName-\u003eByteString-\u003eEither ByteString ConversionError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:convertStrictly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Codec.Text.IConv",
          "name": "reportConversionError",
          "package": "iconv",
          "signature": "ConversionError -\u003e IOError",
          "source": "src/Codec-Text-IConv.html#reportConversionError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Codec Text IConv",
          "module": "Codec.Text.IConv",
          "name": "reportConversionError",
          "normalized": "ConversionError-\u003eIOError",
          "package": "iconv",
          "partial": "Conversion Error",
          "signature": "ConversionError-\u003eIOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iconv/docs/Codec-Text-IConv.html#v:reportConversionError"
      }
    }
  ]
]