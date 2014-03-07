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
        "word": "jmacro-rpc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe jmacro-rpc library provides an implementation of the JSON-RPC 2.0 protocol in Haskell (http:\u003cem/\u003ewww.jsonrpc.org/), using typeclass based induction to automatically wrap arbitrary Haskell functions up as exposed RPCs, and to generate Haskell functions to call those RPCs on a remote server. Facilities are also included to expose RPCs in javascript on generated HTML pages, and to manage page-local (i.e. \u003ca\u003econversation\u003c/a\u003e) state on these pages. This package provides all core functionality and APIs. Additional backend-specific packages are provided for wiring these functions up to existing HTTP server packages.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "Base",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html",
          "type": "module"
        },
        "index": {
          "description": "The jmacro-rpc library provides an implementation of the JSON-RPC protocol in Haskell http www.jsonrpc.org using typeclass based induction to automatically wrap arbitrary Haskell functions up as exposed RPCs and to generate Haskell functions to call those RPCs on remote server Facilities are also included to expose RPCs in javascript on generated HTML pages and to manage page-local i.e conversation state on these pages This package provides all core functionality and APIs Additional backend-specific packages are provided for wiring these functions up to existing HTTP server packages",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "Base",
          "package": "jmacro-rpc",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON request is a list of values\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "JRequest",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#JRequest",
          "type": "type"
        },
        "index": {
          "description": "JSON request is list of values",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JRequest",
          "package": "jmacro-rpc",
          "partial": "JRequest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JSON result is either an error or a value.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "JResult",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#JResult",
          "type": "type"
        },
        "index": {
          "description": "JSON result is either an error or value",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JResult",
          "package": "jmacro-rpc",
          "partial": "JResult",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Base",
          "name": "JState",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#JState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JState",
          "package": "jmacro-rpc",
          "partial": "JState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Base",
          "name": "JStateAsync",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#JStateAsync",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JStateAsync",
          "package": "jmacro-rpc",
          "partial": "JState Async",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JStateAsync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JsonRPC is a named function that takes a handle to some state, and yields a function from request to result in some monad. It is a representation of the server side of an RPC call.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "JsonRPC",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#JsonRPC",
          "type": "data"
        },
        "index": {
          "description": "JsonRPC is named function that takes handle to some state and yields function from request to result in some monad It is representation of the server side of an RPC call",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JsonRPC",
          "package": "jmacro-rpc",
          "partial": "Json RPC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:JsonRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class should not be used directly.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "ToJsonRPC",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#ToJsonRPC",
          "type": "class"
        },
        "index": {
          "description": "This class should not be used directly",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "ToJsonRPC",
          "package": "jmacro-rpc",
          "partial": "To Json RPC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:ToJsonRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis class should not be used directly.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "ToJsonRPCCall",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Base.html#ToJsonRPCCall",
          "type": "class"
        },
        "index": {
          "description": "This class should not be used directly",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "ToJsonRPCCall",
          "package": "jmacro-rpc",
          "partial": "To Json RPCCall",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#t:ToJsonRPCCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Base",
          "name": "JsonRPC",
          "package": "jmacro-rpc",
          "signature": "JsonRPC String (s -\u003e JRequest -\u003e m JResult)",
          "source": "src/Network-JMacroRPC-Base.html#JsonRPC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "JsonRPC",
          "normalized": "JsonRPC String(a-\u003eJRequest-\u003eb JResult)",
          "package": "jmacro-rpc",
          "partial": "Json RPC",
          "signature": "JsonRPC String(s-\u003eJRequest-\u003em JResult)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:JsonRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eid with a helpful type.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "asIO",
          "package": "jmacro-rpc",
          "signature": "IO a -\u003e IO a",
          "source": "src/Network-JMacroRPC-Base.html#asIO",
          "type": "function"
        },
        "index": {
          "description": "id with helpful type",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "asIO",
          "normalized": "IO a-\u003eIO a",
          "package": "jmacro-rpc",
          "partial": "IO",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:asIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function for managing local state, and a list of JsonRPCs over that local state, produce a function from Bytestring to Bytestring mapping json-rpc requests to responses.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "handleRpcs",
          "package": "jmacro-rpc",
          "signature": "(Int -\u003e m s) -\u003e [JsonRPC m s] -\u003e ByteString -\u003e m ByteString",
          "source": "src/Network-JMacroRPC-Base.html#handleRpcs",
          "type": "function"
        },
        "index": {
          "description": "Given function for managing local state and list of JsonRPCs over that local state produce function from Bytestring to Bytestring mapping json-rpc requests to responses",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "handleRpcs",
          "normalized": "(Int-\u003ea b)-\u003e[JsonRPC a b]-\u003eByteString-\u003ea ByteString",
          "package": "jmacro-rpc",
          "partial": "Rpcs",
          "signature": "(Int-\u003em s)-\u003e[JsonRPC m s]-\u003eByteString-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:handleRpcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJMacro Javascript stub to invoke json-rpc calls from web browsers.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "invokeRPCLib",
          "package": "jmacro-rpc",
          "signature": "JStat",
          "source": "src/Network-JMacroRPC-Base.html#invokeRPCLib",
          "type": "function"
        },
        "index": {
          "description": "JMacro Javascript stub to invoke json-rpc calls from web browsers",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "invokeRPCLib",
          "package": "jmacro-rpc",
          "partial": "RPCLib",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:invokeRPCLib"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a json rpc to a javascript declaration of the appropriate function.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "jsonRPCToDecl",
          "package": "jmacro-rpc",
          "signature": "JsonRPC a m -\u003e JStat",
          "source": "src/Network-JMacroRPC-Base.html#jsonRPCToDecl",
          "type": "function"
        },
        "index": {
          "description": "Converts json rpc to javascript declaration of the appropriate function",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "jsonRPCToDecl",
          "normalized": "JsonRPC a b-\u003eJStat",
          "package": "jmacro-rpc",
          "partial": "RPCTo Decl",
          "signature": "JsonRPC a m-\u003eJStat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:jsonRPCToDecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed for creating server backends. Yes, this type is confusing. But unless you are creating a server backend, you can ignore it. Takes a function to generate some time identifier, a function to cull page state, a rpc handler, a function for creating a single page, a function to initialize a page state, and a bunch of rpcs, and creates a pair of handler functions (one for POST and one for GET) such that individual clients first pull a page with an embedded ID, along with client-side rpc functions. Those functions in turn interact with state local to that invocation of a page when they make json-rpc requests to the server. The cull function is in IO so it has access to whatever notion of time it desires, including the opportunity to not run at all. Note that the POST page should be served from the same url as the get page, but with an additional \u003ca\u003e/jrpcs\u003c/a\u003e directory guard.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "mkConversationPageGen",
          "package": "jmacro-rpc",
          "signature": "IO timestamp -\u003e (IntMap (timestamp, s) -\u003e IO (IntMap (timestamp, s))) -\u003e ((Int -\u003e m s) -\u003e [JsonRPC m s] -\u003e m1 resp) -\u003e (JStat -\u003e m1 resp) -\u003e IO s -\u003e [JsonRPC m s] -\u003e IO (m1 resp, m1 resp)",
          "source": "src/Network-JMacroRPC-Base.html#mkConversationPageGen",
          "type": "function"
        },
        "index": {
          "description": "Used for creating server backends Yes this type is confusing But unless you are creating server backend you can ignore it Takes function to generate some time identifier function to cull page state rpc handler function for creating single page function to initialize page state and bunch of rpcs and creates pair of handler functions one for POST and one for GET such that individual clients first pull page with an embedded ID along with client-side rpc functions Those functions in turn interact with state local to that invocation of page when they make json-rpc requests to the server The cull function is in IO so it has access to whatever notion of time it desires including the opportunity to not run at all Note that the POST page should be served from the same url as the get page but with an additional jrpcs directory guard",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "mkConversationPageGen",
          "normalized": "IO a-\u003e(IntMap(a,b)-\u003eIO(IntMap(a,b)))-\u003e((Int-\u003ec b)-\u003e[JsonRPC c b]-\u003ec d)-\u003e(JStat-\u003ec d)-\u003eIO b-\u003e[JsonRPC c b]-\u003eIO(c d,c d)",
          "package": "jmacro-rpc",
          "partial": "Conversation Page Gen",
          "signature": "IO timestamp-\u003e(IntMap(timestamp,s)-\u003eIO(IntMap(timestamp,s)))-\u003e((Int-\u003em s)-\u003e[JsonRPC m s]-\u003em resp)-\u003e(JStat-\u003em resp)-\u003eIO s-\u003e[JsonRPC m s]-\u003eIO(m resp,m resp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:mkConversationPageGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a name and a function and yields both the server-side JsonRPC and the client-side stub.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "mkJsonRPCPair",
          "package": "jmacro-rpc",
          "signature": "String -\u003e (s -\u003e a) -\u003e (t, JsonRPC m s)",
          "source": "src/Network-JMacroRPC-Base.html#mkJsonRPCPair",
          "type": "function"
        },
        "index": {
          "description": "Takes name and function and yields both the server-side JsonRPC and the client-side stub",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "mkJsonRPCPair",
          "normalized": "String-\u003e(a-\u003eb)-\u003e(c,JsonRPC d a)",
          "package": "jmacro-rpc",
          "partial": "Json RPCPair",
          "signature": "String-\u003e(s-\u003ea)-\u003e(t,JsonRPC m s)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:mkJsonRPCPair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eretErr = return . Left\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "retErr",
          "package": "jmacro-rpc",
          "signature": "a -\u003e m (Either a b)",
          "source": "src/Network-JMacroRPC-Base.html#retErr",
          "type": "function"
        },
        "index": {
          "description": "retErr return Left",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "retErr",
          "normalized": "a-\u003eb(Either a c)",
          "package": "jmacro-rpc",
          "partial": "Err",
          "signature": "a-\u003em(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:retErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a compatible function to a JsonRPC making use of state (i.e. a conversation).\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonConvRPC",
          "package": "jmacro-rpc",
          "signature": "String -\u003e (s -\u003e a) -\u003e JsonRPC m s",
          "source": "src/Network-JMacroRPC-Base.html#toJsonConvRPC",
          "type": "function"
        },
        "index": {
          "description": "Takes compatible function to JsonRPC making use of state i.e conversation",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonConvRPC",
          "normalized": "String-\u003e(a-\u003eb)-\u003eJsonRPC c a",
          "package": "jmacro-rpc",
          "partial": "Json Conv RPC",
          "signature": "String-\u003e(s-\u003ea)-\u003eJsonRPC m s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonConvRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a compatible function to a JsonRPC.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPC",
          "package": "jmacro-rpc",
          "signature": "String -\u003e a -\u003e JsonRPC m ()",
          "source": "src/Network-JMacroRPC-Base.html#toJsonRPC",
          "type": "function"
        },
        "index": {
          "description": "Takes compatible function to JsonRPC",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPC",
          "normalized": "String-\u003ea-\u003eJsonRPC b()",
          "package": "jmacro-rpc",
          "partial": "Json RPC",
          "signature": "String-\u003ea-\u003eJsonRPC m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend a function on Jsonable values to a function of the same signature whose logic is invokable on a remote server. This function operates on the type of its argument. The body can remain undefined.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPCCall",
          "package": "jmacro-rpc",
          "signature": "a -\u003e b",
          "source": "src/Network-JMacroRPC-Base.html#toJsonRPCCall",
          "type": "function"
        },
        "index": {
          "description": "Send function on Jsonable values to function of the same signature whose logic is invokable on remote server This function operates on the type of its argument The body can remain undefined",
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPCCall",
          "normalized": "a-\u003eb",
          "package": "jmacro-rpc",
          "partial": "Json RPCCall",
          "signature": "a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPCCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPCCall_",
          "package": "jmacro-rpc",
          "signature": "[Value] -\u003e a -\u003e b",
          "source": "src/Network-JMacroRPC-Base.html#toJsonRPCCall_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPCCall_",
          "normalized": "[Value]-\u003ea-\u003eb",
          "package": "jmacro-rpc",
          "partial": "Json RPCCall",
          "signature": "[Value]-\u003ea-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPCCall_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPC_",
          "package": "jmacro-rpc",
          "signature": "a -\u003e [Value] -\u003e m JResult",
          "source": "src/Network-JMacroRPC-Base.html#toJsonRPC_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Base",
          "module": "Network.JMacroRPC.Base",
          "name": "toJsonRPC_",
          "normalized": "a-\u003e[Value]-\u003eb JResult",
          "package": "jmacro-rpc",
          "partial": "Json RPC",
          "signature": "a-\u003e[Value]-\u003em JResult",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Base.html#v:toJsonRPC_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe Panels library provides continuation-style compositional web\ndevelopment with no scaling hassle. On the server side, Panels are\nentirely stateless, storing no client-specific state. This also means\nthat requests can be sharded to multiple servers without worrying\nabout replication of large session objects (authentication choices are\nanother issue entirely).\n\u003c/p\u003e\u003cp\u003eCode is written with a set of combinators over \u003ccode\u003e\u003ca\u003ePanel\u003c/a\u003e\u003c/code\u003es,\nwhich package up display and behavior simultaneously. Panels, inspired\nby FRP, can provide \u003ccode\u003e\u003ca\u003eSignal\u003c/a\u003e\u003c/code\u003es, which are sampleable, \u003ccode\u003e\u003ca\u003eEvent\u003c/a\u003e\u003c/code\u003es, which are\ndiscrete and can trigger updates, and \u003ccode\u003e\u003ca\u003eSink\u003c/a\u003e\u003c/code\u003es which can be bound to\nSignals (behaving similarly to FRP wormholes). Semantics, by virtue of\nclient-server interaction, are necessarily evented rather than\ncontinuous.\n\u003c/p\u003e\u003cp\u003ePanels, which are built using this library, can then be displayed using one of a number of servers as backends. New backends can be created with the \u003ccode\u003e\u003ca\u003epanelToPageGen\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e\u003cp\u003eExample usage:\n\u003c/p\u003e\u003cpre\u003e testPanel :: (Monad m, Functor m) =\u003e Panel m\n testPanel =    para \"This is an example\"\n           \u003c\u003e plainHTML Blaze.br\n           \u003c\u003e inDiv [\n                   select (\"default\",1::Int) [(\"another\",2)] $ \\ evt selSignal selPanel -\u003e\n                   selPanel \u003c\u003e\n                    (onEvent evt $\n                     withSample selSignal $ \\ selChoice -\u003e\n                     select (show selChoice, selChoice) \n                         [(show $ selChoice + 1, selChoice + 1)] $ \\ _evt selSignal2 selPanel2 -\u003e\n                     button \"click me\" $ \\ buttonEvt buttonPanel -\u003e\n                     onEvent buttonEvt $\n                     withSample selSignal2 $ \\ selChoice2 -\u003e\n                     (selPanel2 \u003c\u003e buttonPanel \u003c\u003e plainHTML Blaze.br\n                      \u003c\u003e (para $ \"you chose: \" ++ show (selChoice, selChoice2))))\n              ]\n\u003c/pre\u003e\u003cp\u003eThe above code displays two dropdown menus and a button. The first dropdown determines the contents of the second. On clicking the button, the text updates with choices from both the first and second dropdowns.\n\u003c/p\u003e\u003cp\u003eSee the source of \u003ccode\u003e\u003ca\u003ecalcPanel\u003c/a\u003e\u003c/code\u003e for an example of mixed client/server updates with more complicated stateful interaction.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Panels",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html",
          "type": "module"
        },
        "index": {
          "description": "The Panels library provides continuation-style compositional web development with no scaling hassle On the server side Panels are entirely stateless storing no client-specific state This also means that requests can be sharded to multiple servers without worrying about replication of large session objects authentication choices are another issue entirely Code is written with set of combinators over Panel which package up display and behavior simultaneously Panels inspired by FRP can provide Signal which are sampleable Event which are discrete and can trigger updates and Sink which can be bound to Signals behaving similarly to FRP wormholes Semantics by virtue of client-server interaction are necessarily evented rather than continuous Panels which are built using this library can then be displayed using one of number of servers as backends New backends can be created with the panelToPageGen function Example usage testPanel Monad Functor Panel testPanel para This is an example plainHTML Blaze.br inDiv select default Int another evt selSignal selPanel selPanel onEvent evt withSample selSignal selChoice select show selChoice selChoice show selChoice selChoice evt selSignal2 selPanel2 button click me buttonEvt buttonPanel onEvent buttonEvt withSample selSignal2 selChoice2 selPanel2 buttonPanel plainHTML Blaze.br para you chose show selChoice selChoice2 The above code displays two dropdown menus and button The first dropdown determines the contents of the second On clicking the button the text updates with choices from both the first and second dropdowns See the source of calcPanel for an example of mixed client server updates with more complicated stateful interaction",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Panels",
          "package": "jmacro-rpc",
          "partial": "Panels",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConceptually, an Event is something that can trigger an update.\n We can join two events (which gives us \u003ca\u003eor\u003c/a\u003e semantics), and we can\n trigger on an event. That's it. \n In reality, an event is composed of the panelpaths to it's sources.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Event",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#Event",
          "type": "data"
        },
        "index": {
          "description": "Conceptually an Event is something that can trigger an update We can join two events which gives us or semantics and we can trigger on an event That it In reality an event is composed of the panelpaths to it sources",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Event",
          "package": "jmacro-rpc",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType tag for Sinks and Signals that require server-side interaction.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Hask",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#Hask",
          "type": "data"
        },
        "index": {
          "description": "Type tag for Sinks and Signals that require server-side interaction",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Hask",
          "package": "jmacro-rpc",
          "partial": "Hask",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Hask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType tag for Sinks and Signals that can be run in pure JavaScript.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "JS",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#JS",
          "type": "data"
        },
        "index": {
          "description": "Type tag for Sinks and Signals that can be run in pure JavaScript",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "JS",
          "package": "jmacro-rpc",
          "partial": "JS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:JS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe PState Monad Transformer provides access o the PanelState.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "PState",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#PState",
          "type": "type"
        },
        "index": {
          "description": "The PState Monad Transformer provides access the PanelState",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "PState",
          "package": "jmacro-rpc",
          "partial": "PState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PageSlice is a pair of Html and JavaScript. When a Panel is rendered,\n all JavaScript ends up joined together in the head of the page, and all HTML below it. PageSlices are naturally Monoidal, just as Html is.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "PageSlice",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#PageSlice",
          "type": "data"
        },
        "index": {
          "description": "PageSlice is pair of Html and JavaScript When Panel is rendered all JavaScript ends up joined together in the head of the page and all HTML below it PageSlices are naturally Monoidal just as Html is",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "PageSlice",
          "package": "jmacro-rpc",
          "partial": "Page Slice",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PageSlice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Panel is the pair of an action to produce a PageSlice and\n an action to produce a list of locations with updated PageSlices.\n The former is used to draw the initial page, and the latter to\n modify it in response to events. Panels are also naturally Monoidal.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Panel",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#Panel",
          "type": "data"
        },
        "index": {
          "description": "Panel is the pair of an action to produce PageSlice and an action to produce list of locations with updated PageSlices The former is used to draw the initial page and the latter to modify it in response to events Panels are also naturally Monoidal",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Panel",
          "package": "jmacro-rpc",
          "partial": "Panel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Panel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnique label for any given panel in a control structure.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "PanelPath",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#PanelPath",
          "type": "type"
        },
        "index": {
          "description": "Unique label for any given panel in control structure",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "PanelPath",
          "package": "jmacro-rpc",
          "partial": "Panel Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PanelPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA PanelState contains environment information used to render Panels.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "PanelState",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#PanelState",
          "type": "data"
        },
        "index": {
          "description": "PanelState contains environment information used to render Panels",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "PanelState",
          "package": "jmacro-rpc",
          "partial": "Panel State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:PanelState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Signal can contain information drawn from client-side inputs. Signals are tagged as JS, Hask, or parametric. A signal of type JS can be read from purely on the client side, with no round trip. A signal of type Hask forms an applicative functor, so we can build server-side values with complex computed behaviours.\n Note that \u003ccode\u003eSignal Hask\u003c/code\u003e actually bends the applicative functor laws in that \u003ccode\u003efmap id\u003c/code\u003e on a signal that can be calculated directly in JS can send it to a signal that cannot be. This is a flaw, and it will be fixed.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Signal",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#Signal",
          "type": "data"
        },
        "index": {
          "description": "Signal can contain information drawn from client-side inputs Signals are tagged as JS Hask or parametric signal of type JS can be read from purely on the client side with no round trip signal of type Hask forms an applicative functor so we can build server-side values with complex computed behaviours Note that Signal Hask actually bends the applicative functor laws in that fmap id on signal that can be calculated directly in JS can send it to signal that cannot be This is flaw and it will be fixed",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Signal",
          "package": "jmacro-rpc",
          "partial": "Signal",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Signal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSinks likewise are tagged as JS, Hask, or parametric. A sink of type JS can be written to purely on the client side, with no round trip. A sink of type Hask is a contravariant functor.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "Sink",
          "package": "jmacro-rpc",
          "source": "src/Network-JMacroRPC-Panels.html#Sink",
          "type": "data"
        },
        "index": {
          "description": "Sinks likewise are tagged as JS Hask or parametric sink of type JS can be written to purely on the client side with no round trip sink of type Hask is contravariant functor",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Sink",
          "package": "jmacro-rpc",
          "partial": "Sink",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#t:Sink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "PS",
          "package": "jmacro-rpc",
          "signature": "PS",
          "source": "src/Network-JMacroRPC-Panels.html#PageSlice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "PS",
          "package": "jmacro-rpc",
          "partial": "PS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:PS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "Panel",
          "package": "jmacro-rpc",
          "signature": "Panel",
          "source": "src/Network-JMacroRPC-Panels.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "Panel",
          "package": "jmacro-rpc",
          "partial": "Panel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:Panel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute an IO action when triggered by an event. This action only occurs when the event fires.\n \u003ccode\u003ebindEventIO e act = onEvent e $ Panel (return mempty) (lift act \u003e\u003e return mempty)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "bindEventIO",
          "package": "jmacro-rpc",
          "signature": "Event -\u003e m () -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#bindEventIO",
          "type": "function"
        },
        "index": {
          "description": "Execute an IO action when triggered by an event This action only occurs when the event fires bindEventIO act onEvent Panel return mempty lift act return mempty",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "bindEventIO",
          "normalized": "Event-\u003ea()-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "Event IO",
          "signature": "Event-\u003em()-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:bindEventIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an event, a signal, and a sink, on each firing of the event, feed the sink the current sampled value of the signal. If the Signal and Sink are both in JS, this can happen entirely on the client side.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "bindSigSink",
          "package": "jmacro-rpc",
          "signature": "Event -\u003e Signal typ1 a -\u003e Sink typ2 m a -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#bindSigSink",
          "type": "function"
        },
        "index": {
          "description": "Given an event signal and sink on each firing of the event feed the sink the current sampled value of the signal If the Signal and Sink are both in JS this can happen entirely on the client side",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "bindSigSink",
          "normalized": "Event-\u003eSignal a b-\u003eSink a c b-\u003ePanel c",
          "package": "jmacro-rpc",
          "partial": "Sig Sink",
          "signature": "Event-\u003eSignal typ a-\u003eSink typ m a-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:bindSigSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a general purpose function for constructing Panels that provide signals and events, and optionally sinks. It takes a function from an identifier path to an intial value of a signal, optional sinks into the signal, and a panel \u003ca\u003econtrolling\u003c/a\u003e the signal. From this it yields a continuation function from the event and signal associated wih the panel, the optional sinks, and the signal \u003ca\u003econtrol\u003c/a\u003e panel to a new panel to the new panel iself. \n Usage of this function is best understood by viewing the source of inputs built using it.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "buildInput",
          "package": "jmacro-rpc",
          "signature": "(PanelPath -\u003e (a, sinks, Panel m))-\u003e (Event -\u003e Signal typ a -\u003e sinks -\u003e Panel m -\u003e Panel m)-\u003e Panel m",
          "type": "function"
        },
        "index": {
          "description": "This is general purpose function for constructing Panels that provide signals and events and optionally sinks It takes function from an identifier path to an intial value of signal optional sinks into the signal and panel controlling the signal From this it yields continuation function from the event and signal associated wih the panel the optional sinks and the signal control panel to new panel to the new panel iself Usage of this function is best understood by viewing the source of inputs built using it",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "buildInput",
          "normalized": "(PanelPath-\u003e(a,b,Panel c))-\u003e(Event-\u003eSignal d a-\u003eb-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
          "package": "jmacro-rpc",
          "partial": "Input",
          "signature": "(PanelPath-\u003e(a,sinks,Panel m))-\u003e(Event-\u003eSignal typ a-\u003esinks-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:buildInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an initial value and a continuation taking an event and the button itself, yields a panel.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "button",
          "package": "jmacro-rpc",
          "signature": "String -\u003e (Event -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#button",
          "type": "function"
        },
        "index": {
          "description": "Takes an initial value and continuation taking an event and the button itself yields panel",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "button",
          "normalized": "String-\u003e(Event-\u003ePanel a-\u003ePanel a)-\u003ePanel a",
          "package": "jmacro-rpc",
          "signature": "String-\u003e(Event-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExample panel that displays a calculator.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "calcPanel",
          "package": "jmacro-rpc",
          "signature": "Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#calcPanel",
          "type": "function"
        },
        "index": {
          "description": "Example panel that displays calculator",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "calcPanel",
          "package": "jmacro-rpc",
          "partial": "Panel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:calcPanel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA JavaScript funcion can be contravariantly mapped over a Sink JS\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "contramapJs",
          "package": "jmacro-rpc",
          "signature": "JExpr -\u003e Sink JS m b -\u003e Sink JS m a",
          "source": "src/Network-JMacroRPC-Panels.html#contramapJs",
          "type": "function"
        },
        "index": {
          "description": "JavaScript funcion can be contravariantly mapped over Sink JS",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "contramapJs",
          "normalized": "JExpr-\u003eSink JS a b-\u003eSink JS a c",
          "package": "jmacro-rpc",
          "partial": "Js",
          "signature": "JExpr-\u003eSink JS m b-\u003eSink JS m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:contramapJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnd we can get an identifier out before descending into a \u003ca\u003elocal\u003c/a\u003e \n environment whose identifiers don't affect the main supply. Hence if\n a local environment alters its pattern of consumption, identifiers\n in the outer environment will remain stable.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "descended",
          "package": "jmacro-rpc",
          "signature": "(PanelPath -\u003e PState m a) -\u003e PState m a",
          "source": "src/Network-JMacroRPC-Panels.html#descended",
          "type": "function"
        },
        "index": {
          "description": "And we can get an identifier out before descending into local environment whose identifiers don affect the main supply Hence if local environment alters its pattern of consumption identifiers in the outer environment will remain stable",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "descended",
          "normalized": "(PanelPath-\u003ePState a b)-\u003ePState a b",
          "package": "jmacro-rpc",
          "signature": "(PanelPath-\u003ePState m a)-\u003ePState m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:descended"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "drawP",
          "package": "jmacro-rpc",
          "signature": "PState m PageSlice",
          "source": "src/Network-JMacroRPC-Panels.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "drawP",
          "package": "jmacro-rpc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:drawP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "htmlP",
          "package": "jmacro-rpc",
          "signature": "Html",
          "source": "src/Network-JMacroRPC-Panels.html#PageSlice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "htmlP",
          "package": "jmacro-rpc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:htmlP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a bunch of panels into a single div element.\n \u003ccode\u003einDiv = onHtml H.div . mconcat\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "inDiv",
          "package": "jmacro-rpc",
          "signature": "[Panel m] -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#inDiv",
          "type": "function"
        },
        "index": {
          "description": "Put bunch of panels into single div element inDiv onHtml H.div mconcat",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "inDiv",
          "normalized": "[Panel a]-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "Div",
          "signature": "[Panel m]-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:inDiv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a function to join Html sections, we can fuse a list of panels into a single pannel by lifting that function.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "joinWith",
          "package": "jmacro-rpc",
          "signature": "([Html] -\u003e Html) -\u003e [Panel m] -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#joinWith",
          "type": "function"
        },
        "index": {
          "description": "Given function to join Html sections we can fuse list of panels into single pannel by lifting that function",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "joinWith",
          "normalized": "([Html]-\u003eHtml)-\u003e[Panel a]-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "With",
          "signature": "([Html]-\u003eHtml)-\u003e[Panel m]-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:joinWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "jsP",
          "package": "jmacro-rpc",
          "signature": "[JStat]",
          "source": "src/Network-JMacroRPC-Panels.html#PageSlice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "jsP",
          "normalized": "[JStat]",
          "package": "jmacro-rpc",
          "signature": "[JStat]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:jsP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign a list of panels into a table with rows of the specified width.\n \u003ccode\u003emkTable n xs = onHtml H.table . mconcat . map row $ chunksOf n xs\n     where row ys = onHtml H.tr . mconcat $ map (onHtml H.td) ys\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "mkTable",
          "package": "jmacro-rpc",
          "signature": "Int -\u003e [Panel m] -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#mkTable",
          "type": "function"
        },
        "index": {
          "description": "Align list of panels into table with rows of the specified width mkTable xs onHtml H.table mconcat map row chunksOf xs where row ys onHtml H.tr mconcat map onHtml H.td ys",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "mkTable",
          "normalized": "Int-\u003e[Panel a]-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "Table",
          "signature": "Int-\u003e[Panel m]-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:mkTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can get a fresh identifier out of a panel state.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "newIdent",
          "package": "jmacro-rpc",
          "signature": "PState m PanelPath",
          "source": "src/Network-JMacroRPC-Panels.html#newIdent",
          "type": "function"
        },
        "index": {
          "description": "We can get fresh identifier out of panel state",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "newIdent",
          "package": "jmacro-rpc",
          "partial": "Ident",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:newIdent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hidden input Panel that can be used as a mutable store, akin to an IORef or MVar.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "newVar",
          "package": "jmacro-rpc",
          "signature": "a -\u003e (Event -\u003e Signal typ a -\u003e Sink typ m a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#newVar",
          "type": "function"
        },
        "index": {
          "description": "hidden input Panel that can be used as mutable store akin to an IORef or MVar",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "newVar",
          "normalized": "a-\u003e(Event-\u003eSignal b a-\u003eSink b c a-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
          "package": "jmacro-rpc",
          "partial": "Var",
          "signature": "a-\u003e(Event-\u003eSignal typ a-\u003eSink typ m a-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:newVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an Event, and a Panel, update the Panel each time the event fires.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "onEvent",
          "package": "jmacro-rpc",
          "signature": "Event -\u003e Panel m -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#onEvent",
          "type": "function"
        },
        "index": {
          "description": "Given an Event and Panel update the Panel each time the event fires",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "onEvent",
          "normalized": "Event-\u003ePanel a-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "Event",
          "signature": "Event-\u003ePanel m-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:onEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilarly, we can map over any Html inside a panel (although the behavior may be odd on panels with internal update semantics).\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "onHtml",
          "package": "jmacro-rpc",
          "signature": "(Html -\u003e Html) -\u003e Panel m -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#onHtml",
          "type": "function"
        },
        "index": {
          "description": "Similarly we can map over any Html inside panel although the behavior may be odd on panels with internal update semantics",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "onHtml",
          "normalized": "(Html-\u003eHtml)-\u003ePanel a-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "Html",
          "signature": "(Html-\u003eHtml)-\u003ePanel m-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:onHtml"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJavaScript code for the reactive runtime system.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "panelPrelude",
          "package": "jmacro-rpc",
          "signature": "JStat",
          "source": "src/Network-JMacroRPC-Panels.html#panelPrelude",
          "type": "function"
        },
        "index": {
          "description": "JavaScript code for the reactive runtime system",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "panelPrelude",
          "package": "jmacro-rpc",
          "partial": "Prelude",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:panelPrelude"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral function used to create backends for different servers and frameworks.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "panelToPageGen",
          "package": "jmacro-rpc",
          "signature": "([JsonRPC m ()] -\u003e m resp)-\u003e (Text -\u003e m resp)-\u003e String-\u003e Panel m-\u003e (m resp, m resp)",
          "type": "function"
        },
        "index": {
          "description": "General function used to create backends for different servers and frameworks",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "panelToPageGen",
          "normalized": "([JsonRPC a()]-\u003ea b)-\u003e(Text-\u003ea b)-\u003eString-\u003ePanel a-\u003e(a b,a b)",
          "package": "jmacro-rpc",
          "partial": "To Page Gen",
          "signature": "([JsonRPC m()]-\u003em resp)-\u003e(Text-\u003em resp)-\u003eString-\u003ePanel m-\u003e(m resp,m resp)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:panelToPageGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut some text into a p element. \n \u003ccode\u003epara  = plainHTML . H.p . fromString\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "para",
          "package": "jmacro-rpc",
          "signature": "String -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#para",
          "type": "function"
        },
        "index": {
          "description": "Put some text into element para plainHTML H.p fromString",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "para",
          "normalized": "String-\u003ePanel a",
          "package": "jmacro-rpc",
          "signature": "String-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:para"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can lift any Html into a Panel trivially.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "plainHTML",
          "package": "jmacro-rpc",
          "signature": "Html -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#plainHTML",
          "type": "function"
        },
        "index": {
          "description": "We can lift any Html into Panel trivially",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "plainHTML",
          "normalized": "Html-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "HTML",
          "signature": "Html-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:plainHTML"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSince only some Signals are applicative functors, pureSig provides a \u003ccode\u003epure\u003c/code\u003e operation over all Signals.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "pureSig",
          "package": "jmacro-rpc",
          "signature": "a -\u003e Signal typ a",
          "source": "src/Network-JMacroRPC-Panels.html#pureSig",
          "type": "function"
        },
        "index": {
          "description": "Since only some Signals are applicative functors pureSig provides pure operation over all Signals",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "pureSig",
          "normalized": "a-\u003eSignal b a",
          "package": "jmacro-rpc",
          "partial": "Sig",
          "signature": "a-\u003eSignal typ a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:pureSig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action in the underlying monad and feed the result to a panel. Synchronous.\n Note that this action will occur on every update, even when guarded by an onEvent.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "sampleIO",
          "package": "jmacro-rpc",
          "signature": "m a -\u003e (a -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#sampleIO",
          "type": "function"
        },
        "index": {
          "description": "Perform an action in the underlying monad and feed the result to panel Synchronous Note that this action will occur on every update even when guarded by an onEvent",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "sampleIO",
          "normalized": "a b-\u003e(b-\u003ePanel a)-\u003ePanel a",
          "package": "jmacro-rpc",
          "partial": "IO",
          "signature": "m a-\u003e(a-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:sampleIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a Signal JS, produce a JavaScript expression that samples the value of the signal.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "sampleSigJs",
          "package": "jmacro-rpc",
          "signature": "Signal JS a -\u003e JExpr",
          "source": "src/Network-JMacroRPC-Panels.html#sampleSigJs",
          "type": "function"
        },
        "index": {
          "description": "Given Signal JS produce JavaScript expression that samples the value of the signal",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "sampleSigJs",
          "normalized": "Signal JS a-\u003eJExpr",
          "package": "jmacro-rpc",
          "partial": "Sig Js",
          "signature": "Signal JS a-\u003eJExpr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:sampleSigJs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes an intial (label, value) pair, a list of pairs of labeled values, and a continuation, building a Panel with a dropdown selector.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "select",
          "package": "jmacro-rpc",
          "signature": "(String, a) -\u003e [(String, a)] -\u003e (Event -\u003e Signal typ a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#select",
          "type": "function"
        },
        "index": {
          "description": "Takes an intial label value pair list of pairs of labeled values and continuation building Panel with dropdown selector",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "select",
          "normalized": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003eSignal b a-\u003ePanel c-\u003ePanel c)-\u003ePanel c",
          "package": "jmacro-rpc",
          "signature": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003eSignal typ a-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea wrapper around select that immediately samples from the yielded signal. \u003ccode\u003eselectInput defOpt opts k = select defOpt opts $ e sig p -\u003e withSample sig $ i -\u003e k e i p\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "selectInput",
          "package": "jmacro-rpc",
          "signature": "(String, a) -\u003e [(String, a)] -\u003e (Event -\u003e a -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#selectInput",
          "type": "function"
        },
        "index": {
          "description": "wrapper around select that immediately samples from the yielded signal selectInput defOpt opts select defOpt opts sig withSample sig",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "selectInput",
          "normalized": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003ea-\u003ePanel b-\u003ePanel b)-\u003ePanel b",
          "package": "jmacro-rpc",
          "partial": "Input",
          "signature": "(String,a)-\u003e[(String,a)]-\u003e(Event-\u003ea-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:selectInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFeed a value to a Sink.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "tellSink",
          "package": "jmacro-rpc",
          "signature": "Sink typ m a -\u003e a -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#tellSink",
          "type": "function"
        },
        "index": {
          "description": "Feed value to Sink",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "tellSink",
          "normalized": "Sink a b c-\u003ec-\u003ePanel b",
          "package": "jmacro-rpc",
          "partial": "Sink",
          "signature": "Sink typ m a-\u003ea-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:tellSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA basic text input box. This box provides a Sink as well as a Signal, so it's contents can be controlled from elsewhere in the Panel.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "textPane",
          "package": "jmacro-rpc",
          "signature": "String -\u003e (Event -\u003e Signal typ String -\u003e Sink typ m String -\u003e Panel m -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#textPane",
          "type": "function"
        },
        "index": {
          "description": "basic text input box This box provides Sink as well as Signal so it contents can be controlled from elsewhere in the Panel",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "textPane",
          "normalized": "String-\u003e(Event-\u003eSignal a String-\u003eSink a b String-\u003ePanel b-\u003ePanel b)-\u003ePanel b",
          "package": "jmacro-rpc",
          "partial": "Pane",
          "signature": "String-\u003e(Event-\u003eSignal typ String-\u003eSink typ m String-\u003ePanel m-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:textPane"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JMacroRPC.Panels",
          "name": "updateP",
          "package": "jmacro-rpc",
          "signature": "PState m [(PanelPath, PageSlice)]",
          "source": "src/Network-JMacroRPC-Panels.html#Panel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "updateP",
          "normalized": "PState a[(PanelPath,PageSlice)]",
          "package": "jmacro-rpc",
          "signature": "PState m[(PanelPath,PageSlice)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:updateP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven an arbitrary Signal, and a continuation accepting a value of the underlying type of the signal, yield a simple Panel.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "withSample",
          "package": "jmacro-rpc",
          "signature": "Signal typ a -\u003e (a -\u003e Panel m) -\u003e Panel m",
          "source": "src/Network-JMacroRPC-Panels.html#withSample",
          "type": "function"
        },
        "index": {
          "description": "Given an arbitrary Signal and continuation accepting value of the underlying type of the signal yield simple Panel",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "withSample",
          "normalized": "Signal a b-\u003e(b-\u003ePanel c)-\u003ePanel c",
          "package": "jmacro-rpc",
          "partial": "Sample",
          "signature": "Signal typ a-\u003e(a-\u003ePanel m)-\u003ePanel m",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:withSample"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWe can zip sinks up to combine them.\n\u003c/p\u003e",
          "module": "Network.JMacroRPC.Panels",
          "name": "zipSinks",
          "package": "jmacro-rpc",
          "signature": "Sink Hask m a -\u003e Sink Hask m b -\u003e Sink Hask m (a, b)",
          "source": "src/Network-JMacroRPC-Panels.html#zipSinks",
          "type": "function"
        },
        "index": {
          "description": "We can zip sinks up to combine them",
          "hierarchy": "Network JMacroRPC Panels",
          "module": "Network.JMacroRPC.Panels",
          "name": "zipSinks",
          "normalized": "Sink Hask a b-\u003eSink Hask a c-\u003eSink Hask a(b,c)",
          "package": "jmacro-rpc",
          "partial": "Sinks",
          "signature": "Sink Hask m a-\u003eSink Hask m b-\u003eSink Hask m(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/jmacro-rpc/docs/Network-JMacroRPC-Panels.html#v:zipSinks"
      }
    }
  ]
]