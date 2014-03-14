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
        "word": "pem"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead and write PEM files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "source": "src/Data-PEM.html",
          "type": "module"
        },
        "index": {
          "description": "Read and write PEM files",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "partial": "PEM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresent one PEM section\n\u003c/p\u003e\u003cp\u003efor now headers are not serialized at all.\n this is just available here as a placeholder for a later implementation.\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "source": "src/Data-PEM-Types.html#PEM",
          "type": "data"
        },
        "index": {
          "description": "Represent one PEM section for now headers are not serialized at all this is just available here as placeholder for later implementation",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "partial": "PEM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#t:PEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "signature": "PEM",
          "source": "src/Data-PEM-Types.html#PEM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "PEM",
          "package": "pem",
          "partial": "PEM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:PEM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebinary content of the section\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemContent",
          "package": "pem",
          "signature": "ByteString",
          "source": "src/Data-PEM-Types.html#PEM",
          "type": "function"
        },
        "index": {
          "description": "binary content of the section",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemContent",
          "package": "pem",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptionals key value pair header\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemHeader",
          "package": "pem",
          "signature": "[(String, ByteString)]",
          "source": "src/Data-PEM-Types.html#PEM",
          "type": "function"
        },
        "index": {
          "description": "optionals key value pair header",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemHeader",
          "normalized": "[(String,ByteString)]",
          "package": "pem",
          "partial": "Header",
          "signature": "[(String,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe name of the section, found after the dash BEGIN tag.\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemName",
          "package": "pem",
          "signature": "String",
          "source": "src/Data-PEM-Types.html#PEM",
          "type": "function"
        },
        "index": {
          "description": "the name of the section found after the dash BEGIN tag",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemName",
          "package": "pem",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a PEM content using a strict bytestring\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemParseBS",
          "package": "pem",
          "signature": "ByteString -\u003e Either String [PEM]",
          "source": "src/Data-PEM-Parser.html#pemParseBS",
          "type": "function"
        },
        "index": {
          "description": "parse PEM content using strict bytestring",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemParseBS",
          "normalized": "ByteString-\u003eEither String[PEM]",
          "package": "pem",
          "partial": "Parse BS",
          "signature": "ByteString-\u003eEither String[PEM]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemParseBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a PEM content using a dynamic bytestring\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemParseLBS",
          "package": "pem",
          "signature": "ByteString -\u003e Either String [PEM]",
          "source": "src/Data-PEM-Parser.html#pemParseLBS",
          "type": "function"
        },
        "index": {
          "description": "parse PEM content using dynamic bytestring",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemParseLBS",
          "normalized": "ByteString-\u003eEither String[PEM]",
          "package": "pem",
          "partial": "Parse LBS",
          "signature": "ByteString-\u003eEither String[PEM]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemParseLBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a PEM structure to a bytestring\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemWriteBS",
          "package": "pem",
          "signature": "PEM -\u003e ByteString",
          "source": "src/Data-PEM-Writer.html#pemWriteBS",
          "type": "function"
        },
        "index": {
          "description": "convert PEM structure to bytestring",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemWriteBS",
          "normalized": "PEM-\u003eByteString",
          "package": "pem",
          "partial": "Write BS",
          "signature": "PEM-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemWriteBS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a PEM structure to a lazy bytestring\n\u003c/p\u003e",
          "module": "Data.PEM",
          "name": "pemWriteLBS",
          "package": "pem",
          "signature": "PEM -\u003e ByteString",
          "source": "src/Data-PEM-Writer.html#pemWriteLBS",
          "type": "function"
        },
        "index": {
          "description": "convert PEM structure to lazy bytestring",
          "hierarchy": "Data PEM",
          "module": "Data.PEM",
          "name": "pemWriteLBS",
          "normalized": "PEM-\u003eByteString",
          "package": "pem",
          "partial": "Write LBS",
          "signature": "PEM-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pem/docs/Data-PEM.html#v:pemWriteLBS"
      }
    }
  ]
]