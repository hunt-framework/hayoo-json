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
        "word": "hs-json-rpc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the client functionality of JSON-RPC, whose specification may be read here (\u003ca\u003ehttp://json-rpc.org/wiki/specification\u003c/a\u003e)\nfor version 1 and here (\u003ca\u003ehttp://www.jsonrpc.org/spec.html\u003c/a\u003e) for version 2.\n\u003c/p\u003e\u003cp\u003eBy convention, a notification is represented Haskell-side by a function returning a IO (), given it doesn't care about the server's\nresponse.\n\u003c/p\u003e\u003cp\u003eNote that the functions returned by \u003ccode\u003e\u003ca\u003eremote\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003enotify\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003edetailledRemote\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003edetailledNotify\u003c/a\u003e\u003c/code\u003e need not have parameters.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "Client",
          "package": "hs-json-rpc",
          "source": "src/Network-JsonRpc-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the client functionality of JSON-RPC whose specification may be read here http json-rpc.org wiki specification for version and here http www.jsonrpc.org spec.html for version By convention notification is represented Haskell-side by function returning IO given it doesn care about the server response Note that the functions returned by remote notify detailledRemote and detailledNotify need not have parameters",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "Client",
          "package": "hs-json-rpc",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of functions representable in JSON-RPC\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcCall",
          "package": "hs-json-rpc",
          "source": "src/Network-JsonRpc-Client.html#JsonRpcCall",
          "type": "class"
        },
        "index": {
          "description": "Type of functions representable in JSON-RPC",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcCall",
          "package": "hs-json-rpc",
          "partial": "Json Rpc Call",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#t:JsonRpcCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exception type returned by \u003ca\u003eNetwork.JsonRpc.Client\u003c/a\u003e's functions when an error appens \n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcException",
          "package": "hs-json-rpc",
          "source": "src/Network-JsonRpc-Common.html#JsonRpcException",
          "type": "data"
        },
        "index": {
          "description": "The exception type returned by Network.JsonRpc.Client functions when an error appens",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcException",
          "package": "hs-json-rpc",
          "partial": "Json Rpc Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#t:JsonRpcException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of notifications representable in JSON-RPC\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcNotification",
          "package": "hs-json-rpc",
          "source": "src/Network-JsonRpc-Client.html#JsonRpcNotification",
          "type": "class"
        },
        "index": {
          "description": "Type of notifications representable in JSON-RPC",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcNotification",
          "package": "hs-json-rpc",
          "partial": "Json Rpc Notification",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#t:JsonRpcNotification"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDatatype representing the protocol's version in use during a call or notification.\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcVersion",
          "package": "hs-json-rpc",
          "source": "src/Network-JsonRpc-Client.html#JsonRpcVersion",
          "type": "data"
        },
        "index": {
          "description": "Datatype representing the protocol version in use during call or notification",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "JsonRpcVersion",
          "package": "hs-json-rpc",
          "partial": "Json Rpc Version",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#t:JsonRpcVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JsonRpc.Client",
          "name": "Version1",
          "package": "hs-json-rpc",
          "signature": "Version1",
          "source": "src/Network-JsonRpc-Client.html#JsonRpcVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "Version1",
          "package": "hs-json-rpc",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:Version1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.JsonRpc.Client",
          "name": "Version2",
          "package": "hs-json-rpc",
          "signature": "Version2",
          "source": "src/Network-JsonRpc-Client.html#JsonRpcVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "Version2",
          "package": "hs-json-rpc",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:Version2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote notification on a JSON-RPC server, specifying the protocol's version to use and customs elements to add to the request\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "detailledNotify",
          "package": "hs-json-rpc",
          "signature": "JsonRpcVersion-\u003e [Pair]-\u003e String-\u003e String-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Call remote notification on JSON-RPC server specifying the protocol version to use and customs elements to add to the request",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "detailledNotify",
          "normalized": "JsonRpcVersion-\u003e[Pair]-\u003eString-\u003eString-\u003ea",
          "package": "hs-json-rpc",
          "partial": "Notify",
          "signature": "JsonRpcVersion-\u003e[Pair]-\u003eString-\u003eString-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:detailledNotify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote function via JSON-RPC, specifying the protocol's version to use and customs elements to add to the request\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "detailledRemote",
          "package": "hs-json-rpc",
          "signature": "JsonRpcVersion-\u003e [Pair]-\u003e String-\u003e String-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Call remote function via JSON-RPC specifying the protocol version to use and customs elements to add to the request",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "detailledRemote",
          "normalized": "JsonRpcVersion-\u003e[Pair]-\u003eString-\u003eString-\u003ea",
          "package": "hs-json-rpc",
          "partial": "Remote",
          "signature": "JsonRpcVersion-\u003e[Pair]-\u003eString-\u003eString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:detailledRemote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote notification on a JSON-RPC server, using version 2 of the protocol and HTTP POST as its transport\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "notify",
          "package": "hs-json-rpc",
          "signature": "String-\u003e String-\u003e n",
          "type": "function"
        },
        "index": {
          "description": "Call remote notification on JSON-RPC server using version of the protocol and HTTP POST as its transport",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "notify",
          "normalized": "String-\u003eString-\u003ea",
          "package": "hs-json-rpc",
          "signature": "String-\u003eString-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote function via JSON-RPC, using version 2 of the protocol and HTTP POST as its transport\n\u003c/p\u003e",
          "module": "Network.JsonRpc.Client",
          "name": "remote",
          "package": "hs-json-rpc",
          "signature": "String-\u003e String-\u003e c",
          "type": "function"
        },
        "index": {
          "description": "Call remote function via JSON-RPC using version of the protocol and HTTP POST as its transport",
          "hierarchy": "Network JsonRpc Client",
          "module": "Network.JsonRpc.Client",
          "name": "remote",
          "normalized": "String-\u003eString-\u003ea",
          "package": "hs-json-rpc",
          "signature": "String-\u003eString-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-json-rpc/docs/Network-JsonRpc-Client.html#v:remote"
      }
    }
  ]
]