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
        "word": "enummapset"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "Lazy",
          "package": "enummapset",
          "source": "src/Data-EnumMap-Lazy.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "Lazy",
          "package": "enummapset",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e keys.\n\u003c/p\u003e",
          "module": "Data.EnumMap.Lazy",
          "name": "EnumMap",
          "package": "enummapset",
          "source": "src/Data-EnumMap-Base.html#EnumMap",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for IntMap with Enum keys",
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "EnumMap",
          "package": "enummapset",
          "partial": "Enum Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#t:EnumMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "(!)",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e k -\u003e a",
          "source": "src/Data-EnumMap-Base.html#%21",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:-33-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:-33-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "(!) !",
          "normalized": "EnumMap a b-\u003ea-\u003eb",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003ek-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "(\\\\)",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#%5C%5C",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:-92--92-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:-92--92-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "(\\\\) \\\\",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "adjust",
          "package": "enummapset",
          "signature": "(a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(a-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "adjustWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "alter",
          "package": "enummapset",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#alter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "assocs",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap-Base.html#assocs",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:assocs\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:assocs\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "assocs",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:assocs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "delete",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#delete",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:delete\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:delete\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "delete",
          "normalized": "a-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "k-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "deleteFindMax",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#deleteFindMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteFindMax\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:deleteFindMax\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "deleteFindMax",
          "normalized": "EnumMap a b-\u003e((a,b),EnumMap a b)",
          "package": "enummapset",
          "partial": "Find Max",
          "signature": "EnumMap k a-\u003e((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "deleteFindMin",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#deleteFindMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteFindMin\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:deleteFindMin\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "deleteFindMin",
          "normalized": "EnumMap a b-\u003e((a,b),EnumMap a b)",
          "package": "enummapset",
          "partial": "Find Min",
          "signature": "EnumMap k a-\u003e((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "deleteMax",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#deleteMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteMax\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:deleteMax\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "deleteMax",
          "normalized": "EnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Max",
          "signature": "EnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "deleteMin",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#deleteMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteMin\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:deleteMin\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "deleteMin",
          "normalized": "EnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Min",
          "signature": "EnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "difference",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#difference",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:difference\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:difference\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "difference",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "differenceWith",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#differenceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eEnumMap c a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "differenceWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "differenceWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "elems",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [a]",
          "source": "src/Data-EnumMap-Base.html#elems",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:elems\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:elems\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "elems",
          "normalized": "EnumMap a b-\u003e[b]",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "empty",
          "package": "enummapset",
          "signature": "EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#empty",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:empty\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:empty\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "empty",
          "package": "enummapset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "enumMapToIntMap",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e IntMap a",
          "source": "src/Data-EnumMap-Base.html#enumMapToIntMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:enumMapToIntMap\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:enumMapToIntMap\"]"
        },
        "index": {
          "description": "Unwrap IntMap",
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "enumMapToIntMap",
          "normalized": "EnumMap a b-\u003eIntMap b",
          "package": "enummapset",
          "partial": "Map To Int Map",
          "signature": "EnumMap k a-\u003eIntMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:enumMapToIntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "filter",
          "package": "enummapset",
          "signature": "(a -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:filter\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:filter\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(a-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "filterWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#filterWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:filterWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:filterWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "filterWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:filterWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "findMax",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e (k, a)",
          "source": "src/Data-EnumMap-Base.html#findMax",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:findMax\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:findMax\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "findMax",
          "normalized": "EnumMap a b-\u003e(a,b)",
          "package": "enummapset",
          "partial": "Max",
          "signature": "EnumMap k a-\u003e(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "findMin",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e (k, a)",
          "source": "src/Data-EnumMap-Base.html#findMin",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:findMin\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:findMin\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "findMin",
          "normalized": "EnumMap a b-\u003e(a,b)",
          "package": "enummapset",
          "partial": "Min",
          "signature": "EnumMap k a-\u003e(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "findWithDefault",
          "package": "enummapset",
          "signature": "a -\u003e k -\u003e EnumMap k a -\u003e a",
          "source": "src/Data-EnumMap-Base.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003eEnumMap b a-\u003ea",
          "package": "enummapset",
          "partial": "With Default",
          "signature": "a-\u003ek-\u003eEnumMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldl",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e EnumMap k b -\u003e a",
          "source": "src/Data-EnumMap-Base.html#foldl",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldl\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldl\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumMap c b-\u003ea",
          "package": "enummapset",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldl'",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e EnumMap k b -\u003e a",
          "source": "src/Data-EnumMap-Base.html#foldl%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldl-39-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldl-39-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumMap c b-\u003ea",
          "package": "enummapset",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldlWithKey",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e a) -\u003e a -\u003e EnumMap k b -\u003e a",
          "source": "src/Data-EnumMap-Base.html#foldlWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldlWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldlWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldlWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eEnumMap b c-\u003ea",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(a-\u003ek-\u003eb-\u003ea)-\u003ea-\u003eEnumMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldlWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldlWithKey'",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e a) -\u003e a -\u003e EnumMap k b -\u003e a",
          "source": "src/Data-EnumMap-Base.html#foldlWithKey%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldlWithKey-39-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldlWithKey-39-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldlWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ea)-\u003ea-\u003eEnumMap b c-\u003ea",
          "package": "enummapset",
          "partial": "With Key'",
          "signature": "(a-\u003ek-\u003eb-\u003ea)-\u003ea-\u003eEnumMap k b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldlWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldr",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap-Base.html#foldr",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldr\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldr\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap c a-\u003eb",
          "package": "enummapset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldr'",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap-Base.html#foldr%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldr-39-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldr-39-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap c a-\u003eb",
          "package": "enummapset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldrWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap-Base.html#foldrWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldrWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldrWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldrWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMap a b-\u003ec",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldrWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "foldrWithKey'",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap-Base.html#foldrWithKey%27",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldrWithKey-39-\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:foldrWithKey-39-\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "foldrWithKey'",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMap a b-\u003ec",
          "package": "enummapset",
          "partial": "With Key'",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:foldrWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscListWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscListWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromAscListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Asc List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromDistinctAscList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromDistinctAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Distinct Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromListWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromListWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "fromSet",
          "package": "enummapset",
          "signature": "(k -\u003e a) -\u003e EnumSet k -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#fromSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "fromSet",
          "normalized": "(a-\u003eb)-\u003eEnumSet a-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Set",
          "signature": "(k-\u003ea)-\u003eEnumSet k-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "insert",
          "package": "enummapset",
          "signature": "k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "k-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "insertLookupWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "insertLookupWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "enummapset",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "insertWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#insertWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "insertWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "intMapToEnumMap",
          "package": "enummapset",
          "signature": "IntMap a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#intMapToEnumMap",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intMapToEnumMap\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:intMapToEnumMap\"]"
        },
        "index": {
          "description": "Wrap IntMap",
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "intMapToEnumMap",
          "normalized": "IntMap a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Map To Enum Map",
          "signature": "IntMap a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intMapToEnumMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "intersection",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#intersection",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intersection\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:intersection\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "intersection",
          "normalized": "EnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "intersectionWith",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Base.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMap d a-\u003eEnumMap d b-\u003eEnumMap d c",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "intersectionWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Base.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "intersectionWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a d",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "isProperSubmapOf",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#isProperSubmapOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isProperSubmapOf\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:isProperSubmapOf\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "isProperSubmapOf",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eBool",
          "package": "enummapset",
          "partial": "Proper Submap Of",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isProperSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "isProperSubmapOfBy",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#isProperSubmapOfBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isProperSubmapOfBy\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:isProperSubmapOfBy\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "isProperSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eBool",
          "package": "enummapset",
          "partial": "Proper Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isProperSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "isSubmapOf",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#isSubmapOf",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isSubmapOf\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:isSubmapOf\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "isSubmapOf",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eBool",
          "package": "enummapset",
          "partial": "Submap Of",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isSubmapOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "isSubmapOfBy",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e Bool) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#isSubmapOfBy",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isSubmapOfBy\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:isSubmapOfBy\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "isSubmapOfBy",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eBool",
          "package": "enummapset",
          "partial": "Submap Of By",
          "signature": "(a-\u003eb-\u003eBool)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:isSubmapOfBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "keys",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [k]",
          "source": "src/Data-EnumMap-Base.html#keys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:keys\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:keys\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "keys",
          "normalized": "EnumMap a b-\u003e[a]",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:keys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "keysSet",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumSet k",
          "source": "src/Data-EnumMap-Base.html#keysSet",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:keysSet\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:keysSet\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "keysSet",
          "normalized": "EnumMap a b-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Set",
          "signature": "EnumMap k a-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:keysSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "lookup",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe a",
          "source": "src/Data-EnumMap-Base.html#lookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookup\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:lookup\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "lookup",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe b",
          "package": "enummapset",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "lookupGE",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe (k, a)",
          "source": "src/Data-EnumMap-Base.html#lookupGE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupGE\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:lookupGE\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "lookupGE",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe(a,b)",
          "package": "enummapset",
          "partial": "GE",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "lookupGT",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe (k, a)",
          "source": "src/Data-EnumMap-Base.html#lookupGT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupGT\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:lookupGT\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "lookupGT",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe(a,b)",
          "package": "enummapset",
          "partial": "GT",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "lookupLE",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe (k, a)",
          "source": "src/Data-EnumMap-Base.html#lookupLE",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupLE\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:lookupLE\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "lookupLE",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe(a,b)",
          "package": "enummapset",
          "partial": "LE",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "lookupLT",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Maybe (k, a)",
          "source": "src/Data-EnumMap-Base.html#lookupLT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupLT\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:lookupLT\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "lookupLT",
          "normalized": "a-\u003eEnumMap a b-\u003eMaybe(a,b)",
          "package": "enummapset",
          "partial": "LT",
          "signature": "k-\u003eEnumMap k a-\u003eMaybe(k,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:lookupLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "map",
          "package": "enummapset",
          "signature": "(a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Base.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "enummapset",
          "signature": "(a-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccum",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Base.html#mapAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap d b-\u003e(a,EnumMap d c)",
          "package": "enummapset",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccumRWithKey",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Base.html#mapAccumRWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccumRWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eEnumMap b c-\u003e(a,EnumMap b d)",
          "package": "enummapset",
          "partial": "Accum RWith Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapAccumRWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccumWithKey",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Base.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eEnumMap b c-\u003e(a,EnumMap b d)",
          "package": "enummapset",
          "partial": "Accum With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapEither",
          "package": "enummapset",
          "signature": "(a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap-Base.html#mapEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eEnumMap d a-\u003e(EnumMap d b,EnumMap d c)",
          "package": "enummapset",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapEitherWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap-Base.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapEitherWithKey",
          "normalized": "(a-\u003eb-\u003eEither c d)-\u003eEnumMap a b-\u003e(EnumMap a c,EnumMap a d)",
          "package": "enummapset",
          "partial": "Either With Key",
          "signature": "(k-\u003ea-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "mapKeys",
          "package": "enummapset",
          "signature": "(k -\u003e k) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#mapKeys",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapKeys\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapKeys\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapKeys",
          "normalized": "(a-\u003ea)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Keys",
          "signature": "(k-\u003ek)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "mapKeysMonotonic",
          "package": "enummapset",
          "signature": "(k -\u003e k) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#mapKeysMonotonic",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapKeysMonotonic\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapKeysMonotonic\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapKeysMonotonic",
          "normalized": "(a-\u003ea)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Keys Monotonic",
          "signature": "(k-\u003ek)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapKeysMonotonic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapKeysWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k -\u003e k) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapMaybe",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Base.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "enummapset",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapMaybeWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Base.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapMaybeWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "enummapset",
          "partial": "Maybe With Key",
          "signature": "(k-\u003ea-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mapWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Base.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "maxView",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Maybe (a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#maxView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:maxView\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:maxView\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "maxView",
          "normalized": "EnumMap a b-\u003eMaybe(b,EnumMap a b)",
          "package": "enummapset",
          "partial": "View",
          "signature": "EnumMap k a-\u003eMaybe(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "maxViewWithKey",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Maybe ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#maxViewWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:maxViewWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:maxViewWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "maxViewWithKey",
          "normalized": "EnumMap a b-\u003eMaybe((a,b),EnumMap a b)",
          "package": "enummapset",
          "partial": "View With Key",
          "signature": "EnumMap k a-\u003eMaybe((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:maxViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "member",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#member",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:member\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:member\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "member",
          "normalized": "a-\u003eEnumMap a b-\u003eBool",
          "package": "enummapset",
          "signature": "k-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "mergeWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe c) -\u003e (EnumMap k a -\u003e EnumMap k c) -\u003e (EnumMap k b -\u003e EnumMap k c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Base.html#mergeWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "mergeWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe d)-\u003e(EnumMap a b-\u003eEnumMap a d)-\u003e(EnumMap a c-\u003eEnumMap a d)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a d",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe c)-\u003e(EnumMap k a-\u003eEnumMap k c)-\u003e(EnumMap k b-\u003eEnumMap k c)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:mergeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "minView",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Maybe (a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#minView",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:minView\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:minView\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "minView",
          "normalized": "EnumMap a b-\u003eMaybe(b,EnumMap a b)",
          "package": "enummapset",
          "partial": "View",
          "signature": "EnumMap k a-\u003eMaybe(a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "minViewWithKey",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Maybe ((k, a), EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#minViewWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:minViewWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:minViewWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "minViewWithKey",
          "normalized": "EnumMap a b-\u003eMaybe((a,b),EnumMap a b)",
          "package": "enummapset",
          "partial": "View With Key",
          "signature": "EnumMap k a-\u003eMaybe((k,a),EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:minViewWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "notMember",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#notMember",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:notMember\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:notMember\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "notMember",
          "normalized": "a-\u003eEnumMap a b-\u003eBool",
          "package": "enummapset",
          "partial": "Member",
          "signature": "k-\u003eEnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "null",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Bool",
          "source": "src/Data-EnumMap-Base.html#null",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:null\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:null\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "null",
          "normalized": "EnumMap a b-\u003eBool",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "partition",
          "package": "enummapset",
          "signature": "(a -\u003e Bool) -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#partition",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:partition\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:partition\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eEnumMap b a-\u003e(EnumMap b a,EnumMap b a)",
          "package": "enummapset",
          "signature": "(a-\u003eBool)-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "partitionWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Bool) -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#partitionWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:partitionWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:partitionWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "partitionWithKey",
          "normalized": "(a-\u003eb-\u003eBool)-\u003eEnumMap a b-\u003e(EnumMap a b,EnumMap a b)",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eBool)-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:partitionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "singleton",
          "package": "enummapset",
          "signature": "k -\u003e a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "k-\u003ea-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "size",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e Int",
          "source": "src/Data-EnumMap-Base.html#size",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:size\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:size\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "size",
          "normalized": "EnumMap a b-\u003eInt",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "split",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e (EnumMap k a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#split",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:split\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:split\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "split",
          "normalized": "a-\u003eEnumMap a b-\u003e(EnumMap a b,EnumMap a b)",
          "package": "enummapset",
          "signature": "k-\u003eEnumMap k a-\u003e(EnumMap k a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "splitLookup",
          "package": "enummapset",
          "signature": "k -\u003e EnumMap k a -\u003e (EnumMap k a, Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#splitLookup",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:splitLookup\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:splitLookup\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "splitLookup",
          "normalized": "a-\u003eEnumMap a b-\u003e(EnumMap a b,Maybe b,EnumMap a b)",
          "package": "enummapset",
          "partial": "Lookup",
          "signature": "k-\u003eEnumMap k a-\u003e(EnumMap k a,Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:splitLookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "toAscList",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap-Base.html#toAscList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toAscList\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:toAscList\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "toAscList",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "enummapset",
          "partial": "Asc List",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "toDescList",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap-Base.html#toDescList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toDescList\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:toDescList\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "toDescList",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "enummapset",
          "partial": "Desc List",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "toList",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e [(k, a)]",
          "source": "src/Data-EnumMap-Base.html#toList",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toList\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:toList\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "toList",
          "normalized": "EnumMap a b-\u003e[(a,b)]",
          "package": "enummapset",
          "partial": "List",
          "signature": "EnumMap k a-\u003e[(k,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "traverseWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e t b) -\u003e EnumMap k a -\u003e t (EnumMap k b)",
          "source": "src/Data-EnumMap-Base.html#traverseWithKey",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:traverseWithKey\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:traverseWithKey\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "traverseWithKey",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eEnumMap a b-\u003ec(EnumMap a d)",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003et b)-\u003eEnumMap k a-\u003et(EnumMap k b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:traverseWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "union",
          "package": "enummapset",
          "signature": "EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#union",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:union\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:union\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "union",
          "normalized": "EnumMap a b-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "EnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "unionWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#unionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMap b a-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "unionWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Data.EnumMap.Lazy\",\"Data.EnumMap.Strict\"]",
          "name": "unions",
          "package": "enummapset",
          "signature": "[EnumMap k a] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#unions",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:unions\",\"http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:unions\"]"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "unions",
          "normalized": "[EnumMap a b]-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "[EnumMap k a]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:unions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "unionsWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [EnumMap k a] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#unionsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[EnumMap b a]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[EnumMap k a]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "update",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateLookupWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap-Base.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateLookupWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "enummapset",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateMax",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#updateMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateMax",
          "normalized": "(a-\u003eMaybe a)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Max",
          "signature": "(a-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateMaxWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateMaxWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Max With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateMin",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#updateMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateMin",
          "normalized": "(a-\u003eMaybe a)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Min",
          "signature": "(a-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateMinWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateMinWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Min With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Lazy",
          "name": "updateWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Base.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Lazy",
          "module": "Data.EnumMap.Lazy",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Lazy.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "Strict",
          "package": "enummapset",
          "source": "src/Data-EnumMap-Strict.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "Strict",
          "package": "enummapset",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eIntMap\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e keys.\n\u003c/p\u003e",
          "module": "Data.EnumMap.Strict",
          "name": "EnumMap",
          "package": "enummapset",
          "source": "src/Data-EnumMap-Base.html#EnumMap",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for IntMap with Enum keys",
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "EnumMap",
          "package": "enummapset",
          "partial": "Enum Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#t:EnumMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "adjust",
          "package": "enummapset",
          "signature": "(a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "adjust",
          "normalized": "(a-\u003ea)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(a-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "adjustWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#adjustWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "adjustWithKey",
          "normalized": "(a-\u003eb-\u003eb)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "alter",
          "package": "enummapset",
          "signature": "(Maybe a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#alter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "alter",
          "normalized": "(Maybe a-\u003eMaybe a)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(Maybe a-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:alter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "differenceWith",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#differenceWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "differenceWith",
          "normalized": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap c a-\u003eEnumMap c b-\u003eEnumMap c a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:differenceWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "differenceWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#differenceWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "differenceWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:differenceWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "findWithDefault",
          "package": "enummapset",
          "signature": "a -\u003e k -\u003e EnumMap k a -\u003e a",
          "source": "src/Data-EnumMap-Strict.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "findWithDefault",
          "normalized": "a-\u003eb-\u003eEnumMap b a-\u003ea",
          "package": "enummapset",
          "partial": "With Default",
          "signature": "a-\u003ek-\u003eEnumMap k a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromAscList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromAscListWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromAscListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromAscListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Asc List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromAscListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromAscListWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromAscListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromAscListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Asc List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromAscListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromDistinctAscList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromDistinctAscList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Distinct Asc List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromList",
          "package": "enummapset",
          "signature": "[(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "List",
          "signature": "[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromListWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromListWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromListWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[(b,a)]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "List With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromListWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromListWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e [(k, a)] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromListWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromListWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003e[(a,b)]-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "List With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003e[(k,a)]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromListWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "fromSet",
          "package": "enummapset",
          "signature": "(k -\u003e a) -\u003e EnumSet k -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#fromSet",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "fromSet",
          "normalized": "(a-\u003eb)-\u003eEnumSet a-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Set",
          "signature": "(k-\u003ea)-\u003eEnumSet k-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:fromSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "insert",
          "package": "enummapset",
          "signature": "k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "insert",
          "normalized": "a-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "k-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "insertLookupWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap-Strict.html#insertLookupWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "insertLookupWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "enummapset",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "insertWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#insertWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "insertWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#insertWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "insertWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "intersectionWith",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Strict.html#intersectionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "intersectionWith",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMap d a-\u003eEnumMap d b-\u003eEnumMap d c",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003eb-\u003ec)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:intersectionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "intersectionWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Strict.html#intersectionWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "intersectionWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a d",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003ec)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:intersectionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "map",
          "package": "enummapset",
          "signature": "(a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Strict.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "enummapset",
          "signature": "(a-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapAccum",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Strict.html#mapAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap d b-\u003e(a,EnumMap d c)",
          "package": "enummapset",
          "partial": "Accum",
          "signature": "(a-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapAccumRWithKey",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Strict.html#mapAccumRWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapAccumRWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eEnumMap b c-\u003e(a,EnumMap b d)",
          "package": "enummapset",
          "partial": "Accum RWith Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapAccumRWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapAccumWithKey",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e b -\u003e (a, c)) -\u003e a -\u003e EnumMap k b -\u003e (a, EnumMap k c)",
          "source": "src/Data-EnumMap-Strict.html#mapAccumWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapAccumWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003e(a,d))-\u003ea-\u003eEnumMap b c-\u003e(a,EnumMap b d)",
          "package": "enummapset",
          "partial": "Accum With Key",
          "signature": "(a-\u003ek-\u003eb-\u003e(a,c))-\u003ea-\u003eEnumMap k b-\u003e(a,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapAccumWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapEither",
          "package": "enummapset",
          "signature": "(a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap-Strict.html#mapEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapEither",
          "normalized": "(a-\u003eEither b c)-\u003eEnumMap d a-\u003e(EnumMap d b,EnumMap d c)",
          "package": "enummapset",
          "partial": "Either",
          "signature": "(a-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapEitherWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Either b c) -\u003e EnumMap k a -\u003e (EnumMap k b, EnumMap k c)",
          "source": "src/Data-EnumMap-Strict.html#mapEitherWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapEitherWithKey",
          "normalized": "(a-\u003eb-\u003eEither c d)-\u003eEnumMap a b-\u003e(EnumMap a c,EnumMap a d)",
          "package": "enummapset",
          "partial": "Either With Key",
          "signature": "(k-\u003ea-\u003eEither b c)-\u003eEnumMap k a-\u003e(EnumMap k b,EnumMap k c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapEitherWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapKeysWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e (k -\u003e k) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#mapKeysWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapKeysWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e(b-\u003eb)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Keys With",
          "signature": "(a-\u003ea-\u003ea)-\u003e(k-\u003ek)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapMaybe",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Strict.html#mapMaybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapMaybe",
          "normalized": "(a-\u003eMaybe b)-\u003eEnumMap c a-\u003eEnumMap c b",
          "package": "enummapset",
          "partial": "Maybe",
          "signature": "(a-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapMaybeWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Strict.html#mapMaybeWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapMaybeWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe c)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "enummapset",
          "partial": "Maybe With Key",
          "signature": "(k-\u003ea-\u003eMaybe b)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapMaybeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mapWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b) -\u003e EnumMap k a -\u003e EnumMap k b",
          "source": "src/Data-EnumMap-Strict.html#mapWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mapWithKey",
          "normalized": "(a-\u003eb-\u003ec)-\u003eEnumMap a b-\u003eEnumMap a c",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb)-\u003eEnumMap k a-\u003eEnumMap k b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "mergeWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e Maybe c) -\u003e (EnumMap k a -\u003e EnumMap k c) -\u003e (EnumMap k b -\u003e EnumMap k c) -\u003e EnumMap k a -\u003e EnumMap k b -\u003e EnumMap k c",
          "source": "src/Data-EnumMap-Strict.html#mergeWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "mergeWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003eMaybe d)-\u003e(EnumMap a b-\u003eEnumMap a d)-\u003e(EnumMap a c-\u003eEnumMap a d)-\u003eEnumMap a b-\u003eEnumMap a c-\u003eEnumMap a d",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eMaybe c)-\u003e(EnumMap k a-\u003eEnumMap k c)-\u003e(EnumMap k b-\u003eEnumMap k c)-\u003eEnumMap k a-\u003eEnumMap k b-\u003eEnumMap k c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:mergeWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "singleton",
          "package": "enummapset",
          "signature": "k -\u003e a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003eEnumMap a b",
          "package": "enummapset",
          "signature": "k-\u003ea-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "unionWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#unionWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "unionWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eEnumMap b a-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "unionWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e EnumMap k a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#unionWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "unionWithKey",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003eEnumMap a b-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003eEnumMap k a-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "unionsWith",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e [EnumMap k a] -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#unionsWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "unionsWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[EnumMap b a]-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003e[EnumMap k a]-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "update",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#update",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "update",
          "normalized": "(a-\u003eMaybe a)-\u003eb-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "signature": "(a-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateLookupWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e (Maybe a, EnumMap k a)",
          "source": "src/Data-EnumMap-Strict.html#updateLookupWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateLookupWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003e(Maybe b,EnumMap a b)",
          "package": "enummapset",
          "partial": "Lookup With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003e(Maybe a,EnumMap k a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateMax",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#updateMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateMax",
          "normalized": "(a-\u003eMaybe a)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Max",
          "signature": "(a-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateMaxWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#updateMaxWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateMaxWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Max With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateMaxWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateMin",
          "package": "enummapset",
          "signature": "(a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#updateMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateMin",
          "normalized": "(a-\u003eMaybe a)-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "Min",
          "signature": "(a-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateMinWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#updateMinWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateMinWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "Min With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateMinWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap.Strict",
          "name": "updateWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e Maybe a) -\u003e k -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap-Strict.html#updateWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap Strict",
          "module": "Data.EnumMap.Strict",
          "name": "updateWithKey",
          "normalized": "(a-\u003eb-\u003eMaybe b)-\u003ea-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eMaybe a)-\u003ek-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap-Strict.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "enummapset",
          "source": "src/Data-EnumMap.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "EnumMap",
          "package": "enummapset",
          "partial": "Enum Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "fold",
          "package": "enummapset",
          "signature": "(a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap c a-\u003eb",
          "package": "enummapset",
          "signature": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "foldWithKey",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e b -\u003e b) -\u003e b -\u003e EnumMap k a -\u003e b",
          "source": "src/Data-EnumMap.html#foldWithKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "foldWithKey",
          "normalized": "(a-\u003eb-\u003ec-\u003ec)-\u003ec-\u003eEnumMap a b-\u003ec",
          "package": "enummapset",
          "partial": "With Key",
          "signature": "(k-\u003ea-\u003eb-\u003eb)-\u003eb-\u003eEnumMap k a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap.html#v:foldWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "insertWith'",
          "package": "enummapset",
          "signature": "(a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb-\u003ea-\u003eEnumMap b a-\u003eEnumMap b a",
          "package": "enummapset",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumMap",
          "name": "insertWithKey'",
          "package": "enummapset",
          "signature": "(k -\u003e a -\u003e a -\u003e a) -\u003e k -\u003e a -\u003e EnumMap k a -\u003e EnumMap k a",
          "source": "src/Data-EnumMap.html#insertWithKey%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumMap",
          "module": "Data.EnumMap",
          "name": "insertWithKey'",
          "normalized": "(a-\u003eb-\u003eb-\u003eb)-\u003ea-\u003eb-\u003eEnumMap a b-\u003eEnumMap a b",
          "package": "enummapset",
          "partial": "With Key'",
          "signature": "(k-\u003ea-\u003ea-\u003ea)-\u003ek-\u003ea-\u003eEnumMap k a-\u003eEnumMap k a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumMap.html#v:insertWithKey-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enummapset",
          "source": "src/Data-EnumSet.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enummapset",
          "partial": "Enum Set",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper for \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e with \u003ccode\u003e\u003ca\u003eEnum\u003c/a\u003e\u003c/code\u003e elements.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enummapset",
          "source": "src/Data-EnumSet.html#EnumSet",
          "type": "data"
        },
        "index": {
          "description": "Wrapper for IntSet with Enum elements",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "EnumSet",
          "package": "enummapset",
          "partial": "Enum Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#t:EnumSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "(\\\\)",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#%5C%5C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "(\\\\) \\\\",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:-92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "delete",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "delete",
          "normalized": "a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "deleteFindMax",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e (k, EnumSet k)",
          "source": "src/Data-EnumSet.html#deleteFindMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "deleteFindMax",
          "normalized": "EnumSet a-\u003e(a,EnumSet a)",
          "package": "enummapset",
          "partial": "Find Max",
          "signature": "EnumSet k-\u003e(k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:deleteFindMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "deleteFindMin",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e (k, EnumSet k)",
          "source": "src/Data-EnumSet.html#deleteFindMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "deleteFindMin",
          "normalized": "EnumSet a-\u003e(a,EnumSet a)",
          "package": "enummapset",
          "partial": "Find Min",
          "signature": "EnumSet k-\u003e(k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:deleteFindMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "deleteMax",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#deleteMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "deleteMax",
          "normalized": "EnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Max",
          "signature": "EnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:deleteMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "deleteMin",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#deleteMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "deleteMin",
          "normalized": "EnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Min",
          "signature": "EnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:deleteMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "difference",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#difference",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "difference",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "elems",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e [k]",
          "source": "src/Data-EnumSet.html#elems",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "elems",
          "normalized": "EnumSet a-\u003e[a]",
          "package": "enummapset",
          "signature": "EnumSet k-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:elems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "empty",
          "package": "enummapset",
          "signature": "EnumSet k",
          "source": "src/Data-EnumSet.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "empty",
          "package": "enummapset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "enumSetToIntSet",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e IntSet",
          "source": "src/Data-EnumSet.html#enumSetToIntSet",
          "type": "function"
        },
        "index": {
          "description": "Unwrap IntSet",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "enumSetToIntSet",
          "normalized": "EnumSet a-\u003eIntSet",
          "package": "enummapset",
          "partial": "Set To Int Set",
          "signature": "EnumSet k-\u003eIntSet",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:enumSetToIntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "filter",
          "package": "enummapset",
          "signature": "(k -\u003e Bool) -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "(k-\u003eBool)-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "findMax",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e k",
          "source": "src/Data-EnumSet.html#findMax",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "findMax",
          "normalized": "EnumSet a-\u003ea",
          "package": "enummapset",
          "partial": "Max",
          "signature": "EnumSet k-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:findMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "findMin",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e k",
          "source": "src/Data-EnumSet.html#findMin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "findMin",
          "normalized": "EnumSet a-\u003ea",
          "package": "enummapset",
          "partial": "Min",
          "signature": "EnumSet k-\u003ek",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:findMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fold",
          "package": "enummapset",
          "signature": "(k -\u003e b -\u003e b) -\u003e b -\u003e EnumSet k -\u003e b",
          "source": "src/Data-EnumSet.html#fold",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fold",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumSet a-\u003eb",
          "package": "enummapset",
          "signature": "(k-\u003eb-\u003eb)-\u003eb-\u003eEnumSet k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "foldl",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e a) -\u003e a -\u003e EnumSet k -\u003e a",
          "source": "src/Data-EnumSet.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "foldl",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumSet b-\u003ea",
          "package": "enummapset",
          "signature": "(a-\u003ek-\u003ea)-\u003ea-\u003eEnumSet k-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "foldl'",
          "package": "enummapset",
          "signature": "(a -\u003e k -\u003e a) -\u003e a -\u003e EnumSet k -\u003e a",
          "source": "src/Data-EnumSet.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eEnumSet b-\u003ea",
          "package": "enummapset",
          "signature": "(a-\u003ek-\u003ea)-\u003ea-\u003eEnumSet k-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "foldr",
          "package": "enummapset",
          "signature": "(k -\u003e b -\u003e b) -\u003e b -\u003e EnumSet k -\u003e b",
          "source": "src/Data-EnumSet.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumSet a-\u003eb",
          "package": "enummapset",
          "signature": "(k-\u003eb-\u003eb)-\u003eb-\u003eEnumSet k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "foldr'",
          "package": "enummapset",
          "signature": "(k -\u003e b -\u003e b) -\u003e b -\u003e EnumSet k -\u003e b",
          "source": "src/Data-EnumSet.html#foldr%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "foldr'",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003eEnumSet a-\u003eb",
          "package": "enummapset",
          "signature": "(k-\u003eb-\u003eb)-\u003eb-\u003eEnumSet k-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:foldr-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromAscList",
          "package": "enummapset",
          "signature": "[k] -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#fromAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromAscList",
          "normalized": "[a]-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Asc List",
          "signature": "[k]-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:fromAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromDistinctAscList",
          "package": "enummapset",
          "signature": "[k] -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#fromDistinctAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromDistinctAscList",
          "normalized": "[a]-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Distinct Asc List",
          "signature": "[k]-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:fromDistinctAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "fromList",
          "package": "enummapset",
          "signature": "[k] -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "fromList",
          "normalized": "[a]-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "List",
          "signature": "[k]-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "insert",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "insert",
          "normalized": "a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap \u003ccode\u003e\u003ca\u003eIntSet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumSet",
          "name": "intSetToEnumSet",
          "package": "enummapset",
          "signature": "IntSet -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#intSetToEnumSet",
          "type": "function"
        },
        "index": {
          "description": "Wrap IntSet",
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "intSetToEnumSet",
          "normalized": "IntSet-\u003eEnumSet a",
          "package": "enummapset",
          "partial": "Set To Enum Set",
          "signature": "IntSet-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:intSetToEnumSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "intersection",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#intersection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "intersection",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "isProperSubsetOf",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e Bool",
          "source": "src/Data-EnumSet.html#isProperSubsetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "isProperSubsetOf",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eBool",
          "package": "enummapset",
          "partial": "Proper Subset Of",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:isProperSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "isSubsetOf",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e Bool",
          "source": "src/Data-EnumSet.html#isSubsetOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "isSubsetOf",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eBool",
          "package": "enummapset",
          "partial": "Subset Of",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:isSubsetOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "lookupGE",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Maybe k",
          "source": "src/Data-EnumSet.html#lookupGE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "lookupGE",
          "normalized": "a-\u003eEnumSet a-\u003eMaybe a",
          "package": "enummapset",
          "partial": "GE",
          "signature": "k-\u003eEnumSet k-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:lookupGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "lookupGT",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Maybe k",
          "source": "src/Data-EnumSet.html#lookupGT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "lookupGT",
          "normalized": "a-\u003eEnumSet a-\u003eMaybe a",
          "package": "enummapset",
          "partial": "GT",
          "signature": "k-\u003eEnumSet k-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:lookupGT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "lookupLE",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Maybe k",
          "source": "src/Data-EnumSet.html#lookupLE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "lookupLE",
          "normalized": "a-\u003eEnumSet a-\u003eMaybe a",
          "package": "enummapset",
          "partial": "LE",
          "signature": "k-\u003eEnumSet k-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:lookupLE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "lookupLT",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Maybe k",
          "source": "src/Data-EnumSet.html#lookupLT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "lookupLT",
          "normalized": "a-\u003eEnumSet a-\u003eMaybe a",
          "package": "enummapset",
          "partial": "LT",
          "signature": "k-\u003eEnumSet k-\u003eMaybe k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:lookupLT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "map",
          "package": "enummapset",
          "signature": "(k -\u003e k) -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "map",
          "normalized": "(a-\u003ea)-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "(k-\u003ek)-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "maxView",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e Maybe (k, EnumSet k)",
          "source": "src/Data-EnumSet.html#maxView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "maxView",
          "normalized": "EnumSet a-\u003eMaybe(a,EnumSet a)",
          "package": "enummapset",
          "partial": "View",
          "signature": "EnumSet k-\u003eMaybe(k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:maxView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "member",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Bool",
          "source": "src/Data-EnumSet.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "member",
          "normalized": "a-\u003eEnumSet a-\u003eBool",
          "package": "enummapset",
          "signature": "k-\u003eEnumSet k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "minView",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e Maybe (k, EnumSet k)",
          "source": "src/Data-EnumSet.html#minView",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "minView",
          "normalized": "EnumSet a-\u003eMaybe(a,EnumSet a)",
          "package": "enummapset",
          "partial": "View",
          "signature": "EnumSet k-\u003eMaybe(k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:minView"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "notMember",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e Bool",
          "source": "src/Data-EnumSet.html#notMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "notMember",
          "normalized": "a-\u003eEnumSet a-\u003eBool",
          "package": "enummapset",
          "partial": "Member",
          "signature": "k-\u003eEnumSet k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "null",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e Bool",
          "source": "src/Data-EnumSet.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "null",
          "normalized": "EnumSet a-\u003eBool",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "partition",
          "package": "enummapset",
          "signature": "(k -\u003e Bool) -\u003e EnumSet k -\u003e (EnumSet k, EnumSet k)",
          "source": "src/Data-EnumSet.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eEnumSet a-\u003e(EnumSet a,EnumSet a)",
          "package": "enummapset",
          "signature": "(k-\u003eBool)-\u003eEnumSet k-\u003e(EnumSet k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "singleton",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "singleton",
          "normalized": "a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "size",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e Int",
          "source": "src/Data-EnumSet.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "size",
          "normalized": "EnumSet a-\u003eInt",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "split",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e (EnumSet k, EnumSet k)",
          "source": "src/Data-EnumSet.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "split",
          "normalized": "a-\u003eEnumSet a-\u003e(EnumSet a,EnumSet a)",
          "package": "enummapset",
          "signature": "k-\u003eEnumSet k-\u003e(EnumSet k,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "splitMember",
          "package": "enummapset",
          "signature": "k -\u003e EnumSet k -\u003e (EnumSet k, Bool, EnumSet k)",
          "source": "src/Data-EnumSet.html#splitMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "splitMember",
          "normalized": "a-\u003eEnumSet a-\u003e(EnumSet a,Bool,EnumSet a)",
          "package": "enummapset",
          "partial": "Member",
          "signature": "k-\u003eEnumSet k-\u003e(EnumSet k,Bool,EnumSet k)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:splitMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "toAscList",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e [k]",
          "source": "src/Data-EnumSet.html#toAscList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "toAscList",
          "normalized": "EnumSet a-\u003e[a]",
          "package": "enummapset",
          "partial": "Asc List",
          "signature": "EnumSet k-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:toAscList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "toDescList",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e [k]",
          "source": "src/Data-EnumSet.html#toDescList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "toDescList",
          "normalized": "EnumSet a-\u003e[a]",
          "package": "enummapset",
          "partial": "Desc List",
          "signature": "EnumSet k-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:toDescList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "toList",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e [k]",
          "source": "src/Data-EnumSet.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "toList",
          "normalized": "EnumSet a-\u003e[a]",
          "package": "enummapset",
          "partial": "List",
          "signature": "EnumSet k-\u003e[k]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "union",
          "package": "enummapset",
          "signature": "EnumSet k -\u003e EnumSet k -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#union",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "union",
          "normalized": "EnumSet a-\u003eEnumSet a-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "EnumSet k-\u003eEnumSet k-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.EnumSet",
          "name": "unions",
          "package": "enummapset",
          "signature": "[EnumSet k] -\u003e EnumSet k",
          "source": "src/Data-EnumSet.html#unions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data EnumSet",
          "module": "Data.EnumSet",
          "name": "unions",
          "normalized": "[EnumSet a]-\u003eEnumSet a",
          "package": "enummapset",
          "signature": "[EnumSet k]-\u003eEnumSet k",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enummapset/docs/Data-EnumSet.html#v:unions"
      }
    }
  ]
]