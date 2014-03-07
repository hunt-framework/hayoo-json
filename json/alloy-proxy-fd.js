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
        "word": "alloy-proxy-fd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing an \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e instance in terms of \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe contents of this module appear blank because it contains only class instances.\n  The \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e class instances have nearly identical definitions\n for any given type, and running \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e and ignoring the route has\n the same behaviour as the \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e class.  Therefore, it is possible to define\n a single \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e instance in terms of \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e.  That is what this module does.\n\u003c/p\u003e\u003cp\u003eTo use this module, you should generate only \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e instances with the\n \u003ca\u003eData.Generics.Alloy.GenInstances\u003c/a\u003e module, and import this module.  If you\n import this alongside any other \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e instances you'll have incoherent\n instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.EffectProxy",
          "name": "EffectProxy",
          "package": "alloy-proxy-fd",
          "source": "src/Data-Generics-Alloy-EffectProxy.html",
          "type": "module"
        },
        "index": {
          "description": "module providing an AlloyA instance in terms of AlloyARoute The contents of this module appear blank because it contains only class instances The AlloyA and AlloyARoute class instances have nearly identical definitions for any given type and running AlloyARoute and ignoring the route has the same behaviour as the AlloyA class Therefore it is possible to define single AlloyA instance in terms of AlloyARoute That is what this module does To use this module you should generate only AlloyARoute instances with the Data.Generics.Alloy.GenInstances module and import this module If you import this alongside any other AlloyA instances you ll have incoherent instances",
          "hierarchy": "Data Generics Alloy EffectProxy",
          "module": "Data.Generics.Alloy.EffectProxy",
          "name": "EffectProxy",
          "package": "alloy-proxy-fd",
          "partial": "Effect Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy-proxy-fd/docs/Data-Generics-Alloy-EffectProxy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing an \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e instance in terms of \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe contents of this module appear blank because it contains only class instances.\n  The \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e class instances have nearly identical definitions\n for any given type, and running \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e with an identity functor/monad has\n the same behaviour as the pure class.  Therefore, it is possible to define\n a single \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e instance in terms of \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e.  That is what this module does.\n\u003c/p\u003e\u003cp\u003eTo use this module, you should generate only \u003ccode\u003e\u003ca\u003eAlloyA\u003c/a\u003e\u003c/code\u003e instances with the\n \u003ca\u003eData.Generics.Alloy.GenInstances\u003c/a\u003e module, and import this module.  If you\n import this alongside any other \u003ccode\u003e\u003ca\u003eAlloy\u003c/a\u003e\u003c/code\u003e instances you'll have incoherent\n instances.  Alternatively, you can generate only \u003ccode\u003e\u003ca\u003eAlloyARoute\u003c/a\u003e\u003c/code\u003e instances and\n use this module along with \u003ca\u003eData.Generics.Alloy.EffectProxy\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Generics.Alloy.PureProxy",
          "name": "PureProxy",
          "package": "alloy-proxy-fd",
          "source": "src/Data-Generics-Alloy-PureProxy.html",
          "type": "module"
        },
        "index": {
          "description": "module providing an Alloy instance in terms of AlloyA The contents of this module appear blank because it contains only class instances The Alloy and AlloyA class instances have nearly identical definitions for any given type and running AlloyA with an identity functor monad has the same behaviour as the pure class Therefore it is possible to define single Alloy instance in terms of AlloyA That is what this module does To use this module you should generate only AlloyA instances with the Data.Generics.Alloy.GenInstances module and import this module If you import this alongside any other Alloy instances you ll have incoherent instances Alternatively you can generate only AlloyARoute instances and use this module along with Data.Generics.Alloy.EffectProxy",
          "hierarchy": "Data Generics Alloy PureProxy",
          "module": "Data.Generics.Alloy.PureProxy",
          "name": "PureProxy",
          "package": "alloy-proxy-fd",
          "partial": "Pure Proxy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alloy-proxy-fd/docs/Data-Generics-Alloy-PureProxy.html#"
      }
    }
  ]
]