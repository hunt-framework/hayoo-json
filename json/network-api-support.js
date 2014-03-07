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
        "word": "network-api-support"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Core",
          "name": "Core",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Support Core",
          "module": "Network.Api.Support.Core",
          "name": "Core",
          "package": "network-api-support",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a request using the specified settings, method, url and request transformer.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Core",
          "name": "runRequest",
          "package": "network-api-support",
          "signature": "ManagerSettings -\u003e StdMethod -\u003e Text -\u003e RequestTransformer -\u003e Responder b -\u003e m b",
          "source": "src/Network-Api-Support-Core.html#runRequest",
          "type": "function"
        },
        "index": {
          "description": "Run request using the specified settings method url and request transformer",
          "hierarchy": "Network Api Support Core",
          "module": "Network.Api.Support.Core",
          "name": "runRequest",
          "normalized": "ManagerSettings-\u003eStdMethod-\u003eText-\u003eRequestTransformer-\u003eResponder a-\u003eb a",
          "package": "network-api-support",
          "partial": "Request",
          "signature": "ManagerSettings-\u003eStdMethod-\u003eText-\u003eRequestTransformer-\u003eResponder b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#v:runRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a request using the specified settings, url and request transformer. The method\n | can be set using the setMethod transformer. This is only useful if you require a\n | custom http method. Prefer runRequest where possible.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Core",
          "name": "runRequest'",
          "package": "network-api-support",
          "signature": "ManagerSettings -\u003e Text -\u003e RequestTransformer -\u003e Responder b -\u003e m b",
          "source": "src/Network-Api-Support-Core.html#runRequest%27",
          "type": "function"
        },
        "index": {
          "description": "Run request using the specified settings url and request transformer The method can be set using the setMethod transformer This is only useful if you require custom http method Prefer runRequest where possible",
          "hierarchy": "Network Api Support Core",
          "module": "Network.Api.Support.Core",
          "name": "runRequest'",
          "normalized": "ManagerSettings-\u003eText-\u003eRequestTransformer-\u003eResponder a-\u003eb a",
          "package": "network-api-support",
          "partial": "Request'",
          "signature": "ManagerSettings-\u003eText-\u003eRequestTransformer-\u003eResponder b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Core.html#v:runRequest-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Request",
          "name": "Request",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Request.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "Request",
          "package": "network-api-support",
          "partial": "Request",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA RequestTransformer allows you to build up attributes on the request.\n | RequestTransformer is simply an Endo, and therefore has a Monoid, so\n | can be combined with \u003ccode\u003e\u003ca\u003e\u003c\u003e\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "RequestTransformer",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Request.html#RequestTransformer",
          "type": "type"
        },
        "index": {
          "description": "RequestTransformer allows you to build up attributes on the request RequestTransformer is simply an Endo and therefore has Monoid so can be combined with",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "RequestTransformer",
          "package": "network-api-support",
          "partial": "Request Transformer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#t:RequestTransformer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "(\u003c\u003e)",
          "package": "network-api-support",
          "signature": "m -\u003e m -\u003e m",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mappend",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "(\u003c\u003e) \u003c\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "network-api-support",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:-60--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a request headers.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "addHeader",
          "package": "network-api-support",
          "signature": "(CI ByteString, ByteString) -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Add request headers",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "addHeader",
          "normalized": "(CI ByteString,ByteString)-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Header",
          "signature": "(CI ByteString,ByteString)-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet an api key for use with basic auth.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setApiKey",
          "package": "network-api-support",
          "signature": "ByteString -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setApiKey",
          "type": "function"
        },
        "index": {
          "description": "Set an api key for use with basic auth",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setApiKey",
          "normalized": "ByteString-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Api Key",
          "signature": "ByteString-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setApiKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the request body from the specified byte string.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setBody",
          "package": "network-api-support",
          "signature": "ByteString -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setBody",
          "type": "function"
        },
        "index": {
          "description": "Set the request body from the specified byte string",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setBody",
          "normalized": "ByteString-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Body",
          "signature": "ByteString-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the request body from the specified lazy byte string.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setBodyLazy",
          "package": "network-api-support",
          "signature": "ByteString -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setBodyLazy",
          "type": "function"
        },
        "index": {
          "description": "Set the request body from the specified lazy byte string",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setBodyLazy",
          "normalized": "ByteString-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Body Lazy",
          "signature": "ByteString-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setBodyLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRegister all cookies in cookie jar against request.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setCookieJar",
          "package": "network-api-support",
          "signature": "CookieJar -\u003e UTCTime -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setCookieJar",
          "type": "function"
        },
        "index": {
          "description": "Register all cookies in cookie jar against request",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setCookieJar",
          "normalized": "CookieJar-\u003eUTCTime-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Cookie Jar",
          "signature": "CookieJar-\u003eUTCTime-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setCookieJar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a request headers.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setHeader",
          "package": "network-api-support",
          "signature": "(CI ByteString, ByteString) -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Set request headers",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setHeader",
          "normalized": "(CI ByteString,ByteString)-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Header",
          "signature": "(CI ByteString,ByteString)-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet request headers.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setHeaders",
          "package": "network-api-support",
          "signature": "[(CI ByteString, ByteString)] -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setHeaders",
          "type": "function"
        },
        "index": {
          "description": "Set request headers",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setHeaders",
          "normalized": "[(CI ByteString,ByteString)]-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Headers",
          "signature": "[(CI ByteString,ByteString)]-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the request body from the value which can be converted to JSON.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setJson",
          "package": "network-api-support",
          "signature": "a -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setJson",
          "type": "function"
        },
        "index": {
          "description": "Set the request body from the value which can be converted to JSON",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setJson",
          "normalized": "a-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Json",
          "signature": "a-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setJson"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the request method to be the specified name.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setMethod",
          "package": "network-api-support",
          "signature": "ByteString -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setMethod",
          "type": "function"
        },
        "index": {
          "description": "Set the request method to be the specified name",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setMethod",
          "normalized": "ByteString-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Method",
          "signature": "ByteString-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet request query parameters.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "setParams",
          "package": "network-api-support",
          "signature": "[(ByteString, ByteString)] -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#setParams",
          "type": "function"
        },
        "index": {
          "description": "Set request query parameters",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "setParams",
          "normalized": "[(ByteString,ByteString)]-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Params",
          "signature": "[(ByteString,ByteString)]-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:setParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a request headers.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Request",
          "name": "stripHeader",
          "package": "network-api-support",
          "signature": "CI ByteString -\u003e RequestTransformer",
          "source": "src/Network-Api-Support-Request.html#stripHeader",
          "type": "function"
        },
        "index": {
          "description": "Set request headers",
          "hierarchy": "Network Api Support Request",
          "module": "Network.Api.Support.Request",
          "name": "stripHeader",
          "normalized": "CI ByteString-\u003eRequestTransformer",
          "package": "network-api-support",
          "partial": "Header",
          "signature": "CI ByteString-\u003eRequestTransformer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Request.html#v:stripHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Response",
          "name": "Response",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Response.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "Response",
          "package": "network-api-support",
          "partial": "Response",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap up json parse and decode errors.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Response",
          "name": "JsonResult",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Response.html#JsonResult",
          "type": "data"
        },
        "index": {
          "description": "Wrap up json parse and decode errors",
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "JsonResult",
          "package": "network-api-support",
          "partial": "Json Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#t:JsonResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponse handler.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Response",
          "name": "Responder",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Response.html#Responder",
          "type": "type"
        },
        "index": {
          "description": "Response handler",
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "Responder",
          "package": "network-api-support",
          "partial": "Responder",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#t:Responder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Response",
          "name": "DecodeError",
          "package": "network-api-support",
          "signature": "DecodeError Text",
          "source": "src/Network-Api-Support-Response.html#JsonResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "DecodeError",
          "package": "network-api-support",
          "partial": "Decode Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:DecodeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Response",
          "name": "JsonSuccess",
          "package": "network-api-support",
          "signature": "JsonSuccess a",
          "source": "src/Network-Api-Support-Response.html#JsonResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "JsonSuccess",
          "package": "network-api-support",
          "partial": "Json Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:JsonSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Response",
          "name": "ParseError",
          "package": "network-api-support",
          "signature": "ParseError Text",
          "source": "src/Network-Api-Support-Response.html#JsonResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "ParseError",
          "package": "network-api-support",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift function handling status code and body into a responder.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Response",
          "name": "basicResponder",
          "package": "network-api-support",
          "signature": "(Int -\u003e ByteString -\u003e a) -\u003e Responder a",
          "source": "src/Network-Api-Support-Response.html#basicResponder",
          "type": "function"
        },
        "index": {
          "description": "Lift function handling status code and body into responder",
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "basicResponder",
          "normalized": "(Int-\u003eByteString-\u003ea)-\u003eResponder a",
          "package": "network-api-support",
          "partial": "Responder",
          "signature": "(Int-\u003eByteString-\u003ea)-\u003eResponder a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:basicResponder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode body.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Response",
          "name": "parseBody",
          "package": "network-api-support",
          "signature": "ByteString -\u003e JsonResult a",
          "source": "src/Network-Api-Support-Response.html#parseBody",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode body",
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "parseBody",
          "normalized": "ByteString-\u003eJsonResult a",
          "package": "network-api-support",
          "partial": "Body",
          "signature": "ByteString-\u003eJsonResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:parseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse and decode body handling error cases and success case.\n\u003c/p\u003e",
          "module": "Network.Api.Support.Response",
          "name": "parseBodyWith",
          "package": "network-api-support",
          "signature": "ByteString -\u003e (Text -\u003e b) -\u003e (Text -\u003e b) -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Network-Api-Support-Response.html#parseBodyWith",
          "type": "function"
        },
        "index": {
          "description": "Parse and decode body handling error cases and success case",
          "hierarchy": "Network Api Support Response",
          "module": "Network.Api.Support.Response",
          "name": "parseBodyWith",
          "normalized": "ByteString-\u003e(Text-\u003ea)-\u003e(Text-\u003ea)-\u003e(b-\u003ea)-\u003ea",
          "package": "network-api-support",
          "partial": "Body With",
          "signature": "ByteString-\u003e(Text-\u003eb)-\u003e(Text-\u003eb)-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Response.html#v:parseBodyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Api.Support.Security",
          "name": "Security",
          "package": "network-api-support",
          "source": "src/Network-Api-Support-Security.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network Api Support Security",
          "module": "Network.Api.Support.Security",
          "name": "Security",
          "package": "network-api-support",
          "partial": "Security",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Security.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA TLS validator that checks the domain only. Note that this means the validator\n | will not check the cert chain, and can be used on systems where Data.Certificate.X509\n | falls over as it does not have access to local root certs.\n |\n | ! Use with caution !\n\u003c/p\u003e",
          "module": "Network.Api.Support.Security",
          "name": "checkDomainOnly",
          "package": "network-api-support",
          "signature": "CertificateStore -\u003e ByteString -\u003e [X509] -\u003e IO TLSCertificateUsage",
          "source": "src/Network-Api-Support-Security.html#checkDomainOnly",
          "type": "function"
        },
        "index": {
          "description": "TLS validator that checks the domain only Note that this means the validator will not check the cert chain and can be used on systems where Data.Certificate.X509 falls over as it does not have access to local root certs Use with caution",
          "hierarchy": "Network Api Support Security",
          "module": "Network.Api.Support.Security",
          "name": "checkDomainOnly",
          "normalized": "CertificateStore-\u003eByteString-\u003e[X]-\u003eIO TLSCertificateUsage",
          "package": "network-api-support",
          "partial": "Domain Only",
          "signature": "CertificateStore-\u003eByteString-\u003e[X]-\u003eIO TLSCertificateUsage",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support-Security.html#v:checkDomainOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eToolkit for building http client libraries over Network.Http.Conduit\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Api.Support",
          "name": "Support",
          "package": "network-api-support",
          "source": "src/Network-Api-Support.html",
          "type": "module"
        },
        "index": {
          "description": "Toolkit for building http client libraries over Network.Http.Conduit",
          "hierarchy": "Network Api Support",
          "module": "Network.Api.Support",
          "name": "Support",
          "package": "network-api-support",
          "partial": "Support",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/network-api-support/docs/Network-Api-Support.html#"
      }
    }
  ]
]