[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can associated with an arbitrary byte key. Searching for keys is very fast, but\n  the prefix tree probably consumes more memory than \u003ca\u003eData.Map\u003c/a\u003e. The main differences are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.StringMap (StringMap)\n import qualified Data.StringMap as T\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe module exports include the internal data types, their constructors and access\n  functions for ultimate flexibility. Derived modules should not export these\n  (as shown in \u003ca\u003eHolumbus.Data.StrMap\u003c/a\u003e) to provide only a restricted interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "module",
        "fct-source": "src/Data-StringMap-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "An efficient implementation of maps from strings to arbitrary values Values can associated with an arbitrary byte key Searching for keys is very fast but the prefix tree probably consumes more memory than Data.Map The main differences are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap StringMap import qualified Data.StringMap as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of The module exports include the internal data types their constructors and access functions for ultimate flexibility Derived modules should not export these as shown in Holumbus.Data.StrMap to provide only restricted interface",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#t:Key",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "type",
        "fct-source": "src/Data-StringMap-Types.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "Key",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#t:StringMap",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "data",
        "fct-source": "src/Data-StringMap-Base.html#StringMap",
        "fct-type": "data",
        "title": "StringMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "StringMap",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value at a key. Calls error when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Key -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "min Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "(!) !",
        "normalized": "StringMap a-\u003eKey-\u003ea",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eKey-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map\n remains unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "delete",
        "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference between two tries (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min Difference between two tries based on keys",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "difference",
        "normalized": "StringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference with a combining function. If the combining function always returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this is equal to proper set difference.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "min Difference with combining function If the combining function always returns Nothing this is equal to proper set difference",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e Difference with a combining function, including the key. If two equal keys are\n encountered, the combining function is applied to the key and both values. If it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the element is updated\n with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "min Difference with combining function including the key If two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded if it returns Just value the element is updated with the new value",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "differenceWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "elems",
        "normalized": "StringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:empty",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v",
        "fct-source": "src/Data-StringMap-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "empty",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e Key -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "findWithDefault",
        "normalized": "a-\u003eKey-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eKey-\u003eStringMap a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over all values in the map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:foldWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all key/value pairs in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#foldWithKey",
        "fct-type": "function",
        "title": "foldWithKey"
      },
      "index": {
        "description": "Fold over all key value pairs in the map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "foldWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a trie from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "[(Key, a)] -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates trie from list of key value pairs",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "fromList",
        "normalized": "[(Key,a)]-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "[(Key,a)]-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert an ordinary map into a Prefix tree\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Map Key a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Convert an ordinary map into Prefix tree",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "fromMap",
        "normalized": "Map Key a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "Map Key a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "insert",
        "normalized": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "insertWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:keyChars",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#keyChars",
        "fct-type": "function",
        "title": "keyChars"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "keyChars",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "Chars",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [Key]",
        "fct-source": "src/Data-StringMap-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "keys",
        "normalized": "StringMap a-\u003e[Key]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "lookup",
        "normalized": "Key-\u003eStringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupNoCase",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCase",
        "fct-type": "function",
        "title": "lookupNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "lookupNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupNoCaseBF",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCaseBF",
        "fct-type": "function",
        "title": "lookupNoCaseBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "lookupNoCaseBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:lookupRange",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#lookupRange",
        "fct-type": "function",
        "title": "lookupRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "lookupRange",
        "normalized": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Range",
        "signature": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the prefix tree.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the prefix tree",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic map\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Monadic map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Updates a value or deletes the element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Updates value or deletes the element if the result of the updating function is Nothing",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapWithKey",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "mapWithKey",
        "normalized": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:mapWithKeyM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic mapWithKey\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKeyM",
        "fct-type": "function",
        "title": "mapWithKeyM"
      },
      "index": {
        "description": "Monadic mapWithKey",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "mapWithKeyM",
        "normalized": "(Key-\u003ea-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Is the key a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Is the key member of the map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "member",
        "normalized": "Key-\u003eStringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Is the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "null",
        "normalized": "StringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFind",
        "fct-type": "function",
        "title": "prefixFind"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFind",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindCaseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindCaseWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindCaseWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n Breadth first variant, short words first in the result list\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindCaseWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key Breadth first variant short words first in the result list",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindNoCase",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCase",
        "fct-type": "function",
        "title": "prefixFindNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find No Case",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindNoCaseWithKey",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindNoCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindNoCaseWithKeyBF",
      "description": {
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKeyBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindNoCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKey",
        "fct-type": "function",
        "title": "prefixFindWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:prefixFindWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result. The result list contains short words first\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result The result list contains short words first",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "prefixFindWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create map with single element",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "singleton",
        "normalized": "Key-\u003ea-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "size",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003espace required by a prefix tree (logically)\n\u003c/p\u003e\u003cp\u003eSingletons are counted as 0, all other n-ary constructors\n are counted as n+1 (1 for the constructor and 1 for every field)\n cons nodes of char lists are counted 2, 1 for the cons, 1 for the char\n for values only the ref to the value is counted, not the space for the value itself\n key chars are assumed to be unboxed\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "space required by prefix tree logically Singletons are counted as all other n-ary constructors are counted as for the constructor and for every field cons nodes of char lists are counted for the cons for the char for values only the ref to the value is counted not the space for the value itself key chars are assumed to be unboxed",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "space",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all elements as list of key value pairs,\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns all elements as list of key value pairs",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "toList",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "StringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toListBF",
      "description": {
        "fct-descr": "\u003cp\u003ereturns all key-value pairs in breadth first order (short words first)\n this enables prefix search with upper bounds on the size of the result set\n e.g. \u003ccode\u003e search ... \u003e\u003e\u003e toListBF \u003e\u003e\u003e take 1000 \u003c/code\u003e will give the 1000 shortest words\n found in the result set and will ignore all long words\n\u003c/p\u003e\u003cp\u003etoList is derived from the following code found in the net when searching haskell breadth first search\n\u003c/p\u003e\u003cp\u003eHaskell Standard Libraray Implementation\n\u003c/p\u003e\u003cpre\u003e br :: Tree a -\u003e [a]\n br t = map rootLabel $\n        concat $\n        takeWhile (not . null) $\n        iterate (concatMap subForest) [t]\n\u003c/pre\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v -\u003e [(Key, v)]",
        "fct-source": "src/Data-StringMap-Base.html#toListBF",
        "fct-type": "function",
        "title": "toListBF"
      },
      "index": {
        "description": "returns all key-value pairs in breadth first order short words first this enables prefix search with upper bounds on the size of the result set e.g search toListBF take will give the shortest words found in the result set and will ignore all long words toList is derived from the following code found in the net when searching haskell breadth first search Haskell Standard Libraray Implementation br Tree br map rootLabel concat takeWhile not null iterate concatMap subForest",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "toListBF",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List BF",
        "signature": "StringMap v-\u003e[(Key,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert into an ordinary map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Map Key a",
        "fct-source": "src/Data-StringMap-Base.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Convert into an ordinary map",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "toMap",
        "normalized": "StringMap a-\u003eMap Key a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "StringMap a-\u003eMap Key a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are\n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "union",
        "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Union with combining function",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function, including the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "Union with combining function including the key",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "unionWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "updateWithKey",
        "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node (if there is one)\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Extract the value of node if there is one",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "value",
        "normalized": "StringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Lazy.html#v:valueWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node or return a default value if no value exists.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Lazy",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#valueWithDefault",
        "fct-type": "function",
        "title": "valueWithDefault"
      },
      "index": {
        "description": "Extract the value of node or return default value if no value exists",
        "hierarchy": "Data StringMap Lazy",
        "module": "Data.StringMap.Lazy",
        "name": "valueWithDefault",
        "normalized": "a-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eStringMap a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn efficient implementation of maps from strings to arbitrary values.\n\u003c/p\u003e\u003cp\u003eValues can associated with an arbitrary byte key. Searching for keys is very fast, but\n  the prefix tree probably consumes more memory than \u003ca\u003eData.Map\u003c/a\u003e. The main differences are the special\n  \u003ccode\u003e\u003ca\u003eprefixFind\u003c/a\u003e\u003c/code\u003e functions, which can be used to perform prefix queries. The interface is\n  heavily borrowed from \u003ca\u003eData.Map\u003c/a\u003e and \u003ca\u003eData.IntMap\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eMost other function names clash with \u003ca\u003ePrelude\u003c/a\u003e names, therefore this module is usually\n  imported \u003ccode\u003equalified\u003c/code\u003e, e.g.\n\u003c/p\u003e\u003cpre\u003e import Data.StringMap (StringMap)\n import qualified Data.StringMap as T\n\u003c/pre\u003e\u003cp\u003eMany functions have a worst-case complexity of \u003cem\u003eO(min(n,L))\u003c/em\u003e. This means that the operation\n  can become linear with the number of elements with a maximum of \u003cem\u003eL\u003c/em\u003e, the length of the\n  key (the number of bytes in the list). The functions for searching a prefix have a worst-case\n  complexity of \u003cem\u003eO(max(L,R))\u003c/em\u003e. This means that the operation can become linear with\n  \u003cem\u003eR\u003c/em\u003e, the number of elements found for the prefix, with a minimum of \u003cem\u003eL\u003c/em\u003e.\n\u003c/p\u003e\u003cp\u003eThe module exports include the internal data types, their constructors and access\n  functions for ultimate flexibility. Derived modules should not export these\n  (as shown in \u003ca\u003eHolumbus.Data.StrMap\u003c/a\u003e) to provide only a restricted interface.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "module",
        "fct-source": "src/Data-StringMap-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "An efficient implementation of maps from strings to arbitrary values Values can associated with an arbitrary byte key Searching for keys is very fast but the prefix tree probably consumes more memory than Data.Map The main differences are the special prefixFind functions which can be used to perform prefix queries The interface is heavily borrowed from Data.Map and Data.IntMap Most other function names clash with Prelude names therefore this module is usually imported qualified e.g import Data.StringMap StringMap import qualified Data.StringMap as Many functions have worst-case complexity of min This means that the operation can become linear with the number of elements with maximum of the length of the key the number of bytes in the list The functions for searching prefix have worst-case complexity of max This means that the operation can become linear with the number of elements found for the prefix with minimum of The module exports include the internal data types their constructors and access functions for ultimate flexibility Derived modules should not export these as shown in Holumbus.Data.StrMap to provide only restricted interface",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#t:Key",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "type",
        "fct-source": "src/Data-StringMap-Types.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "Key",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#t:StringMap",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "data",
        "fct-source": "src/Data-StringMap-Base.html#StringMap",
        "fct-type": "data",
        "title": "StringMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "StringMap",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value at a key. Calls error when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Key -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "min Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "(!) !",
        "normalized": "StringMap a-\u003eKey-\u003ea",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eKey-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:adjust",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:adjustWithKey",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "adjustWithKey",
        "normalized": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map\n remains unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "delete",
        "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference between two tries (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min Difference between two tries based on keys",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "difference",
        "normalized": "StringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference with a combining function. If the combining function always returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this is equal to proper set difference.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "min Difference with combining function If the combining function always returns Nothing this is equal to proper set difference",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e Difference with a combining function, including the key. If two equal keys are\n encountered, the combining function is applied to the key and both values. If it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the element is updated\n with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "min Difference with combining function including the key If two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded if it returns Just value the element is updated with the new value",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "differenceWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "elems",
        "normalized": "StringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:empty",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v",
        "fct-source": "src/Data-StringMap-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "empty",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e Key -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "findWithDefault",
        "normalized": "a-\u003eKey-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eKey-\u003eStringMap a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over all values in the map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:foldWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all key/value pairs in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#foldWithKey",
        "fct-type": "function",
        "title": "foldWithKey"
      },
      "index": {
        "description": "Fold over all key value pairs in the map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "foldWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a trie from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "[(Key, a)] -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates trie from list of key value pairs",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "fromList",
        "normalized": "[(Key,a)]-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "[(Key,a)]-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert an ordinary map into a Prefix tree\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Map Key a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Convert an ordinary map into Prefix tree",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "fromMap",
        "normalized": "Map Key a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "Map Key a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "insert",
        "normalized": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "insertWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:keyChars",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#keyChars",
        "fct-type": "function",
        "title": "keyChars"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "keyChars",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "Chars",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [Key]",
        "fct-source": "src/Data-StringMap-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "keys",
        "normalized": "StringMap a-\u003e[Key]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "lookup",
        "normalized": "Key-\u003eStringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookupNoCase",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCase",
        "fct-type": "function",
        "title": "lookupNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "lookupNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookupNoCaseBF",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCaseBF",
        "fct-type": "function",
        "title": "lookupNoCaseBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "lookupNoCaseBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:lookupRange",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#lookupRange",
        "fct-type": "function",
        "title": "lookupRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "lookupRange",
        "normalized": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Range",
        "signature": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the prefix tree.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the prefix tree",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic map\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Monadic map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Updates a value or deletes the element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Updates value or deletes the element if the result of the updating function is Nothing",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapWithKey",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "mapWithKey",
        "normalized": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:mapWithKeyM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic mapWithKey\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKeyM",
        "fct-type": "function",
        "title": "mapWithKeyM"
      },
      "index": {
        "description": "Monadic mapWithKey",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "mapWithKeyM",
        "normalized": "(Key-\u003ea-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Is the key a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Is the key member of the map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "member",
        "normalized": "Key-\u003eStringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Is the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "null",
        "normalized": "StringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFind",
        "fct-type": "function",
        "title": "prefixFind"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFind",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindCaseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindCaseWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindCaseWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n Breadth first variant, short words first in the result list\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindCaseWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key Breadth first variant short words first in the result list",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindNoCase",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCase",
        "fct-type": "function",
        "title": "prefixFindNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find No Case",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindNoCaseWithKey",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindNoCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindNoCaseWithKeyBF",
      "description": {
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKeyBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindNoCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKey",
        "fct-type": "function",
        "title": "prefixFindWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:prefixFindWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result. The result list contains short words first\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result The result list contains short words first",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "prefixFindWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e\u003cp\u003ethe attribute value is evaluated to WHNF\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create map with single element the attribute value is evaluated to WHNF",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "singleton",
        "normalized": "Key-\u003ea-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "size",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003espace required by a prefix tree (logically)\n\u003c/p\u003e\u003cp\u003eSingletons are counted as 0, all other n-ary constructors\n are counted as n+1 (1 for the constructor and 1 for every field)\n cons nodes of char lists are counted 2, 1 for the cons, 1 for the char\n for values only the ref to the value is counted, not the space for the value itself\n key chars are assumed to be unboxed\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "space required by prefix tree logically Singletons are counted as all other n-ary constructors are counted as for the constructor and for every field cons nodes of char lists are counted for the cons for the char for values only the ref to the value is counted not the space for the value itself key chars are assumed to be unboxed",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "space",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all elements as list of key value pairs,\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns all elements as list of key value pairs",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "toList",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "StringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toListBF",
      "description": {
        "fct-descr": "\u003cp\u003ereturns all key-value pairs in breadth first order (short words first)\n this enables prefix search with upper bounds on the size of the result set\n e.g. \u003ccode\u003e search ... \u003e\u003e\u003e toListBF \u003e\u003e\u003e take 1000 \u003c/code\u003e will give the 1000 shortest words\n found in the result set and will ignore all long words\n\u003c/p\u003e\u003cp\u003etoList is derived from the following code found in the net when searching haskell breadth first search\n\u003c/p\u003e\u003cp\u003eHaskell Standard Libraray Implementation\n\u003c/p\u003e\u003cpre\u003e br :: Tree a -\u003e [a]\n br t = map rootLabel $\n        concat $\n        takeWhile (not . null) $\n        iterate (concatMap subForest) [t]\n\u003c/pre\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v -\u003e [(Key, v)]",
        "fct-source": "src/Data-StringMap-Base.html#toListBF",
        "fct-type": "function",
        "title": "toListBF"
      },
      "index": {
        "description": "returns all key-value pairs in breadth first order short words first this enables prefix search with upper bounds on the size of the result set e.g search toListBF take will give the shortest words found in the result set and will ignore all long words toList is derived from the following code found in the net when searching haskell breadth first search Haskell Standard Libraray Implementation br Tree br map rootLabel concat takeWhile not null iterate concatMap subForest",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "toListBF",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List BF",
        "signature": "StringMap v-\u003e[(Key,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert into an ordinary map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Map Key a",
        "fct-source": "src/Data-StringMap-Base.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Convert into an ordinary map",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "toMap",
        "normalized": "StringMap a-\u003eMap Key a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "StringMap a-\u003eMap Key a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are\n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "union",
        "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Union with combining function",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function, including the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "Union with combining function including the key",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "unionWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n The updated value is evaluated to WHNF before insertion.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged The updated value is evaluated to WHNF before insertion",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n  The updated value is evaluated to WHNF before insertion.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Strict.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged The updated value is evaluated to WHNF before insertion",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "updateWithKey",
        "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node (if there is one)\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Extract the value of node if there is one",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "value",
        "normalized": "StringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Strict.html#v:valueWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node or return a default value if no value exists.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.Strict",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#valueWithDefault",
        "fct-type": "function",
        "title": "valueWithDefault"
      },
      "index": {
        "description": "Extract the value of node or return default value if no value exists",
        "hierarchy": "Data StringMap Strict",
        "module": "Data.StringMap.Strict",
        "name": "valueWithDefault",
        "normalized": "a-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eStringMap a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simplified version of StringMap for implementing sets.\n\u003c/p\u003e\u003cp\u003eThere is one important difference to the StringMap implementation:\n  The fields are not marked to be strict. This enables building the\n  set on the fly.\n\u003c/p\u003e\u003cp\u003eThis feature is used in fuzzy search, when an index tree is restricted\n  to a set of keys, e.g. the set of all none case significant keys\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "module",
        "fct-source": "src/Data-StringMap-StringSet.html",
        "fct-type": "module",
        "title": "StringSet"
      },
      "index": {
        "description": "simplified version of StringMap for implementing sets There is one important difference to the StringMap implementation The fields are not marked to be strict This enables building the set on the fly This feature is used in fuzzy search when an index tree is restricted to set of keys e.g the set of all none case significant keys",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "StringSet",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#t:StringSet",
      "description": {
        "fct-descr": "\u003cp\u003eSet of strings implemented as lazy prefix tree.\n \u003ccode\u003etype StringSet = StringMap ()\u003c/code\u003e is not feasable because of\n the strict fields in the StringMap definition\n\u003c/p\u003e",
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "data",
        "fct-source": "src/Data-StringMap-StringSet.html#StringSet",
        "fct-type": "data",
        "title": "StringSet"
      },
      "index": {
        "description": "Set of strings implemented as lazy prefix tree type StringSet StringMap is not feasable because of the strict fields in the StringMap definition",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "StringSet",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSelem",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "PSelem StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#StringSet",
        "fct-type": "function",
        "title": "PSelem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "PSelem",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "PSelem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSempty",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "PSempty",
        "fct-source": "src/Data-StringMap-StringSet.html#StringSet",
        "fct-type": "function",
        "title": "PSempty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "PSempty",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "PSempty",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:PSnext",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "PSnext Sym StringSet StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#StringSet",
        "fct-type": "function",
        "title": "PSnext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "PSnext",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "PSnext",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elem0PS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#elem0PS",
        "fct-type": "function",
        "title": "elem0PS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "elem0PS",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elemPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#elemPS",
        "fct-type": "function",
        "title": "elemPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "elemPS",
        "normalized": "StringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "StringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:elemsPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet -\u003e [Key]",
        "fct-source": "src/Data-StringMap-StringSet.html#elemsPS",
        "fct-type": "function",
        "title": "elemsPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "elemsPS",
        "normalized": "StringSet-\u003e[Key]",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "StringSet-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:emptyPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#emptyPS",
        "fct-type": "function",
        "title": "emptyPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "emptyPS",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:foldPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e (Key -\u003e Key) -\u003e StringSet -\u003e b",
        "fct-source": "src/Data-StringMap-StringSet.html#foldPS",
        "fct-type": "function",
        "title": "foldPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "foldPS",
        "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003e(Key-\u003eKey)-\u003eStringSet-\u003ea",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003e(Key-\u003eKey)-\u003eStringSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:foldWithKeyPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e b -\u003e b) -\u003e b -\u003e StringSet -\u003e b",
        "fct-source": "src/Data-StringMap-StringSet.html#foldWithKeyPS",
        "fct-type": "function",
        "title": "foldWithKeyPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "foldWithKeyPS",
        "normalized": "(Key-\u003ea-\u003ea)-\u003ea-\u003eStringSet-\u003ea",
        "package": "data-stringmap",
        "partial": "With Key PS",
        "signature": "(Key-\u003eb-\u003eb)-\u003eb-\u003eStringSet-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:fuzzyCharPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "(Sym -\u003e [Sym]) -\u003e StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#fuzzyCharPS",
        "fct-type": "function",
        "title": "fuzzyCharPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "fuzzyCharPS",
        "normalized": "(Sym-\u003e[Sym])-\u003eStringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "Char PS",
        "signature": "(Sym-\u003e[Sym])-\u003eStringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:fuzzyCharsPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "(Sym -\u003e [Key]) -\u003e StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#fuzzyCharsPS",
        "fct-type": "function",
        "title": "fuzzyCharsPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "fuzzyCharsPS",
        "normalized": "(Sym-\u003e[Key])-\u003eStringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "Chars PS",
        "signature": "(Sym-\u003e[Key])-\u003eStringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:lastPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "Sym -\u003e StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#lastPS",
        "fct-type": "function",
        "title": "lastPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "lastPS",
        "normalized": "Sym-\u003eStringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "Sym-\u003eStringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:nextPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "Sym -\u003e StringSet -\u003e StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#nextPS",
        "fct-type": "function",
        "title": "nextPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "nextPS",
        "normalized": "Sym-\u003eStringSet-\u003eStringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "Sym-\u003eStringSet-\u003eStringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:nullPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet -\u003e Bool",
        "fct-source": "src/Data-StringMap-StringSet.html#nullPS",
        "fct-type": "function",
        "title": "nullPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "nullPS",
        "normalized": "StringSet-\u003eBool",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "StringSet-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:prefixPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#prefixPS",
        "fct-type": "function",
        "title": "prefixPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "prefixPS",
        "normalized": "Key-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "Key-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:singlePS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#singlePS",
        "fct-type": "function",
        "title": "singlePS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "singlePS",
        "normalized": "Key-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "Key-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-StringSet.html#v:unionPS",
      "description": {
        "fct-module": "Data.StringMap.StringSet",
        "fct-package": "data-stringmap",
        "fct-signature": "StringSet -\u003e StringSet -\u003e StringSet",
        "fct-source": "src/Data-StringMap-StringSet.html#unionPS",
        "fct-type": "function",
        "title": "unionPS"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap StringSet",
        "module": "Data.StringMap.StringSet",
        "name": "unionPS",
        "normalized": "StringSet-\u003eStringSet-\u003eStringSet",
        "package": "data-stringmap",
        "partial": "PS",
        "signature": "StringSet-\u003eStringSet-\u003eStringSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eData types used in all StringMap modules\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StringMap.Types",
        "fct-package": "data-stringmap",
        "fct-signature": "module",
        "fct-source": "src/Data-StringMap-Types.html",
        "fct-type": "module",
        "title": "Types"
      },
      "index": {
        "description": "Data types used in all StringMap modules",
        "hierarchy": "Data StringMap Types",
        "module": "Data.StringMap.Types",
        "name": "Types",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#t:Key",
      "description": {
        "fct-module": "Data.StringMap.Types",
        "fct-package": "data-stringmap",
        "fct-signature": "type",
        "fct-source": "src/Data-StringMap-Types.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Types",
        "module": "Data.StringMap.Types",
        "name": "Key",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap-Types.html#t:Sym",
      "description": {
        "fct-module": "Data.StringMap.Types",
        "fct-package": "data-stringmap",
        "fct-signature": "type",
        "fct-source": "src/Data-StringMap-Types.html#Sym",
        "fct-type": "type",
        "title": "Sym"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap Types",
        "module": "Data.StringMap.Types",
        "name": "Sym",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Sym",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFacade for prefix tree implementation\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "module",
        "fct-source": "src/Data-StringMap.html",
        "fct-type": "module",
        "title": "StringMap"
      },
      "index": {
        "description": "Facade for prefix tree implementation",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "StringMap",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#t:Key",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "type",
        "fct-source": "src/Data-StringMap-Types.html#Key",
        "fct-type": "type",
        "title": "Key"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "Key",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#t:StringMap",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "data",
        "fct-source": "src/Data-StringMap-Base.html#StringMap",
        "fct-type": "data",
        "title": "StringMap"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "StringMap",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "String Map",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value at a key. Calls error when the element can not be found.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Key -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "min Find the value at key Calls error when the element can not be found",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "(!) !",
        "normalized": "StringMap a-\u003eKey-\u003ea",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eKey-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:adjust",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#adjust",
        "fct-type": "function",
        "title": "adjust"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "adjust",
        "normalized": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:adjustWithKey",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#adjustWithKey",
        "fct-type": "function",
        "title": "adjustWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "adjustWithKey",
        "normalized": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Delete an element from the map. If no element exists for the key, the map\n remains unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "min Delete an element from the map If no element exists for the key the map remains unchanged",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "delete",
        "normalized": "Key-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:difference",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference between two tries (based on keys).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#difference",
        "fct-type": "function",
        "title": "difference"
      },
      "index": {
        "description": "min Difference between two tries based on keys",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "difference",
        "normalized": "StringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:differenceWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003e(O(min(n,m))\u003c/em\u003e Difference with a combining function. If the combining function always returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, this is equal to proper set difference.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWith",
        "fct-type": "function",
        "title": "differenceWith"
      },
      "index": {
        "description": "min Difference with combining function If the combining function always returns Nothing this is equal to proper set difference",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "differenceWith",
        "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:differenceWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,m))\u003c/em\u003e Difference with a combining function, including the key. If two equal keys are\n encountered, the combining function is applied to the key and both values. If it returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the element is discarded, if it returns \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e a value, the element is updated\n with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e Maybe a) -\u003e StringMap a -\u003e StringMap b -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#differenceWithKey",
        "fct-type": "function",
        "title": "differenceWithKey"
      },
      "index": {
        "description": "min Difference with combining function including the key If two equal keys are encountered the combining function is applied to the key and both values If it returns Nothing the element is discarded if it returns Just value the element is updated with the new value",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "differenceWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eMaybe a)-\u003eStringMap a-\u003eStringMap b-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:elems",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#elems",
        "fct-type": "function",
        "title": "elems"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "elems",
        "normalized": "StringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:empty",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v",
        "fct-source": "src/Data-StringMap-Base.html#empty",
        "fct-type": "function",
        "title": "empty"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "empty",
        "normalized": "",
        "package": "data-stringmap",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:findWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e Key -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#findWithDefault",
        "fct-type": "function",
        "title": "findWithDefault"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "findWithDefault",
        "normalized": "a-\u003eKey-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eKey-\u003eStringMap a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all values in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Fold over all values in the map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "fold",
        "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:foldWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Fold over all key/value pairs in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e StringMap a -\u003e b",
        "fct-source": "src/Data-StringMap-Base.html#foldWithKey",
        "fct-type": "function",
        "title": "foldWithKey"
      },
      "index": {
        "description": "Fold over all key value pairs in the map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "foldWithKey",
        "normalized": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eStringMap a-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Creates a trie from a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "[(Key, a)] -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Creates trie from list of key value pairs",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "fromList",
        "normalized": "[(Key,a)]-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "[(Key,a)]-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:fromMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert an ordinary map into a Prefix tree\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Map Key a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#fromMap",
        "fct-type": "function",
        "title": "fromMap"
      },
      "index": {
        "description": "Convert an ordinary map into Prefix tree",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "fromMap",
        "normalized": "Map Key a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "Map Key a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insert",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert a new key and value into the map. If the key is already present in\n the map, the associated value will be replaced with the new value.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insert",
        "fct-type": "function",
        "title": "insert"
      },
      "index": {
        "description": "min Insert new key and value into the map If the key is already present in the map the associated value will be replaced with the new value",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "insert",
        "normalized": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insertWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insertWith",
        "fct-type": "function",
        "title": "insertWith"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of new value old value will be inserted",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "insertWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:insertWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Insert with a combining function. If the key is already present in the map,\n the value of \u003ccode\u003ef key new_value old_value\u003c/code\u003e will be inserted.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e Key -\u003e a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#insertWithKey",
        "fct-type": "function",
        "title": "insertWithKey"
      },
      "index": {
        "description": "min Insert with combining function If the key is already present in the map the value of key new value old value will be inserted",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "insertWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eKey-\u003ea-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:keyChars",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#keyChars",
        "fct-type": "function",
        "title": "keyChars"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "keyChars",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "Chars",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:keys",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all values.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [Key]",
        "fct-source": "src/Data-StringMap-Base.html#keys",
        "fct-type": "function",
        "title": "keys"
      },
      "index": {
        "description": "Returns all values",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "keys",
        "normalized": "StringMap a-\u003e[Key]",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003e[Key]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Find the value associated with a key. The function will \u003ccode\u003ereturn\u003c/code\u003e the result in\n the monad or \u003ccode\u003efail\u003c/code\u003e in it if the key isn't in the map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "min Find the value associated with key The function will return the result in the monad or fail in it if the key isn in the map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "lookup",
        "normalized": "Key-\u003eStringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookupNoCase",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCase",
        "fct-type": "function",
        "title": "lookupNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "lookupNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookupNoCaseBF",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#lookupNoCaseBF",
        "fct-type": "function",
        "title": "lookupNoCaseBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "lookupNoCaseBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "No Case BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:lookupRange",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#lookupRange",
        "fct-type": "function",
        "title": "lookupRange"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "lookupRange",
        "normalized": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "Range",
        "signature": "Key-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:map",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Map a function over all values in the prefix tree.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#map",
        "fct-type": "function",
        "title": "map"
      },
      "index": {
        "description": "Map function over all values in the prefix tree",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "map",
        "normalized": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic map\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapM",
        "fct-type": "function",
        "title": "mapM"
      },
      "index": {
        "description": "Monadic map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "mapM",
        "normalized": "(a-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapMaybe",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Updates a value or deletes the element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapMaybe",
        "fct-type": "function",
        "title": "mapMaybe"
      },
      "index": {
        "description": "Updates value or deletes the element if the result of the updating function is Nothing",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "mapMaybe",
        "normalized": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "Maybe",
        "signature": "(a-\u003eMaybe b)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapWithKey",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e b) -\u003e StringMap a -\u003e StringMap b",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKey",
        "fct-type": "function",
        "title": "mapWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "mapWithKey",
        "normalized": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eb)-\u003eStringMap a-\u003eStringMap b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:mapWithKeyM",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic mapWithKey\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e m b) -\u003e StringMap a -\u003e m (StringMap b)",
        "fct-source": "src/Data-StringMap-Base.html#mapWithKeyM",
        "fct-type": "function",
        "title": "mapWithKeyM"
      },
      "index": {
        "description": "Monadic mapWithKey",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "mapWithKeyM",
        "normalized": "(Key-\u003ea-\u003eb c)-\u003eStringMap a-\u003eb(StringMap c)",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003em b)-\u003eStringMap a-\u003em(StringMap b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:member",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Is the key a member of the map?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#member",
        "fct-type": "function",
        "title": "member"
      },
      "index": {
        "description": "min Is the key member of the map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "member",
        "normalized": "Key-\u003eStringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003eStringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:null",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Is the map empty?\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Bool",
        "fct-source": "src/Data-StringMap-Base.html#null",
        "fct-type": "function",
        "title": "null"
      },
      "index": {
        "description": "Is the map empty",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "null",
        "normalized": "StringMap a-\u003eBool",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFind",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFind",
        "fct-type": "function",
        "title": "prefixFind"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFind",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindCaseWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindCaseWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindCaseWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key.\n Breadth first variant, short words first in the result list\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindCaseWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key Breadth first variant short words first in the result list",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindNoCase",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [a]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCase",
        "fct-type": "function",
        "title": "prefixFindNoCase"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindNoCase",
        "normalized": "Key-\u003eStringMap a-\u003e[a]",
        "package": "data-stringmap",
        "partial": "Find No Case",
        "signature": "Key-\u003eStringMap a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindNoCaseWithKey",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKey",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKey"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindNoCaseWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindNoCaseWithKeyBF",
      "description": {
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-FuzzySearch.html#prefixFindNoCaseWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindNoCaseWithKeyBF"
      },
      "index": {
        "description": "",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindNoCaseWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find No Case With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKey",
        "fct-type": "function",
        "title": "prefixFindWithKey"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindWithKey",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:prefixFindWithKeyBF",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(max(L,R))\u003c/em\u003e Find all values where the string is a prefix of the key and include the keys\n in the result. The result list contains short words first\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#prefixFindWithKeyBF",
        "fct-type": "function",
        "title": "prefixFindWithKeyBF"
      },
      "index": {
        "description": "max Find all values where the string is prefix of the key and include the keys in the result The result list contains short words first",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "prefixFindWithKeyBF",
        "normalized": "Key-\u003eStringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "Find With Key BF",
        "signature": "Key-\u003eStringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:singleton",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Create a map with a single element.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "Key -\u003e a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#singleton",
        "fct-type": "function",
        "title": "singleton"
      },
      "index": {
        "description": "Create map with single element",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "singleton",
        "normalized": "Key-\u003ea-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "Key-\u003ea-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:size",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e The number of elements.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#size",
        "fct-type": "function",
        "title": "size"
      },
      "index": {
        "description": "The number of elements",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "size",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:space",
      "description": {
        "fct-descr": "\u003cp\u003espace required by a prefix tree (logically)\n\u003c/p\u003e\u003cp\u003eSingletons are counted as 0, all other n-ary constructors\n are counted as n+1 (1 for the constructor and 1 for every field)\n cons nodes of char lists are counted 2, 1 for the cons, 1 for the char\n for values only the ref to the value is counted, not the space for the value itself\n key chars are assumed to be unboxed\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Int",
        "fct-source": "src/Data-StringMap-Base.html#space",
        "fct-type": "function",
        "title": "space"
      },
      "index": {
        "description": "space required by prefix tree logically Singletons are counted as all other n-ary constructors are counted as for the constructor and for every field cons nodes of char lists are counted for the cons for the char for values only the ref to the value is counted not the space for the value itself key chars are assumed to be unboxed",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "space",
        "normalized": "StringMap a-\u003eInt",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Returns all elements as list of key value pairs,\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e [(Key, a)]",
        "fct-source": "src/Data-StringMap-Base.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Returns all elements as list of key value pairs",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "toList",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List",
        "signature": "StringMap a-\u003e[(Key,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toListBF",
      "description": {
        "fct-descr": "\u003cp\u003ereturns all key-value pairs in breadth first order (short words first)\n this enables prefix search with upper bounds on the size of the result set\n e.g. \u003ccode\u003e search ... \u003e\u003e\u003e toListBF \u003e\u003e\u003e take 1000 \u003c/code\u003e will give the 1000 shortest words\n found in the result set and will ignore all long words\n\u003c/p\u003e\u003cp\u003etoList is derived from the following code found in the net when searching haskell breadth first search\n\u003c/p\u003e\u003cp\u003eHaskell Standard Libraray Implementation\n\u003c/p\u003e\u003cpre\u003e br :: Tree a -\u003e [a]\n br t = map rootLabel $\n        concat $\n        takeWhile (not . null) $\n        iterate (concatMap subForest) [t]\n\u003c/pre\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap v -\u003e [(Key, v)]",
        "fct-source": "src/Data-StringMap-Base.html#toListBF",
        "fct-type": "function",
        "title": "toListBF"
      },
      "index": {
        "description": "returns all key-value pairs in breadth first order short words first this enables prefix search with upper bounds on the size of the result set e.g search toListBF take will give the shortest words found in the result set and will ignore all long words toList is derived from the following code found in the net when searching haskell breadth first search Haskell Standard Libraray Implementation br Tree br map rootLabel concat takeWhile not null iterate concatMap subForest",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "toListBF",
        "normalized": "StringMap a-\u003e[(Key,a)]",
        "package": "data-stringmap",
        "partial": "List BF",
        "signature": "StringMap v-\u003e[(Key,v)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:toMap",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n)\u003c/em\u003e Convert into an ordinary map.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e Map Key a",
        "fct-source": "src/Data-StringMap-Base.html#toMap",
        "fct-type": "function",
        "title": "toMap"
      },
      "index": {
        "description": "Convert into an ordinary map",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "toMap",
        "normalized": "StringMap a-\u003eMap Key a",
        "package": "data-stringmap",
        "partial": "Map",
        "signature": "StringMap a-\u003eMap Key a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:union",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Left-biased union of two maps. It prefers the first map when duplicate keys are\n encountered, i.e. (\u003ccode\u003e\u003ca\u003eunion\u003c/a\u003e\u003c/code\u003e == \u003ccode\u003e\u003ca\u003eunionWith\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#union",
        "fct-type": "function",
        "title": "union"
      },
      "index": {
        "description": "Left-biased union of two maps It prefers the first map when duplicate keys are encountered i.e union unionWith const",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "union",
        "normalized": "StringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:unionWith",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#unionWith",
        "fct-type": "function",
        "title": "unionWith"
      },
      "index": {
        "description": "Union with combining function",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "unionWith",
        "normalized": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With",
        "signature": "(a-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:unionWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(n+m)\u003c/em\u003e Union with a combining function, including the key.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e a -\u003e a) -\u003e StringMap a -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#unionWithKey",
        "fct-type": "function",
        "title": "unionWithKey"
      },
      "index": {
        "description": "Union with combining function including the key",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "unionWithKey",
        "normalized": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003ea-\u003ea)-\u003eStringMap a-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "update",
        "normalized": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "(a-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:updateWithKey",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(min(n,L))\u003c/em\u003e Updates a value at a given key (if that key is in the trie) or deletes the\n element if the result of the updating function is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. If the key is not found, the trie\n is returned unchanged.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "(Key -\u003e a -\u003e Maybe a) -\u003e Key -\u003e StringMap a -\u003e StringMap a",
        "fct-source": "src/Data-StringMap-Base.html#updateWithKey",
        "fct-type": "function",
        "title": "updateWithKey"
      },
      "index": {
        "description": "min Updates value at given key if that key is in the trie or deletes the element if the result of the updating function is Nothing If the key is not found the trie is returned unchanged",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "updateWithKey",
        "normalized": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a",
        "package": "data-stringmap",
        "partial": "With Key",
        "signature": "(Key-\u003ea-\u003eMaybe a)-\u003eKey-\u003eStringMap a-\u003eStringMap a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node (if there is one)\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "StringMap a -\u003e m a",
        "fct-source": "src/Data-StringMap-Base.html#value",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Extract the value of node if there is one",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "value",
        "normalized": "StringMap a-\u003eb a",
        "package": "data-stringmap",
        "partial": "",
        "signature": "StringMap a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/data-stringmap/docs/Data-StringMap.html#v:valueWithDefault",
      "description": {
        "fct-descr": "\u003cp\u003e\u003cem\u003eO(1)\u003c/em\u003e Extract the value of a node or return a default value if no value exists.\n\u003c/p\u003e",
        "fct-module": "Data.StringMap",
        "fct-package": "data-stringmap",
        "fct-signature": "a -\u003e StringMap a -\u003e a",
        "fct-source": "src/Data-StringMap-Base.html#valueWithDefault",
        "fct-type": "function",
        "title": "valueWithDefault"
      },
      "index": {
        "description": "Extract the value of node or return default value if no value exists",
        "hierarchy": "Data StringMap",
        "module": "Data.StringMap",
        "name": "valueWithDefault",
        "normalized": "a-\u003eStringMap a-\u003ea",
        "package": "data-stringmap",
        "partial": "With Default",
        "signature": "a-\u003eStringMap a-\u003ea"
      }
    }
  }
]