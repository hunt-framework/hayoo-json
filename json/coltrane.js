[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#",
      "description": {
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "module",
        "fct-source": "src/Coltrane.html",
        "fct-type": "module",
        "title": "Coltrane"
      },
      "index": {
        "description": "",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "Coltrane",
        "normalized": "",
        "package": "coltrane",
        "partial": "Coltrane",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a header to the current ResponseState's headers\n HeaderName defined in Network.HTTP.Types.Header\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "HeaderName -\u003e ByteString -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#addHeader",
        "fct-type": "function",
        "title": "addHeader"
      },
      "index": {
        "description": "Add header to the current ResponseState headers HeaderName defined in Network.HTTP.Types.Header",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "addHeader",
        "normalized": "HeaderName-\u003eByteString-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "Header",
        "signature": "HeaderName-\u003eByteString-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addroute",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a route to the app's state.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Route -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#addroute",
        "fct-type": "function",
        "title": "addroute"
      },
      "index": {
        "description": "Add route to the app state",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "addroute",
        "normalized": "Route-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "Route-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:addroutes",
      "description": {
        "fct-descr": "\u003cp\u003eAdd multiple routes to the app's state.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "[Route] -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#addroutes",
        "fct-type": "function",
        "title": "addroutes"
      },
      "index": {
        "description": "Add multiple routes to the app state",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "addroutes",
        "normalized": "[Route]-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "[Route]-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:catchError",
      "description": {
        "fct-descr": "\u003cp\u003eA handler function to handle previous errors and return to normal execution.\n    A common idiom is:\n\u003c/p\u003e\u003cpre\u003e do { action1; action2; action3 } `catchError` handler\n\u003c/pre\u003e\u003cp\u003ewhere the \u003ccode\u003eaction\u003c/code\u003e functions can call \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e.\n    Note that \u003ccode\u003ehandler\u003c/code\u003e and the do-block must have the same return type.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "forall a.  m a -\u003e (e -\u003e m a) -\u003e m a",
        "fct-type": "function",
        "title": "catchError"
      },
      "index": {
        "description": "handler function to handle previous errors and return to normal execution common idiom is do action1 action2 action3 catchError handler where the action functions can call throwError Note that handler and the do-block must have the same return type",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "catchError",
        "normalized": "a b c d-\u003e(e-\u003ec d)-\u003ec d",
        "package": "coltrane",
        "partial": "Error",
        "signature": "forall a. m a-\u003e(e-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:coltrane",
      "description": {
        "fct-descr": "\u003cp\u003eRun the framework with the given server on the given port and application\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Server -\u003e Port -\u003e ColtraneApp () -\u003e IO ()",
        "fct-source": "src/Coltrane.html#coltrane",
        "fct-type": "function",
        "title": "coltrane"
      },
      "index": {
        "description": "Run the framework with the given server on the given port and application",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "coltrane",
        "normalized": "Server-\u003ePort-\u003eColtraneApp()-\u003eIO()",
        "package": "coltrane",
        "partial": "",
        "signature": "Server-\u003ePort-\u003eColtraneApp()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eHelper method for adding a DELETE route.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Helper method for adding DELETE route",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "delete",
        "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "Path-\u003eHandler-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:file",
      "description": {
        "fct-descr": "\u003cp\u003eSets body and content type for File.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "ResponseBody -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#file",
        "fct-type": "function",
        "title": "file"
      },
      "index": {
        "description": "Sets body and content type for File",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "file",
        "normalized": "ResponseBody-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "",
        "signature": "ResponseBody-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eHelper method for adding a GET route.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Helper method for adding GET route",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "get",
        "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "Path-\u003eHandler-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:html",
      "description": {
        "fct-descr": "\u003cp\u003eSets body and content type for HTML.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "ResponseBody -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#html",
        "fct-type": "function",
        "title": "html"
      },
      "index": {
        "description": "Sets body and content type for HTML",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "html",
        "normalized": "ResponseBody-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "",
        "signature": "ResponseBody-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:htmlFile",
      "description": {
        "fct-descr": "\u003cp\u003eReads a file in as a String.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "FilePath -\u003e IO String",
        "fct-source": "src/Coltrane.html#htmlFile",
        "fct-type": "function",
        "title": "htmlFile"
      },
      "index": {
        "description": "Reads file in as String",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "htmlFile",
        "normalized": "FilePath-\u003eIO String",
        "package": "coltrane",
        "partial": "File",
        "signature": "FilePath-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:json",
      "description": {
        "fct-descr": "\u003cp\u003eSets body and content type for JSON.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "ResponseBody -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#json",
        "fct-type": "function",
        "title": "json"
      },
      "index": {
        "description": "Sets body and content type for JSON",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "json",
        "normalized": "ResponseBody-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "",
        "signature": "ResponseBody-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve a parameter parsed from the URL. if not found,\n search through the query fields.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "String -\u003e HandlerM String",
        "fct-source": "src/Coltrane.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "Retrieve parameter parsed from the URL if not found search through the query fields",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "param",
        "normalized": "String-\u003eHandlerM String",
        "package": "coltrane",
        "partial": "",
        "signature": "String-\u003eHandlerM String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eHelper method for adding a POST route.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#post",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Helper method for adding POST route",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "post",
        "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "Path-\u003eHandler-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003eHelper method for adding a PUT route.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Path -\u003e Handler -\u003e ColtraneApp ()",
        "fct-source": "src/Coltrane.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "Helper method for adding PUT route",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "put",
        "normalized": "Path-\u003eHandler-\u003eColtraneApp()",
        "package": "coltrane",
        "partial": "",
        "signature": "Path-\u003eHandler-\u003eColtraneApp()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:request",
      "description": {
        "fct-descr": "\u003cp\u003eRetrieve the current request object\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "HandlerM Request",
        "fct-source": "src/Coltrane.html#request",
        "fct-type": "function",
        "title": "request"
      },
      "index": {
        "description": "Retrieve the current request object",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "request",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setBody",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current ResponseState's body, and add the\n corresponding content type header\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "ContentType -\u003e ResponseBody -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#setBody",
        "fct-type": "function",
        "title": "setBody"
      },
      "index": {
        "description": "Set the current ResponseState body and add the corresponding content type header",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "setBody",
        "normalized": "ContentType-\u003eResponseBody-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "Body",
        "signature": "ContentType-\u003eResponseBody-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setHeader",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a header and set its value to the input string.\n if the header does not exist, adds a new header.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "HeaderName -\u003e ByteString -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#setHeader",
        "fct-type": "function",
        "title": "setHeader"
      },
      "index": {
        "description": "Lookup header and set its value to the input string if the header does not exist adds new header",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "setHeader",
        "normalized": "HeaderName-\u003eByteString-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "Header",
        "signature": "HeaderName-\u003eByteString-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:setStatus",
      "description": {
        "fct-descr": "\u003cp\u003eSet the current ResponseState's status\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "Status -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#setStatus",
        "fct-type": "function",
        "title": "setStatus"
      },
      "index": {
        "description": "Set the current ResponseState status",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "setStatus",
        "normalized": "Status-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "Status",
        "signature": "Status-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:text",
      "description": {
        "fct-descr": "\u003cp\u003eSets body and content type for Text.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "ResponseBody -\u003e HandlerM ()",
        "fct-source": "src/Coltrane.html#text",
        "fct-type": "function",
        "title": "text"
      },
      "index": {
        "description": "Sets body and content type for Text",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "text",
        "normalized": "ResponseBody-\u003eHandlerM()",
        "package": "coltrane",
        "partial": "",
        "signature": "ResponseBody-\u003eHandlerM()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/Coltrane.html#v:throwError",
      "description": {
        "fct-descr": "\u003cp\u003eIs used within a monadic computation to begin exception processing.\n\u003c/p\u003e",
        "fct-module": "Coltrane",
        "fct-package": "coltrane",
        "fct-signature": "forall a.  e -\u003e m a",
        "fct-type": "function",
        "title": "throwError"
      },
      "index": {
        "description": "Is used within monadic computation to begin exception processing",
        "hierarchy": "Coltrane",
        "module": "Coltrane",
        "name": "throwError",
        "normalized": "a b c-\u003ed e",
        "package": "coltrane",
        "partial": "Error",
        "signature": "forall a. e-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "module",
        "fct-source": "src/ColtraneTypes.html",
        "fct-type": "module",
        "title": "ColtraneTypes"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ColtraneTypes",
        "normalized": "",
        "package": "coltrane",
        "partial": "Coltrane Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ColtraneApp",
      "description": {
        "fct-descr": "\u003cp\u003eA monad that holds the application's registered routes.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "newtype",
        "fct-source": "src/ColtraneTypes.html#ColtraneApp",
        "fct-type": "newtype",
        "title": "ColtraneApp"
      },
      "index": {
        "description": "monad that holds the application registered routes",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ColtraneApp",
        "normalized": "",
        "package": "coltrane",
        "partial": "Coltrane App",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ContentType",
      "description": {
        "fct-descr": "\u003cp\u003eStores the content-type constants for the response headers.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#ContentType",
        "fct-type": "type",
        "title": "ContentType"
      },
      "index": {
        "description": "Stores the content-type constants for the response headers",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ContentType",
        "normalized": "",
        "package": "coltrane",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Handler",
      "description": {
        "fct-descr": "\u003cp\u003eA type alias to make routes intuitive for the user.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#Handler",
        "fct-type": "type",
        "title": "Handler"
      },
      "index": {
        "description": "type alias to make routes intuitive for the user",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Handler",
        "normalized": "",
        "package": "coltrane",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:HandlerM",
      "description": {
        "fct-descr": "\u003cp\u003eStores the current parameters, Request, and the\n ResponseState that gets 'built up' in a Handler; the response body, \n headers, and status may be altered. The HandlerM also has \n error handling capabilities. The Handler is the third component of a Route;\n a Method and a Path are associated with a Handler.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "newtype",
        "fct-source": "src/ColtraneTypes.html#HandlerM",
        "fct-type": "newtype",
        "title": "HandlerM"
      },
      "index": {
        "description": "Stores the current parameters Request and the ResponseState that gets built up in Handler the response body headers and status may be altered The HandlerM also has error handling capabilities The Handler is the third component of Route Method and Path are associated with Handler",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "HandlerM",
        "normalized": "",
        "package": "coltrane",
        "partial": "Handler",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:HandlerState",
      "description": {
        "fct-descr": "\u003cp\u003eThe HandlerState contains the parameters, the request object, and\n the response state.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "data",
        "fct-source": "src/ColtraneTypes.html#HandlerState",
        "fct-type": "data",
        "title": "HandlerState"
      },
      "index": {
        "description": "The HandlerState contains the parameters the request object and the response state",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "HandlerState",
        "normalized": "",
        "package": "coltrane",
        "partial": "Handler State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ParamKey",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#ParamKey",
        "fct-type": "type",
        "title": "ParamKey"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ParamKey",
        "normalized": "",
        "package": "coltrane",
        "partial": "Param Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ParamValue",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#ParamValue",
        "fct-type": "type",
        "title": "ParamValue"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ParamValue",
        "normalized": "",
        "package": "coltrane",
        "partial": "Param Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Params",
      "description": {
        "fct-descr": "\u003cp\u003eKey value pairs of URL parameters.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#Params",
        "fct-type": "type",
        "title": "Params"
      },
      "index": {
        "description": "Key value pairs of URL parameters",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Params",
        "normalized": "",
        "package": "coltrane",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Path",
      "description": {
        "fct-descr": "\u003cp\u003eA path is either a String Literal or a Regular Expression.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "data",
        "fct-source": "src/ColtraneTypes.html#Path",
        "fct-type": "data",
        "title": "Path"
      },
      "index": {
        "description": "path is either String Literal or Regular Expression",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Path",
        "normalized": "",
        "package": "coltrane",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ResponseBody",
      "description": {
        "fct-descr": "\u003cp\u003eA ResponseBody is a string.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "type",
        "fct-source": "src/ColtraneTypes.html#ResponseBody",
        "fct-type": "type",
        "title": "ResponseBody"
      },
      "index": {
        "description": "ResponseBody is string",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ResponseBody",
        "normalized": "",
        "package": "coltrane",
        "partial": "Response Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:ResponseState",
      "description": {
        "fct-descr": "\u003cp\u003eA ResponseState holds a body, headers, and a status. When used\n with MonadState, this type makes it easy to add headers and change\n the response status; WAI does not provide simple mechanisms for\n modifying the headers and status.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "data",
        "fct-source": "src/ColtraneTypes.html#ResponseState",
        "fct-type": "data",
        "title": "ResponseState"
      },
      "index": {
        "description": "ResponseState holds body headers and status When used with MonadState this type makes it easy to add headers and change the response status WAI does not provide simple mechanisms for modifying the headers and status",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ResponseState",
        "normalized": "",
        "package": "coltrane",
        "partial": "Response State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Route",
      "description": {
        "fct-descr": "\u003cp\u003ea Route is composed of:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e a method  (uses the StdMethod type from Network.HTTP.Types.Method)\n\u003c/li\u003e\u003cli\u003e a path    (defined below)\n\u003c/li\u003e\u003cli\u003e a handler (defined below)\n\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "data",
        "fct-source": "src/ColtraneTypes.html#Route",
        "fct-type": "data",
        "title": "Route"
      },
      "index": {
        "description": "Route is composed of method uses the StdMethod type from Network.HTTP.Types.Method path defined below handler defined below",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Route",
        "normalized": "",
        "package": "coltrane",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#t:Server",
      "description": {
        "fct-descr": "\u003cp\u003eServer options for running the application.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "data",
        "fct-source": "src/ColtraneTypes.html#Server",
        "fct-type": "data",
        "title": "Server"
      },
      "index": {
        "description": "Server options for running the application",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Server",
        "normalized": "",
        "package": "coltrane",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:C",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "C",
        "fct-source": "src/ColtraneTypes.html#ColtraneApp",
        "fct-type": "function",
        "title": "C"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "C",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:CGI",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "CGI",
        "fct-source": "src/ColtraneTypes.html#Server",
        "fct-type": "function",
        "title": "CGI"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "CGI",
        "normalized": "",
        "package": "coltrane",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:HM",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "HM",
        "fct-source": "src/ColtraneTypes.html#HandlerM",
        "fct-type": "function",
        "title": "HM"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "HM",
        "normalized": "",
        "package": "coltrane",
        "partial": "HM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:HS",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "HS",
        "fct-source": "src/ColtraneTypes.html#HandlerState",
        "fct-type": "function",
        "title": "HS"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "HS",
        "normalized": "",
        "package": "coltrane",
        "partial": "HS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Literal",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Literal String",
        "fct-source": "src/ColtraneTypes.html#Path",
        "fct-type": "function",
        "title": "Literal"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Literal",
        "normalized": "",
        "package": "coltrane",
        "partial": "Literal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:RS",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "RS",
        "fct-source": "src/ColtraneTypes.html#ResponseState",
        "fct-type": "function",
        "title": "RS"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "RS",
        "normalized": "",
        "package": "coltrane",
        "partial": "RS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:RegExp",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "RegExp Regex",
        "fct-source": "src/ColtraneTypes.html#Path",
        "fct-type": "function",
        "title": "RegExp"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "RegExp",
        "normalized": "",
        "package": "coltrane",
        "partial": "Reg Exp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Route",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Route",
        "fct-source": "src/ColtraneTypes.html#Route",
        "fct-type": "function",
        "title": "Route"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Route",
        "normalized": "",
        "package": "coltrane",
        "partial": "Route",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:Warp",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Warp",
        "fct-source": "src/ColtraneTypes.html#Server",
        "fct-type": "function",
        "title": "Warp"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "Warp",
        "normalized": "",
        "package": "coltrane",
        "partial": "Warp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:body",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ResponseBody",
        "fct-source": "src/ColtraneTypes.html#ResponseState",
        "fct-type": "function",
        "title": "body"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "body",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:convertBSParams",
      "description": {
        "fct-descr": "\u003cp\u003eConverts [Parse.Param] to Params.\n\u003c/p\u003e",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "[Param] -\u003e Params",
        "fct-source": "src/ColtraneTypes.html#convertBSParams",
        "fct-type": "function",
        "title": "convertBSParams"
      },
      "index": {
        "description": "Converts Parse.Param to Params",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "convertBSParams",
        "normalized": "[Param]-\u003eParams",
        "package": "coltrane",
        "partial": "BSParams",
        "signature": "[Param]-\u003eParams"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctFile",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ByteString",
        "fct-source": "src/ColtraneTypes.html#ctFile",
        "fct-type": "function",
        "title": "ctFile"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ctFile",
        "normalized": "",
        "package": "coltrane",
        "partial": "File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctHTML",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ByteString",
        "fct-source": "src/ColtraneTypes.html#ctHTML",
        "fct-type": "function",
        "title": "ctHTML"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ctHTML",
        "normalized": "",
        "package": "coltrane",
        "partial": "HTML",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctJSON",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ByteString",
        "fct-source": "src/ColtraneTypes.html#ctJSON",
        "fct-type": "function",
        "title": "ctJSON"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ctJSON",
        "normalized": "",
        "package": "coltrane",
        "partial": "JSON",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:ctText",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ByteString",
        "fct-source": "src/ColtraneTypes.html#ctText",
        "fct-type": "function",
        "title": "ctText"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "ctText",
        "normalized": "",
        "package": "coltrane",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:handler",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Handler",
        "fct-source": "src/ColtraneTypes.html#Route",
        "fct-type": "function",
        "title": "handler"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "handler",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:headers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "[Header]",
        "fct-source": "src/ColtraneTypes.html#ResponseState",
        "fct-type": "function",
        "title": "headers"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "headers",
        "normalized": "[Header]",
        "package": "coltrane",
        "partial": "",
        "signature": "[Header]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:method",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "StdMethod",
        "fct-source": "src/ColtraneTypes.html#Route",
        "fct-type": "function",
        "title": "method"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "method",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:path",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Path",
        "fct-source": "src/ColtraneTypes.html#Route",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "path",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:pms",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Params",
        "fct-source": "src/ColtraneTypes.html#HandlerState",
        "fct-type": "function",
        "title": "pms"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "pms",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:req",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Request",
        "fct-source": "src/ColtraneTypes.html#HandlerState",
        "fct-type": "function",
        "title": "req"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "req",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:resp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ResponseState",
        "fct-source": "src/ColtraneTypes.html#HandlerState",
        "fct-type": "function",
        "title": "resp"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "resp",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:rsPlus",
      "description": {
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ResponseState -\u003e ResponseState -\u003e ResponseState",
        "fct-source": "src/ColtraneTypes.html#rsPlus",
        "fct-type": "function",
        "title": "rsPlus"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "rsPlus",
        "normalized": "ResponseState-\u003eResponseState-\u003eResponseState",
        "package": "coltrane",
        "partial": "Plus",
        "signature": "ResponseState-\u003eResponseState-\u003eResponseState"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:runCA",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "StateT [Route] IO a",
        "fct-source": "src/ColtraneTypes.html#ColtraneApp",
        "fct-type": "function",
        "title": "runCA"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "runCA",
        "normalized": "StateT[Route]IO a",
        "package": "coltrane",
        "partial": "CA",
        "signature": "StateT[Route]IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:runHM",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "ErrorT String (StateT HandlerState IO) a",
        "fct-source": "src/ColtraneTypes.html#HandlerM",
        "fct-type": "function",
        "title": "runHM"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "runHM",
        "normalized": "",
        "package": "coltrane",
        "partial": "HM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/coltrane/docs/ColtraneTypes.html#v:status",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "ColtraneTypes",
        "fct-package": "coltrane",
        "fct-signature": "Status",
        "fct-source": "src/ColtraneTypes.html#ResponseState",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "",
        "hierarchy": "ColtraneTypes",
        "module": "ColtraneTypes",
        "name": "status",
        "normalized": "",
        "package": "coltrane",
        "partial": "",
        "signature": ""
      }
    }
  }
]