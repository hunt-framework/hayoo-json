[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains a couple functions copied from Data.Csv.Encoding\n    that weren't exported. This file can be removed once they are.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Csv.Encoding",
        "fct-package": "pipes-csv",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Csv-Encoding.html",
        "fct-type": "module",
        "title": "Encoding"
      },
      "index": {
        "description": "This module contains couple functions copied from Data.Csv.Encoding that weren exported This file can be removed once they are",
        "hierarchy": "Pipes Csv Encoding",
        "module": "Pipes.Csv.Encoding",
        "name": "Encoding",
        "normalized": "",
        "package": "pipes-csv",
        "partial": "Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#v:encodeRecord",
      "description": {
        "fct-module": "Pipes.Csv.Encoding",
        "fct-package": "pipes-csv",
        "fct-signature": "Word8 -\u003e Record -\u003e Builder",
        "fct-source": "src/Pipes-Csv-Encoding.html#encodeRecord",
        "fct-type": "function",
        "title": "encodeRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Csv Encoding",
        "module": "Pipes.Csv.Encoding",
        "name": "encodeRecord",
        "normalized": "Word-\u003eRecord-\u003eBuilder",
        "package": "pipes-csv",
        "partial": "Record",
        "signature": "Word-\u003eRecord-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv-Encoding.html#v:namedRecordToRecord",
      "description": {
        "fct-module": "Pipes.Csv.Encoding",
        "fct-package": "pipes-csv",
        "fct-signature": "Header -\u003e NamedRecord -\u003e Record",
        "fct-source": "src/Pipes-Csv-Encoding.html#namedRecordToRecord",
        "fct-type": "function",
        "title": "namedRecordToRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Pipes Csv Encoding",
        "module": "Pipes.Csv.Encoding",
        "name": "namedRecordToRecord",
        "normalized": "Header-\u003eNamedRecord-\u003eRecord",
        "package": "pipes-csv",
        "partial": "Record To Record",
        "signature": "Header-\u003eNamedRecord-\u003eRecord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module allows constant-space CSV parsing.\n\u003c/p\u003e\u003cp\u003eIt feeds \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into cassavas incremental CSV parser to attain true\n    constant-space record streaming.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "module",
        "fct-source": "src/Pipes-Csv.html",
        "fct-type": "module",
        "title": "Csv"
      },
      "index": {
        "description": "This module allows constant-space CSV parsing It feeds ByteString into cassavas incremental CSV parser to attain true constant-space record streaming",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "Csv",
        "normalized": "",
        "package": "pipes-csv",
        "partial": "Csv",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "Bool -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Equivalent to decodeWith defaultDecodeOptions",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "decode",
        "normalized": "Bool-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
        "package": "pipes-csv",
        "partial": "",
        "signature": "Bool-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ccode\u003e\u003ca\u003edecodeByNameWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003edefaultDecodeOptions\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#decodeByName",
        "fct-type": "function",
        "title": "decodeByName"
      },
      "index": {
        "description": "Equivalent to decodeByNameWith defaultDecodeOptions",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "decodeByName",
        "normalized": "Producer ByteString a()-\u003eProducer(Either String b)a()",
        "package": "pipes-csv",
        "partial": "By Name",
        "signature": "Producer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e as input,\n producing either errors or \u003ccode\u003e\u003ca\u003eFromNamedRecord\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "DecodeOptions -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#decodeByNameWith",
        "fct-type": "function",
        "title": "decodeByNameWith"
      },
      "index": {
        "description": "Create Producer that takes ByteString Producer as input producing either errors or FromNamedRecord",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "decodeByNameWith",
        "normalized": "DecodeOptions-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
        "package": "pipes-csv",
        "partial": "By Name With",
        "signature": "DecodeOptions-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:decodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e that takes a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e as input,\n producing either errors or \u003ccode\u003e\u003ca\u003eFromRecord\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "DecodeOptions -\u003e Bool -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#decodeWith",
        "fct-type": "function",
        "title": "decodeWith"
      },
      "index": {
        "description": "Create Producer that takes ByteString Producer as input producing either errors or FromRecord",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "decodeWith",
        "normalized": "DecodeOptions-\u003eBool-\u003eProducer ByteString a()-\u003eProducer(Either String b)a()",
        "package": "pipes-csv",
        "partial": "With",
        "signature": "DecodeOptions-\u003eBool-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "forall r.  Pipe a ByteString m r",
        "fct-source": "src/Pipes-Csv.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode records as strict ByteString",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "encode",
        "normalized": "",
        "package": "pipes-csv",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeByName",
      "description": {
        "fct-descr": "\u003cp\u003eEncode named records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "Header -\u003e forall r.  Pipe a ByteString m r",
        "fct-source": "src/Pipes-Csv.html#encodeByName",
        "fct-type": "function",
        "title": "encodeByName"
      },
      "index": {
        "description": "Encode named records as strict ByteString",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "encodeByName",
        "normalized": "Header-\u003ea b Pipe c ByteString d e",
        "package": "pipes-csv",
        "partial": "By Name",
        "signature": "Header-\u003eforall r. Pipe a ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeByNameWith",
      "description": {
        "fct-descr": "\u003cp\u003eEncode named records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "EncodeOptions -\u003e Header -\u003e forall r.  Pipe a ByteString m r",
        "fct-source": "src/Pipes-Csv.html#encodeByNameWith",
        "fct-type": "function",
        "title": "encodeByNameWith"
      },
      "index": {
        "description": "Encode named records as strict ByteString",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "encodeByNameWith",
        "normalized": "EncodeOptions-\u003eHeader-\u003ea b Pipe c ByteString d e",
        "package": "pipes-csv",
        "partial": "By Name With",
        "signature": "EncodeOptions-\u003eHeader-\u003eforall r. Pipe a ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:encodeWith",
      "description": {
        "fct-descr": "\u003cp\u003eEncode records as strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "EncodeOptions -\u003e forall r.  Pipe a ByteString m r",
        "fct-source": "src/Pipes-Csv.html#encodeWith",
        "fct-type": "function",
        "title": "encodeWith"
      },
      "index": {
        "description": "Encode records as strict ByteString",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "encodeWith",
        "normalized": "EncodeOptions-\u003ea b Pipe c ByteString d e",
        "package": "pipes-csv",
        "partial": "With",
        "signature": "EncodeOptions-\u003eforall r. Pipe a ByteString m r"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:feedHeaderParser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a NamedRecord \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by feeding \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "HeaderParser (Parser a) -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#feedHeaderParser",
        "fct-type": "function",
        "title": "feedHeaderParser"
      },
      "index": {
        "description": "Create NamedRecord Producer by feeding ByteString into Parser",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "feedHeaderParser",
        "normalized": "HeaderParser(Parser a)-\u003eProducer ByteString b()-\u003eProducer(Either String a)b()",
        "package": "pipes-csv",
        "partial": "Header Parser",
        "signature": "HeaderParser(Parser a)-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pipes-csv/docs/Pipes-Csv.html#v:feedParser",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a Record \u003ccode\u003e\u003ca\u003eProducer\u003c/a\u003e\u003c/code\u003e by feeding \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es into a \u003ccode\u003e\u003ca\u003eParser\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Pipes.Csv",
        "fct-package": "pipes-csv",
        "fct-signature": "Parser a -\u003e Producer ByteString m () -\u003e Producer (Either String a) m ()",
        "fct-source": "src/Pipes-Csv.html#feedParser",
        "fct-type": "function",
        "title": "feedParser"
      },
      "index": {
        "description": "Create Record Producer by feeding ByteString into Parser",
        "hierarchy": "Pipes Csv",
        "module": "Pipes.Csv",
        "name": "feedParser",
        "normalized": "Parser a-\u003eProducer ByteString b()-\u003eProducer(Either String a)b()",
        "package": "pipes-csv",
        "partial": "Parser",
        "signature": "Parser a-\u003eProducer ByteString m()-\u003eProducer(Either String a)m()"
      }
    }
  }
]