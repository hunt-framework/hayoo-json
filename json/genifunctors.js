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
        "word": "genifunctors"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate (derive) generalized \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003efoldMap\u003c/code\u003e and \u003ccode\u003etraverse\u003c/code\u003e for Bifunctors, Trifunctors, or a functor with any arity\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\ndata U a b c d\n    = L [U a b c d]               -- polymorphic recursion\n    | M (V (a,b) (Either c d))    -- mutually recursive\n    | a :+: Int                   -- infix syntax, record syntax, type synonyms\n    | R { c :: c, d :: String }   -- and primitive data types supported\n\ndata V u v = X (U v v u u) | Z u\n\nfmapU :: (a -\u003e a') -\u003e (b -\u003e b') -\u003e (c -\u003e c') -\u003e (d -\u003e d') -\u003e U a b c d -\u003e U a' b' c' d'\nfmapU = $(genFmap ''U)\n\nfoldU :: Monoid m =\u003e (a -\u003e m) -\u003e (b -\u003e m) -\u003e (c -\u003e m) -\u003e (d -\u003e m) -\u003e U a b c d -\u003e m\nfoldU = $(genFoldMap ''U)\n\ntravU :: Applicative f =\u003e (a -\u003e f a') -\u003e (b -\u003e f b') -\u003e (c -\u003e f c') -\u003e (d -\u003e f d') -\u003e U a b c d -\u003e f (U a' b' c' d')\ntravU = $(genTraverse ''U)\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Generics.Genifunctors",
          "name": "Genifunctors",
          "package": "genifunctors",
          "source": "src/Data-Generics-Genifunctors.html",
          "type": "module"
        },
        "index": {
          "description": "Generate derive generalized fmap foldMap and traverse for Bifunctors Trifunctors or functor with any arity Example data polymorphic recursion Either mutually recursive Int infix syntax record syntax type synonyms String and primitive data types supported data fmapU fmapU genFmap foldU Monoid foldU genFoldMap travU Applicative travU genTraverse",
          "hierarchy": "Data Generics Genifunctors",
          "module": "Data.Generics.Genifunctors",
          "name": "Genifunctors",
          "package": "genifunctors",
          "partial": "Genifunctors",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/genifunctors/docs/Data-Generics-Genifunctors.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate generalized \u003ccode\u003e\u003ca\u003efmap\u003c/a\u003e\u003c/code\u003e for a type\n\u003c/p\u003e\u003cpre\u003e\nbimapTuple :: (a -\u003e a') -\u003e (b -\u003e b') -\u003e (a,b) -\u003e (a',b')\nbimapTuple = $(genFmap ''(,))\n\u003c/pre\u003e",
          "module": "Data.Generics.Genifunctors",
          "name": "genFmap",
          "package": "genifunctors",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Generics-Genifunctors.html#genFmap",
          "type": "function"
        },
        "index": {
          "description": "Generate generalized fmap for type bimapTuple bimapTuple genFmap",
          "hierarchy": "Data Generics Genifunctors",
          "module": "Data.Generics.Genifunctors",
          "name": "genFmap",
          "normalized": "Name-\u003eQ Exp",
          "package": "genifunctors",
          "partial": "Fmap",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genifunctors/docs/Data-Generics-Genifunctors.html#v:genFmap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate generalized \u003ccode\u003efoldMap\u003c/code\u003e for a type\n\u003c/p\u003e\u003cpre\u003e\nfoldMapEither :: Monoid m =\u003e (a -\u003e m) -\u003e (b -\u003e m) -\u003e Either a b -\u003e m\nfoldMapEither = $(genFoldMap ''Either)\n\u003c/pre\u003e",
          "module": "Data.Generics.Genifunctors",
          "name": "genFoldMap",
          "package": "genifunctors",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Generics-Genifunctors.html#genFoldMap",
          "type": "function"
        },
        "index": {
          "description": "Generate generalized foldMap for type foldMapEither Monoid Either foldMapEither genFoldMap Either",
          "hierarchy": "Data Generics Genifunctors",
          "module": "Data.Generics.Genifunctors",
          "name": "genFoldMap",
          "normalized": "Name-\u003eQ Exp",
          "package": "genifunctors",
          "partial": "Fold Map",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genifunctors/docs/Data-Generics-Genifunctors.html#v:genFoldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGenerate generalized \u003ccode\u003etraversable\u003c/code\u003e for a type\n\u003c/p\u003e\u003cpre\u003e\ntravTriple :: Applicative f =\u003e (a -\u003e f a') -\u003e (b -\u003e f b') -\u003e (c -\u003e f c') -\u003e (a,b,c) -\u003e f (a',b',c')\ntravTriple = $(genTraverse ''(,,))\n\u003c/pre\u003e",
          "module": "Data.Generics.Genifunctors",
          "name": "genTraverse",
          "package": "genifunctors",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Data-Generics-Genifunctors.html#genTraverse",
          "type": "function"
        },
        "index": {
          "description": "Generate generalized traversable for type travTriple Applicative travTriple genTraverse",
          "hierarchy": "Data Generics Genifunctors",
          "module": "Data.Generics.Genifunctors",
          "name": "genTraverse",
          "normalized": "Name-\u003eQ Exp",
          "package": "genifunctors",
          "partial": "Traverse",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/genifunctors/docs/Data-Generics-Genifunctors.html#v:genTraverse"
      }
    }
  ]
]