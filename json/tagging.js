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
        "word": "tagging"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "Tag",
          "package": "tagging",
          "source": "src/Data-Tag.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "Tag",
          "package": "tagging",
          "partial": "Tag",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "RegexStr",
          "package": "tagging",
          "source": "src/Data-Tag.html#RegexStr",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "RegexStr",
          "package": "tagging",
          "partial": "Regex Str",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#t:RegexStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "Rules",
          "package": "tagging",
          "source": "src/Data-Tag.html#Rules",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "Rules",
          "package": "tagging",
          "partial": "Rules",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#t:Rules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "Str",
          "package": "tagging",
          "source": "src/Data-Tag.html#Str",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "Str",
          "package": "tagging",
          "partial": "Str",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#t:Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "Tag",
          "package": "tagging",
          "source": "src/Data-Tag.html#Tag",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "Tag",
          "package": "tagging",
          "partial": "Tag",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#t:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "Tagged",
          "package": "tagging",
          "source": "src/Data-Tag.html#Tagged",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "Tagged",
          "package": "tagging",
          "partial": "Tagged",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#t:Tagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "allTags",
          "package": "tagging",
          "signature": "Rules -\u003e [Tag]",
          "source": "src/Data-Tag.html#allTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "allTags",
          "normalized": "Rules-\u003e[Tag]",
          "package": "tagging",
          "partial": "Tags",
          "signature": "Rules-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:allTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "getTags",
          "package": "tagging",
          "signature": "[PCREExecOption] -\u003e Rules -\u003e Str -\u003e [Tag]",
          "source": "src/Data-Tag.html#getTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "getTags",
          "normalized": "[PCREExecOption]-\u003eRules-\u003eStr-\u003e[Tag]",
          "package": "tagging",
          "partial": "Tags",
          "signature": "[PCREExecOption]-\u003eRules-\u003eStr-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:getTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "hasTag",
          "package": "tagging",
          "signature": "Tag -\u003e (a, [Tag]) -\u003e Bool",
          "source": "src/Data-Tag.html#hasTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "hasTag",
          "normalized": "Tag-\u003e(a,[Tag])-\u003eBool",
          "package": "tagging",
          "partial": "Tag",
          "signature": "Tag-\u003e(a,[Tag])-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:hasTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "mkRules",
          "package": "tagging",
          "signature": "[PCREOption] -\u003e [(RegexStr, [Tag])] -\u003e Rules",
          "source": "src/Data-Tag.html#mkRules",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "mkRules",
          "normalized": "[PCREOption]-\u003e[(RegexStr,[Tag])]-\u003eRules",
          "package": "tagging",
          "partial": "Rules",
          "signature": "[PCREOption]-\u003e[(RegexStr,[Tag])]-\u003eRules",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:mkRules"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "mkTaggedWrt",
          "package": "tagging",
          "signature": "[PCREExecOption] -\u003e Rules -\u003e [a] -\u003e (a -\u003e Str) -\u003e Tagged a",
          "source": "src/Data-Tag.html#mkTaggedWrt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "mkTaggedWrt",
          "normalized": "[PCREExecOption]-\u003eRules-\u003e[a]-\u003e(a-\u003eStr)-\u003eTagged a",
          "package": "tagging",
          "partial": "Tagged Wrt",
          "signature": "[PCREExecOption]-\u003eRules-\u003e[a]-\u003e(a-\u003eStr)-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:mkTaggedWrt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "untagged",
          "package": "tagging",
          "signature": "Tagged a -\u003e [a]",
          "source": "src/Data-Tag.html#untagged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "untagged",
          "normalized": "Tagged a-\u003e[a]",
          "package": "tagging",
          "signature": "Tagged a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:untagged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "unusedTags",
          "package": "tagging",
          "signature": "Rules -\u003e Tagged a -\u003e [Tag]",
          "source": "src/Data-Tag.html#unusedTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "unusedTags",
          "normalized": "Rules-\u003eTagged a-\u003e[Tag]",
          "package": "tagging",
          "partial": "Tags",
          "signature": "Rules-\u003eTagged a-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:unusedTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "usedTags",
          "package": "tagging",
          "signature": "Tagged a -\u003e [Tag]",
          "source": "src/Data-Tag.html#usedTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "usedTags",
          "normalized": "Tagged a-\u003e[Tag]",
          "package": "tagging",
          "partial": "Tags",
          "signature": "Tagged a-\u003e[Tag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:usedTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "withAnyTag",
          "package": "tagging",
          "signature": "[Tag] -\u003e Tagged a -\u003e Tagged a",
          "source": "src/Data-Tag.html#withAnyTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "withAnyTag",
          "normalized": "[Tag]-\u003eTagged a-\u003eTagged a",
          "package": "tagging",
          "partial": "Any Tag",
          "signature": "[Tag]-\u003eTagged a-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:withAnyTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "withTag",
          "package": "tagging",
          "signature": "Tag -\u003e Tagged a -\u003e Tagged a",
          "source": "src/Data-Tag.html#withTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "withTag",
          "normalized": "Tag-\u003eTagged a-\u003eTagged a",
          "package": "tagging",
          "partial": "Tag",
          "signature": "Tag-\u003eTagged a-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:withTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Tag",
          "name": "withoutTag",
          "package": "tagging",
          "signature": "Tag -\u003e Tagged a -\u003e Tagged a",
          "source": "src/Data-Tag.html#withoutTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Tag",
          "module": "Data.Tag",
          "name": "withoutTag",
          "normalized": "Tag-\u003eTagged a-\u003eTagged a",
          "package": "tagging",
          "partial": "Tag",
          "signature": "Tag-\u003eTagged a-\u003eTagged a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagging/docs/Data-Tag.html#v:withoutTag"
      }
    }
  ]
]