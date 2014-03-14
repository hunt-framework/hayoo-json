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
        "word": "Sysmon"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides the generic api to parse the logs, to store the parsed\n data in the IntervalMap and to query data from the IntervalMap based on the\n given time interval. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Log",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-Log.html",
          "type": "module"
        },
        "index": {
          "description": "The module provides the generic api to parse the logs to store the parsed data in the IntervalMap and to query data from the IntervalMap based on the given time interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Log",
          "package": "Sysmon",
          "partial": "Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA closed interval.  The lower bound should be less than or equal\n to the higher bound.\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Interval",
          "package": "Sysmon",
          "type": "data"
        },
        "index": {
          "description": "closed interval The lower bound should be less than or equal to the higher bound",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Interval",
          "package": "Sysmon",
          "partial": "Interval",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#t:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe request time interval to query sysmon reports. \n If the value of the request interval is Nothing the default max time\n interval request will be used. See function maxInterval below.\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "LogRequest",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-Log.html#LogRequest",
          "type": "type"
        },
        "index": {
          "description": "The request time interval to query sysmon reports If the value of the request interval is Nothing the default max time interval request will be used See function maxInterval below",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "LogRequest",
          "package": "Sysmon",
          "partial": "Log Request",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#t:LogRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Interval",
          "package": "Sysmon",
          "signature": "Interval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "Interval",
          "package": "Sysmon",
          "partial": "Interval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:Interval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAverage sysmon report corresponding to the requested time interval\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "average",
          "package": "Sysmon",
          "signature": "LogRequest -\u003e LogTree a -\u003e a",
          "source": "src/Database-Sybase-Sysmon-Log.html#average",
          "type": "function"
        },
        "index": {
          "description": "Average sysmon report corresponding to the requested time interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "average",
          "normalized": "LogRequest-\u003eLogTree a-\u003ea",
          "package": "Sysmon",
          "signature": "LogRequest-\u003eLogTree a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:average"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print the hints\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "fmtHints",
          "package": "Sysmon",
          "signature": "[Hint] -\u003e Doc",
          "source": "src/Database-Sybase-Sysmon-Log.html#fmtHints",
          "type": "function"
        },
        "index": {
          "description": "Pretty print the hints",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "fmtHints",
          "normalized": "[Hint]-\u003eDoc",
          "package": "Sysmon",
          "partial": "Hints",
          "signature": "[Hint]-\u003eDoc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:fmtHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if the log tree contains an interval corresponding to the\n requested time interval\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "hasInterval",
          "package": "Sysmon",
          "signature": "LogRequest -\u003e LogTree a -\u003e Bool",
          "source": "src/Database-Sybase-Sysmon-Log.html#hasInterval",
          "type": "function"
        },
        "index": {
          "description": "Check if the log tree contains an interval corresponding to the requested time interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "hasInterval",
          "normalized": "LogRequest-\u003eLogTree a-\u003eBool",
          "package": "Sysmon",
          "partial": "Interval",
          "signature": "LogRequest-\u003eLogTree a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:hasInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.Log",
          "name": "high",
          "package": "Sysmon",
          "signature": "v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "high",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:high"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMax interval to cover all intervals in the log tree \n\u003c/p\u003e\u003cp\u003eGet hints for the average sysmon report corresponding to the request \n time interval. To override the default hints parameters use ConfigFile\n api. See HConfig data type in SysmonTypes package for the list of the\n configuartion parameters.\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "hints",
          "package": "Sysmon",
          "signature": "LogRequest -\u003e ConfigParser -\u003e LogTree a -\u003e [Hint]",
          "source": "src/Database-Sybase-Sysmon-Log.html#hints",
          "type": "function"
        },
        "index": {
          "description": "Max interval to cover all intervals in the log tree Get hints for the average sysmon report corresponding to the request time interval To override the default hints parameters use ConfigFile api See HConfig data type in SysmonTypes package for the list of the configuartion parameters",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "hints",
          "normalized": "LogRequest-\u003eConfigParser-\u003eLogTree a-\u003e[Hint]",
          "package": "Sysmon",
          "signature": "LogRequest-\u003eConfigParser-\u003eLogTree a-\u003e[Hint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:hints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet intervals which intersect with the requested interval \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "intervals",
          "package": "Sysmon",
          "signature": "LogRequest -\u003e LogTree a -\u003e [LogInterval]",
          "source": "src/Database-Sybase-Sysmon-Log.html#intervals",
          "type": "function"
        },
        "index": {
          "description": "Get intervals which intersect with the requested interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "intervals",
          "normalized": "LogRequest-\u003eLogTree a-\u003e[LogInterval]",
          "package": "Sysmon",
          "signature": "LogRequest-\u003eLogTree a-\u003e[LogInterval]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:intervals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet log reports which intersecs with the requested time interval\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "list",
          "package": "Sysmon",
          "signature": "LogRequest -\u003e LogTree a -\u003e [a]",
          "source": "src/Database-Sybase-Sysmon-Log.html#list",
          "type": "function"
        },
        "index": {
          "description": "Get log reports which intersecs with the requested time interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "list",
          "normalized": "LogRequest-\u003eLogTree a-\u003e[a]",
          "package": "Sysmon",
          "signature": "LogRequest-\u003eLogTree a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:list"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.Log",
          "name": "low",
          "package": "Sysmon",
          "signature": "v",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "low",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:low"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMerge two log trees\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "merge",
          "package": "Sysmon",
          "signature": "LogTree a -\u003e LogTree a -\u003e LogTree a",
          "source": "src/Database-Sybase-Sysmon-Log.html#merge",
          "type": "function"
        },
        "index": {
          "description": "Merge two log trees",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "merge",
          "normalized": "LogTree a-\u003eLogTree a-\u003eLogTree a",
          "package": "Sysmon",
          "signature": "LogTree a-\u003eLogTree a-\u003eLogTree a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:merge"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate log time interval\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "mkInterval",
          "package": "Sysmon",
          "signature": "UTCTime -\u003e UTCTime -\u003e LogInterval",
          "source": "src/Database-Sybase-Sysmon-Log.html#mkInterval",
          "type": "function"
        },
        "index": {
          "description": "Create log time interval",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "mkInterval",
          "normalized": "UTCTime-\u003eUTCTime-\u003eLogInterval",
          "package": "Sysmon",
          "partial": "Interval",
          "signature": "UTCTime-\u003eUTCTime-\u003eLogInterval",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:mkInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneric parse the log files and store the data in the log tree. \n To parse sysmon logs use parseSysmon from SysmonLog package.\n This package implements Sysmon instance of LogEntry class (see Sample.hs)\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "parse",
          "package": "Sysmon",
          "signature": "FilePath -\u003e IO (LogTree a)",
          "source": "src/Database-Sybase-Sysmon-Log.html#parse",
          "type": "function"
        },
        "index": {
          "description": "Generic parse the log files and store the data in the log tree To parse sysmon logs use parseSysmon from SysmonLog package This package implements Sysmon instance of LogEntry class see Sample.hs",
          "hierarchy": "Database Sybase Sysmon Log",
          "module": "Database.Sybase.Sysmon.Log",
          "name": "parse",
          "normalized": "FilePath-\u003eIO(LogTree a)",
          "package": "Sysmon",
          "signature": "FilePath-\u003eIO(LogTree a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLog files parsing primitives \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "LogParserPrim",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html",
          "type": "module"
        },
        "index": {
          "description": "Log files parsing primitives",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "LogParserPrim",
          "package": "Sysmon",
          "partial": "Log Parser Prim",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "Field",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#Field",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "Field",
          "package": "Sysmon",
          "partial": "Field",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#t:Field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "LogState",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#LogState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "LogState",
          "package": "Sysmon",
          "partial": "Log State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#t:LogState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse string to the field value\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "field",
          "package": "Sysmon",
          "signature": "Int -\u003e [Field] -\u003e a",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#field",
          "type": "function"
        },
        "index": {
          "description": "Parse string to the field value",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "field",
          "normalized": "Int-\u003e[Field]-\u003ea",
          "package": "Sysmon",
          "signature": "Int-\u003e[Field]-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:field"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscard the matching lines \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "goto",
          "package": "Sysmon",
          "signature": "[String] -\u003e LogState [Field]",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#goto",
          "type": "function"
        },
        "index": {
          "description": "Discard the matching lines",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "goto",
          "normalized": "[String]-\u003eLogState[Field]",
          "package": "Sysmon",
          "signature": "[String]-\u003eLogState[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook ahead for the first substring until the second substring \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "look",
          "package": "Sysmon",
          "signature": "String -\u003e String -\u003e LogState Bool",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#look",
          "type": "function"
        },
        "index": {
          "description": "Look ahead for the first substring until the second substring",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "look",
          "normalized": "String-\u003eString-\u003eLogState Bool",
          "package": "Sysmon",
          "signature": "String-\u003eString-\u003eLogState Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:look"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest the first predicate until the second predicate  \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "lookAhead",
          "package": "Sysmon",
          "signature": "(String -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e LogState Bool",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#lookAhead",
          "type": "function"
        },
        "index": {
          "description": "Test the first predicate until the second predicate",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "lookAhead",
          "normalized": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eLogState Bool",
          "package": "Sysmon",
          "partial": "Ahead",
          "signature": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eLogState Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:lookAhead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet field after discarding the prefix \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "matchField",
          "package": "Sysmon",
          "signature": "String -\u003e Int -\u003e LogState a",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#matchField",
          "type": "function"
        },
        "index": {
          "description": "Get field after discarding the prefix",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "matchField",
          "normalized": "String-\u003eInt-\u003eLogState a",
          "package": "Sysmon",
          "partial": "Field",
          "signature": "String-\u003eInt-\u003eLogState a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:matchField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet fields after discarding the prefix\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "matchLine",
          "package": "Sysmon",
          "signature": "String -\u003e LogState [Field]",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#matchLine",
          "type": "function"
        },
        "index": {
          "description": "Get fields after discarding the prefix",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "matchLine",
          "normalized": "String-\u003eLogState[Field]",
          "package": "Sysmon",
          "partial": "Line",
          "signature": "String-\u003eLogState[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:matchLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet field if the first substring matches otherwise return a default value\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optField",
          "package": "Sysmon",
          "signature": "String -\u003e String -\u003e Int -\u003e a -\u003e LogState a",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optField",
          "type": "function"
        },
        "index": {
          "description": "Get field if the first substring matches otherwise return default value",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optField",
          "normalized": "String-\u003eString-\u003eInt-\u003ea-\u003eLogState a",
          "package": "Sysmon",
          "partial": "Field",
          "signature": "String-\u003eString-\u003eInt-\u003ea-\u003eLogState a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet fields if the first substring matches otherwise return empty\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optLine",
          "package": "Sysmon",
          "signature": "String -\u003e String -\u003e LogState [Field]",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optLine",
          "type": "function"
        },
        "index": {
          "description": "Get fields if the first substring matches otherwise return empty",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optLine",
          "normalized": "String-\u003eString-\u003eLogState[Field]",
          "package": "Sysmon",
          "partial": "Line",
          "signature": "String-\u003eString-\u003eLogState[Field]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet string field if the first substring matches otherwise return \n a default value\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optString",
          "package": "Sysmon",
          "signature": "String -\u003e String -\u003e Int -\u003e Int -\u003e String -\u003e LogState Field",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optString",
          "type": "function"
        },
        "index": {
          "description": "Get string field if the first substring matches otherwise return default value",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "optString",
          "normalized": "String-\u003eString-\u003eInt-\u003eInt-\u003eString-\u003eLogState Field",
          "package": "Sysmon",
          "partial": "String",
          "signature": "String-\u003eString-\u003eInt-\u003eInt-\u003eString-\u003eLogState Field",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate fields to the string value\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "string",
          "package": "Sysmon",
          "signature": "Int -\u003e Int -\u003e [Field] -\u003e Field",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#string",
          "type": "function"
        },
        "index": {
          "description": "Concatenate fields to the string value",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "string",
          "normalized": "Int-\u003eInt-\u003e[Field]-\u003eField",
          "package": "Sysmon",
          "signature": "Int-\u003eInt-\u003e[Field]-\u003eField",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:string"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRecursively collect values contained in the Just  \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "whileJust",
          "package": "Sysmon",
          "signature": "m (Maybe a) -\u003e m [a]",
          "source": "src/Database-Sybase-Sysmon-LogParserPrim.html#whileJust",
          "type": "function"
        },
        "index": {
          "description": "Recursively collect values contained in the Just",
          "hierarchy": "Database Sybase Sysmon LogParserPrim",
          "module": "Database.Sybase.Sysmon.LogParserPrim",
          "name": "whileJust",
          "normalized": "a(Maybe b)-\u003ea[b]",
          "package": "Sysmon",
          "partial": "Just",
          "signature": "m(Maybe a)-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:whileJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric log objects and types.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogTypes",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Generic log objects and types",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogTypes",
          "package": "Sysmon",
          "partial": "Log Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Action",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#Action",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Action",
          "package": "Sysmon",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Facts",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#Facts",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Facts",
          "package": "Sysmon",
          "partial": "Facts",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Facts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHint is defined as the triple of the rule name, \n rule action (text message) and rule conditions\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Hint",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#Hint",
          "type": "type"
        },
        "index": {
          "description": "Hint is defined as the triple of the rule name rule action text message and rule conditions",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Hint",
          "package": "Sysmon",
          "partial": "Hint",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Hint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOperations to parse log data, make LogTree and generate hints  \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogEntry",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogEntry",
          "type": "class"
        },
        "index": {
          "description": "Operations to parse log data make LogTree and generate hints",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogEntry",
          "package": "Sysmon",
          "partial": "Log Entry",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe key to look for the data in the LogTree\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogInterval",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogInterval",
          "type": "type"
        },
        "index": {
          "description": "The key to look for the data in the LogTree",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogInterval",
          "package": "Sysmon",
          "partial": "Log Interval",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogInterval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe nodes of the LogTree\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogNode",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogNode",
          "type": "data"
        },
        "index": {
          "description": "The nodes of the LogTree",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogNode",
          "package": "Sysmon",
          "partial": "Log Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat facts data\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogShow",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogShow",
          "type": "class"
        },
        "index": {
          "description": "Format facts data",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogShow",
          "package": "Sysmon",
          "partial": "Log Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogTree implemented as IntervalMap.FingerTree  \n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogTree",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogTree",
          "type": "type"
        },
        "index": {
          "description": "LogTree implemented as IntervalMap.FingerTree",
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogTree",
          "package": "Sysmon",
          "partial": "Log Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Result",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#Result",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "Result",
          "package": "Sysmon",
          "partial": "Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "RuleId",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#RuleId",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "RuleId",
          "package": "Sysmon",
          "partial": "Rule Id",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:RuleId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogNode",
          "package": "Sysmon",
          "signature": "LogNode (LogInterval, a)",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#LogNode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "LogNode",
          "normalized": "LogNode(LogInterval,a)",
          "package": "Sysmon",
          "partial": "Log Node",
          "signature": "LogNode(LogInterval,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:LogNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "lshow",
          "package": "Sysmon",
          "signature": "a -\u003e String",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#lshow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "lshow",
          "normalized": "a-\u003eString",
          "package": "Sysmon",
          "signature": "a-\u003eString",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:lshow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkHints",
          "package": "Sysmon",
          "signature": "ConfigParser -\u003e a -\u003e [Hint]",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#mkHints",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkHints",
          "normalized": "ConfigParser-\u003ea-\u003e[Hint]",
          "package": "Sysmon",
          "partial": "Hints",
          "signature": "ConfigParser-\u003ea-\u003e[Hint]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkLogTree",
          "package": "Sysmon",
          "signature": "[LogNode a] -\u003e LogTree a",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#mkLogTree",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkLogTree",
          "normalized": "[LogNode a]-\u003eLogTree a",
          "package": "Sysmon",
          "partial": "Log Tree",
          "signature": "[LogNode a]-\u003eLogTree a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkLogTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkNode",
          "package": "Sysmon",
          "signature": "a -\u003e LogNode a",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#mkNode",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkNode",
          "normalized": "a-\u003eLogNode a",
          "package": "Sysmon",
          "partial": "Node",
          "signature": "a-\u003eLogNode a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkNode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkParse",
          "package": "Sysmon",
          "signature": "String -\u003e a",
          "source": "src/Database-Sybase-Sysmon-LogTypes.html#mkParse",
          "type": "method"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon LogTypes",
          "module": "Database.Sybase.Sysmon.LogTypes",
          "name": "mkParse",
          "normalized": "String-\u003ea",
          "package": "Sysmon",
          "partial": "Parse",
          "signature": "String-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkParse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate the Sysmon hints (suggestions) by comparing the data from sysmon \n report to the corresponding data from the configuration. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "SysmonHints",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html",
          "type": "module"
        },
        "index": {
          "description": "Generate the Sysmon hints suggestions by comparing the data from sysmon report to the corresponding data from the configuration",
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "SysmonHints",
          "package": "Sysmon",
          "partial": "Sysmon Hints",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "HintEnv",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#HintEnv",
          "type": "type"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "HintEnv",
          "package": "Sysmon",
          "partial": "Hint Env",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#t:HintEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "eval",
          "package": "Sysmon",
          "signature": "Sysmon -\u003e HintEnv [Hint]",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#eval",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "eval",
          "normalized": "Sysmon-\u003eHintEnv[Hint]",
          "package": "Sysmon",
          "signature": "Sysmon-\u003eHintEnv[Hint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "foldResult",
          "package": "Sysmon",
          "signature": "[Result] -\u003e (Bool -\u003e Bool -\u003e Bool) -\u003e Result",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#foldResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "foldResult",
          "normalized": "[Result]-\u003e(Bool-\u003eBool-\u003eBool)-\u003eResult",
          "package": "Sysmon",
          "partial": "Result",
          "signature": "[Result]-\u003e(Bool-\u003eBool-\u003eBool)-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:foldResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration. To override the default configuration item\n use ConfigFile package API. \n\u003c/p\u003e\u003cp\u003eCreate Sysmon configuration from ConfigParser\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "mkConfig",
          "package": "Sysmon",
          "signature": "ConfigParser -\u003e HConfig",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#mkConfig",
          "type": "function"
        },
        "index": {
          "description": "Default configuration To override the default configuration item use ConfigFile package API Create Sysmon configuration from ConfigParser",
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "mkConfig",
          "normalized": "ConfigParser-\u003eHConfig",
          "package": "Sysmon",
          "partial": "Config",
          "signature": "ConfigParser-\u003eHConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:mkConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "result",
          "package": "Sysmon",
          "signature": "Bool -\u003e [String] -\u003e [a] -\u003e Result",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "result",
          "normalized": "Bool-\u003e[String]-\u003e[a]-\u003eResult",
          "package": "Sysmon",
          "signature": "Bool-\u003e[String]-\u003e[a]-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "sysmonHints",
          "package": "Sysmon",
          "signature": "ConfigParser -\u003e Sysmon -\u003e [Hint]",
          "source": "src/Database-Sybase-Sysmon-SysmonHints.html#sysmonHints",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonHints",
          "module": "Database.Sybase.Sysmon.SysmonHints",
          "name": "sysmonHints",
          "normalized": "ConfigParser-\u003eSysmon-\u003e[Hint]",
          "package": "Sysmon",
          "partial": "Hints",
          "signature": "ConfigParser-\u003eSysmon-\u003e[Hint]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:sysmonHints"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse Sybase 15 Sysmon report \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.SysmonLog",
          "name": "SysmonLog",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonLog.html",
          "type": "module"
        },
        "index": {
          "description": "Parse Sybase Sysmon report",
          "hierarchy": "Database Sybase Sysmon SysmonLog",
          "module": "Database.Sybase.Sysmon.SysmonLog",
          "name": "SysmonLog",
          "package": "Sysmon",
          "partial": "Sysmon Log",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonLog.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonLog",
          "name": "parseSysmon",
          "package": "Sysmon",
          "signature": "FilePath -\u003e IO (LogTree Sysmon)",
          "source": "src/Database-Sybase-Sysmon-SysmonLog.html#parseSysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonLog",
          "module": "Database.Sybase.Sysmon.SysmonLog",
          "name": "parseSysmon",
          "normalized": "FilePath-\u003eIO(LogTree Sysmon)",
          "package": "Sysmon",
          "partial": "Sysmon",
          "signature": "FilePath-\u003eIO(LogTree Sysmon)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonLog.html#v:parseSysmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSysmon report types\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "SysmonTypes",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Sysmon report types",
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "SysmonTypes",
          "package": "Sysmon",
          "partial": "Sysmon Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Cache",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Cache",
          "package": "Sysmon",
          "partial": "Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "CpuYield",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "CpuYield",
          "package": "Sysmon",
          "partial": "Cpu Yield",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:CpuYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Device",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Device",
          "package": "Sysmon",
          "partial": "Device",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Disk",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Disk",
          "package": "Sysmon",
          "partial": "Disk",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Disk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineBusy",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineBusy",
          "package": "Sysmon",
          "partial": "Engine Busy",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:EngineBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineIO",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineIO",
          "package": "Sysmon",
          "partial": "Engine IO",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:EngineIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSysmon configuration type\n\u003c/p\u003e",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "HConfig",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "data"
        },
        "index": {
          "description": "Sysmon configuration type",
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "HConfig",
          "package": "Sysmon",
          "partial": "HConfig",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:HConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Index",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Index",
          "package": "Sysmon",
          "partial": "Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Kernel",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Kernel",
          "package": "Sysmon",
          "partial": "Kernel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Lock",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Lock",
          "package": "Sysmon",
          "partial": "Lock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "NamedCache",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "NamedCache",
          "package": "Sysmon",
          "partial": "Named Cache",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:NamedCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Request",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Request",
          "package": "Sysmon",
          "partial": "Request",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Sysmon",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Sysmon",
          "package": "Sysmon",
          "partial": "Sysmon",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Sysmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Task",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Task",
          "package": "Sysmon",
          "partial": "Task",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitch",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitch",
          "package": "Sysmon",
          "partial": "Task Switch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:TaskSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitchDue",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitchDue",
          "package": "Sysmon",
          "partial": "Task Switch Due",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:TaskSwitchDue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Transaction",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Transaction",
          "package": "Sysmon",
          "partial": "Transaction",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "UlcFlush",
          "package": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "UlcFlush",
          "package": "Sysmon",
          "partial": "Ulc Flush",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:UlcFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Cache",
          "package": "Sysmon",
          "signature": "Cache",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Cache",
          "package": "Sysmon",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "CpuYield",
          "package": "Sysmon",
          "signature": "CpuYield",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "CpuYield",
          "package": "Sysmon",
          "partial": "Cpu Yield",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:CpuYield"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Device",
          "package": "Sysmon",
          "signature": "Device",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Device",
          "package": "Sysmon",
          "partial": "Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Device"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Disk",
          "package": "Sysmon",
          "signature": "Disk",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Disk",
          "package": "Sysmon",
          "partial": "Disk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Disk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineBusy",
          "package": "Sysmon",
          "signature": "EngineBusy",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineBusy",
          "package": "Sysmon",
          "partial": "Engine Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:EngineBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineIO",
          "package": "Sysmon",
          "signature": "EngineIO",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "EngineIO",
          "package": "Sysmon",
          "partial": "Engine IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:EngineIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "HConfig",
          "package": "Sysmon",
          "signature": "HConfig",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "HConfig",
          "package": "Sysmon",
          "partial": "HConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:HConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Index",
          "package": "Sysmon",
          "signature": "Index",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Index",
          "package": "Sysmon",
          "partial": "Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Kernel",
          "package": "Sysmon",
          "signature": "Kernel",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Kernel",
          "package": "Sysmon",
          "partial": "Kernel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Lock",
          "package": "Sysmon",
          "signature": "Lock",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Lock",
          "package": "Sysmon",
          "partial": "Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "NamedCache",
          "package": "Sysmon",
          "signature": "NamedCache",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "NamedCache",
          "package": "Sysmon",
          "partial": "Named Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:NamedCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Request",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Request",
          "package": "Sysmon",
          "partial": "Request",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Sysmon",
          "package": "Sysmon",
          "signature": "Sysmon",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Sysmon",
          "package": "Sysmon",
          "partial": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Sysmon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Task",
          "package": "Sysmon",
          "signature": "Task",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Task",
          "package": "Sysmon",
          "partial": "Task",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitch",
          "package": "Sysmon",
          "signature": "TaskSwitch",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitch",
          "package": "Sysmon",
          "partial": "Task Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:TaskSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitchDue",
          "package": "Sysmon",
          "signature": "TaskSwitchDue",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "TaskSwitchDue",
          "package": "Sysmon",
          "partial": "Task Switch Due",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:TaskSwitchDue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Transaction",
          "package": "Sysmon",
          "signature": "Transaction",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "Transaction",
          "package": "Sysmon",
          "partial": "Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "UlcFlush",
          "package": "Sysmon",
          "signature": "UlcFlush",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "UlcFlush",
          "package": "Sysmon",
          "partial": "Ulc Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:UlcFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "addrLockCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "addrLockCont",
          "package": "Sysmon",
          "partial": "Lock Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:addrLockCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgCpuBusy",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgCpuBusy",
          "package": "Sysmon",
          "partial": "Cpu Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgCpuBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgDiskIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgDiskIO",
          "package": "Sysmon",
          "partial": "Disk IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgDiskIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgIOBusy",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgIOBusy",
          "package": "Sysmon",
          "partial": "IOBusy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgIOBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgLogWrites",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "avgLogWrites",
          "package": "Sysmon",
          "partial": "Log Writes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgLogWrites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "batchSize",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "batchSize",
          "package": "Sysmon",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:batchSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byEngine",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byEngine",
          "package": "Sysmon",
          "partial": "Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byOther",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byOther",
          "package": "Sysmon",
          "partial": "Other",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byOther"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byUnpin",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "byUnpin",
          "package": "Sysmon",
          "partial": "Unpin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byUnpin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cache",
          "package": "Sysmon",
          "signature": "Cache",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cache",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheHits",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheHits",
          "package": "Sysmon",
          "partial": "Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheMisses",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheMisses",
          "package": "Sysmon",
          "partial": "Misses",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheMisses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheName",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheName",
          "package": "Sysmon",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheSearchMiss",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cacheSearchMiss",
          "package": "Sysmon",
          "partial": "Search Miss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheSearchMiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "caches",
          "package": "Sysmon",
          "signature": "[NamedCache]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "caches",
          "normalized": "[NamedCache]",
          "package": "Sysmon",
          "signature": "[NamedCache]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:caches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "changeDB",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "changeDB",
          "package": "Sysmon",
          "partial": "DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:changeDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "checkDiskIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "checkDiskIO",
          "package": "Sysmon",
          "partial": "Disk IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:checkDiskIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "commited",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "commited",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:commited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "completedIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "completedIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:completedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "comtSleeps",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "comtSleeps",
          "package": "Sysmon",
          "partial": "Sleeps",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:comtSleeps"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "conflicts",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "conflicts",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:conflicts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "connections",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "connections",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:connections"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cpuBusy",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cpuBusy",
          "package": "Sysmon",
          "partial": "Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cpuBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cpuYlds",
          "package": "Sysmon",
          "signature": "[CpuYield]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "cpuYlds",
          "normalized": "[CpuYield]",
          "package": "Sysmon",
          "partial": "Ylds",
          "signature": "[CpuYield]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cpuYlds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deadlocks",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deadlocks",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deadlocks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByDiskIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByDiskIO",
          "package": "Sysmon",
          "partial": "By Disk IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByDiskIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByEngine",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByEngine",
          "package": "Sysmon",
          "partial": "By Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByEngine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByOS",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByOS",
          "package": "Sysmon",
          "partial": "By OS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByServer",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "delayByServer",
          "package": "Sysmon",
          "partial": "By Server",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByServer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deletes",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deletes",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deletes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deviceCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deviceCont",
          "package": "Sysmon",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deviceCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deviceName",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "deviceName",
          "package": "Sysmon",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deviceName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "devices",
          "package": "Sysmon",
          "signature": "[Device]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "devices",
          "normalized": "[Device]",
          "package": "Sysmon",
          "signature": "[Device]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:devices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "dirtyBuffers",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "dirtyBuffers",
          "package": "Sysmon",
          "partial": "Buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:dirtyBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "disk",
          "package": "Sysmon",
          "signature": "Disk",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "disk",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:disk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "diskWrites",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "diskWrites",
          "package": "Sysmon",
          "partial": "Writes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:diskWrites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "endTran",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "endTran",
          "package": "Sysmon",
          "partial": "Tran",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:endTran"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engBusy",
          "package": "Sysmon",
          "signature": "[EngineBusy]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engBusy",
          "normalized": "[EngineBusy]",
          "package": "Sysmon",
          "partial": "Busy",
          "signature": "[EngineBusy]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engName",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engName",
          "package": "Sysmon",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engineName",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "engineName",
          "package": "Sysmon",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engineName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "enginesIO",
          "package": "Sysmon",
          "signature": "[EngineIO]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "enginesIO",
          "normalized": "[EngineIO]",
          "package": "Sysmon",
          "partial": "IO",
          "signature": "[EngineIO]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:enginesIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exAddress",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exAddress",
          "package": "Sysmon",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exIntent",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exIntent",
          "package": "Sysmon",
          "partial": "Intent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exIntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exPage",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exPage",
          "package": "Sysmon",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exRow",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exRow",
          "package": "Sysmon",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exTable",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "exTable",
          "package": "Sysmon",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "flushes",
          "package": "Sysmon",
          "signature": "UlcFlush",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "flushes",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:flushes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "fullUlc",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "fullUlc",
          "package": "Sysmon",
          "partial": "Ulc",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:fullUlc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "granted",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "granted",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:granted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiAvgLogWrites",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiAvgLogWrites",
          "package": "Sysmon",
          "partial": "Avg Log Writes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiAvgLogWrites"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCPU",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCPU",
          "package": "Sysmon",
          "partial": "CPU",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCPU"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCacheWash",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCacheWash",
          "package": "Sysmon",
          "partial": "Cache Wash",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCacheWash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCheckDiskIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCheckDiskIO",
          "package": "Sysmon",
          "partial": "Check Disk IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCheckDiskIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCommitedTrans",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiCommitedTrans",
          "package": "Sysmon",
          "partial": "Commited Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCommitedTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiContextSwitchDue",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiContextSwitchDue",
          "package": "Sysmon",
          "partial": "Context Switch Due",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiContextSwitchDue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiDeadlock",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiDeadlock",
          "package": "Sysmon",
          "partial": "Deadlock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiDeadlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiDirtyBuffers",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiDirtyBuffers",
          "package": "Sysmon",
          "partial": "Dirty Buffers",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiDirtyBuffers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiIdle",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiIdle",
          "package": "Sysmon",
          "partial": "Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLastPageLock",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLastPageLock",
          "package": "Sysmon",
          "partial": "Last Page Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLastPageLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLockPromotions",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLockPromotions",
          "package": "Sysmon",
          "partial": "Lock Promotions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLockPromotions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLockSummary",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLockSummary",
          "package": "Sysmon",
          "partial": "Lock Summary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLockSummary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLogSemRequests",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiLogSemRequests",
          "package": "Sysmon",
          "partial": "Log Sem Requests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLogSemRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiPageSplits",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiPageSplits",
          "package": "Sysmon",
          "partial": "Page Splits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiPageSplits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiStdDeviation",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiStdDeviation",
          "package": "Sysmon",
          "partial": "Std Deviation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiStdDeviation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiSwitchPerTransaction",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiSwitchPerTransaction",
          "package": "Sysmon",
          "partial": "Switch Per Transaction",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiSwitchPerTransaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiUlcSemRequests",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hiUlcSemRequests",
          "package": "Sysmon",
          "partial": "Ulc Sem Requests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiUlcSemRequests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hits",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "hits",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "index",
          "package": "Sysmon",
          "signature": "Index",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "index",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "inserts",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "inserts",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:inserts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ioBusy",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ioBusy",
          "package": "Sysmon",
          "partial": "Busy",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ioBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ioDelayBy",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ioDelayBy",
          "package": "Sysmon",
          "partial": "Delay By",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ioDelayBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "kernel",
          "package": "Sysmon",
          "signature": "Kernel",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "kernel",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:kernel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "largeIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "largeIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:largeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "largeIOTotal",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "largeIOTotal",
          "package": "Sysmon",
          "partial": "IOTotal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:largeIOTotal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lastLogPage",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lastLogPage",
          "package": "Sysmon",
          "partial": "Log Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lastLogPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "latchCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "latchCont",
          "package": "Sysmon",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:latchCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loAvgDiskIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loAvgDiskIO",
          "package": "Sysmon",
          "partial": "Avg Disk IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loAvgDiskIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loCacheHits",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loCacheHits",
          "package": "Sysmon",
          "partial": "Cache Hits",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loCacheHits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loCacheSpinContention",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loCacheSpinContention",
          "package": "Sysmon",
          "partial": "Cache Spin Contention",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loCacheSpinContention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loLargeIO",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "loLargeIO",
          "package": "Sysmon",
          "partial": "Large IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loLargeIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lock",
          "package": "Sysmon",
          "signature": "Lock",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lock",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lockCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lockCont",
          "package": "Sysmon",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lockCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lockReqs",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lockReqs",
          "package": "Sysmon",
          "partial": "Reqs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lockReqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logRecord",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logRecord",
          "package": "Sysmon",
          "partial": "Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logSemReqs",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logSemReqs",
          "package": "Sysmon",
          "partial": "Sem Reqs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logSemReqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logicLockCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "logicLockCont",
          "package": "Sysmon",
          "partial": "Lock Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logicLockCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lpLock",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "lpLock",
          "package": "Sysmon",
          "partial": "Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lpLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "misses",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "misses",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:misses"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "name",
          "package": "Sysmon",
          "signature": "String",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "name",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netReceived",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netReceived",
          "package": "Sysmon",
          "partial": "Received",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netReceived"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netSent",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netSent",
          "package": "Sysmon",
          "partial": "Sent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netSent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netServices",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "netServices",
          "package": "Sysmon",
          "partial": "Services",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netServices"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "numSwitch",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "numSwitch",
          "package": "Sysmon",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:numSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "other",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "other",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:other"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "outstandIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "outstandIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:outstandIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "plcLockCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "plcLockCont",
          "package": "Sysmon",
          "partial": "Lock Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:plcLockCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "promotions",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "promotions",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:promotions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "requestedIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "requestedIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:requestedIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "semCont",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "semCont",
          "package": "Sysmon",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:semCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shAddress",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shAddress",
          "package": "Sysmon",
          "partial": "Address",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shAddress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shIntent",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shIntent",
          "package": "Sysmon",
          "partial": "Intent",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shIntent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shPage",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shPage",
          "package": "Sysmon",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shRow",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shRow",
          "package": "Sysmon",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shTable",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shTable",
          "package": "Sysmon",
          "partial": "Table",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shrinks",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "shrinks",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shrinks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "spinContention",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "spinContention",
          "package": "Sysmon",
          "partial": "Contention",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:spinContention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "splits",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "splits",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:splits"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "sysmonTime",
          "package": "Sysmon",
          "signature": "LogInterval",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "sysmonTime",
          "package": "Sysmon",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:sysmonTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "task",
          "package": "Sysmon",
          "signature": "Task",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "task",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:task"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "taskSwitch",
          "package": "Sysmon",
          "signature": "[TaskSwitch]",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "taskSwitch",
          "normalized": "[TaskSwitch]",
          "package": "Sysmon",
          "partial": "Switch",
          "signature": "[TaskSwitch]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:taskSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "taskSwitchDue",
          "package": "Sysmon",
          "signature": "TaskSwitchDue",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "taskSwitchDue",
          "package": "Sysmon",
          "partial": "Switch Due",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:taskSwitchDue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "timeouts",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "timeouts",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:timeouts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totCache",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totCache",
          "package": "Sysmon",
          "partial": "Cache",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totCache"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totFlush",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totFlush",
          "package": "Sysmon",
          "partial": "Flush",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totFlush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totHitsMiss",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totHitsMiss",
          "package": "Sysmon",
          "partial": "Hits Miss",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totHitsMiss"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totReq",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totReq",
          "package": "Sysmon",
          "partial": "Req",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totReq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totSwitch",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totSwitch",
          "package": "Sysmon",
          "partial": "Switch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totSwitch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totSwitchDue",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totSwitchDue",
          "package": "Sysmon",
          "partial": "Switch Due",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totSwitchDue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totYlds",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totYlds",
          "package": "Sysmon",
          "partial": "Ylds",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totYlds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totalIO",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "totalIO",
          "package": "Sysmon",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totalIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "transaction",
          "package": "Sysmon",
          "signature": "Transaction",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "transaction",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:transaction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ulsSemReqs",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "ulsSemReqs",
          "package": "Sysmon",
          "partial": "Sem Reqs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ulsSemReqs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "upPage",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "upPage",
          "package": "Sysmon",
          "partial": "Page",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:upPage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "upRow",
          "package": "Sysmon",
          "signature": "Request",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "upRow",
          "package": "Sysmon",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:upRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "updates",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "updates",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:updates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "utilization",
          "package": "Sysmon",
          "signature": "Double",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "utilization",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:utilization"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "volYields",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "volYields",
          "package": "Sysmon",
          "partial": "Yields",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:volYields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "waited",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "waited",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:waited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "wash",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "wash",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:wash"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "yields",
          "package": "Sysmon",
          "signature": "Int",
          "source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Sybase Sysmon SysmonTypes",
          "module": "Database.Sybase.Sysmon.SysmonTypes",
          "name": "yields",
          "package": "Sysmon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:yields"
      }
    }
  ]
]