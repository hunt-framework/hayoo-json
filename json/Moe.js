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
        "word": "Moe"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "Combinators",
          "package": "Moe",
          "source": "src/FRP-Moe-Combinators.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "Combinators",
          "package": "Moe",
          "partial": "Combinators",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "MemOp",
          "package": "Moe",
          "source": "src/FRP-Moe-Combinators.html#MemOp",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "MemOp",
          "package": "Moe",
          "partial": "Mem Op",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#t:MemOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "Read",
          "package": "Moe",
          "signature": "Read",
          "source": "src/FRP-Moe-Combinators.html#MemOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "Read",
          "package": "Moe",
          "partial": "Read",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:Read"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "Write",
          "package": "Moe",
          "signature": "Write a",
          "source": "src/FRP-Moe-Combinators.html#MemOp",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "Write",
          "package": "Moe",
          "partial": "Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:Write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "broadcast",
          "package": "Moe",
          "signature": "col sf -\u003e a -\u003e col (a, sf)",
          "source": "src/FRP-Moe-Combinators.html#broadcast",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "broadcast",
          "normalized": "a b-\u003ec-\u003ea(c,b)",
          "package": "Moe",
          "signature": "col sf-\u003ea-\u003ecol(a,sf)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:broadcast"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003exs:     [x1, x2, x3]\n\u003c/p\u003e\u003cp\u003eInput:  \u003ca\u003e(), (), (), (), (), ...\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOutput: \u003ca\u003ex1, x2, x3, x1, x2, ...\u003c/a\u003e\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "cycle",
          "package": "Moe",
          "signature": "[a] -\u003e SF () a",
          "source": "src/FRP-Moe-Combinators.html#cycle",
          "type": "function"
        },
        "index": {
          "description": "xs x1 x2 x3 Input Output x1 x2 x3 x1 x2",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "cycle",
          "normalized": "[a]-\u003eSF()a",
          "package": "Moe",
          "signature": "[a]-\u003eSF()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:cycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple integration\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "integral",
          "package": "Moe",
          "signature": "SF Double Double",
          "source": "src/FRP-Moe-Combinators.html#integral",
          "type": "function"
        },
        "index": {
          "description": "Simple integration",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "integral",
          "package": "Moe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:integral"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003eRead, Write x1, Read, ...\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOutput: \u003ca\u003ex0,   x1,       x1,   ...\u003c/a\u003e\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "memory",
          "package": "Moe",
          "signature": "a -\u003e SF (MemOp a) a",
          "source": "src/FRP-Moe-Combinators.html#memory",
          "type": "function"
        },
        "index": {
          "description": "Input Read Write x1 Read Output x0 x1 x1",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "memory",
          "normalized": "a-\u003eSF(MemOp a)a",
          "package": "Moe",
          "signature": "a-\u003eSF(MemOp a)a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:memory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003ei1, i2, ...\u003c/a\u003e (ignored)\n\u003c/p\u003e\u003cp\u003eOutputs a sequence of random generated numbers using g0\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "noise",
          "package": "Moe",
          "signature": "b -\u003e SF () a",
          "source": "src/FRP-Moe-Combinators.html#noise",
          "type": "function"
        },
        "index": {
          "description": "Input i1 i2 ignored Outputs sequence of random generated numbers using g0",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "noise",
          "normalized": "a-\u003eSF()b",
          "package": "Moe",
          "signature": "b-\u003eSF()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:noise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003ei1, i2, ...\u003c/a\u003e (ignored)\n\u003c/p\u003e\u003cp\u003eOutputs a sequence of random generated numbers using g0, with lh\n\u003c/p\u003e\u003cp\u003eindicating the minimum and maximum numbers that are allowed.\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "noiseR",
          "package": "Moe",
          "signature": "(a, a) -\u003e b -\u003e SF () a",
          "source": "src/FRP-Moe-Combinators.html#noiseR",
          "type": "function"
        },
        "index": {
          "description": "Input i1 i2 ignored Outputs sequence of random generated numbers using g0 with lh indicating the minimum and maximum numbers that are allowed",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "noiseR",
          "normalized": "(a,a)-\u003eb-\u003eSF()a",
          "package": "Moe",
          "signature": "(a,a)-\u003eb-\u003eSF()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:noiseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erep n sf = sf \u003e\u003e\u003e sf \u003e\u003e\u003e ... \u003e\u003e\u003e sf (n times)\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "rep",
          "package": "Moe",
          "signature": "Int -\u003e SF a a -\u003e SF a a",
          "source": "src/FRP-Moe-Combinators.html#rep",
          "type": "function"
        },
        "index": {
          "description": "rep sf sf sf sf times",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "rep",
          "normalized": "Int-\u003eSF a a-\u003eSF a a",
          "package": "Moe",
          "signature": "Int-\u003eSF a a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:rep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003ei1, i2, ...\u003c/a\u003e (ignored)\n\u003c/p\u003e\u003cp\u003eOutput: \u003ca\u003ex,  x,  ...\u003c/a\u003e\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "sfConst",
          "package": "Moe",
          "signature": "a -\u003e SF b a",
          "source": "src/FRP-Moe-Combinators.html#sfConst",
          "type": "function"
        },
        "index": {
          "description": "Input i1 i2 ignored Output",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "sfConst",
          "normalized": "a-\u003eSF b a",
          "package": "Moe",
          "partial": "Const",
          "signature": "a-\u003eSF b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:sfConst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003e(), (), (), ...\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOutput: \u003ca\u003ex0, f x0, f (f x0), ...\u003c/a\u003e\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "stateful",
          "package": "Moe",
          "signature": "(a -\u003e a) -\u003e a -\u003e SF () a",
          "source": "src/FRP-Moe-Combinators.html#stateful",
          "type": "function"
        },
        "index": {
          "description": "Input Output x0 x0 x0",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "stateful",
          "normalized": "(a-\u003ea)-\u003ea-\u003eSF()a",
          "package": "Moe",
          "signature": "(a-\u003ea)-\u003ea-\u003eSF()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003ei1, i2, i3, ...\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOutput: \u003ca\u003ex0, f x0 i1, f (f x0 i1) i2, ...\u003c/a\u003e\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "stateful2",
          "package": "Moe",
          "signature": "(a -\u003e b -\u003e a) -\u003e a -\u003e SF b a",
          "source": "src/FRP-Moe-Combinators.html#stateful2",
          "type": "function"
        },
        "index": {
          "description": "Input i1 i2 i3 Output x0 x0 i1 x0 i1 i2",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "stateful2",
          "normalized": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF b a",
          "package": "Moe",
          "signature": "(a-\u003eb-\u003ea)-\u003ea-\u003eSF b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:stateful2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  \u003ca\u003e(), (), ...\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eOutputs the sequence of the current time at each sample point\n\u003c/p\u003e",
          "module": "FRP.Moe.Combinators",
          "name": "time",
          "package": "Moe",
          "signature": "SF () Double",
          "source": "src/FRP-Moe-Combinators.html#time",
          "type": "function"
        },
        "index": {
          "description": "Input Outputs the sequence of the current time at each sample point",
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "time",
          "normalized": "SF()Double",
          "package": "Moe",
          "signature": "SF()Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Combinators",
          "name": "timedCycle",
          "package": "Moe",
          "signature": "[(DTime, a)] -\u003e SF () a",
          "source": "src/FRP-Moe-Combinators.html#timedCycle",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Combinators",
          "module": "FRP.Moe.Combinators",
          "name": "timedCycle",
          "normalized": "[(DTime,a)]-\u003eSF()a",
          "package": "Moe",
          "partial": "Cycle",
          "signature": "[(DTime,a)]-\u003eSF()a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Combinators.html#v:timedCycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "Core",
          "package": "Moe",
          "source": "src/FRP-Moe-Core.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "Core",
          "package": "Moe",
          "partial": "Core",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "ArrowDelay",
          "package": "Moe",
          "source": "src/FRP-Moe-Core.html#ArrowDelay",
          "type": "class"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "ArrowDelay",
          "package": "Moe",
          "partial": "Arrow Delay",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#t:ArrowDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "DTime",
          "package": "Moe",
          "source": "src/FRP-Moe-Core.html#DTime",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "DTime",
          "package": "Moe",
          "partial": "DTime",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#t:DTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "Event",
          "package": "Moe",
          "source": "src/FRP-Moe-Core.html#Event",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "Event",
          "package": "Moe",
          "partial": "Event",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#t:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSF a b can be seen as a function from [x1, x2, ...] to [y1, y2, ...], in which\n\u003c/p\u003e\u003cp\u003ex1, x2, ... have the type of a, and y1, y2, ... have the type of b. Notice that \n\u003c/p\u003e\u003cp\u003eeach value is in fact a sample of a continuous temporal function of values in \n\u003c/p\u003e\u003cp\u003esome certain time. The time stamps are omitted in most of the comments.\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "SF",
          "package": "Moe",
          "source": "src/FRP-Moe-Core.html#SF",
          "type": "newtype"
        },
        "index": {
          "description": "SF can be seen as function from x1 x2 to y1 y2 in which x1 x2 have the type of and y1 y2 have the type of Notice that each value is in fact sample of continuous temporal function of values in some certain time The time stamps are omitted in most of the comments",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "SF",
          "package": "Moe",
          "partial": "SF",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#t:SF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "Event",
          "package": "Moe",
          "signature": "Event a",
          "source": "src/FRP-Moe-Core.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "Event",
          "package": "Moe",
          "partial": "Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:Event"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "MkSF",
          "package": "Moe",
          "signature": "MkSF",
          "source": "src/FRP-Moe-Core.html#SF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "MkSF",
          "package": "Moe",
          "partial": "Mk SF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:MkSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "NoEvent",
          "package": "Moe",
          "signature": "NoEvent",
          "source": "src/FRP-Moe-Core.html#Event",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "NoEvent",
          "package": "Moe",
          "partial": "No Event",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:NoEvent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [dt1, dt2, ...] (dt_i is the time interval between x_(i-1) and x_i)\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "dTime",
          "package": "Moe",
          "signature": "SF () DTime",
          "source": "src/FRP-Moe-Core.html#dTime",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf dt1 dt2 dt is the time interval between i-1 and",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "dTime",
          "normalized": "SF()DTime",
          "package": "Moe",
          "partial": "Time",
          "signature": "SF()DTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:dTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "delay",
          "package": "Moe",
          "signature": "b -\u003e a b b",
          "source": "src/FRP-Moe-Core.html#delay",
          "type": "method"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "delay",
          "normalized": "a-\u003eb a a",
          "package": "Moe",
          "signature": "b-\u003ea b b",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:delay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:            [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf:           [y1, y2, y3, ...]\n\u003c/p\u003e\u003cp\u003eInput of sfe:           [(x1, y1), (x2, y2), (x3, y3), ...]\n\u003c/p\u003e\u003cp\u003eOutput of sfe:          [NoEvent, Event e1, NoEvent, ...]\n\u003c/p\u003e\u003cp\u003eInput of (gen sf3 e1):  [x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of (gen sf3 e1): [y(sf3,e1)1, y(sf3,e1)2, ...]\n\u003c/p\u003e\u003cp\u003eInput:                  [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput:                 [y1, y2, y(sf3,e2)2, ...]\n\u003c/p\u003e\u003cp\u003ewhere sf1 = [x1, x2, x3, ...] -- ^\u003e [y1, y2, y3, ...]\n\u003c/p\u003e\u003cp\u003esf2 =     [x2, x3, ...] -- ^\u003e     [y2, y3, ...]\n\u003c/p\u003e\u003cp\u003esf3 =         [x3, ...] -- ^\u003e         [y3, ...]\n\u003c/p\u003e\u003cp\u003e...         \n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "dkswitch",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (a, b) (Event c) -\u003e (SF a b -\u003e c -\u003e SF a b) -\u003e SF a b",
          "source": "src/FRP-Moe-Core.html#dkswitch",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 x3 Output of sf y1 y2 y3 Input of sfe x1 y1 x2 y2 x3 y3 Output of sfe NoEvent Event e1 NoEvent Input of gen sf3 e1 x2 x3 Output of gen sf3 e1 sf3 e1 sf3 e1 Input x1 x2 x3 Output y1 y2 sf3 e2 where sf1 x1 x2 x3 y1 y2 y3 sf2 x2 x3 y2 y3 sf3 x3 y3",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "dkswitch",
          "normalized": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "package": "Moe",
          "signature": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:dkswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "dpswitch",
          "package": "Moe",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf)) -\u003e col (SF b c) -\u003e SF (a, col c) (Event d) -\u003e (col (SF b c) -\u003e d -\u003e SF a (col c)) -\u003e SF a (col c)",
          "source": "src/FRP-Moe-Core.html#dpswitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "dpswitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,d g)(Event h)-\u003e(d(SF f g)-\u003eh-\u003eSF c(d g))-\u003eSF c(d g)",
          "package": "Moe",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,col c)(Event d)-\u003e(col(SF b c)-\u003ed-\u003eSF a(col c))-\u003eSF a(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:dpswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:       [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf:      [(y1, NoEvent), (y2, Event e1), (y3, NoEvent), ...]\n\u003c/p\u003e\u003cp\u003eInput of (gen e):  [x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of (gen e): [y(e1)1, y(e1)2, ...]\n\u003c/p\u003e\u003cp\u003eInput:             [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput:            [y1, y2, y(e1)2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "dswitch",
          "package": "Moe",
          "signature": "SF b (c, Event d) -\u003e (d -\u003e SF b c) -\u003e SF b c",
          "source": "src/FRP-Moe-Core.html#dswitch",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 x3 Output of sf y1 NoEvent y2 Event e1 y3 NoEvent Input of gen x2 x3 Output of gen e1 e1 Input x1 x2 x3 Output y1 y2 e1",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "dswitch",
          "normalized": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "package": "Moe",
          "signature": "SF b(c,Event d)-\u003e(d-\u003eSF b c)-\u003eSF b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:dswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn sf into a stream function.\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "gen",
          "package": "Moe",
          "signature": "SF a b -\u003e [(DTime, a)] -\u003e [b]",
          "source": "src/FRP-Moe-Core.html#gen",
          "type": "function"
        },
        "index": {
          "description": "Turn sf into stream function",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "gen",
          "normalized": "SF a b-\u003e[(DTime,a)]-\u003e[b]",
          "package": "Moe",
          "signature": "SF a b-\u003e[(DTime,a)]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:gen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:            [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf:           [y1, y2, y3, ...]\n\u003c/p\u003e\u003cp\u003eInput of sfe:           [(x1, y1), (x2, y2), (x3, y3), ...]\n\u003c/p\u003e\u003cp\u003eOutput of sfe:          [NoEvent, Event e1, NoEvent, ...]\n\u003c/p\u003e\u003cp\u003eInput of (gen sf3 e1):  [x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of (gen sf3 e1): [y(sf3,e1)1, y(sf3,e1)2, ...]\n\u003c/p\u003e\u003cp\u003eInput:                  [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput:                 [y1, y(sf3,e1)1, y(sf3,e2)2, ...]\n\u003c/p\u003e\u003cp\u003ewhere sf1 = [x1, x2, x3, ...] -- ^\u003e [y1, y2, y3, ...]\n\u003c/p\u003e\u003cp\u003esf2 =     [x2, x3, ...] -- ^\u003e     [y2, y3, ...]\n\u003c/p\u003e\u003cp\u003esf3 =         [x3, ...] -- ^\u003e         [y3, ...]\n\u003c/p\u003e\u003cp\u003e...         \n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "kswitch",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (a, b) (Event c) -\u003e (SF a b -\u003e c -\u003e SF a b) -\u003e SF a b",
          "source": "src/FRP-Moe-Core.html#kswitch",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 x3 Output of sf y1 y2 y3 Input of sfe x1 y1 x2 y2 x3 y3 Output of sfe NoEvent Event e1 NoEvent Input of gen sf3 e1 x2 x3 Output of gen sf3 e1 sf3 e1 sf3 e1 Input x1 x2 x3 Output y1 sf3 e1 sf3 e2 where sf1 x1 x2 x3 y1 y2 y3 sf2 x2 x3 y2 y3 sf3 x3 y3",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "kswitch",
          "normalized": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "package": "Moe",
          "signature": "SF a b-\u003eSF(a,b)(Event c)-\u003e(SF a b-\u003ec-\u003eSF a b)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:kswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the element (x_n) the output [y1, y2, ...] of sf.\n\u003c/p\u003e\u003cp\u003eTime interval is fixed to (dt).\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "nth",
          "package": "Moe",
          "signature": "Int -\u003e DTime -\u003e SF () a -\u003e a",
          "source": "src/FRP-Moe-Core.html#nth",
          "type": "function"
        },
        "index": {
          "description": "Get the element the output y1 y2 of sf Time interval is fixed to dt",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "nth",
          "normalized": "Int-\u003eDTime-\u003eSF()a-\u003ea",
          "package": "Moe",
          "signature": "Int-\u003eDTime-\u003eSF()a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:nth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "pswitch",
          "package": "Moe",
          "signature": "(forall sf.  a -\u003e col sf -\u003e col (b, sf)) -\u003e col (SF b c) -\u003e SF (a, col c) (Event d) -\u003e (col (SF b c) -\u003e d -\u003e SF a (col c)) -\u003e SF a (col c)",
          "source": "src/FRP-Moe-Core.html#pswitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "pswitch",
          "normalized": "(a b c-\u003ed e-\u003ed(f,e))-\u003ed(SF f g)-\u003eSF(c,d g)(Event h)-\u003e(d(SF f g)-\u003eh-\u003eSF c(d g))-\u003eSF c(d g)",
          "package": "Moe",
          "signature": "(forall sf. a-\u003ecol sf-\u003ecol(b,sf))-\u003ecol(SF b c)-\u003eSF(a,col c)(Event d)-\u003e(col(SF b c)-\u003ed-\u003eSF a(col c))-\u003eSF a(col c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:pswitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe.Core",
          "name": "runSF",
          "package": "Moe",
          "signature": "DTime -\u003e a -\u003e (b, SF a b)",
          "source": "src/FRP-Moe-Core.html#SF",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "runSF",
          "normalized": "DTime-\u003ea-\u003e(b,SF a b)",
          "package": "Moe",
          "partial": "SF",
          "signature": "DTime-\u003ea-\u003e(b,SF a b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:runSF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput: [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput: [f x1, f x2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfArr",
          "package": "Moe",
          "signature": "(a -\u003e b) -\u003e SF a b",
          "source": "src/FRP-Moe-Core.html#sfArr",
          "type": "function"
        },
        "index": {
          "description": "Input x1 x2 Output x1 x2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfArr",
          "normalized": "(a-\u003eb)-\u003eSF a b",
          "package": "Moe",
          "partial": "Arr",
          "signature": "(a-\u003eb)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfArr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf1:  [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf1: [z1, z2, ...]\n\u003c/p\u003e\u003cp\u003eInput of sf2:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf2: [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eInput:         [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput:        [z1, z2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfComp",
          "package": "Moe",
          "signature": "SF b c -\u003e SF a b -\u003e SF a c",
          "source": "src/FRP-Moe-Core.html#sfComp",
          "type": "function"
        },
        "index": {
          "description": "Input of sf1 y1 y2 Output of sf1 z1 z2 Input of sf2 x1 x2 Output of sf2 y1 y2 Input x1 x2 Output z1 z2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfComp",
          "normalized": "SF a b-\u003eSF c a-\u003eSF c b",
          "package": "Moe",
          "partial": "Comp",
          "signature": "SF b c-\u003eSF a b-\u003eSF a c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfComp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [x0, x1, x2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfDelay",
          "package": "Moe",
          "signature": "a -\u003e SF a a",
          "source": "src/FRP-Moe-Core.html#sfDelay",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf x0 x1 x2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfDelay",
          "normalized": "a-\u003eSF a a",
          "package": "Moe",
          "partial": "Delay",
          "signature": "a-\u003eSF a a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfDelay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eInput:        [(x1, z1), (x2, z2), ...]\n\u003c/p\u003e\u003cp\u003eOutput:       [(y1, z1), (y2, z2), ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfFirst",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (a, c) (b, c)",
          "source": "src/FRP-Moe-Core.html#sfFirst",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf y1 y2 Input x1 z1 x2 z2 Output y1 z1 y2 z2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfFirst",
          "normalized": "SF a b-\u003eSF(a,c)(b,c)",
          "package": "Moe",
          "partial": "First",
          "signature": "SF a b-\u003eSF(a,c)(b,c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput: [x1, x2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfId",
          "package": "Moe",
          "signature": "SF a a",
          "source": "src/FRP-Moe-Core.html#sfId",
          "type": "function"
        },
        "index": {
          "description": "Input x1 x2 Output x1 x2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfId",
          "package": "Moe",
          "partial": "Id",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eInput:        [Left x1, Right z1, Left x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput:       [Left y1, Right z1, Left y2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfLeft",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (Either a c) (Either b c)",
          "source": "src/FRP-Moe-Core.html#sfLeft",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf y1 y2 Input Left x1 Right z1 Left x2 Output Left y1 Right z1 Left y2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfLeft",
          "normalized": "SF a b-\u003eSF(Either a c)(Either b c)",
          "package": "Moe",
          "partial": "Left",
          "signature": "SF a b-\u003eSF(Either a c)(Either b c)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a signal function that:\n\u003c/p\u003e\u003cp\u003eInput:        [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput:       [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003ewhenever the following property holds for sf:\n\u003c/p\u003e\u003cp\u003eInput of sf:  [(x1, z1), (x2, z2), ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [(y1, z1), (y2, z2), ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfLoop",
          "package": "Moe",
          "signature": "SF (a, c) (b, c) -\u003e SF a b",
          "source": "src/FRP-Moe-Core.html#sfLoop",
          "type": "function"
        },
        "index": {
          "description": "Returns signal function that Input x1 x2 Output y1 y2 whenever the following property holds for sf Input of sf x1 z1 x2 z2 Output of sf y1 z1 y2 z2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfLoop",
          "normalized": "SF(a,b)(c,b)-\u003eSF a c",
          "package": "Moe",
          "partial": "Loop",
          "signature": "SF(a,c)(b,c)-\u003eSF a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eInput:        [Right x1, Left z1, Right x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput:       [Right y1, Left z2, Right y2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfRight",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (Either c a) (Either c b)",
          "source": "src/FRP-Moe-Core.html#sfRight",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf y1 y2 Input Right x1 Left z1 Right x2 Output Right y1 Left z2 Right y2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfRight",
          "normalized": "SF a b-\u003eSF(Either c a)(Either c b)",
          "package": "Moe",
          "partial": "Right",
          "signature": "SF a b-\u003eSF(Either c a)(Either c b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:  [x1, x2, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf: [y1, y2, ...]\n\u003c/p\u003e\u003cp\u003eInput:        [(z1, x1), (z2, x2), ...]\n\u003c/p\u003e\u003cp\u003eOutput:       [(z1, y1), (z2, y2), ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "sfSecond",
          "package": "Moe",
          "signature": "SF a b -\u003e SF (c, a) (c, b)",
          "source": "src/FRP-Moe-Core.html#sfSecond",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 Output of sf y1 y2 Input z1 x1 z2 x2 Output z1 y1 z2 y2",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "sfSecond",
          "normalized": "SF a b-\u003eSF(c,a)(c,b)",
          "package": "Moe",
          "partial": "Second",
          "signature": "SF a b-\u003eSF(c,a)(c,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:sfSecond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput of sf:       [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of sf:      [(y1, NoEvent), (y2, Event e1), (y3, NoEvent), ...]\n\u003c/p\u003e\u003cp\u003eInput of (gen e):  [x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput of (gen e): [y(e1)1, y(e1)2, ...]\n\u003c/p\u003e\u003cp\u003eInput:             [x1, x2, x3, ...]\n\u003c/p\u003e\u003cp\u003eOutput:            [y1, y(e1)1, y(e1)2, ...]\n\u003c/p\u003e",
          "module": "FRP.Moe.Core",
          "name": "switch",
          "package": "Moe",
          "signature": "SF b (c, Event d) -\u003e (d -\u003e SF b c) -\u003e SF b c",
          "source": "src/FRP-Moe-Core.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Input of sf x1 x2 x3 Output of sf y1 NoEvent y2 Event e1 y3 NoEvent Input of gen x2 x3 Output of gen e1 e1 Input x1 x2 x3 Output y1 e1 e1",
          "hierarchy": "FRP Moe Core",
          "module": "FRP.Moe.Core",
          "name": "switch",
          "normalized": "SF a(b,Event c)-\u003e(c-\u003eSF a b)-\u003eSF a b",
          "package": "Moe",
          "signature": "SF b(c,Event d)-\u003e(d-\u003eSF b c)-\u003eSF b c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe-Core.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.Moe",
          "name": "Moe",
          "package": "Moe",
          "source": "src/FRP-Moe.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP Moe",
          "module": "FRP.Moe",
          "name": "Moe",
          "package": "Moe",
          "partial": "Moe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-Moe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "MoeGLUT",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "MoeGLUT",
          "package": "Moe",
          "partial": "Moe GLUT",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "DisplaySetup",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "data"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "DisplaySetup",
          "package": "Moe",
          "partial": "Display Setup",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#t:DisplaySetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "Handle",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html#Handle",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "Handle",
          "package": "Moe",
          "partial": "Handle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#t:Handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "Input",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html#Input",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "Input",
          "package": "Moe",
          "partial": "Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "Prog",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html#Prog",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "Prog",
          "package": "Moe",
          "partial": "Prog",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#t:Prog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "Time",
          "package": "Moe",
          "source": "src/FRP-MoeGLUT.html#Time",
          "type": "type"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "Time",
          "package": "Moe",
          "partial": "Time",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#t:Time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "DisplaySetup",
          "package": "Moe",
          "signature": "DisplaySetup",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "DisplaySetup",
          "package": "Moe",
          "partial": "Display Setup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:DisplaySetup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "defaultReshape",
          "package": "Moe",
          "signature": "ReshapeCallback",
          "source": "src/FRP-MoeGLUT.html#defaultReshape",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "defaultReshape",
          "package": "Moe",
          "partial": "Reshape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:defaultReshape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayColor",
          "package": "Moe",
          "signature": "Color4 GLclampf",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayColor",
          "package": "Moe",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayInit",
          "package": "Moe",
          "signature": "(String, [String]) -\u003e IO ()",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayInit",
          "normalized": "(String,[String])-\u003eIO()",
          "package": "Moe",
          "partial": "Init",
          "signature": "(String,[String])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayMode",
          "package": "Moe",
          "signature": "[DisplayMode]",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayMode",
          "normalized": "[DisplayMode]",
          "package": "Moe",
          "partial": "Mode",
          "signature": "[DisplayMode]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayPosition",
          "package": "Moe",
          "signature": "Position",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayPosition",
          "package": "Moe",
          "partial": "Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayReshape",
          "package": "Moe",
          "signature": "ReshapeCallback",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayReshape",
          "package": "Moe",
          "partial": "Reshape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayReshape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displaySize",
          "package": "Moe",
          "signature": "Size",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displaySize",
          "package": "Moe",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displaySize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "displayTitle",
          "package": "Moe",
          "signature": "String",
          "source": "src/FRP-MoeGLUT.html#DisplaySetup",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "displayTitle",
          "package": "Moe",
          "partial": "Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:displayTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "keyMouse",
          "package": "Moe",
          "signature": "Handle b -\u003e KeyboardMouseCallback",
          "source": "src/FRP-MoeGLUT.html#keyMouse",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "keyMouse",
          "normalized": "Handle a-\u003eKeyboardMouseCallback",
          "package": "Moe",
          "partial": "Mouse",
          "signature": "Handle b-\u003eKeyboardMouseCallback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:keyMouse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "startProg",
          "package": "Moe",
          "signature": "DisplaySetup -\u003e Int -\u003e Prog b -\u003e b -\u003e (b -\u003e IO ()) -\u003e IO ()",
          "source": "src/FRP-MoeGLUT.html#startProg",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "startProg",
          "normalized": "DisplaySetup-\u003eInt-\u003eProg a-\u003ea-\u003e(a-\u003eIO())-\u003eIO()",
          "package": "Moe",
          "partial": "Prog",
          "signature": "DisplaySetup-\u003eInt-\u003eProg b-\u003eb-\u003e(b-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:startProg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoeGLUT",
          "name": "timer",
          "package": "Moe",
          "signature": "Handle b -\u003e Int -\u003e (b -\u003e IO ()) -\u003e IdleCallback",
          "source": "src/FRP-MoeGLUT.html#timer",
          "type": "function"
        },
        "index": {
          "hierarchy": "FRP MoeGLUT",
          "module": "FRP.MoeGLUT",
          "name": "timer",
          "normalized": "Handle a-\u003eInt-\u003e(a-\u003eIO())-\u003eIdleCallback",
          "package": "Moe",
          "signature": "Handle b-\u003eInt-\u003e(b-\u003eIO())-\u003eIdleCallback",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoeGLUT.html#v:timer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "FRP.MoePure",
          "name": "MoePure",
          "package": "Moe",
          "source": "src/FRP-MoePure.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "FRP MoePure",
          "module": "FRP.MoePure",
          "name": "MoePure",
          "package": "Moe",
          "partial": "Moe Pure",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Moe/docs/FRP-MoePure.html#"
      }
    }
  ]
]