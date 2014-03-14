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
        "word": "publicsuffixlistcreate"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis script parses the public suffix list, and constructs a data structure which can\nbe used with the isSuffix function in Lookup.hs. It exports a GSink which produces\nthe opaque \u003ccode\u003e\u003ca\u003eDataStructure\u003c/a\u003e\u003c/code\u003e and can be fed any Source as input.\n\u003c/p\u003e\u003cp\u003eThis makes an few assumption about the information in the public suffix list:\nnamely, that no rule is a suffix of another rule. For example, if there is a rule\nabc.def.ghi\nthen then is no other rule\ndef.ghi\nor\n!def.ghi\n\u003c/p\u003e\u003cp\u003eThe actual data structure involved here is a tree where the nodes have no value and\nthe edges are DNS labels. There are two trees: one to handle the exception rules,\nand one to handle the regular rules.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.PublicSuffixList.Create",
          "name": "Create",
          "package": "publicsuffixlistcreate",
          "source": "src/Network-PublicSuffixList-Create.html",
          "type": "module"
        },
        "index": {
          "description": "This script parses the public suffix list and constructs data structure which can be used with the isSuffix function in Lookup.hs It exports GSink which produces the opaque DataStructure and can be fed any Source as input This makes an few assumption about the information in the public suffix list namely that no rule is suffix of another rule For example if there is rule abc.def.ghi then then is no other rule def.ghi or def.ghi The actual data structure involved here is tree where the nodes have no value and the edges are DNS labels There are two trees one to handle the exception rules and one to handle the regular rules",
          "hierarchy": "Network PublicSuffixList Create",
          "module": "Network.PublicSuffixList.Create",
          "name": "Create",
          "package": "publicsuffixlistcreate",
          "partial": "Create",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PublicSuffixList.Create",
          "name": "PublicSuffixListException",
          "package": "publicsuffixlistcreate",
          "source": "src/Network-PublicSuffixList-Create.html#PublicSuffixListException",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network PublicSuffixList Create",
          "module": "Network.PublicSuffixList.Create",
          "name": "PublicSuffixListException",
          "package": "publicsuffixlistcreate",
          "partial": "Public Suffix List Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#t:PublicSuffixListException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.PublicSuffixList.Create",
          "name": "sink",
          "package": "publicsuffixlistcreate",
          "signature": "GSink ByteString m DataStructure",
          "source": "src/Network-PublicSuffixList-Create.html#sink",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network PublicSuffixList Create",
          "module": "Network.PublicSuffixList.Create",
          "name": "sink",
          "package": "publicsuffixlistcreate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/publicsuffixlistcreate/docs/Network-PublicSuffixList-Create.html#v:sink"
      }
    }
  ]
]