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
        "word": "hashring"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of consistent hashing, as described in\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e David Karger et al.,\n    \"\u003cem\u003eConsistent hashing and random trees: distributed caching protocols for relieving hot spots on the World Wide Web\u003c/em\u003e\",\n    29th Annual ACM Symposium on Theory,\n    \u003ca\u003ehttp://dl.acm.org/citation.cfm?id=258660\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eIn distributed computing applications, it's usually necessary route messages\n to some group of N nodes in the network. Message locality, wherein messages\n of the same kind are routed to the same node, is often desirable. \"Normal\"\n hashing, where a message's node is determined by some hash function modulo\n N, has the undesirable property that adding or removing a node from the\n network causes the key sets of all other nodes to change drastically.\n In contrast, consistent hashing has the property that small changes to the\n size of the node set cause only small changes to key sets of the nodes.\n\u003c/p\u003e\u003cp\u003eThis implementation is built on top of \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e. It provides\n \u003cem\u003eO(1)\u003c/em\u003e lookup functions as well as \u003cem\u003eO(min(log n, R))\u003c/em\u003e insertion and deletion\n functions, where \u003cem\u003eR\u003c/em\u003e is the number of replica nodes used in the ring (see\n \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e\u003cp\u003eThe key space of the ring is the full range of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e values. To insert a\n node, we generate (\u003cem\u003eR \u003e 0\u003c/em\u003e) keys by hashing the node with \u003cem\u003eR\u003c/em\u003e successive\n salts, and the node is referenced by those keys in the ring. To get a node\n for a message, we hash the message to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e value \u003cem\u003ek\u003c/em\u003e and find the\n smallest key \u003cem\u003ek'\u003c/em\u003e in the ring such that \u003cem\u003ek \u003c= k'\u003c/em\u003e. The node is the value\n referenced by \u003cem\u003ek'\u003c/em\u003e. Higher values of \u003cem\u003eR\u003c/em\u003e give a more even distribution of\n keys to nodes but slow down insertions and deletions of nodes. \u003cem\u003eR\u003c/em\u003e is\n specified when constructing a \u003ccode\u003e\u003ca\u003eHashRing\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e, or\n \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e and retrievable with \u003ccode\u003e\u003ca\u003ereplicas\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe ability of \u003ccode\u003e\u003ca\u003eHashRing\u003c/a\u003e\u003c/code\u003e to fairly distribute messages among nodes relies\n on the implementations of \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e for the message and\n node types. For example, the default implementation for\n \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e is non-uniform on short inputs, and so it's\n unsuitable for use with \u003ccode\u003e\u003ca\u003eHashRing\u003c/a\u003e\u003c/code\u003e. Reimplementing\n \u003ccode\u003e\u003ca\u003ehashWithSalt\u003c/a\u003e\u003c/code\u003e for your message and node types with a\n cryptographic hash function (like MD5 or SHA1 from the \u003ccode\u003ecryptohash\u003c/code\u003e package)\n will give better results.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.HashRing",
          "name": "HashRing",
          "package": "hashring",
          "source": "src/Data-HashRing.html",
          "type": "module"
        },
        "index": {
          "description": "An efficient implementation of consistent hashing as described in David Karger et al Consistent hashing and random trees distributed caching protocols for relieving hot spots on the World Wide Web th Annual ACM Symposium on Theory http dl.acm.org citation.cfm id In distributed computing applications it usually necessary route messages to some group of nodes in the network Message locality wherein messages of the same kind are routed to the same node is often desirable Normal hashing where message node is determined by some hash function modulo has the undesirable property that adding or removing node from the network causes the key sets of all other nodes to change drastically In contrast consistent hashing has the property that small changes to the size of the node set cause only small changes to key sets of the nodes This implementation is built on top of IntMap and Set It provides lookup functions as well as min log insertion and deletion functions where is the number of replica nodes used in the ring see empty The key space of the ring is the full range of Int values To insert node we generate keys by hashing the node with successive salts and the node is referenced by those keys in the ring To get node for message we hash the message to an Int value and find the smallest key in the ring such that The node is the value referenced by Higher values of give more even distribution of keys to nodes but slow down insertions and deletions of nodes is specified when constructing HashRing with empty singleton or fromList and retrievable with replicas The ability of HashRing to fairly distribute messages among nodes relies on the implementations of hashWithSalt for the message and node types For example the default implementation for ByteString is non-uniform on short inputs and so it unsuitable for use with HashRing Reimplementing hashWithSalt for your message and node types with cryptographic hash function like MD5 or SHA1 from the cryptohash package will give better results",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "HashRing",
          "package": "hashring",
          "partial": "Hash Ring",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe constructor for this data type is not exported. See \u003ccode\u003e\u003ca\u003eempty\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003esingleton\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003efromList\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that \u003ccode\u003e\u003ca\u003eHashRing\u003c/a\u003e\u003c/code\u003e is parameterized by the node type and not by the\n message type. As made clear by the type signatures for \u003ccode\u003e\u003ca\u003e!\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e, and\n \u003ccode\u003e\u003ca\u003elookup\u003c/a\u003e\u003c/code\u003e, any \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e type can be used as a message.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "HashRing",
          "package": "hashring",
          "source": "src/Data-HashRing.html#HashRing",
          "type": "data"
        },
        "index": {
          "description": "The constructor for this data type is not exported See empty singleton or fromList Note that HashRing is parameterized by the node type and not by the message type As made clear by the type signatures for find and lookup any Hashable type can be used as message",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "HashRing",
          "package": "hashring",
          "partial": "Hash Ring",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#t:HashRing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node in the ring corresponding to a message, or error if the ring\n is empty.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "(!)",
          "package": "hashring",
          "signature": "HashRing a -\u003e b -\u003e a",
          "source": "src/Data-HashRing.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Get the node in the ring corresponding to message or error if the ring is empty",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "(!) !",
          "normalized": "HashRing a-\u003eb-\u003ea",
          "package": "hashring",
          "signature": "HashRing a-\u003eb-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a node from the ring.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "delete",
          "package": "hashring",
          "signature": "a -\u003e HashRing a -\u003e HashRing a",
          "source": "src/Data-HashRing.html#delete",
          "type": "function"
        },
        "index": {
          "description": "Remove node from the ring",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "delete",
          "normalized": "a-\u003eHashRing a-\u003eHashRing a",
          "package": "hashring",
          "signature": "a-\u003eHashRing a-\u003eHashRing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct an empty ring with a specific \u003cem\u003eR\u003c/em\u003e value.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "empty",
          "package": "hashring",
          "signature": "Int -\u003e HashRing a",
          "source": "src/Data-HashRing.html#empty",
          "type": "function"
        },
        "index": {
          "description": "Construct an empty ring with specific value",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "empty",
          "normalized": "Int-\u003eHashRing a",
          "package": "hashring",
          "signature": "Int-\u003eHashRing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node in the ring corresponding to a message, or error if the ring\n is empty.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "find",
          "package": "hashring",
          "signature": "b -\u003e HashRing a -\u003e a",
          "source": "src/Data-HashRing.html#find",
          "type": "function"
        },
        "index": {
          "description": "Get the node in the ring corresponding to message or error if the ring is empty",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "find",
          "normalized": "a-\u003eHashRing b-\u003eb",
          "package": "hashring",
          "signature": "b-\u003eHashRing a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a ring from an \u003cem\u003eR\u003c/em\u003e value and a list of nodes.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "fromList",
          "package": "hashring",
          "signature": "Int -\u003e [a] -\u003e HashRing a",
          "source": "src/Data-HashRing.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Construct ring from an value and list of nodes",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "fromList",
          "normalized": "Int-\u003e[a]-\u003eHashRing a",
          "package": "hashring",
          "partial": "List",
          "signature": "Int-\u003e[a]-\u003eHashRing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a node to the ring.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "insert",
          "package": "hashring",
          "signature": "a -\u003e HashRing a -\u003e HashRing a",
          "source": "src/Data-HashRing.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Add node to the ring",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "insert",
          "normalized": "a-\u003eHashRing a-\u003eHashRing a",
          "package": "hashring",
          "signature": "a-\u003eHashRing a-\u003eHashRing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the node in the ring corresponding to a message, or \u003ccode\u003eNothing\u003c/code\u003e if the\n ring is empty.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "lookup",
          "package": "hashring",
          "signature": "b -\u003e HashRing a -\u003e Maybe a",
          "source": "src/Data-HashRing.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "Get the node in the ring corresponding to message or Nothing if the ring is empty",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "lookup",
          "normalized": "a-\u003eHashRing b-\u003eMaybe b",
          "package": "hashring",
          "signature": "b-\u003eHashRing a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the node is in the ring, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "member",
          "package": "hashring",
          "signature": "a -\u003e HashRing a -\u003e Bool",
          "source": "src/Data-HashRing.html#member",
          "type": "function"
        },
        "index": {
          "description": "True if the node is in the ring False otherwise",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "member",
          "normalized": "a-\u003eHashRing a-\u003eBool",
          "package": "hashring",
          "signature": "a-\u003eHashRing a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eTrue\u003c/code\u003e if the ring is empty, \u003ccode\u003eFalse\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "null",
          "package": "hashring",
          "signature": "HashRing a -\u003e Bool",
          "source": "src/Data-HashRing.html#null",
          "type": "function"
        },
        "index": {
          "description": "True if the ring is empty False otherwise",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "null",
          "normalized": "HashRing a-\u003eBool",
          "package": "hashring",
          "signature": "HashRing a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of replica nodes (\u003cem\u003eR\u003c/em\u003e) in the ring for each real node.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "replicas",
          "package": "hashring",
          "signature": "HashRing a -\u003e Int",
          "source": "src/Data-HashRing.html#replicas",
          "type": "function"
        },
        "index": {
          "description": "Number of replica nodes in the ring for each real node",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "replicas",
          "normalized": "HashRing a-\u003eInt",
          "package": "hashring",
          "signature": "HashRing a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:replicas"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a single-node ring with a specific \u003cem\u003eR\u003c/em\u003e value.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "singleton",
          "package": "hashring",
          "signature": "Int -\u003e a -\u003e HashRing a",
          "source": "src/Data-HashRing.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Construct single-node ring with specific value",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "singleton",
          "normalized": "Int-\u003ea-\u003eHashRing a",
          "package": "hashring",
          "signature": "Int-\u003ea-\u003eHashRing a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nodes in the ring.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "size",
          "package": "hashring",
          "signature": "HashRing a -\u003e Int",
          "source": "src/Data-HashRing.html#size",
          "type": "function"
        },
        "index": {
          "description": "Number of nodes in the ring",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "size",
          "normalized": "HashRing a-\u003eInt",
          "package": "hashring",
          "signature": "HashRing a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a list containing the nodes in the ring.\n\u003c/p\u003e",
          "module": "Data.HashRing",
          "name": "toList",
          "package": "hashring",
          "signature": "HashRing a -\u003e [a]",
          "source": "src/Data-HashRing.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Construct list containing the nodes in the ring",
          "hierarchy": "Data HashRing",
          "module": "Data.HashRing",
          "name": "toList",
          "normalized": "HashRing a-\u003e[a]",
          "package": "hashring",
          "partial": "List",
          "signature": "HashRing a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hashring/docs/Data-HashRing.html#v:toList"
      }
    }
  ]
]