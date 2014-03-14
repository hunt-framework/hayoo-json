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
        "word": "stable-maps"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "Map",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Dynamic-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "Map",
          "package": "stable-maps",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "Map",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#Map",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "Map",
          "package": "stable-maps",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "empty",
          "package": "stable-maps",
          "signature": "Map a",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "empty",
          "package": "stable-maps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "find",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e Map v -\u003e v",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "find",
          "normalized": "DynamicStableName-\u003eMap a-\u003ea",
          "package": "stable-maps",
          "signature": "DynamicStableName-\u003eMap v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns the default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "findWithDefault",
          "package": "stable-maps",
          "signature": "v -\u003e DynamicStableName -\u003e Map v -\u003e v",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns the default value def when the key is not in the map",
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "findWithDefault",
          "normalized": "a-\u003eDynamicStableName-\u003eMap a-\u003ea",
          "package": "stable-maps",
          "partial": "With Default",
          "signature": "v-\u003eDynamicStableName-\u003eMap v-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insert",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e a -\u003e Map a -\u003e Map a",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insert",
          "normalized": "DynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "signature": "DynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function for combining the new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e\n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if the key does not exist\n in the map. If the key does exist, the function will insert the pair\n \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insertWith",
          "package": "stable-maps",
          "signature": "(a -\u003e a -\u003e a) -\u003e DynamicStableName -\u003e a -\u003e Map a -\u003e Map a",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function for combining the new value and old value insertWith key value mp will insert the pair key value into mp if the key does not exist in the map If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insertWith",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "partial": "With",
          "signature": "(a-\u003ea-\u003ea)-\u003eDynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but with the combining function applied strictly.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insertWith'",
          "package": "stable-maps",
          "signature": "(a -\u003e a -\u003e a) -\u003e DynamicStableName -\u003e a -\u003e Map a -\u003e Map a",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "Same as insertWith but with the combining function applied strictly",
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "insertWith'",
          "normalized": "(a-\u003ea-\u003ea)-\u003eDynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "partial": "With'",
          "signature": "(a-\u003ea-\u003ea)-\u003eDynamicStableName-\u003ea-\u003eMap a-\u003eMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as a \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "lookup",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e Map v -\u003e Maybe v",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map",
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "lookup",
          "normalized": "DynamicStableName-\u003eMap a-\u003eMaybe a",
          "package": "stable-maps",
          "signature": "DynamicStableName-\u003eMap v-\u003eMaybe v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "member",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e Map a -\u003e Bool",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "member",
          "normalized": "DynamicStableName-\u003eMap a-\u003eBool",
          "package": "stable-maps",
          "signature": "DynamicStableName-\u003eMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "notMember",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e Map a -\u003e Bool",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#notMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "notMember",
          "normalized": "DynamicStableName-\u003eMap a-\u003eBool",
          "package": "stable-maps",
          "partial": "Member",
          "signature": "DynamicStableName-\u003eMap a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "null",
          "package": "stable-maps",
          "signature": "Map a -\u003e Bool",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "null",
          "normalized": "Map a-\u003eBool",
          "package": "stable-maps",
          "signature": "Map a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "singleton",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e a -\u003e Map a",
          "source": "src/System-Mem-StableName-Dynamic-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic Map",
          "module": "System.Mem.StableName.Dynamic.Map",
          "name": "singleton",
          "normalized": "DynamicStableName-\u003ea-\u003eMap a",
          "package": "stable-maps",
          "signature": "DynamicStableName-\u003ea-\u003eMap a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic-Map.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDynamic stable names are a way of performing fast (O(1)), not-quite-exact comparison between objects.\n\u003c/p\u003e\u003cp\u003eDynamic stable names solve the following problem: suppose you want to build a hash table with Haskell objects as keys, but you want to use pointer equality for comparison; maybe because the keys are large and hashing would be slow, or perhaps because the keys are infinite in size. We can't build a hash table using the address of the object as the key, because objects get moved around by the garbage collector, meaning a re-hash would be necessary after every garbage collection.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Mem.StableName.Dynamic",
          "name": "Dynamic",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Dynamic.html",
          "type": "module"
        },
        "index": {
          "description": "Dynamic stable names are way of performing fast not-quite-exact comparison between objects Dynamic stable names solve the following problem suppose you want to build hash table with Haskell objects as keys but you want to use pointer equality for comparison maybe because the keys are large and hashing would be slow or perhaps because the keys are infinite in size We can build hash table using the address of the object as the key because objects get moved around by the garbage collector meaning re-hash would be necessary after every garbage collection",
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "Dynamic",
          "package": "stable-maps",
          "partial": "Dynamic",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn abstract name for an object, that supports equality and hashing.\n\u003c/p\u003e\u003cp\u003eDynamic stable names have the following property:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e If \u003ccode\u003esn1 :: DynamicStableName\u003c/code\u003e and \u003ccode\u003esn2 :: DynamicStableName\u003c/code\u003e and \u003ccode\u003esn1 == sn2\u003c/code\u003e\n   then \u003ccode\u003esn1\u003c/code\u003e and \u003ccode\u003esn2\u003c/code\u003e were created by calls to \u003ccode\u003emakeStableName\u003c/code\u003e on \n   the same object.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eThe reverse is not necessarily true: if two dynamic stable names are not\n  equal, then the objects they name may still be equal.  Note in particular\n  that \u003ccode\u003e\u003ca\u003emakeDynamicStableName\u003c/a\u003e\u003c/code\u003e may return a different \u003ccode\u003e\u003ca\u003eDynamicStableName\u003c/a\u003e\u003c/code\u003e \n  after an object is evaluated.\n\u003c/p\u003e\u003cp\u003eDynamic Stable Names are similar to Stable Pointers (\u003ca\u003eForeign.StablePtr\u003c/a\u003e),\n  but differ in the following ways:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e There is no \u003ccode\u003efreeDynamicStableName\u003c/code\u003e operation, unlike \u003ca\u003eForeign.StablePtr\u003c/a\u003es.\n    Dynamic Stable Names are reclaimed by the runtime system when they are no\n    longer needed.\n\u003c/li\u003e\u003cli\u003e There is no \u003ccode\u003edeRefDynamicStableName\u003c/code\u003e operation.  You can't get back from\n    a dynamic stable name to the original Haskell object.  The reason for\n    this is that the existence of a stable name for an object does not\n    guarantee the existence of the object itself; it can still be garbage\n    collected.\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.Mem.StableName.Dynamic",
          "name": "DynamicStableName",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Dynamic.html#DynamicStableName",
          "type": "newtype"
        },
        "index": {
          "description": "An abstract name for an object that supports equality and hashing Dynamic stable names have the following property If sn1 DynamicStableName and sn2 DynamicStableName and sn1 sn2 then sn1 and sn2 were created by calls to makeStableName on the same object The reverse is not necessarily true if two dynamic stable names are not equal then the objects they name may still be equal Note in particular that makeDynamicStableName may return different DynamicStableName after an object is evaluated Dynamic Stable Names are similar to Stable Pointers Foreign.StablePtr but differ in the following ways There is no freeDynamicStableName operation unlike Foreign.StablePtr Dynamic Stable Names are reclaimed by the runtime system when they are no longer needed There is no deRefDynamicStableName operation You can get back from dynamic stable name to the original Haskell object The reason for this is that the existence of stable name for an object does not guarantee the existence of the object itself it can still be garbage collected",
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "DynamicStableName",
          "package": "stable-maps",
          "partial": "Dynamic Stable Name",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#t:DynamicStableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic",
          "name": "DynamicStableName",
          "package": "stable-maps",
          "signature": "DynamicStableName (StableName Any)",
          "source": "src/System-Mem-StableName-Dynamic.html#DynamicStableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "DynamicStableName",
          "package": "stable-maps",
          "partial": "Dynamic Stable Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#v:DynamicStableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDynamicStableName\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e returned is not\n necessarily unique; several \u003ccode\u003e\u003ca\u003eDynamicStableName\u003c/a\u003e\u003c/code\u003es may map to the same \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e\n (in practice however, the chances of this are small, so the result\n of \u003ccode\u003e\u003ca\u003ehashDynamicStableName\u003c/a\u003e\u003c/code\u003e makes a good hash key).\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic",
          "name": "hashDynamicStableName",
          "package": "stable-maps",
          "signature": "DynamicStableName -\u003e Int",
          "source": "src/System-Mem-StableName-Dynamic.html#hashDynamicStableName",
          "type": "function"
        },
        "index": {
          "description": "Convert DynamicStableName to an Int The Int returned is not necessarily unique several DynamicStableName may map to the same Int in practice however the chances of this are small so the result of hashDynamicStableName makes good hash key",
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "hashDynamicStableName",
          "normalized": "DynamicStableName-\u003eInt",
          "package": "stable-maps",
          "partial": "Dynamic Stable Name",
          "signature": "DynamicStableName-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#v:hashDynamicStableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a \u003ccode\u003e\u003ca\u003eDynamicStableName\u003c/a\u003e\u003c/code\u003e for an arbitrary object.  The object passed as\n the first argument is not evaluated by \u003ccode\u003e\u003ca\u003emakeDynamicStableName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Dynamic",
          "name": "makeDynamicStableName",
          "package": "stable-maps",
          "signature": "t -\u003e IO DynamicStableName",
          "source": "src/System-Mem-StableName-Dynamic.html#makeDynamicStableName",
          "type": "function"
        },
        "index": {
          "description": "Makes DynamicStableName for an arbitrary object The object passed as the first argument is not evaluated by makeDynamicStableName",
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "makeDynamicStableName",
          "normalized": "a-\u003eIO DynamicStableName",
          "package": "stable-maps",
          "partial": "Dynamic Stable Name",
          "signature": "t-\u003eIO DynamicStableName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#v:makeDynamicStableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Dynamic",
          "name": "wrapStableName",
          "package": "stable-maps",
          "signature": "StableName a -\u003e DynamicStableName",
          "source": "src/System-Mem-StableName-Dynamic.html#wrapStableName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Dynamic",
          "module": "System.Mem.StableName.Dynamic",
          "name": "wrapStableName",
          "normalized": "StableName a-\u003eDynamicStableName",
          "package": "stable-maps",
          "partial": "Stable Name",
          "signature": "StableName a-\u003eDynamicStableName",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Dynamic.html#v:wrapStableName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "Map",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Map.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "Map",
          "package": "stable-maps",
          "partial": "Map",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "Map",
          "package": "stable-maps",
          "source": "src/System-Mem-StableName-Map.html#Map",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "Map",
          "package": "stable-maps",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "adjust",
          "package": "stable-maps",
          "signature": "(f a -\u003e f a) -\u003e StableName a -\u003e Map f -\u003e Map f",
          "source": "src/System-Mem-StableName-Map.html#adjust",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "adjust",
          "normalized": "(a b-\u003ea b)-\u003eStableName b-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "signature": "(f a-\u003ef a)-\u003eStableName a-\u003eMap f-\u003eMap f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:adjust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "empty",
          "package": "stable-maps",
          "signature": "Map f",
          "source": "src/System-Mem-StableName-Map.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "empty",
          "package": "stable-maps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "find",
          "package": "stable-maps",
          "signature": "StableName a -\u003e Map f -\u003e f a",
          "source": "src/System-Mem-StableName-Map.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "find",
          "normalized": "StableName a-\u003eMap b-\u003eb a",
          "package": "stable-maps",
          "signature": "StableName a-\u003eMap f-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. The expression \u003ccode\u003e(\u003ccode\u003e\u003ca\u003efindWithDefault\u003c/a\u003e\u003c/code\u003e def k map)\u003c/code\u003e returns\n the value at key \u003ccode\u003ek\u003c/code\u003e or returns the default value \u003ccode\u003edef\u003c/code\u003e\n when the key is not in the map.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Map",
          "name": "findWithDefault",
          "package": "stable-maps",
          "signature": "f a -\u003e StableName a -\u003e Map f -\u003e f a",
          "source": "src/System-Mem-StableName-Map.html#findWithDefault",
          "type": "function"
        },
        "index": {
          "description": "log The expression findWithDefault def map returns the value at key or returns the default value def when the key is not in the map",
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "findWithDefault",
          "normalized": "a b-\u003eStableName b-\u003eMap a-\u003ea b",
          "package": "stable-maps",
          "partial": "With Default",
          "signature": "f a-\u003eStableName a-\u003eMap f-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:findWithDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "insert",
          "package": "stable-maps",
          "signature": "StableName a -\u003e f a -\u003e Map f -\u003e Map f",
          "source": "src/System-Mem-StableName-Map.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "insert",
          "normalized": "StableName a-\u003eb a-\u003eMap b-\u003eMap b",
          "package": "stable-maps",
          "signature": "StableName a-\u003ef a-\u003eMap f-\u003eMap f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Insert with a function for combining the new value and old value.\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e f key value mp\u003c/code\u003e\n will insert the pair (key, value) into \u003ccode\u003emp\u003c/code\u003e if the key does not exist\n in the map. If the key does exist, the function will insert the pair\n \u003ccode\u003e(key, f new_value old_value)\u003c/code\u003e\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Map",
          "name": "insertWith",
          "package": "stable-maps",
          "signature": "(f a -\u003e f a -\u003e f a) -\u003e StableName a -\u003e f a -\u003e Map f -\u003e Map f",
          "source": "src/System-Mem-StableName-Map.html#insertWith",
          "type": "function"
        },
        "index": {
          "description": "log Insert with function for combining the new value and old value insertWith key value mp will insert the pair key value into mp if the key does not exist in the map If the key does exist the function will insert the pair key new value old value",
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "insertWith",
          "normalized": "(a b-\u003ea b-\u003ea b)-\u003eStableName b-\u003ea b-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "partial": "With",
          "signature": "(f a-\u003ef a-\u003ef a)-\u003eStableName a-\u003ef a-\u003eMap f-\u003eMap f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:insertWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003einsertWith\u003c/a\u003e\u003c/code\u003e, but with the combining function applied strictly.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Map",
          "name": "insertWith'",
          "package": "stable-maps",
          "signature": "(f a -\u003e f a -\u003e f a) -\u003e StableName a -\u003e f a -\u003e Map f -\u003e Map f",
          "source": "src/System-Mem-StableName-Map.html#insertWith%27",
          "type": "function"
        },
        "index": {
          "description": "Same as insertWith but with the combining function applied strictly",
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "insertWith'",
          "normalized": "(a b-\u003ea b-\u003ea b)-\u003eStableName b-\u003ea b-\u003eMap a-\u003eMap a",
          "package": "stable-maps",
          "partial": "With'",
          "signature": "(f a-\u003ef a-\u003ef a)-\u003eStableName a-\u003ef a-\u003eMap f-\u003eMap f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:insertWith-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eO(log n)\u003c/em\u003e. Lookup the value at a key in the map.\n\u003c/p\u003e\u003cp\u003eThe function will return the corresponding value as a \u003ccode\u003e(\u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e value)\u003c/code\u003e\n or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the key isn't in the map.\n\u003c/p\u003e",
          "module": "System.Mem.StableName.Map",
          "name": "lookup",
          "package": "stable-maps",
          "signature": "StableName a -\u003e Map f -\u003e Maybe (f a)",
          "source": "src/System-Mem-StableName-Map.html#lookup",
          "type": "function"
        },
        "index": {
          "description": "log Lookup the value at key in the map The function will return the corresponding value as Just value or Nothing if the key isn in the map",
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "lookup",
          "normalized": "StableName a-\u003eMap b-\u003eMaybe(b a)",
          "package": "stable-maps",
          "signature": "StableName a-\u003eMap f-\u003eMaybe(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:lookup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "member",
          "package": "stable-maps",
          "signature": "StableName a -\u003e Map f -\u003e Bool",
          "source": "src/System-Mem-StableName-Map.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "member",
          "normalized": "StableName a-\u003eMap b-\u003eBool",
          "package": "stable-maps",
          "signature": "StableName a-\u003eMap f-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "notMember",
          "package": "stable-maps",
          "signature": "StableName a -\u003e Map f -\u003e Bool",
          "source": "src/System-Mem-StableName-Map.html#notMember",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "notMember",
          "normalized": "StableName a-\u003eMap b-\u003eBool",
          "package": "stable-maps",
          "partial": "Member",
          "signature": "StableName a-\u003eMap f-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:notMember"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "null",
          "package": "stable-maps",
          "signature": "Map f -\u003e Bool",
          "source": "src/System-Mem-StableName-Map.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "null",
          "normalized": "Map a-\u003eBool",
          "package": "stable-maps",
          "signature": "Map f-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Mem.StableName.Map",
          "name": "singleton",
          "package": "stable-maps",
          "signature": "StableName a -\u003e f a -\u003e Map f",
          "source": "src/System-Mem-StableName-Map.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Mem StableName Map",
          "module": "System.Mem.StableName.Map",
          "name": "singleton",
          "normalized": "StableName a-\u003eb a-\u003eMap b",
          "package": "stable-maps",
          "signature": "StableName a-\u003ef a-\u003eMap f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stable-maps/docs/System-Mem-StableName-Map.html#v:singleton"
      }
    }
  ]
]