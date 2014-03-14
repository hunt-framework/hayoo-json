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
        "word": "pugs-HsSyck"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "SYMID",
          "package": "pugs-HsSyck",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#SYMID",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "SYMID",
          "package": "pugs-HsSyck",
          "partial": "SYMID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#t:SYMID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "YamlAnchor",
          "package": "pugs-HsSyck",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#YamlAnchor",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "YamlAnchor",
          "package": "pugs-HsSyck",
          "partial": "Yaml Anchor",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#t:YamlAnchor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "YamlElem",
          "package": "pugs-HsSyck",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#YamlElem",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "YamlElem",
          "package": "pugs-HsSyck",
          "partial": "Yaml Elem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#t:YamlElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "YamlNode",
          "package": "pugs-HsSyck",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#YamlNode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "YamlNode",
          "package": "pugs-HsSyck",
          "partial": "Yaml Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#t:YamlNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Dump a YAML node into a regular Haskell string\n",
          "module": "Data.Yaml.Syck",
          "name": "emitYaml",
          "package": "pugs-HsSyck",
          "signature": "YamlNode -\u003e IO String",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#emitYaml",
          "type": "function"
        },
        "index": {
          "description": "Dump YAML node into regular Haskell string",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "emitYaml",
          "normalized": "YamlNode-\u003eIO String",
          "package": "pugs-HsSyck",
          "partial": "Yaml",
          "signature": "YamlNode-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:emitYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "emitYamlBytes",
          "package": "pugs-HsSyck",
          "signature": "YamlNode -\u003e IO Buf",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#emitYamlBytes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "emitYamlBytes",
          "normalized": "YamlNode-\u003eIO Buf",
          "package": "pugs-HsSyck",
          "partial": "Yaml Bytes",
          "signature": "YamlNode-\u003eIO Buf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:emitYamlBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a file name, dump a YAML node into that file\n",
          "module": "Data.Yaml.Syck",
          "name": "emitYamlFile",
          "package": "pugs-HsSyck",
          "signature": "FilePath -\u003e YamlNode -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#emitYamlFile",
          "type": "function"
        },
        "index": {
          "description": "Given file name dump YAML node into that file",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "emitYamlFile",
          "normalized": "FilePath-\u003eYamlNode-\u003eIO()",
          "package": "pugs-HsSyck",
          "partial": "Yaml File",
          "signature": "FilePath-\u003eYamlNode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:emitYamlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "mkNode",
          "package": "pugs-HsSyck",
          "signature": "YamlElem -\u003e YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#mkNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "mkNode",
          "normalized": "YamlElem-\u003eYamlNode",
          "package": "pugs-HsSyck",
          "partial": "Node",
          "signature": "YamlElem-\u003eYamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:mkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "mkTagNode",
          "package": "pugs-HsSyck",
          "signature": "String -\u003e YamlElem -\u003e YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#mkTagNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "mkTagNode",
          "normalized": "String-\u003eYamlElem-\u003eYamlNode",
          "package": "pugs-HsSyck",
          "partial": "Tag Node",
          "signature": "String-\u003eYamlElem-\u003eYamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:mkTagNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "mkTagStrNode",
          "package": "pugs-HsSyck",
          "signature": "String -\u003e String -\u003e YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#mkTagStrNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "mkTagStrNode",
          "normalized": "String-\u003eString-\u003eYamlNode",
          "package": "pugs-HsSyck",
          "partial": "Tag Str Node",
          "signature": "String-\u003eString-\u003eYamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:mkTagStrNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "nilNode",
          "package": "pugs-HsSyck",
          "signature": "YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#nilNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "nilNode",
          "package": "pugs-HsSyck",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:nilNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convert a regular Haskell string into a ByteString buffer\n",
          "module": "Data.Yaml.Syck",
          "name": "packBuf",
          "package": "pugs-HsSyck",
          "signature": "String -\u003e Buf",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#packBuf",
          "type": "function"
        },
        "index": {
          "description": "Convert regular Haskell string into ByteString buffer",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "packBuf",
          "normalized": "String-\u003eBuf",
          "package": "pugs-HsSyck",
          "partial": "Buf",
          "signature": "String-\u003eBuf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:packBuf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse a regular Haskell string\n",
          "module": "Data.Yaml.Syck",
          "name": "parseYaml",
          "package": "pugs-HsSyck",
          "signature": "String -\u003e IO YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#parseYaml",
          "type": "function"
        },
        "index": {
          "description": "Parse regular Haskell string",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "parseYaml",
          "normalized": "String-\u003eIO YamlNode",
          "package": "pugs-HsSyck",
          "partial": "Yaml",
          "signature": "String-\u003eIO YamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:parseYaml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parse a ByteString buffer (this is faster)\n",
          "module": "Data.Yaml.Syck",
          "name": "parseYamlBytes",
          "package": "pugs-HsSyck",
          "signature": "Buf -\u003e IO YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#parseYamlBytes",
          "type": "function"
        },
        "index": {
          "description": "Parse ByteString buffer this is faster",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "parseYamlBytes",
          "normalized": "Buf-\u003eIO YamlNode",
          "package": "pugs-HsSyck",
          "partial": "Yaml Bytes",
          "signature": "Buf-\u003eIO YamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:parseYamlBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Given a file name, parse contents of file\n",
          "module": "Data.Yaml.Syck",
          "name": "parseYamlFile",
          "package": "pugs-HsSyck",
          "signature": "String -\u003e IO YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#parseYamlFile",
          "type": "function"
        },
        "index": {
          "description": "Given file name parse contents of file",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "parseYamlFile",
          "normalized": "String-\u003eIO YamlNode",
          "package": "pugs-HsSyck",
          "partial": "Yaml File",
          "signature": "String-\u003eIO YamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:parseYamlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Yaml.Syck",
          "name": "tagNode",
          "package": "pugs-HsSyck",
          "signature": "YamlTag -\u003e YamlNode -\u003e YamlNode",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#tagNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "tagNode",
          "normalized": "YamlTag-\u003eYamlNode-\u003eYamlNode",
          "package": "pugs-HsSyck",
          "partial": "Node",
          "signature": "YamlTag-\u003eYamlNode-\u003eYamlNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:tagNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Convert a ByteString buffer into a regular Haskell string\n",
          "module": "Data.Yaml.Syck",
          "name": "unpackBuf",
          "package": "pugs-HsSyck",
          "signature": "Buf -\u003e String",
          "source": "http://hackage.haskell.org/package/pugs-HsSyck/docs/src/Data-Yaml-Syck.html#unpackBuf",
          "type": "function"
        },
        "index": {
          "description": "Convert ByteString buffer into regular Haskell string",
          "hierarchy": "Data Yaml Syck",
          "module": "Data.Yaml.Syck",
          "name": "unpackBuf",
          "normalized": "Buf-\u003eString",
          "package": "pugs-HsSyck",
          "partial": "Buf",
          "signature": "Buf-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/pugs-HsSyck/docs/Data-Yaml-Syck.html#v:unpackBuf"
      }
    }
  ]
]