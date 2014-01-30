[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines a simple key/value list ordered by keys\n   which both faster and more suitable for bencode dictionaries than\n   just [(k,v)].\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "module",
        "fct-source": "src/Data-BEncode-BDict.html",
        "fct-type": "module",
        "title": "BDict"
      },
      "index": {
        "description": "This module defines simple key value list ordered by keys which both faster and more suitable for bencode dictionaries than just",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "BDict",
        "normalized": "",
        "package": "bencoding",
        "partial": "BDict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#t:BDictMap",
      "description": {
        "fct-descr": "\u003cp\u003eBDictMap is an ascending list of key/value pairs sorted by keys.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "data",
        "fct-source": "src/Data-BEncode-BDict.html#BDictMap",
        "fct-type": "data",
        "title": "BDictMap"
      },
      "index": {
        "description": "BDictMap is an ascending list of key value pairs sorted by keys",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "BDictMap",
        "normalized": "",
        "package": "bencoding",
        "partial": "BDict Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#t:BKey",
      "description": {
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode-BDict.html#BKey",
        "fct-type": "type",
        "title": "BKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "BKey",
        "normalized": "",
        "package": "bencoding",
        "partial": "BKey",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:Cons",
      "description": {
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "Cons !BKey a !(BDictMap a)",
        "fct-source": "src/Data-BEncode-BDict.html#BDictMap",
        "fct-type": "function",
        "title": "Cons"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "Cons",
        "normalized": "",
        "package": "bencoding",
        "partial": "Cons",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:Nil",
      "description": {
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "Nil",
        "fct-source": "src/Data-BEncode-BDict.html#BDictMap",
        "fct-type": "function",
        "title": "Nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "Nil",
        "normalized": "",
        "package": "bencoding",
        "partial": "Nil",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:bifoldMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Map each key/value pair to a monoid and fold resulting\n sequnce using \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "(BKey -\u003e a -\u003e m) -\u003e BDictMap a -\u003e m",
        "fct-source": "src/Data-BEncode-BDict.html#bifoldMap",
        "fct-type": "function",
        "title": "bifoldMap"
      },
      "index": {
        "description": "Map each key value pair to monoid and fold resulting sequnce using mappend",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "bifoldMap",
        "normalized": "(BKey-\u003ea-\u003eb)-\u003eBDictMap a-\u003eb",
        "package": "bencoding",
        "partial": "Map",
        "signature": "(BKey-\u003ea-\u003em)-\u003eBDictMap a-\u003em"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:empty",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. The empty dicionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BDictMap a",
        "fct-source": "src/Data-BEncode-BDict.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "The empty dicionary",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "empty",
        "normalized": "",
        "package": "bencoding",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:fromAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Build a dictionary from a list of key/value pairs where\n the keys are in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "[(BKey, a)] -\u003e BDictMap a",
        "fct-source": "src/Data-BEncode-BDict.html#fromAscList",
        "fct-type": "function",
        "title": "fromAscList"
      },
      "index": {
        "description": "Build dictionary from list of key value pairs where the keys are in ascending order",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "fromAscList",
        "normalized": "[(BKey,a)]-\u003eBDictMap a",
        "package": "bencoding",
        "partial": "Asc List",
        "signature": "[(BKey,a)]-\u003eBDictMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Lookup the value at a key in the dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e BDictMap a -\u003e Maybe a",
        "fct-source": "src/Data-BEncode-BDict.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Lookup the value at key in the dictionary",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "lookup",
        "normalized": "BKey-\u003eBDictMap a-\u003eMaybe a",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eBDictMap a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n).\u003c/em\u003e Map a function over all values in the dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "(a -\u003e b) -\u003e BDictMap a -\u003e BDictMap b",
        "fct-source": "src/Data-BEncode-BDict.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the dictionary",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eBDictMap a-\u003eBDictMap b",
        "package": "bencoding",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBDictMap a-\u003eBDictMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Is the key a member of the dictionary?\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e BDictMap a -\u003e Bool",
        "fct-source": "src/Data-BEncode-BDict.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "Is the key member of the dictionary",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "member",
        "normalized": "BKey-\u003eBDictMap a-\u003eBool",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eBDictMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Is the dictionary empty?\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BDictMap a -\u003e Bool",
        "fct-source": "src/Data-BEncode-BDict.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the dictionary empty",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "null",
        "normalized": "BDictMap a-\u003eBool",
        "package": "bencoding",
        "partial": "",
        "signature": "BDictMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e. Dictionary of one key-value pair.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e a -\u003e BDictMap a",
        "fct-source": "src/Data-BEncode-BDict.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Dictionary of one key-value pair",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "singleton",
        "normalized": "BKey-\u003ea-\u003eBDictMap a",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003ea-\u003eBDictMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:toAscList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e. Convert the dictionary to a list of key/value pairs\n where the keys are in ascending order.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BDictMap a -\u003e [(BKey, a)]",
        "fct-source": "src/Data-BEncode-BDict.html#toAscList",
        "fct-type": "function",
        "title": "toAscList"
      },
      "index": {
        "description": "Convert the dictionary to list of key value pairs where the keys are in ascending order",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "toAscList",
        "normalized": "BDictMap a-\u003e[(BKey,a)]",
        "package": "bencoding",
        "partial": "Asc List",
        "signature": "BDictMap a-\u003e[(BKey,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-BDict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n + m)\u003c/em\u003e. Merge two dictionaries by taking pair from both given\n dictionaries. Dublicated keys are \u003cem\u003enot\u003c/em\u003e filtered.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.BDict",
        "fct-package": "bencoding",
        "fct-signature": "BDictMap a -\u003e BDictMap a -\u003e BDictMap a",
        "fct-source": "src/Data-BEncode-BDict.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Merge two dictionaries by taking pair from both given dictionaries Dublicated keys are not filtered",
        "hierarchy": "Data BEncode BDict",
        "module": "Data.BEncode.BDict",
        "name": "union",
        "normalized": "BDictMap a-\u003eBDictMap a-\u003eBDictMap a",
        "package": "bencoding",
        "partial": "",
        "signature": "BDictMap a-\u003eBDictMap a-\u003eBDictMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides bencode values serialization. Normally, you\n   don't need to import this module, use \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "module",
        "fct-source": "src/Data-BEncode-Internal.html",
        "fct-type": "module",
        "title": "Internal"
      },
      "index": {
        "description": "This module provides bencode values serialization Normally you don need to import this module use BEncode instead",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "Internal",
        "normalized": "",
        "package": "bencoding",
        "partial": "Internal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#v:build",
      "description": {
        "fct-descr": "\u003cp\u003eConvert bencoded value to raw bytestring according to the\n specification.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Lazy.ByteString",
        "fct-source": "src/Data-BEncode-Internal.html#build",
        "fct-type": "function",
        "title": "build"
      },
      "index": {
        "description": "Convert bencoded value to raw bytestring according to the specification",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "build",
        "normalized": "BValue-\u003eLazy.ByteString",
        "package": "bencoding",
        "partial": "",
        "signature": "BValue-\u003eLazy.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#v:builder",
      "description": {
        "fct-descr": "\u003cp\u003eBEncode format encoder according to specification.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e B.Builder",
        "fct-source": "src/Data-BEncode-Internal.html#builder",
        "fct-type": "function",
        "title": "builder"
      },
      "index": {
        "description": "BEncode format encoder according to specification",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "builder",
        "normalized": "BValue-\u003eB.Builder",
        "package": "bencoding",
        "partial": "",
        "signature": "BValue-\u003eB.Builder"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eTry to convert raw bytestring to bencoded value according to\n specification.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "B.ByteString -\u003e Either String BValue",
        "fct-source": "src/Data-BEncode-Internal.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Try to convert raw bytestring to bencoded value according to specification",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "parse",
        "normalized": "B.ByteString-\u003eEither String BValue",
        "package": "bencoding",
        "partial": "",
        "signature": "B.ByteString-\u003eEither String BValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#v:parser",
      "description": {
        "fct-descr": "\u003cp\u003eBEncode format parser according to specification.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "Parser BValue",
        "fct-source": "src/Data-BEncode-Internal.html#parser",
        "fct-type": "function",
        "title": "parser"
      },
      "index": {
        "description": "BEncode format parser according to specification",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "parser",
        "normalized": "",
        "package": "bencoding",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Internal.html#v:ppBEncode",
      "description": {
        "fct-descr": "\u003cp\u003eConvert to easily readable JSON-like document. Typically used for\n debugging purposes.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Internal",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Doc",
        "fct-source": "src/Data-BEncode-Internal.html#ppBEncode",
        "fct-type": "function",
        "title": "ppBEncode"
      },
      "index": {
        "description": "Convert to easily readable JSON-like document Typically used for debugging purposes",
        "hierarchy": "Data BEncode Internal",
        "module": "Data.BEncode.Internal",
        "name": "ppBEncode",
        "normalized": "BValue-\u003eDoc",
        "package": "bencoding",
        "partial": "BEncode",
        "signature": "BValue-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTypes for working with bencode data.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "module",
        "fct-source": "src/Data-BEncode-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Types for working with bencode data",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "Types",
        "normalized": "",
        "package": "bencoding",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#t:BDict",
      "description": {
        "fct-descr": "\u003cp\u003eA bencode dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode-Types.html#BDict",
        "fct-type": "type",
        "title": "BDict"
      },
      "index": {
        "description": "bencode dictionary",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BDict",
        "normalized": "",
        "package": "bencoding",
        "partial": "BDict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#t:BInteger",
      "description": {
        "fct-descr": "\u003cp\u003eA bencode \u003ca\u003einteger\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode-Types.html#BInteger",
        "fct-type": "type",
        "title": "BInteger"
      },
      "index": {
        "description": "bencode integer",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BInteger",
        "normalized": "",
        "package": "bencoding",
        "partial": "BInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#t:BList",
      "description": {
        "fct-descr": "\u003cp\u003eA plain bencode list.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode-Types.html#BList",
        "fct-type": "type",
        "title": "BList"
      },
      "index": {
        "description": "plain bencode list",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BList",
        "normalized": "",
        "package": "bencoding",
        "partial": "BList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#t:BString",
      "description": {
        "fct-descr": "\u003cp\u003eA raw bencode string.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode-Types.html#BString",
        "fct-type": "type",
        "title": "BString"
      },
      "index": {
        "description": "raw bencode string",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BString",
        "normalized": "",
        "package": "bencoding",
        "partial": "BString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#t:BValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e is straightforward ADT for b-encoded values. Please\n note that since dictionaries are sorted, in most cases we can\n compare BEncoded values without serialization and vice versa.\n Lists is not required to be sorted through.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "data",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "data",
        "title": "BValue"
      },
      "index": {
        "description": "BValue is straightforward ADT for b-encoded values Please note that since dictionaries are sorted in most cases we can compare BEncoded values without serialization and vice versa Lists is not required to be sorted through",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BValue",
        "normalized": "",
        "package": "bencoding",
        "partial": "BValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:BDict",
      "description": {
        "fct-descr": "\u003cp\u003ebencode key-value dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BDict BDict",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BDict"
      },
      "index": {
        "description": "bencode key-value dictionary",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BDict",
        "normalized": "",
        "package": "bencoding",
        "partial": "BDict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:BInteger",
      "description": {
        "fct-descr": "\u003cp\u003ebencode integers;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BInteger !BInteger",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BInteger"
      },
      "index": {
        "description": "bencode integers",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BInteger",
        "normalized": "",
        "package": "bencoding",
        "partial": "BInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:BList",
      "description": {
        "fct-descr": "\u003cp\u003elist of bencode values;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BList BList",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BList"
      },
      "index": {
        "description": "list of bencode values",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BList",
        "normalized": "",
        "package": "bencoding",
        "partial": "BList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:BString",
      "description": {
        "fct-descr": "\u003cp\u003ebencode strings;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BString !BString",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BString"
      },
      "index": {
        "description": "bencode strings",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "BString",
        "normalized": "",
        "package": "bencoding",
        "partial": "BString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:isDict",
      "description": {
        "fct-descr": "\u003cp\u003eTest if bencoded value is a dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Bool",
        "fct-source": "src/Data-BEncode-Types.html#isDict",
        "fct-type": "function",
        "title": "isDict"
      },
      "index": {
        "description": "Test if bencoded value is dictionary",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "isDict",
        "normalized": "BValue-\u003eBool",
        "package": "bencoding",
        "partial": "Dict",
        "signature": "BValue-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:isInteger",
      "description": {
        "fct-descr": "\u003cp\u003eTest if bencoded value is an integer.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Bool",
        "fct-source": "src/Data-BEncode-Types.html#isInteger",
        "fct-type": "function",
        "title": "isInteger"
      },
      "index": {
        "description": "Test if bencoded value is an integer",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "isInteger",
        "normalized": "BValue-\u003eBool",
        "package": "bencoding",
        "partial": "Integer",
        "signature": "BValue-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:isList",
      "description": {
        "fct-descr": "\u003cp\u003eTest if bencoded value is a list.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Bool",
        "fct-source": "src/Data-BEncode-Types.html#isList",
        "fct-type": "function",
        "title": "isList"
      },
      "index": {
        "description": "Test if bencoded value is list",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "isList",
        "normalized": "BValue-\u003eBool",
        "package": "bencoding",
        "partial": "List",
        "signature": "BValue-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode-Types.html#v:isString",
      "description": {
        "fct-descr": "\u003cp\u003eTest if bencoded value is a string, both raw and utf8 encoded.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode.Types",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Bool",
        "fct-source": "src/Data-BEncode-Types.html#isString",
        "fct-type": "function",
        "title": "isString"
      },
      "index": {
        "description": "Test if bencoded value is string both raw and utf8 encoded",
        "hierarchy": "Data BEncode Types",
        "module": "Data.BEncode.Types",
        "name": "isString",
        "normalized": "BValue-\u003eBool",
        "package": "bencoding",
        "partial": "String",
        "signature": "BValue-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides convinient and fast way to serialize,\n   deserealize and construct/destructure Bencoded values with\n   optional fields.\n\u003c/p\u003e\u003cp\u003eIt supports four different types of values:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e byte strings &#8212; represented as \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e integers     &#8212; represented as \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003cli\u003e lists        - represented as ordinary lists;\n\u003c/li\u003e\u003cli\u003e dictionaries &#8212; represented as \u003ccode\u003e\u003ca\u003eBDictMap\u003c/a\u003e\u003c/code\u003e;\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eTo serialize any other types we need to make conversion.  To\n    make conversion more convenient there is type class for it:\n    \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e. Any textual strings are considered as UTF8 encoded\n    \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe complete Augmented BNF syntax for bencoding format is:\n\u003c/p\u003e\u003cpre\u003e \u003cBE\u003e    ::= \u003cDICT\u003e | \u003cLIST\u003e | \u003cINT\u003e | \u003cSTR\u003e\n\n \u003cDICT\u003e  ::= \"d\" 1 * (\u003cSTR\u003e \u003cBE\u003e) \"e\"\n \u003cLIST\u003e  ::= \"l\" 1 * \u003cBE\u003e         \"e\"\n \u003cINT\u003e   ::= \"i\"     \u003cSNUM\u003e       \"e\"\n \u003cSTR\u003e   ::= \u003cNUM\u003e \":\" n * \u003cCHAR\u003e; where n equals the \u003cNUM\u003e\n\n \u003cSNUM\u003e  ::= \"-\" \u003cNUM\u003e / \u003cNUM\u003e\n \u003cNUM\u003e   ::= 1 * \u003cDIGIT\u003e\n \u003cCHAR\u003e  ::= %\n \u003cDIGIT\u003e ::= \"0\" | \"1\" | \"2\" | \"3\" | \"4\" | \"5\" | \"6\" | \"7\" | \"8\" | \"9\"\n\u003c/pre\u003e\u003cp\u003eThis module is considered to be imported qualified, for example:\n\u003c/p\u003e\u003cpre\u003e import Data.BEncode as BE\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "module",
        "fct-source": "src/Data-BEncode.html",
        "fct-type": "module",
        "title": "BEncode"
      },
      "index": {
        "description": "This module provides convinient and fast way to serialize deserealize and construct destructure Bencoded values with optional fields It supports four different types of values byte strings represented as ByteString integers represented as Integer lists represented as ordinary lists dictionaries represented as BDictMap To serialize any other types we need to make conversion To make conversion more convenient there is type class for it BEncode Any textual strings are considered as UTF8 encoded Text The complete Augmented BNF syntax for bencoding format is BE DICT LIST INT STR DICT STR BE LIST BE INT SNUM STR NUM CHAR where equals the NUM SNUM NUM NUM NUM DIGIT CHAR DIGIT This module is considered to be imported qualified for example import Data.BEncode as BE",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BEncode",
        "normalized": "",
        "package": "bencoding",
        "partial": "BEncode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#t:Assoc",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eAssoc\u003c/em\u003e used to easily build dictionaries with required and\n optional keys. Suppose we have we following datatype we want to\n serialize:\n\u003c/p\u003e\u003cpre\u003e\n   data FileInfo = FileInfo\n     { fileLength :: Integer\n     , fileMD5sum :: Maybe ByteString\n     , filePath   :: [ByteString]\n     , fileTags   :: Maybe [Text]\n     } deriving (Show, Read, Eq)\n\u003c/pre\u003e\u003cp\u003eWe need to make \u003ccode\u003einstance \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e FileInfo\u003c/code\u003e, though we don't want\n to check the both \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003es manually. The more declarative and\n convenient way to define the \u003ccode\u003e\u003ca\u003etoBEncode\u003c/a\u003e\u003c/code\u003e method is to use\n dictionary builders:\n\u003c/p\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e FileInfo where\n     \u003ccode\u003e\u003ca\u003etoBEncode\u003c/a\u003e\u003c/code\u003e FileInfo {..} = \u003ccode\u003e\u003ca\u003etoDict\u003c/a\u003e\u003c/code\u003e $\n          \"length\" \u003ccode\u003e\u003ca\u003e.=!\u003c/a\u003e\u003c/code\u003e fileLength\n       \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"md5sum\" \u003ccode\u003e\u003ca\u003e.=?\u003c/a\u003e\u003c/code\u003e fileMD5sum\n       \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"path\"   \u003ccode\u003e\u003ca\u003e.=!\u003c/a\u003e\u003c/code\u003e filePath\n       \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \"tags\"   \u003ccode\u003e\u003ca\u003e.=?\u003c/a\u003e\u003c/code\u003e fileTags\n       \u003ccode\u003e\u003ca\u003e.:\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eendDict\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003cp\u003eNOTE: the list of pairs MUST be sorted lexicographically by keys,\n  like so:\n\u003c/p\u003e\u003cp\u003e\"length\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"md5sum\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"path\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"tags\"\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "data",
        "fct-source": "src/Data-BEncode.html#Assoc",
        "fct-type": "data",
        "title": "Assoc"
      },
      "index": {
        "description": "Assoc used to easily build dictionaries with required and optional keys Suppose we have we following datatype we want to serialize data FileInfo FileInfo fileLength Integer fileMD5sum Maybe ByteString filePath ByteString fileTags Maybe Text deriving Show Read Eq We need to make instance BEncode FileInfo though we don want to check the both Maybe manually The more declarative and convenient way to define the toBEncode method is to use dictionary builders instance BEncode FileInfo where toBEncode FileInfo toDict length fileLength md5sum fileMD5sum path filePath tags fileTags endDict NOTE the list of pairs MUST be sorted lexicographically by keys like so length md5sum path tags",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "Assoc",
        "normalized": "",
        "package": "bencoding",
        "partial": "Assoc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#t:BEncode",
      "description": {
        "fct-descr": "\u003cp\u003eThis class is used to define new datatypes that could be easily\n serialized using bencode format.\n\u003c/p\u003e\u003cp\u003eBy default \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e have a generic implementation; suppose\n   the following datatype:\n\u003c/p\u003e\u003cpre\u003e data List a = C { _head  :: a\n                 , __tail :: List a }\n             | N\n               deriving Generic\n\u003c/pre\u003e\u003cp\u003eIf we don't need to obey any particular specification or\n   standard, the default instance could be derived automatically\n   from the \u003ccode\u003e\u003ca\u003eGeneric\u003c/a\u003e\u003c/code\u003e instance:\n\u003c/p\u003e\u003cpre\u003e instance BEncode a =\u003e BEncode (List a)\n\u003c/pre\u003e\u003cp\u003eExample of derived \u003ccode\u003e\u003ca\u003etoBEncode\u003c/a\u003e\u003c/code\u003e result:\n\u003c/p\u003e\u003cpre\u003e \u003e toBEncode (C 123 $ C 1 N)\n BDict (fromList [(\"head\",BInteger 123),(\"tail\",BList [])])\n\u003c/pre\u003e\u003cp\u003eNote that prefixed underscore characters are omitted since they\n  are usually used for lens.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "class",
        "fct-source": "src/Data-BEncode.html#BEncode",
        "fct-type": "class",
        "title": "BEncode"
      },
      "index": {
        "description": "This class is used to define new datatypes that could be easily serialized using bencode format By default BEncode have generic implementation suppose the following datatype data List head tail List deriving Generic If we don need to obey any particular specification or standard the default instance could be derived automatically from the Generic instance instance BEncode BEncode List Example of derived toBEncode result toBEncode BDict fromList head BInteger tail BList Note that prefixed underscore characters are omitted since they are usually used for lens",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BEncode",
        "normalized": "",
        "package": "bencoding",
        "partial": "BEncode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#t:BValue",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBValue\u003c/a\u003e\u003c/code\u003e is straightforward ADT for b-encoded values. Please\n note that since dictionaries are sorted, in most cases we can\n compare BEncoded values without serialization and vice versa.\n Lists is not required to be sorted through.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "data",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "data",
        "title": "BValue"
      },
      "index": {
        "description": "BValue is straightforward ADT for b-encoded values Please note that since dictionaries are sorted in most cases we can compare BEncoded values without serialization and vice versa Lists is not required to be sorted through",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BValue",
        "normalized": "",
        "package": "bencoding",
        "partial": "BValue",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#t:Get",
      "description": {
        "fct-descr": "\u003cp\u003eDictionary extractor are similar to dictionary builders, but play\n the opposite role: they are used to define \u003ccode\u003e\u003ca\u003efromBEncode\u003c/a\u003e\u003c/code\u003e method in\n declarative style. Using the same \u003cem\u003eFileInfo\u003c/em\u003e datatype the\n \u003ccode\u003e\u003ca\u003efromBEncode\u003c/a\u003e\u003c/code\u003e function instance looks like:\n\u003c/p\u003e\u003cpre\u003e\n   instance \u003ccode\u003e\u003ca\u003eBEncode\u003c/a\u003e\u003c/code\u003e FileInfo where\n     \u003ccode\u003e\u003ca\u003efromBEncode\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003efromDict\u003c/a\u003e\u003c/code\u003e $ do\n       FileInfo \u003ccode\u003e\u003ca\u003e\u003c$\u003e!\u003c/a\u003e\u003c/code\u003e \"length\"\n                \u003ccode\u003e\u003ca\u003e\u003c*\u003e?\u003c/a\u003e\u003c/code\u003e \"md5sum\"\n                \u003ccode\u003e\u003ca\u003e\u003c*\u003e!\u003c/a\u003e\u003c/code\u003e \"path\"\n                \u003ccode\u003e\u003ca\u003e\u003c*\u003e?\u003c/a\u003e\u003c/code\u003e \"tags\"\n\u003c/pre\u003e\u003cp\u003eThe \u003cem\u003ereqKey\u003c/em\u003e is used to extract required key &#8212; if lookup is failed\n  then whole destructuring fail.\n\u003c/p\u003e\u003cp\u003eNOTE: the actions MUST be sorted lexicographically by keys, like so:\n\u003c/p\u003e\u003cp\u003e\"length\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"md5sum\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"path\" \u003ccode\u003e\u003ca\u003e\u003c\u003c/a\u003e\u003c/code\u003e \"tags\"\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "data",
        "fct-source": "src/Data-BEncode.html#Get",
        "fct-type": "data",
        "title": "Get"
      },
      "index": {
        "description": "Dictionary extractor are similar to dictionary builders but play the opposite role they are used to define fromBEncode method in declarative style Using the same FileInfo datatype the fromBEncode function instance looks like instance BEncode FileInfo where fromBEncode fromDict do FileInfo length md5sum path tags The reqKey is used to extract required key if lookup is failed then whole destructuring fail NOTE the actions MUST be sorted lexicographically by keys like so length md5sum path tags",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "Get",
        "normalized": "",
        "package": "bencoding",
        "partial": "Get",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003eResult used in decoding operations.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "type",
        "fct-source": "src/Data-BEncode.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "Result used in decoding operations",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "Result",
        "normalized": "",
        "package": "bencoding",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:-60--36--62--33-",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for: \u003ccode\u003ef \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereq\u003c/a\u003e\u003c/code\u003e k)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "(a -\u003e b) -\u003e BKey -\u003e Get b",
        "fct-source": "src/Data-BEncode.html#%3C%24%3E%21",
        "fct-type": "function",
        "title": "(\u003c$\u003e!)"
      },
      "index": {
        "description": "Shorthand for field req",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(\u003c$\u003e!) \u003c$\u003e!",
        "normalized": "(a-\u003eb)-\u003eBKey-\u003eGet b",
        "package": "bencoding",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eBKey-\u003eGet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:-60--36--62--63-",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for: \u003ccode\u003ef \u003ccode\u003e\u003ca\u003e\u003c$\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoptional\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereq\u003c/a\u003e\u003c/code\u003e k))\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "(Maybe a -\u003e b) -\u003e BKey -\u003e Get b",
        "fct-source": "src/Data-BEncode.html#%3C%24%3E%3F",
        "fct-type": "function",
        "title": "(\u003c$\u003e?)"
      },
      "index": {
        "description": "Shorthand for optional field req",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(\u003c$\u003e?) \u003c$\u003e?",
        "normalized": "(Maybe a-\u003eb)-\u003eBKey-\u003eGet b",
        "package": "bencoding",
        "partial": "",
        "signature": "(Maybe a-\u003eb)-\u003eBKey-\u003eGet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:-60--42--62--33-",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for: \u003ccode\u003ef \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereq\u003c/a\u003e\u003c/code\u003e k)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get (a -\u003e b) -\u003e BKey -\u003e Get b",
        "fct-source": "src/Data-BEncode.html#%3C%2A%3E%21",
        "fct-type": "function",
        "title": "(\u003c*\u003e!)"
      },
      "index": {
        "description": "Shorthand for field req",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(\u003c*\u003e!) \u003c*\u003e!",
        "normalized": "Get(a-\u003eb)-\u003eBKey-\u003eGet b",
        "package": "bencoding",
        "partial": "",
        "signature": "Get(a-\u003eb)-\u003eBKey-\u003eGet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:-60--42--62--63-",
      "description": {
        "fct-descr": "\u003cp\u003eShorthand for: \u003ccode\u003ef \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eoptional\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efield\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003ereq\u003c/a\u003e\u003c/code\u003e k))\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get (Maybe a -\u003e b) -\u003e BKey -\u003e Get b",
        "fct-source": "src/Data-BEncode.html#%3C%2A%3E%3F",
        "fct-type": "function",
        "title": "(\u003c*\u003e?)"
      },
      "index": {
        "description": "Shorthand for optional field req",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(\u003c*\u003e?) \u003c*\u003e?",
        "normalized": "Get(Maybe a-\u003eb)-\u003eBKey-\u003eGet b",
        "package": "bencoding",
        "partial": "",
        "signature": "Get(Maybe a-\u003eb)-\u003eBKey-\u003eGet b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:.-61--33-",
      "description": {
        "fct-descr": "\u003cp\u003eMake required key value pair.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e a -\u003e Assoc",
        "fct-source": "src/Data-BEncode.html#.%3D%21",
        "fct-type": "function",
        "title": "(.=!)"
      },
      "index": {
        "description": "Make required key value pair",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(.=!) .=!",
        "normalized": "BKey-\u003ea-\u003eAssoc",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003ea-\u003eAssoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:.-61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eLike the (\u003ccode\u003e\u003ca\u003e.=!\u003c/a\u003e\u003c/code\u003e) operator but if the value is not present then\n the key do not appear in resulting bencode dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e Maybe a -\u003e Assoc",
        "fct-source": "src/Data-BEncode.html#.%3D%3F",
        "fct-type": "function",
        "title": "(.=?)"
      },
      "index": {
        "description": "Like the operator but if the value is not present then the key do not appear in resulting bencode dictionary",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(.=?) .=?",
        "normalized": "BKey-\u003eMaybe a-\u003eAssoc",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eMaybe a-\u003eAssoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:.:",
      "description": {
        "fct-descr": "\u003cp\u003eCons a key/value pair.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Assoc -\u003e BDict -\u003e BDict",
        "fct-source": "src/Data-BEncode.html#.%3A",
        "fct-type": "function",
        "title": "(.:)"
      },
      "index": {
        "description": "Cons key value pair",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "(.:) .:",
        "normalized": "Assoc-\u003eBDict-\u003eBDict",
        "package": "bencoding",
        "partial": "",
        "signature": "Assoc-\u003eBDict-\u003eBDict"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:BDict",
      "description": {
        "fct-descr": "\u003cp\u003ebencode key-value dictionary.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BDict BDict",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BDict"
      },
      "index": {
        "description": "bencode key-value dictionary",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BDict",
        "normalized": "",
        "package": "bencoding",
        "partial": "BDict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:BInteger",
      "description": {
        "fct-descr": "\u003cp\u003ebencode integers;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BInteger !BInteger",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BInteger"
      },
      "index": {
        "description": "bencode integers",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BInteger",
        "normalized": "",
        "package": "bencoding",
        "partial": "BInteger",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:BList",
      "description": {
        "fct-descr": "\u003cp\u003elist of bencode values;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BList BList",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BList"
      },
      "index": {
        "description": "list of bencode values",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BList",
        "normalized": "",
        "package": "bencoding",
        "partial": "BList",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:BString",
      "description": {
        "fct-descr": "\u003cp\u003ebencode strings;\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BString !BString",
        "fct-source": "src/Data-BEncode-Types.html#BValue",
        "fct-type": "function",
        "title": "BString"
      },
      "index": {
        "description": "bencode strings",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "BString",
        "normalized": "",
        "package": "bencoding",
        "partial": "BString",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:decode",
      "description": {
        "fct-descr": "\u003cp\u003eDecode a value from a strict \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e using bencode format.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "ByteString -\u003e Result a",
        "fct-source": "src/Data-BEncode.html#decode",
        "fct-type": "function",
        "title": "decode"
      },
      "index": {
        "description": "Decode value from strict ByteString using bencode format",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "decode",
        "normalized": "ByteString-\u003eResult a",
        "package": "bencoding",
        "partial": "",
        "signature": "ByteString-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:decodingError",
      "description": {
        "fct-descr": "\u003cp\u003eTypically used to throw an decoding error in fromBEncode; when\n BEncode value to match expected value.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "String -\u003e Result a",
        "fct-source": "src/Data-BEncode.html#decodingError",
        "fct-type": "function",
        "title": "decodingError"
      },
      "index": {
        "description": "Typically used to throw an decoding error in fromBEncode when BEncode value to match expected value",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "decodingError",
        "normalized": "String-\u003eResult a",
        "package": "bencoding",
        "partial": "Error",
        "signature": "String-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:encode",
      "description": {
        "fct-descr": "\u003cp\u003eEncode a value using bencode format to a lazy \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "a -\u003e Lazy.ByteString",
        "fct-source": "src/Data-BEncode.html#encode",
        "fct-type": "function",
        "title": "encode"
      },
      "index": {
        "description": "Encode value using bencode format to lazy ByteString",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "encode",
        "normalized": "a-\u003eLazy.ByteString",
        "package": "bencoding",
        "partial": "",
        "signature": "a-\u003eLazy.ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:endDict",
      "description": {
        "fct-descr": "\u003cp\u003eUsed to specify end of dictionary. See \u003ccode\u003e\u003ca\u003eAssoc\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BDict",
        "fct-source": "src/Data-BEncode.html#endDict",
        "fct-type": "function",
        "title": "endDict"
      },
      "index": {
        "description": "Used to specify end of dictionary See Assoc",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "endDict",
        "normalized": "",
        "package": "bencoding",
        "partial": "Dict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eReconstruct a bencodable value from bencode value.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get BValue -\u003e Get a",
        "fct-source": "src/Data-BEncode.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Reconstruct bencodable value from bencode value",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "field",
        "normalized": "Get BValue-\u003eGet a",
        "package": "bencoding",
        "partial": "",
        "signature": "Get BValue-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:fromBEncode",
      "description": {
        "fct-descr": "\u003cp\u003eSee an example of implementation here \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BValue -\u003e Result a",
        "fct-source": "src/Data-BEncode.html#fromBEncode",
        "fct-type": "method",
        "title": "fromBEncode"
      },
      "index": {
        "description": "See an example of implementation here Get",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "fromBEncode",
        "normalized": "BValue-\u003eResult a",
        "package": "bencoding",
        "partial": "BEncode",
        "signature": "BValue-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:fromDict",
      "description": {
        "fct-descr": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e monad. See \u003ccode\u003e\u003ca\u003eGet\u003c/a\u003e\u003c/code\u003e for usage.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get a -\u003e BValue -\u003e Result a",
        "fct-source": "src/Data-BEncode.html#fromDict",
        "fct-type": "function",
        "title": "fromDict"
      },
      "index": {
        "description": "Run Get monad See Get for usage",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "fromDict",
        "normalized": "Get a-\u003eBValue-\u003eResult a",
        "package": "bencoding",
        "partial": "Dict",
        "signature": "Get a-\u003eBValue-\u003eResult a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eRun action, but return without consuming and key/value pair.\n Fails if the action fails.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get a -\u003e Get a",
        "fct-source": "src/Data-BEncode.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "Run action but return without consuming and key value pair Fails if the action fails",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "lookAhead",
        "normalized": "Get a-\u003eGet a",
        "package": "bencoding",
        "partial": "Ahead",
        "signature": "Get a-\u003eGet a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:match",
      "description": {
        "fct-descr": "\u003cp\u003eMatch key with value.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e BValue -\u003e Get ()",
        "fct-source": "src/Data-BEncode.html#match",
        "fct-type": "function",
        "title": "match"
      },
      "index": {
        "description": "Match key with value",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "match",
        "normalized": "BKey-\u003eBValue-\u003eGet()",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eBValue-\u003eGet()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:next",
      "description": {
        "fct-descr": "\u003cp\u003eGet lexicographical successor of the current key/value pair.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "Get BValue",
        "fct-source": "src/Data-BEncode.html#next",
        "fct-type": "function",
        "title": "next"
      },
      "index": {
        "description": "Get lexicographical successor of the current key value pair",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "next",
        "normalized": "",
        "package": "bencoding",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:opt",
      "description": {
        "fct-descr": "\u003cp\u003eExtract optional value from the given key.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e Get (Maybe BValue)",
        "fct-source": "src/Data-BEncode.html#opt",
        "fct-type": "function",
        "title": "opt"
      },
      "index": {
        "description": "Extract optional value from the given key",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "opt",
        "normalized": "BKey-\u003eGet(Maybe BValue)",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eGet(Maybe BValue)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:req",
      "description": {
        "fct-descr": "\u003cp\u003eExtract \u003cem\u003erequired\u003c/em\u003e value from the given key.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BKey -\u003e Get BValue",
        "fct-source": "src/Data-BEncode.html#req",
        "fct-type": "function",
        "title": "req"
      },
      "index": {
        "description": "Extract required value from the given key",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "req",
        "normalized": "BKey-\u003eGet BValue",
        "package": "bencoding",
        "partial": "",
        "signature": "BKey-\u003eGet BValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:toBEncode",
      "description": {
        "fct-descr": "\u003cp\u003eSee an example of implementation here \u003ccode\u003e\u003ca\u003eAssoc\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "a -\u003e BValue",
        "fct-source": "src/Data-BEncode.html#toBEncode",
        "fct-type": "method",
        "title": "toBEncode"
      },
      "index": {
        "description": "See an example of implementation here Assoc",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "toBEncode",
        "normalized": "a-\u003eBValue",
        "package": "bencoding",
        "partial": "BEncode",
        "signature": "a-\u003eBValue"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/bencoding/docs/Data-BEncode.html#v:toDict",
      "description": {
        "fct-descr": "\u003cp\u003eMake a bencode value from dictionary description.\n\u003c/p\u003e",
        "fct-module": "Data.BEncode",
        "fct-package": "bencoding",
        "fct-signature": "BDict -\u003e BValue",
        "fct-source": "src/Data-BEncode.html#toDict",
        "fct-type": "function",
        "title": "toDict"
      },
      "index": {
        "description": "Make bencode value from dictionary description",
        "hierarchy": "Data BEncode",
        "module": "Data.BEncode",
        "name": "toDict",
        "normalized": "BDict-\u003eBValue",
        "package": "bencoding",
        "partial": "Dict",
        "signature": "BDict-\u003eBValue"
      }
    }
  }
]