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
        "word": "wai-middleware-catch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eException handling for \u003ccode\u003eWai\u003c/code\u003e and \u003ccode\u003eWarp\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy default \u003ccode\u003eWarp\u003c/code\u003e not handles exceptions well. It just log them to \n   console. This package - an attempt to solve the problem.\n\u003c/p\u003e\u003cp\u003eThe only drawback stems from the basic advantages of Haskell - laziness. \n   All errors within \u003ccode\u003eWai\u003c/code\u003e \u003ccode\u003eResponseBuilder\u003c/code\u003e will not be caught. Thus, the \n   following code will not work:\n\u003c/p\u003e\u003cpre\u003e ... return $ responseLBS undefined ...\n\u003c/pre\u003e\u003cp\u003eTo ensure catch all errors, you need to consume all data \u003cem\u003ebefore\u003c/em\u003e feeding \n   the builder. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "Catch",
          "package": "wai-middleware-catch",
          "source": "src/Network-Wai-Middleware-Catch.html",
          "type": "module"
        },
        "index": {
          "description": "Exception handling for Wai and Warp By default Warp not handles exceptions well It just log them to console This package an attempt to solve the problem The only drawback stems from the basic advantages of Haskell laziness All errors within Wai ResponseBuilder will not be caught Thus the following code will not work return responseLBS undefined To ensure catch all errors you need to consume all data before feeding the builder",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "Catch",
          "package": "wai-middleware-catch",
          "partial": "Catch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandler wrapper. For polymorphic exceptions. If an exception is not \n   handled, it is thrown to default handler. \n\u003c/p\u003e\u003cpre\u003e protect' [...] defHandler\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "ResponseHandler",
          "package": "wai-middleware-catch",
          "source": "src/Network-Wai-Middleware-Catch.html#ResponseHandler",
          "type": "data"
        },
        "index": {
          "description": "Handler wrapper For polymorphic exceptions If an exception is not handled it is thrown to default handler protect defHandler",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "ResponseHandler",
          "package": "wai-middleware-catch",
          "partial": "Response Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#t:ResponseHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Wai.Middleware.Catch",
          "name": "ResponseHandler",
          "package": "wai-middleware-catch",
          "signature": "ResponseHandler (e -\u003e Application)",
          "source": "src/Network-Wai-Middleware-Catch.html#ResponseHandler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "ResponseHandler",
          "normalized": "ResponseHandler(a-\u003eApplication)",
          "package": "wai-middleware-catch",
          "partial": "Response Handler",
          "signature": "ResponseHandler(e-\u003eApplication)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:ResponseHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault handler. \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "defHandler",
          "package": "wai-middleware-catch",
          "signature": "SomeException -\u003e Application",
          "source": "src/Network-Wai-Middleware-Catch.html#defHandler",
          "type": "function"
        },
        "index": {
          "description": "Default handler",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "defHandler",
          "normalized": "SomeException-\u003eApplication",
          "package": "wai-middleware-catch",
          "partial": "Handler",
          "signature": "SomeException-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:defHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper for make \u003ccode\u003eRequestHandler\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e protect [mkHandler myHandler] $ ...\n\u003c/pre\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "mkHandler",
          "package": "wai-middleware-catch",
          "signature": "(e -\u003e Application)-\u003e ResponseHandler",
          "type": "function"
        },
        "index": {
          "description": "Helper for make RequestHandler protect mkHandler myHandler",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "mkHandler",
          "normalized": "(a-\u003eApplication)-\u003eResponseHandler",
          "package": "wai-middleware-catch",
          "partial": "Handler",
          "signature": "(e-\u003eApplication)-\u003eResponseHandler",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:mkHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProtect \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003e chain from exceptions. This acts like\n   \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, but uses own handler type for simplicity.\n\u003c/p\u003e\u003cp\u003eIf an exception is not handled, it is thrown further. To handle this \n   use \u003ccode\u003e\u003ca\u003eprotect'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "protect",
          "package": "wai-middleware-catch",
          "signature": "[ResponseHandler]-\u003e Middleware",
          "type": "function"
        },
        "index": {
          "description": "Protect Middleware chain from exceptions This acts like catches but uses own handler type for simplicity If an exception is not handled it is thrown further To handle this use protect",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "protect",
          "normalized": "[ResponseHandler]-\u003eMiddleware",
          "package": "wai-middleware-catch",
          "signature": "[ResponseHandler]-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:protect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Harden\" version of protect. \n\u003c/p\u003e",
          "module": "Network.Wai.Middleware.Catch",
          "name": "protect'",
          "package": "wai-middleware-catch",
          "signature": "[ResponseHandler]-\u003e (e -\u003e Application)-\u003e Middleware",
          "type": "function"
        },
        "index": {
          "description": "Harden version of protect",
          "hierarchy": "Network Wai Middleware Catch",
          "module": "Network.Wai.Middleware.Catch",
          "name": "protect'",
          "normalized": "[ResponseHandler]-\u003e(a-\u003eApplication)-\u003eMiddleware",
          "package": "wai-middleware-catch",
          "signature": "[ResponseHandler]-\u003e(e-\u003eApplication)-\u003eMiddleware",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:protect-39-"
      }
    }
  ]
]