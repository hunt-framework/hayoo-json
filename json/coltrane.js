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
        "word": "coltrane"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Coltrane",
          "name": "Coltrane",
          "package": "coltrane",
          "source": "src/Coltrane.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "Coltrane",
          "package": "coltrane",
          "partial": "Coltrane",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a header to the current ResponseState's headers\n HeaderName defined in Network.HTTP.Types.Header\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "addHeader",
          "package": "coltrane",
          "signature": "HeaderName -\u003e ByteString -\u003e HandlerM ()",
          "source": "src/Coltrane.html#addHeader",
          "type": "function"
        },
        "index": {
          "description": "Add header to the current ResponseState headers HeaderName defined in Network.HTTP.Types.Header",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "addHeader",
          "normalized": "HeaderName-\u003eByteString-\u003eHandlerM()",
          "package": "coltrane",
          "partial": "Header",
          "signature": "HeaderName-\u003eByteString-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a route to the app's state.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "addroute",
          "package": "coltrane",
          "signature": "Route -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#addroute",
          "type": "function"
        },
        "index": {
          "description": "Add route to the app state",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "addroute",
          "normalized": "Route-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "Route-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addroute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd multiple routes to the app's state.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "addroutes",
          "package": "coltrane",
          "signature": "[Route] -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#addroutes",
          "type": "function"
        },
        "index": {
          "description": "Add multiple routes to the app state",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "addroutes",
          "normalized": "[Route]-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "[Route]-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addroutes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "catchError",
          "package": "coltrane",
          "signature": "forall a.  m a -\u003e (e -\u003e m a) -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "catchError",
          "normalized": "a b c d-\u003e(e-\u003ec d)-\u003ec d",
          "package": "coltrane",
          "partial": "Error",
          "signature": "forall a. m a-\u003e(e-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:catchError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the framework with the given server on the given port and application\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "coltrane",
          "package": "coltrane",
          "signature": "Server -\u003e Port -\u003e ColtraneApp () -\u003e IO ()",
          "source": "src/Coltrane.html#coltrane",
          "type": "function"
        },
        "index": {
          "description": "Run the framework with the given server on the given port and application",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "coltrane",
          "normalized": "Server-\u003ePort-\u003eColtraneApp()-\u003eIO()",
          "package": "coltrane",
          "signature": "Server-\u003ePort-\u003eColtraneApp()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:coltrane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper method for adding a DELETE route.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "delete",
          "package": "coltrane",
          "signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Helper method for adding DELETE route",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "delete",
          "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "Path-\u003eHandler-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets body and content type for File.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "file",
          "package": "coltrane",
          "signature": "ResponseBody -\u003e HandlerM ()",
          "source": "src/Coltrane.html#file",
          "type": "function"
        },
        "index": {
          "description": "Sets body and content type for File",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "file",
          "normalized": "ResponseBody-\u003eHandlerM()",
          "package": "coltrane",
          "signature": "ResponseBody-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper method for adding a GET route.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "get",
          "package": "coltrane",
          "signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#get",
          "type": "function"
        },
        "index": {
          "description": "Helper method for adding GET route",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "get",
          "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "Path-\u003eHandler-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets body and content type for HTML.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "html",
          "package": "coltrane",
          "signature": "ResponseBody -\u003e HandlerM ()",
          "source": "src/Coltrane.html#html",
          "type": "function"
        },
        "index": {
          "description": "Sets body and content type for HTML",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "html",
          "normalized": "ResponseBody-\u003eHandlerM()",
          "package": "coltrane",
          "signature": "ResponseBody-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:html"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a file in as a String.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "htmlFile",
          "package": "coltrane",
          "signature": "FilePath -\u003e IO String",
          "source": "src/Coltrane.html#htmlFile",
          "type": "function"
        },
        "index": {
          "description": "Reads file in as String",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "htmlFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "coltrane",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:htmlFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets body and content type for JSON.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "json",
          "package": "coltrane",
          "signature": "ResponseBody -\u003e HandlerM ()",
          "source": "src/Coltrane.html#json",
          "type": "function"
        },
        "index": {
          "description": "Sets body and content type for JSON",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "json",
          "normalized": "ResponseBody-\u003eHandlerM()",
          "package": "coltrane",
          "signature": "ResponseBody-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:json"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a parameter parsed from the URL. if not found,\n search through the query fields.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "param",
          "package": "coltrane",
          "signature": "String -\u003e HandlerM String",
          "source": "src/Coltrane.html#param",
          "type": "function"
        },
        "index": {
          "description": "Retrieve parameter parsed from the URL if not found search through the query fields",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "param",
          "normalized": "String-\u003eHandlerM String",
          "package": "coltrane",
          "signature": "String-\u003eHandlerM String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper method for adding a POST route.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "post",
          "package": "coltrane",
          "signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#post",
          "type": "function"
        },
        "index": {
          "description": "Helper method for adding POST route",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "post",
          "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "Path-\u003eHandler-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper method for adding a PUT route.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "put",
          "package": "coltrane",
          "signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
          "source": "src/Coltrane.html#put",
          "type": "function"
        },
        "index": {
          "description": "Helper method for adding PUT route",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "put",
          "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
          "package": "coltrane",
          "signature": "Path-\u003eHandler-\u003eColtraneApp()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve the current request object\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "request",
          "package": "coltrane",
          "signature": "HandlerM Request",
          "source": "src/Coltrane.html#request",
          "type": "function"
        },
        "index": {
          "description": "Retrieve the current request object",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "request",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current ResponseState's body, and add the\n corresponding content type header\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "setBody",
          "package": "coltrane",
          "signature": "ContentType -\u003e ResponseBody -\u003e HandlerM ()",
          "source": "src/Coltrane.html#setBody",
          "type": "function"
        },
        "index": {
          "description": "Set the current ResponseState body and add the corresponding content type header",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "setBody",
          "normalized": "ContentType-\u003eResponseBody-\u003eHandlerM()",
          "package": "coltrane",
          "partial": "Body",
          "signature": "ContentType-\u003eResponseBody-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a header and set its value to the input string.\n if the header does not exist, adds a new header.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "setHeader",
          "package": "coltrane",
          "signature": "HeaderName -\u003e ByteString -\u003e HandlerM ()",
          "source": "src/Coltrane.html#setHeader",
          "type": "function"
        },
        "index": {
          "description": "Lookup header and set its value to the input string if the header does not exist adds new header",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "setHeader",
          "normalized": "HeaderName-\u003eByteString-\u003eHandlerM()",
          "package": "coltrane",
          "partial": "Header",
          "signature": "HeaderName-\u003eByteString-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current ResponseState's status\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "setStatus",
          "package": "coltrane",
          "signature": "Status -\u003e HandlerM ()",
          "source": "src/Coltrane.html#setStatus",
          "type": "function"
        },
        "index": {
          "description": "Set the current ResponseState status",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "setStatus",
          "normalized": "Status-\u003eHandlerM()",
          "package": "coltrane",
          "partial": "Status",
          "signature": "Status-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets body and content type for Text.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "text",
          "package": "coltrane",
          "signature": "ResponseBody -\u003e HandlerM ()",
          "source": "src/Coltrane.html#text",
          "type": "function"
        },
        "index": {
          "description": "Sets body and content type for Text",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "text",
          "normalized": "ResponseBody-\u003eHandlerM()",
          "package": "coltrane",
          "signature": "ResponseBody-\u003eHandlerM()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
          "module": "Coltrane",
          "name": "throwError",
          "package": "coltrane",
          "signature": "forall a.  e -\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Is used within monadic computation to begin exception processing",
          "hierarchy": "Coltrane",
          "module": "Coltrane",
          "name": "throwError",
          "normalized": "a b c-\u003ed e",
          "package": "coltrane",
          "partial": "Error",
          "signature": "forall a. e-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:throwError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ColtraneTypes",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ColtraneTypes",
          "package": "coltrane",
          "partial": "Coltrane Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad that holds the application's registered routes.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "ColtraneApp",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ColtraneApp",
          "type": "newtype"
        },
        "index": {
          "description": "monad that holds the application registered routes",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ColtraneApp",
          "package": "coltrane",
          "partial": "Coltrane App",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ColtraneApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the content-type constants for the response headers.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "ContentType",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ContentType",
          "type": "type"
        },
        "index": {
          "description": "Stores the content-type constants for the response headers",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ContentType",
          "package": "coltrane",
          "partial": "Content Type",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ContentType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type alias to make routes intuitive for the user.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "Handler",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#Handler",
          "type": "type"
        },
        "index": {
          "description": "type alias to make routes intuitive for the user",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Handler",
          "package": "coltrane",
          "partial": "Handler",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStores the current parameters, Request, and the\n ResponseState that gets 'built up' in a Handler; the response body, \n headers, and status may be altered. The HandlerM also has \n error handling capabilities. The Handler is the third component of a Route;\n a Method and a Path are associated with a Handler.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "HandlerM",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#HandlerM",
          "type": "newtype"
        },
        "index": {
          "description": "Stores the current parameters Request and the ResponseState that gets built up in Handler the response body headers and status may be altered The HandlerM also has error handling capabilities The Handler is the third component of Route Method and Path are associated with Handler",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "HandlerM",
          "package": "coltrane",
          "partial": "Handler",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:HandlerM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HandlerState contains the parameters, the request object, and\n the response state.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "HandlerState",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#HandlerState",
          "type": "data"
        },
        "index": {
          "description": "The HandlerState contains the parameters the request object and the response state",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "HandlerState",
          "package": "coltrane",
          "partial": "Handler State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:HandlerState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ParamKey",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ParamKey",
          "type": "type"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ParamKey",
          "package": "coltrane",
          "partial": "Param Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ParamKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ParamValue",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ParamValue",
          "type": "type"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ParamValue",
          "package": "coltrane",
          "partial": "Param Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ParamValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKey value pairs of URL parameters.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "Params",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#Params",
          "type": "type"
        },
        "index": {
          "description": "Key value pairs of URL parameters",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Params",
          "package": "coltrane",
          "partial": "Params",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA path is either a String Literal or a Regular Expression.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "Path",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#Path",
          "type": "data"
        },
        "index": {
          "description": "path is either String Literal or Regular Expression",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Path",
          "package": "coltrane",
          "partial": "Path",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ResponseBody is a string.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "ResponseBody",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ResponseBody",
          "type": "type"
        },
        "index": {
          "description": "ResponseBody is string",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ResponseBody",
          "package": "coltrane",
          "partial": "Response Body",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ResponseBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA ResponseState holds a body, headers, and a status. When used\n with MonadState, this type makes it easy to add headers and change\n the response status; WAI does not provide simple mechanisms for\n modifying the headers and status.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "ResponseState",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#ResponseState",
          "type": "data"
        },
        "index": {
          "description": "ResponseState holds body headers and status When used with MonadState this type makes it easy to add headers and change the response status WAI does not provide simple mechanisms for modifying the headers and status",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ResponseState",
          "package": "coltrane",
          "partial": "Response State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ResponseState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea Route is composed of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a method  (uses the StdMethod type from Network.HTTP.Types.Method)\n\u003c/li\u003e\u003cli\u003e a path    (defined below)\n\u003c/li\u003e\u003cli\u003e a handler (defined below)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "ColtraneTypes",
          "name": "Route",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#Route",
          "type": "data"
        },
        "index": {
          "description": "Route is composed of method uses the StdMethod type from Network.HTTP.Types.Method path defined below handler defined below",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Route",
          "package": "coltrane",
          "partial": "Route",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eServer options for running the application.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "Server",
          "package": "coltrane",
          "source": "src/ColtraneTypes.html#Server",
          "type": "data"
        },
        "index": {
          "description": "Server options for running the application",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Server",
          "package": "coltrane",
          "partial": "Server",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Server"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "C",
          "package": "coltrane",
          "signature": "C",
          "source": "src/ColtraneTypes.html#ColtraneApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "C",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "CGI",
          "package": "coltrane",
          "signature": "CGI",
          "source": "src/ColtraneTypes.html#Server",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "CGI",
          "package": "coltrane",
          "partial": "CGI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:CGI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "HM",
          "package": "coltrane",
          "signature": "HM",
          "source": "src/ColtraneTypes.html#HandlerM",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "HM",
          "package": "coltrane",
          "partial": "HM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:HM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "HS",
          "package": "coltrane",
          "signature": "HS",
          "source": "src/ColtraneTypes.html#HandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "HS",
          "package": "coltrane",
          "partial": "HS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:HS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "Literal",
          "package": "coltrane",
          "signature": "Literal String",
          "source": "src/ColtraneTypes.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Literal",
          "package": "coltrane",
          "partial": "Literal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Literal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "RS",
          "package": "coltrane",
          "signature": "RS",
          "source": "src/ColtraneTypes.html#ResponseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "RS",
          "package": "coltrane",
          "partial": "RS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:RS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "RegExp",
          "package": "coltrane",
          "signature": "RegExp Regex",
          "source": "src/ColtraneTypes.html#Path",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "RegExp",
          "package": "coltrane",
          "partial": "Reg Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:RegExp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "Route",
          "package": "coltrane",
          "signature": "Route",
          "source": "src/ColtraneTypes.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Route",
          "package": "coltrane",
          "partial": "Route",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Route"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "Warp",
          "package": "coltrane",
          "signature": "Warp",
          "source": "src/ColtraneTypes.html#Server",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "Warp",
          "package": "coltrane",
          "partial": "Warp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Warp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "body",
          "package": "coltrane",
          "signature": "ResponseBody",
          "source": "src/ColtraneTypes.html#ResponseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "body",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:body"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts [Parse.Param] to Params.\n\u003c/p\u003e",
          "module": "ColtraneTypes",
          "name": "convertBSParams",
          "package": "coltrane",
          "signature": "[Param] -\u003e Params",
          "source": "src/ColtraneTypes.html#convertBSParams",
          "type": "function"
        },
        "index": {
          "description": "Converts Parse.Param to Params",
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "convertBSParams",
          "normalized": "[Param]-\u003eParams",
          "package": "coltrane",
          "partial": "BSParams",
          "signature": "[Param]-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:convertBSParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ctFile",
          "package": "coltrane",
          "signature": "ByteString",
          "source": "src/ColtraneTypes.html#ctFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ctFile",
          "package": "coltrane",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ctHTML",
          "package": "coltrane",
          "signature": "ByteString",
          "source": "src/ColtraneTypes.html#ctHTML",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ctHTML",
          "package": "coltrane",
          "partial": "HTML",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ctJSON",
          "package": "coltrane",
          "signature": "ByteString",
          "source": "src/ColtraneTypes.html#ctJSON",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ctJSON",
          "package": "coltrane",
          "partial": "JSON",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctJSON"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "ctText",
          "package": "coltrane",
          "signature": "ByteString",
          "source": "src/ColtraneTypes.html#ctText",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "ctText",
          "package": "coltrane",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "handler",
          "package": "coltrane",
          "signature": "Handler",
          "source": "src/ColtraneTypes.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "handler",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "headers",
          "package": "coltrane",
          "signature": "[Header]",
          "source": "src/ColtraneTypes.html#ResponseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "headers",
          "normalized": "[Header]",
          "package": "coltrane",
          "signature": "[Header]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:headers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "method",
          "package": "coltrane",
          "signature": "StdMethod",
          "source": "src/ColtraneTypes.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "method",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:method"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "path",
          "package": "coltrane",
          "signature": "Path",
          "source": "src/ColtraneTypes.html#Route",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "path",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "pms",
          "package": "coltrane",
          "signature": "Params",
          "source": "src/ColtraneTypes.html#HandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "pms",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:pms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "req",
          "package": "coltrane",
          "signature": "Request",
          "source": "src/ColtraneTypes.html#HandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "req",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:req"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "resp",
          "package": "coltrane",
          "signature": "ResponseState",
          "source": "src/ColtraneTypes.html#HandlerState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "resp",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:resp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "rsPlus",
          "package": "coltrane",
          "signature": "ResponseState -\u003e ResponseState -\u003e ResponseState",
          "source": "src/ColtraneTypes.html#rsPlus",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "rsPlus",
          "normalized": "ResponseState-\u003eResponseState-\u003eResponseState",
          "package": "coltrane",
          "partial": "Plus",
          "signature": "ResponseState-\u003eResponseState-\u003eResponseState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:rsPlus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "runCA",
          "package": "coltrane",
          "signature": "StateT [Route] IO a",
          "source": "src/ColtraneTypes.html#ColtraneApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "runCA",
          "normalized": "StateT[Route]IO a",
          "package": "coltrane",
          "partial": "CA",
          "signature": "StateT[Route]IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:runCA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "runHM",
          "package": "coltrane",
          "signature": "ErrorT String (StateT HandlerState IO) a",
          "source": "src/ColtraneTypes.html#HandlerM",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "runHM",
          "package": "coltrane",
          "partial": "HM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:runHM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "ColtraneTypes",
          "name": "status",
          "package": "coltrane",
          "signature": "Status",
          "source": "src/ColtraneTypes.html#ResponseState",
          "type": "function"
        },
        "index": {
          "hierarchy": "ColtraneTypes",
          "module": "ColtraneTypes",
          "name": "status",
          "package": "coltrane",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:status"
      }
    }
  ]
]