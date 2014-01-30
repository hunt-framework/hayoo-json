[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eException handling for \u003ccode\u003eWai\u003c/code\u003e and \u003ccode\u003eWarp\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eBy default \u003ccode\u003eWarp\u003c/code\u003e not handles exceptions well. It just log them to \n   console. This package - an attempt to solve the problem.\n\u003c/p\u003e\u003cp\u003eThe only drawback stems from the basic advantages of Haskell - laziness. \n   All errors within \u003ccode\u003eWai\u003c/code\u003e \u003ccode\u003eResponseBuilder\u003c/code\u003e will not be caught. Thus, the \n   following code will not work:\n\u003c/p\u003e\u003cpre\u003e ... return $ responseLBS undefined ...\n\u003c/pre\u003e\u003cp\u003eTo ensure catch all errors, you need to consume all data \u003cem\u003ebefore\u003c/em\u003e feeding \n   the builder. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "module",
        "fct-source": "src/Network-Wai-Middleware-Catch.html",
        "fct-type": "module",
        "title": "Catch"
      },
      "index": {
        "description": "Exception handling for Wai and Warp By default Warp not handles exceptions well It just log them to console This package an attempt to solve the problem The only drawback stems from the basic advantages of Haskell laziness All errors within Wai ResponseBuilder will not be caught Thus the following code will not work return responseLBS undefined To ensure catch all errors you need to consume all data before feeding the builder",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "Catch",
        "normalized": "",
        "package": "wai-middleware-catch",
        "partial": "Catch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#t:ResponseHandler",
      "description": {
        "fct-descr": "\u003cp\u003eHandler wrapper. For polymorphic exceptions. If an exception is not \n   handled, it is thrown to default handler. \n\u003c/p\u003e\u003cpre\u003e protect' [...] defHandler\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "data",
        "fct-source": "src/Network-Wai-Middleware-Catch.html#ResponseHandler",
        "fct-type": "data",
        "title": "ResponseHandler"
      },
      "index": {
        "description": "Handler wrapper For polymorphic exceptions If an exception is not handled it is thrown to default handler protect defHandler",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "ResponseHandler",
        "normalized": "",
        "package": "wai-middleware-catch",
        "partial": "Response Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:ResponseHandler",
      "description": {
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "ResponseHandler (e -\u003e Application)",
        "fct-source": "src/Network-Wai-Middleware-Catch.html#ResponseHandler",
        "fct-type": "function",
        "title": "ResponseHandler"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "ResponseHandler",
        "normalized": "ResponseHandler(a-\u003eApplication)",
        "package": "wai-middleware-catch",
        "partial": "Response Handler",
        "signature": "ResponseHandler(e-\u003eApplication)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:defHandler",
      "description": {
        "fct-descr": "\u003cp\u003eDefault handler. \n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "SomeException -\u003e Application",
        "fct-source": "src/Network-Wai-Middleware-Catch.html#defHandler",
        "fct-type": "function",
        "title": "defHandler"
      },
      "index": {
        "description": "Default handler",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "defHandler",
        "normalized": "SomeException-\u003eApplication",
        "package": "wai-middleware-catch",
        "partial": "Handler",
        "signature": "SomeException-\u003eApplication"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:mkHandler",
      "description": {
        "fct-descr": "\u003cp\u003eHelper for make \u003ccode\u003eRequestHandler\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e protect [mkHandler myHandler] $ ...\n\u003c/pre\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "(e -\u003e Application)-\u003e ResponseHandler",
        "fct-type": "function",
        "title": "mkHandler"
      },
      "index": {
        "description": "Helper for make RequestHandler protect mkHandler myHandler",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "mkHandler",
        "normalized": "(a-\u003eApplication)-\u003eResponseHandler",
        "package": "wai-middleware-catch",
        "partial": "Handler",
        "signature": "(e-\u003eApplication)-\u003eResponseHandler"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:protect",
      "description": {
        "fct-descr": "\u003cp\u003eProtect \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003e chain from exceptions. This acts like\n   \u003ccode\u003e\u003ca\u003ecatches\u003c/a\u003e\u003c/code\u003e, but uses own handler type for simplicity.\n\u003c/p\u003e\u003cp\u003eIf an exception is not handled, it is thrown further. To handle this \n   use \u003ccode\u003e\u003ca\u003eprotect'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "[ResponseHandler]-\u003e Middleware",
        "fct-type": "function",
        "title": "protect"
      },
      "index": {
        "description": "Protect Middleware chain from exceptions This acts like catches but uses own handler type for simplicity If an exception is not handled it is thrown further To handle this use protect",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "protect",
        "normalized": "[ResponseHandler]-\u003eMiddleware",
        "package": "wai-middleware-catch",
        "partial": "",
        "signature": "[ResponseHandler]-\u003eMiddleware"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/wai-middleware-catch/docs/Network-Wai-Middleware-Catch.html#v:protect-39-",
      "description": {
        "fct-descr": "\u003cp\u003e\"Harden\" version of protect. \n\u003c/p\u003e",
        "fct-module": "Network.Wai.Middleware.Catch",
        "fct-package": "wai-middleware-catch",
        "fct-signature": "[ResponseHandler]-\u003e (e -\u003e Application)-\u003e Middleware",
        "fct-type": "function",
        "title": "protect'"
      },
      "index": {
        "description": "Harden version of protect",
        "hierarchy": "Network Wai Middleware Catch",
        "module": "Network.Wai.Middleware.Catch",
        "name": "protect'",
        "normalized": "[ResponseHandler]-\u003e(a-\u003eApplication)-\u003eMiddleware",
        "package": "wai-middleware-catch",
        "partial": "",
        "signature": "[ResponseHandler]-\u003e(e-\u003eApplication)-\u003eMiddleware"
      }
    }
  }
]