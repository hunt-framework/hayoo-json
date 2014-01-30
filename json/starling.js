[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAll of the craziness for thread-safety\nand asynchronous operations lives here.\n\u003c/p\u003e\u003cp\u003eThe idea is that if someone comes up\nwith a better way of managing connection\nstate they can build what they want on top\nof the Core module.\n\u003c/p\u003e\u003cp\u003eOperations are not entirely asynch -\nthey block until a response is returned.\n\u003c/p\u003e\u003cp\u003eBut we don't hold the connection lock while\nwe're blocking, so other threads can still\nput requests on the connection.\n\u003c/p\u003e\u003cp\u003eThis should work well where each thread needs one\nrequest to do it's job.\n\u003c/p\u003e\u003cp\u003eIf you have a good idea for what an asynchronous\nAPI should look like let me know. It shouldn't be too\nhard to add on to what's already here.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "module",
        "fct-source": "src/Network-Starling-Connection.html",
        "fct-type": "module",
        "title": "Connection"
      },
      "index": {
        "description": "All of the craziness for thread-safety and asynchronous operations lives here The idea is that if someone comes up with better way of managing connection state they can build what they want on top of the Core module Operations are not entirely asynch they block until response is returned But we don hold the connection lock while we re blocking so other threads can still put requests on the connection This should work well where each thread needs one request to do it job If you have good idea for what an asynchronous API should look like let me know It shouldn be too hard to add on to what already here",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "starling",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eFor thread safety of operations, we perform\n all requests on a wrapper around a handle.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "For thread safety of operations we perform all requests on wrapper around handle",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "Connection",
        "normalized": "",
        "package": "starling",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eShut down the connection.\n Non-blocking.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Starling-Connection.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Shut down the connection Non-blocking",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:ignorantRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThis function ignores anything coming back from\n the server.\n Non-blocking.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Request -\u003e IO ()",
        "fct-source": "src/Network-Starling-Connection.html#ignorantRequest",
        "fct-type": "function",
        "title": "ignorantRequest"
      },
      "index": {
        "description": "This function ignores anything coming back from the server Non-blocking",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "ignorantRequest",
        "normalized": "Connection-\u003eRequest-\u003eIO()",
        "package": "starling",
        "partial": "Request",
        "signature": "Connection-\u003eRequest-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a connection.\n Please don't use the handle after opening a\n connection with it.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "Handle -\u003e IO Connection",
        "fct-source": "src/Network-Starling-Connection.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Create connection Please don use the handle after opening connection with it",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "open",
        "normalized": "Handle-\u003eIO Connection",
        "package": "starling",
        "partial": "",
        "signature": "Handle-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:synchRequest",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a synchronous request which only returns\n one reply\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Request -\u003e IO Response",
        "fct-source": "src/Network-Starling-Connection.html#synchRequest",
        "fct-type": "function",
        "title": "synchRequest"
      },
      "index": {
        "description": "Place synchronous request which only returns one reply",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "synchRequest",
        "normalized": "Connection-\u003eRequest-\u003eIO Response",
        "package": "starling",
        "partial": "Request",
        "signature": "Connection-\u003eRequest-\u003eIO Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Connection.html#v:synchRequestMulti",
      "description": {
        "fct-descr": "\u003cp\u003ePlace a synchronous request which may return\n multiple response (\u003ccode\u003e\u003ca\u003eStat\u003c/a\u003e\u003c/code\u003e, pretty much)\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Connection",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Request -\u003e IO [Response]",
        "fct-source": "src/Network-Starling-Connection.html#synchRequestMulti",
        "fct-type": "function",
        "title": "synchRequestMulti"
      },
      "index": {
        "description": "Place synchronous request which may return multiple response Stat pretty much",
        "hierarchy": "Network Starling Connection",
        "module": "Network.Starling.Connection",
        "name": "synchRequestMulti",
        "normalized": "Connection-\u003eRequest-\u003eIO[Response]",
        "package": "starling",
        "partial": "Request Multi",
        "signature": "Connection-\u003eRequest-\u003eIO[Response]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003ePrimitives for the memcached protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "module",
        "fct-source": "src/Network-Starling-Core.html",
        "fct-type": "module",
        "title": "Core"
      },
      "index": {
        "description": "Primitives for the memcached protocol",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Core",
        "normalized": "",
        "package": "starling",
        "partial": "Core",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:AuthData",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#AuthData",
        "fct-type": "type",
        "title": "AuthData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "AuthData",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:AuthMechanism",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#AuthMechanism",
        "fct-type": "type",
        "title": "AuthMechanism"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "AuthMechanism",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Mechanism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:CAS",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#CAS",
        "fct-type": "data",
        "title": "CAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "CAS",
        "normalized": "",
        "package": "starling",
        "partial": "CAS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:DataType",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#DataType",
        "fct-type": "data",
        "title": "DataType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "DataType",
        "normalized": "",
        "package": "starling",
        "partial": "Data Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Deserialize",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "class",
        "fct-source": "src/Network-Starling-Core.html#Deserialize",
        "fct-type": "class",
        "title": "Deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Deserialize",
        "normalized": "",
        "package": "starling",
        "partial": "Deserialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Key",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Key",
        "normalized": "",
        "package": "starling",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:OpCode",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "data",
        "title": "OpCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "OpCode",
        "normalized": "",
        "package": "starling",
        "partial": "Op Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Opaque",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#Opaque",
        "fct-type": "type",
        "title": "Opaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Opaque",
        "normalized": "",
        "package": "starling",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Request",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Request",
        "normalized": "",
        "package": "starling",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Response",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "data",
        "title": "Response"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Response",
        "normalized": "",
        "package": "starling",
        "partial": "Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:ResponseStatus",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "data",
        "title": "ResponseStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "ResponseStatus",
        "normalized": "",
        "package": "starling",
        "partial": "Response Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Serialize",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "class",
        "fct-source": "src/Network-Starling-Core.html#Serialize",
        "fct-type": "class",
        "title": "Serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Serialize",
        "normalized": "",
        "package": "starling",
        "partial": "Serialize",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:StarlingReadError",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#StarlingReadError",
        "fct-type": "data",
        "title": "StarlingReadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "StarlingReadError",
        "normalized": "",
        "package": "starling",
        "partial": "Starling Read Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#t:Value",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#Value",
        "fct-type": "type",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Value",
        "normalized": "",
        "package": "starling",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Add",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Add",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Add"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Add",
        "normalized": "",
        "package": "starling",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AddQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "AddQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "AddQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "AddQ",
        "normalized": "",
        "package": "starling",
        "partial": "Add",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Append",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Append",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Append"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Append",
        "normalized": "",
        "package": "starling",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AppendQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "AppendQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "AppendQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "AppendQ",
        "normalized": "",
        "package": "starling",
        "partial": "Append",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:AuthRequired",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "AuthRequired",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "AuthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "AuthRequired",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Decrement",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Decrement",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Decrement"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Decrement",
        "normalized": "",
        "package": "starling",
        "partial": "Decrement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:DecrementQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "DecrementQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "DecrementQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "DecrementQ",
        "normalized": "",
        "package": "starling",
        "partial": "Decrement",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Delete",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Delete",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Delete"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Delete",
        "normalized": "",
        "package": "starling",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:DeleteQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "DeleteQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "DeleteQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "DeleteQ",
        "normalized": "",
        "package": "starling",
        "partial": "Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Flush",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Flush",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Flush"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Flush",
        "normalized": "",
        "package": "starling",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:FlushQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "FlushQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "FlushQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "FlushQ",
        "normalized": "",
        "package": "starling",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:FurtherAuthRequired",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "FurtherAuthRequired",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "FurtherAuthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "FurtherAuthRequired",
        "normalized": "",
        "package": "starling",
        "partial": "Further Auth Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Get",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Get",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Get"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Get",
        "normalized": "",
        "package": "starling",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetK",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "GetK",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "GetK"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "GetK",
        "normalized": "",
        "package": "starling",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetKQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "GetKQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "GetKQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "GetKQ",
        "normalized": "",
        "package": "starling",
        "partial": "Get KQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:GetQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "GetQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "GetQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "GetQ",
        "normalized": "",
        "package": "starling",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:IncrDecrOnNonNumeric",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "IncrDecrOnNonNumeric",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "IncrDecrOnNonNumeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "IncrDecrOnNonNumeric",
        "normalized": "",
        "package": "starling",
        "partial": "Incr Decr On Non Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Increment",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Increment",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Increment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Increment",
        "normalized": "",
        "package": "starling",
        "partial": "Increment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:IncrementQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "IncrementQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "IncrementQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "IncrementQ",
        "normalized": "",
        "package": "starling",
        "partial": "Increment",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:InvalidArguments",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "InvalidArguments",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "InvalidArguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "InvalidArguments",
        "normalized": "",
        "package": "starling",
        "partial": "Invalid Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ItemNotStored",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ItemNotStored",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "ItemNotStored"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "ItemNotStored",
        "normalized": "",
        "package": "starling",
        "partial": "Item Not Stored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyExists",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "KeyExists",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "KeyExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "KeyExists",
        "normalized": "",
        "package": "starling",
        "partial": "Key Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:KeyNotFound",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "KeyNotFound",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "KeyNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "KeyNotFound",
        "normalized": "",
        "package": "starling",
        "partial": "Key Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ListAuthMechanisms",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ListAuthMechanisms",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "ListAuthMechanisms"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "ListAuthMechanisms",
        "normalized": "",
        "package": "starling",
        "partial": "List Auth Mechanisms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:NoError",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "NoError",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "NoError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "NoError",
        "normalized": "",
        "package": "starling",
        "partial": "No Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:NoOp",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "NoOp",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "NoOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "NoOp",
        "normalized": "",
        "package": "starling",
        "partial": "No Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:OutOfMemory",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "OutOfMemory",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "OutOfMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "OutOfMemory",
        "normalized": "",
        "package": "starling",
        "partial": "Out Of Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Prepend",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Prepend",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Prepend"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Prepend",
        "normalized": "",
        "package": "starling",
        "partial": "Prepend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:PrependQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "PrependQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "PrependQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "PrependQ",
        "normalized": "",
        "package": "starling",
        "partial": "Prepend",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Quit",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Quit",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Quit"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Quit",
        "normalized": "",
        "package": "starling",
        "partial": "Quit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:QuitQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "QuitQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "QuitQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "QuitQ",
        "normalized": "",
        "package": "starling",
        "partial": "Quit",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:RawData",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "RawData",
        "fct-source": "src/Network-Starling-Core.html#DataType",
        "fct-type": "function",
        "title": "RawData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "RawData",
        "normalized": "",
        "package": "starling",
        "partial": "Raw Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Replace",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Replace",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Replace"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Replace",
        "normalized": "",
        "package": "starling",
        "partial": "Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ReplaceQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ReplaceQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "ReplaceQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "ReplaceQ",
        "normalized": "",
        "package": "starling",
        "partial": "Replace",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Res",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Res",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "Res"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Res",
        "normalized": "",
        "package": "starling",
        "partial": "Res",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Set",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Set",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Set"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Set",
        "normalized": "",
        "package": "starling",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:SetQ",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "SetQ",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "SetQ"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "SetQ",
        "normalized": "",
        "package": "starling",
        "partial": "Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StarlingReadError",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "StarlingReadError",
        "fct-source": "src/Network-Starling-Core.html#StarlingReadError",
        "fct-type": "function",
        "title": "StarlingReadError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "StarlingReadError",
        "normalized": "",
        "package": "starling",
        "partial": "Starling Read Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StartAuth",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "StartAuth",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "StartAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "StartAuth",
        "normalized": "",
        "package": "starling",
        "partial": "Start Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Stat",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Stat",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Stat"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Stat",
        "normalized": "",
        "package": "starling",
        "partial": "Stat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:StepAuth",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "StepAuth",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "StepAuth"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "StepAuth",
        "normalized": "",
        "package": "starling",
        "partial": "Step Auth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:UnknownCommand",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "UnknownCommand",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "UnknownCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "UnknownCommand",
        "normalized": "",
        "package": "starling",
        "partial": "Unknown Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:ValueTooLarge",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ValueTooLarge",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "ValueTooLarge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "ValueTooLarge",
        "normalized": "",
        "package": "starling",
        "partial": "Value Too Large",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:Version",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Version",
        "fct-source": "src/Network-Starling-Core.html#OpCode",
        "fct-type": "function",
        "title": "Version"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "Version",
        "normalized": "",
        "package": "starling",
        "partial": "Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a value to cache. Fails if\n already present.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Value -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Add value to cache Fails if already present",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "add",
        "normalized": "Key-\u003eValue-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:addCAS",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a version tag to a request. When\n added to a set/replace request, the request\n will fail if the data has been modified since\n the CAS was retrieved for the item.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "CAS -\u003e Request -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#addCAS",
        "fct-type": "function",
        "title": "addCAS"
      },
      "index": {
        "description": "Add version tag to request When added to set replace request the request will fail if the data has been modified since the CAS was retrieved for the item",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "addCAS",
        "normalized": "CAS-\u003eRequest-\u003eRequest",
        "package": "starling",
        "partial": "CAS",
        "signature": "CAS-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:addOpaque",
      "description": {
        "fct-descr": "\u003cp\u003eAdd an opaque marker to a request.\n This is returned unchanged in the corresponding\n response.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Opaque -\u003e Request -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#addOpaque",
        "fct-type": "function",
        "title": "addOpaque"
      },
      "index": {
        "description": "Add an opaque marker to request This is returned unchanged in the corresponding response",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "addOpaque",
        "normalized": "Opaque-\u003eRequest-\u003eRequest",
        "package": "starling",
        "partial": "Opaque",
        "signature": "Opaque-\u003eRequest-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppends the value to the value in the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Value -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Appends the value to the value in the cache",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "append",
        "normalized": "Key-\u003eValue-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:decrement",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key-\u003e Word64-\u003e Word64-\u003e Request",
        "fct-type": "function",
        "title": "decrement"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "decrement",
        "normalized": "Key-\u003eWord-\u003eWord-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eWord-\u003eWord-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a cache entry\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete cache entry",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "delete",
        "normalized": "Key-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:deserialize",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Get a",
        "fct-source": "src/Network-Starling-Core.html#deserialize",
        "fct-type": "method",
        "title": "deserialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "deserialize",
        "normalized": "",
        "package": "starling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eFlush the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request",
        "fct-source": "src/Network-Starling-Core.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Flush the cache",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "flush",
        "normalized": "",
        "package": "starling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eGet a value from cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Get value from cache",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "get",
        "normalized": "Key-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:getResponse",
      "description": {
        "fct-descr": "\u003cp\u003ePulls a reponse to an operation\n off of a handle.\n May throw a \u003ccode\u003e\u003ca\u003eStarlingReadError\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Handle -\u003e IO Response",
        "fct-source": "src/Network-Starling-Core.html#getResponse",
        "fct-type": "function",
        "title": "getResponse"
      },
      "index": {
        "description": "Pulls reponse to an operation off of handle May throw StarlingReadError",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "getResponse",
        "normalized": "Handle-\u003eIO Response",
        "package": "starling",
        "partial": "Response",
        "signature": "Handle-\u003eIO Response"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:increment",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key-\u003e Word64-\u003e Word64-\u003e Request",
        "fct-type": "function",
        "title": "increment"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "increment",
        "normalized": "Key-\u003eWord-\u003eWord-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eWord-\u003eWord-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:listAuthMechanisms",
      "description": {
        "fct-descr": "\u003cp\u003eList SASL authenitication mechanisms, space delimeted\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request",
        "fct-source": "src/Network-Starling-Core.html#listAuthMechanisms",
        "fct-type": "function",
        "title": "listAuthMechanisms"
      },
      "index": {
        "description": "List SASL authenitication mechanisms space delimeted",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "listAuthMechanisms",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Mechanisms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:noop",
      "description": {
        "fct-descr": "\u003cp\u003eKeepalive. Flushes responses for quiet operations.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request",
        "fct-source": "src/Network-Starling-Core.html#noop",
        "fct-type": "function",
        "title": "noop"
      },
      "index": {
        "description": "Keepalive Flushes responses for quiet operations",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "noop",
        "normalized": "",
        "package": "starling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:nullCAS",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "CAS",
        "fct-source": "src/Network-Starling-Core.html#nullCAS",
        "fct-type": "function",
        "title": "nullCAS"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "nullCAS",
        "normalized": "",
        "package": "starling",
        "partial": "CAS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:prepend",
      "description": {
        "fct-descr": "\u003cp\u003ePrepends the value to the value in the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Value -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#prepend",
        "fct-type": "function",
        "title": "prepend"
      },
      "index": {
        "description": "Prepends the value to the value in the cache",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "prepend",
        "normalized": "Key-\u003eValue-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:quit",
      "description": {
        "fct-descr": "\u003cp\u003eQuit\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request",
        "fct-source": "src/Network-Starling-Core.html#quit",
        "fct-type": "function",
        "title": "quit"
      },
      "index": {
        "description": "Quit",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "quit",
        "normalized": "",
        "package": "starling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces a value in cahce. Fails if\n not present.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Value -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replaces value in cahce Fails if not present",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "replace",
        "normalized": "Key-\u003eValue-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:requestOp",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the operation the request will perform\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request -\u003e OpCode",
        "fct-source": "src/Network-Starling-Core.html#requestOp",
        "fct-type": "function",
        "title": "requestOp"
      },
      "index": {
        "description": "Returns the operation the request will perform",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "requestOp",
        "normalized": "Request-\u003eOpCode",
        "package": "starling",
        "partial": "Op",
        "signature": "Request-\u003eOpCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsBody",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsBody"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsBody",
        "normalized": "",
        "package": "starling",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsCas",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "CAS",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsCas"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsCas",
        "normalized": "",
        "package": "starling",
        "partial": "Cas",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsDataType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "DataType",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsDataType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsDataType",
        "normalized": "",
        "package": "starling",
        "partial": "Data Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsExtras",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsExtras"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsExtras",
        "normalized": "",
        "package": "starling",
        "partial": "Extras",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsKey",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsKey",
        "normalized": "",
        "package": "starling",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsMagic",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "RsMagic",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsMagic"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsMagic",
        "normalized": "",
        "package": "starling",
        "partial": "Magic",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsOp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "OpCode",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsOp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsOp",
        "normalized": "",
        "package": "starling",
        "partial": "Op",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsOpaque",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Opaque",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsOpaque"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsOpaque",
        "normalized": "",
        "package": "starling",
        "partial": "Opaque",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:rsStatus",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "ResponseStatus",
        "fct-source": "src/Network-Starling-Core.html#Response",
        "fct-type": "function",
        "title": "rsStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "rsStatus",
        "normalized": "",
        "package": "starling",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:serialize",
      "description": {
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "a -\u003e Builder",
        "fct-source": "src/Network-Starling-Core.html#serialize",
        "fct-type": "method",
        "title": "serialize"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "serialize",
        "normalized": "a-\u003eBuilder",
        "package": "starling",
        "partial": "",
        "signature": "a-\u003eBuilder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet a value in the cache.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Key -\u003e Value -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set value in the cache",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "set",
        "normalized": "Key-\u003eValue-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Key-\u003eValue-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:startAuth",
      "description": {
        "fct-descr": "\u003cp\u003eBegin SASL authentication. May return the further auth\n required error if further steps are needed.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "AuthMechanism -\u003e AuthData -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#startAuth",
        "fct-type": "function",
        "title": "startAuth"
      },
      "index": {
        "description": "Begin SASL authentication May return the further auth required error if further steps are needed",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "startAuth",
        "normalized": "AuthMechanism-\u003eAuthData-\u003eRequest",
        "package": "starling",
        "partial": "Auth",
        "signature": "AuthMechanism-\u003eAuthData-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:stat",
      "description": {
        "fct-descr": "\u003cp\u003eFetch statistics about the cahce. Returns a sequence\n of responses.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Maybe Key -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#stat",
        "fct-type": "function",
        "title": "stat"
      },
      "index": {
        "description": "Fetch statistics about the cahce Returns sequence of responses",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "stat",
        "normalized": "Maybe Key-\u003eRequest",
        "package": "starling",
        "partial": "",
        "signature": "Maybe Key-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:stepAuth",
      "description": {
        "fct-descr": "\u003cp\u003eContinue SASL authentication. May return the further\n aut required error if further steps are needed.\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "AuthMechanism -\u003e AuthData -\u003e Request",
        "fct-source": "src/Network-Starling-Core.html#stepAuth",
        "fct-type": "function",
        "title": "stepAuth"
      },
      "index": {
        "description": "Continue SASL authentication May return the further aut required error if further steps are needed",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "stepAuth",
        "normalized": "AuthMechanism-\u003eAuthData-\u003eRequest",
        "package": "starling",
        "partial": "Auth",
        "signature": "AuthMechanism-\u003eAuthData-\u003eRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling-Core.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the server version\n\u003c/p\u003e",
        "fct-module": "Network.Starling.Core",
        "fct-package": "starling",
        "fct-signature": "Request",
        "fct-source": "src/Network-Starling-Core.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Returns the server version",
        "hierarchy": "Network Starling Core",
        "module": "Network.Starling.Core",
        "name": "version",
        "normalized": "",
        "package": "starling",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA haskell implementation of the memcahed\nprotocol.\n\u003c/p\u003e\u003cp\u003eThis implements the new binary protocol, so\nit only works with memcached version 1.3 and newer.\n\u003c/p\u003e\u003cp\u003eExample of usage, using the network package to obain\na handle, and the OverloadedStrings language extension:\n\u003c/p\u003e\u003cpre\u003e h \u003c- connectTo \"filename\" $ UnixSocket \"filename\"\n hSetBuffering h NoBuffering\n con \u003c- open h\n\u003c/pre\u003e\u003cpre\u003e set con \"hello\" \"world\"\n get con \"hello\"\n\u003c/pre\u003e\u003cp\u003eIn the above example we connect to a unix socket in the file \"filename\",\nset the key \"hello\" to the value \"world\" and then retrieve the value.\n\u003c/p\u003e\u003cp\u003eOperations are thread safe - multiple threads of execution may make\nconcurrent requests on the memcahced connection.\n\u003c/p\u003e\u003cp\u003eOperations are blocking, but do not block other concurrent threads\nfrom placing requests on the connection.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "module",
        "fct-source": "src/Network-Starling.html",
        "fct-type": "module",
        "title": "Starling"
      },
      "index": {
        "description": "haskell implementation of the memcahed protocol This implements the new binary protocol so it only works with memcached version and newer Example of usage using the network package to obain handle and the OverloadedStrings language extension connectTo filename UnixSocket filename hSetBuffering NoBuffering con open set con hello world get con hello In the above example we connect to unix socket in the file filename set the key hello to the value world and then retrieve the value Operations are thread safe multiple threads of execution may make concurrent requests on the memcahced connection Operations are blocking but do not block other concurrent threads from placing requests on the connection",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "Starling",
        "normalized": "",
        "package": "starling",
        "partial": "Starling",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthCallback",
      "description": {
        "fct-descr": "\u003cp\u003eSome authentications require mutliple back and forths between the\n client and the server. This type encapsulates that.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling.html#AuthCallback",
        "fct-type": "data",
        "title": "AuthCallback"
      },
      "index": {
        "description": "Some authentications require mutliple back and forths between the client and the server This type encapsulates that",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "AuthCallback",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthData",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#AuthData",
        "fct-type": "type",
        "title": "AuthData"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "AuthData",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:AuthMechanism",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#AuthMechanism",
        "fct-type": "type",
        "title": "AuthMechanism"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "AuthMechanism",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Mechanism",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003eFor thread safety of operations, we perform\n all requests on a wrapper around a handle.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Connection.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "For thread safety of operations we perform all requests on wrapper around handle",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "Connection",
        "normalized": "",
        "package": "starling",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Key",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "Key",
        "normalized": "",
        "package": "starling",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:ResponseStatus",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "data",
        "title": "ResponseStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "ResponseStatus",
        "normalized": "",
        "package": "starling",
        "partial": "Response Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:StarlingError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error consists of the error code returned by the\n server and a human-readble error string returned by the server.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "data",
        "fct-source": "src/Network-Starling.html#StarlingError",
        "fct-type": "data",
        "title": "StarlingError"
      },
      "index": {
        "description": "An error consists of the error code returned by the server and human-readble error string returned by the server",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "StarlingError",
        "normalized": "",
        "package": "starling",
        "partial": "Starling Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#t:Value",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "type",
        "fct-source": "src/Network-Starling-Core.html#Value",
        "fct-type": "type",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "Value",
        "normalized": "",
        "package": "starling",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:AuthCallback",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "AuthCallback (ByteString -\u003e m (AuthData, Maybe (AuthCallback m)))",
        "fct-source": "src/Network-Starling.html#AuthCallback",
        "fct-type": "function",
        "title": "AuthCallback"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "AuthCallback",
        "normalized": "AuthCallback(ByteString-\u003ea(AuthData,Maybe(AuthCallback a)))",
        "package": "starling",
        "partial": "Auth Callback",
        "signature": "AuthCallback(ByteString-\u003em(AuthData,Maybe(AuthCallback m)))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:AuthRequired",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "AuthRequired",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "AuthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "AuthRequired",
        "normalized": "",
        "package": "starling",
        "partial": "Auth Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:FurtherAuthRequired",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "FurtherAuthRequired",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "FurtherAuthRequired"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "FurtherAuthRequired",
        "normalized": "",
        "package": "starling",
        "partial": "Further Auth Required",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:IncrDecrOnNonNumeric",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "IncrDecrOnNonNumeric",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "IncrDecrOnNonNumeric"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "IncrDecrOnNonNumeric",
        "normalized": "",
        "package": "starling",
        "partial": "Incr Decr On Non Numeric",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:InvalidArguments",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "InvalidArguments",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "InvalidArguments"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "InvalidArguments",
        "normalized": "",
        "package": "starling",
        "partial": "Invalid Arguments",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:ItemNotStored",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "ItemNotStored",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "ItemNotStored"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "ItemNotStored",
        "normalized": "",
        "package": "starling",
        "partial": "Item Not Stored",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:KeyExists",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "KeyExists",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "KeyExists"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "KeyExists",
        "normalized": "",
        "package": "starling",
        "partial": "Key Exists",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:KeyNotFound",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "KeyNotFound",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "KeyNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "KeyNotFound",
        "normalized": "",
        "package": "starling",
        "partial": "Key Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:NoError",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "NoError",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "NoError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "NoError",
        "normalized": "",
        "package": "starling",
        "partial": "No Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:OutOfMemory",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "OutOfMemory",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "OutOfMemory"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "OutOfMemory",
        "normalized": "",
        "package": "starling",
        "partial": "Out Of Memory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:StarlingError",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "StarlingError ResponseStatus ByteString",
        "fct-source": "src/Network-Starling.html#StarlingError",
        "fct-type": "function",
        "title": "StarlingError"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "StarlingError",
        "normalized": "",
        "package": "starling",
        "partial": "Starling Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:UnknownCommand",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "UnknownCommand",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "UnknownCommand"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "UnknownCommand",
        "normalized": "",
        "package": "starling",
        "partial": "Unknown Command",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:ValueTooLarge",
      "description": {
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "ValueTooLarge",
        "fct-source": "src/Network-Starling-Core.html#ResponseStatus",
        "fct-type": "function",
        "title": "ValueTooLarge"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "ValueTooLarge",
        "normalized": "",
        "package": "starling",
        "partial": "Value Too Large",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:add",
      "description": {
        "fct-descr": "\u003cp\u003eSet a vlue in the cache. Fails if a value is already defined\n for the indicated key.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
        "fct-source": "src/Network-Starling.html#add",
        "fct-type": "function",
        "title": "add"
      },
      "index": {
        "description": "Set vlue in the cache Fails if value is already defined for the indicated key",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "add",
        "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003eValue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:auth",
      "description": {
        "fct-descr": "\u003cp\u003eSASL authenitcation. Multi-step authentication is supported by un-folding\n the passed-in AuthCallback. Returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if authentication is supported\n and complete. If the supplied callback completes while there are still steps\n remaining we throw FurtherAuthRequired.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e AuthMechanism -\u003e AuthData -\u003e Maybe (AuthCallback m) -\u003e m Bool",
        "fct-source": "src/Network-Starling.html#auth",
        "fct-type": "function",
        "title": "auth"
      },
      "index": {
        "description": "SASL authenitcation Multi-step authentication is supported by un-folding the passed-in AuthCallback Returns True if authentication is supported and complete If the supplied callback completes while there are still steps remaining we throw FurtherAuthRequired",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "auth",
        "normalized": "Connection-\u003eAuthMechanism-\u003eAuthData-\u003eMaybe(AuthCallback a)-\u003ea Bool",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eAuthMechanism-\u003eAuthData-\u003eMaybe(AuthCallback m)-\u003em Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:close",
      "description": {
        "fct-descr": "\u003cp\u003eShut down the connection.\n Non-blocking.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Network-Starling-Connection.html#close",
        "fct-type": "function",
        "title": "close"
      },
      "index": {
        "description": "Shut down the connection Non-blocking",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "close",
        "normalized": "Connection-\u003eIO()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:decrement",
      "description": {
        "fct-descr": "\u003cp\u003eDecrement a value in the cache. The first \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e argument is the\n amount by which to decrement and the second is the intial value to\n use if the key does not yet have a value.\n The return value is the updated value in the cache.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e Word64 -\u003e Word64 -\u003e m Word64",
        "fct-source": "src/Network-Starling.html#decrement",
        "fct-type": "function",
        "title": "decrement"
      },
      "index": {
        "description": "Decrement value in the cache The first Word64 argument is the amount by which to decrement and the second is the intial value to use if the key does not yet have value The return value is the updated value in the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "decrement",
        "normalized": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003ea Word",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete an entry in the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e m ()",
        "fct-source": "src/Network-Starling.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete an entry in the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "delete",
        "normalized": "Connection-\u003eKey-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all entries in the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e m ()",
        "fct-source": "src/Network-Starling.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Delete all entries in the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "flush",
        "normalized": "Connection-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eRetrive a value from the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e m ByteString",
        "fct-source": "src/Network-Starling.html#get",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Retrive value from the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "get",
        "normalized": "Connection-\u003eKey-\u003ea ByteString",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:increment",
      "description": {
        "fct-descr": "\u003cp\u003eIncrement a value in the cache. The first \u003ccode\u003e\u003ca\u003eWord64\u003c/a\u003e\u003c/code\u003e argument is the\n amount by which to increment and the second is the intial value to\n use if the key does not yet have a value.\n The return value is the updated value in the cache.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e Word64 -\u003e Word64 -\u003e m Word64",
        "fct-source": "src/Network-Starling.html#increment",
        "fct-type": "function",
        "title": "increment"
      },
      "index": {
        "description": "Increment value in the cache The first Word64 argument is the amount by which to increment and the second is the intial value to use if the key does not yet have value The return value is the updated value in the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "increment",
        "normalized": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003ea Word",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003eWord-\u003eWord-\u003em Word"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:listAuthMechanisms",
      "description": {
        "fct-descr": "\u003cp\u003eList allowed SASL mechanisms. The server must support SASL\n authentication.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e m [AuthMechanism]",
        "fct-source": "src/Network-Starling.html#listAuthMechanisms",
        "fct-type": "function",
        "title": "listAuthMechanisms"
      },
      "index": {
        "description": "List allowed SASL mechanisms The server must support SASL authentication",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "listAuthMechanisms",
        "normalized": "Connection-\u003ea[AuthMechanism]",
        "package": "starling",
        "partial": "Auth Mechanisms",
        "signature": "Connection-\u003em[AuthMechanism]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:open",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a connection.\n Please don't use the handle after opening a\n connection with it.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Handle -\u003e IO Connection",
        "fct-source": "src/Network-Starling-Connection.html#open",
        "fct-type": "function",
        "title": "open"
      },
      "index": {
        "description": "Create connection Please don use the handle after opening connection with it",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "open",
        "normalized": "Handle-\u003eIO Connection",
        "package": "starling",
        "partial": "",
        "signature": "Handle-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eSet a value in the cache. Fails if a value is not already defined\n for the indicated key.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
        "fct-source": "src/Network-Starling.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Set value in the cache Fails if value is not already defined for the indicated key",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "replace",
        "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003eValue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:set",
      "description": {
        "fct-descr": "\u003cp\u003eSet a value in the cache\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e Value -\u003e m ()",
        "fct-source": "src/Network-Starling.html#set",
        "fct-type": "function",
        "title": "set"
      },
      "index": {
        "description": "Set value in the cache",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "set",
        "normalized": "Connection-\u003eKey-\u003eValue-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003eValue-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:stats",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a list of stats about the server in key,value pairs\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e m [(ByteString, ByteString)]",
        "fct-source": "src/Network-Starling.html#stats",
        "fct-type": "function",
        "title": "stats"
      },
      "index": {
        "description": "Returns list of stats about the server in key value pairs",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "stats",
        "normalized": "Connection-\u003ea[(ByteString,ByteString)]",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003em[(ByteString,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eUpdate a value in the cache. This operation requires two round trips.\n This operation can fail if the key is not present in the cache, or if\n the value changes in the cache between the two calls.\n So watch out! Even if the value exists the operation might\n not go through in the face of concurrent access.\n\u003c/p\u003e\u003cp\u003eTesting indicates that if we fail because we could not gaurantee\n atomicity the failure code will be \u003ccode\u003e\u003ca\u003eKeyExists\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e Key -\u003e (Value -\u003e m (Maybe Value)) -\u003e m ()",
        "fct-source": "src/Network-Starling.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "Update value in the cache This operation requires two round trips This operation can fail if the key is not present in the cache or if the value changes in the cache between the two calls So watch out Even if the value exists the operation might not go through in the face of concurrent access Testing indicates that if we fail because we could not gaurantee atomicity the failure code will be KeyExists",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "update",
        "normalized": "Connection-\u003eKey-\u003e(Value-\u003ea(Maybe Value))-\u003ea()",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003eKey-\u003e(Value-\u003em(Maybe Value))-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/starling/docs/Network-Starling.html#v:version",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the version of the server\n\u003c/p\u003e",
        "fct-module": "Network.Starling",
        "fct-package": "starling",
        "fct-signature": "Connection -\u003e m ByteString",
        "fct-source": "src/Network-Starling.html#version",
        "fct-type": "function",
        "title": "version"
      },
      "index": {
        "description": "Returns the version of the server",
        "hierarchy": "Network Starling",
        "module": "Network.Starling",
        "name": "version",
        "normalized": "Connection-\u003ea ByteString",
        "package": "starling",
        "partial": "",
        "signature": "Connection-\u003em ByteString"
      }
    }
  }
]