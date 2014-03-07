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
        "word": "mono-traversable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWarning: This module should be considered highly experimental.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Containers",
          "name": "Containers",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html",
          "type": "module"
        },
        "index": {
          "description": "Warning This module should be considered highly experimental",
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "Containers",
          "package": "mono-traversable",
          "partial": "Containers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "IsMap",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html#IsMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "IsMap",
          "package": "mono-traversable",
          "partial": "Is Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#t:IsMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "IsSet",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html#IsSet",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "IsSet",
          "package": "mono-traversable",
          "partial": "Is Set",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#t:IsSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ezip operations on MonoFunctors.\n\u003c/p\u003e",
          "module": "Data.Containers",
          "name": "MonoZip",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html#MonoZip",
          "type": "class"
        },
        "index": {
          "description": "zip operations on MonoFunctors",
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "MonoZip",
          "package": "mono-traversable",
          "partial": "Mono Zip",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#t:MonoZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA guaranteed-polymorphic \u003ccode\u003eMap\u003c/code\u003e, which allows for more polymorphic versions\n of functions.\n\u003c/p\u003e",
          "module": "Data.Containers",
          "name": "PolyMap",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html#PolyMap",
          "type": "class"
        },
        "index": {
          "description": "guaranteed-polymorphic Map which allows for more polymorphic versions of functions",
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "PolyMap",
          "package": "mono-traversable",
          "partial": "Poly Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#t:PolyMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "SetContainer",
          "package": "mono-traversable",
          "source": "src/Data-Containers.html#SetContainer",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "SetContainer",
          "package": "mono-traversable",
          "partial": "Set Container",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#t:SetContainer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "adjustMap",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e MapValue map) -\u003e ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#adjustMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "adjustMap",
          "normalized": "(MapValue a-\u003eMapValue a)-\u003eContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(MapValue map-\u003eMapValue map)-\u003eContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:adjustMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "adjustWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e MapValue map) -\u003e ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#adjustWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "adjustWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMapValue a)-\u003eContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMapValue map)-\u003eContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:adjustWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "alterMap",
          "package": "mono-traversable",
          "signature": "(Maybe (MapValue map) -\u003e Maybe (MapValue map)) -\u003e ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#alterMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "alterMap",
          "normalized": "(Maybe(MapValue a)-\u003eMaybe(MapValue a))-\u003eContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(Maybe(MapValue map)-\u003eMaybe(MapValue map))-\u003eContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:alterMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "deleteMap",
          "package": "mono-traversable",
          "signature": "ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#deleteMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "deleteMap",
          "normalized": "ContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "ContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:deleteMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "deleteSet",
          "package": "mono-traversable",
          "signature": "Element set -\u003e set -\u003e set",
          "source": "src/Data-Containers.html#deleteSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "deleteSet",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Set",
          "signature": "Element set-\u003eset-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:deleteSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "difference",
          "package": "mono-traversable",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Containers.html#difference",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "difference",
          "normalized": "a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "set-\u003eset-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:difference"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "differenceMap",
          "package": "mono-traversable",
          "signature": "map value1 -\u003e map value2 -\u003e map value1",
          "source": "src/Data-Containers.html#differenceMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "differenceMap",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "map value-\u003emap value-\u003emap value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:differenceMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "findWithDefault",
          "package": "mono-traversable",
          "signature": "MapValue map -\u003e ContainerKey map -\u003e map -\u003e MapValue map",
          "source": "src/Data-Containers.html#findWithDefault",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "findWithDefault",
          "normalized": "MapValue a-\u003eContainerKey a-\u003ea-\u003eMapValue a",
          "package": "mono-traversable",
          "partial": "With Default",
          "signature": "MapValue map-\u003eContainerKey map-\u003emap-\u003eMapValue map",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insertLookupWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e ContainerKey map -\u003e MapValue map -\u003e map -\u003e (Maybe (MapValue map), map)",
          "source": "src/Data-Containers.html#insertLookupWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insertLookupWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMapValue a-\u003eMapValue a)-\u003eContainerKey a-\u003eMapValue a-\u003ea-\u003e(Maybe(MapValue a),a)",
          "package": "mono-traversable",
          "partial": "Lookup With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMapValue map-\u003eMapValue map)-\u003eContainerKey map-\u003eMapValue map-\u003emap-\u003e(Maybe(MapValue map),map)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:insertLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insertMap",
          "package": "mono-traversable",
          "signature": "ContainerKey map -\u003e MapValue map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#insertMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insertMap",
          "normalized": "ContainerKey a-\u003eMapValue a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "ContainerKey map-\u003eMapValue map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:insertMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insertSet",
          "package": "mono-traversable",
          "signature": "Element set -\u003e set -\u003e set",
          "source": "src/Data-Containers.html#insertSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insertSet",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Set",
          "signature": "Element set-\u003eset-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:insertSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insertWith",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e ContainerKey map -\u003e MapValue map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#insertWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insertWith",
          "normalized": "(MapValue a-\u003eMapValue a-\u003eMapValue a)-\u003eContainerKey a-\u003eMapValue a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With",
          "signature": "(MapValue map-\u003eMapValue map-\u003eMapValue map)-\u003eContainerKey map-\u003eMapValue map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insertWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e ContainerKey map -\u003e MapValue map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#insertWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insertWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMapValue a-\u003eMapValue a)-\u003eContainerKey a-\u003eMapValue a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMapValue map-\u003eMapValue map)-\u003eContainerKey map-\u003eMapValue map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:insertWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "intersection",
          "package": "mono-traversable",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Containers.html#intersection",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "intersection",
          "normalized": "a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "set-\u003eset-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:intersection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "intersectionMap",
          "package": "mono-traversable",
          "signature": "map value1 -\u003e map value2 -\u003e map value1",
          "source": "src/Data-Containers.html#intersectionMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "intersectionMap",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "map value-\u003emap value-\u003emap value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:intersectionMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "intersectionWithMap",
          "package": "mono-traversable",
          "signature": "(value1 -\u003e value2 -\u003e value3) -\u003e map value1 -\u003e map value2 -\u003e map value3",
          "source": "src/Data-Containers.html#intersectionWithMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "intersectionWithMap",
          "normalized": "(a-\u003ea-\u003ea)-\u003eb a-\u003eb a-\u003eb a",
          "package": "mono-traversable",
          "partial": "With Map",
          "signature": "(value-\u003evalue-\u003evalue)-\u003emap value-\u003emap value-\u003emap value",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:intersectionWithMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "lookup",
          "package": "mono-traversable",
          "signature": "ContainerKey map -\u003e map -\u003e Maybe (MapValue map)",
          "source": "src/Data-Containers.html#lookup",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "lookup",
          "normalized": "ContainerKey a-\u003ea-\u003eMaybe(MapValue a)",
          "package": "mono-traversable",
          "signature": "ContainerKey map-\u003emap-\u003eMaybe(MapValue map)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "mapFromList",
          "package": "mono-traversable",
          "signature": "[(ContainerKey map, MapValue map)] -\u003e map",
          "source": "src/Data-Containers.html#mapFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "mapFromList",
          "normalized": "[(ContainerKey a,MapValue a)]-\u003ea",
          "package": "mono-traversable",
          "partial": "From List",
          "signature": "[(ContainerKey map,MapValue map)]-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:mapFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "mapKeysWith",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e (ContainerKey map -\u003e ContainerKey map) -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#mapKeysWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "mapKeysWith",
          "normalized": "(MapValue a-\u003eMapValue a-\u003eMapValue a)-\u003e(ContainerKey a-\u003eContainerKey a)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Keys With",
          "signature": "(MapValue map-\u003eMapValue map-\u003eMapValue map)-\u003e(ContainerKey map-\u003eContainerKey map)-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:mapKeysWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "mapToList",
          "package": "mono-traversable",
          "signature": "map -\u003e [(ContainerKey map, MapValue map)]",
          "source": "src/Data-Containers.html#mapToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "mapToList",
          "normalized": "a-\u003e[(ContainerKey a,MapValue a)]",
          "package": "mono-traversable",
          "partial": "To List",
          "signature": "map-\u003e[(ContainerKey map,MapValue map)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:mapToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "mapWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e MapValue map) -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#mapWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "mapWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMapValue a)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMapValue map)-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:mapWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "member",
          "package": "mono-traversable",
          "signature": "ContainerKey set -\u003e set -\u003e Bool",
          "source": "src/Data-Containers.html#member",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "member",
          "normalized": "ContainerKey a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "signature": "ContainerKey set-\u003eset-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "notMember",
          "package": "mono-traversable",
          "signature": "ContainerKey set -\u003e set -\u003e Bool",
          "source": "src/Data-Containers.html#notMember",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "notMember",
          "normalized": "ContainerKey a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "partial": "Member",
          "signature": "ContainerKey set-\u003eset-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "ounzip",
          "package": "mono-traversable",
          "signature": "[(Element mono, Element mono)] -\u003e (mono, mono)",
          "source": "src/Data-Containers.html#ounzip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "ounzip",
          "normalized": "[(Element a,Element a)]-\u003e(a,a)",
          "package": "mono-traversable",
          "signature": "[(Element mono,Element mono)]-\u003e(mono,mono)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:ounzip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "ozip",
          "package": "mono-traversable",
          "signature": "mono -\u003e mono -\u003e [(Element mono, Element mono)]",
          "source": "src/Data-Containers.html#ozip",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "ozip",
          "normalized": "a-\u003ea-\u003e[(Element a,Element a)]",
          "package": "mono-traversable",
          "signature": "mono-\u003emono-\u003e[(Element mono,Element mono)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:ozip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "ozipWith",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Element mono) -\u003e mono -\u003e mono -\u003e mono",
          "source": "src/Data-Containers.html#ozipWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "ozipWith",
          "normalized": "(Element a-\u003eElement a-\u003eElement a)-\u003ea-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With",
          "signature": "(Element mono-\u003eElement mono-\u003eElement mono)-\u003emono-\u003emono-\u003emono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:ozipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "setFromList",
          "package": "mono-traversable",
          "signature": "[Element set] -\u003e set",
          "source": "src/Data-Containers.html#setFromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "setFromList",
          "normalized": "[Element a]-\u003ea",
          "package": "mono-traversable",
          "partial": "From List",
          "signature": "[Element set]-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:setFromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "setToList",
          "package": "mono-traversable",
          "signature": "set -\u003e [Element set]",
          "source": "src/Data-Containers.html#setToList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "setToList",
          "normalized": "a-\u003e[Element a]",
          "package": "mono-traversable",
          "partial": "To List",
          "signature": "set-\u003e[Element set]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:setToList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "singletonMap",
          "package": "mono-traversable",
          "signature": "ContainerKey map -\u003e MapValue map -\u003e map",
          "source": "src/Data-Containers.html#singletonMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "singletonMap",
          "normalized": "ContainerKey a-\u003eMapValue a-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "ContainerKey map-\u003eMapValue map-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:singletonMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "singletonSet",
          "package": "mono-traversable",
          "signature": "Element set -\u003e set",
          "source": "src/Data-Containers.html#singletonSet",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "singletonSet",
          "normalized": "Element a-\u003ea",
          "package": "mono-traversable",
          "partial": "Set",
          "signature": "Element set-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:singletonSet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "union",
          "package": "mono-traversable",
          "signature": "set -\u003e set -\u003e set",
          "source": "src/Data-Containers.html#union",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "union",
          "normalized": "a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "set-\u003eset-\u003eset",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:union"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "unionWith",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#unionWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "unionWith",
          "normalized": "(MapValue a-\u003eMapValue a-\u003eMapValue a)-\u003ea-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With",
          "signature": "(MapValue map-\u003eMapValue map-\u003eMapValue map)-\u003emap-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:unionWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "unionWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#unionWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "unionWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMapValue a-\u003eMapValue a)-\u003ea-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMapValue map-\u003eMapValue map)-\u003emap-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:unionWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "unionsWith",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e MapValue map -\u003e MapValue map) -\u003e [map] -\u003e map",
          "source": "src/Data-Containers.html#unionsWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "unionsWith",
          "normalized": "(MapValue a-\u003eMapValue a-\u003eMapValue a)-\u003e[a]-\u003ea",
          "package": "mono-traversable",
          "partial": "With",
          "signature": "(MapValue map-\u003eMapValue map-\u003eMapValue map)-\u003e[map]-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:unionsWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "updateLookupWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e Maybe (MapValue map)) -\u003e ContainerKey map -\u003e map -\u003e (Maybe (MapValue map), map)",
          "source": "src/Data-Containers.html#updateLookupWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "updateLookupWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMaybe(MapValue a))-\u003eContainerKey a-\u003ea-\u003e(Maybe(MapValue a),a)",
          "package": "mono-traversable",
          "partial": "Lookup With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMaybe(MapValue map))-\u003eContainerKey map-\u003emap-\u003e(Maybe(MapValue map),map)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:updateLookupWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "updateMap",
          "package": "mono-traversable",
          "signature": "(MapValue map -\u003e Maybe (MapValue map)) -\u003e ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#updateMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "updateMap",
          "normalized": "(MapValue a-\u003eMaybe(MapValue a))-\u003eContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(MapValue map-\u003eMaybe(MapValue map))-\u003eContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:updateMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "updateWithKey",
          "package": "mono-traversable",
          "signature": "(ContainerKey map -\u003e MapValue map -\u003e Maybe (MapValue map)) -\u003e ContainerKey map -\u003e map -\u003e map",
          "source": "src/Data-Containers.html#updateWithKey",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "updateWithKey",
          "normalized": "(ContainerKey a-\u003eMapValue a-\u003eMaybe(MapValue a))-\u003eContainerKey a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "With Key",
          "signature": "(ContainerKey map-\u003eMapValue map-\u003eMaybe(MapValue map))-\u003eContainerKey map-\u003emap-\u003emap",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Containers.html#v:updateWithKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "MinLen",
          "package": "mono-traversable",
          "source": "src/Data-MinLen.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "MinLen",
          "package": "mono-traversable",
          "partial": "Min Len",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eolength (x \u003ca/\u003e y) \u003e= olength x + olength y\n\u003c/p\u003e",
          "module": "Data.MinLen",
          "name": "GrowingAppend",
          "package": "mono-traversable",
          "source": "src/Data-GrowingAppend.html#GrowingAppend",
          "type": "class"
        },
        "index": {
          "description": "olength olength olength",
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "GrowingAppend",
          "package": "mono-traversable",
          "partial": "Growing Append",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#t:GrowingAppend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "MinLen",
          "package": "mono-traversable",
          "source": "src/Data-MinLen.html#MinLen",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "MinLen",
          "package": "mono-traversable",
          "partial": "Min Len",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#t:MinLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "Succ",
          "package": "mono-traversable",
          "source": "src/Data-MinLen.html#Succ",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "Succ",
          "package": "mono-traversable",
          "partial": "Succ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#t:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "TypeNat",
          "package": "mono-traversable",
          "source": "src/Data-MinLen.html#TypeNat",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "TypeNat",
          "package": "mono-traversable",
          "partial": "Type Nat",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#t:TypeNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "Zero",
          "package": "mono-traversable",
          "source": "src/Data-MinLen.html#Zero",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "Zero",
          "package": "mono-traversable",
          "partial": "Zero",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#t:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "Succ",
          "package": "mono-traversable",
          "signature": "Succ nat",
          "source": "src/Data-MinLen.html#Succ",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "Succ",
          "package": "mono-traversable",
          "partial": "Succ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:Succ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "Zero",
          "package": "mono-traversable",
          "signature": "Zero",
          "source": "src/Data-MinLen.html#Zero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "Zero",
          "package": "mono-traversable",
          "partial": "Zero",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:Zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "head",
          "package": "mono-traversable",
          "signature": "MinLen (Succ nat) mono -\u003e Element mono",
          "source": "src/Data-MinLen.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "head",
          "normalized": "MinLen(Succ a)b-\u003eElement b",
          "package": "mono-traversable",
          "signature": "MinLen(Succ nat)mono-\u003eElement mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "init",
          "package": "mono-traversable",
          "signature": "MinLen (Succ nat) seq -\u003e MinLen nat seq",
          "source": "src/Data-MinLen.html#init",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "init",
          "normalized": "MinLen(Succ a)b-\u003eMinLen a b",
          "package": "mono-traversable",
          "signature": "MinLen(Succ nat)seq-\u003eMinLen nat seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "last",
          "package": "mono-traversable",
          "signature": "MinLen (Succ nat) mono -\u003e Element mono",
          "source": "src/Data-MinLen.html#last",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "last",
          "normalized": "MinLen(Succ a)b-\u003eElement b",
          "package": "mono-traversable",
          "signature": "MinLen(Succ nat)mono-\u003eElement mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "mlappend",
          "package": "mono-traversable",
          "signature": "MinLen x seq -\u003e MinLen y seq -\u003e MinLen (AddNat x y) seq",
          "source": "src/Data-MinLen.html#mlappend",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "mlappend",
          "normalized": "MinLen a b-\u003eMinLen c b-\u003eMinLen(AddNat a c)b",
          "package": "mono-traversable",
          "signature": "MinLen x seq-\u003eMinLen y seq-\u003eMinLen(AddNat x y)seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:mlappend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "mlcons",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e MinLen nat seq -\u003e MinLen (Succ nat) seq",
          "source": "src/Data-MinLen.html#mlcons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "mlcons",
          "normalized": "Element a-\u003eMinLen b a-\u003eMinLen(Succ b)a",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eMinLen nat seq-\u003eMinLen(Succ nat)seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:mlcons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "mlunion",
          "package": "mono-traversable",
          "signature": "MinLen x mono -\u003e MinLen y mono -\u003e MinLen (MaxNat x y) mono",
          "source": "src/Data-MinLen.html#mlunion",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "mlunion",
          "normalized": "MinLen a b-\u003eMinLen c b-\u003eMinLen(MaxNat a c)b",
          "package": "mono-traversable",
          "signature": "MinLen x mono-\u003eMinLen y mono-\u003eMinLen(MaxNat x y)mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:mlunion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "tail",
          "package": "mono-traversable",
          "signature": "MinLen (Succ nat) seq -\u003e MinLen nat seq",
          "source": "src/Data-MinLen.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "tail",
          "normalized": "MinLen(Succ a)b-\u003eMinLen a b",
          "package": "mono-traversable",
          "signature": "MinLen(Succ nat)seq-\u003eMinLen nat seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "toMinLen",
          "package": "mono-traversable",
          "signature": "mono -\u003e Maybe (MinLen nat mono)",
          "source": "src/Data-MinLen.html#toMinLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "toMinLen",
          "normalized": "a-\u003eMaybe(MinLen b a)",
          "package": "mono-traversable",
          "partial": "Min Len",
          "signature": "mono-\u003eMaybe(MinLen nat mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:toMinLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "toMinLenZero",
          "package": "mono-traversable",
          "signature": "mono -\u003e MinLen Zero mono",
          "source": "src/Data-MinLen.html#toMinLenZero",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "toMinLenZero",
          "normalized": "a-\u003eMinLen Zero a",
          "package": "mono-traversable",
          "partial": "Min Len Zero",
          "signature": "mono-\u003eMinLen Zero mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:toMinLenZero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "toValueNat",
          "package": "mono-traversable",
          "signature": "nat -\u003e i",
          "source": "src/Data-MinLen.html#toValueNat",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "toValueNat",
          "normalized": "a-\u003eb",
          "package": "mono-traversable",
          "partial": "Value Nat",
          "signature": "nat-\u003ei",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:toValueNat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MinLen",
          "name": "unMinLen",
          "package": "mono-traversable",
          "signature": "MinLen nat mono -\u003e mono",
          "source": "src/Data-MinLen.html#unMinLen",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MinLen",
          "module": "Data.MinLen",
          "name": "unMinLen",
          "normalized": "MinLen a b-\u003eb",
          "package": "mono-traversable",
          "partial": "Min Len",
          "signature": "MinLen nat mono-\u003emono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MinLen.html#v:unMinLen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType classes mirroring standard typeclasses, but working with monomorphic containers.\n\u003c/p\u003e\u003cp\u003eThe motivation is that some commonly used data types (i.e., \u003ccode\u003eByteString\u003c/code\u003e and\n \u003ccode\u003eText\u003c/code\u003e) do not allow for instances of typeclasses like \u003ccode\u003eFunctor\u003c/code\u003e and\n \u003ccode\u003eFoldable\u003c/code\u003e, since they are monomorphic structures. This module allows both\n monomorphic and polymorphic data types to be instances of the same\n typeclasses.\n\u003c/p\u003e\u003cp\u003eAll of the laws for the polymorphic typeclasses apply to their monomorphic\n cousins. Thus, even though a \u003ccode\u003eMonoFunctor\u003c/code\u003e instance for \u003ccode\u003eSet\u003c/code\u003e could\n theoretically be defined, it is omitted since it could violate the functor\n law of \u003ccode\u003eomap f . omap g = omap (f . g)\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that all typeclasses have been prefixed with \u003ccode\u003eMono\u003c/code\u003e, and functions have\n been prefixed with \u003ccode\u003eo\u003c/code\u003e. The mnemonic for \u003ccode\u003eo\u003c/code\u003e is \"only one,\" or alternatively\n \"it's mono, but m is overused in Haskell, so we'll use the second letter\n instead.\" (Agreed, it's not a great mangling scheme, input is welcome!)\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.MonoTraversable",
          "name": "MonoTraversable",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html",
          "type": "module"
        },
        "index": {
          "description": "Type classes mirroring standard typeclasses but working with monomorphic containers The motivation is that some commonly used data types i.e ByteString and Text do not allow for instances of typeclasses like Functor and Foldable since they are monomorphic structures This module allows both monomorphic and polymorphic data types to be instances of the same typeclasses All of the laws for the polymorphic typeclasses apply to their monomorphic cousins Thus even though MonoFunctor instance for Set could theoretically be defined it is omitted since it could violate the functor law of omap omap omap Note that all typeclasses have been prefixed with Mono and functions have been prefixed with The mnemonic for is only one or alternatively it mono but is overused in Haskell so we ll use the second letter instead Agreed it not great mangling scheme input is welcome",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoTraversable",
          "package": "mono-traversable",
          "partial": "Mono Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "Element",
          "package": "mono-traversable",
          "signature": "Element",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "Element",
          "package": "mono-traversable",
          "partial": "Element",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:Element"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "MonoFoldable",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html#MonoFoldable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoFoldable",
          "package": "mono-traversable",
          "partial": "Mono Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:MonoFoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "MonoFoldableMonoid",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html#MonoFoldableMonoid",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoFoldableMonoid",
          "package": "mono-traversable",
          "partial": "Mono Foldable Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:MonoFoldableMonoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA typeclass for \u003ccode\u003eMonoFoldable\u003c/code\u003es containing elements which are an instance\n of \u003ccode\u003eOrd\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "MonoFoldableOrd",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html#MonoFoldableOrd",
          "type": "class"
        },
        "index": {
          "description": "typeclass for MonoFoldable containing elements which are an instance of Ord",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoFoldableOrd",
          "package": "mono-traversable",
          "partial": "Mono Foldable Ord",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:MonoFoldableOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "MonoFunctor",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html#MonoFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoFunctor",
          "package": "mono-traversable",
          "partial": "Mono Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:MonoFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "MonoTraversable",
          "package": "mono-traversable",
          "source": "src/Data-MonoTraversable.html#MonoTraversable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "MonoTraversable",
          "package": "mono-traversable",
          "partial": "Mono Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#t:MonoTraversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "headEx",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#headEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "headEx",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:headEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List.head, but not partial\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "headMay",
          "package": "mono-traversable",
          "signature": "mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#headMay",
          "type": "function"
        },
        "index": {
          "description": "like Data.List.head but not partial",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "headMay",
          "normalized": "a-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "May",
          "signature": "mono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:headMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "lastEx",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#lastEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "lastEx",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:lastEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List.last, but not partial\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "lastMay",
          "package": "mono-traversable",
          "signature": "mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#lastMay",
          "type": "function"
        },
        "index": {
          "description": "like Data.List.last but not partial",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "lastMay",
          "normalized": "a-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "May",
          "signature": "mono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:lastMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "maximumByEx",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Ordering) -\u003e mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#maximumByEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "maximumByEx",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "By Ex",
          "signature": "(Element mono-\u003eElement mono-\u003eOrdering)-\u003emono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:maximumByEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "maximumByMay",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Ordering) -\u003e mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#maximumByMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "maximumByMay",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "By May",
          "signature": "(Element mono-\u003eElement mono-\u003eOrdering)-\u003emono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:maximumByMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "maximumEx",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#maximumEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "maximumEx",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:maximumEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "maximumMay",
          "package": "mono-traversable",
          "signature": "mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#maximumMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "maximumMay",
          "normalized": "a-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "May",
          "signature": "mono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:maximumMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "minimumByEx",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Ordering) -\u003e mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#minimumByEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "minimumByEx",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "By Ex",
          "signature": "(Element mono-\u003eElement mono-\u003eOrdering)-\u003emono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:minimumByEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "minimumByMay",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Ordering) -\u003e mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#minimumByMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "minimumByMay",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "By May",
          "signature": "(Element mono-\u003eElement mono-\u003eOrdering)-\u003emono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:minimumByMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "minimumEx",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#minimumEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "minimumEx",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:minimumEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "minimumMay",
          "package": "mono-traversable",
          "signature": "mono -\u003e Maybe (Element mono)",
          "source": "src/Data-MonoTraversable.html#minimumMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "minimumMay",
          "normalized": "a-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "May",
          "signature": "mono-\u003eMaybe(Element mono)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:minimumMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "oall",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Bool) -\u003e mono -\u003e Bool",
          "source": "src/Data-MonoTraversable.html#oall",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oall",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003eBool)-\u003emono-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "oany",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Bool) -\u003e mono -\u003e Bool",
          "source": "src/Data-MonoTraversable.html#oany",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oany",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003eBool)-\u003emono-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oany"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ocompareLength",
          "package": "mono-traversable",
          "signature": "mono -\u003e i -\u003e Ordering",
          "source": "src/Data-MonoTraversable.html#ocompareLength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ocompareLength",
          "normalized": "a-\u003eb-\u003eOrdering",
          "package": "mono-traversable",
          "partial": "Length",
          "signature": "mono-\u003ei-\u003eOrdering",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ocompareLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "oconcatMap",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e mono) -\u003e mono -\u003e mono",
          "source": "src/Data-MonoTraversable.html#oconcatMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oconcatMap",
          "normalized": "(Element a-\u003ea)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(Element mono-\u003emono)-\u003emono-\u003emono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oconcatMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monadic strict left fold, together with an unwrap function.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003efoldlUnwrap\u003c/code\u003e, but allows monadic actions. To be used with\n \u003ccode\u003eimpurely\u003c/code\u003e from \u003ccode\u003efoldl\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.1\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "ofoldMUnwrap",
          "package": "mono-traversable",
          "signature": "(x -\u003e Element mono -\u003e m x) -\u003e m x -\u003e (x -\u003e m b) -\u003e mono -\u003e m b",
          "source": "src/Data-MonoTraversable.html#ofoldMUnwrap",
          "type": "function"
        },
        "index": {
          "description": "monadic strict left fold together with an unwrap function Similar to foldlUnwrap but allows monadic actions To be used with impurely from foldl Since",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldMUnwrap",
          "normalized": "(a-\u003eElement b-\u003ec a)-\u003ec a-\u003e(a-\u003ec d)-\u003eb-\u003ec d",
          "package": "mono-traversable",
          "partial": "MUnwrap",
          "signature": "(x-\u003eElement mono-\u003em x)-\u003em x-\u003e(x-\u003em b)-\u003emono-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldMUnwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofoldMap",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e m) -\u003e mono -\u003e m",
          "source": "src/Data-MonoTraversable.html#ofoldMap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldMap",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003eb",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(Element mono-\u003em)-\u003emono-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: this is a partial function. On an empty \u003ccode\u003eMonoFoldable\u003c/code\u003e, it will\n throw an exception. See \u003ca\u003eData.NonNull\u003c/a\u003e for a total version of this\n function.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "ofoldMap1Ex",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e m) -\u003e mono -\u003e m",
          "source": "src/Data-MonoTraversable.html#ofoldMap1Ex",
          "type": "method"
        },
        "index": {
          "description": "Note this is partial function On an empty MonoFoldable it will throw an exception See Data.NonNull for total version of this function",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldMap1Ex",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003eb",
          "package": "mono-traversable",
          "partial": "Map Ex",
          "signature": "(Element mono-\u003em)-\u003emono-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldMap1Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofoldl'",
          "package": "mono-traversable",
          "signature": "(a -\u003e Element mono -\u003e a) -\u003e a -\u003e mono -\u003e a",
          "source": "src/Data-MonoTraversable.html#ofoldl%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldl'",
          "normalized": "(a-\u003eElement b-\u003ea)-\u003ea-\u003eb-\u003ea",
          "package": "mono-traversable",
          "signature": "(a-\u003eElement mono-\u003ea)-\u003ea-\u003emono-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: this is a partial function. On an empty \u003ccode\u003eMonoFoldable\u003c/code\u003e, it will\n throw an exception. See \u003ca\u003eData.NonNull\u003c/a\u003e for a total version of this\n function.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "ofoldl1Ex'",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Element mono) -\u003e mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#ofoldl1Ex%27",
          "type": "method"
        },
        "index": {
          "description": "Note this is partial function On an empty MonoFoldable it will throw an exception See Data.NonNull for total version of this function",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldl1Ex'",
          "normalized": "(Element a-\u003eElement a-\u003eElement a)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex'",
          "signature": "(Element mono-\u003eElement mono-\u003eElement mono)-\u003emono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldl1Ex-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofoldlM",
          "package": "mono-traversable",
          "signature": "(a -\u003e Element mono -\u003e m a) -\u003e a -\u003e mono -\u003e m a",
          "source": "src/Data-MonoTraversable.html#ofoldlM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldlM",
          "normalized": "(a-\u003eElement b-\u003ec a)-\u003ea-\u003eb-\u003ec a",
          "package": "mono-traversable",
          "signature": "(a-\u003eElement mono-\u003em a)-\u003ea-\u003emono-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldlM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA strict left fold, together with an unwrap function.\n\u003c/p\u003e\u003cp\u003eThis is convenient when the accumulator value is not the same as the final\n expected type. It is provided mainly for integration with the \u003ccode\u003efoldl\u003c/code\u003e\n package, to be used in conjunction with \u003ccode\u003epurely\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSince 0.3.1\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "ofoldlUnwrap",
          "package": "mono-traversable",
          "signature": "(x -\u003e Element mono -\u003e x) -\u003e x -\u003e (x -\u003e b) -\u003e mono -\u003e b",
          "source": "src/Data-MonoTraversable.html#ofoldlUnwrap",
          "type": "function"
        },
        "index": {
          "description": "strict left fold together with an unwrap function This is convenient when the accumulator value is not the same as the final expected type It is provided mainly for integration with the foldl package to be used in conjunction with purely Since",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldlUnwrap",
          "normalized": "(a-\u003eElement b-\u003ea)-\u003ea-\u003e(a-\u003ec)-\u003eb-\u003ec",
          "package": "mono-traversable",
          "partial": "Unwrap",
          "signature": "(x-\u003eElement mono-\u003ex)-\u003ex-\u003e(x-\u003eb)-\u003emono-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldlUnwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofoldr",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e b -\u003e b) -\u003e b -\u003e mono -\u003e b",
          "source": "src/Data-MonoTraversable.html#ofoldr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldr",
          "normalized": "(Element a-\u003eb-\u003eb)-\u003eb-\u003ea-\u003eb",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003eb-\u003eb)-\u003eb-\u003emono-\u003eb",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNote: this is a partial function. On an empty \u003ccode\u003eMonoFoldable\u003c/code\u003e, it will\n throw an exception. See \u003ca\u003eData.NonNull\u003c/a\u003e for a total version of this\n function.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "ofoldr1Ex",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono -\u003e Element mono) -\u003e mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#ofoldr1Ex",
          "type": "method"
        },
        "index": {
          "description": "Note this is partial function On an empty MonoFoldable it will throw an exception See Data.NonNull for total version of this function",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofoldr1Ex",
          "normalized": "(Element a-\u003eElement a-\u003eElement a)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "(Element mono-\u003eElement mono-\u003eElement mono)-\u003emono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofoldr1Ex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofor",
          "package": "mono-traversable",
          "signature": "mono -\u003e (Element mono -\u003e f (Element mono)) -\u003e f mono",
          "source": "src/Data-MonoTraversable.html#ofor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofor",
          "normalized": "a-\u003e(Element a-\u003eb(Element a))-\u003eb a",
          "package": "mono-traversable",
          "signature": "mono-\u003e(Element mono-\u003ef(Element mono))-\u003ef mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "oforM",
          "package": "mono-traversable",
          "signature": "mono -\u003e (Element mono -\u003e f (Element mono)) -\u003e f mono",
          "source": "src/Data-MonoTraversable.html#oforM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oforM",
          "normalized": "a-\u003e(Element a-\u003eb(Element a))-\u003eb a",
          "package": "mono-traversable",
          "signature": "mono-\u003e(Element mono-\u003ef(Element mono))-\u003ef mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oforM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "oforM_",
          "package": "mono-traversable",
          "signature": "mono -\u003e (Element mono -\u003e m b) -\u003e m ()",
          "source": "src/Data-MonoTraversable.html#oforM_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oforM_",
          "normalized": "a-\u003e(Element a-\u003eb c)-\u003eb()",
          "package": "mono-traversable",
          "signature": "mono-\u003e(Element mono-\u003em b)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oforM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "ofor_",
          "package": "mono-traversable",
          "signature": "mono -\u003e (Element mono -\u003e f b) -\u003e f ()",
          "source": "src/Data-MonoTraversable.html#ofor_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "ofor_",
          "normalized": "a-\u003e(Element a-\u003eb c)-\u003eb()",
          "package": "mono-traversable",
          "signature": "mono-\u003e(Element mono-\u003ef b)-\u003ef()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:ofor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "olength",
          "package": "mono-traversable",
          "signature": "mono -\u003e Int",
          "source": "src/Data-MonoTraversable.html#olength",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "olength",
          "normalized": "a-\u003eInt",
          "package": "mono-traversable",
          "signature": "mono-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:olength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "olength64",
          "package": "mono-traversable",
          "signature": "mono -\u003e Int64",
          "source": "src/Data-MonoTraversable.html#olength64",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "olength64",
          "normalized": "a-\u003eInt",
          "package": "mono-traversable",
          "signature": "mono-\u003eInt",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:olength64"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "omap",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e Element mono) -\u003e mono -\u003e mono",
          "source": "src/Data-MonoTraversable.html#omap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "omap",
          "normalized": "(Element a-\u003eElement a)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003eElement mono)-\u003emono-\u003emono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:omap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "omapM",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e m (Element mono)) -\u003e mono -\u003e m mono",
          "source": "src/Data-MonoTraversable.html#omapM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "omapM",
          "normalized": "(Element a-\u003eb(Element a))-\u003ea-\u003eb a",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003em(Element mono))-\u003emono-\u003em mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:omapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "omapM_",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e m b) -\u003e mono -\u003e m ()",
          "source": "src/Data-MonoTraversable.html#omapM_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "omapM_",
          "normalized": "(Element a-\u003eb c)-\u003ea-\u003eb()",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003em b)-\u003emono-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:omapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "onull",
          "package": "mono-traversable",
          "signature": "mono -\u003e Bool",
          "source": "src/Data-MonoTraversable.html#onull",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "onull",
          "normalized": "a-\u003eBool",
          "package": "mono-traversable",
          "signature": "mono-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:onull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003eproduct\u003c/code\u003e function computes the product of the numbers of a structure.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "oproduct",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#oproduct",
          "type": "function"
        },
        "index": {
          "description": "The product function computes the product of the numbers of structure",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "oproduct",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "mono-\u003eElement mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:oproduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003esum\u003c/code\u003e function computes the sum of the numbers of a structure.\n\u003c/p\u003e",
          "module": "Data.MonoTraversable",
          "name": "osum",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#osum",
          "type": "function"
        },
        "index": {
          "description": "The sum function computes the sum of the numbers of structure",
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "osum",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "mono-\u003eElement mono",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:osum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "otoList",
          "package": "mono-traversable",
          "signature": "mono -\u003e [Element mono]",
          "source": "src/Data-MonoTraversable.html#otoList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "otoList",
          "normalized": "a-\u003e[Element a]",
          "package": "mono-traversable",
          "partial": "List",
          "signature": "mono-\u003e[Element mono]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:otoList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "otraverse",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e f (Element mono)) -\u003e mono -\u003e f mono",
          "source": "src/Data-MonoTraversable.html#otraverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "otraverse",
          "normalized": "(Element a-\u003eb(Element a))-\u003ea-\u003eb a",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003ef(Element mono))-\u003emono-\u003ef mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:otraverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "otraverse_",
          "package": "mono-traversable",
          "signature": "(Element mono -\u003e f b) -\u003e mono -\u003e f ()",
          "source": "src/Data-MonoTraversable.html#otraverse_",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "otraverse_",
          "normalized": "(Element a-\u003eb c)-\u003ea-\u003eb()",
          "package": "mono-traversable",
          "signature": "(Element mono-\u003ef b)-\u003emono-\u003ef()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:otraverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "unsafeHead",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#unsafeHead",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "unsafeHead",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Head",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:unsafeHead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.MonoTraversable",
          "name": "unsafeLast",
          "package": "mono-traversable",
          "signature": "mono -\u003e Element mono",
          "source": "src/Data-MonoTraversable.html#unsafeLast",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data MonoTraversable",
          "module": "Data.MonoTraversable",
          "name": "unsafeLast",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "partial": "Last",
          "signature": "mono-\u003eElement mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-MonoTraversable.html#v:unsafeLast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWarning, this is Experimental!\n\u003c/p\u003e\u003cp\u003eData.NonNull attempts to extend the concepts from\n \u003ca\u003eData.List.NonEmpty\u003c/a\u003e to any \u003ccode\u003e\u003ca\u003eMonoFoldable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e is a typeclass for a container with 1 or more elements.\n \u003ca\u003eData.List.NonEmpty\u003c/a\u003e and 'NotEmpty a' are members of the typeclass\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.NonNull",
          "name": "NonNull",
          "package": "mono-traversable",
          "source": "src/Data-NonNull.html",
          "type": "module"
        },
        "index": {
          "description": "Warning this is Experimental Data.NonNull attempts to extend the concepts from Data.List.NonEmpty to any MonoFoldable NonNull is typeclass for container with or more elements Data.List.NonEmpty and NotEmpty are members of the typeclass",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "NonNull",
          "package": "mono-traversable",
          "partial": "Non Null",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e has 1 or more items\n\u003c/p\u003e\u003cp\u003eIn contrast, \u003ccode\u003e\u003ca\u003eMonoFoldable\u003c/a\u003e\u003c/code\u003e is allowed to have zero items.\n\u003c/p\u003e\u003cp\u003eAny NonNull functions that\n decreases the number of elements in the sequences\n will return a different \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e\u003cp\u003eThe Nullable type for a \u003ccode\u003eNonEmpty\u003c/code\u003e List is the normal List '[]'\n\u003c/p\u003e\u003cp\u003eNonNull allows one to safely perform what would otherwise be partial functions.\n Hopefully you have abandoned partial functions, perhaps you are using the safe package.\n However, safe essentially provides convenience functions for null checking.\n With NonNull rather than always reacting with null checks we can proactively encode in our program when we know that a type is NonNull.\n Now we have an invariant encoded in our types, making our program easier to understand.\n This information is leveraged to avoid awkward null checking later on.\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "NonNull",
          "package": "mono-traversable",
          "source": "src/Data-NonNull.html#NonNull",
          "type": "class"
        },
        "index": {
          "description": "NonNull has or more items In contrast MonoFoldable is allowed to have zero items Any NonNull functions that decreases the number of elements in the sequences will return different Nullable type The Nullable type for NonEmpty List is the normal List NonNull allows one to safely perform what would otherwise be partial functions Hopefully you have abandoned partial functions perhaps you are using the safe package However safe essentially provides convenience functions for null checking With NonNull rather than always reacting with null checks we can proactively encode in our program when we know that type is NonNull Now we have an invariant encoded in our types making our program easier to understand This information is leveraged to avoid awkward null checking later on",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "NonNull",
          "package": "mono-traversable",
          "partial": "Non Null",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#t:NonNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea newtype wrapper indicating there are 1 or more elements\n unwrap with \u003ccode\u003e\u003ca\u003etoNullable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "NotEmpty",
          "package": "mono-traversable",
          "source": "src/Data-NonNull.html#NotEmpty",
          "type": "data"
        },
        "index": {
          "description": "newtype wrapper indicating there are or more elements unwrap with toNullable",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "NotEmpty",
          "package": "mono-traversable",
          "partial": "Not Empty",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#t:NotEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepend an element to a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "(\u003c|)",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e seq",
          "source": "src/Data-NonNull.html#%3C%7C",
          "type": "function"
        },
        "index": {
          "description": "Prepend an element to NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "(\u003c|) \u003c|",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eseq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:-60--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHelper functions for type inferences.\n\u003c/p\u003e\u003cp\u003eSince 0.3.0\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "asNotEmpty",
          "package": "mono-traversable",
          "signature": "NotEmpty a -\u003e NotEmpty a",
          "source": "src/Data-NonNull.html#asNotEmpty",
          "type": "function"
        },
        "index": {
          "description": "Helper functions for type inferences Since",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "asNotEmpty",
          "normalized": "NotEmpty a-\u003eNotEmpty a",
          "package": "mono-traversable",
          "partial": "Not Empty",
          "signature": "NotEmpty a-\u003eNotEmpty a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:asNotEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esafely construct a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e from a \u003ccode\u003eNonEmpty\u003c/code\u003e list\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "fromNonEmpty",
          "package": "mono-traversable",
          "signature": "NonEmpty (Element seq) -\u003e seq",
          "source": "src/Data-NonNull.html#fromNonEmpty",
          "type": "function"
        },
        "index": {
          "description": "safely construct NonNull from NonEmpty list",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "fromNonEmpty",
          "normalized": "NonEmpty(Element a)-\u003ea",
          "package": "mono-traversable",
          "partial": "Non Empty",
          "signature": "NonEmpty(Element seq)-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:fromNonEmpty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esafely convert a \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "fromNullable",
          "package": "mono-traversable",
          "signature": "Nullable mono -\u003e Maybe mono",
          "source": "src/Data-NonNull.html#fromNullable",
          "type": "method"
        },
        "index": {
          "description": "safely convert Nullable to NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "fromNullable",
          "normalized": "Nullable a-\u003eMaybe a",
          "package": "mono-traversable",
          "partial": "Nullable",
          "signature": "Nullable mono-\u003eMaybe mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:fromNullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonEmpty\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "head",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#head",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonEmpty",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "head",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonEmpty\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "init",
          "package": "mono-traversable",
          "signature": "seq -\u003e Nullable seq",
          "source": "src/Data-NonNull.html#init",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonEmpty",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "init",
          "normalized": "a-\u003eNullable a",
          "package": "mono-traversable",
          "signature": "seq-\u003eNullable seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:init"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonEmpty\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "last",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#last",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonEmpty",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "last",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "maximum",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#maximum",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "maximum",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:maximum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "maximumBy",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Ordering) -\u003e seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#maximumBy",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "maximumBy",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "By",
          "signature": "(Element seq-\u003eElement seq-\u003eOrdering)-\u003eseq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:maximumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "minimum",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#minimum",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "minimum",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:minimum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "minimumBy",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Ordering) -\u003e seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#minimumBy",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "minimumBy",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "partial": "By",
          "signature": "(Element seq-\u003eElement seq-\u003eOrdering)-\u003eseq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:minimumBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ei must be \u003e 0. like \u003ccode\u003e\u003ca\u003ereplicate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003ei \u003c= 0 is treated the same as providing 1\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "nReplicate",
          "package": "mono-traversable",
          "signature": "Index (Nullable seq) -\u003e Element seq -\u003e seq",
          "source": "src/Data-NonNull.html#nReplicate",
          "type": "function"
        },
        "index": {
          "description": "must be like replicate is treated the same as providing",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "nReplicate",
          "normalized": "Index(Nullable a)-\u003eElement a-\u003ea",
          "package": "mono-traversable",
          "partial": "Replicate",
          "signature": "Index(Nullable seq)-\u003eElement seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:nReplicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike cons, prepends an element.\n However, the prepend is to a Nullable, creating a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eGenerally this uses cons underneath.\n cons is not efficient for most data structures.\n\u003c/p\u003e\u003cp\u003eAlternatives:\n   * if you don't need to cons, use \u003ccode\u003e\u003ca\u003efromNullable\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003enonNull\u003c/a\u003e\u003c/code\u003e if you can create your structure in one go.\n   * if you need to cons, you might be able to start off with an efficient data structure such as a \u003ccode\u003eNonEmpty\u003c/code\u003e List.\n     \u003ccode\u003efronNonEmpty\u003c/code\u003e will convert that to your data structure using the structure's fromList function.\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "ncons",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e Nullable seq -\u003e seq",
          "source": "src/Data-NonNull.html#ncons",
          "type": "function"
        },
        "index": {
          "description": "Like cons prepends an element However the prepend is to Nullable creating NonNull Generally this uses cons underneath cons is not efficient for most data structures Alternatives if you don need to cons use fromNullable or nonNull if you can create your structure in one go if you need to cons you might be able to start off with an efficient data structure such as NonEmpty List fronNonEmpty will convert that to your data structure using the structure fromList function",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "ncons",
          "normalized": "Element a-\u003eNullable a-\u003ea",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eNullable seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:ncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e, but starts with a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "nfilter",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e Nullable seq",
          "source": "src/Data-NonNull.html#nfilter",
          "type": "function"
        },
        "index": {
          "description": "like filter but starts with NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "nfilter",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eNullable a",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eNullable seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:nfilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003efilterM\u003c/a\u003e\u003c/code\u003e, but starts with a NonNull\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "nfilterM",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e m Bool) -\u003e seq -\u003e m (Nullable seq)",
          "source": "src/Data-NonNull.html#nfilterM",
          "type": "function"
        },
        "index": {
          "description": "like filterM but starts with NonNull",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "nfilterM",
          "normalized": "(Element a-\u003eb Bool)-\u003ea-\u003eb(Nullable a)",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003em Bool)-\u003eseq-\u003em(Nullable seq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:nfilterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e with elements to a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e\n throw an exception if the \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e is empty.\n do not use this unless you have proved your structure is non-null\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "nonNull",
          "package": "mono-traversable",
          "signature": "Nullable mono -\u003e mono",
          "source": "src/Data-NonNull.html#nonNull",
          "type": "method"
        },
        "index": {
          "description": "convert Nullable with elements to NonNull throw an exception if the Nullable is empty do not use this unless you have proved your structure is non-null",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "nonNull",
          "normalized": "Nullable a-\u003ea",
          "package": "mono-traversable",
          "partial": "Null",
          "signature": "Nullable mono-\u003emono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:nonNull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "nuncons",
          "package": "mono-traversable",
          "signature": "seq -\u003e (Element seq, Maybe seq)",
          "source": "src/Data-NonNull.html#nuncons",
          "type": "function"
        },
        "index": {
          "description": "like uncons of SemiSequence",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "nuncons",
          "normalized": "a-\u003e(Element a,Maybe a)",
          "package": "mono-traversable",
          "signature": "seq-\u003e(Element seq,Maybe seq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:nuncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NonNull",
          "name": "ofold1",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#ofold1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "ofold1",
          "normalized": "a-\u003eElement a",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:ofold1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NonNull",
          "name": "ofoldMap1",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e m) -\u003e seq -\u003e m",
          "source": "src/Data-NonNull.html#ofoldMap1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "ofoldMap1",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003eb",
          "package": "mono-traversable",
          "partial": "Map",
          "signature": "(Element seq-\u003em)-\u003eseq-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:ofoldMap1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA variant of 'ofoldl\\'' that has no base case,\n and thus may only be applied to non-empty structures.\n\u003c/p\u003e\u003cpre\u003e'foldl1\\'' f = \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e f . \u003ccode\u003e\u003ca\u003eotoList\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.NonNull",
          "name": "ofoldl1'",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Element seq) -\u003e seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#ofoldl1%27",
          "type": "function"
        },
        "index": {
          "description": "variant of ofoldl that has no base case and thus may only be applied to non-empty structures foldl1 foldl1 otoList",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "ofoldl1'",
          "normalized": "(Element a-\u003eElement a-\u003eElement a)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eElement seq-\u003eElement seq)-\u003eseq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:ofoldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.NonNull",
          "name": "ofoldr1",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Element seq) -\u003e seq -\u003e Element seq",
          "source": "src/Data-NonNull.html#ofoldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "ofoldr1",
          "normalized": "(Element a-\u003eElement a-\u003eElement a)-\u003ea-\u003eElement a",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eElement seq-\u003eElement seq)-\u003eseq-\u003eElement seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:ofoldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike \u003ccode\u003e\u003ca\u003euncons\u003c/a\u003e\u003c/code\u003e of \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "splitFirst",
          "package": "mono-traversable",
          "signature": "seq -\u003e (Element seq, Nullable seq)",
          "source": "src/Data-NonNull.html#splitFirst",
          "type": "function"
        },
        "index": {
          "description": "like uncons of SemiSequence",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "splitFirst",
          "normalized": "a-\u003e(Element a,Nullable a)",
          "package": "mono-traversable",
          "partial": "First",
          "signature": "seq-\u003e(Element seq,Nullable seq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:splitFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List, but not partial on a NonEmpty\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "tail",
          "package": "mono-traversable",
          "signature": "seq -\u003e Nullable seq",
          "source": "src/Data-NonNull.html#tail",
          "type": "function"
        },
        "index": {
          "description": "like Data.List but not partial on NonEmpty",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "tail",
          "normalized": "a-\u003eNullable a",
          "package": "mono-traversable",
          "signature": "seq-\u003eNullable seq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eused internally to construct a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e.\n does not check whether the \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e is empty\n do not use this unless you have proved your structure is nonNull\n nonNullUnsafe :: Nullable seq -\u003e seq\n\u003c/p\u003e\u003cp\u003econvert a \u003ccode\u003e\u003ca\u003eNonNull\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003eNullable\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.NonNull",
          "name": "toNullable",
          "package": "mono-traversable",
          "signature": "mono -\u003e Nullable mono",
          "source": "src/Data-NonNull.html#toNullable",
          "type": "method"
        },
        "index": {
          "description": "used internally to construct NonNull does not check whether the Nullable is empty do not use this unless you have proved your structure is nonNull nonNullUnsafe Nullable seq seq convert NonNull to Nullable",
          "hierarchy": "Data NonNull",
          "module": "Data.NonNull",
          "name": "toNullable",
          "normalized": "a-\u003eNullable a",
          "package": "mono-traversable",
          "partial": "Nullable",
          "signature": "mono-\u003eNullable mono",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-NonNull.html#v:toNullable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWarning: This module should be considered highly experimental.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Sequences",
          "name": "Sequences",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html",
          "type": "module"
        },
        "index": {
          "description": "Warning This module should be considered highly experimental",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "Sequences",
          "package": "mono-traversable",
          "partial": "Sequences",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "EqSequence",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html#EqSequence",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "EqSequence",
          "package": "mono-traversable",
          "partial": "Eq Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#t:EqSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequence Laws:\n\u003c/p\u003e\u003cpre\u003e fromList . otoList = id\n fromList (x \u003c\u003e y) = fromList x \u003c\u003e fromList y\n otoList (fromList x \u003c\u003e fromList y) = x \u003c\u003e y\n\u003c/pre\u003e",
          "module": "Data.Sequences",
          "name": "IsSequence",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html#IsSequence",
          "type": "class"
        },
        "index": {
          "description": "Sequence Laws fromList otoList id fromList fromList fromList otoList fromList fromList",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "IsSequence",
          "package": "mono-traversable",
          "partial": "Is Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#t:IsSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "OrdSequence",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html#OrdSequence",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "OrdSequence",
          "package": "mono-traversable",
          "partial": "Ord Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#t:OrdSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e was created to share code between \u003ccode\u003e\u003ca\u003eIsSequence\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003eNonNull\u003c/code\u003e.\n You should always use \u003ccode\u003e\u003ca\u003eIsSequence\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eNonNull\u003c/code\u003e rather than using \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e is exported so that you can define new instances of \u003ccode\u003e\u003ca\u003eIsSequence\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eNonNull\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eSemi\u003c/code\u003e means \u003ccode\u003eSemiGroup\u003c/code\u003e\n A \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e can accomodate a \u003ccode\u003eSemiGroup\u003c/code\u003e such as \u003ccode\u003eNonEmpty\u003c/code\u003e\n A Monoid should be able to fill out \u003ccode\u003e\u003ca\u003eIsSequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003eAs a base for \u003ccode\u003eNonNull\u003c/code\u003e,\n a \u003ccode\u003e\u003ca\u003eSemiSequence\u003c/a\u003e\u003c/code\u003e keeps the same type when increasing its number of elements.\n However, a decreasing function such as filter may change a \u003ccode\u003eNonNull\u003c/code\u003e type.\n For example, from \u003ccode\u003eNonEmpty\u003c/code\u003e to '[]'\n This exists on \u003ccode\u003eNonNull\u003c/code\u003e as \u003ccode\u003enfilter\u003c/code\u003e\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efilter\u003c/a\u003e\u003c/code\u003e and other such functions are placed in \u003ccode\u003e\u003ca\u003eIsSequence\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Sequences",
          "name": "SemiSequence",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html#SemiSequence",
          "type": "class"
        },
        "index": {
          "description": "SemiSequence was created to share code between IsSequence and NonNull You should always use IsSequence or NonNull rather than using SemiSequence SemiSequence is exported so that you can define new instances of IsSequence or NonNull Semi means SemiGroup SemiSequence can accomodate SemiGroup such as NonEmpty Monoid should be able to fill out IsSequence As base for NonNull SemiSequence keeps the same type when increasing its number of elements However decreasing function such as filter may change NonNull type For example from NonEmpty to This exists on NonNull as nfilter filter and other such functions are placed in IsSequence",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "SemiSequence",
          "package": "mono-traversable",
          "partial": "Semi Sequence",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#t:SemiSequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "Textual",
          "package": "mono-traversable",
          "source": "src/Data-Sequences.html#Textual",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "Textual",
          "package": "mono-traversable",
          "partial": "Textual",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#t:Textual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "break",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e (seq, seq)",
          "source": "src/Data-Sequences.html#break",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "break",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003e(seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:break"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "breakLine",
          "package": "mono-traversable",
          "signature": "t -\u003e (t, t)",
          "source": "src/Data-Sequences.html#breakLine",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "breakLine",
          "normalized": "a-\u003e(a,a)",
          "package": "mono-traversable",
          "partial": "Line",
          "signature": "t-\u003e(t,t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:breakLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "breakWord",
          "package": "mono-traversable",
          "signature": "t -\u003e (t, t)",
          "source": "src/Data-Sequences.html#breakWord",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "breakWord",
          "normalized": "a-\u003e(a,a)",
          "package": "mono-traversable",
          "partial": "Word",
          "signature": "t-\u003e(t,t)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:breakWord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "cons",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#cons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "cons",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultCons",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#defaultCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultCons",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Cons",
          "signature": "Element seq-\u003eseq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultFind",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e Maybe (Element seq)",
          "source": "src/Data-Sequences.html#defaultFind",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultFind",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "partial": "Find",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eMaybe(Element seq)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultFind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultIntersperse",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#defaultIntersperse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultIntersperse",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Intersperse",
          "signature": "Element seq-\u003eseq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultIntersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultReverse",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#defaultReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultReverse",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Reverse",
          "signature": "seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultSnoc",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq -\u003e seq",
          "source": "src/Data-Sequences.html#defaultSnoc",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultSnoc",
          "normalized": "a-\u003eElement a-\u003ea",
          "package": "mono-traversable",
          "partial": "Snoc",
          "signature": "seq-\u003eElement seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultSnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "defaultSortBy",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Ordering) -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#defaultSortBy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "defaultSortBy",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Sort By",
          "signature": "(Element seq-\u003eElement seq-\u003eOrdering)-\u003eseq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:defaultSortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "drop",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#drop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "drop",
          "normalized": "Index a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "Index seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:drop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "dropWhile",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#dropWhile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "dropWhile",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "While",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:dropWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "elem",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e Bool",
          "source": "src/Data-Sequences.html#elem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "elem",
          "normalized": "Element a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eseq-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "filter",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#filter",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "filter",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "filterM",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e m Bool) -\u003e seq -\u003e m seq",
          "source": "src/Data-Sequences.html#filterM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "filterM",
          "normalized": "(Element a-\u003eb Bool)-\u003ea-\u003eb a",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003em Bool)-\u003eseq-\u003em seq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:filterM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "find",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e Maybe (Element seq)",
          "source": "src/Data-Sequences.html#find",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "find",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003eMaybe(Element a)",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eMaybe(Element seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "fromList",
          "package": "mono-traversable",
          "signature": "[Element seq] -\u003e seq",
          "source": "src/Data-Sequences.html#fromList",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "fromList",
          "normalized": "[Element a]-\u003ea",
          "package": "mono-traversable",
          "partial": "List",
          "signature": "[Element seq]-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "group",
          "package": "mono-traversable",
          "signature": "seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#group",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "group",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "signature": "seq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to standard \u003ccode\u003e\u003ca\u003egroup\u003c/a\u003e\u003c/code\u003e, but operates on the whole collection,\n not just the consecutive items.\n\u003c/p\u003e",
          "module": "Data.Sequences",
          "name": "groupAll",
          "package": "mono-traversable",
          "signature": "seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#groupAll",
          "type": "method"
        },
        "index": {
          "description": "Similar to standard group but operates on the whole collection not just the consecutive items",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "groupAll",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "partial": "All",
          "signature": "seq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:groupAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to standard \u003ccode\u003e\u003ca\u003egroupBy\u003c/a\u003e\u003c/code\u003e, but operates on the whole collection,\n not just the consecutive items.\n\u003c/p\u003e",
          "module": "Data.Sequences",
          "name": "groupAllOn",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e b) -\u003e seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#groupAllOn",
          "type": "method"
        },
        "index": {
          "description": "Similar to standard groupBy but operates on the whole collection not just the consecutive items",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "groupAllOn",
          "normalized": "(Element a-\u003eb)-\u003ea-\u003e[a]",
          "package": "mono-traversable",
          "partial": "All On",
          "signature": "(Element seq-\u003eb)-\u003eseq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:groupAllOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "groupBy",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Bool) -\u003e seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#groupBy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "groupBy",
          "normalized": "(Element a-\u003eElement a-\u003eBool)-\u003ea-\u003e[a]",
          "package": "mono-traversable",
          "partial": "By",
          "signature": "(Element seq-\u003eElement seq-\u003eBool)-\u003eseq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:groupBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List.init, but an input of \u003ccode\u003emempty\u003c/code\u003e returns \u003ccode\u003emempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Sequences",
          "name": "initDef",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#initDef",
          "type": "function"
        },
        "index": {
          "description": "like Data.List.init but an input of mempty returns mempty",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "initDef",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Def",
          "signature": "seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:initDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "initEx",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#initEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "initEx",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:initEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "intersperse",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#intersperse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "intersperse",
          "normalized": "Element a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:intersperse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "isInfixOf",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq -\u003e Bool",
          "source": "src/Data-Sequences.html#isInfixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "isInfixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "partial": "Infix Of",
          "signature": "seq-\u003eseq-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:isInfixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "isPrefixOf",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq -\u003e Bool",
          "source": "src/Data-Sequences.html#isPrefixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "isPrefixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "partial": "Prefix Of",
          "signature": "seq-\u003eseq-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:isPrefixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "isSuffixOf",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq -\u003e Bool",
          "source": "src/Data-Sequences.html#isSuffixOf",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "isSuffixOf",
          "normalized": "a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "partial": "Suffix Of",
          "signature": "seq-\u003eseq-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:isSuffixOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "lines",
          "package": "mono-traversable",
          "signature": "t -\u003e [t]",
          "source": "src/Data-Sequences.html#lines",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "lines",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "signature": "t-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:lines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "notElem",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq -\u003e Bool",
          "source": "src/Data-Sequences.html#notElem",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "notElem",
          "normalized": "Element a-\u003ea-\u003eBool",
          "package": "mono-traversable",
          "partial": "Elem",
          "signature": "Element seq-\u003eseq-\u003eBool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:notElem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "partition",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e (seq, seq)",
          "source": "src/Data-Sequences.html#partition",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "partition",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003e(seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "permutations",
          "package": "mono-traversable",
          "signature": "seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#permutations",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "permutations",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "signature": "seq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:permutations"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "replicate",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e Element seq -\u003e seq",
          "source": "src/Data-Sequences.html#replicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "replicate",
          "normalized": "Index a-\u003eElement a-\u003ea",
          "package": "mono-traversable",
          "signature": "Index seq-\u003eElement seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:replicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "replicateM",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e m (Element seq) -\u003e m seq",
          "source": "src/Data-Sequences.html#replicateM",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "replicateM",
          "normalized": "Index a-\u003eb(Element a)-\u003eb a",
          "package": "mono-traversable",
          "signature": "Index seq-\u003em(Element seq)-\u003em seq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:replicateM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "reverse",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#reverse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "reverse",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:reverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "singleton",
          "package": "mono-traversable",
          "signature": "Element seq -\u003e seq",
          "source": "src/Data-Sequences.html#singleton",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "singleton",
          "normalized": "Element a-\u003ea",
          "package": "mono-traversable",
          "signature": "Element seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "snoc",
          "package": "mono-traversable",
          "signature": "seq -\u003e Element seq -\u003e seq",
          "source": "src/Data-Sequences.html#snoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "snoc",
          "normalized": "a-\u003eElement a-\u003ea",
          "package": "mono-traversable",
          "signature": "seq-\u003eElement seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:snoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "sort",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#sort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "sort",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "sortBy",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Element seq -\u003e Ordering) -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#sortBy",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "sortBy",
          "normalized": "(Element a-\u003eElement a-\u003eOrdering)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "By",
          "signature": "(Element seq-\u003eElement seq-\u003eOrdering)-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:sortBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "span",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e (seq, seq)",
          "source": "src/Data-Sequences.html#span",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "span",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003e(a,a)",
          "package": "mono-traversable",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003e(seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:span"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "splitAt",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e (seq, seq)",
          "source": "src/Data-Sequences.html#splitAt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "splitAt",
          "normalized": "Index a-\u003ea-\u003e(a,a)",
          "package": "mono-traversable",
          "partial": "At",
          "signature": "Index seq-\u003eseq-\u003e(seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:splitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "stripPrefix",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq -\u003e Maybe seq",
          "source": "src/Data-Sequences.html#stripPrefix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "stripPrefix",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "mono-traversable",
          "partial": "Prefix",
          "signature": "seq-\u003eseq-\u003eMaybe seq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:stripPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "stripSuffix",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq -\u003e Maybe seq",
          "source": "src/Data-Sequences.html#stripSuffix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "stripSuffix",
          "normalized": "a-\u003ea-\u003eMaybe a",
          "package": "mono-traversable",
          "partial": "Suffix",
          "signature": "seq-\u003eseq-\u003eMaybe seq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:stripSuffix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "subsequences",
          "package": "mono-traversable",
          "signature": "seq -\u003e [seq]",
          "source": "src/Data-Sequences.html#subsequences",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "subsequences",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "signature": "seq-\u003e[seq]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:subsequences"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003elike Data.List.tail, but an input of \u003ccode\u003emempty\u003c/code\u003e returns \u003ccode\u003emempty\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Sequences",
          "name": "tailDef",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#tailDef",
          "type": "function"
        },
        "index": {
          "description": "like Data.List.tail but an input of mempty returns mempty",
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "tailDef",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Def",
          "signature": "seq-\u003eseq",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:tailDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "tailEx",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#tailEx",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "tailEx",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Ex",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:tailEx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "take",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#take",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "take",
          "normalized": "Index a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "signature": "Index seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:take"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "takeWhile",
          "package": "mono-traversable",
          "signature": "(Element seq -\u003e Bool) -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#takeWhile",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "takeWhile",
          "normalized": "(Element a-\u003eBool)-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "While",
          "signature": "(Element seq-\u003eBool)-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:takeWhile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "toCaseFold",
          "package": "mono-traversable",
          "signature": "t -\u003e t",
          "source": "src/Data-Sequences.html#toCaseFold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "toCaseFold",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Case Fold",
          "signature": "t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:toCaseFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "toLower",
          "package": "mono-traversable",
          "signature": "t -\u003e t",
          "source": "src/Data-Sequences.html#toLower",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "toLower",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Lower",
          "signature": "t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:toLower"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "toUpper",
          "package": "mono-traversable",
          "signature": "t -\u003e t",
          "source": "src/Data-Sequences.html#toUpper",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "toUpper",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Upper",
          "signature": "t-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:toUpper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "uncons",
          "package": "mono-traversable",
          "signature": "seq -\u003e Maybe (Element seq, seq)",
          "source": "src/Data-Sequences.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(Element a,a)",
          "package": "mono-traversable",
          "signature": "seq-\u003eMaybe(Element seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unlines",
          "package": "mono-traversable",
          "signature": "[t] -\u003e t",
          "source": "src/Data-Sequences.html#unlines",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unlines",
          "normalized": "[a]-\u003ea",
          "package": "mono-traversable",
          "signature": "[t]-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unlines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsafeDrop",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#unsafeDrop",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsafeDrop",
          "normalized": "Index a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Drop",
          "signature": "Index seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsafeDrop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsafeInit",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#unsafeInit",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsafeInit",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Init",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsafeInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsafeSplitAt",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e (seq, seq)",
          "source": "src/Data-Sequences.html#unsafeSplitAt",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsafeSplitAt",
          "normalized": "Index a-\u003ea-\u003e(a,a)",
          "package": "mono-traversable",
          "partial": "Split At",
          "signature": "Index seq-\u003eseq-\u003e(seq,seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsafeSplitAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsafeTail",
          "package": "mono-traversable",
          "signature": "seq -\u003e seq",
          "source": "src/Data-Sequences.html#unsafeTail",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsafeTail",
          "normalized": "a-\u003ea",
          "package": "mono-traversable",
          "partial": "Tail",
          "signature": "seq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsafeTail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsafeTake",
          "package": "mono-traversable",
          "signature": "Index seq -\u003e seq -\u003e seq",
          "source": "src/Data-Sequences.html#unsafeTake",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsafeTake",
          "normalized": "Index a-\u003ea-\u003ea",
          "package": "mono-traversable",
          "partial": "Take",
          "signature": "Index seq-\u003eseq-\u003eseq",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsafeTake"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unsnoc",
          "package": "mono-traversable",
          "signature": "seq -\u003e Maybe (seq, Element seq)",
          "source": "src/Data-Sequences.html#unsnoc",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unsnoc",
          "normalized": "a-\u003eMaybe(a,Element a)",
          "package": "mono-traversable",
          "signature": "seq-\u003eMaybe(seq,Element seq)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unsnoc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "unwords",
          "package": "mono-traversable",
          "signature": "[t] -\u003e t",
          "source": "src/Data-Sequences.html#unwords",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "unwords",
          "normalized": "[a]-\u003ea",
          "package": "mono-traversable",
          "signature": "[t]-\u003et",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:unwords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Sequences",
          "name": "words",
          "package": "mono-traversable",
          "signature": "t -\u003e [t]",
          "source": "src/Data-Sequences.html#words",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Sequences",
          "module": "Data.Sequences",
          "name": "words",
          "normalized": "a-\u003e[a]",
          "package": "mono-traversable",
          "signature": "t-\u003e[t]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/mono-traversable/docs/Data-Sequences.html#v:words"
      }
    }
  ]
]