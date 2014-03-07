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
        "word": "arrowapply-utils"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "ApplyUtils",
          "package": "arrowapply-utils",
          "source": "src/Control-Arrow-ApplyUtils.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "ApplyUtils",
          "package": "arrowapply-utils",
          "partial": "Apply Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "ArrowAsMonad",
          "package": "arrowapply-utils",
          "source": "src/Control-Arrow-ApplyUtils.html#ArrowAsMonad",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "ArrowAsMonad",
          "package": "arrowapply-utils",
          "partial": "Arrow As Monad",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#t:ArrowAsMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "ArrowAsMonad",
          "package": "arrowapply-utils",
          "signature": "ArrowAsMonad",
          "source": "src/Control-Arrow-ApplyUtils.html#ArrowAsMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "ArrowAsMonad",
          "package": "arrowapply-utils",
          "partial": "Arrow As Monad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:ArrowAsMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation.\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA",
          "package": "arrowapply-utils",
          "signature": "(c -\u003e d) -\u003e a b c -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA",
          "normalized": "(a-\u003eb)-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(c-\u003ed)-\u003ea b c-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with two parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA2",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA2",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with two parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with three parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA3",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA3",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with three parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with four parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA4",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA4",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with four parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with five parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA5",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b p5 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA5",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with five parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with six parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA6",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e p6 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b p5 -\u003e a b p6 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA6",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with six parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA6",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA6"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with seven parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA7",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e p6 -\u003e p7 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b p5 -\u003e a b p6 -\u003e a b p7 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA7",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with seven parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA7",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA7"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with eight parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA8",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e p6 -\u003e p7 -\u003e p8 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b p5 -\u003e a b p6 -\u003e a b p7 -\u003e a b p8 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA8",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with eight parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA8",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA8"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift an Arrow operation with eight parameters\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA9",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e p6 -\u003e p7 -\u003e p8 -\u003e p9 -\u003e d) -\u003e a b p1 -\u003e a b p2 -\u003e a b p3 -\u003e a b p4 -\u003e a b p5 -\u003e a b p6 -\u003e a b p7 -\u003e a b p8 -\u003e a b p9 -\u003e a b d",
          "source": "src/Control-Arrow-ApplyUtils.html#liftA9",
          "type": "function"
        },
        "index": {
          "description": "Lift an Arrow operation with eight parameters",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftA9",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d a-\u003ec d b",
          "package": "arrowapply-utils",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ep-\u003ed)-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b p-\u003ea b d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftA9"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e c) -\u003e a b (m p1) -\u003e a b (m c)",
          "source": "src/Control-Arrow-ApplyUtils.html#liftAM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM",
          "normalized": "(a-\u003eb)-\u003ec d(e a)-\u003ec d(e b)",
          "package": "arrowapply-utils",
          "partial": "AM",
          "signature": "(p-\u003ec)-\u003ea b(m p)-\u003ea b(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftAM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM2",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e c) -\u003e a b (m p1) -\u003e a b (m p2) -\u003e a b (m c)",
          "source": "src/Control-Arrow-ApplyUtils.html#liftAM2",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM2",
          "normalized": "(a-\u003ea-\u003eb)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e b)",
          "package": "arrowapply-utils",
          "partial": "AM",
          "signature": "(p-\u003ep-\u003ec)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftAM2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM3",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e c) -\u003e a b (m p1) -\u003e a b (m p2) -\u003e a b (m p3) -\u003e a b (m c)",
          "source": "src/Control-Arrow-ApplyUtils.html#liftAM3",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM3",
          "normalized": "(a-\u003ea-\u003ea-\u003eb)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e b)",
          "package": "arrowapply-utils",
          "partial": "AM",
          "signature": "(p-\u003ep-\u003ep-\u003ec)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftAM3"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM4",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e c) -\u003e a b (m p1) -\u003e a b (m p2) -\u003e a b (m p3) -\u003e a b (m p4) -\u003e a b (m c)",
          "source": "src/Control-Arrow-ApplyUtils.html#liftAM4",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM4",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e b)",
          "package": "arrowapply-utils",
          "partial": "AM",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ec)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftAM4"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM5",
          "package": "arrowapply-utils",
          "signature": "(p1 -\u003e p2 -\u003e p3 -\u003e p4 -\u003e p5 -\u003e c) -\u003e a b (m p1) -\u003e a b (m p2) -\u003e a b (m p3) -\u003e a b (m p4) -\u003e a b (m p5) -\u003e a b (m c)",
          "source": "src/Control-Arrow-ApplyUtils.html#liftAM5",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "liftAM5",
          "normalized": "(a-\u003ea-\u003ea-\u003ea-\u003ea-\u003eb)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e a)-\u003ec d(e b)",
          "package": "arrowapply-utils",
          "partial": "AM",
          "signature": "(p-\u003ep-\u003ep-\u003ep-\u003ep-\u003ec)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m p)-\u003ea b(m c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:liftAM5"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed a block of monadic code in an arrow.\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "monadicA",
          "package": "arrowapply-utils",
          "signature": "(b -\u003e ArrowAsMonad a c) -\u003e a b c",
          "source": "src/Control-Arrow-ApplyUtils.html#monadicA",
          "type": "function"
        },
        "index": {
          "description": "Embed block of monadic code in an arrow",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "monadicA",
          "normalized": "(a-\u003eArrowAsMonad b c)-\u003eb a c",
          "package": "arrowapply-utils",
          "signature": "(b-\u003eArrowAsMonad a c)-\u003ea b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:monadicA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Arrow.ApplyUtils",
          "name": "unApplyAsMonad",
          "package": "arrowapply-utils",
          "signature": "a () c",
          "source": "src/Control-Arrow-ApplyUtils.html#ArrowAsMonad",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "unApplyAsMonad",
          "normalized": "a()b",
          "package": "arrowapply-utils",
          "partial": "Apply As Monad",
          "signature": "a()c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:unApplyAsMonad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmbed an arrow in a block of monadic code.\n\u003c/p\u003e",
          "module": "Control.Arrow.ApplyUtils",
          "name": "unmonadicA",
          "package": "arrowapply-utils",
          "signature": "a b c -\u003e b -\u003e ArrowAsMonad a c",
          "source": "src/Control-Arrow-ApplyUtils.html#unmonadicA",
          "type": "function"
        },
        "index": {
          "description": "Embed an arrow in block of monadic code",
          "hierarchy": "Control Arrow ApplyUtils",
          "module": "Control.Arrow.ApplyUtils",
          "name": "unmonadicA",
          "normalized": "a b c-\u003eb-\u003eArrowAsMonad a c",
          "package": "arrowapply-utils",
          "signature": "a b c-\u003eb-\u003eArrowAsMonad a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/arrowapply-utils/docs/Control-Arrow-ApplyUtils.html#v:unmonadicA"
      }
    }
  ]
]