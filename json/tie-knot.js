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
        "word": "tie-knot"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for tying the knot on data structures that reference each other by\n some kind of keys. The \u003ccode\u003e\u003ca\u003etie\u003c/a\u003e\u003c/code\u003e function replaces all such references with the actual\n value, creating possibly recursive or cyclic data structures.\n\u003c/p\u003e\u003cp\u003eThe module re-exports a part of the recursion-schemes package.\n\u003c/p\u003e\u003cp\u003eAn example how to construct a structure with circular dependencies:\n\u003c/p\u003e\u003cpre\u003e data Person = Person { name :: String, loves :: [Person] }\n -- Define a variant of Person where the recursive type\n -- is given as a parameter and the embedding function.\n data Loves t = Loves { _name :: String, _loves :: [t] }\n type instance Base Person = Loves\n instance Unfoldable Person where\n   embed ~(Loves n ps)    = Person n ps\n\n -- The easisest way to get 'Foldable' + 'Functor' is to implement\n -- 'Traversable' and then just use the default implementations.\n instance T.Traversable Loves where\n     traverse f (Loves n ns) = Loves n \u003c$\u003e T.traverse f ns\n\n instance Functor Loves where\n     fmap = T.fmapDefault\n instance F.Foldable Loves where\n     foldMap = T.foldMapDefault\n\n -- Let's create a person with cicrular dependencies:\n alice :: Person\n alice = fromJust . Map.lookup \"Alice\" .\n             tie' . Map.fromList . map (\\l -\u003e (_name l, l)) $ lst\n   where\n     lst = [ Loves \"Alice\" [\"Bob\", \"cat\"]\n           , Loves \"Bob\"   [\"Alice\"]\n           -- you may disagree, but the cat thinks of itself as Person\n           , Loves \"cat\"   [\"cat\"]\n           ]\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Data.Knot",
          "name": "Knot",
          "package": "tie-knot",
          "source": "src/Data-Knot.html",
          "type": "module"
        },
        "index": {
          "description": "Module for tying the knot on data structures that reference each other by some kind of keys The tie function replaces all such references with the actual value creating possibly recursive or cyclic data structures The module re-exports part of the recursion-schemes package An example how to construct structure with circular dependencies data Person Person name String loves Person Define variant of Person where the recursive type is given as parameter and the embedding function data Loves Loves name String loves type instance Base Person Loves instance Unfoldable Person where embed Loves ps Person ps The easisest way to get Foldable Functor is to implement Traversable and then just use the default implementations instance T.Traversable Loves where traverse Loves ns Loves T.traverse ns instance Functor Loves where fmap T.fmapDefault instance F.Foldable Loves where foldMap T.foldMapDefault Let create person with cicrular dependencies alice Person alice fromJust Map.lookup Alice tie Map.fromList map name lst where lst Loves Alice Bob cat Loves Bob Alice you may disagree but the cat thinks of itself as Person Loves cat cat",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "Knot",
          "package": "tie-knot",
          "partial": "Knot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knot",
          "name": "Base",
          "package": "tie-knot",
          "signature": "Base",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "Base",
          "package": "tie-knot",
          "partial": "Base",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#t:Base"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepresents a set of data \u003ccode\u003ev\u003c/code\u003e that reference each other\n using keys of type \u003ccode\u003ek\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "RefMap",
          "package": "tie-knot",
          "source": "src/Data-Knot.html#RefMap",
          "type": "type"
        },
        "index": {
          "description": "Represents set of data that reference each other using keys of type",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "RefMap",
          "package": "tie-knot",
          "partial": "Ref Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#t:RefMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePossible errors when tying the knot.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "TieError",
          "package": "tie-knot",
          "source": "src/Data-Knot.html#TieError",
          "type": "data"
        },
        "index": {
          "description": "Possible errors when tying the knot",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "TieError",
          "package": "tie-knot",
          "partial": "Tie Error",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#t:TieError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knot",
          "name": "Unfoldable",
          "package": "tie-knot",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "Unfoldable",
          "package": "tie-knot",
          "partial": "Unfoldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#t:Unfoldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA value with key k1 referenced non-existent key k2.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "MissingKey",
          "package": "tie-knot",
          "signature": "MissingKey k k",
          "source": "src/Data-Knot.html#TieError",
          "type": "function"
        },
        "index": {
          "description": "value with key k1 referenced non-existent key k2",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "MissingKey",
          "package": "tie-knot",
          "partial": "Missing Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#v:MissingKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Knot",
          "name": "embed",
          "package": "tie-knot",
          "signature": "Base t t -\u003e t",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "embed",
          "normalized": "Base a a-\u003ea",
          "package": "tie-knot",
          "signature": "Base t t-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#v:embed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck the loader for consistency, i.e. if all referenced keys\n have a corresponding value. Values need to implement \u003ccode\u003e\u003ca\u003eFoldable\u003c/a\u003e\u003c/code\u003e\n that traverses over all referenced keys.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "isConsistent",
          "package": "tie-knot",
          "signature": "RefMap k v-\u003e Either (TieError k) (RefMap k v)",
          "type": "function"
        },
        "index": {
          "description": "Check the loader for consistency i.e if all referenced keys have corresponding value Values need to implement Foldable that traverses over all referenced keys",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "isConsistent",
          "normalized": "RefMap a b-\u003eEither(TieError a)(RefMap a b)",
          "package": "tie-knot",
          "partial": "Consistent",
          "signature": "RefMap k v-\u003eEither(TieError k)(RefMap k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#v:isConsistent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks consistency by calling \u003ccode\u003e\u003ca\u003eisConsistent\u003c/a\u003e\u003c/code\u003e and then and ties the knot using \u003ccode\u003e\u003ca\u003etie'\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "tie",
          "package": "tie-knot",
          "signature": "RefMap k (Base v) -\u003e Either (TieError k) (Map k v)",
          "source": "src/Data-Knot.html#tie",
          "type": "function"
        },
        "index": {
          "description": "Checks consistency by calling isConsistent and then and ties the knot using tie",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "tie",
          "normalized": "RefMap a(Base b)-\u003eEither(TieError a)(Map a b)",
          "package": "tie-knot",
          "signature": "RefMap k(Base v)-\u003eEither(TieError k)(Map k v)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#v:tie"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTies the knot without checking consistency.\n If the references are inconsistent, an exception is raised.\n\u003c/p\u003e",
          "module": "Data.Knot",
          "name": "tie'",
          "package": "tie-knot",
          "signature": "RefMap k (Base v) -\u003e Map k v",
          "source": "src/Data-Knot.html#tie%27",
          "type": "function"
        },
        "index": {
          "description": "Ties the knot without checking consistency If the references are inconsistent an exception is raised",
          "hierarchy": "Data Knot",
          "module": "Data.Knot",
          "name": "tie'",
          "normalized": "RefMap a(Base b)-\u003eMap a b",
          "package": "tie-knot",
          "signature": "RefMap k(Base v)-\u003eMap k v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tie-knot/docs/Data-Knot.html#v:tie-39-"
      }
    }
  ]
]