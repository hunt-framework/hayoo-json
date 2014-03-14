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
        "word": "ctemplate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CTemplate",
          "name": "3ADictionary",
          "package": "ctemplate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text CTemplate",
          "module": "Text.CTemplate",
          "name": "3ADictionary",
          "package": "ctemplate",
          "partial": "ADictionary",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ctemplate/docs/Text-CTemplate.html#t:3ADictionary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CTemplate",
          "name": "3AOption",
          "package": "ctemplate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text CTemplate",
          "module": "Text.CTemplate",
          "name": "3AOption",
          "package": "ctemplate",
          "partial": "AOption",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ctemplate/docs/Text-CTemplate.html#t:3AOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Text.CTemplate",
          "name": "3AVariable",
          "package": "ctemplate",
          "type": "data"
        },
        "index": {
          "hierarchy": "Text CTemplate",
          "module": "Text.CTemplate",
          "name": "3AVariable",
          "package": "ctemplate",
          "partial": "AVariable",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ctemplate/docs/Text-CTemplate.html#t:3AVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Expand a template given the values to fill it\n",
          "module": "Text.CTemplate",
          "name": "3Aexpand",
          "package": "ctemplate",
          "signature": "Option -\u003e Dictionary -\u003e IO (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Expand template given the values to fill it",
          "hierarchy": "Text CTemplate",
          "module": "Text.CTemplate",
          "name": "3Aexpand",
          "normalized": "Option-\u003eDictionary-\u003eIO(Maybe ByteString)",
          "package": "ctemplate",
          "partial": "Aexpand",
          "signature": "Option-\u003eDictionary-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctemplate/docs/Text-CTemplate.html#v:3Aexpand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Set the directory where templates with non-absolute filenames will be\n   loaded from\n",
          "module": "Text.CTemplate",
          "name": "3AsetTemplateRootDirectory",
          "package": "ctemplate",
          "signature": "FilePath -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Set the directory where templates with non-absolute filenames will be loaded from",
          "hierarchy": "Text CTemplate",
          "module": "Text.CTemplate",
          "name": "3AsetTemplateRootDirectory",
          "normalized": "FilePath-\u003eIO()",
          "package": "ctemplate",
          "partial": "Aset Template Root Directory",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ctemplate/docs/Text-CTemplate.html#v:3AsetTemplateRootDirectory"
      }
    }
  ]
]