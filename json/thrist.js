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
        "word": "thrist"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.List",
          "name": "List",
          "package": "thrist",
          "source": "src/Data-Thrist-List.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Thrist List",
          "module": "Data.Thrist.List",
          "name": "List",
          "package": "thrist",
          "partial": "List",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-List.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.List",
          "name": "List",
          "package": "thrist",
          "source": "src/Data-Thrist-List.html#List",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Thrist List",
          "module": "Data.Thrist.List",
          "name": "List",
          "package": "thrist",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-List.html#t:List"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.List",
          "name": "El",
          "package": "thrist",
          "signature": "a -\u003e List a a",
          "source": "src/Data-Thrist-List.html#List",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist List",
          "module": "Data.Thrist.List",
          "name": "El",
          "normalized": "a-\u003eList a a",
          "package": "thrist",
          "partial": "El",
          "signature": "a-\u003eList a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-List.html#v:El"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.Monad",
          "name": "Monad",
          "package": "thrist",
          "source": "src/Data-Thrist-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Thrist Monad",
          "module": "Data.Thrist.Monad",
          "name": "Monad",
          "package": "thrist",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.Monad",
          "name": "Monad'",
          "package": "thrist",
          "source": "src/Data-Thrist-Monad.html#Monad%27",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Thrist Monad",
          "module": "Data.Thrist.Monad",
          "name": "Monad'",
          "package": "thrist",
          "partial": "Monad'",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-Monad.html#t:Monad-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.Monad",
          "name": "Digest",
          "package": "thrist",
          "signature": "(a -\u003e m b) -\u003e Monad' m a b",
          "source": "src/Data-Thrist-Monad.html#Monad%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist Monad",
          "module": "Data.Thrist.Monad",
          "name": "Digest",
          "normalized": "(a-\u003eb c)-\u003eMonad' b a c",
          "package": "thrist",
          "partial": "Digest",
          "signature": "(a-\u003em b)-\u003eMonad' m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-Monad.html#v:Digest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist.Monad",
          "name": "Feed",
          "package": "thrist",
          "signature": "m b -\u003e Monad' m a b",
          "source": "src/Data-Thrist-Monad.html#Monad%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist Monad",
          "module": "Data.Thrist.Monad",
          "name": "Feed",
          "normalized": "a b-\u003eMonad' a c b",
          "package": "thrist",
          "partial": "Feed",
          "signature": "m b-\u003eMonad' m a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist-Monad.html#v:Feed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist",
          "name": "Thrist",
          "package": "thrist",
          "source": "src/Data-Thrist.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Thrist",
          "package": "thrist",
          "partial": "Thrist",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA newtype wrapper, defined for convenience, that \u003ca\u003eswaps\u003c/a\u003e the two type\n variables of a binary type. Can be used to reverse a Thrist using\n \u003ccode\u003e\u003ca\u003efoldlThrist\u003c/a\u003e\u003c/code\u003e. See examples.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "Flipped",
          "package": "thrist",
          "source": "src/Data-Thrist.html#Flipped",
          "type": "newtype"
        },
        "index": {
          "description": "newtype wrapper defined for convenience that swaps the two type variables of binary type Can be used to reverse Thrist using foldlThrist See examples",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Flipped",
          "package": "thrist",
          "partial": "Flipped",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#t:Flipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-threaded list of binary polymorphic types.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "Thrist",
          "package": "thrist",
          "source": "src/Data-Thrist.html#Thrist",
          "type": "data"
        },
        "index": {
          "description": "type-threaded list of binary polymorphic types",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Thrist",
          "package": "thrist",
          "partial": "Thrist",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#t:Thrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist",
          "name": "Cons",
          "package": "thrist",
          "signature": "(a `arr` b) -\u003e Thrist arr b c -\u003e Thrist arr a c",
          "source": "src/Data-Thrist.html#Thrist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Cons",
          "normalized": "(a b c)-\u003eThrist b c d-\u003eThrist b a d",
          "package": "thrist",
          "partial": "Cons",
          "signature": "(a arr b)-\u003eThrist arr b c-\u003eThrist arr a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:Cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist",
          "name": "Flipped",
          "package": "thrist",
          "signature": "Flipped",
          "source": "src/Data-Thrist.html#Flipped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Flipped",
          "package": "thrist",
          "partial": "Flipped",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:Flipped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist",
          "name": "Nil",
          "package": "thrist",
          "signature": "Thrist arr a a",
          "source": "src/Data-Thrist.html#Thrist",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "Nil",
          "package": "thrist",
          "partial": "Nil",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:Nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to (++) for thrists.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "appendThrist",
          "package": "thrist",
          "signature": "Thrist arr a b -\u003e Thrist arr b c -\u003e Thrist arr a c",
          "source": "src/Data-Thrist.html#appendThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to for thrists",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "appendThrist",
          "normalized": "Thrist a b c-\u003eThrist a c d-\u003eThrist a b d",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "Thrist arr a b-\u003eThrist arr b c-\u003eThrist arr a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:appendThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003efoldM\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eThrist\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "foldMThrist",
          "package": "thrist",
          "signature": "(forall j k.  (a `brr` j) -\u003e (j `arr` k) -\u003e m (a `brr` k)) -\u003e (a `brr` b) -\u003e Thrist arr b c -\u003e m (a `brr` c)",
          "source": "src/Data-Thrist.html#foldMThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to foldM on Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "foldMThrist",
          "normalized": "(a b c(d e b)-\u003e(b f g)-\u003eh(d e g))-\u003e(d e i)-\u003eThrist f i j-\u003eh(d e j)",
          "package": "thrist",
          "partial": "MThrist",
          "signature": "(forall j k.(a brr j)-\u003e(j arr k)-\u003em(a brr k))-\u003e(a brr b)-\u003eThrist arr b c-\u003em(a brr c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:foldMThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003efoldl1\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eThrist\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "foldl1Thrist",
          "package": "thrist",
          "signature": "(forall i j k.  (i `arr` j) -\u003e (j `arr` k) -\u003e i `arr` k) -\u003e Thrist arr a b -\u003e a `arr` b",
          "source": "src/Data-Thrist.html#foldl1Thrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to foldl1 for Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "foldl1Thrist",
          "normalized": "(a b c d(b e c)-\u003e(c e f)-\u003eb e f)-\u003eThrist e g h-\u003eg e h",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "(forall i j k.(i arr j)-\u003e(j arr k)-\u003ei arr k)-\u003eThrist arr a b-\u003ea arr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:foldl1Thrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003efoldl\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eThrist\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "foldlThrist",
          "package": "thrist",
          "signature": "(forall j k.  (a `brr` j) -\u003e (j `arr` k) -\u003e a `brr` k) -\u003e (a `brr` b) -\u003e Thrist arr b c -\u003e a `brr` c",
          "source": "src/Data-Thrist.html#foldlThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to foldl for Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "foldlThrist",
          "normalized": "(a b c(d e b)-\u003e(b f g)-\u003ed e g)-\u003e(d e h)-\u003eThrist f h i-\u003ed e i",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "(forall j k.(a brr j)-\u003e(j arr k)-\u003ea brr k)-\u003e(a brr b)-\u003eThrist arr b c-\u003ea brr c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:foldlThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003efoldr1\u003c/a\u003e\u003c/code\u003e for \u003ccode\u003e\u003ca\u003eThrist\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "foldr1Thrist",
          "package": "thrist",
          "signature": "(forall i j k.  (i `arr` j) -\u003e (j `arr` k) -\u003e i `arr` k) -\u003e Thrist arr a b -\u003e a `arr` b",
          "source": "src/Data-Thrist.html#foldr1Thrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to foldr1 for Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "foldr1Thrist",
          "normalized": "(a b c d(b e c)-\u003e(c e f)-\u003eb e f)-\u003eThrist e g h-\u003eg e h",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "(forall i j k.(i arr j)-\u003e(j arr k)-\u003ei arr k)-\u003eThrist arr a b-\u003ea arr b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:foldr1Thrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e for thrists. Takes a combining function, a value to\n replace Nil, and a thrist, returning some new binary type.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "foldrThrist",
          "package": "thrist",
          "signature": "(forall i j.  (i `arr` j) -\u003e (j `brr` c) -\u003e i `brr` c) -\u003e (b `brr` c) -\u003e Thrist arr a b -\u003e a `brr` c",
          "source": "src/Data-Thrist.html#foldrThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to foldr for thrists Takes combining function value to replace Nil and thrist returning some new binary type",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "foldrThrist",
          "normalized": "(a b c(b d e)-\u003e(e f g)-\u003eb f g)-\u003e(h f g)-\u003eThrist d i h-\u003ei f g",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "(forall i j.(i arr j)-\u003e(j brr c)-\u003ei brr c)-\u003e(b brr c)-\u003eThrist arr a b-\u003ea brr c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:foldrThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the length of the Thrist.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "lengthThrist",
          "package": "thrist",
          "signature": "Thrist arr a b -\u003e Int",
          "source": "src/Data-Thrist.html#lengthThrist",
          "type": "function"
        },
        "index": {
          "description": "Returns the length of the Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "lengthThrist",
          "normalized": "Thrist a b c-\u003eInt",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "Thrist arr a b-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:lengthThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emapM\u003c/a\u003e\u003c/code\u003e on \u003ccode\u003e\u003ca\u003eThrist\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "mapMThrist",
          "package": "thrist",
          "signature": "(forall i j.  (i `brr` j) -\u003e m (i `arr` j)) -\u003e Thrist brr a b -\u003e m (Thrist arr a b)",
          "source": "src/Data-Thrist.html#mapMThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to mapM on Thrist",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "mapMThrist",
          "normalized": "(a b c(b d e)-\u003ef(b g e))-\u003eThrist d h i-\u003ef(Thrist g h i)",
          "package": "thrist",
          "partial": "MThrist",
          "signature": "(forall i j.(i brr j)-\u003em(i arr j))-\u003eThrist brr a b-\u003em(Thrist arr a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:mapMThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003emap\u003c/a\u003e\u003c/code\u003e for thrists. Takes a function from one binary type to\n another and applies it to each thrist element. For example this could\n convert a thrist of (a,b) into a thrist of Either a b:\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "mapThrist",
          "package": "thrist",
          "signature": "(forall i j.  (i `brr` j) -\u003e i `arr` j) -\u003e Thrist brr a b -\u003e Thrist arr a b",
          "source": "src/Data-Thrist.html#mapThrist",
          "type": "function"
        },
        "index": {
          "description": "Equivalent to map for thrists Takes function from one binary type to another and applies it to each thrist element For example this could convert thrist of into thrist of Either",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "mapThrist",
          "normalized": "(a b c(b d e)-\u003eb f e)-\u003eThrist d g h-\u003eThrist f g h",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "(forall i j.(i brr j)-\u003ei arr j)-\u003eThrist brr a b-\u003eThrist arr a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:mapThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e when the Thrist is \u003ccode\u003e\u003ca\u003eNil\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Thrist",
          "name": "nullThrist",
          "package": "thrist",
          "signature": "Thrist arr a b -\u003e Bool",
          "source": "src/Data-Thrist.html#nullThrist",
          "type": "function"
        },
        "index": {
          "description": "Returns True when the Thrist is Nil",
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "nullThrist",
          "normalized": "Thrist a b c-\u003eBool",
          "package": "thrist",
          "partial": "Thrist",
          "signature": "Thrist arr a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:nullThrist"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Thrist",
          "name": "unflip",
          "package": "thrist",
          "signature": "m b a",
          "source": "src/Data-Thrist.html#Flipped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Thrist",
          "module": "Data.Thrist",
          "name": "unflip",
          "package": "thrist",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/thrist/docs/Data-Thrist.html#v:unflip"
      }
    }
  ]
]