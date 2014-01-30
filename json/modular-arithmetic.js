[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides types for working with integers modulo some\n constant.\n\u003c/p\u003e\u003cp\u003eThis module uses some new Haskell features introduced in 7.6. In\n particular, it needs \u003ccode\u003eDataKinds\u003c/code\u003e and type literals\n (\u003ca\u003eGHC.TypeLits\u003c/a\u003e). The \u003ccode\u003eTypeOperators\u003c/code\u003e extension is needed for the\n nice infix syntax.\n\u003c/p\u003e\u003cp\u003eThese types are created with the type constructor \u003ccode\u003e\u003ca\u003eMod\u003c/a\u003e\u003c/code\u003e\n (or its synonym \u003ccode\u003e\u003ca\u003e/\u003c/a\u003e\u003c/code\u003e). To work with integers mod 7, you could write:\n\u003c/p\u003e\u003cpre\u003e Int `Mod` 7\n Integer `Mod` 7\n Integer/7\n &#8484;/7\n\u003c/pre\u003e\u003cp\u003e(The last is a synonym for \u003ccode\u003eInteger\u003c/code\u003e provided by this library. In\n Emacs, you can use the TeX input mode to type it with \u003ccode\u003e\\Bbb{Z}\u003c/code\u003e.)\n\u003c/p\u003e\u003cp\u003eAll the usual typeclasses are defined for these types. You can also\n get the constant using \u003ccode\u003ebound\u003c/code\u003e or extract the underlying value\n using \u003ccode\u003eunMod\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHere is a quick example:\n\u003c/p\u003e\u003cpre\u003e *Data.Modular\u003e (10 :: &#8484;/7) * (11 :: &#8484;/7)\n 5\n\u003c/pre\u003e\u003cp\u003eIt also works correctly with negative numeric literals:\n\u003c/p\u003e\u003cpre\u003e *Data.Modular\u003e (-10 :: &#8484;/7) * (11 :: &#8484;/7)\n 2\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "module",
        "fct-source": "src/Data-Modular.html",
        "fct-type": "module",
        "title": "Modular"
      },
      "index": {
        "description": "This module provides types for working with integers modulo some constant This module uses some new Haskell features introduced in In particular it needs DataKinds and type literals GHC.TypeLits The TypeOperators extension is needed for the nice infix syntax These types are created with the type constructor Mod or its synonym To work with integers mod you could write Int Mod Integer Mod Integer The last is synonym for Integer provided by this library In Emacs you can use the TeX input mode to type it with Bbb All the usual typeclasses are defined for these types You can also get the constant using bound or extract the underlying value using unMod Here is quick example Data.Modular It also works correctly with negative numeric literals Data.Modular",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "Modular",
        "normalized": "",
        "package": "modular-arithmetic",
        "partial": "Modular",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#t:-47-",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for \u003ccode\u003eMod\u003c/code\u003e, inspired by the &#8484;/n syntax from mathematics.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "type",
        "fct-source": "src/Data-Modular.html#%2F",
        "fct-type": "type",
        "title": "(/)"
      },
      "index": {
        "description": "synonym for Mod inspired by the syntax from mathematics",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "(/) /",
        "normalized": "",
        "package": "modular-arithmetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#t:-8484-",
      "description": {
        "fct-descr": "\u003cp\u003eA synonym for Integer, also inspired by the &#8484;/n syntax.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "type",
        "fct-source": "src/Data-Modular.html#%2124",
        "fct-type": "type",
        "title": "ℤ"
      },
      "index": {
        "description": "synonym for Integer also inspired by the syntax",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "ℤ",
        "normalized": "",
        "package": "modular-arithmetic",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#t:Mod",
      "description": {
        "fct-descr": "\u003cp\u003eThe actual type, wrapping an underlying \u003ccode\u003eIntegeral\u003c/code\u003e type \u003ccode\u003ei\u003c/code\u003e in a\n newtype annotated with the bound.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "data",
        "fct-source": "src/Data-Modular.html#Mod",
        "fct-type": "data",
        "title": "Mod"
      },
      "index": {
        "description": "The actual type wrapping an underlying Integeral type in newtype annotated with the bound",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "Mod",
        "normalized": "",
        "package": "modular-arithmetic",
        "partial": "Mod",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#v:toMod",
      "description": {
        "fct-descr": "\u003cp\u003eWraps the underlying type into the modular type, wrapping as\n appropriate.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "i -\u003e i `Mod` n",
        "fct-source": "src/Data-Modular.html#toMod",
        "fct-type": "function",
        "title": "toMod"
      },
      "index": {
        "description": "Wraps the underlying type into the modular type wrapping as appropriate",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "toMod",
        "normalized": "a-\u003ea Mod b",
        "package": "modular-arithmetic",
        "partial": "Mod",
        "signature": "i-\u003ei Mod n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#v:toMod-39-",
      "description": {
        "fct-descr": "\u003cp\u003eWraps an integral number to a mod, converting between integral\n types.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "i -\u003e j `Mod` n",
        "fct-source": "src/Data-Modular.html#toMod%27",
        "fct-type": "function",
        "title": "toMod'"
      },
      "index": {
        "description": "Wraps an integral number to mod converting between integral types",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "toMod'",
        "normalized": "a-\u003eb Mod c",
        "package": "modular-arithmetic",
        "partial": "Mod'",
        "signature": "i-\u003ej Mod n"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/modular-arithmetic/docs/Data-Modular.html#v:unMod",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the underlying integral value from a modular type.\n\u003c/p\u003e",
        "fct-module": "Data.Modular",
        "fct-package": "modular-arithmetic",
        "fct-signature": "(i `Mod` n) -\u003e i",
        "fct-source": "src/Data-Modular.html#unMod",
        "fct-type": "function",
        "title": "unMod"
      },
      "index": {
        "description": "Extract the underlying integral value from modular type",
        "hierarchy": "Data Modular",
        "module": "Data.Modular",
        "name": "unMod",
        "normalized": "(a Mod b)-\u003ea",
        "package": "modular-arithmetic",
        "partial": "Mod",
        "signature": "(i Mod n)-\u003ei"
      }
    }
  }
]