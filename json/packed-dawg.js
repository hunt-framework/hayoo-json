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
        "word": "packed-dawg"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFully minimized and bit-packed directed acyclic word graphs. \n\u003c/p\u003e\u003cp\u003eThis implementation mainly focuses on compactness (\u003c500 Kb space for ~150000 word dictionaries) rather than genericity or dynamic usage. There are no insertion or deletion operations.\n\u003c/p\u003e\u003cp\u003eA DAWG node is stored in four bytes, using 22 bits for indexing and 8 bits for data storage. This implies that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The number of nodes shouldn't exceed 2^22, or 4194304.\n\u003c/li\u003e\u003cli\u003e Input characters should be mapped to the 0-255 range.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.DAWG.Packed",
          "name": "Packed",
          "package": "packed-dawg",
          "source": "src/Data-DAWG-Packed.html",
          "type": "module"
        },
        "index": {
          "description": "Fully minimized and bit-packed directed acyclic word graphs This implementation mainly focuses on compactness Kb space for word dictionaries rather than genericity or dynamic usage There are no insertion or deletion operations DAWG node is stored in four bytes using bits for indexing and bits for data storage This implies that The number of nodes shouldn exceed or Input characters should be mapped to the range",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "Packed",
          "package": "packed-dawg",
          "partial": "Packed",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis data type points to a prefix in the DAWG. When a node is the root node\n it represents the whole DAWG. When it is non-root, it can be used to access the suffixes\n of the prefix pointed to by the node. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "Node",
          "package": "packed-dawg",
          "source": "src/Data-DAWG-Packed.html#Node",
          "type": "data"
        },
        "index": {
          "description": "This data type points to prefix in the DAWG When node is the root node it represents the whole DAWG When it is non-root it can be used to access the suffixes of the prefix pointed to by the node",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "Node",
          "package": "packed-dawg",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe underlying container of the DAWG data. Modifying it will most likely result in an invalid DAWG.\n\u003c/p\u003e\u003cp\u003eEach \u003ca\u003eWord32\u003c/a\u003e represents a node. The format of a node is the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 22 bits: the index of the first child.\n\u003c/li\u003e\u003cli\u003e 8 bits: character data.\n\u003c/li\u003e\u003cli\u003e 1 bit: end-of-word flag.\n\u003c/li\u003e\u003cli\u003e 1 bit: end-of-childlist flag.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe children of a node are laid out next to each other, so they can be iterated over by starting from the first child\nand incrementing the index until a node with the end-of-childlist flag is found. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "NodeVector",
          "package": "packed-dawg",
          "source": "src/Data-DAWG-Packed.html#NodeVector",
          "type": "type"
        },
        "index": {
          "description": "The underlying container of the DAWG data Modifying it will most likely result in an invalid DAWG Each Word32 represents node The format of node is the following bits the index of the first child bits character data bit end-of-word flag bit end-of-childlist flag The children of node are laid out next to each other so they can be iterated over by starting from the first child and incrementing the index until node with the end-of-childlist flag is found",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "NodeVector",
          "package": "packed-dawg",
          "partial": "Node Vector",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#t:NodeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the character char of a node. The root nodes have the null character as char. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "char",
          "package": "packed-dawg",
          "signature": "Node -\u003e Char",
          "source": "src/Data-DAWG-Packed.html#char",
          "type": "function"
        },
        "index": {
          "description": "Get the character char of node The root nodes have the null character as char",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "char",
          "normalized": "Node-\u003eChar",
          "package": "packed-dawg",
          "signature": "Node-\u003eChar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:char"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the index of a node's first child node. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "childIndex",
          "package": "packed-dawg",
          "signature": "Node -\u003e Word32",
          "source": "src/Data-DAWG-Packed.html#childIndex",
          "type": "function"
        },
        "index": {
          "description": "Get the index of node first child node",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "childIndex",
          "normalized": "Node-\u003eWord",
          "package": "packed-dawg",
          "partial": "Index",
          "signature": "Node-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:childIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate a list of the direct children of a node. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "children",
          "package": "packed-dawg",
          "signature": "Node -\u003e [Node]",
          "source": "src/Data-DAWG-Packed.html#children",
          "type": "function"
        },
        "index": {
          "description": "Generate list of the direct children of node",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "children",
          "normalized": "Node-\u003e[Node]",
          "package": "packed-dawg",
          "signature": "Node-\u003e[Node]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:children"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether a node is the last in a list of children nodes. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "endOfList",
          "package": "packed-dawg",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-DAWG-Packed.html#endOfList",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether node is the last in list of children nodes",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "endOfList",
          "normalized": "Node-\u003eBool",
          "package": "packed-dawg",
          "partial": "Of List",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:endOfList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndicates whether a prefix pointed to by the node is a valid word.\n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "endOfWord",
          "package": "packed-dawg",
          "signature": "Node -\u003e Bool",
          "source": "src/Data-DAWG-Packed.html#endOfWord",
          "type": "function"
        },
        "index": {
          "description": "Indicates whether prefix pointed to by the node is valid word",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "endOfWord",
          "normalized": "Node-\u003eBool",
          "package": "packed-dawg",
          "partial": "Of Word",
          "signature": "Node-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:endOfWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows for faster DAWG generation than \u003ca\u003efromList\u003c/a\u003e. The ordering assumption is unchecked.\n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "fromAscList",
          "package": "packed-dawg",
          "signature": "[String] -\u003e Node",
          "source": "src/Data-DAWG-Packed.html#fromAscList",
          "type": "function"
        },
        "index": {
          "description": "Allows for faster DAWG generation than fromList The ordering assumption is unchecked",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "fromAscList",
          "normalized": "[String]-\u003eNode",
          "package": "packed-dawg",
          "partial": "Asc List",
          "signature": "[String]-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a DAWG previously serialized with \u003ca\u003etoFile\u003c/a\u003e from a file. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "fromFile",
          "package": "packed-dawg",
          "signature": "FilePath -\u003e IO Node",
          "source": "src/Data-DAWG-Packed.html#fromFile",
          "type": "function"
        },
        "index": {
          "description": "Read DAWG previously serialized with toFile from file",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "fromFile",
          "normalized": "FilePath-\u003eIO Node",
          "package": "packed-dawg",
          "partial": "File",
          "signature": "FilePath-\u003eIO Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.DAWG.Packed",
          "name": "fromList",
          "package": "packed-dawg",
          "signature": "[String] -\u003e Node",
          "source": "src/Data-DAWG-Packed.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "fromList",
          "normalized": "[String]-\u003eNode",
          "package": "packed-dawg",
          "partial": "List",
          "signature": "[String]-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a node from some member of a \u003ca\u003eNodeVector\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "getNodeAt",
          "package": "packed-dawg",
          "signature": "NodeVector -\u003e Word32 -\u003e Node",
          "source": "src/Data-DAWG-Packed.html#getNodeAt",
          "type": "function"
        },
        "index": {
          "description": "Create node from some member of NodeVector",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "getNodeAt",
          "normalized": "NodeVector-\u003eWord-\u003eNode",
          "package": "packed-dawg",
          "partial": "Node At",
          "signature": "NodeVector-\u003eWord-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:getNodeAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003elookupPrefix = lookupPrefixBy (==)\u003c/pre\u003e",
          "module": "Data.DAWG.Packed",
          "name": "lookupPrefix",
          "package": "packed-dawg",
          "signature": "String -\u003e Node -\u003e Maybe Node",
          "source": "src/Data-DAWG-Packed.html#lookupPrefix",
          "type": "function"
        },
        "index": {
          "description": "lookupPrefix lookupPrefixBy",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "lookupPrefix",
          "normalized": "String-\u003eNode-\u003eMaybe Node",
          "package": "packed-dawg",
          "partial": "Prefix",
          "signature": "String-\u003eNode-\u003eMaybe Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:lookupPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLookup a prefix by memberwise applying a comparison function. It is useful for\n setting case sensitivity, e.g. \u003ccode\u003einsensitiveLookup = lookupPrefixBy (comparing toLower)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "lookupPrefixBy",
          "package": "packed-dawg",
          "signature": "(Char -\u003e Char -\u003e Ordering) -\u003e String -\u003e Node -\u003e Maybe Node",
          "source": "src/Data-DAWG-Packed.html#lookupPrefixBy",
          "type": "function"
        },
        "index": {
          "description": "Lookup prefix by memberwise applying comparison function It is useful for setting case sensitivity e.g insensitiveLookup lookupPrefixBy comparing toLower",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "lookupPrefixBy",
          "normalized": "(Char-\u003eChar-\u003eOrdering)-\u003eString-\u003eNode-\u003eMaybe Node",
          "package": "packed-dawg",
          "partial": "Prefix By",
          "signature": "(Char-\u003eChar-\u003eOrdering)-\u003eString-\u003eNode-\u003eMaybe Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:lookupPrefixBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003emember = memberBy (==)\u003c/pre\u003e",
          "module": "Data.DAWG.Packed",
          "name": "member",
          "package": "packed-dawg",
          "signature": "String -\u003e Node -\u003e Bool",
          "source": "src/Data-DAWG-Packed.html#member",
          "type": "function"
        },
        "index": {
          "description": "member memberBy",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "member",
          "normalized": "String-\u003eNode-\u003eBool",
          "package": "packed-dawg",
          "signature": "String-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest for membership with a memberwise comparison function. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "memberBy",
          "package": "packed-dawg",
          "signature": "(Char -\u003e Char -\u003e Ordering) -\u003e String -\u003e Node -\u003e Bool",
          "source": "src/Data-DAWG-Packed.html#memberBy",
          "type": "function"
        },
        "index": {
          "description": "Test for membership with memberwise comparison function",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "memberBy",
          "normalized": "(Char-\u003eChar-\u003eOrdering)-\u003eString-\u003eNode-\u003eBool",
          "package": "packed-dawg",
          "partial": "By",
          "signature": "(Char-\u003eChar-\u003eOrdering)-\u003eString-\u003eNode-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:memberBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the underlying vector from a node.\n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "nodeVector",
          "package": "packed-dawg",
          "signature": "Node -\u003e NodeVector",
          "source": "src/Data-DAWG-Packed.html#nodeVector",
          "type": "function"
        },
        "index": {
          "description": "Get the underlying vector from node",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "nodeVector",
          "normalized": "Node-\u003eNodeVector",
          "package": "packed-dawg",
          "partial": "Vector",
          "signature": "Node-\u003eNodeVector",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:nodeVector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a bit-packed Word32. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "pack",
          "package": "packed-dawg",
          "signature": "Char -\u003e Bool -\u003e Bool -\u003e Int -\u003e Word32",
          "source": "src/Data-DAWG-Packed.html#pack",
          "type": "function"
        },
        "index": {
          "description": "Create bit-packed Word32",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "pack",
          "normalized": "Char-\u003eBool-\u003eBool-\u003eInt-\u003eWord",
          "package": "packed-dawg",
          "signature": "Char-\u003eBool-\u003eBool-\u003eInt-\u003eWord",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the root node from a node. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "root",
          "package": "packed-dawg",
          "signature": "Node -\u003e Node",
          "source": "src/Data-DAWG-Packed.html#root",
          "type": "function"
        },
        "index": {
          "description": "Get the root node from node",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "root",
          "normalized": "Node-\u003eNode",
          "package": "packed-dawg",
          "signature": "Node-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:root"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSerialize a DAWG. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "toFile",
          "package": "packed-dawg",
          "signature": "FilePath -\u003e Node -\u003e IO ()",
          "source": "src/Data-DAWG-Packed.html#toFile",
          "type": "function"
        },
        "index": {
          "description": "Serialize DAWG",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "toFile",
          "normalized": "FilePath-\u003eNode-\u003eIO()",
          "package": "packed-dawg",
          "partial": "File",
          "signature": "FilePath-\u003eNode-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:toFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of all suffixes that end on a valid word ending. \n When used on the root node this function enlists the original words. The resulting list is unsorted.\n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "toList",
          "package": "packed-dawg",
          "signature": "Node -\u003e [String]",
          "source": "src/Data-DAWG-Packed.html#toList",
          "type": "function"
        },
        "index": {
          "description": "Get the list of all suffixes that end on valid word ending When used on the root node this function enlists the original words The resulting list is unsorted",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "toList",
          "normalized": "Node-\u003e[String]",
          "package": "packed-dawg",
          "partial": "List",
          "signature": "Node-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a node from a \u003ca\u003eWord32\u003c/a\u003e and a \u003ca\u003eNodeVector\u003c/a\u003e. \n\u003c/p\u003e",
          "module": "Data.DAWG.Packed",
          "name": "unpack",
          "package": "packed-dawg",
          "signature": "Word32 -\u003e NodeVector -\u003e Node",
          "source": "src/Data-DAWG-Packed.html#unpack",
          "type": "function"
        },
        "index": {
          "description": "Create node from Word32 and NodeVector",
          "hierarchy": "Data DAWG Packed",
          "module": "Data.DAWG.Packed",
          "name": "unpack",
          "normalized": "Word-\u003eNodeVector-\u003eNode",
          "package": "packed-dawg",
          "signature": "Word-\u003eNodeVector-\u003eNode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:unpack"
      }
    }
  ]
]