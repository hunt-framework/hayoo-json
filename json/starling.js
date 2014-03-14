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
        "word": "starling"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll of the craziness for thread-safety\nand asynchronous operations lives here.\n\u003c/p\u003e\u003cp\u003eThe idea is that if someone comes up\nwith a better way of managing connection\nstate they can build what they want on top\nof the Core module.\n\u003c/p\u003e\u003cp\u003eOperations are not entirely asynch -\nthey block until a response is returned.\n\u003c/p\u003e\u003cp\u003eBut we don't hold the connection lock while\nwe're blocking, so other threads can still\nput requests on the connection.\n\u003c/p\u003e\u003cp\u003eThis should work well where each thread needs one\nrequest to do it's job.\n\u003c/p\u003e\u003cp\u003eIf you have a good idea for what an asynchronous\nAPI should look like let me know. It shouldn't be too\nhard to add on to what's already here.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Starling.Connection",
          "name": "Connection",
          "package": "starling",
          "source": "src/Network-Starling-Connection.html",
          "type": "module"
        },
        "index": {
          "description": "All of the craziness for thread-safety and asynchronous operations lives here The idea is that if someone comes up with better way of managing connection state they can build what they want on top of the Core module Operations are not entirely asynch they block until response is returned But we don hold the connection lock while we re blocking so other threads can still put requests on the connection This should work well where each thread needs one request to do it job If you have good idea for what an asynchronous API should look like let me know It shouldn be too hard to add on to what already here",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "Connection",
          "package": "starling",
          "partial": "Connection",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor thread safety of operations, we perform\n all requests on a wrapper around a handle.\n\u003c/p\u003e",
          "module": "Network.Starling.Connection",
          "name": "Connection",
          "package": "starling",
          "source": "src/Network-Starling-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "For thread safety of operations we perform all requests on wrapper around handle",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "Connection",
          "package": "starling",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShut down the connection.\n Non-blocking.\n\u003c/p\u003e",
          "module": "[\"Network.Starling.Connection\",\"Network.Starling\"]",
          "name": "close",
          "package": "starling",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Network-Starling-Connection.html#close",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:close\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:close\"]"
        },
        "index": {
          "description": "Shut down the connection Non-blocking",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "close",
          "normalized": "Connection-\u003eIO()",
          "package": "starling",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis function ignores anything coming back from\n the server.\n Non-blocking.\n\u003c/p\u003e",
          "module": "Network.Starling.Connection",
          "name": "ignorantRequest",
          "package": "starling",
          "signature": "Connection -\u003e Request -\u003e IO ()",
          "source": "src/Network-Starling-Connection.html#ignorantRequest",
          "type": "function"
        },
        "index": {
          "description": "This function ignores anything coming back from the server Non-blocking",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "ignorantRequest",
          "normalized": "Connection-\u003eRequest-\u003eIO()",
          "package": "starling",
          "partial": "Request",
          "signature": "Connection-\u003eRequest-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:ignorantRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a connection.\n Please don't use the handle after opening a\n connection with it.\n\u003c/p\u003e",
          "module": "[\"Network.Starling.Connection\",\"Network.Starling\"]",
          "name": "open",
          "package": "starling",
          "signature": "Handle -\u003e IO Connection",
          "source": "src/Network-Starling-Connection.html#open",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:open\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:open\"]"
        },
        "index": {
          "description": "Create connection Please don use the handle after opening connection with it",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "open",
          "normalized": "Handle-\u003eIO Connection",
          "package": "starling",
          "signature": "Handle-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:open"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a synchronous request which only returns\n one reply\n\u003c/p\u003e",
          "module": "Network.Starling.Connection",
          "name": "synchRequest",
          "package": "starling",
          "signature": "Connection -\u003e Request -\u003e IO Response",
          "source": "src/Network-Starling-Connection.html#synchRequest",
          "type": "function"
        },
        "index": {
          "description": "Place synchronous request which only returns one reply",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "synchRequest",
          "normalized": "Connection-\u003eRequest-\u003eIO Response",
          "package": "starling",
          "partial": "Request",
          "signature": "Connection-\u003eRequest-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:synchRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePlace a synchronous request which may return\n multiple response (\u003ccode\u003e\u003ca\u003eStat\u003c/a\u003e\u003c/code\u003e, pretty much)\n\u003c/p\u003e",
          "module": "Network.Starling.Connection",
          "name": "synchRequestMulti",
          "package": "starling",
          "signature": "Connection -\u003e Request -\u003e IO [Response]",
          "source": "src/Network-Starling-Connection.html#synchRequestMulti",
          "type": "function"
        },
        "index": {
          "description": "Place synchronous request which may return multiple response Stat pretty much",
          "hierarchy": "Network Starling Connection",
          "module": "Network.Starling.Connection",
          "name": "synchRequestMulti",
          "normalized": "Connection-\u003eRequest-\u003eIO[Response]",
          "package": "starling",
          "partial": "Request Multi",
          "signature": "Connection-\u003eRequest-\u003eIO[Response]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:synchRequestMulti"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitives for the memcached protocol.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Starling.Core",
          "name": "Core",
          "package": "starling",
          "source": "src/Network-Starling-Core.html",
          "type": "module"
        },
        "index": {
          "description": "Primitives for the memcached protocol",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Core",
          "package": "starling",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "AuthData",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#AuthData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "AuthData",
          "package": "starling",
          "partial": "Auth Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:AuthData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "AuthMechanism",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#AuthMechanism",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "AuthMechanism",
          "package": "starling",
          "partial": "Auth Mechanism",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:AuthMechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "CAS",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#CAS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "CAS",
          "package": "starling",
          "partial": "CAS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:CAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "DataType",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#DataType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "DataType",
          "package": "starling",
          "partial": "Data Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:DataType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Deserialize",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Deserialize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Deserialize",
          "package": "starling",
          "partial": "Deserialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Key",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Key",
          "package": "starling",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "OpCode",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "OpCode",
          "package": "starling",
          "partial": "Op Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:OpCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Opaque",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Opaque",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Opaque",
          "package": "starling",
          "partial": "Opaque",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Opaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Request",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Request",
          "package": "starling",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Response",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Response",
          "package": "starling",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "ResponseStatus",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "ResponseStatus",
          "package": "starling",
          "partial": "Response Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:ResponseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Serialize",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Serialize",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Serialize",
          "package": "starling",
          "partial": "Serialize",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "StarlingReadError",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#StarlingReadError",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "StarlingReadError",
          "package": "starling",
          "partial": "Starling Read Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:StarlingReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Value",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Value",
          "package": "starling",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Add",
          "package": "starling",
          "signature": "Add",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Add",
          "package": "starling",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "AddQ",
          "package": "starling",
          "signature": "AddQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "AddQ",
          "package": "starling",
          "partial": "Add",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AddQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Append",
          "package": "starling",
          "signature": "Append",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Append",
          "package": "starling",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "AppendQ",
          "package": "starling",
          "signature": "AppendQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "AppendQ",
          "package": "starling",
          "partial": "Append",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AppendQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "AuthRequired",
          "package": "starling",
          "signature": "AuthRequired",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AuthRequired\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:AuthRequired\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "AuthRequired",
          "package": "starling",
          "partial": "Auth Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AuthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Decrement",
          "package": "starling",
          "signature": "Decrement",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Decrement",
          "package": "starling",
          "partial": "Decrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Decrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "DecrementQ",
          "package": "starling",
          "signature": "DecrementQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "DecrementQ",
          "package": "starling",
          "partial": "Decrement",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:DecrementQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Delete",
          "package": "starling",
          "signature": "Delete",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Delete",
          "package": "starling",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "DeleteQ",
          "package": "starling",
          "signature": "DeleteQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "DeleteQ",
          "package": "starling",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:DeleteQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Flush",
          "package": "starling",
          "signature": "Flush",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Flush",
          "package": "starling",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "FlushQ",
          "package": "starling",
          "signature": "FlushQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "FlushQ",
          "package": "starling",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:FlushQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "FurtherAuthRequired",
          "package": "starling",
          "signature": "FurtherAuthRequired",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:FurtherAuthRequired\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:FurtherAuthRequired\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "FurtherAuthRequired",
          "package": "starling",
          "partial": "Further Auth Required",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:FurtherAuthRequired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Get",
          "package": "starling",
          "signature": "Get",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Get",
          "package": "starling",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "GetK",
          "package": "starling",
          "signature": "GetK",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "GetK",
          "package": "starling",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "GetKQ",
          "package": "starling",
          "signature": "GetKQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "GetKQ",
          "package": "starling",
          "partial": "Get KQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetKQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "GetQ",
          "package": "starling",
          "signature": "GetQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "GetQ",
          "package": "starling",
          "partial": "Get",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "IncrDecrOnNonNumeric",
          "package": "starling",
          "signature": "IncrDecrOnNonNumeric",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:IncrDecrOnNonNumeric\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:IncrDecrOnNonNumeric\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "IncrDecrOnNonNumeric",
          "package": "starling",
          "partial": "Incr Decr On Non Numeric",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:IncrDecrOnNonNumeric"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Increment",
          "package": "starling",
          "signature": "Increment",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Increment",
          "package": "starling",
          "partial": "Increment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "IncrementQ",
          "package": "starling",
          "signature": "IncrementQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "IncrementQ",
          "package": "starling",
          "partial": "Increment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:IncrementQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "InvalidArguments",
          "package": "starling",
          "signature": "InvalidArguments",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:InvalidArguments\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:InvalidArguments\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "InvalidArguments",
          "package": "starling",
          "partial": "Invalid Arguments",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:InvalidArguments"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "ItemNotStored",
          "package": "starling",
          "signature": "ItemNotStored",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ItemNotStored\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:ItemNotStored\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "ItemNotStored",
          "package": "starling",
          "partial": "Item Not Stored",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ItemNotStored"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "KeyExists",
          "package": "starling",
          "signature": "KeyExists",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyExists\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:KeyExists\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "KeyExists",
          "package": "starling",
          "partial": "Key Exists",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyExists"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "KeyNotFound",
          "package": "starling",
          "signature": "KeyNotFound",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyNotFound\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:KeyNotFound\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "KeyNotFound",
          "package": "starling",
          "partial": "Key Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "ListAuthMechanisms",
          "package": "starling",
          "signature": "ListAuthMechanisms",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "ListAuthMechanisms",
          "package": "starling",
          "partial": "List Auth Mechanisms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ListAuthMechanisms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "NoError",
          "package": "starling",
          "signature": "NoError",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:NoError\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:NoError\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "NoError",
          "package": "starling",
          "partial": "No Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:NoError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "NoOp",
          "package": "starling",
          "signature": "NoOp",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "NoOp",
          "package": "starling",
          "partial": "No Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:NoOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "OutOfMemory",
          "package": "starling",
          "signature": "OutOfMemory",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:OutOfMemory\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:OutOfMemory\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "OutOfMemory",
          "package": "starling",
          "partial": "Out Of Memory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:OutOfMemory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Prepend",
          "package": "starling",
          "signature": "Prepend",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Prepend",
          "package": "starling",
          "partial": "Prepend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Prepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "PrependQ",
          "package": "starling",
          "signature": "PrependQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "PrependQ",
          "package": "starling",
          "partial": "Prepend",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:PrependQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Quit",
          "package": "starling",
          "signature": "Quit",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Quit",
          "package": "starling",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "QuitQ",
          "package": "starling",
          "signature": "QuitQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "QuitQ",
          "package": "starling",
          "partial": "Quit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:QuitQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "RawData",
          "package": "starling",
          "signature": "RawData",
          "source": "src/Network-Starling-Core.html#DataType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "RawData",
          "package": "starling",
          "partial": "Raw Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:RawData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Replace",
          "package": "starling",
          "signature": "Replace",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Replace",
          "package": "starling",
          "partial": "Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "ReplaceQ",
          "package": "starling",
          "signature": "ReplaceQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "ReplaceQ",
          "package": "starling",
          "partial": "Replace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ReplaceQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Res",
          "package": "starling",
          "signature": "Res",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Res",
          "package": "starling",
          "partial": "Res",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Res"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Set",
          "package": "starling",
          "signature": "Set",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Set",
          "package": "starling",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "SetQ",
          "package": "starling",
          "signature": "SetQ",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "SetQ",
          "package": "starling",
          "partial": "Set",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:SetQ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "StarlingReadError",
          "package": "starling",
          "signature": "StarlingReadError",
          "source": "src/Network-Starling-Core.html#StarlingReadError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "StarlingReadError",
          "package": "starling",
          "partial": "Starling Read Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StarlingReadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "StartAuth",
          "package": "starling",
          "signature": "StartAuth",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "StartAuth",
          "package": "starling",
          "partial": "Start Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StartAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Stat",
          "package": "starling",
          "signature": "Stat",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Stat",
          "package": "starling",
          "partial": "Stat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "StepAuth",
          "package": "starling",
          "signature": "StepAuth",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "StepAuth",
          "package": "starling",
          "partial": "Step Auth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StepAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "UnknownCommand",
          "package": "starling",
          "signature": "UnknownCommand",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:UnknownCommand\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:UnknownCommand\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "UnknownCommand",
          "package": "starling",
          "partial": "Unknown Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:UnknownCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Network.Starling.Core\",\"Network.Starling\"]",
          "name": "ValueTooLarge",
          "package": "starling",
          "signature": "ValueTooLarge",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ValueTooLarge\",\"http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:ValueTooLarge\"]"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "ValueTooLarge",
          "package": "starling",
          "partial": "Value Too Large",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ValueTooLarge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "Version",
          "package": "starling",
          "signature": "Version",
          "source": "src/Network-Starling-Core.html#OpCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "Version",
          "package": "starling",
          "partial": "Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a value to cache. Fails if\n already present.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "add",
          "package": "starling",
          "signature": "Key -\u003e Value -\u003e Request",
          "source": "src/Network-Starling-Core.html#add",
          "type": "function"
        },
        "index": {
          "description": "Add value to cache Fails if already present",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "add",
          "normalized": "Key-\u003eValue-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eValue-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a version tag to a request. When\n added to a set/replace request, the request\n will fail if the data has been modified since\n the CAS was retrieved for the item.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "addCAS",
          "package": "starling",
          "signature": "CAS -\u003e Request -\u003e Request",
          "source": "src/Network-Starling-Core.html#addCAS",
          "type": "function"
        },
        "index": {
          "description": "Add version tag to request When added to set replace request the request will fail if the data has been modified since the CAS was retrieved for the item",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "addCAS",
          "normalized": "CAS-\u003eRequest-\u003eRequest",
          "package": "starling",
          "partial": "CAS",
          "signature": "CAS-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:addCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an opaque marker to a request.\n This is returned unchanged in the corresponding\n response.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "addOpaque",
          "package": "starling",
          "signature": "Opaque -\u003e Request -\u003e Request",
          "source": "src/Network-Starling-Core.html#addOpaque",
          "type": "function"
        },
        "index": {
          "description": "Add an opaque marker to request This is returned unchanged in the corresponding response",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "addOpaque",
          "normalized": "Opaque-\u003eRequest-\u003eRequest",
          "package": "starling",
          "partial": "Opaque",
          "signature": "Opaque-\u003eRequest-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:addOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppends the value to the value in the cache\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "append",
          "package": "starling",
          "signature": "Key -\u003e Value -\u003e Request",
          "source": "src/Network-Starling-Core.html#append",
          "type": "function"
        },
        "index": {
          "description": "Appends the value to the value in the cache",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "append",
          "normalized": "Key-\u003eValue-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eValue-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:append"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "decrement",
          "package": "starling",
          "signature": "Key-\u003e Word64-\u003e Word64-\u003e Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "decrement",
          "normalized": "Key-\u003eWord-\u003eWord-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eWord-\u003eWord-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:decrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a cache entry\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "delete",
          "package": "starling",
          "signature": "Key -\u003e Request",
          "source": "src/Network-Starling-Core.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete cache entry",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "delete",
          "normalized": "Key-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "deserialize",
          "package": "starling",
          "signature": "Get a",
          "source": "src/Network-Starling-Core.html#deserialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "deserialize",
          "package": "starling",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:deserialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush the cache\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "flush",
          "package": "starling",
          "signature": "Request",
          "source": "src/Network-Starling-Core.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Flush the cache",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "flush",
          "package": "starling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a value from cache\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "get",
          "package": "starling",
          "signature": "Key -\u003e Request",
          "source": "src/Network-Starling-Core.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get value from cache",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "get",
          "normalized": "Key-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePulls a reponse to an operation\n off of a handle.\n May throw a \u003ccode\u003e\u003ca\u003eStarlingReadError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "getResponse",
          "package": "starling",
          "signature": "Handle -\u003e IO Response",
          "source": "src/Network-Starling-Core.html#getResponse",
          "type": "function"
        },
        "index": {
          "description": "Pulls reponse to an operation off of handle May throw StarlingReadError",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "getResponse",
          "normalized": "Handle-\u003eIO Response",
          "package": "starling",
          "partial": "Response",
          "signature": "Handle-\u003eIO Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:getResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "increment",
          "package": "starling",
          "signature": "Key-\u003e Word64-\u003e Word64-\u003e Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "increment",
          "normalized": "Key-\u003eWord-\u003eWord-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eWord-\u003eWord-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList SASL authenitication mechanisms, space delimeted\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "listAuthMechanisms",
          "package": "starling",
          "signature": "Request",
          "source": "src/Network-Starling-Core.html#listAuthMechanisms",
          "type": "function"
        },
        "index": {
          "description": "List SASL authenitication mechanisms space delimeted",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "listAuthMechanisms",
          "package": "starling",
          "partial": "Auth Mechanisms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:listAuthMechanisms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeepalive. Flushes responses for quiet operations.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "noop",
          "package": "starling",
          "signature": "Request",
          "source": "src/Network-Starling-Core.html#noop",
          "type": "function"
        },
        "index": {
          "description": "Keepalive Flushes responses for quiet operations",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "noop",
          "package": "starling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:noop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "nullCAS",
          "package": "starling",
          "signature": "CAS",
          "source": "src/Network-Starling-Core.html#nullCAS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "nullCAS",
          "package": "starling",
          "partial": "CAS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:nullCAS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepends the value to the value in the cache\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "prepend",
          "package": "starling",
          "signature": "Key -\u003e Value -\u003e Request",
          "source": "src/Network-Starling-Core.html#prepend",
          "type": "function"
        },
        "index": {
          "description": "Prepends the value to the value in the cache",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "prepend",
          "normalized": "Key-\u003eValue-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eValue-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:prepend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuit\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "quit",
          "package": "starling",
          "signature": "Request",
          "source": "src/Network-Starling-Core.html#quit",
          "type": "function"
        },
        "index": {
          "description": "Quit",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "quit",
          "package": "starling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:quit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReplaces a value in cahce. Fails if\n not present.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "replace",
          "package": "starling",
          "signature": "Key -\u003e Value -\u003e Request",
          "source": "src/Network-Starling-Core.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Replaces value in cahce Fails if not present",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "replace",
          "normalized": "Key-\u003eValue-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eValue-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the operation the request will perform\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "requestOp",
          "package": "starling",
          "signature": "Request -\u003e OpCode",
          "source": "src/Network-Starling-Core.html#requestOp",
          "type": "function"
        },
        "index": {
          "description": "Returns the operation the request will perform",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "requestOp",
          "normalized": "Request-\u003eOpCode",
          "package": "starling",
          "partial": "Op",
          "signature": "Request-\u003eOpCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:requestOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsBody",
          "package": "starling",
          "signature": "ByteString",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsBody",
          "package": "starling",
          "partial": "Body",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsBody"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsCas",
          "package": "starling",
          "signature": "CAS",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsCas",
          "package": "starling",
          "partial": "Cas",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsCas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsDataType",
          "package": "starling",
          "signature": "DataType",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsDataType",
          "package": "starling",
          "partial": "Data Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsDataType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsExtras",
          "package": "starling",
          "signature": "ByteString",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsExtras",
          "package": "starling",
          "partial": "Extras",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsExtras"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsKey",
          "package": "starling",
          "signature": "ByteString",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsKey",
          "package": "starling",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsMagic",
          "package": "starling",
          "signature": "RsMagic",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsMagic",
          "package": "starling",
          "partial": "Magic",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsMagic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsOp",
          "package": "starling",
          "signature": "OpCode",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsOp",
          "package": "starling",
          "partial": "Op",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsOpaque",
          "package": "starling",
          "signature": "Opaque",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsOpaque",
          "package": "starling",
          "partial": "Opaque",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsOpaque"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "rsStatus",
          "package": "starling",
          "signature": "ResponseStatus",
          "source": "src/Network-Starling-Core.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "rsStatus",
          "package": "starling",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling.Core",
          "name": "serialize",
          "package": "starling",
          "signature": "a -\u003e Builder",
          "source": "src/Network-Starling-Core.html#serialize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "serialize",
          "normalized": "a-\u003eBuilder",
          "package": "starling",
          "signature": "a-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:serialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a value in the cache.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "set",
          "package": "starling",
          "signature": "Key -\u003e Value -\u003e Request",
          "source": "src/Network-Starling-Core.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set value in the cache",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "set",
          "normalized": "Key-\u003eValue-\u003eRequest",
          "package": "starling",
          "signature": "Key-\u003eValue-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin SASL authentication. May return the further auth\n required error if further steps are needed.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "startAuth",
          "package": "starling",
          "signature": "AuthMechanism -\u003e AuthData -\u003e Request",
          "source": "src/Network-Starling-Core.html#startAuth",
          "type": "function"
        },
        "index": {
          "description": "Begin SASL authentication May return the further auth required error if further steps are needed",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "startAuth",
          "normalized": "AuthMechanism-\u003eAuthData-\u003eRequest",
          "package": "starling",
          "partial": "Auth",
          "signature": "AuthMechanism-\u003eAuthData-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:startAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetch statistics about the cahce. Returns a sequence\n of responses.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "stat",
          "package": "starling",
          "signature": "Maybe Key -\u003e Request",
          "source": "src/Network-Starling-Core.html#stat",
          "type": "function"
        },
        "index": {
          "description": "Fetch statistics about the cahce Returns sequence of responses",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "stat",
          "normalized": "Maybe Key-\u003eRequest",
          "package": "starling",
          "signature": "Maybe Key-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:stat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContinue SASL authentication. May return the further\n aut required error if further steps are needed.\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "stepAuth",
          "package": "starling",
          "signature": "AuthMechanism -\u003e AuthData -\u003e Request",
          "source": "src/Network-Starling-Core.html#stepAuth",
          "type": "function"
        },
        "index": {
          "description": "Continue SASL authentication May return the further aut required error if further steps are needed",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "stepAuth",
          "normalized": "AuthMechanism-\u003eAuthData-\u003eRequest",
          "package": "starling",
          "partial": "Auth",
          "signature": "AuthMechanism-\u003eAuthData-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:stepAuth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the server version\n\u003c/p\u003e",
          "module": "Network.Starling.Core",
          "name": "version",
          "package": "starling",
          "signature": "Request",
          "source": "src/Network-Starling-Core.html#version",
          "type": "function"
        },
        "index": {
          "description": "Returns the server version",
          "hierarchy": "Network Starling Core",
          "module": "Network.Starling.Core",
          "name": "version",
          "package": "starling",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:version"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA haskell implementation of the memcahed\nprotocol.\n\u003c/p\u003e\u003cp\u003eThis implements the new binary protocol, so\nit only works with memcached version 1.3 and newer.\n\u003c/p\u003e\u003cp\u003eExample of usage, using the network package to obain\na handle, and the OverloadedStrings language extension:\n\u003c/p\u003e\u003cpre\u003e h \u003c- connectTo \"filename\" $ UnixSocket \"filename\"\n hSetBuffering h NoBuffering\n con \u003c- open h\n\u003c/pre\u003e\u003cpre\u003e set con \"hello\" \"world\"\n get con \"hello\"\n\u003c/pre\u003e\u003cp\u003eIn the above example we connect to a unix socket in the file \"filename\",\nset the key \"hello\" to the value \"world\" and then retrieve the value.\n\u003c/p\u003e\u003cp\u003eOperations are thread safe - multiple threads of execution may make\nconcurrent requests on the memcahced connection.\n\u003c/p\u003e\u003cp\u003eOperations are blocking, but do not block other concurrent threads\nfrom placing requests on the connection.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Starling",
          "name": "Starling",
          "package": "starling",
          "source": "src/Network-Starling.html",
          "type": "module"
        },
        "index": {
          "description": "haskell implementation of the memcahed protocol This implements the new binary protocol so it only works with memcached version and newer Example of usage using the network package to obain handle and the OverloadedStrings language extension connectTo filename UnixSocket filename hSetBuffering NoBuffering con open set con hello world get con hello In the above example we connect to unix socket in the file filename set the key hello to the value world and then retrieve the value Operations are thread safe multiple threads of execution may make concurrent requests on the memcahced connection Operations are blocking but do not block other concurrent threads from placing requests on the connection",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "Starling",
          "package": "starling",
          "partial": "Starling",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome authentications require mutliple back and forths between the\n client and the server. This type encapsulates that.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "AuthCallback",
          "package": "starling",
          "source": "src/Network-Starling.html#AuthCallback",
          "type": "data"
        },
        "index": {
          "description": "Some authentications require mutliple back and forths between the client and the server This type encapsulates that",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "AuthCallback",
          "package": "starling",
          "partial": "Auth Callback",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "AuthData",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#AuthData",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "AuthData",
          "package": "starling",
          "partial": "Auth Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "AuthMechanism",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#AuthMechanism",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "AuthMechanism",
          "package": "starling",
          "partial": "Auth Mechanism",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthMechanism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor thread safety of operations, we perform\n all requests on a wrapper around a handle.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "Connection",
          "package": "starling",
          "source": "src/Network-Starling-Connection.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "For thread safety of operations we perform all requests on wrapper around handle",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "Connection",
          "package": "starling",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "Key",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Key",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "Key",
          "package": "starling",
          "partial": "Key",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Key"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "ResponseStatus",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#ResponseStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "ResponseStatus",
          "package": "starling",
          "partial": "Response Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:ResponseStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error consists of the error code returned by the\n server and a human-readble error string returned by the server.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "StarlingError",
          "package": "starling",
          "source": "src/Network-Starling.html#StarlingError",
          "type": "data"
        },
        "index": {
          "description": "An error consists of the error code returned by the server and human-readble error string returned by the server",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "StarlingError",
          "package": "starling",
          "partial": "Starling Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:StarlingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "Value",
          "package": "starling",
          "source": "src/Network-Starling-Core.html#Value",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "Value",
          "package": "starling",
          "partial": "Value",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "AuthCallback",
          "package": "starling",
          "signature": "AuthCallback (ByteString -\u003e m (AuthData, Maybe (AuthCallback m)))",
          "source": "src/Network-Starling.html#AuthCallback",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "AuthCallback",
          "normalized": "AuthCallback(ByteString-\u003ea(AuthData,Maybe(AuthCallback a)))",
          "package": "starling",
          "partial": "Auth Callback",
          "signature": "AuthCallback(ByteString-\u003em(AuthData,Maybe(AuthCallback m)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:AuthCallback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Starling",
          "name": "StarlingError",
          "package": "starling",
          "signature": "StarlingError ResponseStatus ByteString",
          "source": "src/Network-Starling.html#StarlingError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "StarlingError",
          "package": "starling",
          "partial": "Starling Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:StarlingError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a vlue in the cache. Fails if a value is already defined\n for the indicated key.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "add",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
          "source": "src/Network-Starling.html#add",
          "type": "function"
        },
        "index": {
          "description": "Set vlue in the cache Fails if value is already defined for the indicated key",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "add",
          "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003eValue-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSASL authenitcation. Multi-step authentication is supported by un-folding\n the passed-in AuthCallback. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if authentication is supported\n and complete. If the supplied callback completes while there are still steps\n remaining we throw FurtherAuthRequired.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "auth",
          "package": "starling",
          "signature": "Connection -\u003e AuthMechanism -\u003e AuthData -\u003e Maybe (AuthCallback m) -\u003e m Bool",
          "source": "src/Network-Starling.html#auth",
          "type": "function"
        },
        "index": {
          "description": "SASL authenitcation Multi-step authentication is supported by un-folding the passed-in AuthCallback Returns True if authentication is supported and complete If the supplied callback completes while there are still steps remaining we throw FurtherAuthRequired",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "auth",
          "normalized": "Connection-\u003eAuthMechanism-\u003eAuthData-\u003eMaybe(AuthCallback a)-\u003ea Bool",
          "package": "starling",
          "signature": "Connection-\u003eAuthMechanism-\u003eAuthData-\u003eMaybe(AuthCallback m)-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:auth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecrement a value in the cache. The first \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e argument is the\n amount by which to decrement and the second is the intial value to\n use if the key does not yet have a value.\n The return value is the updated value in the cache.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "decrement",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e Word64 -\u003e Word64 -\u003e m Word64",
          "source": "src/Network-Starling.html#decrement",
          "type": "function"
        },
        "index": {
          "description": "Decrement value in the cache The first Word64 argument is the amount by which to decrement and the second is the intial value to use if the key does not yet have value The return value is the updated value in the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "decrement",
          "normalized": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003ea Word",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003em Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:decrement"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete an entry in the cache\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "delete",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e m ()",
          "source": "src/Network-Starling.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Delete an entry in the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "delete",
          "normalized": "Connection-\u003eKey-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all entries in the cache\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "flush",
          "package": "starling",
          "signature": "Connection -\u003e m ()",
          "source": "src/Network-Starling.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Delete all entries in the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "flush",
          "normalized": "Connection-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrive a value from the cache\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "get",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e m ByteString",
          "source": "src/Network-Starling.html#get",
          "type": "function"
        },
        "index": {
          "description": "Retrive value from the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "get",
          "normalized": "Connection-\u003eKey-\u003ea ByteString",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIncrement a value in the cache. The first \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e argument is the\n amount by which to increment and the second is the intial value to\n use if the key does not yet have a value.\n The return value is the updated value in the cache.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "increment",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e Word64 -\u003e Word64 -\u003e m Word64",
          "source": "src/Network-Starling.html#increment",
          "type": "function"
        },
        "index": {
          "description": "Increment value in the cache The first Word64 argument is the amount by which to increment and the second is the intial value to use if the key does not yet have value The return value is the updated value in the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "increment",
          "normalized": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003ea Word",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003em Word",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:increment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList allowed SASL mechanisms. The server must support SASL\n authentication.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "listAuthMechanisms",
          "package": "starling",
          "signature": "Connection -\u003e m [AuthMechanism]",
          "source": "src/Network-Starling.html#listAuthMechanisms",
          "type": "function"
        },
        "index": {
          "description": "List allowed SASL mechanisms The server must support SASL authentication",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "listAuthMechanisms",
          "normalized": "Connection-\u003ea[AuthMechanism]",
          "package": "starling",
          "partial": "Auth Mechanisms",
          "signature": "Connection-\u003em[AuthMechanism]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:listAuthMechanisms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a value in the cache. Fails if a value is not already defined\n for the indicated key.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "replace",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
          "source": "src/Network-Starling.html#replace",
          "type": "function"
        },
        "index": {
          "description": "Set value in the cache Fails if value is not already defined for the indicated key",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "replace",
          "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003eValue-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:replace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a value in the cache\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "set",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
          "source": "src/Network-Starling.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set value in the cache",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "set",
          "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003eValue-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of stats about the server in key,value pairs\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "stats",
          "package": "starling",
          "signature": "Connection -\u003e m [(ByteString, ByteString)]",
          "source": "src/Network-Starling.html#stats",
          "type": "function"
        },
        "index": {
          "description": "Returns list of stats about the server in key value pairs",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "stats",
          "normalized": "Connection-\u003ea[(ByteString,ByteString)]",
          "package": "starling",
          "signature": "Connection-\u003em[(ByteString,ByteString)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:stats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate a value in the cache. This operation requires two round trips.\n This operation can fail if the key is not present in the cache, or if\n the value changes in the cache between the two calls.\n So watch out! Even if the value exists the operation might\n not go through in the face of concurrent access.\n\u003c/p\u003e\u003cp\u003eTesting indicates that if we fail because we could not gaurantee\n atomicity the failure code will be \u003ccode\u003e\u003ca\u003eKeyExists\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "update",
          "package": "starling",
          "signature": "Connection -\u003e Key -\u003e (Value -\u003e m (Maybe Value)) -\u003e m ()",
          "source": "src/Network-Starling.html#update",
          "type": "function"
        },
        "index": {
          "description": "Update value in the cache This operation requires two round trips This operation can fail if the key is not present in the cache or if the value changes in the cache between the two calls So watch out Even if the value exists the operation might not go through in the face of concurrent access Testing indicates that if we fail because we could not gaurantee atomicity the failure code will be KeyExists",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "update",
          "normalized": "Connection-\u003eKey-\u003e(Value-\u003ea(Maybe Value))-\u003ea()",
          "package": "starling",
          "signature": "Connection-\u003eKey-\u003e(Value-\u003em(Maybe Value))-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the version of the server\n\u003c/p\u003e",
          "module": "Network.Starling",
          "name": "version",
          "package": "starling",
          "signature": "Connection -\u003e m ByteString",
          "source": "src/Network-Starling.html#version",
          "type": "function"
        },
        "index": {
          "description": "Returns the version of the server",
          "hierarchy": "Network Starling",
          "module": "Network.Starling",
          "name": "version",
          "normalized": "Connection-\u003ea ByteString",
          "package": "starling",
          "signature": "Connection-\u003em ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:version"
      }
    }
  ]
]