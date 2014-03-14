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
        "word": "fay-text"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to be shared between server and client.\n\u003c/p\u003e\u003cp\u003eThis module must be valid for both GHC and Fay.\n\u003c/p\u003e\u003cp\u003eFor GHC this is an alias for Data.Text, for Fay it's an opaque data type represented by JavaScript strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Text.Type",
          "name": "Type",
          "package": "fay-text",
          "source": "src/Fay-Text-Type.html",
          "type": "module"
        },
        "index": {
          "description": "Module to be shared between server and client This module must be valid for both GHC and Fay For GHC this is an alias for Data.Text for Fay it an opaque data type represented by JavaScript strings",
          "hierarchy": "Fay Text Type",
          "module": "Fay.Text.Type",
          "name": "Type",
          "package": "fay-text",
          "partial": "Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text-Type.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text.Type",
          "name": "Text",
          "package": "fay-text",
          "source": "src/Fay-Text-Type.html#Text",
          "type": "type"
        },
        "index": {
          "hierarchy": "Fay Text Type",
          "module": "Fay.Text.Type",
          "name": "Text",
          "package": "fay-text",
          "partial": "Text",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text-Type.html#t:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHave this in scope with the OverloadedStrings and BindableSyntax extensions\n and Fay will replace all string literals with Text.\n\u003c/p\u003e",
          "module": "Fay.Text.Type",
          "name": "fromString",
          "package": "fay-text",
          "signature": "String -\u003e Text",
          "source": "src/Fay-Text-Type.html#fromString",
          "type": "function"
        },
        "index": {
          "description": "Have this in scope with the OverloadedStrings and BindableSyntax extensions and Fay will replace all string literals with Text",
          "hierarchy": "Fay Text Type",
          "module": "Fay.Text.Type",
          "name": "fromString",
          "normalized": "String-\u003eText",
          "package": "fay-text",
          "partial": "String",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text-Type.html#v:fromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text.Type",
          "name": "pack",
          "package": "fay-text",
          "signature": "String -\u003e Text",
          "source": "src/Fay-Text-Type.html#pack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text Type",
          "module": "Fay.Text.Type",
          "name": "pack",
          "normalized": "String-\u003eText",
          "package": "fay-text",
          "signature": "String-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text-Type.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text.Type",
          "name": "unpack",
          "package": "fay-text",
          "signature": "Text -\u003e String",
          "source": "src/Fay-Text-Type.html#unpack",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text Type",
          "module": "Fay.Text.Type",
          "name": "unpack",
          "normalized": "Text-\u003eString",
          "package": "fay-text",
          "signature": "Text-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text-Type.html#v:unpack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule to be shared between server and client.\n\u003c/p\u003e\u003cp\u003eThis module must be valid for both GHC and Fay.\n\u003c/p\u003e\u003cp\u003eFor GHC this is an alias for Data.Text, for Fay it's an opaque data type represented by JavaScript strings.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Fay.Text",
          "name": "Text",
          "package": "fay-text",
          "source": "src/Fay-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Module to be shared between server and client This module must be valid for both GHC and Fay For GHC this is an alias for Data.Text for Fay it an opaque data type represented by JavaScript strings",
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "Text",
          "package": "fay-text",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "all",
          "package": "fay-text",
          "signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
          "source": "src/Fay-Text.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "all",
          "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
          "package": "fay-text",
          "signature": "(Char-\u003eBool)-\u003eText-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "any",
          "package": "fay-text",
          "signature": "(Char -\u003e Bool) -\u003e Text -\u003e Bool",
          "source": "src/Fay-Text.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "any",
          "normalized": "(Char-\u003eBool)-\u003eText-\u003eBool",
          "package": "fay-text",
          "signature": "(Char-\u003eBool)-\u003eText-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "append",
          "package": "fay-text",
          "signature": "Text -\u003e Text -\u003e Text",
          "source": "src/Fay-Text.html#append",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "append",
          "normalized": "Text-\u003eText-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "concat",
          "package": "fay-text",
          "signature": "[Text] -\u003e Text",
          "source": "src/Fay-Text.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "concat",
          "normalized": "[Text]-\u003eText",
          "package": "fay-text",
          "signature": "[Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "concatMap",
          "package": "fay-text",
          "signature": "(Char -\u003e Text) -\u003e Text -\u003e Text",
          "source": "src/Fay-Text.html#concatMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "concatMap",
          "normalized": "(Char-\u003eText)-\u003eText-\u003eText",
          "package": "fay-text",
          "partial": "Map",
          "signature": "(Char-\u003eText)-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:concatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "cons",
          "package": "fay-text",
          "signature": "Char -\u003e Text -\u003e Text",
          "source": "src/Fay-Text.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "cons",
          "normalized": "Char-\u003eText-\u003eText",
          "package": "fay-text",
          "signature": "Char-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "empty",
          "package": "fay-text",
          "signature": "Text",
          "source": "src/Fay-Text.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "empty",
          "package": "fay-text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "head",
          "package": "fay-text",
          "signature": "Text -\u003e Char",
          "source": "src/Fay-Text.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "head",
          "normalized": "Text-\u003eChar",
          "package": "fay-text",
          "signature": "Text-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "init",
          "package": "fay-text",
          "signature": "Text -\u003e Text",
          "source": "src/Fay-Text.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "init",
          "normalized": "Text-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "intercalate",
          "package": "fay-text",
          "signature": "Text -\u003e [Text] -\u003e Text",
          "source": "src/Fay-Text.html#intercalate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "intercalate",
          "normalized": "Text-\u003e[Text]-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003e[Text]-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:intercalate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "intersperse",
          "package": "fay-text",
          "signature": "Char -\u003e Text -\u003e Text",
          "source": "src/Fay-Text.html#intersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "intersperse",
          "normalized": "Char-\u003eText-\u003eText",
          "package": "fay-text",
          "signature": "Char-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "last",
          "package": "fay-text",
          "signature": "Text -\u003e Char",
          "source": "src/Fay-Text.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "last",
          "normalized": "Text-\u003eChar",
          "package": "fay-text",
          "signature": "Text-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "length",
          "package": "fay-text",
          "signature": "Text -\u003e Int",
          "source": "src/Fay-Text.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "length",
          "normalized": "Text-\u003eInt",
          "package": "fay-text",
          "signature": "Text-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "map",
          "package": "fay-text",
          "signature": "(Char -\u003e Char) -\u003e Text -\u003e Text",
          "source": "src/Fay-Text.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "map",
          "normalized": "(Char-\u003eChar)-\u003eText-\u003eText",
          "package": "fay-text",
          "signature": "(Char-\u003eChar)-\u003eText-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "maximum",
          "package": "fay-text",
          "signature": "Text -\u003e Char",
          "source": "src/Fay-Text.html#maximum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "maximum",
          "normalized": "Text-\u003eChar",
          "package": "fay-text",
          "signature": "Text-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "minimum",
          "package": "fay-text",
          "signature": "Text -\u003e Char",
          "source": "src/Fay-Text.html#minimum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "minimum",
          "normalized": "Text-\u003eChar",
          "package": "fay-text",
          "signature": "Text-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "null",
          "package": "fay-text",
          "signature": "Text -\u003e Bool",
          "source": "src/Fay-Text.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "null",
          "normalized": "Text-\u003eBool",
          "package": "fay-text",
          "signature": "Text-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "reverse",
          "package": "fay-text",
          "signature": "Text -\u003e Text",
          "source": "src/Fay-Text.html#reverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "reverse",
          "normalized": "Text-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "snoc",
          "package": "fay-text",
          "signature": "Text -\u003e Char -\u003e Text",
          "source": "src/Fay-Text.html#snoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "snoc",
          "normalized": "Text-\u003eChar-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003eChar-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "tail",
          "package": "fay-text",
          "signature": "Text -\u003e Text",
          "source": "src/Fay-Text.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "tail",
          "normalized": "Text-\u003eText",
          "package": "fay-text",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "toLower",
          "package": "fay-text",
          "signature": "Text -\u003e Text",
          "source": "src/Fay-Text.html#toLower",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "toLower",
          "normalized": "Text-\u003eText",
          "package": "fay-text",
          "partial": "Lower",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "toUpper",
          "package": "fay-text",
          "signature": "Text -\u003e Text",
          "source": "src/Fay-Text.html#toUpper",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "toUpper",
          "normalized": "Text-\u003eText",
          "package": "fay-text",
          "partial": "Upper",
          "signature": "Text-\u003eText",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Fay.Text",
          "name": "uncons",
          "package": "fay-text",
          "signature": "Text -\u003e Maybe (Char, Text)",
          "source": "src/Fay-Text.html#uncons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Fay Text",
          "module": "Fay.Text",
          "name": "uncons",
          "normalized": "Text-\u003eMaybe(Char,Text)",
          "package": "fay-text",
          "signature": "Text-\u003eMaybe(Char,Text)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/fay-text/docs/Fay-Text.html#v:uncons"
      }
    }
  ]
]