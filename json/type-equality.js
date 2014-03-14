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
        "word": "type-equality"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eType equality, coercion/cast and other operations.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Type.Equality",
          "name": "Equality",
          "package": "type-equality",
          "source": "src/Data-Type-Equality.html",
          "type": "module"
        },
        "index": {
          "description": "Type equality coercion cast and other operations",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "Equality",
          "package": "type-equality",
          "partial": "Equality",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType equality. A value of \u003ccode\u003ea :=: b\u003c/code\u003e is a proof that types \u003ccode\u003ea\u003c/code\u003e and\n \u003ccode\u003eb\u003c/code\u003e are equal. By pattern matching on \u003ccode\u003eRefl\u003c/code\u003e this fact is\n introduced to the type checker.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": ":=:",
          "package": "type-equality",
          "source": "src/Data-Type-Equality.html#%3A%3D%3A",
          "type": "data"
        },
        "index": {
          "description": "Type equality value of is proof that types and are equal By pattern matching on Refl this fact is introduced to the type checker",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": ":=:",
          "package": "type-equality",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#t::-61-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for constructing equality proofs. This is as close\n as we can get to decidable equality on types. Note that \u003ccode\u003ef\u003c/code\u003e must be\n a GADT to be able to define \u003ccode\u003e\u003ca\u003eeqT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "EqT",
          "package": "type-equality",
          "source": "src/Data-Type-Equality.html#EqT",
          "type": "class"
        },
        "index": {
          "description": "type class for constructing equality proofs This is as close as we can get to decidable equality on types Note that must be GADT to be able to define eqT",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "EqT",
          "package": "type-equality",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#t:EqT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for constructing equality proofs for type\n constructor with two parameters. Can be useful when representing\n relations between types.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "EqT2",
          "package": "type-equality",
          "source": "src/Data-Type-Equality.html#EqT2",
          "type": "class"
        },
        "index": {
          "description": "type class for constructing equality proofs for type constructor with two parameters Can be useful when representing relations between types",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "EqT2",
          "package": "type-equality",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#t:EqT2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for constructing equality proofs for type\n constructor with three parameters. If you find a use for this, let\n me know.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "EqT3",
          "package": "type-equality",
          "source": "src/Data-Type-Equality.html#EqT3",
          "type": "class"
        },
        "index": {
          "description": "type class for constructing equality proofs for type constructor with three parameters If you find use for this let me know",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "EqT3",
          "package": "type-equality",
          "partial": "Eq",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#t:EqT3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Equality",
          "name": "Refl",
          "package": "type-equality",
          "signature": "a :=: a",
          "source": "src/Data-Type-Equality.html#%3A%3D%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "Refl",
          "package": "type-equality",
          "partial": "Refl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:Refl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoerce a type to another using an equality proof.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "coerce",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e a -\u003e b",
          "source": "src/Data-Type-Equality.html#coerce",
          "type": "function"
        },
        "index": {
          "description": "Coerce type to another using an equality proof",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "coerce",
          "normalized": "(a b)-\u003ea-\u003eb",
          "package": "type-equality",
          "signature": "(a b)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:coerce"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is congruential.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "cong",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e f a :=: f b",
          "source": "src/Data-Type-Equality.html#cong",
          "type": "function"
        },
        "index": {
          "description": "Equality is congruential",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "cong",
          "normalized": "(a b)-\u003ec a c b",
          "package": "type-equality",
          "signature": "(a b)-\u003ef a f b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:cong"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCongruence for type constructors with two parameters.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "cong2",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e (c :=: d) -\u003e f a c :=: f b d",
          "source": "src/Data-Type-Equality.html#cong2",
          "type": "function"
        },
        "index": {
          "description": "Congruence for type constructors with two parameters",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "cong2",
          "normalized": "(a b)-\u003e(c d)-\u003ee a c e b d",
          "package": "type-equality",
          "signature": "(a b)-\u003e(c d)-\u003ef a c f b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:cong2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCongruence for type constructors with three parameters.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "cong3",
          "package": "type-equality",
          "signature": "(a :=: a') -\u003e (b :=: b') -\u003e (c :=: c') -\u003e f a b c :=: f a' b' c'",
          "source": "src/Data-Type-Equality.html#cong3",
          "type": "function"
        },
        "index": {
          "description": "Congruence for type constructors with three parameters",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "cong3",
          "normalized": "(a b)-\u003e(c d)-\u003e(e f)-\u003eg a c e g b d f",
          "package": "type-equality",
          "signature": "(a a')-\u003e(b b')-\u003e(c c')-\u003ef a b c f a' b' c'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:cong3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Equality",
          "name": "eqT",
          "package": "type-equality",
          "signature": "f a -\u003e f b -\u003e Maybe (a :=: b)",
          "source": "src/Data-Type-Equality.html#eqT",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "eqT",
          "normalized": "a b-\u003ea c-\u003eMaybe(b c)",
          "package": "type-equality",
          "signature": "f a-\u003ef b-\u003eMaybe(a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:eqT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Equality",
          "name": "eqT2",
          "package": "type-equality",
          "signature": "f a b -\u003e f c d -\u003e (Maybe (a :=: c), Maybe (b :=: d))",
          "source": "src/Data-Type-Equality.html#eqT2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "eqT2",
          "normalized": "a b c-\u003ea d e-\u003e(Maybe(b d),Maybe(c e))",
          "package": "type-equality",
          "signature": "f a b-\u003ef c d-\u003e(Maybe(a c),Maybe(b d))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:eqT2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Type.Equality",
          "name": "eqT3",
          "package": "type-equality",
          "signature": "f a b c -\u003e f a' b' c' -\u003e (Maybe (a :=: a'), Maybe (b :=: b'), Maybe (c :=: c'))",
          "source": "src/Data-Type-Equality.html#eqT3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "eqT3",
          "normalized": "a b c d-\u003ea e f g-\u003e(Maybe(b e),Maybe(c f),Maybe(d g))",
          "package": "type-equality",
          "signature": "f a b c-\u003ef a' b' c'-\u003e(Maybe(a a'),Maybe(b b'),Maybe(c c'))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:eqT3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is substitutive. This is defined directly, but can also\n be defined as \u003ccode\u003e\u003ca\u003ecoerce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "subst",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e f a -\u003e f b",
          "source": "src/Data-Type-Equality.html#subst",
          "type": "function"
        },
        "index": {
          "description": "Equality is substitutive This is defined directly but can also be defined as coerce cong",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "subst",
          "normalized": "(a b)-\u003ec a-\u003ec b",
          "package": "type-equality",
          "signature": "(a b)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:subst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubstitution inside nested type constructors. This is equivalent \n to \u003ccode\u003e\u003ca\u003ecoerce\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econg\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e.\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003econg\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "subst2",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e f (g a) -\u003e f (g b)",
          "source": "src/Data-Type-Equality.html#subst2",
          "type": "function"
        },
        "index": {
          "description": "Substitution inside nested type constructors This is equivalent to coerce cong cong",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "subst2",
          "normalized": "(a b)-\u003ec(d a)-\u003ec(d b)",
          "package": "type-equality",
          "signature": "(a b)-\u003ef(g a)-\u003ef(g b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:subst2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is symmetric.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "sym",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e b :=: a",
          "source": "src/Data-Type-Equality.html#sym",
          "type": "function"
        },
        "index": {
          "description": "Equality is symmetric",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "sym",
          "normalized": "(a b)-\u003eb a",
          "package": "type-equality",
          "signature": "(a b)-\u003eb a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:sym"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality is transitive. This is the same as (\u003e\u003e\u003e) from the \u003ccode\u003e\u003ca\u003eCategory\u003c/a\u003e\u003c/code\u003e\n instance, but also works in GHC 6.8.\n\u003c/p\u003e",
          "module": "Data.Type.Equality",
          "name": "trans",
          "package": "type-equality",
          "signature": "(a :=: b) -\u003e (b :=: c) -\u003e a :=: c",
          "source": "src/Data-Type-Equality.html#trans",
          "type": "function"
        },
        "index": {
          "description": "Equality is transitive This is the same as from the Category instance but also works in GHC",
          "hierarchy": "Data Type Equality",
          "module": "Data.Type.Equality",
          "name": "trans",
          "normalized": "(a b)-\u003e(b c)-\u003ea c",
          "package": "type-equality",
          "signature": "(a b)-\u003e(b c)-\u003ea c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/type-equality/docs/Data-Type-Equality.html#v:trans"
      }
    }
  ]
]