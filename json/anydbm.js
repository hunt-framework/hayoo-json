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
        "word": "anydbm"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eSupport for working with Maps through the \u003ca\u003eDatabase.AnyDBM\u003c/a\u003e framework.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.AnyDBM.MapDBM",
          "name": "MapDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM-MapDBM.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org Support for working with Maps through the Database.AnyDBM framework",
          "hierarchy": "Database AnyDBM MapDBM",
          "module": "Database.AnyDBM.MapDBM",
          "name": "MapDBM",
          "package": "anydbm",
          "partial": "Map DBM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-MapDBM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the MapDBM. \n\u003c/p\u003e",
          "module": "Database.AnyDBM.MapDBM",
          "name": "MapDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM-MapDBM.html#MapDBM",
          "type": "type"
        },
        "index": {
          "description": "The type of the MapDBM",
          "hierarchy": "Database AnyDBM MapDBM",
          "module": "Database.AnyDBM.MapDBM",
          "name": "MapDBM",
          "package": "anydbm",
          "partial": "Map DBM",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-MapDBM.html#t:MapDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the embedded Map in this \u003ccode\u003e\u003ca\u003eMapDBM\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.AnyDBM.MapDBM",
          "name": "getMapDBM",
          "package": "anydbm",
          "signature": "MapDBM -\u003e IO (Map String String)",
          "source": "src/Database-AnyDBM-MapDBM.html#getMapDBM",
          "type": "function"
        },
        "index": {
          "description": "Gets the embedded Map in this MapDBM",
          "hierarchy": "Database AnyDBM MapDBM",
          "module": "Database.AnyDBM.MapDBM",
          "name": "getMapDBM",
          "normalized": "MapDBM-\u003eIO(Map String String)",
          "package": "anydbm",
          "partial": "Map DBM",
          "signature": "MapDBM-\u003eIO(Map String String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-MapDBM.html#v:getMapDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMakes a new MapDBM with an empty Map. \n\u003c/p\u003e",
          "module": "Database.AnyDBM.MapDBM",
          "name": "newMapDBM",
          "package": "anydbm",
          "signature": "IO MapDBM",
          "source": "src/Database-AnyDBM-MapDBM.html#newMapDBM",
          "type": "function"
        },
        "index": {
          "description": "Makes new MapDBM with an empty Map",
          "hierarchy": "Database AnyDBM MapDBM",
          "module": "Database.AnyDBM.MapDBM",
          "name": "newMapDBM",
          "package": "anydbm",
          "partial": "Map DBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-MapDBM.html#v:newMapDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets the embedded Map in this \u003ccode\u003e\u003ca\u003eMapDBM\u003c/a\u003e\u003c/code\u003e to the\ngiven \u003ccode\u003e\u003ca\u003eMap\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.AnyDBM.MapDBM",
          "name": "setMapDBM",
          "package": "anydbm",
          "signature": "MapDBM -\u003e Map String String -\u003e IO ()",
          "source": "src/Database-AnyDBM-MapDBM.html#setMapDBM",
          "type": "function"
        },
        "index": {
          "description": "Sets the embedded Map in this MapDBM to the given Map",
          "hierarchy": "Database AnyDBM MapDBM",
          "module": "Database.AnyDBM.MapDBM",
          "name": "setMapDBM",
          "normalized": "MapDBM-\u003eMap String String-\u003eIO()",
          "package": "anydbm",
          "partial": "Map DBM",
          "signature": "MapDBM-\u003eMap String String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-MapDBM.html#v:setMapDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis \u003ccode\u003e\u003ca\u003eAnyDBM\u003c/a\u003e\u003c/code\u003e implementation is very simple.  It can store\ndata on-disk in a persistent fashion, using a very simple String\nrepresentation.  While the file is open, an in-memory cache is maintained.\nThe data is written out during a call to \u003ccode\u003eflush\u003c/code\u003e or \u003ccode\u003eclose\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.AnyDBM.StringDBM",
          "name": "StringDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM-StringDBM.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org This AnyDBM implementation is very simple It can store data on-disk in persistent fashion using very simple String representation While the file is open an in-memory cache is maintained The data is written out during call to flush or close",
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "StringDBM",
          "package": "anydbm",
          "partial": "String DBM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSee \u003ccode\u003e\u003ca\u003eopenFile\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Database.AnyDBM.StringDBM",
          "name": "IOMode",
          "package": "anydbm",
          "type": "data"
        },
        "index": {
          "description": "See openFile",
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "IOMode",
          "package": "anydbm",
          "partial": "IOMode",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#t:IOMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of the StringDBM instances. \n\u003c/p\u003e",
          "module": "Database.AnyDBM.StringDBM",
          "name": "StringDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM-StringDBM.html#StringDBM",
          "type": "data"
        },
        "index": {
          "description": "The type of the StringDBM instances",
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "StringDBM",
          "package": "anydbm",
          "partial": "String DBM",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#t:StringDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "SystemFS",
          "package": "anydbm",
          "type": "data"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "SystemFS",
          "package": "anydbm",
          "partial": "System FS",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#t:SystemFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "AppendMode",
          "package": "anydbm",
          "signature": "AppendMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "AppendMode",
          "package": "anydbm",
          "partial": "Append Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:AppendMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "ReadMode",
          "package": "anydbm",
          "signature": "ReadMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "ReadMode",
          "package": "anydbm",
          "partial": "Read Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:ReadMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "ReadWriteMode",
          "package": "anydbm",
          "signature": "ReadWriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "ReadWriteMode",
          "package": "anydbm",
          "partial": "Read Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:ReadWriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "SystemFS",
          "package": "anydbm",
          "signature": "SystemFS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "SystemFS",
          "package": "anydbm",
          "partial": "System FS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:SystemFS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Database.AnyDBM.StringDBM",
          "name": "WriteMode",
          "package": "anydbm",
          "signature": "WriteMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "WriteMode",
          "package": "anydbm",
          "partial": "Write Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:WriteMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eStringDBM\u003c/a\u003e\u003c/code\u003e file.  Please note: only ReadMode, WriteMode,\nand ReadWriteMode are supported for the IOMode.  AppendMode is not supported. \n\u003c/p\u003e\u003cpre\u003eopenStringDBM = openStringVDBM SystemFS\n\u003c/pre\u003e",
          "module": "Database.AnyDBM.StringDBM",
          "name": "openStringDBM",
          "package": "anydbm",
          "signature": "FilePath -\u003e IOMode -\u003e IO StringDBM",
          "source": "src/Database-AnyDBM-StringDBM.html#openStringDBM",
          "type": "function"
        },
        "index": {
          "description": "Opens StringDBM file Please note only ReadMode WriteMode and ReadWriteMode are supported for the IOMode AppendMode is not supported openStringDBM openStringVDBM SystemFS",
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "openStringDBM",
          "normalized": "FilePath-\u003eIOMode-\u003eIO StringDBM",
          "package": "anydbm",
          "partial": "String DBM",
          "signature": "FilePath-\u003eIOMode-\u003eIO StringDBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:openStringDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOpens a \u003ccode\u003e\u003ca\u003eStringDBM\u003c/a\u003e\u003c/code\u003e file.  Please note: only ReadMode, WriteMode,\nand ReadWriteMode are supported for the IOMode.  AppendMode is not supported.\n\u003c/p\u003e\u003cp\u003eTo work on your system's normal (real) filesystem, just specify\n\u003ccode\u003e\u003ca\u003eSystemFS\u003c/a\u003e\u003c/code\u003e for the first argument.\n\u003c/p\u003e",
          "module": "Database.AnyDBM.StringDBM",
          "name": "openStringVDBM",
          "package": "anydbm",
          "signature": "a -\u003e FilePath -\u003e IOMode -\u003e IO StringDBM",
          "source": "src/Database-AnyDBM-StringDBM.html#openStringVDBM",
          "type": "function"
        },
        "index": {
          "description": "Opens StringDBM file Please note only ReadMode WriteMode and ReadWriteMode are supported for the IOMode AppendMode is not supported To work on your system normal real filesystem just specify SystemFS for the first argument",
          "hierarchy": "Database AnyDBM StringDBM",
          "module": "Database.AnyDBM.StringDBM",
          "name": "openStringVDBM",
          "normalized": "a-\u003eFilePath-\u003eIOMode-\u003eIO StringDBM",
          "package": "anydbm",
          "partial": "String VDBM",
          "signature": "a-\u003eFilePath-\u003eIOMode-\u003eIO StringDBM",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM-StringDBM.html#v:openStringVDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003cp\u003eThis module provides a generic infrastructure for supporting storage of\nhash-like items with String -\u003e String mappings.  It can be used for in-memory\nor on-disk items.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Database.AnyDBM",
          "name": "AnyDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM.html",
          "type": "module"
        },
        "index": {
          "description": "Written by John Goerzen jgoerzen@complete.org This module provides generic infrastructure for supporting storage of hash-like items with String String mappings It can be used for in-memory or on-disk items",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "AnyDBM",
          "package": "anydbm",
          "partial": "Any DBM",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main class for items implementing this interface.\n\u003c/p\u003e\u003cp\u003ePeople implementing this class should provide methods for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003ecloseA\u003c/a\u003e\u003c/code\u003e (unless you have no persistent storage)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003eflushA\u003c/a\u003e\u003c/code\u003e (unless you have no persistent storage)\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003einsertA\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edeleteA\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003elookupA\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e either \u003ccode\u003e\u003ca\u003etoListA\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ekeysA\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "Database.AnyDBM",
          "name": "AnyDBM",
          "package": "anydbm",
          "source": "src/Database-AnyDBM.html#AnyDBM",
          "type": "class"
        },
        "index": {
          "description": "The main class for items implementing this interface People implementing this class should provide methods for closeA unless you have no persistent storage flushA unless you have no persistent storage insertA deleteA lookupA either toListA or keysA",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "AnyDBM",
          "package": "anydbm",
          "partial": "Any DBM",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#t:AnyDBM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose the object, writing out any unsaved data to disk if necessary.\n\u003c/p\u003e\u003cp\u003eIf you implement this, make sure your implementation calls \u003ccode\u003e\u003ca\u003eflushA\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote: if you have an object opened for writing, you MUST\n         call closeA on it when you are done.  Implementations are not\n         required to preserve your data otherwise.\n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "closeA",
          "package": "anydbm",
          "signature": "a -\u003e IO ()",
          "source": "src/Database-AnyDBM.html#closeA",
          "type": "method"
        },
        "index": {
          "description": "Close the object writing out any unsaved data to disk if necessary If you implement this make sure your implementation calls flushA Note if you have an object opened for writing you MUST call closeA on it when you are done Implementations are not required to preserve your data otherwise",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "closeA",
          "normalized": "a-\u003eIO()",
          "package": "anydbm",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:closeA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the data referenced by the given key.  It is not an error\n         if the key does not exist. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "deleteA",
          "package": "anydbm",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "src/Database-AnyDBM.html#deleteA",
          "type": "method"
        },
        "index": {
          "description": "Delete the data referenced by the given key It is not an error if the key does not exist",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "deleteA",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "anydbm",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:deleteA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlush the object, saving any un-saved data to disk but not closing\n         it. Called automatically by \u003ccode\u003e\u003ca\u003ecloseA\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "flushA",
          "package": "anydbm",
          "signature": "a -\u003e IO ()",
          "source": "src/Database-AnyDBM.html#flushA",
          "type": "method"
        },
        "index": {
          "description": "Flush the object saving any un-saved data to disk but not closing it Called automatically by closeA",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "flushA",
          "normalized": "a-\u003eIO()",
          "package": "anydbm",
          "signature": "a-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:flushA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLook up the data and raise an exception if the key does not exist.\n         The exception raised is PatternMatchFail, and the string accompanying\n         it is the key that was looked up.\n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "forceLookupA",
          "package": "anydbm",
          "signature": "a -\u003e String -\u003e IO String",
          "source": "src/Database-AnyDBM.html#forceLookupA",
          "type": "method"
        },
        "index": {
          "description": "Look up the data and raise an exception if the key does not exist The exception raised is PatternMatchFail and the string accompanying it is the key that was looked up",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "forceLookupA",
          "normalized": "a-\u003eString-\u003eIO String",
          "package": "anydbm",
          "partial": "Lookup",
          "signature": "a-\u003eString-\u003eIO String",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:forceLookupA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTrue if the given key is present. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "hasKeyA",
          "package": "anydbm",
          "signature": "a -\u003e String -\u003e IO Bool",
          "source": "src/Database-AnyDBM.html#hasKeyA",
          "type": "method"
        },
        "index": {
          "description": "True if the given key is present",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "hasKeyA",
          "normalized": "a-\u003eString-\u003eIO Bool",
          "package": "anydbm",
          "partial": "Key",
          "signature": "a-\u003eString-\u003eIO Bool",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:hasKeyA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert the given data into the map. Existing data with the same key\n       will be overwritten. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "insertA",
          "package": "anydbm",
          "signature": "insertA",
          "source": "src/Database-AnyDBM.html#insertA",
          "type": "method"
        },
        "index": {
          "description": "Insert the given data into the map Existing data with the same key will be overwritten",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "insertA",
          "package": "anydbm",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:insertA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall \u003ccode\u003e\u003ca\u003einsertA\u003c/a\u003e\u003c/code\u003e on each pair in the given association list, adding\n       them to the map. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "insertListA",
          "package": "anydbm",
          "signature": "a -\u003e [(String, String)] -\u003e IO ()",
          "source": "src/Database-AnyDBM.html#insertListA",
          "type": "method"
        },
        "index": {
          "description": "Call insertA on each pair in the given association list adding them to the map",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "insertListA",
          "normalized": "a-\u003e[(String,String)]-\u003eIO()",
          "package": "anydbm",
          "partial": "List",
          "signature": "a-\u003e[(String,String)]-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:insertListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of keys in the \u003ccode\u003e\u003ca\u003eAnyDBM\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "keysA",
          "package": "anydbm",
          "signature": "a -\u003e IO [String]",
          "source": "src/Database-AnyDBM.html#keysA",
          "type": "method"
        },
        "index": {
          "description": "Returns list of keys in the AnyDBM object",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "keysA",
          "normalized": "a-\u003eIO[String]",
          "package": "anydbm",
          "signature": "a-\u003eIO[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:keysA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the data referenced by the given key. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "lookupA",
          "package": "anydbm",
          "signature": "a -\u003e String -\u003e IO (Maybe String)",
          "source": "src/Database-AnyDBM.html#lookupA",
          "type": "method"
        },
        "index": {
          "description": "Find the data referenced by the given key",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "lookupA",
          "normalized": "a-\u003eString-\u003eIO(Maybe String)",
          "package": "anydbm",
          "signature": "a-\u003eString-\u003eIO(Maybe String)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:lookupA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to MapM, but for \u003ccode\u003e\u003ca\u003eAnyDBM\u003c/a\u003e\u003c/code\u003e objects. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "mapA",
          "package": "anydbm",
          "signature": "a -\u003e ((String, String) -\u003e IO b) -\u003e IO [b]",
          "source": "src/Database-AnyDBM.html#mapA",
          "type": "function"
        },
        "index": {
          "description": "Similar to MapM but for AnyDBM objects",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "mapA",
          "normalized": "a-\u003e((String,String)-\u003eIO b)-\u003eIO[b]",
          "package": "anydbm",
          "signature": "a-\u003e((String,String)-\u003eIO b)-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:mapA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estrFromAL\u003c/a\u003e\u003c/code\u003e -- get a string representation of\nthe entire AnyDBM. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "strFromA",
          "package": "anydbm",
          "signature": "a -\u003e IO String",
          "source": "src/Database-AnyDBM.html#strFromA",
          "type": "function"
        },
        "index": {
          "description": "Similar to strFromAL get string representation of the entire AnyDBM",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "strFromA",
          "normalized": "a-\u003eIO String",
          "package": "anydbm",
          "partial": "From",
          "signature": "a-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:strFromA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003estrToAL\u003c/a\u003e\u003c/code\u003e -- load a string representation\ninto the AnyDBM.  You must supply an existing AnyDBM object;\nthe items loaded from the string will be added to it. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "strToA",
          "package": "anydbm",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "src/Database-AnyDBM.html#strToA",
          "type": "function"
        },
        "index": {
          "description": "Similar to strToAL load string representation into the AnyDBM You must supply an existing AnyDBM object the items loaded from the string will be added to it",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "strToA",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "anydbm",
          "partial": "To",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:strToA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a representation of the content of the map as a list. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "toListA",
          "package": "anydbm",
          "signature": "a -\u003e IO [(String, String)]",
          "source": "src/Database-AnyDBM.html#toListA",
          "type": "method"
        },
        "index": {
          "description": "Return representation of the content of the map as list",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "toListA",
          "normalized": "a-\u003eIO[(String,String)]",
          "package": "anydbm",
          "partial": "List",
          "signature": "a-\u003eIO[(String,String)]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:toListA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a list of values in the \u003ccode\u003e\u003ca\u003eAnyDBM\u003c/a\u003e\u003c/code\u003e object. \n\u003c/p\u003e",
          "module": "Database.AnyDBM",
          "name": "valuesA",
          "package": "anydbm",
          "signature": "a -\u003e IO [String]",
          "source": "src/Database-AnyDBM.html#valuesA",
          "type": "method"
        },
        "index": {
          "description": "Returns list of values in the AnyDBM object",
          "hierarchy": "Database AnyDBM",
          "module": "Database.AnyDBM",
          "name": "valuesA",
          "normalized": "a-\u003eIO[String]",
          "package": "anydbm",
          "signature": "a-\u003eIO[String]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/anydbm/docs/Database-AnyDBM.html#v:valuesA"
      }
    }
  ]
]