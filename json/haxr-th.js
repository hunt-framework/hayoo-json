[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr-th/docs/Network-XmlRpc-THDeriveXmlRpcType.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUses Template Haskell to automagically derive instances of \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.XmlRpc.THDeriveXmlRpcType",
        "fct-package": "haxr-th",
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
        "package": "haxr-th",
        "partial": "THDerive Xml Rpc Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/haxr-th/docs/Network-XmlRpc-THDeriveXmlRpcType.html#v:asXmlRpcStruct",
      "description": {
        "fct-descr": "\u003cp\u003eCreates an \u003ccode\u003e\u003ca\u003eXmlRpcType\u003c/a\u003e\u003c/code\u003e instance which handles a Haskell record\n   as an XmlRpc struct. Example:\n \u003ccode\u003e\n data Person = Person { name :: String, age :: Int }\n $(asXmlRpcStruct ''Person)\n \u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Network.XmlRpc.THDeriveXmlRpcType",
        "fct-package": "haxr-th",
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
        "package": "haxr-th",
        "partial": "Xml Rpc Struct",
        "signature": "Name-\u003eQ[Dec]"
      }
    }
  }
]