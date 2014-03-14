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
        "word": "delimited-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse text files containing lines with records separated by character\n delimiters.\n\u003c/p\u003e\u003cp\u003eAt this time parsing is only supported for lazy \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.Delimited",
          "name": "Delimited",
          "package": "delimited-text",
          "source": "src/Text-Delimited.html",
          "type": "module"
        },
        "index": {
          "description": "Parse text files containing lines with records separated by character delimiters At this time parsing is only supported for lazy ByteString",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "Delimited",
          "package": "delimited-text",
          "partial": "Delimited",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA delimited file is a series of variable length records.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "Content",
          "package": "delimited-text",
          "source": "src/Text-Delimited-Types.html#Content",
          "type": "type"
        },
        "index": {
          "description": "delimited file is series of variable length records",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "Content",
          "package": "delimited-text",
          "partial": "Content",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA field is a strict ByteString.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "Field",
          "package": "delimited-text",
          "source": "src/Text-Delimited-Types.html#Field",
          "type": "type"
        },
        "index": {
          "description": "field is strict ByteString",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "Field",
          "package": "delimited-text",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA record is a series of fields.\n Each record is located on a separate line, delimited by a line break (CRLF).\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "Record",
          "package": "delimited-text",
          "source": "src/Text-Delimited-Types.html#Record",
          "type": "type"
        },
        "index": {
          "description": "record is series of fields Each record is located on separate line delimited by line break CRLF",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "Record",
          "package": "delimited-text",
          "partial": "Record",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Record"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult type.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "Result",
          "package": "delimited-text",
          "source": "src/Text-Delimited-Types.html#Result",
          "type": "type"
        },
        "index": {
          "description": "Result type",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "Result",
          "package": "delimited-text",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse records separated by newlines from a ByteString.\n Record fields are separated by any of the characters in \u003ccode\u003edelims\u003c/code\u003e. There is\n no way of escaping delimiters, so record fields may not contain any of the\n characters in \u003ccode\u003edelims\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "decode",
          "package": "delimited-text",
          "signature": "[Char] -\u003e ByteString -\u003e Result Content",
          "source": "src/Text-Delimited-ByteString-Lazy.html#decode",
          "type": "function"
        },
        "index": {
          "description": "Parse records separated by newlines from ByteString Record fields are separated by any of the characters in delims There is no way of escaping delimiters so record fields may not contain any of the characters in delims",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "decode",
          "normalized": "[Char]-\u003eByteString-\u003eResult Content",
          "package": "delimited-text",
          "signature": "[Char]-\u003eByteString-\u003eResult Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:decode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode records separated by newlines to a ByteString.\n Record fields are separated by \u003ccode\u003edelim\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "encode",
          "package": "delimited-text",
          "signature": "Char -\u003e Content -\u003e ByteString",
          "source": "src/Text-Delimited-ByteString-Lazy.html#encode",
          "type": "function"
        },
        "index": {
          "description": "Encode records separated by newlines to ByteString Record fields are separated by delim",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "encode",
          "normalized": "Char-\u003eContent-\u003eByteString",
          "package": "delimited-text",
          "signature": "Char-\u003eContent-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a ByteString, apply a function to each \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e and encode the content.\n Delimiters may contain multiple characters but only the first is used for\n encoding.\n\u003c/p\u003e",
          "module": "Text.Delimited",
          "name": "interact",
          "package": "delimited-text",
          "signature": "(Record -\u003e Record) -\u003e [Char] -\u003e ByteString -\u003e Result ByteString",
          "source": "src/Text-Delimited-ByteString-Lazy.html#interact",
          "type": "function"
        },
        "index": {
          "description": "Decode ByteString apply function to each Record and encode the content Delimiters may contain multiple characters but only the first is used for encoding",
          "hierarchy": "Text Delimited",
          "module": "Text.Delimited",
          "name": "interact",
          "normalized": "(Record-\u003eRecord)-\u003e[Char]-\u003eByteString-\u003eResult ByteString",
          "package": "delimited-text",
          "signature": "(Record-\u003eRecord)-\u003e[Char]-\u003eByteString-\u003eResult ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:interact"
      }
    }
  ]
]