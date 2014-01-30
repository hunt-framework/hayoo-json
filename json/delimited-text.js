[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse text files containing lines with records separated by character\n delimiters.\n\u003c/p\u003e\u003cp\u003eAt this time parsing is only supported for lazy \u003ccode\u003eByteString\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "module",
        "fct-source": "src/Text-Delimited.html",
        "fct-type": "module",
        "title": "Delimited"
      },
      "index": {
        "description": "Parse text files containing lines with records separated by character delimiters At this time parsing is only supported for lazy ByteString",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "Delimited",
        "normalized": "",
        "package": "delimited-text",
        "partial": "Delimited",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Content",
      "description": {
        "fct-descr": "\u003cp\u003eA delimited file is a series of variable length records.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "type",
        "fct-source": "src/Text-Delimited-Types.html#Content",
        "fct-type": "type",
        "title": "Content"
      },
      "index": {
        "description": "delimited file is series of variable length records",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "Content",
        "normalized": "",
        "package": "delimited-text",
        "partial": "Content",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Field",
      "description": {
        "fct-descr": "\u003cp\u003eA field is a strict ByteString.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "type",
        "fct-source": "src/Text-Delimited-Types.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "field is strict ByteString",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "Field",
        "normalized": "",
        "package": "delimited-text",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Record",
      "description": {
        "fct-descr": "\u003cp\u003eA record is a series of fields.\n Each record is located on a separate line, delimited by a line break (CRLF).\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "type",
        "fct-source": "src/Text-Delimited-Types.html#Record",
        "fct-type": "type",
        "title": "Record"
      },
      "index": {
        "description": "record is series of fields Each record is located on separate line delimited by line break CRLF",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "Record",
        "normalized": "",
        "package": "delimited-text",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult type.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "type",
        "fct-source": "src/Text-Delimited-Types.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "Result type",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "Result",
        "normalized": "",
        "package": "delimited-text",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eParse records separated by newlines from a ByteString.\n Record fields are separated by any of the characters in \u003ccode\u003edelims\u003c/code\u003e. There is\n no way of escaping delimiters, so record fields may not contain any of the\n characters in \u003ccode\u003edelims\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "[Char] -\u003e ByteString -\u003e Result Content",
        "fct-source": "src/Text-Delimited-ByteString-Lazy.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Parse records separated by newlines from ByteString Record fields are separated by any of the characters in delims There is no way of escaping delimiters so record fields may not contain any of the characters in delims",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "decode",
        "normalized": "[Char]-\u003eByteString-\u003eResult Content",
        "package": "delimited-text",
        "partial": "",
        "signature": "[Char]-\u003eByteString-\u003eResult Content"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode records separated by newlines to a ByteString.\n Record fields are separated by \u003ccode\u003edelim\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "Char -\u003e Content -\u003e ByteString",
        "fct-source": "src/Text-Delimited-ByteString-Lazy.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode records separated by newlines to ByteString Record fields are separated by delim",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "encode",
        "normalized": "Char-\u003eContent-\u003eByteString",
        "package": "delimited-text",
        "partial": "",
        "signature": "Char-\u003eContent-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/delimited-text/docs/Text-Delimited.html#v:interact",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a ByteString, apply a function to each \u003ccode\u003e\u003ca\u003eRecord\u003c/a\u003e\u003c/code\u003e and encode the content.\n Delimiters may contain multiple characters but only the first is used for\n encoding.\n\u003c/p\u003e",
        "fct-module": "Text.Delimited",
        "fct-package": "delimited-text",
        "fct-signature": "(Record -\u003e Record) -\u003e [Char] -\u003e ByteString -\u003e Result ByteString",
        "fct-source": "src/Text-Delimited-ByteString-Lazy.html#interact",
        "fct-type": "function",
        "title": "interact"
      },
      "index": {
        "description": "Decode ByteString apply function to each Record and encode the content Delimiters may contain multiple characters but only the first is used for encoding",
        "hierarchy": "Text Delimited",
        "module": "Text.Delimited",
        "name": "interact",
        "normalized": "(Record-\u003eRecord)-\u003e[Char]-\u003eByteString-\u003eResult ByteString",
        "package": "delimited-text",
        "partial": "",
        "signature": "(Record-\u003eRecord)-\u003e[Char]-\u003eByteString-\u003eResult ByteString"
      }
    }
  }
]