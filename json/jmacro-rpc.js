[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe jmacro-rpc library provides an implementation of the JSON-RPC 2.0 protocol in Haskell (http:\u003cem/\u003ewww.jsonrpc.org/), using typeclass based induction to automatically wrap arbitrary Haskell functions up as exposed RPCs, and to generate Haskell functions to call those RPCs on a remote server. Facilities are also included to expose RPCs in javascript on generated HTML pages, and to manage page-local (i.e. \u003ca\u003econversation\u003c/a\u003e) state on these pages. This package provides all core functionality and APIs. Additional backend-specific packages are provided for wiring these functions up to existing HTTP server packages.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "module",
        "fct-source": "src/Network-JMacroRPC-Base.html",
        "fct-type": "module",
        "title": "Base"
      },
      "index": {
        "description": "The jmacro-rpc library provides an implementation of the JSON-RPC protocol in Haskell http www.jsonrpc.org using typeclass based induction to automatically wrap arbitrary Haskell functions up as exposed RPCs and to generate Haskell functions to call those RPCs on remote server Facilities are also included to expose RPCs in javascript on generated HTML pages and to manage page-local i.e conversation state on these pages This package provides all core functionality and APIs Additional backend-specific packages are provided for wiring these functions up to existing HTTP server packages",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "Base",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JRequest",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON request is a list of values\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Base.html#JRequest",
        "fct-type": "type",
        "title": "JRequest"
      },
      "index": {
        "description": "JSON request is list of values",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JRequest",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "JRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JResult",
      "description": {
        "fct-descr": "\u003cp\u003eA JSON result is either an error or a value.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Base.html#JResult",
        "fct-type": "type",
        "title": "JResult"
      },
      "index": {
        "description": "JSON result is either an error or value",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JResult",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "JResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JState",
      "description": {
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Base.html#JState",
        "fct-type": "type",
        "title": "JState"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JState",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "JState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JStateAsync",
      "description": {
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Base.html#JStateAsync",
        "fct-type": "type",
        "title": "JStateAsync"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JStateAsync",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "JState Async",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JsonRPC",
      "description": {
        "fct-descr": "\u003cp\u003eA JsonRPC is a named function that takes a handle to some state, and yields a function from request to result in some monad. It is a representation of the server side of an RPC call.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Base.html#JsonRPC",
        "fct-type": "data",
        "title": "JsonRPC"
      },
      "index": {
        "description": "JsonRPC is named function that takes handle to some state and yields function from request to result in some monad It is representation of the server side of an RPC call",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JsonRPC",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Json RPC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:ToJsonRPC",
      "description": {
        "fct-descr": "\u003cp\u003eThis class should not be used directly.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "class",
        "fct-source": "src/Network-JMacroRPC-Base.html#ToJsonRPC",
        "fct-type": "class",
        "title": "ToJsonRPC"
      },
      "index": {
        "description": "This class should not be used directly",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "ToJsonRPC",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "To Json RPC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:ToJsonRPCCall",
      "description": {
        "fct-descr": "\u003cp\u003eThis class should not be used directly.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "class",
        "fct-source": "src/Network-JMacroRPC-Base.html#ToJsonRPCCall",
        "fct-type": "class",
        "title": "ToJsonRPCCall"
      },
      "index": {
        "description": "This class should not be used directly",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "ToJsonRPCCall",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "To Json RPCCall",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:JsonRPC",
      "description": {
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "JsonRPC String (s -\u003e JRequest -\u003e m JResult)",
        "fct-source": "src/Network-JMacroRPC-Base.html#JsonRPC",
        "fct-type": "function",
        "title": "JsonRPC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "JsonRPC",
        "normalized": "JsonRPC String(a-\u003eJRequest-\u003eb JResult)",
        "package": "jmacro-rpc",
        "partial": "Json RPC",
        "signature": "JsonRPC String(s-\u003eJRequest-\u003em JResult)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:asIO",
      "description": {
        "fct-descr": "\u003cp\u003eid with a helpful type.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "IO a -\u003e IO a",
        "fct-source": "src/Network-JMacroRPC-Base.html#asIO",
        "fct-type": "function",
        "title": "asIO"
      },
      "index": {
        "description": "id with helpful type",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "asIO",
        "normalized": "IO a-\u003eIO a",
        "package": "jmacro-rpc",
        "partial": "IO",
        "signature": "IO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:handleRpcs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function for managing local state, and a list of JsonRPCs over that local state, produce a function from Bytestring to Bytestring mapping json-rpc requests to responses.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(Int -\u003e m s) -\u003e [JsonRPC m s] -\u003e ByteString -\u003e m ByteString",
        "fct-source": "src/Network-JMacroRPC-Base.html#handleRpcs",
        "fct-type": "function",
        "title": "handleRpcs"
      },
      "index": {
        "description": "Given function for managing local state and list of JsonRPCs over that local state produce function from Bytestring to Bytestring mapping json-rpc requests to responses",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "handleRpcs",
        "normalized": "(Int-\u003ea b)-\u003e[JsonRPC a b]-\u003eByteString-\u003ea ByteString",
        "package": "jmacro-rpc",
        "partial": "Rpcs",
        "signature": "(Int-\u003em s)-\u003e[JsonRPC m s]-\u003eByteString-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:invokeRPCLib",
      "description": {
        "fct-descr": "\u003cp\u003eJMacro Javascript stub to invoke json-rpc calls from web browsers.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "JStat",
        "fct-source": "src/Network-JMacroRPC-Base.html#invokeRPCLib",
        "fct-type": "function",
        "title": "invokeRPCLib"
      },
      "index": {
        "description": "JMacro Javascript stub to invoke json-rpc calls from web browsers",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "invokeRPCLib",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "RPCLib",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:jsonRPCToDecl",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a json rpc to a javascript declaration of the appropriate function.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "JsonRPC a m -\u003e JStat",
        "fct-source": "src/Network-JMacroRPC-Base.html#jsonRPCToDecl",
        "fct-type": "function",
        "title": "jsonRPCToDecl"
      },
      "index": {
        "description": "Converts json rpc to javascript declaration of the appropriate function",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "jsonRPCToDecl",
        "normalized": "JsonRPC a b-\u003eJStat",
        "package": "jmacro-rpc",
        "partial": "RPCTo Decl",
        "signature": "JsonRPC a m-\u003eJStat"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:mkConversationPageGen",
      "description": {
        "fct-descr": "\u003cp\u003eUsed for creating server backends. Yes, this type is confusing. But unless you are creating a server backend, you can ignore it. Takes a function to generate some time identifier, a function to cull page state, a rpc handler, a function for creating a single page, a function to initialize a page state, and a bunch of rpcs, and creates a pair of handler functions (one for POST and one for GET) such that individual clients first pull a page with an embedded ID, along with client-side rpc functions. Those functions in turn interact with state local to that invocation of a page when they make json-rpc requests to the server. The cull function is in IO so it has access to whatever notion of time it desires, including the opportunity to not run at all. Note that the POST page should be served from the same url as the get page, but with an additional \u003ca\u003e/jrpcs\u003c/a\u003e directory guard.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "IO timestamp -\u003e (IntMap (timestamp, s) -\u003e IO (IntMap (timestamp, s))) -\u003e ((Int -\u003e m s) -\u003e [JsonRPC m s] -\u003e m1 resp) -\u003e (JStat -\u003e m1 resp) -\u003e IO s -\u003e [JsonRPC m s] -\u003e IO (m1 resp, m1 resp)",
        "fct-source": "src/Network-JMacroRPC-Base.html#mkConversationPageGen",
        "fct-type": "function",
        "title": "mkConversationPageGen"
      },
      "index": {
        "description": "Used for creating server backends Yes this type is confusing But unless you are creating server backend you can ignore it Takes function to generate some time identifier function to cull page state rpc handler function for creating single page function to initialize page state and bunch of rpcs and creates pair of handler functions one for POST and one for GET such that individual clients first pull page with an embedded ID along with client-side rpc functions Those functions in turn interact with state local to that invocation of page when they make json-rpc requests to the server The cull function is in IO so it has access to whatever notion of time it desires including the opportunity to not run at all Note that the POST page should be served from the same url as the get page but with an additional jrpcs directory guard",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "mkConversationPageGen",
        "normalized": "IO a-\u003e(IntMap(a,b)-\u003eIO(IntMap(a,b)))-\u003e((Int-\u003ec b)-\u003e[JsonRPC c b]-\u003ec d)-\u003e(JStat-\u003ec d)-\u003eIO b-\u003e[JsonRPC c b]-\u003eIO(c d,c d)",
        "package": "jmacro-rpc",
        "partial": "Conversation Page Gen",
        "signature": "IO timestamp-\u003e(IntMap(timestamp,s)-\u003eIO(IntMap(timestamp,s)))-\u003e((Int-\u003em s)-\u003e[JsonRPC m s]-\u003em resp)-\u003e(JStat-\u003em resp)-\u003eIO s-\u003e[JsonRPC m s]-\u003eIO(m resp,m resp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:mkJsonRPCPair",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a name and a function and yields both the server-side JsonRPC and the client-side stub.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e (s -\u003e a) -\u003e (t, JsonRPC m s)",
        "fct-source": "src/Network-JMacroRPC-Base.html#mkJsonRPCPair",
        "fct-type": "function",
        "title": "mkJsonRPCPair"
      },
      "index": {
        "description": "Takes name and function and yields both the server-side JsonRPC and the client-side stub",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "mkJsonRPCPair",
        "normalized": "String-\u003e(a-\u003eb)-\u003e(c,JsonRPC d a)",
        "package": "jmacro-rpc",
        "partial": "Json RPCPair",
        "signature": "String-\u003e(s-\u003ea)-\u003e(t,JsonRPC m s)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:retErr",
      "description": {
        "fct-descr": "\u003cp\u003eretErr = return . Left\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "a -\u003e m (Either a b)",
        "fct-source": "src/Network-JMacroRPC-Base.html#retErr",
        "fct-type": "function",
        "title": "retErr"
      },
      "index": {
        "description": "retErr return Left",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "retErr",
        "normalized": "a-\u003eb(Either a c)",
        "package": "jmacro-rpc",
        "partial": "Err",
        "signature": "a-\u003em(Either a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonConvRPC",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a compatible function to a JsonRPC making use of state (i.e. a conversation).\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e (s -\u003e a) -\u003e JsonRPC m s",
        "fct-source": "src/Network-JMacroRPC-Base.html#toJsonConvRPC",
        "fct-type": "function",
        "title": "toJsonConvRPC"
      },
      "index": {
        "description": "Takes compatible function to JsonRPC making use of state i.e conversation",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "toJsonConvRPC",
        "normalized": "String-\u003e(a-\u003eb)-\u003eJsonRPC c a",
        "package": "jmacro-rpc",
        "partial": "Json Conv RPC",
        "signature": "String-\u003e(s-\u003ea)-\u003eJsonRPC m s"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPC",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a compatible function to a JsonRPC.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e a -\u003e JsonRPC m ()",
        "fct-source": "src/Network-JMacroRPC-Base.html#toJsonRPC",
        "fct-type": "function",
        "title": "toJsonRPC"
      },
      "index": {
        "description": "Takes compatible function to JsonRPC",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "toJsonRPC",
        "normalized": "String-\u003ea-\u003eJsonRPC b()",
        "package": "jmacro-rpc",
        "partial": "Json RPC",
        "signature": "String-\u003ea-\u003eJsonRPC m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPCCall",
      "description": {
        "fct-descr": "\u003cp\u003eSend a function on Jsonable values to a function of the same signature whose logic is invokable on a remote server. This function operates on the type of its argument. The body can remain undefined.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "a -\u003e b",
        "fct-source": "src/Network-JMacroRPC-Base.html#toJsonRPCCall",
        "fct-type": "function",
        "title": "toJsonRPCCall"
      },
      "index": {
        "description": "Send function on Jsonable values to function of the same signature whose logic is invokable on remote server This function operates on the type of its argument The body can remain undefined",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "toJsonRPCCall",
        "normalized": "a-\u003eb",
        "package": "jmacro-rpc",
        "partial": "Json RPCCall",
        "signature": "a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPCCall_",
      "description": {
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "[Value] -\u003e a -\u003e b",
        "fct-source": "src/Network-JMacroRPC-Base.html#toJsonRPCCall_",
        "fct-type": "method",
        "title": "toJsonRPCCall_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "toJsonRPCCall_",
        "normalized": "[Value]-\u003ea-\u003eb",
        "package": "jmacro-rpc",
        "partial": "Json RPCCall",
        "signature": "[Value]-\u003ea-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPC_",
      "description": {
        "fct-module": "Network.JMacroRPC.Base",
        "fct-package": "jmacro-rpc",
        "fct-signature": "a -\u003e [Value] -\u003e m JResult",
        "fct-source": "src/Network-JMacroRPC-Base.html#toJsonRPC_",
        "fct-type": "method",
        "title": "toJsonRPC_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Base",
        "module": "Network.JMacroRPC.Base",
        "name": "toJsonRPC_",
        "normalized": "a-\u003e[Value]-\u003eb JResult",
        "package": "jmacro-rpc",
        "partial": "Json RPC",
        "signature": "a-\u003e[Value]-\u003em JResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Panels library provides continuation-style compositional web\ndevelopment with no scaling hassle. On the server side, Panels are\nentirely stateless, storing no client-specific state. This also means\nthat requests can be sharded to multiple servers without worrying\nabout replication of large session objects (authentication choices are\nanother issue entirely).\n\u003c/p\u003e\u003cp\u003eCode is written with a set of combinators over \u003ccode\u003e\u003ca\u003ePanel\u003c/a\u003e\u003c/code\u003es,\nwhich package up display and behavior simultaneously. Panels, inspired\nby FRP, can provide \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003es, which are sampleable, \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es, which are\ndiscrete and can trigger updates, and \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es which can be bound to\nSignals (behaving similarly to FRP wormholes). Semantics, by virtue of\nclient-server interaction, are necessarily evented rather than\ncontinuous.\n\u003c/p\u003e\u003cp\u003ePanels, which are built using this library, can then be displayed using one of a number of servers as backends. New backends can be created with the \u003ccode\u003e\u003ca\u003epanelToPageGen\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e testPanel :: (Monad m, Functor m) =\u003e Panel m\n testPanel =    para \"This is an example\"\n           \u003c\u003e plainHTML Blaze.br\n           \u003c\u003e inDiv [\n                   select (\"default\",1::Int) [(\"another\",2)] $ \\ evt selSignal selPanel -\u003e\n                   selPanel \u003c\u003e\n                    (onEvent evt $\n                     withSample selSignal $ \\ selChoice -\u003e\n                     select (show selChoice, selChoice) \n                         [(show $ selChoice + 1, selChoice + 1)] $ \\ _evt selSignal2 selPanel2 -\u003e\n                     button \"click me\" $ \\ buttonEvt buttonPanel -\u003e\n                     onEvent buttonEvt $\n                     withSample selSignal2 $ \\ selChoice2 -\u003e\n                     (selPanel2 \u003c\u003e buttonPanel \u003c\u003e plainHTML Blaze.br\n                      \u003c\u003e (para $ \"you chose: \" ++ show (selChoice, selChoice2))))\n              ]\n\u003c/pre\u003e\u003cp\u003eThe above code displays two dropdown menus and a button. The first dropdown determines the contents of the second. On clicking the button, the text updates with choices from both the first and second dropdowns.\n\u003c/p\u003e\u003cp\u003eSee the source of \u003ccode\u003e\u003ca\u003ecalcPanel\u003c/a\u003e\u003c/code\u003e for an example of mixed client/server updates with more complicated stateful interaction.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "module",
        "fct-source": "src/Network-JMacroRPC-Panels.html",
        "fct-type": "module",
        "title": "Panels"
      },
      "index": {
        "description": "The Panels library provides continuation-style compositional web development with no scaling hassle On the server side Panels are entirely stateless storing no client-specific state This also means that requests can be sharded to multiple servers without worrying about replication of large session objects authentication choices are another issue entirely Code is written with set of combinators over Panel which package up display and behavior simultaneously Panels inspired by FRP can provide Signal which are sampleable Event which are discrete and can trigger updates and Sink which can be bound to Signals behaving similarly to FRP wormholes Semantics by virtue of client-server interaction are necessarily evented rather than continuous Panels which are built using this library can then be displayed using one of number of servers as backends New backends can be created with the panelToPageGen function Example usage testPanel Monad Functor Panel testPanel para This is an example plainHTML Blaze.br inDiv select default Int another evt selSignal selPanel selPanel onEvent evt withSample selSignal selChoice select show selChoice selChoice show selChoice selChoice evt selSignal2 selPanel2 button click me buttonEvt buttonPanel onEvent buttonEvt withSample selSignal2 selChoice2 selPanel2 buttonPanel plainHTML Blaze.br para you chose show selChoice selChoice2 The above code displays two dropdown menus and button The first dropdown determines the contents of the second On clicking the button the text updates with choices from both the first and second dropdowns See the source of calcPanel for an example of mixed client server updates with more complicated stateful interaction",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Panels",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panels",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Event",
      "description": {
        "fct-descr": "\u003cp\u003eConceptually, an Event is something that can trigger an update.\n We can join two events (which gives us \u003ca\u003eor\u003c/a\u003e semantics), and we can\n trigger on an event. That's it. \n In reality, an event is composed of the panelpaths to it's sources.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Event",
        "fct-type": "data",
        "title": "Event"
      },
      "index": {
        "description": "Conceptually an Event is something that can trigger an update We can join two events which gives us or semantics and we can trigger on an event That it In reality an event is composed of the panelpaths to it sources",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Event",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Event",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Hask",
      "description": {
        "fct-descr": "\u003cp\u003eType tag for Sinks and Signals that require server-side interaction.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Hask",
        "fct-type": "data",
        "title": "Hask"
      },
      "index": {
        "description": "Type tag for Sinks and Signals that require server-side interaction",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Hask",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Hask",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:JS",
      "description": {
        "fct-descr": "\u003cp\u003eType tag for Sinks and Signals that can be run in pure JavaScript.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#JS",
        "fct-type": "data",
        "title": "JS"
      },
      "index": {
        "description": "Type tag for Sinks and Signals that can be run in pure JavaScript",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "JS",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "JS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PState",
      "description": {
        "fct-descr": "\u003cp\u003eThe PState Monad Transformer provides access o the PanelState.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PState",
        "fct-type": "type",
        "title": "PState"
      },
      "index": {
        "description": "The PState Monad Transformer provides access the PanelState",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "PState",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "PState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PageSlice",
      "description": {
        "fct-descr": "\u003cp\u003eA PageSlice is a pair of Html and JavaScript. When a Panel is rendered,\n all JavaScript ends up joined together in the head of the page, and all HTML below it. PageSlices are naturally Monoidal, just as Html is.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PageSlice",
        "fct-type": "data",
        "title": "PageSlice"
      },
      "index": {
        "description": "PageSlice is pair of Html and JavaScript When Panel is rendered all JavaScript ends up joined together in the head of the page and all HTML below it PageSlices are naturally Monoidal just as Html is",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "PageSlice",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Page Slice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Panel",
      "description": {
        "fct-descr": "\u003cp\u003eA Panel is the pair of an action to produce a PageSlice and\n an action to produce a list of locations with updated PageSlices.\n The former is used to draw the initial page, and the latter to\n modify it in response to events. Panels are also naturally Monoidal.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Panel",
        "fct-type": "data",
        "title": "Panel"
      },
      "index": {
        "description": "Panel is the pair of an action to produce PageSlice and an action to produce list of locations with updated PageSlices The former is used to draw the initial page and the latter to modify it in response to events Panels are also naturally Monoidal",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Panel",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PanelPath",
      "description": {
        "fct-descr": "\u003cp\u003eUnique label for any given panel in a control structure.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "type",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PanelPath",
        "fct-type": "type",
        "title": "PanelPath"
      },
      "index": {
        "description": "Unique label for any given panel in control structure",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "PanelPath",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panel Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PanelState",
      "description": {
        "fct-descr": "\u003cp\u003eA PanelState contains environment information used to render Panels.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PanelState",
        "fct-type": "data",
        "title": "PanelState"
      },
      "index": {
        "description": "PanelState contains environment information used to render Panels",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "PanelState",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panel State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Signal",
      "description": {
        "fct-descr": "\u003cp\u003eA Signal can contain information drawn from client-side inputs. Signals are tagged as JS, Hask, or parametric. A signal of type JS can be read from purely on the client side, with no round trip. A signal of type Hask forms an applicative functor, so we can build server-side values with complex computed behaviours.\n Note that \u003ccode\u003eSignal Hask\u003c/code\u003e actually bends the applicative functor laws in that \u003ccode\u003efmap id\u003c/code\u003e on a signal that can be calculated directly in JS can send it to a signal that cannot be. This is a flaw, and it will be fixed.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Signal",
        "fct-type": "data",
        "title": "Signal"
      },
      "index": {
        "description": "Signal can contain information drawn from client-side inputs Signals are tagged as JS Hask or parametric signal of type JS can be read from purely on the client side with no round trip signal of type Hask forms an applicative functor so we can build server-side values with complex computed behaviours Note that Signal Hask actually bends the applicative functor laws in that fmap id on signal that can be calculated directly in JS can send it to signal that cannot be This is flaw and it will be fixed",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Signal",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Signal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Sink",
      "description": {
        "fct-descr": "\u003cp\u003eSinks likewise are tagged as JS, Hask, or parametric. A sink of type JS can be written to purely on the client side, with no round trip. A sink of type Hask is a contravariant functor.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "data",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Sink",
        "fct-type": "data",
        "title": "Sink"
      },
      "index": {
        "description": "Sinks likewise are tagged as JS Hask or parametric sink of type JS can be written to purely on the client side with no round trip sink of type Hask is contravariant functor",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Sink",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Sink",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:PS",
      "description": {
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "PS",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PageSlice",
        "fct-type": "function",
        "title": "PS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "PS",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:Panel",
      "description": {
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Panel",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Panel",
        "fct-type": "function",
        "title": "Panel"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "Panel",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:bindEventIO",
      "description": {
        "fct-descr": "\u003cp\u003eExecute an IO action when triggered by an event. This action only occurs when the event fires.\n \u003ccode\u003ebindEventIO e act = onEvent e $ Panel (return mempty) (lift act \u003e\u003e return mempty)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Event -\u003e m () -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#bindEventIO",
        "fct-type": "function",
        "title": "bindEventIO"
      },
      "index": {
        "description": "Execute an IO action when triggered by an event This action only occurs when the event fires bindEventIO act onEvent Panel return mempty lift act return mempty",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "bindEventIO",
        "normalized": "Event-\u003ea()-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "Event IO",
        "signature": "Event-\u003em()-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:bindSigSink",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an event, a signal, and a sink, on each firing of the event, feed the sink the current sampled value of the signal. If the Signal and Sink are both in JS, this can happen entirely on the client side.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Event -\u003e Signal typ1 a -\u003e Sink typ2 m a -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#bindSigSink",
        "fct-type": "function",
        "title": "bindSigSink"
      },
      "index": {
        "description": "Given an event signal and sink on each firing of the event feed the sink the current sampled value of the signal If the Signal and Sink are both in JS this can happen entirely on the client side",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "bindSigSink",
        "normalized": "Event-\u003eSignal a b-\u003eSink a c b-\u003ePanel c",
        "package": "jmacro-rpc",
        "partial": "Sig Sink",
        "signature": "Event-\u003eSignal typ a-\u003eSink typ m a-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:buildInput",
      "description": {
        "fct-descr": "\u003cp\u003eThis is a general purpose function for constructing Panels that provide signals and events, and optionally sinks. It takes a function from an identifier path to an intial value of a signal, optional sinks into the signal, and a panel \u003ca\u003econtrolling\u003c/a\u003e the signal. From this it yields a continuation function from the event and signal associated wih the panel, the optional sinks, and the signal \u003ca\u003econtrol\u003c/a\u003e panel to a new panel to the new panel iself. \n Usage of this function is best understood by viewing the source of inputs built using it.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(PanelPath -\u003e (a, sinks, Panel m))-\u003e (Event -\u003e Signal typ a -\u003e sinks -\u003e Panel m -\u003e Panel m)-\u003e Panel m",
        "fct-type": "function",
        "title": "buildInput"
      },
      "index": {
        "description": "This is general purpose function for constructing Panels that provide signals and events and optionally sinks It takes function from an identifier path to an intial value of signal optional sinks into the signal and panel controlling the signal From this it yields continuation function from the event and signal associated wih the panel the optional sinks and the signal control panel to new panel to the new panel iself Usage of this function is best understood by viewing the source of inputs built using it",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "buildInput",
        "normalized": "(PanelPath-\u003e(a,b,Panel c))-\u003e(Event-\u003eSignal d a-\u003eb-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
        "package": "jmacro-rpc",
        "partial": "Input",
        "signature": "(PanelPath-\u003e(a,sinks,Panel m))-\u003e(Event-\u003eSignal typ a-\u003esinks-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an initial value and a continuation taking an event and the button itself, yields a panel.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e (Event -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "Takes an initial value and continuation taking an event and the button itself yields panel",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "button",
        "normalized": "String-\u003e(Event-\u003ePanel a-\u003ePanel a)-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "String-\u003e(Event-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:calcPanel",
      "description": {
        "fct-descr": "\u003cp\u003eExample panel that displays a calculator.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#calcPanel",
        "fct-type": "function",
        "title": "calcPanel"
      },
      "index": {
        "description": "Example panel that displays calculator",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "calcPanel",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Panel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:contramapJs",
      "description": {
        "fct-descr": "\u003cp\u003eA JavaScript funcion can be contravariantly mapped over a Sink JS\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "JExpr -\u003e Sink JS m b -\u003e Sink JS m a",
        "fct-source": "src/Network-JMacroRPC-Panels.html#contramapJs",
        "fct-type": "function",
        "title": "contramapJs"
      },
      "index": {
        "description": "JavaScript funcion can be contravariantly mapped over Sink JS",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "contramapJs",
        "normalized": "JExpr-\u003eSink JS a b-\u003eSink JS a c",
        "package": "jmacro-rpc",
        "partial": "Js",
        "signature": "JExpr-\u003eSink JS m b-\u003eSink JS m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:descended",
      "description": {
        "fct-descr": "\u003cp\u003eAnd we can get an identifier out before descending into a \u003ca\u003elocal\u003c/a\u003e \n environment whose identifiers don't affect the main supply. Hence if\n a local environment alters its pattern of consumption, identifiers\n in the outer environment will remain stable.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(PanelPath -\u003e PState m a) -\u003e PState m a",
        "fct-source": "src/Network-JMacroRPC-Panels.html#descended",
        "fct-type": "function",
        "title": "descended"
      },
      "index": {
        "description": "And we can get an identifier out before descending into local environment whose identifiers don affect the main supply Hence if local environment alters its pattern of consumption identifiers in the outer environment will remain stable",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "descended",
        "normalized": "(PanelPath-\u003ePState a b)-\u003ePState a b",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "(PanelPath-\u003ePState m a)-\u003ePState m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:drawP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "PState m PageSlice",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Panel",
        "fct-type": "function",
        "title": "drawP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "drawP",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:htmlP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Html",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PageSlice",
        "fct-type": "function",
        "title": "htmlP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "htmlP",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:inDiv",
      "description": {
        "fct-descr": "\u003cp\u003ePut a bunch of panels into a single div element.\n \u003ccode\u003einDiv = onHtml H.div . mconcat\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "[Panel m] -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#inDiv",
        "fct-type": "function",
        "title": "inDiv"
      },
      "index": {
        "description": "Put bunch of panels into single div element inDiv onHtml H.div mconcat",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "inDiv",
        "normalized": "[Panel a]-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "Div",
        "signature": "[Panel m]-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:joinWith",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a function to join Html sections, we can fuse a list of panels into a single pannel by lifting that function.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "([Html] -\u003e Html) -\u003e [Panel m] -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#joinWith",
        "fct-type": "function",
        "title": "joinWith"
      },
      "index": {
        "description": "Given function to join Html sections we can fuse list of panels into single pannel by lifting that function",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "joinWith",
        "normalized": "([Html]-\u003eHtml)-\u003e[Panel a]-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "With",
        "signature": "([Html]-\u003eHtml)-\u003e[Panel m]-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:jsP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "[JStat]",
        "fct-source": "src/Network-JMacroRPC-Panels.html#PageSlice",
        "fct-type": "function",
        "title": "jsP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "jsP",
        "normalized": "[JStat]",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "[JStat]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:mkTable",
      "description": {
        "fct-descr": "\u003cp\u003eAlign a list of panels into a table with rows of the specified width.\n \u003ccode\u003emkTable n xs = onHtml H.table . mconcat . map row $ chunksOf n xs\n     where row ys = onHtml H.tr . mconcat $ map (onHtml H.td) ys\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Int -\u003e [Panel m] -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#mkTable",
        "fct-type": "function",
        "title": "mkTable"
      },
      "index": {
        "description": "Align list of panels into table with rows of the specified width mkTable xs onHtml H.table mconcat map row chunksOf xs where row ys onHtml H.tr mconcat map onHtml H.td ys",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "mkTable",
        "normalized": "Int-\u003e[Panel a]-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "Table",
        "signature": "Int-\u003e[Panel m]-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:newIdent",
      "description": {
        "fct-descr": "\u003cp\u003eWe can get a fresh identifier out of a panel state.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "PState m PanelPath",
        "fct-source": "src/Network-JMacroRPC-Panels.html#newIdent",
        "fct-type": "function",
        "title": "newIdent"
      },
      "index": {
        "description": "We can get fresh identifier out of panel state",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "newIdent",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Ident",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:newVar",
      "description": {
        "fct-descr": "\u003cp\u003eA hidden input Panel that can be used as a mutable store, akin to an IORef or MVar.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "a -\u003e (Event -\u003e Signal typ a -\u003e Sink typ m a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#newVar",
        "fct-type": "function",
        "title": "newVar"
      },
      "index": {
        "description": "hidden input Panel that can be used as mutable store akin to an IORef or MVar",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "newVar",
        "normalized": "a-\u003e(Event-\u003eSignal b a-\u003eSink b c a-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
        "package": "jmacro-rpc",
        "partial": "Var",
        "signature": "a-\u003e(Event-\u003eSignal typ a-\u003eSink typ m a-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:onEvent",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an Event, and a Panel, update the Panel each time the event fires.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Event -\u003e Panel m -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#onEvent",
        "fct-type": "function",
        "title": "onEvent"
      },
      "index": {
        "description": "Given an Event and Panel update the Panel each time the event fires",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "onEvent",
        "normalized": "Event-\u003ePanel a-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "Event",
        "signature": "Event-\u003ePanel m-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:onHtml",
      "description": {
        "fct-descr": "\u003cp\u003eSimilarly, we can map over any Html inside a panel (although the behavior may be odd on panels with internal update semantics).\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(Html -\u003e Html) -\u003e Panel m -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#onHtml",
        "fct-type": "function",
        "title": "onHtml"
      },
      "index": {
        "description": "Similarly we can map over any Html inside panel although the behavior may be odd on panels with internal update semantics",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "onHtml",
        "normalized": "(Html-\u003eHtml)-\u003ePanel a-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "Html",
        "signature": "(Html-\u003eHtml)-\u003ePanel m-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:panelPrelude",
      "description": {
        "fct-descr": "\u003cp\u003eJavaScript code for the reactive runtime system.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "JStat",
        "fct-source": "src/Network-JMacroRPC-Panels.html#panelPrelude",
        "fct-type": "function",
        "title": "panelPrelude"
      },
      "index": {
        "description": "JavaScript code for the reactive runtime system",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "panelPrelude",
        "normalized": "",
        "package": "jmacro-rpc",
        "partial": "Prelude",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:panelToPageGen",
      "description": {
        "fct-descr": "\u003cp\u003eGeneral function used to create backends for different servers and frameworks.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "([JsonRPC m ()] -\u003e m resp)-\u003e (Text -\u003e m resp)-\u003e String-\u003e Panel m-\u003e (m resp, m resp)",
        "fct-type": "function",
        "title": "panelToPageGen"
      },
      "index": {
        "description": "General function used to create backends for different servers and frameworks",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "panelToPageGen",
        "normalized": "([JsonRPC a()]-\u003ea b)-\u003e(Text-\u003ea b)-\u003eString-\u003ePanel a-\u003e(a b,a b)",
        "package": "jmacro-rpc",
        "partial": "To Page Gen",
        "signature": "([JsonRPC m()]-\u003em resp)-\u003e(Text-\u003em resp)-\u003eString-\u003ePanel m-\u003e(m resp,m resp)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:para",
      "description": {
        "fct-descr": "\u003cp\u003ePut some text into a p element. \n \u003ccode\u003epara  = plainHTML . H.p . fromString\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#para",
        "fct-type": "function",
        "title": "para"
      },
      "index": {
        "description": "Put some text into element para plainHTML H.p fromString",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "para",
        "normalized": "String-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "String-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:plainHTML",
      "description": {
        "fct-descr": "\u003cp\u003eWe can lift any Html into a Panel trivially.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Html -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#plainHTML",
        "fct-type": "function",
        "title": "plainHTML"
      },
      "index": {
        "description": "We can lift any Html into Panel trivially",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "plainHTML",
        "normalized": "Html-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "HTML",
        "signature": "Html-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:pureSig",
      "description": {
        "fct-descr": "\u003cp\u003eSince only some Signals are applicative functors, pureSig provides a \u003ccode\u003epure\u003c/code\u003e operation over all Signals.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "a -\u003e Signal typ a",
        "fct-source": "src/Network-JMacroRPC-Panels.html#pureSig",
        "fct-type": "function",
        "title": "pureSig"
      },
      "index": {
        "description": "Since only some Signals are applicative functors pureSig provides pure operation over all Signals",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "pureSig",
        "normalized": "a-\u003eSignal b a",
        "package": "jmacro-rpc",
        "partial": "Sig",
        "signature": "a-\u003eSignal typ a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:sampleIO",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action in the underlying monad and feed the result to a panel. Synchronous.\n Note that this action will occur on every update, even when guarded by an onEvent.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "m a -\u003e (a -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#sampleIO",
        "fct-type": "function",
        "title": "sampleIO"
      },
      "index": {
        "description": "Perform an action in the underlying monad and feed the result to panel Synchronous Note that this action will occur on every update even when guarded by an onEvent",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "sampleIO",
        "normalized": "a b-\u003e(b-\u003ePanel a)-\u003ePanel a",
        "package": "jmacro-rpc",
        "partial": "IO",
        "signature": "m a-\u003e(a-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:sampleSigJs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a Signal JS, produce a JavaScript expression that samples the value of the signal.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Signal JS a -\u003e JExpr",
        "fct-source": "src/Network-JMacroRPC-Panels.html#sampleSigJs",
        "fct-type": "function",
        "title": "sampleSigJs"
      },
      "index": {
        "description": "Given Signal JS produce JavaScript expression that samples the value of the signal",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "sampleSigJs",
        "normalized": "Signal JS a-\u003eJExpr",
        "package": "jmacro-rpc",
        "partial": "Sig Js",
        "signature": "Signal JS a-\u003eJExpr"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:select",
      "description": {
        "fct-descr": "\u003cp\u003eTakes an intial (label, value) pair, a list of pairs of labeled values, and a continuation, building a Panel with a dropdown selector.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(String, a) -\u003e [(String, a)] -\u003e (Event -\u003e Signal typ a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#select",
        "fct-type": "function",
        "title": "select"
      },
      "index": {
        "description": "Takes an intial label value pair list of pairs of labeled values and continuation building Panel with dropdown selector",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "select",
        "normalized": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003eSignal b a-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003eSignal typ a-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:selectInput",
      "description": {
        "fct-descr": "\u003cp\u003ea wrapper around select that immediately samples from the yielded signal. \u003ccode\u003eselectInput defOpt opts k = select defOpt opts $ e sig p -\u003e withSample sig $ i -\u003e k e i p\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "(String, a) -\u003e [(String, a)] -\u003e (Event -\u003e a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#selectInput",
        "fct-type": "function",
        "title": "selectInput"
      },
      "index": {
        "description": "wrapper around select that immediately samples from the yielded signal selectInput defOpt opts select defOpt opts sig withSample sig",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "selectInput",
        "normalized": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003ea-\u003ePanel b-\u003ePanel b)-\u003ePanel b",
        "package": "jmacro-rpc",
        "partial": "Input",
        "signature": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003ea-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:tellSink",
      "description": {
        "fct-descr": "\u003cp\u003eFeed a value to a Sink.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Sink typ m a -\u003e a -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#tellSink",
        "fct-type": "function",
        "title": "tellSink"
      },
      "index": {
        "description": "Feed value to Sink",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "tellSink",
        "normalized": "Sink a b c-\u003ec-\u003ePanel b",
        "package": "jmacro-rpc",
        "partial": "Sink",
        "signature": "Sink typ m a-\u003ea-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:textPane",
      "description": {
        "fct-descr": "\u003cp\u003eA basic text input box. This box provides a Sink as well as a Signal, so it's contents can be controlled from elsewhere in the Panel.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "String -\u003e (Event -\u003e Signal typ String -\u003e Sink typ m String -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#textPane",
        "fct-type": "function",
        "title": "textPane"
      },
      "index": {
        "description": "basic text input box This box provides Sink as well as Signal so it contents can be controlled from elsewhere in the Panel",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "textPane",
        "normalized": "String-\u003e(Event-\u003eSignal a String-\u003eSink a b String-\u003ePanel b-\u003ePanel b)-\u003ePanel b",
        "package": "jmacro-rpc",
        "partial": "Pane",
        "signature": "String-\u003e(Event-\u003eSignal typ String-\u003eSink typ m String-\u003ePanel m-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:updateP",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "PState m [(PanelPath, PageSlice)]",
        "fct-source": "src/Network-JMacroRPC-Panels.html#Panel",
        "fct-type": "function",
        "title": "updateP"
      },
      "index": {
        "description": "",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "updateP",
        "normalized": "PState a[(PanelPath,PageSlice)]",
        "package": "jmacro-rpc",
        "partial": "",
        "signature": "PState m[(PanelPath,PageSlice)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:withSample",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an arbitrary Signal, and a continuation accepting a value of the underlying type of the signal, yield a simple Panel.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Signal typ a -\u003e (a -\u003e Panel m) -\u003e Panel m",
        "fct-source": "src/Network-JMacroRPC-Panels.html#withSample",
        "fct-type": "function",
        "title": "withSample"
      },
      "index": {
        "description": "Given an arbitrary Signal and continuation accepting value of the underlying type of the signal yield simple Panel",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "withSample",
        "normalized": "Signal a b-\u003e(b-\u003ePanel c)-\u003ePanel c",
        "package": "jmacro-rpc",
        "partial": "Sample",
        "signature": "Signal typ a-\u003e(a-\u003ePanel m)-\u003ePanel m"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:zipSinks",
      "description": {
        "fct-descr": "\u003cp\u003eWe can zip sinks up to combine them.\n\u003c/p\u003e",
        "fct-module": "Network.JMacroRPC.Panels",
        "fct-package": "jmacro-rpc",
        "fct-signature": "Sink Hask m a -\u003e Sink Hask m b -\u003e Sink Hask m (a, b)",
        "fct-source": "src/Network-JMacroRPC-Panels.html#zipSinks",
        "fct-type": "function",
        "title": "zipSinks"
      },
      "index": {
        "description": "We can zip sinks up to combine them",
        "hierarchy": "Network JMacroRPC Panels",
        "module": "Network.JMacroRPC.Panels",
        "name": "zipSinks",
        "normalized": "Sink Hask a b-\u003eSink Hask a c-\u003eSink Hask a(b,c)",
        "package": "jmacro-rpc",
        "partial": "Sinks",
        "signature": "Sink Hask m a-\u003eSink Hask m b-\u003eSink Hask m(a,b)"
      }
    }
  }
]