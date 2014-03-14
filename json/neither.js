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
        "word": "neither"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides three different datatypes: \u003ccode\u003e\u003ca\u003eAEither\u003c/a\u003e\u003c/code\u003e is the\n applicative version of Either. It does not provide a monad instance, and\n \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003es together error values. \u003ccode\u003e\u003ca\u003eMEither\u003c/a\u003e\u003c/code\u003e is the monadic version, which\n only holds onto the first error value. \u003ccode\u003e\u003ca\u003eMEitherT\u003c/a\u003e\u003c/code\u003e is a monad transformer.\n\u003c/p\u003e\u003cp\u003eAlso, *Either datatypes and utility functions from Data.Either\n are generalized with \u003ccode\u003e\u003ca\u003eNeither\u003c/a\u003e\u003c/code\u003e type class.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Neither",
          "name": "Neither",
          "package": "neither",
          "source": "src/Data-Neither.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides three different datatypes AEither is the applicative version of Either It does not provide monad instance and mappend together error values MEither is the monadic version which only holds onto the first error value MEitherT is monad transformer Also Either datatypes and utility functions from Data.Either are generalized with Neither type class",
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "Neither",
          "package": "neither",
          "partial": "Neither",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "AEither",
          "package": "neither",
          "source": "src/Data-Neither.html#AEither",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "AEither",
          "package": "neither",
          "partial": "AEither",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#t:AEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "MEither",
          "package": "neither",
          "source": "src/Data-Neither.html#MEither",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "MEither",
          "package": "neither",
          "partial": "MEither",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#t:MEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "MEitherT",
          "package": "neither",
          "source": "src/Data-Neither.html#MEitherT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "MEitherT",
          "package": "neither",
          "partial": "MEither",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#t:MEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "Neither",
          "package": "neither",
          "source": "src/Data-Neither.html#Neither",
          "type": "class"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "Neither",
          "package": "neither",
          "partial": "Neither",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#t:Neither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "ALeft",
          "package": "neither",
          "signature": "ALeft a",
          "source": "src/Data-Neither.html#AEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "ALeft",
          "package": "neither",
          "partial": "ALeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:ALeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "ARight",
          "package": "neither",
          "signature": "ARight b",
          "source": "src/Data-Neither.html#AEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "ARight",
          "package": "neither",
          "partial": "ARight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:ARight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "MEitherT",
          "package": "neither",
          "signature": "MEitherT",
          "source": "src/Data-Neither.html#MEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "MEitherT",
          "package": "neither",
          "partial": "MEither",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:MEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "MLeft",
          "package": "neither",
          "signature": "MLeft a",
          "source": "src/Data-Neither.html#MEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "MLeft",
          "package": "neither",
          "partial": "MLeft",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:MLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "MRight",
          "package": "neither",
          "signature": "MRight b",
          "source": "src/Data-Neither.html#MEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "MRight",
          "package": "neither",
          "partial": "MRight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:MRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "aeither",
          "package": "neither",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e AEither a b -\u003e c",
          "source": "src/Data-Neither.html#aeither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "aeither",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eAEither a c-\u003eb",
          "package": "neither",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eAEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:aeither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "either",
          "package": "neither",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e e a b -\u003e c",
          "source": "src/Data-Neither.html#either",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "either",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003ed a c-\u003eb",
          "package": "neither",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003ee a b-\u003ec",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:either"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "left",
          "package": "neither",
          "signature": "a -\u003e e a b",
          "source": "src/Data-Neither.html#left",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "left",
          "normalized": "a-\u003eb a c",
          "package": "neither",
          "signature": "a-\u003ee a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:left"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "lefts",
          "package": "neither",
          "signature": "m (e a b) -\u003e m a",
          "source": "src/Data-Neither.html#lefts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "lefts",
          "normalized": "a(b c d)-\u003ea c",
          "package": "neither",
          "signature": "m(e a b)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:lefts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "mapEither",
          "package": "neither",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e e a b -\u003e e c d",
          "source": "src/Data-Neither.html#mapEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "mapEither",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003ee a c-\u003ee b d",
          "package": "neither",
          "partial": "Either",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003ee a b-\u003ee c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "mapLeft",
          "package": "neither",
          "signature": "(a -\u003e c) -\u003e e a b -\u003e e c b",
          "source": "src/Data-Neither.html#mapLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "mapLeft",
          "normalized": "(a-\u003eb)-\u003ec a d-\u003ec b d",
          "package": "neither",
          "partial": "Left",
          "signature": "(a-\u003ec)-\u003ee a b-\u003ee c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:mapLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "mapMEitherT",
          "package": "neither",
          "signature": "(m (MEither e a) -\u003e n (MEither e' b)) -\u003e MEitherT e m a -\u003e MEitherT e' n b",
          "source": "src/Data-Neither.html#mapMEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "mapMEitherT",
          "normalized": "(a(MEither b c)-\u003ed(MEither e f))-\u003eMEitherT b a c-\u003eMEitherT e d f",
          "package": "neither",
          "partial": "MEither",
          "signature": "(m(MEither e a)-\u003en(MEither e' b))-\u003eMEitherT e m a-\u003eMEitherT e' n b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:mapMEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "mapRight",
          "package": "neither",
          "signature": "(b -\u003e c) -\u003e e a b -\u003e e a c",
          "source": "src/Data-Neither.html#mapRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "mapRight",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "neither",
          "partial": "Right",
          "signature": "(b-\u003ec)-\u003ee a b-\u003ee a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:mapRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "meither",
          "package": "neither",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e MEither a b -\u003e c",
          "source": "src/Data-Neither.html#meither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "meither",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003eMEither a c-\u003eb",
          "package": "neither",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003eMEither a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:meither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "partitionEithers",
          "package": "neither",
          "signature": "m (e a b) -\u003e (m a, m b)",
          "source": "src/Data-Neither.html#partitionEithers",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "partitionEithers",
          "normalized": "a(b c d)-\u003e(a c,a d)",
          "package": "neither",
          "partial": "Eithers",
          "signature": "m(e a b)-\u003e(m a,m b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:partitionEithers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "right",
          "package": "neither",
          "signature": "b -\u003e e a b",
          "source": "src/Data-Neither.html#right",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "right",
          "normalized": "a-\u003eb c a",
          "package": "neither",
          "signature": "b-\u003ee a b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:right"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "rights",
          "package": "neither",
          "signature": "m (e a b) -\u003e m b",
          "source": "src/Data-Neither.html#rights",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "rights",
          "normalized": "a(b c d)-\u003ea d",
          "package": "neither",
          "signature": "m(e a b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:rights"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "runMEitherT",
          "package": "neither",
          "signature": "m (MEither e a)",
          "source": "src/Data-Neither.html#MEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "runMEitherT",
          "package": "neither",
          "partial": "MEither",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:runMEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Neither",
          "name": "throwMEither",
          "package": "neither",
          "signature": "e -\u003e MEitherT e m a",
          "source": "src/Data-Neither.html#throwMEither",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Neither",
          "module": "Data.Neither",
          "name": "throwMEither",
          "normalized": "a-\u003eMEitherT a b c",
          "package": "neither",
          "partial": "MEither",
          "signature": "e-\u003eMEitherT e m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/neither/docs/Data-Neither.html#v:throwMEither"
      }
    }
  ]
]