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
        "word": "HandlerSocketClient"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell implementation of a HandlerSocket client (API).\n HandlerSocket is a MySQL plugin with better performance then SQL.\n HandlerSocket site: https:\u003cem/\u003egithub.com\u003cem\u003eahiguti\u003c/em\u003eHandlerSocket-Plugin-for-MySQL\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "HandlerSocketClient",
          "package": "HandlerSocketClient",
          "source": "src/Database-HandlerSocketClient.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell implementation of HandlerSocket client API HandlerSocket is MySQL plugin with better performance then SQL HandlerSocket site https github.com ahiguti HandlerSocket-Plugin-for-MySQL",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "HandlerSocketClient",
          "package": "HandlerSocketClient",
          "partial": "Handler Socket Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebasic data structure for one Socket and one Handle (or Index).\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "HandSock",
          "package": "HandlerSocketClient",
          "source": "src/Database-HandlerSocketClient.html#HandSock",
          "type": "data"
        },
        "index": {
          "description": "basic data structure for one Socket and one Handle or Index",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "HandSock",
          "package": "HandlerSocketClient",
          "partial": "Hand Sock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#t:HandSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HandlerSocketClient",
          "name": "HandSock",
          "package": "HandlerSocketClient",
          "signature": "HandSock",
          "source": "src/Database-HandlerSocketClient.html#HandSock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "HandSock",
          "package": "HandlerSocketClient",
          "partial": "Hand Sock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:HandSock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the connection.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "closeHS",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e IO ()",
          "source": "src/Database-HandlerSocketClient.html#closeHS",
          "type": "function"
        },
        "index": {
          "description": "Close the connection",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "closeHS",
          "normalized": "HandSock-\u003eIO()",
          "package": "HandlerSocketClient",
          "partial": "HS",
          "signature": "HandSock-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:closeHS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnect to specific address & port.\n Returns the \u003ccode\u003e\u003ca\u003eHandSock\u003c/a\u003e\u003c/code\u003e for later request or close.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "connectTo",
          "package": "HandlerSocketClient",
          "signature": "String -\u003e String -\u003e IO HandSock",
          "source": "src/Database-HandlerSocketClient.html#connectTo",
          "type": "function"
        },
        "index": {
          "description": "Connect to specific address port Returns the HandSock for later request or close",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "connectTo",
          "normalized": "String-\u003eString-\u003eIO HandSock",
          "package": "HandlerSocketClient",
          "partial": "To",
          "signature": "String-\u003eString-\u003eIO HandSock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:connectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HandlerSocketClient",
          "name": "getHost",
          "package": "HandlerSocketClient",
          "signature": "String",
          "source": "src/Database-HandlerSocketClient.html#HandSock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "getHost",
          "package": "HandlerSocketClient",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:getHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HandlerSocketClient",
          "name": "getPort",
          "package": "HandlerSocketClient",
          "signature": "String",
          "source": "src/Database-HandlerSocketClient.html#HandSock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "getPort",
          "package": "HandlerSocketClient",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:getPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HandlerSocketClient",
          "name": "getSocket",
          "package": "HandlerSocketClient",
          "signature": "Socket",
          "source": "src/Database-HandlerSocketClient.html#HandSock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "getSocket",
          "package": "HandlerSocketClient",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:getSocket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo 'delete' request, give one value to be compared with the KEY. \n Only ONE record will be deleted.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqDelete",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e String -\u003e IO Bool",
          "source": "src/Database-HandlerSocketClient.html#runReqDelete",
          "type": "function"
        },
        "index": {
          "description": "Do delete request give one value to be compared with the KEY Only ONE record will be deleted",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqDelete",
          "normalized": "HandSock-\u003eString-\u003eIO Bool",
          "package": "HandlerSocketClient",
          "partial": "Req Delete",
          "signature": "HandSock-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo 'find' request. Returns at most lim results.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqFind",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e String -\u003e String -\u003e a -\u003e IO [[String]]",
          "source": "src/Database-HandlerSocketClient.html#runReqFind",
          "type": "function"
        },
        "index": {
          "description": "Do find request Returns at most lim results",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqFind",
          "normalized": "HandSock-\u003eString-\u003eString-\u003ea-\u003eIO[[String]]",
          "package": "HandlerSocketClient",
          "partial": "Req Find",
          "signature": "HandSock-\u003eString-\u003eString-\u003ea-\u003eIO[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.HandlerSocketClient",
          "name": "runReqFindN",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e String -\u003e [String] -\u003e a -\u003e IO [[[String]]]",
          "source": "src/Database-HandlerSocketClient.html#runReqFindN",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqFindN",
          "normalized": "HandSock-\u003eString-\u003e[String]-\u003ea-\u003eIO[[[String]]]",
          "package": "HandlerSocketClient",
          "partial": "Req Find",
          "signature": "HandSock-\u003eString-\u003e[String]-\u003ea-\u003eIO[[[String]]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqFindN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo Generic Request, Returns all values received, \"0\" in the head means SUCCESS.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqGeneric",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e [String] -\u003e IO [String]",
          "source": "src/Database-HandlerSocketClient.html#runReqGeneric",
          "type": "function"
        },
        "index": {
          "description": "Do Generic Request Returns all values received in the head means SUCCESS",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqGeneric",
          "normalized": "HandSock-\u003e[String]-\u003eIO[String]",
          "package": "HandlerSocketClient",
          "partial": "Req Generic",
          "signature": "HandSock-\u003e[String]-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqGeneric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo 'insert' request, insert one record at a time.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqInsert",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e [String] -\u003e IO Bool",
          "source": "src/Database-HandlerSocketClient.html#runReqInsert",
          "type": "function"
        },
        "index": {
          "description": "Do insert request insert one record at time",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqInsert",
          "normalized": "HandSock-\u003e[String]-\u003eIO Bool",
          "package": "HandlerSocketClient",
          "partial": "Req Insert",
          "signature": "HandSock-\u003e[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo Generic Request with given Strings. Return True or False, discarding all other messages.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqNoRespData",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e [String] -\u003e IO Bool",
          "source": "src/Database-HandlerSocketClient.html#runReqNoRespData",
          "type": "function"
        },
        "index": {
          "description": "Do Generic Request with given Strings Return True or False discarding all other messages",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqNoRespData",
          "normalized": "HandSock-\u003e[String]-\u003eIO Bool",
          "package": "HandlerSocketClient",
          "partial": "Req No Resp Data",
          "signature": "HandSock-\u003e[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqNoRespData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo 'open_index' request.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqOpen",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e String -\u003e String -\u003e String -\u003e String -\u003e IO Bool",
          "source": "src/Database-HandlerSocketClient.html#runReqOpen",
          "type": "function"
        },
        "index": {
          "description": "Do open index request",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqOpen",
          "normalized": "HandSock-\u003eString-\u003eString-\u003eString-\u003eString-\u003eIO Bool",
          "package": "HandlerSocketClient",
          "partial": "Req Open",
          "signature": "HandSock-\u003eString-\u003eString-\u003eString-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDo 'update' request, give one value to be compared with the KEY, then provide the new data.\n Only ONE record will be updated.\n\u003c/p\u003e",
          "module": "Database.HandlerSocketClient",
          "name": "runReqUpdate",
          "package": "HandlerSocketClient",
          "signature": "HandSock -\u003e String -\u003e [String] -\u003e IO Bool",
          "source": "src/Database-HandlerSocketClient.html#runReqUpdate",
          "type": "function"
        },
        "index": {
          "description": "Do update request give one value to be compared with the KEY then provide the new data Only ONE record will be updated",
          "hierarchy": "Database HandlerSocketClient",
          "module": "Database.HandlerSocketClient",
          "name": "runReqUpdate",
          "normalized": "HandSock-\u003eString-\u003e[String]-\u003eIO Bool",
          "package": "HandlerSocketClient",
          "partial": "Req Update",
          "signature": "HandSock-\u003eString-\u003e[String]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HandlerSocketClient/docs/Database-HandlerSocketClient.html#v:runReqUpdate"
      }
    }
  ]
]