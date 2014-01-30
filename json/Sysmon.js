[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe module provides the generic api to parse the logs, to store the parsed\n data in the IntervalMap and to query data from the IntervalMap based on the\n given time interval. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html",
        "fct-type": "module",
        "title": "Log"
      },
      "index": {
        "description": "The module provides the generic api to parse the logs to store the parsed data in the IntervalMap and to query data from the IntervalMap based on the given time interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "Log",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#t:Interval",
      "description": {
        "fct-descr": "\u003cp\u003eA closed interval.  The lower bound should be less than or equal\n to the higher bound.\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Interval"
      },
      "index": {
        "description": "closed interval The lower bound should be less than or equal to the higher bound",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "Interval",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#t:LogRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThe request time interval to query sysmon reports. \n If the value of the request interval is Nothing the default max time\n interval request will be used. See function maxInterval below.\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#LogRequest",
        "fct-type": "type",
        "title": "LogRequest"
      },
      "index": {
        "description": "The request time interval to query sysmon reports If the value of the request interval is Nothing the default max time interval request will be used See function maxInterval below",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "LogRequest",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:Interval",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "Interval",
        "fct-type": "function",
        "title": "Interval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "Interval",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:average",
      "description": {
        "fct-descr": "\u003cp\u003eAverage sysmon report corresponding to the requested time interval\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogRequest -\u003e LogTree a -\u003e a",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#average",
        "fct-type": "function",
        "title": "average"
      },
      "index": {
        "description": "Average sysmon report corresponding to the requested time interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "average",
        "normalized": "LogRequest-\u003eLogTree a-\u003ea",
        "package": "Sysmon",
        "partial": "",
        "signature": "LogRequest-\u003eLogTree a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:fmtHints",
      "description": {
        "fct-descr": "\u003cp\u003ePretty print the hints\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "[Hint] -\u003e Doc",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#fmtHints",
        "fct-type": "function",
        "title": "fmtHints"
      },
      "index": {
        "description": "Pretty print the hints",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "fmtHints",
        "normalized": "[Hint]-\u003eDoc",
        "package": "Sysmon",
        "partial": "Hints",
        "signature": "[Hint]-\u003eDoc"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:hasInterval",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if the log tree contains an interval corresponding to the\n requested time interval\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogRequest -\u003e LogTree a -\u003e Bool",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#hasInterval",
        "fct-type": "function",
        "title": "hasInterval"
      },
      "index": {
        "description": "Check if the log tree contains an interval corresponding to the requested time interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "hasInterval",
        "normalized": "LogRequest-\u003eLogTree a-\u003eBool",
        "package": "Sysmon",
        "partial": "Interval",
        "signature": "LogRequest-\u003eLogTree a-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:high",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "v",
        "fct-type": "function",
        "title": "high"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "high",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:hints",
      "description": {
        "fct-descr": "\u003cp\u003eMax interval to cover all intervals in the log tree \n\u003c/p\u003e\u003cp\u003eGet hints for the average sysmon report corresponding to the request \n time interval. To override the default hints parameters use ConfigFile\n api. See HConfig data type in SysmonTypes package for the list of the\n configuartion parameters.\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogRequest -\u003e ConfigParser -\u003e LogTree a -\u003e [Hint]",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#hints",
        "fct-type": "function",
        "title": "hints"
      },
      "index": {
        "description": "Max interval to cover all intervals in the log tree Get hints for the average sysmon report corresponding to the request time interval To override the default hints parameters use ConfigFile api See HConfig data type in SysmonTypes package for the list of the configuartion parameters",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "hints",
        "normalized": "LogRequest-\u003eConfigParser-\u003eLogTree a-\u003e[Hint]",
        "package": "Sysmon",
        "partial": "",
        "signature": "LogRequest-\u003eConfigParser-\u003eLogTree a-\u003e[Hint]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:intervals",
      "description": {
        "fct-descr": "\u003cp\u003eGet intervals which intersect with the requested interval \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogRequest -\u003e LogTree a -\u003e [LogInterval]",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#intervals",
        "fct-type": "function",
        "title": "intervals"
      },
      "index": {
        "description": "Get intervals which intersect with the requested interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "intervals",
        "normalized": "LogRequest-\u003eLogTree a-\u003e[LogInterval]",
        "package": "Sysmon",
        "partial": "",
        "signature": "LogRequest-\u003eLogTree a-\u003e[LogInterval]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:list",
      "description": {
        "fct-descr": "\u003cp\u003eGet log reports which intersecs with the requested time interval\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogRequest -\u003e LogTree a -\u003e [a]",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#list",
        "fct-type": "function",
        "title": "list"
      },
      "index": {
        "description": "Get log reports which intersecs with the requested time interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "list",
        "normalized": "LogRequest-\u003eLogTree a-\u003e[a]",
        "package": "Sysmon",
        "partial": "",
        "signature": "LogRequest-\u003eLogTree a-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:low",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "v",
        "fct-type": "function",
        "title": "low"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "low",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:merge",
      "description": {
        "fct-descr": "\u003cp\u003eMerge two log trees\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "LogTree a -\u003e LogTree a -\u003e LogTree a",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#merge",
        "fct-type": "function",
        "title": "merge"
      },
      "index": {
        "description": "Merge two log trees",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "merge",
        "normalized": "LogTree a-\u003eLogTree a-\u003eLogTree a",
        "package": "Sysmon",
        "partial": "",
        "signature": "LogTree a-\u003eLogTree a-\u003eLogTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:mkInterval",
      "description": {
        "fct-descr": "\u003cp\u003eCreate log time interval\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "UTCTime -\u003e UTCTime -\u003e LogInterval",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#mkInterval",
        "fct-type": "function",
        "title": "mkInterval"
      },
      "index": {
        "description": "Create log time interval",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "mkInterval",
        "normalized": "UTCTime-\u003eUTCTime-\u003eLogInterval",
        "package": "Sysmon",
        "partial": "Interval",
        "signature": "UTCTime-\u003eUTCTime-\u003eLogInterval"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-Log.html#v:parse",
      "description": {
        "fct-descr": "\u003cp\u003eGeneric parse the log files and store the data in the log tree. \n To parse sysmon logs use parseSysmon from SysmonLog package.\n This package implements Sysmon instance of LogEntry class (see Sample.hs)\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.Log",
        "fct-package": "Sysmon",
        "fct-signature": "FilePath -\u003e IO (LogTree a)",
        "fct-source": "src/Database-Sybase-Sysmon-Log.html#parse",
        "fct-type": "function",
        "title": "parse"
      },
      "index": {
        "description": "Generic parse the log files and store the data in the log tree To parse sysmon logs use parseSysmon from SysmonLog package This package implements Sysmon instance of LogEntry class see Sample.hs",
        "hierarchy": "Database Sybase Sysmon Log",
        "module": "Database.Sybase.Sysmon.Log",
        "name": "parse",
        "normalized": "FilePath-\u003eIO(LogTree a)",
        "package": "Sysmon",
        "partial": "",
        "signature": "FilePath-\u003eIO(LogTree a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLog files parsing primitives \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html",
        "fct-type": "module",
        "title": "LogParserPrim"
      },
      "index": {
        "description": "Log files parsing primitives",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "LogParserPrim",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Parser Prim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#t:Field",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#Field",
        "fct-type": "type",
        "title": "Field"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "Field",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Field",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#t:LogState",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#LogState",
        "fct-type": "type",
        "title": "LogState"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "LogState",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:field",
      "description": {
        "fct-descr": "\u003cp\u003eParse string to the field value\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "Int -\u003e [Field] -\u003e a",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#field",
        "fct-type": "function",
        "title": "field"
      },
      "index": {
        "description": "Parse string to the field value",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "field",
        "normalized": "Int-\u003e[Field]-\u003ea",
        "package": "Sysmon",
        "partial": "",
        "signature": "Int-\u003e[Field]-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:goto",
      "description": {
        "fct-descr": "\u003cp\u003eDiscard the matching lines \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "[String] -\u003e LogState [Field]",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#goto",
        "fct-type": "function",
        "title": "goto"
      },
      "index": {
        "description": "Discard the matching lines",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "goto",
        "normalized": "[String]-\u003eLogState[Field]",
        "package": "Sysmon",
        "partial": "",
        "signature": "[String]-\u003eLogState[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:look",
      "description": {
        "fct-descr": "\u003cp\u003eLook ahead for the first substring until the second substring \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e String -\u003e LogState Bool",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#look",
        "fct-type": "function",
        "title": "look"
      },
      "index": {
        "description": "Look ahead for the first substring until the second substring",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "look",
        "normalized": "String-\u003eString-\u003eLogState Bool",
        "package": "Sysmon",
        "partial": "",
        "signature": "String-\u003eString-\u003eLogState Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:lookAhead",
      "description": {
        "fct-descr": "\u003cp\u003eTest the first predicate until the second predicate  \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "(String -\u003e Bool) -\u003e (String -\u003e Bool) -\u003e LogState Bool",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#lookAhead",
        "fct-type": "function",
        "title": "lookAhead"
      },
      "index": {
        "description": "Test the first predicate until the second predicate",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "lookAhead",
        "normalized": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eLogState Bool",
        "package": "Sysmon",
        "partial": "Ahead",
        "signature": "(String-\u003eBool)-\u003e(String-\u003eBool)-\u003eLogState Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:matchField",
      "description": {
        "fct-descr": "\u003cp\u003eGet field after discarding the prefix \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e Int -\u003e LogState a",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#matchField",
        "fct-type": "function",
        "title": "matchField"
      },
      "index": {
        "description": "Get field after discarding the prefix",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "matchField",
        "normalized": "String-\u003eInt-\u003eLogState a",
        "package": "Sysmon",
        "partial": "Field",
        "signature": "String-\u003eInt-\u003eLogState a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:matchLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet fields after discarding the prefix\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e LogState [Field]",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#matchLine",
        "fct-type": "function",
        "title": "matchLine"
      },
      "index": {
        "description": "Get fields after discarding the prefix",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "matchLine",
        "normalized": "String-\u003eLogState[Field]",
        "package": "Sysmon",
        "partial": "Line",
        "signature": "String-\u003eLogState[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optField",
      "description": {
        "fct-descr": "\u003cp\u003eGet field if the first substring matches otherwise return a default value\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e String -\u003e Int -\u003e a -\u003e LogState a",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optField",
        "fct-type": "function",
        "title": "optField"
      },
      "index": {
        "description": "Get field if the first substring matches otherwise return default value",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "optField",
        "normalized": "String-\u003eString-\u003eInt-\u003ea-\u003eLogState a",
        "package": "Sysmon",
        "partial": "Field",
        "signature": "String-\u003eString-\u003eInt-\u003ea-\u003eLogState a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optLine",
      "description": {
        "fct-descr": "\u003cp\u003eGet fields if the first substring matches otherwise return empty\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e String -\u003e LogState [Field]",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optLine",
        "fct-type": "function",
        "title": "optLine"
      },
      "index": {
        "description": "Get fields if the first substring matches otherwise return empty",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "optLine",
        "normalized": "String-\u003eString-\u003eLogState[Field]",
        "package": "Sysmon",
        "partial": "Line",
        "signature": "String-\u003eString-\u003eLogState[Field]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:optString",
      "description": {
        "fct-descr": "\u003cp\u003eGet string field if the first substring matches otherwise return \n a default value\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e String -\u003e Int -\u003e Int -\u003e String -\u003e LogState Field",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#optString",
        "fct-type": "function",
        "title": "optString"
      },
      "index": {
        "description": "Get string field if the first substring matches otherwise return default value",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "optString",
        "normalized": "String-\u003eString-\u003eInt-\u003eInt-\u003eString-\u003eLogState Field",
        "package": "Sysmon",
        "partial": "String",
        "signature": "String-\u003eString-\u003eInt-\u003eInt-\u003eString-\u003eLogState Field"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:string",
      "description": {
        "fct-descr": "\u003cp\u003eConcatenate fields to the string value\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "Int -\u003e Int -\u003e [Field] -\u003e Field",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#string",
        "fct-type": "function",
        "title": "string"
      },
      "index": {
        "description": "Concatenate fields to the string value",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "string",
        "normalized": "Int-\u003eInt-\u003e[Field]-\u003eField",
        "package": "Sysmon",
        "partial": "",
        "signature": "Int-\u003eInt-\u003e[Field]-\u003eField"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogParserPrim.html#v:whileJust",
      "description": {
        "fct-descr": "\u003cp\u003eRecursively collect values contained in the Just  \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogParserPrim",
        "fct-package": "Sysmon",
        "fct-signature": "m (Maybe a) -\u003e m [a]",
        "fct-source": "src/Database-Sybase-Sysmon-LogParserPrim.html#whileJust",
        "fct-type": "function",
        "title": "whileJust"
      },
      "index": {
        "description": "Recursively collect values contained in the Just",
        "hierarchy": "Database Sybase Sysmon LogParserPrim",
        "module": "Database.Sybase.Sysmon.LogParserPrim",
        "name": "whileJust",
        "normalized": "a(Maybe b)-\u003ea[b]",
        "package": "Sysmon",
        "partial": "Just",
        "signature": "m(Maybe a)-\u003em[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGeneric log objects and types.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html",
        "fct-type": "module",
        "title": "LogTypes"
      },
      "index": {
        "description": "Generic log objects and types",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogTypes",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Action",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#Action",
        "fct-type": "type",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "Action",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Facts",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#Facts",
        "fct-type": "type",
        "title": "Facts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "Facts",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Facts",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Hint",
      "description": {
        "fct-descr": "\u003cp\u003eHint is defined as the triple of the rule name, \n rule action (text message) and rule conditions\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#Hint",
        "fct-type": "type",
        "title": "Hint"
      },
      "index": {
        "description": "Hint is defined as the triple of the rule name rule action text message and rule conditions",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "Hint",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogEntry",
      "description": {
        "fct-descr": "\u003cp\u003eOperations to parse log data, make LogTree and generate hints  \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "class",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogEntry",
        "fct-type": "class",
        "title": "LogEntry"
      },
      "index": {
        "description": "Operations to parse log data make LogTree and generate hints",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogEntry",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogInterval",
      "description": {
        "fct-descr": "\u003cp\u003eThe key to look for the data in the LogTree\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogInterval",
        "fct-type": "type",
        "title": "LogInterval"
      },
      "index": {
        "description": "The key to look for the data in the LogTree",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogInterval",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Interval",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogNode",
      "description": {
        "fct-descr": "\u003cp\u003eThe nodes of the LogTree\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogNode",
        "fct-type": "data",
        "title": "LogNode"
      },
      "index": {
        "description": "The nodes of the LogTree",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogNode",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Node",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogShow",
      "description": {
        "fct-descr": "\u003cp\u003eFormat facts data\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "class",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogShow",
        "fct-type": "class",
        "title": "LogShow"
      },
      "index": {
        "description": "Format facts data",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogShow",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Show",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:LogTree",
      "description": {
        "fct-descr": "\u003cp\u003eLogTree implemented as IntervalMap.FingerTree  \n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogTree",
        "fct-type": "type",
        "title": "LogTree"
      },
      "index": {
        "description": "LogTree implemented as IntervalMap.FingerTree",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogTree",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Tree",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:Result",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#Result",
        "fct-type": "type",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "Result",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#t:RuleId",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#RuleId",
        "fct-type": "type",
        "title": "RuleId"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "RuleId",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Rule Id",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:LogNode",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "LogNode (LogInterval, a)",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#LogNode",
        "fct-type": "function",
        "title": "LogNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "LogNode",
        "normalized": "LogNode(LogInterval,a)",
        "package": "Sysmon",
        "partial": "Log Node",
        "signature": "LogNode(LogInterval,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:lshow",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "a -\u003e String",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#lshow",
        "fct-type": "method",
        "title": "lshow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "lshow",
        "normalized": "a-\u003eString",
        "package": "Sysmon",
        "partial": "",
        "signature": "a-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkHints",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "ConfigParser -\u003e a -\u003e [Hint]",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#mkHints",
        "fct-type": "method",
        "title": "mkHints"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "mkHints",
        "normalized": "ConfigParser-\u003ea-\u003e[Hint]",
        "package": "Sysmon",
        "partial": "Hints",
        "signature": "ConfigParser-\u003ea-\u003e[Hint]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkLogTree",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[LogNode a] -\u003e LogTree a",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#mkLogTree",
        "fct-type": "method",
        "title": "mkLogTree"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "mkLogTree",
        "normalized": "[LogNode a]-\u003eLogTree a",
        "package": "Sysmon",
        "partial": "Log Tree",
        "signature": "[LogNode a]-\u003eLogTree a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkNode",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "a -\u003e LogNode a",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#mkNode",
        "fct-type": "method",
        "title": "mkNode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "mkNode",
        "normalized": "a-\u003eLogNode a",
        "package": "Sysmon",
        "partial": "Node",
        "signature": "a-\u003eLogNode a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-LogTypes.html#v:mkParse",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.LogTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String -\u003e a",
        "fct-source": "src/Database-Sybase-Sysmon-LogTypes.html#mkParse",
        "fct-type": "method",
        "title": "mkParse"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon LogTypes",
        "module": "Database.Sybase.Sysmon.LogTypes",
        "name": "mkParse",
        "normalized": "String-\u003ea",
        "package": "Sysmon",
        "partial": "Parse",
        "signature": "String-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerate the Sysmon hints (suggestions) by comparing the data from sysmon \n report to the corresponding data from the configuration. \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html",
        "fct-type": "module",
        "title": "SysmonHints"
      },
      "index": {
        "description": "Generate the Sysmon hints suggestions by comparing the data from sysmon report to the corresponding data from the configuration",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "SysmonHints",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sysmon Hints",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#t:HintEnv",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "type",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#HintEnv",
        "fct-type": "type",
        "title": "HintEnv"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "HintEnv",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Hint Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:eval",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "Sysmon -\u003e HintEnv [Hint]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "eval",
        "normalized": "Sysmon-\u003eHintEnv[Hint]",
        "package": "Sysmon",
        "partial": "",
        "signature": "Sysmon-\u003eHintEnv[Hint]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:foldResult",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "[Result] -\u003e (Bool -\u003e Bool -\u003e Bool) -\u003e Result",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#foldResult",
        "fct-type": "function",
        "title": "foldResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "foldResult",
        "normalized": "[Result]-\u003e(Bool-\u003eBool-\u003eBool)-\u003eResult",
        "package": "Sysmon",
        "partial": "Result",
        "signature": "[Result]-\u003e(Bool-\u003eBool-\u003eBool)-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:mkConfig",
      "description": {
        "fct-descr": "\u003cp\u003eDefault configuration. To override the default configuration item\n use ConfigFile package API. \n\u003c/p\u003e\u003cp\u003eCreate Sysmon configuration from ConfigParser\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "ConfigParser -\u003e HConfig",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#mkConfig",
        "fct-type": "function",
        "title": "mkConfig"
      },
      "index": {
        "description": "Default configuration To override the default configuration item use ConfigFile package API Create Sysmon configuration from ConfigParser",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "mkConfig",
        "normalized": "ConfigParser-\u003eHConfig",
        "package": "Sysmon",
        "partial": "Config",
        "signature": "ConfigParser-\u003eHConfig"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:result",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "Bool -\u003e [String] -\u003e [a] -\u003e Result",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#result",
        "fct-type": "function",
        "title": "result"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "result",
        "normalized": "Bool-\u003e[String]-\u003e[a]-\u003eResult",
        "package": "Sysmon",
        "partial": "",
        "signature": "Bool-\u003e[String]-\u003e[a]-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonHints.html#v:sysmonHints",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonHints",
        "fct-package": "Sysmon",
        "fct-signature": "ConfigParser -\u003e Sysmon -\u003e [Hint]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonHints.html#sysmonHints",
        "fct-type": "function",
        "title": "sysmonHints"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonHints",
        "module": "Database.Sybase.Sysmon.SysmonHints",
        "name": "sysmonHints",
        "normalized": "ConfigParser-\u003eSysmon-\u003e[Hint]",
        "package": "Sysmon",
        "partial": "Hints",
        "signature": "ConfigParser-\u003eSysmon-\u003e[Hint]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonLog.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParse Sybase 15 Sysmon report \n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.SysmonLog",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonLog.html",
        "fct-type": "module",
        "title": "SysmonLog"
      },
      "index": {
        "description": "Parse Sybase Sysmon report",
        "hierarchy": "Database Sybase Sysmon SysmonLog",
        "module": "Database.Sybase.Sysmon.SysmonLog",
        "name": "SysmonLog",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sysmon Log",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonLog.html#v:parseSysmon",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonLog",
        "fct-package": "Sysmon",
        "fct-signature": "FilePath -\u003e IO (LogTree Sysmon)",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonLog.html#parseSysmon",
        "fct-type": "function",
        "title": "parseSysmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonLog",
        "module": "Database.Sybase.Sysmon.SysmonLog",
        "name": "parseSysmon",
        "normalized": "FilePath-\u003eIO(LogTree Sysmon)",
        "package": "Sysmon",
        "partial": "Sysmon",
        "signature": "FilePath-\u003eIO(LogTree Sysmon)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSysmon report types\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "module",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html",
        "fct-type": "module",
        "title": "SysmonTypes"
      },
      "index": {
        "description": "Sysmon report types",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "SysmonTypes",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sysmon Types",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Cache",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "data",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Cache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:CpuYield",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
        "fct-type": "data",
        "title": "CpuYield"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "CpuYield",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cpu Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Device",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
        "fct-type": "data",
        "title": "Device"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Device",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Disk",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "data",
        "title": "Disk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Disk",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:EngineBusy",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
        "fct-type": "data",
        "title": "EngineBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "EngineBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Engine Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:EngineIO",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
        "fct-type": "data",
        "title": "EngineIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "EngineIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Engine IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:HConfig",
      "description": {
        "fct-descr": "\u003cp\u003eSysmon configuration type\n\u003c/p\u003e",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "data",
        "title": "HConfig"
      },
      "index": {
        "description": "Sysmon configuration type",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "HConfig",
        "normalized": "",
        "package": "Sysmon",
        "partial": "HConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Index",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
        "fct-type": "data",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Index",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Kernel",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "data",
        "title": "Kernel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Kernel",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Lock",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "data",
        "title": "Lock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Lock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:NamedCache",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "data",
        "title": "NamedCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "NamedCache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Named Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Request",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
        "fct-type": "data",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Request",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Sysmon",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "data",
        "title": "Sysmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Sysmon",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sysmon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Task",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "data",
        "title": "Task"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Task",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:TaskSwitch",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
        "fct-type": "data",
        "title": "TaskSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "TaskSwitch",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:TaskSwitchDue",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "data",
        "title": "TaskSwitchDue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "TaskSwitchDue",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task Switch Due",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:Transaction",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "data",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Transaction",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#t:UlcFlush",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "data",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "data",
        "title": "UlcFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "UlcFlush",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Ulc Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Cache",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Cache",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "Cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Cache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:CpuYield",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "CpuYield",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
        "fct-type": "function",
        "title": "CpuYield"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "CpuYield",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cpu Yield",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Device",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Device",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
        "fct-type": "function",
        "title": "Device"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Device",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Disk",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Disk",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "Disk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Disk",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Disk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:EngineBusy",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "EngineBusy",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
        "fct-type": "function",
        "title": "EngineBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "EngineBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Engine Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:EngineIO",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "EngineIO",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
        "fct-type": "function",
        "title": "EngineIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "EngineIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Engine IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:HConfig",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "HConfig",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "HConfig"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "HConfig",
        "normalized": "",
        "package": "Sysmon",
        "partial": "HConfig",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Index",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Index",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
        "fct-type": "function",
        "title": "Index"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Index",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Kernel",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Kernel",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "Kernel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Kernel",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Kernel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Lock",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Lock",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "Lock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Lock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:NamedCache",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "NamedCache",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "NamedCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "NamedCache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Named Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Request",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
        "fct-type": "function",
        "title": "Request"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Request",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Sysmon",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Sysmon",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "Sysmon"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Sysmon",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sysmon",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Task",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Task",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "function",
        "title": "Task"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Task",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:TaskSwitch",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "TaskSwitch",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
        "fct-type": "function",
        "title": "TaskSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "TaskSwitch",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:TaskSwitchDue",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "TaskSwitchDue",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "TaskSwitchDue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "TaskSwitchDue",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Task Switch Due",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:Transaction",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Transaction",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "Transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "Transaction",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:UlcFlush",
      "description": {
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "UlcFlush",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "UlcFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "UlcFlush",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Ulc Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:addrLockCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "addrLockCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "addrLockCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgCpuBusy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "avgCpuBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "avgCpuBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cpu Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgDiskIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "avgDiskIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "avgDiskIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Disk IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgIOBusy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "avgIOBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "avgIOBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IOBusy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:avgLogWrites",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "avgLogWrites"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "avgLogWrites",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:batchSize",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "batchSize"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "batchSize",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byEngine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
        "fct-type": "function",
        "title": "byEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "byEngine",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byOther",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "byOther"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "byOther",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Other",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:byUnpin",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "byUnpin"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "byUnpin",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Unpin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Cache",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "cache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheHits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "cacheHits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cacheHits",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Hits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheMisses",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "cacheMisses"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cacheMisses",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Misses",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "cacheName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cacheName",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cacheSearchMiss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "cacheSearchMiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cacheSearchMiss",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Search Miss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:caches",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[NamedCache]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "caches"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "caches",
        "normalized": "[NamedCache]",
        "package": "Sysmon",
        "partial": "",
        "signature": "[NamedCache]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:changeDB",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "changeDB"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "changeDB",
        "normalized": "",
        "package": "Sysmon",
        "partial": "DB",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:checkDiskIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "checkDiskIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "checkDiskIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Disk IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:commited",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "commited"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "commited",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:completedIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "completedIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "completedIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:comtSleeps",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "comtSleeps"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "comtSleeps",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sleeps",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:conflicts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "conflicts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "conflicts",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:connections",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "function",
        "title": "connections"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "connections",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cpuBusy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
        "fct-type": "function",
        "title": "cpuBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cpuBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:cpuYlds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[CpuYield]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "cpuYlds"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "cpuYlds",
        "normalized": "[CpuYield]",
        "package": "Sysmon",
        "partial": "Ylds",
        "signature": "[CpuYield]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deadlocks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "deadlocks"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "deadlocks",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByDiskIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "delayByDiskIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "delayByDiskIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "By Disk IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByEngine",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "delayByEngine"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "delayByEngine",
        "normalized": "",
        "package": "Sysmon",
        "partial": "By Engine",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByOS",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "delayByOS"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "delayByOS",
        "normalized": "",
        "package": "Sysmon",
        "partial": "By OS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:delayByServer",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "delayByServer"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "delayByServer",
        "normalized": "",
        "package": "Sysmon",
        "partial": "By Server",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deletes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "deletes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "deletes",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deviceCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "deviceCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "deviceCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:deviceName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
        "fct-type": "function",
        "title": "deviceName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "deviceName",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:devices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[Device]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "devices"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "devices",
        "normalized": "[Device]",
        "package": "Sysmon",
        "partial": "",
        "signature": "[Device]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:dirtyBuffers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "dirtyBuffers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "dirtyBuffers",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:disk",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Disk",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "disk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "disk",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:diskWrites",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "diskWrites"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "diskWrites",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:endTran",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "endTran"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "endTran",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Tran",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engBusy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[EngineBusy]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "engBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "engBusy",
        "normalized": "[EngineBusy]",
        "package": "Sysmon",
        "partial": "Busy",
        "signature": "[EngineBusy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
        "fct-type": "function",
        "title": "engName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "engName",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:engineName",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
        "fct-type": "function",
        "title": "engineName"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "engineName",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:enginesIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[EngineIO]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "enginesIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "enginesIO",
        "normalized": "[EngineIO]",
        "package": "Sysmon",
        "partial": "IO",
        "signature": "[EngineIO]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exAddress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "exAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "exAddress",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exIntent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "exIntent"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "exIntent",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Intent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "exPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "exPage",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "exRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "exRow",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:exTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "exTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "exTable",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:flushes",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "UlcFlush",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "flushes"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "flushes",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:fullUlc",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "fullUlc"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "fullUlc",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Ulc",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:granted",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
        "fct-type": "function",
        "title": "granted"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "granted",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiAvgLogWrites",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiAvgLogWrites"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiAvgLogWrites",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Avg Log Writes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCPU",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiCPU"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiCPU",
        "normalized": "",
        "package": "Sysmon",
        "partial": "CPU",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCacheWash",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiCacheWash"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiCacheWash",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache Wash",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCheckDiskIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiCheckDiskIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiCheckDiskIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Check Disk IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiCommitedTrans",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiCommitedTrans"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiCommitedTrans",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Commited Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiContextSwitchDue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiContextSwitchDue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiContextSwitchDue",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Context Switch Due",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiDeadlock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiDeadlock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiDeadlock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Deadlock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiDirtyBuffers",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiDirtyBuffers"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiDirtyBuffers",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Dirty Buffers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiIdle",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiIdle"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiIdle",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLastPageLock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiLastPageLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiLastPageLock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Last Page Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLockPromotions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiLockPromotions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiLockPromotions",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock Promotions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLockSummary",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiLockSummary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiLockSummary",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock Summary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiLogSemRequests",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiLogSemRequests"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiLogSemRequests",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Sem Requests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiPageSplits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiPageSplits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiPageSplits",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Page Splits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiStdDeviation",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiStdDeviation"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiStdDeviation",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Std Deviation",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiSwitchPerTransaction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiSwitchPerTransaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiSwitchPerTransaction",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Switch Per Transaction",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hiUlcSemRequests",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "hiUlcSemRequests"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hiUlcSemRequests",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Ulc Sem Requests",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:hits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "hits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "hits",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:index",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Index",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "index"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "index",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:inserts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "inserts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "inserts",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ioBusy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
        "fct-type": "function",
        "title": "ioBusy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "ioBusy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Busy",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ioDelayBy",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "ioDelayBy"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "ioDelayBy",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Delay By",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:kernel",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Kernel",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "kernel"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "kernel",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:largeIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "largeIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "largeIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:largeIOTotal",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "largeIOTotal"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "largeIOTotal",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IOTotal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lastLogPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "lastLogPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "lastLogPage",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Log Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:latchCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "latchCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "latchCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loAvgDiskIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "loAvgDiskIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "loAvgDiskIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Avg Disk IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loCacheHits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "loCacheHits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "loCacheHits",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache Hits",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loCacheSpinContention",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "loCacheSpinContention"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "loCacheSpinContention",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache Spin Contention",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:loLargeIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "!Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#HConfig",
        "fct-type": "function",
        "title": "loLargeIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "loLargeIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Large IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Lock",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "lock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "lock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lockCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "lockCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "lockCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lockReqs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "lockReqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "lockReqs",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Reqs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logRecord",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "logRecord"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "logRecord",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Record",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logSemReqs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "logSemReqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "logSemReqs",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sem Reqs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:logicLockCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "logicLockCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "logicLockCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:lpLock",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "lpLock"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "lpLock",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:misses",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "misses"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "misses",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:name",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "String",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineBusy",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "name",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netReceived",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "netReceived"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "netReceived",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Received",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netSent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "netSent"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "netSent",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:netServices",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "netServices"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "netServices",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Services",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:numSwitch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitch",
        "fct-type": "function",
        "title": "numSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "numSwitch",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:other",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "other"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "other",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:outstandIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#EngineIO",
        "fct-type": "function",
        "title": "outstandIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "outstandIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:plcLockCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "plcLockCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "plcLockCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Lock Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:promotions",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "promotions"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "promotions",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:requestedIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Disk",
        "fct-type": "function",
        "title": "requestedIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "requestedIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:semCont",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "semCont"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "semCont",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shAddress",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "shAddress"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shAddress",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Address",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shIntent",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "shIntent"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shIntent",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Intent",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "shPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shPage",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "shRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shRow",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shTable",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "shTable"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shTable",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Table",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:shrinks",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
        "fct-type": "function",
        "title": "shrinks"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "shrinks",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:spinContention",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "spinContention"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "spinContention",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Contention",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:splits",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Index",
        "fct-type": "function",
        "title": "splits"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "splits",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:sysmonTime",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "LogInterval",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "sysmonTime"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "sysmonTime",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:task",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Task",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "task"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "task",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:taskSwitch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "[TaskSwitch]",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "function",
        "title": "taskSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "taskSwitch",
        "normalized": "[TaskSwitch]",
        "package": "Sysmon",
        "partial": "Switch",
        "signature": "[TaskSwitch]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:taskSwitchDue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "TaskSwitchDue",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "function",
        "title": "taskSwitchDue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "taskSwitchDue",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Switch Due",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:timeouts",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "timeouts"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "timeouts",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totCache",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Cache",
        "fct-type": "function",
        "title": "totCache"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totCache",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Cache",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totFlush",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#UlcFlush",
        "fct-type": "function",
        "title": "totFlush"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totFlush",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Flush",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totHitsMiss",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "totHitsMiss"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totHitsMiss",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Hits Miss",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totReq",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
        "fct-type": "function",
        "title": "totReq"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totReq",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Req",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totSwitch",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Task",
        "fct-type": "function",
        "title": "totSwitch"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totSwitch",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Switch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totSwitchDue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "totSwitchDue"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totSwitchDue",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Switch Due",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totYlds",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Kernel",
        "fct-type": "function",
        "title": "totYlds"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totYlds",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Ylds",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:totalIO",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Device",
        "fct-type": "function",
        "title": "totalIO"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "totalIO",
        "normalized": "",
        "package": "Sysmon",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:transaction",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Transaction",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Sysmon",
        "fct-type": "function",
        "title": "transaction"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "transaction",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:ulsSemReqs",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "ulsSemReqs"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "ulsSemReqs",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Sem Reqs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:upPage",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "upPage"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "upPage",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Page",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:upRow",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Request",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Lock",
        "fct-type": "function",
        "title": "upRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "upRow",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:updates",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Transaction",
        "fct-type": "function",
        "title": "updates"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "updates",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:utilization",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Double",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "utilization"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "utilization",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:volYields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#TaskSwitchDue",
        "fct-type": "function",
        "title": "volYields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "volYields",
        "normalized": "",
        "package": "Sysmon",
        "partial": "Yields",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:waited",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#Request",
        "fct-type": "function",
        "title": "waited"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "waited",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:wash",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#NamedCache",
        "fct-type": "function",
        "title": "wash"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "wash",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/Sysmon/docs/Database-Sybase-Sysmon-SysmonTypes.html#v:yields",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Database.Sybase.Sysmon.SysmonTypes",
        "fct-package": "Sysmon",
        "fct-signature": "Int",
        "fct-source": "src/Database-Sybase-Sysmon-SysmonTypes.html#CpuYield",
        "fct-type": "function",
        "title": "yields"
      },
      "index": {
        "description": "",
        "hierarchy": "Database Sybase Sysmon SysmonTypes",
        "module": "Database.Sybase.Sysmon.SysmonTypes",
        "name": "yields",
        "normalized": "",
        "package": "Sysmon",
        "partial": "",
        "signature": ""
      }
    }
  }
]