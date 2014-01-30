[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFully minimized and bit-packed directed acyclic word graphs. \n\u003c/p\u003e\u003cp\u003eThis implementation mainly focuses on compactness (\u003c500 Kb space for ~150000 word dictionaries) rather than genericity or dynamic usage. There are no insertion or deletion operations.\n\u003c/p\u003e\u003cp\u003eA DAWG node is stored in four bytes, using 22 bits for indexing and 8 bits for data storage. This implies that\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e The number of nodes shouldn't exceed 2^22, or 4194304.\n\u003c/li\u003e\u003cli\u003e Input characters should be mapped to the 0-255 range.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "module",
        "fct-source": "src/Data-DAWG-Packed.html",
        "fct-type": "module",
        "title": "Packed"
      },
      "index": {
        "description": "Fully minimized and bit-packed directed acyclic word graphs This implementation mainly focuses on compactness Kb space for word dictionaries rather than genericity or dynamic usage There are no insertion or deletion operations DAWG node is stored in four bytes using bits for indexing and bits for data storage This implies that The number of nodes shouldn exceed or Input characters should be mapped to the range",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "Packed",
        "normalized": "",
        "package": "packed-dawg",
        "partial": "Packed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#t:Node",
      "description": {
        "fct-descr": "\u003cp\u003eThis data type points to a prefix in the DAWG. When a node is the root node\n it represents the whole DAWG. When it is non-root, it can be used to access the suffixes\n of the prefix pointed to by the node. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "data",
        "fct-source": "src/Data-DAWG-Packed.html#Node",
        "fct-type": "data",
        "title": "Node"
      },
      "index": {
        "description": "This data type points to prefix in the DAWG When node is the root node it represents the whole DAWG When it is non-root it can be used to access the suffixes of the prefix pointed to by the node",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "Node",
        "normalized": "",
        "package": "packed-dawg",
        "partial": "Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#t:NodeVector",
      "description": {
        "fct-descr": "\u003cp\u003eThe underlying container of the DAWG data. Modifying it will most likely result in an invalid DAWG.\n\u003c/p\u003e\u003cp\u003eEach \u003ca\u003eWord32\u003c/a\u003e represents a node. The format of a node is the following:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e 22 bits: the index of the first child.\n\u003c/li\u003e\u003cli\u003e 8 bits: character data.\n\u003c/li\u003e\u003cli\u003e 1 bit: end-of-word flag.\n\u003c/li\u003e\u003cli\u003e 1 bit: end-of-childlist flag.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe children of a node are laid out next to each other, so they can be iterated over by starting from the first child\nand incrementing the index until a node with the end-of-childlist flag is found. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "type",
        "fct-source": "src/Data-DAWG-Packed.html#NodeVector",
        "fct-type": "type",
        "title": "NodeVector"
      },
      "index": {
        "description": "The underlying container of the DAWG data Modifying it will most likely result in an invalid DAWG Each Word32 represents node The format of node is the following bits the index of the first child bits character data bit end-of-word flag bit end-of-childlist flag The children of node are laid out next to each other so they can be iterated over by starting from the first child and incrementing the index until node with the end-of-childlist flag is found",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "NodeVector",
        "normalized": "",
        "package": "packed-dawg",
        "partial": "Node Vector",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:char",
      "description": {
        "fct-descr": "\u003cp\u003eGet the character char of a node. The root nodes have the null character as char. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e Char",
        "fct-source": "src/Data-DAWG-Packed.html#char",
        "fct-type": "function",
        "title": "char"
      },
      "index": {
        "description": "Get the character char of node The root nodes have the null character as char",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "char",
        "normalized": "Node-\u003eChar",
        "package": "packed-dawg",
        "partial": "",
        "signature": "Node-\u003eChar"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:childIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGet the index of a node's first child node. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e Word32",
        "fct-source": "src/Data-DAWG-Packed.html#childIndex",
        "fct-type": "function",
        "title": "childIndex"
      },
      "index": {
        "description": "Get the index of node first child node",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "childIndex",
        "normalized": "Node-\u003eWord",
        "package": "packed-dawg",
        "partial": "Index",
        "signature": "Node-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:children",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate a list of the direct children of a node. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e [Node]",
        "fct-source": "src/Data-DAWG-Packed.html#children",
        "fct-type": "function",
        "title": "children"
      },
      "index": {
        "description": "Generate list of the direct children of node",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "children",
        "normalized": "Node-\u003e[Node]",
        "package": "packed-dawg",
        "partial": "",
        "signature": "Node-\u003e[Node]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:endOfList",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates whether a node is the last in a list of children nodes. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Data-DAWG-Packed.html#endOfList",
        "fct-type": "function",
        "title": "endOfList"
      },
      "index": {
        "description": "Indicates whether node is the last in list of children nodes",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "endOfList",
        "normalized": "Node-\u003eBool",
        "package": "packed-dawg",
        "partial": "Of List",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:endOfWord",
      "description": {
        "fct-descr": "\u003cp\u003eIndicates whether a prefix pointed to by the node is a valid word.\n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e Bool",
        "fct-source": "src/Data-DAWG-Packed.html#endOfWord",
        "fct-type": "function",
        "title": "endOfWord"
      },
      "index": {
        "description": "Indicates whether prefix pointed to by the node is valid word",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "endOfWord",
        "normalized": "Node-\u003eBool",
        "package": "packed-dawg",
        "partial": "Of Word",
        "signature": "Node-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003eAllows for faster DAWG generation than \u003ca\u003efromList\u003c/a\u003e. The ordering assumption is unchecked.\n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "[String] -\u003e Node",
        "fct-source": "src/Data-DAWG-Packed.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Allows for faster DAWG generation than fromList The ordering assumption is unchecked",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "fromAscList",
        "normalized": "[String]-\u003eNode",
        "package": "packed-dawg",
        "partial": "Asc List",
        "signature": "[String]-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromFile",
      "description": {
        "fct-descr": "\u003cp\u003eRead a DAWG previously serialized with \u003ca\u003etoFile\u003c/a\u003e from a file. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "FilePath -\u003e IO Node",
        "fct-source": "src/Data-DAWG-Packed.html#fromFile",
        "fct-type": "function",
        "title": "fromFile"
      },
      "index": {
        "description": "Read DAWG previously serialized with toFile from file",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "fromFile",
        "normalized": "FilePath-\u003eIO Node",
        "package": "packed-dawg",
        "partial": "File",
        "signature": "FilePath-\u003eIO Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:fromList",
      "description": {
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "[String] -\u003e Node",
        "fct-source": "src/Data-DAWG-Packed.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "fromList",
        "normalized": "[String]-\u003eNode",
        "package": "packed-dawg",
        "partial": "List",
        "signature": "[String]-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:getNodeAt",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a node from some memberent of a \u003ca\u003eNodeVector\u003c/a\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "NodeVector -\u003e Word32 -\u003e Node",
        "fct-source": "src/Data-DAWG-Packed.html#getNodeAt",
        "fct-type": "function",
        "title": "getNodeAt"
      },
      "index": {
        "description": "Create node from some memberent of NodeVector",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "getNodeAt",
        "normalized": "NodeVector-\u003eWord-\u003eNode",
        "package": "packed-dawg",
        "partial": "Node At",
        "signature": "NodeVector-\u003eWord-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:lookupPrefix",
      "description": {
        "fct-descr": "\u003cpre\u003elookupPrefix = lookupPrefixBy (==)\u003c/pre\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "String -\u003e Node -\u003e Maybe Node",
        "fct-source": "src/Data-DAWG-Packed.html#lookupPrefix",
        "fct-type": "function",
        "title": "lookupPrefix"
      },
      "index": {
        "description": "lookupPrefix lookupPrefixBy",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "lookupPrefix",
        "normalized": "String-\u003eNode-\u003eMaybe Node",
        "package": "packed-dawg",
        "partial": "Prefix",
        "signature": "String-\u003eNode-\u003eMaybe Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:lookupPrefixBy",
      "description": {
        "fct-descr": "\u003cp\u003eLookup a prefix by memberentwise applying a comparison function. It is useful for\n setting case sensitivity, e.g. \u003ccode\u003einsensitiveLookup = lookupPrefixBy (comparing toLower)\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "(Char -\u003e Char -\u003e Bool) -\u003e String -\u003e Node -\u003e Maybe Node",
        "fct-source": "src/Data-DAWG-Packed.html#lookupPrefixBy",
        "fct-type": "function",
        "title": "lookupPrefixBy"
      },
      "index": {
        "description": "Lookup prefix by memberentwise applying comparison function It is useful for setting case sensitivity e.g insensitiveLookup lookupPrefixBy comparing toLower",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "lookupPrefixBy",
        "normalized": "(Char-\u003eChar-\u003eBool)-\u003eString-\u003eNode-\u003eMaybe Node",
        "package": "packed-dawg",
        "partial": "Prefix By",
        "signature": "(Char-\u003eChar-\u003eBool)-\u003eString-\u003eNode-\u003eMaybe Node"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:member",
      "description": {
        "fct-descr": "\u003cpre\u003emember = memberBy (==)\u003c/pre\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "String -\u003e Node -\u003e Bool",
        "fct-source": "src/Data-DAWG-Packed.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "member memberBy",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "member",
        "normalized": "String-\u003eNode-\u003eBool",
        "package": "packed-dawg",
        "partial": "",
        "signature": "String-\u003eNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:memberBy",
      "description": {
        "fct-descr": "\u003cp\u003eTest for membership with an memberentwise comparison function. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "(Char -\u003e Char -\u003e Bool) -\u003e String -\u003e Node -\u003e Bool",
        "fct-source": "src/Data-DAWG-Packed.html#memberBy",
        "fct-type": "function",
        "title": "memberBy"
      },
      "index": {
        "description": "Test for membership with an memberentwise comparison function",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "memberBy",
        "normalized": "(Char-\u003eChar-\u003eBool)-\u003eString-\u003eNode-\u003eBool",
        "package": "packed-dawg",
        "partial": "By",
        "signature": "(Char-\u003eChar-\u003eBool)-\u003eString-\u003eNode-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:nodeVector",
      "description": {
        "fct-descr": "\u003cp\u003eGet the underlying vector from a node.\n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e NodeVector",
        "fct-source": "src/Data-DAWG-Packed.html#nodeVector",
        "fct-type": "function",
        "title": "nodeVector"
      },
      "index": {
        "description": "Get the underlying vector from node",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "nodeVector",
        "normalized": "Node-\u003eNodeVector",
        "package": "packed-dawg",
        "partial": "Vector",
        "signature": "Node-\u003eNodeVector"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:pack",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a bit-packed Word32. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Char -\u003e Bool -\u003e Bool -\u003e Int -\u003e Word32",
        "fct-source": "src/Data-DAWG-Packed.html#pack",
        "fct-type": "function",
        "title": "pack"
      },
      "index": {
        "description": "Create bit-packed Word32",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "pack",
        "normalized": "Char-\u003eBool-\u003eBool-\u003eInt-\u003eWord",
        "package": "packed-dawg",
        "partial": "",
        "signature": "Char-\u003eBool-\u003eBool-\u003eInt-\u003eWord"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:root",
      "description": {
        "fct-descr": "\u003cp\u003eGet the root node from a node. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e Node",
        "fct-source": "src/Data-DAWG-Packed.html#root",
        "fct-type": "function",
        "title": "root"
      },
      "index": {
        "description": "Get the root node from node",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "root",
        "normalized": "Node-\u003eNode",
        "package": "packed-dawg",
        "partial": "",
        "signature": "Node-\u003eNode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:toFile",
      "description": {
        "fct-descr": "\u003cp\u003eSerialize a DAWG. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "FilePath -\u003e Node -\u003e IO ()",
        "fct-source": "src/Data-DAWG-Packed.html#toFile",
        "fct-type": "function",
        "title": "toFile"
      },
      "index": {
        "description": "Serialize DAWG",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "toFile",
        "normalized": "FilePath-\u003eNode-\u003eIO()",
        "package": "packed-dawg",
        "partial": "File",
        "signature": "FilePath-\u003eNode-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of all suffixes that end on a valid word ending. \n When used on the root node this function enlists the original words. The resulting list is unsorted.\n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Node -\u003e [String]",
        "fct-source": "src/Data-DAWG-Packed.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Get the list of all suffixes that end on valid word ending When used on the root node this function enlists the original words The resulting list is unsorted",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "toList",
        "normalized": "Node-\u003e[String]",
        "package": "packed-dawg",
        "partial": "List",
        "signature": "Node-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/packed-dawg/docs/Data-DAWG-Packed.html#v:unpack",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a node from a \u003ca\u003eWord32\u003c/a\u003e and a \u003ca\u003eNodeVector\u003c/a\u003e. \n\u003c/p\u003e",
        "fct-module": "Data.DAWG.Packed",
        "fct-package": "packed-dawg",
        "fct-signature": "Word32 -\u003e NodeVector -\u003e Node",
        "fct-source": "src/Data-DAWG-Packed.html#unpack",
        "fct-type": "function",
        "title": "unpack"
      },
      "index": {
        "description": "Create node from Word32 and NodeVector",
        "hierarchy": "Data DAWG Packed",
        "module": "Data.DAWG.Packed",
        "name": "unpack",
        "normalized": "Word-\u003eNodeVector-\u003eNode",
        "package": "packed-dawg",
        "partial": "",
        "signature": "Word-\u003eNodeVector-\u003eNode"
      }
    }
  }
]