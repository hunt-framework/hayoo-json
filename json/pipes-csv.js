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
        "word": "pipes-csv"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a couple functions copied from Data.Csv.Encoding\n    that weren't exported. This file can be removed once they are.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Csv.Encoding",
          "name": "Encoding",
          "package": "pipes-csv",
          "source": "src/Pipes-Csv-Encoding.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains couple functions copied from Data.Csv.Encoding that weren exported This file can be removed once they are",
          "hierarchy": "Pipes Csv Encoding",
          "module": "Pipes.Csv.Encoding",
          "name": "Encoding",
          "package": "pipes-csv",
          "partial": "Encoding",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Csv.Encoding",
          "name": "encodeRecord",
          "package": "pipes-csv",
          "signature": "Word8 -\u003e Record -\u003e Builder",
          "source": "src/Pipes-Csv-Encoding.html#encodeRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Csv Encoding",
          "module": "Pipes.Csv.Encoding",
          "name": "encodeRecord",
          "normalized": "Word-\u003eRecord-\u003eBuilder",
          "package": "pipes-csv",
          "partial": "Record",
          "signature": "Word-\u003eRecord-\u003eBuilder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#v:encodeRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Pipes.Csv.Encoding",
          "name": "namedRecordToRecord",
          "package": "pipes-csv",
          "signature": "Header -\u003e NamedRecord -\u003e Record",
          "source": "src/Pipes-Csv-Encoding.html#namedRecordToRecord",
          "type": "function"
        },
        "index": {
          "hierarchy": "Pipes Csv Encoding",
          "module": "Pipes.Csv.Encoding",
          "name": "namedRecordToRecord",
          "normalized": "Header-\u003eNamedRecord-\u003eRecord",
          "package": "pipes-csv",
          "partial": "Record To Record",
          "signature": "Header-\u003eNamedRecord-\u003eRecord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#v:namedRecordToRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows constant-space CSV parsing.\n\u003c/p\u003e\u003cp\u003eIt feeds \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into cassavas incremental CSV parser to attain true\n    constant-space record streaming.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Pipes.Csv",
          "name": "Csv",
          "package": "pipes-csv",
          "source": "src/Pipes-Csv.html",
          "type": "module"
        },
        "index": {
          "description": "This module allows constant-space CSV parsing It feeds ByteString into cassavas incremental CSV parser to attain true constant-space record streaming",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "Csv",
          "package": "pipes-csv",
          "partial": "Csv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "decode",
          "package": "pipes-csv",
          "signature": "Bool -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to decodeWith defaultDecodeOptions",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "decode",
          "normalized": "Bool-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
          "package": "pipes-csv",
          "signature": "Bool-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "decodeByName",
          "package": "pipes-csv",
          "signature": "Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#decodeByName",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to decodeByNameWith defaultDecodeOptions",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "decodeByName",
          "normalized": "Producer ByteString a()-\u003eProducer(Either String b)a()",
          "package": "pipes-csv",
          "partial": "By Name",
          "signature": "Producer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e as input,\n producing either errors or \u003ccode\u003e\u003ca\u003eFromNamedRecord\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "decodeByNameWith",
          "package": "pipes-csv",
          "signature": "DecodeOptions -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#decodeByNameWith",
          "type": "function"
        },
        "index": {
          "description": "Create Producer that takes ByteString Producer as input producing either errors or FromNamedRecord",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "decodeByNameWith",
          "normalized": "DecodeOptions-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
          "package": "pipes-csv",
          "partial": "By Name With",
          "signature": "DecodeOptions-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e as input,\n producing either errors or \u003ccode\u003e\u003ca\u003eFromRecord\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "decodeWith",
          "package": "pipes-csv",
          "signature": "DecodeOptions -\u003e Bool -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#decodeWith",
          "type": "function"
        },
        "index": {
          "description": "Create Producer that takes ByteString Producer as input producing either errors or FromRecord",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "decodeWith",
          "normalized": "DecodeOptions-\u003eBool-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
          "package": "pipes-csv",
          "partial": "With",
          "signature": "DecodeOptions-\u003eBool-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "encode",
          "package": "pipes-csv",
          "signature": "forall r.  Pipe a ByteString m r",
          "source": "src/Pipes-Csv.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode records as strict ByteString",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "encode",
          "package": "pipes-csv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode named records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "encodeByName",
          "package": "pipes-csv",
          "signature": "Header -\u003e forall r.  Pipe a ByteString m r",
          "source": "src/Pipes-Csv.html#encodeByName",
          "type": "function"
        },
        "index": {
          "description": "Encode named records as strict ByteString",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "encodeByName",
          "normalized": "Header-\u003ea b Pipe c ByteString d e",
          "package": "pipes-csv",
          "partial": "By Name",
          "signature": "Header-\u003eforall r. Pipe a ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode named records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "encodeByNameWith",
          "package": "pipes-csv",
          "signature": "EncodeOptions -\u003e Header -\u003e forall r.  Pipe a ByteString m r",
          "source": "src/Pipes-Csv.html#encodeByNameWith",
          "type": "function"
        },
        "index": {
          "description": "Encode named records as strict ByteString",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "encodeByNameWith",
          "normalized": "EncodeOptions-\u003eHeader-\u003ea b Pipe c ByteString d e",
          "package": "pipes-csv",
          "partial": "By Name With",
          "signature": "EncodeOptions-\u003eHeader-\u003eforall r. Pipe a ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeByNameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "encodeWith",
          "package": "pipes-csv",
          "signature": "EncodeOptions -\u003e forall r.  Pipe a ByteString m r",
          "source": "src/Pipes-Csv.html#encodeWith",
          "type": "function"
        },
        "index": {
          "description": "Encode records as strict ByteString",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "encodeWith",
          "normalized": "EncodeOptions-\u003ea b Pipe c ByteString d e",
          "package": "pipes-csv",
          "partial": "With",
          "signature": "EncodeOptions-\u003eforall r. Pipe a ByteString m r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a NamedRecord \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by feeding \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "feedHeaderParser",
          "package": "pipes-csv",
          "signature": "HeaderParser (Parser a) -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#feedHeaderParser",
          "type": "function"
        },
        "index": {
          "description": "Create NamedRecord Producer by feeding ByteString into Parser",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "feedHeaderParser",
          "normalized": "HeaderParser(Parser a)-\u003eProducer ByteString b()-\u003eProducer(Either String a)b()",
          "package": "pipes-csv",
          "partial": "Header Parser",
          "signature": "HeaderParser(Parser a)-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:feedHeaderParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Record \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by feeding \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Pipes.Csv",
          "name": "feedParser",
          "package": "pipes-csv",
          "signature": "Parser a -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
          "source": "src/Pipes-Csv.html#feedParser",
          "type": "function"
        },
        "index": {
          "description": "Create Record Producer by feeding ByteString into Parser",
          "hierarchy": "Pipes Csv",
          "module": "Pipes.Csv",
          "name": "feedParser",
          "normalized": "Parser a-\u003eProducer ByteString b()-\u003eProducer(Either String a)b()",
          "package": "pipes-csv",
          "partial": "Parser",
          "signature": "Parser a-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:feedParser"
      }
    }
  ]
]