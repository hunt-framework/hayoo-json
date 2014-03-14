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
        "word": "welshy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "Welshy",
          "package": "welshy",
          "source": "src/Web-Welshy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "Welshy",
          "package": "welshy",
          "partial": "Welshy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "Action",
          "package": "welshy",
          "source": "src/Web-Welshy-Action.html#Action",
          "type": "data"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "Action",
          "package": "welshy",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type that can be converted from a strict \u003ccode\u003eText\u003c/code\u003e value.\n Used for parsing route captures, query parameters, header values, etc.\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "FromText",
          "package": "welshy",
          "source": "src/Web-Welshy-FromText.html#FromText",
          "type": "class"
        },
        "index": {
          "description": "type that can be converted from strict Text value Used for parsing route captures query parameters header values etc Minimal complete definition fromText",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "FromText",
          "package": "welshy",
          "partial": "From Text",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#t:FromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA route, query or form parameter and its value.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "Param",
          "package": "welshy",
          "source": "src/Web-Welshy-Action.html#Param",
          "type": "type"
        },
        "index": {
          "description": "route query or form parameter and its value",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "Param",
          "package": "welshy",
          "partial": "Param",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSinatra-style route pattern. Named parameters are prepended with\n a colon (e.g. \u003ccode\u003e\"/users/:id\"\u003c/code\u003e) and can be accessed with \u003ccode\u003e\u003ca\u003ecapture\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "RoutePattern",
          "package": "welshy",
          "source": "src/Web-Welshy.html#RoutePattern",
          "type": "type"
        },
        "index": {
          "description": "Sinatra-style route pattern Named parameters are prepended with colon e.g users id and can be accessed with capture",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "RoutePattern",
          "package": "welshy",
          "partial": "Route Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#t:RoutePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe use this monad to compose WAI \u003ccode\u003e\u003ca\u003eMiddleware\u003c/a\u003e\u003c/code\u003e, using the \u003ccode\u003e\u003ca\u003emiddleware\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eroute\u003c/a\u003e\u003c/code\u003e functions.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "Welshy",
          "package": "welshy",
          "source": "src/Web-Welshy.html#Welshy",
          "type": "data"
        },
        "index": {
          "description": "We use this monad to compose WAI Middleware using the middleware and route functions",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "Welshy",
          "package": "welshy",
          "partial": "Welshy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#t:Welshy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the bearer token from an authorization header using the \u003ccode\u003eBearer\u003c/code\u003e\n authentication scheme (RFC 6750).\n\u003c/p\u003e\u003cp\u003eIf the request does not have a (syntactically) valid authorization\n header for the Bearer scheme, the action halts with HTTP status\n \u003ccode\u003e401 Unauthorized\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "bearerAuth",
          "package": "welshy",
          "signature": "Action a",
          "source": "src/Web-Welshy-Request.html#bearerAuth",
          "type": "function"
        },
        "index": {
          "description": "Get the bearer token from an authorization header using the Bearer authentication scheme RFC If the request does not have syntactically valid authorization header for the Bearer scheme the action halts with HTTP status Unauthorized",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "bearerAuth",
          "package": "welshy",
          "partial": "Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:bearerAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the request body.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "body",
          "package": "welshy",
          "signature": "Action ByteString",
          "source": "src/Web-Welshy-Action.html#body",
          "type": "function"
        },
        "index": {
          "description": "Get the request body",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "body",
          "package": "welshy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a parameter captured by the route pattern.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the parameter does not exist, fails with an error.\n\u003c/li\u003e\u003cli\u003e If the parameter was found but could not be parsed, \u003ccode\u003e\u003ca\u003epass\u003c/a\u003e\u003c/code\u003e is called.\n       This means routes are typed to a degree.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "capture",
          "package": "welshy",
          "signature": "Text -\u003e Action a",
          "source": "src/Web-Welshy-Request.html#capture",
          "type": "function"
        },
        "index": {
          "description": "Get parameter captured by the route pattern If the parameter does not exist fails with an error If the parameter was found but could not be parsed pass is called This means routes are typed to degree",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "capture",
          "normalized": "Text-\u003eAction a",
          "package": "welshy",
          "signature": "Text-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:capture"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all route captures.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "captures",
          "package": "welshy",
          "signature": "Action [Param]",
          "source": "src/Web-Welshy-Action.html#captures",
          "type": "function"
        },
        "index": {
          "description": "Get all route captures",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "captures",
          "normalized": "Action[Param]",
          "package": "welshy",
          "signature": "Action[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:captures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e but with the exception handler and result in \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "catchIO",
          "package": "welshy",
          "signature": "IO a -\u003e (e -\u003e Action a) -\u003e Action a",
          "source": "src/Web-Welshy-Action.html#catchIO",
          "type": "function"
        },
        "index": {
          "description": "Like catch but with the exception handler and result in Action",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "catchIO",
          "normalized": "IO a-\u003e(b-\u003eAction a)-\u003eAction a",
          "package": "welshy",
          "partial": "IO",
          "signature": "IO a-\u003e(e-\u003eAction a)-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:catchIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "delete",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "delete",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends the given file as the response.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "file",
          "package": "welshy",
          "signature": "FilePath -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#file",
          "type": "function"
        },
        "index": {
          "description": "Sends the given file as the response",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "file",
          "normalized": "FilePath-\u003eAction()",
          "package": "welshy",
          "signature": "FilePath-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003efilePart\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef offset byteCount\u003c/code\u003e sends \u003ccode\u003ebyteCount\u003c/code\u003e bytes of the file \u003ccode\u003ef\u003c/code\u003e,\n beginning at \u003ccode\u003eoffset\u003c/code\u003e, as the response.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "filePart",
          "package": "welshy",
          "signature": "FilePath -\u003e Integer -\u003e Integer -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#filePart",
          "type": "function"
        },
        "index": {
          "description": "filePart offset byteCount sends byteCount bytes of the file beginning at offset as the response",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "filePart",
          "normalized": "FilePath-\u003eInteger-\u003eInteger-\u003eAction()",
          "package": "welshy",
          "partial": "Part",
          "signature": "FilePath-\u003eInteger-\u003eInteger-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:filePart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "fromText",
          "package": "welshy",
          "signature": "Text -\u003e Either String a",
          "source": "src/Web-Welshy-FromText.html#fromText",
          "type": "method"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "fromText",
          "normalized": "Text-\u003eEither String a",
          "package": "welshy",
          "partial": "Text",
          "signature": "Text-\u003eEither String a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:fromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows a specialized way of parsing lists of values.\n The default definition uses \u003ccode\u003e\u003ca\u003efromText\u003c/a\u003e\u003c/code\u003e to parse comma-delimited lists.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "fromTextList",
          "package": "welshy",
          "signature": "Text -\u003e Either String [a]",
          "source": "src/Web-Welshy-FromText.html#fromTextList",
          "type": "method"
        },
        "index": {
          "description": "Allows specialized way of parsing lists of values The default definition uses fromText to parse comma-delimited lists",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "fromTextList",
          "normalized": "Text-\u003eEither String[a]",
          "package": "welshy",
          "partial": "Text List",
          "signature": "Text-\u003eEither String[a]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:fromTextList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "get",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#get",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "get",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop running the current action and continue with another one.\n The other action will live in the same request environment and can access\n the same route captures, but it will start with a fresh default response.\n\u003c/p\u003e\u003cp\u003eThis is incredibly useful for error handling. For example:\n\u003c/p\u003e\u003cpre\u003e patch \"/users/:uid\" $ do\n     uid \u003c- capture \"uid\"\n     user \u003c- getUserFromDB uid\n             `catchIO` (\\_ -\u003e halt $ status notFound404)\n     ...\n\u003c/pre\u003e",
          "module": "Web.Welshy",
          "name": "halt",
          "package": "welshy",
          "signature": "Action () -\u003e Action a",
          "source": "src/Web-Welshy-Action.html#halt",
          "type": "function"
        },
        "index": {
          "description": "Stop running the current action and continue with another one The other action will live in the same request environment and can access the same route captures but it will start with fresh default response This is incredibly useful for error handling For example patch users uid do uid capture uid user getUserFromDB uid catchIO halt status notFound404",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "halt",
          "normalized": "Action()-\u003eAction a",
          "package": "welshy",
          "signature": "Action()-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:halt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "head",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "head",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd or replace one of the response headers.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "header",
          "package": "welshy",
          "signature": "HeaderName -\u003e ByteString -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#header",
          "type": "function"
        },
        "index": {
          "description": "Add or replace one of the response headers",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "header",
          "normalized": "HeaderName-\u003eByteString-\u003eAction()",
          "package": "welshy",
          "signature": "HeaderName-\u003eByteString-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the response body to the given lazy \u003ccode\u003eText\u003c/code\u003e\n and the content-type to \u003ccode\u003etext/html\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "html",
          "package": "welshy",
          "signature": "Text -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#html",
          "type": "function"
        },
        "index": {
          "description": "Set the response body to the given lazy Text and the content-type to text html",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "html",
          "normalized": "Text-\u003eAction()",
          "package": "welshy",
          "signature": "Text-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ehtml\u003c/a\u003e\u003c/code\u003e but with a strict \u003ccode\u003eText\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "html'",
          "package": "welshy",
          "signature": "Text -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#html%27",
          "type": "function"
        },
        "index": {
          "description": "Like html but with strict Text value",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "html'",
          "normalized": "Text-\u003eAction()",
          "package": "welshy",
          "signature": "Text-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:html-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the response body to the JSON encoding of the given value\n and the content-type to \u003ccode\u003eapplication/json\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "json",
          "package": "welshy",
          "signature": "a -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#json",
          "type": "function"
        },
        "index": {
          "description": "Set the response body to the JSON encoding of the given value and the content-type to application json",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "json",
          "normalized": "a-\u003eAction()",
          "package": "welshy",
          "signature": "a-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse the request body as a JSON object.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the body could not be parsed,\n       the action halts with HTTP status \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "jsonData",
          "package": "welshy",
          "signature": "Action a",
          "source": "src/Web-Welshy-Request.html#jsonData",
          "type": "function"
        },
        "index": {
          "description": "Parse the request body as JSON object If the body could not be parsed the action halts with HTTP status Bad Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "jsonData",
          "package": "welshy",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:jsonData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a JSON parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the request body is not a JSON dictionary,\n       or if the parameter does not exist or could not be parsed,\n       the action halts with HTTP status \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "jsonParam",
          "package": "welshy",
          "signature": "Text -\u003e Action a",
          "source": "src/Web-Welshy-Request.html#jsonParam",
          "type": "function"
        },
        "index": {
          "description": "Get JSON parameter If the request body is not JSON dictionary or if the parameter does not exist or could not be parsed the action halts with HTTP status Bad Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "jsonParam",
          "normalized": "Text-\u003eAction a",
          "package": "welshy",
          "partial": "Param",
          "signature": "Text-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:jsonParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all JSON parameters.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the request body is not a JSON dictionary,\n       the action halts with HTTP status \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "jsonParams",
          "package": "welshy",
          "signature": "Action Object",
          "source": "src/Web-Welshy-Request.html#jsonParams",
          "type": "function"
        },
        "index": {
          "description": "Get all JSON parameters If the request body is not JSON dictionary the action halts with HTTP status Bad Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "jsonParams",
          "package": "welshy",
          "partial": "Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:jsonParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e maybeFromText = either (const Nothing) Just . fromText\n\u003c/pre\u003e",
          "module": "Web.Welshy",
          "name": "maybeFromText",
          "package": "welshy",
          "signature": "Text -\u003e Maybe a",
          "source": "src/Web-Welshy-FromText.html#maybeFromText",
          "type": "function"
        },
        "index": {
          "description": "maybeFromText either const Nothing Just fromText",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "maybeFromText",
          "normalized": "Text-\u003eMaybe a",
          "package": "welshy",
          "partial": "From Text",
          "signature": "Text-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:maybeFromText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ejsonParam\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parameter wasn't found.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the request body is not a JSON dictionary,\n       the action halts with HTTP status \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "maybeJsonParam",
          "package": "welshy",
          "signature": "Text -\u003e Action (Maybe a)",
          "source": "src/Web-Welshy-Request.html#maybeJsonParam",
          "type": "function"
        },
        "index": {
          "description": "Like jsonParam but returns Nothing if the parameter wasn found If the request body is not JSON dictionary the action halts with HTTP status Bad Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "maybeJsonParam",
          "normalized": "Text-\u003eAction(Maybe a)",
          "package": "welshy",
          "partial": "Json Param",
          "signature": "Text-\u003eAction(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:maybeJsonParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003equeryParam\u003c/a\u003e\u003c/code\u003e, but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parameter wasn't found.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the parameter could not be parsed,\n       the action halts with HTTP status \u003ccode\u003e400 BadRequest\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "maybeQueryParam",
          "package": "welshy",
          "signature": "Text -\u003e Action (Maybe a)",
          "source": "src/Web-Welshy-Request.html#maybeQueryParam",
          "type": "function"
        },
        "index": {
          "description": "Like queryParam but returns Nothing if the parameter wasn found If the parameter could not be parsed the action halts with HTTP status BadRequest",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "maybeQueryParam",
          "normalized": "Text-\u003eAction(Maybe a)",
          "package": "welshy",
          "partial": "Query Param",
          "signature": "Text-\u003eAction(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:maybeQueryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert middleware into the app. Note that unlike in Scotty,\n each middleware is run at the point of insertion.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "middleware",
          "package": "welshy",
          "signature": "Middleware -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#middleware",
          "type": "function"
        },
        "index": {
          "description": "Insert middleware into the app Note that unlike in Scotty each middleware is run at the point of insertion",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "middleware",
          "normalized": "Middleware-\u003eWelshy()",
          "package": "welshy",
          "signature": "Middleware-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:middleware"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "options",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "options",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStop the current action and continue with the next matching route.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "pass",
          "package": "welshy",
          "signature": "Action a",
          "source": "src/Web-Welshy-Action.html#pass",
          "type": "function"
        },
        "index": {
          "description": "Stop the current action and continue with the next matching route",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "pass",
          "package": "welshy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "patch",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#patch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "patch",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:patch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "post",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#post",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "post",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Web.Welshy",
          "name": "put",
          "package": "welshy",
          "signature": "RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#put",
          "type": "function"
        },
        "index": {
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "put",
          "normalized": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "RoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a query parameter.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If the parameter does not exist or could not be parsed,\n       the action halts with HTTP status \u003ccode\u003e400 Bad Request\u003c/code\u003e.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Web.Welshy",
          "name": "queryParam",
          "package": "welshy",
          "signature": "Text -\u003e Action a",
          "source": "src/Web-Welshy-Request.html#queryParam",
          "type": "function"
        },
        "index": {
          "description": "Get query parameter If the parameter does not exist or could not be parsed the action halts with HTTP status Bad Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "queryParam",
          "normalized": "Text-\u003eAction a",
          "package": "welshy",
          "partial": "Param",
          "signature": "Text-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:queryParam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all query parameters.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "queryParams",
          "package": "welshy",
          "signature": "Action [Param]",
          "source": "src/Web-Welshy-Action.html#queryParams",
          "type": "function"
        },
        "index": {
          "description": "Get all query parameters",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "queryParams",
          "normalized": "Action[Param]",
          "package": "welshy",
          "partial": "Params",
          "signature": "Action[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:queryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the raw WAI \u003ccode\u003e\u003ca\u003eRequest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "request",
          "package": "welshy",
          "signature": "Action Request",
          "source": "src/Web-Welshy-Action.html#request",
          "type": "function"
        },
        "index": {
          "description": "Get the raw WAI Request",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "request",
          "package": "welshy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefine a route for an HTTP method and URL pattern that runs the given\n action. Routes are matched in the order they are defined. If no route\n matches, a 404 response is returned.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "route",
          "package": "welshy",
          "signature": "StdMethod -\u003e RoutePattern -\u003e Action () -\u003e Welshy ()",
          "source": "src/Web-Welshy.html#route",
          "type": "function"
        },
        "index": {
          "description": "Define route for an HTTP method and URL pattern that runs the given action Routes are matched in the order they are defined If no route matches response is returned",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "route",
          "normalized": "StdMethod-\u003eRoutePattern-\u003eAction()-\u003eWelshy()",
          "package": "welshy",
          "signature": "StdMethod-\u003eRoutePattern-\u003eAction()-\u003eWelshy()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the response body to the given \u003ccode\u003e\u003ca\u003eSource\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "source",
          "package": "welshy",
          "signature": "Source (ResourceT IO) (Flush Builder) -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#source",
          "type": "function"
        },
        "index": {
          "description": "Set the response body to the given Source",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "source",
          "normalized": "Source(ResourceT IO)(Flush Builder)-\u003eAction()",
          "package": "welshy",
          "signature": "Source(ResourceT IO)(Flush Builder)-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:source"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the HTTP status of the response. The default is \u003ccode\u003e\u003ca\u003eok200\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "status",
          "package": "welshy",
          "signature": "Status -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#status",
          "type": "function"
        },
        "index": {
          "description": "Set the HTTP status of the response The default is ok200",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "status",
          "normalized": "Status-\u003eAction()",
          "package": "welshy",
          "signature": "Status-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the response body to the given lazy \u003ccode\u003eText\u003c/code\u003e\n and the content-type to \u003ccode\u003etext/plain\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "text",
          "package": "welshy",
          "signature": "Text -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#text",
          "type": "function"
        },
        "index": {
          "description": "Set the response body to the given lazy Text and the content-type to text plain",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "text",
          "normalized": "Text-\u003eAction()",
          "package": "welshy",
          "signature": "Text-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003etext\u003c/a\u003e\u003c/code\u003e but with a strict \u003ccode\u003eText\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "text'",
          "package": "welshy",
          "signature": "Text -\u003e Action ()",
          "source": "src/Web-Welshy-Response.html#text%27",
          "type": "function"
        },
        "index": {
          "description": "Like text but with strict Text value",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "text'",
          "normalized": "Text-\u003eAction()",
          "package": "welshy",
          "signature": "Text-\u003eAction()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:text-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a Welshy app using the Warp server.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "welshy",
          "package": "welshy",
          "signature": "Port -\u003e Welshy () -\u003e IO ()",
          "source": "src/Web-Welshy.html#welshy",
          "type": "function"
        },
        "index": {
          "description": "Run Welshy app using the Warp server",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "welshy",
          "normalized": "Port-\u003eWelshy()-\u003eIO()",
          "package": "welshy",
          "signature": "Port-\u003eWelshy()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:welshy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns a Welshy app into a WAI \u003ccode\u003e\u003ca\u003eApplication\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Web.Welshy",
          "name": "welshyApp",
          "package": "welshy",
          "signature": "Welshy () -\u003e Application",
          "source": "src/Web-Welshy.html#welshyApp",
          "type": "function"
        },
        "index": {
          "description": "Turns Welshy app into WAI Application",
          "hierarchy": "Web Welshy",
          "module": "Web.Welshy",
          "name": "welshyApp",
          "normalized": "Welshy()-\u003eApplication",
          "package": "welshy",
          "partial": "App",
          "signature": "Welshy()-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/welshy/docs/Web-Welshy.html#v:welshyApp"
      }
    }
  ]
]