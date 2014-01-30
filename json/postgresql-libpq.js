[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a binding to libpq: the C application programmer's\n interface to PostgreSQL. libpq is a set of library functions that\n allow client programs to pass queries to the PostgreSQL backend\n server and to receive the results of these queries.\n\u003c/p\u003e\u003cp\u003eThis is intended to be a very low-level interface to libpq.  It\n provides memory management and a somewhat more consistent interface\n to error conditions.  Application code should typically use a\n higher-level PostgreSQL binding.\n\u003c/p\u003e\u003cp\u003eThis interface is not safe,  because libpq unfortunately conflates\n explicit disconnects with memory management.   A use-after-free memory\n fault will result if a connection is used in any way after \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e is\n called.  This will likely cause a segfault,  or return an error if memory\n has not yet been reused.  Other more bizarre behaviors are possible,\n though unlikely by chance.  Higher-level bindings need to be aware of\n this issue and need to ensure that application code cannot cause the\n functions in this module to be called on an \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003eed connection.\n\u003c/p\u003e\u003cp\u003eOne possibility is to represent a connection in a higher-level interface\n as \u003ccode\u003eMVar (Maybe Connection)\u003c/code\u003e, using \u003ccode\u003eNothing\u003c/code\u003e to represent an explicitly\n disconnected state.  This was done in an earlier incarnation of this\n library,  however this was removed because a higher level binding is\n likely to use a similar construct to deal with other issues.  Thus\n incorporating that in this module results in extra layers of indirection\n for relatively little functionality.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "module",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html",
        "fct-type": "module",
        "title": "LibPQ"
      },
      "index": {
        "description": "This is binding to libpq the application programmer interface to PostgreSQL libpq is set of library functions that allow client programs to pass queries to the PostgreSQL backend server and to receive the results of these queries This is intended to be very low-level interface to libpq It provides memory management and somewhat more consistent interface to error conditions Application code should typically use higher-level PostgreSQL binding This interface is not safe because libpq unfortunately conflates explicit disconnects with memory management use-after-free memory fault will result if connection is used in any way after finish is called This will likely cause segfault or return an error if memory has not yet been reused Other more bizarre behaviors are possible though unlikely by chance Higher-level bindings need to be aware of this issue and need to ensure that application code cannot cause the functions in this module to be called on an finish ed connection One possibility is to represent connection in higher-level interface as MVar Maybe Connection using Nothing to represent an explicitly disconnected state This was done in an earlier incarnation of this library however this was removed because higher level binding is likely to use similar construct to deal with other issues Thus incorporating that in this module results in extra layers of indirection for relatively little functionality",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "LibPQ",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Lib PQ",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Cancel",
      "description": {
        "fct-descr": "\u003cp\u003eContains the information needed to cancel a command issued\n through a particular database connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Cancel",
        "fct-type": "data",
        "title": "Cancel"
      },
      "index": {
        "description": "Contains the information needed to cancel command issued through particular database connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Cancel",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Cancel",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Column",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Column",
        "fct-type": "newtype",
        "title": "Column"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Column",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Column",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:ConnStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "data",
        "title": "ConnStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnStatus",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Conn Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Connection",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e encapsulates a connection to the backend.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Connection",
        "fct-type": "data",
        "title": "Connection"
      },
      "index": {
        "description": "Connection encapsulates connection to the backend",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Connection",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:CopyInResult",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
        "fct-type": "data",
        "title": "CopyInResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyInResult",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy In Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:CopyOutResult",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
        "fct-type": "data",
        "title": "CopyOutResult"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOutResult",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:ExecStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "data",
        "title": "ExecStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ExecStatus",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Exec Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:FieldCode",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "data",
        "title": "FieldCode"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FieldCode",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Field Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:FlushStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
        "fct-type": "data",
        "title": "FlushStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FlushStatus",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Flush Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Format",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Format",
        "fct-type": "data",
        "title": "Format"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Format",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Format",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:LoFd",
      "description": {
        "fct-descr": "\u003cp\u003eLoFd is a Large Object (pseudo) File Descriptor.  It is understood by\n libpq but not by operating system calls.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#LoFd",
        "fct-type": "newtype",
        "title": "LoFd"
      },
      "index": {
        "description": "LoFd is Large Object pseudo File Descriptor It is understood by libpq but not by operating system calls",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "LoFd",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Lo Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Notify",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Notify",
        "fct-type": "data",
        "title": "Notify"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Notify",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Notify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Oid",
        "fct-type": "newtype",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:PollingStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
        "fct-type": "data",
        "title": "PollingStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "PollingStatus",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Polling Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Result",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e encapsulates the result of a query (or more precisely,\n of a single SQL command --- a query string given to \u003ccode\u003e\u003ca\u003esendQuery\u003c/a\u003e\u003c/code\u003e can\n contain multiple commands and thus return multiple instances of\n \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "Result encapsulates the result of query or more precisely of single SQL command query string given to sendQuery can contain multiple commands and thus return multiple instances of Result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Result",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Row",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "newtype",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Row",
        "fct-type": "newtype",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Row",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:TransactionStatus",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "data",
        "title": "TransactionStatus"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransactionStatus",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Transaction Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Verbosity",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "data",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
        "fct-type": "data",
        "title": "Verbosity"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Verbosity",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Verbosity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:BadResponse",
      "description": {
        "fct-descr": "\u003cp\u003eThe server's response was not understood.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "BadResponse",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "BadResponse"
      },
      "index": {
        "description": "The server response was not understood",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "BadResponse",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Bad Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Binary",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Binary",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Format",
        "fct-type": "function",
        "title": "Binary"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Binary",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Binary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Col",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Col CInt",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Column",
        "fct-type": "function",
        "title": "Col"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Col",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Col",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CommandOk",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful completion of a\n command returning no data.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CommandOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "CommandOk"
      },
      "index": {
        "description": "Successful completion of command returning no data",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CommandOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Command Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionAuthOk",
      "description": {
        "fct-descr": "\u003cp\u003eReceived authentication;\n waiting for backend start-up to\n finish.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionAuthOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionAuthOk"
      },
      "index": {
        "description": "Received authentication waiting for backend start-up to finish",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionAuthOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Auth Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionAwaitingResponse",
      "description": {
        "fct-descr": "\u003cp\u003eWaiting for a response from the server.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionAwaitingResponse",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionAwaitingResponse"
      },
      "index": {
        "description": "Waiting for response from the server",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionAwaitingResponse",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Awaiting Response",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionBad",
      "description": {
        "fct-descr": "\u003cp\u003eThe connection procedure has failed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionBad",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionBad"
      },
      "index": {
        "description": "The connection procedure has failed",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionBad",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Bad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionMade",
      "description": {
        "fct-descr": "\u003cp\u003eConnection OK; waiting to send.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionMade",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionMade"
      },
      "index": {
        "description": "Connection OK waiting to send",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionMade",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Made",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionOk",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is ready.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionOk"
      },
      "index": {
        "description": "The Connection is ready",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionSSLStartup",
      "description": {
        "fct-descr": "\u003cp\u003eNegotiating SSL encryption.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionSSLStartup",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionSSLStartup"
      },
      "index": {
        "description": "Negotiating SSL encryption",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionSSLStartup",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection SSLStartup",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionSetEnv",
      "description": {
        "fct-descr": "\u003cp\u003eNegotiating environment-driven\n parameter settings.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionSetEnv",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionSetEnv"
      },
      "index": {
        "description": "Negotiating environment-driven parameter settings",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionSetEnv",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Set Env",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionStarted",
      "description": {
        "fct-descr": "\u003cp\u003eWaiting for connection to be made.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ConnectionStarted",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
        "fct-type": "function",
        "title": "ConnectionStarted"
      },
      "index": {
        "description": "Waiting for connection to be made",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ConnectionStarted",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Connection Started",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyIn",
      "description": {
        "fct-descr": "\u003cp\u003eCopy In (to server) data transfer\n started.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyIn",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "CopyIn"
      },
      "index": {
        "description": "Copy In to server data transfer started",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyIn",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy In",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error occurred (use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n   to retrieve details).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyInError",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
        "fct-type": "function",
        "title": "CopyInError"
      },
      "index": {
        "description": "An error occurred use errorMessage to retrieve details",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyInError",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy In Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInOk",
      "description": {
        "fct-descr": "\u003cp\u003eThe data was sent.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyInOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
        "fct-type": "function",
        "title": "CopyInOk"
      },
      "index": {
        "description": "The data was sent",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyInOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy In Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInWouldBlock",
      "description": {
        "fct-descr": "\u003cp\u003eThe data was not sent because the\n   attempt would block (this case is only\n   possible if the connection is in\n   nonblocking mode)  Wait for\n   write-ready (e.g. by using\n   \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e\n   on the \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e) and try again.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyInWouldBlock",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
        "fct-type": "function",
        "title": "CopyInWouldBlock"
      },
      "index": {
        "description": "The data was not sent because the attempt would block this case is only possible if the connection is in nonblocking mode Wait for write-ready e.g by using threadWaitWrite on the socket and try again",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyInWouldBlock",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy In Would Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOut",
      "description": {
        "fct-descr": "\u003cp\u003eCopy Out (from server) data\n transfer started.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyOut",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "CopyOut"
      },
      "index": {
        "description": "Copy Out from server data transfer started",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOut",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutDone",
      "description": {
        "fct-descr": "\u003cp\u003eNo more rows are available\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyOutDone",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutDone"
      },
      "index": {
        "description": "No more rows are available",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOutDone",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error occurred (e.g. the connection is\n   not in the \u003ccode\u003e\u003ca\u003eCopyOut\u003c/a\u003e\u003c/code\u003e state).  Call\n   \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyOutError",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutError"
      },
      "index": {
        "description": "An error occurred e.g the connection is not in the CopyOut state Call errorMessage for more information",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOutError",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutRow",
      "description": {
        "fct-descr": "\u003cp\u003eData representing a single row of the result\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyOutRow !ByteString",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutRow"
      },
      "index": {
        "description": "Data representing single row of the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOutRow",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutWouldBlock",
      "description": {
        "fct-descr": "\u003cp\u003eA complete row is not yet available.  This\n   case is only possible when \u003ccode\u003e\u003ca\u003egetCopyData\u003c/a\u003e\u003c/code\u003e is\n   has the async parameter set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CopyOutWouldBlock",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
        "fct-type": "function",
        "title": "CopyOutWouldBlock"
      },
      "index": {
        "description": "complete row is not yet available This case is only possible when getCopyData is has the async parameter set to True",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "CopyOutWouldBlock",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Copy Out Would Block",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagContext",
      "description": {
        "fct-descr": "\u003cp\u003eAn indication of the context in which the error\n occurred. Presently this includes a call stack\n traceback of active procedural language functions\n and internally-generated queries. The trace is one\n entry per line, most recent first.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagContext",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagContext"
      },
      "index": {
        "description": "An indication of the context in which the error occurred Presently this includes call stack traceback of active procedural language functions and internally-generated queries The trace is one entry per line most recent first",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagContext",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Context",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagInternalPosition",
      "description": {
        "fct-descr": "\u003cp\u003eThis is defined the same as the\n \u003ccode\u003e\u003ca\u003eDiagStatementPosition\u003c/a\u003e\u003c/code\u003e field, but it is used when\n the cursor position refers to an internally\n generated command rather than the one submitted by\n the client. The \u003ccode\u003e\u003ca\u003eDiagInternalQuery\u003c/a\u003e\u003c/code\u003e field will\n always appear when this field appears.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagInternalPosition",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagInternalPosition"
      },
      "index": {
        "description": "This is defined the same as the DiagStatementPosition field but it is used when the cursor position refers to an internally generated command rather than the one submitted by the client The DiagInternalQuery field will always appear when this field appears",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagInternalPosition",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Internal Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagInternalQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe text of a failed internally-generated\n command. This could be, for example, a SQL query\n issued by a PL/pgSQL function.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagInternalQuery",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagInternalQuery"
      },
      "index": {
        "description": "The text of failed internally-generated command This could be for example SQL query issued by PL pgSQL function",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagInternalQuery",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Internal Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessageDetail",
      "description": {
        "fct-descr": "\u003cp\u003eDetail: an optional secondary error message\n carrying more detail about the problem. Might run to\n multiple lines.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagMessageDetail",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagMessageDetail"
      },
      "index": {
        "description": "Detail an optional secondary error message carrying more detail about the problem Might run to multiple lines",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagMessageDetail",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Message Detail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessageHint",
      "description": {
        "fct-descr": "\u003cp\u003eHint: an optional suggestion what to do about the\n problem. This is intended to differ from detail in\n that it offers advice (potentially inappropriate)\n rather than hard facts. Might run to multiple lines.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagMessageHint",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagMessageHint"
      },
      "index": {
        "description": "Hint an optional suggestion what to do about the problem This is intended to differ from detail in that it offers advice potentially inappropriate rather than hard facts Might run to multiple lines",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagMessageHint",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Message Hint",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessagePrimary",
      "description": {
        "fct-descr": "\u003cp\u003eThe primary human-readable error message\n (typically one line). Always present.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagMessagePrimary",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagMessagePrimary"
      },
      "index": {
        "description": "The primary human-readable error message typically one line Always present",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagMessagePrimary",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Message Primary",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSeverity",
      "description": {
        "fct-descr": "\u003cp\u003eThe severity; the field contents are ERROR, FATAL,\n or PANIC (in an error message), or WARNING, NOTICE,\n DEBUG, INFO, or LOG (in a notice message), or a\n localized translation of one of these. Always\n present.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagSeverity",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagSeverity"
      },
      "index": {
        "description": "The severity the field contents are ERROR FATAL or PANIC in an error message or WARNING NOTICE DEBUG INFO or LOG in notice message or localized translation of one of these Always present",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagSeverity",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Severity",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceFile",
      "description": {
        "fct-descr": "\u003cp\u003eThe file name of the source-code location where\n the error was reported.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagSourceFile",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagSourceFile"
      },
      "index": {
        "description": "The file name of the source-code location where the error was reported",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagSourceFile",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Source File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceFunction",
      "description": {
        "fct-descr": "\u003cp\u003eThe name of the source-code function reporting the\n error.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagSourceFunction",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagSourceFunction"
      },
      "index": {
        "description": "The name of the source-code function reporting the error",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagSourceFunction",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Source Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceLine",
      "description": {
        "fct-descr": "\u003cp\u003eThe line number of the source-code location where\n the error was reported.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagSourceLine",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagSourceLine"
      },
      "index": {
        "description": "The line number of the source-code location where the error was reported",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagSourceLine",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Source Line",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSqlstate",
      "description": {
        "fct-descr": "\u003cp\u003eThe SQLSTATE code for the error. The SQLSTATE code\n identifies the type of error that has occurred; it\n can be used by front-end applications to perform\n specific operations (such as error handling) in\n response to a particular database error. For a list\n of the possible SQLSTATE codes, see Appendix A. This\n field is not localizable, and is always present.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagSqlstate",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagSqlstate"
      },
      "index": {
        "description": "The SQLSTATE code for the error The SQLSTATE code identifies the type of error that has occurred it can be used by front-end applications to perform specific operations such as error handling in response to particular database error For list of the possible SQLSTATE codes see Appendix This field is not localizable and is always present",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagSqlstate",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Sqlstate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagStatementPosition",
      "description": {
        "fct-descr": "\u003cp\u003eA string containing a decimal integer indicating\n an error cursor position as an index into the\n original statement string. The first character has\n index 1, and positions are measured in characters\n not bytes.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "DiagStatementPosition",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
        "fct-type": "function",
        "title": "DiagStatementPosition"
      },
      "index": {
        "description": "string containing decimal integer indicating an error cursor position as an index into the original statement string The first character has index and positions are measured in characters not bytes",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "DiagStatementPosition",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Diag Statement Position",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:EmptyQuery",
      "description": {
        "fct-descr": "\u003cp\u003eThe string sent to the server was empty.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "EmptyQuery",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "EmptyQuery"
      },
      "index": {
        "description": "The string sent to the server was empty",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "EmptyQuery",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Empty Query",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsDefault",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ErrorsDefault",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
        "fct-type": "function",
        "title": "ErrorsDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ErrorsDefault",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Errors Default",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsTerse",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ErrorsTerse",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
        "fct-type": "function",
        "title": "ErrorsTerse"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ErrorsTerse",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Errors Terse",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsVerbose",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ErrorsVerbose",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
        "fct-type": "function",
        "title": "ErrorsVerbose"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ErrorsVerbose",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Errors Verbose",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FatalError",
      "description": {
        "fct-descr": "\u003cp\u003eA fatal error occurred.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "FatalError",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "FatalError"
      },
      "index": {
        "description": "fatal error occurred",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FatalError",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Fatal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushFailed",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "FlushFailed",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
        "fct-type": "function",
        "title": "FlushFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FlushFailed",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Flush Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushOk",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "FlushOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
        "fct-type": "function",
        "title": "FlushOk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FlushOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Flush Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushWriting",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "FlushWriting",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
        "fct-type": "function",
        "title": "FlushWriting"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "FlushWriting",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Flush Writing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:LoFd",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "LoFd CInt",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#LoFd",
        "fct-type": "function",
        "title": "LoFd"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "LoFd",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Lo Fd",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:NonfatalError",
      "description": {
        "fct-descr": "\u003cp\u003eA nonfatal error (a notice or\n warning) occurred.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "NonfatalError",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "NonfatalError"
      },
      "index": {
        "description": "nonfatal error notice or warning occurred",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "NonfatalError",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Nonfatal Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Notify",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Notify",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Notify",
        "fct-type": "function",
        "title": "Notify"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Notify",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Notify",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Oid",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Oid CUInt",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Oid",
        "fct-type": "function",
        "title": "Oid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Oid",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingFailed",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "PollingFailed",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
        "fct-type": "function",
        "title": "PollingFailed"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "PollingFailed",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Polling Failed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingOk",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "PollingOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
        "fct-type": "function",
        "title": "PollingOk"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "PollingOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Polling Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingReading",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "PollingReading",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
        "fct-type": "function",
        "title": "PollingReading"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "PollingReading",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Polling Reading",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingWriting",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "PollingWriting",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
        "fct-type": "function",
        "title": "PollingWriting"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "PollingWriting",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Polling Writing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Row",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Row CInt",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Row",
        "fct-type": "function",
        "title": "Row"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Row",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Row",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Text",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Text",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Format",
        "fct-type": "function",
        "title": "Text"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "Text",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Text",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransActive",
      "description": {
        "fct-descr": "\u003cp\u003ea command is in progress\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TransActive",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "function",
        "title": "TransActive"
      },
      "index": {
        "description": "command is in progress",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransActive",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Trans Active",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransIdle",
      "description": {
        "fct-descr": "\u003cp\u003ecurrently idle\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TransIdle",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "function",
        "title": "TransIdle"
      },
      "index": {
        "description": "currently idle",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransIdle",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Trans Idle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransInError",
      "description": {
        "fct-descr": "\u003cp\u003eidle, in a failed transaction block\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TransInError",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "function",
        "title": "TransInError"
      },
      "index": {
        "description": "idle in failed transaction block",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransInError",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Trans In Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransInTrans",
      "description": {
        "fct-descr": "\u003cp\u003eidle, in a valid transaction block\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TransInTrans",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "function",
        "title": "TransInTrans"
      },
      "index": {
        "description": "idle in valid transaction block",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransInTrans",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Trans In Trans",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransUnknown",
      "description": {
        "fct-descr": "\u003cp\u003ethe connection is bad\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TransUnknown",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
        "fct-type": "function",
        "title": "TransUnknown"
      },
      "index": {
        "description": "the connection is bad",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TransUnknown",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Trans Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TuplesOk",
      "description": {
        "fct-descr": "\u003cp\u003eSuccessful completion of a\n command returning data (such as a\n SELECT or SHOW).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "TuplesOk",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
        "fct-type": "function",
        "title": "TuplesOk"
      },
      "index": {
        "description": "Successful completion of command returning data such as SELECT or SHOW",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "TuplesOk",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Tuples Ok",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:backendPID",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the process \u003ccode\u003e\u003ca\u003eCPid\u003c/a\u003e\u003c/code\u003e of the backend server process\n handling this connection.\n\u003c/p\u003e\u003cp\u003eThe backend PID is useful for debugging purposes and for comparison\n to NOTIFY messages (which include the PID of the notifying backend\n process). Note that the PID belongs to a process executing on the\n database server host, not the local host!\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO CPid",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#backendPID",
        "fct-type": "function",
        "title": "backendPID"
      },
      "index": {
        "description": "Returns the process CPid of the backend server process handling this connection The backend PID is useful for debugging purposes and for comparison to NOTIFY messages which include the PID of the notifying backend process Note that the PID belongs to process executing on the database server host not the local host",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "backendPID",
        "normalized": "Connection-\u003eIO CPid",
        "package": "postgresql-libpq",
        "partial": "PID",
        "signature": "Connection-\u003eIO CPid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cancel",
      "description": {
        "fct-descr": "\u003cp\u003eRequests that the server abandon processing of the current\n command.\n\u003c/p\u003e\u003cp\u003eThe return value is 'Right ()' if the cancel request was\n successfully dispatched and if not, 'Left B.ByteString' containing\n an error message explaining why not.\n\u003c/p\u003e\u003cp\u003eSuccessful dispatch is no guarantee that the request will have any\n effect, however. If the cancellation is effective, the current\n command will terminate early and return an error result. If the\n cancellation fails (say, because the server was already done\n processing the command), then there will be no visible result at\n all.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Cancel -\u003e IO (Either ByteString ())",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#cancel",
        "fct-type": "function",
        "title": "cancel"
      },
      "index": {
        "description": "Requests that the server abandon processing of the current command The return value is Right if the cancel request was successfully dispatched and if not Left B.ByteString containing an error message explaining why not Successful dispatch is no guarantee that the request will have any effect however If the cancellation is effective the current command will terminate early and return an error result If the cancellation fails say because the server was already done processing the command then there will be no visible result at all",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "cancel",
        "normalized": "Cancel-\u003eIO(Either ByteString())",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Cancel-\u003eIO(Either ByteString())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:clientEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the client encoding.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO ByteString",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#clientEncoding",
        "fct-type": "function",
        "title": "clientEncoding"
      },
      "index": {
        "description": "Returns the client encoding",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "clientEncoding",
        "normalized": "Connection-\u003eIO ByteString",
        "package": "postgresql-libpq",
        "partial": "Encoding",
        "signature": "Connection-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cmdStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the command status tag from the SQL command that\n generated the PGresult.\n\u003c/p\u003e\u003cp\u003eCommonly this is just the name of the command, but it might include\n additional data such as the number of rows processed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#cmdStatus",
        "fct-type": "function",
        "title": "cmdStatus"
      },
      "index": {
        "description": "Returns the command status tag from the SQL command that generated the PGresult Commonly this is just the name of the command but it might include additional data such as the number of rows processed",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "cmdStatus",
        "normalized": "Result-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Status",
        "signature": "Result-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cmdTuples",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of rows affected by the SQL command.\n\u003c/p\u003e\u003cp\u003eThis function returns a string containing the number of rows\n affected by the SQL statement that generated the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e. This\n function can only be used following the execution of a SELECT,\n CREATE TABLE AS, INSERT, UPDATE, DELETE, MOVE, FETCH, or COPY\n statement, or an EXECUTE of a prepared query that contains an\n INSERT, UPDATE, or DELETE statement. If the command that generated\n the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e was anything else, \u003ccode\u003e\u003ca\u003ecmdTuples\u003c/a\u003e\u003c/code\u003e returns an empty\n string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#cmdTuples",
        "fct-type": "function",
        "title": "cmdTuples"
      },
      "index": {
        "description": "Returns the number of rows affected by the SQL command This function returns string containing the number of rows affected by the SQL statement that generated the Result This function can only be used following the execution of SELECT CREATE TABLE AS INSERT UPDATE DELETE MOVE FETCH or COPY statement or an EXECUTE of prepared query that contains an INSERT UPDATE or DELETE statement If the command that generated the Result was anything else cmdTuples returns an empty string",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "cmdTuples",
        "normalized": "Result-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Tuples",
        "signature": "Result-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectPoll",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e succeeds, the next stage is to poll libpq so\n that it can proceed with the connection sequence. Use \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e to\n obtain the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e of the socket underlying the database\n connection. Loop thus: If \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e last returned\n \u003ccode\u003e\u003ca\u003ePollingReading\u003c/a\u003e\u003c/code\u003e, wait until the socket is ready to read (as\n indicated by select(), poll(), or similar system function). Then\n call \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e again. Conversely, if \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e last\n returned \u003ccode\u003e\u003ca\u003ePollingWriting\u003c/a\u003e\u003c/code\u003e, wait until the socket is ready to write,\n then call \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e again. If you have yet to call\n \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e, i.e., just after the call to \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e, behave\n as if it last returned \u003ccode\u003e\u003ca\u003ePollingWriting\u003c/a\u003e\u003c/code\u003e. Continue this loop until\n \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003ePollingFailed\u003c/a\u003e\u003c/code\u003e, indicating the connection\n procedure has failed, or \u003ccode\u003e\u003ca\u003ePollingOk\u003c/a\u003e\u003c/code\u003e, indicating the connection has\n been successfully made.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO PollingStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#connectPoll",
        "fct-type": "function",
        "title": "connectPoll"
      },
      "index": {
        "description": "If connectStart succeeds the next stage is to poll libpq so that it can proceed with the connection sequence Use socket to obtain the Fd of the socket underlying the database connection Loop thus If connectPoll last returned PollingReading wait until the socket is ready to read as indicated by select poll or similar system function Then call connectPoll again Conversely if connectPoll last returned PollingWriting wait until the socket is ready to write then call connectPoll again If you have yet to call connectPoll i.e just after the call to connectStart behave as if it last returned PollingWriting Continue this loop until connectPoll returns PollingFailed indicating the connection procedure has failed or PollingOk indicating the connection has been successfully made",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "connectPoll",
        "normalized": "Connection-\u003eIO PollingStatus",
        "package": "postgresql-libpq",
        "partial": "Poll",
        "signature": "Connection-\u003eIO PollingStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectStart",
      "description": {
        "fct-descr": "\u003cp\u003eMake a connection to the database server in a nonblocking manner.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ByteString-\u003e IO Connection",
        "fct-type": "function",
        "title": "connectStart"
      },
      "index": {
        "description": "Make connection to the database server in nonblocking manner",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "connectStart",
        "normalized": "ByteString-\u003eIO Connection",
        "package": "postgresql-libpq",
        "partial": "Start",
        "signature": "ByteString-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectdb",
      "description": {
        "fct-descr": "\u003cp\u003eMakes a new connection to the database server.\n\u003c/p\u003e\u003cp\u003eThis function opens a new database connection using the parameters\n  taken from the string conninfo. Its nonblocking analogues are\n  \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe passed string can be empty to use all default parameters, or it\n can contain one or more parameter settings separated by\n whitespace. Each parameter setting is in the form keyword =\n value. Spaces around the equal sign are optional. To write an empty\n value or a value containing spaces, surround it with single quotes,\n e.g., keyword = 'a value'. Single quotes and backslashes within the\n value must be escaped with a backslash, i.e., ' and \\.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ByteString-\u003e IO Connection",
        "fct-type": "function",
        "title": "connectdb"
      },
      "index": {
        "description": "Makes new connection to the database server This function opens new database connection using the parameters taken from the string conninfo Its nonblocking analogues are connectStart and connectPoll The passed string can be empty to use all default parameters or it can contain one or more parameter settings separated by whitespace Each parameter setting is in the form keyword value Spaces around the equal sign are optional To write an empty value or value containing spaces surround it with single quotes e.g keyword value Single quotes and backslashes within the value must be escaped with backslash i.e and",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "connectdb",
        "normalized": "ByteString-\u003eIO Connection",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "ByteString-\u003eIO Connection"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectionNeedsPassword",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the connection authentication method required a\n password, but none was available. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not.\n\u003c/p\u003e\u003cp\u003eThis function can be applied after a failed connection attempt to\n decide whether to prompt the user for a password.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#connectionNeedsPassword",
        "fct-type": "function",
        "title": "connectionNeedsPassword"
      },
      "index": {
        "description": "Returns True if the connection authentication method required password but none was available Returns False if not This function can be applied after failed connection attempt to decide whether to prompt the user for password",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "connectionNeedsPassword",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Needs Password",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectionUsedPassword",
      "description": {
        "fct-descr": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the connection authentication method used a\n password. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not.\n\u003c/p\u003e\u003cp\u003eThis function can be applied after either a failed or successful\n connection attempt to detect whether the server demanded a\n password.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#connectionUsedPassword",
        "fct-type": "function",
        "title": "connectionUsedPassword"
      },
      "index": {
        "description": "Returns True if the connection authentication method used password Returns False if not This function can be applied after either failed or successful connection attempt to detect whether the server demanded password",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "connectionUsedPassword",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Used Password",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:consumeInput",
      "description": {
        "fct-descr": "\u003cp\u003eIf input is available from the server, consume it.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e normally returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicating \u003ca\u003eno error\u003c/a\u003e, but\n returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if there was some kind of trouble (in which case\n \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e can be consulted). Note that the result does not say\n whether any input data was actually collected. After calling\n \u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e, the application can check \u003ccode\u003e\u003ca\u003eisBusy\u003c/a\u003e\u003c/code\u003e and/or\n \u003ccode\u003e\u003ca\u003enotifies\u003c/a\u003e\u003c/code\u003e to see if their state has changed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#consumeInput",
        "fct-type": "function",
        "title": "consumeInput"
      },
      "index": {
        "description": "If input is available from the server consume it consumeInput normally returns True indicating no error but returns False if there was some kind of trouble in which case errorMessage can be consulted Note that the result does not say whether any input data was actually collected After calling consumeInput the application can check isBusy and or notifies to see if their state has changed",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "consumeInput",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Input",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:db",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the database name of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#db",
        "fct-type": "function",
        "title": "db"
      },
      "index": {
        "description": "Returns the database name of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "db",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:describePortal",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a request to obtain information about the specified\n portal, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e allows an application to obtain information about\n a previously created portal. (libpq does not provide any direct\n access to portals, but you can use this function to inspect the\n properties of a cursor created with a DECLARE CURSOR SQL command.)\n \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0 and later\n connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eportalName can be empty to reference the unnamed portal, otherwise\n it must be the name of an existing portal. On success, a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n with status \u003ccode\u003e\u003ca\u003eCommandOk\u003c/a\u003e\u003c/code\u003e is returned. The functions \u003ccode\u003e\u003ca\u003enfields\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003efname\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eftype\u003c/a\u003e\u003c/code\u003e, etc can be applied to the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to obtain\n information about the result columns (if any) of the portal.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "describePortal"
      },
      "index": {
        "description": "Submits request to obtain information about the specified portal and waits for completion describePortal allows an application to obtain information about previously created portal libpq does not provide any direct access to portals but you can use this function to inspect the properties of cursor created with DECLARE CURSOR SQL command describePortal is supported only in protocol and later connections it will fail when using protocol portalName can be empty to reference the unnamed portal otherwise it must be the name of an existing portal On success Result with status CommandOk is returned The functions nfields fname ftype etc can be applied to the Result to obtain information about the result columns if any of the portal",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "describePortal",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "Portal",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:describePrepared",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a request to obtain information about the specified\n prepared statement, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e allows an application to obtain information\n about a previously prepared statement. \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e is\n supported only in protocol 3.0 and later connections; it will fail\n when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003estmtName can be empty to reference the unnamed statement, otherwise\n it must be the name of an existing prepared statement. On success,\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e with status \u003ccode\u003e\u003ca\u003eCommandOk\u003c/a\u003e\u003c/code\u003e is returned. The functions\n \u003ccode\u003e\u003ca\u003enparams\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparamtype\u003c/a\u003e\u003c/code\u003e can be applied to this \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to obtain\n information about the parameters of the prepared statement, and the\n functions \u003ccode\u003e\u003ca\u003enfields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efname\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eftype\u003c/a\u003e\u003c/code\u003e, etc provide information\n about the result columns (if any) of the statement.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "describePrepared"
      },
      "index": {
        "description": "Submits request to obtain information about the specified prepared statement and waits for completion describePrepared allows an application to obtain information about previously prepared statement describePrepared is supported only in protocol and later connections it will fail when using protocol stmtName can be empty to reference the unnamed statement otherwise it must be the name of an existing prepared statement On success Result with status CommandOk is returned The functions nparams and paramtype can be applied to this Result to obtain information about the parameters of the prepared statement and the functions nfields fname ftype etc provide information about the result columns if any of the statement",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "describePrepared",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "Prepared",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:errorMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the error message most recently generated by an operation\n on the connection.\n\u003c/p\u003e\u003cp\u003eNearly all libpq functions will set a message for \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e if\n they fail. Note that by libpq convention, a nonempty \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n result can be multiple lines, and will include a trailing\n newline. The result string should not be expected to remain the\n same across operations on the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#errorMessage",
        "fct-type": "function",
        "title": "errorMessage"
      },
      "index": {
        "description": "Returns the error message most recently generated by an operation on the connection Nearly all libpq functions will set message for errorMessage if they fail Note that by libpq convention nonempty errorMessage result can be multiple lines and will include trailing newline The result string should not be expected to remain the same across operations on the Connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "errorMessage",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Message",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:escapeByteaConn",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes binary data for use within an SQL command with the type\n bytea. As with \u003ccode\u003e\u003ca\u003eescapeStringConn\u003c/a\u003e\u003c/code\u003e, this is only used when inserting\n data directly into an SQL command string.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#escapeByteaConn",
        "fct-type": "function",
        "title": "escapeByteaConn"
      },
      "index": {
        "description": "Escapes binary data for use within an SQL command with the type bytea As with escapeStringConn this is only used when inserting data directly into an SQL command string",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "escapeByteaConn",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Bytea Conn",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:escapeStringConn",
      "description": {
        "fct-descr": "\u003cp\u003eEscapes a string for use within an SQL command. This is useful\n when inserting data values as literal constants in SQL\n commands. Certain characters (such as quotes and backslashes) must\n be escaped to prevent them from being interpreted specially by the\n SQL parser.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#escapeStringConn",
        "fct-type": "function",
        "title": "escapeStringConn"
      },
      "index": {
        "description": "Escapes string for use within an SQL command This is useful when inserting data values as literal constants in SQL commands Certain characters such as quotes and backslashes must be escaped to prevent them from being interpreted specially by the SQL parser",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "escapeStringConn",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "String Conn",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:exec",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a command to the server and waits for the result.\n\u003c/p\u003e\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e or possibly \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e will generally\n be returned except in out-of-memory conditions or serious errors\n such as inability to send the command to the server. If a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n is returned, it should be treated like a \u003ccode\u003e\u003ca\u003eFatalError\u003c/a\u003e\u003c/code\u003e result. Use\n \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to get more information about such errors.\n\u003c/p\u003e\u003cp\u003eIt is allowed to include multiple SQL commands (separated by\n semicolons) in the command string. Multiple queries sent in a\n single \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e call are processed in a single transaction, unless\n there are explicit BEGIN/COMMIT commands included in the query\n string to divide it into multiple transactions. Note however that\n the returned \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e structure describes only the result of the\n last command executed from the string. Should one of the commands\n fail, processing of the string stops with it and the returned\n \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e describes the error condition.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "exec"
      },
      "index": {
        "description": "Submits command to the server and waits for the result Returns Result or possibly Nothing Result will generally be returned except in out-of-memory conditions or serious errors such as inability to send the command to the server If Nothing is returned it should be treated like FatalError result Use errorMessage to get more information about such errors It is allowed to include multiple SQL commands separated by semicolons in the command string Multiple queries sent in single exec call are processed in single transaction unless there are explicit BEGIN COMMIT commands included in the query string to divide it into multiple transactions Note however that the returned Result structure describes only the result of the last command executed from the string Should one of the commands fail processing of the string stops with it and the returned Result describes the error condition",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "exec",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:execParams",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a command to the server and waits for the result, with\n the ability to pass parameters separately from the SQL command\n text.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, but offers additional functionality:\n parameter values can be specified separately from the command\n string proper, and query results can be requested in either text or\n binary format. \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0 and\n later connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe primary advantage of \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e is that parameter\n values can be separated from the command string, thus avoiding the\n need for tedious and error-prone quoting and escaping.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e allows at most one SQL command in the\n given string. (There can be semicolons in it, but not more than one\n nonempty command.) This is a limitation of the underlying protocol,\n but has some usefulness as an extra defense against SQL-injection\n attacks.\n\u003c/p\u003e\u003cp\u003eTip: Specifying parameter types via OIDs is tedious, particularly\n if you prefer not to hard-wire particular OID values into your\n program. However, you can avoid doing so even in cases where the\n server by itself cannot determine the type of the parameter, or\n chooses a different type than you want. In the SQL command text,\n attach an explicit cast to the parameter symbol to show what data\n type you will send. For example:\n SELECT * FROM mytable WHERE x = $1::bigint;\n This forces parameter $1 to be treated as bigint, whereas by\n default it would be assigned the same type as x. Forcing the\n parameter type decision, either this way or by specifying a numeric\n type OID, is strongly recommended when sending parameter values in\n binary format, because binary format has less redundancy than text\n format and so there is less chance that the server will detect a\n type mismatch mistake for you.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e [Maybe (Oid, ByteString, Format)]-\u003e Format-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "execParams"
      },
      "index": {
        "description": "Submits command to the server and waits for the result with the ability to pass parameters separately from the SQL command text execParams is like exec but offers additional functionality parameter values can be specified separately from the command string proper and query results can be requested in either text or binary format execParams is supported only in protocol and later connections it will fail when using protocol The primary advantage of execParams over exec is that parameter values can be separated from the command string thus avoiding the need for tedious and error-prone quoting and escaping Unlike exec execParams allows at most one SQL command in the given string There can be semicolons in it but not more than one nonempty command This is limitation of the underlying protocol but has some usefulness as an extra defense against SQL-injection attacks Tip Specifying parameter types via OIDs is tedious particularly if you prefer not to hard-wire particular OID values into your program However you can avoid doing so even in cases where the server by itself cannot determine the type of the parameter or chooses different type than you want In the SQL command text attach an explicit cast to the parameter symbol to show what data type you will send For example SELECT FROM mytable WHERE bigint This forces parameter to be treated as bigint whereas by default it would be assigned the same type as Forcing the parameter type decision either this way or by specifying numeric type OID is strongly recommended when sending parameter values in binary format because binary format has less redundancy than text format and so there is less chance that the server will detect type mismatch mistake for you",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "execParams",
        "normalized": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "Params",
        "signature": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:execPrepared",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to execute a prepared statement with given\n parameters, and waits for the result.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e, but the command to be executed\n is specified by naming a previously-prepared statement, instead of\n giving a query string. This feature allows commands that will be\n used repeatedly to be parsed and planned just once, rather than\n each time they are executed. The statement must have been prepared\n previously in the current session. \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e is supported only\n in protocol 3.0 and later connections; it will fail when using\n protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe parameters are identical to \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e, except that the name\n of a prepared statement is given instead of a query string, and the\n paramTypes parameter is not present (it is not needed since the\n prepared statement's parameter types were determined when it was\n created).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e [Maybe (ByteString, Format)]-\u003e Format-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "execPrepared"
      },
      "index": {
        "description": "Sends request to execute prepared statement with given parameters and waits for the result execPrepared is like execParams but the command to be executed is specified by naming previously-prepared statement instead of giving query string This feature allows commands that will be used repeatedly to be parsed and planned just once rather than each time they are executed The statement must have been prepared previously in the current session execPrepared is supported only in protocol and later connections it will fail when using protocol The parameters are identical to execParams except that the name of prepared statement is given instead of query string and the paramTypes parameter is not present it is not needed since the prepared statement parameter types were determined when it was created",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "execPrepared",
        "normalized": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "Prepared",
        "signature": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fformat",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e of the given column. Column numbers start at\n 0.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Format",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#fformat",
        "fct-type": "function",
        "title": "fformat"
      },
      "index": {
        "description": "Returns the Format of the given column Column numbers start at",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "fformat",
        "normalized": "Result-\u003eColumn-\u003eIO Format",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Format"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:finish",
      "description": {
        "fct-descr": "\u003cp\u003eCloses the connection to the server.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e must not be used again after \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e\n has been called.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#finish",
        "fct-type": "function",
        "title": "finish"
      },
      "index": {
        "description": "Closes the connection to the server Note that the Connection must not be used again after finish has been called",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "finish",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:flush",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to flush any queued output data to the server. Returns\n \u003ccode\u003e\u003ca\u003eFlushOk\u003c/a\u003e\u003c/code\u003e if successful (or if the send queue is empty),\n \u003ccode\u003e\u003ca\u003eFlushFailed\u003c/a\u003e\u003c/code\u003e if it failed for some reason, or \u003ccode\u003e\u003ca\u003eFlushWriting\u003c/a\u003e\u003c/code\u003e if it\n was unable to send all the data in the send queue yet (this case\n can only occur if the connection is nonblocking).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO FlushStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#flush",
        "fct-type": "function",
        "title": "flush"
      },
      "index": {
        "description": "Attempts to flush any queued output data to the server Returns FlushOk if successful or if the send queue is empty FlushFailed if it failed for some reason or FlushWriting if it was unable to send all the data in the send queue yet this case can only occur if the connection is nonblocking",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "flush",
        "normalized": "Connection-\u003eIO FlushStatus",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO FlushStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fmod",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the type modifier of the column associated with the given\n column number. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThe interpretation of modifier values is type-specific; they\n typically indicate precision or size limits. The value -1 is used\n to indicate \u003ca\u003eno information available\u003c/a\u003e. Most data types do not use\n modifiers, in which case the value is always -1.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#fmod",
        "fct-type": "function",
        "title": "fmod"
      },
      "index": {
        "description": "Returns the type modifier of the column associated with the given column number Column numbers start at The interpretation of modifier values is type-specific they typically indicate precision or size limits The value is used to indicate no information available Most data types do not use modifiers in which case the value is always",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "fmod",
        "normalized": "Result-\u003eColumn-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fname",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the column name associated with the given \u003ccode\u003e\u003ca\u003eColumn\u003c/a\u003e\u003c/code\u003e\n number. Column numbers start at 0.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#fname",
        "fct-type": "function",
        "title": "fname"
      },
      "index": {
        "description": "Returns the column name associated with the given Column number Column numbers start at",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "fname",
        "normalized": "Result-\u003eColumn-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fnumber",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the column number associated with the given column name.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e ByteString -\u003e IO (Maybe Column)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#fnumber",
        "fct-type": "function",
        "title": "fnumber"
      },
      "index": {
        "description": "Returns the column number associated with the given column name",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "fnumber",
        "normalized": "Result-\u003eByteString-\u003eIO(Maybe Column)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eByteString-\u003eIO(Maybe Column)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fsize",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the size in bytes of the column associated with the given\n column number. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efsize\u003c/a\u003e\u003c/code\u003e returns the space allocated for this column in a database\n row, in other words the size of the server's internal\n representation of the data type. (Accordingly, it is not really\n very useful to clients.) A negative value indicates the data type\n is variable-length.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#fsize",
        "fct-type": "function",
        "title": "fsize"
      },
      "index": {
        "description": "Returns the size in bytes of the column associated with the given column number Column numbers start at fsize returns the space allocated for this column in database row in other words the size of the server internal representation of the data type Accordingly it is not really very useful to clients negative value indicates the data type is variable-length",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "fsize",
        "normalized": "Result-\u003eColumn-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftable",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the OID of the table from which the given column was\n fetched. Column numbers start at 0.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ftable",
        "fct-type": "function",
        "title": "ftable"
      },
      "index": {
        "description": "Returns the OID of the table from which the given column was fetched Column numbers start at",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ftable",
        "normalized": "Result-\u003eColumn-\u003eIO Oid",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftablecol",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the column number (within its table) of the column making\n up the specified query result column. Query-result column numbers\n start at 0, but table columns have nonzero numbers.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Column",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ftablecol",
        "fct-type": "function",
        "title": "ftablecol"
      },
      "index": {
        "description": "Returns the column number within its table of the column making up the specified query result column Query-result column numbers start at but table columns have nonzero numbers",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ftablecol",
        "normalized": "Result-\u003eColumn-\u003eIO Column",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Column"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftype",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the data type associated with the given column\n number. The \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e returned is the internal OID number of the\n type. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eYou can query the system table pg_type to obtain the names and\n properties of the various data types. The OIDs of the built-in data\n types are defined in the file src\u003cem\u003einclude\u003c/em\u003ecatalog/pg_type.h in the\n source tree.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Column -\u003e IO Oid",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ftype",
        "fct-type": "function",
        "title": "ftype"
      },
      "index": {
        "description": "Returns the data type associated with the given column number The Oid returned is the internal OID number of the type Column numbers start at You can query the system table pg type to obtain the names and properties of the various data types The OIDs of the built-in data types are defined in the file src include catalog pg type.h in the source tree",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ftype",
        "normalized": "Result-\u003eColumn-\u003eIO Oid",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eColumn-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getCancel",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a data structure containing the information needed to\n cancel a command issued through a particular database connection.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetCancel\u003c/a\u003e\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eCancel\u003c/a\u003e\u003c/code\u003e object given a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e. It will\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the given conn is an invalid connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe Cancel)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getCancel",
        "fct-type": "function",
        "title": "getCancel"
      },
      "index": {
        "description": "Creates data structure containing the information needed to cancel command issued through particular database connection getCancel creates Cancel object given Connection It will return Nothing if the given conn is an invalid connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getCancel",
        "normalized": "Connection-\u003eIO(Maybe Cancel)",
        "package": "postgresql-libpq",
        "partial": "Cancel",
        "signature": "Connection-\u003eIO(Maybe Cancel)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getCopyData",
      "description": {
        "fct-descr": "\u003cp\u003eReceive raw \u003ccode\u003eCOPY\u003c/code\u003e data from the server during the \u003ccode\u003e\u003ca\u003eCopyOut\u003c/a\u003e\u003c/code\u003e state.\n   The boolean parameter determines whether or not the call will block\n   while waiting for data.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Bool -\u003e IO CopyOutResult",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getCopyData",
        "fct-type": "function",
        "title": "getCopyData"
      },
      "index": {
        "description": "Receive raw COPY data from the server during the CopyOut state The boolean parameter determines whether or not the call will block while waiting for data",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getCopyData",
        "normalized": "Connection-\u003eBool-\u003eIO CopyOutResult",
        "package": "postgresql-libpq",
        "partial": "Copy Data",
        "signature": "Connection-\u003eBool-\u003eIO CopyOutResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getResult",
      "description": {
        "fct-descr": "\u003cp\u003eWaits for the next result from a prior \u003ccode\u003e\u003ca\u003esendQuery\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003esendQueryParams\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esendPrepare\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003esendQueryPrepared\u003c/a\u003e\u003c/code\u003e call, and\n returns it. A null pointer is returned when the command is complete\n and there will be no more results.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe Result)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getResult",
        "fct-type": "function",
        "title": "getResult"
      },
      "index": {
        "description": "Waits for the next result from prior sendQuery sendQueryParams sendPrepare or sendQueryPrepared call and returns it null pointer is returned when the command is complete and there will be no more results",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getResult",
        "normalized": "Connection-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "Result",
        "signature": "Connection-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getisnull",
      "description": {
        "fct-descr": "\u003cp\u003eTests a field for a null value. Row and column numbers start at\n 0.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Row -\u003e Column -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getisnull",
        "fct-type": "function",
        "title": "getisnull"
      },
      "index": {
        "description": "Tests field for null value Row and column numbers start at",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getisnull",
        "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eRow-\u003eColumn-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getlength",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the actual length of a field value in bytes. Row and\n column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThis is the actual data length for the particular data value, that\n is, the size of the object pointed to by \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e. For text data\n format this is the same as strlen(). For binary format this is\n essential information. Note that one should not rely on \u003ccode\u003e\u003ca\u003efsize\u003c/a\u003e\u003c/code\u003e to\n obtain the actual data length.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Row -\u003e Column -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getlength",
        "fct-type": "function",
        "title": "getlength"
      },
      "index": {
        "description": "Returns the actual length of field value in bytes Row and column numbers start at This is the actual data length for the particular data value that is the size of the object pointed to by getvalue For text data format this is the same as strlen For binary format this is essential information Note that one should not rely on fsize to obtain the actual data length",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getlength",
        "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eRow-\u003eColumn-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getvalue",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a single field value of one row of a PGresult. Row and\n column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eFor convenience, this binding uses \u003ccode\u003e\u003ca\u003egetisnull\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetlength\u003c/a\u003e\u003c/code\u003e to\n help construct the result.\n\u003c/p\u003e\u003cp\u003eNote: The \u003ccode\u003eByteString\u003c/code\u003e returned holds a reference to the Result. As\n long as ByteString is live, the Result will not be garbage\n collected. \u003ccode\u003e\u003ca\u003egetvalue'\u003c/a\u003e\u003c/code\u003e returns a copy of the data.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Row -\u003e Column -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getvalue",
        "fct-type": "function",
        "title": "getvalue"
      },
      "index": {
        "description": "Returns single field value of one row of PGresult Row and column numbers start at For convenience this binding uses getisnull and getlength to help construct the result Note The ByteString returned holds reference to the Result As long as ByteString is live the Result will not be garbage collected getvalue returns copy of the data",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getvalue",
        "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getvalue-39-",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a copy of a single field value of one row of a\n PGresult. Row and column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eFor convenience, this binding uses \u003ccode\u003e\u003ca\u003egetisnull\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetlength\u003c/a\u003e\u003c/code\u003e to\n help construct the result.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e Row -\u003e Column -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#getvalue%27",
        "fct-type": "function",
        "title": "getvalue'"
      },
      "index": {
        "description": "Returns copy of single field value of one row of PGresult Row and column numbers start at For convenience this binding uses getisnull and getlength to help construct the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "getvalue'",
        "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:host",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the server host name of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#host",
        "fct-type": "function",
        "title": "host"
      },
      "index": {
        "description": "Returns the server host name of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "host",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:invalidOid",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Oid",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#invalidOid",
        "fct-type": "function",
        "title": "invalidOid"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "invalidOid",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Oid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isBusy",
      "description": {
        "fct-descr": "\u003cp\u003eReturns True if a command is busy, that is, getResult would block\n waiting for input. A False return indicates that getResult can be\n called with assurance of not blocking.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eisBusy\u003c/a\u003e\u003c/code\u003e will not itself attempt to read data from the server;\n therefore \u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e must be invoked first, or the busy state\n will never end.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#isBusy",
        "fct-type": "function",
        "title": "isBusy"
      },
      "index": {
        "description": "Returns True if command is busy that is getResult would block waiting for input False return indicates that getResult can be called with assurance of not blocking isBusy will not itself attempt to read data from the server therefore consumeInput must be invoked first or the busy state will never end",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "isBusy",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Busy",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isNullConnection",
      "description": {
        "fct-descr": "\u003cp\u003eTest if a connection is the Null Connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#isNullConnection",
        "fct-type": "function",
        "title": "isNullConnection"
      },
      "index": {
        "description": "Test if connection is the Null Connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "isNullConnection",
        "normalized": "Connection-\u003eBool",
        "package": "postgresql-libpq",
        "partial": "Null Connection",
        "signature": "Connection-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isnonblocking",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the blocking status of the database connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#isnonblocking",
        "fct-type": "function",
        "title": "isnonblocking"
      },
      "index": {
        "description": "Returns the blocking status of the database connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "isnonblocking",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loClose",
      "description": {
        "fct-descr": "\u003cp\u003eCloses a large object descriptor.  Any large object descriptors that\n remain open at the end of a transaction will be closed automatically.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e IO (Maybe ())",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loClose",
        "fct-type": "function",
        "title": "loClose"
      },
      "index": {
        "description": "Closes large object descriptor Any large object descriptors that remain open at the end of transaction will be closed automatically",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loClose",
        "normalized": "Connection-\u003eLoFd-\u003eIO(Maybe())",
        "package": "postgresql-libpq",
        "partial": "Close",
        "signature": "Connection-\u003eLoFd-\u003eIO(Maybe())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loCreat",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new large object,  returns the Object ID of the newly created\n object.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe Oid)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loCreat",
        "fct-type": "function",
        "title": "loCreat"
      },
      "index": {
        "description": "Creates new large object returns the Object ID of the newly created object",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loCreat",
        "normalized": "Connection-\u003eIO(Maybe Oid)",
        "package": "postgresql-libpq",
        "partial": "Creat",
        "signature": "Connection-\u003eIO(Maybe Oid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loCreate",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new large object with a particular Object ID.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the requested Object ID is already in use by some other\n large object or other failure.  If \u003ccode\u003e\u003ca\u003einvalidOid\u003c/a\u003e\u003c/code\u003e is used as a parameter,\n then \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e will assign an unused \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Oid -\u003e IO (Maybe Oid)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loCreate",
        "fct-type": "function",
        "title": "loCreate"
      },
      "index": {
        "description": "Creates new large object with particular Object ID Returns Nothing if the requested Object ID is already in use by some other large object or other failure If invalidOid is used as parameter then loCreate will assign an unused Oid",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loCreate",
        "normalized": "Connection-\u003eOid-\u003eIO(Maybe Oid)",
        "package": "postgresql-libpq",
        "partial": "Create",
        "signature": "Connection-\u003eOid-\u003eIO(Maybe Oid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loExport",
      "description": {
        "fct-descr": "\u003cp\u003eExports a large object into a operating system file.  Note that\n the file is written by the client interface library, not the server.\n Returns 'Just ()' on success,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Oid -\u003e FilePath -\u003e IO (Maybe ())",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loExport",
        "fct-type": "function",
        "title": "loExport"
      },
      "index": {
        "description": "Exports large object into operating system file Note that the file is written by the client interface library not the server Returns Just on success Nothing on failure",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loExport",
        "normalized": "Connection-\u003eOid-\u003eFilePath-\u003eIO(Maybe())",
        "package": "postgresql-libpq",
        "partial": "Export",
        "signature": "Connection-\u003eOid-\u003eFilePath-\u003eIO(Maybe())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loImport",
      "description": {
        "fct-descr": "\u003cp\u003eImports an operating system file as a large object.  Note that the\n file is read by the client interface library, not by the server; so it\n must exist in the client file system and be readable by the client\n application.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e FilePath -\u003e IO (Maybe Oid)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loImport",
        "fct-type": "function",
        "title": "loImport"
      },
      "index": {
        "description": "Imports an operating system file as large object Note that the file is read by the client interface library not by the server so it must exist in the client file system and be readable by the client application",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loImport",
        "normalized": "Connection-\u003eFilePath-\u003eIO(Maybe Oid)",
        "package": "postgresql-libpq",
        "partial": "Import",
        "signature": "Connection-\u003eFilePath-\u003eIO(Maybe Oid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loImportWithOid",
      "description": {
        "fct-descr": "\u003cp\u003eImports an operating system file as a large object with the given\n Object ID.  Combines the behavior of \u003ccode\u003e\u003ca\u003eloImport\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e FilePath -\u003e Oid -\u003e IO (Maybe Oid)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loImportWithOid",
        "fct-type": "function",
        "title": "loImportWithOid"
      },
      "index": {
        "description": "Imports an operating system file as large object with the given Object ID Combines the behavior of loImport and loCreate",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loImportWithOid",
        "normalized": "Connection-\u003eFilePath-\u003eOid-\u003eIO(Maybe Oid)",
        "package": "postgresql-libpq",
        "partial": "Import With Oid",
        "signature": "Connection-\u003eFilePath-\u003eOid-\u003eIO(Maybe Oid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loOpen",
      "description": {
        "fct-descr": "\u003cp\u003eOpens an existing large object for reading or writing.  The Oid specifies\n the large object to open.  A large object cannot be opened before it is\n created.  A large object descriptor is returned for later use in \u003ccode\u003e\u003ca\u003eloRead\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eloWrite\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloSeek\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloTell\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eloClose\u003c/a\u003e\u003c/code\u003e.   The descriptor is only valid\n for the duration of the current transation.   On failure,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe server currently does not distinguish between \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e;  write-only modes are not enforced.  However there\n is a significant difference between \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e and the other modes:\n with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e you cannot write on the descriptor,  and the data read\n from it will reflect the contents of the large object at the time of\n the transaction snapshot that was active when \u003ccode\u003e\u003ca\u003eloOpen\u003c/a\u003e\u003c/code\u003e was executed,\n regardless of later writes by this or other transactions.   Reading from\n a descriptor opened in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e\n returns data that reflects all writes of other committed transactions\n as well as the writes of the current transaction.   This is similar to\n the behavior of \u003ccode\u003eREPEATABLE READ\u003c/code\u003e versus \u003ccode\u003eREAD COMMITTED\u003c/code\u003e transaction\n modes for ordinary SQL \u003ccode\u003eSELECT\u003c/code\u003e commands.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Oid -\u003e IOMode -\u003e IO (Maybe LoFd)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loOpen",
        "fct-type": "function",
        "title": "loOpen"
      },
      "index": {
        "description": "Opens an existing large object for reading or writing The Oid specifies the large object to open large object cannot be opened before it is created large object descriptor is returned for later use in loRead loWrite loSeek loTell and loClose The descriptor is only valid for the duration of the current transation On failure Nothing is returned The server currently does not distinguish between WriteMode and ReadWriteMode write-only modes are not enforced However there is significant difference between ReadMode and the other modes with ReadMode you cannot write on the descriptor and the data read from it will reflect the contents of the large object at the time of the transaction snapshot that was active when loOpen was executed regardless of later writes by this or other transactions Reading from descriptor opened in WriteMode ReadWriteMode or AppendMode returns data that reflects all writes of other committed transactions as well as the writes of the current transaction This is similar to the behavior of REPEATABLE READ versus READ COMMITTED transaction modes for ordinary SQL SELECT commands",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loOpen",
        "normalized": "Connection-\u003eOid-\u003eIOMode-\u003eIO(Maybe LoFd)",
        "package": "postgresql-libpq",
        "partial": "Open",
        "signature": "Connection-\u003eOid-\u003eIOMode-\u003eIO(Maybe LoFd)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loRead",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eloRead conn fd len\u003c/code\u003e reads up to \u003ccode\u003elen\u003c/code\u003e bytes from the large object\n descriptor \u003ccode\u003efd\u003c/code\u003e.  In the event of an error,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loRead",
        "fct-type": "function",
        "title": "loRead"
      },
      "index": {
        "description": "loRead conn fd len reads up to len bytes from the large object descriptor fd In the event of an error Nothing is returned",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loRead",
        "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Read",
        "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loSeek",
      "description": {
        "fct-descr": "\u003cp\u003eChanges the current read or write location associated with\n a large object descriptor.    The return value is the new location\n pointer,  or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on error.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e SeekMode -\u003e Int -\u003e IO (Maybe Int)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loSeek",
        "fct-type": "function",
        "title": "loSeek"
      },
      "index": {
        "description": "Changes the current read or write location associated with large object descriptor The return value is the new location pointer or Nothing on error",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loSeek",
        "normalized": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO(Maybe Int)",
        "package": "postgresql-libpq",
        "partial": "Seek",
        "signature": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loTell",
      "description": {
        "fct-descr": "\u003cp\u003eObtains the current read or write location of a large object descriptor.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e IO (Maybe Int)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loTell",
        "fct-type": "function",
        "title": "loTell"
      },
      "index": {
        "description": "Obtains the current read or write location of large object descriptor",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loTell",
        "normalized": "Connection-\u003eLoFd-\u003eIO(Maybe Int)",
        "package": "postgresql-libpq",
        "partial": "Tell",
        "signature": "Connection-\u003eLoFd-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loTruncate",
      "description": {
        "fct-descr": "\u003cp\u003eTruncates a large object to a given length.  If the length is greater\n than the current large object,  then the large object is extended with\n null bytes.  ('\\x00')\n\u003c/p\u003e\u003cp\u003eThe file offest is not changed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eloTruncate\u003c/a\u003e\u003c/code\u003e is new as of PostgreSQL 8.3; if this function is run against\n an older server version, it will fail and return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO (Maybe ())",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loTruncate",
        "fct-type": "function",
        "title": "loTruncate"
      },
      "index": {
        "description": "Truncates large object to given length If the length is greater than the current large object then the large object is extended with null bytes x00 The file offest is not changed loTruncate is new as of PostgreSQL if this function is run against an older server version it will fail and return Nothing",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loTruncate",
        "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe())",
        "package": "postgresql-libpq",
        "partial": "Truncate",
        "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loUnlink",
      "description": {
        "fct-descr": "\u003cp\u003eRemoves a large object from the database.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Oid -\u003e IO (Maybe ())",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loUnlink",
        "fct-type": "function",
        "title": "loUnlink"
      },
      "index": {
        "description": "Removes large object from the database",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loUnlink",
        "normalized": "Connection-\u003eOid-\u003eIO(Maybe())",
        "package": "postgresql-libpq",
        "partial": "Unlink",
        "signature": "Connection-\u003eOid-\u003eIO(Maybe())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loWrite",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eloWrite conn fd buf\u003c/code\u003e writes the bytestring \u003ccode\u003ebuf\u003c/code\u003e to the large object\n descriptor \u003ccode\u003efd\u003c/code\u003e.  The number of bytes actually written is returned.\n In the event of an error, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e LoFd -\u003e ByteString -\u003e IO (Maybe Int)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#loWrite",
        "fct-type": "function",
        "title": "loWrite"
      },
      "index": {
        "description": "loWrite conn fd buf writes the bytestring buf to the large object descriptor fd The number of bytes actually written is returned In the event of an error Nothing is returned",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "loWrite",
        "normalized": "Connection-\u003eLoFd-\u003eByteString-\u003eIO(Maybe Int)",
        "package": "postgresql-libpq",
        "partial": "Write",
        "signature": "Connection-\u003eLoFd-\u003eByteString-\u003eIO(Maybe Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:newNullConnection",
      "description": {
        "fct-descr": "\u003cp\u003eAllocate a Null Connection,  which all libpq functions\n should safely fail on.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "IO Connection",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#newNullConnection",
        "fct-type": "function",
        "title": "newNullConnection"
      },
      "index": {
        "description": "Allocate Null Connection which all libpq functions should safely fail on",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "newNullConnection",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Null Connection",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:nfields",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of columns (fields) in each row of the query\n result.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO Column",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#nfields",
        "fct-type": "function",
        "title": "nfields"
      },
      "index": {
        "description": "Returns the number of columns fields in each row of the query result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "nfields",
        "normalized": "Result-\u003eIO Column",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eIO Column"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifies",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the next notification from a list of unhandled\n notification messages received from the server. It returns a\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no pending notifications. Once a\n notification is returned from notifies, it is considered handled\n and will be removed from the list of notifications.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe Notify)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#notifies",
        "fct-type": "function",
        "title": "notifies"
      },
      "index": {
        "description": "Returns the next notification from list of unhandled notification messages received from the server It returns Nothing if there are no pending notifications Once notification is returned from notifies it is considered handled and will be removed from the list of notifications",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "notifies",
        "normalized": "Connection-\u003eIO(Maybe Notify)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe Notify)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyBePid",
      "description": {
        "fct-descr": "\u003cp\u003eprocess ID of notifying server process\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "CPid",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Notify",
        "fct-type": "function",
        "title": "notifyBePid"
      },
      "index": {
        "description": "process ID of notifying server process",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "notifyBePid",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Be Pid",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyExtra",
      "description": {
        "fct-descr": "\u003cp\u003enotification payload string\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Notify",
        "fct-type": "function",
        "title": "notifyExtra"
      },
      "index": {
        "description": "notification payload string",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "notifyExtra",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Extra",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyRelname",
      "description": {
        "fct-descr": "\u003cp\u003enotification channel name\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ByteString",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#Notify",
        "fct-type": "function",
        "title": "notifyRelname"
      },
      "index": {
        "description": "notification channel name",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "notifyRelname",
        "normalized": "",
        "package": "postgresql-libpq",
        "partial": "Relname",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:nparams",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of parameters of a prepared statement.\n\u003c/p\u003e\u003cp\u003eThis function is only useful when inspecting the result of\n PQdescribePrepared. For other types of queries it will return zero.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#nparams",
        "fct-type": "function",
        "title": "nparams"
      },
      "index": {
        "description": "Returns the number of parameters of prepared statement This function is only useful when inspecting the result of PQdescribePrepared For other types of queries it will return zero",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "nparams",
        "normalized": "Result-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ntuples",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the number of rows (tuples) in the query result. Because\n it returns an integer result, large result sets might overflow the\n return value on 32-bit operating systems.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO Row",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#ntuples",
        "fct-type": "function",
        "title": "ntuples"
      },
      "index": {
        "description": "Returns the number of rows tuples in the query result Because it returns an integer result large result sets might overflow the return value on bit operating systems",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "ntuples",
        "normalized": "Result-\u003eIO Row",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eIO Row"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:oidValue",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e of the inserted row, if the SQL command was an\n INSERT that inserted exactly one row into a table that has OIDs, or\n a EXECUTE of a prepared query containing a suitable INSERT\n statement. Otherwise, this function returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. This\n function will also return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the table affected by the\n INSERT statement does not contain OIDs.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO (Maybe Oid)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#oidValue",
        "fct-type": "function",
        "title": "oidValue"
      },
      "index": {
        "description": "Returns the Oid of the inserted row if the SQL command was an INSERT that inserted exactly one row into table that has OIDs or EXECUTE of prepared query containing suitable INSERT statement Otherwise this function returns Nothing This function will also return Nothing if the table affected by the INSERT statement does not contain OIDs",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "oidValue",
        "normalized": "Result-\u003eIO(Maybe Oid)",
        "package": "postgresql-libpq",
        "partial": "Value",
        "signature": "Result-\u003eIO(Maybe Oid)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:options",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the command-line options passed in the connection request.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#options",
        "fct-type": "function",
        "title": "options"
      },
      "index": {
        "description": "Returns the command-line options passed in the connection request",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "options",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:parameterStatus",
      "description": {
        "fct-descr": "\u003cp\u003eLooks up a current parameter setting of the server.\n\u003c/p\u003e\u003cp\u003eCertain parameter values are reported by the server automatically\n at connection startup or whenever their values\n change. \u003ccode\u003e\u003ca\u003eparameterStatus\u003c/a\u003e\u003c/code\u003e can be used to interrogate these\n settings. It returns the current value of a parameter if known, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parameter is not known.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO (Maybe ByteString)",
        "fct-type": "function",
        "title": "parameterStatus"
      },
      "index": {
        "description": "Looks up current parameter setting of the server Certain parameter values are reported by the server automatically at connection startup or whenever their values change parameterStatus can be used to interrogate these settings It returns the current value of parameter if known or Nothing if the parameter is not known",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "parameterStatus",
        "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Status",
        "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:paramtype",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the data type of the indicated statement\n parameter. Parameter numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThis function is only useful when inspecting the result of\n \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e. For other types of queries it will return zero.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result-\u003e Int-\u003e IO Oid",
        "fct-type": "function",
        "title": "paramtype"
      },
      "index": {
        "description": "Returns the data type of the indicated statement parameter Parameter numbers start at This function is only useful when inspecting the result of describePrepared For other types of queries it will return zero",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "paramtype",
        "normalized": "Result-\u003eInt-\u003eIO Oid",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Result-\u003eInt-\u003eIO Oid"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:pass",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the password of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#pass",
        "fct-type": "function",
        "title": "pass"
      },
      "index": {
        "description": "Returns the password of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "pass",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:port",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the port of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#port",
        "fct-type": "function",
        "title": "port"
      },
      "index": {
        "description": "Returns the port of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "port",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:prepare",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a request to create a prepared statement with the given\n parameters, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e creates a prepared statement for later execution with\n \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e. This feature allows commands that will be used\n repeatedly to be parsed and planned just once, rather than each\n time they are executed. \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0\n and later connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe function creates a prepared statement named stmtName from the\n query string, which must contain a single SQL command. stmtName can\n be \"\" to create an unnamed statement, in which case any\n pre-existing unnamed statement is automatically replaced; otherwise\n it is an error if the statement name is already defined in the\n current session. If any parameters are used, they are referred to\n in the query as $1, $2, etc. paramTypes specifies, by \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e, the\n data types to be assigned to the parameter symbols. If paramTypes\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, or any particular element in the array is zero, the\n server assigns a data type to the parameter symbol in the same way\n it would do for an untyped literal string. Also, the query can use\n parameter symbols with numbers higher than the length of\n paramTypes; data types will be inferred for these symbols as\n well. (See \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e for a means to find out what data\n types were inferred.)\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, the result is normally a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e whose contents\n indicate server-side success or failure. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e result\n indicates out-of-memory or inability to send the command at\n all. Use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to get more information about such errors.\n\u003c/p\u003e\u003cp\u003ePrepared statements for use with \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e can also be created\n by executing SQL PREPARE statements. (But \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e is more\n flexible since it does not require parameter types to be\n pre-specified.) Also, although there is no libpq function for\n deleting a prepared statement, the SQL DEALLOCATE statement can be\n used for that purpose.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e ByteString-\u003e Maybe [Oid]-\u003e IO (Maybe Result)",
        "fct-type": "function",
        "title": "prepare"
      },
      "index": {
        "description": "Submits request to create prepared statement with the given parameters and waits for completion prepare creates prepared statement for later execution with execPrepared This feature allows commands that will be used repeatedly to be parsed and planned just once rather than each time they are executed prepare is supported only in protocol and later connections it will fail when using protocol The function creates prepared statement named stmtName from the query string which must contain single SQL command stmtName can be to create an unnamed statement in which case any pre-existing unnamed statement is automatically replaced otherwise it is an error if the statement name is already defined in the current session If any parameters are used they are referred to in the query as etc paramTypes specifies by Oid the data types to be assigned to the parameter symbols If paramTypes is Nothing or any particular element in the array is zero the server assigns data type to the parameter symbol in the same way it would do for an untyped literal string Also the query can use parameter symbols with numbers higher than the length of paramTypes data types will be inferred for these symbols as well See describePrepared for means to find out what data types were inferred As with exec the result is normally Result whose contents indicate server-side success or failure Nothing result indicates out-of-memory or inability to send the command at all Use errorMessage to get more information about such errors Prepared statements for use with execPrepared can also be created by executing SQL PREPARE statements But prepare is more flexible since it does not require parameter types to be pre-specified Also although there is no libpq function for deleting prepared statement the SQL DEALLOCATE statement can be used for that purpose",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "prepare",
        "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO(Maybe Result)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO(Maybe Result)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:protocolVersion",
      "description": {
        "fct-descr": "\u003cp\u003eInterrogates the frontend/backend protocol being used.\n\u003c/p\u003e\u003cp\u003eApplications might wish to use this to determine whether certain\n features are supported. Currently, the possible values are 2 (2.0\n protocol), 3 (3.0 protocol), or zero (connection bad). This will\n not change after connection startup is complete, but it could\n theoretically change during a connection reset. The 3.0 protocol\n will normally be used when communicating with PostgreSQL 7.4 or\n later servers; pre-7.4 servers support only protocol 2.0. (Protocol\n 1.0 is obsolete and not supported by libpq.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#protocolVersion",
        "fct-type": "function",
        "title": "protocolVersion"
      },
      "index": {
        "description": "Interrogates the frontend backend protocol being used Applications might wish to use this to determine whether certain features are supported Currently the possible values are protocol protocol or zero connection bad This will not change after connection startup is complete but it could theoretically change during connection reset The protocol will normally be used when communicating with PostgreSQL or later servers pre-7.4 servers support only protocol Protocol is obsolete and not supported by libpq",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "protocolVersion",
        "normalized": "Connection-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "Version",
        "signature": "Connection-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:putCopyData",
      "description": {
        "fct-descr": "\u003cp\u003eSend raw \u003ccode\u003eCOPY\u003c/code\u003e data to the server during the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO CopyInResult",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#putCopyData",
        "fct-type": "function",
        "title": "putCopyData"
      },
      "index": {
        "description": "Send raw COPY data to the server during the CopyIn state",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "putCopyData",
        "normalized": "Connection-\u003eByteString-\u003eIO CopyInResult",
        "package": "postgresql-libpq",
        "partial": "Copy Data",
        "signature": "Connection-\u003eByteString-\u003eIO CopyInResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:putCopyEnd",
      "description": {
        "fct-descr": "\u003cp\u003eSend end-of-data indication to the server during the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eputCopyEnd conn Nothing\u003c/code\u003e ends the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e operation successfully.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eputCopyEnd conn (Just errormsg)\u003c/code\u003e forces the \u003ccode\u003eCOPY\u003c/code\u003e to fail, with\n    \u003ccode\u003eerrormsg\u003c/code\u003e used as the error message.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfter \u003ccode\u003e\u003ca\u003eputCopyEnd\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eCopyOk\u003c/code\u003e, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the final\n result status of the \u003ccode\u003eCOPY\u003c/code\u003e command.  Then return to normal operation.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Maybe ByteString -\u003e IO CopyInResult",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#putCopyEnd",
        "fct-type": "function",
        "title": "putCopyEnd"
      },
      "index": {
        "description": "Send end-of-data indication to the server during the CopyIn state putCopyEnd conn Nothing ends the CopyIn operation successfully putCopyEnd conn Just errormsg forces the COPY to fail with errormsg used as the error message After putCopyEnd returns CopyOk call getResult to obtain the final result status of the COPY command Then return to normal operation",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "putCopyEnd",
        "normalized": "Connection-\u003eMaybe ByteString-\u003eIO CopyInResult",
        "package": "postgresql-libpq",
        "partial": "Copy End",
        "signature": "Connection-\u003eMaybe ByteString-\u003eIO CopyInResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resStatus",
      "description": {
        "fct-descr": "\u003cp\u003eConverts the \u003ccode\u003e\u003ca\u003eExecStatus\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003e\u003ca\u003eresultStatus\u003c/a\u003e\u003c/code\u003e into a\n string describing the status code. The caller should not\n free the result.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ExecStatus -\u003e IO ByteString",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resStatus",
        "fct-type": "function",
        "title": "resStatus"
      },
      "index": {
        "description": "Converts the ExecStatus returned by resultStatus into string describing the status code The caller should not free the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resStatus",
        "normalized": "ExecStatus-\u003eIO ByteString",
        "package": "postgresql-libpq",
        "partial": "Status",
        "signature": "ExecStatus-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:reset",
      "description": {
        "fct-descr": "\u003cp\u003eResets the communication channel to the server.\n\u003c/p\u003e\u003cp\u003eThis function will close the connection to the server and attempt\n to reestablish a new connection to the same server, using all the\n same parameters previously used. This might be useful for error\n recovery if a working connection is lost.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#reset",
        "fct-type": "function",
        "title": "reset"
      },
      "index": {
        "description": "Resets the communication channel to the server This function will close the connection to the server and attempt to reestablish new connection to the same server using all the same parameters previously used This might be useful for error recovery if working connection is lost",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "reset",
        "normalized": "Connection-\u003eIO()",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resetPoll",
      "description": {
        "fct-descr": "\u003cp\u003eTo initiate a connection reset, call \u003ccode\u003e\u003ca\u003eresetStart\u003c/a\u003e\u003c/code\u003e. If it returns\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the reset has failed. If it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, poll the reset\n using \u003ccode\u003e\u003ca\u003eresetPoll\u003c/a\u003e\u003c/code\u003e in exactly the same way as you would create the\n connection using \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO PollingStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resetPoll",
        "fct-type": "function",
        "title": "resetPoll"
      },
      "index": {
        "description": "To initiate connection reset call resetStart If it returns False the reset has failed If it returns True poll the reset using resetPoll in exactly the same way as you would create the connection using connectPoll",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resetPoll",
        "normalized": "Connection-\u003eIO PollingStatus",
        "package": "postgresql-libpq",
        "partial": "Poll",
        "signature": "Connection-\u003eIO PollingStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resetStart",
      "description": {
        "fct-descr": "\u003cp\u003eReset the communication channel to the server, in a nonblocking manner.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resetStart",
        "fct-type": "function",
        "title": "resetStart"
      },
      "index": {
        "description": "Reset the communication channel to the server in nonblocking manner",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resetStart",
        "normalized": "Connection-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Start",
        "signature": "Connection-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultErrorField",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an individual field of an error report.\n\u003c/p\u003e\u003cp\u003efieldcode is an error field identifier; see the symbols listed\n below. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned if the PGresult is not an error or\n warning result, or does not include the specified field. Field\n values will normally not include a trailing newline.\n\u003c/p\u003e\u003cp\u003eThe client is responsible for formatting displayed information to\n meet its needs; in particular it should break long lines as\n needed. Newline characters appearing in the error message fields\n should be treated as paragraph breaks, not line breaks.\n\u003c/p\u003e\u003cp\u003eErrors generated internally by libpq will have severity and primary\n message, but typically no other fields. Errors returned by a\n pre-3.0-protocol server will include severity and primary message,\n and sometimes a detail message, but no other fields.\n\u003c/p\u003e\u003cp\u003eNote that error fields are only available from \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e objects,\n not \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e objects; there is no errorField function.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e FieldCode -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resultErrorField",
        "fct-type": "function",
        "title": "resultErrorField"
      },
      "index": {
        "description": "Returns an individual field of an error report fieldcode is an error field identifier see the symbols listed below Nothing is returned if the PGresult is not an error or warning result or does not include the specified field Field values will normally not include trailing newline The client is responsible for formatting displayed information to meet its needs in particular it should break long lines as needed Newline characters appearing in the error message fields should be treated as paragraph breaks not line breaks Errors generated internally by libpq will have severity and primary message but typically no other fields Errors returned by pre-3.0-protocol server will include severity and primary message and sometimes detail message but no other fields Note that error fields are only available from Result objects not Connection objects there is no errorField function",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resultErrorField",
        "normalized": "Result-\u003eFieldCode-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Error Field",
        "signature": "Result-\u003eFieldCode-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultErrorMessage",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the error message most recently generated by an operation\n on the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resultErrorMessage",
        "fct-type": "function",
        "title": "resultErrorMessage"
      },
      "index": {
        "description": "Returns the error message most recently generated by an operation on the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resultErrorMessage",
        "normalized": "Result-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Error Message",
        "signature": "Result-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the result status of the command.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO ExecStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#resultStatus",
        "fct-type": "function",
        "title": "resultStatus"
      },
      "index": {
        "description": "Returns the result status of the command",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "resultStatus",
        "normalized": "Result-\u003eIO ExecStatus",
        "package": "postgresql-libpq",
        "partial": "Status",
        "signature": "Result-\u003eIO ExecStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendDescribePortal",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a request to obtain information about the specified\n portal, without waiting for completion.\n\u003c/p\u003e\u003cp\u003eThis is an asynchronous version of \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e: it returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was able to dispatch the request, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if\n not. After a successful call, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the\n results. The function's parameters are handled identically to\n \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e, it will not work on\n 2.0-protocol connections.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO Bool",
        "fct-type": "function",
        "title": "sendDescribePortal"
      },
      "index": {
        "description": "Submits request to obtain information about the specified portal without waiting for completion This is an asynchronous version of describePortal it returns True if it was able to dispatch the request and False if not After successful call call getResult to obtain the results The function parameters are handled identically to describePortal Like describePortal it will not work on protocol connections",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendDescribePortal",
        "normalized": "Connection-\u003eByteString-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Describe Portal",
        "signature": "Connection-\u003eByteString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendDescribePrepared",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a request to obtain information about the specified\n prepared statement, without waiting for completion.\n\u003c/p\u003e\u003cp\u003eThis is an asynchronous version of \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e: it returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was able to dispatch the request, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if\n not. After a successful call, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the\n results. The function's parameters are handled identically to\n \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e, it will not work on\n 2.0-protocol connections.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection-\u003e ByteString-\u003e IO Bool",
        "fct-type": "function",
        "title": "sendDescribePrepared"
      },
      "index": {
        "description": "Submits request to obtain information about the specified prepared statement without waiting for completion This is an asynchronous version of describePrepared it returns True if it was able to dispatch the request and False if not After successful call call getResult to obtain the results The function parameters are handled identically to describePrepared Like describePrepared it will not work on protocol connections",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendDescribePrepared",
        "normalized": "Connection-\u003eByteString-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Describe Prepared",
        "signature": "Connection-\u003eByteString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendPrepare",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to create a prepared statement with the given\n parameters, without waiting for completion.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e ByteString -\u003e Maybe [Oid] -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#sendPrepare",
        "fct-type": "function",
        "title": "sendPrepare"
      },
      "index": {
        "description": "Sends request to create prepared statement with the given parameters without waiting for completion",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendPrepare",
        "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Prepare",
        "signature": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQuery",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a command to the server without waiting for the\n result(s). \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned if the command was successfully\n dispatched and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not (in which case, use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to\n get more information about the failure).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#sendQuery",
        "fct-type": "function",
        "title": "sendQuery"
      },
      "index": {
        "description": "Submits command to the server without waiting for the result True is returned if the command was successfully dispatched and False if not in which case use errorMessage to get more information about the failure",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendQuery",
        "normalized": "Connection-\u003eByteString-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Query",
        "signature": "Connection-\u003eByteString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQueryParams",
      "description": {
        "fct-descr": "\u003cp\u003eSubmits a command and separate parameters to the server without\n waiting for the result(s).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e [Maybe (Oid, ByteString, Format)] -\u003e Format -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#sendQueryParams",
        "fct-type": "function",
        "title": "sendQueryParams"
      },
      "index": {
        "description": "Submits command and separate parameters to the server without waiting for the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendQueryParams",
        "normalized": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Query Params",
        "signature": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQueryPrepared",
      "description": {
        "fct-descr": "\u003cp\u003eSends a request to execute a prepared statement with given\n parameters, without waiting for the result(s).\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e [Maybe (ByteString, Format)] -\u003e Format -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#sendQueryPrepared",
        "fct-type": "function",
        "title": "sendQueryPrepared"
      },
      "index": {
        "description": "Sends request to execute prepared statement with given parameters without waiting for the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "sendQueryPrepared",
        "normalized": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Query Prepared",
        "signature": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:serverVersion",
      "description": {
        "fct-descr": "\u003cp\u003eReturns an integer representing the backend version.\n\u003c/p\u003e\u003cp\u003eApplications might use this to determine the version of the\n database server they are connected to. The number is formed by\n converting the major, minor, and revision numbers into\n two-decimal-digit numbers and appending them together. For example,\n version 8.1.5 will be returned as 80105, and version 8.2 will be\n returned as 80200 (leading zeroes are not shown). Zero is returned\n if the connection is bad.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO Int",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#serverVersion",
        "fct-type": "function",
        "title": "serverVersion"
      },
      "index": {
        "description": "Returns an integer representing the backend version Applications might use this to determine the version of the database server they are connected to The number is formed by converting the major minor and revision numbers into two-decimal-digit numbers and appending them together For example version will be returned as and version will be returned as leading zeroes are not shown Zero is returned if the connection is bad",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "serverVersion",
        "normalized": "Connection-\u003eIO Int",
        "package": "postgresql-libpq",
        "partial": "Version",
        "signature": "Connection-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setClientEncoding",
      "description": {
        "fct-descr": "\u003cp\u003eSets the client encoding.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e ByteString -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#setClientEncoding",
        "fct-type": "function",
        "title": "setClientEncoding"
      },
      "index": {
        "description": "Sets the client encoding",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "setClientEncoding",
        "normalized": "Connection-\u003eByteString-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "Client Encoding",
        "signature": "Connection-\u003eByteString-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setErrorVerbosity",
      "description": {
        "fct-descr": "\u003cp\u003eDetermines the verbosity of messages returned by \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eresultErrorMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esetErrorVerbosity\u003c/a\u003e\u003c/code\u003e sets the verbosity mode, returning the\n connection's previous setting. In \u003ccode\u003e\u003ca\u003eErrorsTerse\u003c/a\u003e\u003c/code\u003e mode, returned\n messages include severity, primary text, and position only; this\n will normally fit on a single line. The default mode produces\n messages that include the above plus any detail, hint, or context\n fields (these might span multiple lines). The \u003ccode\u003e\u003ca\u003eErrorsVerbose\u003c/a\u003e\u003c/code\u003e mode\n includes all available fields. Changing the verbosity does not\n affect the messages available from already-existing \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n objects, only subsequently-created ones.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Verbosity -\u003e IO Verbosity",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#setErrorVerbosity",
        "fct-type": "function",
        "title": "setErrorVerbosity"
      },
      "index": {
        "description": "Determines the verbosity of messages returned by errorMessage and resultErrorMessage setErrorVerbosity sets the verbosity mode returning the connection previous setting In ErrorsTerse mode returned messages include severity primary text and position only this will normally fit on single line The default mode produces messages that include the above plus any detail hint or context fields these might span multiple lines The ErrorsVerbose mode includes all available fields Changing the verbosity does not affect the messages available from already-existing Result objects only subsequently-created ones",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "setErrorVerbosity",
        "normalized": "Connection-\u003eVerbosity-\u003eIO Verbosity",
        "package": "postgresql-libpq",
        "partial": "Error Verbosity",
        "signature": "Connection-\u003eVerbosity-\u003eIO Verbosity"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setnonblocking",
      "description": {
        "fct-descr": "\u003cp\u003eSets the nonblocking status of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e Bool -\u003e IO Bool",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#setnonblocking",
        "fct-type": "function",
        "title": "setnonblocking"
      },
      "index": {
        "description": "Sets the nonblocking status of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "setnonblocking",
        "normalized": "Connection-\u003eBool-\u003eIO Bool",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eBool-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:socket",
      "description": {
        "fct-descr": "\u003cp\u003eObtains the file descriptor number of the connection socket to\n the server. (This will not change during normal operation, but\n could change during connection setup or reset.)\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe Fd)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#socket",
        "fct-type": "function",
        "title": "socket"
      },
      "index": {
        "description": "Obtains the file descriptor number of the connection socket to the server This will not change during normal operation but could change during connection setup or reset",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "socket",
        "normalized": "Connection-\u003eIO(Maybe Fd)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe Fd)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:status",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the status of the connection.\n\u003c/p\u003e\u003cp\u003eThe status can be one of a number of values. However, only two of\n these are seen outside of an asynchronous connection procedure:\n \u003ccode\u003e\u003ca\u003eConnectionOk\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e. A good connection to the\n database has the status \u003ccode\u003e\u003ca\u003eConnectionOk\u003c/a\u003e\u003c/code\u003e. A failed connection attempt\n is signaled by status \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e. Ordinarily, an OK status\n will remain so until \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e, but a communications failure might\n result in the status changing to \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e prematurely. In\n that case the application could try to recover by calling \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the entry for \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e with regards to\n other status codes that might be seen.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO ConnStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#status",
        "fct-type": "function",
        "title": "status"
      },
      "index": {
        "description": "Returns the status of the connection The status can be one of number of values However only two of these are seen outside of an asynchronous connection procedure ConnectionOk and ConnectionBad good connection to the database has the status ConnectionOk failed connection attempt is signaled by status ConnectionBad Ordinarily an OK status will remain so until finish but communications failure might result in the status changing to ConnectionBad prematurely In that case the application could try to recover by calling reset See the entry for connectStart and connectPoll with regards to other status codes that might be seen",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "status",
        "normalized": "Connection-\u003eIO ConnStatus",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO ConnStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:toColumn",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "a -\u003e Column",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#toColumn",
        "fct-type": "function",
        "title": "toColumn"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "toColumn",
        "normalized": "a-\u003eColumn",
        "package": "postgresql-libpq",
        "partial": "Column",
        "signature": "a-\u003eColumn"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:toRow",
      "description": {
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "a -\u003e Row",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#toRow",
        "fct-type": "function",
        "title": "toRow"
      },
      "index": {
        "description": "",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "toRow",
        "normalized": "a-\u003eRow",
        "package": "postgresql-libpq",
        "partial": "Row",
        "signature": "a-\u003eRow"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:transactionStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the current in-transaction status of the server.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransActive\u003c/a\u003e\u003c/code\u003e is reported only when a query has been sent to the\n server and not yet completed.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO TransactionStatus",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#transactionStatus",
        "fct-type": "function",
        "title": "transactionStatus"
      },
      "index": {
        "description": "Returns the current in-transaction status of the server TransActive is reported only when query has been sent to the server and not yet completed",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "transactionStatus",
        "normalized": "Connection-\u003eIO TransactionStatus",
        "package": "postgresql-libpq",
        "partial": "Status",
        "signature": "Connection-\u003eIO TransactionStatus"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:unescapeBytea",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003eByteString\u003c/code\u003e representation of binary data into binary\n data - the reverse of \u003ccode\u003ePQescapeByteaConn\u003c/code\u003e. This is needed when\n retrieving bytea data in text format, but not when retrieving it in\n binary format.\n\u003c/p\u003e\u003cp\u003eThe parameter points to a string such as might be returned by\n \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e when applied to a bytea column. \u003ccode\u003e\u003ca\u003eunescapeBytea\u003c/a\u003e\u003c/code\u003e converts\n this string representation into its binary representation. It\n returns a \u003ccode\u003eByteString\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on error.\n\u003c/p\u003e\u003cp\u003eThis conversion is not exactly the inverse of \u003ccode\u003e\u003ca\u003eescapeByteaConn\u003c/a\u003e\u003c/code\u003e,\n because the string is not expected to be \u003ca\u003eescaped\u003c/a\u003e when received\n from \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e. In particular this means there is no need for\n string quoting considerations, and so no need for a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n parameter.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "ByteString -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#unescapeBytea",
        "fct-type": "function",
        "title": "unescapeBytea"
      },
      "index": {
        "description": "Converts ByteString representation of binary data into binary data the reverse of PQescapeByteaConn This is needed when retrieving bytea data in text format but not when retrieving it in binary format The parameter points to string such as might be returned by getvalue when applied to bytea column unescapeBytea converts this string representation into its binary representation It returns ByteString or Nothing on error This conversion is not exactly the inverse of escapeByteaConn because the string is not expected to be escaped when received from getvalue In particular this means there is no need for string quoting considerations and so no need for Connection parameter",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "unescapeBytea",
        "normalized": "ByteString-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "Bytea",
        "signature": "ByteString-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:unsafeFreeResult",
      "description": {
        "fct-descr": "\u003cp\u003eFrees the memory associated with a result.  Note that using this\n function correctly is especially tricky;  you need to ensure that\n no references to the result.   This means no references to a value\n returned by \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e,  no references hiding inside an unevaluated\n thunk,  etc.    Improper use of this function is likely to cause a\n segfault.   Also,  the use of this function is not strictly necessary;\n the memory will get freed by the garbage collector when there are no\n more references to the result.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Result -\u003e IO ()",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#unsafeFreeResult",
        "fct-type": "function",
        "title": "unsafeFreeResult"
      },
      "index": {
        "description": "Frees the memory associated with result Note that using this function correctly is especially tricky you need to ensure that no references to the result This means no references to value returned by getvalue no references hiding inside an unevaluated thunk etc Improper use of this function is likely to cause segfault Also the use of this function is not strictly necessary the memory will get freed by the garbage collector when there are no more references to the result",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "unsafeFreeResult",
        "normalized": "Result-\u003eIO()",
        "package": "postgresql-libpq",
        "partial": "Free Result",
        "signature": "Result-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:user",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the user name of the connection.\n\u003c/p\u003e",
        "fct-module": "Database.PostgreSQL.LibPQ",
        "fct-package": "postgresql-libpq",
        "fct-signature": "Connection -\u003e IO (Maybe ByteString)",
        "fct-source": "src/Database-PostgreSQL-LibPQ.html#user",
        "fct-type": "function",
        "title": "user"
      },
      "index": {
        "description": "Returns the user name of the connection",
        "hierarchy": "Database PostgreSQL LibPQ",
        "module": "Database.PostgreSQL.LibPQ",
        "name": "user",
        "normalized": "Connection-\u003eIO(Maybe ByteString)",
        "package": "postgresql-libpq",
        "partial": "",
        "signature": "Connection-\u003eIO(Maybe ByteString)"
      }
    }
  }
]