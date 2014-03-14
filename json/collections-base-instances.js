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
        "word": "collections-base-instances"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Collections.BaseInstances",
          "name": "BaseInstances",
          "package": "collections-base-instances",
          "source": "src/Data-Collections-BaseInstances.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "BaseInstances",
          "package": "collections-base-instances",
          "partial": "Base Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map of integers to values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Collections.BaseInstances",
          "name": "IntMap",
          "package": "collections-base-instances",
          "type": "data"
        },
        "index": {
          "description": "map of integers to values",
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "IntMap",
          "package": "collections-base-instances",
          "partial": "Int Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#t:IntMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of integers.\n\u003c/p\u003e",
          "module": "Data.Collections.BaseInstances",
          "name": "IntSet",
          "package": "collections-base-instances",
          "type": "data"
        },
        "index": {
          "description": "set of integers",
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "IntSet",
          "package": "collections-base-instances",
          "partial": "Int Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#t:IntSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneral-purpose finite sequences.\n\u003c/p\u003e",
          "module": "Data.Collections.BaseInstances",
          "name": "Seq",
          "package": "collections-base-instances",
          "type": "data"
        },
        "index": {
          "description": "General-purpose finite sequences",
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "Seq",
          "package": "collections-base-instances",
          "partial": "Seq",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#t:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Collections.BaseInstances",
          "name": "StdMap",
          "package": "collections-base-instances",
          "source": "src/Data-Collections-BaseInstances.html#StdMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "StdMap",
          "package": "collections-base-instances",
          "partial": "Std Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#t:StdMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Collections.BaseInstances",
          "name": "StdSet",
          "package": "collections-base-instances",
          "source": "src/Data-Collections-BaseInstances.html#StdSet",
          "type": "type"
        },
        "index": {
          "hierarchy": "Data Collections BaseInstances",
          "module": "Data.Collections.BaseInstances",
          "name": "StdSet",
          "package": "collections-base-instances",
          "partial": "Std Set",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Collections-BaseInstances.html#t:StdSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.List",
          "name": "List",
          "package": "collections-base-instances",
          "source": "src/Data-Map-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Map List",
          "module": "Data.Map.List",
          "name": "List",
          "package": "collections-base-instances",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Map-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a list (actually any \u003ccode\u003e\u003ca\u003eSequence\u003c/a\u003e\u003c/code\u003e) of \u003ccode\u003e(key,value)\u003c/code\u003e pairs as a \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e collection.\n\u003c/p\u003e\u003cp\u003eThis allows to feed sequences into algorithms that require a map without building a full-fledged map.\n Most of the time this will be used only when the parameter list is known to be very small, such that\n conversion to a Map would be to costly.\n\u003c/p\u003e",
          "module": "Data.Map.List",
          "name": "AssocList",
          "package": "collections-base-instances",
          "source": "src/Data-Map-List.html#AssocList",
          "type": "newtype"
        },
        "index": {
          "description": "View list actually any Sequence of key value pairs as Map collection This allows to feed sequences into algorithms that require map without building full-fledged map Most of the time this will be used only when the parameter list is known to be very small such that conversion to Map would be to costly",
          "hierarchy": "Data Map List",
          "module": "Data.Map.List",
          "name": "AssocList",
          "package": "collections-base-instances",
          "partial": "Assoc List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Map-List.html#t:AssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Map.List",
          "name": "AssocList",
          "package": "collections-base-instances",
          "signature": "AssocList s",
          "source": "src/Data-Map-List.html#AssocList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Map List",
          "module": "Data.Map.List",
          "name": "AssocList",
          "package": "collections-base-instances",
          "partial": "Assoc List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Map-List.html#v:AssocList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.List",
          "name": "List",
          "package": "collections-base-instances",
          "source": "src/Data-Set-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Set List",
          "module": "Data.Set.List",
          "name": "List",
          "package": "collections-base-instances",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Set-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eView a list of as a \u003ccode\u003e\u003ca\u003eSet\u003c/a\u003e\u003c/code\u003e collection.\n\u003c/p\u003e\u003cp\u003eThis allows to feed sequences into algorithms that require a Set without building a full-fledged Set.\n Most of the time this will be used only when the parameter list is known to be very small, such that\n conversion to a Set would be to costly.\n\u003c/p\u003e",
          "module": "Data.Set.List",
          "name": "SetList",
          "package": "collections-base-instances",
          "source": "src/Data-Set-List.html#SetList",
          "type": "newtype"
        },
        "index": {
          "description": "View list of as Set collection This allows to feed sequences into algorithms that require Set without building full-fledged Set Most of the time this will be used only when the parameter list is known to be very small such that conversion to Set would be to costly",
          "hierarchy": "Data Set List",
          "module": "Data.Set.List",
          "name": "SetList",
          "package": "collections-base-instances",
          "partial": "Set List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Set-List.html#t:SetList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.List",
          "name": "SetList",
          "package": "collections-base-instances",
          "signature": "SetList",
          "source": "src/Data-Set-List.html#SetList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set List",
          "module": "Data.Set.List",
          "name": "SetList",
          "package": "collections-base-instances",
          "partial": "Set List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Set-List.html#v:SetList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Set.List",
          "name": "fromSetList",
          "package": "collections-base-instances",
          "signature": "s",
          "source": "src/Data-Set-List.html#SetList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Set List",
          "module": "Data.Set.List",
          "name": "fromSetList",
          "package": "collections-base-instances",
          "partial": "Set List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/collections-base-instances/docs/Data-Set-List.html#v:fromSetList"
      }
    }
  ]
]