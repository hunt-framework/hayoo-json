[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the client functionality of XML-RPC.\n The XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple client application:\n\u003c/p\u003e\u003cpre\u003e import Network.XmlRpc.Client\n\n server = \"http://localhost/~bjorn/cgi-bin/simple_server\"\n\n add :: String -\u003e Int -\u003e Int -\u003e IO Int\n add url = remote url \"examples.add\"\n\n main = do\n        let x = 4\n            y = 7\n        z \u003c- add server x y\n        putStrLn (show x ++ \" + \" ++ show y ++ \" = \" ++ show z)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-Client.html",
        "fct-type": "module",
        "title": "Client"
      },
      "index": {
        "description": "This module contains the client functionality of XML-RPC The XML-RPC specifcation is available at http www.xmlrpc.com spec simple client application import Network.XmlRpc.Client server http localhost bjorn cgi-bin simple server add String Int Int IO Int add url remote url examples.add main do let add server putStrLn show show show",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "Client",
        "normalized": "",
        "package": "haxr",
        "partial": "Client",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#t:Remote",
      "description": {
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "class",
        "fct-source": "src/Network-XmlRpc-Client.html#Remote",
        "fct-type": "class",
        "title": "Remote"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "Remote",
        "normalized": "",
        "package": "haxr",
        "partial": "Remote",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:call",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level method calling function. Use this function if\n   you need to do custom conversions between XML-RPC types and\n   Haskell types.\n   Throws an exception if the response was a fault.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e String-\u003e [Value]-\u003e Err IO Value",
        "fct-type": "function",
        "title": "call"
      },
      "index": {
        "description": "Low-level method calling function Use this function if you need to do custom conversions between XML-RPC types and Haskell types Throws an exception if the response was fault",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "call",
        "normalized": "String-\u003eString-\u003e[Value]-\u003eErr IO Value",
        "package": "haxr",
        "partial": "",
        "signature": "String-\u003eString-\u003e[Value]-\u003eErr IO Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:callWithHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eLow-level method calling function. Use this function if\n   you need to do custom conversions between XML-RPC types and\n   Haskell types. Takes a list of extra headers to add to the\n   HTTP request.\n   Throws an exception if the response was a fault.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e String-\u003e [Header]-\u003e [Value]-\u003e Err IO Value",
        "fct-type": "function",
        "title": "callWithHeaders"
      },
      "index": {
        "description": "Low-level method calling function Use this function if you need to do custom conversions between XML-RPC types and Haskell types Takes list of extra headers to add to the HTTP request Throws an exception if the response was fault",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "callWithHeaders",
        "normalized": "String-\u003eString-\u003e[Header]-\u003e[Value]-\u003eErr IO Value",
        "package": "haxr",
        "partial": "With Headers",
        "signature": "String-\u003eString-\u003e[Header]-\u003e[Value]-\u003eErr IO Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:remote",
      "description": {
        "fct-descr": "\u003cp\u003eCall a remote method.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e String-\u003e a",
        "fct-type": "function",
        "title": "remote"
      },
      "index": {
        "description": "Call remote method",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "remote",
        "normalized": "String-\u003eString-\u003ea",
        "package": "haxr",
        "partial": "",
        "signature": "String-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:remoteWithHeaders",
      "description": {
        "fct-descr": "\u003cp\u003eCall a remote method. Takes a list of extra headers to add to the HTTP\n   request.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Client",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e String-\u003e [Header]-\u003e a",
        "fct-type": "function",
        "title": "remoteWithHeaders"
      },
      "index": {
        "description": "Call remote method Takes list of extra headers to add to the HTTP request",
        "hierarchy": "Network XmlRpc Client",
        "module": "Network.XmlRpc.Client",
        "name": "remoteWithHeaders",
        "normalized": "String-\u003eString-\u003e[Header]-\u003ea",
        "package": "haxr",
        "partial": "With Headers",
        "signature": "String-\u003eString-\u003e[Header]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html",
        "fct-type": "module",
        "title": "DTD_XMLRPC"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "DTD_XMLRPC",
        "normalized": "",
        "package": "haxr",
        "partial": "DTD XMLRPC",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:ADouble",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#ADouble",
        "fct-type": "newtype",
        "title": "ADouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "ADouble",
        "normalized": "",
        "package": "haxr",
        "partial": "ADouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:AInt",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#AInt",
        "fct-type": "newtype",
        "title": "AInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "AInt",
        "normalized": "",
        "package": "haxr",
        "partial": "AInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:AString",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#AString",
        "fct-type": "newtype",
        "title": "AString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "AString",
        "normalized": "",
        "package": "haxr",
        "partial": "AString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Array",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Array",
        "fct-type": "newtype",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Array",
        "normalized": "",
        "package": "haxr",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Base64",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Base64",
        "fct-type": "newtype",
        "title": "Base64"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Base64",
        "normalized": "",
        "package": "haxr",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Boolean",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Boolean",
        "fct-type": "newtype",
        "title": "Boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Boolean",
        "normalized": "",
        "package": "haxr",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Data",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Data",
        "fct-type": "newtype",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Data",
        "normalized": "",
        "package": "haxr",
        "partial": "Data",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:DateTime_iso8601",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#DateTime_iso8601",
        "fct-type": "newtype",
        "title": "DateTime_iso8601"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "DateTime_iso8601",
        "normalized": "",
        "package": "haxr",
        "partial": "Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Fault",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Fault",
        "fct-type": "newtype",
        "title": "Fault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Fault",
        "normalized": "",
        "package": "haxr",
        "partial": "Fault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:I4",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#I4",
        "fct-type": "newtype",
        "title": "I4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "I4",
        "normalized": "",
        "package": "haxr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Member",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Member",
        "fct-type": "data",
        "title": "Member"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Member",
        "normalized": "",
        "package": "haxr",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodCall",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodCall",
        "fct-type": "data",
        "title": "MethodCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodCall",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodName",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodName",
        "fct-type": "newtype",
        "title": "MethodName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodName",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodResponse",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
        "fct-type": "data",
        "title": "MethodResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodResponse",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Name",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Name",
        "fct-type": "newtype",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Name",
        "normalized": "",
        "package": "haxr",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Param",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Param",
        "fct-type": "newtype",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Param",
        "normalized": "",
        "package": "haxr",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Params",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Params",
        "fct-type": "newtype",
        "title": "Params"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Params",
        "normalized": "",
        "package": "haxr",
        "partial": "Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Struct",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Struct",
        "fct-type": "newtype",
        "title": "Struct"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Struct",
        "normalized": "",
        "package": "haxr",
        "partial": "Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Value",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "newtype",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value",
        "fct-type": "newtype",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value",
        "normalized": "",
        "package": "haxr",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Value_",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "data",
        "title": "Value_"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_",
        "normalized": "",
        "package": "haxr",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:ADouble",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "ADouble String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#ADouble",
        "fct-type": "function",
        "title": "ADouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "ADouble",
        "normalized": "",
        "package": "haxr",
        "partial": "ADouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:AInt",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "AInt String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#AInt",
        "fct-type": "function",
        "title": "AInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "AInt",
        "normalized": "",
        "package": "haxr",
        "partial": "AInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:AString",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "AString String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#AString",
        "fct-type": "function",
        "title": "AString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "AString",
        "normalized": "",
        "package": "haxr",
        "partial": "AString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Array",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Array Data",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Array",
        "fct-type": "function",
        "title": "Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Array",
        "normalized": "",
        "package": "haxr",
        "partial": "Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Base64",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Base64 String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Base64",
        "fct-type": "function",
        "title": "Base64"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Base64",
        "normalized": "",
        "package": "haxr",
        "partial": "Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Boolean",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Boolean String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Boolean",
        "fct-type": "function",
        "title": "Boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Boolean",
        "normalized": "",
        "package": "haxr",
        "partial": "Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Data",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Data [Value]",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Data",
        "fct-type": "function",
        "title": "Data"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Data",
        "normalized": "Data[Value]",
        "package": "haxr",
        "partial": "Data",
        "signature": "Data[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:DateTime_iso8601",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "DateTime_iso8601 String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#DateTime_iso8601",
        "fct-type": "function",
        "title": "DateTime_iso8601"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "DateTime_iso8601",
        "normalized": "",
        "package": "haxr",
        "partial": "Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Fault",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Fault Value",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Fault",
        "fct-type": "function",
        "title": "Fault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Fault",
        "normalized": "",
        "package": "haxr",
        "partial": "Fault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:I4",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "I4 String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#I4",
        "fct-type": "function",
        "title": "I4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "I4",
        "normalized": "",
        "package": "haxr",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Member",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Member Name Value",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Member",
        "fct-type": "function",
        "title": "Member"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Member",
        "normalized": "",
        "package": "haxr",
        "partial": "Member",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodCall",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "MethodCall MethodName (Maybe Params)",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodCall",
        "fct-type": "function",
        "title": "MethodCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodCall",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodName",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "MethodName String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodName",
        "fct-type": "function",
        "title": "MethodName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodName",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodResponseFault",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "MethodResponseFault Fault",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
        "fct-type": "function",
        "title": "MethodResponseFault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodResponseFault",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Response Fault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodResponseParams",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "MethodResponseParams Params",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
        "fct-type": "function",
        "title": "MethodResponseParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "MethodResponseParams",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Response Params",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Name",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Name String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Name",
        "fct-type": "function",
        "title": "Name"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Name",
        "normalized": "",
        "package": "haxr",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Param",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Param Value",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Param",
        "fct-type": "function",
        "title": "Param"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Param",
        "normalized": "",
        "package": "haxr",
        "partial": "Param",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Params",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Params [Param]",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Params",
        "fct-type": "function",
        "title": "Params"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Params",
        "normalized": "Params[Param]",
        "package": "haxr",
        "partial": "Params",
        "signature": "Params[Param]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Struct",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Struct [Member]",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Struct",
        "fct-type": "function",
        "title": "Struct"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Struct",
        "normalized": "Struct[Member]",
        "package": "haxr",
        "partial": "Struct",
        "signature": "Struct[Member]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value [Value_]",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value",
        "fct-type": "function",
        "title": "Value"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value",
        "normalized": "Value[Value_]",
        "package": "haxr",
        "partial": "Value",
        "signature": "Value[Value_]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_ADouble",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_ADouble ADouble",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_ADouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_ADouble",
        "normalized": "",
        "package": "haxr",
        "partial": "Value ADouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_AInt",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_AInt AInt",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_AInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_AInt",
        "normalized": "",
        "package": "haxr",
        "partial": "Value AInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_AString",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_AString AString",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_AString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_AString",
        "normalized": "",
        "package": "haxr",
        "partial": "Value AString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Array",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_Array Array",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_Array"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_Array",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Array",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Base64",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_Base64 Base64",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_Base64"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_Base64",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Boolean",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_Boolean Boolean",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_Boolean"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_Boolean",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Boolean",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_DateTime_iso8601",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_DateTime_iso8601 DateTime_iso8601",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_DateTime_iso8601"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_DateTime_iso8601",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_I4",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_I4 I4",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_I4"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_I4",
        "normalized": "",
        "package": "haxr",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Str",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_Str String",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_Str"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_Str",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Str",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Struct",
      "description": {
        "fct-module": "Network.XmlRpc.DTD_XMLRPC",
        "fct-package": "haxr",
        "fct-signature": "Value_Struct Struct",
        "fct-source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
        "fct-type": "function",
        "title": "Value_Struct"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc DTD_XMLRPC",
        "module": "Network.XmlRpc.DTD_XMLRPC",
        "name": "Value_Struct",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Struct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the core functionality of the XML-RPC library.\n Most applications should not need to use this module. Client\n applications should use \u003ca\u003eNetwork.XmlRpc.Client\u003c/a\u003e and server applications should\n use \u003ca\u003eNetwork.XmlRpc.Server\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-Internals.html",
        "fct-type": "module",
        "title": "Internals"
      },
      "index": {
        "description": "This module contains the core functionality of the XML-RPC library Most applications should not need to use this module Client applications should use Network.XmlRpc.Client and server applications should use Network.XmlRpc.Server The XML-RPC specifcation is available at http www.xmlrpc.com spec",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Internals",
        "normalized": "",
        "package": "haxr",
        "partial": "Internals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Err",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Internals.html#Err",
        "fct-type": "type",
        "title": "Err"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Err",
        "normalized": "",
        "package": "haxr",
        "partial": "Err",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:MethodCall",
      "description": {
        "fct-descr": "\u003cp\u003eAn XML-RPC method call. Consists of a method name and a list of\n   parameters.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-Internals.html#MethodCall",
        "fct-type": "data",
        "title": "MethodCall"
      },
      "index": {
        "description": "An XML-RPC method call Consists of method name and list of parameters",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "MethodCall",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Call",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:MethodResponse",
      "description": {
        "fct-descr": "\u003cp\u003eAn XML-RPC response.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-Internals.html#MethodResponse",
        "fct-type": "data",
        "title": "MethodResponse"
      },
      "index": {
        "description": "An XML-RPC response",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "MethodResponse",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Type",
      "description": {
        "fct-descr": "\u003cp\u003eAn XML-RPC value. Use for error messages and introspection.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "data",
        "title": "Type"
      },
      "index": {
        "description": "An XML-RPC value Use for error messages and introspection",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Type",
        "normalized": "",
        "package": "haxr",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Value",
      "description": {
        "fct-descr": "\u003cp\u003eAn XML-RPC value.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "data",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "data",
        "title": "Value"
      },
      "index": {
        "description": "An XML-RPC value",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Value",
        "normalized": "",
        "package": "haxr",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:XmlRpcType",
      "description": {
        "fct-descr": "\u003cp\u003eA class for mapping Haskell types to XML-RPC types.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "class",
        "fct-source": "src/Network-XmlRpc-Internals.html#XmlRpcType",
        "fct-type": "class",
        "title": "XmlRpcType"
      },
      "index": {
        "description": "class for mapping Haskell types to XML-RPC types",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "XmlRpcType",
        "normalized": "",
        "package": "haxr",
        "partial": "Xml Rpc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:Fault",
      "description": {
        "fct-descr": "\u003cp\u003eA fault response\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Fault Int String",
        "fct-source": "src/Network-XmlRpc-Internals.html#MethodResponse",
        "fct-type": "function",
        "title": "Fault"
      },
      "index": {
        "description": "fault response",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Fault",
        "normalized": "",
        "package": "haxr",
        "partial": "Fault",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:MethodCall",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodCall String [Value]",
        "fct-source": "src/Network-XmlRpc-Internals.html#MethodCall",
        "fct-type": "function",
        "title": "MethodCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "MethodCall",
        "normalized": "MethodCall String[Value]",
        "package": "haxr",
        "partial": "Method Call",
        "signature": "MethodCall String[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:Return",
      "description": {
        "fct-descr": "\u003cp\u003eA method response returning a value\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Return Value",
        "fct-source": "src/Network-XmlRpc-Internals.html#MethodResponse",
        "fct-type": "function",
        "title": "Return"
      },
      "index": {
        "description": "method response returning value",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "Return",
        "normalized": "",
        "package": "haxr",
        "partial": "Return",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TArray",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TArray",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TArray"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TArray",
        "normalized": "",
        "package": "haxr",
        "partial": "TArray",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TBase64",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TBase64",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TBase64"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TBase64",
        "normalized": "",
        "package": "haxr",
        "partial": "TBase",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TBool",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TBool",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TBool"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TBool",
        "normalized": "",
        "package": "haxr",
        "partial": "TBool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TDateTime",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TDateTime",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TDateTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TDateTime",
        "normalized": "",
        "package": "haxr",
        "partial": "TDate Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TDouble",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TDouble",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TDouble"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TDouble",
        "normalized": "",
        "package": "haxr",
        "partial": "TDouble",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TInt",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TInt",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TInt"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TInt",
        "normalized": "",
        "package": "haxr",
        "partial": "TInt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TString",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TString",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TString"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TString",
        "normalized": "",
        "package": "haxr",
        "partial": "TString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TStruct",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TStruct",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TStruct"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TStruct",
        "normalized": "",
        "package": "haxr",
        "partial": "TStruct",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TUnknown",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "TUnknown",
        "fct-source": "src/Network-XmlRpc-Internals.html#Type",
        "fct-type": "function",
        "title": "TUnknown"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "TUnknown",
        "normalized": "",
        "package": "haxr",
        "partial": "TUnknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueArray",
      "description": {
        "fct-descr": "\u003cp\u003earray\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueArray [Value]",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueArray"
      },
      "index": {
        "description": "array",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueArray",
        "normalized": "ValueArray[Value]",
        "package": "haxr",
        "partial": "Value Array",
        "signature": "ValueArray[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueBase64",
      "description": {
        "fct-descr": "\u003cp\u003ebase 64.  NOTE that you should provide the raw data; the haxr library takes care of doing the base-64 encoding.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueBase64 ByteString",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueBase64"
      },
      "index": {
        "description": "base NOTE that you should provide the raw data the haxr library takes care of doing the base-64 encoding",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueBase64",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Base",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueBool",
      "description": {
        "fct-descr": "\u003cp\u003ebool\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueBool Bool",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueBool"
      },
      "index": {
        "description": "bool",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueBool",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Bool",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueDateTime",
      "description": {
        "fct-descr": "\u003cp\u003edateTime.iso8601\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueDateTime LocalTime",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueDateTime"
      },
      "index": {
        "description": "dateTime.iso8601",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueDateTime",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Date Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueDouble",
      "description": {
        "fct-descr": "\u003cp\u003edouble\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueDouble Double",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueDouble"
      },
      "index": {
        "description": "double",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueDouble",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Double",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueInt",
      "description": {
        "fct-descr": "\u003cp\u003eint or i4\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueInt Int",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueInt"
      },
      "index": {
        "description": "int or i4",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueInt",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Int",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueString",
      "description": {
        "fct-descr": "\u003cp\u003estring\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueString String",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueString"
      },
      "index": {
        "description": "string",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueString",
        "normalized": "",
        "package": "haxr",
        "partial": "Value String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueStruct",
      "description": {
        "fct-descr": "\u003cp\u003estruct\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueStruct [(String, Value)]",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueStruct"
      },
      "index": {
        "description": "struct",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueStruct",
        "normalized": "ValueStruct[(String,Value)]",
        "package": "haxr",
        "partial": "Value Struct",
        "signature": "ValueStruct[(String,Value)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueUnwrapped",
      "description": {
        "fct-descr": "\u003cp\u003eno inner element\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "ValueUnwrapped String",
        "fct-source": "src/Network-XmlRpc-Internals.html#Value",
        "fct-type": "function",
        "title": "ValueUnwrapped"
      },
      "index": {
        "description": "no inner element",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ValueUnwrapped",
        "normalized": "",
        "package": "haxr",
        "partial": "Value Unwrapped",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to this type. May fail if\n   if there is a type error.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Value -\u003e Err m a",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromValue",
        "fct-type": "method",
        "title": "fromValue"
      },
      "index": {
        "description": "Convert from Value to this type May fail if if there is type error",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromValue",
        "normalized": "Value-\u003eErr a b",
        "package": "haxr",
        "partial": "Value",
        "signature": "Value-\u003eErr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMember",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Member -\u003e Err m (String, Value)",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromXRMember",
        "fct-type": "function",
        "title": "fromXRMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromXRMember",
        "normalized": "Member-\u003eErr a(String,Value)",
        "package": "haxr",
        "partial": "XRMember",
        "signature": "Member-\u003eErr m(String,Value)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMethodCall",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodCall -\u003e Err m MethodCall",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromXRMethodCall",
        "fct-type": "function",
        "title": "fromXRMethodCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromXRMethodCall",
        "normalized": "MethodCall-\u003eErr a MethodCall",
        "package": "haxr",
        "partial": "XRMethod Call",
        "signature": "MethodCall-\u003eErr m MethodCall"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMethodResponse",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodResponse -\u003e Err m MethodResponse",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromXRMethodResponse",
        "fct-type": "function",
        "title": "fromXRMethodResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromXRMethodResponse",
        "normalized": "MethodResponse-\u003eErr a MethodResponse",
        "package": "haxr",
        "partial": "XRMethod Response",
        "signature": "MethodResponse-\u003eErr m MethodResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRParams",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Params -\u003e Err m [Value]",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromXRParams",
        "fct-type": "function",
        "title": "fromXRParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromXRParams",
        "normalized": "Params-\u003eErr a[Value]",
        "package": "haxr",
        "partial": "XRParams",
        "signature": "Params-\u003eErr m[Value]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRValue",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Value -\u003e Err m Value",
        "fct-source": "src/Network-XmlRpc-Internals.html#fromXRValue",
        "fct-type": "function",
        "title": "fromXRValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "fromXRValue",
        "normalized": "Value-\u003eErr a Value",
        "package": "haxr",
        "partial": "XRValue",
        "signature": "Value-\u003eErr m Value"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getField",
      "description": {
        "fct-descr": "\u003cp\u003eGet a field value from a (possibly heterogeneous) struct.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e [(String, Value)]-\u003e Err m a",
        "fct-type": "function",
        "title": "getField"
      },
      "index": {
        "description": "Get field value from possibly heterogeneous struct",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "getField",
        "normalized": "String-\u003e[(String,Value)]-\u003eErr a b",
        "package": "haxr",
        "partial": "Field",
        "signature": "String-\u003e[(String,Value)]-\u003eErr m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getFieldMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eGet a field value from a (possibly heterogeneous) struct.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e [(String, Value)]-\u003e Err m (Maybe a)",
        "fct-type": "function",
        "title": "getFieldMaybe"
      },
      "index": {
        "description": "Get field value from possibly heterogeneous struct",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "getFieldMaybe",
        "normalized": "String-\u003e[(String,Value)]-\u003eErr a(Maybe b)",
        "package": "haxr",
        "partial": "Field Maybe",
        "signature": "String-\u003e[(String,Value)]-\u003eErr m(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getType",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "a -\u003e Type",
        "fct-source": "src/Network-XmlRpc-Internals.html#getType",
        "fct-type": "method",
        "title": "getType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "getType",
        "normalized": "a-\u003eType",
        "package": "haxr",
        "partial": "Type",
        "signature": "a-\u003eType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:handleError",
      "description": {
        "fct-descr": "\u003cp\u003eHandle errors from the error monad.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "(String -\u003e m a) -\u003e Err m a -\u003e m a",
        "fct-source": "src/Network-XmlRpc-Internals.html#handleError",
        "fct-type": "function",
        "title": "handleError"
      },
      "index": {
        "description": "Handle errors from the error monad",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "handleError",
        "normalized": "(String-\u003ea b)-\u003eErr a b-\u003ea b",
        "package": "haxr",
        "partial": "Error",
        "signature": "(String-\u003em a)-\u003eErr m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ioErrorToErr",
      "description": {
        "fct-descr": "\u003cp\u003eCatch IO errors in the error monad.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "IO a -\u003e Err IO a",
        "fct-source": "src/Network-XmlRpc-Internals.html#ioErrorToErr",
        "fct-type": "function",
        "title": "ioErrorToErr"
      },
      "index": {
        "description": "Catch IO errors in the error monad",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "ioErrorToErr",
        "normalized": "IO a-\u003eErr IO a",
        "package": "haxr",
        "partial": "Error To Err",
        "signature": "IO a-\u003eErr IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:maybeToM",
      "description": {
        "fct-descr": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value to a value in any monad\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "String-\u003e Maybe a-\u003e m a",
        "fct-type": "function",
        "title": "maybeToM"
      },
      "index": {
        "description": "Convert Maybe value to value in any monad",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "maybeToM",
        "normalized": "String-\u003eMaybe a-\u003eb a",
        "package": "haxr",
        "partial": "To",
        "signature": "String-\u003eMaybe a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:parseCall",
      "description": {
        "fct-descr": "\u003cp\u003eParses a method call from XML.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e Err m MethodCall",
        "fct-source": "src/Network-XmlRpc-Internals.html#parseCall",
        "fct-type": "function",
        "title": "parseCall"
      },
      "index": {
        "description": "Parses method call from XML",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "parseCall",
        "normalized": "String-\u003eErr a MethodCall",
        "package": "haxr",
        "partial": "Call",
        "signature": "String-\u003eErr m MethodCall"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:parseResponse",
      "description": {
        "fct-descr": "\u003cp\u003eParses a method response from XML.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e Err m MethodResponse",
        "fct-source": "src/Network-XmlRpc-Internals.html#parseResponse",
        "fct-type": "function",
        "title": "parseResponse"
      },
      "index": {
        "description": "Parses method response from XML",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "parseResponse",
        "normalized": "String-\u003eErr a MethodResponse",
        "package": "haxr",
        "partial": "Response",
        "signature": "String-\u003eErr m MethodResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:renderCall",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an XML-representation of a method call.\n FIXME: pretty prints ugly XML\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodCall -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Internals.html#renderCall",
        "fct-type": "function",
        "title": "renderCall"
      },
      "index": {
        "description": "Makes an XML-representation of method call FIXME pretty prints ugly XML",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "renderCall",
        "normalized": "MethodCall-\u003eByteString",
        "package": "haxr",
        "partial": "Call",
        "signature": "MethodCall-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:renderResponse",
      "description": {
        "fct-descr": "\u003cp\u003eMakes an XML-representation of a method response.\n FIXME: pretty prints ugly XML\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodResponse -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Internals.html#renderResponse",
        "fct-type": "function",
        "title": "renderResponse"
      },
      "index": {
        "description": "Makes an XML-representation of method response FIXME pretty prints ugly XML",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "renderResponse",
        "normalized": "MethodResponse-\u003eByteString",
        "package": "haxr",
        "partial": "Response",
        "signature": "MethodResponse-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toValue",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from this type to a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "a -\u003e Value",
        "fct-source": "src/Network-XmlRpc-Internals.html#toValue",
        "fct-type": "method",
        "title": "toValue"
      },
      "index": {
        "description": "Convert from this type to Value",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toValue",
        "normalized": "a-\u003eValue",
        "package": "haxr",
        "partial": "Value",
        "signature": "a-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMember",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "(String, Value) -\u003e Member",
        "fct-source": "src/Network-XmlRpc-Internals.html#toXRMember",
        "fct-type": "function",
        "title": "toXRMember"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toXRMember",
        "normalized": "(String,Value)-\u003eMember",
        "package": "haxr",
        "partial": "XRMember",
        "signature": "(String,Value)-\u003eMember"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMethodCall",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodCall -\u003e MethodCall",
        "fct-source": "src/Network-XmlRpc-Internals.html#toXRMethodCall",
        "fct-type": "function",
        "title": "toXRMethodCall"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toXRMethodCall",
        "normalized": "MethodCall-\u003eMethodCall",
        "package": "haxr",
        "partial": "XRMethod Call",
        "signature": "MethodCall-\u003eMethodCall"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMethodResponse",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "MethodResponse -\u003e MethodResponse",
        "fct-source": "src/Network-XmlRpc-Internals.html#toXRMethodResponse",
        "fct-type": "function",
        "title": "toXRMethodResponse"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toXRMethodResponse",
        "normalized": "MethodResponse-\u003eMethodResponse",
        "package": "haxr",
        "partial": "XRMethod Response",
        "signature": "MethodResponse-\u003eMethodResponse"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRParams",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "[Value] -\u003e Params",
        "fct-source": "src/Network-XmlRpc-Internals.html#toXRParams",
        "fct-type": "function",
        "title": "toXRParams"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toXRParams",
        "normalized": "[Value]-\u003eParams",
        "package": "haxr",
        "partial": "XRParams",
        "signature": "[Value]-\u003eParams"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRValue",
      "description": {
        "fct-module": "Network.XmlRpc.Internals",
        "fct-package": "haxr",
        "fct-signature": "Value -\u003e Value",
        "fct-source": "src/Network-XmlRpc-Internals.html#toXRValue",
        "fct-type": "function",
        "title": "toXRValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Internals",
        "module": "Network.XmlRpc.Internals",
        "name": "toXRValue",
        "normalized": "Value-\u003eValue",
        "package": "haxr",
        "partial": "XRValue",
        "signature": "Value-\u003eValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-Introspect.html",
        "fct-type": "module",
        "title": "Introspect"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "Introspect",
        "normalized": "",
        "package": "haxr",
        "partial": "Introspect",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:Help",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Introspect.html#Help",
        "fct-type": "type",
        "title": "Help"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "Help",
        "normalized": "",
        "package": "haxr",
        "partial": "Help",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:MethodInfo",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Introspect.html#MethodInfo",
        "fct-type": "type",
        "title": "MethodInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "MethodInfo",
        "normalized": "",
        "package": "haxr",
        "partial": "Method Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:Signature",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Introspect.html#Signature",
        "fct-type": "type",
        "title": "Signature"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "Signature",
        "normalized": "",
        "package": "haxr",
        "partial": "Signature",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:listMethods",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e IO [String]",
        "fct-source": "src/Network-XmlRpc-Introspect.html#listMethods",
        "fct-type": "function",
        "title": "listMethods"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "listMethods",
        "normalized": "String-\u003eIO[String]",
        "package": "haxr",
        "partial": "Methods",
        "signature": "String-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodHelp",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e String -\u003e IO String",
        "fct-source": "src/Network-XmlRpc-Introspect.html#methodHelp",
        "fct-type": "function",
        "title": "methodHelp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "methodHelp",
        "normalized": "String-\u003eString-\u003eIO String",
        "package": "haxr",
        "partial": "Help",
        "signature": "String-\u003eString-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodInfo",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e String -\u003e IO MethodInfo",
        "fct-source": "src/Network-XmlRpc-Introspect.html#methodInfo",
        "fct-type": "function",
        "title": "methodInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "methodInfo",
        "normalized": "String-\u003eString-\u003eIO MethodInfo",
        "package": "haxr",
        "partial": "Info",
        "signature": "String-\u003eString-\u003eIO MethodInfo"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodSignature",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e String -\u003e IO [[String]]",
        "fct-source": "src/Network-XmlRpc-Introspect.html#methodSignature",
        "fct-type": "function",
        "title": "methodSignature"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "methodSignature",
        "normalized": "String-\u003eString-\u003eIO[[String]]",
        "package": "haxr",
        "partial": "Signature",
        "signature": "String-\u003eString-\u003eIO[[String]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:signatures",
      "description": {
        "fct-module": "Network.XmlRpc.Introspect",
        "fct-package": "haxr",
        "fct-signature": "String -\u003e String -\u003e IO [Signature]",
        "fct-source": "src/Network-XmlRpc-Introspect.html#signatures",
        "fct-type": "function",
        "title": "signatures"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Introspect",
        "module": "Network.XmlRpc.Introspect",
        "name": "signatures",
        "normalized": "String-\u003eString-\u003eIO[Signature]",
        "package": "haxr",
        "partial": "",
        "signature": "String-\u003eString-\u003eIO[Signature]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a fast non-pretty-printer for turning the internal representation\n   of generic structured XML documents into Lazy ByteStrings.\n   Like in Text.Xml.HaXml.Pretty, there is one pp function for each type in\n   Text.Xml.HaXml.Types, so you can pretty-print as much or as little\n   of the document as you wish.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-Pretty.html",
        "fct-type": "module",
        "title": "Pretty"
      },
      "index": {
        "description": "This is fast non-pretty-printer for turning the internal representation of generic structured XML documents into Lazy ByteStrings Like in Text.Xml.HaXml.Pretty there is one pp function for each type in Text.Xml.HaXml.Types so you can pretty-print as much or as little of the document as you wish",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "Pretty",
        "normalized": "",
        "package": "haxr",
        "partial": "Pretty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:content",
      "description": {
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "Content i -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#content",
        "fct-type": "function",
        "title": "content"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "content",
        "normalized": "Content a-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "Content i-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:cp",
      "description": {
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "CP -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#cp",
        "fct-type": "function",
        "title": "cp"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "cp",
        "normalized": "CP-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "CP-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:doctypedecl",
      "description": {
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "DocTypeDecl -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#doctypedecl",
        "fct-type": "function",
        "title": "doctypedecl"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "doctypedecl",
        "normalized": "DocTypeDecl-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "DocTypeDecl-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:document",
      "description": {
        "fct-descr": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "Document i -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#document",
        "fct-type": "function",
        "title": "document"
      },
      "index": {
        "description": "Render Document to ByteString",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "document",
        "normalized": "Document a-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "Document i-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:element",
      "description": {
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "Element i -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#element",
        "fct-type": "function",
        "title": "element"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "element",
        "normalized": "Element a-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "Element i-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:prolog",
      "description": {
        "fct-module": "Network.XmlRpc.Pretty",
        "fct-package": "haxr",
        "fct-signature": "Prolog -\u003e ByteString",
        "fct-source": "src/Network-XmlRpc-Pretty.html#prolog",
        "fct-type": "function",
        "title": "prolog"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Pretty",
        "module": "Network.XmlRpc.Pretty",
        "name": "prolog",
        "normalized": "Prolog-\u003eByteString",
        "package": "haxr",
        "partial": "",
        "signature": "Prolog-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the server functionality of XML-RPC.\n The XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple CGI-based XML-RPC server application:\n\u003c/p\u003e\u003cpre\u003e import Network.XmlRpc.Server \n\n add :: Int -\u003e Int -\u003e IO Int\n add x y = return (x + y)\n\n main = cgiXmlRpcServer [(\"examples.add\", fun add)]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-Server.html",
        "fct-type": "module",
        "title": "Server"
      },
      "index": {
        "description": "This module contains the server functionality of XML-RPC The XML-RPC specifcation is available at http www.xmlrpc.com spec simple CGI-based XML-RPC server application import Network.XmlRpc.Server add Int Int IO Int add return main cgiXmlRpcServer examples.add fun add",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "Server",
        "normalized": "",
        "package": "haxr",
        "partial": "Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#t:ServerResult",
      "description": {
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Server.html#ServerResult",
        "fct-type": "type",
        "title": "ServerResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "ServerResult",
        "normalized": "",
        "package": "haxr",
        "partial": "Server Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#t:XmlRpcMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of XML-RPC methods on the server.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "type",
        "fct-source": "src/Network-XmlRpc-Server.html#XmlRpcMethod",
        "fct-type": "type",
        "title": "XmlRpcMethod"
      },
      "index": {
        "description": "The type of XML-RPC methods on the server",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "XmlRpcMethod",
        "normalized": "",
        "package": "haxr",
        "partial": "Xml Rpc Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:cgiXmlRpcServer",
      "description": {
        "fct-descr": "\u003cp\u003eA CGI-based XML-RPC server. Reads a request from standard input\n   and writes some HTTP headers (Content-Type and Content-Length),\n   followed by the response to standard output. Supports\n   introspection.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "[(String, XmlRpcMethod)] -\u003e IO ()",
        "fct-source": "src/Network-XmlRpc-Server.html#cgiXmlRpcServer",
        "fct-type": "function",
        "title": "cgiXmlRpcServer"
      },
      "index": {
        "description": "CGI-based XML-RPC server Reads request from standard input and writes some HTTP headers Content-Type and Content-Length followed by the response to standard output Supports introspection",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "cgiXmlRpcServer",
        "normalized": "[(String,XmlRpcMethod)]-\u003eIO()",
        "package": "haxr",
        "partial": "Xml Rpc Server",
        "signature": "[(String,XmlRpcMethod)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:fun",
      "description": {
        "fct-descr": "\u003cp\u003eTurns any function \n   \u003ccode\u003e(XmlRpcType t1, ..., XmlRpcType tn, XmlRpcType r) =\u003e \n   t1 -\u003e ... -\u003e tn -\u003e IO r\u003c/code\u003e\n   into an \u003ccode\u003e\u003ca\u003eXmlRpcMethod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "a -\u003e XmlRpcMethod",
        "fct-source": "src/Network-XmlRpc-Server.html#fun",
        "fct-type": "function",
        "title": "fun"
      },
      "index": {
        "description": "Turns any function XmlRpcType t1 XmlRpcType tn XmlRpcType t1 tn IO into an XmlRpcMethod",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "fun",
        "normalized": "a-\u003eXmlRpcMethod",
        "package": "haxr",
        "partial": "",
        "signature": "a-\u003eXmlRpcMethod"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:handleCall",
      "description": {
        "fct-descr": "\u003cp\u003eReads a method call from a string, uses the supplied method\n   to generate a response and returns that response as a string\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "(MethodCall -\u003e ServerResult) -\u003e String -\u003e IO ByteString",
        "fct-source": "src/Network-XmlRpc-Server.html#handleCall",
        "fct-type": "function",
        "title": "handleCall"
      },
      "index": {
        "description": "Reads method call from string uses the supplied method to generate response and returns that response as string",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "handleCall",
        "normalized": "(MethodCall-\u003eServerResult)-\u003eString-\u003eIO ByteString",
        "package": "haxr",
        "partial": "Call",
        "signature": "(MethodCall-\u003eServerResult)-\u003eString-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:methods",
      "description": {
        "fct-descr": "\u003cp\u003eAn XmlRpcMethod that looks up the method name in a table\n   and uses that method to handle the call.\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.Server",
        "fct-package": "haxr",
        "fct-signature": "[(String, XmlRpcMethod)] -\u003e MethodCall -\u003e ServerResult",
        "fct-source": "src/Network-XmlRpc-Server.html#methods",
        "fct-type": "function",
        "title": "methods"
      },
      "index": {
        "description": "An XmlRpcMethod that looks up the method name in table and uses that method to handle the call",
        "hierarchy": "Network XmlRpc Server",
        "module": "Network.XmlRpc.Server",
        "name": "methods",
        "normalized": "[(String,XmlRpcMethod)]-\u003eMethodCall-\u003eServerResult",
        "package": "haxr",
        "partial": "",
        "signature": "[(String,XmlRpcMethod)]-\u003eMethodCall-\u003eServerResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-THDeriveXmlRpcType.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses Template Haskell to automagically derive instances of \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.THDeriveXmlRpcType",
        "fct-package": "haxr",
        "fct-signature": "module",
        "fct-source": "src/Network-XmlRpc-THDeriveXmlRpcType.html",
        "fct-type": "module",
        "title": "THDeriveXmlRpcType"
      },
      "index": {
        "description": "Uses Template Haskell to automagically derive instances of XmlRpcType",
        "hierarchy": "Network XmlRpc THDeriveXmlRpcType",
        "module": "Network.XmlRpc.THDeriveXmlRpcType",
        "name": "THDeriveXmlRpcType",
        "normalized": "",
        "package": "haxr",
        "partial": "THDerive Xml Rpc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-THDeriveXmlRpcType.html#v:asXmlRpcStruct",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e instance which handles a Haskell record\n   as an XmlRpc struct. Example:\n \u003ccode\u003e\n data Person = Person { name :: String, age :: Int }\n $(asXmlRpcStruct ''Person)\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.THDeriveXmlRpcType",
        "fct-package": "haxr",
        "fct-signature": "Name -\u003e Q [Dec]",
        "fct-source": "src/Network-XmlRpc-THDeriveXmlRpcType.html#asXmlRpcStruct",
        "fct-type": "function",
        "title": "asXmlRpcStruct"
      },
      "index": {
        "description": "Creates an XmlRpcType instance which handles Haskell record as an XmlRpc struct Example data Person Person name String age Int asXmlRpcStruct Person",
        "hierarchy": "Network XmlRpc THDeriveXmlRpcType",
        "module": "Network.XmlRpc.THDeriveXmlRpcType",
        "name": "asXmlRpcStruct",
        "normalized": "Name-\u003eQ[Dec]",
        "package": "haxr",
        "partial": "Xml Rpc Struct",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  }
]