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
        "word": "redHandlers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler.Session",
          "name": "Session",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Session.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "Session",
          "package": "redHandlers",
          "partial": "Session",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler.Session",
          "name": "SessionState",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Session.html#SessionState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "SessionState",
          "package": "redHandlers",
          "partial": "Session State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#t:SessionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler.Session",
          "name": "deleteSessionedStateWithCookie",
          "package": "redHandlers",
          "signature": "String -\u003e request -\u003e IO (response -\u003e response)",
          "source": "src/Network-HTTP-RedHandler-Session.html#deleteSessionedStateWithCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "deleteSessionedStateWithCookie",
          "normalized": "String-\u003ea-\u003eIO(b-\u003eb)",
          "package": "redHandlers",
          "partial": "Sessioned State With Cookie",
          "signature": "String-\u003erequest-\u003eIO(response-\u003eresponse)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#v:deleteSessionedStateWithCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esearch the cookie with the given name in the headers (request headers) and get the session id.\n   Then search the Session Map for the value\n\u003c/p\u003e",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "getSessionedStateWithCookie",
          "package": "redHandlers",
          "signature": "String -\u003e request -\u003e IO (Maybe SessionState)",
          "source": "src/Network-HTTP-RedHandler-Session.html#getSessionedStateWithCookie",
          "type": "function"
        },
        "index": {
          "description": "search the cookie with the given name in the headers request headers and get the session id Then search the Session Map for the value",
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "getSessionedStateWithCookie",
          "normalized": "String-\u003ea-\u003eIO(Maybe SessionState)",
          "package": "redHandlers",
          "partial": "Sessioned State With Cookie",
          "signature": "String-\u003erequest-\u003eIO(Maybe SessionState)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#v:getSessionedStateWithCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eset the value in a new session.\n   Then set responses headers with the cookie.\n\u003c/p\u003e",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "newSessionedStateWithCookie",
          "package": "redHandlers",
          "signature": "String -\u003e SessionState -\u003e IO (response -\u003e response)",
          "source": "src/Network-HTTP-RedHandler-Session.html#newSessionedStateWithCookie",
          "type": "function"
        },
        "index": {
          "description": "set the value in new session Then set responses headers with the cookie",
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "newSessionedStateWithCookie",
          "normalized": "String-\u003eSessionState-\u003eIO(a-\u003ea)",
          "package": "redHandlers",
          "partial": "Sessioned State With Cookie",
          "signature": "String-\u003eSessionState-\u003eIO(response-\u003eresponse)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#v:newSessionedStateWithCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler.Session",
          "name": "updateSessionedStateWithCookie",
          "package": "redHandlers",
          "signature": "String -\u003e request -\u003e SessionState -\u003e IO ()",
          "source": "src/Network-HTTP-RedHandler-Session.html#updateSessionedStateWithCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler Session",
          "module": "Network.HTTP.RedHandler.Session",
          "name": "updateSessionedStateWithCookie",
          "normalized": "String-\u003ea-\u003eSessionState-\u003eIO()",
          "package": "redHandlers",
          "partial": "Sessioned State With Cookie",
          "signature": "String-\u003erequest-\u003eSessionState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler-Session.html#v:updateSessionedStateWithCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RedHandler",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RedHandler",
          "package": "redHandlers",
          "partial": "Red Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "BasicRsp",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Response.html#BasicRsp",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "BasicRsp",
          "package": "redHandlers",
          "partial": "Basic Rsp",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:BasicRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "BasicRspBody",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Response.html#BasicRspBody",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "BasicRspBody",
          "package": "redHandlers",
          "partial": "Basic Rsp Body",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:BasicRspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "HandlerRsp",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Response.html#HandlerRsp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "HandlerRsp",
          "package": "redHandlers",
          "partial": "Handler Rsp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:HandlerRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "IORqHandler",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Handler.html#IORqHandler",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "IORqHandler",
          "package": "redHandlers",
          "partial": "IORq Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:IORqHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "Non200Response",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Response.html#Non200Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "Non200Response",
          "package": "redHandlers",
          "partial": "Non Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:Non200Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RequestContext",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RequestContext",
          "package": "redHandlers",
          "partial": "Request Context",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:RequestContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RqHandlerT",
          "package": "redHandlers",
          "source": "src/Network-HTTP-RedHandler-Handler.html#RqHandlerT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RqHandlerT",
          "package": "redHandlers",
          "partial": "Rq Handler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#t:RqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "FileResp",
          "package": "redHandlers",
          "signature": "FileResp Integer FilePath",
          "source": "src/Network-HTTP-RedHandler-Response.html#BasicRspBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "FileResp",
          "package": "redHandlers",
          "partial": "File Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:FileResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "HandlerRsp",
          "package": "redHandlers",
          "signature": "HandlerRsp",
          "source": "src/Network-HTTP-RedHandler-Response.html#HandlerRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "HandlerRsp",
          "package": "redHandlers",
          "partial": "Handler Rsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:HandlerRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RedirectResp",
          "package": "redHandlers",
          "signature": "RedirectResp",
          "source": "src/Network-HTTP-RedHandler-Response.html#Non200Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RedirectResp",
          "package": "redHandlers",
          "partial": "Redirect Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:RedirectResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RequestContext",
          "package": "redHandlers",
          "signature": "RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RequestContext",
          "package": "redHandlers",
          "partial": "Request Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:RequestContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "RqHandlerT",
          "package": "redHandlers",
          "signature": "RqHandlerT",
          "source": "src/Network-HTTP-RedHandler-Handler.html#RqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "RqHandlerT",
          "package": "redHandlers",
          "partial": "Rq Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:RqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "StrResp",
          "package": "redHandlers",
          "signature": "StrResp String",
          "source": "src/Network-HTTP-RedHandler-Response.html#BasicRspBody",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "StrResp",
          "package": "redHandlers",
          "partial": "Str Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:StrResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "addHierarchicalCollToResAddr",
          "package": "redHandlers",
          "signature": "String -\u003e [(String, String)] -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#addHierarchicalCollToResAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "addHierarchicalCollToResAddr",
          "normalized": "String-\u003e[(String,String)]-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Hierarchical Coll To Res Addr",
          "signature": "String-\u003e[(String,String)]-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:addHierarchicalCollToResAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "addMethodToCollAddr",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#addMethodToCollAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "addMethodToCollAddr",
          "normalized": "String-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Method To Coll Addr",
          "signature": "String-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:addMethodToCollAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "addMethodToResAddr",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#addMethodToResAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "addMethodToResAddr",
          "normalized": "String-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Method To Res Addr",
          "signature": "String-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:addMethodToResAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "addResourceIdToCollAddr",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#addResourceIdToCollAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "addResourceIdToCollAddr",
          "normalized": "String-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Resource Id To Coll Addr",
          "signature": "String-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:addResourceIdToCollAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "anyOf",
          "package": "redHandlers",
          "signature": "[RqHandlerT m a] -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#anyOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "anyOf",
          "normalized": "[RqHandlerT a b]-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Of",
          "signature": "[RqHandlerT m a]-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:anyOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspBodyToResponse",
          "package": "redHandlers",
          "signature": "BasicRspBody -\u003e Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#basicRspBodyToResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspBodyToResponse",
          "normalized": "BasicRspBody-\u003eResponse",
          "package": "redHandlers",
          "partial": "Rsp Body To Response",
          "signature": "BasicRspBody-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:basicRspBodyToResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspToResponse",
          "package": "redHandlers",
          "signature": "BasicRsp -\u003e Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#basicRspToResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspToResponse",
          "normalized": "BasicRsp-\u003eResponse",
          "package": "redHandlers",
          "partial": "Rsp To Response",
          "signature": "BasicRsp-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:basicRspToResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspWith",
          "package": "redHandlers",
          "signature": "(a -\u003e String) -\u003e HandlerRsp a -\u003e BasicRsp",
          "source": "src/Network-HTTP-RedHandler-Response.html#basicRspWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "basicRspWith",
          "normalized": "(a-\u003eString)-\u003eHandlerRsp a-\u003eBasicRsp",
          "package": "redHandlers",
          "partial": "Rsp With",
          "signature": "(a-\u003eString)-\u003eHandlerRsp a-\u003eBasicRsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:basicRspWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "completeDirs",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e [String]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#completeDirs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "completeDirs",
          "normalized": "RequestContext-\u003e[String]",
          "package": "redHandlers",
          "partial": "Dirs",
          "signature": "RequestContext-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:completeDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "completeURL",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#completeURL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "completeURL",
          "normalized": "RequestContext-\u003eString",
          "package": "redHandlers",
          "partial": "URL",
          "signature": "RequestContext-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:completeURL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "consumedDirs",
          "package": "redHandlers",
          "signature": "[String]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "consumedDirs",
          "normalized": "[String]",
          "package": "redHandlers",
          "partial": "Dirs",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:consumedDirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "customQuery",
          "package": "redHandlers",
          "signature": "[(String, String)]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "customQuery",
          "normalized": "[(String,String)]",
          "package": "redHandlers",
          "partial": "Query",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:customQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "debug",
          "package": "redHandlers",
          "signature": "IORqHandler a -\u003e IORqHandler a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#debug",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "debug",
          "normalized": "IORqHandler a-\u003eIORqHandler a",
          "package": "redHandlers",
          "signature": "IORqHandler a-\u003eIORqHandler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "debugStr",
          "package": "redHandlers",
          "signature": "String -\u003e IORqHandler a -\u003e IORqHandler a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#debugStr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "debugStr",
          "normalized": "String-\u003eIORqHandler a-\u003eIORqHandler a",
          "package": "redHandlers",
          "partial": "Str",
          "signature": "String-\u003eIORqHandler a-\u003eIORqHandler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:debugStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "dirs",
          "package": "redHandlers",
          "signature": "[String]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "dirs",
          "normalized": "[String]",
          "package": "redHandlers",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:dirs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "docName",
          "package": "redHandlers",
          "signature": "String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "docName",
          "package": "redHandlers",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:docName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "eq",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e a) -\u003e a -\u003e RqHandlerT m b -\u003e RqHandlerT m b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#eq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "eq",
          "normalized": "(RequestContext-\u003ea)-\u003ea-\u003eRqHandlerT b c-\u003eRqHandlerT b c",
          "package": "redHandlers",
          "signature": "(RequestContext-\u003ea)-\u003ea-\u003eRqHandlerT m b-\u003eRqHandlerT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:eq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "failWith",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#failWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "failWith",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "With",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:failWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "fileRsp",
          "package": "redHandlers",
          "signature": "Integer -\u003e FilePath -\u003e BasicRsp",
          "source": "src/Network-HTTP-RedHandler-Response.html#fileRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "fileRsp",
          "normalized": "Integer-\u003eFilePath-\u003eBasicRsp",
          "package": "redHandlers",
          "partial": "Rsp",
          "signature": "Integer-\u003eFilePath-\u003eBasicRsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:fileRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "filterReq",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e Bool) -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#filterReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "filterReq",
          "normalized": "(RequestContext-\u003eBool)-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Req",
          "signature": "(RequestContext-\u003eBool)-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:filterReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "formInputs",
          "package": "redHandlers",
          "signature": "[(String, Input)]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "formInputs",
          "normalized": "[(String,Input)]",
          "package": "redHandlers",
          "partial": "Inputs",
          "signature": "[(String,Input)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:formInputs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "format",
          "package": "redHandlers",
          "signature": "String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "format",
          "package": "redHandlers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "formatEq",
          "package": "redHandlers",
          "signature": "String -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#formatEq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "formatEq",
          "normalized": "String-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Eq",
          "signature": "String-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:formatEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "formatHtml",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#formatHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "formatHtml",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Html",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:formatHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "getResponse",
          "package": "redHandlers",
          "signature": "RqHandlerT m BasicRsp -\u003e RequestContext -\u003e m Response",
          "source": "src/Network-HTTP-RedHandler-Handler.html#getResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "getResponse",
          "normalized": "RqHandlerT a BasicRsp-\u003eRequestContext-\u003ea Response",
          "package": "redHandlers",
          "partial": "Response",
          "signature": "RqHandlerT m BasicRsp-\u003eRequestContext-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "hanRspBody",
          "package": "redHandlers",
          "signature": "Either Non200Response a",
          "source": "src/Network-HTTP-RedHandler-Response.html#HandlerRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "hanRspBody",
          "package": "redHandlers",
          "partial": "Rsp Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:hanRspBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "hanRspHeaders",
          "package": "redHandlers",
          "signature": "[Header]",
          "source": "src/Network-HTTP-RedHandler-Response.html#HandlerRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "hanRspHeaders",
          "normalized": "[Header]",
          "package": "redHandlers",
          "partial": "Rsp Headers",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:hanRspHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "hasCookie",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e Bool",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#hasCookie",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "hasCookie",
          "normalized": "String-\u003eRequestContext-\u003eBool",
          "package": "redHandlers",
          "partial": "Cookie",
          "signature": "String-\u003eRequestContext-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:hasCookie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "ifGet",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#ifGet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "ifGet",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Get",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:ifGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "ifMethod",
          "package": "redHandlers",
          "signature": "RequestMethod -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#ifMethod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "ifMethod",
          "normalized": "RequestMethod-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Method",
          "signature": "RequestMethod-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:ifMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "ifPost",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#ifPost",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "ifPost",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Post",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:ifPost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "ifReq",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e Bool) -\u003e RqHandlerT m a -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#ifReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "ifReq",
          "normalized": "(RequestContext-\u003eBool)-\u003eRqHandlerT a b-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Req",
          "signature": "(RequestContext-\u003eBool)-\u003eRqHandlerT m a-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:ifReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "mapDir",
          "package": "redHandlers",
          "signature": "String -\u003e RqHandlerT m BasicRsp",
          "source": "src/Network-HTTP-RedHandler-Handler.html#mapDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "mapDir",
          "normalized": "String-\u003eRqHandlerT a BasicRsp",
          "package": "redHandlers",
          "partial": "Dir",
          "signature": "String-\u003eRqHandlerT m BasicRsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:mapDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "mapMaybeT",
          "package": "redHandlers",
          "signature": "(m (Maybe a) -\u003e n (Maybe b)) -\u003e MaybeT m a -\u003e MaybeT n b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#mapMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "mapMaybeT",
          "normalized": "(a(Maybe b)-\u003ec(Maybe d))-\u003eMaybeT a b-\u003eMaybeT c d",
          "package": "redHandlers",
          "partial": "Maybe",
          "signature": "(m(Maybe a)-\u003en(Maybe b))-\u003eMaybeT m a-\u003eMaybeT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:mapMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "mapRqHandlerT",
          "package": "redHandlers",
          "signature": "(m (Maybe a) -\u003e n (Maybe b)) -\u003e RqHandlerT m a -\u003e RqHandlerT n b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#mapRqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "mapRqHandlerT",
          "normalized": "(a(Maybe b)-\u003ec(Maybe d))-\u003eRqHandlerT a b-\u003eRqHandlerT c d",
          "package": "redHandlers",
          "partial": "Rq Handler",
          "signature": "(m(Maybe a)-\u003en(Maybe b))-\u003eRqHandlerT m a-\u003eRqHandlerT n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:mapRqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "maybeBasicRspToResponse",
          "package": "redHandlers",
          "signature": "Maybe BasicRsp -\u003e Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#maybeBasicRspToResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "maybeBasicRspToResponse",
          "normalized": "Maybe BasicRsp-\u003eResponse",
          "package": "redHandlers",
          "partial": "Basic Rsp To Response",
          "signature": "Maybe BasicRsp-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:maybeBasicRspToResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "maybeReads",
          "package": "redHandlers",
          "signature": "String -\u003e Maybe a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#maybeReads",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "maybeReads",
          "normalized": "String-\u003eMaybe a",
          "package": "redHandlers",
          "partial": "Reads",
          "signature": "String-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:maybeReads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "maybeToMonadPlus",
          "package": "redHandlers",
          "signature": "Maybe a -\u003e m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#maybeToMonadPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "maybeToMonadPlus",
          "normalized": "Maybe a-\u003eb a",
          "package": "redHandlers",
          "partial": "To Monad Plus",
          "signature": "Maybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:maybeToMonadPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "mkRqCtx",
          "package": "redHandlers",
          "signature": "Request -\u003e IO RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#mkRqCtx",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "mkRqCtx",
          "normalized": "Request-\u003eIO RequestContext",
          "package": "redHandlers",
          "partial": "Rq Ctx",
          "signature": "Request-\u003eIO RequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:mkRqCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "modReq",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e RequestContext) -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#modReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "modReq",
          "normalized": "(RequestContext-\u003eRequestContext)-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Req",
          "signature": "(RequestContext-\u003eRequestContext)-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:modReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "modResp",
          "package": "redHandlers",
          "signature": "(a -\u003e b) -\u003e RqHandlerT m a -\u003e RqHandlerT m b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#modResp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "modResp",
          "normalized": "(a-\u003eb)-\u003eRqHandlerT c a-\u003eRqHandlerT c b",
          "package": "redHandlers",
          "partial": "Resp",
          "signature": "(a-\u003eb)-\u003eRqHandlerT m a-\u003eRqHandlerT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:modResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "moveBackwardDir",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e Maybe (RequestContext, String)",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#moveBackwardDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "moveBackwardDir",
          "normalized": "RequestContext-\u003eMaybe(RequestContext,String)",
          "package": "redHandlers",
          "partial": "Backward Dir",
          "signature": "RequestContext-\u003eMaybe(RequestContext,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:moveBackwardDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "moveForwardDir",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e Maybe (RequestContext, String)",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#moveForwardDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "moveForwardDir",
          "normalized": "RequestContext-\u003eMaybe(RequestContext,String)",
          "package": "redHandlers",
          "partial": "Forward Dir",
          "signature": "RequestContext-\u003eMaybe(RequestContext,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:moveForwardDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "non200response",
          "package": "redHandlers",
          "signature": "Non200Response -\u003e Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#non200response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "non200response",
          "normalized": "Non Response-\u003eResponse",
          "package": "redHandlers",
          "signature": "Non Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:non200response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "notFoundResponse",
          "package": "redHandlers",
          "signature": "Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#notFoundResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "notFoundResponse",
          "package": "redHandlers",
          "partial": "Found Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:notFoundResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "notMe",
          "package": "redHandlers",
          "signature": "RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#notMe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "notMe",
          "package": "redHandlers",
          "partial": "Me",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:notMe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "okHTTPStrResponse",
          "package": "redHandlers",
          "signature": "String -\u003e Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#okHTTPStrResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "okHTTPStrResponse",
          "normalized": "String-\u003eResponse",
          "package": "redHandlers",
          "partial": "HTTPStr Response",
          "signature": "String-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:okHTTPStrResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "orIfEmpty",
          "package": "redHandlers",
          "signature": "[a] -\u003e [a] -\u003e [a]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#orIfEmpty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "orIfEmpty",
          "normalized": "[a]-\u003e[a]-\u003e[a]",
          "package": "redHandlers",
          "partial": "If Empty",
          "signature": "[a]-\u003e[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:orIfEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "originalRequest",
          "package": "redHandlers",
          "signature": "Request",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "originalRequest",
          "package": "redHandlers",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:originalRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "pendingURIPath",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#pendingURIPath",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "pendingURIPath",
          "normalized": "RequestContext-\u003eString",
          "package": "redHandlers",
          "partial": "URIPath",
          "signature": "RequestContext-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:pendingURIPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "postField",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#postField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "postField",
          "normalized": "String-\u003eRequestContext-\u003eString",
          "package": "redHandlers",
          "partial": "Field",
          "signature": "String-\u003eRequestContext-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:postField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "postFieldFileName",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e Maybe String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#postFieldFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "postFieldFileName",
          "normalized": "String-\u003eRequestContext-\u003eMaybe String",
          "package": "redHandlers",
          "partial": "Field File Name",
          "signature": "String-\u003eRequestContext-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:postFieldFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "postFields",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e [(String, String)]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#postFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "postFields",
          "normalized": "RequestContext-\u003e[(String,String)]",
          "package": "redHandlers",
          "partial": "Fields",
          "signature": "RequestContext-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:postFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "printFullReq",
          "package": "redHandlers",
          "signature": "IORqHandler ()",
          "source": "src/Network-HTTP-RedHandler-Handler.html#printFullReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "printFullReq",
          "normalized": "IORqHandler()",
          "package": "redHandlers",
          "partial": "Full Req",
          "signature": "IORqHandler()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:printFullReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "printReq",
          "package": "redHandlers",
          "signature": "IORqHandler a -\u003e IORqHandler a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#printReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "printReq",
          "normalized": "IORqHandler a-\u003eIORqHandler a",
          "package": "redHandlers",
          "partial": "Req",
          "signature": "IORqHandler a-\u003eIORqHandler a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:printReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "printString",
          "package": "redHandlers",
          "signature": "String -\u003e IORqHandler ()",
          "source": "src/Network-HTTP-RedHandler-Handler.html#printString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "printString",
          "normalized": "String-\u003eIORqHandler()",
          "package": "redHandlers",
          "partial": "String",
          "signature": "String-\u003eIORqHandler()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:printString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "query",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e [(String, String)]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#query",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "query",
          "normalized": "RequestContext-\u003e[(String,String)]",
          "package": "redHandlers",
          "signature": "RequestContext-\u003e[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "redirectResponse",
          "package": "redHandlers",
          "signature": "Response",
          "source": "src/Network-HTTP-RedHandler-Response.html#redirectResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "redirectResponse",
          "package": "redHandlers",
          "partial": "Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:redirectResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "redirectToRsp",
          "package": "redHandlers",
          "signature": "String -\u003e HandlerRsp a",
          "source": "src/Network-HTTP-RedHandler-Response.html#redirectToRsp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "redirectToRsp",
          "normalized": "String-\u003eHandlerRsp a",
          "package": "redHandlers",
          "partial": "To Rsp",
          "signature": "String-\u003eHandlerRsp a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:redirectToRsp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "renderQuery",
          "package": "redHandlers",
          "signature": "[(String, String)] -\u003e String",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#renderQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "renderQuery",
          "normalized": "[(String,String)]-\u003eString",
          "package": "redHandlers",
          "partial": "Query",
          "signature": "[(String,String)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:renderQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "reprocessLastDir",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#reprocessLastDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "reprocessLastDir",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Last Dir",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:reprocessLastDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "requestTime",
          "package": "redHandlers",
          "signature": "CalendarTime",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "requestTime",
          "package": "redHandlers",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:requestTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "respWithStatic",
          "package": "redHandlers",
          "signature": "String -\u003e RqHandlerT m BasicRsp",
          "source": "src/Network-HTTP-RedHandler-Handler.html#respWithStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "respWithStatic",
          "normalized": "String-\u003eRqHandlerT a BasicRsp",
          "package": "redHandlers",
          "partial": "With Static",
          "signature": "String-\u003eRqHandlerT m BasicRsp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:respWithStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "restrictByParentQuery",
          "package": "redHandlers",
          "signature": "[(String, String)]",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#RequestContext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "restrictByParentQuery",
          "normalized": "[(String,String)]",
          "package": "redHandlers",
          "partial": "By Parent Query",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:restrictByParentQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "run",
          "package": "redHandlers",
          "signature": "Parser a -\u003e String -\u003e IO ()",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "run",
          "normalized": "Parser a-\u003eString-\u003eIO()",
          "package": "redHandlers",
          "signature": "Parser a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "runHttpServer",
          "package": "redHandlers",
          "signature": "PortNumber -\u003e [IORqHandler BasicRsp] -\u003e IO ()",
          "source": "src/Network-HTTP-RedHandler-Httpd.html#runHttpServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "runHttpServer",
          "normalized": "PortNumber-\u003e[IORqHandler BasicRsp]-\u003eIO()",
          "package": "redHandlers",
          "partial": "Http Server",
          "signature": "PortNumber-\u003e[IORqHandler BasicRsp]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:runHttpServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "runRqHandlerT",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RequestContext -\u003e m (Maybe a)",
          "source": "src/Network-HTTP-RedHandler-Handler.html#runRqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "runRqHandlerT",
          "normalized": "RqHandlerT a b-\u003eRequestContext-\u003ea(Maybe b)",
          "package": "redHandlers",
          "partial": "Rq Handler",
          "signature": "RqHandlerT m a-\u003eRequestContext-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:runRqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "sat",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e a) -\u003e (a -\u003e Bool) -\u003e RqHandlerT m b -\u003e RqHandlerT m b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#sat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "sat",
          "normalized": "(RequestContext-\u003ea)-\u003e(a-\u003eBool)-\u003eRqHandlerT b c-\u003eRqHandlerT b c",
          "package": "redHandlers",
          "signature": "(RequestContext-\u003ea)-\u003e(a-\u003eBool)-\u003eRqHandlerT m b-\u003eRqHandlerT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "setCollectionFromRootAddr",
          "package": "redHandlers",
          "signature": "String -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#setCollectionFromRootAddr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "setCollectionFromRootAddr",
          "normalized": "String-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Collection From Root Addr",
          "signature": "String-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:setCollectionFromRootAddr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "showParses",
          "package": "redHandlers",
          "signature": "Parser a -\u003e [String] -\u003e IO ()",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#showParses",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "showParses",
          "normalized": "Parser a-\u003e[String]-\u003eIO()",
          "package": "redHandlers",
          "partial": "Parses",
          "signature": "Parser a-\u003e[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:showParses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "showReq",
          "package": "redHandlers",
          "signature": "RequestContext -\u003e Html",
          "source": "src/Network-HTTP-RedHandler-Handler.html#showReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "showReq",
          "normalized": "RequestContext-\u003eHtml",
          "package": "redHandlers",
          "partial": "Req",
          "signature": "RequestContext-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:showReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "showReqHtml",
          "package": "redHandlers",
          "signature": "RqHandlerT m Html",
          "source": "src/Network-HTTP-RedHandler-Handler.html#showReqHtml",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "showReqHtml",
          "package": "redHandlers",
          "partial": "Req Html",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:showReqHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "unRqHandlerT",
          "package": "redHandlers",
          "signature": "ReaderT RequestContext (MaybeT m) a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#RqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "unRqHandlerT",
          "package": "redHandlers",
          "partial": "Rq Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:unRqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "under",
          "package": "redHandlers",
          "signature": "String -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#under",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "under",
          "normalized": "String-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "signature": "String-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:under"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "underInteger",
          "package": "redHandlers",
          "signature": "(Integer -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#underInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "underInteger",
          "normalized": "(Integer-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Integer",
          "signature": "(Integer-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:underInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "underNoDir",
          "package": "redHandlers",
          "signature": "RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#underNoDir",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "underNoDir",
          "normalized": "RqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "No Dir",
          "signature": "RqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:underNoDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "underString",
          "package": "redHandlers",
          "signature": "(String -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#underString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "underString",
          "normalized": "(String-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "String",
          "signature": "(String-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:underString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "upgradeQueriesForHierarchy",
          "package": "redHandlers",
          "signature": "[(String, String)] -\u003e RequestContext -\u003e RequestContext",
          "source": "src/Network-HTTP-RedHandler-RequestContext.html#upgradeQueriesForHierarchy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "upgradeQueriesForHierarchy",
          "normalized": "[(String,String)]-\u003eRequestContext-\u003eRequestContext",
          "package": "redHandlers",
          "partial": "Queries For Hierarchy",
          "signature": "[(String,String)]-\u003eRequestContext-\u003eRequestContext",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:upgradeQueriesForHierarchy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withDocName",
          "package": "redHandlers",
          "signature": "String -\u003e RqHandlerT m a -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withDocName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withDocName",
          "normalized": "String-\u003eRqHandlerT a b-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Doc Name",
          "signature": "String-\u003eRqHandlerT m a-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withDocName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withDocNameInteger",
          "package": "redHandlers",
          "signature": "(Integer -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withDocNameInteger",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withDocNameInteger",
          "normalized": "(Integer-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Doc Name Integer",
          "signature": "(Integer-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withDocNameInteger"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withDocNameString",
          "package": "redHandlers",
          "signature": "(String -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withDocNameString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withDocNameString",
          "normalized": "(String-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Doc Name String",
          "signature": "(String-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withDocNameString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withParam",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e Maybe a) -\u003e (a -\u003e RqHandlerT m b) -\u003e RqHandlerT m b",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withParam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withParam",
          "normalized": "(RequestContext-\u003eMaybe a)-\u003e(a-\u003eRqHandlerT b c)-\u003eRqHandlerT b c",
          "package": "redHandlers",
          "partial": "Param",
          "signature": "(RequestContext-\u003eMaybe a)-\u003e(a-\u003eRqHandlerT m b)-\u003eRqHandlerT m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withPostField",
          "package": "redHandlers",
          "signature": "String -\u003e (String -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withPostField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withPostField",
          "normalized": "String-\u003e(String-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Post Field",
          "signature": "String-\u003e(String-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withPostField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withPostFieldFileName",
          "package": "redHandlers",
          "signature": "String -\u003e (Maybe String -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withPostFieldFileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withPostFieldFileName",
          "normalized": "String-\u003e(Maybe String-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Post Field File Name",
          "signature": "String-\u003e(Maybe String-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withPostFieldFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withPostFields",
          "package": "redHandlers",
          "signature": "([(String, String)] -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withPostFields",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withPostFields",
          "normalized": "([(String,String)]-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Post Fields",
          "signature": "([(String,String)]-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withPostFields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withQuery",
          "package": "redHandlers",
          "signature": "([(String, String)] -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withQuery",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withQuery",
          "normalized": "([(String,String)]-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Query",
          "signature": "([(String,String)]-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withQueryField",
          "package": "redHandlers",
          "signature": "String -\u003e (String -\u003e RqHandlerT m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withQueryField",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withQueryField",
          "normalized": "String-\u003e(String-\u003eRqHandlerT a b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Query Field",
          "signature": "String-\u003e(String-\u003eRqHandlerT m a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withQueryField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.HTTP.RedHandler",
          "name": "withRequestDo",
          "package": "redHandlers",
          "signature": "(RequestContext -\u003e m a) -\u003e RqHandlerT m a",
          "source": "src/Network-HTTP-RedHandler-Handler.html#withRequestDo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network HTTP RedHandler",
          "module": "Network.HTTP.RedHandler",
          "name": "withRequestDo",
          "normalized": "(RequestContext-\u003ea b)-\u003eRqHandlerT a b",
          "package": "redHandlers",
          "partial": "Request Do",
          "signature": "(RequestContext-\u003em a)-\u003eRqHandlerT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/redHandlers/docs/Network-HTTP-RedHandler.html#v:withRequestDo"
      }
    }
  ]
]