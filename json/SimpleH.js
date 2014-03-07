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
        "word": "SimpleH"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module describing applicative functors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algebra.Applicative",
          "name": "Applicative",
          "package": "SimpleH",
          "source": "src/Algebra-Applicative.html",
          "type": "module"
        },
        "index": {
          "description": "module describing applicative functors",
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "Applicative",
          "package": "SimpleH",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "Applicative",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#Applicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "Applicative",
          "package": "SimpleH",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for applicative functors with actions executed in the reverse order\n\u003c/p\u003e",
          "module": "Algebra.Applicative",
          "name": "Backwards",
          "package": "SimpleH",
          "source": "src/Algebra-Applicative.html#Backwards",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for applicative functors with actions executed in the reverse order",
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "Backwards",
          "package": "SimpleH",
          "partial": "Backwards",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#t:Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type for lists with zipping Applicative instances, such that\n\u003ccode\u003eZipList [f1,...,fn] \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ZipList [x1,...,xn] == ZipList [f1 x1,...,fn xn]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Algebra.Applicative",
          "name": "ZipList",
          "package": "SimpleH",
          "source": "src/Algebra-Applicative.html#ZipList",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper type for lists with zipping Applicative instances such that ZipList f1 fn ZipList x1 xn ZipList f1 x1 fn xn",
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "ZipList",
          "package": "SimpleH",
          "partial": "Zip List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#t:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Tree equivalent to ZipList\n\u003c/p\u003e",
          "module": "Algebra.Applicative",
          "name": "ZipTree",
          "package": "SimpleH",
          "source": "src/Algebra-Applicative.html#ZipTree",
          "type": "newtype"
        },
        "index": {
          "description": "The Tree equivalent to ZipList",
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "ZipTree",
          "package": "SimpleH",
          "partial": "Zip Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#t:ZipTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "(*\u003e)",
          "package": "SimpleH",
          "signature": "f b -\u003e f a -\u003e f a",
          "source": "src/Algebra-Applicative.html#%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "(*\u003e) *\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "SimpleH",
          "signature": "f b-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "(\u003c*)",
          "package": "SimpleH",
          "signature": "f a -\u003e f b -\u003e f a",
          "source": "src/Algebra-Applicative.html#%3C%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "SimpleH",
          "signature": "f a-\u003ef b-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "(\u003c**\u003e)",
          "package": "SimpleH",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Applicative.html#%3C%2A%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "(\u003c**\u003e) \u003c**\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "SimpleH",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:-60--42--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "(\u003c*\u003e)",
          "package": "SimpleH",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Classes.html#%3C%2A%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "SimpleH",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "Backwards",
          "package": "SimpleH",
          "signature": "Backwards",
          "source": "src/Algebra-Applicative.html#Backwards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "Backwards",
          "package": "SimpleH",
          "partial": "Backwards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "ZipList",
          "package": "SimpleH",
          "signature": "ZipList",
          "source": "src/Algebra-Applicative.html#ZipList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "ZipList",
          "package": "SimpleH",
          "partial": "Zip List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "ZipTree",
          "package": "SimpleH",
          "signature": "ZipTree (Tree a)",
          "source": "src/Algebra-Applicative.html#ZipTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "ZipTree",
          "package": "SimpleH",
          "partial": "Zip Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:ZipTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "ap",
          "package": "SimpleH",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Applicative.html#ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "SimpleH",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "between",
          "package": "SimpleH",
          "signature": "f b -\u003e f c -\u003e f a -\u003e f a",
          "source": "src/Algebra-Applicative.html#between",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "between",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "SimpleH",
          "signature": "f b-\u003ef c-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:between"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Algebra.Applicative\",\"Algebra.Foldable\"]",
          "name": "filter",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e f a",
          "source": "src/Algebra-Foldable.html#filter",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:filter\",\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:filter\"]"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003ec a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "for_",
          "package": "SimpleH",
          "signature": "t a -\u003e (a -\u003e f b) -\u003e f ()",
          "source": "src/Algebra-Applicative.html#for_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "for_",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "SimpleH",
          "signature": "t a-\u003e(a-\u003ef b)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:for_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "forever",
          "package": "SimpleH",
          "signature": "f a -\u003e f b",
          "source": "src/Algebra-Applicative.html#forever",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "forever",
          "normalized": "a b-\u003ea c",
          "package": "SimpleH",
          "signature": "f a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:forever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "forwards",
          "package": "SimpleH",
          "signature": "f a",
          "source": "src/Algebra-Applicative.html#Backwards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "forwards",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:forwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "getZipList",
          "package": "SimpleH",
          "signature": "[a]",
          "source": "src/Algebra-Applicative.html#ZipList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "getZipList",
          "normalized": "[a]",
          "package": "SimpleH",
          "partial": "Zip List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:getZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "liftA",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Applicative.html#liftA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "liftA2",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Algebra-Applicative.html#liftA2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "liftA2",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "liftA3",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e c -\u003e d) -\u003e f a -\u003e f b -\u003e f c -\u003e f d",
          "source": "src/Algebra-Applicative.html#liftA3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "liftA3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed)-\u003ee a-\u003ee b-\u003ee c-\u003ee d",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003ec-\u003ed)-\u003ef a-\u003ef b-\u003ef c-\u003ef d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "liftA4",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e c -\u003e d -\u003e e) -\u003e f a -\u003e f b -\u003e f c -\u003e f d -\u003e f e",
          "source": "src/Algebra-Applicative.html#liftA4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "liftA4",
          "normalized": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003ec-\u003ed-\u003ee)-\u003ef a-\u003ef b-\u003ef c-\u003ef d-\u003ef e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:liftA4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "plusA",
          "package": "SimpleH",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Algebra-Applicative.html#plusA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "plusA",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "SimpleH",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:plusA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "sequence_",
          "package": "SimpleH",
          "signature": "t (f a) -\u003e f ()",
          "source": "src/Algebra-Applicative.html#sequence_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "sequence_",
          "normalized": "a(b c)-\u003eb()",
          "package": "SimpleH",
          "signature": "t(f a)-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:sequence_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "traverse_",
          "package": "SimpleH",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f ()",
          "source": "src/Algebra-Applicative.html#traverse_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "traverse_",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb()",
          "package": "SimpleH",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:traverse_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Applicative",
          "name": "zeroA",
          "package": "SimpleH",
          "signature": "f a",
          "source": "src/Algebra-Applicative.html#zeroA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Applicative",
          "module": "Algebra.Applicative",
          "name": "zeroA",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Applicative.html#v:zeroA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "Arrow",
          "package": "SimpleH",
          "source": "src/Algebra-Arrow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "Arrow",
          "package": "SimpleH",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "Apply",
          "package": "SimpleH",
          "source": "src/Algebra-Arrow.html#Apply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "Apply",
          "package": "SimpleH",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "Arrow",
          "package": "SimpleH",
          "source": "src/Algebra-Arrow.html#Arrow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "Arrow",
          "package": "SimpleH",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#t:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "Kleisli",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Base.html#Kleisli",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "Kleisli",
          "package": "SimpleH",
          "partial": "Kleisli",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#t:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "ListA",
          "package": "SimpleH",
          "source": "src/Algebra-Arrow.html#ListA",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "ListA",
          "package": "SimpleH",
          "partial": "List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#t:ListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "(\u003e\u003e^)",
          "package": "SimpleH",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Algebra-Arrow.html#%3E%3E%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "(\u003e\u003e^) \u003e\u003e^",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "SimpleH",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:-62--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "(^\u003e\u003e)",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f b c -\u003e f a c",
          "source": "src/Algebra-Arrow.html#%5E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "(^\u003e\u003e) ^\u003e\u003e",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef b c-\u003ef a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:-94--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Algebra.Arrow\",\"Algebra.Monad\"]",
          "name": "Kleisli",
          "package": "SimpleH",
          "signature": "Kleisli",
          "source": "src/Algebra-Monad-Base.html#Kleisli",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:Kleisli\",\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:Kleisli\"]"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "Kleisli",
          "package": "SimpleH",
          "partial": "Kleisli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "ListA",
          "package": "SimpleH",
          "signature": "ListA",
          "source": "src/Algebra-Arrow.html#ListA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "ListA",
          "package": "SimpleH",
          "partial": "List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:ListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "app",
          "package": "SimpleH",
          "signature": "k a b -\u003e k a b",
          "source": "src/Algebra-Arrow.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "app",
          "normalized": "a b c-\u003ea b c",
          "package": "SimpleH",
          "signature": "k a b-\u003ek a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "apply",
          "package": "SimpleH",
          "signature": "k (k a b, a) b",
          "source": "src/Algebra-Arrow.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "apply",
          "normalized": "a(a b c,b)c",
          "package": "SimpleH",
          "signature": "k(k a b,a)b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "arr",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e k a b",
          "source": "src/Algebra-Arrow.html#arr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "arr",
          "normalized": "(a-\u003eb)-\u003ec a b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ek a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "comapA",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e Flip arr c b -\u003e Flip arr c a",
          "source": "src/Algebra-Arrow.html#comapA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "comapA",
          "normalized": "(a-\u003eb)-\u003eFlip c d b-\u003eFlip c d a",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003eFlip arr c b-\u003eFlip arr c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:comapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "dup",
          "package": "SimpleH",
          "signature": "arr a (a, a)",
          "source": "src/Algebra-Arrow.html#dup",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "dup",
          "normalized": "a b(b,b)",
          "package": "SimpleH",
          "signature": "arr a(a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:dup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Algebra.Arrow\",\"Algebra.Monad\"]",
          "name": "runKleisli",
          "package": "SimpleH",
          "signature": "a -\u003e m b",
          "source": "src/Algebra-Monad-Base.html#Kleisli",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:runKleisli\",\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:runKleisli\"]"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "runKleisli",
          "normalized": "a-\u003eb c",
          "package": "SimpleH",
          "partial": "Kleisli",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:runKleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Arrow",
          "name": "runListA",
          "package": "SimpleH",
          "signature": "k [a] [b]",
          "source": "src/Algebra-Arrow.html#ListA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Arrow",
          "module": "Algebra.Arrow",
          "name": "runListA",
          "normalized": "a[b][c]",
          "package": "SimpleH",
          "partial": "List",
          "signature": "k[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Arrow.html#v:runListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Core",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Core",
          "package": "SimpleH",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": ":*:",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#%3A%2A%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": ":*:",
          "package": "SimpleH",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": ":+:",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#%3A%2B%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": ":+:",
          "package": "SimpleH",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid on Maybes, where the sum is the leftmost non-Nothing value. \n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Accum",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Accum",
          "type": "newtype"
        },
        "index": {
          "description": "monoid on Maybes where the sum is the leftmost non-Nothing value",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Accum",
          "package": "SimpleH",
          "partial": "Accum",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA space-efficient representation of a Word8 vector, supporting many\n efficient operations.  A \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e contains 8-bit characters only.\n\u003c/p\u003e\u003cp\u003eInstances of Eq, Ord, Read, Show, Data, Typeable\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "ByteString",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "description": "space-efficient representation of Word8 vector supporting many efficient operations ByteString contains bit characters only Instances of Eq Ord Read Show Data Typeable",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "ByteString",
          "package": "SimpleH",
          "partial": "Byte String",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:ByteString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Category",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Category",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Category",
          "package": "SimpleH",
          "partial": "Category",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Choice",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Choice",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Choice",
          "package": "SimpleH",
          "partial": "Choice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of a monoid is the same as the original, with arguments reversed \n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Dual",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Dual",
          "type": "newtype"
        },
        "index": {
          "description": "The dual of monoid is the same as the original with arguments reversed",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Dual",
          "package": "SimpleH",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid on category endomorphisms under composition \n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Endo",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Endo",
          "type": "newtype"
        },
        "index": {
          "description": "monoid on category endomorphisms under composition",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Endo",
          "package": "SimpleH",
          "partial": "Endo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Identity Functor\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Id",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "The Identity Functor",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Id",
          "package": "SimpleH",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Interleave",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Interleave",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Interleave",
          "package": "SimpleH",
          "partial": "Interleave",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Max monoid, where \u003ccode\u003e(+) =~ max\u003c/code\u003e \n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Max",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Max",
          "type": "newtype"
        },
        "index": {
          "description": "The Max monoid where max",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Max",
          "package": "SimpleH",
          "partial": "Max",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid is a semigroup with a null element such that \u003ccode\u003ezero + a == a + zero == a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Monoid",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Monoid",
          "type": "class"
        },
        "index": {
          "description": "monoid is semigroup with null element such that zero zero",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Monoid",
          "package": "SimpleH",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordered list. The semigroup instance merges two lists so that\n the result remains in ascending order.\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "OrdList",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#OrdList",
          "type": "newtype"
        },
        "index": {
          "description": "An ordered list The semigroup instance merges two lists so that the result remains in ascending order",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "OrdList",
          "package": "SimpleH",
          "partial": "Ord List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:OrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Orderable",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Orderable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Orderable",
          "package": "SimpleH",
          "partial": "Orderable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Orderable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Product monoid \n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Product",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Product",
          "type": "newtype"
        },
        "index": {
          "description": "The Product monoid",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Product",
          "package": "SimpleH",
          "partial": "Product",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Ring",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Ring",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Ring",
          "package": "SimpleH",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all types that have a binary operation. Note that the operation\nisn't necesarily commutative (in the case of lists, for example)\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "Semigroup",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Semigroup",
          "type": "class"
        },
        "index": {
          "description": "The class of all types that have binary operation Note that the operation isn necesarily commutative in the case of lists for example",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Semigroup",
          "package": "SimpleH",
          "partial": "Semigroup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Semigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Split",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Split",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Split",
          "package": "SimpleH",
          "partial": "Split",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "StrictEndo",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#StrictEndo",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "StrictEndo",
          "package": "SimpleH",
          "partial": "Strict Endo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:StrictEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "SubSemi",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#SubSemi",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "SubSemi",
          "package": "SimpleH",
          "partial": "Sub Semi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:SubSemi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Unit",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Unit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Unit",
          "package": "SimpleH",
          "partial": "Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Void",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Void",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Void",
          "package": "SimpleH",
          "partial": "Void",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#t:Void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(&)",
          "package": "SimpleH",
          "signature": "a -\u003e (a -\u003e b) -\u003e b",
          "source": "src/Algebra-Core.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(&) &",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "SimpleH",
          "signature": "a-\u003e(a-\u003eb)-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(*)",
          "package": "SimpleH",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Algebra-Core.html#%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "SimpleH",
          "signature": "m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(+)",
          "package": "SimpleH",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Algebra-Core.html#%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "SimpleH",
          "signature": "m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(+++)",
          "package": "SimpleH",
          "signature": "(a -\u003e k c c) -\u003e (b -\u003e k d d) -\u003e (a :+: b) -\u003e k (c, d) (c, d)",
          "source": "src/Algebra-Core.html#%2B%2B%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(+++) +++",
          "normalized": "(a-\u003eb c c)-\u003e(d-\u003eb e e)-\u003e(a d)-\u003eb(c,e)(c,e)",
          "package": "SimpleH",
          "signature": "(a-\u003ek c c)-\u003e(b-\u003ek d d)-\u003e(a b)-\u003ek(c,d)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-43--43--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(\u003c|\u003e)",
          "package": "SimpleH",
          "signature": "k a c -\u003e k b c -\u003e k (a :+: b) c",
          "source": "src/Algebra-Core.html#%3C%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c-\u003ea d c-\u003ea(b d)c",
          "package": "SimpleH",
          "signature": "k a c-\u003ek b c-\u003ek(a b)c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(\u003c#\u003e)",
          "package": "SimpleH",
          "signature": "k a c -\u003e k b d -\u003e k (a, b) (c, d)",
          "source": "src/Algebra-Core.html#%3C%23%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "SimpleH",
          "signature": "k a c-\u003ek b d-\u003ek(a,b)(c,d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(\u003c\u003c\u003c)",
          "package": "SimpleH",
          "signature": "k b c -\u003e k a b -\u003e k a c",
          "source": "src/Algebra-Core.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "SimpleH",
          "signature": "k b c-\u003ek a b-\u003ek a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(\u003e\u003e\u003e)",
          "package": "SimpleH",
          "signature": "k a b -\u003e k b c -\u003e k a c",
          "source": "src/Algebra-Core.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "SimpleH",
          "signature": "k a b-\u003ek b c-\u003ek a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "(.)",
          "package": "SimpleH",
          "signature": "k b c -\u003e k a b -\u003e k a c",
          "source": "src/Algebra-Core.html#.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "(.) .",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "SimpleH",
          "signature": "k b c-\u003ek a b-\u003ek a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Accum",
          "package": "SimpleH",
          "signature": "Accum",
          "source": "src/Algebra-Core.html#Accum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Accum",
          "package": "SimpleH",
          "partial": "Accum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Accum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Dual",
          "package": "SimpleH",
          "signature": "Dual",
          "source": "src/Algebra-Core.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Dual",
          "package": "SimpleH",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Endo",
          "package": "SimpleH",
          "signature": "Endo",
          "source": "src/Algebra-Core.html#Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Endo",
          "package": "SimpleH",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Algebra.Core\",\"Algebra.Functor\"]",
          "name": "Id",
          "package": "SimpleH",
          "signature": "Id",
          "source": "src/Algebra-Core.html#Id",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Id\",\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:Id\"]"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Id",
          "package": "SimpleH",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Interleave",
          "package": "SimpleH",
          "signature": "Interleave",
          "source": "src/Algebra-Core.html#Interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Interleave",
          "package": "SimpleH",
          "partial": "Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Max",
          "package": "SimpleH",
          "signature": "Max",
          "source": "src/Algebra-Core.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Max",
          "package": "SimpleH",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "OrdList",
          "package": "SimpleH",
          "signature": "OrdList",
          "source": "src/Algebra-Core.html#OrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "OrdList",
          "package": "SimpleH",
          "partial": "Ord List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:OrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "Product",
          "package": "SimpleH",
          "signature": "Product",
          "source": "src/Algebra-Core.html#Product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "Product",
          "package": "SimpleH",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:Product"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "StrictEndo",
          "package": "SimpleH",
          "signature": "StrictEndo",
          "source": "src/Algebra-Core.html#StrictEndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "StrictEndo",
          "package": "SimpleH",
          "partial": "Strict Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:StrictEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "bool",
          "package": "SimpleH",
          "signature": "a -\u003e a -\u003e Bool -\u003e a",
          "source": "src/Algebra-Core.html#bool",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "bool",
          "normalized": "a-\u003ea-\u003eBool-\u003ea",
          "package": "SimpleH",
          "signature": "a-\u003ea-\u003eBool-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:bool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "cast",
          "package": "SimpleH",
          "signature": "b -\u003e a",
          "source": "src/Algebra-Core.html#cast",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "cast",
          "normalized": "a-\u003eb",
          "package": "SimpleH",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:cast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e comparing p x y = compare (p x) (p y)\n\u003c/pre\u003e\u003cp\u003eUseful combinator for use in conjunction with the \u003ccode\u003exxxBy\u003c/code\u003e family\n of functions from \u003ca\u003eData.List\u003c/a\u003e, for example:\n\u003c/p\u003e\u003cpre\u003e   ... sortBy (comparing fst) ...\n\u003c/pre\u003e",
          "module": "Algebra.Core",
          "name": "comparing",
          "package": "SimpleH",
          "signature": "(b -\u003e a) -\u003e b -\u003e b -\u003e Ordering",
          "type": "function"
        },
        "index": {
          "description": "comparing compare Useful combinator for use in conjunction with the xxxBy family of functions from Data.List for example sortBy comparing fst",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "comparing",
          "normalized": "(a-\u003eb)-\u003ea-\u003ea-\u003eOrdering",
          "package": "SimpleH",
          "signature": "(b-\u003ea)-\u003eb-\u003eb-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:comparing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "const",
          "package": "SimpleH",
          "signature": "a -\u003e m a",
          "source": "src/Algebra-Core.html#const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "const",
          "normalized": "a-\u003eb a",
          "package": "SimpleH",
          "signature": "a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "fail",
          "package": "SimpleH",
          "signature": "String -\u003e a",
          "source": "src/Algebra-Core.html#fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "fail",
          "normalized": "String-\u003ea",
          "package": "SimpleH",
          "signature": "String-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "first",
          "package": "SimpleH",
          "signature": "k a b -\u003e k (a, c) (b, c)",
          "source": "src/Algebra-Core.html#first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "first",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "SimpleH",
          "signature": "k a b-\u003ek(a,c)(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "fix",
          "package": "SimpleH",
          "signature": "(a -\u003e a) -\u003e a",
          "source": "src/Algebra-Core.html#fix",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "fix",
          "normalized": "(a-\u003ea)-\u003ea",
          "package": "SimpleH",
          "signature": "(a-\u003ea)-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:fix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "getAccum",
          "package": "SimpleH",
          "signature": "Maybe a",
          "source": "src/Algebra-Core.html#Accum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getAccum",
          "package": "SimpleH",
          "partial": "Accum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "getDual",
          "package": "SimpleH",
          "signature": "m",
          "source": "src/Algebra-Core.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getDual",
          "package": "SimpleH",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Algebra.Core\",\"Algebra.Functor\"]",
          "name": "getId",
          "package": "SimpleH",
          "signature": "a",
          "source": "src/Algebra-Core.html#Id",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getId\",\"http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:getId\"]"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getId",
          "package": "SimpleH",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "getMax",
          "package": "SimpleH",
          "signature": "a",
          "source": "src/Algebra-Core.html#Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getMax",
          "package": "SimpleH",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getMax"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "getOrdList",
          "package": "SimpleH",
          "signature": "[a]",
          "source": "src/Algebra-Core.html#OrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getOrdList",
          "normalized": "[a]",
          "package": "SimpleH",
          "partial": "Ord List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "getProduct",
          "package": "SimpleH",
          "signature": "a",
          "source": "src/Algebra-Core.html#Product",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "getProduct",
          "package": "SimpleH",
          "partial": "Product",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:getProduct"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "guard",
          "package": "SimpleH",
          "signature": "Bool -\u003e m ()",
          "source": "src/Algebra-Core.html#guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "SimpleH",
          "signature": "Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead entire handle contents strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThis function reads chunks at a time, doubling the chunksize on each\n read. The final buffer is then realloced to the appropriate size. For\n files \u003e half of available memory, this may lead to memory exhaustion.\n Consider using \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e in this case.\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e, the string representation in the file is assumed to\n be ISO-8859-1.\n\u003c/p\u003e\u003cp\u003eThe Handle is closed once the contents have been read,\n or if an exception is thrown.\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "hGetContents",
          "package": "SimpleH",
          "signature": "Handle -\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Read entire handle contents strictly into ByteString This function reads chunks at time doubling the chunksize on each read The final buffer is then realloced to the appropriate size For files half of available memory this may lead to memory exhaustion Consider using readFile in this case As with hGet the string representation in the file is assumed to be ISO-8859-1 The Handle is closed once the contents have been read or if an exception is thrown",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "hGetContents",
          "normalized": "Handle-\u003eIO ByteString",
          "package": "SimpleH",
          "partial": "Get Contents",
          "signature": "Handle-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:hGetContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "headDef",
          "package": "SimpleH",
          "signature": "a -\u003e [a] -\u003e a",
          "source": "src/Algebra-Core.html#headDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "headDef",
          "normalized": "a-\u003e[a]-\u003ea",
          "package": "SimpleH",
          "partial": "Def",
          "signature": "a-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:headDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "id",
          "package": "SimpleH",
          "signature": "k a a",
          "source": "src/Algebra-Core.html#id",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "id",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "ifThenElse",
          "package": "SimpleH",
          "signature": "Bool -\u003e a -\u003e a -\u003e a",
          "source": "src/Algebra-Core.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "SimpleH",
          "partial": "Then Else",
          "signature": "Bool-\u003ea-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "inOrder",
          "package": "SimpleH",
          "signature": "t -\u003e t -\u003e (t, t, Bool)",
          "source": "src/Algebra-Core.html#inOrder",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "inOrder",
          "normalized": "a-\u003ea-\u003e(a,a,Bool)",
          "package": "SimpleH",
          "partial": "Order",
          "signature": "t-\u003et-\u003e(t,t,Bool)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:inOrder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "insertOrd",
          "package": "SimpleH",
          "signature": "t -\u003e [t] -\u003e [t]",
          "source": "src/Algebra-Core.html#insertOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "insertOrd",
          "normalized": "a-\u003e[a]-\u003e[a]",
          "package": "SimpleH",
          "partial": "Ord",
          "signature": "t-\u003e[t]-\u003e[t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:insertOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "inside",
          "package": "SimpleH",
          "signature": "t -\u003e t -\u003e t -\u003e Bool",
          "source": "src/Algebra-Core.html#inside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "inside",
          "normalized": "a-\u003ea-\u003ea-\u003eBool",
          "package": "SimpleH",
          "signature": "t-\u003et-\u003et-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:inside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "interleave",
          "package": "SimpleH",
          "signature": "[a]",
          "source": "src/Algebra-Core.html#Interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "interleave",
          "normalized": "[a]",
          "package": "SimpleH",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "invertOrd",
          "package": "SimpleH",
          "signature": "Ordering -\u003e Ordering",
          "source": "src/Algebra-Core.html#invertOrd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "invertOrd",
          "normalized": "Ordering-\u003eOrdering",
          "package": "SimpleH",
          "partial": "Ord",
          "signature": "Ordering-\u003eOrdering",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:invertOrd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "is",
          "package": "SimpleH",
          "signature": "a -\u003e (a -\u003e Bool) -\u003e Bool",
          "source": "src/Algebra-Core.html#is",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "is",
          "normalized": "a-\u003e(a-\u003eBool)-\u003eBool",
          "package": "SimpleH",
          "signature": "a-\u003e(a-\u003eBool)-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "one",
          "package": "SimpleH",
          "signature": "m",
          "source": "src/Algebra-Core.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "one",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "pure",
          "package": "SimpleH",
          "signature": "a -\u003e f a",
          "source": "src/Algebra-Core.html#pure",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "pure",
          "normalized": "a-\u003eb a",
          "package": "SimpleH",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead an entire file strictly into a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.  This is far more\n efficient than reading the characters into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e and then using\n \u003ccode\u003e\u003ca\u003epack\u003c/a\u003e\u003c/code\u003e.  It also may be more efficient than opening the file and\n reading it using \u003ccode\u003e\u003ca\u003ehGet\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "readFile",
          "package": "SimpleH",
          "signature": "FilePath -\u003e IO ByteString",
          "type": "function"
        },
        "index": {
          "description": "Read an entire file strictly into ByteString This is far more efficient than reading the characters into String and then using pack It also may be more efficient than opening the file and reading it using hGet",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO ByteString",
          "package": "SimpleH",
          "partial": "File",
          "signature": "FilePath-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "rmod",
          "package": "SimpleH",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Algebra-Core.html#rmod",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "rmod",
          "normalized": "a-\u003ea-\u003ea",
          "package": "SimpleH",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:rmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "runEndo",
          "package": "SimpleH",
          "signature": "k a a",
          "source": "src/Algebra-Core.html#Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "runEndo",
          "package": "SimpleH",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:runEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "runStrictEndo",
          "package": "SimpleH",
          "signature": "a -\u003e a",
          "source": "src/Algebra-Core.html#StrictEndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "runStrictEndo",
          "normalized": "a-\u003ea",
          "package": "SimpleH",
          "partial": "Strict Endo",
          "signature": "a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:runStrictEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "second",
          "package": "SimpleH",
          "signature": "k a b -\u003e k (c, a) (c, b)",
          "source": "src/Algebra-Core.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "second",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "SimpleH",
          "signature": "k a b-\u003ek(c,a)(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "swap",
          "package": "SimpleH",
          "signature": "(a, b) -\u003e (b, a)",
          "source": "src/Algebra-Core.html#swap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "swap",
          "normalized": "(a,b)-\u003e(b,a)",
          "package": "SimpleH",
          "signature": "(a,b)-\u003e(b,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:swap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "tailSafe",
          "package": "SimpleH",
          "signature": "[a] -\u003e [a]",
          "source": "src/Algebra-Core.html#tailSafe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "tailSafe",
          "normalized": "[a]-\u003e[a]",
          "package": "SimpleH",
          "partial": "Safe",
          "signature": "[a]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:tailSafe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "unit",
          "package": "SimpleH",
          "signature": "m ()",
          "source": "src/Algebra-Core.html#unit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "unit",
          "normalized": "a()",
          "package": "SimpleH",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "unless",
          "package": "SimpleH",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Algebra-Core.html#unless",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "unless",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "SimpleH",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:unless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "when",
          "package": "SimpleH",
          "signature": "Bool -\u003e m () -\u003e m ()",
          "source": "src/Algebra-Core.html#when",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "when",
          "normalized": "Bool-\u003ea()-\u003ea()",
          "package": "SimpleH",
          "signature": "Bool-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e to a file.\n\u003c/p\u003e",
          "module": "Algebra.Core",
          "name": "writeFile",
          "package": "SimpleH",
          "signature": "FilePath -\u003e ByteString -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write ByteString to file",
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "writeFile",
          "normalized": "FilePath-\u003eByteString-\u003eIO()",
          "package": "SimpleH",
          "partial": "File",
          "signature": "FilePath-\u003eByteString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:writeFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Core",
          "name": "zero",
          "package": "SimpleH",
          "signature": "m",
          "source": "src/Algebra-Core.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Core",
          "module": "Algebra.Core",
          "name": "zero",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Core.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "source": "src/Algebra-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "source": "src/Algebra-Foldable.html#Foldable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#t:Foldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "Sized",
          "package": "SimpleH",
          "source": "src/Algebra-Foldable.html#Sized",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "Sized",
          "package": "SimpleH",
          "partial": "Sized",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#t:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "Sized",
          "package": "SimpleH",
          "signature": "Sized",
          "source": "src/Algebra-Foldable.html#Sized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "Sized",
          "package": "SimpleH",
          "partial": "Sized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:Sized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "all",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Algebra-Foldable.html#all",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "all",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:all"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "and",
          "package": "SimpleH",
          "signature": "t Bool -\u003e Bool",
          "source": "src/Algebra-Foldable.html#and",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "and",
          "normalized": "a Bool-\u003eBool",
          "package": "SimpleH",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:and"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "any",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Bool",
          "source": "src/Algebra-Foldable.html#any",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "any",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eBool",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:any"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "compose",
          "package": "SimpleH",
          "signature": "t (k a a) -\u003e k a a",
          "source": "src/Algebra-Foldable.html#compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "compose",
          "normalized": "a(b c c)-\u003eb c c",
          "package": "SimpleH",
          "signature": "t(k a a)-\u003ek a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "concat",
          "package": "SimpleH",
          "signature": "t m -\u003e m",
          "source": "src/Algebra-Foldable.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "concat",
          "normalized": "a b-\u003eb",
          "package": "SimpleH",
          "signature": "t m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "convert",
          "package": "SimpleH",
          "signature": "t a -\u003e f a",
          "source": "src/Algebra-Foldable.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "convert",
          "normalized": "a b-\u003ec b",
          "package": "SimpleH",
          "signature": "t a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "count",
          "package": "SimpleH",
          "signature": "f a -\u003e n",
          "source": "src/Algebra-Foldable.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "count",
          "normalized": "a b-\u003ec",
          "package": "SimpleH",
          "signature": "f a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "elem",
          "package": "SimpleH",
          "signature": "a -\u003e t a -\u003e Bool",
          "source": "src/Algebra-Foldable.html#elem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "elem",
          "normalized": "a-\u003eb a-\u003eBool",
          "package": "SimpleH",
          "signature": "a-\u003et a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:elem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "empty",
          "package": "SimpleH",
          "signature": "f a -\u003e Bool",
          "source": "src/Algebra-Foldable.html#empty",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "empty",
          "normalized": "a b-\u003eBool",
          "package": "SimpleH",
          "signature": "f a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "find",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e Maybe a",
          "source": "src/Algebra-Foldable.html#find",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "find",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eMaybe a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "fold",
          "package": "SimpleH",
          "signature": "t m -\u003e m",
          "source": "src/Algebra-Foldable.html#fold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "fold",
          "normalized": "a b-\u003eb",
          "package": "SimpleH",
          "signature": "t m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "foldMap",
          "package": "SimpleH",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Algebra-Foldable.html#foldMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "SimpleH",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "foldl'",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "source": "src/Algebra-Foldable.html#foldl%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "foldl'",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003ec b-\u003ea",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:foldl-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "foldl1'",
          "package": "SimpleH",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Algebra-Foldable.html#foldl1%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "foldl1'",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "SimpleH",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:foldl1-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "foldr",
          "package": "SimpleH",
          "signature": "(b -\u003e a -\u003e a) -\u003e a -\u003e t b -\u003e a",
          "source": "src/Algebra-Foldable.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "foldr",
          "normalized": "(a-\u003eb-\u003eb)-\u003eb-\u003ec a-\u003eb",
          "package": "SimpleH",
          "signature": "(b-\u003ea-\u003ea)-\u003ea-\u003et b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "foldr1",
          "package": "SimpleH",
          "signature": "(a -\u003e a -\u003e a) -\u003e [a] -\u003e a",
          "source": "src/Algebra-Foldable.html#foldr1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "foldr1",
          "normalized": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "package": "SimpleH",
          "signature": "(a-\u003ea-\u003ea)-\u003e[a]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:foldr1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "getSized",
          "package": "SimpleH",
          "signature": "f a",
          "source": "src/Algebra-Foldable.html#Sized",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "getSized",
          "package": "SimpleH",
          "partial": "Sized",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:getSized"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "length",
          "package": "SimpleH",
          "signature": "[a] -\u003e n",
          "source": "src/Algebra-Foldable.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "length",
          "normalized": "[a]-\u003eb",
          "package": "SimpleH",
          "signature": "[a]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "or",
          "package": "SimpleH",
          "signature": "t Bool -\u003e Bool",
          "source": "src/Algebra-Foldable.html#or",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "or",
          "normalized": "a Bool-\u003eBool",
          "package": "SimpleH",
          "signature": "t Bool-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "partition",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e (f a, f a)",
          "source": "src/Algebra-Foldable.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(c a,c a)",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003e(f a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "partitionEithers",
          "package": "SimpleH",
          "signature": "t (a :+: b) -\u003e (t a, t b)",
          "source": "src/Algebra-Foldable.html#partitionEithers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "partitionEithers",
          "normalized": "a(b c)-\u003e(a b,a c)",
          "package": "SimpleH",
          "partial": "Eithers",
          "signature": "t(a b)-\u003e(t a,t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:partitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "refuse",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e f a",
          "source": "src/Algebra-Foldable.html#refuse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "refuse",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003ec a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:refuse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "select",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e f a",
          "source": "src/Algebra-Foldable.html#select",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "select",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003ec a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003et a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "size",
          "package": "SimpleH",
          "signature": "f a -\u003e n",
          "source": "src/Algebra-Foldable.html#size",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "size",
          "normalized": "a b-\u003ec",
          "package": "SimpleH",
          "signature": "f a-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "split",
          "package": "SimpleH",
          "signature": "t (b :+: c) -\u003e (b, c)",
          "source": "src/Algebra-Foldable.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "split",
          "normalized": "a(b c)-\u003e(b,c)",
          "package": "SimpleH",
          "signature": "t(b c)-\u003e(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "sum",
          "package": "SimpleH",
          "signature": "t m -\u003e m",
          "source": "src/Algebra-Foldable.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "sum",
          "normalized": "a b-\u003eb",
          "package": "SimpleH",
          "signature": "t m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Foldable",
          "name": "toList",
          "package": "SimpleH",
          "signature": "t a -\u003e [a]",
          "source": "src/Algebra-Foldable.html#toList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Foldable",
          "module": "Algebra.Foldable",
          "name": "toList",
          "normalized": "a b-\u003e[b]",
          "package": "SimpleH",
          "partial": "List",
          "signature": "t a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Foldable.html#v:toList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for functors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Algebra.Functor",
          "name": "Functor",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "module for functors",
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Functor",
          "package": "SimpleH",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": ":**:",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#%3A%2A%2A%3A",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": ":**:",
          "package": "SimpleH",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t::-42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": ":++:",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#%3A%2B%2B%3A",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": ":++:",
          "package": "SimpleH",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t::-43--43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Composition functor\n\u003c/p\u003e",
          "module": "Algebra.Functor",
          "name": ":.:",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#%3A.%3A",
          "type": "newtype"
        },
        "index": {
          "description": "The Composition functor",
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": ":.:",
          "package": "SimpleH",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t::.:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Bifunctor",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#Bifunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Bifunctor",
          "package": "SimpleH",
          "partial": "Bifunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Bifunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Cofunctor",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#Cofunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Cofunctor",
          "package": "SimpleH",
          "partial": "Cofunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Cofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Constant Functor\n\u003c/p\u003e",
          "module": "Algebra.Functor",
          "name": "Const",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#Const",
          "type": "newtype"
        },
        "index": {
          "description": "The Constant Functor",
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Const",
          "package": "SimpleH",
          "partial": "Const",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA motherflippin' functor\n\u003c/p\u003e",
          "module": "Algebra.Functor",
          "name": "Flip",
          "package": "SimpleH",
          "source": "src/Algebra-Functor.html#Flip",
          "type": "newtype"
        },
        "index": {
          "description": "motherflippin functor",
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Flip",
          "package": "SimpleH",
          "partial": "Flip",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Functor",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#Functor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Functor",
          "package": "SimpleH",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Identity Functor\n\u003c/p\u003e",
          "module": "Algebra.Functor",
          "name": "Id",
          "package": "SimpleH",
          "source": "src/Algebra-Core.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "The Identity Functor",
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Id",
          "package": "SimpleH",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "(|||)",
          "package": "SimpleH",
          "signature": "k a c -\u003e k b d -\u003e k (a :+: b) (c :+: d)",
          "source": "src/Algebra-Functor.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "(|||) |||",
          "normalized": "a b c-\u003ea d e-\u003ea(b d)(c e)",
          "package": "SimpleH",
          "signature": "k a c-\u003ek b d-\u003ek(a b)(c d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "(\u003c$)",
          "package": "SimpleH",
          "signature": "b -\u003e f a -\u003e f b",
          "source": "src/Algebra-Functor.html#%3C%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003eb c-\u003eb a",
          "package": "SimpleH",
          "signature": "b-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "(\u003c$\u003e)",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Functor.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "(\u003c&\u003e)",
          "package": "SimpleH",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Algebra-Functor.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "SimpleH",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": ":**:",
          "package": "SimpleH",
          "signature": "(f a) :**: (g a)",
          "source": "src/Algebra-Functor.html#%3A%2A%2A%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": ":**:",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v::-42--42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Compose",
          "package": "SimpleH",
          "signature": "Compose",
          "source": "src/Algebra-Functor.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Compose",
          "package": "SimpleH",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:Compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Const",
          "package": "SimpleH",
          "signature": "Const",
          "source": "src/Algebra-Functor.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Const",
          "package": "SimpleH",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Flip",
          "package": "SimpleH",
          "signature": "Flip",
          "source": "src/Algebra-Functor.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Flip",
          "package": "SimpleH",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "Sum",
          "package": "SimpleH",
          "signature": "Sum",
          "source": "src/Algebra-Functor.html#%3A%2B%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "Sum",
          "package": "SimpleH",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:Sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "comap",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f b -\u003e f a",
          "source": "src/Algebra-Functor.html#comap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "comap",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:comap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "dimap",
          "package": "SimpleH",
          "signature": "(c -\u003e a) -\u003e (b -\u003e d) -\u003e p a b -\u003e p c d",
          "source": "src/Algebra-Functor.html#dimap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "dimap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "SimpleH",
          "signature": "(c-\u003ea)-\u003e(b-\u003ed)-\u003ep a b-\u003ep c d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:dimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "getCompose",
          "package": "SimpleH",
          "signature": "f (g a)",
          "source": "src/Algebra-Functor.html#%3A.%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "getCompose",
          "package": "SimpleH",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:getCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "getConst",
          "package": "SimpleH",
          "signature": "a",
          "source": "src/Algebra-Functor.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "getConst",
          "package": "SimpleH",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:getConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "getSum",
          "package": "SimpleH",
          "signature": "f a :+: g a",
          "source": "src/Algebra-Functor.html#%3A%2B%2B%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "getSum",
          "package": "SimpleH",
          "partial": "Sum",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:getSum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "left",
          "package": "SimpleH",
          "signature": "k a b -\u003e k (a :+: c) (b :+: c)",
          "source": "src/Algebra-Functor.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "left",
          "normalized": "a b c-\u003ea(b d)(c d)",
          "package": "SimpleH",
          "signature": "k a b-\u003ek(a c)(b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "map",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Classes.html#map",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "map2",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f (f' a) -\u003e f (f' b)",
          "source": "src/Algebra-Functor.html#map2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "map2",
          "normalized": "(a-\u003eb)-\u003ec(d a)-\u003ec(d b)",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef(f' a)-\u003ef(f' b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:map2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "map3",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f (f' (f'' a)) -\u003e f (f' (f'' b))",
          "source": "src/Algebra-Functor.html#map3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "map3",
          "normalized": "(a-\u003eb)-\u003ec(d(e a))-\u003ec(d(e b))",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef(f'(f'' a))-\u003ef(f'(f'' b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:map3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "promap",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f b c -\u003e f a c",
          "source": "src/Algebra-Functor.html#promap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "promap",
          "normalized": "(a-\u003eb)-\u003ec b d-\u003ec a d",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef b c-\u003ef a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:promap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "right",
          "package": "SimpleH",
          "signature": "k a b -\u003e k (c :+: a) (c :+: b)",
          "source": "src/Algebra-Functor.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "right",
          "normalized": "a b c-\u003ea(d b)(d c)",
          "package": "SimpleH",
          "signature": "k a b-\u003ek(c a)(c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "unFlip",
          "package": "SimpleH",
          "signature": "f b a",
          "source": "src/Algebra-Functor.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "unFlip",
          "package": "SimpleH",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:unFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Functor",
          "name": "void",
          "package": "SimpleH",
          "signature": "f a -\u003e f ()",
          "source": "src/Algebra-Functor.html#void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Functor",
          "module": "Algebra.Functor",
          "name": "void",
          "normalized": "a b-\u003ea()",
          "package": "SimpleH",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Functor.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "Cont",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Cont.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "Cont",
          "package": "SimpleH",
          "partial": "Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "Cont",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Cont.html#Cont",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "Cont",
          "package": "SimpleH",
          "partial": "Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple continuation monad implementation  \n\u003c/p\u003e",
          "module": "Algebra.Monad.Cont",
          "name": "ContT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Cont.html#ContT",
          "type": "newtype"
        },
        "index": {
          "description": "simple continuation monad implementation",
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "ContT",
          "package": "SimpleH",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "MonadCont",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "MonadCont",
          "package": "SimpleH",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "ContT",
          "package": "SimpleH",
          "signature": "ContT",
          "source": "src/Algebra-Monad-Cont.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "ContT",
          "package": "SimpleH",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#v:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "callCC",
          "package": "SimpleH",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Algebra-Classes.html#callCC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "SimpleH",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "evalCont",
          "package": "SimpleH",
          "signature": "Cont r r -\u003e r",
          "source": "src/Algebra-Monad-Cont.html#evalCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "evalCont",
          "normalized": "Cont a a-\u003ea",
          "package": "SimpleH",
          "partial": "Cont",
          "signature": "Cont r r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#v:evalCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "evalContT",
          "package": "SimpleH",
          "signature": "ContT r m r -\u003e m r",
          "source": "src/Algebra-Monad-Cont.html#evalContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "evalContT",
          "normalized": "ContT a b a-\u003eb a",
          "package": "SimpleH",
          "partial": "Cont",
          "signature": "ContT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#v:evalContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Cont",
          "name": "runContT",
          "package": "SimpleH",
          "signature": "(a -\u003e m r) -\u003e m r",
          "source": "src/Algebra-Monad-Cont.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Cont",
          "module": "Algebra.Monad.Cont",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "SimpleH",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Cont.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "Error",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Error.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "Error",
          "package": "SimpleH",
          "partial": "Error",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "EitherT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Error.html#EitherT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "EitherT",
          "package": "SimpleH",
          "partial": "Either",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#t:EitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "MonadError",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadError",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "MonadError",
          "package": "SimpleH",
          "partial": "Monad Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "_eitherT",
          "package": "SimpleH",
          "signature": "Iso (EitherT e m a) (EitherT f m b) (m (e :+: a)) (m (f :+: b))",
          "source": "src/Algebra-Monad-Error.html#_eitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "_eitherT",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:_eitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "catch",
          "package": "SimpleH",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Algebra-Classes.html#catch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "catch",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "SimpleH",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "throw",
          "package": "SimpleH",
          "signature": "e -\u003e m a",
          "source": "src/Algebra-Classes.html#throw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "SimpleH",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "throwIO",
          "package": "SimpleH",
          "signature": "e -\u003e IO ()",
          "source": "src/Algebra-Monad-Error.html#throwIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "throwIO",
          "normalized": "a-\u003eIO()",
          "package": "SimpleH",
          "partial": "IO",
          "signature": "e-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "try",
          "package": "SimpleH",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Algebra-Monad-Error.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "try",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "SimpleH",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Error",
          "name": "tryMay",
          "package": "SimpleH",
          "signature": "m a -\u003e m (Maybe a)",
          "source": "src/Algebra-Monad-Error.html#tryMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Error",
          "module": "Algebra.Monad.Error",
          "name": "tryMay",
          "normalized": "a b-\u003ea(Maybe b)",
          "package": "SimpleH",
          "partial": "May",
          "signature": "m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Error.html#v:tryMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "Foldable",
          "package": "SimpleH",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "ListT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Foldable.html#ListT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "ListT",
          "package": "SimpleH",
          "partial": "List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#t:ListT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "MaybeT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Foldable.html#MaybeT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "MaybeT",
          "package": "SimpleH",
          "partial": "Maybe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#t:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "MonadList",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadList",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "MonadList",
          "package": "SimpleH",
          "partial": "Monad List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#t:MonadList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "TreeT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Foldable.html#TreeT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "TreeT",
          "package": "SimpleH",
          "partial": "Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#t:TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "MaybeT",
          "package": "SimpleH",
          "signature": "MaybeT (Compose' Maybe m a)",
          "source": "src/Algebra-Monad-Foldable.html#MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "MaybeT",
          "package": "SimpleH",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "TreeT",
          "package": "SimpleH",
          "signature": "TreeT (Compose' Tree m a)",
          "source": "src/Algebra-Monad-Foldable.html#TreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "TreeT",
          "package": "SimpleH",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "_MaybeT",
          "package": "SimpleH",
          "signature": "Iso (MaybeT m a) (MaybeT m' b) (m (Maybe a)) (m' (Maybe b))",
          "source": "src/Algebra-Monad-Foldable.html#_MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "_MaybeT",
          "package": "SimpleH",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:_MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "_TreeT",
          "package": "SimpleH",
          "signature": "Iso (TreeT m a) (TreeT n b) (m (Tree a)) (n (Tree b))",
          "source": "src/Algebra-Monad-Foldable.html#_TreeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "_TreeT",
          "package": "SimpleH",
          "partial": "Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:_TreeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "_listT",
          "package": "SimpleH",
          "signature": "Iso (ListT m a) (ListT m' a') (m [a]) (m' [a'])",
          "source": "src/Algebra-Monad-Foldable.html#_listT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "_listT",
          "normalized": "Iso(ListT a b)(ListT c d)(a[b])(c[d])",
          "package": "SimpleH",
          "signature": "Iso(ListT m a)(ListT m' a')(m[a])(m'[a'])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:_listT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Foldable",
          "name": "fork",
          "package": "SimpleH",
          "signature": "[a] -\u003e m a",
          "source": "src/Algebra-Classes.html#fork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Foldable",
          "module": "Algebra.Monad.Foldable",
          "name": "fork",
          "normalized": "[a]-\u003eb a",
          "package": "SimpleH",
          "signature": "[a]-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Foldable.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "RWS",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-RWS.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "RWS",
          "package": "SimpleH",
          "partial": "RWS",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "MonadInternal",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-RWS.html#MonadInternal",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "MonadInternal",
          "package": "SimpleH",
          "partial": "Monad Internal",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#t:MonadInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "RWS",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-RWS.html#RWS",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "RWS",
          "package": "SimpleH",
          "partial": "RWS",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#t:RWS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "RWST",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-RWS.html#RWST",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "RWST",
          "package": "SimpleH",
          "partial": "RWST",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#t:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "RWST",
          "package": "SimpleH",
          "signature": "RWST",
          "source": "src/Algebra-Monad-RWS.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "RWST",
          "package": "SimpleH",
          "partial": "RWST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "_RWST",
          "package": "SimpleH",
          "signature": "Iso (RWST r w s m a) (RWST r' w' s' m' a') ((r, s) -\u003e m (a, s, w)) ((r', s') -\u003e m' (a', s', w'))",
          "source": "src/Algebra-Monad-RWS.html#_RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "_RWST",
          "normalized": "Iso(RWST a b c d e)(RWST f g h i j)((a,c)-\u003ed(e,c,b))((f,h)-\u003ei(j,h,g))",
          "package": "SimpleH",
          "partial": "RWST",
          "signature": "Iso(RWST r w s m a)(RWST r' w' s' m' a')((r,s)-\u003em(a,s,w))((r',s')-\u003em'(a',s',w'))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:_RWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "ask_",
          "package": "SimpleH",
          "signature": "t m a",
          "source": "src/Algebra-Monad-RWS.html#ask_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "ask_",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:ask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "censor_",
          "package": "SimpleH",
          "signature": "t m (a, w -\u003e w) -\u003e t m a",
          "source": "src/Algebra-Monad-RWS.html#censor_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "censor_",
          "normalized": "a b(c,d-\u003ed)-\u003ea b c",
          "package": "SimpleH",
          "signature": "t m(a,w-\u003ew)-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:censor_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "get_",
          "package": "SimpleH",
          "signature": "t m a",
          "source": "src/Algebra-Monad-RWS.html#get_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "get_",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:get_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "internal",
          "package": "SimpleH",
          "signature": "(forall c.  m (c, a) -\u003e m (c, b)) -\u003e t m a -\u003e t m b",
          "source": "src/Algebra-Monad-RWS.html#internal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "internal",
          "normalized": "(a b c(d,e)-\u003ec(d,f))-\u003eg c e-\u003eg c f",
          "package": "SimpleH",
          "signature": "(forall c. m(c,a)-\u003em(c,b))-\u003et m a-\u003et m b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "listen_",
          "package": "SimpleH",
          "signature": "t m a -\u003e t m (w, a)",
          "source": "src/Algebra-Monad-RWS.html#listen_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "listen_",
          "normalized": "a b c-\u003ea b(d,c)",
          "package": "SimpleH",
          "signature": "t m a-\u003et m(w,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:listen_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "local_",
          "package": "SimpleH",
          "signature": "(r -\u003e r) -\u003e t m a -\u003e t m a",
          "source": "src/Algebra-Monad-RWS.html#local_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "local_",
          "normalized": "(a-\u003ea)-\u003eb c d-\u003eb c d",
          "package": "SimpleH",
          "signature": "(r-\u003er)-\u003et m a-\u003et m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:local_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "modify_",
          "package": "SimpleH",
          "signature": "(s -\u003e s) -\u003e t m ()",
          "source": "src/Algebra-Monad-RWS.html#modify_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "modify_",
          "normalized": "(a-\u003ea)-\u003eb c()",
          "package": "SimpleH",
          "signature": "(s-\u003es)-\u003et m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:modify_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "put_",
          "package": "SimpleH",
          "signature": "s -\u003e t m ()",
          "source": "src/Algebra-Monad-RWS.html#put_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "put_",
          "normalized": "a-\u003eb c()",
          "package": "SimpleH",
          "signature": "s-\u003et m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:put_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "runRWST",
          "package": "SimpleH",
          "signature": "(r, s) -\u003e m (a, s, w)",
          "source": "src/Algebra-Monad-RWS.html#RWST",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "runRWST",
          "normalized": "(a,b)-\u003ec(d,b,e)",
          "package": "SimpleH",
          "partial": "RWST",
          "signature": "(r,s)-\u003em(a,s,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:runRWST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.RWS",
          "name": "tell_",
          "package": "SimpleH",
          "signature": "w -\u003e t m ()",
          "source": "src/Algebra-Monad-RWS.html#tell_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad RWS",
          "module": "Algebra.Monad.RWS",
          "name": "tell_",
          "normalized": "a-\u003eb c()",
          "package": "SimpleH",
          "signature": "w-\u003et m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-RWS.html#v:tell_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "Reader",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Reader.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "Reader",
          "package": "SimpleH",
          "partial": "Reader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "MonadReader",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadReader",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "MonadReader",
          "package": "SimpleH",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "Reader",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Reader.html#Reader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "Reader",
          "package": "SimpleH",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple Reader monad \n\u003c/p\u003e",
          "module": "Algebra.Monad.Reader",
          "name": "ReaderT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Reader.html#ReaderT",
          "type": "data"
        },
        "index": {
          "description": "simple Reader monad",
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "ReaderT",
          "package": "SimpleH",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "_reader",
          "package": "SimpleH",
          "signature": "Iso (Reader r a) (Reader r' b) (r -\u003e a) (r' -\u003e b)",
          "source": "src/Algebra-Monad-Reader.html#_reader",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "_reader",
          "normalized": "Iso(Reader a b)(Reader c d)(a-\u003eb)(c-\u003ed)",
          "package": "SimpleH",
          "signature": "Iso(Reader r a)(Reader r' b)(r-\u003ea)(r'-\u003eb)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#v:_reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "_readerT",
          "package": "SimpleH",
          "signature": "Iso (ReaderT r m a) (ReaderT r' m' b) (r -\u003e m a) (r' -\u003e m' b)",
          "source": "src/Algebra-Monad-Reader.html#_readerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "_readerT",
          "normalized": "Iso(ReaderT a b c)(ReaderT d e f)(a-\u003eb c)(d-\u003ee f)",
          "package": "SimpleH",
          "signature": "Iso(ReaderT r m a)(ReaderT r' m' b)(r-\u003em a)(r'-\u003em' b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#v:_readerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "ask",
          "package": "SimpleH",
          "signature": "m r",
          "source": "src/Algebra-Classes.html#ask",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "ask",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Reader",
          "name": "local",
          "package": "SimpleH",
          "signature": "(r -\u003e r) -\u003e m a -\u003e m a",
          "source": "src/Algebra-Classes.html#local",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Reader",
          "module": "Algebra.Monad.Reader",
          "name": "local",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "SimpleH",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Reader.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "State",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "State",
          "package": "SimpleH",
          "partial": "State",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "MonadState",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "MonadState",
          "package": "SimpleH",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "Next",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html#Next",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "Next",
          "package": "SimpleH",
          "partial": "Next",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:Next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "Prev",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html#Prev",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "Prev",
          "package": "SimpleH",
          "partial": "Prev",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:Prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "State",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html#State",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "State",
          "package": "SimpleH",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "StateA",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html#StateA",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "StateA",
          "package": "SimpleH",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:StateA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "StateT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-State.html#StateT",
          "type": "data"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "StateT",
          "package": "SimpleH",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "(=~)",
          "package": "SimpleH",
          "signature": "Lens' s s' -\u003e (s' -\u003e s') -\u003e m ()",
          "source": "src/Algebra-Monad-State.html#%3D~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "(=~) =~",
          "normalized": "Lens' a b-\u003e(b-\u003eb)-\u003ec()",
          "package": "SimpleH",
          "signature": "Lens' s s'-\u003e(s'-\u003es')-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:-61--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "(=-)",
          "package": "SimpleH",
          "signature": "Lens' s s' -\u003e s' -\u003e m ()",
          "source": "src/Algebra-Monad-State.html#%3D-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "(=-) =-",
          "normalized": "Lens' a b-\u003eb-\u003ec()",
          "package": "SimpleH",
          "signature": "Lens' s s'-\u003es'-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:-61--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "StateA",
          "package": "SimpleH",
          "signature": "StateA (StateT s m a)",
          "source": "src/Algebra-Monad-State.html#StateA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "StateA",
          "package": "SimpleH",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:StateA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "eval",
          "package": "SimpleH",
          "signature": "f (f' (a, b)) -\u003e f (f' b)",
          "source": "src/Algebra-Monad-State.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "eval",
          "normalized": "a(b(c,d))-\u003ea(b d)",
          "package": "SimpleH",
          "signature": "f(f'(a,b))-\u003ef(f' b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "exec",
          "package": "SimpleH",
          "signature": "f (f' (a, b)) -\u003e f (f' a)",
          "source": "src/Algebra-Monad-State.html#exec",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "exec",
          "normalized": "a(b(c,d))-\u003ea(b c)",
          "package": "SimpleH",
          "signature": "f(f'(a,b))-\u003ef(f' a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "get",
          "package": "SimpleH",
          "signature": "m s",
          "source": "src/Algebra-Classes.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "get",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "gets",
          "package": "SimpleH",
          "signature": "Lens' s s' -\u003e m s'",
          "source": "src/Algebra-Monad-State.html#gets",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "gets",
          "normalized": "Lens' a b-\u003ec b",
          "package": "SimpleH",
          "signature": "Lens' s s'-\u003em s'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:gets"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "mapAccum",
          "package": "SimpleH",
          "signature": "(a -\u003e s -\u003e (s, b)) -\u003e t a -\u003e s -\u003e (s, t b)",
          "source": "src/Algebra-Monad-State.html#mapAccum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "mapAccum",
          "normalized": "(a-\u003eb-\u003e(b,c))-\u003ed a-\u003eb-\u003e(b,d c)",
          "package": "SimpleH",
          "partial": "Accum",
          "signature": "(a-\u003es-\u003e(s,b))-\u003et a-\u003es-\u003e(s,t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:mapAccum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "mapAccumR",
          "package": "SimpleH",
          "signature": "(a -\u003e s -\u003e (s, b)) -\u003e t a -\u003e s -\u003e (s, t b)",
          "source": "src/Algebra-Monad-State.html#mapAccumR",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "mapAccumR",
          "normalized": "(a-\u003eb-\u003e(b,c))-\u003ed a-\u003eb-\u003e(b,d c)",
          "package": "SimpleH",
          "partial": "Accum",
          "signature": "(a-\u003es-\u003e(s,b))-\u003et a-\u003es-\u003e(s,t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:mapAccumR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "mapAccumR_",
          "package": "SimpleH",
          "signature": "(a -\u003e s -\u003e (s, b)) -\u003e t a -\u003e s -\u003e t b",
          "source": "src/Algebra-Monad-State.html#mapAccumR_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "mapAccumR_",
          "normalized": "(a-\u003eb-\u003e(b,c))-\u003ed a-\u003eb-\u003ed c",
          "package": "SimpleH",
          "partial": "Accum",
          "signature": "(a-\u003es-\u003e(s,b))-\u003et a-\u003es-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:mapAccumR_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "mapAccum_",
          "package": "SimpleH",
          "signature": "(a -\u003e s -\u003e (s, b)) -\u003e t a -\u003e s -\u003e t b",
          "source": "src/Algebra-Monad-State.html#mapAccum_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "mapAccum_",
          "normalized": "(a-\u003eb-\u003e(b,c))-\u003ed a-\u003eb-\u003ed c",
          "package": "SimpleH",
          "partial": "Accum",
          "signature": "(a-\u003es-\u003e(s,b))-\u003et a-\u003es-\u003et b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:mapAccum_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "modify",
          "package": "SimpleH",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Algebra-Classes.html#modify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "SimpleH",
          "signature": "(s-\u003es)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "pop",
          "package": "SimpleH",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Algebra-Monad-State.html#pop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "pop",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "SimpleH",
          "signature": "t a-\u003ea-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:pop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "push",
          "package": "SimpleH",
          "signature": "t a -\u003e a -\u003e t a",
          "source": "src/Algebra-Monad-State.html#push",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "push",
          "normalized": "a b-\u003eb-\u003ea b",
          "package": "SimpleH",
          "signature": "t a-\u003ea-\u003et a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:push"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "put",
          "package": "SimpleH",
          "signature": "s -\u003e m ()",
          "source": "src/Algebra-Classes.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "SimpleH",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "saving",
          "package": "SimpleH",
          "signature": "Lens' s s' -\u003e m a -\u003e m a",
          "source": "src/Algebra-Monad-State.html#saving",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "saving",
          "normalized": "Lens' a b-\u003ec d-\u003ec d",
          "package": "SimpleH",
          "signature": "Lens' s s'-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:saving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "state",
          "package": "SimpleH",
          "signature": "Iso (State s a) (State t b) (s -\u003e (s, a)) (t -\u003e (t, b))",
          "source": "src/Algebra-Monad-State.html#state",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "state",
          "normalized": "Iso(State a b)(State c d)(a-\u003e(a,b))(c-\u003e(c,d))",
          "package": "SimpleH",
          "signature": "Iso(State s a)(State t b)(s-\u003e(s,a))(t-\u003e(t,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:state"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "stateA",
          "package": "SimpleH",
          "signature": "Iso (StateA m s a) (StateA m' s' a') (StateT s m a) (StateT s' m' a')",
          "source": "src/Algebra-Monad-State.html#stateA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "stateA",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:stateA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "stateT",
          "package": "SimpleH",
          "signature": "Iso (StateT s m a) (StateT t n b) (s -\u003e m (s, a)) (t -\u003e n (t, b))",
          "source": "src/Algebra-Monad-State.html#stateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "stateT",
          "normalized": "Iso(StateT a b c)(StateT d e f)(a-\u003eb(a,c))(d-\u003ee(d,f))",
          "package": "SimpleH",
          "signature": "Iso(StateT s m a)(StateT t n b)(s-\u003em(s,a))(t-\u003en(t,b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:stateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "withNext",
          "package": "SimpleH",
          "signature": "t a -\u003e a -\u003e t (a, Next a)",
          "source": "src/Algebra-Monad-State.html#withNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "withNext",
          "normalized": "a b-\u003eb-\u003ea(b,Next b)",
          "package": "SimpleH",
          "partial": "Next",
          "signature": "t a-\u003ea-\u003et(a,Next a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:withNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.State",
          "name": "withPrev",
          "package": "SimpleH",
          "signature": "a -\u003e t a -\u003e t (Prev a, a)",
          "source": "src/Algebra-Monad-State.html#withPrev",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad State",
          "module": "Algebra.Monad.State",
          "name": "withPrev",
          "normalized": "a-\u003eb a-\u003eb(Prev a,a)",
          "package": "SimpleH",
          "partial": "Prev",
          "signature": "a-\u003et a-\u003et(Prev a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-State.html#v:withPrev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "Writer",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Writer.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "Writer",
          "package": "SimpleH",
          "partial": "Writer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "MonadWriter",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "MonadWriter",
          "package": "SimpleH",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "Writer",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Writer.html#Writer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "Writer",
          "package": "SimpleH",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple Writer monad \n\u003c/p\u003e",
          "module": "Algebra.Monad.Writer",
          "name": "WriterT",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Writer.html#WriterT",
          "type": "data"
        },
        "index": {
          "description": "simple Writer monad",
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "WriterT",
          "package": "SimpleH",
          "partial": "Writer",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "_writer",
          "package": "SimpleH",
          "signature": "Iso (Writer w a) (Writer w' b) (w, a) (w', b)",
          "source": "src/Algebra-Monad-Writer.html#_writer",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "_writer",
          "normalized": "Iso(Writer a b)(Writer c d)(a,b)(c,d)",
          "package": "SimpleH",
          "signature": "Iso(Writer w a)(Writer w' b)(w,a)(w',b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:_writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "_writerT",
          "package": "SimpleH",
          "signature": "Iso (WriterT w m a) (WriterT w' m' b) (m (w, a)) (m' (w', b))",
          "source": "src/Algebra-Monad-Writer.html#_writerT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "_writerT",
          "normalized": "Iso(WriterT a b c)(WriterT d e f)(b(a,c))(e(d,f))",
          "package": "SimpleH",
          "signature": "Iso(WriterT w m a)(WriterT w' m' b)(m(w,a))(m'(w',b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:_writerT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "censor",
          "package": "SimpleH",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Algebra-Classes.html#censor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "censor",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "SimpleH",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "intercept",
          "package": "SimpleH",
          "signature": "m a -\u003e m (w, a)",
          "source": "src/Algebra-Monad-Writer.html#intercept",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "intercept",
          "normalized": "a b-\u003ea(c,b)",
          "package": "SimpleH",
          "signature": "m a-\u003em(w,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:intercept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "listen",
          "package": "SimpleH",
          "signature": "m a -\u003e m (w, a)",
          "source": "src/Algebra-Classes.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "listen",
          "normalized": "a b-\u003ea(c,b)",
          "package": "SimpleH",
          "signature": "m a-\u003em(w,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "mute",
          "package": "SimpleH",
          "signature": "m a -\u003e m a",
          "source": "src/Algebra-Monad-Writer.html#mute",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "mute",
          "normalized": "a b-\u003ea b",
          "package": "SimpleH",
          "signature": "m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:mute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad.Writer",
          "name": "tell",
          "package": "SimpleH",
          "signature": "w -\u003e m ()",
          "source": "src/Algebra-Classes.html#tell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad Writer",
          "module": "Algebra.Monad.Writer",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "SimpleH",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad-Writer.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Monad",
          "package": "SimpleH",
          "source": "src/Algebra-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Monad",
          "package": "SimpleH",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Applicative",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#Applicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Applicative",
          "package": "SimpleH",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Compose'",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Base.html#Compose%27",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Compose'",
          "package": "SimpleH",
          "partial": "Compose'",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:Compose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Functor",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#Functor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Functor",
          "package": "SimpleH",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Kleisli",
          "package": "SimpleH",
          "source": "src/Algebra-Monad-Base.html#Kleisli",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Kleisli",
          "package": "SimpleH",
          "partial": "Kleisli",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Monad",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#Monad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Monad",
          "package": "SimpleH",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadCont",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadCont",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadCont",
          "package": "SimpleH",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadError",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadError",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadError",
          "package": "SimpleH",
          "partial": "Monad Error",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all monads that have a fixpoint\n\u003c/p\u003e",
          "module": "Algebra.Monad",
          "name": "MonadFix",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadFix",
          "type": "class"
        },
        "index": {
          "description": "The class of all monads that have fixpoint",
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadFix",
          "package": "SimpleH",
          "partial": "Monad Fix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadList",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadList",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadList",
          "package": "SimpleH",
          "partial": "Monad List",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadReader",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadReader",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadReader",
          "package": "SimpleH",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadState",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadState",
          "package": "SimpleH",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadTrans",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadTrans",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadTrans",
          "package": "SimpleH",
          "partial": "Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "MonadWriter",
          "package": "SimpleH",
          "source": "src/Algebra-Classes.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "MonadWriter",
          "package": "SimpleH",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003c*=)",
          "package": "SimpleH",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m a",
          "source": "src/Algebra-Monad-Base.html#%3C%2A%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003c*=) \u003c*=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea b",
          "package": "SimpleH",
          "signature": "m a-\u003e(a-\u003em b)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-60--42--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003c*\u003e)",
          "package": "SimpleH",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Classes.html#%3C%2A%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "SimpleH",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003c=\u003c)",
          "package": "SimpleH",
          "signature": "(b -\u003e m c) -\u003e (a -\u003e m b) -\u003e a -\u003e m c",
          "source": "src/Algebra-Monad-Base.html#%3C%3D%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003c=\u003c) \u003c=\u003c",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb a)-\u003ed-\u003eb c",
          "package": "SimpleH",
          "signature": "(b-\u003em c)-\u003e(a-\u003em b)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-60--61--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(=\u003c\u003c)",
          "package": "SimpleH",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Algebra-Monad-Base.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "SimpleH",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003e=\u003e)",
          "package": "SimpleH",
          "signature": "(a -\u003e m b) -\u003e (b -\u003e m c) -\u003e a -\u003e m c",
          "source": "src/Algebra-Monad-Base.html#%3E%3D%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003e=\u003e) \u003e=\u003e",
          "normalized": "(a-\u003eb c)-\u003e(c-\u003eb d)-\u003ea-\u003eb d",
          "package": "SimpleH",
          "signature": "(a-\u003em b)-\u003e(b-\u003em c)-\u003ea-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-62--61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e)",
          "package": "SimpleH",
          "signature": "f a -\u003e f b -\u003e f b",
          "source": "src/Algebra-Monad-Base.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "SimpleH",
          "signature": "f a-\u003ef b-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e=)",
          "package": "SimpleH",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Algebra-Classes.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "SimpleH",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e\u003e=)",
          "package": "SimpleH",
          "signature": "(m a, m b) -\u003e (a -\u003e b -\u003e m c) -\u003e m c",
          "source": "src/Algebra-Monad-Base.html#%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e\u003e=) \u003e\u003e\u003e=",
          "normalized": "(a b,a c)-\u003e(b-\u003ec-\u003ea d)-\u003ea d",
          "package": "SimpleH",
          "signature": "(m a,m b)-\u003e(a-\u003eb-\u003em c)-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e\u003e\u003e=)",
          "package": "SimpleH",
          "signature": "(m a, m b, m c) -\u003e (a -\u003e b -\u003e c -\u003e m d) -\u003e m d",
          "source": "src/Algebra-Monad-Base.html#%3E%3E%3E%3E%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "(\u003e\u003e\u003e\u003e=) \u003e\u003e\u003e\u003e=",
          "normalized": "(a b,a c,a d)-\u003e(b-\u003ec-\u003ed-\u003ea e)-\u003ea e",
          "package": "SimpleH",
          "signature": "(m a,m b,m c)-\u003e(a-\u003eb-\u003ec-\u003em d)-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:-62--62--62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "Compose'",
          "package": "SimpleH",
          "signature": "Compose' ((g :.: f) a)",
          "source": "src/Algebra-Monad-Base.html#Compose%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "Compose'",
          "package": "SimpleH",
          "partial": "Compose'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:Compose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "_Compose'",
          "package": "SimpleH",
          "signature": "Iso (Compose' f g a) (Compose' h i b) (g (f a)) (i (h b))",
          "source": "src/Algebra-Monad-Base.html#_Compose%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "_Compose'",
          "package": "SimpleH",
          "partial": "Compose'",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:_Compose-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "_Kleisli",
          "package": "SimpleH",
          "signature": "Iso (Kleisli m a b) (Kleisli m' c d) (a -\u003e m b) (c -\u003e m' d)",
          "source": "src/Algebra-Monad-Base.html#_Kleisli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "_Kleisli",
          "normalized": "Iso(Kleisli a b c)(Kleisli d e f)(b-\u003ea c)(e-\u003ed f)",
          "package": "SimpleH",
          "partial": "Kleisli",
          "signature": "Iso(Kleisli m a b)(Kleisli m' c d)(a-\u003em b)(c-\u003em' d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:_Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "ask",
          "package": "SimpleH",
          "signature": "m r",
          "source": "src/Algebra-Classes.html#ask",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "ask",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "bind2",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e m c) -\u003e m a -\u003e m b -\u003e m c",
          "source": "src/Algebra-Monad-Base.html#bind2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "bind2",
          "normalized": "(a-\u003eb-\u003ec d)-\u003ec a-\u003ec b-\u003ec d",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003em c)-\u003em a-\u003em b-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:bind2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "bind3",
          "package": "SimpleH",
          "signature": "(a -\u003e b -\u003e c -\u003e m d) -\u003e m a -\u003e m b -\u003e m c -\u003e m d",
          "source": "src/Algebra-Monad-Base.html#bind3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "bind3",
          "normalized": "(a-\u003eb-\u003ec-\u003ed e)-\u003ed a-\u003ed b-\u003ed c-\u003ed e",
          "package": "SimpleH",
          "signature": "(a-\u003eb-\u003ec-\u003em d)-\u003em a-\u003em b-\u003em c-\u003em d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:bind3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "callCC",
          "package": "SimpleH",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Algebra-Classes.html#callCC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "SimpleH",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "catch",
          "package": "SimpleH",
          "signature": "(e -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Algebra-Classes.html#catch",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "catch",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "SimpleH",
          "signature": "(e-\u003em a)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "censor",
          "package": "SimpleH",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Algebra-Classes.html#censor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "censor",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "SimpleH",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "findM",
          "package": "SimpleH",
          "signature": "(a -\u003e m (Maybe b)) -\u003e t a -\u003e m (Maybe b)",
          "source": "src/Algebra-Monad-Base.html#findM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "findM",
          "normalized": "(a-\u003eb(Maybe c))-\u003ed a-\u003eb(Maybe c)",
          "package": "SimpleH",
          "signature": "(a-\u003em(Maybe b))-\u003et a-\u003em(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:findM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "foldlM",
          "package": "SimpleH",
          "signature": "(b -\u003e a -\u003e m a) -\u003e a -\u003e t b -\u003e m a",
          "source": "src/Algebra-Monad-Base.html#foldlM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "foldlM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed a-\u003ec b",
          "package": "SimpleH",
          "signature": "(b-\u003ea-\u003em a)-\u003ea-\u003et b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:foldlM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "foldrM",
          "package": "SimpleH",
          "signature": "(b -\u003e a -\u003e m a) -\u003e a -\u003e t b -\u003e m a",
          "source": "src/Algebra-Monad-Base.html#foldrM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "foldrM",
          "normalized": "(a-\u003eb-\u003ec b)-\u003eb-\u003ed a-\u003ec b",
          "package": "SimpleH",
          "signature": "(b-\u003ea-\u003em a)-\u003ea-\u003et b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:foldrM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "fork",
          "package": "SimpleH",
          "signature": "[a] -\u003e m a",
          "source": "src/Algebra-Classes.html#fork",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "fork",
          "normalized": "[a]-\u003eb a",
          "package": "SimpleH",
          "signature": "[a]-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "generalize",
          "package": "SimpleH",
          "signature": "t Id a -\u003e t m a",
          "source": "src/Algebra-Classes.html#generalize",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "generalize",
          "normalized": "a Id b-\u003ea c b",
          "package": "SimpleH",
          "signature": "t Id a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:generalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "get",
          "package": "SimpleH",
          "signature": "m s",
          "source": "src/Algebra-Classes.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "get",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "join",
          "package": "SimpleH",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Algebra-Classes.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "SimpleH",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "joinMap",
          "package": "SimpleH",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Algebra-Monad-Base.html#joinMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "joinMap",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "SimpleH",
          "partial": "Map",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:joinMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "lift",
          "package": "SimpleH",
          "signature": "m a -\u003e t m a",
          "source": "src/Algebra-Classes.html#lift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "SimpleH",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "listen",
          "package": "SimpleH",
          "signature": "m a -\u003e m (w, a)",
          "source": "src/Algebra-Classes.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "listen",
          "normalized": "a b-\u003ea(c,b)",
          "package": "SimpleH",
          "signature": "m a-\u003em(w,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "local",
          "package": "SimpleH",
          "signature": "(r -\u003e r) -\u003e m a -\u003e m a",
          "source": "src/Algebra-Classes.html#local",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "local",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "SimpleH",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "map",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Algebra-Classes.html#map",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "mfix",
          "package": "SimpleH",
          "signature": "(a -\u003e m a) -\u003e m a",
          "source": "src/Algebra-Classes.html#mfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "mfix",
          "normalized": "(a-\u003eb a)-\u003eb a",
          "package": "SimpleH",
          "signature": "(a-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:mfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "modify",
          "package": "SimpleH",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Algebra-Classes.html#modify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "SimpleH",
          "signature": "(s-\u003es)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "only",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e m a -\u003e m a",
          "source": "src/Algebra-Monad-Base.html#only",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "only",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003eb a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:only"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "put",
          "package": "SimpleH",
          "signature": "s -\u003e m ()",
          "source": "src/Algebra-Classes.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "SimpleH",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "return",
          "package": "SimpleH",
          "signature": "a -\u003e f a",
          "source": "src/Algebra-Monad-Base.html#return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "SimpleH",
          "signature": "a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "tell",
          "package": "SimpleH",
          "signature": "w -\u003e m ()",
          "source": "src/Algebra-Classes.html#tell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "SimpleH",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "throw",
          "package": "SimpleH",
          "signature": "e -\u003e m a",
          "source": "src/Algebra-Classes.html#throw",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "SimpleH",
          "signature": "e-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "until",
          "package": "SimpleH",
          "signature": "m (Maybe a) -\u003e m a",
          "source": "src/Algebra-Monad-Base.html#until",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "until",
          "normalized": "a(Maybe b)-\u003ea b",
          "package": "SimpleH",
          "signature": "m(Maybe a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:until"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Monad",
          "name": "while",
          "package": "SimpleH",
          "signature": "m Bool -\u003e m ()",
          "source": "src/Algebra-Monad-Base.html#while",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Monad",
          "module": "Algebra.Monad",
          "name": "while",
          "normalized": "a Bool-\u003ea()",
          "package": "SimpleH",
          "signature": "m Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Monad.html#v:while"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "Traversable",
          "package": "SimpleH",
          "source": "src/Algebra-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "Traversable",
          "package": "SimpleH",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "Contravariant",
          "package": "SimpleH",
          "source": "src/Algebra-Traversable.html#Contravariant",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "Contravariant",
          "package": "SimpleH",
          "partial": "Contravariant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#t:Contravariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "Traversable",
          "package": "SimpleH",
          "source": "src/Algebra-Traversable.html#Traversable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "Traversable",
          "package": "SimpleH",
          "partial": "Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#t:Traversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "collect",
          "package": "SimpleH",
          "signature": "f (t a) -\u003e t (f a)",
          "source": "src/Algebra-Traversable.html#collect",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "collect",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "SimpleH",
          "signature": "f(t a)-\u003et(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "flip",
          "package": "SimpleH",
          "signature": "f (c a) -\u003e c (f a)",
          "source": "src/Algebra-Traversable.html#flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "flip",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "SimpleH",
          "signature": "f(c a)-\u003ec(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "foreach",
          "package": "SimpleH",
          "signature": "t a -\u003e (a -\u003e f b) -\u003e f (t b)",
          "source": "src/Algebra-Traversable.html#foreach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "foreach",
          "normalized": "a b-\u003e(b-\u003ec d)-\u003ec(a d)",
          "package": "SimpleH",
          "signature": "t a-\u003e(a-\u003ef b)-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:foreach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "sequence",
          "package": "SimpleH",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Algebra-Traversable.html#sequence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "sequence",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "SimpleH",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "transpose",
          "package": "SimpleH",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Algebra-Traversable.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "transpose",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "SimpleH",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Algebra.Traversable",
          "name": "traverse",
          "package": "SimpleH",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Algebra-Traversable.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Algebra Traversable",
          "module": "Algebra.Traversable",
          "name": "traverse",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "SimpleH",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Algebra-Traversable.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing simple Lens functionality.\n\u003c/p\u003e\u003cp\u003eLenses are a Haskell abstraction that allows you to access and modify\npart of a structure, compensating for and improving upon Haskell's\nhorrendous record syntax and giving Haskell a first-class record system.\n\u003c/p\u003e\u003cp\u003eThis module defines three kinds of Lenses : Lenses that allow you to\naccess part of a structure; Traversals that allow you to modify part\nof a structure; and Isos which may be reversed. Lenses of any kind can\nbe composed with \u003ccode\u003e(.)\u003c/code\u003e, yielding a Lens of the most general kind, so\nthat composing a Lens with a Traversal or Iso yields a Lens, and a\nTraversal with an Iso yields a Traversal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Lens",
          "name": "Lens",
          "package": "SimpleH",
          "source": "src/Control-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "module providing simple Lens functionality Lenses are Haskell abstraction that allows you to access and modify part of structure compensating for and improving upon Haskell horrendous record syntax and giving Haskell first-class record system This module defines three kinds of Lenses Lenses that allow you to access part of structure Traversals that allow you to modify part of structure and Isos which may be reversed Lenses of any kind can be composed with yielding Lens of the most general kind so that composing Lens with Traversal or Iso yields Lens and Traversal with an Iso yields Traversal",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": ":\u003c-\u003e:",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#%3A%3C-%3E%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": ":\u003c-\u003e:",
          "package": "SimpleH",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t::-60--45--62-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Compound",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Compound",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Compound",
          "package": "SimpleH",
          "partial": "Compound",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Compound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Fold",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Fold",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Fold",
          "package": "SimpleH",
          "partial": "Fold",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Fold'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Fold%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Fold'",
          "package": "SimpleH",
          "partial": "Fold'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Fold-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Getter",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Getter",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Getter",
          "package": "SimpleH",
          "partial": "Getter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Getter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Getter'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Getter%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Getter'",
          "package": "SimpleH",
          "partial": "Getter'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Getter-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Iso",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Iso",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Iso",
          "package": "SimpleH",
          "partial": "Iso",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Iso'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Iso%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Iso'",
          "package": "SimpleH",
          "partial": "Iso'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Iso-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "IsoFunctor",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#IsoFunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "IsoFunctor",
          "package": "SimpleH",
          "partial": "Iso Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:IsoFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "IsoFunctor2",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#IsoFunctor2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "IsoFunctor2",
          "package": "SimpleH",
          "partial": "Iso Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:IsoFunctor2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Isomorphic",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Isomorphic",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Isomorphic",
          "package": "SimpleH",
          "partial": "Isomorphic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Isomorphic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens'",
          "package": "SimpleH",
          "partial": "Lens'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens1",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens1",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens2",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens2",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens3",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens3",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens3",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Lens4",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Lens4",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Lens4",
          "package": "SimpleH",
          "partial": "Lens",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Lens4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "LensLike",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "LensLike",
          "package": "SimpleH",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "LensLike'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "LensLike'",
          "package": "SimpleH",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Trav1",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Trav1",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Trav1",
          "package": "SimpleH",
          "partial": "Trav",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Trav1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Trav2",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Trav2",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Trav2",
          "package": "SimpleH",
          "partial": "Trav",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Trav2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Traversal",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Traversal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Traversal",
          "package": "SimpleH",
          "partial": "Traversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "Traversal'",
          "package": "SimpleH",
          "source": "src/Control-Lens.html#Traversal%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "Traversal'",
          "package": "SimpleH",
          "partial": "Traversal'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#t:Traversal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(%~)",
          "package": "SimpleH",
          "signature": "Traversal s t a b -\u003e (s -\u003e t) -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#%25~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(%~) %~",
          "normalized": "Traversal a b c d-\u003e(a-\u003eb)-\u003ec-\u003ed",
          "package": "SimpleH",
          "signature": "Traversal s t a b-\u003e(s-\u003et)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(%%~)",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e (b -\u003e a) -\u003e t -\u003e s",
          "source": "src/Control-Lens.html#%25%25~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(%%~) %%~",
          "normalized": "Iso a b c d-\u003e(d-\u003ec)-\u003eb-\u003ea",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003e(b-\u003ea)-\u003et-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-37--37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(%%-)",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e a -\u003e t -\u003e s",
          "source": "src/Control-Lens.html#%25%25-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(%%-) %%-",
          "normalized": "Iso a b c d-\u003ec-\u003eb-\u003ea",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003ea-\u003et-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-37--37--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(%-)",
          "package": "SimpleH",
          "signature": "Traversal s t a b -\u003e t -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#%25-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(%-) %-",
          "normalized": "Traversal a b c d-\u003eb-\u003ec-\u003ed",
          "package": "SimpleH",
          "signature": "Traversal s t a b-\u003et-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-37--45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(-.)",
          "package": "SimpleH",
          "signature": "Getter c u b v -\u003e (a -\u003e b) -\u003e a -\u003e c",
          "source": "src/Control-Lens.html#-.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(-.) -.",
          "normalized": "Getter a b c d-\u003e(e-\u003ec)-\u003ee-\u003ea",
          "package": "SimpleH",
          "signature": "Getter c u b v-\u003e(a-\u003eb)-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-45-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn infix synonym for \u003ccode\u003e\u003ca\u003emapIso2\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Control.Lens",
          "name": "(\u003c.\u003e)",
          "package": "SimpleH",
          "signature": "(a :\u003c-\u003e: c) -\u003e (b :\u003c-\u003e: d) -\u003e f a b :\u003c-\u003e: f c d",
          "source": "src/Control-Lens.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "An infix synonym for mapIso2",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
          "package": "SimpleH",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003ef a b-\u003ef c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(^?)",
          "package": "SimpleH",
          "signature": "a -\u003e Fold' a b -\u003e f b",
          "source": "src/Control-Lens.html#%5E%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(^?) ^?",
          "normalized": "a-\u003eFold' a b-\u003ec b",
          "package": "SimpleH",
          "signature": "a-\u003eFold' a b-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-94--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(^??)",
          "package": "SimpleH",
          "signature": "a -\u003e ((b -\u003e Const [b] b) -\u003e a -\u003e Const [b] a) -\u003e [b]",
          "source": "src/Control-Lens.html#%5E%3F%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(^??) ^??",
          "normalized": "a-\u003e((b-\u003eConst[b]b)-\u003ea-\u003eConst[b]a)-\u003e[b]",
          "package": "SimpleH",
          "signature": "a-\u003e((b-\u003eConst[b]b)-\u003ea-\u003eConst[b]a)-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-94--63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a value from a structure using a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e (or \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Control.Lens",
          "name": "(^.)",
          "package": "SimpleH",
          "signature": "a -\u003e Getter b b a a -\u003e b",
          "source": "src/Control-Lens.html#%5E.",
          "type": "function"
        },
        "index": {
          "description": "Retrieve value from structure using Lens or Iso",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(^.) ^.",
          "normalized": "a-\u003eGetter b b a a-\u003eb",
          "package": "SimpleH",
          "signature": "a-\u003eGetter b b a a-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(^..)",
          "package": "SimpleH",
          "signature": "a -\u003e Iso a a b b -\u003e b",
          "source": "src/Control-Lens.html#%5E..",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(^..) ^..",
          "normalized": "a-\u003eIso a a b b-\u003eb",
          "package": "SimpleH",
          "signature": "a-\u003eIso a a b b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:-94-.."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(.+)",
          "package": "SimpleH",
          "signature": "Fold s t a b -\u003e Fold s t a b -\u003e Fold s t a b",
          "source": "src/Control-Lens.html#.%2B",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(.+) .+",
          "normalized": "Fold a b c d-\u003eFold a b c d-\u003eFold a b c d",
          "package": "SimpleH",
          "signature": "Fold s t a b-\u003eFold s t a b-\u003eFold s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:.-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "(.-)",
          "package": "SimpleH",
          "signature": "(b -\u003e c) -\u003e Iso a a b b -\u003e a -\u003e c",
          "source": "src/Control-Lens.html#.-",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "(.-) .-",
          "normalized": "(a-\u003eb)-\u003eIso c c a a-\u003ec-\u003eb",
          "package": "SimpleH",
          "signature": "(b-\u003ec)-\u003eIso a a b b-\u003ea-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:.-45-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_1",
          "package": "SimpleH",
          "signature": "Lens s t a b",
          "source": "src/Control-Lens.html#_1",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_1",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_2",
          "package": "SimpleH",
          "signature": "Lens s t a b",
          "source": "src/Control-Lens.html#_2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_2",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_3",
          "package": "SimpleH",
          "signature": "Lens s t a b",
          "source": "src/Control-Lens.html#_3",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_3",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_4",
          "package": "SimpleH",
          "signature": "Lens s t a b",
          "source": "src/Control-Lens.html#_4",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_4",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Backwards",
          "package": "SimpleH",
          "signature": "Iso (Backwards f a) (Backwards g b) (f a) (g b)",
          "source": "src/Control-Lens.html#_Backwards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Backwards",
          "package": "SimpleH",
          "partial": "Backwards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Compose",
          "package": "SimpleH",
          "signature": "Iso ((f :.: g) a) ((f' :.: g') b) (f (g a)) (f' (g' b))",
          "source": "src/Control-Lens.html#_Compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Compose",
          "package": "SimpleH",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Const",
          "package": "SimpleH",
          "signature": "Iso (Const a c) (Const b c) a b",
          "source": "src/Control-Lens.html#_Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Const",
          "package": "SimpleH",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Dual",
          "package": "SimpleH",
          "signature": "Iso (Dual a) (Dual b) a b",
          "source": "src/Control-Lens.html#_Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Dual",
          "package": "SimpleH",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Endo",
          "package": "SimpleH",
          "signature": "Iso (Endo k a) (Endo k b) (k a a) (k b b)",
          "source": "src/Control-Lens.html#_Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Endo",
          "package": "SimpleH",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Flip",
          "package": "SimpleH",
          "signature": "Iso (Flip f b a) (Flip f d c) (f a b) (f c d)",
          "source": "src/Control-Lens.html#_Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Flip",
          "package": "SimpleH",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Id",
          "package": "SimpleH",
          "signature": "Iso (Id a) (Id b) a b",
          "source": "src/Control-Lens.html#_Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Id",
          "package": "SimpleH",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_Max",
          "package": "SimpleH",
          "signature": "Iso (Max a) (Max b) a b",
          "source": "src/Control-Lens.html#_Max",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_Max",
          "package": "SimpleH",
          "partial": "Max",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_Max"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_OrdList",
          "package": "SimpleH",
          "signature": "Iso (OrdList a) (OrdList b) [a] [b]",
          "source": "src/Control-Lens.html#_OrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_OrdList",
          "normalized": "Iso(OrdList a)(OrdList b)[a][b]",
          "package": "SimpleH",
          "partial": "Ord List",
          "signature": "Iso(OrdList a)(OrdList b)[a][b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_OrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_each",
          "package": "SimpleH",
          "signature": "Traversal a b s t",
          "source": "src/Control-Lens.html#_each",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_each",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_each"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_head",
          "package": "SimpleH",
          "signature": "Traversal' [a] a",
          "source": "src/Control-Lens.html#_head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_head",
          "normalized": "Traversal'[a]a",
          "package": "SimpleH",
          "signature": "Traversal'[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_iso",
          "package": "SimpleH",
          "signature": "Iso s t a b",
          "source": "src/Control-Lens.html#_iso",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_iso",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_l",
          "package": "SimpleH",
          "signature": "Traversal s t a b",
          "source": "src/Control-Lens.html#_l",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_l",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_list",
          "package": "SimpleH",
          "signature": "[a] :\u003c-\u003e: (() :+: (a :*: [a]))",
          "source": "src/Control-Lens.html#_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_list",
          "normalized": "[a]-\u003e(()(a*[a]))",
          "package": "SimpleH",
          "signature": "[a]-\u003e(()(a*[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_mapping",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e Iso (f s) (f' t) (f a) (f' b)",
          "source": "src/Control-Lens.html#_mapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_mapping",
          "normalized": "Iso a b c d-\u003eIso(e a)(f b)(e c)(f d)",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003eIso(f s)(f' t)(f a)(f' b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_mapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_mapping'",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e Iso (f s) (f t) (f a) (f b)",
          "source": "src/Control-Lens.html#_mapping%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_mapping'",
          "normalized": "Iso a b c d-\u003eIso(e a)(e b)(e c)(e d)",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003eIso(f s)(f t)(f a)(f b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_mapping-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_maybe",
          "package": "SimpleH",
          "signature": "Iso (Maybe Void) (Maybe a) Bool Bool",
          "source": "src/Control-Lens.html#_maybe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_maybe",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_maybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e_promapping :: Bifunctor f =\u003e Iso' a b -\u003e Iso' (f a c) (f b c)\n\u003c/p\u003e",
          "module": "Control.Lens",
          "name": "_promapping",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e Iso (f t x) (f s y) (f b x) (f a y)",
          "source": "src/Control-Lens.html#_promapping",
          "type": "function"
        },
        "index": {
          "description": "promapping Bifunctor Iso Iso",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_promapping",
          "normalized": "Iso a b c d-\u003eIso(e b f)(e a g)(e d f)(e c g)",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003eIso(f t x)(f s y)(f b x)(f a y)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_promapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_r",
          "package": "SimpleH",
          "signature": "Traversal s t a b",
          "source": "src/Control-Lens.html#_r",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_r",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_swapped",
          "package": "SimpleH",
          "signature": "Iso (a, b) (c, d) (b, a) (d, c)",
          "source": "src/Control-Lens.html#_swapped",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_swapped",
          "normalized": "Iso(a,b)(c,d)(b,a)(d,c)",
          "package": "SimpleH",
          "signature": "Iso(a,b)(c,d)(b,a)(d,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_swapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_tail",
          "package": "SimpleH",
          "signature": "Traversal' [a] [a]",
          "source": "src/Control-Lens.html#_tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_tail",
          "normalized": "Traversal'[a][a]",
          "package": "SimpleH",
          "signature": "Traversal'[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "_thunk",
          "package": "SimpleH",
          "signature": "Iso a b (IO a) (IO b)",
          "source": "src/Control-Lens.html#_thunk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "_thunk",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:_thunk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "adding",
          "package": "SimpleH",
          "signature": "n -\u003e Iso' n n",
          "source": "src/Control-Lens.html#adding",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "adding",
          "normalized": "a-\u003eIso' a a",
          "package": "SimpleH",
          "signature": "n-\u003eIso' n n",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:adding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "by",
          "package": "SimpleH",
          "signature": "Getter b u a v -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#by",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "by",
          "normalized": "Getter a b c d-\u003ec-\u003ea",
          "package": "SimpleH",
          "signature": "Getter b u a v-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:by"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReverse an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e\u003cpre\u003e\n from :: \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e a b -\u003e \u003ccode\u003e\u003ca\u003eIso'\u003c/a\u003e\u003c/code\u003e b a\n\u003c/pre\u003e",
          "module": "Control.Lens",
          "name": "from",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e Iso b a t s",
          "source": "src/Control-Lens.html#from",
          "type": "function"
        },
        "index": {
          "description": "Reverse an Iso from Iso Iso",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "from",
          "normalized": "Iso a b c d-\u003eIso d c b a",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003eIso b a t s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "getter",
          "package": "SimpleH",
          "signature": "(a -\u003e b) -\u003e Traversal' a b",
          "source": "src/Control-Lens.html#getter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "getter",
          "normalized": "(a-\u003eb)-\u003eTraversal' a b",
          "package": "SimpleH",
          "signature": "(a-\u003eb)-\u003eTraversal' a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:getter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "has",
          "package": "SimpleH",
          "signature": "Fold' a b -\u003e a -\u003e Bool",
          "source": "src/Control-Lens.html#has",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "has",
          "normalized": "Fold' a b-\u003ea-\u003eBool",
          "package": "SimpleH",
          "signature": "Fold' a b-\u003ea-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:has"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an \u003ccode\u003e\u003ca\u003eIso\u003c/a\u003e\u003c/code\u003e from two inverse functions.\n\u003c/p\u003e",
          "module": "Control.Lens",
          "name": "iso",
          "package": "SimpleH",
          "signature": "(a -\u003e s) -\u003e (t -\u003e b) -\u003e Iso s t a b",
          "source": "src/Control-Lens.html#iso",
          "type": "function"
        },
        "index": {
          "description": "Create an Iso from two inverse functions",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "iso",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eIso b c a d",
          "package": "SimpleH",
          "signature": "(a-\u003es)-\u003e(t-\u003eb)-\u003eIso s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eLens\u003c/a\u003e\u003c/code\u003e from a getter and setter function.\n\u003c/p\u003e\u003cpre\u003e\n lens :: (a -\u003e b) -\u003e (a -\u003e b -\u003e a) -\u003e \u003ccode\u003e\u003ca\u003eLens'\u003c/a\u003e\u003c/code\u003e a b\n\u003c/pre\u003e",
          "module": "Control.Lens",
          "name": "lens",
          "package": "SimpleH",
          "signature": "(a -\u003e s) -\u003e (a -\u003e t -\u003e b) -\u003e Lens s t a b",
          "source": "src/Control-Lens.html#lens",
          "type": "function"
        },
        "index": {
          "description": "Create Lens from getter and setter function lens Lens",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003ed)-\u003eLens b c a d",
          "package": "SimpleH",
          "signature": "(a-\u003es)-\u003e(a-\u003et-\u003eb)-\u003eLens s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "mapIso",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e Iso (f s) (f t) (f a) (f b)",
          "source": "src/Control-Lens.html#mapIso",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "mapIso",
          "normalized": "Iso a b c d-\u003eIso(e a)(e b)(e c)(e d)",
          "package": "SimpleH",
          "partial": "Iso",
          "signature": "Iso s t a b-\u003eIso(f s)(f t)(f a)(f b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:mapIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "mapIso2",
          "package": "SimpleH",
          "signature": "(a :\u003c-\u003e: c) -\u003e (b :\u003c-\u003e: d) -\u003e f a b :\u003c-\u003e: f c d",
          "source": "src/Control-Lens.html#mapIso2",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "mapIso2",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
          "package": "SimpleH",
          "partial": "Iso",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003ef a b-\u003ef c d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:mapIso2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003e\u003ca\u003eTraversal\u003c/a\u003e\u003c/code\u003e from a maybe getter and setter function.\n\u003c/p\u003e\u003cpre\u003e\n prism :: (a -\u003e (a:+:b)) -\u003e (a -\u003e b -\u003e a) -\u003e \u003ccode\u003e\u003ca\u003eTraversal'\u003c/a\u003e\u003c/code\u003e a b\n\u003c/pre\u003e",
          "module": "Control.Lens",
          "name": "prism",
          "package": "SimpleH",
          "signature": "(a -\u003e b :+: s) -\u003e (a -\u003e t -\u003e b) -\u003e Traversal s t a b",
          "source": "src/Control-Lens.html#prism",
          "type": "function"
        },
        "index": {
          "description": "Create Traversal from maybe getter and setter function prism Traversal",
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "prism",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003ed-\u003eb)-\u003eTraversal c d a b",
          "package": "SimpleH",
          "signature": "(a-\u003eb s)-\u003e(a-\u003et-\u003eb)-\u003eTraversal s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:prism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "sat",
          "package": "SimpleH",
          "signature": "(a -\u003e Bool) -\u003e Traversal' a a",
          "source": "src/Control-Lens.html#sat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "sat",
          "normalized": "(a-\u003eBool)-\u003eTraversal' a a",
          "package": "SimpleH",
          "signature": "(a-\u003eBool)-\u003eTraversal' a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "set",
          "package": "SimpleH",
          "signature": "Traversal s t a b -\u003e t -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#set",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "set",
          "normalized": "Traversal a b c d-\u003eb-\u003ec-\u003ed",
          "package": "SimpleH",
          "signature": "Traversal s t a b-\u003et-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "simple",
          "package": "SimpleH",
          "signature": "Iso' a b -\u003e Iso' a b",
          "source": "src/Control-Lens.html#simple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "simple",
          "normalized": "Iso' a b-\u003eIso' a b",
          "package": "SimpleH",
          "signature": "Iso' a b-\u003eIso' a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:simple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "warp",
          "package": "SimpleH",
          "signature": "Traversal s t a b -\u003e (s -\u003e t) -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#warp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "warp",
          "normalized": "Traversal a b c d-\u003e(a-\u003eb)-\u003ec-\u003ed",
          "package": "SimpleH",
          "signature": "Traversal s t a b-\u003e(s-\u003et)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:warp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "warp2",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e (s -\u003e s -\u003e t) -\u003e a -\u003e a -\u003e b",
          "source": "src/Control-Lens.html#warp2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "warp2",
          "normalized": "Iso a b c d-\u003e(a-\u003ea-\u003eb)-\u003ec-\u003ec-\u003ed",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003e(s-\u003es-\u003et)-\u003ea-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:warp2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Lens",
          "name": "yb",
          "package": "SimpleH",
          "signature": "Iso s t a b -\u003e t -\u003e b",
          "source": "src/Control-Lens.html#yb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Lens",
          "module": "Control.Lens",
          "name": "yb",
          "normalized": "Iso a b c d-\u003eb-\u003ed",
          "package": "SimpleH",
          "signature": "Iso s t a b-\u003et-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Lens.html#v:yb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.CmdArgs",
          "name": "CmdArgs",
          "package": "SimpleH",
          "source": "src/Control-Parser-CmdArgs.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "CmdArgs",
          "package": "SimpleH",
          "partial": "Cmd Args",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescribes whether an option takes an argument or not, and if so\n how the argument is injected into a value of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "ArgDescr",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "description": "Describes whether an option takes an argument or not and if so how the argument is injected into value of type",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "ArgDescr",
          "package": "SimpleH",
          "partial": "Arg Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#t:ArgDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eOptDescr\u003c/a\u003e\u003c/code\u003e describes a single option.\n\u003c/p\u003e\u003cp\u003eThe arguments to \u003ccode\u003e\u003ca\u003eOption\u003c/a\u003e\u003c/code\u003e are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e list of short option characters\n\u003c/li\u003e\u003cli\u003e list of long option strings (without \"--\")\n\u003c/li\u003e\u003cli\u003e argument descriptor\n\u003c/li\u003e\u003cli\u003e explanation of option for user\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "OptDescr",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "description": "Each OptDescr describes single option The arguments to Option are list of short option characters list of long option strings without argument descriptor explanation of option for user",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "OptDescr",
          "package": "SimpleH",
          "partial": "Opt Descr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#t:OptDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eno argument expected\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "NoArg",
          "package": "SimpleH",
          "signature": "NoArg a",
          "type": "function"
        },
        "index": {
          "description": "no argument expected",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "NoArg",
          "package": "SimpleH",
          "partial": "No Arg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:NoArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoptional argument\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "OptArg",
          "package": "SimpleH",
          "signature": "OptArg (Maybe String -\u003e a) String",
          "type": "function"
        },
        "index": {
          "description": "optional argument",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "OptArg",
          "normalized": "OptArg(Maybe String-\u003ea)String",
          "package": "SimpleH",
          "partial": "Opt Arg",
          "signature": "OptArg(Maybe String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:OptArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.CmdArgs",
          "name": "Option",
          "package": "SimpleH",
          "signature": "Option [Char] [String] (ArgDescr a) String",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "Option",
          "normalized": "Option[Char][String](ArgDescr a)String",
          "package": "SimpleH",
          "partial": "Option",
          "signature": "Option[Char][String](ArgDescr a)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:Option"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoption requires argument\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "ReqArg",
          "package": "SimpleH",
          "signature": "ReqArg (String -\u003e a) String",
          "type": "function"
        },
        "index": {
          "description": "option requires argument",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "ReqArg",
          "normalized": "ReqArg(String-\u003ea)String",
          "package": "SimpleH",
          "partial": "Req Arg",
          "signature": "ReqArg(String-\u003ea)String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:ReqArg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a Parser that preprocesses the command-line arguments,\n splitting options and their arguments into a user-defined data\n type.\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "tokenize",
          "package": "SimpleH",
          "signature": "[OptDescr a] -\u003e (String -\u003e a) -\u003e Parser String [String] [a]",
          "source": "src/Control-Parser-CmdArgs.html#tokenize",
          "type": "function"
        },
        "index": {
          "description": "Create Parser that preprocesses the command-line arguments splitting options and their arguments into user-defined data type",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "tokenize",
          "normalized": "[OptDescr a]-\u003e(String-\u003ea)-\u003eParser String[String][a]",
          "package": "SimpleH",
          "signature": "[OptDescr a]-\u003e(String-\u003ea)-\u003eParser String[String][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:tokenize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a string describing the usage of a command, derived from\n the header (first argument) and the options described by the \n second argument.\n\u003c/p\u003e",
          "module": "Control.Parser.CmdArgs",
          "name": "usageInfo",
          "package": "SimpleH",
          "signature": "String -\u003e [OptDescr a] -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Return string describing the usage of command derived from the header first argument and the options described by the second argument",
          "hierarchy": "Control Parser CmdArgs",
          "module": "Control.Parser.CmdArgs",
          "name": "usageInfo",
          "normalized": "String-\u003e[OptDescr a]-\u003eString",
          "package": "SimpleH",
          "partial": "Info",
          "signature": "String-\u003e[OptDescr a]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-CmdArgs.html#v:usageInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "HTTP",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "HTTP",
          "package": "SimpleH",
          "partial": "HTTP",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Header",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#Header",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Header",
          "package": "SimpleH",
          "partial": "Header",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Host",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#Host",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Host",
          "package": "SimpleH",
          "partial": "Host",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:Host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "ReqType",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#ReqType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "ReqType",
          "package": "SimpleH",
          "partial": "Req Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:ReqType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Request",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Request",
          "package": "SimpleH",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Response",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#Response",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Response",
          "package": "SimpleH",
          "partial": "Response",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Status",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#Status",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Status",
          "package": "SimpleH",
          "partial": "Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "URI",
          "package": "SimpleH",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "URI",
          "package": "SimpleH",
          "partial": "URI",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#t:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "GET",
          "package": "SimpleH",
          "signature": "GET",
          "source": "src/Control-Parser-HTTP.html#ReqType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "GET",
          "package": "SimpleH",
          "partial": "GET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:GET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "HEAD",
          "package": "SimpleH",
          "signature": "HEAD",
          "source": "src/Control-Parser-HTTP.html#ReqType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "HEAD",
          "package": "SimpleH",
          "partial": "HEAD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:HEAD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Header",
          "package": "SimpleH",
          "signature": "Header String String",
          "source": "src/Control-Parser-HTTP.html#Header",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Header",
          "package": "SimpleH",
          "partial": "Header",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:Header"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "NotFound",
          "package": "SimpleH",
          "signature": "NotFound",
          "source": "src/Control-Parser-HTTP.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "NotFound",
          "package": "SimpleH",
          "partial": "Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:NotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "OK",
          "package": "SimpleH",
          "signature": "OK",
          "source": "src/Control-Parser-HTTP.html#Status",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "OK",
          "package": "SimpleH",
          "partial": "OK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:OK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "POST",
          "package": "SimpleH",
          "signature": "POST ByteString",
          "source": "src/Control-Parser-HTTP.html#ReqType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "POST",
          "package": "SimpleH",
          "partial": "POST",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:POST"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Request",
          "package": "SimpleH",
          "signature": "Request ReqType [Header] Host FilePath",
          "source": "src/Control-Parser-HTTP.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Request",
          "normalized": "Request ReqType[Header]Host FilePath",
          "package": "SimpleH",
          "partial": "Request",
          "signature": "Request ReqType[Header]Host FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "Response",
          "package": "SimpleH",
          "signature": "Response Status [Header] ByteString",
          "source": "src/Control-Parser-HTTP.html#Response",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "Response",
          "normalized": "Response Status[Header]ByteString",
          "package": "SimpleH",
          "partial": "Response",
          "signature": "Response Status[Header]ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:Response"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "URI",
          "package": "SimpleH",
          "signature": "URI",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "URI",
          "package": "SimpleH",
          "partial": "URI",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:URI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "reqLine",
          "package": "SimpleH",
          "signature": "ParserT w String m [String]",
          "source": "src/Control-Parser-HTTP.html#reqLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "reqLine",
          "normalized": "ParserT a String b[String]",
          "package": "SimpleH",
          "partial": "Line",
          "signature": "ParserT w String m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:reqLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "request",
          "package": "SimpleH",
          "signature": "ParserT w String m [String]",
          "source": "src/Control-Parser-HTTP.html#request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "request",
          "normalized": "ParserT a String b[String]",
          "package": "SimpleH",
          "signature": "ParserT w String m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uri",
          "package": "SimpleH",
          "signature": "ParserT w s m URI",
          "source": "src/Control-Parser-HTTP.html#uri",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uri",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uri"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriFragment",
          "package": "SimpleH",
          "signature": "Maybe String",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriFragment",
          "package": "SimpleH",
          "partial": "Fragment",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriFragment"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriHost",
          "package": "SimpleH",
          "signature": "String",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriHost",
          "package": "SimpleH",
          "partial": "Host",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriHost"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriId",
          "package": "SimpleH",
          "signature": "ParserT w s m String",
          "source": "src/Control-Parser-HTTP.html#uriId",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriId",
          "package": "SimpleH",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriPath",
          "package": "SimpleH",
          "signature": "[String]",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriPath",
          "normalized": "[String]",
          "package": "SimpleH",
          "partial": "Path",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriPort",
          "package": "SimpleH",
          "signature": "Maybe Int",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriPort",
          "package": "SimpleH",
          "partial": "Port",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriPort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriRequest",
          "package": "SimpleH",
          "signature": "Maybe String",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriRequest",
          "package": "SimpleH",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriScheme",
          "package": "SimpleH",
          "signature": "String",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriScheme",
          "package": "SimpleH",
          "partial": "Scheme",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriScheme"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser.HTTP",
          "name": "uriUser",
          "package": "SimpleH",
          "signature": "Maybe String",
          "source": "src/Control-Parser-HTTP.html#URI",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser HTTP",
          "module": "Control.Parser.HTTP",
          "name": "uriUser",
          "package": "SimpleH",
          "partial": "User",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser-HTTP.html#v:uriUser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing simple Parser combinator functionality. Useful\n for small parsing tasks such as identifier parsing or command-line\n argument parsing\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Parser",
          "name": "Parser",
          "package": "SimpleH",
          "source": "src/Control-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "module providing simple Parser combinator functionality Useful for small parsing tasks such as identifier parsing or command-line argument parsing",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "Parser",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "Parser",
          "package": "SimpleH",
          "source": "src/Control-Parser.html#Parser",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "Parser",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#t:Parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "ParserA",
          "package": "SimpleH",
          "source": "src/Control-Parser.html#ParserA",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "ParserA",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#t:ParserA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "ParserT",
          "package": "SimpleH",
          "source": "src/Control-Parser.html#ParserT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "ParserT",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#t:ParserT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "Stream",
          "package": "SimpleH",
          "source": "src/Control-Parser.html#Stream",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "Stream",
          "package": "SimpleH",
          "partial": "Stream",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "(\u003c*\u003c)",
          "package": "SimpleH",
          "signature": "ParserT w b m c -\u003e ParserT w a m b -\u003e ParserT w a m c",
          "source": "src/Control-Parser.html#%3C%2A%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "(\u003c*\u003c) \u003c*\u003c",
          "normalized": "ParserT a b c d-\u003eParserT a e c b-\u003eParserT a e c d",
          "package": "SimpleH",
          "signature": "ParserT w b m c-\u003eParserT w a m b-\u003eParserT w a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:-60--42--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e(+)\u003c/code\u003e operator with lower priority\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "(\u003c+\u003e)",
          "package": "SimpleH",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Control-Parser.html#%3C%2B%3E",
          "type": "function"
        },
        "index": {
          "description": "The operator with lower priority",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "(\u003c+\u003e) \u003c+\u003e",
          "normalized": "a-\u003ea-\u003ea",
          "package": "SimpleH",
          "signature": "m-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:-60--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "(\u003e*\u003e)",
          "package": "SimpleH",
          "signature": "ParserT w a m b -\u003e ParserT w b m c -\u003e ParserT w a m c",
          "source": "src/Control-Parser.html#%3E%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "(\u003e*\u003e) \u003e*\u003e",
          "normalized": "ParserT a b c d-\u003eParserT a d c e-\u003eParserT a b c e",
          "package": "SimpleH",
          "signature": "ParserT w a m b-\u003eParserT w b m c-\u003eParserT w a m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:-62--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "ParserA",
          "package": "SimpleH",
          "signature": "ParserA (ParserT w s m a)",
          "source": "src/Control-Parser.html#ParserA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "ParserA",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:ParserA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "ParserT",
          "package": "SimpleH",
          "signature": "ParserT (StateT s (ListT (WriterT w m)) a)",
          "source": "src/Control-Parser.html#ParserT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "ParserT",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:ParserT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "_ParserA",
          "package": "SimpleH",
          "signature": "Iso (ParserA w m s a) (ParserA w' m' s' a') (ParserT w s m a) (ParserT w' s' m' a')",
          "source": "src/Control-Parser.html#_ParserA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "_ParserA",
          "package": "SimpleH",
          "partial": "Parser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:_ParserA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "alNum",
          "package": "SimpleH",
          "signature": "ParserT w s m Char",
          "source": "src/Control-Parser.html#alNum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "alNum",
          "package": "SimpleH",
          "partial": "Num",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:alNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChain an operator with an initial value\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "chainl",
          "package": "SimpleH",
          "signature": "ParserT w s m a -\u003e ParserT w s m (a -\u003e b -\u003e a) -\u003e ParserT w s m b -\u003e ParserT w s m a",
          "source": "src/Control-Parser.html#chainl",
          "type": "function"
        },
        "index": {
          "description": "Chain an operator with an initial value",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "chainl",
          "normalized": "ParserT a b c d-\u003eParserT a b c(d-\u003ee-\u003ed)-\u003eParserT a b c e-\u003eParserT a b c d",
          "package": "SimpleH",
          "signature": "ParserT w s m a-\u003eParserT w s m(a-\u003eb-\u003ea)-\u003eParserT w s m b-\u003eParserT w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:chainl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChain an operator with an initial value and several tail values.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "chainr",
          "package": "SimpleH",
          "signature": "ParserT w s m a -\u003e ParserT w s m (b -\u003e a -\u003e a) -\u003e ParserT w s m b -\u003e ParserT w s m a",
          "source": "src/Control-Parser.html#chainr",
          "type": "function"
        },
        "index": {
          "description": "Chain an operator with an initial value and several tail values",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "chainr",
          "normalized": "ParserT a b c d-\u003eParserT a b c(e-\u003ed-\u003ed)-\u003eParserT a b c e-\u003eParserT a b c d",
          "package": "SimpleH",
          "signature": "ParserT w s m a-\u003eParserT w s m(b-\u003ea-\u003ea)-\u003eParserT w s m b-\u003eParserT w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:chainr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "cons",
          "package": "SimpleH",
          "signature": "c -\u003e s -\u003e s",
          "source": "src/Control-Parser.html#cons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "cons",
          "normalized": "a-\u003eb-\u003eb",
          "package": "SimpleH",
          "signature": "c-\u003es-\u003es",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a single decimal digit\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "digit",
          "package": "SimpleH",
          "signature": "ParserT w s m Char",
          "source": "src/Control-Parser.html#digit",
          "type": "function"
        },
        "index": {
          "description": "Parse single decimal digit",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "digit",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:digit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "eitherParser",
          "package": "SimpleH",
          "signature": "(s -\u003e Either w a) :\u003c-\u003e: Parser w s a",
          "source": "src/Control-Parser.html#eitherParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "eitherParser",
          "normalized": "(a-\u003eEither b c)-\u003eParser b a c",
          "package": "SimpleH",
          "partial": "Parser",
          "signature": "(s-\u003eEither w a)-\u003eParser w s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:eitherParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a Stream is empty\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "emptyStream",
          "package": "SimpleH",
          "signature": "s -\u003e Bool",
          "source": "src/Control-Parser.html#emptyStream",
          "type": "function"
        },
        "index": {
          "description": "Test if Stream is empty",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "emptyStream",
          "normalized": "a-\u003eBool",
          "package": "SimpleH",
          "partial": "Stream",
          "signature": "s-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:emptyStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSucceed only if we are by the End Of Input.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "eoi",
          "package": "SimpleH",
          "signature": "ParserT w s m ()",
          "source": "src/Control-Parser.html#eoi",
          "type": "function"
        },
        "index": {
          "description": "Succeed only if we are by the End Of Input",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "eoi",
          "normalized": "ParserT a b c()",
          "package": "SimpleH",
          "signature": "ParserT w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:eoi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe end of line\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "eol",
          "package": "SimpleH",
          "signature": "ParserT w s m ()",
          "source": "src/Control-Parser.html#eol",
          "type": "function"
        },
        "index": {
          "description": "The end of line",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "eol",
          "normalized": "ParserT a b c()",
          "package": "SimpleH",
          "signature": "ParserT w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:eol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "letter",
          "package": "SimpleH",
          "signature": "ParserT w s m Char",
          "source": "src/Control-Parser.html#letter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "letter",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:letter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero, one or more successive occurences of a parser.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "many",
          "package": "SimpleH",
          "signature": "ParserT w c m a -\u003e ParserT w c m [a]",
          "source": "src/Control-Parser.html#many",
          "type": "function"
        },
        "index": {
          "description": "Parse zero one or more successive occurences of parser",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "many",
          "normalized": "ParserT a b c d-\u003eParserT a b c[d]",
          "package": "SimpleH",
          "signature": "ParserT w c m a-\u003eParserT w c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:many"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more successive&#233; occurences of a parser.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "many1",
          "package": "SimpleH",
          "signature": "ParserT w c m a -\u003e ParserT w c m [a]",
          "source": "src/Control-Parser.html#many1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more successive occurences of parser",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "many1",
          "normalized": "ParserT a b c d-\u003eParserT a b c[d]",
          "package": "SimpleH",
          "signature": "ParserT w c m a-\u003eParserT w c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:many1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse anything but a member of a set\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "noneOf",
          "package": "SimpleH",
          "signature": "t c -\u003e ParserT w s m c",
          "source": "src/Control-Parser.html#noneOf",
          "type": "function"
        },
        "index": {
          "description": "Parse anything but member of set",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "noneOf",
          "normalized": "a b-\u003eParserT c d e b",
          "package": "SimpleH",
          "partial": "Of",
          "signature": "t c-\u003eParserT w s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:noneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a litteral decimal number\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "number",
          "package": "SimpleH",
          "signature": "ParserT w s m n",
          "source": "src/Control-Parser.html#number",
          "type": "function"
        },
        "index": {
          "description": "Parse litteral decimal number",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "number",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:number"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a member of a set of values\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "oneOf",
          "package": "SimpleH",
          "signature": "t c -\u003e ParserT w s m c",
          "source": "src/Control-Parser.html#oneOf",
          "type": "function"
        },
        "index": {
          "description": "Parse member of set of values",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "oneOf",
          "normalized": "a b-\u003eParserT c d e b",
          "package": "SimpleH",
          "partial": "Of",
          "signature": "t c-\u003eParserT w s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "parser",
          "package": "SimpleH",
          "signature": "Iso (Parser w s a) (Parser x t b) (s -\u003e (w, [(s, a)])) (t -\u003e (x, [(t, b)]))",
          "source": "src/Control-Parser.html#parser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "parser",
          "normalized": "Iso(Parser a b c)(Parser d e f)(b-\u003e(a,[(b,c)]))(e-\u003e(d,[(e,f)]))",
          "package": "SimpleH",
          "signature": "Iso(Parser w s a)(Parser x t b)(s-\u003e(w,[(s,a)]))(t-\u003e(x,[(t,b)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "parserT",
          "package": "SimpleH",
          "signature": "Iso (ParserT w s m a) (ParserT x t n b) (s -\u003e m (w, [(s, a)])) (t -\u003e n (x, [(t, b)]))",
          "source": "src/Control-Parser.html#parserT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "parserT",
          "normalized": "Iso(ParserT a b c d)(ParserT e f g h)(b-\u003ec(a,[(b,d)]))(f-\u003eg(e,[(f,h)]))",
          "package": "SimpleH",
          "signature": "Iso(ParserT w s m a)(ParserT x t n b)(s-\u003em(w,[(s,a)]))(t-\u003en(x,[(t,b)]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:parserT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "pureParser",
          "package": "SimpleH",
          "signature": "(s -\u003e [a]) -\u003e ParserT w s m a",
          "source": "src/Control-Parser.html#pureParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "pureParser",
          "normalized": "(a-\u003e[b])-\u003eParserT c a d b",
          "package": "SimpleH",
          "partial": "Parser",
          "signature": "(s-\u003e[a])-\u003eParserT w s m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:pureParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse a delimited string, unsing \u003ccode\u003e\\\\\u003c/code\u003e as the quoting character\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "quotedString",
          "package": "SimpleH",
          "signature": "Char -\u003e ParserT w s m String",
          "source": "src/Control-Parser.html#quotedString",
          "type": "function"
        },
        "index": {
          "description": "Parse delimited string unsing as the quoting character",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "quotedString",
          "normalized": "Char-\u003eParserT a b c String",
          "package": "SimpleH",
          "partial": "String",
          "signature": "Char-\u003eParserT w s m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:quotedString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "readable",
          "package": "SimpleH",
          "signature": "ParserT w String m a",
          "source": "src/Control-Parser.html#readable",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "readable",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:readable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe remaining Stream to parse\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "remaining",
          "package": "SimpleH",
          "signature": "ParserT w s m s",
          "source": "src/Control-Parser.html#remaining",
          "type": "function"
        },
        "index": {
          "description": "The remaining Stream to parse",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "remaining",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:remaining"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "runParser",
          "package": "SimpleH",
          "signature": "Parser Void s a -\u003e s -\u003e [(s, a)]",
          "source": "src/Control-Parser.html#runParser",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "runParser",
          "normalized": "Parser Void a b-\u003ea-\u003e[(a,b)]",
          "package": "SimpleH",
          "partial": "Parser",
          "signature": "Parser Void s a-\u003es-\u003e[(s,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:runParser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "runParserT",
          "package": "SimpleH",
          "signature": "ParserT Void s m a -\u003e s -\u003e m [(s, a)]",
          "source": "src/Control-Parser.html#runParserT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "runParserT",
          "normalized": "ParserT Void a b c-\u003ea-\u003eb[(a,c)]",
          "package": "SimpleH",
          "partial": "Parser",
          "signature": "ParserT Void s m a-\u003es-\u003em[(s,a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:runParserT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a token and succeed if it verifies a predicate\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "satisfy",
          "package": "SimpleH",
          "signature": "(c -\u003e Bool) -\u003e ParserT w s m c",
          "source": "src/Control-Parser.html#satisfy",
          "type": "function"
        },
        "index": {
          "description": "Consume token and succeed if it verifies predicate",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "satisfy",
          "normalized": "(a-\u003eBool)-\u003eParserT b c d a",
          "package": "SimpleH",
          "signature": "(c-\u003eBool)-\u003eParserT w s m c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:satisfy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse zero or more successive occurences of a parser separated by\n occurences of a second parser.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "sepBy",
          "package": "SimpleH",
          "signature": "ParserT w c m a -\u003e ParserT w c m b -\u003e ParserT w c m [a]",
          "source": "src/Control-Parser.html#sepBy",
          "type": "function"
        },
        "index": {
          "description": "Parse zero or more successive occurences of parser separated by occurences of second parser",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "sepBy",
          "normalized": "ParserT a b c d-\u003eParserT a b c e-\u003eParserT a b c[d]",
          "package": "SimpleH",
          "partial": "By",
          "signature": "ParserT w c m a-\u003eParserT w c m b-\u003eParserT w c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:sepBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse one or more successive occurences of a parser separated by\n occurences of a second parser.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "sepBy1",
          "package": "SimpleH",
          "signature": "ParserT w c m a -\u003e ParserT w c m b -\u003e ParserT w c m [a]",
          "source": "src/Control-Parser.html#sepBy1",
          "type": "function"
        },
        "index": {
          "description": "Parse one or more successive occurences of parser separated by occurences of second parser",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "sepBy1",
          "normalized": "ParserT a b c d-\u003eParserT a b c e-\u003eParserT a b c[d]",
          "package": "SimpleH",
          "partial": "By",
          "signature": "ParserT w c m a-\u003eParserT w c m b-\u003eParserT w c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:sepBy1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a structure of characters or fail\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "several",
          "package": "SimpleH",
          "signature": "t c -\u003e ParserT w s m ()",
          "source": "src/Control-Parser.html#several",
          "type": "function"
        },
        "index": {
          "description": "Consume structure of characters or fail",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "several",
          "normalized": "a b-\u003eParserT c d e()",
          "package": "SimpleH",
          "signature": "t c-\u003eParserT w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:several"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a single fixed token or fail.\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "single",
          "package": "SimpleH",
          "signature": "c -\u003e ParserT w s m ()",
          "source": "src/Control-Parser.html#single",
          "type": "function"
        },
        "index": {
          "description": "Consume single fixed token or fail",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "single",
          "normalized": "a-\u003eParserT b c d()",
          "package": "SimpleH",
          "signature": "c-\u003eParserT w s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:single"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single space\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "space",
          "package": "SimpleH",
          "signature": "ParserT w s m Char",
          "source": "src/Control-Parser.html#space",
          "type": "function"
        },
        "index": {
          "description": "single space",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "space",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:space"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMany spaces\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "spaces",
          "package": "SimpleH",
          "signature": "ParserT w s m String",
          "source": "src/Control-Parser.html#spaces",
          "type": "function"
        },
        "index": {
          "description": "Many spaces",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "spaces",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:spaces"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConsume a token from the Stream\n\u003c/p\u003e",
          "module": "Control.Parser",
          "name": "token",
          "package": "SimpleH",
          "signature": "ParserT w s m c",
          "source": "src/Control-Parser.html#token",
          "type": "function"
        },
        "index": {
          "description": "Consume token from the Stream",
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "token",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:token"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parser",
          "name": "uncons",
          "package": "SimpleH",
          "signature": "s -\u003e Maybe (c, s)",
          "source": "src/Control-Parser.html#uncons",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Parser",
          "module": "Control.Parser",
          "name": "uncons",
          "normalized": "a-\u003eMaybe(b,a)",
          "package": "SimpleH",
          "signature": "s-\u003eMaybe(c,s)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Parser.html#v:uncons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.Time",
          "name": "Time",
          "package": "SimpleH",
          "source": "src/Control-Reactive-Time.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "Time",
          "package": "SimpleH",
          "partial": "Time",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.Time",
          "name": "Seconds",
          "package": "SimpleH",
          "source": "src/Control-Reactive-Time.html#Seconds",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "Seconds",
          "package": "SimpleH",
          "partial": "Seconds",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#t:Seconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type wrappers for timestamps that can be compared unambiguously\n\u003c/p\u003e",
          "module": "Control.Reactive.Time",
          "name": "Time",
          "package": "SimpleH",
          "source": "src/Control-Reactive-Time.html#Time",
          "type": "data"
        },
        "index": {
          "description": "type wrappers for timestamps that can be compared unambiguously",
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "Time",
          "package": "SimpleH",
          "partial": "Time",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.Time",
          "name": "currentTime",
          "package": "SimpleH",
          "signature": "IO Seconds",
          "source": "src/Control-Reactive-Time.html#currentTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "currentTime",
          "package": "SimpleH",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#v:currentTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstructs a Time representing the time by which the argument terminates.\n\u003c/p\u003e\u003cp\u003eWarning: This function executes its argument, ignoring its\n value. Thus, it would be wise to use it on idempotent blocking\n actions, such as \u003ccode\u003ereadMVar\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Reactive.Time",
          "name": "timeIO",
          "package": "SimpleH",
          "signature": "IO a -\u003e IO (Time Seconds)",
          "source": "src/Control-Reactive-Time.html#timeIO",
          "type": "function"
        },
        "index": {
          "description": "Constructs Time representing the time by which the argument terminates Warning This function executes its argument ignoring its value Thus it would be wise to use it on idempotent blocking actions such as readMVar",
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "timeIO",
          "normalized": "IO a-\u003eIO(Time Seconds)",
          "package": "SimpleH",
          "partial": "IO",
          "signature": "IO a-\u003eIO(Time Seconds)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#v:timeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.Time",
          "name": "timeOrigin",
          "package": "SimpleH",
          "signature": "IO a) -\u003e IO a",
          "source": "src/Control-Reactive-Time.html#timeOrigin",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "timeOrigin",
          "normalized": "IO a)-\u003eIO a",
          "package": "SimpleH",
          "partial": "Origin",
          "signature": "IO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#v:timeOrigin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Time's pure value. May not be defined immediately.\n\u003c/p\u003e",
          "module": "Control.Reactive.Time",
          "name": "timeVal",
          "package": "SimpleH",
          "signature": "Time t -\u003e TimeVal t",
          "source": "src/Control-Reactive-Time.html#timeVal",
          "type": "function"
        },
        "index": {
          "description": "Time pure value May not be defined immediately",
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "timeVal",
          "normalized": "Time a-\u003eTimeVal a",
          "package": "SimpleH",
          "partial": "Val",
          "signature": "Time t-\u003eTimeVal t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#v:timeVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.Time",
          "name": "waitTill",
          "package": "SimpleH",
          "signature": "Seconds -\u003e IO ()",
          "source": "src/Control-Reactive-Time.html#waitTill",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive Time",
          "module": "Control.Reactive.Time",
          "name": "waitTill",
          "normalized": "Seconds-\u003eIO()",
          "package": "SimpleH",
          "partial": "Till",
          "signature": "Seconds-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-Time.html#v:waitTill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.TimeVal",
          "name": "TimeVal",
          "package": "SimpleH",
          "source": "src/Control-Reactive-TimeVal.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Reactive TimeVal",
          "module": "Control.Reactive.TimeVal",
          "name": "TimeVal",
          "package": "SimpleH",
          "partial": "Time Val",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-TimeVal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type wrapper that adds a Bounded instance for types that don't possess one.\n\u003c/p\u003e",
          "module": "Control.Reactive.TimeVal",
          "name": "TimeVal",
          "package": "SimpleH",
          "source": "src/Control-Reactive-TimeVal.html#TimeVal",
          "type": "data"
        },
        "index": {
          "description": "type wrapper that adds Bounded instance for types that don possess one",
          "hierarchy": "Control Reactive TimeVal",
          "module": "Control.Reactive.TimeVal",
          "name": "TimeVal",
          "package": "SimpleH",
          "partial": "Time Val",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-TimeVal.html#t:TimeVal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.TimeVal",
          "name": "Always",
          "package": "SimpleH",
          "signature": "Always",
          "source": "src/Control-Reactive-TimeVal.html#TimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive TimeVal",
          "module": "Control.Reactive.TimeVal",
          "name": "Always",
          "package": "SimpleH",
          "partial": "Always",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-TimeVal.html#v:Always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.TimeVal",
          "name": "Never",
          "package": "SimpleH",
          "signature": "Never",
          "source": "src/Control-Reactive-TimeVal.html#TimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive TimeVal",
          "module": "Control.Reactive.TimeVal",
          "name": "Never",
          "package": "SimpleH",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-TimeVal.html#v:Never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive.TimeVal",
          "name": "Since",
          "package": "SimpleH",
          "signature": "Since t",
          "source": "src/Control-Reactive-TimeVal.html#TimeVal",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive TimeVal",
          "module": "Control.Reactive.TimeVal",
          "name": "Since",
          "package": "SimpleH",
          "partial": "Since",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive-TimeVal.html#v:Since"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "source": "src/Control-Reactive.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "partial": "Reactive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn event (a list of time-value pairs of increasing times)\n\u003c/p\u003e",
          "module": "Control.Reactive",
          "name": "Event",
          "package": "SimpleH",
          "source": "src/Control-Reactive.html#Event",
          "type": "data"
        },
        "index": {
          "description": "An event list of time-value pairs of increasing times",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "Event",
          "package": "SimpleH",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Future value (a value with a timestamp)\n\u003c/p\u003e",
          "module": "Control.Reactive",
          "name": "Future",
          "package": "SimpleH",
          "source": "src/Control-Reactive.html#Future",
          "type": "data"
        },
        "index": {
          "description": "Future value value with timestamp",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "Future",
          "package": "SimpleH",
          "partial": "Future",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#t:Future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "source": "src/Control-Reactive.html#Reactive",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "partial": "Reactive",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#t:Reactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'splice' operator. Occurs when \u003ccode\u003ea\u003c/code\u003e occurs.\n\u003c/p\u003e\u003cpre\u003e by t: a // b = (a,before t: b)\n\u003c/pre\u003e",
          "module": "Control.Reactive",
          "name": "(//)",
          "package": "SimpleH",
          "signature": "Event t a -\u003e Event t b -\u003e Event t (a, Event t b)",
          "source": "src/Control-Reactive.html#%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "The splice operator Occurs when occurs by before",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "(//) //",
          "normalized": "Event a b-\u003eEvent a c-\u003eEvent a(b,Event a c)",
          "package": "SimpleH",
          "signature": "Event t a-\u003eEvent t b-\u003eEvent t(a,Event t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:-47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "(\u003c|*\u003e)",
          "package": "SimpleH",
          "signature": "Reactive t (a -\u003e b) -\u003e Event t a -\u003e Event t b",
          "source": "src/Control-Reactive.html#%3C%7C%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "(\u003c|*\u003e) \u003c|*\u003e",
          "normalized": "Reactive a(b-\u003ec)-\u003eEvent a b-\u003eEvent a c",
          "package": "SimpleH",
          "signature": "Reactive t(a-\u003eb)-\u003eEvent t a-\u003eEvent t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:-60--124--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe 'over' operator. Occurs only when \u003ccode\u003ea\u003c/code\u003e occurs.\n\u003c/p\u003e\u003cpre\u003e by t: a \u003c|*\u003e (bi,b) = a \u003c*\u003e (minBound,bi):b\n\u003c/pre\u003e",
          "module": "Control.Reactive",
          "name": "(\u003c*|\u003e)",
          "package": "SimpleH",
          "signature": "Event t (a -\u003e b) -\u003e Reactive t a -\u003e Event t b",
          "source": "src/Control-Reactive.html#%3C%2A%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "The over operator Occurs only when occurs by bi minBound bi",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "(\u003c*|\u003e) \u003c*|\u003e",
          "normalized": "Event a(b-\u003ec)-\u003eReactive a b-\u003eEvent a c",
          "package": "SimpleH",
          "signature": "Event t(a-\u003eb)-\u003eReactive t a-\u003eEvent t b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:-60--42--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "signature": "Reactive a (Event t a)",
          "source": "src/Control-Reactive.html#Reactive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "Reactive",
          "package": "SimpleH",
          "partial": "Reactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:Reactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "_event",
          "package": "SimpleH",
          "signature": "Iso (Event t a) (Event t' b) [Future t a] [Future t' b]",
          "source": "src/Control-Reactive.html#_event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "_event",
          "normalized": "Iso(Event a b)(Event c d)[Future a b][Future c d]",
          "package": "SimpleH",
          "signature": "Iso(Event t a)(Event t' b)[Future t a][Future t' b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:_event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "_future",
          "package": "SimpleH",
          "signature": "Iso (Future t a) (Future t' b) (Time t, a) (Time t', b)",
          "source": "src/Control-Reactive.html#_future",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "_future",
          "normalized": "Iso(Future a b)(Future c d)(Time a,b)(Time c,d)",
          "package": "SimpleH",
          "signature": "Iso(Future t a)(Future t' b)(Time t,a)(Time t',b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:_future"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "_time",
          "package": "SimpleH",
          "signature": "Lens (Time t) (Time t') (Future t a) (Future t' a)",
          "source": "src/Control-Reactive.html#_time",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "_time",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:_time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "_value",
          "package": "SimpleH",
          "signature": "Lens a b (Future t a) (Future t b)",
          "source": "src/Control-Reactive.html#_value",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "_value",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:_value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "atTimes",
          "package": "SimpleH",
          "signature": "[t] -\u003e Event t ()",
          "source": "src/Control-Reactive.html#atTimes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "atTimes",
          "normalized": "[a]-\u003eEvent a()",
          "package": "SimpleH",
          "partial": "Times",
          "signature": "[t]-\u003eEvent t()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:atTimes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "event",
          "package": "SimpleH",
          "signature": "IO a -\u003e IO (Event Seconds a)",
          "source": "src/Control-Reactive.html#event",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "event",
          "normalized": "IO a-\u003eIO(Event Seconds a)",
          "package": "SimpleH",
          "signature": "IO a-\u003eIO(Event Seconds a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "eventMay",
          "package": "SimpleH",
          "signature": "IO (Maybe a) -\u003e IO (Event Seconds a)",
          "source": "src/Control-Reactive.html#eventMay",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "eventMay",
          "normalized": "IO(Maybe a)-\u003eIO(Event Seconds a)",
          "package": "SimpleH",
          "partial": "May",
          "signature": "IO(Maybe a)-\u003eIO(Event Seconds a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:eventMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "futureIO",
          "package": "SimpleH",
          "signature": "IO a -\u003e IO (Future Seconds a)",
          "source": "src/Control-Reactive.html#futureIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "futureIO",
          "normalized": "IO a-\u003eIO(Future Seconds a)",
          "package": "SimpleH",
          "partial": "IO",
          "signature": "IO a-\u003eIO(Future Seconds a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:futureIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup the occurences of an event by equality. Occurs when the first occurence of a group occurs. \n\u003c/p\u003e",
          "module": "Control.Reactive",
          "name": "groupE",
          "package": "SimpleH",
          "signature": "Event t a -\u003e Event t (Event t a)",
          "source": "src/Control-Reactive.html#groupE",
          "type": "function"
        },
        "index": {
          "description": "Group the occurences of an event by equality Occurs when the first occurence of group occurs",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "groupE",
          "normalized": "Event a b-\u003eEvent a(Event a b)",
          "package": "SimpleH",
          "signature": "Event t a-\u003eEvent t(Event t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:groupE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "headE",
          "package": "SimpleH",
          "signature": "Event t a -\u003e a",
          "source": "src/Control-Reactive.html#headE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "headE",
          "normalized": "Event a b-\u003eb",
          "package": "SimpleH",
          "signature": "Event t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:headE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "mapFutures",
          "package": "SimpleH",
          "signature": "(Future t a -\u003e Future t' b) -\u003e Event t a -\u003e Event t' b",
          "source": "src/Control-Reactive.html#mapFutures",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "mapFutures",
          "normalized": "(Future a b-\u003eFuture c d)-\u003eEvent a b-\u003eEvent c d",
          "package": "SimpleH",
          "partial": "Futures",
          "signature": "(Future t a-\u003eFuture t' b)-\u003eEvent t a-\u003eEvent t' b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:mapFutures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "mask",
          "package": "SimpleH",
          "signature": "Event t Bool -\u003e Event t a -\u003e Event t a",
          "source": "src/Control-Reactive.html#mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "mask",
          "normalized": "Event a Bool-\u003eEvent a b-\u003eEvent a b",
          "package": "SimpleH",
          "signature": "Event t Bool-\u003eEvent t a-\u003eEvent t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "mkEvent",
          "package": "SimpleH",
          "signature": "[(t, a)] -\u003e Event t a",
          "source": "src/Control-Reactive.html#mkEvent",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "mkEvent",
          "normalized": "[(a,b)]-\u003eEvent a b",
          "package": "SimpleH",
          "partial": "Event",
          "signature": "[(t,a)]-\u003eEvent t a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:mkEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "react",
          "package": "SimpleH",
          "signature": "IO a -\u003e (Event Seconds a -\u003e IO (Event Seconds (IO ()))) -\u003e IO ()",
          "source": "src/Control-Reactive.html#react",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "react",
          "normalized": "IO a-\u003e(Event Seconds a-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "package": "SimpleH",
          "signature": "IO a-\u003e(Event Seconds a-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:react"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "react2",
          "package": "SimpleH",
          "signature": "IO a -\u003e IO b -\u003e (Event Seconds a -\u003e Event Seconds b -\u003e IO (Event Seconds (IO ()))) -\u003e IO ()",
          "source": "src/Control-Reactive.html#react2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "react2",
          "normalized": "IO a-\u003eIO b-\u003e(Event Seconds a-\u003eEvent Seconds b-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "package": "SimpleH",
          "signature": "IO a-\u003eIO b-\u003e(Event Seconds a-\u003eEvent Seconds b-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:react2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "react3",
          "package": "SimpleH",
          "signature": "IO a -\u003e IO b -\u003e IO c -\u003e (Event Seconds a -\u003e Event Seconds b -\u003e Event Seconds c -\u003e IO (Event Seconds (IO ()))) -\u003e IO ()",
          "source": "src/Control-Reactive.html#react3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "react3",
          "normalized": "IO a-\u003eIO b-\u003eIO c-\u003e(Event Seconds a-\u003eEvent Seconds b-\u003eEvent Seconds c-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "package": "SimpleH",
          "signature": "IO a-\u003eIO b-\u003eIO c-\u003e(Event Seconds a-\u003eEvent Seconds b-\u003eEvent Seconds c-\u003eIO(Event Seconds(IO())))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:react3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSinks an action event into the Real World. Actions are evaluated\n as closely to their specified time as possible. However, they are\n all executed in order, even if it means delaying the next action\n further than its required time. For real-time realization of\n events, see the \u003ccode\u003e\u003ca\u003erealizeRT\u003c/a\u003e\u003c/code\u003e function\n\u003c/p\u003e",
          "module": "Control.Reactive",
          "name": "realize",
          "package": "SimpleH",
          "signature": "Event Seconds (IO ()) -\u003e IO ()",
          "source": "src/Control-Reactive.html#realize",
          "type": "function"
        },
        "index": {
          "description": "Sinks an action event into the Real World Actions are evaluated as closely to their specified time as possible However they are all executed in order even if it means delaying the next action further than its required time For real-time realization of events see the realizeRT function",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "realize",
          "normalized": "Event Seconds(IO())-\u003eIO()",
          "package": "SimpleH",
          "signature": "Event Seconds(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:realize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSinks a frame event into the real-world, skipping frames if they come\n too late, thus always performing the frame closest to the current time.\n\u003c/p\u003e",
          "module": "Control.Reactive",
          "name": "realizeRT",
          "package": "SimpleH",
          "signature": "Event Seconds (IO ()) -\u003e IO ()",
          "source": "src/Control-Reactive.html#realizeRT",
          "type": "function"
        },
        "index": {
          "description": "Sinks frame event into the real-world skipping frames if they come too late thus always performing the frame closest to the current time",
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "realizeRT",
          "normalized": "Event Seconds(IO())-\u003eIO()",
          "package": "SimpleH",
          "partial": "RT",
          "signature": "Event Seconds(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:realizeRT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "times",
          "package": "SimpleH",
          "signature": "Event t a -\u003e Event t (Time t)",
          "source": "src/Control-Reactive.html#times",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "times",
          "normalized": "Event a b-\u003eEvent a(Time a)",
          "package": "SimpleH",
          "signature": "Event t a-\u003eEvent t(Time t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:times"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "times'",
          "package": "SimpleH",
          "signature": "Event t a -\u003e Event t t",
          "source": "src/Control-Reactive.html#times%27",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "times'",
          "normalized": "Event a b-\u003eEvent a a",
          "package": "SimpleH",
          "signature": "Event t a-\u003eEvent t t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:times-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Reactive",
          "name": "withTime",
          "package": "SimpleH",
          "signature": "Event t a -\u003e Event t (Time t, a)",
          "source": "src/Control-Reactive.html#withTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Reactive",
          "module": "Control.Reactive",
          "name": "withTime",
          "normalized": "Event a b-\u003eEvent a(Time a,b)",
          "package": "SimpleH",
          "partial": "Time",
          "signature": "Event t a-\u003eEvent t(Time t,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Control-Reactive.html#v:withTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "Containers",
          "package": "SimpleH",
          "source": "src/Data-Containers.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "Containers",
          "package": "SimpleH",
          "partial": "Containers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "DataMap",
          "package": "SimpleH",
          "source": "src/Data-Containers.html#DataMap",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "DataMap",
          "package": "SimpleH",
          "partial": "Data Map",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#t:DataMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA Map from keys \u003ccode\u003ek\u003c/code\u003e to values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Containers",
          "name": "Map",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "description": "Map from keys to values",
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "Map",
          "package": "SimpleH",
          "partial": "Map",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#t:Map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of values \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Containers",
          "name": "Set",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "description": "set of values",
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "Set",
          "package": "SimpleH",
          "partial": "Set",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#t:Set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "ascList",
          "package": "SimpleH",
          "signature": "Iso [(k, a)] [(k', a')] (Map k a) (Map k' a')",
          "source": "src/Data-Containers.html#ascList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "ascList",
          "normalized": "Iso[(a,b)][(c,d)](Map a b)(Map c d)",
          "package": "SimpleH",
          "partial": "List",
          "signature": "Iso[(k,a)][(k',a')](Map k a)(Map k' a')",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:ascList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "at",
          "package": "SimpleH",
          "signature": "k -\u003e Lens' m (Maybe a)",
          "source": "src/Data-Containers.html#at",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "at",
          "normalized": "a-\u003eLens' b(Maybe c)",
          "package": "SimpleH",
          "signature": "k-\u003eLens' m(Maybe a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "delete",
          "package": "SimpleH",
          "signature": "k -\u003e m -\u003e m",
          "source": "src/Data-Containers.html#delete",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "delete",
          "normalized": "a-\u003eb-\u003eb",
          "package": "SimpleH",
          "signature": "k-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "fromList",
          "package": "SimpleH",
          "signature": "[(k, a)] -\u003e m",
          "source": "src/Data-Containers.html#fromList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "fromList",
          "normalized": "[(a,b)]-\u003ec",
          "package": "SimpleH",
          "partial": "List",
          "signature": "[(k,a)]-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:fromList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "insert",
          "package": "SimpleH",
          "signature": "k -\u003e a -\u003e m -\u003e m",
          "source": "src/Data-Containers.html#insert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "insert",
          "normalized": "a-\u003eb-\u003ec-\u003ec",
          "package": "SimpleH",
          "signature": "k-\u003ea-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "member",
          "package": "SimpleH",
          "signature": "k -\u003e m -\u003e Bool",
          "source": "src/Data-Containers.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "member",
          "normalized": "a-\u003eb-\u003eBool",
          "package": "SimpleH",
          "signature": "k-\u003em-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:member"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "singleton",
          "package": "SimpleH",
          "signature": "k -\u003e a -\u003e m",
          "source": "src/Data-Containers.html#singleton",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "singleton",
          "normalized": "a-\u003eb-\u003ec",
          "package": "SimpleH",
          "signature": "k-\u003ea-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:singleton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Containers",
          "name": "touch",
          "package": "SimpleH",
          "signature": "k -\u003e m -\u003e m",
          "source": "src/Data-Containers.html#touch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Containers",
          "module": "Data.Containers",
          "name": "touch",
          "normalized": "a-\u003eb-\u003eb",
          "package": "SimpleH",
          "signature": "k-\u003em-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Containers.html#v:touch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "SimpleH",
          "source": "src/Data-Serialize.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "Serialize",
          "package": "SimpleH",
          "partial": "Serialize",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Serialize.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize",
          "name": "Serializable",
          "package": "SimpleH",
          "source": "src/Data-Serialize.html#Serializable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "Serializable",
          "package": "SimpleH",
          "partial": "Serializable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Serialize.html#t:Serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize",
          "name": "encode",
          "package": "SimpleH",
          "signature": "t -\u003e Builder",
          "source": "src/Data-Serialize.html#encode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "encode",
          "normalized": "a-\u003eBuilder",
          "package": "SimpleH",
          "signature": "t-\u003eBuilder",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Serialize.html#v:encode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Serialize",
          "name": "serializable",
          "package": "SimpleH",
          "signature": "Parser String ByteString t",
          "source": "src/Data-Serialize.html#serializable",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Serialize",
          "module": "Data.Serialize",
          "name": "serializable",
          "package": "SimpleH",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/Data-Serialize.html#v:serializable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "SimpleH",
          "name": "SimpleH",
          "package": "SimpleH",
          "source": "src/SimpleH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "SimpleH",
          "module": "SimpleH",
          "name": "SimpleH",
          "package": "SimpleH",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/SimpleH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "source": "src/System-Simple-File.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "DirEntry",
          "package": "SimpleH",
          "source": "src/System-Simple-File.html#DirEntry",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "DirEntry",
          "package": "SimpleH",
          "partial": "Dir Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#t:DirEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "source": "src/System-Simple-File.html#File",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "partial": "File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#t:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "Location",
          "package": "SimpleH",
          "source": "src/System-Simple-File.html#Location",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "Location",
          "package": "SimpleH",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "DirEntry",
          "package": "SimpleH",
          "signature": "DirEntry FilePath File",
          "source": "src/System-Simple-File.html#DirEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "DirEntry",
          "package": "SimpleH",
          "partial": "Dir Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:DirEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "Directory",
          "package": "SimpleH",
          "signature": "Directory (Map String File)",
          "source": "src/System-Simple-File.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "Directory",
          "package": "SimpleH",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "signature": "File (Maybe String) (Maybe ByteString)",
          "source": "src/System-Simple-File.html#File",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "File",
          "package": "SimpleH",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "Here",
          "package": "SimpleH",
          "signature": "Here",
          "source": "src/System-Simple-File.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "Here",
          "package": "SimpleH",
          "partial": "Here",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:Here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "Owner",
          "package": "SimpleH",
          "signature": "Owner",
          "source": "src/System-Simple-File.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "Owner",
          "package": "SimpleH",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:Owner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "Self",
          "package": "SimpleH",
          "signature": "Self",
          "source": "src/System-Simple-File.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "Self",
          "package": "SimpleH",
          "partial": "Self",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:Self"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "System",
          "package": "SimpleH",
          "signature": "System",
          "source": "src/System-Simple-File.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "System",
          "package": "SimpleH",
          "partial": "System",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:System"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "child",
          "package": "SimpleH",
          "signature": "Traversal' File File",
          "source": "src/System-Simple-File.html#child",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "child",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:child"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "contents",
          "package": "SimpleH",
          "signature": "Traversal' File (Map String File)",
          "source": "src/System-Simple-File.html#contents",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "contents",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:contents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "descendant",
          "package": "SimpleH",
          "signature": "Fold' File File",
          "source": "src/System-Simple-File.html#descendant",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "descendant",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:descendant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "entry",
          "package": "SimpleH",
          "signature": "Lens' DirEntry File",
          "source": "src/System-Simple-File.html#entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "entry",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "file",
          "package": "SimpleH",
          "signature": "Traversal' File (Maybe String, Maybe ByteString)",
          "source": "src/System-Simple-File.html#file",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "file",
          "normalized": "Traversal' File(Maybe String,Maybe ByteString)",
          "package": "SimpleH",
          "signature": "Traversal' File(Maybe String,Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "fileData",
          "package": "SimpleH",
          "signature": "Traversal' File ByteString",
          "source": "src/System-Simple-File.html#fileData",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "fileData",
          "package": "SimpleH",
          "partial": "Data",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:fileData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "fileName",
          "package": "SimpleH",
          "signature": "Lens' DirEntry String",
          "source": "src/System-Simple-File.html#fileName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "fileName",
          "package": "SimpleH",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "getFile",
          "package": "SimpleH",
          "signature": "FilePath -\u003e IO File",
          "source": "src/System-Simple-File.html#getFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "getFile",
          "normalized": "FilePath-\u003eIO File",
          "package": "SimpleH",
          "partial": "File",
          "signature": "FilePath-\u003eIO File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:getFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "modTime",
          "package": "SimpleH",
          "signature": "FilePath -\u003e IO Seconds",
          "source": "src/System-Simple-File.html#modTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "modTime",
          "normalized": "FilePath-\u003eIO Seconds",
          "package": "SimpleH",
          "partial": "Time",
          "signature": "FilePath-\u003eIO Seconds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:modTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "named",
          "package": "SimpleH",
          "signature": "(String -\u003e Bool) -\u003e Traversal' DirEntry DirEntry",
          "source": "src/System-Simple-File.html#named",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "named",
          "normalized": "(String-\u003eBool)-\u003eTraversal' DirEntry DirEntry",
          "package": "SimpleH",
          "signature": "(String-\u003eBool)-\u003eTraversal' DirEntry DirEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "pathTo",
          "package": "SimpleH",
          "signature": "Location -\u003e FilePath",
          "source": "src/System-Simple-File.html#pathTo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "pathTo",
          "normalized": "Location-\u003eFilePath",
          "package": "SimpleH",
          "partial": "To",
          "signature": "Location-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:pathTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "text",
          "package": "SimpleH",
          "signature": "Traversal' File String",
          "source": "src/System-Simple-File.html#text",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "text",
          "package": "SimpleH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.File",
          "name": "withExtension",
          "package": "SimpleH",
          "signature": "String -\u003e Traversal' DirEntry DirEntry",
          "source": "src/System-Simple-File.html#withExtension",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "withExtension",
          "normalized": "String-\u003eTraversal' DirEntry DirEntry",
          "package": "SimpleH",
          "partial": "Extension",
          "signature": "String-\u003eTraversal' DirEntry DirEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:withExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe working directory, as a DirEntry\n\u003c/p\u003e",
          "module": "System.Simple.File",
          "name": "workingDirectory",
          "package": "SimpleH",
          "signature": "IO File",
          "source": "src/System-Simple-File.html#workingDirectory",
          "type": "function"
        },
        "index": {
          "description": "The working directory as DirEntry",
          "hierarchy": "System Simple File",
          "module": "System.Simple.File",
          "name": "workingDirectory",
          "package": "SimpleH",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-File.html#v:workingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.Network",
          "name": "Network",
          "package": "SimpleH",
          "source": "src/System-Simple-Network.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Simple Network",
          "module": "System.Simple.Network",
          "name": "Network",
          "package": "SimpleH",
          "partial": "Network",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-Network.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.Network",
          "name": "PortNumber",
          "package": "SimpleH",
          "source": "src/System-Simple-Network.html#PortNumber",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Simple Network",
          "module": "System.Simple.Network",
          "name": "PortNumber",
          "package": "SimpleH",
          "partial": "Port Number",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-Network.html#t:PortNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.Network",
          "name": "Socket",
          "package": "SimpleH",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Simple Network",
          "module": "System.Simple.Network",
          "name": "Socket",
          "package": "SimpleH",
          "partial": "Socket",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-Network.html#t:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.Network",
          "name": "accept",
          "package": "SimpleH",
          "signature": "Socket -\u003e IO Handle",
          "source": "src/System-Simple-Network.html#accept",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple Network",
          "module": "System.Simple.Network",
          "name": "accept",
          "normalized": "Socket-\u003eIO Handle",
          "package": "SimpleH",
          "signature": "Socket-\u003eIO Handle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-Network.html#v:accept"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple.Network",
          "name": "listenOn",
          "package": "SimpleH",
          "signature": "PortNumber -\u003e IO Socket",
          "source": "src/System-Simple-Network.html#listenOn",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Simple Network",
          "module": "System.Simple.Network",
          "name": "listenOn",
          "normalized": "PortNumber-\u003eIO Socket",
          "package": "SimpleH",
          "partial": "On",
          "signature": "PortNumber-\u003eIO Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple-Network.html#v:listenOn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Simple",
          "name": "Simple",
          "package": "SimpleH",
          "source": "src/System-Simple.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System Simple",
          "module": "System.Simple",
          "name": "Simple",
          "package": "SimpleH",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/SimpleH/docs/System-Simple.html#"
      }
    }
  ]
]