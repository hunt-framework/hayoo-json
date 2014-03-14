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
        "word": "haxr"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the client functionality of XML-RPC.\n The XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple client application:\n\u003c/p\u003e\u003cpre\u003e import Network.XmlRpc.Client\n\n server = \"http://localhost/~bjorn/cgi-bin/simple_server\"\n\n add :: String -\u003e Int -\u003e Int -\u003e IO Int\n add url = remote url \"examples.add\"\n\n main = do\n        let x = 4\n            y = 7\n        z \u003c- add server x y\n        putStrLn (show x ++ \" + \" ++ show y ++ \" = \" ++ show z)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.Client",
          "name": "Client",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Client.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the client functionality of XML-RPC The XML-RPC specifcation is available at http www.xmlrpc.com spec simple client application import Network.XmlRpc.Client server http localhost bjorn cgi-bin simple server add String Int Int IO Int add url remote url examples.add main do let add server putStrLn show show show",
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "Client",
          "package": "haxr",
          "partial": "Client",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Client",
          "name": "Remote",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Client.html#Remote",
          "type": "class"
        },
        "index": {
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "Remote",
          "package": "haxr",
          "partial": "Remote",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#t:Remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level method calling function. Use this function if\n   you need to do custom conversions between XML-RPC types and\n   Haskell types.\n   Throws an exception if the response was a fault.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Client",
          "name": "call",
          "package": "haxr",
          "signature": "String-\u003e String-\u003e [Value]-\u003e Err IO Value",
          "type": "function"
        },
        "index": {
          "description": "Low-level method calling function Use this function if you need to do custom conversions between XML-RPC types and Haskell types Throws an exception if the response was fault",
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "call",
          "normalized": "String-\u003eString-\u003e[Value]-\u003eErr IO Value",
          "package": "haxr",
          "signature": "String-\u003eString-\u003e[Value]-\u003eErr IO Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow-level method calling function. Use this function if\n   you need to do custom conversions between XML-RPC types and\n   Haskell types. Takes a list of extra headers to add to the\n   HTTP request.\n   Throws an exception if the response was a fault.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Client",
          "name": "callWithHeaders",
          "package": "haxr",
          "signature": "String-\u003e String-\u003e [Header]-\u003e [Value]-\u003e Err IO Value",
          "type": "function"
        },
        "index": {
          "description": "Low-level method calling function Use this function if you need to do custom conversions between XML-RPC types and Haskell types Takes list of extra headers to add to the HTTP request Throws an exception if the response was fault",
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "callWithHeaders",
          "normalized": "String-\u003eString-\u003e[Header]-\u003e[Value]-\u003eErr IO Value",
          "package": "haxr",
          "partial": "With Headers",
          "signature": "String-\u003eString-\u003e[Header]-\u003e[Value]-\u003eErr IO Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:callWithHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote method.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Client",
          "name": "remote",
          "package": "haxr",
          "signature": "String-\u003e String-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Call remote method",
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "remote",
          "normalized": "String-\u003eString-\u003ea",
          "package": "haxr",
          "signature": "String-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:remote"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a remote method. Takes a list of extra headers to add to the HTTP\n   request.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Client",
          "name": "remoteWithHeaders",
          "package": "haxr",
          "signature": "String-\u003e String-\u003e [Header]-\u003e a",
          "type": "function"
        },
        "index": {
          "description": "Call remote method Takes list of extra headers to add to the HTTP request",
          "hierarchy": "Network XmlRpc Client",
          "module": "Network.XmlRpc.Client",
          "name": "remoteWithHeaders",
          "normalized": "String-\u003eString-\u003e[Header]-\u003ea",
          "package": "haxr",
          "partial": "With Headers",
          "signature": "String-\u003eString-\u003e[Header]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Client.html#v:remoteWithHeaders"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DTD_XMLRPC",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DTD_XMLRPC",
          "package": "haxr",
          "partial": "DTD XMLRPC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "ADouble",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#ADouble",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "ADouble",
          "package": "haxr",
          "partial": "ADouble",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:ADouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AInt",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#AInt",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AInt",
          "package": "haxr",
          "partial": "AInt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:AInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AString",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#AString",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AString",
          "package": "haxr",
          "partial": "AString",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:AString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Array",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Array",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Array",
          "package": "haxr",
          "partial": "Array",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Base64",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Base64",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Base64",
          "package": "haxr",
          "partial": "Base",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Base64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Boolean",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Boolean",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Boolean",
          "package": "haxr",
          "partial": "Boolean",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Data",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Data",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Data",
          "package": "haxr",
          "partial": "Data",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DateTime_iso8601",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#DateTime_iso8601",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DateTime_iso8601",
          "package": "haxr",
          "partial": "Date Time",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:DateTime_iso8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Fault",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Fault",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Fault",
          "package": "haxr",
          "partial": "Fault",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Fault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I4",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#I4",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I4",
          "package": "haxr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:I4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I8",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#I8",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I8",
          "package": "haxr",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:I8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Member",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Member",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Member",
          "package": "haxr",
          "partial": "Member",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodCall",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodCall",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodCall",
          "package": "haxr",
          "partial": "Method Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodName",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodName",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodName",
          "package": "haxr",
          "partial": "Method Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponse",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponse",
          "package": "haxr",
          "partial": "Method Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:MethodResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Name",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Name",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Name",
          "package": "haxr",
          "partial": "Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Param",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Param",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Param",
          "package": "haxr",
          "partial": "Param",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Params",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Params",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Params",
          "package": "haxr",
          "partial": "Params",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Struct",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Struct",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Struct",
          "package": "haxr",
          "partial": "Struct",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value",
          "package": "haxr",
          "partial": "Value",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_",
          "package": "haxr",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_",
          "package": "haxr",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#t:Value_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "ADouble",
          "package": "haxr",
          "signature": "ADouble String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#ADouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "ADouble",
          "package": "haxr",
          "partial": "ADouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:ADouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AInt",
          "package": "haxr",
          "signature": "AInt String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#AInt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AInt",
          "package": "haxr",
          "partial": "AInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:AInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AString",
          "package": "haxr",
          "signature": "AString String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#AString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "AString",
          "package": "haxr",
          "partial": "AString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:AString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Array",
          "package": "haxr",
          "signature": "Array Data",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Array",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Array",
          "package": "haxr",
          "partial": "Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Base64",
          "package": "haxr",
          "signature": "Base64 String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Base64",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Base64",
          "package": "haxr",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Base64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Boolean",
          "package": "haxr",
          "signature": "Boolean String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Boolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Boolean",
          "package": "haxr",
          "partial": "Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Data",
          "package": "haxr",
          "signature": "Data [Value]",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Data",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Data",
          "normalized": "Data[Value]",
          "package": "haxr",
          "partial": "Data",
          "signature": "Data[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DateTime_iso8601",
          "package": "haxr",
          "signature": "DateTime_iso8601 String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#DateTime_iso8601",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "DateTime_iso8601",
          "package": "haxr",
          "partial": "Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:DateTime_iso8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Fault",
          "package": "haxr",
          "signature": "Fault Value",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Fault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Fault",
          "package": "haxr",
          "partial": "Fault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Fault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I4",
          "package": "haxr",
          "signature": "I4 String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#I4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I4",
          "package": "haxr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:I4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I8",
          "package": "haxr",
          "signature": "I8 String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#I8",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "I8",
          "package": "haxr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:I8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Member",
          "package": "haxr",
          "signature": "Member Name Value",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Member",
          "package": "haxr",
          "partial": "Member",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodCall",
          "package": "haxr",
          "signature": "MethodCall MethodName (Maybe Params)",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodCall",
          "package": "haxr",
          "partial": "Method Call",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodName",
          "package": "haxr",
          "signature": "MethodName String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodName",
          "package": "haxr",
          "partial": "Method Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponseFault",
          "package": "haxr",
          "signature": "MethodResponseFault Fault",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponseFault",
          "package": "haxr",
          "partial": "Method Response Fault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodResponseFault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponseParams",
          "package": "haxr",
          "signature": "MethodResponseParams Params",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#MethodResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "MethodResponseParams",
          "package": "haxr",
          "partial": "Method Response Params",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:MethodResponseParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Name",
          "package": "haxr",
          "signature": "Name String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Name",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Name",
          "package": "haxr",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Param",
          "package": "haxr",
          "signature": "Param Value",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Param",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Param",
          "package": "haxr",
          "partial": "Param",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Params",
          "package": "haxr",
          "signature": "Params [Param]",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Params",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Params",
          "normalized": "Params[Param]",
          "package": "haxr",
          "partial": "Params",
          "signature": "Params[Param]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Struct",
          "package": "haxr",
          "signature": "Struct [Member]",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Struct",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Struct",
          "normalized": "Struct[Member]",
          "package": "haxr",
          "partial": "Struct",
          "signature": "Struct[Member]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value",
          "package": "haxr",
          "signature": "Value [Value_]",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value",
          "normalized": "Value[Value_]",
          "package": "haxr",
          "partial": "Value",
          "signature": "Value[Value_]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_ADouble",
          "package": "haxr",
          "signature": "Value_ADouble ADouble",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_ADouble",
          "package": "haxr",
          "partial": "Value ADouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_ADouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_AInt",
          "package": "haxr",
          "signature": "Value_AInt AInt",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_AInt",
          "package": "haxr",
          "partial": "Value AInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_AInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_AString",
          "package": "haxr",
          "signature": "Value_AString AString",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_AString",
          "package": "haxr",
          "partial": "Value AString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_AString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Array",
          "package": "haxr",
          "signature": "Value_Array Array",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Array",
          "package": "haxr",
          "partial": "Value Array",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Array"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Base64",
          "package": "haxr",
          "signature": "Value_Base64 Base64",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Base64",
          "package": "haxr",
          "partial": "Value Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Base64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Boolean",
          "package": "haxr",
          "signature": "Value_Boolean Boolean",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Boolean",
          "package": "haxr",
          "partial": "Value Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Boolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_DateTime_iso8601",
          "package": "haxr",
          "signature": "Value_DateTime_iso8601 DateTime_iso8601",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_DateTime_iso8601",
          "package": "haxr",
          "partial": "Value Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_DateTime_iso8601"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_I4",
          "package": "haxr",
          "signature": "Value_I4 I4",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_I4",
          "package": "haxr",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_I4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_I8",
          "package": "haxr",
          "signature": "Value_I8 I8",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_I8",
          "package": "haxr",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_I8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Str",
          "package": "haxr",
          "signature": "Value_Str String",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Str",
          "package": "haxr",
          "partial": "Value Str",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Str"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Struct",
          "package": "haxr",
          "signature": "Value_Struct Struct",
          "source": "src/Network-XmlRpc-DTD_XMLRPC.html#Value_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc DTD_XMLRPC",
          "module": "Network.XmlRpc.DTD_XMLRPC",
          "name": "Value_Struct",
          "package": "haxr",
          "partial": "Value Struct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-DTD_XMLRPC.html#v:Value_Struct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the core functionality of the XML-RPC library.\n Most applications should not need to use this module. Client\n applications should use \u003ca\u003eNetwork.XmlRpc.Client\u003c/a\u003e and server applications should\n use \u003ca\u003eNetwork.XmlRpc.Server\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eThe XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "Internals",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the core functionality of the XML-RPC library Most applications should not need to use this module Client applications should use Network.XmlRpc.Client and server applications should use Network.XmlRpc.Server The XML-RPC specifcation is available at http www.xmlrpc.com spec",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Internals",
          "package": "haxr",
          "partial": "Internals",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "Err",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#Err",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Err",
          "package": "haxr",
          "partial": "Err",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML-RPC method call. Consists of a method name and a list of\n   parameters.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "MethodCall",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#MethodCall",
          "type": "data"
        },
        "index": {
          "description": "An XML-RPC method call Consists of method name and list of parameters",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "MethodCall",
          "package": "haxr",
          "partial": "Method Call",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML-RPC response.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "MethodResponse",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#MethodResponse",
          "type": "data"
        },
        "index": {
          "description": "An XML-RPC response",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "MethodResponse",
          "package": "haxr",
          "partial": "Method Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:MethodResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML-RPC value. Use for error messages and introspection.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "Type",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "data"
        },
        "index": {
          "description": "An XML-RPC value Use for error messages and introspection",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Type",
          "package": "haxr",
          "partial": "Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Type"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XML-RPC value.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "Value",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "data"
        },
        "index": {
          "description": "An XML-RPC value",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Value",
          "package": "haxr",
          "partial": "Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:Value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class for mapping Haskell types to XML-RPC types.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "XmlRpcType",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Internals.html#XmlRpcType",
          "type": "class"
        },
        "index": {
          "description": "class for mapping Haskell types to XML-RPC types",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "XmlRpcType",
          "package": "haxr",
          "partial": "Xml Rpc Type",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#t:XmlRpcType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fault response\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "Fault",
          "package": "haxr",
          "signature": "Fault Int String",
          "source": "src/Network-XmlRpc-Internals.html#MethodResponse",
          "type": "function"
        },
        "index": {
          "description": "fault response",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Fault",
          "package": "haxr",
          "partial": "Fault",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:Fault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "MethodCall",
          "package": "haxr",
          "signature": "MethodCall String [Value]",
          "source": "src/Network-XmlRpc-Internals.html#MethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "MethodCall",
          "normalized": "MethodCall String[Value]",
          "package": "haxr",
          "partial": "Method Call",
          "signature": "MethodCall String[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:MethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA method response returning a value\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "Return",
          "package": "haxr",
          "signature": "Return Value",
          "source": "src/Network-XmlRpc-Internals.html#MethodResponse",
          "type": "function"
        },
        "index": {
          "description": "method response returning value",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "Return",
          "package": "haxr",
          "partial": "Return",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:Return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TArray",
          "package": "haxr",
          "signature": "TArray",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TArray",
          "package": "haxr",
          "partial": "TArray",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TBase64",
          "package": "haxr",
          "signature": "TBase64",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TBase64",
          "package": "haxr",
          "partial": "TBase",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TBool",
          "package": "haxr",
          "signature": "TBool",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TBool",
          "package": "haxr",
          "partial": "TBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TDateTime",
          "package": "haxr",
          "signature": "TDateTime",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TDateTime",
          "package": "haxr",
          "partial": "TDate Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TDouble",
          "package": "haxr",
          "signature": "TDouble",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TDouble",
          "package": "haxr",
          "partial": "TDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TInt",
          "package": "haxr",
          "signature": "TInt",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TInt",
          "package": "haxr",
          "partial": "TInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TString",
          "package": "haxr",
          "signature": "TString",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TString",
          "package": "haxr",
          "partial": "TString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TStruct",
          "package": "haxr",
          "signature": "TStruct",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TStruct",
          "package": "haxr",
          "partial": "TStruct",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "TUnknown",
          "package": "haxr",
          "signature": "TUnknown",
          "source": "src/Network-XmlRpc-Internals.html#Type",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "TUnknown",
          "package": "haxr",
          "partial": "TUnknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:TUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003earray\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueArray",
          "package": "haxr",
          "signature": "ValueArray [Value]",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "array",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueArray",
          "normalized": "ValueArray[Value]",
          "package": "haxr",
          "partial": "Value Array",
          "signature": "ValueArray[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueArray"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebase 64.  NOTE that you should provide the raw data; the haxr library takes care of doing the base-64 encoding.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueBase64",
          "package": "haxr",
          "signature": "ValueBase64 ByteString",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "base NOTE that you should provide the raw data the haxr library takes care of doing the base-64 encoding",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueBase64",
          "package": "haxr",
          "partial": "Value Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueBase64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ebool\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueBool",
          "package": "haxr",
          "signature": "ValueBool Bool",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "bool",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueBool",
          "package": "haxr",
          "partial": "Value Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edateTime.iso8601\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueDateTime",
          "package": "haxr",
          "signature": "ValueDateTime LocalTime",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "dateTime.iso8601",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueDateTime",
          "package": "haxr",
          "partial": "Value Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edouble\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueDouble",
          "package": "haxr",
          "signature": "ValueDouble Double",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "double",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueDouble",
          "package": "haxr",
          "partial": "Value Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eint, i4, or i8\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueInt",
          "package": "haxr",
          "signature": "ValueInt Int",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "int i4 or i8",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueInt",
          "package": "haxr",
          "partial": "Value Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estring\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueString",
          "package": "haxr",
          "signature": "ValueString String",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "string",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueString",
          "package": "haxr",
          "partial": "Value String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estruct\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueStruct",
          "package": "haxr",
          "signature": "ValueStruct [(String, Value)]",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "struct",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueStruct",
          "normalized": "ValueStruct[(String,Value)]",
          "package": "haxr",
          "partial": "Value Struct",
          "signature": "ValueStruct[(String,Value)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueStruct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno inner element\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueUnwrapped",
          "package": "haxr",
          "signature": "ValueUnwrapped String",
          "source": "src/Network-XmlRpc-Internals.html#Value",
          "type": "function"
        },
        "index": {
          "description": "no inner element",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ValueUnwrapped",
          "package": "haxr",
          "partial": "Value Unwrapped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ValueUnwrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e to this type. May fail if\n   if there is a type error.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "fromValue",
          "package": "haxr",
          "signature": "Value -\u003e Err m a",
          "source": "src/Network-XmlRpc-Internals.html#fromValue",
          "type": "method"
        },
        "index": {
          "description": "Convert from Value to this type May fail if if there is type error",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromValue",
          "normalized": "Value-\u003eErr a b",
          "package": "haxr",
          "partial": "Value",
          "signature": "Value-\u003eErr m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMember",
          "package": "haxr",
          "signature": "Member -\u003e Err m (String, Value)",
          "source": "src/Network-XmlRpc-Internals.html#fromXRMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMember",
          "normalized": "Member-\u003eErr a(String,Value)",
          "package": "haxr",
          "partial": "XRMember",
          "signature": "Member-\u003eErr m(String,Value)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMethodCall",
          "package": "haxr",
          "signature": "MethodCall -\u003e Err m MethodCall",
          "source": "src/Network-XmlRpc-Internals.html#fromXRMethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMethodCall",
          "normalized": "MethodCall-\u003eErr a MethodCall",
          "package": "haxr",
          "partial": "XRMethod Call",
          "signature": "MethodCall-\u003eErr m MethodCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMethodResponse",
          "package": "haxr",
          "signature": "MethodResponse -\u003e Err m MethodResponse",
          "source": "src/Network-XmlRpc-Internals.html#fromXRMethodResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRMethodResponse",
          "normalized": "MethodResponse-\u003eErr a MethodResponse",
          "package": "haxr",
          "partial": "XRMethod Response",
          "signature": "MethodResponse-\u003eErr m MethodResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRMethodResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRParams",
          "package": "haxr",
          "signature": "Params -\u003e Err m [Value]",
          "source": "src/Network-XmlRpc-Internals.html#fromXRParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRParams",
          "normalized": "Params-\u003eErr a[Value]",
          "package": "haxr",
          "partial": "XRParams",
          "signature": "Params-\u003eErr m[Value]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRValue",
          "package": "haxr",
          "signature": "Value -\u003e Err m Value",
          "source": "src/Network-XmlRpc-Internals.html#fromXRValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "fromXRValue",
          "normalized": "Value-\u003eErr a Value",
          "package": "haxr",
          "partial": "XRValue",
          "signature": "Value-\u003eErr m Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:fromXRValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a field value from a (possibly heterogeneous) struct.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "getField",
          "package": "haxr",
          "signature": "String-\u003e [(String, Value)]-\u003e Err m a",
          "type": "function"
        },
        "index": {
          "description": "Get field value from possibly heterogeneous struct",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "getField",
          "normalized": "String-\u003e[(String,Value)]-\u003eErr a b",
          "package": "haxr",
          "partial": "Field",
          "signature": "String-\u003e[(String,Value)]-\u003eErr m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a field value from a (possibly heterogeneous) struct.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "getFieldMaybe",
          "package": "haxr",
          "signature": "String-\u003e [(String, Value)]-\u003e Err m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Get field value from possibly heterogeneous struct",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "getFieldMaybe",
          "normalized": "String-\u003e[(String,Value)]-\u003eErr a(Maybe b)",
          "package": "haxr",
          "partial": "Field Maybe",
          "signature": "String-\u003e[(String,Value)]-\u003eErr m(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getFieldMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "getType",
          "package": "haxr",
          "signature": "a -\u003e Type",
          "source": "src/Network-XmlRpc-Internals.html#getType",
          "type": "method"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "getType",
          "normalized": "a-\u003eType",
          "package": "haxr",
          "partial": "Type",
          "signature": "a-\u003eType",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:getType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle errors from the error monad.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "handleError",
          "package": "haxr",
          "signature": "(String -\u003e m a) -\u003e Err m a -\u003e m a",
          "source": "src/Network-XmlRpc-Internals.html#handleError",
          "type": "function"
        },
        "index": {
          "description": "Handle errors from the error monad",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "handleError",
          "normalized": "(String-\u003ea b)-\u003eErr a b-\u003ea b",
          "package": "haxr",
          "partial": "Error",
          "signature": "(String-\u003em a)-\u003eErr m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:handleError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch IO errors in the error monad.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "ioErrorToErr",
          "package": "haxr",
          "signature": "IO a -\u003e Err IO a",
          "source": "src/Network-XmlRpc-Internals.html#ioErrorToErr",
          "type": "function"
        },
        "index": {
          "description": "Catch IO errors in the error monad",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "ioErrorToErr",
          "normalized": "IO a-\u003eErr IO a",
          "package": "haxr",
          "partial": "Error To Err",
          "signature": "IO a-\u003eErr IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:ioErrorToErr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e value to a value in any monad\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "maybeToM",
          "package": "haxr",
          "signature": "String-\u003e Maybe a-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Convert Maybe value to value in any monad",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "maybeToM",
          "normalized": "String-\u003eMaybe a-\u003eb a",
          "package": "haxr",
          "partial": "To",
          "signature": "String-\u003eMaybe a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:maybeToM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a method call from XML.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "parseCall",
          "package": "haxr",
          "signature": "String -\u003e Err m MethodCall",
          "source": "src/Network-XmlRpc-Internals.html#parseCall",
          "type": "function"
        },
        "index": {
          "description": "Parses method call from XML",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "parseCall",
          "normalized": "String-\u003eErr a MethodCall",
          "package": "haxr",
          "partial": "Call",
          "signature": "String-\u003eErr m MethodCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:parseCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses a method response from XML.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "parseResponse",
          "package": "haxr",
          "signature": "String -\u003e Err m MethodResponse",
          "source": "src/Network-XmlRpc-Internals.html#parseResponse",
          "type": "function"
        },
        "index": {
          "description": "Parses method response from XML",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "parseResponse",
          "normalized": "String-\u003eErr a MethodResponse",
          "package": "haxr",
          "partial": "Response",
          "signature": "String-\u003eErr m MethodResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:parseResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an XML-representation of a method call.\n FIXME: pretty prints ugly XML\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "renderCall",
          "package": "haxr",
          "signature": "MethodCall -\u003e ByteString",
          "source": "src/Network-XmlRpc-Internals.html#renderCall",
          "type": "function"
        },
        "index": {
          "description": "Makes an XML-representation of method call FIXME pretty prints ugly XML",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "renderCall",
          "normalized": "MethodCall-\u003eByteString",
          "package": "haxr",
          "partial": "Call",
          "signature": "MethodCall-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:renderCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes an XML-representation of a method response.\n FIXME: pretty prints ugly XML\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "renderResponse",
          "package": "haxr",
          "signature": "MethodResponse -\u003e ByteString",
          "source": "src/Network-XmlRpc-Internals.html#renderResponse",
          "type": "function"
        },
        "index": {
          "description": "Makes an XML-representation of method response FIXME pretty prints ugly XML",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "renderResponse",
          "normalized": "MethodResponse-\u003eByteString",
          "package": "haxr",
          "partial": "Response",
          "signature": "MethodResponse-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:renderResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from this type to a \u003ccode\u003e\u003ca\u003eValue\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Internals",
          "name": "toValue",
          "package": "haxr",
          "signature": "a -\u003e Value",
          "source": "src/Network-XmlRpc-Internals.html#toValue",
          "type": "method"
        },
        "index": {
          "description": "Convert from this type to Value",
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toValue",
          "normalized": "a-\u003eValue",
          "package": "haxr",
          "partial": "Value",
          "signature": "a-\u003eValue",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMember",
          "package": "haxr",
          "signature": "(String, Value) -\u003e Member",
          "source": "src/Network-XmlRpc-Internals.html#toXRMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMember",
          "normalized": "(String,Value)-\u003eMember",
          "package": "haxr",
          "partial": "XRMember",
          "signature": "(String,Value)-\u003eMember",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMethodCall",
          "package": "haxr",
          "signature": "MethodCall -\u003e MethodCall",
          "source": "src/Network-XmlRpc-Internals.html#toXRMethodCall",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMethodCall",
          "normalized": "MethodCall-\u003eMethodCall",
          "package": "haxr",
          "partial": "XRMethod Call",
          "signature": "MethodCall-\u003eMethodCall",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMethodCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMethodResponse",
          "package": "haxr",
          "signature": "MethodResponse -\u003e MethodResponse",
          "source": "src/Network-XmlRpc-Internals.html#toXRMethodResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toXRMethodResponse",
          "normalized": "MethodResponse-\u003eMethodResponse",
          "package": "haxr",
          "partial": "XRMethod Response",
          "signature": "MethodResponse-\u003eMethodResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRMethodResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "toXRParams",
          "package": "haxr",
          "signature": "[Value] -\u003e Params",
          "source": "src/Network-XmlRpc-Internals.html#toXRParams",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toXRParams",
          "normalized": "[Value]-\u003eParams",
          "package": "haxr",
          "partial": "XRParams",
          "signature": "[Value]-\u003eParams",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Internals",
          "name": "toXRValue",
          "package": "haxr",
          "signature": "Value -\u003e Value",
          "source": "src/Network-XmlRpc-Internals.html#toXRValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Internals",
          "module": "Network.XmlRpc.Internals",
          "name": "toXRValue",
          "normalized": "Value-\u003eValue",
          "package": "haxr",
          "partial": "XRValue",
          "signature": "Value-\u003eValue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Internals.html#v:toXRValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "Introspect",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Introspect.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "Introspect",
          "package": "haxr",
          "partial": "Introspect",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "Help",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Introspect.html#Help",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "Help",
          "package": "haxr",
          "partial": "Help",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "MethodInfo",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Introspect.html#MethodInfo",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "MethodInfo",
          "package": "haxr",
          "partial": "Method Info",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:MethodInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "Signature",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Introspect.html#Signature",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "Signature",
          "package": "haxr",
          "partial": "Signature",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#t:Signature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "listMethods",
          "package": "haxr",
          "signature": "String -\u003e IO [String]",
          "source": "src/Network-XmlRpc-Introspect.html#listMethods",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "listMethods",
          "normalized": "String-\u003eIO[String]",
          "package": "haxr",
          "partial": "Methods",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:listMethods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "methodHelp",
          "package": "haxr",
          "signature": "String -\u003e String -\u003e IO String",
          "source": "src/Network-XmlRpc-Introspect.html#methodHelp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "methodHelp",
          "normalized": "String-\u003eString-\u003eIO String",
          "package": "haxr",
          "partial": "Help",
          "signature": "String-\u003eString-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "methodInfo",
          "package": "haxr",
          "signature": "String -\u003e String -\u003e IO MethodInfo",
          "source": "src/Network-XmlRpc-Introspect.html#methodInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "methodInfo",
          "normalized": "String-\u003eString-\u003eIO MethodInfo",
          "package": "haxr",
          "partial": "Info",
          "signature": "String-\u003eString-\u003eIO MethodInfo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "methodSignature",
          "package": "haxr",
          "signature": "String -\u003e String -\u003e IO [[String]]",
          "source": "src/Network-XmlRpc-Introspect.html#methodSignature",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "methodSignature",
          "normalized": "String-\u003eString-\u003eIO[[String]]",
          "package": "haxr",
          "partial": "Signature",
          "signature": "String-\u003eString-\u003eIO[[String]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:methodSignature"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Introspect",
          "name": "signatures",
          "package": "haxr",
          "signature": "String -\u003e String -\u003e IO [Signature]",
          "source": "src/Network-XmlRpc-Introspect.html#signatures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Introspect",
          "module": "Network.XmlRpc.Introspect",
          "name": "signatures",
          "normalized": "String-\u003eString-\u003eIO[Signature]",
          "package": "haxr",
          "signature": "String-\u003eString-\u003eIO[Signature]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Introspect.html#v:signatures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a fast non-pretty-printer for turning the internal representation\n   of generic structured XML documents into Lazy ByteStrings.\n   Like in Text.Xml.HaXml.Pretty, there is one pp function for each type in\n   Text.Xml.HaXml.Types, so you can pretty-print as much or as little\n   of the document as you wish.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.Pretty",
          "name": "Pretty",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Pretty.html",
          "type": "module"
        },
        "index": {
          "description": "This is fast non-pretty-printer for turning the internal representation of generic structured XML documents into Lazy ByteStrings Like in Text.Xml.HaXml.Pretty there is one pp function for each type in Text.Xml.HaXml.Types so you can pretty-print as much or as little of the document as you wish",
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "Pretty",
          "package": "haxr",
          "partial": "Pretty",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Pretty",
          "name": "content",
          "package": "haxr",
          "signature": "Content i -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#content",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "content",
          "normalized": "Content a-\u003eByteString",
          "package": "haxr",
          "signature": "Content i-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:content"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Pretty",
          "name": "cp",
          "package": "haxr",
          "signature": "CP -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#cp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "cp",
          "normalized": "CP-\u003eByteString",
          "package": "haxr",
          "signature": "CP-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:cp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Pretty",
          "name": "doctypedecl",
          "package": "haxr",
          "signature": "DocTypeDecl -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#doctypedecl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "doctypedecl",
          "normalized": "DocTypeDecl-\u003eByteString",
          "package": "haxr",
          "signature": "DocTypeDecl-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:doctypedecl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a \u003ccode\u003e\u003ca\u003eDocument\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Pretty",
          "name": "document",
          "package": "haxr",
          "signature": "Document i -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#document",
          "type": "function"
        },
        "index": {
          "description": "Render Document to ByteString",
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "document",
          "normalized": "Document a-\u003eByteString",
          "package": "haxr",
          "signature": "Document i-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:document"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Pretty",
          "name": "element",
          "package": "haxr",
          "signature": "Element i -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "element",
          "normalized": "Element a-\u003eByteString",
          "package": "haxr",
          "signature": "Element i-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Pretty",
          "name": "prolog",
          "package": "haxr",
          "signature": "Prolog -\u003e ByteString",
          "source": "src/Network-XmlRpc-Pretty.html#prolog",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network XmlRpc Pretty",
          "module": "Network.XmlRpc.Pretty",
          "name": "prolog",
          "normalized": "Prolog-\u003eByteString",
          "package": "haxr",
          "signature": "Prolog-\u003eByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Pretty.html#v:prolog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains the server functionality of XML-RPC.\n The XML-RPC specifcation is available at \u003ca\u003ehttp://www.xmlrpc.com/spec\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eA simple CGI-based XML-RPC server application:\n\u003c/p\u003e\u003cpre\u003e import Network.XmlRpc.Server \n\n add :: Int -\u003e Int -\u003e IO Int\n add x y = return (x + y)\n\n main = cgiXmlRpcServer [(\"examples.add\", fun add)]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "Server",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Server.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains the server functionality of XML-RPC The XML-RPC specifcation is available at http www.xmlrpc.com spec simple CGI-based XML-RPC server application import Network.XmlRpc.Server add Int Int IO Int add return main cgiXmlRpcServer examples.add fun add",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "Server",
          "package": "haxr",
          "partial": "Server",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.XmlRpc.Server",
          "name": "ServerResult",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Server.html#ServerResult",
          "type": "type"
        },
        "index": {
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "ServerResult",
          "package": "haxr",
          "partial": "Server Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#t:ServerResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of XML-RPC methods on the server.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "XmlRpcMethod",
          "package": "haxr",
          "source": "src/Network-XmlRpc-Server.html#XmlRpcMethod",
          "type": "type"
        },
        "index": {
          "description": "The type of XML-RPC methods on the server",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "XmlRpcMethod",
          "package": "haxr",
          "partial": "Xml Rpc Method",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#t:XmlRpcMethod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA CGI-based XML-RPC server. Reads a request from standard input\n   and writes some HTTP headers (Content-Type and Content-Length),\n   followed by the response to standard output. Supports\n   introspection.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "cgiXmlRpcServer",
          "package": "haxr",
          "signature": "[(String, XmlRpcMethod)] -\u003e IO ()",
          "source": "src/Network-XmlRpc-Server.html#cgiXmlRpcServer",
          "type": "function"
        },
        "index": {
          "description": "CGI-based XML-RPC server Reads request from standard input and writes some HTTP headers Content-Type and Content-Length followed by the response to standard output Supports introspection",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "cgiXmlRpcServer",
          "normalized": "[(String,XmlRpcMethod)]-\u003eIO()",
          "package": "haxr",
          "partial": "Xml Rpc Server",
          "signature": "[(String,XmlRpcMethod)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:cgiXmlRpcServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurns any function \n   \u003ccode\u003e(XmlRpcType t1, ..., XmlRpcType tn, XmlRpcType r) =\u003e \n   t1 -\u003e ... -\u003e tn -\u003e IO r\u003c/code\u003e\n   into an \u003ccode\u003e\u003ca\u003eXmlRpcMethod\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "fun",
          "package": "haxr",
          "signature": "a -\u003e XmlRpcMethod",
          "source": "src/Network-XmlRpc-Server.html#fun",
          "type": "function"
        },
        "index": {
          "description": "Turns any function XmlRpcType t1 XmlRpcType tn XmlRpcType t1 tn IO into an XmlRpcMethod",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "fun",
          "normalized": "a-\u003eXmlRpcMethod",
          "package": "haxr",
          "signature": "a-\u003eXmlRpcMethod",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads a method call from a string, uses the supplied method\n   to generate a response and returns that response as a string\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "handleCall",
          "package": "haxr",
          "signature": "(MethodCall -\u003e ServerResult) -\u003e String -\u003e IO ByteString",
          "source": "src/Network-XmlRpc-Server.html#handleCall",
          "type": "function"
        },
        "index": {
          "description": "Reads method call from string uses the supplied method to generate response and returns that response as string",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "handleCall",
          "normalized": "(MethodCall-\u003eServerResult)-\u003eString-\u003eIO ByteString",
          "package": "haxr",
          "partial": "Call",
          "signature": "(MethodCall-\u003eServerResult)-\u003eString-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:handleCall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn XmlRpcMethod that looks up the method name in a table\n   and uses that method to handle the call.\n\u003c/p\u003e",
          "module": "Network.XmlRpc.Server",
          "name": "methods",
          "package": "haxr",
          "signature": "[(String, XmlRpcMethod)] -\u003e MethodCall -\u003e ServerResult",
          "source": "src/Network-XmlRpc-Server.html#methods",
          "type": "function"
        },
        "index": {
          "description": "An XmlRpcMethod that looks up the method name in table and uses that method to handle the call",
          "hierarchy": "Network XmlRpc Server",
          "module": "Network.XmlRpc.Server",
          "name": "methods",
          "normalized": "[(String,XmlRpcMethod)]-\u003eMethodCall-\u003eServerResult",
          "package": "haxr",
          "signature": "[(String,XmlRpcMethod)]-\u003eMethodCall-\u003eServerResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-Server.html#v:methods"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses Template Haskell to automagically derive instances of \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "THDeriveXmlRpcType",
          "package": "haxr",
          "source": "src/Network-XmlRpc-THDeriveXmlRpcType.html",
          "type": "module"
        },
        "index": {
          "description": "Uses Template Haskell to automagically derive instances of XmlRpcType",
          "hierarchy": "Network XmlRpc THDeriveXmlRpcType",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "THDeriveXmlRpcType",
          "package": "haxr",
          "partial": "THDerive Xml Rpc Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-THDeriveXmlRpcType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e instance which handles a Haskell record\n   as an XmlRpc struct. Example:\n \u003ccode\u003e\n data Person = Person { name :: String, age :: Int }\n $(asXmlRpcStruct ''Person)\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "asXmlRpcStruct",
          "package": "haxr",
          "signature": "Name -\u003e Q [Dec]",
          "source": "src/Network-XmlRpc-THDeriveXmlRpcType.html#asXmlRpcStruct",
          "type": "function"
        },
        "index": {
          "description": "Creates an XmlRpcType instance which handles Haskell record as an XmlRpc struct Example data Person Person name String age Int asXmlRpcStruct Person",
          "hierarchy": "Network XmlRpc THDeriveXmlRpcType",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "asXmlRpcStruct",
          "normalized": "Name-\u003eQ[Dec]",
          "package": "haxr",
          "partial": "Xml Rpc Struct",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr/docs/Network-XmlRpc-THDeriveXmlRpcType.html#v:asXmlRpcStruct"
      }
    }
  ]
]