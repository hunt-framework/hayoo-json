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
        "word": "haskheap"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for interfacing with the refheap (https:\u003cem/\u003ewww.refheap.com) API.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Haskheap",
          "name": "Haskheap",
          "package": "haskheap",
          "source": "src/Network-Haskheap.html",
          "type": "module"
        },
        "index": {
          "description": "library for interfacing with the refheap https www.refheap.com API",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Haskheap",
          "package": "haskheap",
          "partial": "Haskheap",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple error box so I can parse refheap error messages into something useful.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "Error",
          "package": "haskheap",
          "source": "src/Network-Haskheap.html#Error",
          "type": "data"
        },
        "index": {
          "description": "simple error box so can parse refheap error messages into something useful",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Error",
          "package": "haskheap",
          "partial": "Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#t:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of as successful request (either empty or a paste).\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "Success",
          "package": "haskheap",
          "source": "src/Network-Haskheap.html#Success",
          "type": "data"
        },
        "index": {
          "description": "Result of as successful request either empty or paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Success",
          "package": "haskheap",
          "partial": "Success",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#t:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperation was successful, but response is empty.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "Empty",
          "package": "haskheap",
          "signature": "Empty",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "Operation was successful but response is empty",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Empty",
          "package": "haskheap",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskheap",
          "name": "Error",
          "package": "haskheap",
          "signature": "Error String",
          "source": "src/Network-Haskheap.html#Error",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Error",
          "package": "haskheap",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:Error"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string was returned by the API that can't be represented as a paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "Line",
          "package": "haskheap",
          "signature": "Line String",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "string was returned by the API that can be represented as paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Line",
          "package": "haskheap",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Haskheap",
          "name": "Paste",
          "package": "haskheap",
          "signature": "Paste",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "Paste",
          "package": "haskheap",
          "partial": "Paste",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:Paste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "createPaste",
          "package": "haskheap",
          "signature": "Contents -\u003e Bool -\u003e Language -\u003e Maybe Auth -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#createPaste",
          "type": "function"
        },
        "index": {
          "description": "Create new paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "createPaste",
          "normalized": "Contents-\u003eBool-\u003eLanguage-\u003eMaybe Auth-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Paste",
          "signature": "Contents-\u003eBool-\u003eLanguage-\u003eMaybe Auth-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:createPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a paste. If it fails for some reason, will return\n the error message from refheap's API wrapped in Maybe, otherwise Nothing.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "deletePaste",
          "package": "haskheap",
          "signature": "PasteID -\u003e Auth -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#deletePaste",
          "type": "function"
        },
        "index": {
          "description": "Delete paste If it fails for some reason will return the error message from refheap API wrapped in Maybe otherwise Nothing",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "deletePaste",
          "normalized": "PasteID-\u003eAuth-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Paste",
          "signature": "PasteID-\u003eAuth-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:deletePaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEdit a paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "editPaste",
          "package": "haskheap",
          "signature": "PasteID -\u003e Contents -\u003e Bool -\u003e Language -\u003e Auth -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#editPaste",
          "type": "function"
        },
        "index": {
          "description": "Edit paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "editPaste",
          "normalized": "PasteID-\u003eContents-\u003eBool-\u003eLanguage-\u003eAuth-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Paste",
          "signature": "PasteID-\u003eContents-\u003eBool-\u003eLanguage-\u003eAuth-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:editPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "forkPaste",
          "package": "haskheap",
          "signature": "PasteID -\u003e Auth -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#forkPaste",
          "type": "function"
        },
        "index": {
          "description": "Fork paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "forkPaste",
          "normalized": "PasteID-\u003eAuth-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Paste",
          "signature": "PasteID-\u003eAuth-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:forkPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBody of the paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getBody",
          "package": "haskheap",
          "signature": "Contents",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "Body of the paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getBody",
          "package": "haskheap",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime the paste was created.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getDate",
          "package": "haskheap",
          "signature": "Maybe UTCTime",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "Time the paste was created",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getDate",
          "package": "haskheap",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the highlighted body of a paste. This does not include theme css, just raw HTML.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getHighlightedPaste",
          "package": "haskheap",
          "signature": "PasteID -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#getHighlightedPaste",
          "type": "function"
        },
        "index": {
          "description": "Get the highlighted body of paste This does not include theme css just raw HTML",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getHighlightedPaste",
          "normalized": "PasteID-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Highlighted Paste",
          "signature": "PasteID-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getHighlightedPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eID of the paste (may be numeric or hash or sorts).\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getID",
          "package": "haskheap",
          "signature": "PasteID",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "ID of the paste may be numeric or hash or sorts",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getID",
          "package": "haskheap",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe language of the paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getLanguage",
          "package": "haskheap",
          "signature": "Language",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "The language of the paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getLanguage",
          "package": "haskheap",
          "partial": "Language",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getLanguage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLines in the paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getLines",
          "package": "haskheap",
          "signature": "Integer",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "Lines in the paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getLines",
          "package": "haskheap",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a paste from refheap. Will return IO Nothing if the paste doesn't exist.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getPaste",
          "package": "haskheap",
          "signature": "PasteID -\u003e IO (Either Error Success)",
          "source": "src/Network-Haskheap.html#getPaste",
          "type": "function"
        },
        "index": {
          "description": "Get paste from refheap Will return IO Nothing if the paste doesn exist",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getPaste",
          "normalized": "PasteID-\u003eIO(Either Error Success)",
          "package": "haskheap",
          "partial": "Paste",
          "signature": "PasteID-\u003eIO(Either Error Success)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getPaste"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether or not the paste is Private. True is yes.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getPrivate",
          "package": "haskheap",
          "signature": "Bool",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "Whether or not the paste is Private True is yes",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getPrivate",
          "package": "haskheap",
          "partial": "Private",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getPrivate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eURL of the paste.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getURL",
          "package": "haskheap",
          "signature": "Maybe URI",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "URL of the paste",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getURL",
          "package": "haskheap",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser who created the paste. Nothing indicates anonymous.\n\u003c/p\u003e",
          "module": "Network.Haskheap",
          "name": "getUser",
          "package": "haskheap",
          "signature": "Maybe String",
          "source": "src/Network-Haskheap.html#Success",
          "type": "function"
        },
        "index": {
          "description": "User who created the paste Nothing indicates anonymous",
          "hierarchy": "Network Haskheap",
          "module": "Network.Haskheap",
          "name": "getUser",
          "package": "haskheap",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskheap/docs/Network-Haskheap.html#v:getUser"
      }
    }
  ]
]