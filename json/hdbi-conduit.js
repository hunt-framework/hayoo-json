[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#",
      "description": {
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "module",
        "fct-source": "src/Data-Conduit-HDBI.html",
        "fct-type": "module",
        "title": "HDBI"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "HDBI",
        "normalized": "",
        "package": "hdbi-conduit",
        "partial": "HDBI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:allocConnection",
      "description": {
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "IO con -\u003e m (ReleaseKey, con)",
        "fct-source": "src/Data-Conduit-HDBI.html#allocConnection",
        "fct-type": "function",
        "title": "allocConnection"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "allocConnection",
        "normalized": "IO a-\u003eb(ReleaseKey,a)",
        "package": "hdbi-conduit",
        "partial": "Connection",
        "signature": "IO con-\u003em(ReleaseKey,con)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:allocStmt",
      "description": {
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "IO stmt -\u003e m (ReleaseKey, stmt)",
        "fct-source": "src/Data-Conduit-HDBI.html#allocStmt",
        "fct-type": "function",
        "title": "allocStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "allocStmt",
        "normalized": "IO a-\u003eb(ReleaseKey,a)",
        "package": "hdbi-conduit",
        "partial": "Stmt",
        "signature": "IO stmt-\u003em(ReleaseKey,stmt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:asSqlVals",
      "description": {
        "fct-descr": "\u003cp\u003eFunction to fuse when no data convertion is needed\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "Conduit [SqlValue] m [SqlValue]",
        "fct-source": "src/Data-Conduit-HDBI.html#asSqlVals",
        "fct-type": "function",
        "title": "asSqlVals"
      },
      "index": {
        "description": "Function to fuse when no data convertion is needed",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "asSqlVals",
        "normalized": "Conduit[SqlValue]a[SqlValue]",
        "package": "hdbi-conduit",
        "partial": "Sql Vals",
        "signature": "Conduit[SqlValue]m[SqlValue]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:asThisType",
      "description": {
        "fct-descr": "\u003cp\u003eTo specify actual stream type by fusing with it. The value of argument is\n not used\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "a -\u003e Conduit a m a",
        "fct-source": "src/Data-Conduit-HDBI.html#asThisType",
        "fct-type": "function",
        "title": "asThisType"
      },
      "index": {
        "description": "To specify actual stream type by fusing with it The value of argument is not used",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "asThisType",
        "normalized": "a-\u003eConduit a b a",
        "package": "hdbi-conduit",
        "partial": "This Type",
        "signature": "a-\u003eConduit a m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:executeStmt",
      "description": {
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e Query -\u003e row -\u003e m (ReleaseKey, stmt)",
        "fct-source": "src/Data-Conduit-HDBI.html#executeStmt",
        "fct-type": "function",
        "title": "executeStmt"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "executeStmt",
        "normalized": "a-\u003eQuery-\u003eb-\u003ec(ReleaseKey,d)",
        "package": "hdbi-conduit",
        "partial": "Stmt",
        "signature": "con-\u003eQuery-\u003erow-\u003em(ReleaseKey,stmt)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:flushAt",
      "description": {
        "fct-descr": "\u003cp\u003eseparate each \u003ccode\u003ei\u003c/code\u003e chunks with Flush\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "i -\u003e Conduit a m (Flush a)",
        "fct-source": "src/Data-Conduit-HDBI.html#flushAt",
        "fct-type": "function",
        "title": "flushAt"
      },
      "index": {
        "description": "separate each chunks with Flush",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "flushAt",
        "normalized": "a-\u003eConduit b c(Flush b)",
        "package": "hdbi-conduit",
        "partial": "At",
        "signature": "i-\u003eConduit a m(Flush a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:flushBy",
      "description": {
        "fct-descr": "\u003cp\u003eThe behaviour is the same as \u003ccode\u003egroupBy\u003c/code\u003e function. Each time when prefix\n return False the conduit yields Flush.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "(a -\u003e a -\u003e Bool) -\u003e Conduit a m (Flush a)",
        "fct-source": "src/Data-Conduit-HDBI.html#flushBy",
        "fct-type": "function",
        "title": "flushBy"
      },
      "index": {
        "description": "The behaviour is the same as groupBy function Each time when prefix return False the conduit yields Flush",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "flushBy",
        "normalized": "(a-\u003ea-\u003eBool)-\u003eConduit a b(Flush a)",
        "package": "hdbi-conduit",
        "partial": "By",
        "signature": "(a-\u003ea-\u003eBool)-\u003eConduit a m(Flush a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAll",
      "description": {
        "fct-descr": "\u003cp\u003eperform \u003ccode\u003eexecuteRow\u003c/code\u003e for each input row\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e Query -\u003e Sink a m ()",
        "fct-source": "src/Data-Conduit-HDBI.html#insertAll",
        "fct-type": "function",
        "title": "insertAll"
      },
      "index": {
        "description": "perform executeRow for each input row",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "insertAll",
        "normalized": "a-\u003eQuery-\u003eSink b c()",
        "package": "hdbi-conduit",
        "partial": "All",
        "signature": "con-\u003eQuery-\u003eSink a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAllCount",
      "description": {
        "fct-descr": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e but also count executed rows\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e Query -\u003e Sink a m count",
        "fct-source": "src/Data-Conduit-HDBI.html#insertAllCount",
        "fct-type": "function",
        "title": "insertAllCount"
      },
      "index": {
        "description": "same as insertAll but also count executed rows",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "insertAllCount",
        "normalized": "a-\u003eQuery-\u003eSink b c d",
        "package": "hdbi-conduit",
        "partial": "All Count",
        "signature": "con-\u003eQuery-\u003eSink a m count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAllTrans",
      "description": {
        "fct-descr": "\u003cp\u003eExecute query on each (Chunk row) and commit on each Flush. The last query\n is always commit, so be carefull.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e Query -\u003e Sink (Flush a) m ()",
        "fct-source": "src/Data-Conduit-HDBI.html#insertAllTrans",
        "fct-type": "function",
        "title": "insertAllTrans"
      },
      "index": {
        "description": "Execute query on each Chunk row and commit on each Flush The last query is always commit so be carefull",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "insertAllTrans",
        "normalized": "a-\u003eQuery-\u003eSink(Flush b)c()",
        "package": "hdbi-conduit",
        "partial": "All Trans",
        "signature": "con-\u003eQuery-\u003eSink(Flush a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:selectAll",
      "description": {
        "fct-descr": "\u003cp\u003eExecute query and stream result\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e Query -\u003e params -\u003e Source m row",
        "fct-source": "src/Data-Conduit-HDBI.html#selectAll",
        "fct-type": "function",
        "title": "selectAll"
      },
      "index": {
        "description": "Execute query and stream result",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "selectAll",
        "normalized": "a-\u003eQuery-\u003eb-\u003eSource c d",
        "package": "hdbi-conduit",
        "partial": "All",
        "signature": "con-\u003eQuery-\u003eparams-\u003eSource m row"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSink",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estatementSinkCount\u003c/a\u003e\u003c/code\u003e but without counting, just return ()\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "(stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink a m ()",
        "fct-source": "src/Data-Conduit-HDBI.html#statementSink",
        "fct-type": "function",
        "title": "statementSink"
      },
      "index": {
        "description": "Same as statementSinkCount but without counting just return",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "statementSink",
        "normalized": "(a-\u003eb-\u003ec())-\u003eIO a-\u003eSink b c()",
        "package": "hdbi-conduit",
        "partial": "Sink",
        "signature": "(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink a m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSinkCount",
      "description": {
        "fct-descr": "\u003cp\u003eExecute action many times with given thread of values, return the count\n of executions\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "(stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink a m count",
        "fct-source": "src/Data-Conduit-HDBI.html#statementSinkCount",
        "fct-type": "function",
        "title": "statementSinkCount"
      },
      "index": {
        "description": "Execute action many times with given thread of values return the count of executions",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "statementSinkCount",
        "normalized": "(a-\u003eb-\u003ec())-\u003eIO a-\u003eSink b c d",
        "package": "hdbi-conduit",
        "partial": "Sink Count",
        "signature": "(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink a m count"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSinkTrans",
      "description": {
        "fct-descr": "\u003cp\u003eExecute each chunk with putter function and commit transaction on each\n flush. The last action is always commit.\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "con -\u003e (stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink (Flush a) m ()",
        "fct-source": "src/Data-Conduit-HDBI.html#statementSinkTrans",
        "fct-type": "function",
        "title": "statementSinkTrans"
      },
      "index": {
        "description": "Execute each chunk with putter function and commit transaction on each flush The last action is always commit",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "statementSinkTrans",
        "normalized": "a-\u003e(b-\u003ec-\u003ed())-\u003eIO b-\u003eSink(Flush c)d()",
        "package": "hdbi-conduit",
        "partial": "Sink Trans",
        "signature": "con-\u003e(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink(Flush a)m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSource",
      "description": {
        "fct-descr": "\u003cp\u003eGet all values from the statement until action return ''Just a''\n\u003c/p\u003e",
        "fct-module": "Data.Conduit.HDBI",
        "fct-package": "hdbi-conduit",
        "fct-signature": "(stmt -\u003e m (Maybe a)) -\u003e IO stmt -\u003e Source m a",
        "fct-source": "src/Data-Conduit-HDBI.html#statementSource",
        "fct-type": "function",
        "title": "statementSource"
      },
      "index": {
        "description": "Get all values from the statement until action return Just",
        "hierarchy": "Data Conduit HDBI",
        "module": "Data.Conduit.HDBI",
        "name": "statementSource",
        "normalized": "(a-\u003eb(Maybe c))-\u003eIO a-\u003eSource b c",
        "package": "hdbi-conduit",
        "partial": "Source",
        "signature": "(stmt-\u003em(Maybe a))-\u003eIO stmt-\u003eSource m a"
      }
    }
  }
]