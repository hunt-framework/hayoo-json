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
        "word": "stm-stats"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides variants to the function \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e from\n \u003ca\u003eControl.Concurrent.STM\u003c/a\u003e which keep track of how often the transaction is\n initiated and how often it was retried.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "Stats",
          "package": "stm-stats",
          "source": "src/Control-Concurrent-STM-Stats.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides variants to the function atomically from Control.Concurrent.STM which keep track of how often the transaction is initiated and how often it was retried",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "Stats",
          "package": "stm-stats",
          "partial": "Stats",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eextendException\u003c/a\u003e\u003c/code\u003e is set (which is the case with \u003ccode\u003e\u003ca\u003etrackNamedSTM\u003c/a\u003e\u003c/code\u003e), an\n occurrence of \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnSTM\u003c/a\u003e\u003c/code\u003e is replaced by\n \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnNamedSTM\u003c/a\u003e\u003c/code\u003e, carrying the name of the transaction and\n thus giving more helpful error messages.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "BlockedIndefinitelyOnNamedSTM",
          "package": "stm-stats",
          "source": "src/Control-Concurrent-STM-Stats.html#BlockedIndefinitelyOnNamedSTM",
          "type": "data"
        },
        "index": {
          "description": "If extendException is set which is the case with trackNamedSTM an occurrence of BlockedIndefinitelyOnSTM is replaced by BlockedIndefinitelyOnNamedSTM carrying the name of the transaction and thus giving more helpful error messages",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "BlockedIndefinitelyOnNamedSTM",
          "package": "stm-stats",
          "partial": "Blocked Indefinitely On Named STM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#t:BlockedIndefinitelyOnNamedSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor the most general transaction tracking function, \u003ccode\u003e\u003ca\u003etrackSTMConf\u003c/a\u003e\u003c/code\u003e, all\n settings can be configured using a \u003ccode\u003e\u003ca\u003eTrackSTMConf\u003c/a\u003e\u003c/code\u003e value.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "TrackSTMConf",
          "package": "stm-stats",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "data"
        },
        "index": {
          "description": "For the most general transaction tracking function trackSTMConf all settings can be configured using TrackSTMConf value",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "TrackSTMConf",
          "package": "stm-stats",
          "partial": "Track STMConf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#t:TrackSTMConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Stats",
          "name": "BlockedIndefinitelyOnNamedSTM",
          "package": "stm-stats",
          "signature": "BlockedIndefinitelyOnNamedSTM String",
          "source": "src/Control-Concurrent-STM-Stats.html#BlockedIndefinitelyOnNamedSTM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "BlockedIndefinitelyOnNamedSTM",
          "package": "stm-stats",
          "partial": "Blocked Indefinitely On Named STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:BlockedIndefinitelyOnNamedSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.STM.Stats",
          "name": "TrackSTMConf",
          "package": "stm-stats",
          "signature": "TrackSTMConf",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "TrackSTMConf",
          "package": "stm-stats",
          "partial": "Track STMConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:TrackSTMConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe default settings are:\n\u003c/p\u003e\u003cpre\u003e defaultTrackSTMConf = TrackSTMConf\n    { tryThreshold =      Just 10\n    , globalTheshold =    Just 3000\n    , exception =         True\n    , warnFunction =      hPutStrLn stderr\n    , warnInSTMFunction = \\_ -\u003e return ()\n    }\n\u003c/pre\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "defaultTrackSTMConf",
          "package": "stm-stats",
          "signature": "TrackSTMConf",
          "source": "src/Control-Concurrent-STM-Stats.html#defaultTrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "The default settings are defaultTrackSTMConf TrackSTMConf tryThreshold Just globalTheshold Just exception True warnFunction hPutStrLn stderr warnInSTMFunction return",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "defaultTrackSTMConf",
          "package": "stm-stats",
          "partial": "Track STMConf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:defaultTrackSTMConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDumps the current transaction statistics data to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "dumpSTMStats",
          "package": "stm-stats",
          "signature": "IO ()",
          "source": "src/Control-Concurrent-STM-Stats.html#dumpSTMStats",
          "type": "function"
        },
        "index": {
          "description": "Dumps the current transaction statistics data to stderr",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "dumpSTMStats",
          "normalized": "IO()",
          "package": "stm-stats",
          "partial": "STMStats",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:dumpSTMStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf this is set, a \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnSTM\u003c/a\u003e\u003c/code\u003e exception is replaced\n by a \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnNamedSTM\u003c/a\u003e\u003c/code\u003e exception, carrying the name of\n the exception.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "extendException",
          "package": "stm-stats",
          "signature": "Bool",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "If this is set BlockedIndefinitelyOnSTM exception is replaced by BlockedIndefinitelyOnNamedSTM exception carrying the name of the exception",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "extendException",
          "package": "stm-stats",
          "partial": "Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:extendException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFetches the current transaction statistics data.\n\u003c/p\u003e\u003cp\u003eThe map maps transaction names to counts of transaction commits and\n transaction retries.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "getSTMStats",
          "package": "stm-stats",
          "signature": "IO (Map String (Int, Int))",
          "source": "src/Control-Concurrent-STM-Stats.html#getSTMStats",
          "type": "function"
        },
        "index": {
          "description": "Fetches the current transaction statistics data The map maps transaction names to counts of transaction commits and transaction retries",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "getSTMStats",
          "normalized": "IO(Map String(Int,Int))",
          "package": "stm-stats",
          "partial": "STMStats",
          "signature": "IO(Map String(Int,Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:getSTMStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the total number of retries of one named transaction reaches\n this count, a warning is issued. If set to \u003ccode\u003eNothing\u003c/code\u003e, disables the\n warnings completely.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "globalTheshold",
          "package": "stm-stats",
          "signature": "Maybe Int",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "If the total number of retries of one named transaction reaches this count warning is issued If set to Nothing disables the warnings completely",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "globalTheshold",
          "package": "stm-stats",
          "partial": "Theshold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:globalTheshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e and collect the retry statistics under the given name and using the default configuration, \u003ccode\u003e\u003ca\u003edefaultTrackSTMConf\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackNamedSTM",
          "package": "stm-stats",
          "signature": "String -\u003e STM a -\u003e IO a",
          "source": "src/Control-Concurrent-STM-Stats.html#trackNamedSTM",
          "type": "function"
        },
        "index": {
          "description": "Run atomically and collect the retry statistics under the given name and using the default configuration defaultTrackSTMConf",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackNamedSTM",
          "normalized": "String-\u003eSTM a-\u003eIO a",
          "package": "stm-stats",
          "partial": "Named STM",
          "signature": "String-\u003eSTM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:trackNamedSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA drop-in replacement for \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e. The statistics will list this, and\n all other unnamed transactions, as \"\u003ccode\u003e_anonymous_\u003c/code\u003e\" and\n \u003ccode\u003e\u003ca\u003eBlockedIndefinitelyOnSTM\u003c/a\u003e\u003c/code\u003e exceptions will not be replaced.\n See below for variants that give more control over the statistics and\n generated warnings.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackSTM",
          "package": "stm-stats",
          "signature": "STM a -\u003e IO a",
          "source": "src/Control-Concurrent-STM-Stats.html#trackSTM",
          "type": "function"
        },
        "index": {
          "description": "drop-in replacement for atomically The statistics will list this and all other unnamed transactions as anonymous and BlockedIndefinitelyOnSTM exceptions will not be replaced See below for variants that give more control over the statistics and generated warnings",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackSTM",
          "normalized": "STM a-\u003eIO a",
          "package": "stm-stats",
          "partial": "STM",
          "signature": "STM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:trackSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun \u003ccode\u003e\u003ca\u003eatomically\u003c/a\u003e\u003c/code\u003e and collect the retry statistics under the given name,\n while issuing warnings when the configured thresholds are exceeded.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackSTMConf",
          "package": "stm-stats",
          "signature": "TrackSTMConf -\u003e String -\u003e STM a -\u003e IO a",
          "source": "src/Control-Concurrent-STM-Stats.html#trackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "Run atomically and collect the retry statistics under the given name while issuing warnings when the configured thresholds are exceeded",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackSTMConf",
          "normalized": "TrackSTMConf-\u003eString-\u003eSTM a-\u003eIO a",
          "package": "stm-stats",
          "partial": "STMConf",
          "signature": "TrackSTMConf-\u003eString-\u003eSTM a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:trackSTMConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis, when used as \u003ccode\u003e$trackThisSTM\u003c/code\u003e in a module with \u003ccode\u003e-XTemplateHaskell\u003c/code\u003e enabled,\n will call \u003ccode\u003e\u003ca\u003etrackNamedSTM\u003c/a\u003e\u003c/code\u003e with a name automatically derived from the source\n file name and position, e.g. \"\u003ccode\u003eTest.hs:6:21\u003c/code\u003e\".\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackThisSTM",
          "package": "stm-stats",
          "signature": "Q Exp",
          "source": "src/Control-Concurrent-STM-Stats.html#trackThisSTM",
          "type": "function"
        },
        "index": {
          "description": "This when used as trackThisSTM in module with XTemplateHaskell enabled will call trackNamedSTM with name automatically derived from the source file name and position e.g Test.hs",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "trackThisSTM",
          "package": "stm-stats",
          "partial": "This STM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:trackThisSTM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the number of retries of one transaction run reaches this\n count, a warning is issued at runtime. If set to \u003ccode\u003eNothing\u003c/code\u003e, disables the warnings completely.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "tryThreshold",
          "package": "stm-stats",
          "signature": "Maybe Int",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "If the number of retries of one transaction run reaches this count warning is issued at runtime If set to Nothing disables the warnings completely",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "tryThreshold",
          "package": "stm-stats",
          "partial": "Threshold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:tryThreshold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call when a warning is to be emitted.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "warnFunction",
          "package": "stm-stats",
          "signature": "String -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "Function to call when warning is to be emitted",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "warnFunction",
          "normalized": "String-\u003eIO()",
          "package": "stm-stats",
          "partial": "Function",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:warnFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to call when a warning is to be emitted during an STM\n transaction. This is possibly dangerous, see the documentation to\n \u003ccode\u003e\u003ca\u003eunsafeIOToSTM\u003c/a\u003e\u003c/code\u003e, but can be useful to detect transactions that keep\n retrying forever.\n\u003c/p\u003e",
          "module": "Control.Concurrent.STM.Stats",
          "name": "warnInSTMFunction",
          "package": "stm-stats",
          "signature": "String -\u003e IO ()",
          "source": "src/Control-Concurrent-STM-Stats.html#TrackSTMConf",
          "type": "function"
        },
        "index": {
          "description": "Function to call when warning is to be emitted during an STM transaction This is possibly dangerous see the documentation to unsafeIOToSTM but can be useful to detect transactions that keep retrying forever",
          "hierarchy": "Control Concurrent STM Stats",
          "module": "Control.Concurrent.STM.Stats",
          "name": "warnInSTMFunction",
          "normalized": "String-\u003eIO()",
          "package": "stm-stats",
          "partial": "In STMFunction",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/stm-stats/docs/Control-Concurrent-STM-Stats.html#v:warnInSTMFunction"
      }
    }
  ]
]