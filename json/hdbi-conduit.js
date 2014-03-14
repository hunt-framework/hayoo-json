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
        "word": "hdbi-conduit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.HDBI",
          "name": "HDBI",
          "package": "hdbi-conduit",
          "source": "src/Data-Conduit-HDBI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "HDBI",
          "package": "hdbi-conduit",
          "partial": "HDBI",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.HDBI",
          "name": "allocConnection",
          "package": "hdbi-conduit",
          "signature": "IO con -\u003e m (ReleaseKey, con)",
          "source": "src/Data-Conduit-HDBI.html#allocConnection",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "allocConnection",
          "normalized": "IO a-\u003eb(ReleaseKey,a)",
          "package": "hdbi-conduit",
          "partial": "Connection",
          "signature": "IO con-\u003em(ReleaseKey,con)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:allocConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.HDBI",
          "name": "allocStmt",
          "package": "hdbi-conduit",
          "signature": "IO stmt -\u003e m (ReleaseKey, stmt)",
          "source": "src/Data-Conduit-HDBI.html#allocStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "allocStmt",
          "normalized": "IO a-\u003eb(ReleaseKey,a)",
          "package": "hdbi-conduit",
          "partial": "Stmt",
          "signature": "IO stmt-\u003em(ReleaseKey,stmt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:allocStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to fuse when no data convertion is needed\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "asSqlVals",
          "package": "hdbi-conduit",
          "signature": "Conduit [SqlValue] m [SqlValue]",
          "source": "src/Data-Conduit-HDBI.html#asSqlVals",
          "type": "function"
        },
        "index": {
          "description": "Function to fuse when no data convertion is needed",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "asSqlVals",
          "normalized": "Conduit[SqlValue]a[SqlValue]",
          "package": "hdbi-conduit",
          "partial": "Sql Vals",
          "signature": "Conduit[SqlValue]m[SqlValue]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:asSqlVals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo specify actual stream type by fusing with it. The value of argument is\n not used\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "asThisType",
          "package": "hdbi-conduit",
          "signature": "a -\u003e Conduit a m a",
          "source": "src/Data-Conduit-HDBI.html#asThisType",
          "type": "function"
        },
        "index": {
          "description": "To specify actual stream type by fusing with it The value of argument is not used",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "asThisType",
          "normalized": "a-\u003eConduit a b a",
          "package": "hdbi-conduit",
          "partial": "This Type",
          "signature": "a-\u003eConduit a m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:asThisType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Conduit.HDBI",
          "name": "executeStmt",
          "package": "hdbi-conduit",
          "signature": "con -\u003e Query -\u003e row -\u003e m (ReleaseKey, stmt)",
          "source": "src/Data-Conduit-HDBI.html#executeStmt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "executeStmt",
          "normalized": "a-\u003eQuery-\u003eb-\u003ec(ReleaseKey,d)",
          "package": "hdbi-conduit",
          "partial": "Stmt",
          "signature": "con-\u003eQuery-\u003erow-\u003em(ReleaseKey,stmt)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:executeStmt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eseparate each \u003ccode\u003ei\u003c/code\u003e chunks with Flush\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "flushAt",
          "package": "hdbi-conduit",
          "signature": "i -\u003e Conduit a m (Flush a)",
          "source": "src/Data-Conduit-HDBI.html#flushAt",
          "type": "function"
        },
        "index": {
          "description": "separate each chunks with Flush",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "flushAt",
          "normalized": "a-\u003eConduit b c(Flush b)",
          "package": "hdbi-conduit",
          "partial": "At",
          "signature": "i-\u003eConduit a m(Flush a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:flushAt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe behaviour is the same as \u003ccode\u003egroupBy\u003c/code\u003e function. Each time when prefix\n return False the conduit yields Flush.\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "flushBy",
          "package": "hdbi-conduit",
          "signature": "(a -\u003e a -\u003e Bool) -\u003e Conduit a m (Flush a)",
          "source": "src/Data-Conduit-HDBI.html#flushBy",
          "type": "function"
        },
        "index": {
          "description": "The behaviour is the same as groupBy function Each time when prefix return False the conduit yields Flush",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "flushBy",
          "normalized": "(a-\u003ea-\u003eBool)-\u003eConduit a b(Flush a)",
          "package": "hdbi-conduit",
          "partial": "By",
          "signature": "(a-\u003ea-\u003eBool)-\u003eConduit a m(Flush a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:flushBy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform \u003ccode\u003eexecuteRow\u003c/code\u003e for each input row\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "insertAll",
          "package": "hdbi-conduit",
          "signature": "con -\u003e Query -\u003e Sink a m ()",
          "source": "src/Data-Conduit-HDBI.html#insertAll",
          "type": "function"
        },
        "index": {
          "description": "perform executeRow for each input row",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "insertAll",
          "normalized": "a-\u003eQuery-\u003eSink b c()",
          "package": "hdbi-conduit",
          "partial": "All",
          "signature": "con-\u003eQuery-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esame as \u003ccode\u003e\u003ca\u003einsertAll\u003c/a\u003e\u003c/code\u003e but also count executed rows\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "insertAllCount",
          "package": "hdbi-conduit",
          "signature": "con -\u003e Query -\u003e Sink a m count",
          "source": "src/Data-Conduit-HDBI.html#insertAllCount",
          "type": "function"
        },
        "index": {
          "description": "same as insertAll but also count executed rows",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "insertAllCount",
          "normalized": "a-\u003eQuery-\u003eSink b c d",
          "package": "hdbi-conduit",
          "partial": "All Count",
          "signature": "con-\u003eQuery-\u003eSink a m count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAllCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute query on each (Chunk row) and commit on each Flush. The last query\n is always commit, so be carefull.\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "insertAllTrans",
          "package": "hdbi-conduit",
          "signature": "con -\u003e Query -\u003e Sink (Flush a) m ()",
          "source": "src/Data-Conduit-HDBI.html#insertAllTrans",
          "type": "function"
        },
        "index": {
          "description": "Execute query on each Chunk row and commit on each Flush The last query is always commit so be carefull",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "insertAllTrans",
          "normalized": "a-\u003eQuery-\u003eSink(Flush b)c()",
          "package": "hdbi-conduit",
          "partial": "All Trans",
          "signature": "con-\u003eQuery-\u003eSink(Flush a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:insertAllTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute query and stream result\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "selectAll",
          "package": "hdbi-conduit",
          "signature": "con -\u003e Query -\u003e params -\u003e Source m row",
          "source": "src/Data-Conduit-HDBI.html#selectAll",
          "type": "function"
        },
        "index": {
          "description": "Execute query and stream result",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "selectAll",
          "normalized": "a-\u003eQuery-\u003eb-\u003eSource c d",
          "package": "hdbi-conduit",
          "partial": "All",
          "signature": "con-\u003eQuery-\u003eparams-\u003eSource m row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:selectAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003estatementSinkCount\u003c/a\u003e\u003c/code\u003e but without counting, just return ()\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "statementSink",
          "package": "hdbi-conduit",
          "signature": "(stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink a m ()",
          "source": "src/Data-Conduit-HDBI.html#statementSink",
          "type": "function"
        },
        "index": {
          "description": "Same as statementSinkCount but without counting just return",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "statementSink",
          "normalized": "(a-\u003eb-\u003ec())-\u003eIO a-\u003eSink b c()",
          "package": "hdbi-conduit",
          "partial": "Sink",
          "signature": "(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink a m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute action many times with given thread of values, return the count\n of executions\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "statementSinkCount",
          "package": "hdbi-conduit",
          "signature": "(stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink a m count",
          "source": "src/Data-Conduit-HDBI.html#statementSinkCount",
          "type": "function"
        },
        "index": {
          "description": "Execute action many times with given thread of values return the count of executions",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "statementSinkCount",
          "normalized": "(a-\u003eb-\u003ec())-\u003eIO a-\u003eSink b c d",
          "package": "hdbi-conduit",
          "partial": "Sink Count",
          "signature": "(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink a m count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSinkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute each chunk with putter function and commit transaction on each\n flush. The last action is always commit.\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "statementSinkTrans",
          "package": "hdbi-conduit",
          "signature": "con -\u003e (stmt -\u003e a -\u003e m ()) -\u003e IO stmt -\u003e Sink (Flush a) m ()",
          "source": "src/Data-Conduit-HDBI.html#statementSinkTrans",
          "type": "function"
        },
        "index": {
          "description": "Execute each chunk with putter function and commit transaction on each flush The last action is always commit",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "statementSinkTrans",
          "normalized": "a-\u003e(b-\u003ec-\u003ed())-\u003eIO b-\u003eSink(Flush c)d()",
          "package": "hdbi-conduit",
          "partial": "Sink Trans",
          "signature": "con-\u003e(stmt-\u003ea-\u003em())-\u003eIO stmt-\u003eSink(Flush a)m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSinkTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all values from the statement until action return ''Just a''\n\u003c/p\u003e",
          "module": "Data.Conduit.HDBI",
          "name": "statementSource",
          "package": "hdbi-conduit",
          "signature": "(stmt -\u003e m (Maybe a)) -\u003e IO stmt -\u003e Source m a",
          "source": "src/Data-Conduit-HDBI.html#statementSource",
          "type": "function"
        },
        "index": {
          "description": "Get all values from the statement until action return Just",
          "hierarchy": "Data Conduit HDBI",
          "module": "Data.Conduit.HDBI",
          "name": "statementSource",
          "normalized": "(a-\u003eb(Maybe c))-\u003eIO a-\u003eSource b c",
          "package": "hdbi-conduit",
          "partial": "Source",
          "signature": "(stmt-\u003em(Maybe a))-\u003eIO stmt-\u003eSource m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hdbi-conduit/docs/Data-Conduit-HDBI.html#v:statementSource"
      }
    }
  ]
]