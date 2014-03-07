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
        "word": "iterio-server"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDefines the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e monad which abstracts some of the details of handling\n HTTP requests with IterIO.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Action",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Action.html",
          "type": "module"
        },
        "index": {
          "description": "Defines the Action monad which abstracts some of the details of handling HTTP requests with IterIO",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Action",
          "package": "iterio-server",
          "partial": "Action",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e monad in which requests can be handled. It keeps track of the\n \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e, the form parameters from the request body and an \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e used\n to reply to the client.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Action",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Action.html#Action",
          "type": "type"
        },
        "index": {
          "description": "StateT monad in which requests can be handled It keeps track of the HttpReq the form parameters from the request body and an HttpResp used to reply to the client",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Action",
          "package": "iterio-server",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "ActionState",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "ActionState",
          "package": "iterio-server",
          "partial": "Action State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#t:ActionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA request parameter from a form field in the HTTP body\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Param",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Action.html#Param",
          "type": "data"
        },
        "index": {
          "description": "request parameter from form field in the HTTP body",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Param",
          "package": "iterio-server",
          "partial": "Param",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "ActionState",
          "package": "iterio-server",
          "signature": "ActionState",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "ActionState",
          "package": "iterio-server",
          "partial": "Action State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:ActionState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Param",
          "package": "iterio-server",
          "signature": "Param",
          "source": "src/Data-IterIO-Http-Support-Action.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "Param",
          "package": "iterio-server",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionBody",
          "package": "iterio-server",
          "signature": "b",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionBody",
          "package": "iterio-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:actionBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionParams",
          "package": "iterio-server",
          "signature": "[Param]",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionParams",
          "normalized": "[Param]",
          "package": "iterio-server",
          "partial": "Params",
          "signature": "[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:actionParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionReq",
          "package": "iterio-server",
          "signature": "HttpReq t",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionReq",
          "package": "iterio-server",
          "partial": "Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:actionReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionResp",
          "package": "iterio-server",
          "signature": "HttpResp m",
          "source": "src/Data-IterIO-Http-Support-Action.html#ActionState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "actionResp",
          "package": "iterio-server",
          "partial": "Resp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:actionResp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves the \"_sess\" key-value pair from the cookie.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "destroySession",
          "package": "iterio-server",
          "signature": "Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-Action.html#destroySession",
          "type": "function"
        },
        "index": {
          "description": "Removes the sess key-value pair from the cookie",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "destroySession",
          "normalized": "Action a b c()",
          "package": "iterio-server",
          "partial": "Session",
          "signature": "Action t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:destroySession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the body of the current request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "getBody",
          "package": "iterio-server",
          "signature": "Action t b m b",
          "source": "src/Data-IterIO-Http-Support-Action.html#getBody",
          "type": "function"
        },
        "index": {
          "description": "Returns the body of the current request",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "getBody",
          "package": "iterio-server",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:getBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e for the current request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "getHttpReq",
          "package": "iterio-server",
          "signature": "Action t b m (HttpReq t)",
          "source": "src/Data-IterIO-Http-Support-Action.html#getHttpReq",
          "type": "function"
        },
        "index": {
          "description": "Returns the HttpReq for the current request",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "getHttpReq",
          "package": "iterio-server",
          "partial": "Http Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:getHttpReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003e corresponding to the specified key or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n if one is not present in the request.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "param",
          "package": "iterio-server",
          "signature": "ByteString -\u003e Action t b m (Maybe Param)",
          "source": "src/Data-IterIO-Http-Support-Action.html#param",
          "type": "function"
        },
        "index": {
          "description": "Returns the Param corresponding to the specified key or Nothing if one is not present in the request",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "param",
          "normalized": "ByteString-\u003eAction a b c(Maybe Param)",
          "package": "iterio-server",
          "signature": "ByteString-\u003eAction t b m(Maybe Param)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHeader of a \u003ccode\u003emultipart/form-data\u003c/code\u003e post\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramHeaders",
          "package": "iterio-server",
          "signature": "[(ByteString, ByteString)]",
          "source": "src/Data-IterIO-Http-Support-Action.html#Param",
          "type": "function"
        },
        "index": {
          "description": "Header of multipart form-data post",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramHeaders",
          "normalized": "[(ByteString,ByteString)]",
          "package": "iterio-server",
          "partial": "Headers",
          "signature": "[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:paramHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramKey",
          "package": "iterio-server",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http-Support-Action.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramKey",
          "package": "iterio-server",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:paramKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce get parameter value\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramVal",
          "package": "iterio-server",
          "signature": "ByteString -\u003e Action t b m ByteString",
          "source": "src/Data-IterIO-Http-Support-Action.html#paramVal",
          "type": "function"
        },
        "index": {
          "description": "Force get parameter value",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramVal",
          "normalized": "ByteString-\u003eAction a b c ByteString",
          "package": "iterio-server",
          "partial": "Val",
          "signature": "ByteString-\u003eAction t b m ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:paramVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet (maybe) paramater value and transform it with \u003ccode\u003ef\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramValM",
          "package": "iterio-server",
          "signature": "(ByteString -\u003e a) -\u003e ByteString -\u003e Action t b m (Maybe a)",
          "source": "src/Data-IterIO-Http-Support-Action.html#paramValM",
          "type": "function"
        },
        "index": {
          "description": "Get maybe paramater value and transform it with",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramValM",
          "normalized": "(ByteString-\u003ea)-\u003eByteString-\u003eAction b c d(Maybe a)",
          "package": "iterio-server",
          "partial": "Val",
          "signature": "(ByteString-\u003ea)-\u003eByteString-\u003eAction t b m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:paramValM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramValue",
          "package": "iterio-server",
          "signature": "ByteString",
          "source": "src/Data-IterIO-Http-Support-Action.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "paramValue",
          "package": "iterio-server",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:paramValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "params",
          "package": "iterio-server",
          "signature": "Action t b m [Param]",
          "source": "src/Data-IterIO-Http-Support-Action.html#params",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all Param",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "params",
          "normalized": "Action a b c[Param]",
          "package": "iterio-server",
          "signature": "Action t b m[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the value of an Http Header from the request if it exists otherwise\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "requestHeader",
          "package": "iterio-server",
          "signature": "ByteString -\u003e Action t b m (Maybe ByteString)",
          "source": "src/Data-IterIO-Http-Support-Action.html#requestHeader",
          "type": "function"
        },
        "index": {
          "description": "Returns the value of an Http Header from the request if it exists otherwise Nothing",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "requestHeader",
          "normalized": "ByteString-\u003eAction a b c(Maybe ByteString)",
          "package": "iterio-server",
          "partial": "Header",
          "signature": "ByteString-\u003eAction t b m(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:requestHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the list of \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "setParams",
          "package": "iterio-server",
          "signature": "[Param] -\u003e Action t b m [Param]",
          "source": "src/Data-IterIO-Http-Support-Action.html#setParams",
          "type": "function"
        },
        "index": {
          "description": "Set the list of Param",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "setParams",
          "normalized": "[Param]-\u003eAction a b c[Param]",
          "package": "iterio-server",
          "partial": "Params",
          "signature": "[Param]-\u003eAction t b m[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:setParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets a the value for \"_sess\" in the cookie to the given string.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "setSession",
          "package": "iterio-server",
          "signature": "String -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-Action.html#setSession",
          "type": "function"
        },
        "index": {
          "description": "Sets the value for sess in the cookie to the given string",
          "hierarchy": "Data IterIO Http Support Action",
          "module": "Data.IterIO.Http.Support.Action",
          "name": "setSession",
          "normalized": "String-\u003eAction a b c()",
          "package": "iterio-server",
          "partial": "Session",
          "signature": "String-\u003eAction t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Action.html#v:setSession"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for responding to HTTP requests from within an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "Responses",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Responses.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for responding to HTTP requests from within an Action",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "Responses",
          "package": "iterio-server",
          "partial": "Responses",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedirect \"back\" according to the \"referer\" header.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "redirectBack",
          "package": "iterio-server",
          "signature": "Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-Responses.html#redirectBack",
          "type": "function"
        },
        "index": {
          "description": "Redirect back according to the referer header",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "redirectBack",
          "normalized": "Action a b c()",
          "package": "iterio-server",
          "partial": "Back",
          "signature": "Action t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#v:redirectBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponds to the client with a \u003ccode\u003e303\u003c/code\u003e (Temporary Redirect) response to the given\n path.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "redirectTo",
          "package": "iterio-server",
          "signature": "String-\u003e Action t b m ()",
          "type": "function"
        },
        "index": {
          "description": "Responds to the client with Temporary Redirect response to the given path",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "redirectTo",
          "normalized": "String-\u003eAction a b c()",
          "package": "iterio-server",
          "partial": "To",
          "signature": "String-\u003eAction t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#v:redirectTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponds to the client with a \u003ccode\u003e200\u003c/code\u003e (Success) response with the given body\n and mime-type.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "render",
          "package": "iterio-server",
          "signature": "String-\u003e ByteString-\u003e Action t b m ()",
          "type": "function"
        },
        "index": {
          "description": "Responds to the client with Success response with the given body and mime-type",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "render",
          "normalized": "String-\u003eByteString-\u003eAction a b c()",
          "package": "iterio-server",
          "signature": "String-\u003eByteString-\u003eAction t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#v:render"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResponds to the client with an empty \u003ccode\u003e404\u003c/code\u003e (Not Found) response.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "respond404",
          "package": "iterio-server",
          "signature": "Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-Responses.html#respond404",
          "type": "function"
        },
        "index": {
          "description": "Responds to the client with an empty Not Found response",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "respond404",
          "normalized": "Action a b c()",
          "package": "iterio-server",
          "signature": "Action t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#v:respond404"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces the HTTP status in the current \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e with the given\n \u003ccode\u003e\u003ca\u003eHttpStatus\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "respondStat",
          "package": "iterio-server",
          "signature": "HttpStatus -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-Responses.html#respondStat",
          "type": "function"
        },
        "index": {
          "description": "Replaces the HTTP status in the current HttpResp with the given HttpStatus",
          "hierarchy": "Data IterIO Http Support Responses",
          "module": "Data.IterIO.Http.Support.Responses",
          "name": "respondStat",
          "normalized": "HttpStatus-\u003eAction a b c()",
          "package": "iterio-server",
          "partial": "Stat",
          "signature": "HttpStatus-\u003eAction t b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Responses.html#v:respondStat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eRestController\u003c/a\u003e\u003c/code\u003e class\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "RestController",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-RestController.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the RestController class",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "RestController",
          "package": "iterio-server",
          "partial": "Rest Controller",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class \u003ccode\u003eRestController\u003c/code\u003e allows a set of actions to be routed using\n RESTful HTTP verbs.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "RestController",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-RestController.html#RestController",
          "type": "class"
        },
        "index": {
          "description": "The class RestController allows set of actions to be routed using RESTful HTTP verbs",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "RestController",
          "package": "iterio-server",
          "partial": "Rest Controller",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#t:RestController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePOST /\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restCreate",
          "package": "iterio-server",
          "signature": "a -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restCreate",
          "type": "method"
        },
        "index": {
          "description": "POST",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restCreate",
          "normalized": "a-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Create",
          "signature": "a-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDELETE /:id\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eid\u003c/code\u003e is passed in as the second parameter.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003eDELETE\u003c/code\u003e is not supported by many browsers, this action also responds to\n requests containing the HTTP header \u003ca\u003eX-HTTP-Method-Override: DELETE\u003c/a\u003e\n regardless of the actual HTTP method (\u003ccode\u003eGET\u003c/code\u003e or \u003ccode\u003ePOST\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restDestroy",
          "package": "iterio-server",
          "signature": "a -\u003e ByteString -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restDestroy",
          "type": "method"
        },
        "index": {
          "description": "DELETE id id is passed in as the second parameter Since DELETE is not supported by many browsers this action also responds to requests containing the HTTP header X-HTTP-Method-Override DELETE regardless of the actual HTTP method GET or POST",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restDestroy",
          "normalized": "a-\u003eByteString-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Destroy",
          "signature": "a-\u003eByteString-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restDestroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET /:id/edit\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eid\u003c/code\u003e is passed in as the second parameter.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restEdit",
          "package": "iterio-server",
          "signature": "a -\u003e ByteString -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restEdit",
          "type": "method"
        },
        "index": {
          "description": "GET id edit id is passed in as the second parameter",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restEdit",
          "normalized": "a-\u003eByteString-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Edit",
          "signature": "a-\u003eByteString-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restEdit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET /\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restIndex",
          "package": "iterio-server",
          "signature": "a -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restIndex",
          "type": "method"
        },
        "index": {
          "description": "GET",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restIndex",
          "normalized": "a-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Index",
          "signature": "a-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET /new\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restNew",
          "package": "iterio-server",
          "signature": "a -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restNew",
          "type": "method"
        },
        "index": {
          "description": "GET new",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restNew",
          "normalized": "a-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "New",
          "signature": "a-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGET /:id\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eid\u003c/code\u003e is passed in as the second parameter.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restShow",
          "package": "iterio-server",
          "signature": "a -\u003e ByteString -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restShow",
          "type": "method"
        },
        "index": {
          "description": "GET id id is passed in as the second parameter",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restShow",
          "normalized": "a-\u003eByteString-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Show",
          "signature": "a-\u003eByteString-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePUT /:id\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eid\u003c/code\u003e is passed in as the second parameter.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003ePUT\u003c/code\u003e is not supported by many browsers, this action also responds to\n requests containing the HTTP header \u003ca\u003eX-HTTP-Method-Override: PUT\u003c/a\u003e\n regardless of the actual HTTP method (\u003ccode\u003eGET\u003c/code\u003e or \u003ccode\u003ePOST\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restUpdate",
          "package": "iterio-server",
          "signature": "a -\u003e ByteString -\u003e Action t b m ()",
          "source": "src/Data-IterIO-Http-Support-RestController.html#restUpdate",
          "type": "method"
        },
        "index": {
          "description": "PUT id id is passed in as the second parameter Since PUT is not supported by many browsers this action also responds to requests containing the HTTP header X-HTTP-Method-Override PUT regardless of the actual HTTP method GET or POST",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "restUpdate",
          "normalized": "a-\u003eByteString-\u003eAction b c d()",
          "package": "iterio-server",
          "partial": "Update",
          "signature": "a-\u003eByteString-\u003eAction t b m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:restUpdate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes URLs under the given \u003ccode\u003eString\u003c/code\u003e to actions in a \u003ccode\u003eRestController\u003c/code\u003e. For\n example\n\u003c/p\u003e\u003cpre\u003e\n    routeRestController \u003ca\u003eposts\u003c/a\u003e myRestController\n\u003c/pre\u003e\u003cp\u003ewill map the follwoing URLs:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e GET /posts =\u003e myRestController#restIndex\n\u003c/li\u003e\u003cli\u003e POST /posts =\u003e myRestController#restCreate\n\u003c/li\u003e\u003cli\u003e GET /posts/:id =\u003e myRestController#restShow\n\u003c/li\u003e\u003cli\u003e GET /posts/:id/edit =\u003e myRestController#restEdit\n\u003c/li\u003e\u003cli\u003e GET /posts/:id/new =\u003e myRestController#restNew\n\u003c/li\u003e\u003cli\u003e DELETE /posts/:id =\u003e myRestController#restDestroy\n\u003c/li\u003e\u003cli\u003e PUT /posts/:id =\u003e myRestController#restUpdate\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "routeRestController",
          "package": "iterio-server",
          "signature": "String -\u003e a -\u003e ActionRoute b m t",
          "source": "src/Data-IterIO-Http-Support-RestController.html#routeRestController",
          "type": "function"
        },
        "index": {
          "description": "Routes URLs under the given String to actions in RestController For example routeRestController posts myRestController will map the follwoing URLs GET posts myRestController restIndex POST posts myRestController restCreate GET posts id myRestController restShow GET posts id edit myRestController restEdit GET posts id new myRestController restNew DELETE posts id myRestController restDestroy PUT posts id myRestController restUpdate",
          "hierarchy": "Data IterIO Http Support RestController",
          "module": "Data.IterIO.Http.Support.RestController",
          "name": "routeRestController",
          "normalized": "String-\u003ea-\u003eActionRoute b c d",
          "package": "iterio-server",
          "partial": "Rest Controller",
          "signature": "String-\u003ea-\u003eActionRoute b m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-RestController.html#v:routeRestController"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtility functions for routing.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "Routing",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Routing.html",
          "type": "module"
        },
        "index": {
          "description": "Utility functions for routing",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "Routing",
          "package": "iterio-server",
          "partial": "Routing",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003ccode\u003eActionRoute\u003c/code\u003e either matches an \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e and returns a\n corresponding \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e that responds to it, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n signifying, no approriate \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e was found. \u003ccode\u003eActionRoute\u003c/code\u003es can\n be strung together with, e.g., \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e such that each will be\n searched in turn until an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e responding to the \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e is\n found.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "ActionRoute",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Routing.html#ActionRoute",
          "type": "newtype"
        },
        "index": {
          "description": "An ActionRoute either matches an HttpReq and returns corresponding Action that responds to it or Nothing signifying no approriate Action was found ActionRoute can be strung together with e.g mappend such that each will be searched in turn until an Action responding to the HttpReq is found",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "ActionRoute",
          "package": "iterio-server",
          "partial": "Action Route",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#t:ActionRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "ActionRoute",
          "package": "iterio-server",
          "signature": "ActionRoute (HttpReq s -\u003e m (Maybe (Action s b m ())))",
          "source": "src/Data-IterIO-Http-Support-Routing.html#ActionRoute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "ActionRoute",
          "normalized": "ActionRoute(HttpReq a-\u003eb(Maybe(Action a c b())))",
          "package": "iterio-server",
          "partial": "Action Route",
          "signature": "ActionRoute(HttpReq s-\u003em(Maybe(Action s b m())))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:ActionRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeAction",
          "package": "iterio-server",
          "signature": "Action t b m () -\u003e ActionRoute b m t",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeAction",
          "type": "function"
        },
        "index": {
          "description": "Routes an Action",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeAction",
          "normalized": "Action a b c()-\u003eActionRoute b c a",
          "package": "iterio-server",
          "partial": "Action",
          "signature": "Action t b m()-\u003eActionRoute b m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeFileSys",
          "package": "iterio-server",
          "signature": "(String -\u003e ByteString) -\u003e FilePath -\u003e ActionRoute b IO t",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeFileSys",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeFileSys",
          "normalized": "(String-\u003eByteString)-\u003eFilePath-\u003eActionRoute a IO b",
          "package": "iterio-server",
          "partial": "File Sys",
          "signature": "(String-\u003eByteString)-\u003eFilePath-\u003eActionRoute b IO t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeFileSys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch requests with the given method (\"GET\", \"POST\", etc).\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeMethod",
          "package": "iterio-server",
          "signature": "String -\u003e ActionRoute b m s -\u003e ActionRoute b m s",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeMethod",
          "type": "function"
        },
        "index": {
          "description": "Match requests with the given method GET POST etc",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeMethod",
          "normalized": "String-\u003eActionRoute a b c-\u003eActionRoute a b c",
          "package": "iterio-server",
          "partial": "Method",
          "signature": "String-\u003eActionRoute b m s-\u003eActionRoute b m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes a specific directory name, like \u003ccode\u003erouteMap\u003c/code\u003e for a singleton\n map.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeName",
          "package": "iterio-server",
          "signature": "String -\u003e ActionRoute b m s -\u003e ActionRoute b m s",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeName",
          "type": "function"
        },
        "index": {
          "description": "Routes specific directory name like routeMap for singleton map",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeName",
          "normalized": "String-\u003eActionRoute a b c-\u003eActionRoute a b c",
          "package": "iterio-server",
          "partial": "Name",
          "signature": "String-\u003eActionRoute b m s-\u003eActionRoute b m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRoutes an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e to the given URL pattern. Patterns can include\n directories as well as variable patterns (prefixed with \u003ccode\u003e:\u003c/code\u003e) to be passed\n into the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e as extra \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es. Some examples of URL patters:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e /posts/:id\n\u003c/li\u003e\u003cli\u003e /posts/:id/new\n\u003c/li\u003e\u003cli\u003e /:date/posts/:category/new\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routePattern",
          "package": "iterio-server",
          "signature": "String -\u003e ActionRoute b m t -\u003e ActionRoute b m t",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routePattern",
          "type": "function"
        },
        "index": {
          "description": "Routes an Action to the given URL pattern Patterns can include directories as well as variable patterns prefixed with to be passed into the Action as extra Param Some examples of URL patters posts id posts id new date posts category new",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routePattern",
          "normalized": "String-\u003eActionRoute a b c-\u003eActionRoute a b c",
          "package": "iterio-server",
          "partial": "Pattern",
          "signature": "String-\u003eActionRoute b m t-\u003eActionRoute b m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routePattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch request with path \"/\".\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeTop",
          "package": "iterio-server",
          "signature": "ActionRoute b m s -\u003e ActionRoute b m s",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeTop",
          "type": "function"
        },
        "index": {
          "description": "Match request with path",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeTop",
          "normalized": "ActionRoute a b c-\u003eActionRoute a b c",
          "package": "iterio-server",
          "partial": "Top",
          "signature": "ActionRoute b m s-\u003eActionRoute b m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches any directory name, but additionally pushes it onto the\n front of the \u003ccode\u003e\u003ca\u003ereqPathParams\u003c/a\u003e\u003c/code\u003e list in the \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e structure.  This\n allows the name to serve as a variable argument to the eventual\n handling function.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeVar",
          "package": "iterio-server",
          "signature": "ActionRoute b m s -\u003e ActionRoute b m s",
          "source": "src/Data-IterIO-Http-Support-Routing.html#routeVar",
          "type": "function"
        },
        "index": {
          "description": "Matches any directory name but additionally pushes it onto the front of the reqPathParams list in the HttpReq structure This allows the name to serve as variable argument to the eventual handling function",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "routeVar",
          "normalized": "ActionRoute a b c-\u003eActionRoute a b c",
          "package": "iterio-server",
          "partial": "Var",
          "signature": "ActionRoute b m s-\u003eActionRoute b m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:routeVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e given an \u003ccode\u003e\u003ca\u003eHttpReq\u003c/a\u003e\u003c/code\u003e and body. Returns the \u003ccode\u003e\u003ca\u003eHttpResp\u003c/a\u003e\u003c/code\u003e\n generated by the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runAction",
          "package": "iterio-server",
          "signature": "Action s b m a -\u003e HttpReq s -\u003e b -\u003e m (HttpResp m)",
          "source": "src/Data-IterIO-Http-Support-Routing.html#runAction",
          "type": "function"
        },
        "index": {
          "description": "Runs an Action given an HttpReq and body Returns the HttpResp generated by the Action",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runAction",
          "normalized": "Action a b c d-\u003eHttpReq a-\u003eb-\u003ec(HttpResp c)",
          "package": "iterio-server",
          "partial": "Action",
          "signature": "Action s b m a-\u003eHttpReq s-\u003eb-\u003em(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:runAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an \u003ccode\u003e\u003ca\u003eActionRoute\u003c/a\u003e\u003c/code\u003e. If it satisfies the request, the\n underlying \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is returned, otherwise an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e responding\n with HTTP 404 (Not Found) is returned instead. Can be used at the\n top of a request handler, for example:\n\u003c/p\u003e\u003cpre\u003e httpHandler :: Action b m ()\n httpHandler = runActionRoute $ mconcat [\n     routeTop $ routeAction homeAction\n   , routeMethod \"POST\" $ routeAction handleForm\n   , routeMethod \"GET\" $ routeAction showForm\n   ]\n\u003c/pre\u003e\u003cp\u003eBut also can be nested inside of another action to created nested\n routes, or state dependant routes:\n\u003c/p\u003e\u003cpre\u003e httpHandler :: Action b m ()\n httpHandler = runActionRoute $ mconcat [\n     routeTop $ routeAction homeAction\n   , routeName \"foo\" $ routeAction $ runActionRoute $ mconcat [\n         routeMethod \"GET\" $ runAction showForm\n       , routeMethod \"POST\" $ runAction handleForm\n       ]\n   ]\n\u003c/pre\u003e\u003cp\u003eor\n\u003c/p\u003e\u003cpre\u003e handleForm = do\n   day \u003c- lift $ getDayOfWeek\n   case mod day 2 of\n     0 -\u003e runActionRoute $ routeName \"stts\" $ routeAction doRes\n     1 -\u003e runActionRoute $ routeName \"mwf\" $ routeAction doRes\n\u003c/pre\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runActionRoute",
          "package": "iterio-server",
          "signature": "ActionRoute b m s -\u003e Action s b m ()",
          "source": "src/Data-IterIO-Http-Support-Routing.html#runActionRoute",
          "type": "function"
        },
        "index": {
          "description": "Runs an ActionRoute If it satisfies the request the underlying Action is returned otherwise an Action responding with HTTP Not Found is returned instead Can be used at the top of request handler for example httpHandler Action httpHandler runActionRoute mconcat routeTop routeAction homeAction routeMethod POST routeAction handleForm routeMethod GET routeAction showForm But also can be nested inside of another action to created nested routes or state dependant routes httpHandler Action httpHandler runActionRoute mconcat routeTop routeAction homeAction routeName foo routeAction runActionRoute mconcat routeMethod GET runAction showForm routeMethod POST runAction handleForm or handleForm do day lift getDayOfWeek case mod day of runActionRoute routeName stts routeAction doRes runActionRoute routeName mwf routeAction doRes",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runActionRoute",
          "normalized": "ActionRoute a b c-\u003eAction c a b()",
          "package": "iterio-server",
          "partial": "Action Route",
          "signature": "ActionRoute b m s-\u003eAction s b m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:runActionRoute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003erunAction\u003c/a\u003e\u003c/code\u003e but consumes the rest of the request for the\n body\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runIterAction",
          "package": "iterio-server",
          "signature": "Action s ByteString m a -\u003e HttpReq s -\u003e Iter ByteString m (HttpResp m)",
          "source": "src/Data-IterIO-Http-Support-Routing.html#runIterAction",
          "type": "function"
        },
        "index": {
          "description": "Like runAction but consumes the rest of the request for the body",
          "hierarchy": "Data IterIO Http Support Routing",
          "module": "Data.IterIO.Http.Support.Routing",
          "name": "runIterAction",
          "normalized": "Action a ByteString b c-\u003eHttpReq a-\u003eIter ByteString b(HttpResp b)",
          "package": "iterio-server",
          "partial": "Iter Action",
          "signature": "Action s ByteString m a-\u003eHttpReq s-\u003eIter ByteString m(HttpResp m)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Routing.html#v:runIterAction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "Utils",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support-Utils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support Utils",
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "Utils",
          "package": "iterio-server",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es where the body type is a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e, parse the\n body with 'parseParams\\'' and prepend the result to the \u003ccode\u003eAction'\u003c/code\u003es\n \u003ccode\u003e\u003ca\u003eParam\u003c/a\u003e\u003c/code\u003es\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "parseParams",
          "package": "iterio-server",
          "signature": "Action t ByteString m [Param]",
          "source": "src/Data-IterIO-Http-Support-Utils.html#parseParams",
          "type": "function"
        },
        "index": {
          "description": "For Action where the body type is ByteString parse the body with parseParams and prepend the result to the Action Param",
          "hierarchy": "Data IterIO Http Support Utils",
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "parseParams",
          "normalized": "Action a ByteString b[Param]",
          "package": "iterio-server",
          "partial": "Params",
          "signature": "Action t ByteString m[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Utils.html#v:parseParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse url encoded or form encoded paramters from an HTTP\n body.\n\u003c/p\u003e",
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "parseParams'",
          "package": "iterio-server",
          "signature": "HttpReq a -\u003e ByteString -\u003e m [Param]",
          "source": "src/Data-IterIO-Http-Support-Utils.html#parseParams%27",
          "type": "function"
        },
        "index": {
          "description": "Parse url encoded or form encoded paramters from an HTTP body",
          "hierarchy": "Data IterIO Http Support Utils",
          "module": "Data.IterIO.Http.Support.Utils",
          "name": "parseParams'",
          "normalized": "HttpReq a-\u003eByteString-\u003eb[Param]",
          "package": "iterio-server",
          "partial": "Params'",
          "signature": "HttpReq a-\u003eByteString-\u003em[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support-Utils.html#v:parseParams-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Http.Support",
          "name": "Support",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Http-Support.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data IterIO Http Support",
          "module": "Data.IterIO.Http.Support",
          "name": "Support",
          "package": "iterio-server",
          "partial": "Support",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Http-Support.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric building blocks for creating TCP Servers based on \u003ccode\u003eIterIO\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Server-TCPServer.html",
          "type": "module"
        },
        "index": {
          "description": "Generic building blocks for creating TCP Servers based on IterIO",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "partial": "TCPServer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e holds all the information necessary to run\n bind to a sock and respond to TCP requests from the network.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "data"
        },
        "index": {
          "description": "TCPServer holds all the information necessary to run bind to sock and respond to TCP requests from the network",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "partial": "TCPServer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#t:TCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "signature": "TCPServer",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "TCPServer",
          "package": "iterio-server",
          "partial": "TCPServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:TCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis acceptor creates an \u003ccode\u003e\u003ca\u003eIter\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eOnum\u003c/a\u003e\u003c/code\u003e using \u003ccode\u003e\u003ca\u003ehandleI\u003c/a\u003e\u003c/code\u003e and\n  \u003ccode\u003e\u003ca\u003eenumHandle\u003c/a\u003e\u003c/code\u003e respectively.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "defaultServerAcceptor",
          "package": "iterio-server",
          "signature": "Socket -\u003e m (Iter inp m (), Onum inp m a)",
          "source": "src/Data-IterIO-Server-TCPServer.html#defaultServerAcceptor",
          "type": "function"
        },
        "index": {
          "description": "This acceptor creates an Iter and Onum using handleI and enumHandle respectively",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "defaultServerAcceptor",
          "normalized": "Socket-\u003ea(Iter b a(),Onum b a c)",
          "package": "iterio-server",
          "partial": "Server Acceptor",
          "signature": "Socket-\u003em(Iter inp m(),Onum inp m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:defaultServerAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a \u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e that echoes each line from the client until EOF.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "echoServer",
          "package": "iterio-server",
          "signature": "PortNumber -\u003e TCPServer String IO",
          "source": "src/Data-IterIO-Server-TCPServer.html#echoServer",
          "type": "function"
        },
        "index": {
          "description": "Creates TCPServer that echoes each line from the client until EOF",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "echoServer",
          "normalized": "PortNumber-\u003eTCPServer String IO",
          "package": "iterio-server",
          "partial": "Server",
          "signature": "PortNumber-\u003eTCPServer String IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:echoServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor convenience, a TCPServer in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Monad with null defaults:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Port 0 (next availabel port)\n\u003c/li\u003e\u003cli\u003e Handler set to \u003ccode\u003e\u003ca\u003einumNop\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Acceptor set to \u003ccode\u003e\u003ca\u003edefaultServerAcceptor\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e Request handler set to \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e (noop)\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "minimalTCPServer",
          "package": "iterio-server",
          "signature": "TCPServer inp IO",
          "source": "src/Data-IterIO-Server-TCPServer.html#minimalTCPServer",
          "type": "function"
        },
        "index": {
          "description": "For convenience TCPServer in the IO Monad with null defaults Port next availabel port Handler set to inumNop Acceptor set to defaultServerAcceptor Request handler set to id noop",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "minimalTCPServer",
          "package": "iterio-server",
          "partial": "TCPServer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:minimalTCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns a \u003ccode\u003e\u003ca\u003eTCPServer\u003c/a\u003e\u003c/code\u003e in a loop.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "runTCPServer",
          "package": "iterio-server",
          "signature": "TCPServer inp m -\u003e IO ()",
          "source": "src/Data-IterIO-Server-TCPServer.html#runTCPServer",
          "type": "function"
        },
        "index": {
          "description": "Runs TCPServer in loop",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "runTCPServer",
          "normalized": "TCPServer a b-\u003eIO()",
          "package": "iterio-server",
          "partial": "TCPServer",
          "signature": "TCPServer inp m-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:runTCPServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to transform an accept incomming connection into an iter and onum.\n  Most servers should just use \u003ccode\u003edefaultSocketAcceptor\u003c/code\u003e but this can be used for\n  special cases, e.g. accepting SSL connections with \u003ccode\u003e\u003ca\u003eiterSSL\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverAcceptor",
          "package": "iterio-server",
          "signature": "Socket -\u003e m (Iter inp m (), Onum inp m ())",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "function"
        },
        "index": {
          "description": "function to transform an accept incomming connection into an iter and onum Most servers should just use defaultSocketAcceptor but this can be used for special cases e.g accepting SSL connections with iterSSL",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverAcceptor",
          "normalized": "Socket-\u003ea(Iter b a(),Onum b a())",
          "package": "iterio-server",
          "partial": "Acceptor",
          "signature": "Socket-\u003em(Iter inp m(),Onum inp m())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:serverAcceptor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e implements the actual functionality of the server. The input\n  and output of the \u003ccode\u003e\u003ca\u003eInum\u003c/a\u003e\u003c/code\u003e correspond to the input and output of the socket.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverHandler",
          "package": "iterio-server",
          "signature": "Inum inp inp m ()",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "function"
        },
        "index": {
          "description": "This Inum implements the actual functionality of the server The input and output of the Inum correspond to the input and output of the socket",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverHandler",
          "normalized": "Inum a a b()",
          "package": "iterio-server",
          "partial": "Handler",
          "signature": "Inum inp inp m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:serverHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe TCP port the server will listen for incomming connections on.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverPort",
          "package": "iterio-server",
          "signature": "PortNumber",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "function"
        },
        "index": {
          "description": "The TCP port the server will listen for incomming connections on",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverPort",
          "package": "iterio-server",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:serverPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMust execute the monadic result. Servers operating in the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e Monad can\n  use \u003ccode\u003e\u003ca\u003eid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverResultHandler",
          "package": "iterio-server",
          "signature": "m () -\u003e IO ()",
          "source": "src/Data-IterIO-Server-TCPServer.html#TCPServer",
          "type": "function"
        },
        "index": {
          "description": "Must execute the monadic result Servers operating in the IO Monad can use id",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "serverResultHandler",
          "normalized": "a()-\u003eIO()",
          "package": "iterio-server",
          "partial": "Result Handler",
          "signature": "m()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:serverResultHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a simple HTTP server from an \u003ccode\u003eHTTPRequestHandler\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "simpleHttpServer",
          "package": "iterio-server",
          "signature": "PortNumber -\u003e HttpRequestHandler IO () -\u003e TCPServer ByteString IO",
          "source": "src/Data-IterIO-Server-TCPServer.html#simpleHttpServer",
          "type": "function"
        },
        "index": {
          "description": "Creates simple HTTP server from an HTTPRequestHandler",
          "hierarchy": "Data IterIO Server TCPServer",
          "module": "Data.IterIO.Server.TCPServer",
          "name": "simpleHttpServer",
          "normalized": "PortNumber-\u003eHttpRequestHandler IO()-\u003eTCPServer ByteString IO",
          "package": "iterio-server",
          "partial": "Http Server",
          "signature": "PortNumber-\u003eHttpRequestHandler IO()-\u003eTCPServer ByteString IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/iterio-server/docs/Data-IterIO-Server-TCPServer.html#v:simpleHttpServer"
      }
    }
  ]
]