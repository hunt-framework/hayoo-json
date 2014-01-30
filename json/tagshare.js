[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad for binding values to tags to ensure sharing, \n with the added twist that the value can be polymorphic\n and each monomorphic instance is bound separately.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-TagShare.html",
        "fct-type": "module",
        "title": "TagShare"
      },
      "index": {
        "description": "monad for binding values to tags to ensure sharing with the added twist that the value can be polymorphic and each monomorphic instance is bound separately",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "TagShare",
        "normalized": "",
        "package": "tagshare",
        "partial": "Tag Share",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#t:DynMap",
      "description": {
        "fct-descr": "\u003cp\u003eA dynamic map with type safe\n insertion and lookup.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "data",
        "fct-source": "src/Control-Monad-TagShare.html#DynMap",
        "fct-type": "data",
        "title": "DynMap"
      },
      "index": {
        "description": "dynamic map with type safe insertion and lookup",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "DynMap",
        "normalized": "",
        "package": "tagshare",
        "partial": "Dyn Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#t:Sharing",
      "description": {
        "fct-descr": "\u003cp\u003eA sharing monad\n with a function that binds a tag to a value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-TagShare.html#Sharing",
        "fct-type": "type",
        "title": "Sharing"
      },
      "index": {
        "description": "sharing monad with function that binds tag to value",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "Sharing",
        "normalized": "",
        "package": "tagshare",
        "partial": "Sharing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynEmpty",
      "description": {
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "DynMap tag",
        "fct-source": "src/Control-Monad-TagShare.html#dynEmpty",
        "fct-type": "function",
        "title": "dynEmpty"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "dynEmpty",
        "normalized": "",
        "package": "tagshare",
        "partial": "Empty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynInsert",
      "description": {
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "tag -\u003e a -\u003e DynMap tag -\u003e DynMap tag",
        "fct-source": "src/Control-Monad-TagShare.html#dynInsert",
        "fct-type": "function",
        "title": "dynInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "dynInsert",
        "normalized": "a-\u003eb-\u003eDynMap a-\u003eDynMap a",
        "package": "tagshare",
        "partial": "Insert",
        "signature": "tag-\u003ea-\u003eDynMap tag-\u003eDynMap tag"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:dynLookup",
      "description": {
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "tag -\u003e DynMap tag -\u003e Maybe a",
        "fct-source": "src/Control-Monad-TagShare.html#dynLookup",
        "fct-type": "function",
        "title": "dynLookup"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "dynLookup",
        "normalized": "a-\u003eDynMap a-\u003eMaybe b",
        "package": "tagshare",
        "partial": "Lookup",
        "signature": "tag-\u003eDynMap tag-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:runSharing",
      "description": {
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "Sharing tag a -\u003e a",
        "fct-source": "src/Control-Monad-TagShare.html#runSharing",
        "fct-type": "function",
        "title": "runSharing"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "runSharing",
        "normalized": "Sharing a b-\u003eb",
        "package": "tagshare",
        "partial": "Sharing",
        "signature": "Sharing tag a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tagshare/docs/Control-Monad-TagShare.html#v:share",
      "description": {
        "fct-module": "Control.Monad.TagShare",
        "fct-package": "tagshare",
        "fct-signature": "tag -\u003e Sharing tag a -\u003e Sharing tag a",
        "fct-source": "src/Control-Monad-TagShare.html#share",
        "fct-type": "function",
        "title": "share"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad TagShare",
        "module": "Control.Monad.TagShare",
        "name": "share",
        "normalized": "a-\u003eSharing a b-\u003eSharing a b",
        "package": "tagshare",
        "partial": "",
        "signature": "tag-\u003eSharing tag a-\u003eSharing tag a"
      }
    }
  }
]