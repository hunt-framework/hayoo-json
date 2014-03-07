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
        "word": "hdph"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH.Conf",
          "name": "Conf",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Conf.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "Conf",
          "package": "hdph",
          "partial": "Conf",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eRTSConf\u003c/a\u003e\u003c/code\u003e is a record data type collecting a number of parameter\n governing the behaviour of the HdpH runtime system.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "RTSConf",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "data"
        },
        "index": {
          "description": "RTSConf is record data type collecting number of parameter governing the behaviour of the HdpH runtime system",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "RTSConf",
          "package": "hdph",
          "partial": "RTSConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#t:RTSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH.Conf",
          "name": "RTSConf",
          "package": "hdph",
          "signature": "RTSConf",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "RTSConf",
          "package": "hdph",
          "partial": "RTSConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:RTSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDebug level, a number defined in module\n \u003ca\u003eControl.Parallel.HdpH.Internal.Location\u003c/a\u003e.\n Default is 0 (corresponding to no debug output).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "debugLvl",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Debug level number defined in module Control.Parallel.HdpH.Internal.Location Default is corresponding to no debug output",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "debugLvl",
          "package": "hdph",
          "partial": "Lvl",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:debugLvl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault runtime system configuration parameters.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "defaultRTSConf",
          "package": "hdph",
          "signature": "RTSConf",
          "source": "src/Control-Parallel-HdpH-Conf.html#defaultRTSConf",
          "type": "function"
        },
        "index": {
          "description": "Default runtime system configuration parameters",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "defaultRTSConf",
          "package": "hdph",
          "partial": "RTSConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:defaultRTSConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow sparkpool watermark for fishing. RTS will send FISH message \n unless size of spark pool is greater than \u003ccode\u003e\u003ca\u003emaxFish\u003c/a\u003e\u003c/code\u003e (or unless \n a FISH is outstanding). Must be non-negative;\n should be \u003ccode\u003e\u003c\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminSched\u003c/a\u003e\u003c/code\u003e. Default is 1.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxFish",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Low sparkpool watermark for fishing RTS will send FISH message unless size of spark pool is greater than maxFish or unless FISH is outstanding Must be non-negative should be minSched Default is",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxFish",
          "package": "hdph",
          "partial": "Fish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:maxFish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter a failed FISH, maximal delay in microseconds before\n sending another FISH message; the actual delay is chosen randomly\n between \u003ccode\u003e\u003ca\u003eminFishDly\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxFishDly\u003c/a\u003e\u003c/code\u003e. Must be non-negative; should\n be \u003ccode\u003e\u003e=\u003c/code\u003e \u003ccode\u003e\u003ca\u003eminFishDly\u003c/a\u003e\u003c/code\u003e.\n Default is 1000000 (corresponding to 1 second).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxFishDly",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "After failed FISH maximal delay in microseconds before sending another FISH message the actual delay is chosen randomly between minFishDly and maxFishDly Must be non-negative should be minFishDly Default is corresponding to second",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxFishDly",
          "package": "hdph",
          "partial": "Fish Dly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:maxFishDly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of hops a FISH message may travel before being considered\n failed. Must be non-negative. Default is 7.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxHops",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Number of hops FISH message may travel before being considered failed Must be non-negative Default is",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "maxHops",
          "package": "hdph",
          "partial": "Hops",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:maxHops"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAfter a failed FISH, minimal delay in microseconds before\n sending another FISH message; the actual delay is chosen randomly\n between \u003ccode\u003e\u003ca\u003eminFishDly\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003emaxFishDly\u003c/a\u003e\u003c/code\u003e. Must be non-negative; should\n be \u003ccode\u003e\u003c=\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxFishDly\u003c/a\u003e\u003c/code\u003e.\n Default is 10000 (corresponding to 10 milliseconds).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "minFishDly",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "After failed FISH minimal delay in microseconds before sending another FISH message the actual delay is chosen randomly between minFishDly and maxFishDly Must be non-negative should be maxFishDly Default is corresponding to milliseconds",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "minFishDly",
          "package": "hdph",
          "partial": "Fish Dly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:minFishDly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLow sparkpool watermark for scheduling. RTS will respond to FISH \n messages by SCHEDULEing sparks unless size of spark pool is less\n than \u003ccode\u003e\u003ca\u003eminSched\u003c/a\u003e\u003c/code\u003e. Must be non-negative; should be \u003ccode\u003e\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003emaxFish\u003c/a\u003e\u003c/code\u003e.\n Default is 2.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "minSched",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Low sparkpool watermark for scheduling RTS will respond to FISH messages by SCHEDULEing sparks unless size of spark pool is less than minSched Must be non-negative should be maxFish Default is",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "minSched",
          "package": "hdph",
          "partial": "Sched",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:minSched"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNetwork interface, required to autodetect a node's\n IP address. The string must be one of the interface names \n returned by the POSIX command \u003ccode\u003eifconfig\u003c/code\u003e. \n Default is \u003ccode\u003eeth0\u003c/code\u003e (corresponding to the first Ethernet interface).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "networkInterface",
          "package": "hdph",
          "signature": "String",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Network interface required to autodetect node IP address The string must be one of the interface names returned by the POSIX command ifconfig Default is eth0 corresponding to the first Ethernet interface",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "networkInterface",
          "package": "hdph",
          "partial": "Interface",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:networkInterface"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of nodes constituting the distributed runtime system.\n Must be positive. Default is 1.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "numProcs",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Number of nodes constituting the distributed runtime system Must be positive Default is",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "numProcs",
          "package": "hdph",
          "partial": "Procs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:numProcs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNumber of concurrent schedulers per node. Must be positive and \n should be \u003ccode\u003e\u003c=\u003c/code\u003e to the number of HECs (as set by GHC RTS option \n \u003ccode\u003e-N\u003c/code\u003e). Default is 1.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "scheds",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Number of concurrent schedulers per node Must be positive and should be to the number of HECs as set by GHC RTS option Default is",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "scheds",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:scheds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterval in microseconds to wake up sleeping schedulers\n (which is necessary to recover from a race condition between\n concurrent schedulers). Must be positive. \n Default is 1000 (corresponding to 1 millisecond).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "wakeupDly",
          "package": "hdph",
          "signature": "Int",
          "source": "src/Control-Parallel-HdpH-Conf.html#RTSConf",
          "type": "function"
        },
        "index": {
          "description": "Interval in microseconds to wake up sleeping schedulers which is necessary to recover from race condition between concurrent schedulers Must be positive Default is corresponding to millisecond",
          "hierarchy": "Control Parallel HdpH Conf",
          "module": "Control.Parallel.HdpH.Conf",
          "name": "wakeupDly",
          "package": "hdph",
          "partial": "Dly",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Conf.html#v:wakeupDly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "Strategies",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Strategies.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "Strategies",
          "package": "hdph",
          "partial": "Strategies",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndexing class, recording which types support \u003ccode\u003e\u003ccode\u003e\u003ca\u003eforceCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e; see the\n tutorial in module \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e for a more thorough\n explanation.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "ForceCC",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Strategies.html#ForceCC",
          "type": "class"
        },
        "index": {
          "description": "Indexing class recording which types support forceCC see the tutorial in module Closure for more thorough explanation",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "ForceCC",
          "package": "hdph",
          "partial": "Force CC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#t:ForceCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProtoStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is almost a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n More precisely, a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProtoStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for type \u003ccode\u003ea\u003c/code\u003e is a \u003cem\u003edelayed\u003c/em\u003e (semantic)\n identity function in the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad, ie. it returns an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e (rather\n than a term) of type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "ProtoStrategy",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Strategies.html#ProtoStrategy",
          "type": "type"
        },
        "index": {
          "description": "ProtoStrategy is almost Strategy More precisely ProtoStrategy for type is delayed semantic identity function in the Par monad ie it returns an IVar rather than term of type",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "ProtoStrategy",
          "package": "hdph",
          "partial": "Proto Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#t:ProtoStrategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType synonym for declaring the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialisers required by\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eForceCC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e instances; see the tutorial in module\n \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e for a more thorough explanation.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "StaticForceCC",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Strategies.html#StaticForceCC",
          "type": "type"
        },
        "index": {
          "description": "Type synonym for declaring the Static deserialisers required by ForceCC instances see the tutorial in module Closure for more thorough explanation",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "StaticForceCC",
          "package": "hdph",
          "partial": "Static Force CC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#t:StaticForceCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ccode\u003e\u003ca\u003eStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e for type \u003ccode\u003ea\u003c/code\u003e is a (semantic) identity in the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad.\n For an elaboration of this concept (in the context of the \u003ccode\u003eEval\u003c/code\u003e monad)\n see the paper:\n   Marlow et al.\n   \u003cem\u003eSeq no more: Better Strategies for parallel Haskell.\u003c/em\u003e\n   Haskell 2010.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "Strategy",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH-Strategies.html#Strategy",
          "type": "type"
        },
        "index": {
          "description": "Strategy for type is semantic identity in the Par monad For an elaboration of this concept in the context of the Eval monad see the paper Marlow et al Seq no more Better Strategies for parallel Haskell Haskell",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "Strategy",
          "package": "hdph",
          "partial": "Strategy",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#t:Strategy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "declareStatic",
          "package": "hdph",
          "signature": "StaticDecl",
          "source": "src/Control-Parallel-HdpH-Strategies.html#declareStatic",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "declareStatic",
          "package": "hdph",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:declareStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSequential divide-and-conquer skeleton.\n \u003ccode\u003edidvideAndConquer trivial decompose combine f x\u003c/code\u003e repeatedly decomposes\n the problem \u003ccode\u003ex\u003c/code\u003e until trivial, applies \u003ccode\u003ef\u003c/code\u003e to the trivial sub-problems\n and combines the solutions.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "divideAndConquer",
          "package": "hdph",
          "signature": "(a -\u003e Bool) -\u003e (a -\u003e [a]) -\u003e (a -\u003e [b] -\u003e b) -\u003e (a -\u003e b) -\u003e a -\u003e b",
          "source": "src/Control-Parallel-HdpH-Strategies.html#divideAndConquer",
          "type": "function"
        },
        "index": {
          "description": "Sequential divide-and-conquer skeleton didvideAndConquer trivial decompose combine repeatedly decomposes the problem until trivial applies to the trivial sub-problems and combines the solutions",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "divideAndConquer",
          "normalized": "(a-\u003eBool)-\u003e(a-\u003e[a])-\u003e(a-\u003e[b]-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "package": "hdph",
          "partial": "And Conquer",
          "signature": "(a-\u003eBool)-\u003e(a-\u003e[a])-\u003e(a-\u003e[b]-\u003eb)-\u003e(a-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:divideAndConquer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eevalList\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to a list of Closures (wrapped in a\n Closure). Useful for building clustering strategies.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "evalClosureListClosure",
          "package": "hdph",
          "signature": "Strategy (Closure a) -\u003e Strategy (Closure [Closure a])",
          "source": "src/Control-Parallel-HdpH-Strategies.html#evalClosureListClosure",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of evalList to list of Closures wrapped in Closure Useful for building clustering strategies",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "evalClosureListClosure",
          "normalized": "Strategy(Closure a)-\u003eStrategy(Closure[Closure a])",
          "package": "hdph",
          "partial": "Closure List Closure",
          "signature": "Strategy(Closure a)-\u003eStrategy(Closure[Closure a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:evalClosureListClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list according to the given strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "evalList",
          "package": "hdph",
          "signature": "Strategy a -\u003e Strategy [a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#evalList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list according to the given strategy",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "evalList",
          "normalized": "Strategy a-\u003eStrategy[a]",
          "package": "hdph",
          "partial": "List",
          "signature": "Strategy a-\u003eStrategy[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:evalList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eforceC\u003c/code\u003e is the fully forcing \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e strategy, ie. it fully normalises\n the thunk inside an explicit \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n Importantly, \u003ccode\u003eforceC\u003c/code\u003e alters the serialisable \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e represention\n so that serialisation will not force the \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e again.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "forceC",
          "package": "hdph",
          "signature": "Strategy (Closure a)",
          "source": "src/Control-Parallel-HdpH-Strategies.html#forceC",
          "type": "function"
        },
        "index": {
          "description": "forceC is the fully forcing Closure strategy ie it fully normalises the thunk inside an explicit Closure Importantly forceC alters the serialisable Closure represention so that serialisation will not force the Closure again",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "forceC",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:forceC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eforceCC\u003c/code\u003e is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e wrapping the fully forcing Closure strategy\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eforceC\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e; see the tutorial in module \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e for\n details on the implementation of \u003ccode\u003eforceCC\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "forceCC",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a))",
          "source": "src/Control-Parallel-HdpH-Strategies.html#forceCC",
          "type": "function"
        },
        "index": {
          "description": "forceCC is Closure wrapping the fully forcing Closure strategy forceC see the tutorial in module Closure for details on the implementation of forceCC",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "forceCC",
          "package": "hdph",
          "partial": "CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:forceCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly method of class \u003ccode\u003eForceCC\u003c/code\u003e, recording the source location\n where an instance of \u003ccode\u003eForceCC\u003c/code\u003e is declared.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "locForceCC",
          "package": "hdph",
          "signature": "LocT (Strategy (Closure a))",
          "source": "src/Control-Parallel-HdpH-Strategies.html#locForceCC",
          "type": "method"
        },
        "index": {
          "description": "Only method of class ForceCC recording the source location where an instance of ForceCC is declared",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "locForceCC",
          "package": "hdph",
          "partial": "Force CC",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:locForceCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list of Closures in parallel according to\n the given strategy (wrapped in a Closure). Work is distributed by\n lazy work stealing.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureList",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a)) -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parClosureList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list of Closures in parallel according to the given strategy wrapped in Closure Work is distributed by lazy work stealing",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureList",
          "normalized": "Closure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Closure List",
          "signature": "Closure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parClosureList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparClosureListChunked n\u003c/code\u003e evaluates chunks of size \u003ccode\u003en\u003c/code\u003e of a list of\n Closures in parallel according to the given strategy (wrapped in a Closure).\n Chunks are distributed by lazy work stealing.\n For instance, dividing the list \u003ccode\u003e[c1,c2,c3,c4,c5]\u003c/code\u003e into chunks of size 3\n results in the following list of chunks \u003ccode\u003e[[c1,c2,c3], [c4,c5]]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListChunked",
          "package": "hdph",
          "signature": "Int -\u003e Closure (Strategy (Closure a)) -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parClosureListChunked",
          "type": "function"
        },
        "index": {
          "description": "parClosureListChunked evaluates chunks of size of list of Closures in parallel according to the given strategy wrapped in Closure Chunks are distributed by lazy work stealing For instance dividing the list c1 c2 c3 c4 c5 into chunks of size results in the following list of chunks c1 c2 c3 c4 c5",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListChunked",
          "normalized": "Int-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Closure List Chunked",
          "signature": "Int-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parClosureListChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparClosureListClusterBy cluster uncluster\u003c/code\u003e is a generic parallel\n clustering strategy combinator for lists of Closures, evaluating\n clusters generated by \u003ccode\u003ecluster\u003c/code\u003e in parallel.\n Clusters are distributed by lazy work stealing.\n The function \u003ccode\u003euncluster\u003c/code\u003e must be a \u003cem\u003eleft inverse\u003c/em\u003e of \u003ccode\u003ecluster\u003c/code\u003e,\n that is \u003ccode\u003euncluster . cluster\u003c/code\u003e must be the identity.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListClusterBy",
          "package": "hdph",
          "signature": "([Closure a] -\u003e [[Closure a]]) -\u003e ([[Closure a]] -\u003e [Closure a]) -\u003e Closure (Strategy (Closure a)) -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parClosureListClusterBy",
          "type": "function"
        },
        "index": {
          "description": "parClosureListClusterBy cluster uncluster is generic parallel clustering strategy combinator for lists of Closures evaluating clusters generated by cluster in parallel Clusters are distributed by lazy work stealing The function uncluster must be left inverse of cluster that is uncluster cluster must be the identity",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListClusterBy",
          "normalized": "([Closure a]-\u003e[[Closure a]])-\u003e([[Closure a]]-\u003e[Closure a])-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Closure List Cluster By",
          "signature": "([Closure a]-\u003e[[Closure a]])-\u003e([[Closure a]]-\u003e[Closure a])-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parClosureListClusterBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eparClosureListSliced n\u003c/code\u003e evaluates \u003ccode\u003en\u003c/code\u003e slices of a list of Closures in\n parallel according to the given strategy (wrapped in a Closure).\n Slices are distributed by lazy work stealing.\n For instance, dividing the list \u003ccode\u003e[c1,c2,c3,c4,c5]\u003c/code\u003e into 3 slices\n results in the following list of slices \u003ccode\u003e[[c1,c4], [c2,c5], [c3]]\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListSliced",
          "package": "hdph",
          "signature": "Int -\u003e Closure (Strategy (Closure a)) -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parClosureListSliced",
          "type": "function"
        },
        "index": {
          "description": "parClosureListSliced evaluates slices of list of Closures in parallel according to the given strategy wrapped in Closure Slices are distributed by lazy work stealing For instance dividing the list c1 c2 c3 c4 c5 into slices results in the following list of slices c1 c4 c2 c5 c3",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureListSliced",
          "normalized": "Int-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Closure List Sliced",
          "signature": "Int-\u003eClosure(Strategy(Closure a))-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parClosureListSliced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm for Closures, evaluates tasks (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e-monadic function\n Closure applied to a Closure of the input list) in parallel.\n Note the absence of a strategy argument; strategies aren't needed because\n they can be baked into the monadic function Closure.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureMapM",
          "package": "hdph",
          "signature": "Closure (Closure a -\u003e Par (Closure b)) -\u003e [Closure a] -\u003e Par [Closure b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parClosureMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm for Closures evaluates tasks Par monadic function Closure applied to Closure of the input list in parallel Note the absence of strategy argument strategies aren needed because they can be baked into the monadic function Closure",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parClosureMapM",
          "normalized": "Closure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "package": "hdph",
          "partial": "Closure Map",
          "signature": "Closure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parClosureMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel divide-and-conquer skeleton with lazy work distribution.\n \u003ccode\u003eparDivideAndConquer trivial_clo decompose_clo combine_clo f_clo x\u003c/code\u003e follows\n the divide-and-conquer pattern of \u003ccode\u003e\u003ccode\u003e\u003ca\u003edivideAndConquer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e except that, for\n technical reasons, all arguments are Closures.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parDivideAndConquer",
          "package": "hdph",
          "signature": "Closure (Closure a -\u003e Bool) -\u003e Closure (Closure a -\u003e [Closure a]) -\u003e Closure (Closure a -\u003e [Closure b] -\u003e Closure b) -\u003e Closure (Closure a -\u003e Par (Closure b)) -\u003e Closure a -\u003e Par (Closure b)",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parDivideAndConquer",
          "type": "function"
        },
        "index": {
          "description": "Parallel divide-and-conquer skeleton with lazy work distribution parDivideAndConquer trivial clo decompose clo combine clo clo follows the divide-and-conquer pattern of divideAndConquer except that for technical reasons all arguments are Closures",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parDivideAndConquer",
          "normalized": "Closure(Closure a-\u003eBool)-\u003eClosure(Closure a-\u003e[Closure a])-\u003eClosure(Closure a-\u003e[Closure b]-\u003eClosure b)-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003eClosure a-\u003ePar(Closure b)",
          "package": "hdph",
          "partial": "Divide And Conquer",
          "signature": "Closure(Closure a-\u003eBool)-\u003eClosure(Closure a-\u003e[Closure a])-\u003eClosure(Closure a-\u003e[Closure b]-\u003eClosure b)-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003eClosure a-\u003ePar(Closure b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parDivideAndConquer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask farm, evaluates tasks (function Closure applied to an element\n of the input list) in parallel and according to the given strategy (wrapped\n in a Closure).\n Note that \u003ccode\u003eparMap\u003c/code\u003e should only be used if the terms in the input list are\n already in normal form, as they may be forced sequentially otherwise.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMap",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure b)) -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMap",
          "type": "function"
        },
        "index": {
          "description": "Task farm evaluates tasks function Closure applied to an element of the input list in parallel and according to the given strategy wrapped in Closure Note that parMap should only be used if the terms in the input list are already in normal form as they may be forced sequentially otherwise",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMap",
          "normalized": "Closure(Strategy(Closure a))-\u003eClosure(b-\u003ea)-\u003e[b]-\u003ePar[a]",
          "package": "hdph",
          "partial": "Map",
          "signature": "Closure(Strategy(Closure b))-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChunking task farm, divides the input list into chunks of given size\n and evaluates tasks (function Closure mapped on a chunk of the input list) \n in parallel and according to the given strategy (wrapped in a Closure).\n \u003ccode\u003eparMapChunked\u003c/code\u003e should only be used if the terms in the input list\n are already in normal form.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapChunked",
          "package": "hdph",
          "signature": "Int -\u003e Closure (Strategy (Closure b)) -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapChunked",
          "type": "function"
        },
        "index": {
          "description": "Chunking task farm divides the input list into chunks of given size and evaluates tasks function Closure mapped on chunk of the input list in parallel and according to the given strategy wrapped in Closure parMapChunked should only be used if the terms in the input list are already in normal form",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapChunked",
          "normalized": "Int-\u003eClosure(Strategy(Closure a))-\u003eClosure(b-\u003ea)-\u003e[b]-\u003ePar[a]",
          "package": "hdph",
          "partial": "Map Chunked",
          "signature": "Int-\u003eClosure(Strategy(Closure b))-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapChunked"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapChunked\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the fully forcing Closure strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapChunkedNF",
          "package": "hdph",
          "signature": "Int -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapChunkedNF",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of parMapChunked to the fully forcing Closure strategy",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapChunkedNF",
          "normalized": "Int-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map Chunked NF",
          "signature": "Int-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapChunkedNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm, evaluates tasks (\u003ccode\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e-monadic function Closure\n applied to an element of the input list) in parallel.\n Note the absence of a strategy argument; strategies aren't needed because\n they can be baked into the monadic function Closure.\n \u003ccode\u003eparMap\u003c/code\u003e should only be used if the terms in the input list are already\n in normal form, as they may be forced sequentially otherwise.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapM",
          "package": "hdph",
          "signature": "Closure (a -\u003e Par (Closure b)) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm evaluates tasks Par monadic function Closure applied to an element of the input list in parallel Note the absence of strategy argument strategies aren needed because they can be baked into the monadic function Closure parMap should only be used if the terms in the input list are already in normal form as they may be forced sequentially otherwise",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapM",
          "normalized": "Closure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map",
          "signature": "Closure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e, not returning any result.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapM_",
          "package": "hdph",
          "signature": "Closure (a -\u003e Par b) -\u003e [a] -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapM_",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of parMapM not returning any result",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapM_",
          "normalized": "Closure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "package": "hdph",
          "partial": "Map",
          "signature": "Closure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the fully forcing Closure strategy.\n That is, \u003ccode\u003eparMapNF\u003c/code\u003e forces every element of the output list to normalform.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapNF",
          "package": "hdph",
          "signature": "Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapNF",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of parMap to the fully forcing Closure strategy That is parMapNF forces every element of the output list to normalform",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapNF",
          "normalized": "Closure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map NF",
          "signature": "Closure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSlicing task farm, divides the input list into given number of slices\n and evaluates tasks (function Closure mapped on a slice of the input list) \n in parallel and according to the given strategy (wrapped in a Closure).\n \u003ccode\u003eparMapSliced\u003c/code\u003e should only be used if the terms in the input list\n are already in normal form.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapSliced",
          "package": "hdph",
          "signature": "Int -\u003e Closure (Strategy (Closure b)) -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapSliced",
          "type": "function"
        },
        "index": {
          "description": "Slicing task farm divides the input list into given number of slices and evaluates tasks function Closure mapped on slice of the input list in parallel and according to the given strategy wrapped in Closure parMapSliced should only be used if the terms in the input list are already in normal form",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapSliced",
          "normalized": "Int-\u003eClosure(Strategy(Closure a))-\u003eClosure(b-\u003ea)-\u003e[b]-\u003ePar[a]",
          "package": "hdph",
          "partial": "Map Sliced",
          "signature": "Int-\u003eClosure(Strategy(Closure b))-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapSliced"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpecialisation of \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapSliced\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e to the fully forcing Closure strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapSlicedNF",
          "package": "hdph",
          "signature": "Int -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#parMapSlicedNF",
          "type": "function"
        },
        "index": {
          "description": "Specialisation of parMapSliced to the fully forcing Closure strategy",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "parMapSlicedNF",
          "normalized": "Int-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map Sliced NF",
          "signature": "Int-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:parMapSlicedNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003epushClosure clo_strat n\u003c/code\u003e is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProtoStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e that pushes a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n to be executed in a new thread on node \u003ccode\u003en\u003c/code\u003e;\n evaluation of the pushed \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is governed by the strategy\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunClosure\u003c/a\u003e\u003c/code\u003e clo_strat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosure",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a)) -\u003e NodeId -\u003e ProtoStrategy (Closure a)",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushClosure",
          "type": "function"
        },
        "index": {
          "description": "pushClosure clo strat is ProtoStrategy that pushes Closure to be executed in new thread on node evaluation of the pushed Closure is governed by the strategy unClosure clo strat",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosure",
          "normalized": "Closure(Strategy(Closure a))-\u003eNodeId-\u003eProtoStrategy(Closure a)",
          "package": "hdph",
          "partial": "Closure",
          "signature": "Closure(Strategy(Closure a))-\u003eNodeId-\u003eProtoStrategy(Closure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list of Closures in parallel according to\n the given strategy (wrapped in a Closure). Work is pushed round-robin\n to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosureList",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a)) -\u003e [NodeId] -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushClosureList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list of Closures in parallel according to the given strategy wrapped in Closure Work is pushed round-robin to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosureList",
          "normalized": "Closure(Strategy(Closure a))-\u003e[NodeId]-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Closure List",
          "signature": "Closure(Strategy(Closure a))-\u003e[NodeId]-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushClosureList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm for Closures like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparClosureMapM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but pushes tasks\n in a round-robin fashion to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosureMapM",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (Closure a -\u003e Par (Closure b)) -\u003e [Closure a] -\u003e Par [Closure b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushClosureMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm for Closures like parClosureMapM but pushes tasks in round-robin fashion to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushClosureMapM",
          "normalized": "[NodeId]-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "package": "hdph",
          "partial": "Closure Map",
          "signature": "[NodeId]-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushClosureMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParallel divide-and-conquer skeleton with eager random work distribution,\n pushing work to the given list of nodes.\n \u003ccode\u003epushDivideAndConquer nodes trivial_clo decompose_clo combine_clo f_clo x\u003c/code\u003e\n follows the divide-and-conquer pattern of \u003ccode\u003e\u003ccode\u003e\u003ca\u003edivideAndConquer\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e except that,\n for technical reasons, all arguments are Closures.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushDivideAndConquer",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (Closure a -\u003e Bool) -\u003e Closure (Closure a -\u003e [Closure a]) -\u003e Closure (Closure a -\u003e [Closure b] -\u003e Closure b) -\u003e Closure (Closure a -\u003e Par (Closure b)) -\u003e Closure a -\u003e Par (Closure b)",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushDivideAndConquer",
          "type": "function"
        },
        "index": {
          "description": "Parallel divide-and-conquer skeleton with eager random work distribution pushing work to the given list of nodes pushDivideAndConquer nodes trivial clo decompose clo combine clo clo follows the divide-and-conquer pattern of divideAndConquer except that for technical reasons all arguments are Closures",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushDivideAndConquer",
          "normalized": "[NodeId]-\u003eClosure(Closure a-\u003eBool)-\u003eClosure(Closure a-\u003e[Closure a])-\u003eClosure(Closure a-\u003e[Closure b]-\u003eClosure b)-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003eClosure a-\u003ePar(Closure b)",
          "package": "hdph",
          "partial": "Divide And Conquer",
          "signature": "[NodeId]-\u003eClosure(Closure a-\u003eBool)-\u003eClosure(Closure a-\u003e[Closure a])-\u003eClosure(Closure a-\u003e[Closure b]-\u003eClosure b)-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003eClosure a-\u003ePar(Closure b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushDivideAndConquer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMap\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but pushes tasks in a round-robin fashion\n to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMap",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure b)) -\u003e [NodeId] -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushMap",
          "type": "function"
        },
        "index": {
          "description": "Task farm like parMap but pushes tasks in round-robin fashion to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMap",
          "normalized": "Closure(Strategy(Closure a))-\u003e[NodeId]-\u003eClosure(b-\u003ea)-\u003e[b]-\u003ePar[a]",
          "package": "hdph",
          "partial": "Map",
          "signature": "Closure(Strategy(Closure b))-\u003e[NodeId]-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but pushes tasks\n in a round-robin fashion to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapM",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (a -\u003e Par (Closure b)) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm like parMapM but pushes tasks in round-robin fashion to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapM",
          "normalized": "[NodeId]-\u003eClosure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map",
          "signature": "[NodeId]-\u003eClosure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapM_\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but pushes tasks\n in a round-robin fashion to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapM_",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (a -\u003e Par b) -\u003e [a] -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushMapM_",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm like parMapM but pushes tasks in round-robin fashion to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapM_",
          "normalized": "[NodeId]-\u003eClosure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "package": "hdph",
          "partial": "Map",
          "signature": "[NodeId]-\u003eClosure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTask farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapNF\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e but pushes tasks in a round-robin fashion\n to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapNF",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (a -\u003e b) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushMapNF",
          "type": "function"
        },
        "index": {
          "description": "Task farm like parMapNF but pushes tasks in round-robin fashion to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushMapNF",
          "normalized": "[NodeId]-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Map NF",
          "signature": "[NodeId]-\u003eClosure(a-\u003eb)-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushMapNF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate each element of a list of Closures in parallel according to\n the given strategy (wrapped in a Closure). Work is pushed randomly\n to the given list of nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandClosureList",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a)) -\u003e [NodeId] -\u003e Strategy [Closure a]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushRandClosureList",
          "type": "function"
        },
        "index": {
          "description": "Evaluate each element of list of Closures in parallel according to the given strategy wrapped in Closure Work is pushed randomly to the given list of nodes",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandClosureList",
          "normalized": "Closure(Strategy(Closure a))-\u003e[NodeId]-\u003eStrategy[Closure a]",
          "package": "hdph",
          "partial": "Rand Closure List",
          "signature": "Closure(Strategy(Closure a))-\u003e[NodeId]-\u003eStrategy[Closure a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushRandClosureList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm for Closures like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparClosureMapM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n but pushes to random nodes on the given list.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandClosureMapM",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (Closure a -\u003e Par (Closure b)) -\u003e [Closure a] -\u003e Par [Closure b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushRandClosureMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm for Closures like parClosureMapM but pushes to random nodes on the given list",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandClosureMapM",
          "normalized": "[NodeId]-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "package": "hdph",
          "partial": "Rand Closure Map",
          "signature": "[NodeId]-\u003eClosure(Closure a-\u003ePar(Closure b))-\u003e[Closure a]-\u003ePar[Closure b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushRandClosureMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapM\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n but pushes to random nodes on the given list.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandMapM",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (a -\u003e Par (Closure b)) -\u003e [a] -\u003e Par [b]",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushRandMapM",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm like parMapM but pushes to random nodes on the given list",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandMapM",
          "normalized": "[NodeId]-\u003eClosure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "package": "hdph",
          "partial": "Rand Map",
          "signature": "[NodeId]-\u003eClosure(a-\u003ePar(Closure b))-\u003e[a]-\u003ePar[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushRandMapM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic task farm like \u003ccode\u003e\u003ccode\u003e\u003ca\u003eparMapM_\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e\n but pushes to random nodes on the given list.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandMapM_",
          "package": "hdph",
          "signature": "[NodeId] -\u003e Closure (a -\u003e Par b) -\u003e [a] -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH-Strategies.html#pushRandMapM_",
          "type": "function"
        },
        "index": {
          "description": "Monadic task farm like parMapM but pushes to random nodes on the given list",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "pushRandMapM_",
          "normalized": "[NodeId]-\u003eClosure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "package": "hdph",
          "partial": "Rand Map",
          "signature": "[NodeId]-\u003eClosure(a-\u003ePar b)-\u003e[a]-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:pushRandMapM_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eDo Nothing\u003c/em\u003e strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "r0",
          "package": "hdph",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-HdpH-Strategies.html#r0",
          "type": "function"
        },
        "index": {
          "description": "Do Nothing strategy",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "r0",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:r0"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eEvaluate fully\u003c/em\u003e strategy.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "rdeepseq",
          "package": "hdph",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-HdpH-Strategies.html#rdeepseq",
          "type": "function"
        },
        "index": {
          "description": "Evaluate fully strategy",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "rdeepseq",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:rdeepseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003cem\u003eEvaluate head-strict\u003c/em\u003e strategy; probably not very useful in HdpH.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "rseq",
          "package": "hdph",
          "signature": "Strategy a",
          "source": "src/Control-Parallel-HdpH-Strategies.html#rseq",
          "type": "function"
        },
        "index": {
          "description": "Evaluate head-strict strategy probably not very useful in HdpH",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "rseq",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:rseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003esparkClosure clo_strat\u003c/code\u003e is a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eProtoStrategy\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e that sparks a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e;\n evaluation of the sparked \u003ccode\u003e\u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e is governed by the strategy\n \u003ccode\u003e\u003ccode\u003e\u003ca\u003eunClosure\u003c/a\u003e\u003c/code\u003e clo_strat\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "sparkClosure",
          "package": "hdph",
          "signature": "Closure (Strategy (Closure a)) -\u003e ProtoStrategy (Closure a)",
          "source": "src/Control-Parallel-HdpH-Strategies.html#sparkClosure",
          "type": "function"
        },
        "index": {
          "description": "sparkClosure clo strat is ProtoStrategy that sparks Closure evaluation of the sparked Closure is governed by the strategy unClosure clo strat",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "sparkClosure",
          "normalized": "Closure(Strategy(Closure a))-\u003eProtoStrategy(Closure a)",
          "package": "hdph",
          "partial": "Closure",
          "signature": "Closure(Strategy(Closure a))-\u003eProtoStrategy(Closure a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:sparkClosure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eStatic\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e deserialiser required by a \u003ccode\u003e\u003ca\u003eForceCC\u003c/a\u003e\u003c/code\u003e instance; see the tutorial\n in module \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e for a more thorough explanation.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "staticForceCC",
          "package": "hdph",
          "signature": "StaticForceCC a",
          "source": "src/Control-Parallel-HdpH-Strategies.html#staticForceCC",
          "type": "function"
        },
        "index": {
          "description": "Static deserialiser required by ForceCC instance see the tutorial in module Closure for more thorough explanation",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "staticForceCC",
          "package": "hdph",
          "partial": "Force CC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:staticForceCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStrategy application is actual application (in the \u003ccode\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e monad).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "using",
          "package": "hdph",
          "signature": "a -\u003e Strategy a -\u003e Par a",
          "source": "src/Control-Parallel-HdpH-Strategies.html#using",
          "type": "function"
        },
        "index": {
          "description": "Strategy application is actual application in the Par monad",
          "hierarchy": "Control Parallel HdpH Strategies",
          "module": "Control.Parallel.HdpH.Strategies",
          "name": "using",
          "normalized": "a-\u003eStrategy a-\u003ePar a",
          "package": "hdph",
          "signature": "a-\u003eStrategy a-\u003ePar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH-Strategies.html#v:using"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Parallel.HdpH",
          "name": "HdpH",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "HdpH",
          "package": "hdph",
          "partial": "Hdp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA GIVar (short for \u003cem\u003eglobal\u003c/em\u003e IVar) is a globally unique handle referring\n to an IVar.\n Unlike IVars, GIVars can be compared and serialised.\n They can also be written to remotely by the operation \u003ccode\u003e\u003ca\u003erput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "GIVar",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH.html#GIVar",
          "type": "data"
        },
        "index": {
          "description": "GIVar short for global IVar is globally unique handle referring to an IVar Unlike IVars GIVars can be compared and serialised They can also be written to remotely by the operation rput",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "GIVar",
          "package": "hdph",
          "partial": "GIVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#t:GIVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn IVar is a write-once one place buffer.\n IVars are abstract; they can be accessed and manipulated only by\n the operations \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003etryGet\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eprobe\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eglob\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "IVar",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH.html#IVar",
          "type": "data"
        },
        "index": {
          "description": "An IVar is write-once one place buffer IVars are abstract they can be accessed and manipulated only by the operations put get tryGet probe and glob",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "IVar",
          "package": "hdph",
          "partial": "IVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#t:IVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e identifies a node (that is, an OS process running HdpH).\n A \u003ccode\u003e\u003ca\u003eNodeId\u003c/a\u003e\u003c/code\u003e should be thought of as an abstract identifier which\n instantiates the classes \u003ccode\u003e\u003ca\u003eEq\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eOrd\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eSerialize\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "NodeId",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH.html#NodeId",
          "type": "data"
        },
        "index": {
          "description": "NodeId identifies node that is an OS process running HdpH NodeId should be thought of as an abstract identifier which instantiates the classes Eq Ord Show NFData and Serialize",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "NodeId",
          "package": "hdph",
          "partial": "Node Id",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#t:NodeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e is type constructor of kind \u003ccode\u003e*-\u003e*\u003c/code\u003e and an instance of classes\n \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e.\n \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e is defined in terms of a parametric continuation monad \u003ccode\u003eParM\u003c/code\u003e\n by plugging in \u003ccode\u003eRTS\u003c/code\u003e, the state monad of the runtime system.\n Since neither \u003ccode\u003eParM\u003c/code\u003e nor \u003ccode\u003eRTS\u003c/code\u003e are exported, \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e can be considered\n abstract.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "Par",
          "package": "hdph",
          "source": "src/Control-Parallel-HdpH.html#Par",
          "type": "type"
        },
        "index": {
          "description": "Par is type constructor of kind and an instance of classes Functor and Monad Par is defined in terms of parametric continuation monad ParM by plugging in RTS the state monad of the runtime system Since neither ParM nor RTS are exported Par can be considered abstract",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "Par",
          "package": "hdph",
          "partial": "Par",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#t:Par"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of all nodes currently forming the distributed\n runtime system.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "allNodes",
          "package": "hdph",
          "signature": "Par [NodeId]",
          "source": "src/Control-Parallel-HdpH.html#allNodes",
          "type": "function"
        },
        "index": {
          "description": "Returns list of all nodes currently forming the distributed runtime system",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "allNodes",
          "normalized": "Par[NodeId]",
          "package": "hdph",
          "partial": "Nodes",
          "signature": "Par[NodeId]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:allNodes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the node hosting the IVar referred to by the given GIVar.\n This function being pure implies that IVars cannot migrate between nodes.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "at",
          "package": "hdph",
          "signature": "GIVar a -\u003e NodeId",
          "source": "src/Control-Parallel-HdpH.html#at",
          "type": "function"
        },
        "index": {
          "description": "Returns the node hosting the IVar referred to by the given GIVar This function being pure implies that IVars cannot migrate between nodes",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "at",
          "normalized": "GIVar a-\u003eNodeId",
          "package": "hdph",
          "signature": "GIVar a-\u003eNodeId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:at"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatic declaration of Static deserialisers used in explicit Closures\n created or imported by this module.\n This Static declaration must be imported by every main module using HdpH.\n The imported Static declaration must be combined with the main module's own\n Static declaration and registered; failure to do so may abort the program\n at runtime.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "declareStatic",
          "package": "hdph",
          "signature": "StaticDecl",
          "source": "src/Control-Parallel-HdpH.html#declareStatic",
          "type": "function"
        },
        "index": {
          "description": "Static declaration of Static deserialisers used in explicit Closures created or imported by this module This Static declaration must be imported by every main module using HdpH The imported Static declaration must be combined with the main module own Static declaration and registered failure to do so may abort the program at runtime",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "declareStatic",
          "package": "hdph",
          "partial": "Static",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:declareStatic"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminates the current thread.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "done",
          "package": "hdph",
          "signature": "Par a",
          "source": "src/Control-Parallel-HdpH.html#done",
          "type": "function"
        },
        "index": {
          "description": "Terminates the current thread",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "done",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its argument to weak head normal form.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "eval",
          "package": "hdph",
          "signature": "a -\u003e Par a",
          "source": "src/Control-Parallel-HdpH.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its argument to weak head normal form",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "eval",
          "normalized": "a-\u003ePar a",
          "package": "hdph",
          "signature": "a-\u003ePar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluates its argument to normal form (as defined by \u003ccode\u003e\u003ca\u003eNFData\u003c/a\u003e\u003c/code\u003e instance).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "force",
          "package": "hdph",
          "signature": "a -\u003e Par a",
          "source": "src/Control-Parallel-HdpH.html#force",
          "type": "function"
        },
        "index": {
          "description": "Evaluates its argument to normal form as defined by NFData instance",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "force",
          "normalized": "a-\u003ePar a",
          "package": "hdph",
          "signature": "a-\u003ePar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:force"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new thread, to be executed on the current node.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "fork",
          "package": "hdph",
          "signature": "Par () -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH.html#fork",
          "type": "function"
        },
        "index": {
          "description": "Creates new thread to be executed on the current node",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "fork",
          "normalized": "Par()-\u003ePar()",
          "package": "hdph",
          "signature": "Par()-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:fork"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads from given IVar; blocks if the IVar is empty.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "get",
          "package": "hdph",
          "signature": "IVar a -\u003e Par a",
          "source": "src/Control-Parallel-HdpH.html#get",
          "type": "function"
        },
        "index": {
          "description": "Reads from given IVar blocks if the IVar is empty",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "get",
          "normalized": "IVar a-\u003ePar a",
          "package": "hdph",
          "signature": "IVar a-\u003ePar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlobalises given IVar, returning a globally unique handle;\n this operation is restricted to IVars of \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "glob",
          "package": "hdph",
          "signature": "IVar (Closure a) -\u003e Par (GIVar (Closure a))",
          "source": "src/Control-Parallel-HdpH.html#glob",
          "type": "function"
        },
        "index": {
          "description": "Globalises given IVar returning globally unique handle this operation is restricted to IVars of Closure type",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "glob",
          "normalized": "IVar(Closure a)-\u003ePar(GIVar(Closure a))",
          "package": "hdph",
          "signature": "IVar(Closure a)-\u003ePar(GIVar(Closure a))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLifts an IO action into the Par monad.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "io",
          "package": "hdph",
          "signature": "IO a -\u003e Par a",
          "source": "src/Control-Parallel-HdpH.html#io",
          "type": "function"
        },
        "index": {
          "description": "Lifts an IO action into the Par monad",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "io",
          "normalized": "IO a-\u003ePar a",
          "package": "hdph",
          "signature": "IO a-\u003ePar a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:io"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the node this operation is currently executed on.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "myNode",
          "package": "hdph",
          "signature": "Par NodeId",
          "source": "src/Control-Parallel-HdpH.html#myNode",
          "type": "function"
        },
        "index": {
          "description": "Returns the node this operation is currently executed on",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "myNode",
          "package": "hdph",
          "partial": "Node",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:myNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new empty IVar.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "new",
          "package": "hdph",
          "signature": "Par (IVar a)",
          "source": "src/Control-Parallel-HdpH.html#new",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty IVar",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "new",
          "package": "hdph",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:new"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests whether given IVar is empty or full; does not block.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "probe",
          "package": "hdph",
          "signature": "IVar a -\u003e Par Bool",
          "source": "src/Control-Parallel-HdpH.html#probe",
          "type": "function"
        },
        "index": {
          "description": "Tests whether given IVar is empty or full does not block",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "probe",
          "normalized": "IVar a-\u003ePar Bool",
          "package": "hdph",
          "signature": "IVar a-\u003ePar Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:probe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePushes a computation to the given node, where it is eagerly converted\n into a thread and executed.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "pushTo",
          "package": "hdph",
          "signature": "Closure (Par ()) -\u003e NodeId -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH.html#pushTo",
          "type": "function"
        },
        "index": {
          "description": "Pushes computation to the given node where it is eagerly converted into thread and executed",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "pushTo",
          "normalized": "Closure(Par())-\u003eNodeId-\u003ePar()",
          "package": "hdph",
          "partial": "To",
          "signature": "Closure(Par())-\u003eNodeId-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:pushTo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites to given IVar (without forcing the value written).\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "put",
          "package": "hdph",
          "signature": "IVar a -\u003e a -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH.html#put",
          "type": "function"
        },
        "index": {
          "description": "Writes to given IVar without forcing the value written",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "put",
          "normalized": "IVar a-\u003ea-\u003ePar()",
          "package": "hdph",
          "signature": "IVar a-\u003ea-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites to (possibly remote) IVar denoted by given global handle;\n this operation is restricted to write valueso of \u003ccode\u003e\u003ca\u003eClosure\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "rput",
          "package": "hdph",
          "signature": "GIVar (Closure a) -\u003e Closure a -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH.html#rput",
          "type": "function"
        },
        "index": {
          "description": "Writes to possibly remote IVar denoted by given global handle this operation is restricted to write valueso of Closure type",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "rput",
          "normalized": "GIVar(Closure a)-\u003eClosure a-\u003ePar()",
          "package": "hdph",
          "signature": "GIVar(Closure a)-\u003eClosure a-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:rput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvenience: variant of \u003ccode\u003e\u003ca\u003erunParIO_\u003c/a\u003e\u003c/code\u003e which does return a result.\n Caveat: The result is only returned on the root node; all other nodes\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "runParIO",
          "package": "hdph",
          "signature": "RTSConf -\u003e Par a -\u003e IO (Maybe a)",
          "source": "src/Control-Parallel-HdpH.html#runParIO",
          "type": "function"
        },
        "index": {
          "description": "Convenience variant of runParIO which does return result Caveat The result is only returned on the root node all other nodes return Nothing",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "runParIO",
          "normalized": "RTSConf-\u003ePar a-\u003eIO(Maybe a)",
          "package": "hdph",
          "partial": "Par IO",
          "signature": "RTSConf-\u003ePar a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:runParIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEliminates the \u003ccode\u003e\u003ca\u003ePar\u003c/a\u003e\u003c/code\u003e monad by executing the given parallel computation \u003ccode\u003ep\u003c/code\u003e,\n including setting up and initialising a distributed runtime system\n according to the configuration parameter \u003ccode\u003econf\u003c/code\u003e.\n This function lives in the IO monad because \u003ccode\u003ep\u003c/code\u003e may be impure,\n for instance, \u003ccode\u003ep\u003c/code\u003e may exhibit non-determinism.\n Caveat: Though the computation \u003ccode\u003ep\u003c/code\u003e will only be started on a single root\n node, \u003ccode\u003e\u003ca\u003erunParIO_\u003c/a\u003e\u003c/code\u003e must be executed on every node of the distributed runtime\n system du to the SPMD nature of HdpH.\n Note that the configuration parameter \u003ccode\u003econf\u003c/code\u003e applies to all nodes uniformly;\n at present there is no support for heterogeneous configurations.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "runParIO_",
          "package": "hdph",
          "signature": "RTSConf -\u003e Par () -\u003e IO ()",
          "source": "src/Control-Parallel-HdpH.html#runParIO_",
          "type": "function"
        },
        "index": {
          "description": "Eliminates the Par monad by executing the given parallel computation including setting up and initialising distributed runtime system according to the configuration parameter conf This function lives in the IO monad because may be impure for instance may exhibit non-determinism Caveat Though the computation will only be started on single root node runParIO must be executed on every node of the distributed runtime system du to the SPMD nature of HdpH Note that the configuration parameter conf applies to all nodes uniformly at present there is no support for heterogeneous configurations",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "runParIO_",
          "normalized": "RTSConf-\u003ePar()-\u003eIO()",
          "package": "hdph",
          "partial": "Par IO",
          "signature": "RTSConf-\u003ePar()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:runParIO_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a spark, to be available for work stealing.\n The spark may be converted into a thread and executed locally, or it may\n be stolen by another node and executed there.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "spark",
          "package": "hdph",
          "signature": "Closure (Par ()) -\u003e Par ()",
          "source": "src/Control-Parallel-HdpH.html#spark",
          "type": "function"
        },
        "index": {
          "description": "Creates spark to be available for work stealing The spark may be converted into thread and executed locally or it may be stolen by another node and executed there",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "spark",
          "normalized": "Closure(Par())-\u003ePar()",
          "package": "hdph",
          "signature": "Closure(Par())-\u003ePar()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:spark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReads from given IVar; does not block but returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if IVar empty.\n\u003c/p\u003e",
          "module": "Control.Parallel.HdpH",
          "name": "tryGet",
          "package": "hdph",
          "signature": "IVar a -\u003e Par (Maybe a)",
          "source": "src/Control-Parallel-HdpH.html#tryGet",
          "type": "function"
        },
        "index": {
          "description": "Reads from given IVar does not block but returns Nothing if IVar empty",
          "hierarchy": "Control Parallel HdpH",
          "module": "Control.Parallel.HdpH",
          "name": "tryGet",
          "normalized": "IVar a-\u003ePar(Maybe a)",
          "package": "hdph",
          "partial": "Get",
          "signature": "IVar a-\u003ePar(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdph/docs/Control-Parallel-HdpH.html#v:tryGet"
      }
    }
  ]
]