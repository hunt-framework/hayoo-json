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
        "word": "idna"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the two algorithms from RFC 3490. (\u003ca\u003ehttp://tools.ietf.org/html/rfc3490\u003c/a\u003e)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.IDNA",
          "name": "IDNA",
          "package": "idna",
          "source": "src/Text-IDNA.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the two algorithms from RFC http tools.ietf.org html rfc3490",
          "hierarchy": "Text IDNA",
          "module": "Text.IDNA",
          "name": "IDNA",
          "package": "idna",
          "partial": "IDNA",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/idna/docs/Text-IDNA.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe ASCII Compatible Encoding prefix (currently '\u003ccode\u003exn--\u003c/code\u003e').\n\u003c/p\u003e",
          "module": "Text.IDNA",
          "name": "acePrefix",
          "package": "idna",
          "signature": "Text",
          "source": "src/Text-IDNA.html#acePrefix",
          "type": "function"
        },
        "index": {
          "description": "The ASCII Compatible Encoding prefix currently xn",
          "hierarchy": "Text IDNA",
          "module": "Text.IDNA",
          "name": "acePrefix",
          "package": "idna",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idna/docs/Text-IDNA.html#v:acePrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImplements the ToASCII algorithm.\n\u003c/p\u003e",
          "module": "Text.IDNA",
          "name": "toASCII",
          "package": "idna",
          "signature": "Bool-\u003e Bool-\u003e Text-\u003e Maybe Text",
          "type": "function"
        },
        "index": {
          "description": "Implements the ToASCII algorithm",
          "hierarchy": "Text IDNA",
          "module": "Text.IDNA",
          "name": "toASCII",
          "normalized": "Bool-\u003eBool-\u003eText-\u003eMaybe Text",
          "package": "idna",
          "partial": "ASCII",
          "signature": "Bool-\u003eBool-\u003eText-\u003eMaybe Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idna/docs/Text-IDNA.html#v:toASCII"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.IDNA",
          "name": "toUnicode",
          "package": "idna",
          "signature": "Bool-\u003e Bool-\u003e Text-\u003e Text",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text IDNA",
          "module": "Text.IDNA",
          "name": "toUnicode",
          "normalized": "Bool-\u003eBool-\u003eText-\u003eText",
          "package": "idna",
          "partial": "Unicode",
          "signature": "Bool-\u003eBool-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/idna/docs/Text-IDNA.html#v:toUnicode"
      }
    }
  ]
]