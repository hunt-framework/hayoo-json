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
        "word": "haskoon-httpspec"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "SendRecv",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-SendRecv.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SendRecv",
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "SendRecv",
          "package": "haskoon-httpspec",
          "partial": "Send Recv",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SendRecv.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "forwardReq",
          "package": "haskoon-httpspec",
          "signature": "(ReqIn -\u003e m ReqOut) -\u003e (ResIn -\u003e m ResOut) -\u003e m (WebRes m)",
          "source": "src/Factis-Haskoon-HttpSpec-SendRecv.html#forwardReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SendRecv",
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "forwardReq",
          "normalized": "(ReqIn-\u003ea ReqOut)-\u003e(ResIn-\u003ea ResOut)-\u003ea(WebRes a)",
          "package": "haskoon-httpspec",
          "partial": "Req",
          "signature": "(ReqIn-\u003em ReqOut)-\u003e(ResIn-\u003em ResOut)-\u003em(WebRes m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SendRecv.html#v:forwardReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "getReqIn",
          "package": "haskoon-httpspec",
          "signature": "m ReqIn",
          "source": "src/Factis-Haskoon-HttpSpec-SendRecv.html#getReqIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SendRecv",
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "getReqIn",
          "package": "haskoon-httpspec",
          "partial": "Req In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SendRecv.html#v:getReqIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "sendReqOut",
          "package": "haskoon-httpspec",
          "signature": "ReqOut -\u003e m (Either String ResIn)",
          "source": "src/Factis-Haskoon-HttpSpec-SendRecv.html#sendReqOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SendRecv",
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "sendReqOut",
          "normalized": "ReqOut-\u003ea(Either String ResIn)",
          "package": "haskoon-httpspec",
          "partial": "Req Out",
          "signature": "ReqOut-\u003em(Either String ResIn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SendRecv.html#v:sendReqOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "sendResOut",
          "package": "haskoon-httpspec",
          "signature": "ResOut -\u003e m (WebRes m)",
          "source": "src/Factis-Haskoon-HttpSpec-SendRecv.html#sendResOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SendRecv",
          "module": "Factis.Haskoon.HttpSpec.SendRecv",
          "name": "sendResOut",
          "normalized": "ResOut-\u003ea(WebRes a)",
          "package": "haskoon-httpspec",
          "partial": "Res Out",
          "signature": "ResOut-\u003em(WebRes m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SendRecv.html#v:sendResOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "SpecHandler",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "SpecHandler",
          "package": "haskoon-httpspec",
          "partial": "Spec Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "matchByReqSpec",
          "package": "haskoon-httpspec",
          "signature": "(a -\u003e m ResOut) -\u003e ReqIn -\u003e m ResOut",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#matchByReqSpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "matchByReqSpec",
          "normalized": "(a-\u003eb ResOut)-\u003eReqIn-\u003eb ResOut",
          "package": "haskoon-httpspec",
          "partial": "By Req Spec",
          "signature": "(a-\u003em ResOut)-\u003eReqIn-\u003em ResOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:matchByReqSpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "matchBySpec",
          "package": "haskoon-httpspec",
          "signature": "(a -\u003e m b) -\u003e ReqIn -\u003e m ResOut",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#matchBySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "matchBySpec",
          "normalized": "(a-\u003eb c)-\u003eReqIn-\u003eb ResOut",
          "package": "haskoon-httpspec",
          "partial": "By Spec",
          "signature": "(a-\u003em b)-\u003eReqIn-\u003em ResOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:matchBySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rawSendBySpec",
          "package": "haskoon-httpspec",
          "signature": "HttpUrl -\u003e a -\u003e m ResIn",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rawSendBySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rawSendBySpec",
          "normalized": "HttpUrl-\u003ea-\u003eb ResIn",
          "package": "haskoon-httpspec",
          "partial": "Send By Spec",
          "signature": "HttpUrl-\u003ea-\u003em ResIn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rawSendBySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rawSendToUrl",
          "package": "haskoon-httpspec",
          "signature": "String -\u003e a -\u003e m ResIn",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rawSendToUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rawSendToUrl",
          "normalized": "String-\u003ea-\u003eb ResIn",
          "package": "haskoon-httpspec",
          "partial": "Send To Url",
          "signature": "String-\u003ea-\u003em ResIn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rawSendToUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhGenReqOut",
          "package": "haskoon-httpspec",
          "signature": "HttpUrl -\u003e ReqSpec a -\u003e a -\u003e m ReqOut",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rhGenReqOut",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhGenReqOut",
          "normalized": "HttpUrl-\u003eReqSpec a-\u003ea-\u003eb ReqOut",
          "package": "haskoon-httpspec",
          "partial": "Gen Req Out",
          "signature": "HttpUrl-\u003eReqSpec a-\u003ea-\u003em ReqOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rhGenReqOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhParseResIn",
          "package": "haskoon-httpspec",
          "signature": "ResSpec a -\u003e ResIn -\u003e m a",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rhParseResIn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhParseResIn",
          "normalized": "ResSpec a-\u003eResIn-\u003eb a",
          "package": "haskoon-httpspec",
          "partial": "Parse Res In",
          "signature": "ResSpec a-\u003eResIn-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rhParseResIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhParseUrl",
          "package": "haskoon-httpspec",
          "signature": "String -\u003e m HttpUrl",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rhParseUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhParseUrl",
          "normalized": "String-\u003ea HttpUrl",
          "package": "haskoon-httpspec",
          "partial": "Parse Url",
          "signature": "String-\u003em HttpUrl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rhParseUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhSendReq",
          "package": "haskoon-httpspec",
          "signature": "ReqOut -\u003e m ResIn",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#rhSendReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "rhSendReq",
          "normalized": "ReqOut-\u003ea ResIn",
          "package": "haskoon-httpspec",
          "partial": "Send Req",
          "signature": "ReqOut-\u003em ResIn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:rhSendReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "sendBySpec",
          "package": "haskoon-httpspec",
          "signature": "HttpUrl -\u003e a -\u003e m b",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#sendBySpec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "sendBySpec",
          "normalized": "HttpUrl-\u003ea-\u003eb c",
          "package": "haskoon-httpspec",
          "partial": "By Spec",
          "signature": "HttpUrl-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:sendBySpec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "sendToUrl",
          "package": "haskoon-httpspec",
          "signature": "String -\u003e a -\u003e m b",
          "source": "src/Factis-Haskoon-HttpSpec-SpecHandler.html#sendToUrl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec SpecHandler",
          "module": "Factis.Haskoon.HttpSpec.SpecHandler",
          "name": "sendToUrl",
          "normalized": "String-\u003ea-\u003eb c",
          "package": "haskoon-httpspec",
          "partial": "To Url",
          "signature": "String-\u003ea-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-SpecHandler.html#v:sendToUrl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "WebHandler",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "WebHandler",
          "package": "haskoon-httpspec",
          "partial": "Web Handler",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandler",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandler",
          "type": "class"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandler",
          "package": "haskoon-httpspec",
          "partial": "Req Handler",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#t:ReqHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerState",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerState",
          "package": "haskoon-httpspec",
          "partial": "Req Handler State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#t:ReqHandlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerT",
          "package": "haskoon-httpspec",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerT",
          "package": "haskoon-httpspec",
          "partial": "Req Handler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#t:ReqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerState",
          "package": "haskoon-httpspec",
          "signature": "ReqHandlerState",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerState",
          "package": "haskoon-httpspec",
          "partial": "Req Handler State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:ReqHandlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerT",
          "package": "haskoon-httpspec",
          "signature": "ReqHandlerT",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "ReqHandlerT",
          "package": "haskoon-httpspec",
          "partial": "Req Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:ReqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "match",
          "package": "haskoon-httpspec",
          "signature": "[ReqIn -\u003e m ResOut] -\u003e ReqIn -\u003e m ResOut",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#match",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "match",
          "normalized": "[ReqIn-\u003ea ResOut]-\u003eReqIn-\u003ea ResOut",
          "package": "haskoon-httpspec",
          "signature": "[ReqIn-\u003em ResOut]-\u003eReqIn-\u003em ResOut",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "rhst_sendReqOut",
          "package": "haskoon-httpspec",
          "signature": "ReqOut -\u003e m (Either String ResIn)",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "rhst_sendReqOut",
          "normalized": "ReqOut-\u003ea(Either String ResIn)",
          "package": "haskoon-httpspec",
          "partial": "Req Out",
          "signature": "ReqOut-\u003em(Either String ResIn)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:rhst_sendReqOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runIOReqHandlerT",
          "package": "haskoon-httpspec",
          "signature": "ReqHandlerT m a -\u003e m (Either WebExc a)",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#runIOReqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runIOReqHandlerT",
          "normalized": "ReqHandlerT a b-\u003ea(Either WebExc b)",
          "package": "haskoon-httpspec",
          "partial": "IOReq Handler",
          "signature": "ReqHandlerT m a-\u003em(Either WebExc a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:runIOReqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runReqHandlerT",
          "package": "haskoon-httpspec",
          "signature": "ReqHandlerT m a -\u003e ReqHandlerState m -\u003e m (Either WebExc a)",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#runReqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runReqHandlerT",
          "normalized": "ReqHandlerT a b-\u003eReqHandlerState a-\u003ea(Either WebExc b)",
          "package": "haskoon-httpspec",
          "partial": "Req Handler",
          "signature": "ReqHandlerT m a-\u003eReqHandlerState m-\u003em(Either WebExc a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:runReqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runWebReq",
          "package": "haskoon-httpspec",
          "signature": "(ReqIn -\u003e ReqHandlerT m ResOut) -\u003e m (WebRes m)",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#runWebReq",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runWebReq",
          "normalized": "(ReqIn-\u003eReqHandlerT a ResOut)-\u003ea(WebRes a)",
          "package": "haskoon-httpspec",
          "partial": "Web Req",
          "signature": "(ReqIn-\u003eReqHandlerT m ResOut)-\u003em(WebRes m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:runWebReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runWebReqHandlerT",
          "package": "haskoon-httpspec",
          "signature": "ReqHandlerT m a -\u003e m (Either WebExc a)",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#runWebReqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "runWebReqHandlerT",
          "normalized": "ReqHandlerT a b-\u003ea(Either WebExc b)",
          "package": "haskoon-httpspec",
          "partial": "Web Req Handler",
          "signature": "ReqHandlerT m a-\u003em(Either WebExc a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:runWebReqHandlerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "sendReq",
          "package": "haskoon-httpspec",
          "signature": "ReqOut -\u003e m ResIn",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#sendReq",
          "type": "method"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "sendReq",
          "normalized": "ReqOut-\u003ea ResIn",
          "package": "haskoon-httpspec",
          "partial": "Req",
          "signature": "ReqOut-\u003em ResIn",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:sendReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "unReqHandlerT",
          "package": "haskoon-httpspec",
          "signature": "ReaderT (ReqHandlerState m) (ErrorT WebExc m) a",
          "source": "src/Factis-Haskoon-HttpSpec-WebHandler.html#ReqHandlerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Factis Haskoon HttpSpec WebHandler",
          "module": "Factis.Haskoon.HttpSpec.WebHandler",
          "name": "unReqHandlerT",
          "package": "haskoon-httpspec",
          "partial": "Req Handler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haskoon-httpspec/docs/Factis-Haskoon-HttpSpec-WebHandler.html#v:unReqHandlerT"
      }
    }
  ]
]