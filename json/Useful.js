[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA lightweight Dictionary implementation based on Data.Map, part of the \u003ca\u003eUseful\u003c/a\u003e module.\n\u003c/p\u003e\u003cp\u003eI like dictionaries, and use them often for small things when I'm coding, but the functions and syntax by default are hardly as elegant as something like python. This is one thing I feel is missing in the default implementation of data types. Also, the clashing namespace when importing Data.Map makes code often hard to read and long. Completely inconvenient for small, simple tasks.\n This isn't a complete solution and nor is it optimal but it's lightweight and pretty.\n Keys must have some ordering defined over them.\n In the function descriptions, listed in square brackets are the Data.Map functions used - this does not mean it is an exact alias though, it make just use it.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful-Dictionary.html",
        "fct-type": "module",
        "title": "Dictionary"
      },
      "index": {
        "description": "lightweight Dictionary implementation based on Data.Map part of the Useful module like dictionaries and use them often for small things when coding but the functions and syntax by default are hardly as elegant as something like python This is one thing feel is missing in the default implementation of data types Also the clashing namespace when importing Data.Map makes code often hard to read and long Completely inconvenient for small simple tasks This isn complete solution and nor is it optimal but it lightweight and pretty Keys must have some ordering defined over them In the function descriptions listed in square brackets are the Data.Map functions used this does not mean it is an exact alias though it make just use it",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "Dictionary",
        "normalized": "",
        "package": "Useful",
        "partial": "Dictionary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--33-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns Maybe v from key k [Data.Map.lookup]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "k -\u003e Map k a -\u003e Maybe a",
        "fct-source": "src/Useful-Dictionary.html#%23%21",
        "fct-type": "function",
        "title": "(#!)"
      },
      "index": {
        "description": "Returns Maybe from key Data.Map.lookup",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#!) #!",
        "normalized": "a-\u003eMap a b-\u003eMaybe b",
        "package": "Useful",
        "partial": "",
        "signature": "k-\u003eMap k a-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--33--33-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns v from key k or error [Data.Map.!]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e k -\u003e a",
        "fct-source": "src/Useful-Dictionary.html#%23%21%21",
        "fct-type": "function",
        "title": "(#!!)"
      },
      "index": {
        "description": "Returns from key or error Data.Map",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#!!) #!!",
        "normalized": "Map a b-\u003ea-\u003eb",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ek-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--42--45-",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes ALL key-pairs from a dictionary given they match a value [Data.Map.filter]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e a -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#%23%2A-",
        "fct-type": "function",
        "title": "(#*-)"
      },
      "index": {
        "description": "Deletes ALL key-pairs from dictionary given they match value Data.Map.filter",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#*-) #*-",
        "normalized": "Map a b-\u003eb-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ea-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--42--63-",
      "description": {
        "fct-descr": "\u003cp\u003eChecks if a value is in a dictionary\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e a -\u003e Bool",
        "fct-source": "src/Useful-Dictionary.html#%23%2A%3F",
        "fct-type": "function",
        "title": "(#*?)"
      },
      "index": {
        "description": "Checks if value is in dictionary",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#*?) #*?",
        "normalized": "Map a b-\u003eb-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--43-",
      "description": {
        "fct-descr": "\u003cp\u003eAdds key-value pair to a dictionary. If key is already in dict will update value. [Data.Map.insert]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e (k, a) -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#%23%2B",
        "fct-type": "function",
        "title": "(#+)"
      },
      "index": {
        "description": "Adds key-value pair to dictionary If key is already in dict will update value Data.Map.insert",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#+) #+",
        "normalized": "Map a b-\u003e(a,b)-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003e(k,a)-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--43--43-",
      "description": {
        "fct-descr": "\u003cp\u003eUnions two dictionaries [Data.Map.union]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#%23%2B%2B",
        "fct-type": "function",
        "title": "(#++)"
      },
      "index": {
        "description": "Unions two dictionaries Data.Map.union",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#++) #++",
        "normalized": "Map a b-\u003eMap a b-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--45-",
      "description": {
        "fct-descr": "\u003cp\u003eDeletes a key-pair from a dictionary given a key [Data.Map.delete]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e k -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#%23-",
        "fct-type": "function",
        "title": "(#-)"
      },
      "index": {
        "description": "Deletes key-pair from dictionary given key Data.Map.delete",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#-) #-",
        "normalized": "Map a b-\u003ea-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ek-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--63-",
      "description": {
        "fct-descr": "\u003cp\u003eChecks for a key in a dictionary. [Data.Map.member]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e k -\u003e Bool",
        "fct-source": "src/Useful-Dictionary.html#%23%3F",
        "fct-type": "function",
        "title": "(#?)"
      },
      "index": {
        "description": "Checks for key in dictionary Data.Map.member",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#?) #?",
        "normalized": "Map a b-\u003ea-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ek-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--63--33-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a the first occurance of a key from a value. Otherwise error.\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e a -\u003e k",
        "fct-source": "src/Useful-Dictionary.html#%23%3F%21",
        "fct-type": "function",
        "title": "(#?!)"
      },
      "index": {
        "description": "Returns the first occurance of key from value Otherwise error",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#?!) #?!",
        "normalized": "Map a b-\u003eb-\u003ea",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003ea-\u003ek"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--63--63-",
      "description": {
        "fct-descr": "\u003cp\u003eTests if d1 is a sub-dictionary of d2 [Data.Map.isSubmapOf]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e Map k a -\u003e Bool",
        "fct-source": "src/Useful-Dictionary.html#%23%3F%3F",
        "fct-type": "function",
        "title": "(#??)"
      },
      "index": {
        "description": "Tests if d1 is sub-dictionary of d2 Data.Map.isSubmapOf",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#??) #??",
        "normalized": "Map a b-\u003eMap a b-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003eMap k a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:-35--92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eIntersects two dictionaries [Data.Map.\\]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e Map k b -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#%23%5C%5C",
        "fct-type": "function",
        "title": "(#\\\\)"
      },
      "index": {
        "description": "Intersects two dictionaries Data.Map",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "(#\\\\) #\\\\",
        "normalized": "Map a b-\u003eMap a c-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "Map k a-\u003eMap k b-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:dict",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of Data.Map.fromList, takes a list of key value tuples and creates a dictionary out of them.\n\u003c/p\u003e\u003cpre\u003e dict [(\"hello\",1),(\"there\",2)]\n fromList [(\"hello\",1),(\"there\",2)]\n dict []\n fromList []\n\u003c/pre\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "[(k, a)] -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#dict",
        "fct-type": "function",
        "title": "dict"
      },
      "index": {
        "description": "Alias of Data.Map.fromList takes list of key value tuples and creates dictionary out of them dict hello there fromList hello there dict fromList",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "dict",
        "normalized": "[(a,b)]-\u003eMap a b",
        "package": "Useful",
        "partial": "",
        "signature": "[(k,a)]-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:dictSize",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size of a dictionary [Data.Map.size]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e Int",
        "fct-source": "src/Useful-Dictionary.html#dictSize",
        "fct-type": "function",
        "title": "dictSize"
      },
      "index": {
        "description": "Returns the size of dictionary Data.Map.size",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "dictSize",
        "normalized": "Map a b-\u003eInt",
        "package": "Useful",
        "partial": "Size",
        "signature": "Map k a-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:dictToList",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a List of key-value pairs\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "Map k a -\u003e [(k, a)]",
        "fct-source": "src/Useful-Dictionary.html#dictToList",
        "fct-type": "function",
        "title": "dictToList"
      },
      "index": {
        "description": "Returns List of key-value pairs",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "dictToList",
        "normalized": "Map a b-\u003e[(a,b)]",
        "package": "Useful",
        "partial": "To List",
        "signature": "Map k a-\u003e[(k,a)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:filterD",
      "description": {
        "fct-descr": "\u003cp\u003eFilter over dictionary values [Data.Map.filter]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#filterD",
        "fct-type": "function",
        "title": "filterD"
      },
      "index": {
        "description": "Filter over dictionary values Data.Map.filter",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "filterD",
        "normalized": "(a-\u003eBool)-\u003eMap b a-\u003eMap b a",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eBool)-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:filterDkeys",
      "description": {
        "fct-descr": "\u003cp\u003eFilter over keys in a dictionary [Data.Map.filterWithKey]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "(k -\u003e a -\u003e Bool) -\u003e Map k a -\u003e Map k a",
        "fct-source": "src/Useful-Dictionary.html#filterDkeys",
        "fct-type": "function",
        "title": "filterDkeys"
      },
      "index": {
        "description": "Filter over keys in dictionary Data.Map.filterWithKey",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "filterDkeys",
        "normalized": "(a-\u003eb-\u003eBool)-\u003eMap a b-\u003eMap a b",
        "package": "Useful",
        "partial": "Dkeys",
        "signature": "(k-\u003ea-\u003eBool)-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:mapD",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a function to all values in a dictionary [Data.Map.map]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e b) -\u003e Map k a -\u003e Map k b",
        "fct-source": "src/Useful-Dictionary.html#mapD",
        "fct-type": "function",
        "title": "mapD"
      },
      "index": {
        "description": "Maps function to all values in dictionary Data.Map.map",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "mapD",
        "normalized": "(a-\u003eb)-\u003eMap c a-\u003eMap c b",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eb)-\u003eMap k a-\u003eMap k b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-Dictionary.html#v:mapDkeys",
      "description": {
        "fct-descr": "\u003cp\u003eMaps a function to all keys in a dictionary [Data.Map.mapKeys]\n\u003c/p\u003e",
        "fct-module": "Useful.Dictionary",
        "fct-package": "Useful",
        "fct-signature": "(k1 -\u003e k2) -\u003e Map k1 a -\u003e Map k2 a",
        "fct-source": "src/Useful-Dictionary.html#mapDkeys",
        "fct-type": "function",
        "title": "mapDkeys"
      },
      "index": {
        "description": "Maps function to all keys in dictionary Data.Map.mapKeys",
        "hierarchy": "Useful Dictionary",
        "module": "Useful.Dictionary",
        "name": "mapDkeys",
        "normalized": "(a-\u003ea)-\u003eMap a b-\u003eMap a b",
        "package": "Useful",
        "partial": "Dkeys",
        "signature": "(k-\u003ek)-\u003eMap k a-\u003eMap k a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneral shorthands and other small operations. Part of the \u003ca\u003eUseful\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful-General.html",
        "fct-type": "module",
        "title": "General"
      },
      "index": {
        "description": "General shorthands and other small operations Part of the Useful module",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "General",
        "normalized": "",
        "package": "Useful",
        "partial": "General",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eLike !! but returns Maybe a\n\u003c/p\u003e\u003cpre\u003e $ [1,2,3,4] ! 5\n Nothing\n $ [1,2,3,4] ! 1\n Just 2\n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e Int -\u003e Maybe a",
        "fct-source": "src/Useful-General.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Like but returns Maybe Nothing Just",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(!) !",
        "normalized": "[a]-\u003eInt-\u003eMaybe a",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003eInt-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-33--47-",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list and a pair (x,y) and inserts the item y into the list at position x\n\u003c/p\u003e\u003cpre\u003e $ [\"hello\",\"there\",\"people\"]  !/ (0,\"bonjour\")\n [\"bonjour\",\"there\",\"people\"]\n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e (Int, a) -\u003e [a]",
        "fct-source": "src/Useful-General.html#%21%2F",
        "fct-type": "function",
        "title": "(!/)"
      },
      "index": {
        "description": "Takes list and pair and inserts the item into the list at position hello there people bonjour bonjour there people",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(!/) !/",
        "normalized": "[a]-\u003e(Int,a)-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e(Int,a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-33--61-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of as /= (not equal to)\n\u003c/p\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e a -\u003e Bool",
        "fct-source": "src/Useful-General.html#%21%3D",
        "fct-type": "function",
        "title": "(!=)"
      },
      "index": {
        "description": "Alias of as not equal to",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(!=) !=",
        "normalized": "a-\u003ea-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003ea-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-37-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of mod\n\u003c/p\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e a -\u003e a",
        "fct-source": "src/Useful-General.html#%25",
        "fct-type": "function",
        "title": "(%)"
      },
      "index": {
        "description": "Alias of mod",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(%) %",
        "normalized": "a-\u003ea-\u003ea",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-63-",
      "description": {
        "fct-descr": "\u003cp\u003eWorks like python's \"in\" function. (Alias of elem). Simply checks if an item is in a list.\n\u003c/p\u003e\u003cpre\u003e $ \"Hello\" ? [\"Hello\",\"there\",\"people\"]\n True\n $ \"Bonjour\" ? [\"Hello\",\"there\",\"people\"]\n False\n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e [a] -\u003e Bool",
        "fct-source": "src/Useful-General.html#%3F",
        "fct-type": "function",
        "title": "(?)"
      },
      "index": {
        "description": "Works like python in function Alias of elem Simply checks if an item is in list Hello Hello there people True Bonjour Hello there people False",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(?) ?",
        "normalized": "a-\u003e[a]-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-63--33-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the index of the first occurance of an item if it is in a list. Otherwise gives an error. Starts counting from 0!\n\u003c/p\u003e\u003cp\u003eNOTE: This is not like elemIndex! It does not return a Maybe Int it returns an error if the item is not in a list. Either use elemIndex or test using ? first.\n\u003c/p\u003e\u003cpre\u003e $ 'n' ?! \"banana\"\n 2\n $ 'v' ?! \"banana\"\n *** Exception: Item not in list\n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e [a] -\u003e Int",
        "fct-source": "src/Useful-General.html#%3F%21",
        "fct-type": "function",
        "title": "(?!)"
      },
      "index": {
        "description": "Returns the index of the first occurance of an item if it is in list Otherwise gives an error Starts counting from NOTE This is not like elemIndex It does not return Maybe Int it returns an error if the item is not in list Either use elemIndex or test using first banana banana Exception Item not in list",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(?!) ?!",
        "normalized": "a-\u003e[a]-\u003eInt",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003e[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:-63--63-",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of as isInFixOf. Checks if list is a sublist of another list\n\u003c/p\u003e\u003cpre\u003e $ \"hello\" ?? \"Why hello there people\"\n True\n $ [2,3] ?? [1,2,3,4]\n True\n $ \"bonjour\" ?? \"why hello there people\"\n False \n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e [a] -\u003e Bool",
        "fct-source": "src/Useful-General.html#%3F%3F",
        "fct-type": "function",
        "title": "(??)"
      },
      "index": {
        "description": "Alias of as isInFixOf Checks if list is sublist of another list hello Why hello there people True True bonjour why hello there people False",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "(??) ??",
        "normalized": "[a]-\u003e[a]-\u003eBool",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:count",
      "description": {
        "fct-descr": "\u003cp\u003ealias of length\n\u003c/p\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Useful-General.html#count",
        "fct-type": "function",
        "title": "count"
      },
      "index": {
        "description": "alias of length",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "count",
        "normalized": "[a]-\u003eInt",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:len",
      "description": {
        "fct-descr": "\u003cp\u003ealias of length\n\u003c/p\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e Int",
        "fct-source": "src/Useful-General.html#len",
        "fct-type": "function",
        "title": "len"
      },
      "index": {
        "description": "alias of length",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "len",
        "normalized": "[a]-\u003eInt",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-General.html#v:the",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the unit list and returns the unit\n\u003c/p\u003e\u003cp\u003eNOTE: Will return an error if not supplied with the unit list\n\u003c/p\u003e\u003cpre\u003e $ the [\"hello\"]\n \"hello\"\n $ the [\"hello\",\"there\"]\n \"*** Exception: function 'the' called with a list other than the unit list.\n\u003c/pre\u003e",
        "fct-module": "Useful.General",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e a",
        "fct-source": "src/Useful-General.html#the",
        "fct-type": "function",
        "title": "the"
      },
      "index": {
        "description": "Takes the unit list and returns the unit NOTE Will return an error if not supplied with the unit list the hello hello the hello there Exception function the called with list other than the unit list",
        "hierarchy": "Useful General",
        "module": "Useful.General",
        "name": "the",
        "normalized": "[a]-\u003ea",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIO operations, part of the \u003ca\u003eUseful\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "IO operations part of the Useful module",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "IO",
        "normalized": "",
        "package": "Useful",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:foreach",
      "description": {
        "fct-descr": "\u003cp\u003erepeats an IO function for every member of a list, using the list item as an arguement\n\u003c/p\u003e\u003cpre\u003e $ do foreach [1..3] print\n 1\n 2\n 3\n $ do foreach \"asjkdnsd\" putChar\n asjkdnsd\n\u003c/pre\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e (a -\u003e m b) -\u003e m ()",
        "fct-source": "src/Useful-IO.html#foreach",
        "fct-type": "function",
        "title": "foreach"
      },
      "index": {
        "description": "repeats an IO function for every member of list using the list item as an arguement do foreach print do foreach asjkdnsd putChar asjkdnsd",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "foreach",
        "normalized": "[a]-\u003e(a-\u003eb c)-\u003eb()",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e(a-\u003em b)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:mapM_2",
      "description": {
        "fct-descr": "\u003cp\u003emaps an IO function in depth N to the given list. Also versions without _ for storing of the returns.\n\u003c/p\u003e\u003cp\u003eAgain there are also mapM_3, mapM_4 and mapM_5 defined (as well as versions without underscores)\n\u003c/p\u003e\u003cpre\u003e $ mapM_2 write [[1,2,3,4,5],[1,2]]\n 1234512\n\u003c/pre\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e m b) -\u003e [[a]] -\u003e m ()",
        "fct-source": "src/Useful-IO.html#mapM_2",
        "fct-type": "function",
        "title": "mapM_2"
      },
      "index": {
        "description": "maps an IO function in depth to the given list Also versions without for storing of the returns Again there are also mapM mapM and mapM defined as well as versions without underscores mapM write",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "mapM_2",
        "normalized": "(a-\u003eb c)-\u003e[[a]]-\u003eb()",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003em b)-\u003e[[a]]-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:put",
      "description": {
        "fct-descr": "\u003cp\u003elike putStr or putChar but works on any type with \"show\" defined in a similar way to how print does. Can be thought of as \"print\" without the trailing linebreak.\n\u003c/p\u003e\u003cp\u003eNOTE: This means it will print strings with quotes around them. To print strings without quotes use putStr or putStrLn\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Useful-IO.html#put",
        "fct-type": "function",
        "title": "put"
      },
      "index": {
        "description": "like putStr or putChar but works on any type with show defined in similar way to how print does Can be thought of as print without the trailing linebreak NOTE This means it will print strings with quotes around them To print strings without quotes use putStr or putStrLn",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "put",
        "normalized": "a-\u003eIO()",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:putln",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of print\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Useful-IO.html#putln",
        "fct-type": "function",
        "title": "putln"
      },
      "index": {
        "description": "Alias of print",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "putln",
        "normalized": "a-\u003eIO()",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:rand",
      "description": {
        "fct-descr": "\u003cp\u003etakes a list and returns a random element from that list\n\u003c/p\u003e\u003cpre\u003e $ rand [1..5]\n 5\n $ rand \"hello there people\"\n 'l'\n\u003c/pre\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e IO a",
        "fct-source": "src/Useful-IO.html#rand",
        "fct-type": "function",
        "title": "rand"
      },
      "index": {
        "description": "takes list and returns random element from that list rand rand hello there people",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "rand",
        "normalized": "[a]-\u003eIO a",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:replicateM",
      "description": {
        "fct-descr": "\u003cp\u003erepeats an IO function n number of times.\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "Int -\u003e m a -\u003e m [a]",
        "fct-source": "src/Useful-IO.html#replicateM",
        "fct-type": "function",
        "title": "replicateM"
      },
      "index": {
        "description": "repeats an IO function number of times",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "replicateM",
        "normalized": "Int-\u003ea b-\u003ea[b]",
        "package": "Useful",
        "partial": "",
        "signature": "Int-\u003em a-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:replicateM_",
      "description": {
        "fct-descr": "\u003cp\u003eLike replicateM but stores the returns\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "Int -\u003e m a -\u003e m ()",
        "fct-source": "src/Useful-IO.html#replicateM_",
        "fct-type": "function",
        "title": "replicateM_"
      },
      "index": {
        "description": "Like replicateM but stores the returns",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "replicateM_",
        "normalized": "Int-\u003ea b-\u003ea()",
        "package": "Useful",
        "partial": "",
        "signature": "Int-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:while",
      "description": {
        "fct-descr": "\u003cp\u003erepeats an IO function until a IO Bool is true\n\u003c/p\u003e\u003cp\u003eNOTE: Be careful with this function! Better to use recursion. Testing against an item created in the loop will not work.\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "m Bool -\u003e m a -\u003e m ()",
        "fct-source": "src/Useful-IO.html#while",
        "fct-type": "function",
        "title": "while"
      },
      "index": {
        "description": "repeats an IO function until IO Bool is true NOTE Be careful with this function Better to use recursion Testing against an item created in the loop will not work",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "while",
        "normalized": "a Bool-\u003ea b-\u003ea()",
        "package": "Useful",
        "partial": "",
        "signature": "m Bool-\u003em a-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:write",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of put\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Useful-IO.html#write",
        "fct-type": "function",
        "title": "write"
      },
      "index": {
        "description": "Alias of put",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "write",
        "normalized": "a-\u003eIO()",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-IO.html#v:writeln",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of print\n\u003c/p\u003e",
        "fct-module": "Useful.IO",
        "fct-package": "Useful",
        "fct-signature": "a -\u003e IO ()",
        "fct-source": "src/Useful-IO.html#writeln",
        "fct-type": "function",
        "title": "writeln"
      },
      "index": {
        "description": "Alias of print",
        "hierarchy": "Useful IO",
        "module": "Useful.IO",
        "name": "writeln",
        "normalized": "a-\u003eIO()",
        "package": "Useful",
        "partial": "",
        "signature": "a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eList operations, part of the \u003ca\u003eUseful\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful-List.html",
        "fct-type": "module",
        "title": "List"
      },
      "index": {
        "description": "List operations part of the Useful module",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "List",
        "normalized": "",
        "package": "Useful",
        "partial": "List",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:each",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of items and returns a list with each element in it's own single list.\n\u003c/p\u003e\u003cpre\u003e $ each \"hello\"\n [\"h\",\"e\",\"l\",\"l\",\"o\"]\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#each",
        "fct-type": "function",
        "title": "each"
      },
      "index": {
        "description": "Takes list of items and returns list with each element in it own single list each hello",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "each",
        "normalized": "[a]-\u003e[[a]]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:explode",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a two lists and explodes the first into a new list, around the second. Removing the second list where it occurs.\n\u003c/p\u003e\u003cpre\u003e $explode \"hello there people\" \"ll\"\n [\"he\",\"o there people\"]\n $explode \"hello there people\" \" \"\n [\"hello\",\"there\",\"people\"]\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#explode",
        "fct-type": "function",
        "title": "explode"
      },
      "index": {
        "description": "Takes two lists and explodes the first into new list around the second Removing the second list where it occurs explode hello there people ll he there people explode hello there people hello there people",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "explode",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:explodeI",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list item and splits a list around it, removing the item.\n\u003c/p\u003e\u003cpre\u003e $ explodeI \"Hello there people\" ' '\n [\"Hello\",\"there\",\"people\"]\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e a -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#explodeI",
        "fct-type": "function",
        "title": "explodeI"
      },
      "index": {
        "description": "Takes list item and splits list around it removing the item explodeI Hello there people Hello there people",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "explodeI",
        "normalized": "[a]-\u003ea-\u003e[[a]]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003ea-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:implode",
      "description": {
        "fct-descr": "\u003cp\u003eTakes a list of lists and an extra list and concatinates the list of lists with the second list inbetween. When used with the empty list mimics concat\n\u003c/p\u003e\u003cpre\u003e $ implode [\"helloasdad\",\"asd hello\",\"hello\"] \"!!\"\n \"helloasdad!!asd hello!!hello\"\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[[a]] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Useful-List.html#implode",
        "fct-type": "function",
        "title": "implode"
      },
      "index": {
        "description": "Takes list of lists and an extra list and concatinates the list of lists with the second list inbetween When used with the empty list mimics concat implode helloasdad asd hello hello helloasdad asd hello hello",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "implode",
        "normalized": "[[a]]-\u003e[a]-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[[a]]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:implodeI",
      "description": {
        "fct-descr": "\u003cp\u003eTake a list item and concatinates each element of it around another given item.\n\u003c/p\u003e\u003cpre\u003e $implodeI \"askjdnaskd\" '!'\n \"a!s!k!j!d!n!a!s!k!d\"\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e a -\u003e [a]",
        "fct-source": "src/Useful-List.html#implodeI",
        "fct-type": "function",
        "title": "implodeI"
      },
      "index": {
        "description": "Take list item and concatinates each element of it around another given item implodeI askjdnaskd",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "implodeI",
        "normalized": "[a]-\u003ea-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:join",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of implode\n\u003c/p\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[[a]] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Useful-List.html#join",
        "fct-type": "function",
        "title": "join"
      },
      "index": {
        "description": "Alias of implode",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "join",
        "normalized": "[[a]]-\u003e[a]-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[[a]]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:joinI",
      "description": {
        "fct-descr": "\u003cp\u003ealias of implodeI\n\u003c/p\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e a -\u003e [a]",
        "fct-source": "src/Useful-List.html#joinI",
        "fct-type": "function",
        "title": "joinI"
      },
      "index": {
        "description": "alias of implodeI",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "joinI",
        "normalized": "[a]-\u003ea-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003ea-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:map2",
      "description": {
        "fct-descr": "\u003cp\u003emaps a function in depth N to the given list. map3, map4, map5 are also defined.\n\u003c/p\u003e\u003cpre\u003e $ map2 (*2) [[1,2,3,4],[1,1,1,2]]\n [[2,4,6,8],[2,2,2,4]]\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e b) -\u003e [[a]] -\u003e [[b]]",
        "fct-source": "src/Useful-List.html#map2",
        "fct-type": "function",
        "title": "map2"
      },
      "index": {
        "description": "maps function in depth to the given list map3 map4 map5 are also defined map2",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "map2",
        "normalized": "(a-\u003eb)-\u003e[[a]]-\u003e[[b]]",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[[a]]-\u003e[[b]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:map3",
      "description": {
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e b) -\u003e [[[a]]] -\u003e [[[b]]]",
        "fct-source": "src/Useful-List.html#map3",
        "fct-type": "function",
        "title": "map3"
      },
      "index": {
        "description": "",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "map3",
        "normalized": "(a-\u003eb)-\u003e[[[a]]]-\u003e[[[b]]]",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[[[a]]]-\u003e[[[b]]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:map4",
      "description": {
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e b) -\u003e [[[[a]]]] -\u003e [[[[b]]]]",
        "fct-source": "src/Useful-List.html#map4",
        "fct-type": "function",
        "title": "map4"
      },
      "index": {
        "description": "",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "map4",
        "normalized": "(a-\u003eb)-\u003e[[[[a]]]]-\u003e[[[[b]]]]",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[[[[a]]]]-\u003e[[[[b]]]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:map5",
      "description": {
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "(a -\u003e b) -\u003e [[[[[a]]]]] -\u003e [[[[[b]]]]]",
        "fct-source": "src/Useful-List.html#map5",
        "fct-type": "function",
        "title": "map5"
      },
      "index": {
        "description": "",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "map5",
        "normalized": "(a-\u003eb)-\u003e[[[[[a]]]]]-\u003e[[[[[b]]]]]",
        "package": "Useful",
        "partial": "",
        "signature": "(a-\u003eb)-\u003e[[[[[a]]]]]-\u003e[[[[[b]]]]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces any occurrences of the second list, with the third list, in the first list.\n\u003c/p\u003e\u003cpre\u003e $ replace \"why hello hello there\" \"hello\" \"bonjour\"\n \"why bonjour bonjour there\"\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e [a] -\u003e [a] -\u003e [a]",
        "fct-source": "src/Useful-List.html#replace",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replaces any occurrences of the second list with the third list in the first list replace why hello hello there hello bonjour why bonjour bonjour there",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "replace",
        "normalized": "[a]-\u003e[a]-\u003e[a]-\u003e[a]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:rmEmpty",
      "description": {
        "fct-descr": "\u003cp\u003eIn a list of lists this removes any occurances of the empty list. Can also be used to remove occurances of the empty string.\n\u003c/p\u003e\u003cpre\u003e $rmEmpty [\"hello\",\"\",\"there\",\"\",\"people\",\"\"]\n [\"hello\",\"there\",\"people\"]\n\u003c/pre\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[[a]] -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#rmEmpty",
        "fct-type": "function",
        "title": "rmEmpty"
      },
      "index": {
        "description": "In list of lists this removes any occurances of the empty list Can also be used to remove occurances of the empty string rmEmpty hello there people hello there people",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "rmEmpty",
        "normalized": "[[a]]-\u003e[[a]]",
        "package": "Useful",
        "partial": "Empty",
        "signature": "[[a]]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:split",
      "description": {
        "fct-descr": "\u003cp\u003ealias of explode\n\u003c/p\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e [a] -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#split",
        "fct-type": "function",
        "title": "split"
      },
      "index": {
        "description": "alias of explode",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "split",
        "normalized": "[a]-\u003e[a]-\u003e[[a]]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003e[a]-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-List.html#v:splitI",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of explodeI\n\u003c/p\u003e",
        "fct-module": "Useful.List",
        "fct-package": "Useful",
        "fct-signature": "[a] -\u003e a -\u003e [[a]]",
        "fct-source": "src/Useful-List.html#splitI",
        "fct-type": "function",
        "title": "splitI"
      },
      "index": {
        "description": "Alias of explodeI",
        "hierarchy": "Useful List",
        "module": "Useful.List",
        "name": "splitI",
        "normalized": "[a]-\u003ea-\u003e[[a]]",
        "package": "Useful",
        "partial": "",
        "signature": "[a]-\u003ea-\u003e[[a]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eString operations, part of the \u003ca\u003eUseful\u003c/a\u003e module.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful-String.html",
        "fct-type": "module",
        "title": "String"
      },
      "index": {
        "description": "String operations part of the Useful module",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "String",
        "normalized": "",
        "package": "Useful",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#v:chomp",
      "description": {
        "fct-descr": "\u003cp\u003eAlias of \u003ccode\u003e\u003ca\u003estrip\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Useful-String.html#chomp",
        "fct-type": "function",
        "title": "chomp"
      },
      "index": {
        "description": "Alias of strip",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "chomp",
        "normalized": "String-\u003eString",
        "package": "Useful",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#v:strip",
      "description": {
        "fct-descr": "\u003cp\u003eStrips whitespace from either side of a string.\n\u003c/p\u003e\u003cpre\u003e $ strip \" \\v\\r  asdsadasds   \\r\\n\"\n \"asdsadasds\"\t\n\u003c/pre\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Useful-String.html#strip",
        "fct-type": "function",
        "title": "strip"
      },
      "index": {
        "description": "Strips whitespace from either side of string strip asdsadasds asdsadasds",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "strip",
        "normalized": "String-\u003eString",
        "package": "Useful",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#v:stripl",
      "description": {
        "fct-descr": "\u003cp\u003eStrips whitespace from the left of a string\n\u003c/p\u003e\u003cpre\u003e $ stripl \" \\n\\n  askdjnasdnaskd\"\n \"askdjnasdnaskd\"\n\u003c/pre\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Useful-String.html#stripl",
        "fct-type": "function",
        "title": "stripl"
      },
      "index": {
        "description": "Strips whitespace from the left of string stripl askdjnasdnaskd askdjnasdnaskd",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "stripl",
        "normalized": "String-\u003eString",
        "package": "Useful",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#v:stripr",
      "description": {
        "fct-descr": "\u003cp\u003eStrips whitespace from the right of a string\n\u003c/p\u003e\u003cpre\u003e $ stripr \"  asdioamlksd   \\n\\n\"\n \"  asdioamlksd\"\n\u003c/pre\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Useful-String.html#stripr",
        "fct-type": "function",
        "title": "stripr"
      },
      "index": {
        "description": "Strips whitespace from the right of string stripr asdioamlksd asdioamlksd",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "stripr",
        "normalized": "String-\u003eString",
        "package": "Useful",
        "partial": "",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful-String.html#v:whiteSpaceChars",
      "description": {
        "fct-descr": "\u003cp\u003eList of whitespace characters: \n\u003c/p\u003e\u003cpre\u003e $whiteSpaceChars\n [' ','\\r','\\n','\\t','\\f','\\v']\n\u003c/pre\u003e",
        "fct-module": "Useful.String",
        "fct-package": "Useful",
        "fct-signature": "[Char]",
        "fct-source": "src/Useful-String.html#whiteSpaceChars",
        "fct-type": "function",
        "title": "whiteSpaceChars"
      },
      "index": {
        "description": "List of whitespace characters whiteSpaceChars",
        "hierarchy": "Useful String",
        "module": "Useful.String",
        "name": "whiteSpaceChars",
        "normalized": "[Char]",
        "package": "Useful",
        "partial": "Space Chars",
        "signature": "[Char]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Useful/docs/Useful.html#",
      "description": {
        "fct-module": "Useful",
        "fct-package": "Useful",
        "fct-signature": "module",
        "fct-source": "src/Useful.html",
        "fct-type": "module",
        "title": "Useful"
      },
      "index": {
        "description": "",
        "hierarchy": "Useful",
        "module": "Useful",
        "name": "Useful",
        "normalized": "",
        "package": "Useful",
        "partial": "Useful",
        "signature": ""
      }
    }
  }
]