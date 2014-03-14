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
        "word": "twine"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "Twine",
          "package": "twine",
          "source": "src/Text-Twine.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "Twine",
          "package": "twine",
          "partial": "Twine",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "TemplateInterface",
          "package": "twine",
          "source": "src/Text-Twine-Interpreter-Interface.html#TemplateInterface",
          "type": "class"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "TemplateInterface",
          "package": "twine",
          "partial": "Template Interface",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#t:TemplateInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "TwineElement",
          "package": "twine",
          "source": "src/Text-Twine-Interpreter-Types.html#TwineElement",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "TwineElement",
          "package": "twine",
          "partial": "Twine Element",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#t:TwineElement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "(=:)",
          "package": "twine",
          "signature": "String -\u003e a -\u003e m ()",
          "source": "src/Text-Twine-Interpreter-ContextWriter.html#%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "(=:) =:",
          "normalized": "String-\u003ea-\u003eb()",
          "package": "twine",
          "signature": "String-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "bind",
          "package": "twine",
          "signature": "a -\u003e TwineElement m",
          "source": "src/Text-Twine-Interpreter-Interface.html#bind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "bind",
          "normalized": "a-\u003eTwineElement b",
          "package": "twine",
          "signature": "a-\u003eTwineElement m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:bind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "emptyContext",
          "package": "twine",
          "signature": "TwineElement m",
          "source": "src/Text-Twine-Interpreter-Interface.html#emptyContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "emptyContext",
          "package": "twine",
          "partial": "Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:emptyContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "evalTemplate",
          "package": "twine",
          "signature": "FilePath -\u003e TwineElement IO -\u003e IO ByteString",
          "source": "src/Text-Twine.html#evalTemplate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "evalTemplate",
          "normalized": "FilePath-\u003eTwineElement IO-\u003eIO ByteString",
          "package": "twine",
          "partial": "Template",
          "signature": "FilePath-\u003eTwineElement IO-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:evalTemplate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "loadTemplateFromFile",
          "package": "twine",
          "signature": "FilePath -\u003e IO Template",
          "source": "src/Text-Twine-Parser.html#loadTemplateFromFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "loadTemplateFromFile",
          "normalized": "FilePath-\u003eIO Template",
          "package": "twine",
          "partial": "Template From File",
          "signature": "FilePath-\u003eIO Template",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:loadTemplateFromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "loadTemplateFromString",
          "package": "twine",
          "signature": "String -\u003e Template",
          "source": "src/Text-Twine-Parser.html#loadTemplateFromString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "loadTemplateFromString",
          "normalized": "String-\u003eTemplate",
          "package": "twine",
          "partial": "Template From String",
          "signature": "String-\u003eTemplate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:loadTemplateFromString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "makeContext",
          "package": "twine",
          "signature": "ContextWriter m -\u003e m (TwineElement m)",
          "source": "src/Text-Twine-Interpreter-ContextWriter.html#makeContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "makeContext",
          "normalized": "ContextWriter a-\u003ea(TwineElement a)",
          "package": "twine",
          "partial": "Context",
          "signature": "ContextWriter m-\u003em(TwineElement m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:makeContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "makeIterable",
          "package": "twine",
          "signature": "a -\u003e m [TwineElement m]",
          "source": "src/Text-Twine-Interpreter-Interface.html#makeIterable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "makeIterable",
          "normalized": "a-\u003eb[TwineElement b]",
          "package": "twine",
          "partial": "Iterable",
          "signature": "a-\u003em[TwineElement m]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:makeIterable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "makeString",
          "package": "twine",
          "signature": "a -\u003e m String",
          "source": "src/Text-Twine-Interpreter-Interface.html#makeString",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "makeString",
          "normalized": "a-\u003eb String",
          "package": "twine",
          "partial": "String",
          "signature": "a-\u003em String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:makeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "method",
          "package": "twine",
          "signature": "([TwineElement m] -\u003e m (TwineElement m)) -\u003e TwineElement m",
          "source": "src/Text-Twine-Interpreter-Interface.html#method",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "method",
          "normalized": "([TwineElement a]-\u003ea(TwineElement a))-\u003eTwineElement a",
          "package": "twine",
          "signature": "([TwineElement m]-\u003em(TwineElement m))-\u003eTwineElement m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "property",
          "package": "twine",
          "signature": "ByteString -\u003e a -\u003e m (TwineElement m)",
          "source": "src/Text-Twine-Interpreter-Interface.html#property",
          "type": "method"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "property",
          "normalized": "ByteString-\u003ea-\u003eb(TwineElement b)",
          "package": "twine",
          "signature": "ByteString-\u003ea-\u003em(TwineElement m)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:property"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "runEval",
          "package": "twine",
          "signature": "Template -\u003e TwineElement m -\u003e m ByteString",
          "source": "src/Text-Twine-Interpreter.html#runEval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "runEval",
          "normalized": "Template-\u003eTwineElement a-\u003ea ByteString",
          "package": "twine",
          "partial": "Eval",
          "signature": "Template-\u003eTwineElement m-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:runEval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.Twine",
          "name": "unbind",
          "package": "twine",
          "signature": "TwineElement m -\u003e a",
          "source": "src/Text-Twine-Interpreter-Interface.html#unbind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Text Twine",
          "module": "Text.Twine",
          "name": "unbind",
          "normalized": "TwineElement a-\u003eb",
          "package": "twine",
          "signature": "TwineElement m-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/twine/docs/Text-Twine.html#v:unbind"
      }
    }
  ]
]