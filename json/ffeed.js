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
        "word": "ffeed"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToplevel FriendFeed API module, including re-exports\n of modules required to work with FriendFeed from other\n modules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.API",
          "name": "API",
          "package": "ffeed",
          "source": "src/FriendFeed-API.html",
          "type": "module"
        },
        "index": {
          "description": "Toplevel FriendFeed API module including re-exports of modules required to work with FriendFeed from other modules",
          "hierarchy": "FriendFeed API",
          "module": "FriendFeed.API",
          "name": "API",
          "package": "ffeed",
          "partial": "API",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-API.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eEntry-specific FriendFeed API calls.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Entry",
          "name": "Entry",
          "package": "ffeed",
          "source": "src/FriendFeed-Entry.html",
          "type": "module"
        },
        "index": {
          "description": "Entry-specific FriendFeed API calls",
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "Entry",
          "package": "ffeed",
          "partial": "Entry",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Entry",
          "name": "getDomainEntries",
          "package": "ffeed",
          "signature": "[String] -\u003e Bool -\u003e Bool -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Entry.html#getDomainEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "getDomainEntries",
          "normalized": "[String]-\u003eBool-\u003eBool-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Domain Entries",
          "signature": "[String]-\u003eBool-\u003eBool-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#v:getDomainEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the entries the authenticated user would see on their \n FriendFeed homepage - all of their subscriptions and \n friend-of-a-friend entries.\n\u003c/p\u003e",
          "module": "FriendFeed.Entry",
          "name": "getFriendEntries",
          "package": "ffeed",
          "signature": "FFm [Entry]",
          "source": "src/FriendFeed-Entry.html#getFriendEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns the entries the authenticated user would see on their FriendFeed homepage all of their subscriptions and friend-of-a-friend entries",
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "getFriendEntries",
          "normalized": "FFm[Entry]",
          "package": "ffeed",
          "partial": "Friend Entries",
          "signature": "FFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#v:getFriendEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Entry",
          "name": "getIdEntries",
          "package": "ffeed",
          "signature": "[UUID] -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Entry.html#getIdEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "getIdEntries",
          "normalized": "[UUID]-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Id Entries",
          "signature": "[UUID]-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#v:getIdEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Entry",
          "name": "getIdEntry",
          "package": "ffeed",
          "signature": "UUID -\u003e FFm Entry",
          "source": "src/FriendFeed-Entry.html#getIdEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "getIdEntry",
          "normalized": "UUID-\u003eFFm Entry",
          "package": "ffeed",
          "partial": "Id Entry",
          "signature": "UUID-\u003eFFm Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#v:getIdEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Entry",
          "name": "getURLEntries",
          "package": "ffeed",
          "signature": "URLString -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Entry.html#getURLEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Entry",
          "module": "FriendFeed.Entry",
          "name": "getURLEntries",
          "normalized": "URLString-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "URLEntries",
          "signature": "URLString-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Entry.html#v:getURLEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eActions for fetching info regarding a user's FriendFeed lists.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.List",
          "name": "List",
          "package": "ffeed",
          "source": "src/FriendFeed-List.html",
          "type": "module"
        },
        "index": {
          "description": "Actions for fetching info regarding user FriendFeed lists",
          "hierarchy": "FriendFeed List",
          "module": "FriendFeed.List",
          "name": "List",
          "package": "ffeed",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns entries from the authenticated users \n list with the given nickname:\n\u003c/p\u003e",
          "module": "FriendFeed.List",
          "name": "getListEntries",
          "package": "ffeed",
          "signature": "ListName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-List.html#getListEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns entries from the authenticated users list with the given nickname",
          "hierarchy": "FriendFeed List",
          "module": "FriendFeed.List",
          "name": "getListEntries",
          "normalized": "ListName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "List Entries",
          "signature": "ListName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-List.html#v:getListEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all of the list's members \n and the url associated with the list\n (Authentication required): \n\u003c/p\u003e",
          "module": "FriendFeed.List",
          "name": "getListProfile",
          "package": "ffeed",
          "signature": "ListName -\u003e FFm List",
          "source": "src/FriendFeed-List.html#getListProfile",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all of the list members and the url associated with the list Authentication required",
          "hierarchy": "FriendFeed List",
          "module": "FriendFeed.List",
          "name": "getListProfile",
          "normalized": "ListName-\u003eFFm List",
          "package": "ffeed",
          "partial": "List Profile",
          "signature": "ListName-\u003eFFm List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-List.html#v:getListProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMonadic layer for handling calls and processing of FriendFeed API\n interaction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Monad",
          "name": "Monad",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "Monadic layer for handling calls and processing of FriendFeed API interaction",
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "Monad",
          "package": "ffeed",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "AuthUser",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#AuthUser",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "AuthUser",
          "package": "ffeed",
          "partial": "Auth User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:AuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ErrM",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#ErrM",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ErrM",
          "package": "ffeed",
          "partial": "Err",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:ErrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFeedErr",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#FFeedErr",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFeedErr",
          "package": "ffeed",
          "partial": "FFeed Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:FFeedErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFm",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#FFm",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFm",
          "package": "ffeed",
          "partial": "FFm",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:FFm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFmEnv",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFmEnv",
          "package": "ffeed",
          "partial": "FFm Env",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:FFmEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "SomeFFeedException",
          "package": "ffeed",
          "source": "src/FriendFeed-Monad.html#SomeFFeedException",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "SomeFFeedException",
          "package": "ffeed",
          "partial": "Some FFeed Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#t:SomeFFeedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "AuthUser",
          "package": "ffeed",
          "signature": "AuthUser",
          "source": "src/FriendFeed-Monad.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "AuthUser",
          "package": "ffeed",
          "partial": "Auth User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:AuthUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFeedErr",
          "package": "ffeed",
          "signature": "FFeedErr",
          "source": "src/FriendFeed-Monad.html#FFeedErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFeedErr",
          "package": "ffeed",
          "partial": "FFeed Err",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:FFeedErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFm",
          "package": "ffeed",
          "signature": "FFm (FFmEnv -\u003e IO a)",
          "source": "src/FriendFeed-Monad.html#FFm",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFm",
          "normalized": "FFm(FFmEnv-\u003eIO a)",
          "package": "ffeed",
          "partial": "FFm",
          "signature": "FFm(FFmEnv-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:FFm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "FFmEnv",
          "package": "ffeed",
          "signature": "FFmEnv",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "FFmEnv",
          "package": "ffeed",
          "partial": "FFm Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:FFmEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "SomeFFeedException",
          "package": "ffeed",
          "signature": "SomeFFeedException e",
          "source": "src/FriendFeed-Monad.html#SomeFFeedException",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "SomeFFeedException",
          "package": "ffeed",
          "partial": "Some FFeed Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:SomeFFeedException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "api_base",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#api_base",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "api_base",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:api_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "authCall",
          "package": "ffeed",
          "signature": "FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#authCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "authCall",
          "normalized": "FFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Call",
          "signature": "FFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:authCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "authUserKey",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "authUserKey",
          "package": "ffeed",
          "partial": "User Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:authUserKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "authUserName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#AuthUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "authUserName",
          "package": "ffeed",
          "partial": "User Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:authUserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "catchFFeed",
          "package": "ffeed",
          "signature": "FFm a -\u003e (FFeedErr -\u003e FFm a) -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#catchFFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "catchFFeed",
          "normalized": "FFm a-\u003e(FFeedErr-\u003eFFm a)-\u003eFFm a",
          "package": "ffeed",
          "partial": "FFeed",
          "signature": "FFm a-\u003e(FFeedErr-\u003eFFm a)-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:catchFFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "checkResponse",
          "package": "ffeed",
          "signature": "String -\u003e ErrM String",
          "source": "src/FriendFeed-Monad.html#checkResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "checkResponse",
          "normalized": "String-\u003eErrM String",
          "package": "ffeed",
          "partial": "Response",
          "signature": "String-\u003eErrM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:checkResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffErrorCode",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#FFeedErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffErrorCode",
          "package": "ffeed",
          "partial": "Error Code",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffErrorCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffErrorLoc",
          "package": "ffeed",
          "signature": "Maybe String",
          "source": "src/FriendFeed-Monad.html#FFeedErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffErrorLoc",
          "package": "ffeed",
          "partial": "Error Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffErrorLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffErrorSource",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#FFeedErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffErrorSource",
          "package": "ffeed",
          "partial": "Error Source",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffErrorSource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedCall",
          "package": "ffeed",
          "signature": "[String] -\u003e [(String, String)] -\u003e FFm String",
          "source": "src/FriendFeed-Monad.html#ffeedCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedCall",
          "normalized": "[String]-\u003e[(String,String)]-\u003eFFm String",
          "package": "ffeed",
          "partial": "Call",
          "signature": "[String]-\u003e[(String,String)]-\u003eFFm String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedCall_",
          "package": "ffeed",
          "signature": "[String] -\u003e [(String, String)] -\u003e FFm ()",
          "source": "src/FriendFeed-Monad.html#ffeedCall_",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedCall_",
          "normalized": "[String]-\u003e[(String,String)]-\u003eFFm()",
          "package": "ffeed",
          "partial": "Call",
          "signature": "[String]-\u003e[(String,String)]-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedCall_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedError",
          "package": "ffeed",
          "signature": "FFeedErr",
          "source": "src/FriendFeed-Monad.html#ffeedError",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedError",
          "package": "ffeed",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedFromException",
          "package": "ffeed",
          "signature": "SomeException -\u003e Maybe e",
          "source": "src/FriendFeed-Monad.html#ffeedFromException",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "ffeed",
          "partial": "From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedToException",
          "package": "ffeed",
          "signature": "e -\u003e SomeException",
          "source": "src/FriendFeed-Monad.html#ffeedToException",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedToException",
          "normalized": "a-\u003eSomeException",
          "package": "ffeed",
          "partial": "To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslate",
          "package": "ffeed",
          "signature": "FFm String -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#ffeedTranslate",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslate",
          "normalized": "FFm String-\u003eFFm a",
          "package": "ffeed",
          "partial": "Translate",
          "signature": "FFm String-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedTranslate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslateLs",
          "package": "ffeed",
          "signature": "String -\u003e FFm String -\u003e FFm [a]",
          "source": "src/FriendFeed-Monad.html#ffeedTranslateLs",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslateLs",
          "normalized": "String-\u003eFFm String-\u003eFFm[a]",
          "package": "ffeed",
          "partial": "Translate Ls",
          "signature": "String-\u003eFFm String-\u003eFFm[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedTranslateLs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslateSub",
          "package": "ffeed",
          "signature": "String -\u003e FFm String -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#ffeedTranslateSub",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeedTranslateSub",
          "normalized": "String-\u003eFFm String-\u003eFFm a",
          "package": "ffeed",
          "partial": "Translate Sub",
          "signature": "String-\u003eFFm String-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeedTranslateSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffeed_base",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Monad.html#ffeed_base",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffeed_base",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffeed_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_auth_user",
          "package": "ffeed",
          "signature": "AuthUser",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_auth_user",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_auth_user"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_base",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_base",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_entry_start",
          "package": "ffeed",
          "signature": "Maybe Int",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_entry_start",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_entry_start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_is_post",
          "package": "ffeed",
          "signature": "Bool",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_is_post",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_is_post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_page_size",
          "package": "ffeed",
          "signature": "Maybe Int",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_page_size",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_page_size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "ffm_services_filter",
          "package": "ffeed",
          "signature": "[String]",
          "source": "src/FriendFeed-Monad.html#FFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "ffm_services_filter",
          "normalized": "[String]",
          "package": "ffeed",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:ffm_services_filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "forService",
          "package": "ffeed",
          "signature": "String -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#forService",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "forService",
          "normalized": "String-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Service",
          "signature": "String-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:forService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "handleFFeed",
          "package": "ffeed",
          "signature": "(FFeedErr -\u003e FFm a) -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#handleFFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "handleFFeed",
          "normalized": "(FFeedErr-\u003eFFm a)-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "FFeed",
          "signature": "(FFeedErr-\u003eFFm a)-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:handleFFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "liftIO",
          "package": "ffeed",
          "signature": "IO a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#liftIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "liftIO",
          "normalized": "IO a-\u003eFFm a",
          "package": "ffeed",
          "partial": "IO",
          "signature": "IO a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:liftIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "lsArg",
          "package": "ffeed",
          "signature": "String -\u003e String -\u003e [String] -\u003e [String]",
          "source": "src/FriendFeed-Monad.html#lsArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "lsArg",
          "normalized": "String-\u003eString-\u003e[String]-\u003e[String]",
          "package": "ffeed",
          "partial": "Arg",
          "signature": "String-\u003eString-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:lsArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "mbArg",
          "package": "ffeed",
          "signature": "String -\u003e Maybe String -\u003e [String] -\u003e [String]",
          "source": "src/FriendFeed-Monad.html#mbArg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "mbArg",
          "normalized": "String-\u003eMaybe String-\u003e[String]-\u003e[String]",
          "package": "ffeed",
          "partial": "Arg",
          "signature": "String-\u003eMaybe String-\u003e[String]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:mbArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "mbArg2",
          "package": "ffeed",
          "signature": "String -\u003e Maybe String -\u003e [(String, String)] -\u003e [(String, String)]",
          "source": "src/FriendFeed-Monad.html#mbArg2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "mbArg2",
          "normalized": "String-\u003eMaybe String-\u003e[(String,String)]-\u003e[(String,String)]",
          "package": "ffeed",
          "partial": "Arg",
          "signature": "String-\u003eMaybe String-\u003e[(String,String)]-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:mbArg2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "nullFFmEnv",
          "package": "ffeed",
          "signature": "AuthUser -\u003e FFmEnv",
          "source": "src/FriendFeed-Monad.html#nullFFmEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "nullFFmEnv",
          "normalized": "AuthUser-\u003eFFmEnv",
          "package": "ffeed",
          "partial": "FFm Env",
          "signature": "AuthUser-\u003eFFmEnv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:nullFFmEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "onSuccess",
          "package": "ffeed",
          "signature": "FFm () -\u003e FFm Bool",
          "source": "src/FriendFeed-Monad.html#onSuccess",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "onSuccess",
          "normalized": "FFm()-\u003eFFm Bool",
          "package": "ffeed",
          "partial": "Success",
          "signature": "FFm()-\u003eFFm Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:onSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "postMethod",
          "package": "ffeed",
          "signature": "FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#postMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "postMethod",
          "normalized": "FFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Method",
          "signature": "FFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:postMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "runFF",
          "package": "ffeed",
          "signature": "String -\u003e String -\u003e FFm a -\u003e IO a",
          "source": "src/FriendFeed-Monad.html#runFF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "runFF",
          "normalized": "String-\u003eString-\u003eFFm a-\u003eIO a",
          "package": "ffeed",
          "partial": "FF",
          "signature": "String-\u003eString-\u003eFFm a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:runFF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "startIndex",
          "package": "ffeed",
          "signature": "Int -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#startIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "startIndex",
          "normalized": "Int-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Index",
          "signature": "Int-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:startIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "throwFFeedErr",
          "package": "ffeed",
          "signature": "FFeedErr -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#throwFFeedErr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "throwFFeedErr",
          "normalized": "FFeedErr-\u003eFFm a",
          "package": "ffeed",
          "partial": "FFeed Err",
          "signature": "FFeedErr-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:throwFFeedErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "tryFFeed",
          "package": "ffeed",
          "signature": "FFm a -\u003e FFm (Either FFeedErr a)",
          "source": "src/FriendFeed-Monad.html#tryFFeed",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "tryFFeed",
          "normalized": "FFm a-\u003eFFm(Either FFeedErr a)",
          "package": "ffeed",
          "partial": "FFeed",
          "signature": "FFm a-\u003eFFm(Either FFeedErr a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:tryFFeed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "withBase",
          "package": "ffeed",
          "signature": "URLString -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#withBase",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "withBase",
          "normalized": "URLString-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Base",
          "signature": "URLString-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:withBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "withEnv",
          "package": "ffeed",
          "signature": "(FFmEnv -\u003e FFmEnv) -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#withEnv",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "withEnv",
          "normalized": "(FFmEnv-\u003eFFmEnv)-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Env",
          "signature": "(FFmEnv-\u003eFFmEnv)-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:withEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "withPageSize",
          "package": "ffeed",
          "signature": "Int -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#withPageSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "withPageSize",
          "normalized": "Int-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "Page Size",
          "signature": "Int-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:withPageSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Monad",
          "name": "withUser",
          "package": "ffeed",
          "signature": "String -\u003e String -\u003e FFm a -\u003e FFm a",
          "source": "src/FriendFeed-Monad.html#withUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Monad",
          "module": "FriendFeed.Monad",
          "name": "withUser",
          "normalized": "String-\u003eString-\u003eFFm a-\u003eFFm a",
          "package": "ffeed",
          "partial": "User",
          "signature": "String-\u003eString-\u003eFFm a-\u003eFFm a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Monad.html#v:withUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eActions for publishing entries, comments, likes etc. to FriendFeed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Publish",
          "name": "Publish",
          "package": "ffeed",
          "source": "src/FriendFeed-Publish.html",
          "type": "module"
        },
        "index": {
          "description": "Actions for publishing entries comments likes etc to FriendFeed",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "Publish",
          "package": "ffeed",
          "partial": "Publish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a comment or edit an existing comment on a FriendFeed entry.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "addComment",
          "package": "ffeed",
          "signature": "EntryID -\u003e String -\u003e FFm CommentID",
          "source": "src/FriendFeed-Publish.html#addComment",
          "type": "function"
        },
        "index": {
          "description": "Add comment or edit an existing comment on FriendFeed entry",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "addComment",
          "normalized": "EntryID-\u003eString-\u003eFFm CommentID",
          "package": "ffeed",
          "partial": "Comment",
          "signature": "EntryID-\u003eString-\u003eFFm CommentID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:addComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a \u003ca\u003eLike\u003c/a\u003e to a FriendFeed entry for the authenticated user. \n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "addLike",
          "package": "ffeed",
          "signature": "EntryID -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#addLike",
          "type": "function"
        },
        "index": {
          "description": "add Like to FriendFeed entry for the authenticated user",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "addLike",
          "normalized": "EntryID-\u003eFFm()",
          "package": "ffeed",
          "partial": "Like",
          "signature": "EntryID-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:addLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete an existing comment.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "deleteComment",
          "package": "ffeed",
          "signature": "EntryID -\u003e CommentID -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#deleteComment",
          "type": "function"
        },
        "index": {
          "description": "delete an existing comment",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "deleteComment",
          "normalized": "EntryID-\u003eCommentID-\u003eFFm()",
          "package": "ffeed",
          "partial": "Comment",
          "signature": "EntryID-\u003eCommentID-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:deleteComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an existing entry, but un-delete if 2nd arg is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "deleteEntry",
          "package": "ffeed",
          "signature": "EntryID -\u003e Bool -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#deleteEntry",
          "type": "function"
        },
        "index": {
          "description": "Delete an existing entry but un-delete if nd arg is True",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "deleteEntry",
          "normalized": "EntryID-\u003eBool-\u003eFFm()",
          "package": "ffeed",
          "partial": "Entry",
          "signature": "EntryID-\u003eBool-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:deleteEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete an existing \u003ccode\u003e\u003ca\u003eLike\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "deleteLike",
          "package": "ffeed",
          "signature": "EntryID -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#deleteLike",
          "type": "function"
        },
        "index": {
          "description": "delete an existing Like",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "deleteLike",
          "normalized": "EntryID-\u003eFFm()",
          "package": "ffeed",
          "partial": "Like",
          "signature": "EntryID-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:deleteLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eadd a comment or edit an existing comment on a FriendFeed entry.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "editComment",
          "package": "ffeed",
          "signature": "EntryID -\u003e String -\u003e CommentID -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#editComment",
          "type": "function"
        },
        "index": {
          "description": "add comment or edit an existing comment on FriendFeed entry",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "editComment",
          "normalized": "EntryID-\u003eString-\u003eCommentID-\u003eFFm()",
          "package": "ffeed",
          "partial": "Comment",
          "signature": "EntryID-\u003eString-\u003eCommentID-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:editComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHide an entry, but un-hide/expose if 2nd arg is \u003ccode\u003eTrue\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "hideEntry",
          "package": "ffeed",
          "signature": "EntryID -\u003e Bool -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#hideEntry",
          "type": "function"
        },
        "index": {
          "description": "Hide an entry but un-hide expose if nd arg is True",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "hideEntry",
          "normalized": "EntryID-\u003eBool-\u003eFFm()",
          "package": "ffeed",
          "partial": "Entry",
          "signature": "EntryID-\u003eBool-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:hideEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePublish a new entry on the authenticated user's feed.\n\u003c/p\u003e",
          "module": "FriendFeed.Publish",
          "name": "publishLink",
          "package": "ffeed",
          "signature": "String -\u003e URLString -\u003e Maybe String -\u003e FFm ()",
          "source": "src/FriendFeed-Publish.html#publishLink",
          "type": "function"
        },
        "index": {
          "description": "Publish new entry on the authenticated user feed",
          "hierarchy": "FriendFeed Publish",
          "module": "FriendFeed.Publish",
          "name": "publishLink",
          "normalized": "String-\u003eURLString-\u003eMaybe String-\u003eFFm()",
          "package": "ffeed",
          "partial": "Link",
          "signature": "String-\u003eURLString-\u003eMaybe String-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Publish.html#v:publishLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eActions for fetching info on and entries from a room.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Room",
          "name": "Room",
          "package": "ffeed",
          "source": "src/FriendFeed-Room.html",
          "type": "module"
        },
        "index": {
          "description": "Actions for fetching info on and entries from room",
          "hierarchy": "FriendFeed Room",
          "module": "FriendFeed.Room",
          "name": "Room",
          "package": "ffeed",
          "partial": "Room",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Room.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the most recent entries in the room with the given nickname.\n If the room is private, authentication is required.\n\u003c/p\u003e",
          "module": "FriendFeed.Room",
          "name": "getRoomEntries",
          "package": "ffeed",
          "signature": "RoomName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Room.html#getRoomEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns the most recent entries in the room with the given nickname If the room is private authentication is required",
          "hierarchy": "FriendFeed Room",
          "module": "FriendFeed.Room",
          "name": "getRoomEntries",
          "normalized": "RoomName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Room Entries",
          "signature": "RoomName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Room.html#v:getRoomEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all of the room's members \n and the url associated with the room \n (Authentication required for private rooms).\n\u003c/p\u003e",
          "module": "FriendFeed.Room",
          "name": "getRoomProfile",
          "package": "ffeed",
          "signature": "RoomName -\u003e FFm Room",
          "source": "src/FriendFeed-Room.html#getRoomProfile",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all of the room members and the url associated with the room Authentication required for private rooms",
          "hierarchy": "FriendFeed Room",
          "module": "FriendFeed.Room",
          "name": "getRoomProfile",
          "normalized": "RoomName-\u003eFFm Room",
          "package": "ffeed",
          "partial": "Room Profile",
          "signature": "RoomName-\u003eFFm Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Room.html#v:getRoomProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the entries the authenticated user \n would see on their Rooms page - entries from all \n of the rooms they are members of.\n\u003c/p\u003e",
          "module": "FriendFeed.Room",
          "name": "getRoomsFeeds",
          "package": "ffeed",
          "signature": "FFm [Entry]",
          "source": "src/FriendFeed-Room.html#getRoomsFeeds",
          "type": "function"
        },
        "index": {
          "description": "Returns the entries the authenticated user would see on their Rooms page entries from all of the rooms they are members of",
          "hierarchy": "FriendFeed Room",
          "module": "FriendFeed.Room",
          "name": "getRoomsFeeds",
          "normalized": "FFm[Entry]",
          "package": "ffeed",
          "partial": "Rooms Feeds",
          "signature": "FFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Room.html#v:getRoomsFeeds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eActions for publishing entries, comments, likes etc. to FriendFeed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Search",
          "name": "Search",
          "package": "ffeed",
          "source": "src/FriendFeed-Search.html",
          "type": "module"
        },
        "index": {
          "description": "Actions for publishing entries comments likes etc to FriendFeed",
          "hierarchy": "FriendFeed Search",
          "module": "FriendFeed.Search",
          "name": "Search",
          "package": "ffeed",
          "partial": "Search",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Search.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a search over the entries in FriendFeed.\n\u003c/p\u003e",
          "module": "FriendFeed.Search",
          "name": "searchEntries",
          "package": "ffeed",
          "signature": "String -\u003e Maybe UserName -\u003e Maybe ServiceName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Search.html#searchEntries",
          "type": "function"
        },
        "index": {
          "description": "Executes search over the entries in FriendFeed",
          "hierarchy": "FriendFeed Search",
          "module": "FriendFeed.Search",
          "name": "searchEntries",
          "normalized": "String-\u003eMaybe UserName-\u003eMaybe ServiceName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Entries",
          "signature": "String-\u003eMaybe UserName-\u003eMaybe ServiceName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Search.html#v:searchEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAction for fetching the current services supported by FriendFeed.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Service",
          "name": "Service",
          "package": "ffeed",
          "source": "src/FriendFeed-Service.html",
          "type": "module"
        },
        "index": {
          "description": "Action for fetching the current services supported by FriendFeed",
          "hierarchy": "FriendFeed Service",
          "module": "FriendFeed.Service",
          "name": "Service",
          "package": "ffeed",
          "partial": "Service",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Service.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLists all services currently supported by FriendFeed.\n\u003c/p\u003e",
          "module": "FriendFeed.Service",
          "name": "getServices",
          "package": "ffeed",
          "signature": "FFm [Service]",
          "source": "src/FriendFeed-Service.html#getServices",
          "type": "function"
        },
        "index": {
          "description": "Lists all services currently supported by FriendFeed",
          "hierarchy": "FriendFeed Service",
          "module": "FriendFeed.Service",
          "name": "getServices",
          "normalized": "FFm[Service]",
          "package": "ffeed",
          "partial": "Services",
          "signature": "FFm[Service]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Service.html#v:getServices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBinding to FriendFeed API controlling subscriptions to rooms\n and other users.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Subscribe",
          "name": "Subscribe",
          "package": "ffeed",
          "source": "src/FriendFeed-Subscribe.html",
          "type": "module"
        },
        "index": {
          "description": "Binding to FriendFeed API controlling subscriptions to rooms and other users",
          "hierarchy": "FriendFeed Subscribe",
          "module": "FriendFeed.Subscribe",
          "name": "Subscribe",
          "package": "ffeed",
          "partial": "Subscribe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Subscribe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Subscribe",
          "name": "subscribeRoom",
          "package": "ffeed",
          "signature": "RoomName -\u003e FFm ()",
          "source": "src/FriendFeed-Subscribe.html#subscribeRoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Subscribe",
          "module": "FriendFeed.Subscribe",
          "name": "subscribeRoom",
          "normalized": "RoomName-\u003eFFm()",
          "package": "ffeed",
          "partial": "Room",
          "signature": "RoomName-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Subscribe.html#v:subscribeRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Subscribe",
          "name": "subscribeUser",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm ()",
          "source": "src/FriendFeed-Subscribe.html#subscribeUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Subscribe",
          "module": "FriendFeed.Subscribe",
          "name": "subscribeUser",
          "normalized": "UserName-\u003eFFm()",
          "package": "ffeed",
          "partial": "User",
          "signature": "UserName-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Subscribe.html#v:subscribeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Subscribe",
          "name": "unsubscribeRoom",
          "package": "ffeed",
          "signature": "RoomName -\u003e FFm ()",
          "source": "src/FriendFeed-Subscribe.html#unsubscribeRoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Subscribe",
          "module": "FriendFeed.Subscribe",
          "name": "unsubscribeRoom",
          "normalized": "RoomName-\u003eFFm()",
          "package": "ffeed",
          "partial": "Room",
          "signature": "RoomName-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Subscribe.html#v:unsubscribeRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Subscribe",
          "name": "unsubscribeUser",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm ()",
          "source": "src/FriendFeed-Subscribe.html#unsubscribeUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Subscribe",
          "module": "FriendFeed.Subscribe",
          "name": "unsubscribeUser",
          "normalized": "UserName-\u003eFFm()",
          "package": "ffeed",
          "partial": "User",
          "signature": "UserName-\u003eFFm()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Subscribe.html#v:unsubscribeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e(De)serializing JSON values representing FriendFeed API data types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Types.Import",
          "name": "Import",
          "package": "ffeed",
          "source": "src/FriendFeed-Types-Import.html",
          "type": "module"
        },
        "index": {
          "description": "De serializing JSON values representing FriendFeed API data types",
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "Import",
          "package": "ffeed",
          "partial": "Import",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "JM",
          "package": "ffeed",
          "source": "src/FriendFeed-Types-Import.html#JM",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "JM",
          "package": "ffeed",
          "partial": "JM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#t:JM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "(-=\u003e)",
          "package": "ffeed",
          "signature": "a -\u003e b -\u003e (a, b)",
          "source": "src/FriendFeed-Types-Import.html#-%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "(-=\u003e) -=\u003e",
          "normalized": "a-\u003eb-\u003e(a,b)",
          "package": "ffeed",
          "signature": "a-\u003eb-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:-45--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "JM",
          "package": "ffeed",
          "signature": "JM (String -\u003e [(String, JSValue)] -\u003e Result a)",
          "source": "src/FriendFeed-Types-Import.html#JM",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "JM",
          "normalized": "JM(String-\u003e[(String,JSValue)]-\u003eResult a)",
          "package": "ffeed",
          "partial": "JM",
          "signature": "JM(String-\u003e[(String,JSValue)]-\u003eResult a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:JM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "get",
          "package": "ffeed",
          "signature": "String -\u003e JM String",
          "source": "src/FriendFeed-Types-Import.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "get",
          "normalized": "String-\u003eJM String",
          "package": "ffeed",
          "signature": "String-\u003eJM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getB",
          "package": "ffeed",
          "signature": "String -\u003e JM Bool",
          "source": "src/FriendFeed-Types-Import.html#getB",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getB",
          "normalized": "String-\u003eJM Bool",
          "package": "ffeed",
          "signature": "String-\u003eJM Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getInt",
          "package": "ffeed",
          "signature": "String -\u003e JM Integer",
          "source": "src/FriendFeed-Types-Import.html#getInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getInt",
          "normalized": "String-\u003eJM Integer",
          "package": "ffeed",
          "partial": "Int",
          "signature": "String-\u003eJM Integer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getJSON",
          "package": "ffeed",
          "signature": "String -\u003e JM JSValue",
          "source": "src/FriendFeed-Types-Import.html#getJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getJSON",
          "normalized": "String-\u003eJM JSValue",
          "package": "ffeed",
          "partial": "JSON",
          "signature": "String-\u003eJM JSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getLoc",
          "package": "ffeed",
          "signature": "JM String",
          "source": "src/FriendFeed-Types-Import.html#getLoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getLoc",
          "package": "ffeed",
          "partial": "Loc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getLoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getMb",
          "package": "ffeed",
          "signature": "String -\u003e JM (Maybe JSValue)",
          "source": "src/FriendFeed-Types-Import.html#getMb",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getMb",
          "normalized": "String-\u003eJM(Maybe JSValue)",
          "package": "ffeed",
          "partial": "Mb",
          "signature": "String-\u003eJM(Maybe JSValue)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getMb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "getMbS",
          "package": "ffeed",
          "signature": "String -\u003e JM (Maybe String)",
          "source": "src/FriendFeed-Types-Import.html#getMbS",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "getMbS",
          "normalized": "String-\u003eJM(Maybe String)",
          "package": "ffeed",
          "partial": "Mb",
          "signature": "String-\u003eJM(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:getMbS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "liftR",
          "package": "ffeed",
          "signature": "Result a -\u003e JM a",
          "source": "src/FriendFeed-Types-Import.html#liftR",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "liftR",
          "normalized": "Result a-\u003eJM a",
          "package": "ffeed",
          "signature": "Result a-\u003eJM a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:liftR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readComment",
          "package": "ffeed",
          "signature": "JM Comment",
          "source": "src/FriendFeed-Types-Import.html#readComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readComment",
          "package": "ffeed",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readContent",
          "package": "ffeed",
          "signature": "JM Content",
          "source": "src/FriendFeed-Types-Import.html#readContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readContent",
          "package": "ffeed",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readEnclosure",
          "package": "ffeed",
          "signature": "JM Enclosure",
          "source": "src/FriendFeed-Types-Import.html#readEnclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readEnclosure",
          "package": "ffeed",
          "partial": "Enclosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readEnclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readEntry",
          "package": "ffeed",
          "signature": "JM Entry",
          "source": "src/FriendFeed-Types-Import.html#readEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readEntry",
          "package": "ffeed",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readFFList",
          "package": "ffeed",
          "signature": "JM List",
          "source": "src/FriendFeed-Types-Import.html#readFFList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readFFList",
          "package": "ffeed",
          "partial": "FFList",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readFFList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readJS",
          "package": "ffeed",
          "signature": "String -\u003e a -\u003e JM a -\u003e JSValue -\u003e Result a",
          "source": "src/FriendFeed-Types-Import.html#readJS",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readJS",
          "normalized": "String-\u003ea-\u003eJM a-\u003eJSValue-\u003eResult a",
          "package": "ffeed",
          "partial": "JS",
          "signature": "String-\u003ea-\u003eJM a-\u003eJSValue-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readJSONs",
          "package": "ffeed",
          "signature": "JSValue -\u003e Result [a]",
          "source": "src/FriendFeed-Types-Import.html#readJSONs",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readJSONs",
          "normalized": "JSValue-\u003eResult[a]",
          "package": "ffeed",
          "partial": "JSONs",
          "signature": "JSValue-\u003eResult[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readJSONs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readLike",
          "package": "ffeed",
          "signature": "JM Like",
          "source": "src/FriendFeed-Types-Import.html#readLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readLike",
          "package": "ffeed",
          "partial": "Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readMedia",
          "package": "ffeed",
          "signature": "JM Media",
          "source": "src/FriendFeed-Types-Import.html#readMedia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readMedia",
          "package": "ffeed",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readResource",
          "package": "ffeed",
          "signature": "JM (Resource a)",
          "source": "src/FriendFeed-Types-Import.html#readResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readResource",
          "package": "ffeed",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readRoom",
          "package": "ffeed",
          "signature": "JM Room",
          "source": "src/FriendFeed-Types-Import.html#readRoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readRoom",
          "package": "ffeed",
          "partial": "Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readService",
          "package": "ffeed",
          "signature": "JM Service",
          "source": "src/FriendFeed-Types-Import.html#readService",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readService",
          "package": "ffeed",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readThumbnail",
          "package": "ffeed",
          "signature": "JM Thumbnail",
          "source": "src/FriendFeed-Types-Import.html#readThumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readThumbnail",
          "package": "ffeed",
          "partial": "Thumbnail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readThumbnail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readUpdateInfo",
          "package": "ffeed",
          "signature": "JM UpdateInfo",
          "source": "src/FriendFeed-Types-Import.html#readUpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readUpdateInfo",
          "package": "ffeed",
          "partial": "Update Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readUpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readUser",
          "package": "ffeed",
          "signature": "JM User",
          "source": "src/FriendFeed-Types-Import.html#readUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readUser",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "readVia",
          "package": "ffeed",
          "signature": "JSValue -\u003e Result Via",
          "source": "src/FriendFeed-Types-Import.html#readVia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "readVia",
          "normalized": "JSValue-\u003eResult Via",
          "package": "ffeed",
          "partial": "Via",
          "signature": "JSValue-\u003eResult Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:readVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "runJM",
          "package": "ffeed",
          "signature": "String -\u003e [(String, JSValue)] -\u003e JM a -\u003e Result a",
          "source": "src/FriendFeed-Types-Import.html#runJM",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "runJM",
          "normalized": "String-\u003e[(String,JSValue)]-\u003eJM a-\u003eResult a",
          "package": "ffeed",
          "partial": "JM",
          "signature": "String-\u003e[(String,JSValue)]-\u003eJM a-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:runJM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showComment",
          "package": "ffeed",
          "signature": "Comment -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showComment",
          "normalized": "Comment-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Comment",
          "signature": "Comment-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showContent",
          "package": "ffeed",
          "signature": "Content -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showContent",
          "normalized": "Content-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Content",
          "signature": "Content-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showEnclosure",
          "package": "ffeed",
          "signature": "Enclosure -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showEnclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showEnclosure",
          "normalized": "Enclosure-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Enclosure",
          "signature": "Enclosure-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showEnclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showEntry",
          "package": "ffeed",
          "signature": "Entry -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showEntry",
          "normalized": "Entry-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Entry",
          "signature": "Entry-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showFFList",
          "package": "ffeed",
          "signature": "List -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showFFList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showFFList",
          "normalized": "List-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "FFList",
          "signature": "List-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showFFList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showJS",
          "package": "ffeed",
          "signature": "(a -\u003e [(String, JSValue)]) -\u003e a -\u003e JSValue",
          "source": "src/FriendFeed-Types-Import.html#showJS",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showJS",
          "normalized": "(a-\u003e[(String,JSValue)])-\u003ea-\u003eJSValue",
          "package": "ffeed",
          "partial": "JS",
          "signature": "(a-\u003e[(String,JSValue)])-\u003ea-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showJS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showLike",
          "package": "ffeed",
          "signature": "Like -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showLike",
          "normalized": "Like-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Like",
          "signature": "Like-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showMedia",
          "package": "ffeed",
          "signature": "Media -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showMedia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showMedia",
          "normalized": "Media-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Media",
          "signature": "Media-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showResource",
          "package": "ffeed",
          "signature": "Resource a -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showResource",
          "normalized": "Resource a-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Resource",
          "signature": "Resource a-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showRoom",
          "package": "ffeed",
          "signature": "Room -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showRoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showRoom",
          "normalized": "Room-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Room",
          "signature": "Room-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showService",
          "package": "ffeed",
          "signature": "Service -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showService",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showService",
          "normalized": "Service-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Service",
          "signature": "Service-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showStr",
          "package": "ffeed",
          "signature": "String -\u003e JSValue",
          "source": "src/FriendFeed-Types-Import.html#showStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showStr",
          "normalized": "String-\u003eJSValue",
          "package": "ffeed",
          "partial": "Str",
          "signature": "String-\u003eJSValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showThumbnail",
          "package": "ffeed",
          "signature": "Thumbnail -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showThumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showThumbnail",
          "normalized": "Thumbnail-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Thumbnail",
          "signature": "Thumbnail-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showThumbnail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showUpdateInfo",
          "package": "ffeed",
          "signature": "UpdateInfo -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showUpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showUpdateInfo",
          "normalized": "UpdateInfo-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Update Info",
          "signature": "UpdateInfo-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showUpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showUser",
          "package": "ffeed",
          "signature": "User -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showUser",
          "normalized": "User-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "User",
          "signature": "User-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "showVia",
          "package": "ffeed",
          "signature": "Via -\u003e [(String, JSValue)]",
          "source": "src/FriendFeed-Types-Import.html#showVia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "showVia",
          "normalized": "Via-\u003e[(String,JSValue)]",
          "package": "ffeed",
          "partial": "Via",
          "signature": "Via-\u003e[(String,JSValue)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:showVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "toEntry",
          "package": "ffeed",
          "signature": "String -\u003e Result Entry",
          "source": "src/FriendFeed-Types-Import.html#toEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "toEntry",
          "normalized": "String-\u003eResult Entry",
          "package": "ffeed",
          "partial": "Entry",
          "signature": "String-\u003eResult Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:toEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types.Import",
          "name": "toList",
          "package": "ffeed",
          "signature": "String -\u003e Result List",
          "source": "src/FriendFeed-Types-Import.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types Import",
          "module": "FriendFeed.Types.Import",
          "name": "toList",
          "normalized": "String-\u003eResult List",
          "package": "ffeed",
          "partial": "List",
          "signature": "String-\u003eResult List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types-Import.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefinition of types that the FriendFeed API uses in its\n responses.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.Types",
          "name": "Types",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Definition of types that the FriendFeed API uses in its responses",
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Types",
          "package": "ffeed",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Comment",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Comment",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Comment",
          "package": "ffeed",
          "partial": "Comment",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "CommentID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#CommentID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "CommentID",
          "package": "ffeed",
          "partial": "Comment ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:CommentID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Content",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Content",
          "package": "ffeed",
          "partial": "Content",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "DateString",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#DateString",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "DateString",
          "package": "ffeed",
          "partial": "Date String",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:DateString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Enclosure",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Enclosure",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Enclosure",
          "package": "ffeed",
          "partial": "Enclosure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Enclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Entry",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Entry",
          "package": "ffeed",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "EntryID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#EntryID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "EntryID",
          "package": "ffeed",
          "partial": "Entry ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:EntryID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Like",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Like",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Like",
          "package": "ffeed",
          "partial": "Like",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "List",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#List",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "List",
          "package": "ffeed",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "ListID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#ListID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "ListID",
          "package": "ffeed",
          "partial": "List ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:ListID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "ListName",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#ListName",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "ListName",
          "package": "ffeed",
          "partial": "List Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:ListName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Media",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Media",
          "package": "ffeed",
          "partial": "Media",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Media"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Resource",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Resource",
          "package": "ffeed",
          "partial": "Resource",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Room",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Room",
          "package": "ffeed",
          "partial": "Room",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Room"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "RoomID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#RoomID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "RoomID",
          "package": "ffeed",
          "partial": "Room ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:RoomID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "RoomName",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#RoomName",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "RoomName",
          "package": "ffeed",
          "partial": "Room Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:RoomName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Service",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Service",
          "package": "ffeed",
          "partial": "Service",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "ServiceID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#ServiceID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "ServiceID",
          "package": "ffeed",
          "partial": "Service ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:ServiceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "ServiceName",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#ServiceName",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "ServiceName",
          "package": "ffeed",
          "partial": "Service Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:ServiceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Subscription",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Subscription",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Subscription",
          "package": "ffeed",
          "partial": "Subscription",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Subscription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Thumbnail",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Thumbnail",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Thumbnail",
          "package": "ffeed",
          "partial": "Thumbnail",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Thumbnail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "URLString",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#URLString",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "URLString",
          "package": "ffeed",
          "partial": "URLString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:URLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UUID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#UUID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UUID",
          "package": "ffeed",
          "partial": "UUID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:UUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UpdateInfo",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#UpdateInfo",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UpdateInfo",
          "package": "ffeed",
          "partial": "Update Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:UpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UpdateToken",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#UpdateToken",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UpdateToken",
          "package": "ffeed",
          "partial": "Update Token",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:UpdateToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "User",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "User",
          "package": "ffeed",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UserID",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#UserID",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UserID",
          "package": "ffeed",
          "partial": "User ID",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:UserID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UserName",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#UserName",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UserName",
          "package": "ffeed",
          "partial": "User Name",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:UserName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Via",
          "package": "ffeed",
          "source": "src/FriendFeed-Types.html#Via",
          "type": "type"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Via",
          "package": "ffeed",
          "partial": "Via",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#t:Via"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Comment",
          "package": "ffeed",
          "signature": "Comment",
          "source": "src/FriendFeed-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Comment",
          "package": "ffeed",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Comment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Content",
          "package": "ffeed",
          "signature": "Content",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Content",
          "package": "ffeed",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Enclosure",
          "package": "ffeed",
          "signature": "Enclosure",
          "source": "src/FriendFeed-Types.html#Enclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Enclosure",
          "package": "ffeed",
          "partial": "Enclosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Enclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Entry",
          "package": "ffeed",
          "signature": "Entry",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Entry",
          "package": "ffeed",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Like",
          "package": "ffeed",
          "signature": "Like",
          "source": "src/FriendFeed-Types.html#Like",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Like",
          "package": "ffeed",
          "partial": "Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Like"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "List",
          "package": "ffeed",
          "signature": "List",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "List",
          "package": "ffeed",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Media",
          "package": "ffeed",
          "signature": "Media",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Media",
          "package": "ffeed",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Media"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Resource",
          "package": "ffeed",
          "signature": "Resource",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Resource",
          "package": "ffeed",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Resource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Room",
          "package": "ffeed",
          "signature": "Room",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Room",
          "package": "ffeed",
          "partial": "Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Room"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Service",
          "package": "ffeed",
          "signature": "Service",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Service",
          "package": "ffeed",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Service"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Subscription_",
          "package": "ffeed",
          "signature": "Subscription_",
          "source": "src/FriendFeed-Types.html#Subscription",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Subscription_",
          "package": "ffeed",
          "partial": "Subscription",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Subscription_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "Thumbnail",
          "package": "ffeed",
          "signature": "Thumbnail",
          "source": "src/FriendFeed-Types.html#Thumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "Thumbnail",
          "package": "ffeed",
          "partial": "Thumbnail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:Thumbnail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "UpdateInfo",
          "package": "ffeed",
          "signature": "UpdateInfo",
          "source": "src/FriendFeed-Types.html#UpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "UpdateInfo",
          "package": "ffeed",
          "partial": "Update Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:UpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "User",
          "package": "ffeed",
          "signature": "User",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "User",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "commentBody",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "commentBody",
          "package": "ffeed",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:commentBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "commentDate",
          "package": "ffeed",
          "signature": "DateString",
          "source": "src/FriendFeed-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "commentDate",
          "package": "ffeed",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:commentDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "commentUser",
          "package": "ffeed",
          "signature": "[Resource User]",
          "source": "src/FriendFeed-Types.html#Comment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "commentUser",
          "normalized": "[Resource User]",
          "package": "ffeed",
          "partial": "User",
          "signature": "[Resource User]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:commentUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "contentHeight",
          "package": "ffeed",
          "signature": "Int",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "contentHeight",
          "package": "ffeed",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:contentHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "contentType",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "contentType",
          "package": "ffeed",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:contentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "contentUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "contentUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:contentUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "contentWidth",
          "package": "ffeed",
          "signature": "Int",
          "source": "src/FriendFeed-Types.html#Content",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "contentWidth",
          "package": "ffeed",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:contentWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "enclosureLength",
          "package": "ffeed",
          "signature": "Integer",
          "source": "src/FriendFeed-Types.html#Enclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "enclosureLength",
          "package": "ffeed",
          "partial": "Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:enclosureLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMIME type\n\u003c/p\u003e",
          "module": "FriendFeed.Types",
          "name": "enclosureType",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Enclosure",
          "type": "function"
        },
        "index": {
          "description": "MIME type",
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "enclosureType",
          "package": "ffeed",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:enclosureType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "enclosureUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Enclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "enclosureUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:enclosureUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryComments",
          "package": "ffeed",
          "signature": "[Comment]",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryComments",
          "normalized": "[Comment]",
          "package": "ffeed",
          "partial": "Comments",
          "signature": "[Comment]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryId",
          "package": "ffeed",
          "signature": "UUID",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryIsAnon",
          "package": "ffeed",
          "signature": "Bool",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryIsAnon",
          "package": "ffeed",
          "partial": "Is Anon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryIsAnon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryIsHidden",
          "package": "ffeed",
          "signature": "Bool",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryIsHidden",
          "package": "ffeed",
          "partial": "Is Hidden",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryIsHidden"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryLikes",
          "package": "ffeed",
          "signature": "[Like]",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryLikes",
          "normalized": "[Like]",
          "package": "ffeed",
          "partial": "Likes",
          "signature": "[Like]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryLikes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryLink",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryLink",
          "package": "ffeed",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryMedia",
          "package": "ffeed",
          "signature": "[Media]",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryMedia",
          "normalized": "[Media]",
          "package": "ffeed",
          "partial": "Media",
          "signature": "[Media]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryPublished",
          "package": "ffeed",
          "signature": "DateString",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryPublished",
          "package": "ffeed",
          "partial": "Published",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryPublished"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryRoom",
          "package": "ffeed",
          "signature": "Maybe (Resource Room)",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryRoom",
          "package": "ffeed",
          "partial": "Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryService",
          "package": "ffeed",
          "signature": "Service",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryService",
          "package": "ffeed",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryTitle",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryTitle",
          "package": "ffeed",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryUpdated",
          "package": "ffeed",
          "signature": "DateString",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryUpdated",
          "package": "ffeed",
          "partial": "Updated",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryUpdated"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryUser",
          "package": "ffeed",
          "signature": "Resource User",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryUser",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "entryVia",
          "package": "ffeed",
          "signature": "Maybe Via",
          "source": "src/FriendFeed-Types.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "entryVia",
          "package": "ffeed",
          "partial": "Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:entryVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "likeDate",
          "package": "ffeed",
          "signature": "DateString",
          "source": "src/FriendFeed-Types.html#Like",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "likeDate",
          "package": "ffeed",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:likeDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "likeUser",
          "package": "ffeed",
          "signature": "Resource User",
          "source": "src/FriendFeed-Types.html#Like",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "likeUser",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:likeUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listId",
          "package": "ffeed",
          "signature": "ListID",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listNickname",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listNickname",
          "package": "ffeed",
          "partial": "Nickname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listNickname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listRooms",
          "package": "ffeed",
          "signature": "[Resource Room]",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listRooms",
          "normalized": "[Resource Room]",
          "package": "ffeed",
          "partial": "Rooms",
          "signature": "[Resource Room]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listRooms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listURL",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listURL",
          "package": "ffeed",
          "partial": "URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "listUsers",
          "package": "ffeed",
          "signature": "[Resource User]",
          "source": "src/FriendFeed-Types.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "listUsers",
          "normalized": "[Resource User]",
          "package": "ffeed",
          "partial": "Users",
          "signature": "[Resource User]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:listUsers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaContent",
          "package": "ffeed",
          "signature": "[Content]",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaContent",
          "normalized": "[Content]",
          "package": "ffeed",
          "partial": "Content",
          "signature": "[Content]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaEnclosure",
          "package": "ffeed",
          "signature": "[Enclosure]",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaEnclosure",
          "normalized": "[Enclosure]",
          "package": "ffeed",
          "partial": "Enclosure",
          "signature": "[Enclosure]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaEnclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaLink",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaLink",
          "package": "ffeed",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaPlayer",
          "package": "ffeed",
          "signature": "Maybe String",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaPlayer",
          "package": "ffeed",
          "partial": "Player",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaPlayer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaThumbs",
          "package": "ffeed",
          "signature": "[Thumbnail]",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaThumbs",
          "normalized": "[Thumbnail]",
          "package": "ffeed",
          "partial": "Thumbs",
          "signature": "[Thumbnail]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaThumbs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "mediaTitle",
          "package": "ffeed",
          "signature": "Maybe String",
          "source": "src/FriendFeed-Types.html#Media",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "mediaTitle",
          "package": "ffeed",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:mediaTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullComment",
          "package": "ffeed",
          "signature": "Comment",
          "source": "src/FriendFeed-Types.html#nullComment",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullComment",
          "package": "ffeed",
          "partial": "Comment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullComment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullContent",
          "package": "ffeed",
          "signature": "Content",
          "source": "src/FriendFeed-Types.html#nullContent",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullContent",
          "package": "ffeed",
          "partial": "Content",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullContent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullEnclosure",
          "package": "ffeed",
          "signature": "Enclosure",
          "source": "src/FriendFeed-Types.html#nullEnclosure",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullEnclosure",
          "package": "ffeed",
          "partial": "Enclosure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullEnclosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullEntry",
          "package": "ffeed",
          "signature": "Entry",
          "source": "src/FriendFeed-Types.html#nullEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullEntry",
          "package": "ffeed",
          "partial": "Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullLike",
          "package": "ffeed",
          "signature": "Like",
          "source": "src/FriendFeed-Types.html#nullLike",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullLike",
          "package": "ffeed",
          "partial": "Like",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullList",
          "package": "ffeed",
          "signature": "List",
          "source": "src/FriendFeed-Types.html#nullList",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullList",
          "package": "ffeed",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullMedia",
          "package": "ffeed",
          "signature": "Media",
          "source": "src/FriendFeed-Types.html#nullMedia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullMedia",
          "package": "ffeed",
          "partial": "Media",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullMedia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullResource",
          "package": "ffeed",
          "signature": "Resource a",
          "source": "src/FriendFeed-Types.html#nullResource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullResource",
          "package": "ffeed",
          "partial": "Resource",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullResource"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullRoom",
          "package": "ffeed",
          "signature": "Room",
          "source": "src/FriendFeed-Types.html#nullRoom",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullRoom",
          "package": "ffeed",
          "partial": "Room",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullService",
          "package": "ffeed",
          "signature": "Service",
          "source": "src/FriendFeed-Types.html#nullService",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullService",
          "package": "ffeed",
          "partial": "Service",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullService"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullThumbnail",
          "package": "ffeed",
          "signature": "Thumbnail",
          "source": "src/FriendFeed-Types.html#nullThumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullThumbnail",
          "package": "ffeed",
          "partial": "Thumbnail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullThumbnail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullUUID",
          "package": "ffeed",
          "signature": "UUID",
          "source": "src/FriendFeed-Types.html#nullUUID",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullUUID",
          "package": "ffeed",
          "partial": "UUID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullUUID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullUpdateInfo",
          "package": "ffeed",
          "signature": "UpdateInfo",
          "source": "src/FriendFeed-Types.html#nullUpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullUpdateInfo",
          "package": "ffeed",
          "partial": "Update Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullUpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullUser",
          "package": "ffeed",
          "signature": "User",
          "source": "src/FriendFeed-Types.html#nullUser",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullUser",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "nullVia",
          "package": "ffeed",
          "signature": "Via",
          "source": "src/FriendFeed-Types.html#nullVia",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "nullVia",
          "package": "ffeed",
          "partial": "Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:nullVia"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "resourceId",
          "package": "ffeed",
          "signature": "UUID",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "resourceId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:resourceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "resourceName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "resourceName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:resourceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "resourceNickname",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "resourceNickname",
          "package": "ffeed",
          "partial": "Nickname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:resourceNickname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "resourceUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Resource",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "resourceUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:resourceUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomAdmins",
          "package": "ffeed",
          "signature": "[Resource User]",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomAdmins",
          "normalized": "[Resource User]",
          "package": "ffeed",
          "partial": "Admins",
          "signature": "[Resource User]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomAdmins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomDescription",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomDescription",
          "package": "ffeed",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomId",
          "package": "ffeed",
          "signature": "RoomID",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomMember",
          "package": "ffeed",
          "signature": "[Resource User]",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomMember",
          "normalized": "[Resource User]",
          "package": "ffeed",
          "partial": "Member",
          "signature": "[Resource User]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomNickname",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomNickname",
          "package": "ffeed",
          "partial": "Nickname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomNickname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatic or public\n\u003c/p\u003e",
          "module": "FriendFeed.Types",
          "name": "roomStatus",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "description": "static or public",
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomStatus",
          "package": "ffeed",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "roomUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Room",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "roomUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:roomUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "serviceIconUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "serviceIconUrl",
          "package": "ffeed",
          "partial": "Icon Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:serviceIconUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "serviceId",
          "package": "ffeed",
          "signature": "ServiceID",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "serviceId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:serviceId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "serviceName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "serviceName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:serviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "serviceUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Service",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "serviceUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:serviceUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "thumbHeight",
          "package": "ffeed",
          "signature": "Int",
          "source": "src/FriendFeed-Types.html#Thumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "thumbHeight",
          "package": "ffeed",
          "partial": "Height",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:thumbHeight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "thumbUrl",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#Thumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "thumbUrl",
          "package": "ffeed",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:thumbUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "thumbWidth",
          "package": "ffeed",
          "signature": "Int",
          "source": "src/FriendFeed-Types.html#Thumbnail",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "thumbWidth",
          "package": "ffeed",
          "partial": "Width",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:thumbWidth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "updIncomplete",
          "package": "ffeed",
          "signature": "Bool",
          "source": "src/FriendFeed-Types.html#UpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "updIncomplete",
          "package": "ffeed",
          "partial": "Incomplete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:updIncomplete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "updInterval",
          "package": "ffeed",
          "signature": "Integer",
          "source": "src/FriendFeed-Types.html#UpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "updInterval",
          "package": "ffeed",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:updInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "updToken",
          "package": "ffeed",
          "signature": "UpdateToken",
          "source": "src/FriendFeed-Types.html#UpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "updToken",
          "package": "ffeed",
          "partial": "Token",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:updToken"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userId",
          "package": "ffeed",
          "signature": "UserID",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userId",
          "package": "ffeed",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userLists",
          "package": "ffeed",
          "signature": "[Resource List]",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userLists",
          "normalized": "[Resource List]",
          "package": "ffeed",
          "partial": "Lists",
          "signature": "[Resource List]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userLists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userName",
          "package": "ffeed",
          "signature": "UserName",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userNickname",
          "package": "ffeed",
          "signature": "UserName",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userNickname",
          "package": "ffeed",
          "partial": "Nickname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userNickname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userProfileURL",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userProfileURL",
          "package": "ffeed",
          "partial": "Profile URL",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userProfileURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userRooms",
          "package": "ffeed",
          "signature": "[Resource Room]",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userRooms",
          "normalized": "[Resource Room]",
          "package": "ffeed",
          "partial": "Rooms",
          "signature": "[Resource Room]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userRooms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userServices",
          "package": "ffeed",
          "signature": "[Service]",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userServices",
          "normalized": "[Service]",
          "package": "ffeed",
          "partial": "Services",
          "signature": "[Service]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userServices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userStatus",
          "package": "ffeed",
          "signature": "String",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userStatus",
          "package": "ffeed",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Types",
          "name": "userSubscriptions",
          "package": "ffeed",
          "signature": "[Resource Subscription]",
          "source": "src/FriendFeed-Types.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Types",
          "module": "FriendFeed.Types",
          "name": "userSubscriptions",
          "normalized": "[Resource Subscription]",
          "package": "ffeed",
          "partial": "Subscriptions",
          "signature": "[Resource Subscription]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Types.html#v:userSubscriptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Updates",
          "name": "Updates",
          "package": "ffeed",
          "source": "src/FriendFeed-Updates.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "Updates",
          "package": "ffeed",
          "partial": "Updates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Updates",
          "name": "getUpdateInfo",
          "package": "ffeed",
          "signature": "FFm UpdateInfo",
          "source": "src/FriendFeed-Updates.html#getUpdateInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "getUpdateInfo",
          "package": "ffeed",
          "partial": "Update Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:getUpdateInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns updates to a user's friends. \n\u003c/p\u003e",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesFriends",
          "package": "ffeed",
          "signature": "UserName -\u003e UpdateToken -\u003e Maybe Int -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Updates.html#getUpdatesFriends",
          "type": "function"
        },
        "index": {
          "description": "Returns updates to user friends",
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesFriends",
          "normalized": "UserName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Updates Friends",
          "signature": "UserName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:getUpdatesFriends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns updates to the users home feed.\n\u003c/p\u003e",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesHome",
          "package": "ffeed",
          "signature": "UpdateToken -\u003e Maybe Int -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Updates.html#getUpdatesHome",
          "type": "function"
        },
        "index": {
          "description": "Returns updates to the users home feed",
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesHome",
          "normalized": "UpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Updates Home",
          "signature": "UpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:getUpdatesHome"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns updates to the authenticated user's list with the given nickname.\n\u003c/p\u003e",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesList",
          "package": "ffeed",
          "signature": "ListName -\u003e UpdateToken -\u003e Maybe Int -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Updates.html#getUpdatesList",
          "type": "function"
        },
        "index": {
          "description": "Returns updates to the authenticated user list with the given nickname",
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesList",
          "normalized": "ListName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Updates List",
          "signature": "ListName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:getUpdatesList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns updates to the room with the given nickname. \n\u003c/p\u003e",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesRoom",
          "package": "ffeed",
          "signature": "RoomName -\u003e UpdateToken -\u003e Maybe Int -\u003e FFm [Entry]",
          "source": "src/FriendFeed-Updates.html#getUpdatesRoom",
          "type": "function"
        },
        "index": {
          "description": "Returns updates to the room with the given nickname",
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "getUpdatesRoom",
          "normalized": "RoomName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Updates Room",
          "signature": "RoomName-\u003eUpdateToken-\u003eMaybe Int-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:getUpdatesRoom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Updates",
          "name": "upd_base",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Updates.html#upd_base",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "upd_base",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:upd_base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.Updates",
          "name": "upd_base2",
          "package": "ffeed",
          "signature": "URLString",
          "source": "src/FriendFeed-Updates.html#upd_base2",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed Updates",
          "module": "FriendFeed.Updates",
          "name": "upd_base2",
          "package": "ffeed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-Updates.html#v:upd_base2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eActions for fetching entries,comments etc. for one or\n more users/friends.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "FriendFeed.User",
          "name": "User",
          "package": "ffeed",
          "source": "src/FriendFeed-User.html",
          "type": "module"
        },
        "index": {
          "description": "Actions for fetching entries comments etc for one or more users friends",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "User",
          "package": "ffeed",
          "partial": "User",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns entries from a user's friends.\n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getFriendEntries",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getFriendEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns entries from user friends",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getFriendEntries",
          "normalized": "UserName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Friend Entries",
          "signature": "UserName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getFriendEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the most recent public entries on FriendFeed.\n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getPublicEntries",
          "package": "ffeed",
          "signature": "FFm [Entry]",
          "source": "src/FriendFeed-User.html#getPublicEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns the most recent public entries on FriendFeed",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getPublicEntries",
          "normalized": "FFm[Entry]",
          "package": "ffeed",
          "partial": "Public Entries",
          "signature": "FFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getPublicEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.User",
          "name": "getUserComments",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getUserComments",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserComments",
          "normalized": "UserName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "User Comments",
          "signature": "UserName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserComments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the most recent entries the user has commented \n on or \u003ca\u003eliked\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getUserDiscussion",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getUserDiscussion",
          "type": "function"
        },
        "index": {
          "description": "Returns the most recent entries the user has commented on or liked",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserDiscussion",
          "normalized": "UserName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "User Discussion",
          "signature": "UserName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserDiscussion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.User",
          "name": "getUserEntries",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getUserEntries",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserEntries",
          "normalized": "UserName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "User Entries",
          "signature": "UserName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FriendFeed.User",
          "name": "getUserLikes",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getUserLikes",
          "type": "function"
        },
        "index": {
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserLikes",
          "normalized": "UserName-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "User Likes",
          "signature": "UserName-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserLikes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a user's profile picture.\n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getUserPicture",
          "package": "ffeed",
          "signature": "UserName -\u003e String -\u003e FFm URLString",
          "source": "src/FriendFeed-User.html#getUserPicture",
          "type": "function"
        },
        "index": {
          "description": "Get user profile picture",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserPicture",
          "normalized": "UserName-\u003eString-\u003eFFm URLString",
          "package": "ffeed",
          "partial": "User Picture",
          "signature": "UserName-\u003eString-\u003eFFm URLString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserPicture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns list of all of the user's subscriptions\n (people) and services connected to their account\n (Authentication required for private users): \n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getUserProfile",
          "package": "ffeed",
          "signature": "UserName -\u003e FFm User",
          "source": "src/FriendFeed-User.html#getUserProfile",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all of the user subscriptions people and services connected to their account Authentication required for private users",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUserProfile",
          "normalized": "UserName-\u003eFFm User",
          "package": "ffeed",
          "partial": "User Profile",
          "signature": "UserName-\u003eFFm User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUserProfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the most recent entries from a list of users, \n specified by nickname.\n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "getUsersEntries",
          "package": "ffeed",
          "signature": "[UserName] -\u003e FFm [Entry]",
          "source": "src/FriendFeed-User.html#getUsersEntries",
          "type": "function"
        },
        "index": {
          "description": "Returns the most recent entries from list of users specified by nickname",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "getUsersEntries",
          "normalized": "[UserName]-\u003eFFm[Entry]",
          "package": "ffeed",
          "partial": "Users Entries",
          "signature": "[UserName]-\u003eFFm[Entry]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:getUsersEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eValidates the user's remote key. If the HTTP Basic \n Authentication nickname and remote key are valid, we \n return a HTTP 200 status code. Otherwise, we return an \n HTTP 401 status code. \n\u003c/p\u003e",
          "module": "FriendFeed.User",
          "name": "validateUserKey",
          "package": "ffeed",
          "signature": "FFm Bool",
          "source": "src/FriendFeed-User.html#validateUserKey",
          "type": "function"
        },
        "index": {
          "description": "Validates the user remote key If the HTTP Basic Authentication nickname and remote key are valid we return HTTP status code Otherwise we return an HTTP status code",
          "hierarchy": "FriendFeed User",
          "module": "FriendFeed.User",
          "name": "validateUserKey",
          "package": "ffeed",
          "partial": "User Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/FriendFeed-User.html#v:validateUserKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLicense     : See the file LICENSE\n\u003c/p\u003e\u003cp\u003eStatus      : Coded\n\u003c/p\u003e\u003cp\u003eCodec for de/encoding URI strings via percent encodings\n (cf. RFC 3986.)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Util.Codec.Percent",
          "name": "Percent",
          "package": "ffeed",
          "source": "src/Util-Codec-Percent.html",
          "type": "module"
        },
        "index": {
          "description": "License See the file LICENSE Status Coded Codec for de encoding URI strings via percent encodings cf RFC",
          "hierarchy": "Util Codec Percent",
          "module": "Util.Codec.Percent",
          "name": "Percent",
          "package": "ffeed",
          "partial": "Percent",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-Percent.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.Percent",
          "name": "getDecodedChar",
          "package": "ffeed",
          "signature": "String -\u003e Maybe (Char, String)",
          "source": "src/Util-Codec-Percent.html#getDecodedChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec Percent",
          "module": "Util.Codec.Percent",
          "name": "getDecodedChar",
          "normalized": "String-\u003eMaybe(Char,String)",
          "package": "ffeed",
          "partial": "Decoded Char",
          "signature": "String-\u003eMaybe(Char,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-Percent.html#v:getDecodedChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.Percent",
          "name": "getDecodedString",
          "package": "ffeed",
          "signature": "String -\u003e String",
          "source": "src/Util-Codec-Percent.html#getDecodedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec Percent",
          "module": "Util.Codec.Percent",
          "name": "getDecodedString",
          "normalized": "String-\u003eString",
          "package": "ffeed",
          "partial": "Decoded String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-Percent.html#v:getDecodedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.Percent",
          "name": "getEncodedChar",
          "package": "ffeed",
          "signature": "Char -\u003e Maybe String",
          "source": "src/Util-Codec-Percent.html#getEncodedChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec Percent",
          "module": "Util.Codec.Percent",
          "name": "getEncodedChar",
          "normalized": "Char-\u003eMaybe String",
          "package": "ffeed",
          "partial": "Encoded Char",
          "signature": "Char-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-Percent.html#v:getEncodedChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.Percent",
          "name": "getEncodedString",
          "package": "ffeed",
          "signature": "String -\u003e String",
          "source": "src/Util-Codec-Percent.html#getEncodedString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec Percent",
          "module": "Util.Codec.Percent",
          "name": "getEncodedString",
          "normalized": "String-\u003eString",
          "package": "ffeed",
          "partial": "Encoded String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-Percent.html#v:getEncodedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.URLEncoder",
          "name": "URLEncoder",
          "package": "ffeed",
          "source": "src/Util-Codec-URLEncoder.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Util Codec URLEncoder",
          "module": "Util.Codec.URLEncoder",
          "name": "URLEncoder",
          "package": "ffeed",
          "partial": "URLEncoder",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-URLEncoder.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.URLEncoder",
          "name": "decodeString",
          "package": "ffeed",
          "signature": "String -\u003e String",
          "source": "src/Util-Codec-URLEncoder.html#decodeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec URLEncoder",
          "module": "Util.Codec.URLEncoder",
          "name": "decodeString",
          "normalized": "String-\u003eString",
          "package": "ffeed",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-URLEncoder.html#v:decodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Codec.URLEncoder",
          "name": "encodeString",
          "package": "ffeed",
          "signature": "String -\u003e String",
          "source": "src/Util-Codec-URLEncoder.html#encodeString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Codec URLEncoder",
          "module": "Util.Codec.URLEncoder",
          "name": "encodeString",
          "normalized": "String-\u003eString",
          "package": "ffeed",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Codec-URLEncoder.html#v:encodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple GET/de-ref of URLs; abstracting out networking backend/package.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Util.Fetch",
          "name": "Fetch",
          "package": "ffeed",
          "source": "src/Util-Fetch.html",
          "type": "module"
        },
        "index": {
          "description": "Simple GET de-ref of URLs abstracting out networking backend package",
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "Fetch",
          "package": "ffeed",
          "partial": "Fetch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "URLString",
          "package": "ffeed",
          "source": "src/Util-Fetch.html#URLString",
          "type": "type"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "URLString",
          "package": "ffeed",
          "partial": "URLString",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#t:URLString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "User",
          "package": "ffeed",
          "source": "src/Util-Fetch.html#User",
          "type": "data"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "User",
          "package": "ffeed",
          "partial": "User",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#t:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "User",
          "package": "ffeed",
          "signature": "User",
          "source": "src/Util-Fetch.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "User",
          "package": "ffeed",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:User"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "postContentsURL",
          "package": "ffeed",
          "signature": "Maybe User -\u003e URLString -\u003e [(String, String)] -\u003e String -\u003e IO String",
          "source": "src/Util-Fetch.html#postContentsURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "postContentsURL",
          "normalized": "Maybe User-\u003eURLString-\u003e[(String,String)]-\u003eString-\u003eIO String",
          "package": "ffeed",
          "partial": "Contents URL",
          "signature": "Maybe User-\u003eURLString-\u003e[(String,String)]-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:postContentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "readContentsURL",
          "package": "ffeed",
          "signature": "URLString -\u003e IO String",
          "source": "src/Util-Fetch.html#readContentsURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "readContentsURL",
          "normalized": "URLString-\u003eIO String",
          "package": "ffeed",
          "partial": "Contents URL",
          "signature": "URLString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:readContentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "readUserContentsURL",
          "package": "ffeed",
          "signature": "User -\u003e URLString -\u003e IO String",
          "source": "src/Util-Fetch.html#readUserContentsURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "readUserContentsURL",
          "normalized": "User-\u003eURLString-\u003eIO String",
          "package": "ffeed",
          "partial": "User Contents URL",
          "signature": "User-\u003eURLString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:readUserContentsURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "userName",
          "package": "ffeed",
          "signature": "String",
          "source": "src/Util-Fetch.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "userName",
          "package": "ffeed",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:userName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Util.Fetch",
          "name": "userPass",
          "package": "ffeed",
          "signature": "String",
          "source": "src/Util-Fetch.html#User",
          "type": "function"
        },
        "index": {
          "hierarchy": "Util Fetch",
          "module": "Util.Fetch",
          "name": "userPass",
          "package": "ffeed",
          "partial": "Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ffeed/docs/Util-Fetch.html#v:userPass"
      }
    }
  ]
]