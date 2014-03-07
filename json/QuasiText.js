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
        "word": "QuasiText"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e strings. Note that to use \u003ccode\u003e\u003ca\u003eembed\u003c/a\u003e\u003c/code\u003e you need to use the OverloadedStrings extension.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Text.QuasiText",
          "name": "QuasiText",
          "package": "QuasiText",
          "source": "src/Text-QuasiText.html",
          "type": "module"
        },
        "index": {
          "description": "simple QuasiQuoter for Text strings Note that to use embed you need to use the OverloadedStrings extension",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "QuasiText",
          "package": "QuasiText",
          "partial": "Quasi Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.QuasiText",
          "name": "Chunk",
          "package": "QuasiText",
          "source": "src/Text-QuasiText.html#Chunk",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "Chunk",
          "package": "QuasiText",
          "partial": "Chunk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#t:Chunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eexpression\n\u003c/p\u003e",
          "module": "Text.QuasiText",
          "name": "E",
          "package": "QuasiText",
          "signature": "E Text",
          "source": "src/Text-QuasiText.html#Chunk",
          "type": "function"
        },
        "index": {
          "description": "expression",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "E",
          "package": "QuasiText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#v:E"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etext\n\u003c/p\u003e",
          "module": "Text.QuasiText",
          "name": "T",
          "package": "QuasiText",
          "signature": "T Text",
          "source": "src/Text-QuasiText.html#Chunk",
          "type": "function"
        },
        "index": {
          "description": "text",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "T",
          "package": "QuasiText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#v:T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003evalue\n\u003c/p\u003e",
          "module": "Text.QuasiText",
          "name": "V",
          "package": "QuasiText",
          "signature": "V Text",
          "source": "src/Text-QuasiText.html#Chunk",
          "type": "function"
        },
        "index": {
          "description": "value",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "V",
          "package": "QuasiText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#v:V"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple \u003ccode\u003e\u003ca\u003eQuasiQuoter\u003c/a\u003e\u003c/code\u003e to interpolate \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e into other pieces of \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e. \n Expressions can be embedded using $(expr), and values can be interpolated \n with $name. Inside $( )s, if you have a string of ambiguous type, it will \n default to the Show instance for toText, which will escape unicode \n characters in the string, and add quotes around them.\n\u003c/p\u003e",
          "module": "Text.QuasiText",
          "name": "embed",
          "package": "QuasiText",
          "signature": "QuasiQuoter",
          "source": "src/Text-QuasiText.html#embed",
          "type": "function"
        },
        "index": {
          "description": "simple QuasiQuoter to interpolate Text into other pieces of Text Expressions can be embedded using expr and values can be interpolated with name Inside if you have string of ambiguous type it will default to the Show instance for toText which will escape unicode characters in the string and add quotes around them",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "embed",
          "package": "QuasiText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate \u003ccode\u003e\u003ca\u003eChunk\u003c/a\u003e\u003c/code\u003es without any TH.\n\u003c/p\u003e",
          "module": "Text.QuasiText",
          "name": "getChunks",
          "package": "QuasiText",
          "signature": "Text -\u003e [Chunk]",
          "source": "src/Text-QuasiText.html#getChunks",
          "type": "function"
        },
        "index": {
          "description": "Create Chunk without any TH",
          "hierarchy": "Text QuasiText",
          "module": "Text.QuasiText",
          "name": "getChunks",
          "normalized": "Text-\u003e[Chunk]",
          "package": "QuasiText",
          "partial": "Chunks",
          "signature": "Text-\u003e[Chunk]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/QuasiText/docs/Text-QuasiText.html#v:getChunks"
      }
    }
  ]
]