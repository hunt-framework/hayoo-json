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
        "word": "haxr-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses Template Haskell to automagically derive instances of \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "THDeriveXmlRpcType",
          "package": "haxr-th",
          "source": "src/Network-XmlRpc-THDeriveXmlRpcType.html",
          "type": "module"
        },
        "index": {
          "description": "Uses Template Haskell to automagically derive instances of XmlRpcType",
          "hierarchy": "Network XmlRpc THDeriveXmlRpcType",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "THDeriveXmlRpcType",
          "package": "haxr-th",
          "partial": "THDerive Xml Rpc Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/haxr-th/docs/Network-XmlRpc-THDeriveXmlRpcType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e instance which handles a Haskell record\n   as an XmlRpc struct. Example:\n \u003ccode\u003e\n data Person = Person { name :: String, age :: Int }\n $(asXmlRpcStruct ''Person)\n \u003c/code\u003e\n\u003c/p\u003e",
          "module": "Network.XmlRpc.THDeriveXmlRpcType",
          "name": "asXmlRpcStruct",
          "package": "haxr-th",
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
          "package": "haxr-th",
          "partial": "Xml Rpc Struct",
          "signature": "Name-\u003eQ[Dec]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/haxr-th/docs/Network-XmlRpc-THDeriveXmlRpcType.html#v:asXmlRpcStruct"
      }
    }
  ]
]