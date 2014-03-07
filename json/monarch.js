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
        "word": "monarch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide TokyoTyrant mock.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Monarch.Mock",
          "name": "Mock",
          "package": "monarch",
          "source": "src/Database-Monarch-Mock.html",
          "type": "module"
        },
        "index": {
          "description": "Provide TokyoTyrant mock",
          "hierarchy": "Database Monarch Mock",
          "module": "Database.Monarch.Mock",
          "name": "Mock",
          "package": "monarch",
          "partial": "Mock",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch-Mock.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection with TokyoTyrant\n\u003c/p\u003e",
          "module": "Database.Monarch.Mock",
          "name": "MockDB",
          "package": "monarch",
          "source": "src/Database-Monarch-Mock-Types.html#MockDB",
          "type": "data"
        },
        "index": {
          "description": "Connection with TokyoTyrant",
          "hierarchy": "Database Monarch Mock",
          "module": "Database.Monarch.Mock",
          "name": "MockDB",
          "package": "monarch",
          "partial": "Mock DB",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch-Mock.html#t:MockDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Mock monad transformer to provide TokyoTyrant access.\n\u003c/p\u003e",
          "module": "Database.Monarch.Mock",
          "name": "MockT",
          "package": "monarch",
          "source": "src/Database-Monarch-Mock-Types.html#MockT",
          "type": "data"
        },
        "index": {
          "description": "The Mock monad transformer to provide TokyoTyrant access",
          "hierarchy": "Database Monarch Mock",
          "module": "Database.Monarch.Mock",
          "name": "MockT",
          "package": "monarch",
          "partial": "Mock",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch-Mock.html#t:MockT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate mock DB\n\u003c/p\u003e",
          "module": "Database.Monarch.Mock",
          "name": "newMockDB",
          "package": "monarch",
          "signature": "IO (TVar MockDB)",
          "source": "src/Database-Monarch-Mock-Types.html#newMockDB",
          "type": "function"
        },
        "index": {
          "description": "Create mock DB",
          "hierarchy": "Database Monarch Mock",
          "module": "Database.Monarch.Mock",
          "name": "newMockDB",
          "package": "monarch",
          "partial": "Mock DB",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch-Mock.html#v:newMockDB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun Mock with TokyoTyrant at target host and port.\n\u003c/p\u003e",
          "module": "Database.Monarch.Mock",
          "name": "runMock",
          "package": "monarch",
          "signature": "MockT m a -\u003e TVar MockDB -\u003e m (Either Code a)",
          "source": "src/Database-Monarch-Mock-Types.html#runMock",
          "type": "function"
        },
        "index": {
          "description": "Run Mock with TokyoTyrant at target host and port",
          "hierarchy": "Database Monarch Mock",
          "module": "Database.Monarch.Mock",
          "name": "runMock",
          "normalized": "MockT a b-\u003eTVar MockDB-\u003ea(Either Code b)",
          "package": "monarch",
          "partial": "Mock",
          "signature": "MockT m a-\u003eTVar MockDB-\u003em(Either Code a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch-Mock.html#v:runMock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide TokyoTyrant monadic access interface.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.Monarch",
          "name": "Monarch",
          "package": "monarch",
          "source": "src/Database-Monarch.html",
          "type": "module"
        },
        "index": {
          "description": "Provide TokyoTyrant monadic access interface",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "Monarch",
          "package": "monarch",
          "partial": "Monarch",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eError code\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "Code",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "data"
        },
        "index": {
          "description": "Error code",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "Code",
          "package": "monarch",
          "partial": "Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:Code"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection with TokyoTyrant\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "Connection",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection with TokyoTyrant",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "Connection",
          "package": "monarch",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection pool with TokyoTyrant\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "ConnectionPool",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#ConnectionPool",
          "type": "type"
        },
        "index": {
          "description": "Connection pool with TokyoTyrant",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ConnectionPool",
          "package": "monarch",
          "partial": "Connection Pool",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:ConnectionPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for scripting extension\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "ExtOption",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#ExtOption",
          "type": "data"
        },
        "index": {
          "description": "Options for scripting extension",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ExtOption",
          "package": "monarch",
          "partial": "Ext Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:ExtOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for miscellaneous operation\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "MiscOption",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#MiscOption",
          "type": "data"
        },
        "index": {
          "description": "Options for miscellaneous operation",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "MiscOption",
          "package": "monarch",
          "partial": "Misc Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:MiscOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad Monarch interfaces\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "MonadMonarch",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#MonadMonarch",
          "type": "class"
        },
        "index": {
          "description": "Monad Monarch interfaces",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "MonadMonarch",
          "package": "monarch",
          "partial": "Monad Monarch",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:MonadMonarch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIO Specialized\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "Monarch",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#Monarch",
          "type": "type"
        },
        "index": {
          "description": "IO Specialized",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "Monarch",
          "package": "monarch",
          "partial": "Monarch",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:Monarch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Monarch monad transformer to provide TokyoTyrant access.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "MonarchT",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#MonarchT",
          "type": "data"
        },
        "index": {
          "description": "The Monarch monad transformer to provide TokyoTyrant access",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "MonarchT",
          "package": "monarch",
          "partial": "Monarch",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:MonarchT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptions for restore\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "RestoreOption",
          "package": "monarch",
          "source": "src/Database-Monarch-Types.html#RestoreOption",
          "type": "data"
        },
        "index": {
          "description": "Options for restore",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "RestoreOption",
          "package": "monarch",
          "partial": "Restore Option",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#t:RestoreOption"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "ConnectionRefused",
          "package": "monarch",
          "signature": "ConnectionRefused",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ConnectionRefused",
          "package": "monarch",
          "partial": "Connection Refused",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:ConnectionRefused"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003econsistency checking\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "ConsistencyChecking",
          "package": "monarch",
          "signature": "ConsistencyChecking",
          "source": "src/Database-Monarch-Types.html#RestoreOption",
          "type": "function"
        },
        "index": {
          "description": "consistency checking",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ConsistencyChecking",
          "package": "monarch",
          "partial": "Consistency Checking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:ConsistencyChecking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "ExistingRecord",
          "package": "monarch",
          "signature": "ExistingRecord",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ExistingRecord",
          "package": "monarch",
          "partial": "Existing Record",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:ExistingRecord"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eglobal locking\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "GlobalLocking",
          "package": "monarch",
          "signature": "GlobalLocking",
          "source": "src/Database-Monarch-Types.html#ExtOption",
          "type": "function"
        },
        "index": {
          "description": "global locking",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "GlobalLocking",
          "package": "monarch",
          "partial": "Global Locking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:GlobalLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "HostNotFound",
          "package": "monarch",
          "signature": "HostNotFound",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "HostNotFound",
          "package": "monarch",
          "partial": "Host Not Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:HostNotFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "InvalidOperation",
          "package": "monarch",
          "signature": "InvalidOperation",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "InvalidOperation",
          "package": "monarch",
          "partial": "Invalid Operation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:InvalidOperation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "MiscellaneousError",
          "package": "monarch",
          "signature": "MiscellaneousError",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "MiscellaneousError",
          "package": "monarch",
          "partial": "Miscellaneous Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:MiscellaneousError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "NoRecordFound",
          "package": "monarch",
          "signature": "NoRecordFound",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "NoRecordFound",
          "package": "monarch",
          "partial": "No Record Found",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:NoRecordFound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eomission of update log\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "NoUpdateLog",
          "package": "monarch",
          "signature": "NoUpdateLog",
          "source": "src/Database-Monarch-Types.html#MiscOption",
          "type": "function"
        },
        "index": {
          "description": "omission of update log",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "NoUpdateLog",
          "package": "monarch",
          "partial": "No Update Log",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:NoUpdateLog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "ReceiveError",
          "package": "monarch",
          "signature": "ReceiveError",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ReceiveError",
          "package": "monarch",
          "partial": "Receive Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:ReceiveError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003erecord locking\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "RecordLocking",
          "package": "monarch",
          "signature": "RecordLocking",
          "source": "src/Database-Monarch-Types.html#ExtOption",
          "type": "function"
        },
        "index": {
          "description": "record locking",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "RecordLocking",
          "package": "monarch",
          "partial": "Record Locking",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:RecordLocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "SendError",
          "package": "monarch",
          "signature": "SendError",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "SendError",
          "package": "monarch",
          "partial": "Send Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:SendError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.Monarch",
          "name": "Success",
          "package": "monarch",
          "signature": "Success",
          "source": "src/Database-Monarch-Types.html#Code",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "Success",
          "package": "monarch",
          "partial": "Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:Success"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a real number to a record.\n   If the corresponding record exists, the value is treated as a real number and is added to.\n   If no record corresponds, a new record of the additional value is stored.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "addDouble",
          "package": "monarch",
          "signature": "addDouble",
          "source": "src/Database-Monarch-Types.html#addDouble",
          "type": "method"
        },
        "index": {
          "description": "Add real number to record If the corresponding record exists the value is treated as real number and is added to If no record corresponds new record of the additional value is stored",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "addDouble",
          "package": "monarch",
          "partial": "Double",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:addDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an integer to a record.\n   If the corresponding record exists, the value is treated as an integer and is added to.\n   If no record corresponds, a new record of the additional value is stored.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "addInt",
          "package": "monarch",
          "signature": "addInt",
          "source": "src/Database-Monarch-Types.html#addInt",
          "type": "method"
        },
        "index": {
          "description": "Add an integer to record If the corresponding record exists the value is treated as an integer and is added to If no record corresponds new record of the additional value is stored",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "addInt",
          "package": "monarch",
          "partial": "Int",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:addInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy the database file.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "copy",
          "package": "monarch",
          "signature": "copy",
          "source": "src/Database-Monarch-Types.html#copy",
          "type": "method"
        },
        "index": {
          "description": "Copy the database file",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "copy",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:copy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function of the script language extension.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "ext",
          "package": "monarch",
          "signature": "ext",
          "source": "src/Database-Monarch-Types.html#ext",
          "type": "method"
        },
        "index": {
          "description": "Call function of the script language extension",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "ext",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:ext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet forward matching keys.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "forwardMatchingKeys",
          "package": "monarch",
          "signature": "forwardMatchingKeys",
          "source": "src/Database-Monarch-Types.html#forwardMatchingKeys",
          "type": "method"
        },
        "index": {
          "description": "Get forward matching keys",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "forwardMatchingKeys",
          "package": "monarch",
          "partial": "Matching Keys",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:forwardMatchingKeys"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve a record.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "get",
          "package": "monarch",
          "signature": "get",
          "source": "src/Database-Monarch-Types.html#get",
          "type": "method"
        },
        "index": {
          "description": "Retrieve record",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "get",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the iterator.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "iterInit",
          "package": "monarch",
          "signature": "m ()",
          "source": "src/Database-Monarch-Types.html#iterInit",
          "type": "method"
        },
        "index": {
          "description": "Initialize the iterator",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "iterInit",
          "normalized": "a()",
          "package": "monarch",
          "partial": "Init",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:iterInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the next key of the iterator.\n   The iterator can be updated by multiple connections and then it is not assured that every record is traversed.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "iterNext",
          "package": "monarch",
          "signature": "m (Maybe ByteString)",
          "source": "src/Database-Monarch-Types.html#iterNext",
          "type": "method"
        },
        "index": {
          "description": "Get the next key of the iterator The iterator can be updated by multiple connections and then it is not assured that every record is traversed",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "iterNext",
          "package": "monarch",
          "partial": "Next",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:iterNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a versatile function for miscellaneous operations.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "misc",
          "package": "monarch",
          "signature": "misc",
          "source": "src/Database-Monarch-Types.html#misc",
          "type": "method"
        },
        "index": {
          "description": "Call versatile function for miscellaneous operations",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "misc",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:misc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRetrieve records.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "multipleGet",
          "package": "monarch",
          "signature": "multipleGet",
          "source": "src/Database-Monarch-Types.html#multipleGet",
          "type": "method"
        },
        "index": {
          "description": "Retrieve records",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "multipleGet",
          "package": "monarch",
          "partial": "Get",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:multipleGet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove records.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "multipleOut",
          "package": "monarch",
          "signature": "multipleOut",
          "source": "src/Database-Monarch-Types.html#multipleOut",
          "type": "method"
        },
        "index": {
          "description": "Remove records",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "multipleOut",
          "package": "monarch",
          "partial": "Out",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:multipleOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore records.\n   If a record with the same key exists in the database,\n   it is overwritten.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "multiplePut",
          "package": "monarch",
          "signature": "multiplePut",
          "source": "src/Database-Monarch-Types.html#multiplePut",
          "type": "method"
        },
        "index": {
          "description": "Store records If record with the same key exists in the database it is overwritten",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "multiplePut",
          "package": "monarch",
          "partial": "Put",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:multiplePut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptimize the storage.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "optimize",
          "package": "monarch",
          "signature": "optimize",
          "source": "src/Database-Monarch-Types.html#optimize",
          "type": "method"
        },
        "index": {
          "description": "Optimize the storage",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "optimize",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:optimize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a record.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "out",
          "package": "monarch",
          "signature": "out",
          "source": "src/Database-Monarch-Types.html#out",
          "type": "method"
        },
        "index": {
          "description": "Remove record",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "out",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:out"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a record.\n   If a record with the same key exists in the database,\n   it is overwritten.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "put",
          "package": "monarch",
          "signature": "put",
          "source": "src/Database-Monarch-Types.html#put",
          "type": "method"
        },
        "index": {
          "description": "Store record If record with the same key exists in the database it is overwritten",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "put",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a value at the end of the existing record.\n   If there is no corresponding record, a new record is created.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "putCat",
          "package": "monarch",
          "signature": "putCat",
          "source": "src/Database-Monarch-Types.html#putCat",
          "type": "method"
        },
        "index": {
          "description": "Concatenate value at the end of the existing record If there is no corresponding record new record is created",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "putCat",
          "package": "monarch",
          "partial": "Cat",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:putCat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a new record.\n   If a record with the same key exists in the database,\n   this function has no effect.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "putKeep",
          "package": "monarch",
          "signature": "putKeep",
          "source": "src/Database-Monarch-Types.html#putKeep",
          "type": "method"
        },
        "index": {
          "description": "Store new record If record with the same key exists in the database this function has no effect",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "putKeep",
          "package": "monarch",
          "partial": "Keep",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:putKeep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStore a record without response.\n   If a record with the same key exists in the database, it is overwritten.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "putNoResponse",
          "package": "monarch",
          "signature": "putNoResponse",
          "source": "src/Database-Monarch-Types.html#putNoResponse",
          "type": "method"
        },
        "index": {
          "description": "Store record without response If record with the same key exists in the database it is overwritten",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "putNoResponse",
          "package": "monarch",
          "partial": "No Response",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:putNoResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConcatenate a value at the end of the existing record and shift it to the left.\n   If there is no corresponding record, a new record is created.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "putShiftLeft",
          "package": "monarch",
          "signature": "putShiftLeft",
          "source": "src/Database-Monarch-Types.html#putShiftLeft",
          "type": "method"
        },
        "index": {
          "description": "Concatenate value at the end of the existing record and shift it to the left If there is no corresponding record new record is created",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "putShiftLeft",
          "package": "monarch",
          "partial": "Shift Left",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:putShiftLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of records.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "recordNum",
          "package": "monarch",
          "signature": "m Int64",
          "source": "src/Database-Monarch-Types.html#recordNum",
          "type": "method"
        },
        "index": {
          "description": "Get the number of records",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "recordNum",
          "package": "monarch",
          "partial": "Num",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:recordNum"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore the database file from the update log.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "restore",
          "package": "monarch",
          "signature": "restore",
          "source": "src/Database-Monarch-Types.html#restore",
          "type": "method"
        },
        "index": {
          "description": "Restore the database file from the update log",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "restore",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun action with a connection.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "runMonarchConn",
          "package": "monarch",
          "signature": "MonarchT m a-\u003e Connection-\u003e m (Either Code a)",
          "type": "function"
        },
        "index": {
          "description": "Run action with connection",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "runMonarchConn",
          "normalized": "MonarchT a b-\u003eConnection-\u003ea(Either Code b)",
          "package": "monarch",
          "partial": "Monarch Conn",
          "signature": "MonarchT m a-\u003eConnection-\u003em(Either Code a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:runMonarchConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun action with a unused connection from the pool.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "runMonarchPool",
          "package": "monarch",
          "signature": "MonarchT m a-\u003e ConnectionPool-\u003e m (Either Code a)",
          "type": "function"
        },
        "index": {
          "description": "Run action with unused connection from the pool",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "runMonarchPool",
          "normalized": "MonarchT a b-\u003eConnectionPool-\u003ea(Either Code b)",
          "package": "monarch",
          "partial": "Monarch Pool",
          "signature": "MonarchT m a-\u003eConnectionPool-\u003em(Either Code a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:runMonarchPool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the replication master.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "setMaster",
          "package": "monarch",
          "signature": "setMaster",
          "source": "src/Database-Monarch-Types.html#setMaster",
          "type": "method"
        },
        "index": {
          "description": "Set the replication master",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "setMaster",
          "package": "monarch",
          "partial": "Master",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:setMaster"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the database.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "size",
          "package": "monarch",
          "signature": "m Int64",
          "source": "src/Database-Monarch-Types.html#size",
          "type": "method"
        },
        "index": {
          "description": "Get the size of the database",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "size",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the status string of the database.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "status",
          "package": "monarch",
          "signature": "m ByteString",
          "source": "src/Database-Monarch-Types.html#status",
          "type": "method"
        },
        "index": {
          "description": "Get the status string of the database",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "status",
          "package": "monarch",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSynchronize updated contents with the file and the device.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "sync",
          "package": "monarch",
          "signature": "m ()",
          "source": "src/Database-Monarch-Types.html#sync",
          "type": "method"
        },
        "index": {
          "description": "Synchronize updated contents with the file and the device",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "sync",
          "normalized": "a()",
          "package": "monarch",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:sync"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the size of the value of a record.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "valueSize",
          "package": "monarch",
          "signature": "valueSize",
          "source": "src/Database-Monarch-Types.html#valueSize",
          "type": "method"
        },
        "index": {
          "description": "Get the size of the value of record",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "valueSize",
          "package": "monarch",
          "partial": "Size",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:valueSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove all records.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "vanish",
          "package": "monarch",
          "signature": "m ()",
          "source": "src/Database-Monarch-Types.html#vanish",
          "type": "method"
        },
        "index": {
          "description": "Remove all records",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "vanish",
          "normalized": "a()",
          "package": "monarch",
          "signature": "m()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:vanish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TokyoTyrant connection and run the given action.\n Don't use the given \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e outside the action.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "withMonarchConn",
          "package": "monarch",
          "signature": "String-\u003e Int-\u003e (Connection -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Create TokyoTyrant connection and run the given action Don use the given Connection outside the action",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "withMonarchConn",
          "normalized": "String-\u003eInt-\u003e(Connection-\u003ea b)-\u003ea b",
          "package": "monarch",
          "partial": "Monarch Conn",
          "signature": "String-\u003eInt-\u003e(Connection-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:withMonarchConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a TokyoTyrant connection pool and run the given action.\n Don't use the given \u003ccode\u003e\u003ca\u003eConnectionPool\u003c/a\u003e\u003c/code\u003e outside the action.\n\u003c/p\u003e",
          "module": "Database.Monarch",
          "name": "withMonarchPool",
          "package": "monarch",
          "signature": "String-\u003e Int-\u003e Int-\u003e (ConnectionPool -\u003e m a)-\u003e m a",
          "type": "function"
        },
        "index": {
          "description": "Create TokyoTyrant connection pool and run the given action Don use the given ConnectionPool outside the action",
          "hierarchy": "Database Monarch",
          "module": "Database.Monarch",
          "name": "withMonarchPool",
          "normalized": "String-\u003eInt-\u003eInt-\u003e(ConnectionPool-\u003ea b)-\u003ea b",
          "package": "monarch",
          "partial": "Monarch Pool",
          "signature": "String-\u003eInt-\u003eInt-\u003e(ConnectionPool-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monarch/docs/Database-Monarch.html#v:withMonarchPool"
      }
    }
  ]
]