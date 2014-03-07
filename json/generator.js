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
        "word": "generator"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA monad transformer for the creation of Lists.\n Similar to Python's generators.\n\u003c/p\u003e\u003cpre\u003e import Control.Monad.Identity (Identity(..))\n import Data.List.Class (toList)\n\n hanoi 0 _ _ _ = return ()\n hanoi n from to other = do\n   hanoi (n-1) from other to\n   yield (from, to)\n   hanoi (n-1) other to from\n\n \u003e runIdentity . toList . generate $ hanoi 3 'A' 'B' 'C' :: [(Char, Char)]\n [('A','B'),('A','C'),('B','C'),('A','B'),('C','A'),('C','B'),('A','B')]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Control.Monad.Generator",
          "name": "Generator",
          "package": "generator",
          "source": "src/Control-Monad-Generator.html",
          "type": "module"
        },
        "index": {
          "description": "monad transformer for the creation of Lists Similar to Python generators import Control.Monad.Identity Identity import Data.List.Class toList hanoi return hanoi from to other do hanoi n-1 from other to yield from to hanoi n-1 other to from runIdentity toList generate hanoi Char Char",
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "Generator",
          "package": "generator",
          "partial": "Generator",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monad transformer to create \u003ccode\u003eList\u003c/code\u003es.\n \u003ccode\u003e\u003ca\u003egenerate\u003c/a\u003e\u003c/code\u003e transforms a \u003ca\u003eGeneratorT v m a\u003c/a\u003e to a \u003ca\u003eListT m a\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Generator",
          "name": "GeneratorT",
          "package": "generator",
          "source": "src/Control-Monad-Generator.html#GeneratorT",
          "type": "newtype"
        },
        "index": {
          "description": "monad transformer to create List generate transforms GeneratorT to ListT",
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "GeneratorT",
          "package": "generator",
          "partial": "Generator",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#t:GeneratorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Generator",
          "name": "GeneratorT",
          "package": "generator",
          "signature": "GeneratorT",
          "source": "src/Control-Monad-Generator.html#GeneratorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "GeneratorT",
          "package": "generator",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:GeneratorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Generator",
          "name": "breakGenerator",
          "package": "generator",
          "signature": "GeneratorT v m a",
          "source": "src/Control-Monad-Generator.html#breakGenerator",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "breakGenerator",
          "package": "generator",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:breakGenerator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Generator",
          "name": "generate",
          "package": "generator",
          "signature": "GeneratorT v m () -\u003e ListT m v",
          "source": "src/Control-Monad-Generator.html#generate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "generate",
          "normalized": "GeneratorT a b()-\u003eListT b a",
          "package": "generator",
          "signature": "GeneratorT v m()-\u003eListT m v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:generate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Generator",
          "name": "runGeneratorT",
          "package": "generator",
          "signature": "ContT v (ListT m) a",
          "source": "src/Control-Monad-Generator.html#GeneratorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "runGeneratorT",
          "package": "generator",
          "partial": "Generator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:runGeneratorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Generator",
          "name": "yield",
          "package": "generator",
          "signature": "v -\u003e GeneratorT v m ()",
          "source": "src/Control-Monad-Generator.html#yield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Generator",
          "module": "Control.Monad.Generator",
          "name": "yield",
          "normalized": "a-\u003eGeneratorT a b()",
          "package": "generator",
          "signature": "v-\u003eGeneratorT v m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/generator/docs/Control-Monad-Generator.html#v:yield"
      }
    }
  ]
]