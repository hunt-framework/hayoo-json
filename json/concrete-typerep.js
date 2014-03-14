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
        "word": "concrete-typerep"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines \u003ccode\u003e\u003ca\u003eBinary\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instances for \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e. These are defined on a newtype of \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e, namely \u003ccode\u003e\u003ca\u003eConcreteTypeRep\u003c/a\u003e\u003c/code\u003e, for two purposes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e to avoid making orphan instances\n\u003c/li\u003e\u003cli\u003e the \u003ccode\u003e\u003ca\u003eHashable\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eConcreteTypeRep\u003c/a\u003e\u003c/code\u003e may not be pure enough for some people's tastes.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAs usual with \u003ccode\u003e\u003ca\u003eTypeable\u003c/a\u003e\u003c/code\u003e, this module will typically be used with some variant of \u003ccode\u003eData.Dynamic\u003c/code\u003e. Two possible uses of this module are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e making hashmaps: \u003ccode\u003eHashMap \u003ccode\u003e\u003ca\u003eConcreteTypeRep\u003c/a\u003e\u003c/code\u003e Dynamic\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e serializing \u003ccode\u003eDynamic\u003c/code\u003es.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
          "module": "Data.ConcreteTypeRep",
          "name": "ConcreteTypeRep",
          "package": "concrete-typerep",
          "source": "src/Data-ConcreteTypeRep.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines Binary and Hashable instances for TypeRep These are defined on newtype of TypeRep namely ConcreteTypeRep for two purposes to avoid making orphan instances the Hashable instance for ConcreteTypeRep may not be pure enough for some people tastes As usual with Typeable this module will typically be used with some variant of Data.Dynamic Two possible uses of this module are making hashmaps HashMap ConcreteTypeRep Dynamic serializing Dynamic",
          "hierarchy": "Data ConcreteTypeRep",
          "module": "Data.ConcreteTypeRep",
          "name": "ConcreteTypeRep",
          "package": "concrete-typerep",
          "partial": "Concrete Type Rep",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/concrete-typerep/docs/Data-ConcreteTypeRep.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAbstract type providing the functionality of \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e, but additionally supporting hashing and serialization.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance is just the \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e instance for \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e, so an analogous guarantee holds: \u003ccode\u003e\u003ccode\u003e\u003ca\u003ecTypeOf\u003c/a\u003e\u003c/code\u003e a == \u003ccode\u003e\u003ca\u003ecTypeOf\u003c/a\u003e\u003c/code\u003e b\u003c/code\u003e if and only if \u003ccode\u003ea\u003c/code\u003e and \u003ccode\u003eb\u003c/code\u003e have the same type.\n The hashing and serialization functions preserve this equality.\n\u003c/p\u003e",
          "module": "Data.ConcreteTypeRep",
          "name": "ConcreteTypeRep",
          "package": "concrete-typerep",
          "source": "src/Data-ConcreteTypeRep.html#ConcreteTypeRep",
          "type": "data"
        },
        "index": {
          "description": "Abstract type providing the functionality of TypeRep but additionally supporting hashing and serialization The Eq instance is just the Eq instance for TypeRep so an analogous guarantee holds cTypeOf cTypeOf if and only if and have the same type The hashing and serialization functions preserve this equality",
          "hierarchy": "Data ConcreteTypeRep",
          "module": "Data.ConcreteTypeRep",
          "name": "ConcreteTypeRep",
          "package": "concrete-typerep",
          "partial": "Concrete Type Rep",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/concrete-typerep/docs/Data-ConcreteTypeRep.html#t:ConcreteTypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\"Concrete\" version of \u003ccode\u003e\u003ca\u003etypeOf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.ConcreteTypeRep",
          "name": "cTypeOf",
          "package": "concrete-typerep",
          "signature": "a -\u003e ConcreteTypeRep",
          "source": "src/Data-ConcreteTypeRep.html#cTypeOf",
          "type": "function"
        },
        "index": {
          "description": "Concrete version of typeOf",
          "hierarchy": "Data ConcreteTypeRep",
          "module": "Data.ConcreteTypeRep",
          "name": "cTypeOf",
          "normalized": "a-\u003eConcreteTypeRep",
          "package": "concrete-typerep",
          "partial": "Type Of",
          "signature": "a-\u003eConcreteTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concrete-typerep/docs/Data-ConcreteTypeRep.html#v:cTypeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts from the underlying \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ConcreteTypeRep",
          "name": "fromTypeRep",
          "package": "concrete-typerep",
          "signature": "TypeRep -\u003e ConcreteTypeRep",
          "source": "src/Data-ConcreteTypeRep.html#fromTypeRep",
          "type": "function"
        },
        "index": {
          "description": "Converts from the underlying TypeRep",
          "hierarchy": "Data ConcreteTypeRep",
          "module": "Data.ConcreteTypeRep",
          "name": "fromTypeRep",
          "normalized": "TypeRep-\u003eConcreteTypeRep",
          "package": "concrete-typerep",
          "partial": "Type Rep",
          "signature": "TypeRep-\u003eConcreteTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concrete-typerep/docs/Data-ConcreteTypeRep.html#v:fromTypeRep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts to the underlying \u003ccode\u003e\u003ca\u003eTypeRep\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.ConcreteTypeRep",
          "name": "toTypeRep",
          "package": "concrete-typerep",
          "signature": "ConcreteTypeRep -\u003e TypeRep",
          "source": "src/Data-ConcreteTypeRep.html#toTypeRep",
          "type": "function"
        },
        "index": {
          "description": "Converts to the underlying TypeRep",
          "hierarchy": "Data ConcreteTypeRep",
          "module": "Data.ConcreteTypeRep",
          "name": "toTypeRep",
          "normalized": "ConcreteTypeRep-\u003eTypeRep",
          "package": "concrete-typerep",
          "partial": "Type Rep",
          "signature": "ConcreteTypeRep-\u003eTypeRep",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/concrete-typerep/docs/Data-ConcreteTypeRep.html#v:toTypeRep"
      }
    }
  ]
]