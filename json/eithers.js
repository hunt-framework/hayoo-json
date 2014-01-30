[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFunctions for dealing with Either values.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "module",
        "fct-source": "src/Eithers.html",
        "fct-type": "module",
        "title": "Eithers"
      },
      "index": {
        "description": "Functions for dealing with Either values",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "Eithers",
        "normalized": "",
        "package": "eithers",
        "partial": "Eithers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:fromLeft",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the left value or a default.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "a -\u003e Either a b -\u003e a",
        "fct-source": "src/Eithers.html#fromLeft",
        "fct-type": "function",
        "title": "fromLeft"
      },
      "index": {
        "description": "Extract the left value or default",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "fromLeft",
        "normalized": "a-\u003eEither a b-\u003ea",
        "package": "eithers",
        "partial": "Left",
        "signature": "a-\u003eEither a b-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:fromRight",
      "description": {
        "fct-descr": "\u003cp\u003eExtract the right value or a default.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "b -\u003e Either a b -\u003e b",
        "fct-source": "src/Eithers.html#fromRight",
        "fct-type": "function",
        "title": "fromRight"
      },
      "index": {
        "description": "Extract the right value or default",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "fromRight",
        "normalized": "a-\u003eEither b a-\u003ea",
        "package": "eithers",
        "partial": "Right",
        "signature": "b-\u003eEither a b-\u003eb"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:isLeft",
      "description": {
        "fct-descr": "\u003cp\u003eIs a value Left?\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Eithers.html#isLeft",
        "fct-type": "function",
        "title": "isLeft"
      },
      "index": {
        "description": "Is value Left",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "isLeft",
        "normalized": "Either a b-\u003eBool",
        "package": "eithers",
        "partial": "Left",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:isRight",
      "description": {
        "fct-descr": "\u003cp\u003eIs a value Right?\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e Bool",
        "fct-source": "src/Eithers.html#isRight",
        "fct-type": "function",
        "title": "isRight"
      },
      "index": {
        "description": "Is value Right",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "isRight",
        "normalized": "Either a b-\u003eBool",
        "package": "eithers",
        "partial": "Right",
        "signature": "Either a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:leftToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe get the left side of an Either.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e Maybe a",
        "fct-source": "src/Eithers.html#leftToMaybe",
        "fct-type": "function",
        "title": "leftToMaybe"
      },
      "index": {
        "description": "Maybe get the left side of an Either",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "leftToMaybe",
        "normalized": "Either a b-\u003eMaybe a",
        "package": "eithers",
        "partial": "To Maybe",
        "signature": "Either a b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapEither",
      "description": {
        "fct-descr": "\u003cp\u003eA map for Either values.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "(a -\u003e b1) -\u003e (b -\u003e b2) -\u003e Either a b -\u003e Either b1 b2",
        "fct-source": "src/Eithers.html#mapEither",
        "fct-type": "function",
        "title": "mapEither"
      },
      "index": {
        "description": "map for Either values",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "mapEither",
        "normalized": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b",
        "package": "eithers",
        "partial": "Either",
        "signature": "(a-\u003eb)-\u003e(b-\u003eb)-\u003eEither a b-\u003eEither b b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapLeft",
      "description": {
        "fct-descr": "\u003cp\u003eMap over the left side.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "(a -\u003e b1) -\u003e Either a b2 -\u003e Either b1 b2",
        "fct-source": "src/Eithers.html#mapLeft",
        "fct-type": "function",
        "title": "mapLeft"
      },
      "index": {
        "description": "Map over the left side",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "mapLeft",
        "normalized": "(a-\u003eb)-\u003eEither a b-\u003eEither b b",
        "package": "eithers",
        "partial": "Left",
        "signature": "(a-\u003eb)-\u003eEither a b-\u003eEither b b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:mapRight",
      "description": {
        "fct-descr": "\u003cp\u003eMap over the right side.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "(b -\u003e b2) -\u003e Either b1 b -\u003e Either b1 b2",
        "fct-source": "src/Eithers.html#mapRight",
        "fct-type": "function",
        "title": "mapRight"
      },
      "index": {
        "description": "Map over the right side",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "mapRight",
        "normalized": "(a-\u003ea)-\u003eEither a a-\u003eEither a a",
        "package": "eithers",
        "partial": "Right",
        "signature": "(b-\u003eb)-\u003eEither b b-\u003eEither b b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:rightToMaybe",
      "description": {
        "fct-descr": "\u003cp\u003eMaybe get the right side of an Either.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e Maybe b",
        "fct-source": "src/Eithers.html#rightToMaybe",
        "fct-type": "function",
        "title": "rightToMaybe"
      },
      "index": {
        "description": "Maybe get the right side of an Either",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "rightToMaybe",
        "normalized": "Either a b-\u003eMaybe b",
        "package": "eithers",
        "partial": "To Maybe",
        "signature": "Either a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:whenLeft",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a value is Left, do something with it, monadically.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e (a -\u003e m c) -\u003e m ()",
        "fct-source": "src/Eithers.html#whenLeft",
        "fct-type": "function",
        "title": "whenLeft"
      },
      "index": {
        "description": "When value is Left do something with it monadically",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "whenLeft",
        "normalized": "Either a b-\u003e(a-\u003ec d)-\u003ec()",
        "package": "eithers",
        "partial": "Left",
        "signature": "Either a b-\u003e(a-\u003em c)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/eithers/docs/Eithers.html#v:whenRight",
      "description": {
        "fct-descr": "\u003cp\u003eWhen a value is Right, do something with it, monadically.\n\u003c/p\u003e",
        "fct-module": "Eithers",
        "fct-package": "eithers",
        "fct-signature": "Either a b -\u003e (b -\u003e m c) -\u003e m ()",
        "fct-source": "src/Eithers.html#whenRight",
        "fct-type": "function",
        "title": "whenRight"
      },
      "index": {
        "description": "When value is Right do something with it monadically",
        "hierarchy": "Eithers",
        "module": "Eithers",
        "name": "whenRight",
        "normalized": "Either a b-\u003e(b-\u003ec d)-\u003ec()",
        "package": "eithers",
        "partial": "Right",
        "signature": "Either a b-\u003e(b-\u003em c)-\u003em()"
      }
    }
  }
]