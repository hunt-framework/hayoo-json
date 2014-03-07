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
        "word": "MissingPy"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eThis module interfaces \u003ca\u003eDatabase.AnyDBM\u003c/a\u003e to Python's anydbm.py.\nImplementations for specific Python *dbm modules are also available.\n\u003c/p\u003e\u003cp\u003eSee and import \u003ca\u003eDatabase.AnyDBM\u003c/a\u003e to use these features.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "AnyDBM",
          "package": "MissingPy",
          "source": "src/MissingPy-AnyDBM.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable This module interfaces Database.AnyDBM to Python anydbm.py Implementations for specific Python dbm modules are also available See and import Database.AnyDBM to use these features Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "AnyDBM",
          "package": "MissingPy",
          "partial": "Any DBM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags used to open a dbm-type database \n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "PyDBMOpenFlags",
          "package": "MissingPy",
          "source": "src/MissingPy-AnyDBM.html#PyDBMOpenFlags",
          "type": "data"
        },
        "index": {
          "description": "Flags used to open dbm-type database",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "PyDBMOpenFlags",
          "package": "MissingPy",
          "partial": "Py DBMOpen Flags",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#t:PyDBMOpenFlags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen an \u003cem\u003eexisting\u003c/em\u003e database for read only\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadOnly",
          "package": "MissingPy",
          "signature": "DBM_ReadOnly",
          "source": "src/MissingPy-AnyDBM.html#PyDBMOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "Open an existing database for read only",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadOnly",
          "package": "MissingPy",
          "partial": "DBM Read Only",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:DBM_ReadOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen an \u003cem\u003eexisting\u003c/em\u003e database for reading and writing\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWrite",
          "package": "MissingPy",
          "signature": "DBM_ReadWrite",
          "source": "src/MissingPy-AnyDBM.html#PyDBMOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "Open an existing database for reading and writing",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWrite",
          "package": "MissingPy",
          "partial": "DBM Read Write",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:DBM_ReadWrite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a database for reading and writing, creating if it doesn't exist\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWriteCreate",
          "package": "MissingPy",
          "signature": "DBM_ReadWriteCreate",
          "source": "src/MissingPy-AnyDBM.html#PyDBMOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "Open database for reading and writing creating if it doesn exist",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWriteCreate",
          "package": "MissingPy",
          "partial": "DBM Read Write Create",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:DBM_ReadWriteCreate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a database, creating it anew each time (deleting any existing data)\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWriteNew",
          "package": "MissingPy",
          "signature": "DBM_ReadWriteNew",
          "source": "src/MissingPy-AnyDBM.html#PyDBMOpenFlags",
          "type": "function"
        },
        "index": {
          "description": "Open database creating it anew each time deleting any existing data",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "DBM_ReadWriteNew",
          "package": "MissingPy",
          "partial": "DBM Read Write New",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:DBM_ReadWriteNew"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a persistent storage database using the \"best\" storage mechanism\navailable to Python on this system.  This will usually be one of the *dbm\nservices, though in rare circumstances, could be \"dumbdbm\", which is\nonly marginally better than \u003ca\u003eDatabase.AnyDBM.StringDBM\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "openAnyDBM",
          "package": "MissingPy",
          "signature": "FilePath -\u003e PyDBMOpenFlags -\u003e IO PyDict",
          "source": "src/MissingPy-AnyDBM.html#openAnyDBM",
          "type": "function"
        },
        "index": {
          "description": "Opens persistent storage database using the best storage mechanism available to Python on this system This will usually be one of the dbm services though in rare circumstances could be dumbdbm which is only marginally better than Database.AnyDBM.StringDBM",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "openAnyDBM",
          "normalized": "FilePath-\u003ePyDBMOpenFlags-\u003eIO PyDict",
          "package": "MissingPy",
          "partial": "Any DBM",
          "signature": "FilePath-\u003ePyDBMOpenFlags-\u003eIO PyDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:openAnyDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a database using a specific module given by the first parameter.  The\nmodule supported are:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e dbhash\n\u003c/li\u003e\u003cli\u003e dbm\n\u003c/li\u003e\u003cli\u003e dumbdbm\n\u003c/li\u003e\u003cli\u003e gdbm\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eSECURITY NOTE: the string is not validated before being passed to Python.\nDo not pass an arbitrary value to this function.\n\u003c/p\u003e",
          "module": "MissingPy.AnyDBM",
          "name": "openSpecificDBM",
          "package": "MissingPy",
          "signature": "String-\u003e FilePath-\u003e PyDBMOpenFlags-\u003e IO PyDict",
          "type": "function"
        },
        "index": {
          "description": "Open database using specific module given by the first parameter The module supported are dbhash dbm dumbdbm gdbm SECURITY NOTE the string is not validated before being passed to Python Do not pass an arbitrary value to this function",
          "hierarchy": "MissingPy AnyDBM",
          "module": "MissingPy.AnyDBM",
          "name": "openSpecificDBM",
          "normalized": "String-\u003eFilePath-\u003ePyDBMOpenFlags-\u003eIO PyDict",
          "package": "MissingPy",
          "partial": "Specific DBM",
          "signature": "String-\u003eFilePath-\u003ePyDBMOpenFlags-\u003eIO PyDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-AnyDBM.html#v:openSpecificDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eSupport for BZip2 files\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MissingPy.FileArchive.BZip2",
          "name": "BZip2",
          "package": "MissingPy",
          "source": "src/MissingPy-FileArchive-BZip2.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Support for BZip2 files Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "MissingPy FileArchive BZip2",
          "module": "MissingPy.FileArchive.BZip2",
          "name": "BZip2",
          "package": "MissingPy",
          "partial": "BZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-FileArchive-BZip2.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a BZip2 file.  The compression level should be from 1\n(least compression) to 9 (most compression).  This is ignored when the file\nis opened read-only.\n\u003c/p\u003e\u003cp\u003eOnce opened, the functions defined in \u003ca\u003eSystem.IO.HVIO\u003c/a\u003e can be used\nto work with it.\n\u003c/p\u003e\u003cp\u003eBZip2 supports only ReadMode and WriteMode for the IOMode. \n\u003c/p\u003e",
          "module": "MissingPy.FileArchive.BZip2",
          "name": "openBz2",
          "package": "MissingPy",
          "signature": "FilePath-\u003e IOMode-\u003e Int-\u003e IO PyFile",
          "type": "function"
        },
        "index": {
          "description": "Open BZip2 file The compression level should be from least compression to most compression This is ignored when the file is opened read-only Once opened the functions defined in System.IO.HVIO can be used to work with it BZip2 supports only ReadMode and WriteMode for the IOMode",
          "hierarchy": "MissingPy FileArchive BZip2",
          "module": "MissingPy.FileArchive.BZip2",
          "name": "openBz2",
          "normalized": "FilePath-\u003eIOMode-\u003eInt-\u003eIO PyFile",
          "package": "MissingPy",
          "partial": "Bz",
          "signature": "FilePath-\u003eIOMode-\u003eInt-\u003eIO PyFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-FileArchive-BZip2.html#v:openBz2"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eSupport for GZip files\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "MissingPy.FileArchive.GZip",
          "name": "GZip",
          "package": "MissingPy",
          "source": "src/MissingPy-FileArchive-GZip.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Support for GZip files Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "MissingPy FileArchive GZip",
          "module": "MissingPy.FileArchive.GZip",
          "name": "GZip",
          "package": "MissingPy",
          "partial": "GZip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-FileArchive-GZip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a GZip file.  The compression level should be from 1\n(least compression) to 9 (most compression).  This is ignored when the\nfile is opened read-only.\n\u003c/p\u003e\u003cp\u003eOnce opened, the functions defined in \u003ccode\u003e\u003ca\u003eHVIO\u003c/a\u003e\u003c/code\u003e can be used to \nwork with it. \n\u003c/p\u003e",
          "module": "MissingPy.FileArchive.GZip",
          "name": "openGz",
          "package": "MissingPy",
          "signature": "FilePath-\u003e IOMode-\u003e Int-\u003e IO PyFile",
          "type": "function"
        },
        "index": {
          "description": "Open GZip file The compression level should be from least compression to most compression This is ignored when the file is opened read-only Once opened the functions defined in HVIO can be used to work with it",
          "hierarchy": "MissingPy FileArchive GZip",
          "module": "MissingPy.FileArchive.GZip",
          "name": "openGz",
          "normalized": "FilePath-\u003eIOMode-\u003eInt-\u003eIO PyFile",
          "package": "MissingPy",
          "partial": "Gz",
          "signature": "FilePath-\u003eIOMode-\u003eInt-\u003eIO PyFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/MissingPy-FileArchive-GZip.html#v:openGz"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython low-level exception definitions\n\u003c/p\u003e\u003cp\u003eThese are definitions of the built-in Python exception objects.  You can\nuse them with \u003ccode\u003e\u003ca\u003edoesExceptionMatch\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003ecatchSpecificPy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe meanings of these exceptions can be found at\n\u003ca\u003ehttp://www.python.org/doc/current/lib/module-exceptions.html\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003ePlease note that windowsError is available only on Microsoft platforms.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Exceptions.ExcTypes",
          "name": "ExcTypes",
          "package": "MissingPy",
          "source": "src/Python-Exceptions-ExcTypes.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python low-level exception definitions These are definitions of the built-in Python exception objects You can use them with doesExceptionMatch and catchSpecificPy The meanings of these exceptions can be found at http www.python.org doc current lib module-exceptions.html Please note that windowsError is available only on Microsoft platforms Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "ExcTypes",
          "package": "MissingPy",
          "partial": "Exc Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "arithmeticError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#arithmeticError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "arithmeticError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:arithmeticError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "assertionError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#assertionError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "assertionError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:assertionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "attributeError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#attributeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "attributeError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:attributeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "environmentError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#environmentError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "environmentError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:environmentError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "floatingPointError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#floatingPointError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "floatingPointError",
          "package": "MissingPy",
          "partial": "Point Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:floatingPointError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "importError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#importError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "importError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:importError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "indexError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#indexError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "indexError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:indexError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "keyError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#keyError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "keyError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:keyError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "keyboardInterrupt",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#keyboardInterrupt",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "keyboardInterrupt",
          "package": "MissingPy",
          "partial": "Interrupt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:keyboardInterrupt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "lookupError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#lookupError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "lookupError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:lookupError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "memoryError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#memoryError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "memoryError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:memoryError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "nameError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#nameError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "nameError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:nameError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "notImplementedError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#notImplementedError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "notImplementedError",
          "package": "MissingPy",
          "partial": "Implemented Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:notImplementedError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "overflowError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#overflowError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "overflowError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:overflowError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyEOFError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#pyEOFError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyEOFError",
          "package": "MissingPy",
          "partial": "EOFError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:pyEOFError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyIOError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#pyIOError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyIOError",
          "package": "MissingPy",
          "partial": "IOError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:pyIOError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is Exception in Python; renamed to avoid naming conflicts here.\n\u003c/p\u003e",
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyMainException",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#pyMainException",
          "type": "function"
        },
        "index": {
          "description": "This is Exception in Python renamed to avoid naming conflicts here",
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyMainException",
          "package": "MissingPy",
          "partial": "Main Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:pyMainException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyOSError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#pyOSError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "pyOSError",
          "package": "MissingPy",
          "partial": "OSError",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:pyOSError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "referenceError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#referenceError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "referenceError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:referenceError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "runtimeError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#runtimeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "runtimeError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:runtimeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "standardError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#standardError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "standardError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:standardError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "syntaxError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#syntaxError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "syntaxError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:syntaxError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "systemError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#systemError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "systemError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:systemError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "systemExit",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#systemExit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "systemExit",
          "package": "MissingPy",
          "partial": "Exit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:systemExit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "typeError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#typeError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "typeError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:typeError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "valueError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#valueError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "valueError",
          "package": "MissingPy",
          "partial": "Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:valueError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Exceptions.ExcTypes",
          "name": "zeroDivisionError",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Exceptions-ExcTypes.html#zeroDivisionError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Exceptions ExcTypes",
          "module": "Python.Exceptions.ExcTypes",
          "name": "zeroDivisionError",
          "package": "MissingPy",
          "partial": "Division Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions-ExcTypes.html#v:zeroDivisionError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython low-level exception handling\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Exceptions",
          "name": "Exceptions",
          "package": "MissingPy",
          "source": "src/Python-Exceptions.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python low-level exception handling Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "Exceptions",
          "package": "MissingPy",
          "partial": "Exceptions",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Python exceptions.\n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "PyException",
          "package": "MissingPy",
          "source": "src/Python-Types.html#PyException",
          "type": "data"
        },
        "index": {
          "description": "The type of Python exceptions",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "PyException",
          "package": "MissingPy",
          "partial": "Py Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#t:PyException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given IO action.\n\u003c/p\u003e\u003cp\u003eIf it raises a \u003ccode\u003e\u003ca\u003ePyException\u003c/a\u003e\u003c/code\u003e, then execute the supplied handler and return\nits return value.  Otherwise, process as normal. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "catchPy",
          "package": "MissingPy",
          "signature": "IO a -\u003e (PyException -\u003e IO a) -\u003e IO a",
          "source": "src/Python-Exceptions.html#catchPy",
          "type": "function"
        },
        "index": {
          "description": "Execute the given IO action If it raises PyException then execute the supplied handler and return its return value Otherwise process as normal",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "catchPy",
          "normalized": "IO a-\u003e(PyException-\u003eIO a)-\u003eIO a",
          "package": "MissingPy",
          "partial": "Py",
          "signature": "IO a-\u003e(PyException-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:catchPy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike catchPy, but catches only instances of the Python class given\n(see \u003ccode\u003e\u003ca\u003edoesExceptionMatch\u003c/a\u003e\u003c/code\u003e). \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "catchSpecificPy",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO a -\u003e (PyException -\u003e IO a) -\u003e IO a",
          "source": "src/Python-Exceptions.html#catchSpecificPy",
          "type": "function"
        },
        "index": {
          "description": "Like catchPy but catches only instances of the Python class given see doesExceptionMatch",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "catchSpecificPy",
          "normalized": "PyObject-\u003eIO a-\u003e(PyException-\u003eIO a)-\u003eIO a",
          "package": "MissingPy",
          "partial": "Specific Py",
          "signature": "PyObject-\u003eIO a-\u003e(PyException-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:catchSpecificPy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns true if the passed \u003ccode\u003e\u003ca\u003ePyException\u003c/a\u003e\u003c/code\u003e matches the given Python\nexception class or one of its subclasses.  Standard Python exception classes\nare given in \u003ccode\u003e\u003ca\u003eExcTypes\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "doesExceptionMatch",
          "package": "MissingPy",
          "signature": "PyException -\u003e PyObject -\u003e IO Bool",
          "source": "src/Python-Exceptions.html#doesExceptionMatch",
          "type": "function"
        },
        "index": {
          "description": "Returns true if the passed PyException matches the given Python exception class or one of its subclasses Standard Python exception classes are given in ExcTypes",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "doesExceptionMatch",
          "normalized": "PyException-\u003ePyObject-\u003eIO Bool",
          "package": "MissingPy",
          "partial": "Exception Match",
          "signature": "PyException-\u003ePyObject-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:doesExceptionMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handler for use in \u003ccode\u003e\u003ca\u003ecatchPy\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehandlePy\u003c/a\u003e\u003c/code\u003e.  Grabs the Python exception,\ndescribes it, and raises the description in the IO monad with \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "exc2ioerror",
          "package": "MissingPy",
          "signature": "PyException -\u003e IO a",
          "source": "src/Python-Exceptions.html#exc2ioerror",
          "type": "function"
        },
        "index": {
          "description": "handler for use in catchPy or handlePy Grabs the Python exception describes it and raises the description in the IO monad with fail",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "exc2ioerror",
          "normalized": "PyException-\u003eIO a",
          "package": "MissingPy",
          "signature": "PyException-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:exc2ioerror"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen an exception is thrown, it is not immediately formatted.\n\u003c/p\u003e\u003cp\u003eThis call will format it. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "formatException",
          "package": "MissingPy",
          "signature": "PyException -\u003e IO PyException",
          "source": "src/Python-Exceptions.html#formatException",
          "type": "function"
        },
        "index": {
          "description": "When an exception is thrown it is not immediately formatted This call will format it",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "formatException",
          "normalized": "PyException-\u003eIO PyException",
          "package": "MissingPy",
          "partial": "Exception",
          "signature": "PyException-\u003eIO PyException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:formatException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecatchPy\u003c/a\u003e\u003c/code\u003e, with the order of arguments reversed. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "handlePy",
          "package": "MissingPy",
          "signature": "(PyException -\u003e IO a) -\u003e IO a -\u003e IO a",
          "source": "src/Python-Exceptions.html#handlePy",
          "type": "function"
        },
        "index": {
          "description": "Like catchPy with the order of arguments reversed",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "handlePy",
          "normalized": "(PyException-\u003eIO a)-\u003eIO a-\u003eIO a",
          "package": "MissingPy",
          "partial": "Py",
          "signature": "(PyException-\u003eIO a)-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:handlePy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful as the first argument to catchJust, tryJust, or handleJust.\nReturn Nothing if the given exception is not a \u003ccode\u003e\u003ca\u003ePyException\u003c/a\u003e\u003c/code\u003e, or \nthe exception otherwise. \n\u003c/p\u003e",
          "module": "Python.Exceptions",
          "name": "pyExceptions",
          "package": "MissingPy",
          "signature": "Exception -\u003e Maybe PyException",
          "source": "src/Python-Exceptions.html#pyExceptions",
          "type": "function"
        },
        "index": {
          "description": "Useful as the first argument to catchJust tryJust or handleJust Return Nothing if the given exception is not PyException or the exception otherwise",
          "hierarchy": "Python Exceptions",
          "module": "Python.Exceptions",
          "name": "pyExceptions",
          "normalized": "Exception-\u003eMaybe PyException",
          "package": "MissingPy",
          "partial": "Exceptions",
          "signature": "Exception-\u003eMaybe PyException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Exceptions.html#v:pyExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eInterface to Python interpreter\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Interpreter",
          "name": "Interpreter",
          "package": "MissingPy",
          "source": "src/Python-Interpreter.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Interface to Python interpreter Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "Interpreter",
          "package": "MissingPy",
          "partial": "Interpreter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to interpret a snippet of Python code. \n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "StartFrom",
          "package": "MissingPy",
          "source": "src/Python-Types.html#StartFrom",
          "type": "data"
        },
        "index": {
          "description": "How to interpret snippet of Python code",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "StartFrom",
          "package": "MissingPy",
          "partial": "Start From",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#t:StartFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Python.Interpreter\",\"Python.Types\"]",
          "name": "Py_eval_input",
          "package": "MissingPy",
          "signature": "Py_eval_input",
          "source": "src/Python-Types.html#StartFrom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_eval_input\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:Py_eval_input\"]"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "Py_eval_input",
          "package": "MissingPy",
          "partial": "Py",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_eval_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Python.Interpreter\",\"Python.Types\"]",
          "name": "Py_file_input",
          "package": "MissingPy",
          "signature": "Py_file_input",
          "source": "src/Python-Types.html#StartFrom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_file_input\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:Py_file_input\"]"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "Py_file_input",
          "package": "MissingPy",
          "partial": "Py",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_file_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Python.Interpreter\",\"Python.Types\"]",
          "name": "Py_single_input",
          "package": "MissingPy",
          "signature": "Py_single_input",
          "source": "src/Python-Types.html#StartFrom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_single_input\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:Py_single_input\"]"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "Py_single_input",
          "package": "MissingPy",
          "partial": "Py",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:Py_single_input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function or callable object by name. \n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "callByName",
          "package": "MissingPy",
          "signature": "String-\u003e [PyObject]-\u003e [(String, PyObject)]-\u003e IO PyObject",
          "type": "function"
        },
        "index": {
          "description": "Call function or callable object by name",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "callByName",
          "normalized": "String-\u003e[PyObject]-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "By Name",
          "signature": "String-\u003e[PyObject]-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:callByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a function or callable object by namem using Haskell args\nand return values..\n\u003c/p\u003e\u003cp\u003eYou can use \u003ccode\u003e\u003ca\u003enoParms\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enoKwParms\u003c/a\u003e\u003c/code\u003e if you have no simple or\nkeyword parameters to pass, respectively. \n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "callByNameHs",
          "package": "MissingPy",
          "signature": "String-\u003e [a]-\u003e [(String, b)]-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Call function or callable object by namem using Haskell args and return values You can use noParms and noKwParms if you have no simple or keyword parameters to pass respectively",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "callByNameHs",
          "normalized": "String-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "package": "MissingPy",
          "partial": "By Name Hs",
          "signature": "String-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:callByNameHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Interpreter",
          "name": "cpy_GILEnsure",
          "package": "MissingPy",
          "signature": "IO (Ptr CPyGILState)",
          "source": "src/Python-ForeignImports.html#cpy_GILEnsure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "cpy_GILEnsure",
          "package": "MissingPy",
          "partial": "GILEnsure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:cpy_GILEnsure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Interpreter",
          "name": "cpy_GILRelease",
          "package": "MissingPy",
          "signature": "Ptr CPyGILState -\u003e IO ()",
          "source": "src/Python-ForeignImports.html#cpy_GILRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "cpy_GILRelease",
          "normalized": "Ptr CPyGILState-\u003eIO()",
          "package": "MissingPy",
          "partial": "GILRelease",
          "signature": "Ptr CPyGILState-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:cpy_GILRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Python.Interpreter\",\"Python.Objects\"]",
          "name": "noKwParms",
          "package": "MissingPy",
          "signature": "[(String, String)]",
          "source": "src/Python-Objects.html#noKwParms",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:noKwParms\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:noKwParms\"]"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "noKwParms",
          "normalized": "[(String,String)]",
          "package": "MissingPy",
          "partial": "Kw Parms",
          "signature": "[(String,String)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:noKwParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Python.Interpreter\",\"Python.Objects\"]",
          "name": "noParms",
          "package": "MissingPy",
          "signature": "[String]",
          "source": "src/Python-Objects.html#noParms",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:noParms\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:noParms\"]"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "noParms",
          "normalized": "[String]",
          "package": "MissingPy",
          "partial": "Parms",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:noParms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImport a module into the current environment in the normal sense\n(similar to \"import\" in Python).\n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "pyImport",
          "package": "MissingPy",
          "signature": "String -\u003e IO ()",
          "source": "src/Python-Interpreter.html#pyImport",
          "type": "function"
        },
        "index": {
          "description": "Import module into the current environment in the normal sense similar to import in Python",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyImport",
          "normalized": "String-\u003eIO()",
          "package": "MissingPy",
          "partial": "Import",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyImport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around C PyImport_AddModule, which looks up an existing module \n\u003c/p\u003e",
          "module": "[\"Python.Interpreter\",\"Python.Utils\"]",
          "name": "pyImport_AddModule",
          "package": "MissingPy",
          "signature": "String -\u003e IO PyObject",
          "source": "src/Python-Utils.html#pyImport_AddModule",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyImport_AddModule\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:pyImport_AddModule\"]"
        },
        "index": {
          "description": "Wrapper around PyImport AddModule which looks up an existing module",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyImport_AddModule",
          "normalized": "String-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Import Add Module",
          "signature": "String-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyImport_AddModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrapper around C PyImport_ImportModule, which imports a module.\n\u003c/p\u003e\u003cp\u003eYou may want the higher-level \u003ccode\u003e\u003ca\u003epyImport\u003c/a\u003e\u003c/code\u003e instead. \n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "pyImport_ImportModule",
          "package": "MissingPy",
          "signature": "String -\u003e IO PyObject",
          "source": "src/Python-Interpreter.html#pyImport_ImportModule",
          "type": "function"
        },
        "index": {
          "description": "Wrapper around PyImport ImportModule which imports module You may want the higher-level pyImport instead",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyImport_ImportModule",
          "normalized": "String-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Import Import Module",
          "signature": "String-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyImport_ImportModule"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the dict associated with a module. \n\u003c/p\u003e",
          "module": "[\"Python.Interpreter\",\"Python.Utils\"]",
          "name": "pyModule_GetDict",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO PyObject",
          "source": "src/Python-Utils.html#pyModule_GetDict",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyModule_GetDict\",\"http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:pyModule_GetDict\"]"
        },
        "index": {
          "description": "Gets the dict associated with module",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyModule_GetDict",
          "normalized": "PyObject-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Module Get Dict",
          "signature": "PyObject-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyModule_GetDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Interpreter",
          "name": "pyRun_SimpleString",
          "package": "MissingPy",
          "signature": "String -\u003e IO ()",
          "source": "src/Python-Interpreter.html#pyRun_SimpleString",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyRun_SimpleString",
          "normalized": "String-\u003eIO()",
          "package": "MissingPy",
          "partial": "Run Simple String",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyRun_SimpleString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun some code in Python.\n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "pyRun_String",
          "package": "MissingPy",
          "signature": "String-\u003e StartFrom-\u003e [(String, PyObject)]-\u003e IO PyObject",
          "type": "function"
        },
        "index": {
          "description": "Run some code in Python",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyRun_String",
          "normalized": "String-\u003eStartFrom-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Run String",
          "signature": "String-\u003eStartFrom-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyRun_String"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003epyRun_String\u003c/a\u003e\u003c/code\u003e, but take more Haskellish args and results.\n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "pyRun_StringHs",
          "package": "MissingPy",
          "signature": "String-\u003e StartFrom-\u003e [(String, b)]-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Like pyRun String but take more Haskellish args and results",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "pyRun_StringHs",
          "normalized": "String-\u003eStartFrom-\u003e[(String,a)]-\u003eIO b",
          "package": "MissingPy",
          "partial": "Run String Hs",
          "signature": "String-\u003eStartFrom-\u003e[(String,b)]-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:pyRun_StringHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize the Python interpreter environment.\n\u003c/p\u003e\u003cp\u003eMUST BE DONE BEFORE DOING ANYTHING ELSE! \n\u003c/p\u003e",
          "module": "Python.Interpreter",
          "name": "py_initialize",
          "package": "MissingPy",
          "signature": "IO ()",
          "source": "src/Python-Interpreter.html#py_initialize",
          "type": "function"
        },
        "index": {
          "description": "Initialize the Python interpreter environment MUST BE DONE BEFORE DOING ANYTHING ELSE",
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "py_initialize",
          "normalized": "IO()",
          "package": "MissingPy",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:py_initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Interpreter",
          "name": "py_initializeThreaded",
          "package": "MissingPy",
          "signature": "IO ()",
          "source": "src/Python-Interpreter.html#py_initializeThreaded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "py_initializeThreaded",
          "normalized": "IO()",
          "package": "MissingPy",
          "partial": "Threaded",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:py_initializeThreaded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Interpreter",
          "name": "withGIL",
          "package": "MissingPy",
          "signature": "IO a -\u003e IO a",
          "source": "src/Python-Interpreter.html#withGIL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Interpreter",
          "module": "Python.Interpreter",
          "name": "withGIL",
          "normalized": "IO a-\u003eIO a",
          "package": "MissingPy",
          "partial": "GIL",
          "signature": "IO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Interpreter.html#v:withGIL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython dict-like objects\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module can be used to access Python dicts and dict-like objects such as\ndbm databases.  For a higher-level interface to creating and working with these\ndbm interfaces, please see the functions in \u003ca\u003eMissingPy.AnyDBM\u003c/a\u003e.  Also,\nfor functions that use this, please see \u003ca\u003eDatabase.AnyDBM\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Objects.Dict",
          "name": "Dict",
          "package": "MissingPy",
          "source": "src/Python-Objects-Dict.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python dict-like objects Written by John Goerzen jgoerzen@complete.org This module can be used to access Python dicts and dict-like objects such as dbm databases For higher-level interface to creating and working with these dbm interfaces please see the functions in MissingPy.AnyDBM Also for functions that use this please see Database.AnyDBM",
          "hierarchy": "Python Objects Dict",
          "module": "Python.Objects.Dict",
          "name": "Dict",
          "package": "MissingPy",
          "partial": "Dict",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-Dict.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type for a Python dict or dict-like object. \n\u003c/p\u003e",
          "module": "Python.Objects.Dict",
          "name": "PyDict",
          "package": "MissingPy",
          "source": "src/Python-Objects-Dict.html#PyDict",
          "type": "data"
        },
        "index": {
          "description": "The basic type for Python dict or dict-like object",
          "hierarchy": "Python Objects Dict",
          "module": "Python.Objects.Dict",
          "name": "PyDict",
          "package": "MissingPy",
          "partial": "Py Dict",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-Dict.html#t:PyDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003ePyDict\u003c/a\u003e\u003c/code\u003e and returns its internal \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Objects.Dict",
          "name": "fromPyDict",
          "package": "MissingPy",
          "signature": "PyDict -\u003e PyObject",
          "source": "src/Python-Objects-Dict.html#fromPyDict",
          "type": "function"
        },
        "index": {
          "description": "Takes PyDict and returns its internal PyObject",
          "hierarchy": "Python Objects Dict",
          "module": "Python.Objects.Dict",
          "name": "fromPyDict",
          "normalized": "PyDict-\u003ePyObject",
          "package": "MissingPy",
          "partial": "Py Dict",
          "signature": "PyDict-\u003ePyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-Dict.html#v:fromPyDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e representing a Python dict or dict-like objext\nand makes it into a \u003ccode\u003e\u003ca\u003ePyDict\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Objects.Dict",
          "name": "mkPyDict",
          "package": "MissingPy",
          "signature": "PyObject -\u003e PyDict",
          "source": "src/Python-Objects-Dict.html#mkPyDict",
          "type": "function"
        },
        "index": {
          "description": "Takes PyObject representing Python dict or dict-like objext and makes it into PyDict",
          "hierarchy": "Python Objects Dict",
          "module": "Python.Objects.Dict",
          "name": "mkPyDict",
          "normalized": "PyObject-\u003ePyDict",
          "package": "MissingPy",
          "partial": "Py Dict",
          "signature": "PyObject-\u003ePyDict",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-Dict.html#v:mkPyDict"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython file-like objects\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module provides a Haskell interface to work with Python file-like objects.\nThe Haskell interface is a \u003ca\u003eSystem.IO.HVIO\u003c/a\u003e interface, which is similar\nin concept to the Python file-like object system.\n\u003c/p\u003e\u003cp\u003eYou can create such objects by using \u003ccode\u003e\u003ca\u003eopenPyFile\u003c/a\u003e\u003c/code\u003e from this module, or\n\u003ccode\u003e\u003ca\u003eopenGz\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eopenBz2\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eFunctions that you can use to operate on these objects are defined at\n\u003ca\u003eSystem.IO.HVIO\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Objects.File",
          "name": "File",
          "package": "MissingPy",
          "source": "src/Python-Objects-File.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python file-like objects Written by John Goerzen jgoerzen@complete.org This module provides Haskell interface to work with Python file-like objects The Haskell interface is System.IO.HVIO interface which is similar in concept to the Python file-like object system You can create such objects by using openPyFile from this module or openGz or openBz2 Functions that you can use to operate on these objects are defined at System.IO.HVIO",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "File",
          "package": "MissingPy",
          "partial": "File",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic type for a Python file or file-like object.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003es are a member of System.IO.HVIO and can be used as any other\nHaskell HVFS object such as a Handle.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003e objects cannot reliably detect EOF when asked by \u003ccode\u003e\u003ca\u003evIsEOF\u003c/a\u003e\u003c/code\u003e, but\ncan detect it and raise the appropriate IOError when it is reached.\nAlso, \u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003e objects cannot determine if they are readable, writable,\nor seekable in advance.\n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "PyFile",
          "package": "MissingPy",
          "source": "src/Python-Objects-File.html#PyFile",
          "type": "data"
        },
        "index": {
          "description": "The basic type for Python file or file-like object PyFile are member of System.IO.HVIO and can be used as any other Haskell HVFS object such as Handle PyFile objects cannot reliably detect EOF when asked by vIsEOF but can detect it and raise the appropriate IOError when it is reached Also PyFile objects cannot determine if they are readable writable or seekable in advance",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "PyFile",
          "package": "MissingPy",
          "partial": "Py File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#t:PyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtracts the \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e representing this \u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "fromPyFile",
          "package": "MissingPy",
          "signature": "PyFile -\u003e PyObject",
          "source": "src/Python-Objects-File.html#fromPyFile",
          "type": "function"
        },
        "index": {
          "description": "Extracts the PyObject representing this PyFile",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "fromPyFile",
          "normalized": "PyFile-\u003ePyObject",
          "package": "MissingPy",
          "partial": "Py File",
          "signature": "PyFile-\u003ePyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#v:fromPyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes a \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e representing a Python file or file-like object\nand makes it into a \u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "mkPyFile",
          "package": "MissingPy",
          "signature": "PyObject -\u003e PyFile",
          "source": "src/Python-Objects-File.html#mkPyFile",
          "type": "function"
        },
        "index": {
          "description": "Takes PyObject representing Python file or file-like object and makes it into PyFile",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "mkPyFile",
          "normalized": "PyObject-\u003ePyFile",
          "package": "MissingPy",
          "partial": "Py File",
          "signature": "PyObject-\u003ePyFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#v:mkPyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Haskell open mode to a Python mode string \n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "openModeConv",
          "package": "MissingPy",
          "signature": "IOMode -\u003e [Char]",
          "source": "src/Python-Objects-File.html#openModeConv",
          "type": "function"
        },
        "index": {
          "description": "Convert Haskell open mode to Python mode string",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "openModeConv",
          "normalized": "IOMode-\u003e[Char]",
          "package": "MissingPy",
          "partial": "Mode Conv",
          "signature": "IOMode-\u003e[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#v:openModeConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpen a file on disk and return a \u003ccode\u003e\u003ca\u003ePyFile\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "openPyFile",
          "package": "MissingPy",
          "signature": "FilePath -\u003e IOMode -\u003e IO PyFile",
          "source": "src/Python-Objects-File.html#openPyFile",
          "type": "function"
        },
        "index": {
          "description": "Open file on disk and return PyFile",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "openPyFile",
          "normalized": "FilePath-\u003eIOMode-\u003eIO PyFile",
          "package": "MissingPy",
          "partial": "Py File",
          "signature": "FilePath-\u003eIOMode-\u003eIO PyFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#v:openPyFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrap an operation, raising exceptions in the IO monad as appropriate. \n\u003c/p\u003e",
          "module": "Python.Objects.File",
          "name": "pyfwrap",
          "package": "MissingPy",
          "signature": "PyFile -\u003e (PyObject -\u003e IO a) -\u003e IO a",
          "source": "src/Python-Objects-File.html#pyfwrap",
          "type": "function"
        },
        "index": {
          "description": "Wrap an operation raising exceptions in the IO monad as appropriate",
          "hierarchy": "Python Objects File",
          "module": "Python.Objects.File",
          "name": "pyfwrap",
          "normalized": "PyFile-\u003e(PyObject-\u003eIO a)-\u003eIO a",
          "package": "MissingPy",
          "signature": "PyFile-\u003e(PyObject-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects-File.html#v:pyfwrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython type instances and object utilities.\n\u003c/p\u003e\u003cp\u003eFor more similar utilities, see \u003ca\u003ePython.Objects.File\u003c/a\u003e and\n\u003ca\u003ePython.Objects.Dict\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Objects",
          "name": "Objects",
          "package": "MissingPy",
          "source": "src/Python-Objects.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python type instances and object utilities For more similar utilities see Python.Objects.File and Python.Objects.Dict Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "Objects",
          "package": "MissingPy",
          "partial": "Objects",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMembers of this class can be derived from a Python object. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "FromPyObject",
          "package": "MissingPy",
          "source": "src/Python-Objects.html#FromPyObject",
          "type": "class"
        },
        "index": {
          "description": "Members of this class can be derived from Python object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "FromPyObject",
          "package": "MissingPy",
          "partial": "From Py Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#t:FromPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Python objects.\n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "PyObject",
          "package": "MissingPy",
          "source": "src/Python-Types.html#PyObject",
          "type": "data"
        },
        "index": {
          "description": "The type of Python objects",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "PyObject",
          "package": "MissingPy",
          "partial": "Py Object",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#t:PyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMembers of this class can be converted from a Haskell type\nto a Python object. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "ToPyObject",
          "package": "MissingPy",
          "source": "src/Python-Objects.html#ToPyObject",
          "type": "class"
        },
        "index": {
          "description": "Members of this class can be converted from Haskell type to Python object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "ToPyObject",
          "package": "MissingPy",
          "partial": "To Py Object",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#t:ToPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalls the named method of the given object. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "callMethodHs",
          "package": "MissingPy",
          "signature": "PyObject-\u003e String-\u003e [a]-\u003e [(String, b)]-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Calls the named method of the given object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "callMethodHs",
          "normalized": "PyObject-\u003eString-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "package": "MissingPy",
          "partial": "Method Hs",
          "signature": "PyObject-\u003eString-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:callMethodHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays a list of keys contained in the Python object. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "dirPyObject",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO [String]",
          "source": "src/Python-Objects.html#dirPyObject",
          "type": "function"
        },
        "index": {
          "description": "Displays list of keys contained in the Python object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "dirPyObject",
          "normalized": "PyObject-\u003eIO[String]",
          "package": "MissingPy",
          "partial": "Py Object",
          "signature": "PyObject-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:dirPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Objects",
          "name": "fromPyObject",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO a",
          "source": "src/Python-Objects.html#fromPyObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "fromPyObject",
          "normalized": "PyObject-\u003eIO a",
          "package": "MissingPy",
          "partial": "Py Object",
          "signature": "PyObject-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:fromPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to a function similar to Python's getattr.  This will\nlook up an attribute (such as a method) of an object. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "getattr",
          "package": "MissingPy",
          "signature": "PyObject -\u003e String -\u003e IO PyObject",
          "source": "src/Python-Objects.html#getattr",
          "type": "function"
        },
        "index": {
          "description": "An interface to function similar to Python getattr This will look up an attribute such as method of an object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "getattr",
          "normalized": "PyObject-\u003eString-\u003eIO PyObject",
          "package": "MissingPy",
          "signature": "PyObject-\u003eString-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:getattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to Python's hasattr.  Returns True if the named\nattribute exists; False otherwise. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "hasattr",
          "package": "MissingPy",
          "signature": "PyObject -\u003e String -\u003e IO Bool",
          "source": "src/Python-Objects.html#hasattr",
          "type": "function"
        },
        "index": {
          "description": "An interface to Python hasattr Returns True if the named attribute exists False otherwise",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "hasattr",
          "normalized": "PyObject-\u003eString-\u003eIO Bool",
          "package": "MissingPy",
          "signature": "PyObject-\u003eString-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:hasattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Objects",
          "name": "pyList_AsTuple",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO PyObject",
          "source": "src/Python-Objects.html#pyList_AsTuple",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "pyList_AsTuple",
          "normalized": "PyObject-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "List As Tuple",
          "signature": "PyObject-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:pyList_AsTuple"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a Python list to a tuple.\n\u003c/p\u003e\u003cp\u003eCall a Python object (function, etc).\n\u003c/p\u003e\u003cp\u003eFor a higher-level wrapper, see \u003ccode\u003e\u003ca\u003ecallByName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "pyObject_Call",
          "package": "MissingPy",
          "signature": "PyObject-\u003e [PyObject]-\u003e [(String, PyObject)]-\u003e IO PyObject",
          "type": "function"
        },
        "index": {
          "description": "Converts Python list to tuple Call Python object function etc For higher-level wrapper see callByName",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "pyObject_Call",
          "normalized": "PyObject-\u003e[PyObject]-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Object Call",
          "signature": "PyObject-\u003e[PyObject]-\u003e[(String,PyObject)]-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:pyObject_Call"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall a Python object with all-Haskell parameters.\nSimilar to \u003ccode\u003ePyObject_Call\u003c/code\u003e.  This limits you to a single item type for\nthe regular arguments and another single item type for the keyword arguments. \nNevertheless, it could be a handy shortcut at times.\n\u003c/p\u003e\u003cp\u003eFor a higher-level wrapper, see \u003ccode\u003e\u003ca\u003ecallByName\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eYou may find \u003ccode\u003e\u003ca\u003enoParms\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003enoKwParms\u003c/a\u003e\u003c/code\u003e useful if you aren't passing any\nparameters. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "pyObject_CallHs",
          "package": "MissingPy",
          "signature": "PyObject-\u003e [a]-\u003e [(String, b)]-\u003e IO c",
          "type": "function"
        },
        "index": {
          "description": "Call Python object with all-Haskell parameters Similar to PyObject Call This limits you to single item type for the regular arguments and another single item type for the keyword arguments Nevertheless it could be handy shortcut at times For higher-level wrapper see callByName You may find noParms and noKwParms useful if you aren passing any parameters",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "pyObject_CallHs",
          "normalized": "PyObject-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "package": "MissingPy",
          "partial": "Object Call Hs",
          "signature": "PyObject-\u003e[a]-\u003e[(String,b)]-\u003eIO c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:pyObject_CallHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003ePyObject_CallHs\u003c/code\u003e, but discards the return value. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "pyObject_RunHs",
          "package": "MissingPy",
          "signature": "PyObject-\u003e [a]-\u003e [(String, b)]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like PyObject CallHs but discards the return value",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "pyObject_RunHs",
          "normalized": "PyObject-\u003e[a]-\u003e[(String,b)]-\u003eIO()",
          "package": "MissingPy",
          "partial": "Object Run Hs",
          "signature": "PyObject-\u003e[a]-\u003e[(String,b)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:pyObject_RunHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the Python representation of a Python object.\nSame as repr(x) in Python. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "reprOf",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO String",
          "source": "src/Python-Objects.html#reprOf",
          "type": "function"
        },
        "index": {
          "description": "Gets the Python representation of Python object Same as repr in Python",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "reprOf",
          "normalized": "PyObject-\u003eIO String",
          "package": "MissingPy",
          "partial": "Of",
          "signature": "PyObject-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:reprOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ecallMethodHs\u003c/a\u003e\u003c/code\u003e, but discards the return value. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "runMethodHs",
          "package": "MissingPy",
          "signature": "PyObject-\u003e String-\u003e [a]-\u003e [(String, b)]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Like callMethodHs but discards the return value",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "runMethodHs",
          "normalized": "PyObject-\u003eString-\u003e[a]-\u003e[(String,b)]-\u003eIO()",
          "package": "MissingPy",
          "partial": "Method Hs",
          "signature": "PyObject-\u003eString-\u003e[a]-\u003e[(String,b)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:runMethodHs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn interface to Python's setattr, used to set attributes of an object.\n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "setattr",
          "package": "MissingPy",
          "signature": "PyObject-\u003e String-\u003e PyObject-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "An interface to Python setattr used to set attributes of an object",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "setattr",
          "normalized": "PyObject-\u003eString-\u003ePyObject-\u003eIO()",
          "package": "MissingPy",
          "signature": "PyObject-\u003eString-\u003ePyObject-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:setattr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplays a Python object and its type. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "showPyObject",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO String",
          "source": "src/Python-Objects.html#showPyObject",
          "type": "function"
        },
        "index": {
          "description": "Displays Python object and its type",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "showPyObject",
          "normalized": "PyObject-\u003eIO String",
          "package": "MissingPy",
          "partial": "Py Object",
          "signature": "PyObject-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:showPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets a string representation of a Python object.  Same \nas str(x) in Python. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "strOf",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO String",
          "source": "src/Python-Objects.html#strOf",
          "type": "function"
        },
        "index": {
          "description": "Gets string representation of Python object Same as str in Python",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "strOf",
          "normalized": "PyObject-\u003eIO String",
          "package": "MissingPy",
          "partial": "Of",
          "signature": "PyObject-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:strOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Objects",
          "name": "toPyObject",
          "package": "MissingPy",
          "signature": "a -\u003e IO PyObject",
          "source": "src/Python-Objects.html#toPyObject",
          "type": "method"
        },
        "index": {
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "toPyObject",
          "normalized": "a-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Py Object",
          "signature": "a-\u003eIO PyObject",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:toPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the type of a Python object.  Same as type(x) in Python. \n\u003c/p\u003e",
          "module": "Python.Objects",
          "name": "typeOf",
          "package": "MissingPy",
          "signature": "PyObject -\u003e IO PyObject",
          "source": "src/Python-Objects.html#typeOf",
          "type": "function"
        },
        "index": {
          "description": "Gets the type of Python object Same as type in Python",
          "hierarchy": "Python Objects",
          "module": "Python.Objects",
          "name": "typeOf",
          "normalized": "PyObject-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "Of",
          "signature": "PyObject-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Objects.html#v:typeOf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003eInterfaces to low-level Python types.  You should probably not use this module\ndirectly.  You probably want \u003ca\u003ePython.Objects\u003c/a\u003e instead.\n\u003c/p\u003e\u003cp\u003eYou'll only need this module directly if you are importing new functions\nfrom the Python C API.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Types",
          "name": "Types",
          "package": "MissingPy",
          "source": "src/Python-Types.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Interfaces to low-level Python types You should probably not use this module directly You probably want Python.Objects instead You ll only need this module directly if you are importing new functions from the Python API Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "Types",
          "package": "MissingPy",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "CPyGILState",
          "package": "MissingPy",
          "source": "src/Python-Types.html#CPyGILState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "CPyGILState",
          "package": "MissingPy",
          "partial": "CPy GILState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:CPyGILState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "CPyObject",
          "package": "MissingPy",
          "source": "src/Python-Types.html#CPyObject",
          "type": "type"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "CPyObject",
          "package": "MissingPy",
          "partial": "CPy Object",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:CPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Python exceptions.\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "PyException",
          "package": "MissingPy",
          "source": "src/Python-Types.html#PyException",
          "type": "data"
        },
        "index": {
          "description": "The type of Python exceptions",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyException",
          "package": "MissingPy",
          "partial": "Py Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:PyException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "PyGILState",
          "package": "MissingPy",
          "source": "src/Python-Types.html#PyGILState",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyGILState",
          "package": "MissingPy",
          "partial": "Py GILState",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:PyGILState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of Python objects.\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "PyObject",
          "package": "MissingPy",
          "source": "src/Python-Types.html#PyObject",
          "type": "newtype"
        },
        "index": {
          "description": "The type of Python objects",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyObject",
          "package": "MissingPy",
          "partial": "Py Object",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:PyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to interpret a snippet of Python code. \n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "StartFrom",
          "package": "MissingPy",
          "source": "src/Python-Types.html#StartFrom",
          "type": "data"
        },
        "index": {
          "description": "How to interpret snippet of Python code",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "StartFrom",
          "package": "MissingPy",
          "partial": "Start From",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#t:StartFrom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "PyException",
          "package": "MissingPy",
          "signature": "PyException",
          "source": "src/Python-Types.html#PyException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyException",
          "package": "MissingPy",
          "partial": "Py Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:PyException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "PyGILState",
          "package": "MissingPy",
          "signature": "PyGILState (ForeignPtr CPyGILState)",
          "source": "src/Python-Types.html#PyGILState",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyGILState",
          "package": "MissingPy",
          "partial": "Py GILState",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:PyGILState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Types",
          "name": "PyObject",
          "package": "MissingPy",
          "signature": "PyObject (ForeignPtr CPyObject)",
          "source": "src/Python-Types.html#PyObject",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "PyObject",
          "package": "MissingPy",
          "partial": "Py Object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:PyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormatted for display\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "excFormatted",
          "package": "MissingPy",
          "signature": "String",
          "source": "src/Python-Types.html#PyException",
          "type": "function"
        },
        "index": {
          "description": "Formatted for display",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "excFormatted",
          "package": "MissingPy",
          "partial": "Formatted",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:excFormatted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTraceback\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "excTraceBack",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Types.html#PyException",
          "type": "function"
        },
        "index": {
          "description": "Traceback",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "excTraceBack",
          "package": "MissingPy",
          "partial": "Trace Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:excTraceBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException type\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "excType",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Types.html#PyException",
          "type": "function"
        },
        "index": {
          "description": "Exception type",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "excType",
          "package": "MissingPy",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:excType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException value\n\u003c/p\u003e",
          "module": "Python.Types",
          "name": "excValue",
          "package": "MissingPy",
          "signature": "PyObject",
          "source": "src/Python-Types.html#PyException",
          "type": "function"
        },
        "index": {
          "description": "Exception value",
          "hierarchy": "Python Types",
          "module": "Python.Types",
          "name": "excValue",
          "package": "MissingPy",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Types.html#v:excValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eMaintainer : jgoerzen@complete.org\n   Stability  : provisional\n   Portability: portable\n\u003c/p\u003e\u003cp\u003ePython low-level utilities\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003ePlease use sparingly and with caution.  The documentation for their behavior\nshould be considered to be the source code.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Python.Utils",
          "name": "Utils",
          "package": "MissingPy",
          "source": "src/Python-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "Maintainer jgoerzen@complete.org Stability provisional Portability portable Python low-level utilities Written by John Goerzen jgoerzen@complete.org Please use sparingly and with caution The documentation for their behavior should be considered to be the source code",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "Utils",
          "package": "MissingPy",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled to make sure the passed CInt isn't -1.  Raise an exception if\nit is. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "checkCInt",
          "package": "MissingPy",
          "signature": "CInt -\u003e IO CInt",
          "source": "src/Python-Utils.html#checkCInt",
          "type": "function"
        },
        "index": {
          "description": "Called to make sure the passed CInt isn Raise an exception if it is",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "checkCInt",
          "normalized": "CInt-\u003eIO CInt",
          "package": "MissingPy",
          "partial": "CInt",
          "signature": "CInt-\u003eIO CInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:checkCInt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a Ptr \u003ccode\u003e\u003ca\u003eCPyObject\u003c/a\u003e\u003c/code\u003e to a \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "fromCPyObject",
          "package": "MissingPy",
          "signature": "Ptr CPyObject -\u003e IO PyObject",
          "source": "src/Python-Utils.html#fromCPyObject",
          "type": "function"
        },
        "index": {
          "description": "Convert Ptr CPyObject to PyObject",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "fromCPyObject",
          "normalized": "Ptr CPyObject-\u003eIO PyObject",
          "package": "MissingPy",
          "partial": "CPy Object",
          "signature": "Ptr CPyObject-\u003eIO PyObject",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:fromCPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns the default globals environment. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "getDefaultGlobals",
          "package": "MissingPy",
          "signature": "IO PyObject",
          "source": "src/Python-Utils.html#getDefaultGlobals",
          "type": "function"
        },
        "index": {
          "description": "Returns the default globals environment",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "getDefaultGlobals",
          "package": "MissingPy",
          "partial": "Default Globals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:getDefaultGlobals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003ewithPyObject\u003c/a\u003e\u003c/code\u003e, but uses nullPtr if the input is Nothing. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "maybeWithPyObject",
          "package": "MissingPy",
          "signature": "Maybe PyObject -\u003e (Ptr CPyObject -\u003e IO b) -\u003e IO b",
          "source": "src/Python-Utils.html#maybeWithPyObject",
          "type": "function"
        },
        "index": {
          "description": "Same as withPyObject but uses nullPtr if the input is Nothing",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "maybeWithPyObject",
          "normalized": "Maybe PyObject-\u003e(Ptr CPyObject-\u003eIO a)-\u003eIO a",
          "package": "MissingPy",
          "partial": "With Py Object",
          "signature": "Maybe PyObject-\u003e(Ptr CPyObject-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:maybeWithPyObject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Python.Utils",
          "name": "py_incref",
          "package": "MissingPy",
          "signature": "Ptr CPyObject -\u003e IO ()",
          "source": "src/Python-ForeignImports.html#py_incref",
          "type": "function"
        },
        "index": {
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "py_incref",
          "normalized": "Ptr CPyObject-\u003eIO()",
          "package": "MissingPy",
          "signature": "Ptr CPyObject-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:py_incref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCalled when a Python exception has been detected.  It will raise\nthe exception in Haskell. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "raisePyException",
          "package": "MissingPy",
          "signature": "IO a",
          "source": "src/Python-Utils.html#raisePyException",
          "type": "function"
        },
        "index": {
          "description": "Called when Python exception has been detected It will raise the exception in Haskell",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "raisePyException",
          "package": "MissingPy",
          "partial": "Py Exception",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:raisePyException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUses a \u003ccode\u003e\u003ca\u003ePyObject\u003c/a\u003e\u003c/code\u003e in a function that needs Ptr \u003ccode\u003e\u003ca\u003eCPyObject\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Python.Utils",
          "name": "withPyObject",
          "package": "MissingPy",
          "signature": "PyObject -\u003e (Ptr CPyObject -\u003e IO b) -\u003e IO b",
          "source": "src/Python-Utils.html#withPyObject",
          "type": "function"
        },
        "index": {
          "description": "Uses PyObject in function that needs Ptr CPyObject",
          "hierarchy": "Python Utils",
          "module": "Python.Utils",
          "name": "withPyObject",
          "normalized": "PyObject-\u003e(Ptr CPyObject-\u003eIO a)-\u003eIO a",
          "package": "MissingPy",
          "partial": "Py Object",
          "signature": "PyObject-\u003e(Ptr CPyObject-\u003eIO b)-\u003eIO b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/MissingPy/docs/Python-Utils.html#v:withPyObject"
      }
    }
  ]
]