[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer for the creation of Lists.\n Similar to Python's generators.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Identity (Identity(..))\n import Data.List.Class (toList)\n\n hanoi 0 _ _ _ = return ()\n hanoi n from to other = do\n   hanoi (n-1) from other to\n   yield (from, to)\n   hanoi (n-1) other to from\n\n \u003e runIdentity . toList . generate $ hanoi 3 'A' 'B' 'C' :: [(Char, Char)]\n [('A','B'),('A','C'),('B','C'),('A','B'),('C','A'),('C','B'),('A','B')]\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Generator.html",
        "fct-type": "module",
        "title": "Generator"
      },
      "index": {
        "description": "monad transformer for the creation of Lists Similar to Python generators import Control.Monad.Identity Identity import Data.List.Class toList hanoi return hanoi from to other do hanoi n-1 from other to yield from to hanoi n-1 other to from runIdentity toList generate hanoi Char Char",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "Generator",
        "normalized": "",
        "package": "generator",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#t:GeneratorT",
      "description": {
        "fct-descr": "\u003cp\u003eA monad transformer to create \u003ccode\u003eList\u003c/code\u003es.\n \u003ccode\u003e\u003ca\u003egenerate\u003c/a\u003e\u003c/code\u003e transforms a \u003ca\u003eGeneratorT v m a\u003c/a\u003e to a \u003ca\u003eListT m a\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Generator.html#GeneratorT",
        "fct-type": "newtype",
        "title": "GeneratorT"
      },
      "index": {
        "description": "monad transformer to create List generate transforms GeneratorT to ListT",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "GeneratorT",
        "normalized": "",
        "package": "generator",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:GeneratorT",
      "description": {
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "GeneratorT",
        "fct-source": "src/Control-Monad-Generator.html#GeneratorT",
        "fct-type": "function",
        "title": "GeneratorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "GeneratorT",
        "normalized": "",
        "package": "generator",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:breakGenerator",
      "description": {
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "GeneratorT v m a",
        "fct-source": "src/Control-Monad-Generator.html#breakGenerator",
        "fct-type": "function",
        "title": "breakGenerator"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "breakGenerator",
        "normalized": "",
        "package": "generator",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:generate",
      "description": {
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "GeneratorT v m () -\u003e ListT m v",
        "fct-source": "src/Control-Monad-Generator.html#generate",
        "fct-type": "function",
        "title": "generate"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "generate",
        "normalized": "GeneratorT a b()-\u003eListT b a",
        "package": "generator",
        "partial": "",
        "signature": "GeneratorT v m()-\u003eListT m v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:runGeneratorT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "ContT v (ListT m) a",
        "fct-source": "src/Control-Monad-Generator.html#GeneratorT",
        "fct-type": "function",
        "title": "runGeneratorT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "runGeneratorT",
        "normalized": "",
        "package": "generator",
        "partial": "Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:yield",
      "description": {
        "fct-module": "Control.Monad.Generator",
        "fct-package": "generator",
        "fct-signature": "v -\u003e GeneratorT v m ()",
        "fct-source": "src/Control-Monad-Generator.html#yield",
        "fct-type": "function",
        "title": "yield"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Generator",
        "module": "Control.Monad.Generator",
        "name": "yield",
        "normalized": "a-\u003eGeneratorT a b()",
        "package": "generator",
        "partial": "",
        "signature": "v-\u003eGeneratorT v m()"
      }
    }
  }
]