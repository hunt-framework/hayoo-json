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
        "word": "eithers"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with Either values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Eithers",
          "name": "Eithers",
          "package": "eithers",
          "source": "src/Eithers.html",
          "type": "module"
        },
        "index": {
          "description": "Functions for dealing with Either values",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "Eithers",
          "package": "eithers",
          "partial": "Eithers",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the left value or a default.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "fromLeft",
          "package": "eithers",
          "signature": "a -\u003e Either a b -\u003e a",
          "source": "src/Eithers.html#fromLeft",
          "type": "function"
        },
        "index": {
          "description": "Extract the left value or default",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "fromLeft",
          "normalized": "a-\u003eEither a b-\u003ea",
          "package": "eithers",
          "partial": "Left",
          "signature": "a-\u003eEither a b-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:fromLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the right value or a default.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "fromRight",
          "package": "eithers",
          "signature": "b -\u003e Either a b -\u003e b",
          "source": "src/Eithers.html#fromRight",
          "type": "function"
        },
        "index": {
          "description": "Extract the right value or default",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "fromRight",
          "normalized": "a-\u003eEither b a-\u003ea",
          "package": "eithers",
          "partial": "Right",
          "signature": "b-\u003eEither a b-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:fromRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a value Left?\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "isLeft",
          "package": "eithers",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Eithers.html#isLeft",
          "type": "function"
        },
        "index": {
          "description": "Is value Left",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "isLeft",
          "normalized": "Either a b-\u003eBool",
          "package": "eithers",
          "partial": "Left",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:isLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a value Right?\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "isRight",
          "package": "eithers",
          "signature": "Either a b -\u003e Bool",
          "source": "src/Eithers.html#isRight",
          "type": "function"
        },
        "index": {
          "description": "Is value Right",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "isRight",
          "normalized": "Either a b-\u003eBool",
          "package": "eithers",
          "partial": "Right",
          "signature": "Either a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:isRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe get the left side of an Either.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "leftToMaybe",
          "package": "eithers",
          "signature": "Either a b -\u003e Maybe a",
          "source": "src/Eithers.html#leftToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe get the left side of an Either",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "leftToMaybe",
          "normalized": "Either a b-\u003eMaybe a",
          "package": "eithers",
          "partial": "To Maybe",
          "signature": "Either a b-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:leftToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA map for Either values.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "mapEither",
          "package": "eithers",
          "signature": "(a -\u003e b1) -\u003e (b -\u003e b2) -\u003e Either a b -\u003e Either b1 b2",
          "source": "src/Eithers.html#mapEither",
          "type": "function"
        },
        "index": {
          "description": "map for Either values",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "mapEither",
          "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b",
          "package": "eithers",
          "partial": "Either",
          "signature": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapEither"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the left side.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "mapLeft",
          "package": "eithers",
          "signature": "(a -\u003e b1) -\u003e Either a b2 -\u003e Either b1 b2",
          "source": "src/Eithers.html#mapLeft",
          "type": "function"
        },
        "index": {
          "description": "Map over the left side",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "mapLeft",
          "normalized": "(a-\u003eb)-\u003eEither a b-\u003eEither b b",
          "package": "eithers",
          "partial": "Left",
          "signature": "(a-\u003eb)-\u003eEither a b-\u003eEither b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMap over the right side.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "mapRight",
          "package": "eithers",
          "signature": "(b -\u003e b2) -\u003e Either b1 b -\u003e Either b1 b2",
          "source": "src/Eithers.html#mapRight",
          "type": "function"
        },
        "index": {
          "description": "Map over the right side",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "mapRight",
          "normalized": "(a-\u003ea)-\u003eEither a a-\u003eEither a a",
          "package": "eithers",
          "partial": "Right",
          "signature": "(b-\u003eb)-\u003eEither b b-\u003eEither b b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaybe get the right side of an Either.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "rightToMaybe",
          "package": "eithers",
          "signature": "Either a b -\u003e Maybe b",
          "source": "src/Eithers.html#rightToMaybe",
          "type": "function"
        },
        "index": {
          "description": "Maybe get the right side of an Either",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "rightToMaybe",
          "normalized": "Either a b-\u003eMaybe b",
          "package": "eithers",
          "partial": "To Maybe",
          "signature": "Either a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:rightToMaybe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a value is Left, do something with it, monadically.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "whenLeft",
          "package": "eithers",
          "signature": "Either a b -\u003e (a -\u003e m c) -\u003e m ()",
          "source": "src/Eithers.html#whenLeft",
          "type": "function"
        },
        "index": {
          "description": "When value is Left do something with it monadically",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "whenLeft",
          "normalized": "Either a b-\u003e(a-\u003ec d)-\u003ec()",
          "package": "eithers",
          "partial": "Left",
          "signature": "Either a b-\u003e(a-\u003em c)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:whenLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen a value is Right, do something with it, monadically.\n\u003c/p\u003e",
          "module": "Eithers",
          "name": "whenRight",
          "package": "eithers",
          "signature": "Either a b -\u003e (b -\u003e m c) -\u003e m ()",
          "source": "src/Eithers.html#whenRight",
          "type": "function"
        },
        "index": {
          "description": "When value is Right do something with it monadically",
          "hierarchy": "Eithers",
          "module": "Eithers",
          "name": "whenRight",
          "normalized": "Either a b-\u003e(b-\u003ec d)-\u003ec()",
          "package": "eithers",
          "partial": "Right",
          "signature": "Either a b-\u003e(b-\u003em c)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:whenRight"
      }
    }
  ]
]