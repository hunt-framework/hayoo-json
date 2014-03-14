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
        "word": "postgresql-libpq"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis is a binding to libpq: the C application programmer's\n interface to PostgreSQL. libpq is a set of library functions that\n allow client programs to pass queries to the PostgreSQL backend\n server and to receive the results of these queries.\n\u003c/p\u003e\u003cp\u003eThis is intended to be a very low-level interface to libpq.  It\n provides memory management and a somewhat more consistent interface\n to error conditions.  Application code should typically use a\n higher-level PostgreSQL binding.\n\u003c/p\u003e\u003cp\u003eThis interface is not safe,  because libpq unfortunately conflates\n explicit disconnects with memory management.   A use-after-free memory\n fault will result if a connection is used in any way after \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e is\n called.  This will likely cause a segfault,  or return an error if memory\n has not yet been reused.  Other more bizarre behaviors are possible,\n though unlikely by chance.  Higher-level bindings need to be aware of\n this issue and need to ensure that application code cannot cause the\n functions in this module to be called on an \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003eed connection.\n\u003c/p\u003e\u003cp\u003eOne possibility is to represent a connection in a higher-level interface\n as \u003ccode\u003eMVar (Maybe Connection)\u003c/code\u003e, using \u003ccode\u003eNothing\u003c/code\u003e to represent an explicitly\n disconnected state.  This was done in an earlier incarnation of this\n library,  however this was removed because a higher level binding is\n likely to use a similar construct to deal with other issues.  Thus\n incorporating that in this module results in extra layers of indirection\n for relatively little functionality.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LibPQ",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html",
          "type": "module"
        },
        "index": {
          "description": "This is binding to libpq the application programmer interface to PostgreSQL libpq is set of library functions that allow client programs to pass queries to the PostgreSQL backend server and to receive the results of these queries This is intended to be very low-level interface to libpq It provides memory management and somewhat more consistent interface to error conditions Application code should typically use higher-level PostgreSQL binding This interface is not safe because libpq unfortunately conflates explicit disconnects with memory management use-after-free memory fault will result if connection is used in any way after finish is called This will likely cause segfault or return an error if memory has not yet been reused Other more bizarre behaviors are possible though unlikely by chance Higher-level bindings need to be aware of this issue and need to ensure that application code cannot cause the functions in this module to be called on an finish ed connection One possibility is to represent connection in higher-level interface as MVar Maybe Connection using Nothing to represent an explicitly disconnected state This was done in an earlier incarnation of this library however this was removed because higher level binding is likely to use similar construct to deal with other issues Thus incorporating that in this module results in extra layers of indirection for relatively little functionality",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LibPQ",
          "package": "postgresql-libpq",
          "partial": "Lib PQ",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContains the information needed to cancel a command issued\n through a particular database connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Cancel",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Cancel",
          "type": "data"
        },
        "index": {
          "description": "Contains the information needed to cancel command issued through particular database connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Cancel",
          "package": "postgresql-libpq",
          "partial": "Cancel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Column",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Column",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Column",
          "package": "postgresql-libpq",
          "partial": "Column",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Column"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnStatus",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnStatus",
          "package": "postgresql-libpq",
          "partial": "Conn Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:ConnStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e encapsulates a connection to the backend.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Connection",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Connection",
          "type": "data"
        },
        "index": {
          "description": "Connection encapsulates connection to the backend",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Connection",
          "package": "postgresql-libpq",
          "partial": "Connection",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Connection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInResult",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInResult",
          "package": "postgresql-libpq",
          "partial": "Copy In Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:CopyInResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutResult",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutResult",
          "package": "postgresql-libpq",
          "partial": "Copy Out Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:CopyOutResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ExecStatus",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ExecStatus",
          "package": "postgresql-libpq",
          "partial": "Exec Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:ExecStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FieldCode",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FieldCode",
          "package": "postgresql-libpq",
          "partial": "Field Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:FieldCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushStatus",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushStatus",
          "package": "postgresql-libpq",
          "partial": "Flush Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:FlushStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Format",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Format",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Format",
          "package": "postgresql-libpq",
          "partial": "Format",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoFd is a Large Object (pseudo) File Descriptor.  It is understood by\n libpq but not by operating system calls.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LoFd",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#LoFd",
          "type": "newtype"
        },
        "index": {
          "description": "LoFd is Large Object pseudo File Descriptor It is understood by libpq but not by operating system calls",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LoFd",
          "package": "postgresql-libpq",
          "partial": "Lo Fd",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:LoFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Notify",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Notify",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Notify",
          "package": "postgresql-libpq",
          "partial": "Notify",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Oid",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Oid",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Oid",
          "package": "postgresql-libpq",
          "partial": "Oid",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingStatus",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingStatus",
          "package": "postgresql-libpq",
          "partial": "Polling Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:PollingStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e encapsulates the result of a query (or more precisely,\n of a single SQL command --- a query string given to \u003ccode\u003e\u003ca\u003esendQuery\u003c/a\u003e\u003c/code\u003e can\n contain multiple commands and thus return multiple instances of\n \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Result",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Result",
          "type": "data"
        },
        "index": {
          "description": "Result encapsulates the result of query or more precisely of single SQL command query string given to sendQuery can contain multiple commands and thus return multiple instances of Result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Result",
          "package": "postgresql-libpq",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Row",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Row",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Row",
          "package": "postgresql-libpq",
          "partial": "Row",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransactionStatus",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransactionStatus",
          "package": "postgresql-libpq",
          "partial": "Transaction Status",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:TransactionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Verbosity",
          "package": "postgresql-libpq",
          "source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Verbosity",
          "package": "postgresql-libpq",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe server's response was not understood.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "BadResponse",
          "package": "postgresql-libpq",
          "signature": "BadResponse",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "The server response was not understood",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "BadResponse",
          "package": "postgresql-libpq",
          "partial": "Bad Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:BadResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Binary",
          "package": "postgresql-libpq",
          "signature": "Binary",
          "source": "src/Database-PostgreSQL-LibPQ.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Binary",
          "package": "postgresql-libpq",
          "partial": "Binary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Binary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Col",
          "package": "postgresql-libpq",
          "signature": "Col CInt",
          "source": "src/Database-PostgreSQL-LibPQ.html#Column",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Col",
          "package": "postgresql-libpq",
          "partial": "Col",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Col"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful completion of a\n command returning no data.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CommandOk",
          "package": "postgresql-libpq",
          "signature": "CommandOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "Successful completion of command returning no data",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CommandOk",
          "package": "postgresql-libpq",
          "partial": "Command Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CommandOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceived authentication;\n waiting for backend start-up to\n finish.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionAuthOk",
          "package": "postgresql-libpq",
          "signature": "ConnectionAuthOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Received authentication waiting for backend start-up to finish",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionAuthOk",
          "package": "postgresql-libpq",
          "partial": "Connection Auth Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionAuthOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaiting for a response from the server.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionAwaitingResponse",
          "package": "postgresql-libpq",
          "signature": "ConnectionAwaitingResponse",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Waiting for response from the server",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionAwaitingResponse",
          "package": "postgresql-libpq",
          "partial": "Connection Awaiting Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionAwaitingResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe connection procedure has failed.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionBad",
          "package": "postgresql-libpq",
          "signature": "ConnectionBad",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "The connection procedure has failed",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionBad",
          "package": "postgresql-libpq",
          "partial": "Connection Bad",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionBad"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConnection OK; waiting to send.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionMade",
          "package": "postgresql-libpq",
          "signature": "ConnectionMade",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Connection OK waiting to send",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionMade",
          "package": "postgresql-libpq",
          "partial": "Connection Made",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionMade"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e is ready.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionOk",
          "package": "postgresql-libpq",
          "signature": "ConnectionOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "The Connection is ready",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionOk",
          "package": "postgresql-libpq",
          "partial": "Connection Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegotiating SSL encryption.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionSSLStartup",
          "package": "postgresql-libpq",
          "signature": "ConnectionSSLStartup",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Negotiating SSL encryption",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionSSLStartup",
          "package": "postgresql-libpq",
          "partial": "Connection SSLStartup",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionSSLStartup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegotiating environment-driven\n parameter settings.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionSetEnv",
          "package": "postgresql-libpq",
          "signature": "ConnectionSetEnv",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Negotiating environment-driven parameter settings",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionSetEnv",
          "package": "postgresql-libpq",
          "partial": "Connection Set Env",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionSetEnv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaiting for connection to be made.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionStarted",
          "package": "postgresql-libpq",
          "signature": "ConnectionStarted",
          "source": "src/Database-PostgreSQL-LibPQ.html#ConnStatus",
          "type": "function"
        },
        "index": {
          "description": "Waiting for connection to be made",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ConnectionStarted",
          "package": "postgresql-libpq",
          "partial": "Connection Started",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ConnectionStarted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy In (to server) data transfer\n started.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyIn",
          "package": "postgresql-libpq",
          "signature": "CopyIn",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "Copy In to server data transfer started",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyIn",
          "package": "postgresql-libpq",
          "partial": "Copy In",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occurred (use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n   to retrieve details).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInError",
          "package": "postgresql-libpq",
          "signature": "CopyInError",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
          "type": "function"
        },
        "index": {
          "description": "An error occurred use errorMessage to retrieve details",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInError",
          "package": "postgresql-libpq",
          "partial": "Copy In Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data was sent.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInOk",
          "package": "postgresql-libpq",
          "signature": "CopyInOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
          "type": "function"
        },
        "index": {
          "description": "The data was sent",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInOk",
          "package": "postgresql-libpq",
          "partial": "Copy In Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe data was not sent because the\n   attempt would block (this case is only\n   possible if the connection is in\n   nonblocking mode)  Wait for\n   write-ready (e.g. by using\n   \u003ccode\u003e\u003ca\u003ethreadWaitWrite\u003c/a\u003e\u003c/code\u003e\n   on the \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e) and try again.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInWouldBlock",
          "package": "postgresql-libpq",
          "signature": "CopyInWouldBlock",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyInResult",
          "type": "function"
        },
        "index": {
          "description": "The data was not sent because the attempt would block this case is only possible if the connection is in nonblocking mode Wait for write-ready e.g by using threadWaitWrite on the socket and try again",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyInWouldBlock",
          "package": "postgresql-libpq",
          "partial": "Copy In Would Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyInWouldBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCopy Out (from server) data\n transfer started.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOut",
          "package": "postgresql-libpq",
          "signature": "CopyOut",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "Copy Out from server data transfer started",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOut",
          "package": "postgresql-libpq",
          "partial": "Copy Out",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNo more rows are available\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutDone",
          "package": "postgresql-libpq",
          "signature": "CopyOutDone",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "No more rows are available",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutDone",
          "package": "postgresql-libpq",
          "partial": "Copy Out Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn error occurred (e.g. the connection is\n   not in the \u003ccode\u003e\u003ca\u003eCopyOut\u003c/a\u003e\u003c/code\u003e state).  Call\n   \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e for more information.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutError",
          "package": "postgresql-libpq",
          "signature": "CopyOutError",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "An error occurred e.g the connection is not in the CopyOut state Call errorMessage for more information",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutError",
          "package": "postgresql-libpq",
          "partial": "Copy Out Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData representing a single row of the result\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutRow",
          "package": "postgresql-libpq",
          "signature": "CopyOutRow !ByteString",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "Data representing single row of the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutRow",
          "package": "postgresql-libpq",
          "partial": "Copy Out Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA complete row is not yet available.  This\n   case is only possible when \u003ccode\u003e\u003ca\u003egetCopyData\u003c/a\u003e\u003c/code\u003e is\n   has the async parameter set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutWouldBlock",
          "package": "postgresql-libpq",
          "signature": "CopyOutWouldBlock",
          "source": "src/Database-PostgreSQL-LibPQ.html#CopyOutResult",
          "type": "function"
        },
        "index": {
          "description": "complete row is not yet available This case is only possible when getCopyData is has the async parameter set to True",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "CopyOutWouldBlock",
          "package": "postgresql-libpq",
          "partial": "Copy Out Would Block",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:CopyOutWouldBlock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn indication of the context in which the error\n occurred. Presently this includes a call stack\n traceback of active procedural language functions\n and internally-generated queries. The trace is one\n entry per line, most recent first.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagContext",
          "package": "postgresql-libpq",
          "signature": "DiagContext",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "An indication of the context in which the error occurred Presently this includes call stack traceback of active procedural language functions and internally-generated queries The trace is one entry per line most recent first",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagContext",
          "package": "postgresql-libpq",
          "partial": "Diag Context",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagContext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is defined the same as the\n \u003ccode\u003e\u003ca\u003eDiagStatementPosition\u003c/a\u003e\u003c/code\u003e field, but it is used when\n the cursor position refers to an internally\n generated command rather than the one submitted by\n the client. The \u003ccode\u003e\u003ca\u003eDiagInternalQuery\u003c/a\u003e\u003c/code\u003e field will\n always appear when this field appears.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagInternalPosition",
          "package": "postgresql-libpq",
          "signature": "DiagInternalPosition",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "This is defined the same as the DiagStatementPosition field but it is used when the cursor position refers to an internally generated command rather than the one submitted by the client The DiagInternalQuery field will always appear when this field appears",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagInternalPosition",
          "package": "postgresql-libpq",
          "partial": "Diag Internal Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagInternalPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe text of a failed internally-generated\n command. This could be, for example, a SQL query\n issued by a PL/pgSQL function.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagInternalQuery",
          "package": "postgresql-libpq",
          "signature": "DiagInternalQuery",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The text of failed internally-generated command This could be for example SQL query issued by PL pgSQL function",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagInternalQuery",
          "package": "postgresql-libpq",
          "partial": "Diag Internal Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagInternalQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetail: an optional secondary error message\n carrying more detail about the problem. Might run to\n multiple lines.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessageDetail",
          "package": "postgresql-libpq",
          "signature": "DiagMessageDetail",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "Detail an optional secondary error message carrying more detail about the problem Might run to multiple lines",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessageDetail",
          "package": "postgresql-libpq",
          "partial": "Diag Message Detail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessageDetail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHint: an optional suggestion what to do about the\n problem. This is intended to differ from detail in\n that it offers advice (potentially inappropriate)\n rather than hard facts. Might run to multiple lines.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessageHint",
          "package": "postgresql-libpq",
          "signature": "DiagMessageHint",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "Hint an optional suggestion what to do about the problem This is intended to differ from detail in that it offers advice potentially inappropriate rather than hard facts Might run to multiple lines",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessageHint",
          "package": "postgresql-libpq",
          "partial": "Diag Message Hint",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessageHint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe primary human-readable error message\n (typically one line). Always present.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessagePrimary",
          "package": "postgresql-libpq",
          "signature": "DiagMessagePrimary",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The primary human-readable error message typically one line Always present",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagMessagePrimary",
          "package": "postgresql-libpq",
          "partial": "Diag Message Primary",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagMessagePrimary"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe severity; the field contents are ERROR, FATAL,\n or PANIC (in an error message), or WARNING, NOTICE,\n DEBUG, INFO, or LOG (in a notice message), or a\n localized translation of one of these. Always\n present.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSeverity",
          "package": "postgresql-libpq",
          "signature": "DiagSeverity",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The severity the field contents are ERROR FATAL or PANIC in an error message or WARNING NOTICE DEBUG INFO or LOG in notice message or localized translation of one of these Always present",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSeverity",
          "package": "postgresql-libpq",
          "partial": "Diag Severity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSeverity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe file name of the source-code location where\n the error was reported.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceFile",
          "package": "postgresql-libpq",
          "signature": "DiagSourceFile",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The file name of the source-code location where the error was reported",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceFile",
          "package": "postgresql-libpq",
          "partial": "Diag Source File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe name of the source-code function reporting the\n error.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceFunction",
          "package": "postgresql-libpq",
          "signature": "DiagSourceFunction",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The name of the source-code function reporting the error",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceFunction",
          "package": "postgresql-libpq",
          "partial": "Diag Source Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe line number of the source-code location where\n the error was reported.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceLine",
          "package": "postgresql-libpq",
          "signature": "DiagSourceLine",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The line number of the source-code location where the error was reported",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSourceLine",
          "package": "postgresql-libpq",
          "partial": "Diag Source Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSourceLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe SQLSTATE code for the error. The SQLSTATE code\n identifies the type of error that has occurred; it\n can be used by front-end applications to perform\n specific operations (such as error handling) in\n response to a particular database error. For a list\n of the possible SQLSTATE codes, see Appendix A. This\n field is not localizable, and is always present.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSqlstate",
          "package": "postgresql-libpq",
          "signature": "DiagSqlstate",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "The SQLSTATE code for the error The SQLSTATE code identifies the type of error that has occurred it can be used by front-end applications to perform specific operations such as error handling in response to particular database error For list of the possible SQLSTATE codes see Appendix This field is not localizable and is always present",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagSqlstate",
          "package": "postgresql-libpq",
          "partial": "Diag Sqlstate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagSqlstate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA string containing a decimal integer indicating\n an error cursor position as an index into the\n original statement string. The first character has\n index 1, and positions are measured in characters\n not bytes.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagStatementPosition",
          "package": "postgresql-libpq",
          "signature": "DiagStatementPosition",
          "source": "src/Database-PostgreSQL-LibPQ.html#FieldCode",
          "type": "function"
        },
        "index": {
          "description": "string containing decimal integer indicating an error cursor position as an index into the original statement string The first character has index and positions are measured in characters not bytes",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "DiagStatementPosition",
          "package": "postgresql-libpq",
          "partial": "Diag Statement Position",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:DiagStatementPosition"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe string sent to the server was empty.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "EmptyQuery",
          "package": "postgresql-libpq",
          "signature": "EmptyQuery",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "The string sent to the server was empty",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "EmptyQuery",
          "package": "postgresql-libpq",
          "partial": "Empty Query",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:EmptyQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsDefault",
          "package": "postgresql-libpq",
          "signature": "ErrorsDefault",
          "source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsDefault",
          "package": "postgresql-libpq",
          "partial": "Errors Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsTerse",
          "package": "postgresql-libpq",
          "signature": "ErrorsTerse",
          "source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsTerse",
          "package": "postgresql-libpq",
          "partial": "Errors Terse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsTerse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsVerbose",
          "package": "postgresql-libpq",
          "signature": "ErrorsVerbose",
          "source": "src/Database-PostgreSQL-LibPQ.html#Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ErrorsVerbose",
          "package": "postgresql-libpq",
          "partial": "Errors Verbose",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ErrorsVerbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA fatal error occurred.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FatalError",
          "package": "postgresql-libpq",
          "signature": "FatalError",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "fatal error occurred",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FatalError",
          "package": "postgresql-libpq",
          "partial": "Fatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushFailed",
          "package": "postgresql-libpq",
          "signature": "FlushFailed",
          "source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushFailed",
          "package": "postgresql-libpq",
          "partial": "Flush Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushOk",
          "package": "postgresql-libpq",
          "signature": "FlushOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushOk",
          "package": "postgresql-libpq",
          "partial": "Flush Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushWriting",
          "package": "postgresql-libpq",
          "signature": "FlushWriting",
          "source": "src/Database-PostgreSQL-LibPQ.html#FlushStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "FlushWriting",
          "package": "postgresql-libpq",
          "partial": "Flush Writing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:FlushWriting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LoFd",
          "package": "postgresql-libpq",
          "signature": "LoFd CInt",
          "source": "src/Database-PostgreSQL-LibPQ.html#LoFd",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "LoFd",
          "package": "postgresql-libpq",
          "partial": "Lo Fd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:LoFd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nonfatal error (a notice or\n warning) occurred.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "NonfatalError",
          "package": "postgresql-libpq",
          "signature": "NonfatalError",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "nonfatal error notice or warning occurred",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "NonfatalError",
          "package": "postgresql-libpq",
          "partial": "Nonfatal Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:NonfatalError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Notify",
          "package": "postgresql-libpq",
          "signature": "Notify",
          "source": "src/Database-PostgreSQL-LibPQ.html#Notify",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Notify",
          "package": "postgresql-libpq",
          "partial": "Notify",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Notify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Oid",
          "package": "postgresql-libpq",
          "signature": "Oid CUInt",
          "source": "src/Database-PostgreSQL-LibPQ.html#Oid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Oid",
          "package": "postgresql-libpq",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Oid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingFailed",
          "package": "postgresql-libpq",
          "signature": "PollingFailed",
          "source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingFailed",
          "package": "postgresql-libpq",
          "partial": "Polling Failed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingFailed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingOk",
          "package": "postgresql-libpq",
          "signature": "PollingOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingOk",
          "package": "postgresql-libpq",
          "partial": "Polling Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingReading",
          "package": "postgresql-libpq",
          "signature": "PollingReading",
          "source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingReading",
          "package": "postgresql-libpq",
          "partial": "Polling Reading",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingReading"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingWriting",
          "package": "postgresql-libpq",
          "signature": "PollingWriting",
          "source": "src/Database-PostgreSQL-LibPQ.html#PollingStatus",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "PollingWriting",
          "package": "postgresql-libpq",
          "partial": "Polling Writing",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:PollingWriting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Row",
          "package": "postgresql-libpq",
          "signature": "Row CInt",
          "source": "src/Database-PostgreSQL-LibPQ.html#Row",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Row",
          "package": "postgresql-libpq",
          "partial": "Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Row"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Text",
          "package": "postgresql-libpq",
          "signature": "Text",
          "source": "src/Database-PostgreSQL-LibPQ.html#Format",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "Text",
          "package": "postgresql-libpq",
          "partial": "Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:Text"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ea command is in progress\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransActive",
          "package": "postgresql-libpq",
          "signature": "TransActive",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "function"
        },
        "index": {
          "description": "command is in progress",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransActive",
          "package": "postgresql-libpq",
          "partial": "Trans Active",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransActive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrently idle\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransIdle",
          "package": "postgresql-libpq",
          "signature": "TransIdle",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "function"
        },
        "index": {
          "description": "currently idle",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransIdle",
          "package": "postgresql-libpq",
          "partial": "Trans Idle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransIdle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidle, in a failed transaction block\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransInError",
          "package": "postgresql-libpq",
          "signature": "TransInError",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "function"
        },
        "index": {
          "description": "idle in failed transaction block",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransInError",
          "package": "postgresql-libpq",
          "partial": "Trans In Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransInError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eidle, in a valid transaction block\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransInTrans",
          "package": "postgresql-libpq",
          "signature": "TransInTrans",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "function"
        },
        "index": {
          "description": "idle in valid transaction block",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransInTrans",
          "package": "postgresql-libpq",
          "partial": "Trans In Trans",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransInTrans"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ethe connection is bad\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransUnknown",
          "package": "postgresql-libpq",
          "signature": "TransUnknown",
          "source": "src/Database-PostgreSQL-LibPQ.html#TransactionStatus",
          "type": "function"
        },
        "index": {
          "description": "the connection is bad",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TransUnknown",
          "package": "postgresql-libpq",
          "partial": "Trans Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TransUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSuccessful completion of a\n command returning data (such as a\n SELECT or SHOW).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TuplesOk",
          "package": "postgresql-libpq",
          "signature": "TuplesOk",
          "source": "src/Database-PostgreSQL-LibPQ.html#ExecStatus",
          "type": "function"
        },
        "index": {
          "description": "Successful completion of command returning data such as SELECT or SHOW",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "TuplesOk",
          "package": "postgresql-libpq",
          "partial": "Tuples Ok",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:TuplesOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the process \u003ccode\u003e\u003ca\u003eCPid\u003c/a\u003e\u003c/code\u003e of the backend server process\n handling this connection.\n\u003c/p\u003e\u003cp\u003eThe backend PID is useful for debugging purposes and for comparison\n to NOTIFY messages (which include the PID of the notifying backend\n process). Note that the PID belongs to a process executing on the\n database server host, not the local host!\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "backendPID",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO CPid",
          "source": "src/Database-PostgreSQL-LibPQ.html#backendPID",
          "type": "function"
        },
        "index": {
          "description": "Returns the process CPid of the backend server process handling this connection The backend PID is useful for debugging purposes and for comparison to NOTIFY messages which include the PID of the notifying backend process Note that the PID belongs to process executing on the database server host not the local host",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "backendPID",
          "normalized": "Connection-\u003eIO CPid",
          "package": "postgresql-libpq",
          "partial": "PID",
          "signature": "Connection-\u003eIO CPid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:backendPID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRequests that the server abandon processing of the current\n command.\n\u003c/p\u003e\u003cp\u003eThe return value is 'Right ()' if the cancel request was\n successfully dispatched and if not, 'Left B.ByteString' containing\n an error message explaining why not.\n\u003c/p\u003e\u003cp\u003eSuccessful dispatch is no guarantee that the request will have any\n effect, however. If the cancellation is effective, the current\n command will terminate early and return an error result. If the\n cancellation fails (say, because the server was already done\n processing the command), then there will be no visible result at\n all.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cancel",
          "package": "postgresql-libpq",
          "signature": "Cancel -\u003e IO (Either ByteString ())",
          "source": "src/Database-PostgreSQL-LibPQ.html#cancel",
          "type": "function"
        },
        "index": {
          "description": "Requests that the server abandon processing of the current command The return value is Right if the cancel request was successfully dispatched and if not Left B.ByteString containing an error message explaining why not Successful dispatch is no guarantee that the request will have any effect however If the cancellation is effective the current command will terminate early and return an error result If the cancellation fails say because the server was already done processing the command then there will be no visible result at all",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cancel",
          "normalized": "Cancel-\u003eIO(Either ByteString())",
          "package": "postgresql-libpq",
          "signature": "Cancel-\u003eIO(Either ByteString())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the client encoding.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "clientEncoding",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO ByteString",
          "source": "src/Database-PostgreSQL-LibPQ.html#clientEncoding",
          "type": "function"
        },
        "index": {
          "description": "Returns the client encoding",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "clientEncoding",
          "normalized": "Connection-\u003eIO ByteString",
          "package": "postgresql-libpq",
          "partial": "Encoding",
          "signature": "Connection-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:clientEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the command status tag from the SQL command that\n generated the PGresult.\n\u003c/p\u003e\u003cp\u003eCommonly this is just the name of the command, but it might include\n additional data such as the number of rows processed.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cmdStatus",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#cmdStatus",
          "type": "function"
        },
        "index": {
          "description": "Returns the command status tag from the SQL command that generated the PGresult Commonly this is just the name of the command but it might include additional data such as the number of rows processed",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cmdStatus",
          "normalized": "Result-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Status",
          "signature": "Result-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cmdStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of rows affected by the SQL command.\n\u003c/p\u003e\u003cp\u003eThis function returns a string containing the number of rows\n affected by the SQL statement that generated the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e. This\n function can only be used following the execution of a SELECT,\n CREATE TABLE AS, INSERT, UPDATE, DELETE, MOVE, FETCH, or COPY\n statement, or an EXECUTE of a prepared query that contains an\n INSERT, UPDATE, or DELETE statement. If the command that generated\n the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e was anything else, \u003ccode\u003e\u003ca\u003ecmdTuples\u003c/a\u003e\u003c/code\u003e returns an empty\n string.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cmdTuples",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#cmdTuples",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of rows affected by the SQL command This function returns string containing the number of rows affected by the SQL statement that generated the Result This function can only be used following the execution of SELECT CREATE TABLE AS INSERT UPDATE DELETE MOVE FETCH or COPY statement or an EXECUTE of prepared query that contains an INSERT UPDATE or DELETE statement If the command that generated the Result was anything else cmdTuples returns an empty string",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "cmdTuples",
          "normalized": "Result-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Tuples",
          "signature": "Result-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:cmdTuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e succeeds, the next stage is to poll libpq so\n that it can proceed with the connection sequence. Use \u003ccode\u003e\u003ca\u003esocket\u003c/a\u003e\u003c/code\u003e to\n obtain the \u003ccode\u003e\u003ca\u003eFd\u003c/a\u003e\u003c/code\u003e of the socket underlying the database\n connection. Loop thus: If \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e last returned\n \u003ccode\u003e\u003ca\u003ePollingReading\u003c/a\u003e\u003c/code\u003e, wait until the socket is ready to read (as\n indicated by select(), poll(), or similar system function). Then\n call \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e again. Conversely, if \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e last\n returned \u003ccode\u003e\u003ca\u003ePollingWriting\u003c/a\u003e\u003c/code\u003e, wait until the socket is ready to write,\n then call \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e again. If you have yet to call\n \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e, i.e., just after the call to \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e, behave\n as if it last returned \u003ccode\u003e\u003ca\u003ePollingWriting\u003c/a\u003e\u003c/code\u003e. Continue this loop until\n \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003ePollingFailed\u003c/a\u003e\u003c/code\u003e, indicating the connection\n procedure has failed, or \u003ccode\u003e\u003ca\u003ePollingOk\u003c/a\u003e\u003c/code\u003e, indicating the connection has\n been successfully made.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectPoll",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO PollingStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#connectPoll",
          "type": "function"
        },
        "index": {
          "description": "If connectStart succeeds the next stage is to poll libpq so that it can proceed with the connection sequence Use socket to obtain the Fd of the socket underlying the database connection Loop thus If connectPoll last returned PollingReading wait until the socket is ready to read as indicated by select poll or similar system function Then call connectPoll again Conversely if connectPoll last returned PollingWriting wait until the socket is ready to write then call connectPoll again If you have yet to call connectPoll i.e just after the call to connectStart behave as if it last returned PollingWriting Continue this loop until connectPoll returns PollingFailed indicating the connection procedure has failed or PollingOk indicating the connection has been successfully made",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectPoll",
          "normalized": "Connection-\u003eIO PollingStatus",
          "package": "postgresql-libpq",
          "partial": "Poll",
          "signature": "Connection-\u003eIO PollingStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectPoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a connection to the database server in a nonblocking manner.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectStart",
          "package": "postgresql-libpq",
          "signature": "ByteString-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Make connection to the database server in nonblocking manner",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectStart",
          "normalized": "ByteString-\u003eIO Connection",
          "package": "postgresql-libpq",
          "partial": "Start",
          "signature": "ByteString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new connection to the database server.\n\u003c/p\u003e\u003cp\u003eThis function opens a new database connection using the parameters\n  taken from the string conninfo. Its nonblocking analogues are\n  \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe passed string can be empty to use all default parameters, or it\n can contain one or more parameter settings separated by\n whitespace. Each parameter setting is in the form keyword =\n value. Spaces around the equal sign are optional. To write an empty\n value or a value containing spaces, surround it with single quotes,\n e.g., keyword = 'a value'. Single quotes and backslashes within the\n value must be escaped with a backslash, i.e., ' and \\.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectdb",
          "package": "postgresql-libpq",
          "signature": "ByteString-\u003e IO Connection",
          "type": "function"
        },
        "index": {
          "description": "Makes new connection to the database server This function opens new database connection using the parameters taken from the string conninfo Its nonblocking analogues are connectStart and connectPoll The passed string can be empty to use all default parameters or it can contain one or more parameter settings separated by whitespace Each parameter setting is in the form keyword value Spaces around the equal sign are optional To write an empty value or value containing spaces surround it with single quotes e.g keyword value Single quotes and backslashes within the value must be escaped with backslash i.e and",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectdb",
          "normalized": "ByteString-\u003eIO Connection",
          "package": "postgresql-libpq",
          "signature": "ByteString-\u003eIO Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectdb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the connection authentication method required a\n password, but none was available. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not.\n\u003c/p\u003e\u003cp\u003eThis function can be applied after a failed connection attempt to\n decide whether to prompt the user for a password.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectionNeedsPassword",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#connectionNeedsPassword",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the connection authentication method required password but none was available Returns False if not This function can be applied after failed connection attempt to decide whether to prompt the user for password",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectionNeedsPassword",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Needs Password",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectionNeedsPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the connection authentication method used a\n password. Returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not.\n\u003c/p\u003e\u003cp\u003eThis function can be applied after either a failed or successful\n connection attempt to detect whether the server demanded a\n password.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectionUsedPassword",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#connectionUsedPassword",
          "type": "function"
        },
        "index": {
          "description": "Returns True if the connection authentication method used password Returns False if not This function can be applied after either failed or successful connection attempt to detect whether the server demanded password",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "connectionUsedPassword",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Used Password",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:connectionUsedPassword"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf input is available from the server, consume it.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e normally returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicating \u003ca\u003eno error\u003c/a\u003e, but\n returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if there was some kind of trouble (in which case\n \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e can be consulted). Note that the result does not say\n whether any input data was actually collected. After calling\n \u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e, the application can check \u003ccode\u003e\u003ca\u003eisBusy\u003c/a\u003e\u003c/code\u003e and/or\n \u003ccode\u003e\u003ca\u003enotifies\u003c/a\u003e\u003c/code\u003e to see if their state has changed.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "consumeInput",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#consumeInput",
          "type": "function"
        },
        "index": {
          "description": "If input is available from the server consume it consumeInput normally returns True indicating no error but returns False if there was some kind of trouble in which case errorMessage can be consulted Note that the result does not say whether any input data was actually collected After calling consumeInput the application can check isBusy and or notifies to see if their state has changed",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "consumeInput",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Input",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:consumeInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the database name of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "db",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#db",
          "type": "function"
        },
        "index": {
          "description": "Returns the database name of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "db",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:db"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a request to obtain information about the specified\n portal, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e allows an application to obtain information about\n a previously created portal. (libpq does not provide any direct\n access to portals, but you can use this function to inspect the\n properties of a cursor created with a DECLARE CURSOR SQL command.)\n \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0 and later\n connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eportalName can be empty to reference the unnamed portal, otherwise\n it must be the name of an existing portal. On success, a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n with status \u003ccode\u003e\u003ca\u003eCommandOk\u003c/a\u003e\u003c/code\u003e is returned. The functions \u003ccode\u003e\u003ca\u003enfields\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003efname\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eftype\u003c/a\u003e\u003c/code\u003e, etc can be applied to the \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to obtain\n information about the result columns (if any) of the portal.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "describePortal",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Submits request to obtain information about the specified portal and waits for completion describePortal allows an application to obtain information about previously created portal libpq does not provide any direct access to portals but you can use this function to inspect the properties of cursor created with DECLARE CURSOR SQL command describePortal is supported only in protocol and later connections it will fail when using protocol portalName can be empty to reference the unnamed portal otherwise it must be the name of an existing portal On success Result with status CommandOk is returned The functions nfields fname ftype etc can be applied to the Result to obtain information about the result columns if any of the portal",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "describePortal",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "partial": "Portal",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:describePortal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a request to obtain information about the specified\n prepared statement, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e allows an application to obtain information\n about a previously prepared statement. \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e is\n supported only in protocol 3.0 and later connections; it will fail\n when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003estmtName can be empty to reference the unnamed statement, otherwise\n it must be the name of an existing prepared statement. On success,\n a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e with status \u003ccode\u003e\u003ca\u003eCommandOk\u003c/a\u003e\u003c/code\u003e is returned. The functions\n \u003ccode\u003e\u003ca\u003enparams\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eparamtype\u003c/a\u003e\u003c/code\u003e can be applied to this \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e to obtain\n information about the parameters of the prepared statement, and the\n functions \u003ccode\u003e\u003ca\u003enfields\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003efname\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eftype\u003c/a\u003e\u003c/code\u003e, etc provide information\n about the result columns (if any) of the statement.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "describePrepared",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Submits request to obtain information about the specified prepared statement and waits for completion describePrepared allows an application to obtain information about previously prepared statement describePrepared is supported only in protocol and later connections it will fail when using protocol stmtName can be empty to reference the unnamed statement otherwise it must be the name of an existing prepared statement On success Result with status CommandOk is returned The functions nparams and paramtype can be applied to this Result to obtain information about the parameters of the prepared statement and the functions nfields fname ftype etc provide information about the result columns if any of the statement",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "describePrepared",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "partial": "Prepared",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:describePrepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the error message most recently generated by an operation\n on the connection.\n\u003c/p\u003e\u003cp\u003eNearly all libpq functions will set a message for \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e if\n they fail. Note that by libpq convention, a nonempty \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n result can be multiple lines, and will include a trailing\n newline. The result string should not be expected to remain the\n same across operations on the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "errorMessage",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#errorMessage",
          "type": "function"
        },
        "index": {
          "description": "Returns the error message most recently generated by an operation on the connection Nearly all libpq functions will set message for errorMessage if they fail Note that by libpq convention nonempty errorMessage result can be multiple lines and will include trailing newline The result string should not be expected to remain the same across operations on the Connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "errorMessage",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Message",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:errorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes binary data for use within an SQL command with the type\n bytea. As with \u003ccode\u003e\u003ca\u003eescapeStringConn\u003c/a\u003e\u003c/code\u003e, this is only used when inserting\n data directly into an SQL command string.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeByteaConn",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#escapeByteaConn",
          "type": "function"
        },
        "index": {
          "description": "Escapes binary data for use within an SQL command with the type bytea As with escapeStringConn this is only used when inserting data directly into an SQL command string",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeByteaConn",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Bytea Conn",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:escapeByteaConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eescapeIdentifier\u003c/code\u003e escapes a string for use as an SQL identifier, such\n   as a table, column, or function name. This is useful when a user-supplied\n   identifier might contain special characters that would otherwise not be\n   interpreted as part of the identifier by the SQL parser, or when the\n   identifier might contain upper case characters whose case should be\n   preserved.\n\u003c/p\u003e\u003cp\u003eThe return string has all special characters replaced so that it will\n   be properly processed as an SQL identifier. The return string will also\n   be surrounded by double quotes.\n\u003c/p\u003e\u003cp\u003eOn error, \u003ccode\u003eescapeIdentifier\u003c/code\u003e returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e and a suitable message\n   is stored in the conn object.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeIdentifier",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#escapeIdentifier",
          "type": "function"
        },
        "index": {
          "description": "escapeIdentifier escapes string for use as an SQL identifier such as table column or function name This is useful when user-supplied identifier might contain special characters that would otherwise not be interpreted as part of the identifier by the SQL parser or when the identifier might contain upper case characters whose case should be preserved The return string has all special characters replaced so that it will be properly processed as an SQL identifier The return string will also be surrounded by double quotes On error escapeIdentifier returns Nothing and suitable message is stored in the conn object",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeIdentifier",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Identifier",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:escapeIdentifier"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEscapes a string for use within an SQL command. This is useful\n when inserting data values as literal constants in SQL\n commands. Certain characters (such as quotes and backslashes) must\n be escaped to prevent them from being interpreted specially by the\n SQL parser.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeStringConn",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#escapeStringConn",
          "type": "function"
        },
        "index": {
          "description": "Escapes string for use within an SQL command This is useful when inserting data values as literal constants in SQL commands Certain characters such as quotes and backslashes must be escaped to prevent them from being interpreted specially by the SQL parser",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "escapeStringConn",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "String Conn",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:escapeStringConn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a command to the server and waits for the result.\n\u003c/p\u003e\u003cp\u003eReturns a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e or possibly \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e. A \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e will generally\n be returned except in out-of-memory conditions or serious errors\n such as inability to send the command to the server. If a \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n is returned, it should be treated like a \u003ccode\u003e\u003ca\u003eFatalError\u003c/a\u003e\u003c/code\u003e result. Use\n \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to get more information about such errors.\n\u003c/p\u003e\u003cp\u003eIt is allowed to include multiple SQL commands (separated by\n semicolons) in the command string. Multiple queries sent in a\n single \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e call are processed in a single transaction, unless\n there are explicit BEGIN/COMMIT commands included in the query\n string to divide it into multiple transactions. Note however that\n the returned \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e structure describes only the result of the\n last command executed from the string. Should one of the commands\n fail, processing of the string stops with it and the returned\n \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e describes the error condition.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "exec",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Submits command to the server and waits for the result Returns Result or possibly Nothing Result will generally be returned except in out-of-memory conditions or serious errors such as inability to send the command to the server If Nothing is returned it should be treated like FatalError result Use errorMessage to get more information about such errors It is allowed to include multiple SQL commands separated by semicolons in the command string Multiple queries sent in single exec call are processed in single transaction unless there are explicit BEGIN COMMIT commands included in the query string to divide it into multiple transactions Note however that the returned Result structure describes only the result of the last command executed from the string Should one of the commands fail processing of the string stops with it and the returned Result describes the error condition",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "exec",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:exec"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a command to the server and waits for the result, with\n the ability to pass parameters separately from the SQL command\n text.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, but offers additional functionality:\n parameter values can be specified separately from the command\n string proper, and query results can be requested in either text or\n binary format. \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0 and\n later connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe primary advantage of \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e over \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e is that parameter\n values can be separated from the command string, thus avoiding the\n need for tedious and error-prone quoting and escaping.\n\u003c/p\u003e\u003cp\u003eUnlike \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e allows at most one SQL command in the\n given string. (There can be semicolons in it, but not more than one\n nonempty command.) This is a limitation of the underlying protocol,\n but has some usefulness as an extra defense against SQL-injection\n attacks.\n\u003c/p\u003e\u003cp\u003eTip: Specifying parameter types via OIDs is tedious, particularly\n if you prefer not to hard-wire particular OID values into your\n program. However, you can avoid doing so even in cases where the\n server by itself cannot determine the type of the parameter, or\n chooses a different type than you want. In the SQL command text,\n attach an explicit cast to the parameter symbol to show what data\n type you will send. For example:\n SELECT * FROM mytable WHERE x = $1::bigint;\n This forces parameter $1 to be treated as bigint, whereas by\n default it would be assigned the same type as x. Forcing the\n parameter type decision, either this way or by specifying a numeric\n type OID, is strongly recommended when sending parameter values in\n binary format, because binary format has less redundancy than text\n format and so there is less chance that the server will detect a\n type mismatch mistake for you.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "execParams",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e [Maybe (Oid, ByteString, Format)]-\u003e Format-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Submits command to the server and waits for the result with the ability to pass parameters separately from the SQL command text execParams is like exec but offers additional functionality parameter values can be specified separately from the command string proper and query results can be requested in either text or binary format execParams is supported only in protocol and later connections it will fail when using protocol The primary advantage of execParams over exec is that parameter values can be separated from the command string thus avoiding the need for tedious and error-prone quoting and escaping Unlike exec execParams allows at most one SQL command in the given string There can be semicolons in it but not more than one nonempty command This is limitation of the underlying protocol but has some usefulness as an extra defense against SQL-injection attacks Tip Specifying parameter types via OIDs is tedious particularly if you prefer not to hard-wire particular OID values into your program However you can avoid doing so even in cases where the server by itself cannot determine the type of the parameter or chooses different type than you want In the SQL command text attach an explicit cast to the parameter symbol to show what data type you will send For example SELECT FROM mytable WHERE bigint This forces parameter to be treated as bigint whereas by default it would be assigned the same type as Forcing the parameter type decision either this way or by specifying numeric type OID is strongly recommended when sending parameter values in binary format because binary format has less redundancy than text format and so there is less chance that the server will detect type mismatch mistake for you",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "execParams",
          "normalized": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "partial": "Params",
          "signature": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:execParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to execute a prepared statement with given\n parameters, and waits for the result.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e is like \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e, but the command to be executed\n is specified by naming a previously-prepared statement, instead of\n giving a query string. This feature allows commands that will be\n used repeatedly to be parsed and planned just once, rather than\n each time they are executed. The statement must have been prepared\n previously in the current session. \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e is supported only\n in protocol 3.0 and later connections; it will fail when using\n protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe parameters are identical to \u003ccode\u003e\u003ca\u003eexecParams\u003c/a\u003e\u003c/code\u003e, except that the name\n of a prepared statement is given instead of a query string, and the\n paramTypes parameter is not present (it is not needed since the\n prepared statement's parameter types were determined when it was\n created).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "execPrepared",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e [Maybe (ByteString, Format)]-\u003e Format-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Sends request to execute prepared statement with given parameters and waits for the result execPrepared is like execParams but the command to be executed is specified by naming previously-prepared statement instead of giving query string This feature allows commands that will be used repeatedly to be parsed and planned just once rather than each time they are executed The statement must have been prepared previously in the current session execPrepared is supported only in protocol and later connections it will fail when using protocol The parameters are identical to execParams except that the name of prepared statement is given instead of query string and the paramTypes parameter is not present it is not needed since the prepared statement parameter types were determined when it was created",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "execPrepared",
          "normalized": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "partial": "Prepared",
          "signature": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:execPrepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the \u003ccode\u003e\u003ca\u003eFormat\u003c/a\u003e\u003c/code\u003e of the given column. Column numbers start at\n 0.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fformat",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Format",
          "source": "src/Database-PostgreSQL-LibPQ.html#fformat",
          "type": "function"
        },
        "index": {
          "description": "Returns the Format of the given column Column numbers start at",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fformat",
          "normalized": "Result-\u003eColumn-\u003eIO Format",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fformat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses the connection to the server.\n\u003c/p\u003e\u003cp\u003eNote that the \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e must not be used again after \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e\n has been called.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "finish",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-LibPQ.html#finish",
          "type": "function"
        },
        "index": {
          "description": "Closes the connection to the server Note that the Connection must not be used again after finish has been called",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "finish",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to flush any queued output data to the server. Returns\n \u003ccode\u003e\u003ca\u003eFlushOk\u003c/a\u003e\u003c/code\u003e if successful (or if the send queue is empty),\n \u003ccode\u003e\u003ca\u003eFlushFailed\u003c/a\u003e\u003c/code\u003e if it failed for some reason, or \u003ccode\u003e\u003ca\u003eFlushWriting\u003c/a\u003e\u003c/code\u003e if it\n was unable to send all the data in the send queue yet (this case\n can only occur if the connection is nonblocking).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "flush",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO FlushStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#flush",
          "type": "function"
        },
        "index": {
          "description": "Attempts to flush any queued output data to the server Returns FlushOk if successful or if the send queue is empty FlushFailed if it failed for some reason or FlushWriting if it was unable to send all the data in the send queue yet this case can only occur if the connection is nonblocking",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "flush",
          "normalized": "Connection-\u003eIO FlushStatus",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO FlushStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:flush"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the type modifier of the column associated with the given\n column number. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThe interpretation of modifier values is type-specific; they\n typically indicate precision or size limits. The value -1 is used\n to indicate \u003ca\u003eno information available\u003c/a\u003e. Most data types do not use\n modifiers, in which case the value is always -1.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fmod",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#fmod",
          "type": "function"
        },
        "index": {
          "description": "Returns the type modifier of the column associated with the given column number Column numbers start at The interpretation of modifier values is type-specific they typically indicate precision or size limits The value is used to indicate no information available Most data types do not use modifiers in which case the value is always",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fmod",
          "normalized": "Result-\u003eColumn-\u003eIO Int",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fmod"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the column name associated with the given \u003ccode\u003e\u003ca\u003eColumn\u003c/a\u003e\u003c/code\u003e\n number. Column numbers start at 0.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fname",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#fname",
          "type": "function"
        },
        "index": {
          "description": "Returns the column name associated with the given Column number Column numbers start at",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fname",
          "normalized": "Result-\u003eColumn-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the column number associated with the given column name.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fnumber",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e ByteString -\u003e IO (Maybe Column)",
          "source": "src/Database-PostgreSQL-LibPQ.html#fnumber",
          "type": "function"
        },
        "index": {
          "description": "Returns the column number associated with the given column name",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fnumber",
          "normalized": "Result-\u003eByteString-\u003eIO(Maybe Column)",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eByteString-\u003eIO(Maybe Column)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fnumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the size in bytes of the column associated with the given\n column number. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003efsize\u003c/a\u003e\u003c/code\u003e returns the space allocated for this column in a database\n row, in other words the size of the server's internal\n representation of the data type. (Accordingly, it is not really\n very useful to clients.) A negative value indicates the data type\n is variable-length.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fsize",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#fsize",
          "type": "function"
        },
        "index": {
          "description": "Returns the size in bytes of the column associated with the given column number Column numbers start at fsize returns the space allocated for this column in database row in other words the size of the server internal representation of the data type Accordingly it is not really very useful to clients negative value indicates the data type is variable-length",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "fsize",
          "normalized": "Result-\u003eColumn-\u003eIO Int",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:fsize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the OID of the table from which the given column was\n fetched. Column numbers start at 0.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftable",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-LibPQ.html#ftable",
          "type": "function"
        },
        "index": {
          "description": "Returns the OID of the table from which the given column was fetched Column numbers start at",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftable",
          "normalized": "Result-\u003eColumn-\u003eIO Oid",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the column number (within its table) of the column making\n up the specified query result column. Query-result column numbers\n start at 0, but table columns have nonzero numbers.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftablecol",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Column",
          "source": "src/Database-PostgreSQL-LibPQ.html#ftablecol",
          "type": "function"
        },
        "index": {
          "description": "Returns the column number within its table of the column making up the specified query result column Query-result column numbers start at but table columns have nonzero numbers",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftablecol",
          "normalized": "Result-\u003eColumn-\u003eIO Column",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftablecol"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the data type associated with the given column\n number. The \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e returned is the internal OID number of the\n type. Column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eYou can query the system table pg_type to obtain the names and\n properties of the various data types. The OIDs of the built-in data\n types are defined in the file src\u003cem\u003einclude\u003c/em\u003ecatalog/pg_type.h in the\n source tree.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftype",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Column -\u003e IO Oid",
          "source": "src/Database-PostgreSQL-LibPQ.html#ftype",
          "type": "function"
        },
        "index": {
          "description": "Returns the data type associated with the given column number The Oid returned is the internal OID number of the type Column numbers start at You can query the system table pg type to obtain the names and properties of the various data types The OIDs of the built-in data types are defined in the file src include catalog pg type.h in the source tree",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ftype",
          "normalized": "Result-\u003eColumn-\u003eIO Oid",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eColumn-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ftype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a data structure containing the information needed to\n cancel a command issued through a particular database connection.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003egetCancel\u003c/a\u003e\u003c/code\u003e creates a \u003ccode\u003e\u003ca\u003eCancel\u003c/a\u003e\u003c/code\u003e object given a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e. It will\n return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the given conn is an invalid connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getCancel",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe Cancel)",
          "source": "src/Database-PostgreSQL-LibPQ.html#getCancel",
          "type": "function"
        },
        "index": {
          "description": "Creates data structure containing the information needed to cancel command issued through particular database connection getCancel creates Cancel object given Connection It will return Nothing if the given conn is an invalid connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getCancel",
          "normalized": "Connection-\u003eIO(Maybe Cancel)",
          "package": "postgresql-libpq",
          "partial": "Cancel",
          "signature": "Connection-\u003eIO(Maybe Cancel)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getCancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReceive raw \u003ccode\u003eCOPY\u003c/code\u003e data from the server during the \u003ccode\u003e\u003ca\u003eCopyOut\u003c/a\u003e\u003c/code\u003e state.\n   The boolean parameter determines whether or not the call will block\n   while waiting for data.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getCopyData",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Bool -\u003e IO CopyOutResult",
          "source": "src/Database-PostgreSQL-LibPQ.html#getCopyData",
          "type": "function"
        },
        "index": {
          "description": "Receive raw COPY data from the server during the CopyOut state The boolean parameter determines whether or not the call will block while waiting for data",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getCopyData",
          "normalized": "Connection-\u003eBool-\u003eIO CopyOutResult",
          "package": "postgresql-libpq",
          "partial": "Copy Data",
          "signature": "Connection-\u003eBool-\u003eIO CopyOutResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getCopyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWaits for the next result from a prior \u003ccode\u003e\u003ca\u003esendQuery\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003esendQueryParams\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003esendPrepare\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003esendQueryPrepared\u003c/a\u003e\u003c/code\u003e call, and\n returns it. A null pointer is returned when the command is complete\n and there will be no more results.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getResult",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe Result)",
          "source": "src/Database-PostgreSQL-LibPQ.html#getResult",
          "type": "function"
        },
        "index": {
          "description": "Waits for the next result from prior sendQuery sendQueryParams sendPrepare or sendQueryPrepared call and returns it null pointer is returned when the command is complete and there will be no more results",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getResult",
          "normalized": "Connection-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "partial": "Result",
          "signature": "Connection-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTests a field for a null value. Row and column numbers start at\n 0.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getisnull",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Row -\u003e Column -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#getisnull",
          "type": "function"
        },
        "index": {
          "description": "Tests field for null value Row and column numbers start at",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getisnull",
          "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO Bool",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eRow-\u003eColumn-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getisnull"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the actual length of a field value in bytes. Row and\n column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThis is the actual data length for the particular data value, that\n is, the size of the object pointed to by \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e. For text data\n format this is the same as strlen(). For binary format this is\n essential information. Note that one should not rely on \u003ccode\u003e\u003ca\u003efsize\u003c/a\u003e\u003c/code\u003e to\n obtain the actual data length.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getlength",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Row -\u003e Column -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#getlength",
          "type": "function"
        },
        "index": {
          "description": "Returns the actual length of field value in bytes Row and column numbers start at This is the actual data length for the particular data value that is the size of the object pointed to by getvalue For text data format this is the same as strlen For binary format this is essential information Note that one should not rely on fsize to obtain the actual data length",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getlength",
          "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO Int",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eRow-\u003eColumn-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getlength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a single field value of one row of a PGresult. Row and\n column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eFor convenience, this binding uses \u003ccode\u003e\u003ca\u003egetisnull\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetlength\u003c/a\u003e\u003c/code\u003e to\n help construct the result.\n\u003c/p\u003e\u003cp\u003eNote: The \u003ccode\u003eByteString\u003c/code\u003e returned holds a reference to the Result. As\n long as ByteString is live, the Result will not be garbage\n collected. \u003ccode\u003e\u003ca\u003egetvalue'\u003c/a\u003e\u003c/code\u003e returns a copy of the data.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getvalue",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Row -\u003e Column -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#getvalue",
          "type": "function"
        },
        "index": {
          "description": "Returns single field value of one row of PGresult Row and column numbers start at For convenience this binding uses getisnull and getlength to help construct the result Note The ByteString returned holds reference to the Result As long as ByteString is live the Result will not be garbage collected getvalue returns copy of the data",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getvalue",
          "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getvalue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a copy of a single field value of one row of a\n PGresult. Row and column numbers start at 0.\n\u003c/p\u003e\u003cp\u003eFor convenience, this binding uses \u003ccode\u003e\u003ca\u003egetisnull\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egetlength\u003c/a\u003e\u003c/code\u003e to\n help construct the result.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getvalue'",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e Row -\u003e Column -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#getvalue%27",
          "type": "function"
        },
        "index": {
          "description": "Returns copy of single field value of one row of PGresult Row and column numbers start at For convenience this binding uses getisnull and getlength to help construct the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "getvalue'",
          "normalized": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eRow-\u003eColumn-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:getvalue-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the server host name of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "host",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#host",
          "type": "function"
        },
        "index": {
          "description": "Returns the server host name of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "host",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:host"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "invalidOid",
          "package": "postgresql-libpq",
          "signature": "Oid",
          "source": "src/Database-PostgreSQL-LibPQ.html#invalidOid",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "invalidOid",
          "package": "postgresql-libpq",
          "partial": "Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:invalidOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns True if a command is busy, that is, getResult would block\n waiting for input. A False return indicates that getResult can be\n called with assurance of not blocking.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eisBusy\u003c/a\u003e\u003c/code\u003e will not itself attempt to read data from the server;\n therefore \u003ccode\u003e\u003ca\u003econsumeInput\u003c/a\u003e\u003c/code\u003e must be invoked first, or the busy state\n will never end.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isBusy",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#isBusy",
          "type": "function"
        },
        "index": {
          "description": "Returns True if command is busy that is getResult would block waiting for input False return indicates that getResult can be called with assurance of not blocking isBusy will not itself attempt to read data from the server therefore consumeInput must be invoked first or the busy state will never end",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isBusy",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Busy",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isBusy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest if a connection is the Null Connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isNullConnection",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#isNullConnection",
          "type": "function"
        },
        "index": {
          "description": "Test if connection is the Null Connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isNullConnection",
          "normalized": "Connection-\u003eBool",
          "package": "postgresql-libpq",
          "partial": "Null Connection",
          "signature": "Connection-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isNullConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the blocking status of the database connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isnonblocking",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#isnonblocking",
          "type": "function"
        },
        "index": {
          "description": "Returns the blocking status of the database connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "isnonblocking",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:isnonblocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCloses a large object descriptor.  Any large object descriptors that\n remain open at the end of a transaction will be closed automatically.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loClose",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e IO (Maybe ())",
          "source": "src/Database-PostgreSQL-LibPQ.html#loClose",
          "type": "function"
        },
        "index": {
          "description": "Closes large object descriptor Any large object descriptors that remain open at the end of transaction will be closed automatically",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loClose",
          "normalized": "Connection-\u003eLoFd-\u003eIO(Maybe())",
          "package": "postgresql-libpq",
          "partial": "Close",
          "signature": "Connection-\u003eLoFd-\u003eIO(Maybe())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loClose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new large object,  returns the Object ID of the newly created\n object.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loCreat",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe Oid)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loCreat",
          "type": "function"
        },
        "index": {
          "description": "Creates new large object returns the Object ID of the newly created object",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loCreat",
          "normalized": "Connection-\u003eIO(Maybe Oid)",
          "package": "postgresql-libpq",
          "partial": "Creat",
          "signature": "Connection-\u003eIO(Maybe Oid)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loCreat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new large object with a particular Object ID.  Returns\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the requested Object ID is already in use by some other\n large object or other failure.  If \u003ccode\u003e\u003ca\u003einvalidOid\u003c/a\u003e\u003c/code\u003e is used as a parameter,\n then \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e will assign an unused \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loCreate",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Oid -\u003e IO (Maybe Oid)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loCreate",
          "type": "function"
        },
        "index": {
          "description": "Creates new large object with particular Object ID Returns Nothing if the requested Object ID is already in use by some other large object or other failure If invalidOid is used as parameter then loCreate will assign an unused Oid",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loCreate",
          "normalized": "Connection-\u003eOid-\u003eIO(Maybe Oid)",
          "package": "postgresql-libpq",
          "partial": "Create",
          "signature": "Connection-\u003eOid-\u003eIO(Maybe Oid)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExports a large object into a operating system file.  Note that\n the file is written by the client interface library, not the server.\n Returns 'Just ()' on success,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on failure.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loExport",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Oid -\u003e FilePath -\u003e IO (Maybe ())",
          "source": "src/Database-PostgreSQL-LibPQ.html#loExport",
          "type": "function"
        },
        "index": {
          "description": "Exports large object into operating system file Note that the file is written by the client interface library not the server Returns Just on success Nothing on failure",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loExport",
          "normalized": "Connection-\u003eOid-\u003eFilePath-\u003eIO(Maybe())",
          "package": "postgresql-libpq",
          "partial": "Export",
          "signature": "Connection-\u003eOid-\u003eFilePath-\u003eIO(Maybe())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImports an operating system file as a large object.  Note that the\n file is read by the client interface library, not by the server; so it\n must exist in the client file system and be readable by the client\n application.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loImport",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e FilePath -\u003e IO (Maybe Oid)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loImport",
          "type": "function"
        },
        "index": {
          "description": "Imports an operating system file as large object Note that the file is read by the client interface library not by the server so it must exist in the client file system and be readable by the client application",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loImport",
          "normalized": "Connection-\u003eFilePath-\u003eIO(Maybe Oid)",
          "package": "postgresql-libpq",
          "partial": "Import",
          "signature": "Connection-\u003eFilePath-\u003eIO(Maybe Oid)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImports an operating system file as a large object with the given\n Object ID.  Combines the behavior of \u003ccode\u003e\u003ca\u003eloImport\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eloCreate\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loImportWithOid",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e FilePath -\u003e Oid -\u003e IO (Maybe Oid)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loImportWithOid",
          "type": "function"
        },
        "index": {
          "description": "Imports an operating system file as large object with the given Object ID Combines the behavior of loImport and loCreate",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loImportWithOid",
          "normalized": "Connection-\u003eFilePath-\u003eOid-\u003eIO(Maybe Oid)",
          "package": "postgresql-libpq",
          "partial": "Import With Oid",
          "signature": "Connection-\u003eFilePath-\u003eOid-\u003eIO(Maybe Oid)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loImportWithOid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens an existing large object for reading or writing.  The Oid specifies\n the large object to open.  A large object cannot be opened before it is\n created.  A large object descriptor is returned for later use in \u003ccode\u003e\u003ca\u003eloRead\u003c/a\u003e\u003c/code\u003e,\n \u003ccode\u003e\u003ca\u003eloWrite\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloSeek\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eloTell\u003c/a\u003e\u003c/code\u003e, and \u003ccode\u003e\u003ca\u003eloClose\u003c/a\u003e\u003c/code\u003e.   The descriptor is only valid\n for the duration of the current transation.   On failure,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThe server currently does not distinguish between \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e;  write-only modes are not enforced.  However there\n is a significant difference between \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e and the other modes:\n with \u003ccode\u003e\u003ca\u003eReadMode\u003c/a\u003e\u003c/code\u003e you cannot write on the descriptor,  and the data read\n from it will reflect the contents of the large object at the time of\n the transaction snapshot that was active when \u003ccode\u003e\u003ca\u003eloOpen\u003c/a\u003e\u003c/code\u003e was executed,\n regardless of later writes by this or other transactions.   Reading from\n a descriptor opened in \u003ccode\u003e\u003ca\u003eWriteMode\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eReadWriteMode\u003c/a\u003e\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eAppendMode\u003c/a\u003e\u003c/code\u003e\n returns data that reflects all writes of other committed transactions\n as well as the writes of the current transaction.   This is similar to\n the behavior of \u003ccode\u003eREPEATABLE READ\u003c/code\u003e versus \u003ccode\u003eREAD COMMITTED\u003c/code\u003e transaction\n modes for ordinary SQL \u003ccode\u003eSELECT\u003c/code\u003e commands.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loOpen",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Oid -\u003e IOMode -\u003e IO (Maybe LoFd)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loOpen",
          "type": "function"
        },
        "index": {
          "description": "Opens an existing large object for reading or writing The Oid specifies the large object to open large object cannot be opened before it is created large object descriptor is returned for later use in loRead loWrite loSeek loTell and loClose The descriptor is only valid for the duration of the current transation On failure Nothing is returned The server currently does not distinguish between WriteMode and ReadWriteMode write-only modes are not enforced However there is significant difference between ReadMode and the other modes with ReadMode you cannot write on the descriptor and the data read from it will reflect the contents of the large object at the time of the transaction snapshot that was active when loOpen was executed regardless of later writes by this or other transactions Reading from descriptor opened in WriteMode ReadWriteMode or AppendMode returns data that reflects all writes of other committed transactions as well as the writes of the current transaction This is similar to the behavior of REPEATABLE READ versus READ COMMITTED transaction modes for ordinary SQL SELECT commands",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loOpen",
          "normalized": "Connection-\u003eOid-\u003eIOMode-\u003eIO(Maybe LoFd)",
          "package": "postgresql-libpq",
          "partial": "Open",
          "signature": "Connection-\u003eOid-\u003eIOMode-\u003eIO(Maybe LoFd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loOpen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eloRead conn fd len\u003c/code\u003e reads up to \u003ccode\u003elen\u003c/code\u003e bytes from the large object\n descriptor \u003ccode\u003efd\u003c/code\u003e.  In the event of an error,  \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loRead",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loRead",
          "type": "function"
        },
        "index": {
          "description": "loRead conn fd len reads up to len bytes from the large object descriptor fd In the event of an error Nothing is returned",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loRead",
          "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Read",
          "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loRead"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChanges the current read or write location associated with\n a large object descriptor.    The return value is the new location\n pointer,  or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on error.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loSeek",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e SeekMode -\u003e Int -\u003e IO (Maybe Int)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loSeek",
          "type": "function"
        },
        "index": {
          "description": "Changes the current read or write location associated with large object descriptor The return value is the new location pointer or Nothing on error",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loSeek",
          "normalized": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO(Maybe Int)",
          "package": "postgresql-libpq",
          "partial": "Seek",
          "signature": "Connection-\u003eLoFd-\u003eSeekMode-\u003eInt-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loSeek"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains the current read or write location of a large object descriptor.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loTell",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e IO (Maybe Int)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loTell",
          "type": "function"
        },
        "index": {
          "description": "Obtains the current read or write location of large object descriptor",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loTell",
          "normalized": "Connection-\u003eLoFd-\u003eIO(Maybe Int)",
          "package": "postgresql-libpq",
          "partial": "Tell",
          "signature": "Connection-\u003eLoFd-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loTell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTruncates a large object to a given length.  If the length is greater\n than the current large object,  then the large object is extended with\n null bytes.  ('\\x00')\n\u003c/p\u003e\u003cp\u003eThe file offest is not changed.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eloTruncate\u003c/a\u003e\u003c/code\u003e is new as of PostgreSQL 8.3; if this function is run against\n an older server version, it will fail and return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loTruncate",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e Int -\u003e IO (Maybe ())",
          "source": "src/Database-PostgreSQL-LibPQ.html#loTruncate",
          "type": "function"
        },
        "index": {
          "description": "Truncates large object to given length If the length is greater than the current large object then the large object is extended with null bytes x00 The file offest is not changed loTruncate is new as of PostgreSQL if this function is run against an older server version it will fail and return Nothing",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loTruncate",
          "normalized": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe())",
          "package": "postgresql-libpq",
          "partial": "Truncate",
          "signature": "Connection-\u003eLoFd-\u003eInt-\u003eIO(Maybe())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loTruncate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemoves a large object from the database.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loUnlink",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Oid -\u003e IO (Maybe ())",
          "source": "src/Database-PostgreSQL-LibPQ.html#loUnlink",
          "type": "function"
        },
        "index": {
          "description": "Removes large object from the database",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loUnlink",
          "normalized": "Connection-\u003eOid-\u003eIO(Maybe())",
          "package": "postgresql-libpq",
          "partial": "Unlink",
          "signature": "Connection-\u003eOid-\u003eIO(Maybe())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loUnlink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eloWrite conn fd buf\u003c/code\u003e writes the bytestring \u003ccode\u003ebuf\u003c/code\u003e to the large object\n descriptor \u003ccode\u003efd\u003c/code\u003e.  The number of bytes actually written is returned.\n In the event of an error, \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loWrite",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e LoFd -\u003e ByteString -\u003e IO (Maybe Int)",
          "source": "src/Database-PostgreSQL-LibPQ.html#loWrite",
          "type": "function"
        },
        "index": {
          "description": "loWrite conn fd buf writes the bytestring buf to the large object descriptor fd The number of bytes actually written is returned In the event of an error Nothing is returned",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "loWrite",
          "normalized": "Connection-\u003eLoFd-\u003eByteString-\u003eIO(Maybe Int)",
          "package": "postgresql-libpq",
          "partial": "Write",
          "signature": "Connection-\u003eLoFd-\u003eByteString-\u003eIO(Maybe Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:loWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a Null Connection,  which all libpq functions\n should safely fail on.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "newNullConnection",
          "package": "postgresql-libpq",
          "signature": "IO Connection",
          "source": "src/Database-PostgreSQL-LibPQ.html#newNullConnection",
          "type": "function"
        },
        "index": {
          "description": "Allocate Null Connection which all libpq functions should safely fail on",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "newNullConnection",
          "package": "postgresql-libpq",
          "partial": "Null Connection",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:newNullConnection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of columns (fields) in each row of the query\n result.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "nfields",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO Column",
          "source": "src/Database-PostgreSQL-LibPQ.html#nfields",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of columns fields in each row of the query result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "nfields",
          "normalized": "Result-\u003eIO Column",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eIO Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:nfields"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the next notification from a list of unhandled\n notification messages received from the server. It returns a\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if there are no pending notifications. Once a\n notification is returned from notifies, it is considered handled\n and will be removed from the list of notifications.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifies",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe Notify)",
          "source": "src/Database-PostgreSQL-LibPQ.html#notifies",
          "type": "function"
        },
        "index": {
          "description": "Returns the next notification from list of unhandled notification messages received from the server It returns Nothing if there are no pending notifications Once notification is returned from notifies it is considered handled and will be removed from the list of notifications",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifies",
          "normalized": "Connection-\u003eIO(Maybe Notify)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe Notify)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifies"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eprocess ID of notifying server process\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyBePid",
          "package": "postgresql-libpq",
          "signature": "CPid",
          "source": "src/Database-PostgreSQL-LibPQ.html#Notify",
          "type": "function"
        },
        "index": {
          "description": "process ID of notifying server process",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyBePid",
          "package": "postgresql-libpq",
          "partial": "Be Pid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyBePid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enotification payload string\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyExtra",
          "package": "postgresql-libpq",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-LibPQ.html#Notify",
          "type": "function"
        },
        "index": {
          "description": "notification payload string",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyExtra",
          "package": "postgresql-libpq",
          "partial": "Extra",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyExtra"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enotification channel name\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyRelname",
          "package": "postgresql-libpq",
          "signature": "ByteString",
          "source": "src/Database-PostgreSQL-LibPQ.html#Notify",
          "type": "function"
        },
        "index": {
          "description": "notification channel name",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "notifyRelname",
          "package": "postgresql-libpq",
          "partial": "Relname",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:notifyRelname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of parameters of a prepared statement.\n\u003c/p\u003e\u003cp\u003eThis function is only useful when inspecting the result of\n PQdescribePrepared. For other types of queries it will return zero.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "nparams",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#nparams",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of parameters of prepared statement This function is only useful when inspecting the result of PQdescribePrepared For other types of queries it will return zero",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "nparams",
          "normalized": "Result-\u003eIO Int",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:nparams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the number of rows (tuples) in the query result. Because\n it returns an integer result, large result sets might overflow the\n return value on 32-bit operating systems.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ntuples",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO Row",
          "source": "src/Database-PostgreSQL-LibPQ.html#ntuples",
          "type": "function"
        },
        "index": {
          "description": "Returns the number of rows tuples in the query result Because it returns an integer result large result sets might overflow the return value on bit operating systems",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "ntuples",
          "normalized": "Result-\u003eIO Row",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eIO Row",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:ntuples"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the command-line options passed in the connection request.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "options",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#options",
          "type": "function"
        },
        "index": {
          "description": "Returns the command-line options passed in the connection request",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "options",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLooks up a current parameter setting of the server.\n\u003c/p\u003e\u003cp\u003eCertain parameter values are reported by the server automatically\n at connection startup or whenever their values\n change. \u003ccode\u003e\u003ca\u003eparameterStatus\u003c/a\u003e\u003c/code\u003e can be used to interrogate these\n settings. It returns the current value of a parameter if known, or\n \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e if the parameter is not known.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "parameterStatus",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO (Maybe ByteString)",
          "type": "function"
        },
        "index": {
          "description": "Looks up current parameter setting of the server Certain parameter values are reported by the server automatically at connection startup or whenever their values change parameterStatus can be used to interrogate these settings It returns the current value of parameter if known or Nothing if the parameter is not known",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "parameterStatus",
          "normalized": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Status",
          "signature": "Connection-\u003eByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:parameterStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the data type of the indicated statement\n parameter. Parameter numbers start at 0.\n\u003c/p\u003e\u003cp\u003eThis function is only useful when inspecting the result of\n \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e. For other types of queries it will return zero.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "paramtype",
          "package": "postgresql-libpq",
          "signature": "Result-\u003e Int-\u003e IO Oid",
          "type": "function"
        },
        "index": {
          "description": "Returns the data type of the indicated statement parameter Parameter numbers start at This function is only useful when inspecting the result of describePrepared For other types of queries it will return zero",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "paramtype",
          "normalized": "Result-\u003eInt-\u003eIO Oid",
          "package": "postgresql-libpq",
          "signature": "Result-\u003eInt-\u003eIO Oid",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:paramtype"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the password of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "pass",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#pass",
          "type": "function"
        },
        "index": {
          "description": "Returns the password of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "pass",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:pass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the port of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "port",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#port",
          "type": "function"
        },
        "index": {
          "description": "Returns the port of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "port",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:port"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a request to create a prepared statement with the given\n parameters, and waits for completion.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e creates a prepared statement for later execution with\n \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e. This feature allows commands that will be used\n repeatedly to be parsed and planned just once, rather than each\n time they are executed. \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e is supported only in protocol 3.0\n and later connections; it will fail when using protocol 2.0.\n\u003c/p\u003e\u003cp\u003eThe function creates a prepared statement named stmtName from the\n query string, which must contain a single SQL command. stmtName can\n be \"\" to create an unnamed statement, in which case any\n pre-existing unnamed statement is automatically replaced; otherwise\n it is an error if the statement name is already defined in the\n current session. If any parameters are used, they are referred to\n in the query as $1, $2, etc. paramTypes specifies, by \u003ccode\u003e\u003ca\u003eOid\u003c/a\u003e\u003c/code\u003e, the\n data types to be assigned to the parameter symbols. If paramTypes\n is \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, or any particular element in the array is zero, the\n server assigns a data type to the parameter symbol in the same way\n it would do for an untyped literal string. Also, the query can use\n parameter symbols with numbers higher than the length of\n paramTypes; data types will be inferred for these symbols as\n well. (See \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e for a means to find out what data\n types were inferred.)\n\u003c/p\u003e\u003cp\u003eAs with \u003ccode\u003e\u003ca\u003eexec\u003c/a\u003e\u003c/code\u003e, the result is normally a \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e whose contents\n indicate server-side success or failure. A \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e result\n indicates out-of-memory or inability to send the command at\n all. Use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to get more information about such errors.\n\u003c/p\u003e\u003cp\u003ePrepared statements for use with \u003ccode\u003e\u003ca\u003eexecPrepared\u003c/a\u003e\u003c/code\u003e can also be created\n by executing SQL PREPARE statements. (But \u003ccode\u003e\u003ca\u003eprepare\u003c/a\u003e\u003c/code\u003e is more\n flexible since it does not require parameter types to be\n pre-specified.) Also, although there is no libpq function for\n deleting a prepared statement, the SQL DEALLOCATE statement can be\n used for that purpose.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "prepare",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e ByteString-\u003e Maybe [Oid]-\u003e IO (Maybe Result)",
          "type": "function"
        },
        "index": {
          "description": "Submits request to create prepared statement with the given parameters and waits for completion prepare creates prepared statement for later execution with execPrepared This feature allows commands that will be used repeatedly to be parsed and planned just once rather than each time they are executed prepare is supported only in protocol and later connections it will fail when using protocol The function creates prepared statement named stmtName from the query string which must contain single SQL command stmtName can be to create an unnamed statement in which case any pre-existing unnamed statement is automatically replaced otherwise it is an error if the statement name is already defined in the current session If any parameters are used they are referred to in the query as etc paramTypes specifies by Oid the data types to be assigned to the parameter symbols If paramTypes is Nothing or any particular element in the array is zero the server assigns data type to the parameter symbol in the same way it would do for an untyped literal string Also the query can use parameter symbols with numbers higher than the length of paramTypes data types will be inferred for these symbols as well See describePrepared for means to find out what data types were inferred As with exec the result is normally Result whose contents indicate server-side success or failure Nothing result indicates out-of-memory or inability to send the command at all Use errorMessage to get more information about such errors Prepared statements for use with execPrepared can also be created by executing SQL PREPARE statements But prepare is more flexible since it does not require parameter types to be pre-specified Also although there is no libpq function for deleting prepared statement the SQL DEALLOCATE statement can be used for that purpose",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "prepare",
          "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO(Maybe Result)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO(Maybe Result)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:prepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInterrogates the frontend/backend protocol being used.\n\u003c/p\u003e\u003cp\u003eApplications might wish to use this to determine whether certain\n features are supported. Currently, the possible values are 2 (2.0\n protocol), 3 (3.0 protocol), or zero (connection bad). This will\n not change after connection startup is complete, but it could\n theoretically change during a connection reset. The 3.0 protocol\n will normally be used when communicating with PostgreSQL 7.4 or\n later servers; pre-7.4 servers support only protocol 2.0. (Protocol\n 1.0 is obsolete and not supported by libpq.)\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "protocolVersion",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#protocolVersion",
          "type": "function"
        },
        "index": {
          "description": "Interrogates the frontend backend protocol being used Applications might wish to use this to determine whether certain features are supported Currently the possible values are protocol protocol or zero connection bad This will not change after connection startup is complete but it could theoretically change during connection reset The protocol will normally be used when communicating with PostgreSQL or later servers pre-7.4 servers support only protocol Protocol is obsolete and not supported by libpq",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "protocolVersion",
          "normalized": "Connection-\u003eIO Int",
          "package": "postgresql-libpq",
          "partial": "Version",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:protocolVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend raw \u003ccode\u003eCOPY\u003c/code\u003e data to the server during the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "putCopyData",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO CopyInResult",
          "source": "src/Database-PostgreSQL-LibPQ.html#putCopyData",
          "type": "function"
        },
        "index": {
          "description": "Send raw COPY data to the server during the CopyIn state",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "putCopyData",
          "normalized": "Connection-\u003eByteString-\u003eIO CopyInResult",
          "package": "postgresql-libpq",
          "partial": "Copy Data",
          "signature": "Connection-\u003eByteString-\u003eIO CopyInResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:putCopyData"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend end-of-data indication to the server during the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e state.\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eputCopyEnd conn Nothing\u003c/code\u003e ends the \u003ccode\u003e\u003ca\u003eCopyIn\u003c/a\u003e\u003c/code\u003e operation successfully.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eputCopyEnd conn (Just errormsg)\u003c/code\u003e forces the \u003ccode\u003eCOPY\u003c/code\u003e to fail, with\n    \u003ccode\u003eerrormsg\u003c/code\u003e used as the error message.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eAfter \u003ccode\u003e\u003ca\u003eputCopyEnd\u003c/a\u003e\u003c/code\u003e returns \u003ccode\u003eCopyOk\u003c/code\u003e, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the final\n result status of the \u003ccode\u003eCOPY\u003c/code\u003e command.  Then return to normal operation.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "putCopyEnd",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Maybe ByteString -\u003e IO CopyInResult",
          "source": "src/Database-PostgreSQL-LibPQ.html#putCopyEnd",
          "type": "function"
        },
        "index": {
          "description": "Send end-of-data indication to the server during the CopyIn state putCopyEnd conn Nothing ends the CopyIn operation successfully putCopyEnd conn Just errormsg forces the COPY to fail with errormsg used as the error message After putCopyEnd returns CopyOk call getResult to obtain the final result status of the COPY command Then return to normal operation",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "putCopyEnd",
          "normalized": "Connection-\u003eMaybe ByteString-\u003eIO CopyInResult",
          "package": "postgresql-libpq",
          "partial": "Copy End",
          "signature": "Connection-\u003eMaybe ByteString-\u003eIO CopyInResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:putCopyEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts the \u003ccode\u003e\u003ca\u003eExecStatus\u003c/a\u003e\u003c/code\u003e returned by \u003ccode\u003e\u003ca\u003eresultStatus\u003c/a\u003e\u003c/code\u003e into a\n string describing the status code. The caller should not\n free the result.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resStatus",
          "package": "postgresql-libpq",
          "signature": "ExecStatus -\u003e IO ByteString",
          "source": "src/Database-PostgreSQL-LibPQ.html#resStatus",
          "type": "function"
        },
        "index": {
          "description": "Converts the ExecStatus returned by resultStatus into string describing the status code The caller should not free the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resStatus",
          "normalized": "ExecStatus-\u003eIO ByteString",
          "package": "postgresql-libpq",
          "partial": "Status",
          "signature": "ExecStatus-\u003eIO ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResets the communication channel to the server.\n\u003c/p\u003e\u003cp\u003eThis function will close the connection to the server and attempt\n to reestablish a new connection to the same server, using all the\n same parameters previously used. This might be useful for error\n recovery if a working connection is lost.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "reset",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO ()",
          "source": "src/Database-PostgreSQL-LibPQ.html#reset",
          "type": "function"
        },
        "index": {
          "description": "Resets the communication channel to the server This function will close the connection to the server and attempt to reestablish new connection to the same server using all the same parameters previously used This might be useful for error recovery if working connection is lost",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "reset",
          "normalized": "Connection-\u003eIO()",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:reset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo initiate a connection reset, call \u003ccode\u003e\u003ca\u003eresetStart\u003c/a\u003e\u003c/code\u003e. If it returns\n \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e, the reset has failed. If it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, poll the reset\n using \u003ccode\u003e\u003ca\u003eresetPoll\u003c/a\u003e\u003c/code\u003e in exactly the same way as you would create the\n connection using \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resetPoll",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO PollingStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#resetPoll",
          "type": "function"
        },
        "index": {
          "description": "To initiate connection reset call resetStart If it returns False the reset has failed If it returns True poll the reset using resetPoll in exactly the same way as you would create the connection using connectPoll",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resetPoll",
          "normalized": "Connection-\u003eIO PollingStatus",
          "package": "postgresql-libpq",
          "partial": "Poll",
          "signature": "Connection-\u003eIO PollingStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resetPoll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the communication channel to the server, in a nonblocking manner.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resetStart",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#resetStart",
          "type": "function"
        },
        "index": {
          "description": "Reset the communication channel to the server in nonblocking manner",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resetStart",
          "normalized": "Connection-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Start",
          "signature": "Connection-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resetStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an individual field of an error report.\n\u003c/p\u003e\u003cp\u003efieldcode is an error field identifier; see the symbols listed\n below. \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is returned if the PGresult is not an error or\n warning result, or does not include the specified field. Field\n values will normally not include a trailing newline.\n\u003c/p\u003e\u003cp\u003eThe client is responsible for formatting displayed information to\n meet its needs; in particular it should break long lines as\n needed. Newline characters appearing in the error message fields\n should be treated as paragraph breaks, not line breaks.\n\u003c/p\u003e\u003cp\u003eErrors generated internally by libpq will have severity and primary\n message, but typically no other fields. Errors returned by a\n pre-3.0-protocol server will include severity and primary message,\n and sometimes a detail message, but no other fields.\n\u003c/p\u003e\u003cp\u003eNote that error fields are only available from \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e objects,\n not \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e objects; there is no errorField function.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultErrorField",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e FieldCode -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#resultErrorField",
          "type": "function"
        },
        "index": {
          "description": "Returns an individual field of an error report fieldcode is an error field identifier see the symbols listed below Nothing is returned if the PGresult is not an error or warning result or does not include the specified field Field values will normally not include trailing newline The client is responsible for formatting displayed information to meet its needs in particular it should break long lines as needed Newline characters appearing in the error message fields should be treated as paragraph breaks not line breaks Errors generated internally by libpq will have severity and primary message but typically no other fields Errors returned by pre-3.0-protocol server will include severity and primary message and sometimes detail message but no other fields Note that error fields are only available from Result objects not Connection objects there is no errorField function",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultErrorField",
          "normalized": "Result-\u003eFieldCode-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Error Field",
          "signature": "Result-\u003eFieldCode-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultErrorField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the error message most recently generated by an operation\n on the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultErrorMessage",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#resultErrorMessage",
          "type": "function"
        },
        "index": {
          "description": "Returns the error message most recently generated by an operation on the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultErrorMessage",
          "normalized": "Result-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Error Message",
          "signature": "Result-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultErrorMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the result status of the command.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultStatus",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO ExecStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#resultStatus",
          "type": "function"
        },
        "index": {
          "description": "Returns the result status of the command",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "resultStatus",
          "normalized": "Result-\u003eIO ExecStatus",
          "package": "postgresql-libpq",
          "partial": "Status",
          "signature": "Result-\u003eIO ExecStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:resultStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a request to obtain information about the specified\n portal, without waiting for completion.\n\u003c/p\u003e\u003cp\u003eThis is an asynchronous version of \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e: it returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was able to dispatch the request, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if\n not. After a successful call, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the\n results. The function's parameters are handled identically to\n \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edescribePortal\u003c/a\u003e\u003c/code\u003e, it will not work on\n 2.0-protocol connections.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendDescribePortal",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Submits request to obtain information about the specified portal without waiting for completion This is an asynchronous version of describePortal it returns True if it was able to dispatch the request and False if not After successful call call getResult to obtain the results The function parameters are handled identically to describePortal Like describePortal it will not work on protocol connections",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendDescribePortal",
          "normalized": "Connection-\u003eByteString-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Describe Portal",
          "signature": "Connection-\u003eByteString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendDescribePortal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a request to obtain information about the specified\n prepared statement, without waiting for completion.\n\u003c/p\u003e\u003cp\u003eThis is an asynchronous version of \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e: it returns\n \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was able to dispatch the request, and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if\n not. After a successful call, call \u003ccode\u003e\u003ca\u003egetResult\u003c/a\u003e\u003c/code\u003e to obtain the\n results. The function's parameters are handled identically to\n \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e. Like \u003ccode\u003e\u003ca\u003edescribePrepared\u003c/a\u003e\u003c/code\u003e, it will not work on\n 2.0-protocol connections.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendDescribePrepared",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003e ByteString-\u003e IO Bool",
          "type": "function"
        },
        "index": {
          "description": "Submits request to obtain information about the specified prepared statement without waiting for completion This is an asynchronous version of describePrepared it returns True if it was able to dispatch the request and False if not After successful call call getResult to obtain the results The function parameters are handled identically to describePrepared Like describePrepared it will not work on protocol connections",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendDescribePrepared",
          "normalized": "Connection-\u003eByteString-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Describe Prepared",
          "signature": "Connection-\u003eByteString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendDescribePrepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to create a prepared statement with the given\n parameters, without waiting for completion.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendPrepare",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e ByteString -\u003e Maybe [Oid] -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#sendPrepare",
          "type": "function"
        },
        "index": {
          "description": "Sends request to create prepared statement with the given parameters without waiting for completion",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendPrepare",
          "normalized": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Prepare",
          "signature": "Connection-\u003eByteString-\u003eByteString-\u003eMaybe[Oid]-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendPrepare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a command to the server without waiting for the\n result(s). \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e is returned if the command was successfully\n dispatched and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e if not (in which case, use \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e to\n get more information about the failure).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQuery",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#sendQuery",
          "type": "function"
        },
        "index": {
          "description": "Submits command to the server without waiting for the result True is returned if the command was successfully dispatched and False if not in which case use errorMessage to get more information about the failure",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQuery",
          "normalized": "Connection-\u003eByteString-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Query",
          "signature": "Connection-\u003eByteString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSubmits a command and separate parameters to the server without\n waiting for the result(s).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQueryParams",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e [Maybe (Oid, ByteString, Format)] -\u003e Format -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#sendQueryParams",
          "type": "function"
        },
        "index": {
          "description": "Submits command and separate parameters to the server without waiting for the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQueryParams",
          "normalized": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Query Params",
          "signature": "Connection-\u003eByteString-\u003e[Maybe(Oid,ByteString,Format)]-\u003eFormat-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQueryParams"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends a request to execute a prepared statement with given\n parameters, without waiting for the result(s).\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQueryPrepared",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e [Maybe (ByteString, Format)] -\u003e Format -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#sendQueryPrepared",
          "type": "function"
        },
        "index": {
          "description": "Sends request to execute prepared statement with given parameters without waiting for the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "sendQueryPrepared",
          "normalized": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Query Prepared",
          "signature": "Connection-\u003eByteString-\u003e[Maybe(ByteString,Format)]-\u003eFormat-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:sendQueryPrepared"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns an integer representing the backend version.\n\u003c/p\u003e\u003cp\u003eApplications might use this to determine the version of the\n database server they are connected to. The number is formed by\n converting the major, minor, and revision numbers into\n two-decimal-digit numbers and appending them together. For example,\n version 8.1.5 will be returned as 80105, and version 8.2 will be\n returned as 80200 (leading zeroes are not shown). Zero is returned\n if the connection is bad.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "serverVersion",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO Int",
          "source": "src/Database-PostgreSQL-LibPQ.html#serverVersion",
          "type": "function"
        },
        "index": {
          "description": "Returns an integer representing the backend version Applications might use this to determine the version of the database server they are connected to The number is formed by converting the major minor and revision numbers into two-decimal-digit numbers and appending them together For example version will be returned as and version will be returned as leading zeroes are not shown Zero is returned if the connection is bad",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "serverVersion",
          "normalized": "Connection-\u003eIO Int",
          "package": "postgresql-libpq",
          "partial": "Version",
          "signature": "Connection-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:serverVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the client encoding.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setClientEncoding",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e ByteString -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#setClientEncoding",
          "type": "function"
        },
        "index": {
          "description": "Sets the client encoding",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setClientEncoding",
          "normalized": "Connection-\u003eByteString-\u003eIO Bool",
          "package": "postgresql-libpq",
          "partial": "Client Encoding",
          "signature": "Connection-\u003eByteString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setClientEncoding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the verbosity of messages returned by \u003ccode\u003e\u003ca\u003eerrorMessage\u003c/a\u003e\u003c/code\u003e\n and \u003ccode\u003e\u003ca\u003eresultErrorMessage\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003esetErrorVerbosity\u003c/a\u003e\u003c/code\u003e sets the verbosity mode, returning the\n connection's previous setting. In \u003ccode\u003e\u003ca\u003eErrorsTerse\u003c/a\u003e\u003c/code\u003e mode, returned\n messages include severity, primary text, and position only; this\n will normally fit on a single line. The default mode produces\n messages that include the above plus any detail, hint, or context\n fields (these might span multiple lines). The \u003ccode\u003e\u003ca\u003eErrorsVerbose\u003c/a\u003e\u003c/code\u003e mode\n includes all available fields. Changing the verbosity does not\n affect the messages available from already-existing \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e\n objects, only subsequently-created ones.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setErrorVerbosity",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Verbosity -\u003e IO Verbosity",
          "source": "src/Database-PostgreSQL-LibPQ.html#setErrorVerbosity",
          "type": "function"
        },
        "index": {
          "description": "Determines the verbosity of messages returned by errorMessage and resultErrorMessage setErrorVerbosity sets the verbosity mode returning the connection previous setting In ErrorsTerse mode returned messages include severity primary text and position only this will normally fit on single line The default mode produces messages that include the above plus any detail hint or context fields these might span multiple lines The ErrorsVerbose mode includes all available fields Changing the verbosity does not affect the messages available from already-existing Result objects only subsequently-created ones",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setErrorVerbosity",
          "normalized": "Connection-\u003eVerbosity-\u003eIO Verbosity",
          "package": "postgresql-libpq",
          "partial": "Error Verbosity",
          "signature": "Connection-\u003eVerbosity-\u003eIO Verbosity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setErrorVerbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the nonblocking status of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setnonblocking",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e Bool -\u003e IO Bool",
          "source": "src/Database-PostgreSQL-LibPQ.html#setnonblocking",
          "type": "function"
        },
        "index": {
          "description": "Sets the nonblocking status of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "setnonblocking",
          "normalized": "Connection-\u003eBool-\u003eIO Bool",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eBool-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:setnonblocking"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eObtains the file descriptor number of the connection socket to\n the server. (This will not change during normal operation, but\n could change during connection setup or reset.)\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "socket",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe Fd)",
          "source": "src/Database-PostgreSQL-LibPQ.html#socket",
          "type": "function"
        },
        "index": {
          "description": "Obtains the file descriptor number of the connection socket to the server This will not change during normal operation but could change during connection setup or reset",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "socket",
          "normalized": "Connection-\u003eIO(Maybe Fd)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe Fd)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the status of the connection.\n\u003c/p\u003e\u003cp\u003eThe status can be one of a number of values. However, only two of\n these are seen outside of an asynchronous connection procedure:\n \u003ccode\u003e\u003ca\u003eConnectionOk\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e. A good connection to the\n database has the status \u003ccode\u003e\u003ca\u003eConnectionOk\u003c/a\u003e\u003c/code\u003e. A failed connection attempt\n is signaled by status \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e. Ordinarily, an OK status\n will remain so until \u003ccode\u003e\u003ca\u003efinish\u003c/a\u003e\u003c/code\u003e, but a communications failure might\n result in the status changing to \u003ccode\u003e\u003ca\u003eConnectionBad\u003c/a\u003e\u003c/code\u003e prematurely. In\n that case the application could try to recover by calling \u003ccode\u003e\u003ca\u003ereset\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eSee the entry for \u003ccode\u003e\u003ca\u003econnectStart\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003econnectPoll\u003c/a\u003e\u003c/code\u003e with regards to\n other status codes that might be seen.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "status",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO ConnStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#status",
          "type": "function"
        },
        "index": {
          "description": "Returns the status of the connection The status can be one of number of values However only two of these are seen outside of an asynchronous connection procedure ConnectionOk and ConnectionBad good connection to the database has the status ConnectionOk failed connection attempt is signaled by status ConnectionBad Ordinarily an OK status will remain so until finish but communications failure might result in the status changing to ConnectionBad prematurely In that case the application could try to recover by calling reset See the entry for connectStart and connectPoll with regards to other status codes that might be seen",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "status",
          "normalized": "Connection-\u003eIO ConnStatus",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO ConnStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "toColumn",
          "package": "postgresql-libpq",
          "signature": "a -\u003e Column",
          "source": "src/Database-PostgreSQL-LibPQ.html#toColumn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "toColumn",
          "normalized": "a-\u003eColumn",
          "package": "postgresql-libpq",
          "partial": "Column",
          "signature": "a-\u003eColumn",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:toColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.PostgreSQL.LibPQ",
          "name": "toRow",
          "package": "postgresql-libpq",
          "signature": "a -\u003e Row",
          "source": "src/Database-PostgreSQL-LibPQ.html#toRow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "toRow",
          "normalized": "a-\u003eRow",
          "package": "postgresql-libpq",
          "partial": "Row",
          "signature": "a-\u003eRow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:toRow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the current in-transaction status of the server.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eTransActive\u003c/a\u003e\u003c/code\u003e is reported only when a query has been sent to the\n server and not yet completed.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "transactionStatus",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO TransactionStatus",
          "source": "src/Database-PostgreSQL-LibPQ.html#transactionStatus",
          "type": "function"
        },
        "index": {
          "description": "Returns the current in-transaction status of the server TransActive is reported only when query has been sent to the server and not yet completed",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "transactionStatus",
          "normalized": "Connection-\u003eIO TransactionStatus",
          "package": "postgresql-libpq",
          "partial": "Status",
          "signature": "Connection-\u003eIO TransactionStatus",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:transactionStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a \u003ccode\u003eByteString\u003c/code\u003e representation of binary data into binary\n data - the reverse of \u003ccode\u003ePQescapeByteaConn\u003c/code\u003e. This is needed when\n retrieving bytea data in text format, but not when retrieving it in\n binary format.\n\u003c/p\u003e\u003cp\u003eThe parameter points to a string such as might be returned by\n \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e when applied to a bytea column. \u003ccode\u003e\u003ca\u003eunescapeBytea\u003c/a\u003e\u003c/code\u003e converts\n this string representation into its binary representation. It\n returns a \u003ccode\u003eByteString\u003c/code\u003e, or \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e on error.\n\u003c/p\u003e\u003cp\u003eThis conversion is not exactly the inverse of \u003ccode\u003e\u003ca\u003eescapeByteaConn\u003c/a\u003e\u003c/code\u003e,\n because the string is not expected to be \u003ca\u003eescaped\u003c/a\u003e when received\n from \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e. In particular this means there is no need for\n string quoting considerations, and so no need for a \u003ccode\u003e\u003ca\u003eConnection\u003c/a\u003e\u003c/code\u003e\n parameter.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "unescapeBytea",
          "package": "postgresql-libpq",
          "signature": "ByteString -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#unescapeBytea",
          "type": "function"
        },
        "index": {
          "description": "Converts ByteString representation of binary data into binary data the reverse of PQescapeByteaConn This is needed when retrieving bytea data in text format but not when retrieving it in binary format The parameter points to string such as might be returned by getvalue when applied to bytea column unescapeBytea converts this string representation into its binary representation It returns ByteString or Nothing on error This conversion is not exactly the inverse of escapeByteaConn because the string is not expected to be escaped when received from getvalue In particular this means there is no need for string quoting considerations and so no need for Connection parameter",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "unescapeBytea",
          "normalized": "ByteString-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "partial": "Bytea",
          "signature": "ByteString-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:unescapeBytea"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFrees the memory associated with a result.  Note that using this\n function correctly is especially tricky;  you need to ensure that\n no references to the result.   This means no references to a value\n returned by \u003ccode\u003e\u003ca\u003egetvalue\u003c/a\u003e\u003c/code\u003e,  no references hiding inside an unevaluated\n thunk,  etc.    Improper use of this function is likely to cause a\n segfault.   Also,  the use of this function is not strictly necessary;\n the memory will get freed by the garbage collector when there are no\n more references to the result.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "unsafeFreeResult",
          "package": "postgresql-libpq",
          "signature": "Result -\u003e IO ()",
          "source": "src/Database-PostgreSQL-LibPQ.html#unsafeFreeResult",
          "type": "function"
        },
        "index": {
          "description": "Frees the memory associated with result Note that using this function correctly is especially tricky you need to ensure that no references to the result This means no references to value returned by getvalue no references hiding inside an unevaluated thunk etc Improper use of this function is likely to cause segfault Also the use of this function is not strictly necessary the memory will get freed by the garbage collector when there are no more references to the result",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "unsafeFreeResult",
          "normalized": "Result-\u003eIO()",
          "package": "postgresql-libpq",
          "partial": "Free Result",
          "signature": "Result-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:unsafeFreeResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the user name of the connection.\n\u003c/p\u003e",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "user",
          "package": "postgresql-libpq",
          "signature": "Connection -\u003e IO (Maybe ByteString)",
          "source": "src/Database-PostgreSQL-LibPQ.html#user",
          "type": "function"
        },
        "index": {
          "description": "Returns the user name of the connection",
          "hierarchy": "Database PostgreSQL LibPQ",
          "module": "Database.PostgreSQL.LibPQ",
          "name": "user",
          "normalized": "Connection-\u003eIO(Maybe ByteString)",
          "package": "postgresql-libpq",
          "signature": "Connection-\u003eIO(Maybe ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/postgresql-libpq/docs/Database-PostgreSQL-LibPQ.html#v:user"
      }
    }
  ]
]