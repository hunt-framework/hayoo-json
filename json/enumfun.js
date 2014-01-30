[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e EnumMaps. Comprises a partial EnumMap and\na default value. Has Applicative and Monad instances, unlike EnumMap.\n\u003c/p\u003e\u003cp\u003eInspired by Conal's Data.TotalMap:\n\u003ca\u003ehttp://hackage.haskell.org/package/total-map\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "module",
        "fct-source": "src/Data-EnumFun-Lazy.html",
        "fct-type": "module",
        "title": "Lazy"
      },
      "index": {
        "description": "Finitely represented total EnumMaps Comprises partial EnumMap and default value Has Applicative and Monad instances unlike EnumMap Inspired by Conal Data.TotalMap http hackage.haskell.org package total-map",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "Lazy",
        "normalized": "",
        "package": "enumfun",
        "partial": "Lazy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#t:EnumFun",
      "description": {
        "fct-descr": "\u003cp\u003eTotal EnumMap.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "data",
        "fct-source": "src/Data-EnumFun-Lazy-Base.html#EnumFun",
        "fct-type": "data",
        "title": "EnumFun"
      },
      "index": {
        "description": "Total EnumMap",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "EnumFun",
        "normalized": "",
        "package": "enumfun",
        "partial": "Enum Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e k -\u003e v",
        "fct-source": "src/Data-EnumFun-Lazy.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Sample total map Semantic function",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "(!) !",
        "normalized": "EnumFun a b-\u003ea-\u003eb",
        "package": "enumfun",
        "partial": "",
        "signature": "EnumFun k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:EnumFun",
      "description": {
        "fct-descr": "\u003cp\u003eDefault value and a finite map.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun v (EnumMap k v)",
        "fct-source": "src/Data-EnumFun-Lazy-Base.html#EnumFun",
        "fct-type": "function",
        "title": "EnumFun"
      },
      "index": {
        "description": "Default value and finite map",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "EnumFun",
        "normalized": "",
        "package": "enumfun",
        "partial": "Enum Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e from a default value and a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "v -\u003e [(k, v)] -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Lazy.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create an EnumFun from default value and list of key value pairs",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "fromList",
        "normalized": "a-\u003e[(b,a)]-\u003eEnumFun b a",
        "package": "enumfun",
        "partial": "List",
        "signature": "v-\u003e[(k,v)]-\u003eEnumFun k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:fromStrict",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Strict EnumFun. The operation is essentially free; we\n only needed two distinct types for the different class instances.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Lazy.html#fromStrict",
        "fct-type": "function",
        "title": "fromStrict"
      },
      "index": {
        "description": "Convert from Strict EnumFun The operation is essentially free we only needed two distinct types for the different class instances",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "fromStrict",
        "normalized": "EnumFun a b-\u003eEnumFun a b",
        "package": "enumfun",
        "partial": "Strict",
        "signature": "EnumFun k v-\u003eEnumFun k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Lazy.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eOptimise an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Lazy",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Lazy.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Optimise an EnumFun weeding out any explicit default values semantic no-op i.e trim",
        "hierarchy": "Data EnumFun Lazy",
        "module": "Data.EnumFun.Lazy",
        "name": "trim",
        "normalized": "EnumFun a b-\u003eEnumFun a b",
        "package": "enumfun",
        "partial": "",
        "signature": "EnumFun k v-\u003eEnumFun k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinitely represented \u003cem\u003etotal\u003c/em\u003e EnumMaps. Comprises a partial EnumMap and\na default value. Has Applicative and Monad instances, unlike EnumMap.\n\u003c/p\u003e\u003cp\u003eInspired by Conal's Data.TotalMap:\n\u003ca\u003ehttp://hackage.haskell.org/package/total-map\u003c/a\u003e\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "module",
        "fct-source": "src/Data-EnumFun-Strict.html",
        "fct-type": "module",
        "title": "Strict"
      },
      "index": {
        "description": "Finitely represented total EnumMaps Comprises partial EnumMap and default value Has Applicative and Monad instances unlike EnumMap Inspired by Conal Data.TotalMap http hackage.haskell.org package total-map",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "Strict",
        "normalized": "",
        "package": "enumfun",
        "partial": "Strict",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#t:EnumFun",
      "description": {
        "fct-descr": "\u003cp\u003eTotal EnumMap.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "data",
        "fct-source": "src/Data-EnumFun-Strict-Base.html#EnumFun",
        "fct-type": "data",
        "title": "EnumFun"
      },
      "index": {
        "description": "Total EnumMap",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "EnumFun",
        "normalized": "",
        "package": "enumfun",
        "partial": "Enum Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:-33-",
      "description": {
        "fct-descr": "\u003cp\u003eSample a total map. Semantic function.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e k -\u003e v",
        "fct-source": "src/Data-EnumFun-Strict.html#%21",
        "fct-type": "function",
        "title": "(!)"
      },
      "index": {
        "description": "Sample total map Semantic function",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "(!) !",
        "normalized": "EnumFun a b-\u003ea-\u003eb",
        "package": "enumfun",
        "partial": "",
        "signature": "EnumFun k v-\u003ek-\u003ev"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:EnumFun",
      "description": {
        "fct-descr": "\u003cp\u003eDefault value and a finite map.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun !v !(EnumMap k v)",
        "fct-source": "src/Data-EnumFun-Strict-Base.html#EnumFun",
        "fct-type": "function",
        "title": "EnumFun"
      },
      "index": {
        "description": "Default value and finite map",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "EnumFun",
        "normalized": "",
        "package": "enumfun",
        "partial": "Enum Fun",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:fromLazy",
      "description": {
        "fct-descr": "\u003cp\u003eConvert from a Lazy EnumFun. The operation is essentially free; we\n only needed two distinct types for the different class instances.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Strict.html#fromLazy",
        "fct-type": "function",
        "title": "fromLazy"
      },
      "index": {
        "description": "Convert from Lazy EnumFun The operation is essentially free we only needed two distinct types for the different class instances",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "fromLazy",
        "normalized": "EnumFun a b-\u003eEnumFun a b",
        "package": "enumfun",
        "partial": "Lazy",
        "signature": "EnumFun k v-\u003eEnumFun k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e from a default value and a list of key/value pairs.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "v -\u003e [(k, v)] -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Strict.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create an EnumFun from default value and list of key value pairs",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "fromList",
        "normalized": "a-\u003e[(b,a)]-\u003eEnumFun b a",
        "package": "enumfun",
        "partial": "List",
        "signature": "v-\u003e[(k,v)]-\u003eEnumFun k v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/enumfun/docs/Data-EnumFun-Strict.html#v:trim",
      "description": {
        "fct-descr": "\u003cp\u003eOptimise an \u003ccode\u003e\u003ca\u003eEnumFun\u003c/a\u003e\u003c/code\u003e, weeding out any explicit default values.\n A semantic no-op, i.e., \u003ccode\u003e(!) . trim == (!)\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.EnumFun.Strict",
        "fct-package": "enumfun",
        "fct-signature": "EnumFun k v -\u003e EnumFun k v",
        "fct-source": "src/Data-EnumFun-Strict.html#trim",
        "fct-type": "function",
        "title": "trim"
      },
      "index": {
        "description": "Optimise an EnumFun weeding out any explicit default values semantic no-op i.e trim",
        "hierarchy": "Data EnumFun Strict",
        "module": "Data.EnumFun.Strict",
        "name": "trim",
        "normalized": "EnumFun a b-\u003eEnumFun a b",
        "package": "enumfun",
        "partial": "",
        "signature": "EnumFun k v-\u003eEnumFun k v"
      }
    }
  }
]