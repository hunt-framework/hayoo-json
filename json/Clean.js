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
        "word": "Clean"
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
          "module": "Clean.Applicative",
          "name": "Applicative",
          "package": "Clean",
          "source": "src/Clean-Applicative.html",
          "type": "module"
        },
        "index": {
          "description": "module describing applicative functors",
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "Applicative",
          "package": "Clean",
          "partial": "Applicative",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "Applicative",
          "package": "Clean",
          "source": "src/Clean-Classes.html#Applicative",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "Applicative",
          "package": "Clean",
          "partial": "Applicative",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#t:Applicative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper for applicative functors with actions executed in the reverse order\n\u003c/p\u003e",
          "module": "Clean.Applicative",
          "name": "Backwards",
          "package": "Clean",
          "source": "src/Clean-Applicative.html#Backwards",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper for applicative functors with actions executed in the reverse order",
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "Backwards",
          "package": "Clean",
          "partial": "Backwards",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#t:Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper type for lists with zipping Applicative instances, such that\n\u003ccode\u003eZipList [f1,...,fn] \u003ccode\u003e\u003ca\u003e\u003c*\u003e\u003c/a\u003e\u003c/code\u003e ZipList [x1,...,xn] == ZipList [f1 x1,...,fn xn]\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Clean.Applicative",
          "name": "ZipList",
          "package": "Clean",
          "source": "src/Clean-Applicative.html#ZipList",
          "type": "newtype"
        },
        "index": {
          "description": "wrapper type for lists with zipping Applicative instances such that ZipList f1 fn ZipList x1 xn ZipList f1 x1 fn xn",
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "ZipList",
          "package": "Clean",
          "partial": "Zip List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#t:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Tree equivalent to ZipList\n\u003c/p\u003e",
          "module": "Clean.Applicative",
          "name": "ZipTree",
          "package": "Clean",
          "source": "src/Clean-Applicative.html#ZipTree",
          "type": "newtype"
        },
        "index": {
          "description": "The Tree equivalent to ZipList",
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "ZipTree",
          "package": "Clean",
          "partial": "Zip Tree",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#t:ZipTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "(*\u003e)",
          "package": "Clean",
          "signature": "f a1 -\u003e f a -\u003e f a",
          "source": "src/Clean-Applicative.html#%2A%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "(*\u003e) *\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Clean",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:-42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "(\u003c*)",
          "package": "Clean",
          "signature": "f a1 -\u003e f a -\u003e f a1",
          "source": "src/Clean-Applicative.html#%3C%2A",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "(\u003c*) \u003c*",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Clean",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:-60--42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "(\u003c*\u003e)",
          "package": "Clean",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Clean-Classes.html#%3C%2A%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "(\u003c*\u003e) \u003c*\u003e",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "Clean",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:-60--42--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "Backwards",
          "package": "Clean",
          "signature": "Backwards",
          "source": "src/Clean-Applicative.html#Backwards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "Backwards",
          "package": "Clean",
          "partial": "Backwards",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:Backwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "ZipList",
          "package": "Clean",
          "signature": "ZipList",
          "source": "src/Clean-Applicative.html#ZipList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "ZipList",
          "package": "Clean",
          "partial": "Zip List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:ZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "ZipTree",
          "package": "Clean",
          "signature": "ZipTree (Tree a)",
          "source": "src/Clean-Applicative.html#ZipTree",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "ZipTree",
          "package": "Clean",
          "partial": "Zip Tree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:ZipTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "ap",
          "package": "Clean",
          "signature": "f (a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Clean-Applicative.html#ap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "ap",
          "normalized": "a(b-\u003ec)-\u003ea b-\u003ea c",
          "package": "Clean",
          "signature": "f(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:ap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "forwards",
          "package": "Clean",
          "signature": "f a",
          "source": "src/Clean-Applicative.html#Backwards",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "forwards",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:forwards"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "getZipList",
          "package": "Clean",
          "signature": "[a]",
          "source": "src/Clean-Applicative.html#ZipList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "getZipList",
          "normalized": "[a]",
          "package": "Clean",
          "partial": "Zip List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:getZipList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "liftA",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Clean-Applicative.html#liftA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "liftA2",
          "package": "Clean",
          "signature": "(a1 -\u003e a -\u003e b) -\u003e f a1 -\u003e f a -\u003e f b",
          "source": "src/Clean-Applicative.html#liftA2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "liftA2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "liftA3",
          "package": "Clean",
          "signature": "(a2 -\u003e a1 -\u003e a -\u003e b) -\u003e f a2 -\u003e f a1 -\u003e f a -\u003e f b",
          "source": "src/Clean-Applicative.html#liftA3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "liftA3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003ea-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "liftA4",
          "package": "Clean",
          "signature": "(a3 -\u003e a2 -\u003e a1 -\u003e a -\u003e b) -\u003e f a3 -\u003e f a2 -\u003e f a1 -\u003e f a -\u003e f b",
          "source": "src/Clean-Applicative.html#liftA4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "liftA4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec a-\u003ec a-\u003ec a-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ef a-\u003ef a-\u003ef a-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:liftA4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "plusA",
          "package": "Clean",
          "signature": "f b -\u003e f b -\u003e f b",
          "source": "src/Clean-Applicative.html#plusA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "plusA",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Clean",
          "signature": "f b-\u003ef b-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:plusA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Applicative",
          "name": "zeroA",
          "package": "Clean",
          "signature": "f a",
          "source": "src/Clean-Applicative.html#zeroA",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Applicative",
          "module": "Clean.Applicative",
          "name": "zeroA",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Applicative.html#v:zeroA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "Arrow",
          "package": "Clean",
          "source": "src/Clean-Arrow.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "Arrow",
          "package": "Clean",
          "partial": "Arrow",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "Apply",
          "package": "Clean",
          "source": "src/Clean-Arrow.html#Apply",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "Apply",
          "package": "Clean",
          "partial": "Apply",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#t:Apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "Arrow",
          "package": "Clean",
          "source": "src/Clean-Arrow.html#Arrow",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "Arrow",
          "package": "Clean",
          "partial": "Arrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#t:Arrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "Kleisli",
          "package": "Clean",
          "source": "src/Clean-Arrow.html#Kleisli",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "Kleisli",
          "package": "Clean",
          "partial": "Kleisli",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#t:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "(|||)",
          "package": "Clean",
          "signature": "k a a1 -\u003e k b b1 -\u003e k (:+: a b) (Either a1 b1)",
          "source": "src/Clean-Arrow.html#%7C%7C%7C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "(|||) |||",
          "normalized": "a b b-\u003ea c c-\u003ea(b c)(Either b c)",
          "package": "Clean",
          "signature": "k a a-\u003ek b b-\u003ek(a b)(Either a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:-124--124--124-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "(\u003c\u003c\u003c)",
          "package": "Clean",
          "signature": "k b c -\u003e k a b -\u003e k a c",
          "source": "src/Clean-Arrow.html#%3C%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "(\u003c\u003c\u003c) \u003c\u003c\u003c",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "Clean",
          "signature": "k b c-\u003ek a b-\u003ek a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:-60--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "(\u003e\u003e\u003e)",
          "package": "Clean",
          "signature": "k a b -\u003e k b c -\u003e k a c",
          "source": "src/Clean-Arrow.html#%3E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "(\u003e\u003e\u003e) \u003e\u003e\u003e",
          "normalized": "a b c-\u003ea c d-\u003ea b d",
          "package": "Clean",
          "signature": "k a b-\u003ek b c-\u003ek a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:-62--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "(\u003e\u003e^)",
          "package": "Clean",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Clean-Arrow.html#%3E%3E%5E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "(\u003e\u003e^) \u003e\u003e^",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "Clean",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:-62--62--94-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "(^\u003e\u003e)",
          "package": "Clean",
          "signature": "(b -\u003e b1) -\u003e f b1 a -\u003e f b a",
          "source": "src/Clean-Arrow.html#%5E%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "(^\u003e\u003e) ^\u003e\u003e",
          "normalized": "(a-\u003ea)-\u003eb a c-\u003eb a c",
          "package": "Clean",
          "signature": "(b-\u003eb)-\u003ef b a-\u003ef b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:-94--62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "Kleisli",
          "package": "Clean",
          "signature": "Kleisli",
          "source": "src/Clean-Arrow.html#Kleisli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "Kleisli",
          "package": "Clean",
          "partial": "Kleisli",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:Kleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "app",
          "package": "Clean",
          "signature": "k a c -\u003e k a c",
          "source": "src/Clean-Arrow.html#app",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "app",
          "normalized": "a b c-\u003ea b c",
          "package": "Clean",
          "signature": "k a c-\u003ek a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:app"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "apply",
          "package": "Clean",
          "signature": "k (k a b, a) b",
          "source": "src/Clean-Arrow.html#apply",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "apply",
          "normalized": "a(a b c,b)c",
          "package": "Clean",
          "signature": "k(k a b,a)b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "arr",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e k a b",
          "source": "src/Clean-Arrow.html#arr",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "arr",
          "normalized": "(a-\u003eb)-\u003ec a b",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003ek a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:arr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Arrow",
          "name": "runKleisli",
          "package": "Clean",
          "signature": "a -\u003e m b",
          "source": "src/Clean-Arrow.html#Kleisli",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Arrow",
          "module": "Clean.Arrow",
          "name": "runKleisli",
          "normalized": "a-\u003eb c",
          "package": "Clean",
          "partial": "Kleisli",
          "signature": "a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Arrow.html#v:runKleisli"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Core",
          "package": "Clean",
          "source": "src/Clean-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Core",
          "package": "Clean",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": ":*:",
          "package": "Clean",
          "source": "src/Clean-Core.html#%3A%2A%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": ":*:",
          "package": "Clean",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": ":+:",
          "package": "Clean",
          "source": "src/Clean-Core.html#%3A%2B%3A",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": ":+:",
          "package": "Clean",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Category",
          "package": "Clean",
          "source": "src/Clean-Core.html#Category",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Category",
          "package": "Clean",
          "partial": "Category",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Category"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Choice",
          "package": "Clean",
          "source": "src/Clean-Core.html#Choice",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Choice",
          "package": "Clean",
          "partial": "Choice",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe dual of a monoid is the same as the original, with arguments reversed \n\u003c/p\u003e",
          "module": "Clean.Core",
          "name": "Dual",
          "package": "Clean",
          "source": "src/Clean-Core.html#Dual",
          "type": "newtype"
        },
        "index": {
          "description": "The dual of monoid is the same as the original with arguments reversed",
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Dual",
          "package": "Clean",
          "partial": "Dual",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid on category endomorphisms under composition \n\u003c/p\u003e",
          "module": "Clean.Core",
          "name": "Endo",
          "package": "Clean",
          "source": "src/Clean-Core.html#Endo",
          "type": "newtype"
        },
        "index": {
          "description": "monoid on category endomorphisms under composition",
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Endo",
          "package": "Clean",
          "partial": "Endo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Interleave",
          "package": "Clean",
          "source": "src/Clean-Core.html#Interleave",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Interleave",
          "package": "Clean",
          "partial": "Interleave",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA monoid is a semigroup with a null element such that \u003ccode\u003ezero + a == a + zero == a\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Clean.Core",
          "name": "Monoid",
          "package": "Clean",
          "source": "src/Clean-Core.html#Monoid",
          "type": "class"
        },
        "index": {
          "description": "monoid is semigroup with null element such that zero zero",
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Monoid",
          "package": "Clean",
          "partial": "Monoid",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Monoid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn ordered list\n\u003c/p\u003e",
          "module": "Clean.Core",
          "name": "OrdList",
          "package": "Clean",
          "source": "src/Clean-Core.html#OrdList",
          "type": "newtype"
        },
        "index": {
          "description": "An ordered list",
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "OrdList",
          "package": "Clean",
          "partial": "Ord List",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:OrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Ring",
          "package": "Clean",
          "source": "src/Clean-Core.html#Ring",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Ring",
          "package": "Clean",
          "partial": "Ring",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Ring"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe class of all types that have a binary operation. Note that the operation\nisn't necesarily commutative (in the case of lists, for example)\n\u003c/p\u003e",
          "module": "Clean.Core",
          "name": "Semigroup",
          "package": "Clean",
          "source": "src/Clean-Core.html#Semigroup",
          "type": "class"
        },
        "index": {
          "description": "The class of all types that have binary operation Note that the operation isn necesarily commutative in the case of lists for example",
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Semigroup",
          "package": "Clean",
          "partial": "Semigroup",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Semigroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Split",
          "package": "Clean",
          "source": "src/Clean-Core.html#Split",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Split",
          "package": "Clean",
          "partial": "Split",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "SubSemi",
          "package": "Clean",
          "source": "src/Clean-Core.html#SubSemi",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "SubSemi",
          "package": "Clean",
          "partial": "Sub Semi",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:SubSemi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Unit",
          "package": "Clean",
          "source": "src/Clean-Core.html#Unit",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Unit",
          "package": "Clean",
          "partial": "Unit",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#t:Unit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(&)",
          "package": "Clean",
          "signature": "b -\u003e (b -\u003e c) -\u003e c",
          "source": "src/Clean-Core.html#%26",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(&) &",
          "normalized": "a-\u003e(a-\u003eb)-\u003eb",
          "package": "Clean",
          "signature": "b-\u003e(b-\u003ec)-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:-38-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(*)",
          "package": "Clean",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Clean-Core.html#%2A",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(*) *",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Clean",
          "signature": "m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:-42-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(+)",
          "package": "Clean",
          "signature": "m -\u003e m -\u003e m",
          "source": "src/Clean-Core.html#%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(+) +",
          "normalized": "a-\u003ea-\u003ea",
          "package": "Clean",
          "signature": "m-\u003em-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:-43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(\u003c|\u003e)",
          "package": "Clean",
          "signature": "k a c -\u003e k b c -\u003e k (a :+: b) c",
          "source": "src/Clean-Core.html#%3C%7C%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(\u003c|\u003e) \u003c|\u003e",
          "normalized": "a b c-\u003ea d c-\u003ea(b d)c",
          "package": "Clean",
          "signature": "k a c-\u003ek b c-\u003ek(a b)c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:-60--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(\u003c#\u003e)",
          "package": "Clean",
          "signature": "k a c -\u003e k b d -\u003e k (a, b) (c, d)",
          "source": "src/Clean-Core.html#%3C%23%3E",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(\u003c#\u003e) \u003c#\u003e",
          "normalized": "a b c-\u003ea d e-\u003ea(b,d)(c,e)",
          "package": "Clean",
          "signature": "k a c-\u003ek b d-\u003ek(a,b)(c,d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:-60--35--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "(.)",
          "package": "Clean",
          "signature": "k b c -\u003e k a b -\u003e k a c",
          "source": "src/Clean-Core.html#.",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "(.) .",
          "normalized": "a b c-\u003ea d b-\u003ea d c",
          "package": "Clean",
          "signature": "k b c-\u003ek a b-\u003ek a c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Dual",
          "package": "Clean",
          "signature": "Dual",
          "source": "src/Clean-Core.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Dual",
          "package": "Clean",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:Dual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Endo",
          "package": "Clean",
          "signature": "Endo",
          "source": "src/Clean-Core.html#Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Endo",
          "package": "Clean",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:Endo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "Interleave",
          "package": "Clean",
          "signature": "Interleave",
          "source": "src/Clean-Core.html#Interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "Interleave",
          "package": "Clean",
          "partial": "Interleave",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:Interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "OrdList",
          "package": "Clean",
          "signature": "OrdList",
          "source": "src/Clean-Core.html#OrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "OrdList",
          "package": "Clean",
          "partial": "Ord List",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:OrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "const",
          "package": "Clean",
          "signature": "a -\u003e f a",
          "source": "src/Clean-Core.html#const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "const",
          "normalized": "a-\u003eb a",
          "package": "Clean",
          "signature": "a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "fail",
          "package": "Clean",
          "signature": "[Char] -\u003e a",
          "source": "src/Clean-Core.html#fail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "fail",
          "normalized": "[Char]-\u003ea",
          "package": "Clean",
          "signature": "[Char]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:fail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "first",
          "package": "Clean",
          "signature": "k a c -\u003e k (a, d) (c, d)",
          "source": "src/Clean-Core.html#first",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "first",
          "normalized": "a b c-\u003ea(b,d)(c,d)",
          "package": "Clean",
          "signature": "k a c-\u003ek(a,d)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "getDual",
          "package": "Clean",
          "signature": "m",
          "source": "src/Clean-Core.html#Dual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "getDual",
          "package": "Clean",
          "partial": "Dual",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:getDual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "getOrdList",
          "package": "Clean",
          "signature": "[a]",
          "source": "src/Clean-Core.html#OrdList",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "getOrdList",
          "normalized": "[a]",
          "package": "Clean",
          "partial": "Ord List",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:getOrdList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "guard",
          "package": "Clean",
          "signature": "Bool -\u003e f ()",
          "source": "src/Clean-Core.html#guard",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "guard",
          "normalized": "Bool-\u003ea()",
          "package": "Clean",
          "signature": "Bool-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:guard"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "id",
          "package": "Clean",
          "signature": "k a a",
          "source": "src/Clean-Core.html#id",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "id",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "ifThenElse",
          "package": "Clean",
          "signature": "Bool -\u003e t -\u003e t -\u003e t",
          "source": "src/Clean-Core.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "ifThenElse",
          "normalized": "Bool-\u003ea-\u003ea-\u003ea",
          "package": "Clean",
          "partial": "Then Else",
          "signature": "Bool-\u003et-\u003et-\u003et",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "interleave",
          "package": "Clean",
          "signature": "[a]",
          "source": "src/Clean-Core.html#Interleave",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "interleave",
          "normalized": "[a]",
          "package": "Clean",
          "signature": "[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:interleave"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "left",
          "package": "Clean",
          "signature": "k a c -\u003e k (:+: a c) c",
          "source": "src/Clean-Core.html#left",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "left",
          "normalized": "a b c-\u003ea(b c)c",
          "package": "Clean",
          "signature": "k a c-\u003ek(a c)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "one",
          "package": "Clean",
          "signature": "m",
          "source": "src/Clean-Core.html#one",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "one",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:one"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "pure",
          "package": "Clean",
          "signature": "a -\u003e f a",
          "source": "src/Clean-Core.html#pure",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "pure",
          "normalized": "a-\u003eb a",
          "package": "Clean",
          "signature": "a-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:pure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "right",
          "package": "Clean",
          "signature": "k b c -\u003e k (:+: c b) c",
          "source": "src/Clean-Core.html#right",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "right",
          "normalized": "a b c-\u003ea(c b)c",
          "package": "Clean",
          "signature": "k b c-\u003ek(c b)c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "runEndo",
          "package": "Clean",
          "signature": "k a a",
          "source": "src/Clean-Core.html#Endo",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "runEndo",
          "package": "Clean",
          "partial": "Endo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:runEndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "second",
          "package": "Clean",
          "signature": "k b d -\u003e k (c, b) (c, d)",
          "source": "src/Clean-Core.html#second",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "second",
          "normalized": "a b c-\u003ea(d,b)(d,c)",
          "package": "Clean",
          "signature": "k b d-\u003ek(c,b)(c,d)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:second"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "to",
          "package": "Clean",
          "signature": "b -\u003e a",
          "source": "src/Clean-Core.html#to",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "to",
          "normalized": "a-\u003eb",
          "package": "Clean",
          "signature": "b-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:to"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Core",
          "name": "zero",
          "package": "Clean",
          "signature": "m",
          "source": "src/Clean-Core.html#zero",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Core",
          "module": "Clean.Core",
          "name": "zero",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Core.html#v:zero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "Foldable",
          "package": "Clean",
          "source": "src/Clean-Foldable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "Foldable",
          "package": "Clean",
          "partial": "Foldable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "Foldable",
          "package": "Clean",
          "source": "src/Clean-Foldable.html#Foldable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "Foldable",
          "package": "Clean",
          "partial": "Foldable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#t:Foldable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "concat",
          "package": "Clean",
          "signature": "t m -\u003e m",
          "source": "src/Clean-Foldable.html#concat",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "concat",
          "normalized": "a b-\u003eb",
          "package": "Clean",
          "signature": "t m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:concat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "count",
          "package": "Clean",
          "signature": "t a -\u003e a1",
          "source": "src/Clean-Foldable.html#count",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "count",
          "normalized": "a b-\u003eb",
          "package": "Clean",
          "signature": "t a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:count"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "filter",
          "package": "Clean",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e f a",
          "source": "src/Clean-Foldable.html#filter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "filter",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003ec a",
          "package": "Clean",
          "signature": "(a-\u003eBool)-\u003et a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:filter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "fold",
          "package": "Clean",
          "signature": "t m -\u003e m",
          "source": "src/Clean-Foldable.html#fold",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "fold",
          "normalized": "a b-\u003eb",
          "package": "Clean",
          "signature": "t m-\u003em",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "foldMap",
          "package": "Clean",
          "signature": "(a -\u003e m) -\u003e t a -\u003e m",
          "source": "src/Clean-Foldable.html#foldMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "foldMap",
          "normalized": "(a-\u003eb)-\u003ec a-\u003eb",
          "package": "Clean",
          "partial": "Map",
          "signature": "(a-\u003em)-\u003et a-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:foldMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "foldl",
          "package": "Clean",
          "signature": "(a -\u003e a1 -\u003e a) -\u003e a -\u003e t a1 -\u003e a",
          "source": "src/Clean-Foldable.html#foldl",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "foldl",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "Clean",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:foldl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "foldr",
          "package": "Clean",
          "signature": "(a1 -\u003e a -\u003e a) -\u003e a -\u003e t a1 -\u003e a",
          "source": "src/Clean-Foldable.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "foldr",
          "normalized": "(a-\u003ea-\u003ea)-\u003ea-\u003eb a-\u003ea",
          "package": "Clean",
          "signature": "(a-\u003ea-\u003ea)-\u003ea-\u003et a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "length",
          "package": "Clean",
          "signature": "[a] -\u003e n",
          "source": "src/Clean-Foldable.html#length",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "length",
          "normalized": "[a]-\u003eb",
          "package": "Clean",
          "signature": "[a]-\u003en",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:length"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "partition",
          "package": "Clean",
          "signature": "(a -\u003e Bool) -\u003e t a -\u003e (f a, f a)",
          "source": "src/Clean-Foldable.html#partition",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "partition",
          "normalized": "(a-\u003eBool)-\u003eb a-\u003e(c a,c a)",
          "package": "Clean",
          "signature": "(a-\u003eBool)-\u003et a-\u003e(f a,f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:partition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "split",
          "package": "Clean",
          "signature": "(a -\u003e Either t1 t2) -\u003e t a -\u003e (t1, t2)",
          "source": "src/Clean-Foldable.html#split",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "split",
          "normalized": "(a-\u003eEither b b)-\u003eb a-\u003e(b,b)",
          "package": "Clean",
          "signature": "(a-\u003eEither t t)-\u003et a-\u003e(t,t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Foldable",
          "name": "sum",
          "package": "Clean",
          "signature": "t m -\u003e m",
          "source": "src/Clean-Foldable.html#sum",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Foldable",
          "module": "Clean.Foldable",
          "name": "sum",
          "normalized": "a b-\u003eb",
          "package": "Clean",
          "signature": "t m-\u003em",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Foldable.html#v:sum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module for functors\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Clean.Functor",
          "name": "Functor",
          "package": "Clean",
          "source": "src/Clean-Functor.html",
          "type": "module"
        },
        "index": {
          "description": "module for functors",
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Functor",
          "package": "Clean",
          "partial": "Functor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Bifunctor",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Bifunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Bifunctor",
          "package": "Clean",
          "partial": "Bifunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Bifunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Cofunctor",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Cofunctor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Cofunctor",
          "package": "Clean",
          "partial": "Cofunctor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Cofunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Composition functor\n\u003c/p\u003e",
          "module": "Clean.Functor",
          "name": "Compose",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Compose",
          "type": "newtype"
        },
        "index": {
          "description": "The Composition functor",
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Compose",
          "package": "Clean",
          "partial": "Compose",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Constant Functor\n\u003c/p\u003e",
          "module": "Clean.Functor",
          "name": "Const",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Const",
          "type": "newtype"
        },
        "index": {
          "description": "The Constant Functor",
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Const",
          "package": "Clean",
          "partial": "Const",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA motherflippin' functor\n\u003c/p\u003e",
          "module": "Clean.Functor",
          "name": "Flip",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Flip",
          "type": "newtype"
        },
        "index": {
          "description": "motherflippin functor",
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Flip",
          "package": "Clean",
          "partial": "Flip",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Functor",
          "package": "Clean",
          "source": "src/Clean-Classes.html#Functor",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Functor",
          "package": "Clean",
          "partial": "Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Functor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Identity Functor\n\u003c/p\u003e",
          "module": "Clean.Functor",
          "name": "Id",
          "package": "Clean",
          "source": "src/Clean-Functor.html#Id",
          "type": "newtype"
        },
        "index": {
          "description": "The Identity Functor",
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Id",
          "package": "Clean",
          "partial": "Id",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#t:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "(\u003c$)",
          "package": "Clean",
          "signature": "a1 -\u003e f a -\u003e f a1",
          "source": "src/Clean-Functor.html#%3C%24",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "(\u003c$) \u003c$",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "Clean",
          "signature": "a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:-60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "(\u003c$\u003e)",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Clean-Functor.html#%3C%24%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "(\u003c$\u003e) \u003c$\u003e",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:-60--36--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "(\u003c&\u003e)",
          "package": "Clean",
          "signature": "f a -\u003e (a -\u003e b) -\u003e f b",
          "source": "src/Clean-Functor.html#%3C%26%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "(\u003c&\u003e) \u003c&\u003e",
          "normalized": "a b-\u003e(b-\u003ec)-\u003ea c",
          "package": "Clean",
          "signature": "f a-\u003e(a-\u003eb)-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:-60--38--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Compose",
          "package": "Clean",
          "signature": "Compose",
          "source": "src/Clean-Functor.html#Compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Compose",
          "package": "Clean",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:Compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Const",
          "package": "Clean",
          "signature": "Const",
          "source": "src/Clean-Functor.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Const",
          "package": "Clean",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:Const"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Flip",
          "package": "Clean",
          "signature": "Flip",
          "source": "src/Clean-Functor.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Flip",
          "package": "Clean",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:Flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "Id",
          "package": "Clean",
          "signature": "Id",
          "source": "src/Clean-Functor.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "Id",
          "package": "Clean",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:Id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "comap",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e f b -\u003e f a",
          "source": "src/Clean-Functor.html#comap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "comap",
          "normalized": "(a-\u003eb)-\u003ec b-\u003ec a",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003ef b-\u003ef a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:comap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "dimap",
          "package": "Clean",
          "signature": "(c -\u003e a) -\u003e (b -\u003e d) -\u003e p a b -\u003e p c d",
          "source": "src/Clean-Functor.html#dimap",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "dimap",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee b c-\u003ee a d",
          "package": "Clean",
          "signature": "(c-\u003ea)-\u003e(b-\u003ed)-\u003ep a b-\u003ep c d",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:dimap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "getCompose",
          "package": "Clean",
          "signature": "f (g a)",
          "source": "src/Clean-Functor.html#Compose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "getCompose",
          "package": "Clean",
          "partial": "Compose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:getCompose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "getConst",
          "package": "Clean",
          "signature": "a",
          "source": "src/Clean-Functor.html#Const",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "getConst",
          "package": "Clean",
          "partial": "Const",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:getConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "getId",
          "package": "Clean",
          "signature": "a",
          "source": "src/Clean-Functor.html#Id",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "getId",
          "package": "Clean",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:getId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "map",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e f a -\u003e f b",
          "source": "src/Clean-Classes.html#map",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "map",
          "normalized": "(a-\u003eb)-\u003ec a-\u003ec b",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003ef a-\u003ef b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "promap",
          "package": "Clean",
          "signature": "(b -\u003e b1) -\u003e f b1 a -\u003e f b a",
          "source": "src/Clean-Functor.html#promap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "promap",
          "normalized": "(a-\u003ea)-\u003eb a c-\u003eb a c",
          "package": "Clean",
          "signature": "(b-\u003eb)-\u003ef b a-\u003ef b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:promap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "unFlip",
          "package": "Clean",
          "signature": "f b a",
          "source": "src/Clean-Functor.html#Flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "unFlip",
          "package": "Clean",
          "partial": "Flip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:unFlip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Functor",
          "name": "void",
          "package": "Clean",
          "signature": "f a -\u003e f ()",
          "source": "src/Clean-Functor.html#void",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Functor",
          "module": "Clean.Functor",
          "name": "void",
          "normalized": "a b-\u003ea()",
          "package": "Clean",
          "signature": "f a-\u003ef()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Functor.html#v:void"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module providing simple Lens functionality  \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Clean.Lens",
          "name": "Lens",
          "package": "Clean",
          "source": "src/Clean-Lens.html",
          "type": "module"
        },
        "index": {
          "description": "module providing simple Lens functionality",
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Lens",
          "package": "Clean",
          "partial": "Lens",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Iso",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Iso",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Iso",
          "package": "Clean",
          "partial": "Iso",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Iso'",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Iso%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Iso'",
          "package": "Clean",
          "partial": "Iso'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Iso-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Lens",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Lens",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Lens",
          "package": "Clean",
          "partial": "Lens",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Lens'",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Lens%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Lens'",
          "package": "Clean",
          "partial": "Lens'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Lens-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "LensLike",
          "package": "Clean",
          "source": "src/Clean-Lens.html#LensLike",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "LensLike",
          "package": "Clean",
          "partial": "Lens Like",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:LensLike"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "LensLike'",
          "package": "Clean",
          "source": "src/Clean-Lens.html#LensLike%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "LensLike'",
          "package": "Clean",
          "partial": "Lens Like'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:LensLike-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "MkIso",
          "package": "Clean",
          "source": "src/Clean-Lens.html#MkIso",
          "type": "data"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "MkIso",
          "package": "Clean",
          "partial": "Mk Iso",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:MkIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Traversal",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Traversal",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Traversal",
          "package": "Clean",
          "partial": "Traversal",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Traversal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Traversal'",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Traversal%27",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Traversal'",
          "package": "Clean",
          "partial": "Traversal'",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Traversal-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "Wrapped",
          "package": "Clean",
          "source": "src/Clean-Lens.html#Wrapped",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "Wrapped",
          "package": "Clean",
          "partial": "Wrapped",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#t:Wrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "(%~)",
          "package": "Clean",
          "signature": "Traversal' a b -\u003e (b -\u003e b) -\u003e a -\u003e a",
          "source": "src/Clean-Lens.html#%25~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "(%~) %~",
          "normalized": "Traversal' a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "package": "Clean",
          "signature": "Traversal' a b-\u003e(b-\u003eb)-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:-37--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "(^.)",
          "package": "Clean",
          "signature": "a -\u003e Lens' a b -\u003e b",
          "source": "src/Clean-Lens.html#%5E.",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "(^.) ^.",
          "normalized": "a-\u003eLens' a b-\u003eb",
          "package": "Clean",
          "signature": "a-\u003eLens' a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:-94-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "(.~)",
          "package": "Clean",
          "signature": "Traversal' a b -\u003e b -\u003e a -\u003e a",
          "source": "src/Clean-Lens.html#.~",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "(.~) .~",
          "normalized": "Traversal' a b-\u003eb-\u003ea-\u003ea",
          "package": "Clean",
          "signature": "Traversal' a b-\u003eb-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:.-126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "MkIso",
          "package": "Clean",
          "signature": "MkIso (s -\u003e a) (b -\u003e t)",
          "source": "src/Clean-Lens.html#MkIso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "MkIso",
          "normalized": "MkIso(a-\u003eb)(c-\u003ed)",
          "package": "Clean",
          "partial": "Mk Iso",
          "signature": "MkIso(s-\u003ea)(b-\u003et)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:MkIso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_1",
          "package": "Clean",
          "signature": "Lens' (a :*: b) a",
          "source": "src/Clean-Lens.html#_1",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_1",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_1"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_2",
          "package": "Clean",
          "signature": "Lens' (a :*: b) b",
          "source": "src/Clean-Lens.html#_2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_2",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_both",
          "package": "Clean",
          "signature": "Traversal a b (a, a) (b, b)",
          "source": "src/Clean-Lens.html#_both",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_both",
          "normalized": "Traversal a b(a,a)(b,b)",
          "package": "Clean",
          "signature": "Traversal a b(a,a)(b,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_both"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_dropping",
          "package": "Clean",
          "signature": "Int -\u003e Traversal' [a] [a]",
          "source": "src/Clean-Lens.html#_dropping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_dropping",
          "normalized": "Int-\u003eTraversal'[a][a]",
          "package": "Clean",
          "signature": "Int-\u003eTraversal'[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_dropping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_head",
          "package": "Clean",
          "signature": "Traversal' [a] a",
          "source": "src/Clean-Lens.html#_head",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_head",
          "normalized": "Traversal'[a]a",
          "package": "Clean",
          "signature": "Traversal'[a]a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_l",
          "package": "Clean",
          "signature": "Traversal' (a :+: b) a",
          "source": "src/Clean-Lens.html#_l",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_l",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_l"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_list",
          "package": "Clean",
          "signature": "Iso' [a] (() :+: (a :*: [a]))",
          "source": "src/Clean-Lens.html#_list",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_list",
          "normalized": "Iso'[a](()(a*[a]))",
          "package": "Clean",
          "signature": "Iso'[a](()(a*[a]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_r",
          "package": "Clean",
          "signature": "Traversal' (a :+: b) b",
          "source": "src/Clean-Lens.html#_r",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_r",
          "package": "Clean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_r"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "_tail",
          "package": "Clean",
          "signature": "Traversal' [a] [a]",
          "source": "src/Clean-Lens.html#_tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "_tail",
          "normalized": "Traversal'[a][a]",
          "package": "Clean",
          "signature": "Traversal'[a][a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:_tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "from",
          "package": "Clean",
          "signature": "MkIso t s b a -\u003e Iso a b s t",
          "source": "src/Clean-Lens.html#from",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "from",
          "normalized": "MkIso a b c d-\u003eIso d c b a",
          "package": "Clean",
          "signature": "MkIso t s b a-\u003eIso a b s t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:from"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "iso",
          "package": "Clean",
          "signature": "(a -\u003e s) -\u003e (t -\u003e b) -\u003e Iso s t a b",
          "source": "src/Clean-Lens.html#iso",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "iso",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eIso b c a d",
          "package": "Clean",
          "signature": "(a-\u003es)-\u003e(t-\u003eb)-\u003eIso s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:iso"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "lam",
          "package": "Clean",
          "signature": "(a -\u003e s) -\u003e LensLike f s t a a",
          "source": "src/Clean-Lens.html#lam",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "lam",
          "normalized": "(a-\u003eb)-\u003eLensLike c b d a a",
          "package": "Clean",
          "signature": "(a-\u003es)-\u003eLensLike f s t a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:lam"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "lens",
          "package": "Clean",
          "signature": "(a -\u003e s) -\u003e (a -\u003e t -\u003e b) -\u003e Lens s t a b",
          "source": "src/Clean-Lens.html#lens",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "lens",
          "normalized": "(a-\u003eb)-\u003e(a-\u003ec-\u003ed)-\u003eLens b c a d",
          "package": "Clean",
          "signature": "(a-\u003es)-\u003e(a-\u003et-\u003eb)-\u003eLens s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:lens"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "prism",
          "package": "Clean",
          "signature": "(a -\u003e b :+: s) -\u003e (a -\u003e t -\u003e b) -\u003e Traversal s t a b",
          "source": "src/Clean-Lens.html#prism",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "prism",
          "normalized": "(a-\u003eb c)-\u003e(a-\u003ed-\u003eb)-\u003eTraversal c d a b",
          "package": "Clean",
          "signature": "(a-\u003eb s)-\u003e(a-\u003et-\u003eb)-\u003eTraversal s t a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:prism"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "wrapped",
          "package": "Clean",
          "signature": "Iso s t a b",
          "source": "src/Clean-Lens.html#wrapped",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "wrapped",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:wrapped"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Lens",
          "name": "wrapping",
          "package": "Clean",
          "signature": "(a -\u003e b) -\u003e Iso' a b",
          "source": "src/Clean-Lens.html#wrapping",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Lens",
          "module": "Clean.Lens",
          "name": "wrapping",
          "normalized": "(a-\u003eb)-\u003eIso' a b",
          "package": "Clean",
          "signature": "(a-\u003eb)-\u003eIso' a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Lens.html#v:wrapping"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "Monad",
          "package": "Clean",
          "source": "src/Clean-Monad.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "Monad",
          "package": "Clean",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "Cont",
          "package": "Clean",
          "source": "src/Clean-Monad.html#Cont",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "Cont",
          "package": "Clean",
          "partial": "Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "ContT",
          "package": "Clean",
          "source": "src/Clean-Monad.html#ContT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "ContT",
          "package": "Clean",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "Monad",
          "package": "Clean",
          "source": "src/Clean-Classes.html#Monad",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "Monad",
          "package": "Clean",
          "partial": "Monad",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:Monad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple continuation monad implementation  \n\u003c/p\u003e",
          "module": "Clean.Monad",
          "name": "MonadCont",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadCont",
          "type": "class"
        },
        "index": {
          "description": "simple continuation monad implementation",
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadCont",
          "package": "Clean",
          "partial": "Monad Cont",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "MonadFix",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadFix",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadFix",
          "package": "Clean",
          "partial": "Monad Fix",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadFix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "MonadReader",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadReader",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadReader",
          "package": "Clean",
          "partial": "Monad Reader",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "MonadState",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadState",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadState",
          "package": "Clean",
          "partial": "Monad State",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "MonadTrans",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadTrans",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadTrans",
          "package": "Clean",
          "partial": "Monad Trans",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "MonadWriter",
          "package": "Clean",
          "source": "src/Clean-Monad.html#MonadWriter",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "MonadWriter",
          "package": "Clean",
          "partial": "Monad Writer",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:MonadWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "Reader",
          "package": "Clean",
          "source": "src/Clean-Monad.html#Reader",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "Reader",
          "package": "Clean",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple Reader monad \n\u003c/p\u003e",
          "module": "Clean.Monad",
          "name": "ReaderT",
          "package": "Clean",
          "source": "src/Clean-Monad.html#ReaderT",
          "type": "newtype"
        },
        "index": {
          "description": "simple Reader monad",
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "ReaderT",
          "package": "Clean",
          "partial": "Reader",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "State",
          "package": "Clean",
          "source": "src/Clean-Monad.html#State",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "State",
          "package": "Clean",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple State Monad  \n\u003c/p\u003e",
          "module": "Clean.Monad",
          "name": "StateT",
          "package": "Clean",
          "source": "src/Clean-Monad.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "simple State Monad",
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "StateT",
          "package": "Clean",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "Writer",
          "package": "Clean",
          "source": "src/Clean-Monad.html#Writer",
          "type": "type"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "Writer",
          "package": "Clean",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:Writer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA simple Writer monad \n\u003c/p\u003e",
          "module": "Clean.Monad",
          "name": "WriterT",
          "package": "Clean",
          "source": "src/Clean-Monad.html#WriterT",
          "type": "newtype"
        },
        "index": {
          "description": "simple Writer monad",
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "WriterT",
          "package": "Clean",
          "partial": "Writer",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "(=\u003c\u003c)",
          "package": "Clean",
          "signature": "(a -\u003e m b) -\u003e m a -\u003e m b",
          "source": "src/Clean-Monad.html#%3D%3C%3C",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "(=\u003c\u003c) =\u003c\u003c",
          "normalized": "(a-\u003eb c)-\u003eb a-\u003eb c",
          "package": "Clean",
          "signature": "(a-\u003em b)-\u003em a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:-61--60--60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "(\u003e\u003e)",
          "package": "Clean",
          "signature": "f a1 -\u003e f a -\u003e f a",
          "source": "src/Clean-Monad.html#%3E%3E",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "(\u003e\u003e) \u003e\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "Clean",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:-62--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "(\u003e\u003e=)",
          "package": "Clean",
          "signature": "m a -\u003e (a -\u003e m b) -\u003e m b",
          "source": "src/Clean-Classes.html#%3E%3E%3D",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "(\u003e\u003e=) \u003e\u003e=",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003ea c",
          "package": "Clean",
          "signature": "m a-\u003e(a-\u003em b)-\u003em b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:-62--62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "ContT",
          "package": "Clean",
          "signature": "ContT",
          "source": "src/Clean-Monad.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "ContT",
          "package": "Clean",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "ReaderT",
          "package": "Clean",
          "signature": "ReaderT",
          "source": "src/Clean-Monad.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "ReaderT",
          "package": "Clean",
          "partial": "Reader",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "StateT",
          "package": "Clean",
          "signature": "StateT",
          "source": "src/Clean-Monad.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "StateT",
          "package": "Clean",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "WriterT",
          "package": "Clean",
          "signature": "WriterT",
          "source": "src/Clean-Monad.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "WriterT",
          "package": "Clean",
          "partial": "Writer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "ask",
          "package": "Clean",
          "signature": "m r",
          "source": "src/Clean-Monad.html#ask",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "ask",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "callCC",
          "package": "Clean",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Clean-Monad.html#callCC",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "Clean",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "censor",
          "package": "Clean",
          "signature": "m (a, w -\u003e w) -\u003e m a",
          "source": "src/Clean-Monad.html#censor",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "censor",
          "normalized": "a(b,c-\u003ec)-\u003ea b",
          "package": "Clean",
          "signature": "m(a,w-\u003ew)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:censor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "evalCont",
          "package": "Clean",
          "signature": "ContT a Id a -\u003e a",
          "source": "src/Clean-Monad.html#evalCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "evalCont",
          "normalized": "ContT a Id a-\u003ea",
          "package": "Clean",
          "partial": "Cont",
          "signature": "ContT a Id a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:evalCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "evalContT",
          "package": "Clean",
          "signature": "ContT r m r -\u003e m r",
          "source": "src/Clean-Monad.html#evalContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "evalContT",
          "normalized": "ContT a b a-\u003eb a",
          "package": "Clean",
          "partial": "Cont",
          "signature": "ContT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:evalContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "evalState",
          "package": "Clean",
          "signature": "State s a -\u003e s -\u003e a",
          "source": "src/Clean-Monad.html#evalState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "evalState",
          "normalized": "State a b-\u003ea-\u003eb",
          "package": "Clean",
          "partial": "State",
          "signature": "State s a-\u003es-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "evalStateT",
          "package": "Clean",
          "signature": "StateT a f b -\u003e a -\u003e f b",
          "source": "src/Clean-Monad.html#evalStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "evalStateT",
          "normalized": "StateT a b c-\u003ea-\u003eb c",
          "package": "Clean",
          "partial": "State",
          "signature": "StateT a f b-\u003ea-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "execState",
          "package": "Clean",
          "signature": "State s a -\u003e s -\u003e s",
          "source": "src/Clean-Monad.html#execState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "execState",
          "normalized": "State a b-\u003ea-\u003ea",
          "package": "Clean",
          "partial": "State",
          "signature": "State s a-\u003es-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "execStateT",
          "package": "Clean",
          "signature": "StateT b f b1 -\u003e b -\u003e f b",
          "source": "src/Clean-Monad.html#execStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "execStateT",
          "normalized": "StateT a b a-\u003ea-\u003eb a",
          "package": "Clean",
          "partial": "State",
          "signature": "StateT b f b-\u003eb-\u003ef b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "get",
          "package": "Clean",
          "signature": "m s",
          "source": "src/Clean-Monad.html#get",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "get",
          "package": "Clean",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "internal",
          "package": "Clean",
          "signature": "(forall c.  m (c, a) -\u003e m (c, b)) -\u003e t m a -\u003e t m b",
          "source": "src/Clean-Monad.html#internal",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "internal",
          "normalized": "(a b c(d,e)-\u003ec(d,f))-\u003eg c e-\u003eg c f",
          "package": "Clean",
          "signature": "(forall c. m(c,a)-\u003em(c,b))-\u003et m a-\u003et m b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:internal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "join",
          "package": "Clean",
          "signature": "m (m a) -\u003e m a",
          "source": "src/Clean-Classes.html#join",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "join",
          "normalized": "a(a b)-\u003ea b",
          "package": "Clean",
          "signature": "m(m a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:join"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "lift",
          "package": "Clean",
          "signature": "m a -\u003e t m a",
          "source": "src/Clean-Monad.html#lift",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "lift",
          "normalized": "a b-\u003ec a b",
          "package": "Clean",
          "signature": "m a-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:lift"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "listen",
          "package": "Clean",
          "signature": "m a -\u003e m (w, a)",
          "source": "src/Clean-Monad.html#listen",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "listen",
          "normalized": "a b-\u003ea(c,b)",
          "package": "Clean",
          "signature": "m a-\u003em(w,a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:listen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "local",
          "package": "Clean",
          "signature": "(r -\u003e r) -\u003e m a -\u003e m a",
          "source": "src/Clean-Monad.html#local",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "local",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "Clean",
          "signature": "(r-\u003er)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:local"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "mfix",
          "package": "Clean",
          "signature": "(a -\u003e m a) -\u003e m a",
          "source": "src/Clean-Monad.html#mfix",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "mfix",
          "normalized": "(a-\u003eb a)-\u003eb a",
          "package": "Clean",
          "signature": "(a-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:mfix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "modify",
          "package": "Clean",
          "signature": "(s -\u003e s) -\u003e m ()",
          "source": "src/Clean-Monad.html#modify",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "modify",
          "normalized": "(a-\u003ea)-\u003eb()",
          "package": "Clean",
          "signature": "(s-\u003es)-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "put",
          "package": "Clean",
          "signature": "s -\u003e m ()",
          "source": "src/Clean-Monad.html#put",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "put",
          "normalized": "a-\u003eb()",
          "package": "Clean",
          "signature": "s-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "return",
          "package": "Clean",
          "signature": "a -\u003e f a",
          "source": "src/Clean-Monad.html#return",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "return",
          "normalized": "a-\u003eb a",
          "package": "Clean",
          "signature": "a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:return"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runContT",
          "package": "Clean",
          "signature": "(a -\u003e m r) -\u003e m r",
          "source": "src/Clean-Monad.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "Clean",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runReaderT",
          "package": "Clean",
          "signature": "r -\u003e m a",
          "source": "src/Clean-Monad.html#ReaderT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runReaderT",
          "normalized": "a-\u003eb c",
          "package": "Clean",
          "partial": "Reader",
          "signature": "r-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runState",
          "package": "Clean",
          "signature": "State s a -\u003e s -\u003e (s, a)",
          "source": "src/Clean-Monad.html#runState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runState",
          "normalized": "State a b-\u003ea-\u003e(a,b)",
          "package": "Clean",
          "partial": "State",
          "signature": "State s a-\u003es-\u003e(s,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runStateT",
          "package": "Clean",
          "signature": "s -\u003e m (s, a)",
          "source": "src/Clean-Monad.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runStateT",
          "normalized": "a-\u003eb(a,c)",
          "package": "Clean",
          "partial": "State",
          "signature": "s-\u003em(s,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runWriter",
          "package": "Clean",
          "signature": "WriterT w Id a -\u003e (w, a)",
          "source": "src/Clean-Monad.html#runWriter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runWriter",
          "normalized": "WriterT a Id b-\u003e(a,b)",
          "package": "Clean",
          "partial": "Writer",
          "signature": "WriterT w Id a-\u003e(w,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "runWriterT",
          "package": "Clean",
          "signature": "m (w, a)",
          "source": "src/Clean-Monad.html#WriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "runWriterT",
          "normalized": "a(b,c)",
          "package": "Clean",
          "partial": "Writer",
          "signature": "m(w,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Monad",
          "name": "tell",
          "package": "Clean",
          "signature": "w -\u003e m ()",
          "source": "src/Clean-Monad.html#tell",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Monad",
          "module": "Clean.Monad",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "Clean",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Monad.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "Traversable",
          "package": "Clean",
          "source": "src/Clean-Traversable.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "Traversable",
          "package": "Clean",
          "partial": "Traversable",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "Contravariant",
          "package": "Clean",
          "source": "src/Clean-Traversable.html#Contravariant",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "Contravariant",
          "package": "Clean",
          "partial": "Contravariant",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#t:Contravariant"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "Traversable",
          "package": "Clean",
          "source": "src/Clean-Traversable.html#Traversable",
          "type": "class"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "Traversable",
          "package": "Clean",
          "partial": "Traversable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#t:Traversable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "collect",
          "package": "Clean",
          "signature": "f (t a) -\u003e t (f a)",
          "source": "src/Clean-Traversable.html#collect",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "collect",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "Clean",
          "signature": "f(t a)-\u003et(f a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:collect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "flip",
          "package": "Clean",
          "signature": "f (t a) -\u003e t (f a)",
          "source": "src/Clean-Traversable.html#flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "flip",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "Clean",
          "signature": "f(t a)-\u003et(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "foreach",
          "package": "Clean",
          "signature": "t a1 -\u003e (a1 -\u003e f a) -\u003e f (t a)",
          "source": "src/Clean-Traversable.html#foreach",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "foreach",
          "normalized": "a b-\u003e(b-\u003ec b)-\u003ec(a b)",
          "package": "Clean",
          "signature": "t a-\u003e(a-\u003ef a)-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:foreach"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "sequence",
          "package": "Clean",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Clean-Traversable.html#sequence",
          "type": "method"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "sequence",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "Clean",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:sequence"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "transpose",
          "package": "Clean",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Clean-Traversable.html#transpose",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "transpose",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "Clean",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:transpose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean.Traversable",
          "name": "traverse",
          "package": "Clean",
          "signature": "(a1 -\u003e f a) -\u003e t a1 -\u003e f (t a)",
          "source": "src/Clean-Traversable.html#traverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Clean Traversable",
          "module": "Clean.Traversable",
          "name": "traverse",
          "normalized": "(a-\u003eb a)-\u003ec a-\u003eb(c a)",
          "package": "Clean",
          "signature": "(a-\u003ef a)-\u003et a-\u003ef(t a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean-Traversable.html#v:traverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Clean",
          "name": "Clean",
          "package": "Clean",
          "source": "src/Clean.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Clean",
          "module": "Clean",
          "name": "Clean",
          "package": "Clean",
          "partial": "Clean",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Clean/docs/Clean.html#"
      }
    }
  ]
]