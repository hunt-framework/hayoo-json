[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis script parses the public suffix list, and constructs a data structure which can\nbe used with the isSuffix function in Lookup.hs. It exports a GSink which produces\nthe opaque \u003ccode\u003e\u003ca\u003eDataStructure\u003c/a\u003e\u003c/code\u003e and can be fed any Source as input.\n\u003c/p\u003e\u003cp\u003eThis makes an few assumption about the information in the public suffix list:\nnamely, that no rule is a suffix of another rule. For example, if there is a rule\nabc.def.ghi\nthen then is no other rule\ndef.ghi\nor\n!def.ghi\n\u003c/p\u003e\u003cp\u003eThe actual data structure involved here is a tree where the nodes have no value and\nthe edges are DNS labels. There are two trees: one to handle the exception rules,\nand one to handle the regular rules.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.PublicSuffixList.Create",
        "fct-package": "publicsuffixlistcreate",
        "fct-signature": "module",
        "fct-source": "src/Network-PublicSuffixList-Create.html",
        "fct-type": "module",
        "title": "Create"
      },
      "index": {
        "description": "This script parses the public suffix list and constructs data structure which can be used with the isSuffix function in Lookup.hs It exports GSink which produces the opaque DataStructure and can be fed any Source as input This makes an few assumption about the information in the public suffix list namely that no rule is suffix of another rule For example if there is rule abc.def.ghi then then is no other rule def.ghi or def.ghi The actual data structure involved here is tree where the nodes have no value and the edges are DNS labels There are two trees one to handle the exception rules and one to handle the regular rules",
        "hierarchy": "Network PublicSuffixList Create",
        "module": "Network.PublicSuffixList.Create",
        "name": "Create",
        "normalized": "",
        "package": "publicsuffixlistcreate",
        "partial": "Create",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#t:PublicSuffixListException",
      "description": {
        "fct-module": "Network.PublicSuffixList.Create",
        "fct-package": "publicsuffixlistcreate",
        "fct-signature": "data",
        "fct-source": "src/Network-PublicSuffixList-Create.html#PublicSuffixListException",
        "fct-type": "data",
        "title": "PublicSuffixListException"
      },
      "index": {
        "description": "",
        "hierarchy": "Network PublicSuffixList Create",
        "module": "Network.PublicSuffixList.Create",
        "name": "PublicSuffixListException",
        "normalized": "",
        "package": "publicsuffixlistcreate",
        "partial": "Public Suffix List Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#v:sink",
      "description": {
        "fct-module": "Network.PublicSuffixList.Create",
        "fct-package": "publicsuffixlistcreate",
        "fct-signature": "GSink ByteString m DataStructure",
        "fct-source": "src/Network-PublicSuffixList-Create.html#sink",
        "fct-type": "function",
        "title": "sink"
      },
      "index": {
        "description": "",
        "hierarchy": "Network PublicSuffixList Create",
        "module": "Network.PublicSuffixList.Create",
        "name": "sink",
        "normalized": "",
        "package": "publicsuffixlistcreate",
        "partial": "",
        "signature": ""
      }
    }
  }
]