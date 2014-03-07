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
        "word": "TernaryTrees"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.StringMap",
          "name": "StringMap",
          "package": "TernaryTrees",
          "source": "src/Data-Map-StringMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "StringMap",
          "package": "TernaryTrees",
          "partial": "String Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStringMap v is ternary tree. It is commonly used for storing word lists\n like dictionaries.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "StringMap",
          "package": "TernaryTrees",
          "source": "src/Data-Map-StringMap-Internal.html#StringMap",
          "type": "data"
        },
        "index": {
          "description": "StringMap is ternary tree It is commonly used for storing word lists like dictionaries",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "StringMap",
          "package": "TernaryTrees",
          "partial": "String Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#t:StringMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.StringMap",
          "name": "(!)",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e String -\u003e Maybe v",
          "source": "src/Data-Map-StringMap.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "(!) !",
          "normalized": "StringMap a-\u003eString-\u003eMaybe a",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003eString-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all keys in the map.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "assocs",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e [(String, v)]",
          "source": "src/Data-Map-StringMap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all keys in the map",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "assocs",
          "normalized": "StringMap a-\u003e[(String,a)]",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003e[(String,v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a list of all the values in the map.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "elems",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e [v]",
          "source": "src/Data-Map-StringMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Makes list of all the values in the map",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "elems",
          "normalized": "StringMap a-\u003e[a]",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.StringMap",
          "name": "findWithDefault",
          "package": "TernaryTrees",
          "signature": "v -\u003e String -\u003e StringMap v -\u003e v",
          "source": "src/Data-Map-StringMap.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "findWithDefault",
          "normalized": "a-\u003eString-\u003eStringMap a-\u003ea",
          "package": "TernaryTrees",
          "partial": "With Default",
          "signature": "v-\u003eString-\u003eStringMap v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new tree from a list of \u003ccode\u003estrings\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "fromList",
          "package": "TernaryTrees",
          "signature": "[(String, v)] -\u003e StringMap v",
          "source": "src/Data-Map-StringMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates new tree from list of strings",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "fromList",
          "normalized": "[(String,a)]-\u003eStringMap a",
          "package": "TernaryTrees",
          "partial": "List",
          "signature": "[(String,v)]-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an entrie into a tree. Values with the same key will be replaced\n with the newer value.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "insert",
          "package": "TernaryTrees",
          "signature": "String -\u003e v -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-Map-StringMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an entrie into tree Values with the same key will be replaced with the newer value",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "insert",
          "normalized": "String-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "TernaryTrees",
          "signature": "String-\u003ev-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the tree with a given function that combines the new value\n and the old value together to for a new entry.\n\u003c/p\u003e\u003cpre\u003e insertWith f key newval (fromList [(notkey,val1),(key,oldval)]) == fromList [(notkey,val1),(key,f newval oldval)]\n\u003c/pre\u003e",
          "module": "Data.Map.StringMap",
          "name": "insertWith",
          "package": "TernaryTrees",
          "signature": "(v -\u003e v -\u003e v) -\u003e String -\u003e v -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-Map-StringMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into the tree with given function that combines the new value and the old value together to for new entry insertWith key newval fromList notkey val1 key oldval fromList notkey val1 key newval oldval",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eString-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "TernaryTrees",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003eString-\u003ev-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the tree with a given function that combines the new value\n and the old value together to for a new entry.\n\u003c/p\u003e\u003cpre\u003e insertWithKey f key newval (fromList [(notkey,val1),(key,oldval)]) == fromList [(notkey,val1),(key,f key newval oldval)]\n\u003c/pre\u003e",
          "module": "Data.Map.StringMap",
          "name": "insertWithKey",
          "package": "TernaryTrees",
          "signature": "(String -\u003e v -\u003e v -\u003e v) -\u003e String -\u003e v -\u003e StringMap v -\u003e StringMap v",
          "source": "src/Data-Map-StringMap.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into the tree with given function that combines the new value and the old value together to for new entry insertWithKey key newval fromList notkey val1 key oldval fromList notkey val1 key key newval oldval",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "insertWithKey",
          "normalized": "(String-\u003ea-\u003ea-\u003ea)-\u003eString-\u003ea-\u003eStringMap a-\u003eStringMap a",
          "package": "TernaryTrees",
          "partial": "With Key",
          "signature": "(String-\u003ev-\u003ev-\u003ev)-\u003eString-\u003ev-\u003eStringMap v-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all keys in the map.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "keys",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e [String]",
          "source": "src/Data-Map-StringMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all keys in the map",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "keys",
          "normalized": "StringMap a-\u003e[String]",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.StringMap",
          "name": "lookup",
          "package": "TernaryTrees",
          "signature": "String -\u003e StringMap v -\u003e Maybe v",
          "source": "src/Data-Map-StringMap.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "lookup",
          "normalized": "String-\u003eStringMap a-\u003eMaybe a",
          "package": "TernaryTrees",
          "signature": "String-\u003eStringMap v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e is a key in the TernaryMap.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "member",
          "package": "TernaryTrees",
          "signature": "String -\u003e StringMap v -\u003e Bool",
          "source": "src/Data-Map-StringMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the String is key in the TernaryMap",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "member",
          "normalized": "String-\u003eStringMap a-\u003eBool",
          "package": "TernaryTrees",
          "signature": "String-\u003eStringMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "null",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e Bool",
          "source": "src/Data-Map-StringMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the map is empty",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "null",
          "normalized": "StringMap a-\u003eBool",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickly build a tree without an initial tree. This should be used\n to create an initial tree, using insert there after.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "singleton",
          "package": "TernaryTrees",
          "signature": "String -\u003e v -\u003e StringMap v",
          "source": "src/Data-Map-StringMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Quickly build tree without an initial tree This should be used to create an initial tree using insert there after",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "singleton",
          "normalized": "String-\u003ea-\u003eStringMap a",
          "package": "TernaryTrees",
          "signature": "String-\u003ev-\u003eStringMap v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many entries there are in the tree.\n\u003c/p\u003e",
          "module": "Data.Map.StringMap",
          "name": "size",
          "package": "TernaryTrees",
          "signature": "StringMap v -\u003e Int",
          "source": "src/Data-Map-StringMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "Counts how many entries there are in the tree",
          "hierarchy": "Data Map StringMap",
          "module": "Data.Map.StringMap",
          "name": "size",
          "normalized": "StringMap a-\u003eInt",
          "package": "TernaryTrees",
          "signature": "StringMap v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-StringMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.TernaryMap",
          "name": "TernaryMap",
          "package": "TernaryTrees",
          "source": "src/Data-Map-TernaryMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "TernaryMap",
          "package": "TernaryTrees",
          "partial": "Ternary Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTernaryMap k v is ternary tree. It is commonly used for storing word lists\n like dictionaries.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "TernaryMap",
          "package": "TernaryTrees",
          "source": "src/Data-Map-TernaryMap-Internal.html#TernaryMap",
          "type": "data"
        },
        "index": {
          "description": "TernaryMap is ternary tree It is commonly used for storing word lists like dictionaries",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "TernaryMap",
          "package": "TernaryTrees",
          "partial": "Ternary Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#t:TernaryMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.TernaryMap",
          "name": "(!)",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e [k] -\u003e Maybe v",
          "source": "src/Data-Map-TernaryMap.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "(!) !",
          "normalized": "TernaryMap a b-\u003e[a]-\u003eMaybe b",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003e[k]-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all keys in the map.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "assocs",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e [([k], v)]",
          "source": "src/Data-Map-TernaryMap.html#assocs",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all keys in the map",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "assocs",
          "normalized": "TernaryMap a b-\u003e[([a],b)]",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003e[([k],v)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a list of all the values in the map.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "elems",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e [v]",
          "source": "src/Data-Map-TernaryMap.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Makes list of all the values in the map",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "elems",
          "normalized": "TernaryMap a b-\u003e[b]",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003e[v]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.TernaryMap",
          "name": "findWithDefault",
          "package": "TernaryTrees",
          "signature": "v -\u003e [k] -\u003e TernaryMap k v -\u003e v",
          "source": "src/Data-Map-TernaryMap.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "findWithDefault",
          "normalized": "a-\u003e[b]-\u003eTernaryMap b a-\u003ea",
          "package": "TernaryTrees",
          "partial": "With Default",
          "signature": "v-\u003e[k]-\u003eTernaryMap k v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new tree from a list of \u003ccode\u003estrings\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "fromList",
          "package": "TernaryTrees",
          "signature": "[([k], v)] -\u003e TernaryMap k v",
          "source": "src/Data-Map-TernaryMap.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates new tree from list of strings",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "fromList",
          "normalized": "[([a],b)]-\u003eTernaryMap a b",
          "package": "TernaryTrees",
          "partial": "List",
          "signature": "[([k],v)]-\u003eTernaryMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an entrie into a tree. Values with the same key will be replaced\n with the newer value.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "insert",
          "package": "TernaryTrees",
          "signature": "[k] -\u003e v -\u003e TernaryMap k v -\u003e TernaryMap k v",
          "source": "src/Data-Map-TernaryMap.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an entrie into tree Values with the same key will be replaced with the newer value",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "insert",
          "normalized": "[a]-\u003eb-\u003eTernaryMap a b-\u003eTernaryMap a b",
          "package": "TernaryTrees",
          "signature": "[k]-\u003ev-\u003eTernaryMap k v-\u003eTernaryMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the tree with a given function that combines the new value\n and the old value together to for a new entry.\n\u003c/p\u003e\u003cpre\u003e insertWith f key newval (fromList [(notkey,val1),(key,oldval)]) == fromList [(notkey,val1),(key,f newval oldval)]\n\u003c/pre\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "insertWith",
          "package": "TernaryTrees",
          "signature": "(v -\u003e v -\u003e v) -\u003e [k] -\u003e v -\u003e TernaryMap k v -\u003e TernaryMap k v",
          "source": "src/Data-Map-TernaryMap.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into the tree with given function that combines the new value and the old value together to for new entry insertWith key newval fromList notkey val1 key oldval fromList notkey val1 key newval oldval",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[b]-\u003ea-\u003eTernaryMap b a-\u003eTernaryMap b a",
          "package": "TernaryTrees",
          "partial": "With",
          "signature": "(v-\u003ev-\u003ev)-\u003e[k]-\u003ev-\u003eTernaryMap k v-\u003eTernaryMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new value into the tree with a given function that combines the new value\n and the old value together to for a new entry.\n\u003c/p\u003e\u003cpre\u003e insertWithKey f key newval (fromList [(notkey,val1),(key,oldval)]) == fromList [(notkey,val1),(key,f key newval oldval)]\n\u003c/pre\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "insertWithKey",
          "package": "TernaryTrees",
          "signature": "([k] -\u003e v -\u003e v -\u003e v) -\u003e [k] -\u003e v -\u003e TernaryMap k v -\u003e TernaryMap k v",
          "source": "src/Data-Map-TernaryMap.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "description": "Inserts new value into the tree with given function that combines the new value and the old value together to for new entry insertWithKey key newval fromList notkey val1 key oldval fromList notkey val1 key key newval oldval",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "insertWithKey",
          "normalized": "([a]-\u003eb-\u003eb-\u003eb)-\u003e[a]-\u003eb-\u003eTernaryMap a b-\u003eTernaryMap a b",
          "package": "TernaryTrees",
          "partial": "With Key",
          "signature": "([k]-\u003ev-\u003ev-\u003ev)-\u003e[k]-\u003ev-\u003eTernaryMap k v-\u003eTernaryMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all keys in the map.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "keys",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e [[k]]",
          "source": "src/Data-Map-TernaryMap.html#keys",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all keys in the map",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "keys",
          "normalized": "TernaryMap a b-\u003e[[a]]",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003e[[k]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.TernaryMap",
          "name": "lookup",
          "package": "TernaryTrees",
          "signature": "[k] -\u003e TernaryMap k v -\u003e Maybe v",
          "source": "src/Data-Map-TernaryMap.html#lookup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "lookup",
          "normalized": "[a]-\u003eTernaryMap a b-\u003eMaybe b",
          "package": "TernaryTrees",
          "signature": "[k]-\u003eTernaryMap k v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the `[k]` is a key in the TernaryMap.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "member",
          "package": "TernaryTrees",
          "signature": "[k] -\u003e TernaryMap k v -\u003e Bool",
          "source": "src/Data-Map-TernaryMap.html#member",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the is key in the TernaryMap",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "member",
          "normalized": "[a]-\u003eTernaryMap a b-\u003eBool",
          "package": "TernaryTrees",
          "signature": "[k]-\u003eTernaryMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the map is empty.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "null",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e Bool",
          "source": "src/Data-Map-TernaryMap.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the map is empty",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "null",
          "normalized": "TernaryMap a b-\u003eBool",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickly build a tree without an initial tree. This should be used\n to create an initial tree, using insert there after.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "singleton",
          "package": "TernaryTrees",
          "signature": "[k] -\u003e v -\u003e TernaryMap k v",
          "source": "src/Data-Map-TernaryMap.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Quickly build tree without an initial tree This should be used to create an initial tree using insert there after",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "singleton",
          "normalized": "[a]-\u003eb-\u003eTernaryMap a b",
          "package": "TernaryTrees",
          "signature": "[k]-\u003ev-\u003eTernaryMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many entries there are in the tree.\n\u003c/p\u003e",
          "module": "Data.Map.TernaryMap",
          "name": "size",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v -\u003e Int",
          "source": "src/Data-Map-TernaryMap.html#size",
          "type": "function"
        },
        "index": {
          "description": "Counts how many entries there are in the tree",
          "hierarchy": "Data Map TernaryMap",
          "module": "Data.Map.TernaryMap",
          "name": "size",
          "normalized": "TernaryMap a b-\u003eInt",
          "package": "TernaryTrees",
          "signature": "TernaryMap k v-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Map-TernaryMap.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.StringSet",
          "name": "StringSet",
          "package": "TernaryTrees",
          "source": "src/Data-Set-StringSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "StringSet",
          "package": "TernaryTrees",
          "partial": "String Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStringSet is ternary tree. It is commonly used for storing word lists\n like dictionaries for spell checking etc.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "StringSet",
          "package": "TernaryTrees",
          "source": "src/Data-Set-StringSet-Internal.html#StringSet",
          "type": "data"
        },
        "index": {
          "description": "StringSet is ternary tree It is commonly used for storing word lists like dictionaries for spell checking etc",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "StringSet",
          "package": "TernaryTrees",
          "partial": "String Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#t:StringSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all strings inserted into the set.\n\u003c/p\u003e\u003cpre\u003e (elems . fromList) xs == (nub . sort) xs\n\u003c/pre\u003e",
          "module": "Data.Set.StringSet",
          "name": "elems",
          "package": "TernaryTrees",
          "signature": "StringSet -\u003e [String]",
          "source": "src/Data-Set-StringSet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all strings inserted into the set elems fromList xs nub sort xs",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "elems",
          "normalized": "StringSet-\u003e[String]",
          "package": "TernaryTrees",
          "signature": "StringSet-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn empty set.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "empty",
          "package": "TernaryTrees",
          "signature": "StringSet",
          "source": "src/Data-Set-StringSet.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty set",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "empty",
          "package": "TernaryTrees",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new tree from a list of \u003ccode\u003eStrings\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "fromList",
          "package": "TernaryTrees",
          "signature": "[String] -\u003e StringSet",
          "source": "src/Data-Set-StringSet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates new tree from list of Strings",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "fromList",
          "normalized": "[String]-\u003eStringSet",
          "package": "TernaryTrees",
          "partial": "List",
          "signature": "[String]-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts a new \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e element into a tree.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "insert",
          "package": "TernaryTrees",
          "signature": "String -\u003e StringSet -\u003e StringSet",
          "source": "src/Data-Set-StringSet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts new String element into tree",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "insert",
          "normalized": "String-\u003eStringSet-\u003eStringSet",
          "package": "TernaryTrees",
          "signature": "String-\u003eStringSet-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the string is in the StringSet\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "member",
          "package": "TernaryTrees",
          "signature": "String -\u003e StringSet -\u003e Bool",
          "source": "src/Data-Set-StringSet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the string is in the StringSet",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "member",
          "normalized": "String-\u003eStringSet-\u003eBool",
          "package": "TernaryTrees",
          "signature": "String-\u003eStringSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the set is empty.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "null",
          "package": "TernaryTrees",
          "signature": "StringSet -\u003e Bool",
          "source": "src/Data-Set-StringSet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the set is empty",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "null",
          "normalized": "StringSet-\u003eBool",
          "package": "TernaryTrees",
          "signature": "StringSet-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickly build an initial tree.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "singleton",
          "package": "TernaryTrees",
          "signature": "String -\u003e StringSet",
          "source": "src/Data-Set-StringSet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Quickly build an initial tree",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "singleton",
          "normalized": "String-\u003eStringSet",
          "package": "TernaryTrees",
          "signature": "String-\u003eStringSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many entries there are in the tree.\n\u003c/p\u003e",
          "module": "Data.Set.StringSet",
          "name": "size",
          "package": "TernaryTrees",
          "signature": "StringSet -\u003e Int",
          "source": "src/Data-Set-StringSet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Counts how many entries there are in the tree",
          "hierarchy": "Data Set StringSet",
          "module": "Data.Set.StringSet",
          "name": "size",
          "normalized": "StringSet-\u003eInt",
          "package": "TernaryTrees",
          "signature": "StringSet-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-StringSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.TernarySet",
          "name": "TernarySet",
          "package": "TernaryTrees",
          "source": "src/Data-Set-TernarySet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "TernarySet",
          "package": "TernaryTrees",
          "partial": "Ternary Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTernarySet a is ternary tree. It is commonly used for storing word lists\n like dictionaries.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "TernarySet",
          "package": "TernaryTrees",
          "source": "src/Data-Set-TernarySet-Internal.html#TernarySet",
          "type": "data"
        },
        "index": {
          "description": "TernarySet is ternary tree It is commonly used for storing word lists like dictionaries",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "TernarySet",
          "package": "TernaryTrees",
          "partial": "Ternary Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#t:TernarySet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a (sorted) list of all elements inserted into the set.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "elems",
          "package": "TernaryTrees",
          "signature": "TernarySet a -\u003e [[a]]",
          "source": "src/Data-Set-TernarySet.html#elems",
          "type": "function"
        },
        "index": {
          "description": "Returns sorted list of all elements inserted into the set",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "elems",
          "normalized": "TernarySet a-\u003e[[a]]",
          "package": "TernaryTrees",
          "signature": "TernarySet a-\u003e[[a]]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new tree from a list of \u003ccode\u003estrings\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "fromList",
          "package": "TernaryTrees",
          "signature": "[[a]] -\u003e TernarySet a",
          "source": "src/Data-Set-TernarySet.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Creates new tree from list of strings",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "fromList",
          "normalized": "[[a]]-\u003eTernarySet a",
          "package": "TernaryTrees",
          "partial": "List",
          "signature": "[[a]]-\u003eTernarySet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInserts an entries into a tree.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "insert",
          "package": "TernaryTrees",
          "signature": "[a] -\u003e TernarySet a -\u003e TernarySet a",
          "source": "src/Data-Set-TernarySet.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Inserts an entries into tree",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "insert",
          "normalized": "[a]-\u003eTernarySet a-\u003eTernarySet a",
          "package": "TernaryTrees",
          "signature": "[a]-\u003eTernarySet a-\u003eTernarySet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the `[a]` is in the TernarySet\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "member",
          "package": "TernaryTrees",
          "signature": "[a] -\u003e TernarySet a -\u003e Bool",
          "source": "src/Data-Set-TernarySet.html#member",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the is in the TernarySet",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "member",
          "normalized": "[a]-\u003eTernarySet a-\u003eBool",
          "package": "TernaryTrees",
          "signature": "[a]-\u003eTernarySet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the set is empty.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "null",
          "package": "TernaryTrees",
          "signature": "TernarySet a -\u003e Bool",
          "source": "src/Data-Set-TernarySet.html#null",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the set is empty",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "null",
          "normalized": "TernarySet a-\u003eBool",
          "package": "TernaryTrees",
          "signature": "TernarySet a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eQuickly build a tree without an initial tree. This should be used\n to create an initial tree, using insert there after.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "singleton",
          "package": "TernaryTrees",
          "signature": "[a] -\u003e TernarySet a",
          "source": "src/Data-Set-TernarySet.html#singleton",
          "type": "function"
        },
        "index": {
          "description": "Quickly build tree without an initial tree This should be used to create an initial tree using insert there after",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "singleton",
          "normalized": "[a]-\u003eTernarySet a",
          "package": "TernaryTrees",
          "signature": "[a]-\u003eTernarySet a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts how many entries there are in the tree.\n\u003c/p\u003e",
          "module": "Data.Set.TernarySet",
          "name": "size",
          "package": "TernaryTrees",
          "signature": "TernarySet a -\u003e Int",
          "source": "src/Data-Set-TernarySet.html#size",
          "type": "function"
        },
        "index": {
          "description": "Counts how many entries there are in the tree",
          "hierarchy": "Data Set TernarySet",
          "module": "Data.Set.TernarySet",
          "name": "size",
          "normalized": "TernarySet a-\u003eInt",
          "package": "TernaryTrees",
          "signature": "TernarySet a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TernaryTrees/docs/Data-Set-TernarySet.html#v:size"
      }
    }
  ]
]