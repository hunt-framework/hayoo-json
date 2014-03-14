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
        "word": "cflp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "Sat",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#Sat",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "Sat",
          "package": "cflp",
          "partial": "Sat",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#t:Sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "SatCtx",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#SatCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "SatCtx",
          "package": "cflp",
          "partial": "Sat Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#t:SatCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": ".",
          "package": "cflp",
          "signature": "Nondet c m Boolean -\u003e Nondet c m Boolean -\u003e Nondet c m Boolean",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#.%26%26.",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": ".",
          "normalized": "Nondet a b Boolean-\u003eNondet a b Boolean-\u003eNondet a b Boolean",
          "package": "cflp",
          "signature": "Nondet c m Boolean-\u003eNondet c m Boolean-\u003eNondet c m Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": ".||.",
          "package": "cflp",
          "signature": "Nondet c m Boolean -\u003e Nondet c m Boolean -\u003e Nondet c m Boolean",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#.%7C%7C.",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": ".||.",
          "normalized": "Nondet a b Boolean-\u003eNondet a b Boolean-\u003eNondet a b Boolean",
          "package": "cflp",
          "signature": "Nondet c m Boolean-\u003eNondet c m Boolean-\u003eNondet c m Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:.||."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "BooleanSolver",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#BooleanSolver",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "BooleanSolver",
          "package": "cflp",
          "partial": "Boolean Solver",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:BooleanSolver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "assertBoolean",
          "package": "cflp",
          "signature": "c -\u003e Boolean -\u003e c -\u003e m c",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#assertBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "assertBoolean",
          "normalized": "a-\u003eBoolean-\u003ea-\u003eb a",
          "package": "cflp",
          "partial": "Boolean",
          "signature": "c-\u003eBoolean-\u003ec-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:assertBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "booleanToBool",
          "package": "cflp",
          "signature": "Data s Boolean -\u003e Context (Ctx s) -\u003e Data s Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#booleanToBool",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "booleanToBool",
          "normalized": "Data a Boolean-\u003eContext(Ctx a)-\u003eData a Bool",
          "package": "cflp",
          "partial": "To Bool",
          "signature": "Data s Boolean-\u003eContext(Ctx s)-\u003eData s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:booleanToBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "ifThen",
          "package": "cflp",
          "signature": "Data s Boolean -\u003e Data s a -\u003e Context (Ctx s) -\u003e Data s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#ifThen",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "ifThen",
          "normalized": "Data a Boolean-\u003eData a b-\u003eContext(Ctx a)-\u003eData a b",
          "package": "cflp",
          "partial": "Then",
          "signature": "Data s Boolean-\u003eData s a-\u003eContext(Ctx s)-\u003eData s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:ifThen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "ifThenElse",
          "package": "cflp",
          "signature": "Data s Boolean -\u003e Data s a -\u003e Data s a -\u003e Context (Ctx s) -\u003e Data s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#ifThenElse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "ifThenElse",
          "normalized": "Data a Boolean-\u003eData a b-\u003eData a b-\u003eContext(Ctx a)-\u003eData a b",
          "package": "cflp",
          "partial": "Then Else",
          "signature": "Data s Boolean-\u003eData s a-\u003eData s a-\u003eContext(Ctx s)-\u003eData s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:ifThenElse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "lookupBoolean",
          "package": "cflp",
          "signature": "Int -\u003e c -\u003e Maybe Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#lookupBoolean",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "lookupBoolean",
          "normalized": "Int-\u003ea-\u003eMaybe Bool",
          "package": "cflp",
          "partial": "Boolean",
          "signature": "Int-\u003ec-\u003eMaybe Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:lookupBoolean"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "neg",
          "package": "cflp",
          "signature": "Nondet c m Boolean -\u003e Nondet c m Boolean",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#neg",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "neg",
          "normalized": "Nondet a b Boolean-\u003eNondet a b Boolean",
          "package": "cflp",
          "signature": "Nondet c m Boolean-\u003eNondet c m Boolean",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:neg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "no",
          "package": "cflp",
          "signature": "Nondet c m Boolean",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#no",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "no",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:no"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "satSolving",
          "package": "cflp",
          "signature": "s c -\u003e Sat s (SatCtx c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#satSolving",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "satSolving",
          "normalized": "a b-\u003eSat a(SatCtx b)",
          "package": "cflp",
          "partial": "Solving",
          "signature": "s c-\u003eSat s(SatCtx c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:satSolving"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Constraints.Boolean",
          "name": "yes",
          "package": "cflp",
          "signature": "Nondet c m Boolean",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Constraints-Boolean.html#yes",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Constraints Boolean",
          "module": "CFLP.Constraints.Boolean",
          "name": "yes",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Constraints-Boolean.html#v:yes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "CTC",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-CallTimeChoice.html#CTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies CallTimeChoice",
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "CTC",
          "package": "cflp",
          "partial": "CTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-CallTimeChoice.html#t:CTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "StoreCTC",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-CallTimeChoice.html#StoreCTC",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies CallTimeChoice",
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "StoreCTC",
          "package": "cflp",
          "partial": "Store CTC",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-CallTimeChoice.html#t:StoreCTC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "callTimeChoice",
          "package": "cflp",
          "signature": "s c -\u003e CTC s (StoreCTC c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-CallTimeChoice.html#callTimeChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies CallTimeChoice",
          "module": "CFLP.Strategies.CallTimeChoice",
          "name": "callTimeChoice",
          "normalized": "a b-\u003eCTC a(StoreCTC b)",
          "package": "cflp",
          "partial": "Time Choice",
          "signature": "s c-\u003eCTC s(StoreCTC c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-CallTimeChoice.html#v:callTimeChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "Depth",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#Depth",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "Depth",
          "package": "cflp",
          "partial": "Depth",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#t:Depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "DepthCtx",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#DepthCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "DepthCtx",
          "package": "cflp",
          "partial": "Depth Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#t:DepthCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "DepthCounter",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#DepthCounter",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "DepthCounter",
          "package": "cflp",
          "partial": "Depth Counter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#v:DepthCounter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "countDepth",
          "package": "cflp",
          "signature": "s c -\u003e Depth s (DepthCtx c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#countDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "countDepth",
          "normalized": "a b-\u003eDepth a(DepthCtx b)",
          "package": "cflp",
          "partial": "Depth",
          "signature": "s c-\u003eDepth s(DepthCtx c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#v:countDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "currentDepth",
          "package": "cflp",
          "signature": "c -\u003e Int",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#currentDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "currentDepth",
          "normalized": "a-\u003eInt",
          "package": "cflp",
          "partial": "Depth",
          "signature": "c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#v:currentDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthCounter",
          "name": "incrementDepth",
          "package": "cflp",
          "signature": "c -\u003e c -\u003e c",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthCounter.html#incrementDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthCounter",
          "module": "CFLP.Strategies.DepthCounter",
          "name": "incrementDepth",
          "normalized": "a-\u003ea-\u003ea",
          "package": "cflp",
          "partial": "Depth",
          "signature": "c-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthCounter.html#v:incrementDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLim",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#DepthLim",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLim",
          "package": "cflp",
          "partial": "Depth Lim",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#t:DepthLim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLimCtx",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#DepthLimCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLimCtx",
          "package": "cflp",
          "partial": "Depth Lim Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#t:DepthLimCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLimiter",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#DepthLimiter",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "DepthLimiter",
          "package": "cflp",
          "partial": "Depth Limiter",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#v:DepthLimiter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "depthLimit",
          "package": "cflp",
          "signature": "c -\u003e Int",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#depthLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "depthLimit",
          "normalized": "a-\u003eInt",
          "package": "cflp",
          "partial": "Limit",
          "signature": "c-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#v:depthLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "limitDepth",
          "package": "cflp",
          "signature": "Int -\u003e s c -\u003e DepthLim s (DepthLimCtx c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#limitDepth",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "limitDepth",
          "normalized": "Int-\u003ea b-\u003eDepthLim a(DepthLimCtx b)",
          "package": "cflp",
          "partial": "Depth",
          "signature": "Int-\u003es c-\u003eDepthLim s(DepthLimCtx c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#v:limitDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "resetDepthLimit",
          "package": "cflp",
          "signature": "c -\u003e Int -\u003e c -\u003e c",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#resetDepthLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "resetDepthLimit",
          "normalized": "a-\u003eInt-\u003ea-\u003ea",
          "package": "cflp",
          "partial": "Depth Limit",
          "signature": "c-\u003eInt-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#v:resetDepthLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.DepthLimit",
          "name": "setDepthLimit",
          "package": "cflp",
          "signature": "c -\u003e Int -\u003e s ()",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-DepthLimit.html#setDepthLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies DepthLimit",
          "module": "CFLP.Strategies.DepthLimit",
          "name": "setDepthLimit",
          "normalized": "a-\u003eInt-\u003eb()",
          "package": "cflp",
          "partial": "Depth Limit",
          "signature": "c-\u003eInt-\u003es()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-DepthLimit.html#v:setDepthLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "Rnd",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#Rnd",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "Rnd",
          "package": "cflp",
          "partial": "Rnd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#t:Rnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "RndCtx",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#RndCtx",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "RndCtx",
          "package": "cflp",
          "partial": "Rnd Ctx",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#t:RndCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "Randomiser",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#Randomiser",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "Randomiser",
          "package": "cflp",
          "partial": "Randomiser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#v:Randomiser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "getRandomGen",
          "package": "cflp",
          "signature": "c -\u003e StdGen",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#getRandomGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "getRandomGen",
          "normalized": "a-\u003eStdGen",
          "package": "cflp",
          "partial": "Random Gen",
          "signature": "c-\u003eStdGen",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#v:getRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "randomise",
          "package": "cflp",
          "signature": "s c -\u003e Rnd s (RndCtx c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#randomise",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "randomise",
          "normalized": "a b-\u003eRnd a(RndCtx b)",
          "package": "cflp",
          "signature": "s c-\u003eRnd s(RndCtx c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#v:randomise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies.Random",
          "name": "setRandomGen",
          "package": "cflp",
          "signature": "c -\u003e StdGen -\u003e c -\u003e c",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies-Random.html#setRandomGen",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies Random",
          "module": "CFLP.Strategies.Random",
          "name": "setRandomGen",
          "normalized": "a-\u003eStdGen-\u003ea-\u003ea",
          "package": "cflp",
          "partial": "Random Gen",
          "signature": "c-\u003eStdGen-\u003ec-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies-Random.html#v:setRandomGen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "Computation",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#Computation",
          "type": "type"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "Computation",
          "package": "cflp",
          "partial": "Computation",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#t:Computation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "bfs",
          "package": "cflp",
          "signature": "[CTC (Monadic (UpdateT (StoreCTC ()) Levels)) (StoreCTC ())]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#bfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "bfs",
          "normalized": "[CTC(Monadic(UpdateT(StoreCTC())Levels))(StoreCTC())]",
          "package": "cflp",
          "signature": "[CTC(Monadic(UpdateT(StoreCTC())Levels))(StoreCTC())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:bfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "bfs_B",
          "package": "cflp",
          "signature": "[CTC (Sat (Monadic (UpdateT (StoreCTC (SatCtx ())) Levels))) (StoreCTC (SatCtx ()))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#bfs_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "bfs_B",
          "normalized": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Levels)))(StoreCTC(SatCtx()))]",
          "package": "cflp",
          "signature": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Levels)))(StoreCTC(SatCtx()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:bfs_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "dfs",
          "package": "cflp",
          "signature": "[CTC (Monadic (UpdateT (StoreCTC ()) [])) (StoreCTC ())]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#dfs",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "dfs",
          "normalized": "[CTC(Monadic(UpdateT(StoreCTC())[]))(StoreCTC())]",
          "package": "cflp",
          "signature": "[CTC(Monadic(UpdateT(StoreCTC())[]))(StoreCTC())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:dfs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "dfs_B",
          "package": "cflp",
          "signature": "[CTC (Sat (Monadic (UpdateT (StoreCTC (SatCtx ())) []))) (StoreCTC (SatCtx ()))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#dfs_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "dfs_B",
          "normalized": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))[])))(StoreCTC(SatCtx()))]",
          "package": "cflp",
          "signature": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))[])))(StoreCTC(SatCtx()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:dfs_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "diag",
          "package": "cflp",
          "signature": "[CTC (Monadic (UpdateT (StoreCTC ()) Omega)) (StoreCTC ())]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#diag",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "diag",
          "normalized": "[CTC(Monadic(UpdateT(StoreCTC())Omega))(StoreCTC())]",
          "package": "cflp",
          "signature": "[CTC(Monadic(UpdateT(StoreCTC())Omega))(StoreCTC())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:diag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "diag_B",
          "package": "cflp",
          "signature": "[CTC (Sat (Monadic (UpdateT (StoreCTC (SatCtx ())) Omega))) (StoreCTC (SatCtx ()))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#diag_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "diag_B",
          "normalized": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Omega)))(StoreCTC(SatCtx()))]",
          "package": "cflp",
          "signature": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Omega)))(StoreCTC(SatCtx()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:diag_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "fair",
          "package": "cflp",
          "signature": "[CTC (Monadic (UpdateT (StoreCTC ()) Stream)) (StoreCTC ())]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#fair",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "fair",
          "normalized": "[CTC(Monadic(UpdateT(StoreCTC())Stream))(StoreCTC())]",
          "package": "cflp",
          "signature": "[CTC(Monadic(UpdateT(StoreCTC())Stream))(StoreCTC())]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:fair"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "fair_B",
          "package": "cflp",
          "signature": "[CTC (Sat (Monadic (UpdateT (StoreCTC (SatCtx ())) Stream))) (StoreCTC (SatCtx ()))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#fair_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "fair_B",
          "normalized": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Stream)))(StoreCTC(SatCtx()))]",
          "package": "cflp",
          "signature": "[CTC(Sat(Monadic(UpdateT(StoreCTC(SatCtx()))Stream)))(StoreCTC(SatCtx()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:fair_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "iterDFS",
          "package": "cflp",
          "signature": "[CTC (Depth (DepthLim (Monadic (UpdateT (StoreCTC (DepthCtx (DepthLimCtx ()))) [])))) (StoreCTC (DepthCtx (DepthLimCtx ())))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#iterDFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "iterDFS",
          "normalized": "[CTC(Depth(DepthLim(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx())))[]))))(StoreCTC(DepthCtx(DepthLimCtx())))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "[CTC(Depth(DepthLim(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx())))[]))))(StoreCTC(DepthCtx(DepthLimCtx())))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:iterDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "iterDFS_B",
          "package": "cflp",
          "signature": "[CTC (Depth (DepthLim (Sat (Monadic (UpdateT (StoreCTC (DepthCtx (DepthLimCtx (SatCtx ())))) []))))) (StoreCTC (DepthCtx (DepthLimCtx (SatCtx ()))))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#iterDFS_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "iterDFS_B",
          "normalized": "[CTC(Depth(DepthLim(Sat(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))[])))))(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "[CTC(Depth(DepthLim(Sat(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))[])))))(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:iterDFS_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "limDFS",
          "package": "cflp",
          "signature": "Int -\u003e [CTC (Depth (DepthLim (Monadic (UpdateT (StoreCTC (DepthCtx (DepthLimCtx ()))) [])))) (StoreCTC (DepthCtx (DepthLimCtx ())))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#limDFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "limDFS",
          "normalized": "Int-\u003e[CTC(Depth(DepthLim(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx())))[]))))(StoreCTC(DepthCtx(DepthLimCtx())))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "Int-\u003e[CTC(Depth(DepthLim(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx())))[]))))(StoreCTC(DepthCtx(DepthLimCtx())))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:limDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "limDFS_B",
          "package": "cflp",
          "signature": "Int -\u003e [CTC (Depth (DepthLim (Sat (Monadic (UpdateT (StoreCTC (DepthCtx (DepthLimCtx (SatCtx ())))) []))))) (StoreCTC (DepthCtx (DepthLimCtx (SatCtx ()))))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#limDFS_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "limDFS_B",
          "normalized": "Int-\u003e[CTC(Depth(DepthLim(Sat(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))[])))))(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "Int-\u003e[CTC(Depth(DepthLim(Sat(Monadic(UpdateT(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))[])))))(StoreCTC(DepthCtx(DepthLimCtx(SatCtx()))))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:limDFS_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "rndDFS",
          "package": "cflp",
          "signature": "[CTC (Rnd (Monadic (UpdateT (StoreCTC (RndCtx ())) []))) (StoreCTC (RndCtx ()))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#rndDFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "rndDFS",
          "normalized": "[CTC(Rnd(Monadic(UpdateT(StoreCTC(RndCtx()))[])))(StoreCTC(RndCtx()))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "[CTC(Rnd(Monadic(UpdateT(StoreCTC(RndCtx()))[])))(StoreCTC(RndCtx()))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:rndDFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Strategies",
          "name": "rndDFS_B",
          "package": "cflp",
          "signature": "[CTC (Rnd (Sat (Monadic (UpdateT (StoreCTC (RndCtx (SatCtx ()))) [])))) (StoreCTC (RndCtx (SatCtx ())))]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Strategies.html#rndDFS_B",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Strategies",
          "module": "CFLP.Strategies",
          "name": "rndDFS_B",
          "normalized": "[CTC(Rnd(Sat(Monadic(UpdateT(StoreCTC(RndCtx(SatCtx())))[]))))(StoreCTC(RndCtx(SatCtx())))]",
          "package": "cflp",
          "partial": "DFS",
          "signature": "[CTC(Rnd(Sat(Monadic(UpdateT(StoreCTC(RndCtx(SatCtx())))[]))))(StoreCTC(RndCtx(SatCtx())))]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Strategies.html#v:rndDFS_B"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.Boolean",
          "name": "assertVariable",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-Boolean.html#assertVariable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests Boolean",
          "module": "CFLP.Tests.Boolean",
          "name": "assertVariable",
          "package": "cflp",
          "partial": "Variable",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-Boolean.html#v:assertVariable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.Boolean",
          "name": "tests",
          "package": "cflp",
          "signature": "Test",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-Boolean.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests Boolean",
          "module": "CFLP.Tests.Boolean",
          "name": "tests",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-Boolean.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.Boolean",
          "name": "unsatisfiable",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-Boolean.html#unsatisfiable",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests Boolean",
          "module": "CFLP.Tests.Boolean",
          "name": "unsatisfiable",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-Boolean.html#v:unsatisfiable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.Boolean",
          "name": "unsatisfiableWithBacktracking",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-Boolean.html#unsatisfiableWithBacktracking",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests Boolean",
          "module": "CFLP.Tests.Boolean",
          "name": "unsatisfiableWithBacktracking",
          "package": "cflp",
          "partial": "With Backtracking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-Boolean.html#v:unsatisfiableWithBacktracking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.Boolean",
          "name": "xAndYandZ",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-Boolean.html#xAndYandZ",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests Boolean",
          "module": "CFLP.Tests.Boolean",
          "name": "xAndYandZ",
          "package": "cflp",
          "partial": "And Yand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-Boolean.html#v:xAndYandZ"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "ignoreFirstNarrowSecond",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#ignoreFirstNarrowSecond",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "ignoreFirstNarrowSecond",
          "package": "cflp",
          "partial": "First Narrow Second",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:ignoreFirstNarrowSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "ignot",
          "package": "cflp",
          "signature": "Data s a -\u003e Data s Bool -\u003e Context (Ctx s) -\u003e Data s Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#ignot",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "ignot",
          "normalized": "Data a b-\u003eData a Bool-\u003eContext(Ctx a)-\u003eData a Bool",
          "package": "cflp",
          "signature": "Data s a-\u003eData s Bool-\u003eContext(Ctx s)-\u003eData s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:ignot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "negHeads",
          "package": "cflp",
          "signature": "Data s [Bool] -\u003e Context (Ctx s) -\u003e Data s [Bool]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#negHeads",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "negHeads",
          "normalized": "Data a[Bool]-\u003eContext(Ctx a)-\u003eData a[Bool]",
          "package": "cflp",
          "partial": "Heads",
          "signature": "Data s[Bool]-\u003eContext(Ctx s)-\u003eData s[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:negHeads"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "noDemandOnSharedVar",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#noDemandOnSharedVar",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "noDemandOnSharedVar",
          "package": "cflp",
          "partial": "Demand On Shared Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:noDemandOnSharedVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "sharedCompoundTerms",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#sharedCompoundTerms",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "sharedCompoundTerms",
          "package": "cflp",
          "partial": "Compound Terms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:sharedCompoundTerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "sharedVarsAreEqual",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#sharedVarsAreEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "sharedVarsAreEqual",
          "package": "cflp",
          "partial": "Vars Are Equal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:sharedVarsAreEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "tests",
          "package": "cflp",
          "signature": "Test",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "tests",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "two",
          "package": "cflp",
          "signature": "Nondet cs m a -\u003e Nondet cs m [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-CallTimeChoice.html#two",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests CallTimeChoice",
          "module": "CFLP.Tests.CallTimeChoice",
          "name": "two",
          "normalized": "Nondet a b c-\u003eNondet a b[c]",
          "package": "cflp",
          "signature": "Nondet cs m a-\u003eNondet cs m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-CallTimeChoice.html#v:two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "after",
          "package": "cflp",
          "signature": "Data s (b -\u003e c) -\u003e Data s (a -\u003e b) -\u003e Data s (a -\u003e c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#after",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "after",
          "normalized": "Data a(b-\u003ec)-\u003eData a(d-\u003eb)-\u003eData a(d-\u003ec)",
          "package": "cflp",
          "signature": "Data s(b-\u003ec)-\u003eData s(a-\u003eb)-\u003eData s(a-\u003ec)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:after"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyBinCons",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#applyBinCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyBinCons",
          "package": "cflp",
          "partial": "Bin Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:applyBinCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyChoice",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#applyChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyChoice",
          "package": "cflp",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:applyChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyNotFunction",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#applyNotFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "applyNotFunction",
          "package": "cflp",
          "partial": "Not Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:applyNotFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "callTimeChoice",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#callTimeChoice",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "callTimeChoice",
          "package": "cflp",
          "partial": "Time Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:callTimeChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "flip",
          "package": "cflp",
          "signature": "Data s (a -\u003e b -\u003e c) -\u003e Data s b -\u003e Data s a -\u003e Context (Ctx s) -\u003e ID -\u003e Data s c",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#flip",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "flip",
          "normalized": "Data a(b-\u003ec-\u003ed)-\u003eData a c-\u003eData a b-\u003eContext(Ctx a)-\u003eID-\u003eData a d",
          "package": "cflp",
          "signature": "Data s(a-\u003eb-\u003ec)-\u003eData s b-\u003eData s a-\u003eContext(Ctx s)-\u003eID-\u003eData s c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:flip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "functionConversion",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#functionConversion",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "functionConversion",
          "package": "cflp",
          "partial": "Conversion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:functionConversion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "id",
          "package": "cflp",
          "signature": "Data s a -\u003e Data s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#id",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "id",
          "normalized": "Data a b-\u003eData a b",
          "package": "cflp",
          "signature": "Data s a-\u003eData s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:id"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "mapSharedUnknowns",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#mapSharedUnknowns",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "mapSharedUnknowns",
          "package": "cflp",
          "partial": "Shared Unknowns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:mapSharedUnknowns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "memberWithFold",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#memberWithFold",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "memberWithFold",
          "package": "cflp",
          "partial": "With Fold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:memberWithFold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "overApplication",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#overApplication",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "overApplication",
          "package": "cflp",
          "partial": "Application",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:overApplication"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "pointfreeReverse",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#pointfreeReverse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "pointfreeReverse",
          "package": "cflp",
          "partial": "Reverse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:pointfreeReverse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "reverseWithFoldr",
          "package": "cflp",
          "signature": "Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#reverseWithFoldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "reverseWithFoldr",
          "package": "cflp",
          "partial": "With Foldr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:reverseWithFoldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "tests",
          "package": "cflp",
          "signature": "Test",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#tests",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "tests",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests.HigherOrder",
          "name": "two",
          "package": "cflp",
          "signature": "Nondet cs m a -\u003e Nondet cs m [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests-HigherOrder.html#two",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests HigherOrder",
          "module": "CFLP.Tests.HigherOrder",
          "name": "two",
          "normalized": "Nondet a b c-\u003eNondet a b[c]",
          "package": "cflp",
          "signature": "Nondet cs m a-\u003eNondet cs m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests-HigherOrder.html#v:two"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests",
          "name": "assertResults",
          "package": "cflp",
          "signature": "Computation a -\u003e [a] -\u003e Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests.html#assertResults",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests",
          "module": "CFLP.Tests",
          "name": "assertResults",
          "normalized": "Computation a-\u003e[a]-\u003eAssertion",
          "package": "cflp",
          "partial": "Results",
          "signature": "Computation a-\u003e[a]-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests.html#v:assertResults"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests",
          "name": "assertResultsLimit",
          "package": "cflp",
          "signature": "Maybe Int -\u003e Computation a -\u003e [a] -\u003e Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests.html#assertResultsLimit",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests",
          "module": "CFLP.Tests",
          "name": "assertResultsLimit",
          "normalized": "Maybe Int-\u003eComputation a-\u003e[a]-\u003eAssertion",
          "package": "cflp",
          "partial": "Results Limit",
          "signature": "Maybe Int-\u003eComputation a-\u003e[a]-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests.html#v:assertResultsLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Tests",
          "name": "assertResultsN",
          "package": "cflp",
          "signature": "Int -\u003e Computation a -\u003e [a] -\u003e Assertion",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Tests.html#assertResultsN",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Tests",
          "module": "CFLP.Tests",
          "name": "assertResultsN",
          "normalized": "Int-\u003eComputation a-\u003e[a]-\u003eAssertion",
          "package": "cflp",
          "partial": "Results",
          "signature": "Int-\u003eComputation a-\u003e[a]-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Tests.html#v:assertResultsN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "===",
          "package": "cflp",
          "signature": "Data s a -\u003e Data s a -\u003e Context (Ctx s) -\u003e Data s Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#%3D%3D%3D",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "===",
          "normalized": "Data a b-\u003eData a b-\u003eContext(Ctx a)-\u003eData a Bool",
          "package": "cflp",
          "signature": "Data s a-\u003eData s a-\u003eContext(Ctx s)-\u003eData s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:==="
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "false",
          "package": "cflp",
          "signature": "Nondet c m Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#false",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "false",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:false"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "not",
          "package": "cflp",
          "signature": "Data s Bool -\u003e Context (Ctx s) -\u003e Data s Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#not",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "not",
          "normalized": "Data a Bool-\u003eContext(Ctx a)-\u003eData a Bool",
          "package": "cflp",
          "signature": "Data s Bool-\u003eContext(Ctx s)-\u003eData s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "pFalse",
          "package": "cflp",
          "signature": "(Context c -\u003e Nondet c m a) -\u003e Match Bool c m a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#pFalse",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "pFalse",
          "normalized": "(Context a-\u003eNondet a b c)-\u003eMatch Bool a b c",
          "package": "cflp",
          "partial": "False",
          "signature": "(Context c-\u003eNondet c m a)-\u003eMatch Bool c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:pFalse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "pTrue",
          "package": "cflp",
          "signature": "(Context c -\u003e Nondet c m a) -\u003e Match Bool c m a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#pTrue",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "pTrue",
          "normalized": "(Context a-\u003eNondet a b c)-\u003eMatch Bool a b c",
          "package": "cflp",
          "partial": "True",
          "signature": "(Context c-\u003eNondet c m a)-\u003eMatch Bool c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:pTrue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.Bool",
          "name": "true",
          "package": "cflp",
          "signature": "Nondet c m Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-Bool.html#true",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types Bool",
          "module": "CFLP.Types.Bool",
          "name": "true",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-Bool.html#v:true"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "^:",
          "package": "cflp",
          "signature": "Nondet c m a -\u003e Nondet c m [a] -\u003e Nondet c m [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#%5E%3A",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "^:",
          "normalized": "Nondet a b c-\u003eNondet a b[c]-\u003eNondet a b[c]",
          "package": "cflp",
          "signature": "Nondet c m a-\u003eNondet c m[a]-\u003eNondet c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:^:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "dCons",
          "package": "cflp",
          "signature": "Decons [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#dCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "dCons",
          "normalized": "Decons[a]",
          "package": "cflp",
          "partial": "Cons",
          "signature": "Decons[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:dCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "dNil",
          "package": "cflp",
          "signature": "Decons [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#dNil",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "dNil",
          "normalized": "Decons[a]",
          "package": "cflp",
          "partial": "Nil",
          "signature": "Decons[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:dNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "foldr",
          "package": "cflp",
          "signature": "Data s (a -\u003e b -\u003e b) -\u003e Data s b -\u003e Data s [a] -\u003e Context (Ctx s) -\u003e ID -\u003e Data s b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#foldr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "foldr",
          "normalized": "Data a(b-\u003ec-\u003ec)-\u003eData a c-\u003eData a[b]-\u003eContext(Ctx a)-\u003eID-\u003eData a c",
          "package": "cflp",
          "signature": "Data s(a-\u003eb-\u003eb)-\u003eData s b-\u003eData s[a]-\u003eContext(Ctx s)-\u003eID-\u003eData s b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:foldr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "head",
          "package": "cflp",
          "signature": "Data s [a] -\u003e Context (Ctx s) -\u003e Data s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#head",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "head",
          "normalized": "Data a[b]-\u003eContext(Ctx a)-\u003eData a b",
          "package": "cflp",
          "signature": "Data s[a]-\u003eContext(Ctx s)-\u003eData s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:head"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "map",
          "package": "cflp",
          "signature": "Data s (a -\u003e b) -\u003e Data s [a] -\u003e Context (Ctx s) -\u003e ID -\u003e Data s [b]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#map",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "map",
          "normalized": "Data a(b-\u003ec)-\u003eData a[b]-\u003eContext(Ctx a)-\u003eID-\u003eData a[c]",
          "package": "cflp",
          "signature": "Data s(a-\u003eb)-\u003eData s[a]-\u003eContext(Ctx s)-\u003eID-\u003eData s[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:map"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "nil",
          "package": "cflp",
          "signature": "Nondet c m [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#nil",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "nil",
          "normalized": "Nondet a b[c]",
          "package": "cflp",
          "signature": "Nondet c m[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "null",
          "package": "cflp",
          "signature": "Data s [a] -\u003e Context (Ctx s) -\u003e Data s Bool",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#null",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "null",
          "normalized": "Data a[b]-\u003eContext(Ctx a)-\u003eData a Bool",
          "package": "cflp",
          "signature": "Data s[a]-\u003eContext(Ctx s)-\u003eData s Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:null"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "pCons",
          "package": "cflp",
          "signature": "(Context c -\u003e Nondet c m a -\u003e Nondet c m [a] -\u003e Nondet c m b) -\u003e Match [a] c m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#pCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "pCons",
          "normalized": "(Context a-\u003eNondet a b c-\u003eNondet a b[c]-\u003eNondet a b d)-\u003eMatch[c]a b d",
          "package": "cflp",
          "partial": "Cons",
          "signature": "(Context c-\u003eNondet c m a-\u003eNondet c m[a]-\u003eNondet c m b)-\u003eMatch[a]c m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:pCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "pNil",
          "package": "cflp",
          "signature": "(Context c -\u003e Nondet c m b) -\u003e Match [a] c m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#pNil",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "pNil",
          "normalized": "(Context a-\u003eNondet a b c)-\u003eMatch[d]a b c",
          "package": "cflp",
          "partial": "Nil",
          "signature": "(Context c-\u003eNondet c m b)-\u003eMatch[a]c m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:pNil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP.Types.List",
          "name": "tail",
          "package": "cflp",
          "signature": "Data s [a] -\u003e Context (Ctx s) -\u003e Data s [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Types-List.html#tail",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP Types List",
          "module": "CFLP.Types.List",
          "name": "tail",
          "normalized": "Data a[b]-\u003eContext(Ctx a)-\u003eData a[b]",
          "package": "cflp",
          "signature": "Data s[a]-\u003eContext(Ctx s)-\u003eData s[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP-Types-List.html#v:tail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "ConsPatList",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#ConsPatList",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "ConsPatList",
          "package": "cflp",
          "partial": "Cons Pat List",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:ConsPatList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Context",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Types.html#Context",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Context",
          "package": "cflp",
          "partial": "Context",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Context"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Ctx",
          "package": "cflp",
          "signature": "type family Ctx s ",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Control-Strategy.html#Ctx",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Ctx",
          "package": "cflp",
          "partial": "Ctx",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Data",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#Data",
          "type": "type"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Data",
          "package": "cflp",
          "partial": "Data",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Data"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Decons",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#Decons",
          "type": "type"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Decons",
          "package": "cflp",
          "partial": "Decons",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Decons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "ID",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Types.html#ID",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "ID",
          "package": "cflp",
          "partial": "ID",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:ID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Match",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#Match",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Match",
          "package": "cflp",
          "partial": "Match",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Match"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Monadic",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Control-Strategy.html#Monadic",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Monadic",
          "package": "cflp",
          "partial": "Monadic",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Nondet",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Types.html#Nondet",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Nondet",
          "package": "cflp",
          "partial": "Nondet",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Nondet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "NormalForm",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Types.html#NormalForm",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "NormalForm",
          "package": "cflp",
          "partial": "Normal Form",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:NormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Result",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Result",
          "package": "cflp",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "UpdateT",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Control-Monad-Update.html#UpdateT",
          "type": "data"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "UpdateT",
          "package": "cflp",
          "partial": "Update",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#t:UpdateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "!",
          "package": "cflp",
          "signature": "(Int -\u003e GenericOps a) -\u003e (Int -\u003e GenericOps a) -\u003e Int -\u003e GenericOps a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "!",
          "normalized": "(Int-\u003eGenericOps a)-\u003e(Int-\u003eGenericOps a)-\u003eInt-\u003eGenericOps a",
          "package": "cflp",
          "signature": "(Int-\u003eGenericOps a)-\u003e(Int-\u003eGenericOps a)-\u003eInt-\u003eGenericOps a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "?",
          "package": "cflp",
          "signature": "Nondet c s a -\u003e Nondet c s a -\u003e ID -\u003e Nondet c s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Narrowing.html#%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "?",
          "normalized": "Nondet a b c-\u003eNondet a b c-\u003eID-\u003eNondet a b c",
          "package": "cflp",
          "signature": "Nondet c s a-\u003eNondet c s a-\u003eID-\u003eNondet c s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:?"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "ApplyCons",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#ApplyCons",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "ApplyCons",
          "package": "cflp",
          "partial": "Apply Cons",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:ApplyCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "CFLP",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#CFLP",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "CFLP",
          "package": "cflp",
          "partial": "CFLP",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:CFLP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Enumerable",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Control-Strategy.html#Enumerable",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Enumerable",
          "package": "cflp",
          "partial": "Enumerable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:Enumerable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Generic",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#Generic",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Generic",
          "package": "cflp",
          "partial": "Generic",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:Generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "Narrow",
          "package": "cflp",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Narrowing.html#Narrow",
          "type": "class"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "Narrow",
          "package": "cflp",
          "partial": "Narrow",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:Narrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "apply",
          "package": "cflp",
          "signature": "Nondet cs m (a -\u003e b) -\u003e Nondet cs m a -\u003e Context cs -\u003e ID -\u003e Nondet cs m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-HigherOrder.html#apply",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "apply",
          "normalized": "Nondet a b(c-\u003ed)-\u003eNondet a b c-\u003eContext a-\u003eID-\u003eNondet a b d",
          "package": "cflp",
          "signature": "Nondet cs m(a-\u003eb)-\u003eNondet cs m a-\u003eContext cs-\u003eID-\u003eNondet cs m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:apply"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "applyCons",
          "package": "cflp",
          "signature": "a -\u003e [NormalForm] -\u003e Result a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#applyCons",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "applyCons",
          "normalized": "a-\u003e[NormalForm]-\u003eResult a",
          "package": "cflp",
          "partial": "Cons",
          "signature": "a-\u003e[NormalForm]-\u003eResult a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:applyCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "caseOf",
          "package": "cflp",
          "signature": "Nondet cs m a -\u003e [Match a cs m b] -\u003e Context cs -\u003e Nondet cs m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#caseOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "caseOf",
          "normalized": "Nondet a b c-\u003e[Match c a b d]-\u003eContext a-\u003eNondet a b d",
          "package": "cflp",
          "partial": "Of",
          "signature": "Nondet cs m a-\u003e[Match a cs m b]-\u003eContext cs-\u003eNondet cs m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:caseOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "caseOf_",
          "package": "cflp",
          "signature": "Nondet cs m a -\u003e [Match a cs m b] -\u003e Nondet cs m b -\u003e Context cs -\u003e Nondet cs m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#caseOf_",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "caseOf_",
          "normalized": "Nondet a b c-\u003e[Match c a b d]-\u003eNondet a b d-\u003eContext a-\u003eNondet a b d",
          "package": "cflp",
          "partial": "Of",
          "signature": "Nondet cs m a-\u003e[Match a cs m b]-\u003eNondet cs m b-\u003eContext cs-\u003eNondet cs m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:caseOf_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "cons",
          "package": "cflp",
          "signature": "String -\u003e a -\u003e Decons a -\u003e Int -\u003e GenericOps (Result a)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#cons",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "cons",
          "normalized": "String-\u003ea-\u003eDecons a-\u003eInt-\u003eGenericOps(Result a)",
          "package": "cflp",
          "signature": "String-\u003ea-\u003eDecons a-\u003eInt-\u003eGenericOps(Result a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:cons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "constr",
          "package": "cflp",
          "signature": "Int -\u003e GenericOps a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#constr",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "constr",
          "normalized": "Int-\u003eGenericOps a",
          "package": "cflp",
          "signature": "Int-\u003eGenericOps a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:constr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "constructors",
          "package": "cflp",
          "signature": "a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#constructors",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "constructors",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:constructors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "enumeration",
          "package": "cflp",
          "signature": "s a -\u003e [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Control-Strategy.html#enumeration",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "enumeration",
          "normalized": "a b-\u003e[b]",
          "package": "cflp",
          "signature": "s a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:enumeration"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "eval",
          "package": "cflp",
          "signature": "[s (Ctx s)] -\u003e (Context (Ctx s) -\u003e ID -\u003e Data s a) -\u003e IO [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "eval",
          "normalized": "[a(Ctx a)]-\u003e(Context(Ctx a)-\u003eID-\u003eData a b)-\u003eIO[b]",
          "package": "cflp",
          "signature": "[s(Ctx s)]-\u003e(Context(Ctx s)-\u003eID-\u003eData s a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "evalPartial",
          "package": "cflp",
          "signature": "[s (Ctx s)] -\u003e (Context (Ctx s) -\u003e ID -\u003e Data s a) -\u003e IO [a]",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#evalPartial",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "evalPartial",
          "normalized": "[a(Ctx a)]-\u003e(Context(Ctx a)-\u003eID-\u003eData a b)-\u003eIO[b]",
          "package": "cflp",
          "partial": "Partial",
          "signature": "[s(Ctx s)]-\u003e(Context(Ctx s)-\u003eID-\u003eData s a)-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:evalPartial"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "evalPrint",
          "package": "cflp",
          "signature": "[s (Ctx s)] -\u003e (Context (Ctx s) -\u003e ID -\u003e Data s a) -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#evalPrint",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "evalPrint",
          "normalized": "[a(Ctx a)]-\u003e(Context(Ctx a)-\u003eID-\u003eData a b)-\u003eIO()",
          "package": "cflp",
          "partial": "Print",
          "signature": "[s(Ctx s)]-\u003e(Context(Ctx s)-\u003eID-\u003eData s a)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:evalPrint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "failure",
          "package": "cflp",
          "signature": "Nondet cs m a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#failure",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "failure",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "fun",
          "package": "cflp",
          "signature": "f -\u003e Nondet cs m t",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-HigherOrder.html#fun",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "fun",
          "normalized": "a-\u003eNondet b c d",
          "package": "cflp",
          "signature": "f-\u003eNondet cs m t",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:fun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "generic",
          "package": "cflp",
          "signature": "a -\u003e NormalForm",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#generic",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "generic",
          "normalized": "a-\u003eNormalForm",
          "package": "cflp",
          "signature": "a-\u003eNormalForm",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:generic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "genericOps",
          "package": "cflp",
          "signature": "GenericOps a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#genericOps",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "genericOps",
          "package": "cflp",
          "partial": "Ops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:genericOps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "groundNormalForm",
          "package": "cflp",
          "signature": "s c -\u003e Nondet c s a -\u003e m (NormalForm, c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Primitive.html#groundNormalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "groundNormalForm",
          "normalized": "a b-\u003eNondet b a c-\u003ed(NormalForm,b)",
          "package": "cflp",
          "partial": "Normal Form",
          "signature": "s c-\u003eNondet c s a-\u003em(NormalForm,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:groundNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "initID",
          "package": "cflp",
          "signature": "IO ID",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-UniqueID.html#initID",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "initID",
          "package": "cflp",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:initID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "monadic",
          "package": "cflp",
          "signature": "Monadic (UpdateT c m) ()",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP.html#monadic",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "monadic",
          "normalized": "Monadic(UpdateT a b)()",
          "package": "cflp",
          "signature": "Monadic(UpdateT c m)()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:monadic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "narrow",
          "package": "cflp",
          "signature": "Context c -\u003e ID -\u003e Nondet c s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Narrowing.html#narrow",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "narrow",
          "normalized": "Context a-\u003eID-\u003eNondet a b c",
          "package": "cflp",
          "signature": "Context c-\u003eID-\u003eNondet c s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:narrow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "nondet",
          "package": "cflp",
          "signature": "a -\u003e Nondet cs m a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Primitive.html#nondet",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "nondet",
          "normalized": "a-\u003eNondet b c a",
          "package": "cflp",
          "signature": "a-\u003eNondet cs m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:nondet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "oneOf",
          "package": "cflp",
          "signature": "[Nondet c s a] -\u003e Context c -\u003e ID -\u003e Nondet c s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Narrowing.html#oneOf",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "oneOf",
          "normalized": "[Nondet a b c]-\u003eContext a-\u003eID-\u003eNondet a b c",
          "package": "cflp",
          "partial": "Of",
          "signature": "[Nondet c s a]-\u003eContext c-\u003eID-\u003eNondet c s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:oneOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "partialNormalForm",
          "package": "cflp",
          "signature": "s c -\u003e Nondet c s a -\u003e m (NormalForm, c)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Primitive.html#partialNormalForm",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "partialNormalForm",
          "normalized": "a b-\u003eNondet b a c-\u003ed(NormalForm,b)",
          "package": "cflp",
          "partial": "Normal Form",
          "signature": "s c-\u003eNondet c s a-\u003em(NormalForm,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:partialNormalForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "patterns",
          "package": "cflp",
          "signature": "a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#patterns",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "patterns",
          "package": "cflp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:patterns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "primitive",
          "package": "cflp",
          "signature": "NormalForm -\u003e a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Generic.html#primitive",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "primitive",
          "normalized": "NormalForm-\u003ea",
          "package": "cflp",
          "signature": "NormalForm-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:primitive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "unknown",
          "package": "cflp",
          "signature": "ID -\u003e Nondet c s a",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Narrowing.html#unknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "unknown",
          "normalized": "ID-\u003eNondet a b c",
          "package": "cflp",
          "signature": "ID-\u003eNondet c s a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "withHNF",
          "package": "cflp",
          "signature": "Nondet cs m a -\u003e (HeadNormalForm cs m -\u003e Context cs -\u003e Nondet cs m b) -\u003e Context cs -\u003e Nondet cs m b",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-Matching.html#withHNF",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "withHNF",
          "normalized": "Nondet a b c-\u003e(HeadNormalForm a b-\u003eContext a-\u003eNondet a b d)-\u003eContext a-\u003eNondet a b d",
          "package": "cflp",
          "partial": "HNF",
          "signature": "Nondet cs m a-\u003e(HeadNormalForm cs m-\u003eContext cs-\u003eNondet cs m b)-\u003eContext cs-\u003eNondet cs m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:withHNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "CFLP",
          "name": "withUnique",
          "package": "cflp",
          "signature": "a -\u003e ID -\u003e Nondet (C ID a) (M ID a) (T ID a)",
          "source": "http://hackage.haskell.org/package/cflp/docs/src/CFLP-Data-UniqueID.html#withUnique",
          "type": "function"
        },
        "index": {
          "hierarchy": "CFLP",
          "module": "CFLP",
          "name": "withUnique",
          "normalized": "a-\u003eID-\u003eNondet(C ID a)(M ID a)(T ID a)",
          "package": "cflp",
          "partial": "Unique",
          "signature": "a-\u003eID-\u003eNondet(C ID a)(M ID a)(T ID a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/cflp/docs/CFLP.html#v:withUnique"
      }
    }
  ]
]