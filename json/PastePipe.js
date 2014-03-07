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
        "word": "PastePipe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConfiguration and communication with lpaste.net\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Utils.PastePipe",
          "name": "PastePipe",
          "package": "PastePipe",
          "source": "src/Utils-PastePipe.html",
          "type": "module"
        },
        "index": {
          "description": "Configuration and communication with lpaste.net",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "PastePipe",
          "package": "PastePipe",
          "partial": "Paste Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration type for PastePipe:\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "Config",
          "package": "PastePipe",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "data"
        },
        "index": {
          "description": "Configuration type for PastePipe",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "Config",
          "package": "PastePipe",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "Config",
          "package": "PastePipe",
          "signature": "Config",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "Config",
          "package": "PastePipe",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates the request to post a chunk of content.\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "buildRequest",
          "package": "PastePipe",
          "signature": "Config -\u003e String -\u003e Request String",
          "source": "src/Utils-PastePipe.html#buildRequest",
          "type": "function"
        },
        "index": {
          "description": "Creates the request to post chunk of content",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "buildRequest",
          "normalized": "Config-\u003eString-\u003eRequest String",
          "package": "PastePipe",
          "partial": "Request",
          "signature": "Config-\u003eString-\u003eRequest String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:buildRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomposes the core uri and a string to create a usable URI\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "buildURI",
          "package": "PastePipe",
          "signature": "String -\u003e String -\u003e URI",
          "source": "src/Utils-PastePipe.html#buildURI",
          "type": "function"
        },
        "index": {
          "description": "composes the core uri and string to create usable URI",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "buildURI",
          "normalized": "String-\u003eString-\u003eURI",
          "package": "PastePipe",
          "partial": "URI",
          "signature": "String-\u003eString-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:buildURI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "config",
          "package": "PastePipe",
          "signature": "String -\u003e Config",
          "source": "src/Utils-PastePipe.html#config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "config",
          "normalized": "String-\u003eConfig",
          "package": "PastePipe",
          "signature": "String-\u003eConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ca\u003eroot\u003c/a\u003e uri for lpaste.net\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "defaultUri",
          "package": "PastePipe",
          "signature": "String",
          "source": "src/Utils-PastePipe.html#defaultUri",
          "type": "function"
        },
        "index": {
          "description": "The root uri for lpaste.net",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "defaultUri",
          "package": "PastePipe",
          "partial": "Uri",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:defaultUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "fakePost",
          "package": "PastePipe",
          "signature": "Config -\u003e String -\u003e IO URI",
          "source": "src/Utils-PastePipe.html#fakePost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "fakePost",
          "normalized": "Config-\u003eString-\u003eIO URI",
          "package": "PastePipe",
          "partial": "Post",
          "signature": "Config-\u003eString-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:fakePost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "language",
          "package": "PastePipe",
          "signature": "String",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "language",
          "package": "PastePipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:language"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine an output handler based on the user-specified verbosity.\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "outHandler",
          "package": "PastePipe",
          "signature": "String -\u003e IO ()",
          "source": "src/Utils-PastePipe.html#outHandler",
          "type": "function"
        },
        "index": {
          "description": "Define an output handler based on the user-specified verbosity",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "outHandler",
          "normalized": "String-\u003eIO()",
          "package": "PastePipe",
          "partial": "Handler",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:outHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePosts the given content to lpaste.net, returning the new uri.\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "post",
          "package": "PastePipe",
          "signature": "Config -\u003e String -\u003e IO URI",
          "source": "src/Utils-PastePipe.html#post",
          "type": "function"
        },
        "index": {
          "description": "Posts the given content to lpaste.net returning the new uri",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "post",
          "normalized": "Config-\u003eString-\u003eIO URI",
          "package": "PastePipe",
          "signature": "Config-\u003eString-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a string to post to the default and returns the URI.\n Client code is expected to catch any exceptions.\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "postWithDefaults",
          "package": "PastePipe",
          "signature": "String -\u003e IO URI",
          "source": "src/Utils-PastePipe.html#postWithDefaults",
          "type": "function"
        },
        "index": {
          "description": "Takes string to post to the default and returns the URI Client code is expected to catch any exceptions",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "postWithDefaults",
          "normalized": "String-\u003eIO URI",
          "package": "PastePipe",
          "partial": "With Defaults",
          "signature": "String-\u003eIO URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:postWithDefaults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe URI for posting new pastes to lpaste.\n This isn't guaranteed to trigger a failure on all execution paths, as-is.\n\u003c/p\u003e",
          "module": "Utils.PastePipe",
          "name": "saveUri",
          "package": "PastePipe",
          "signature": "String -\u003e URI",
          "source": "src/Utils-PastePipe.html#saveUri",
          "type": "function"
        },
        "index": {
          "description": "The URI for posting new pastes to lpaste This isn guaranteed to trigger failure on all execution paths as-is",
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "saveUri",
          "normalized": "String-\u003eURI",
          "package": "PastePipe",
          "partial": "Uri",
          "signature": "String-\u003eURI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:saveUri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "test",
          "package": "PastePipe",
          "signature": "Bool",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "test",
          "package": "PastePipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "title",
          "package": "PastePipe",
          "signature": "String",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "title",
          "package": "PastePipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:title"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "uri",
          "package": "PastePipe",
          "signature": "String",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "uri",
          "package": "PastePipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Utils.PastePipe",
          "name": "userName",
          "package": "PastePipe",
          "signature": "String",
          "source": "src/Utils-PastePipe.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Utils PastePipe",
          "module": "Utils.PastePipe",
          "name": "userName",
          "package": "PastePipe",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/PastePipe/docs/Utils-PastePipe.html#v:userName"
      }
    }
  ]
]