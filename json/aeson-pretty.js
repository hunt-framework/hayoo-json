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
        "word": "aeson-pretty"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAeson-compatible pretty-printing of JSON \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Pretty",
          "package": "aeson-pretty",
          "source": "src/Data-Aeson-Encode-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "Aeson-compatible pretty-printing of JSON Value",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Pretty",
          "package": "aeson-pretty",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Config",
          "package": "aeson-pretty",
          "source": "src/Data-Aeson-Encode-Pretty.html#Config",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Config",
          "package": "aeson-pretty",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Config",
          "package": "aeson-pretty",
          "signature": "Config",
          "source": "src/Data-Aeson-Encode-Pretty.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "Config",
          "package": "aeson-pretty",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Aeson.Encode.Pretty",
          "name": "compare",
          "package": "aeson-pretty",
          "signature": "a -\u003e a -\u003e Ordering",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "compare",
          "normalized": "a-\u003ea-\u003eOrdering",
          "package": "aeson-pretty",
          "signature": "a-\u003ea-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:compare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction used to sort keys in objects\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "confCompare",
          "package": "aeson-pretty",
          "signature": "Text -\u003e Text -\u003e Ordering",
          "source": "src/Data-Aeson-Encode-Pretty.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Function used to sort keys in objects",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "confCompare",
          "normalized": "Text-\u003eText-\u003eOrdering",
          "package": "aeson-pretty",
          "partial": "Compare",
          "signature": "Text-\u003eText-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:confCompare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation spaces per level of nesting\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "confIndent",
          "package": "aeson-pretty",
          "signature": "Int",
          "source": "src/Data-Aeson-Encode-Pretty.html#Config",
          "type": "function"
        },
        "index": {
          "description": "Indentation spaces per level of nesting",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "confIndent",
          "package": "aeson-pretty",
          "partial": "Indent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:confIndent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default configuration: indent by four spaces per level of nesting, do\n  not sort objects by key.\n\u003c/p\u003e\u003cpre\u003e defConfig = Config { confIndent = 4, confSort = mempty }\n\u003c/pre\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "defConfig",
          "package": "aeson-pretty",
          "signature": "Config",
          "source": "src/Data-Aeson-Encode-Pretty.html#defConfig",
          "type": "function"
        },
        "index": {
          "description": "The default configuration indent by four spaces per level of nesting do not sort objects by key defConfig Config confIndent confSort mempty",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "defConfig",
          "package": "aeson-pretty",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:defConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-in replacement for aeson's \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e function, producing \n  JSON-ByteStrings for human readers.\n\u003c/p\u003e\u003cp\u003eFollows the default configuration in \u003ccode\u003e\u003ca\u003edefConfig\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "encodePretty",
          "package": "aeson-pretty",
          "signature": "a -\u003e ByteString",
          "source": "src/Data-Aeson-Encode-Pretty.html#encodePretty",
          "type": "function"
        },
        "index": {
          "description": "drop-in replacement for aeson encode function producing JSON-ByteStrings for human readers Follows the default configuration in defConfig",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "encodePretty",
          "normalized": "a-\u003eByteString",
          "package": "aeson-pretty",
          "partial": "Pretty",
          "signature": "a-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:encodePretty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of \u003ccode\u003e\u003ca\u003eencodePretty\u003c/a\u003e\u003c/code\u003e that takes an additional configuration\n  parameter.\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "encodePretty'",
          "package": "aeson-pretty",
          "signature": "Config -\u003e a -\u003e ByteString",
          "source": "src/Data-Aeson-Encode-Pretty.html#encodePretty%27",
          "type": "function"
        },
        "index": {
          "description": "variant of encodePretty that takes an additional configuration parameter",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "encodePretty'",
          "normalized": "Config-\u003ea-\u003eByteString",
          "package": "aeson-pretty",
          "partial": "Pretty'",
          "signature": "Config-\u003ea-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:encodePretty-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSort keys by their order of appearance in the argument list.\n\u003c/p\u003e\u003cp\u003eKeys that are not present in the argument list are considered to be greater\n  than any key in the list and equal to all keys not in the list. I.e. keys\n  not in the argument list are moved to the end, while their order is\n  preserved.\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "keyOrder",
          "package": "aeson-pretty",
          "signature": "[Text] -\u003e Text -\u003e Text -\u003e Ordering",
          "source": "src/Data-Aeson-Encode-Pretty.html#keyOrder",
          "type": "function"
        },
        "index": {
          "description": "Sort keys by their order of appearance in the argument list Keys that are not present in the argument list are considered to be greater than any key in the list and equal to all keys not in the list I.e keys not in the argument list are moved to the end while their order is preserved",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "keyOrder",
          "normalized": "[Text]-\u003eText-\u003eText-\u003eOrdering",
          "package": "aeson-pretty",
          "partial": "Order",
          "signature": "[Text]-\u003eText-\u003eText-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:keyOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIdentity of \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "mempty",
          "package": "aeson-pretty",
          "signature": "a",
          "type": "function"
        },
        "index": {
          "description": "Identity of mappend",
          "hierarchy": "Data Aeson Encode Pretty",
          "module": "Data.Aeson.Encode.Pretty",
          "name": "mempty",
          "package": "aeson-pretty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/aeson-pretty/docs/Data-Aeson-Encode-Pretty.html#v:mempty"
      }
    }
  ]
]