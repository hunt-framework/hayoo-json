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
        "word": "enumfun"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e EnumMaps. Comprises a partial EnumMap and\na default value. Has Applicative and Monad instances, unlike EnumMap.\n\u003c/p\u003e\u003cp\u003eInspired by Conal's Data.TotalMap:\n\u003ca\u003ehttp://hackage.haskell.org/package/total-map\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "Lazy",
          "package": "enumfun",
          "source": "src/Data-EnumFun-Lazy.html",
          "type": "module"
        },
        "index": {
          "description": "Finitely represented total EnumMaps Comprises partial EnumMap and default value Has Applicative and Monad instances unlike EnumMap Inspired by Conal Data.TotalMap http hackage.haskell.org package total-map",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "Lazy",
          "package": "enumfun",
          "partial": "Lazy",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal EnumMap.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "EnumFun",
          "package": "enumfun",
          "source": "src/Data-EnumFun-Lazy-Base.html#EnumFun",
          "type": "data"
        },
        "index": {
          "description": "Total EnumMap",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "EnumFun",
          "package": "enumfun",
          "partial": "Enum Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#t:EnumFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "(!)",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e k -\u003e v",
          "source": "src/Data-EnumFun-Lazy.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Sample total map Semantic function",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "(!) !",
          "normalized": "EnumFun a b-\u003ea-\u003eb",
          "package": "enumfun",
          "signature": "EnumFun k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value and a finite map.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "EnumFun",
          "package": "enumfun",
          "signature": "EnumFun v (EnumMap k v)",
          "source": "src/Data-EnumFun-Lazy-Base.html#EnumFun",
          "type": "function"
        },
        "index": {
          "description": "Default value and finite map",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "EnumFun",
          "package": "enumfun",
          "partial": "Enum Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:EnumFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e from a default value and a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "fromList",
          "package": "enumfun",
          "signature": "v -\u003e [(k, v)] -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Lazy.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create an EnumFun from default value and list of key value pairs",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "fromList",
          "normalized": "a-\u003e[(b,a)]-\u003eEnumFun b a",
          "package": "enumfun",
          "partial": "List",
          "signature": "v-\u003e[(k,v)]-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Strict EnumFun. The operation is essentially free; we\n only needed two distinct types for the different class instances.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "fromStrict",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Lazy.html#fromStrict",
          "type": "function"
        },
        "index": {
          "description": "Convert from Strict EnumFun The operation is essentially free we only needed two distinct types for the different class instances",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "fromStrict",
          "normalized": "EnumFun a b-\u003eEnumFun a b",
          "package": "enumfun",
          "partial": "Strict",
          "signature": "EnumFun k v-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:fromStrict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimise an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Lazy",
          "name": "trim",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Lazy.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Optimise an EnumFun weeding out any explicit default values semantic no-op i.e trim",
          "hierarchy": "Data EnumFun Lazy",
          "module": "Data.EnumFun.Lazy",
          "name": "trim",
          "normalized": "EnumFun a b-\u003eEnumFun a b",
          "package": "enumfun",
          "signature": "EnumFun k v-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:trim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e EnumMaps. Comprises a partial EnumMap and\na default value. Has Applicative and Monad instances, unlike EnumMap.\n\u003c/p\u003e\u003cp\u003eInspired by Conal's Data.TotalMap:\n\u003ca\u003ehttp://hackage.haskell.org/package/total-map\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "Strict",
          "package": "enumfun",
          "source": "src/Data-EnumFun-Strict.html",
          "type": "module"
        },
        "index": {
          "description": "Finitely represented total EnumMaps Comprises partial EnumMap and default value Has Applicative and Monad instances unlike EnumMap Inspired by Conal Data.TotalMap http hackage.haskell.org package total-map",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "Strict",
          "package": "enumfun",
          "partial": "Strict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTotal EnumMap.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "EnumFun",
          "package": "enumfun",
          "source": "src/Data-EnumFun-Strict-Base.html#EnumFun",
          "type": "data"
        },
        "index": {
          "description": "Total EnumMap",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "EnumFun",
          "package": "enumfun",
          "partial": "Enum Fun",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#t:EnumFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "(!)",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e k -\u003e v",
          "source": "src/Data-EnumFun-Strict.html#%21",
          "type": "function"
        },
        "index": {
          "description": "Sample total map Semantic function",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "(!) !",
          "normalized": "EnumFun a b-\u003ea-\u003eb",
          "package": "enumfun",
          "signature": "EnumFun k v-\u003ek-\u003ev",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:-33-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault value and a finite map.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "EnumFun",
          "package": "enumfun",
          "signature": "EnumFun !v !(EnumMap k v)",
          "source": "src/Data-EnumFun-Strict-Base.html#EnumFun",
          "type": "function"
        },
        "index": {
          "description": "Default value and finite map",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "EnumFun",
          "package": "enumfun",
          "partial": "Enum Fun",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:EnumFun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert from a Lazy EnumFun. The operation is essentially free; we\n only needed two distinct types for the different class instances.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "fromLazy",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Strict.html#fromLazy",
          "type": "function"
        },
        "index": {
          "description": "Convert from Lazy EnumFun The operation is essentially free we only needed two distinct types for the different class instances",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "fromLazy",
          "normalized": "EnumFun a b-\u003eEnumFun a b",
          "package": "enumfun",
          "partial": "Lazy",
          "signature": "EnumFun k v-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:fromLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e from a default value and a list of key/value pairs.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "fromList",
          "package": "enumfun",
          "signature": "v -\u003e [(k, v)] -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Strict.html#fromList",
          "type": "function"
        },
        "index": {
          "description": "Create an EnumFun from default value and list of key value pairs",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "fromList",
          "normalized": "a-\u003e[(b,a)]-\u003eEnumFun b a",
          "package": "enumfun",
          "partial": "List",
          "signature": "v-\u003e[(k,v)]-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimise an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.EnumFun.Strict",
          "name": "trim",
          "package": "enumfun",
          "signature": "EnumFun k v -\u003e EnumFun k v",
          "source": "src/Data-EnumFun-Strict.html#trim",
          "type": "function"
        },
        "index": {
          "description": "Optimise an EnumFun weeding out any explicit default values semantic no-op i.e trim",
          "hierarchy": "Data EnumFun Strict",
          "module": "Data.EnumFun.Strict",
          "name": "trim",
          "normalized": "EnumFun a b-\u003eEnumFun a b",
          "package": "enumfun",
          "signature": "EnumFun k v-\u003eEnumFun k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:trim"
      }
    }
  ]
]