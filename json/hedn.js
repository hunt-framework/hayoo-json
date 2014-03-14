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
        "word": "hedn"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Encode",
          "name": "Encode",
          "package": "hedn",
          "source": "src/Data-EDN-Encode.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EDN Encode",
          "module": "Data.EDN.Encode",
          "name": "Encode",
          "package": "hedn",
          "partial": "Encode",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Encode.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a value as a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Encode\",\"Data.EDN\"]",
          "name": "encode",
          "package": "hedn",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-EDN-Encode.html#encode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Encode.html#v:encode\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:encode\"]"
        },
        "index": {
          "description": "Serialize value as lazy ByteString",
          "hierarchy": "Data EDN Encode",
          "module": "Data.EDN.Encode",
          "name": "encode",
          "normalized": "a-\u003eByteString",
          "package": "hedn",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Encode.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a Tagged EDN value to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Encode",
          "name": "fromTagged",
          "package": "hedn",
          "signature": "TaggedValue -\u003e Builder",
          "source": "src/Data-EDN-Encode.html#fromTagged",
          "type": "function"
        },
        "index": {
          "description": "Encode Tagged EDN value to Builder",
          "hierarchy": "Data EDN Encode",
          "module": "Data.EDN.Encode",
          "name": "fromTagged",
          "normalized": "TaggedValue-\u003eBuilder",
          "package": "hedn",
          "partial": "Tagged",
          "signature": "TaggedValue-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Encode.html#v:fromTagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a raw EDN value to a \u003ccode\u003e\u003ca\u003eBuilder\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Encode",
          "name": "fromValue",
          "package": "hedn",
          "signature": "Value -\u003e Builder",
          "source": "src/Data-EDN-Encode.html#fromValue",
          "type": "function"
        },
        "index": {
          "description": "Encode raw EDN value to Builder",
          "hierarchy": "Data EDN Encode",
          "module": "Data.EDN.Encode",
          "name": "fromValue",
          "normalized": "Value-\u003eBuilder",
          "package": "hedn",
          "partial": "Value",
          "signature": "Value-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Encode.html#v:fromValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse an UTF-8 encoded EDN string into a haskell representation of EDN objects.\n Use \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e to get actual types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EDN.Parser",
          "name": "Parser",
          "package": "hedn",
          "source": "src/Data-EDN-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parse an UTF-8 encoded EDN string into haskell representation of EDN objects Use decode to get actual types",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "Parser",
          "package": "hedn",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, but without continutations.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseBS",
          "package": "hedn",
          "signature": "ByteString -\u003e Result TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseBS",
          "type": "function"
        },
        "index": {
          "description": "Parse strict ByteString but without continutations",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseBS",
          "normalized": "ByteString-\u003eResult TaggedValue",
          "package": "hedn",
          "partial": "BS",
          "signature": "ByteString-\u003eResult TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseBSL",
          "package": "hedn",
          "signature": "ByteString -\u003e Result TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseBSL",
          "type": "function"
        },
        "index": {
          "description": "Parse lazy ByteString",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseBSL",
          "normalized": "ByteString-\u003eResult TaggedValue",
          "package": "hedn",
          "partial": "BSL",
          "signature": "ByteString-\u003eResult TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseBSL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e. If fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e is returned with the error message.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseEither",
          "package": "hedn",
          "signature": "ByteString -\u003e Either String TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseEither",
          "type": "function"
        },
        "index": {
          "description": "Parse lazy ByteString into TaggedValue If fails due to incomplete or invalid input Left is returned with the error message",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseEither",
          "normalized": "ByteString-\u003eEither String TaggedValue",
          "package": "hedn",
          "partial": "Either",
          "signature": "ByteString-\u003eEither String TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e into a \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e. If fails due to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Parser\",\"Data.EDN\"]",
          "name": "parseMaybe",
          "package": "hedn",
          "signature": "ByteString -\u003e Maybe TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseMaybe",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseMaybe\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:parseMaybe\"]"
        },
        "index": {
          "description": "Parse lazy ByteString into TaggedValue If fails due to incomplete or invalid input Nothing is returned",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseMaybe",
          "normalized": "ByteString-\u003eMaybe TaggedValue",
          "package": "hedn",
          "partial": "Maybe",
          "signature": "ByteString-\u003eMaybe TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a string AKA '[Char]'. Not really useful other than for debugging purposes.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseS",
          "package": "hedn",
          "signature": "[Char] -\u003e Result TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseS",
          "type": "function"
        },
        "index": {
          "description": "Parse string AKA Char Not really useful other than for debugging purposes",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseS",
          "normalized": "[Char]-\u003eResult TaggedValue",
          "package": "hedn",
          "signature": "[Char]-\u003eResult TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a strict \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseT",
          "package": "hedn",
          "signature": "Text -\u003e Result TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseT",
          "type": "function"
        },
        "index": {
          "description": "Parse strict Text",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseT",
          "normalized": "Text-\u003eResult TaggedValue",
          "package": "hedn",
          "signature": "Text-\u003eResult TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a lazy \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseTL",
          "package": "hedn",
          "signature": "Text -\u003e Result TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseTL",
          "type": "function"
        },
        "index": {
          "description": "Parse lazy Text",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseTL",
          "normalized": "Text-\u003eResult TaggedValue",
          "package": "hedn",
          "partial": "TL",
          "signature": "Text-\u003eResult TaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseTL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a probably tagged EDN value into a \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseTagged",
          "package": "hedn",
          "signature": "Parser TaggedValue",
          "source": "src/Data-EDN-Parser.html#parseTagged",
          "type": "function"
        },
        "index": {
          "description": "Parse probably tagged EDN value into TaggedValue",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseTagged",
          "package": "hedn",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseTagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a \"raw\" EDN value into a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Parser",
          "name": "parseValue",
          "package": "hedn",
          "signature": "Parser Value",
          "source": "src/Data-EDN-Parser.html#parseValue",
          "type": "function"
        },
        "index": {
          "description": "Parse raw EDN value into Value",
          "hierarchy": "Data EDN Parser",
          "module": "Data.EDN.Parser",
          "name": "parseValue",
          "package": "hedn",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Parser.html#v:parseValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "Class",
          "package": "hedn",
          "source": "src/Data-EDN-Types-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "Class",
          "package": "hedn",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from EDN, with a possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "FromEDN",
          "package": "hedn",
          "source": "src/Data-EDN-Types-Class.html#FromEDN",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from EDN with possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Map is missing required key or the value is of the wrong type",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "FromEDN",
          "package": "hedn",
          "partial": "From EDN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#t:FromEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation-based parser type.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "Parser",
          "package": "hedn",
          "source": "src/Data-Parser.html#Parser",
          "type": "data"
        },
        "index": {
          "description": "continuation-based parser type",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "Parser",
          "package": "hedn",
          "partial": "Parser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of running a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "Result",
          "package": "hedn",
          "source": "src/Data-Parser.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of running Parser",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "Result",
          "package": "hedn",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "ToEDN",
          "package": "hedn",
          "source": "src/Data-EDN-Types-Class.html#ToEDN",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "ToEDN",
          "package": "hedn",
          "partial": "To EDN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#t:ToEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for use in combination with \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e to provide default\n values for optional JSON object fields.\n\u003c/p\u003e\u003cp\u003eThis combinator is most useful if the key and value can be absent\n from an object without affecting its validity and we know a default\n value to assign in that case.  If the key and value are mandatory,\n use '(.:)' instead.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e v1 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field_with_dfl\" .!= \"default_val\"\n v2 \u003c- o \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e  \"mandatory_field\"\n v3 \u003c- o \u003ccode\u003e\u003ca\u003e.:?\u003c/a\u003e\u003c/code\u003e \"opt_field2\"\n\u003c/pre\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "(.!=)",
          "package": "hedn",
          "signature": "Parser (Maybe a) -\u003e a -\u003e Parser a",
          "source": "src/Data-EDN-Types-Class.html#.%21%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.-33--61-\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:.-33--61-\"]"
        },
        "index": {
          "description": "Helper for use in combination with to provide default values for optional JSON object fields This combinator is most useful if the key and value can be absent from an object without affecting its validity and we know default value to assign in that case If the key and value are mandatory use instead Example usage v1 opt field with dfl default val v2 mandatory field v3 opt field2",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "(.!=) .!=",
          "normalized": "Parser(Maybe a)-\u003ea-\u003eParser a",
          "package": "hedn",
          "signature": "Parser(Maybe a)-\u003ea-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.-33--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a \u003ccode\u003ePair\u003c/code\u003e from a key (as EDN keyword) and a value.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "(.=)",
          "package": "hedn",
          "signature": "ByteString -\u003e a -\u003e Pair",
          "source": "src/Data-EDN-Types-Class.html#.%3D",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.-61-\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:.-61-\"]"
        },
        "index": {
          "description": "Construct Pair from key as EDN keyword and value",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "(.=) .=",
          "normalized": "ByteString-\u003ea-\u003ePair",
          "package": "hedn",
          "signature": "ByteString-\u003ea-\u003ePair",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eEDNMap\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003eempty\u003c/code\u003e if the key is not present or the value cannot\n be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is appropriate if the key and value \u003cem\u003emust\u003c/em\u003e be present\n in an object for it to be valid. If the key and value are\n optional, use '(.:?)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "(.:)",
          "package": "hedn",
          "signature": "EDNMap -\u003e k -\u003e Parser a",
          "source": "src/Data-EDN-Types-Class.html#.%3A",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.:\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:.:\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an EDNMap The result is empty if the key is not present or the value cannot be converted to the desired type This accessor is appropriate if the key and value must be present in an object for it to be valid If the key and value are optional use instead",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "(.:) .:",
          "normalized": "EDNMap-\u003ea-\u003eParser b",
          "package": "hedn",
          "signature": "EDNMap-\u003ek-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the value associated with the given key of an \u003ccode\u003e\u003ca\u003eEDNMap\u003c/a\u003e\u003c/code\u003e.\n The result is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key is not present, or \u003ccode\u003eempty\u003c/code\u003e if\n the value cannot be converted to the desired type.\n\u003c/p\u003e\u003cp\u003eThis accessor is most useful if the key and value can be absent\n from an object without affecting its validity.  If the key and\n value are mandatory, use '(.:)' instead.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "(.:?)",
          "package": "hedn",
          "signature": "EDNMap -\u003e k -\u003e Parser (Maybe a)",
          "source": "src/Data-EDN-Types-Class.html#.%3A%3F",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.:-63-\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:.:-63-\"]"
        },
        "index": {
          "description": "Retrieve the value associated with the given key of an EDNMap The result is Nothing if the key is not present or empty if the value cannot be converted to the desired type This accessor is most useful if the key and value can be absent from an object without affecting its validity If the key and value are mandatory use instead",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "(.:?) .:?",
          "normalized": "EDNMap-\u003ea-\u003eParser(Maybe b)",
          "package": "hedn",
          "signature": "EDNMap-\u003ek-\u003eParser(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:.:-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "Error",
          "package": "hedn",
          "signature": "Error String",
          "source": "src/Data-Parser.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "Error",
          "package": "hedn",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "Success",
          "package": "hedn",
          "signature": "Success a",
          "source": "src/Data-Parser.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "Success",
          "package": "hedn",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes a EDN value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails to to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "decode",
          "package": "hedn",
          "signature": "ByteString -\u003e Maybe a",
          "source": "src/Data-EDN-Types-Class.html#decode",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:decode\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:decode\"]"
        },
        "index": {
          "description": "Deserializes EDN value from lazy ByteString If this fails to to incomplete or invalid input Nothing is returned",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "decode",
          "normalized": "ByteString-\u003eMaybe a",
          "package": "hedn",
          "signature": "ByteString-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeserializes a EDN value from a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n If this fails to to incomplete or invalid input, \u003ccode\u003e\u003ca\u003eLeft\u003c/a\u003e\u003c/code\u003e is returned\n with an error message.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "eitherDecode",
          "package": "hedn",
          "signature": "ByteString -\u003e Either String a",
          "source": "src/Data-EDN-Types-Class.html#eitherDecode",
          "type": "function"
        },
        "index": {
          "description": "Deserializes EDN value from lazy ByteString If this fails to to incomplete or invalid input Left is returned with an error message",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "eitherDecode",
          "normalized": "ByteString-\u003eEither String a",
          "package": "hedn",
          "partial": "Decode",
          "signature": "ByteString-\u003eEither String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:eitherDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value from \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e, failing if the types do not match.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "fromEDN",
          "package": "hedn",
          "signature": "TaggedValue -\u003e Result a",
          "source": "src/Data-EDN-Types-Class.html#fromEDN",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:fromEDN\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:fromEDN\"]"
        },
        "index": {
          "description": "Convert value from TaggedValue failing if the types do not match",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "fromEDN",
          "normalized": "TaggedValue-\u003eResult a",
          "package": "hedn",
          "partial": "EDN",
          "signature": "TaggedValue-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:fromEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a value from \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e, failing if the types do not match.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types.Class\",\"Data.EDN\"]",
          "name": "fromEDNv",
          "package": "hedn",
          "signature": "Value -\u003e Result a",
          "source": "src/Data-EDN-Types-Class.html#fromEDNv",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:fromEDNv\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:fromEDNv\"]"
        },
        "index": {
          "description": "Convert value from Value failing if the types do not match",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "fromEDNv",
          "normalized": "Value-\u003eResult a",
          "package": "hedn",
          "partial": "EDNv",
          "signature": "Value-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:fromEDNv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "parse",
          "package": "hedn",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Result b",
          "source": "src/Data-Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Run Parser",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "parse",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "package": "hedn",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eResult b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "parseEDN",
          "package": "hedn",
          "signature": "TaggedValue -\u003e Parser a",
          "source": "src/Data-EDN-Types-Class.html#parseEDN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "parseEDN",
          "normalized": "TaggedValue-\u003eParser a",
          "package": "hedn",
          "partial": "EDN",
          "signature": "TaggedValue-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:parseEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "parseEDNv",
          "package": "hedn",
          "signature": "Value -\u003e Parser a",
          "source": "src/Data-EDN-Types-Class.html#parseEDNv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "parseEDNv",
          "normalized": "Value-\u003eParser a",
          "package": "hedn",
          "partial": "EDNv",
          "signature": "Value-\u003eParser a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:parseEDNv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "parseEither",
          "package": "hedn",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Either String b",
          "source": "src/Data-Parser.html#parseEither",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with an Either result type",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "parseEither",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "package": "hedn",
          "partial": "Either",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eEither String b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:parseEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e with a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result type.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "parseMaybe",
          "package": "hedn",
          "signature": "(a -\u003e Parser b) -\u003e a -\u003e Maybe b",
          "source": "src/Data-Parser.html#parseMaybe",
          "type": "function"
        },
        "index": {
          "description": "Run Parser with Maybe result type",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "parseMaybe",
          "normalized": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "package": "hedn",
          "partial": "Maybe",
          "signature": "(a-\u003eParser b)-\u003ea-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:parseMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "toEDN",
          "package": "hedn",
          "signature": "a -\u003e TaggedValue",
          "source": "src/Data-EDN-Types-Class.html#toEDN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "toEDN",
          "normalized": "a-\u003eTaggedValue",
          "package": "hedn",
          "partial": "EDN",
          "signature": "a-\u003eTaggedValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:toEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types.Class",
          "name": "toEDNv",
          "package": "hedn",
          "signature": "a -\u003e Value",
          "source": "src/Data-EDN-Types-Class.html#toEDNv",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "toEDNv",
          "normalized": "a-\u003eValue",
          "package": "hedn",
          "partial": "EDNv",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:toEDNv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail parsing due to a type mismatch, with a descriptive message.\n\u003c/p\u003e",
          "module": "Data.EDN.Types.Class",
          "name": "typeMismatch",
          "package": "hedn",
          "signature": "String-\u003e Value-\u003e Parser a",
          "type": "function"
        },
        "index": {
          "description": "Fail parsing due to type mismatch with descriptive message",
          "hierarchy": "Data EDN Types Class",
          "module": "Data.EDN.Types.Class",
          "name": "typeMismatch",
          "normalized": "String-\u003eValue-\u003eParser a",
          "package": "hedn",
          "partial": "Mismatch",
          "signature": "String-\u003eValue-\u003eParser a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types-Class.html#v:typeMismatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "Types",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Types",
          "package": "hedn",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "EDNList",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#EDNList",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "EDNList",
          "package": "hedn",
          "partial": "EDNList",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:EDNList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "EDNMap",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#EDNMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "EDNMap",
          "package": "hedn",
          "partial": "EDNMap",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:EDNMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "EDNSet",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#EDNSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "EDNSet",
          "package": "hedn",
          "partial": "EDNSet",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:EDNSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "EDNVec",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#EDNVec",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "EDNVec",
          "package": "hedn",
          "partial": "EDNVec",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:EDNVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key/value pair for a EDN Map\n\u003c/p\u003e",
          "module": "Data.EDN.Types",
          "name": "Pair",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Pair",
          "type": "type"
        },
        "index": {
          "description": "key value pair for EDN Map",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Pair",
          "package": "hedn",
          "partial": "Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract namespaced tag.\n\u003c/p\u003e",
          "module": "Data.EDN.Types",
          "name": "Tagged",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Tagged",
          "type": "data"
        },
        "index": {
          "description": "Abstract namespaced tag",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Tagged",
          "package": "hedn",
          "partial": "Tagged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN.Types",
          "name": "TaggedValue",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#TaggedValue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "TaggedValue",
          "package": "hedn",
          "partial": "Tagged Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:TaggedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"raw\" EDN value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.EDN.Types",
          "name": "Value",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "raw EDN value represented as Haskell value",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Value",
          "package": "hedn",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Boolean",
          "package": "hedn",
          "signature": "Boolean !Bool",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Boolean\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Boolean\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Boolean",
          "package": "hedn",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Character",
          "package": "hedn",
          "signature": "Character !Char",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Character\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Character\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Character",
          "package": "hedn",
          "partial": "Character",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Character"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Floating",
          "package": "hedn",
          "signature": "Floating !Double",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Floating\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Floating\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Floating",
          "package": "hedn",
          "partial": "Floating",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Integer",
          "package": "hedn",
          "signature": "Integer !Integer",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Integer\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Integer\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Integer",
          "package": "hedn",
          "partial": "Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Keyword",
          "package": "hedn",
          "signature": "Keyword !ByteString",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Keyword\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Keyword\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Keyword",
          "package": "hedn",
          "partial": "Keyword",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "List",
          "package": "hedn",
          "signature": "List EDNList",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:List\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:List\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "List",
          "package": "hedn",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Map",
          "package": "hedn",
          "signature": "Map !EDNMap",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Map\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Map\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Map",
          "package": "hedn",
          "partial": "Map",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Nil",
          "package": "hedn",
          "signature": "Nil",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Nil\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Nil\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Nil",
          "package": "hedn",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "NoTag",
          "package": "hedn",
          "signature": "NoTag !a",
          "source": "src/Data-EDN-Types.html#Tagged",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:NoTag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:NoTag\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "NoTag",
          "package": "hedn",
          "partial": "No Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:NoTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Set",
          "package": "hedn",
          "signature": "Set !EDNSet",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Set\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Set\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Set",
          "package": "hedn",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "String",
          "package": "hedn",
          "signature": "String !Text",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:String\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:String\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "String",
          "package": "hedn",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Symbol",
          "package": "hedn",
          "signature": "Symbol !ByteString !ByteString",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Symbol\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Symbol\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Symbol",
          "package": "hedn",
          "partial": "Symbol",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Tagged",
          "package": "hedn",
          "signature": "Tagged !a !ByteString !ByteString",
          "source": "src/Data-EDN-Types.html#Tagged",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Tagged\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Tagged\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Tagged",
          "package": "hedn",
          "partial": "Tagged",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "Vec",
          "package": "hedn",
          "signature": "Vec !EDNVec",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Vec\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:Vec\"]"
        },
        "index": {
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "Vec",
          "package": "hedn",
          "partial": "Vec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:Vec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN boolean.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "bool",
          "package": "hedn",
          "signature": "Bool -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#bool",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:bool\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:bool\"]"
        },
        "index": {
          "description": "Basic EDN boolean",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "bool",
          "normalized": "Bool-\u003eTaggedValue",
          "package": "hedn",
          "signature": "Bool-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN character.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "char",
          "package": "hedn",
          "signature": "Char -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#char",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:char\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:char\"]"
        },
        "index": {
          "description": "Basic EDN character",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "char",
          "normalized": "Char-\u003eTaggedValue",
          "package": "hedn",
          "signature": "Char-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConst EDN False.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "false",
          "package": "hedn",
          "signature": "TaggedValue",
          "source": "src/Data-EDN-Types.html#false",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:false\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:false\"]"
        },
        "index": {
          "description": "Const EDN False",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "false",
          "package": "hedn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN fp number.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "floating",
          "package": "hedn",
          "signature": "Double -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#floating",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:floating\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:floating\"]"
        },
        "index": {
          "description": "Basic EDN fp number",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "floating",
          "normalized": "Double-\u003eTaggedValue",
          "package": "hedn",
          "signature": "Double-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:floating"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract namespace and tag from a tagged container. Will be a pair of \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e for tagless containers.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "getTag",
          "package": "hedn",
          "signature": "TaggedValue -\u003e (ByteString, ByteString)",
          "source": "src/Data-EDN-Types.html#getTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:getTag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:getTag\"]"
        },
        "index": {
          "description": "Extract namespace and tag from tagged container Will be pair of empty for tagless containers",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "getTag",
          "normalized": "TaggedValue-\u003e(ByteString,ByteString)",
          "package": "hedn",
          "partial": "Tag",
          "signature": "TaggedValue-\u003e(ByteString,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:getTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN integer.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "integer",
          "package": "hedn",
          "signature": "Integer -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#integer",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:integer\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:integer\"]"
        },
        "index": {
          "description": "Basic EDN integer",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "integer",
          "normalized": "Integer-\u003eTaggedValue",
          "package": "hedn",
          "signature": "Integer-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:integer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN keyword.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "keyword",
          "package": "hedn",
          "signature": "ByteString -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#keyword",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:keyword\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:keyword\"]"
        },
        "index": {
          "description": "Basic EDN keyword",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "keyword",
          "normalized": "ByteString-\u003eTaggedValue",
          "package": "hedn",
          "signature": "ByteString-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:keyword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an EDN \u003ccode\u003e\u003ca\u003eList\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e list wrapping them into empty tags.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "makeList",
          "package": "hedn",
          "signature": "[TaggedValue] -\u003e Value",
          "source": "src/Data-EDN-Types.html#makeList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeList\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:makeList\"]"
        },
        "index": {
          "description": "Create an EDN List from Value list wrapping them into empty tags",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "makeList",
          "normalized": "[TaggedValue]-\u003eValue",
          "package": "hedn",
          "partial": "List",
          "signature": "[TaggedValue]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an EDN \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e from a assoc list with untagged keys and tagged values.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "makeMap",
          "package": "hedn",
          "signature": "[Pair] -\u003e Value",
          "source": "src/Data-EDN-Types.html#makeMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeMap\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:makeMap\"]"
        },
        "index": {
          "description": "Create an EDN Map from assoc list with untagged keys and tagged values",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "makeMap",
          "normalized": "[Pair]-\u003eValue",
          "package": "hedn",
          "partial": "Map",
          "signature": "[Pair]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an EDN \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "makeSet",
          "package": "hedn",
          "signature": "[TaggedValue] -\u003e Value",
          "source": "src/Data-EDN-Types.html#makeSet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeSet\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:makeSet\"]"
        },
        "index": {
          "description": "Create an EDN Set from TaggedValue list",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "makeSet",
          "normalized": "[TaggedValue]-\u003eValue",
          "package": "hedn",
          "partial": "Set",
          "signature": "[TaggedValue]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an EDN \u003ccode\u003eVector\u003c/code\u003e from a \u003ccode\u003e\u003ca\u003eTaggedValue\u003c/a\u003e\u003c/code\u003e list.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "makeVec",
          "package": "hedn",
          "signature": "[TaggedValue] -\u003e Value",
          "source": "src/Data-EDN-Types.html#makeVec",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeVec\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:makeVec\"]"
        },
        "index": {
          "description": "Create an EDN Vector from TaggedValue list",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "makeVec",
          "normalized": "[TaggedValue]-\u003eValue",
          "package": "hedn",
          "partial": "Vec",
          "signature": "[TaggedValue]-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:makeVec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN nil.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "nil",
          "package": "hedn",
          "signature": "TaggedValue",
          "source": "src/Data-EDN-Types.html#nil",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:nil\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:nil\"]"
        },
        "index": {
          "description": "Basic EDN nil",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "nil",
          "package": "hedn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap a value into tagless container.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "notag",
          "package": "hedn",
          "signature": "a -\u003e Tagged a",
          "source": "src/Data-EDN-Types.html#notag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:notag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:notag\"]"
        },
        "index": {
          "description": "Wrap value into tagless container",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "notag",
          "normalized": "a-\u003eTagged a",
          "package": "hedn",
          "signature": "a-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:notag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplace a tag on a \u003ccode\u003e\u003ca\u003eTagged\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "setTag",
          "package": "hedn",
          "signature": "ByteString -\u003e ByteString -\u003e Tagged a -\u003e Tagged a",
          "source": "src/Data-EDN-Types.html#setTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:setTag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:setTag\"]"
        },
        "index": {
          "description": "Replace tag on Tagged value",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "setTag",
          "normalized": "ByteString-\u003eByteString-\u003eTagged a-\u003eTagged a",
          "package": "hedn",
          "partial": "Tag",
          "signature": "ByteString-\u003eByteString-\u003eTagged a-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:setTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBasic EDN string.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "string",
          "package": "hedn",
          "signature": "Text -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#string",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:string\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:string\"]"
        },
        "index": {
          "description": "Basic EDN string",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "string",
          "normalized": "Text-\u003eTaggedValue",
          "package": "hedn",
          "signature": "Text-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract bare value from a tagged or tagless container.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "stripTag",
          "package": "hedn",
          "signature": "Tagged a -\u003e a",
          "source": "src/Data-EDN-Types.html#stripTag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:stripTag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:stripTag\"]"
        },
        "index": {
          "description": "Extract bare value from tagged or tagless container",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "stripTag",
          "normalized": "Tagged a-\u003ea",
          "package": "hedn",
          "partial": "Tag",
          "signature": "Tagged a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:stripTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Bare\" symbol.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "symbol",
          "package": "hedn",
          "signature": "ByteString -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#symbol",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:symbol\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:symbol\"]"
        },
        "index": {
          "description": "Bare symbol",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "symbol",
          "normalized": "ByteString-\u003eTaggedValue",
          "package": "hedn",
          "signature": "ByteString-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:symbol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA namespaced symbol.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "symbolNS",
          "package": "hedn",
          "signature": "ByteString -\u003e ByteString -\u003e TaggedValue",
          "source": "src/Data-EDN-Types.html#symbolNS",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:symbolNS\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:symbolNS\"]"
        },
        "index": {
          "description": "namespaced symbol",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "symbolNS",
          "normalized": "ByteString-\u003eByteString-\u003eTaggedValue",
          "package": "hedn",
          "partial": "NS",
          "signature": "ByteString-\u003eByteString-\u003eTaggedValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:symbolNS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttach a namespaced tag to a value.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "tag",
          "package": "hedn",
          "signature": "ByteString -\u003e ByteString -\u003e a -\u003e Tagged a",
          "source": "src/Data-EDN-Types.html#tag",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:tag\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:tag\"]"
        },
        "index": {
          "description": "Attach namespaced tag to value",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "tag",
          "normalized": "ByteString-\u003eByteString-\u003ea-\u003eTagged a",
          "package": "hedn",
          "signature": "ByteString-\u003eByteString-\u003ea-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConst EDN True.\n\u003c/p\u003e",
          "module": "[\"Data.EDN.Types\",\"Data.EDN\"]",
          "name": "true",
          "package": "hedn",
          "signature": "TaggedValue",
          "source": "src/Data-EDN-Types.html#true",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:true\",\"http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:true\"]"
        },
        "index": {
          "description": "Const EDN True",
          "hierarchy": "Data EDN Types",
          "module": "Data.EDN.Types",
          "name": "true",
          "package": "hedn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN-Types.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN",
          "name": "EDN",
          "package": "hedn",
          "source": "src/Data-EDN.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "EDN",
          "package": "hedn",
          "partial": "EDN",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from EDN, with a possibility of failure.\n\u003c/p\u003e\u003cp\u003eWhen writing an instance, use \u003ccode\u003eempty\u003c/code\u003e, \u003ccode\u003emzero\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e to make a\n conversion fail, e.g. if an \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e is missing a required key, or\n the value is of the wrong type.\n\u003c/p\u003e",
          "module": "Data.EDN",
          "name": "FromEDN",
          "package": "hedn",
          "source": "src/Data-EDN-Types-Class.html#FromEDN",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from EDN with possibility of failure When writing an instance use empty mzero or fail to make conversion fail e.g if an Map is missing required key or the value is of the wrong type",
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "FromEDN",
          "package": "hedn",
          "partial": "From EDN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:FromEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA key/value pair for a EDN Map\n\u003c/p\u003e",
          "module": "Data.EDN",
          "name": "Pair",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Pair",
          "type": "type"
        },
        "index": {
          "description": "key value pair for EDN Map",
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "Pair",
          "package": "hedn",
          "partial": "Pair",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:Pair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract namespaced tag.\n\u003c/p\u003e",
          "module": "Data.EDN",
          "name": "Tagged",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Tagged",
          "type": "data"
        },
        "index": {
          "description": "Abstract namespaced tag",
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "Tagged",
          "package": "hedn",
          "partial": "Tagged",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN",
          "name": "TaggedValue",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#TaggedValue",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "TaggedValue",
          "package": "hedn",
          "partial": "Tagged Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:TaggedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted to JSON.\n\u003c/p\u003e",
          "module": "Data.EDN",
          "name": "ToEDN",
          "package": "hedn",
          "source": "src/Data-EDN-Types-Class.html#ToEDN",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted to JSON",
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "ToEDN",
          "package": "hedn",
          "partial": "To EDN",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:ToEDN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \"raw\" EDN value represented as a Haskell value.\n\u003c/p\u003e",
          "module": "Data.EDN",
          "name": "Value",
          "package": "hedn",
          "source": "src/Data-EDN-Types.html#Value",
          "type": "data"
        },
        "index": {
          "description": "raw EDN value represented as Haskell value",
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "Value",
          "package": "hedn",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EDN",
          "name": "toEDN",
          "package": "hedn",
          "signature": "a -\u003e TaggedValue",
          "source": "src/Data-EDN-Types-Class.html#toEDN",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data EDN",
          "module": "Data.EDN",
          "name": "toEDN",
          "normalized": "a-\u003eTaggedValue",
          "package": "hedn",
          "partial": "EDN",
          "signature": "a-\u003eTaggedValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hedn/docs/Data-EDN.html#v:toEDN"
      }
    }
  ]
]