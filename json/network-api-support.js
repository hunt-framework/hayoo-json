[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#",
      "description": {
        "fct-module": "Network.Api.Support.Core",
        "fct-package": "network-api-support",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Support-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Core",
        "module": "Network.Api.Support.Core",
        "name": "Core",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#v:runRequest",
      "description": {
        "fct-descr": "\u003cp\u003eRun a request using the specified settings, method, url and request transformer.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Core",
        "fct-package": "network-api-support",
        "fct-signature": "ManagerSettings -\u003e StdMethod -\u003e Text -\u003e RequestTransformer m -\u003e Responder m b -\u003e m b",
        "fct-source": "src/Network-Api-Support-Core.html#runRequest",
        "fct-type": "function",
        "title": "runRequest"
      },
      "index": {
        "description": "Run request using the specified settings method url and request transformer",
        "hierarchy": "Network Api Support Core",
        "module": "Network.Api.Support.Core",
        "name": "runRequest",
        "normalized": "ManagerSettings-\u003eStdMethod-\u003eText-\u003eRequestTransformer a-\u003eResponder a b-\u003ea b",
        "package": "network-api-support",
        "partial": "Request",
        "signature": "ManagerSettings-\u003eStdMethod-\u003eText-\u003eRequestTransformer m-\u003eResponder m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#v:runRequest-39-",
      "description": {
        "fct-descr": "\u003cp\u003eRun a request using the specified settings, url and request transformer. The method\n | can be set using the setMethod transformer. This is only useful if you require a\n | custom http method. Prefer runRequest where possible.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Core",
        "fct-package": "network-api-support",
        "fct-signature": "ManagerSettings -\u003e Text -\u003e RequestTransformer m -\u003e Responder m b -\u003e m b",
        "fct-source": "src/Network-Api-Support-Core.html#runRequest%27",
        "fct-type": "function",
        "title": "runRequest'"
      },
      "index": {
        "description": "Run request using the specified settings url and request transformer The method can be set using the setMethod transformer This is only useful if you require custom http method Prefer runRequest where possible",
        "hierarchy": "Network Api Support Core",
        "module": "Network.Api.Support.Core",
        "name": "runRequest'",
        "normalized": "ManagerSettings-\u003eText-\u003eRequestTransformer a-\u003eResponder a b-\u003ea b",
        "package": "network-api-support",
        "partial": "Request'",
        "signature": "ManagerSettings-\u003eText-\u003eRequestTransformer m-\u003eResponder m b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#",
      "description": {
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Support-Request.html",
        "fct-type": "module",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "Request",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#t:RequestTransformer",
      "description": {
        "fct-descr": "\u003cp\u003eA RequestTransformer allows you to build up attributes on the request.\n | RequestTransformer is simply an Endo, and therefore has a Monoid, so\n | can be combined with \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "type",
        "fct-source": "src/Network-Api-Support-Request.html#RequestTransformer",
        "fct-type": "type",
        "title": "RequestTransformer"
      },
      "index": {
        "description": "RequestTransformer allows you to build up attributes on the request RequestTransformer is simply an Endo and therefore has Monoid so can be combined with",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "RequestTransformer",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Request Transformer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:-60--62-",
      "description": {
        "fct-descr": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "m -\u003e m -\u003e m",
        "fct-type": "function",
        "title": "(\u003c\u003e)"
      },
      "index": {
        "description": "An infix synonym for mappend",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "(\u003c\u003e) \u003c\u003e",
        "normalized": "a-\u003ea-\u003ea",
        "package": "network-api-support",
        "partial": "",
        "signature": "m-\u003em-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:addHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "(CI ByteString, ByteString) -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#addHeader",
        "fct-type": "function",
        "title": "addHeader"
      },
      "index": {
        "description": "Add request headers",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "addHeader",
        "normalized": "(CI ByteString,ByteString)-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Header",
        "signature": "(CI ByteString,ByteString)-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setApiKey",
      "description": {
        "fct-descr": "\u003cp\u003eSet an api key for use with basic auth.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setApiKey",
        "fct-type": "function",
        "title": "setApiKey"
      },
      "index": {
        "description": "Set an api key for use with basic auth",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setApiKey",
        "normalized": "ByteString-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Api Key",
        "signature": "ByteString-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setBody",
      "description": {
        "fct-descr": "\u003cp\u003eSet the request body from the specified byte string.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setBody",
        "fct-type": "function",
        "title": "setBody"
      },
      "index": {
        "description": "Set the request body from the specified byte string",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setBody",
        "normalized": "ByteString-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Body",
        "signature": "ByteString-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setBodyLazy",
      "description": {
        "fct-descr": "\u003cp\u003eSet the request body from the specified lazy byte string.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setBodyLazy",
        "fct-type": "function",
        "title": "setBodyLazy"
      },
      "index": {
        "description": "Set the request body from the specified lazy byte string",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setBodyLazy",
        "normalized": "ByteString-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Body Lazy",
        "signature": "ByteString-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setCookieJar",
      "description": {
        "fct-descr": "\u003cp\u003eRegister all cookies in cookie jar against request.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "CookieJar -\u003e UTCTime -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setCookieJar",
        "fct-type": "function",
        "title": "setCookieJar"
      },
      "index": {
        "description": "Register all cookies in cookie jar against request",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setCookieJar",
        "normalized": "CookieJar-\u003eUTCTime-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Cookie Jar",
        "signature": "CookieJar-\u003eUTCTime-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSet a request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "(CI ByteString, ByteString) -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setHeader",
        "fct-type": "function",
        "title": "setHeader"
      },
      "index": {
        "description": "Set request headers",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setHeader",
        "normalized": "(CI ByteString,ByteString)-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Header",
        "signature": "(CI ByteString,ByteString)-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eSet request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "[(CI ByteString, ByteString)] -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setHeaders",
        "fct-type": "function",
        "title": "setHeaders"
      },
      "index": {
        "description": "Set request headers",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setHeaders",
        "normalized": "[(CI ByteString,ByteString)]-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Headers",
        "signature": "[(CI ByteString,ByteString)]-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setJson",
      "description": {
        "fct-descr": "\u003cp\u003eSet the request body from the value which can be converted to JSON.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "a -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setJson",
        "fct-type": "function",
        "title": "setJson"
      },
      "index": {
        "description": "Set the request body from the value which can be converted to JSON",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setJson",
        "normalized": "a-\u003eRequestTransformer b",
        "package": "network-api-support",
        "partial": "Json",
        "signature": "a-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setMethod",
      "description": {
        "fct-descr": "\u003cp\u003eSet the request method to be the specified name.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setMethod",
        "fct-type": "function",
        "title": "setMethod"
      },
      "index": {
        "description": "Set the request method to be the specified name",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setMethod",
        "normalized": "ByteString-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Method",
        "signature": "ByteString-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setParams",
      "description": {
        "fct-descr": "\u003cp\u003eSet request query parameters.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "[(ByteString, ByteString)] -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#setParams",
        "fct-type": "function",
        "title": "setParams"
      },
      "index": {
        "description": "Set request query parameters",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "setParams",
        "normalized": "[(ByteString,ByteString)]-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Params",
        "signature": "[(ByteString,ByteString)]-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:stripHeader",
      "description": {
        "fct-descr": "\u003cp\u003eSet a request headers.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Request",
        "fct-package": "network-api-support",
        "fct-signature": "CI ByteString -\u003e RequestTransformer m",
        "fct-source": "src/Network-Api-Support-Request.html#stripHeader",
        "fct-type": "function",
        "title": "stripHeader"
      },
      "index": {
        "description": "Set request headers",
        "hierarchy": "Network Api Support Request",
        "module": "Network.Api.Support.Request",
        "name": "stripHeader",
        "normalized": "CI ByteString-\u003eRequestTransformer a",
        "package": "network-api-support",
        "partial": "Header",
        "signature": "CI ByteString-\u003eRequestTransformer m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#",
      "description": {
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Support-Response.html",
        "fct-type": "module",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "Response",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#t:JsonResult",
      "description": {
        "fct-descr": "\u003cp\u003eWrap up json parse and decode errors.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "data",
        "fct-source": "src/Network-Api-Support-Response.html#JsonResult",
        "fct-type": "data",
        "title": "JsonResult"
      },
      "index": {
        "description": "Wrap up json parse and decode errors",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "JsonResult",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Json Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#t:Responder",
      "description": {
        "fct-descr": "\u003cp\u003eResponse handler.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "type",
        "fct-source": "src/Network-Api-Support-Response.html#Responder",
        "fct-type": "type",
        "title": "Responder"
      },
      "index": {
        "description": "Response handler",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "Responder",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Responder",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:DecodeError",
      "description": {
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "DecodeError Text",
        "fct-source": "src/Network-Api-Support-Response.html#JsonResult",
        "fct-type": "function",
        "title": "DecodeError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "DecodeError",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Decode Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:JsonSuccess",
      "description": {
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "JsonSuccess a",
        "fct-source": "src/Network-Api-Support-Response.html#JsonResult",
        "fct-type": "function",
        "title": "JsonSuccess"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "JsonSuccess",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Json Success",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:ParseError",
      "description": {
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "ParseError Text",
        "fct-source": "src/Network-Api-Support-Response.html#JsonResult",
        "fct-type": "function",
        "title": "ParseError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "ParseError",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Parse Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:basicResponder",
      "description": {
        "fct-descr": "\u003cp\u003eLift function handling status code and body into a responder.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "(Int -\u003e ByteString -\u003e a) -\u003e Responder m a",
        "fct-source": "src/Network-Api-Support-Response.html#basicResponder",
        "fct-type": "function",
        "title": "basicResponder"
      },
      "index": {
        "description": "Lift function handling status code and body into responder",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "basicResponder",
        "normalized": "(Int-\u003eByteString-\u003ea)-\u003eResponder b a",
        "package": "network-api-support",
        "partial": "Responder",
        "signature": "(Int-\u003eByteString-\u003ea)-\u003eResponder m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:parseBody",
      "description": {
        "fct-descr": "\u003cp\u003eParse and decode body.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e JsonResult a",
        "fct-source": "src/Network-Api-Support-Response.html#parseBody",
        "fct-type": "function",
        "title": "parseBody"
      },
      "index": {
        "description": "Parse and decode body",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "parseBody",
        "normalized": "ByteString-\u003eJsonResult a",
        "package": "network-api-support",
        "partial": "Body",
        "signature": "ByteString-\u003eJsonResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:parseBodyWith",
      "description": {
        "fct-descr": "\u003cp\u003eParse and decode body handling error cases and success case.\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Response",
        "fct-package": "network-api-support",
        "fct-signature": "ByteString -\u003e (Text -\u003e b) -\u003e (Text -\u003e b) -\u003e (a -\u003e b) -\u003e b",
        "fct-source": "src/Network-Api-Support-Response.html#parseBodyWith",
        "fct-type": "function",
        "title": "parseBodyWith"
      },
      "index": {
        "description": "Parse and decode body handling error cases and success case",
        "hierarchy": "Network Api Support Response",
        "module": "Network.Api.Support.Response",
        "name": "parseBodyWith",
        "normalized": "ByteString-\u003e(Text-\u003ea)-\u003e(Text-\u003ea)-\u003e(b-\u003ea)-\u003ea",
        "package": "network-api-support",
        "partial": "Body With",
        "signature": "ByteString-\u003e(Text-\u003eb)-\u003e(Text-\u003eb)-\u003e(a-\u003eb)-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Security.html#",
      "description": {
        "fct-module": "Network.Api.Support.Security",
        "fct-package": "network-api-support",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Support-Security.html",
        "fct-type": "module",
        "title": "Security"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Api Support Security",
        "module": "Network.Api.Support.Security",
        "name": "Security",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Security",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Security.html#v:checkDomainOnly",
      "description": {
        "fct-descr": "\u003cp\u003eA TLS validator that checks the domain only. Note that this means the validator\n | will not check the cert chain, and can be used on systems where Data.Certificate.X509\n | falls over as it does not have access to local root certs.\n |\n | ! Use with caution !\n\u003c/p\u003e",
        "fct-module": "Network.Api.Support.Security",
        "fct-package": "network-api-support",
        "fct-signature": "CertificateStore -\u003e ByteString -\u003e [X509] -\u003e IO TLSCertificateUsage",
        "fct-source": "src/Network-Api-Support-Security.html#checkDomainOnly",
        "fct-type": "function",
        "title": "checkDomainOnly"
      },
      "index": {
        "description": "TLS validator that checks the domain only Note that this means the validator will not check the cert chain and can be used on systems where Data.Certificate.X509 falls over as it does not have access to local root certs Use with caution",
        "hierarchy": "Network Api Support Security",
        "module": "Network.Api.Support.Security",
        "name": "checkDomainOnly",
        "normalized": "CertificateStore-\u003eByteString-\u003e[X]-\u003eIO TLSCertificateUsage",
        "package": "network-api-support",
        "partial": "Domain Only",
        "signature": "CertificateStore-\u003eByteString-\u003e[X]-\u003eIO TLSCertificateUsage"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToolkit for building http client libraries over Network.Http.Conduit\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Api.Support",
        "fct-package": "network-api-support",
        "fct-signature": "module",
        "fct-source": "src/Network-Api-Support.html",
        "fct-type": "module",
        "title": "Support"
      },
      "index": {
        "description": "Toolkit for building http client libraries over Network.Http.Conduit",
        "hierarchy": "Network Api Support",
        "module": "Network.Api.Support",
        "name": "Support",
        "normalized": "",
        "package": "network-api-support",
        "partial": "Support",
        "signature": ""
      }
    }
  }
]