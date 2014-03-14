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
        "word": "husk-scheme-libs"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis file implements an interface to Text.JSON that may\nbe called directly from husk using the FFI.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "JSON",
          "package": "husk-scheme-libs",
          "source": "src/Language-Scheme-Plugins-JSON.html",
          "type": "module"
        },
        "index": {
          "description": "This file implements an interface to Text.JSON that may be called directly from husk using the FFI",
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "JSON",
          "package": "husk-scheme-libs",
          "partial": "JSON",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Plugins.JSON",
          "name": "_test",
          "package": "husk-scheme-libs",
          "signature": "IO ()",
          "source": "src/Language-Scheme-Plugins-JSON.html#_test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "_test",
          "normalized": "IO()",
          "package": "husk-scheme-libs",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:_test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Language.Scheme.Plugins.JSON",
          "name": "_testDecodeEncode",
          "package": "husk-scheme-libs",
          "signature": "String -\u003e IO ()",
          "source": "src/Language-Scheme-Plugins-JSON.html#_testDecodeEncode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "_testDecodeEncode",
          "normalized": "String-\u003eIO()",
          "package": "husk-scheme-libs",
          "partial": "Decode Encode",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:_testDecodeEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for Text.JSON.decode\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsDecode",
          "package": "husk-scheme-libs",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-JSON.html#jsDecode",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for Text.JSON.decode",
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsDecode",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme-libs",
          "partial": "Decode",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:jsDecode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for Text.JSON.decodeStrict\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsDecodeStrict",
          "package": "husk-scheme-libs",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-JSON.html#jsDecodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for Text.JSON.decodeStrict",
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsDecodeStrict",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme-libs",
          "partial": "Decode Strict",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:jsDecodeStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for Text.JSON.encode\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsEncode",
          "package": "husk-scheme-libs",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-JSON.html#jsEncode",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for Text.JSON.encode",
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsEncode",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme-libs",
          "partial": "Encode",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:jsEncode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for Text.JSON.encodeStrict\n\u003c/p\u003e",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsEncodeStrict",
          "package": "husk-scheme-libs",
          "signature": "[LispVal] -\u003e IOThrowsError LispVal",
          "source": "src/Language-Scheme-Plugins-JSON.html#jsEncodeStrict",
          "type": "function"
        },
        "index": {
          "description": "Wrapper for Text.JSON.encodeStrict",
          "hierarchy": "Language Scheme Plugins JSON",
          "module": "Language.Scheme.Plugins.JSON",
          "name": "jsEncodeStrict",
          "normalized": "[LispVal]-\u003eIOThrowsError LispVal",
          "package": "husk-scheme-libs",
          "partial": "Encode Strict",
          "signature": "[LispVal]-\u003eIOThrowsError LispVal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/husk-scheme-libs/docs/Language-Scheme-Plugins-JSON.html#v:jsEncodeStrict"
      }
    }
  ]
]