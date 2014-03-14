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
        "word": "tagshare"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for binding values to tags to ensure sharing, \n with the added twist that the value can be polymorphic\n and each monomorphic instance is bound separately.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.TagShare",
          "name": "TagShare",
          "package": "tagshare",
          "source": "src/Control-Monad-TagShare.html",
          "type": "module"
        },
        "index": {
          "description": "monad for binding values to tags to ensure sharing with the added twist that the value can be polymorphic and each monomorphic instance is bound separately",
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "TagShare",
          "package": "tagshare",
          "partial": "Tag Share",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA dynamic map with type safe\n insertion and lookup.\n\u003c/p\u003e",
          "module": "Control.Monad.TagShare",
          "name": "DynMap",
          "package": "tagshare",
          "source": "src/Control-Monad-TagShare.html#DynMap",
          "type": "data"
        },
        "index": {
          "description": "dynamic map with type safe insertion and lookup",
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "DynMap",
          "package": "tagshare",
          "partial": "Dyn Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#t:DynMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA sharing monad\n with a function that binds a tag to a value.\n\u003c/p\u003e",
          "module": "Control.Monad.TagShare",
          "name": "Sharing",
          "package": "tagshare",
          "source": "src/Control-Monad-TagShare.html#Sharing",
          "type": "type"
        },
        "index": {
          "description": "sharing monad with function that binds tag to value",
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "Sharing",
          "package": "tagshare",
          "partial": "Sharing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#t:Sharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.TagShare",
          "name": "dynEmpty",
          "package": "tagshare",
          "signature": "DynMap tag",
          "source": "src/Control-Monad-TagShare.html#dynEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "dynEmpty",
          "package": "tagshare",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.TagShare",
          "name": "dynInsert",
          "package": "tagshare",
          "signature": "tag -\u003e a -\u003e DynMap tag -\u003e DynMap tag",
          "source": "src/Control-Monad-TagShare.html#dynInsert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "dynInsert",
          "normalized": "a-\u003eb-\u003eDynMap a-\u003eDynMap a",
          "package": "tagshare",
          "partial": "Insert",
          "signature": "tag-\u003ea-\u003eDynMap tag-\u003eDynMap tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.TagShare",
          "name": "dynLookup",
          "package": "tagshare",
          "signature": "tag -\u003e DynMap tag -\u003e Maybe a",
          "source": "src/Control-Monad-TagShare.html#dynLookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "dynLookup",
          "normalized": "a-\u003eDynMap a-\u003eMaybe b",
          "package": "tagshare",
          "partial": "Lookup",
          "signature": "tag-\u003eDynMap tag-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.TagShare",
          "name": "runSharing",
          "package": "tagshare",
          "signature": "Sharing tag a -\u003e a",
          "source": "src/Control-Monad-TagShare.html#runSharing",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "runSharing",
          "normalized": "Sharing a b-\u003eb",
          "package": "tagshare",
          "partial": "Sharing",
          "signature": "Sharing tag a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:runSharing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.TagShare",
          "name": "share",
          "package": "tagshare",
          "signature": "tag -\u003e Sharing tag a -\u003e Sharing tag a",
          "source": "src/Control-Monad-TagShare.html#share",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad TagShare",
          "module": "Control.Monad.TagShare",
          "name": "share",
          "normalized": "a-\u003eSharing a b-\u003eSharing a b",
          "package": "tagshare",
          "signature": "tag-\u003eSharing tag a-\u003eSharing tag a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:share"
      }
    }
  ]
]