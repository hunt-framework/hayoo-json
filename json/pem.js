[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write PEM files\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "module",
        "fct-source": "src/Data-PEM.html",
        "fct-type": "module",
        "title": "PEM"
      },
      "index": {
        "description": "Read and write PEM files",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "PEM",
        "normalized": "",
        "package": "pem",
        "partial": "PEM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#t:PEM",
      "description": {
        "fct-descr": "\u003cp\u003eRepresent one PEM section\n\u003c/p\u003e\u003cp\u003efor now headers are not serialized at all.\n this is just available here as a placeholder for a later implementation.\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "data",
        "fct-source": "src/Data-PEM-Types.html#PEM",
        "fct-type": "data",
        "title": "PEM"
      },
      "index": {
        "description": "Represent one PEM section for now headers are not serialized at all this is just available here as placeholder for later implementation",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "PEM",
        "normalized": "",
        "package": "pem",
        "partial": "PEM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:PEM",
      "description": {
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "PEM",
        "fct-source": "src/Data-PEM-Types.html#PEM",
        "fct-type": "function",
        "title": "PEM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "PEM",
        "normalized": "",
        "package": "pem",
        "partial": "PEM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemContent",
      "description": {
        "fct-descr": "\u003cp\u003ebinary content of the section\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "ByteString",
        "fct-source": "src/Data-PEM-Types.html#PEM",
        "fct-type": "function",
        "title": "pemContent"
      },
      "index": {
        "description": "binary content of the section",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemContent",
        "normalized": "",
        "package": "pem",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemHeader",
      "description": {
        "fct-descr": "\u003cp\u003eoptionals key value pair header\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "[(String, ByteString)]",
        "fct-source": "src/Data-PEM-Types.html#PEM",
        "fct-type": "function",
        "title": "pemHeader"
      },
      "index": {
        "description": "optionals key value pair header",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemHeader",
        "normalized": "[(String,ByteString)]",
        "package": "pem",
        "partial": "Header",
        "signature": "[(String,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemName",
      "description": {
        "fct-descr": "\u003cp\u003ethe name of the section, found after the dash BEGIN tag.\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "String",
        "fct-source": "src/Data-PEM-Types.html#PEM",
        "fct-type": "function",
        "title": "pemName"
      },
      "index": {
        "description": "the name of the section found after the dash BEGIN tag",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemName",
        "normalized": "",
        "package": "pem",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemParseBS",
      "description": {
        "fct-descr": "\u003cp\u003eparse a PEM content using a strict bytestring\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "ByteString -\u003e Either String [PEM]",
        "fct-source": "src/Data-PEM-Parser.html#pemParseBS",
        "fct-type": "function",
        "title": "pemParseBS"
      },
      "index": {
        "description": "parse PEM content using strict bytestring",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemParseBS",
        "normalized": "ByteString-\u003eEither String[PEM]",
        "package": "pem",
        "partial": "Parse BS",
        "signature": "ByteString-\u003eEither String[PEM]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemParseLBS",
      "description": {
        "fct-descr": "\u003cp\u003eparse a PEM content using a dynamic bytestring\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "ByteString -\u003e Either String [PEM]",
        "fct-source": "src/Data-PEM-Parser.html#pemParseLBS",
        "fct-type": "function",
        "title": "pemParseLBS"
      },
      "index": {
        "description": "parse PEM content using dynamic bytestring",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemParseLBS",
        "normalized": "ByteString-\u003eEither String[PEM]",
        "package": "pem",
        "partial": "Parse LBS",
        "signature": "ByteString-\u003eEither String[PEM]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemWriteBS",
      "description": {
        "fct-descr": "\u003cp\u003econvert a PEM structure to a bytestring\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "PEM -\u003e ByteString",
        "fct-source": "src/Data-PEM-Writer.html#pemWriteBS",
        "fct-type": "function",
        "title": "pemWriteBS"
      },
      "index": {
        "description": "convert PEM structure to bytestring",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemWriteBS",
        "normalized": "PEM-\u003eByteString",
        "package": "pem",
        "partial": "Write BS",
        "signature": "PEM-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemWriteLBS",
      "description": {
        "fct-descr": "\u003cp\u003econvert a PEM structure to a lazy bytestring\n\u003c/p\u003e",
        "fct-module": "Data.PEM",
        "fct-package": "pem",
        "fct-signature": "PEM -\u003e ByteString",
        "fct-source": "src/Data-PEM-Writer.html#pemWriteLBS",
        "fct-type": "function",
        "title": "pemWriteLBS"
      },
      "index": {
        "description": "convert PEM structure to lazy bytestring",
        "hierarchy": "Data PEM",
        "module": "Data.PEM",
        "name": "pemWriteLBS",
        "normalized": "PEM-\u003eByteString",
        "package": "pem",
        "partial": "Write LBS",
        "signature": "PEM-\u003eByteString"
      }
    }
  }
]