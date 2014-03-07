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
        "word": "misfortune"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "Fortune",
          "package": "misfortune",
          "source": "src/Data-Fortune.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "Fortune",
          "package": "misfortune",
          "partial": "Fortune",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to an open fortune database.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "FortuneFile",
          "package": "misfortune",
          "source": "src/Data-Fortune-FortuneFile.html#FortuneFile",
          "type": "data"
        },
        "index": {
          "description": "handle to an open fortune database",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "FortuneFile",
          "package": "misfortune",
          "partial": "Fortune File",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome statistics about the fortunes in a database.  These are stored in \n the index file and used to speed up various calculations that would otherwise\n require re-reading lots of files.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "FortuneStats",
          "package": "misfortune",
          "source": "src/Data-Fortune-Stats.html#FortuneStats",
          "type": "data"
        },
        "index": {
          "description": "Some statistics about the fortunes in database These are stored in the index file and used to speed up various calculations that would otherwise require re-reading lots of files",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "FortuneStats",
          "package": "misfortune",
          "partial": "Fortune Stats",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThree different search paths are supported, depending on the \"type\" of fortune\n requested.  These are the types that can be requested.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "FortuneType",
          "package": "misfortune",
          "source": "src/Data-Fortune.html#FortuneType",
          "type": "data"
        },
        "index": {
          "description": "Three different search paths are supported depending on the type of fortune requested These are the types that can be requested",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "FortuneType",
          "package": "misfortune",
          "partial": "Fortune Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn exception type indicating things that can be wrong about an index file's header.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "HeaderProblem",
          "package": "misfortune",
          "source": "src/Data-Fortune-Index.html#HeaderProblem",
          "type": "data"
        },
        "index": {
          "description": "An exception type indicating things that can be wrong about an index file header",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "HeaderProblem",
          "package": "misfortune",
          "partial": "Header Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:HeaderProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA handle to an open fortune index file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "Index",
          "package": "misfortune",
          "source": "src/Data-Fortune-Index.html#Index",
          "type": "data"
        },
        "index": {
          "description": "handle to an open fortune index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "Index",
          "package": "misfortune",
          "partial": "Index",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:Index"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConceptually, an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file is just a header containing \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e and an array of these entries.\n An \u003ccode\u003e\u003ca\u003eIndexEntry\u003c/a\u003e\u003c/code\u003e stores the information needed to locate one string in the fortune fiel, as well as some\n basic stats about that one file (from which the \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e will be derived).\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "IndexEntry",
          "package": "misfortune",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "data"
        },
        "index": {
          "description": "Conceptually an Index file is just header containing FortuneStats and an array of these entries An IndexEntry stores the information needed to locate one string in the fortune fiel as well as some basic stats about that one file from which the FortuneStats will be derived",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "IndexEntry",
          "package": "misfortune",
          "partial": "Index Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:IndexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be thrown indicating a problem with an index file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "IndexProblem",
          "package": "misfortune",
          "source": "src/Data-Fortune-Index.html#IndexProblem",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be thrown indicating problem with an index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "IndexProblem",
          "package": "misfortune",
          "partial": "Index Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:IndexProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eErrors that can be thrown when stats are read from an index file.\n These errors describe various logical inconsistencies that generally\n indicate that the index file is corrupted somehow.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "StatsProblem",
          "package": "misfortune",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "data"
        },
        "index": {
          "description": "Errors that can be thrown when stats are read from an index file These errors describe various logical inconsistencies that generally indicate that the index file is corrupted somehow",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "StatsProblem",
          "package": "misfortune",
          "partial": "Stats Problem",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:StatsProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "AccessToClosedIndex",
          "package": "misfortune",
          "signature": "AccessToClosedIndex",
          "source": "src/Data-Fortune-Index.html#IndexProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "AccessToClosedIndex",
          "package": "misfortune",
          "partial": "Access To Closed Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:AccessToClosedIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "All",
          "package": "misfortune",
          "signature": "All",
          "source": "src/Data-Fortune.html#FortuneType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "All",
          "package": "misfortune",
          "partial": "All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:All"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "BadMagicNumber",
          "package": "misfortune",
          "signature": "BadMagicNumber !Word32",
          "source": "src/Data-Fortune-Index.html#HeaderProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "BadMagicNumber",
          "package": "misfortune",
          "partial": "Bad Magic Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:BadMagicNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "EntriesWithoutLengths",
          "package": "misfortune",
          "signature": "EntriesWithoutLengths",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "EntriesWithoutLengths",
          "package": "misfortune",
          "partial": "Entries Without Lengths",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:EntriesWithoutLengths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "HeaderProblem",
          "package": "misfortune",
          "signature": "HeaderProblem !HeaderProblem",
          "source": "src/Data-Fortune-Index.html#IndexProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "HeaderProblem",
          "package": "misfortune",
          "partial": "Header Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:HeaderProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "InconsistentLengthsForOneEntry",
          "package": "misfortune",
          "signature": "InconsistentLengthsForOneEntry",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "InconsistentLengthsForOneEntry",
          "package": "misfortune",
          "partial": "Inconsistent Lengths For One Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:InconsistentLengthsForOneEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "IndexEntry",
          "package": "misfortune",
          "signature": "IndexEntry",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "IndexEntry",
          "package": "misfortune",
          "partial": "Index Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:IndexEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "LengthsWithoutEntries",
          "package": "misfortune",
          "signature": "LengthsWithoutEntries",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "LengthsWithoutEntries",
          "package": "misfortune",
          "partial": "Lengths Without Entries",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:LengthsWithoutEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "MaxLengthLessThanMinLength",
          "package": "misfortune",
          "signature": "MaxLengthLessThanMinLength",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "MaxLengthLessThanMinLength",
          "package": "misfortune",
          "partial": "Max Length Less Than Min Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:MaxLengthLessThanMinLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "NegativeCount",
          "package": "misfortune",
          "signature": "NegativeCount !Int",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "NegativeCount",
          "package": "misfortune",
          "partial": "Negative Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "NegativeLength",
          "package": "misfortune",
          "signature": "NegativeLength !Int",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "NegativeLength",
          "package": "misfortune",
          "partial": "Negative Length",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeLength"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "NegativeOffset",
          "package": "misfortune",
          "signature": "NegativeOffset !Int",
          "source": "src/Data-Fortune-Stats.html#StatsProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "NegativeOffset",
          "package": "misfortune",
          "partial": "Negative Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "Normal",
          "package": "misfortune",
          "signature": "Normal",
          "source": "src/Data-Fortune.html#FortuneType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "Normal",
          "package": "misfortune",
          "partial": "Normal",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:Normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "Offensive",
          "package": "misfortune",
          "signature": "Offensive",
          "source": "src/Data-Fortune.html#FortuneType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "Offensive",
          "package": "misfortune",
          "partial": "Offensive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:Offensive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "StatsProblem",
          "package": "misfortune",
          "signature": "StatsProblem !StatsProblem",
          "source": "src/Data-Fortune-Index.html#HeaderProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "StatsProblem",
          "package": "misfortune",
          "partial": "Stats Problem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:StatsProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "TableLongerThanFile",
          "package": "misfortune",
          "signature": "TableLongerThanFile",
          "source": "src/Data-Fortune-Index.html#IndexProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "TableLongerThanFile",
          "package": "misfortune",
          "partial": "Table Longer Than File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:TableLongerThanFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "TableStartsBeforeHeaderEnds",
          "package": "misfortune",
          "signature": "TableStartsBeforeHeaderEnds",
          "source": "src/Data-Fortune-Index.html#HeaderProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "TableStartsBeforeHeaderEnds",
          "package": "misfortune",
          "partial": "Table Starts Before Header Ends",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:TableStartsBeforeHeaderEnds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "UnsupportedVersion",
          "package": "misfortune",
          "signature": "UnsupportedVersion !Word32",
          "source": "src/Data-Fortune-Index.html#HeaderProblem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "UnsupportedVersion",
          "package": "misfortune",
          "partial": "Unsupported Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:UnsupportedVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend all the given entries to the \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "appendEntries",
          "package": "misfortune",
          "signature": "Index -\u003e Vector IndexEntry -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#appendEntries",
          "type": "function"
        },
        "index": {
          "description": "Append all the given entries to the Index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "appendEntries",
          "normalized": "Index-\u003eVector IndexEntry-\u003eIO()",
          "package": "misfortune",
          "partial": "Entries",
          "signature": "Index-\u003eVector IndexEntry-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a single \u003ccode\u003e\u003ca\u003eIndexEntry\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "appendEntry",
          "package": "misfortune",
          "signature": "Index -\u003e IndexEntry -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#appendEntry",
          "type": "function"
        },
        "index": {
          "description": "Append single IndexEntry to an Index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "appendEntry",
          "normalized": "Index-\u003eIndexEntry-\u003eIO()",
          "package": "misfortune",
          "partial": "Entry",
          "signature": "Index-\u003eIndexEntry-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAppend a fortune to a fortune file, inserting a delimiter if\n needed and updating the index.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "appendFortune",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e Text -\u003e IO ()",
          "source": "src/Data-Fortune-FortuneFile.html#appendFortune",
          "type": "function"
        },
        "index": {
          "description": "Append fortune to fortune file inserting delimiter if needed and updating the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "appendFortune",
          "normalized": "FortuneFile-\u003eText-\u003eIO()",
          "package": "misfortune",
          "partial": "Fortune",
          "signature": "FortuneFile-\u003eText-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendFortune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eForce a consistency check on an index file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "checkIndex",
          "package": "misfortune",
          "signature": "Index -\u003e IO (Maybe IndexProblem)",
          "source": "src/Data-Fortune-Index.html#checkIndex",
          "type": "function"
        },
        "index": {
          "description": "Force consistency check on an index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "checkIndex",
          "normalized": "Index-\u003eIO(Maybe IndexProblem)",
          "package": "misfortune",
          "partial": "Index",
          "signature": "Index-\u003eIO(Maybe IndexProblem)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:checkIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all entries from an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "clearIndex",
          "package": "misfortune",
          "signature": "Index -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#clearIndex",
          "type": "function"
        },
        "index": {
          "description": "Delete all entries from an Index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "clearIndex",
          "normalized": "Index-\u003eIO()",
          "package": "misfortune",
          "partial": "Index",
          "signature": "Index-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:clearIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose a fortune file. Subsequent accesses will fail.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "closeFortuneFile",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e IO ()",
          "source": "src/Data-Fortune-FortuneFile.html#closeFortuneFile",
          "type": "function"
        },
        "index": {
          "description": "Close fortune file Subsequent accesses will fail",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "closeFortuneFile",
          "normalized": "FortuneFile-\u003eIO()",
          "package": "misfortune",
          "partial": "Fortune File",
          "signature": "FortuneFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:closeFortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClose an index file.  Subsequent accesses will fail.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "closeIndex",
          "package": "misfortune",
          "signature": "Index -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#closeIndex",
          "type": "function"
        },
        "index": {
          "description": "Close an index file Subsequent accesses will fail",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "closeIndex",
          "normalized": "Index-\u003eIO()",
          "package": "misfortune",
          "partial": "Index",
          "signature": "Index-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:closeIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate an in-memory index - useful for working with files when, for whatever reason,\n you cannot create a valid index.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "createVirtualIndex",
          "package": "misfortune",
          "signature": "IO Index",
          "source": "src/Data-Fortune-Index.html#createVirtualIndex",
          "type": "function"
        },
        "index": {
          "description": "Create an in-memory index useful for working with files when for whatever reason you cannot create valid index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "createVirtualIndex",
          "package": "misfortune",
          "partial": "Virtual Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:createVirtualIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a list of \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es, compute a distrubution over them weighted by the number\n of fortunes in each.  If this distribution is used with \u003ccode\u003e\u003ca\u003erandomFortuneFromRandomFile\u003c/a\u003e\u003c/code\u003e,\n the result will be a uniform selection over all the fortunes in all the files.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "defaultFortuneDistribution",
          "package": "misfortune",
          "signature": "[FortuneFile] -\u003e IO (Categorical Float FortuneFile)",
          "source": "src/Data-Fortune.html#defaultFortuneDistribution",
          "type": "function"
        },
        "index": {
          "description": "Given list of FortuneFile compute distrubution over them weighted by the number of fortunes in each If this distribution is used with randomFortuneFromRandomFile the result will be uniform selection over all the fortunes in all the files",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "defaultFortuneDistribution",
          "normalized": "[FortuneFile]-\u003eIO(Categorical Float FortuneFile)",
          "package": "misfortune",
          "partial": "Fortune Distribution",
          "signature": "[FortuneFile]-\u003eIO(Categorical Float FortuneFile)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneDistribution"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of all fortune files on the configured search path (see \u003ccode\u003e\u003ca\u003egetFortuneSearchPath\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "defaultFortuneFiles",
          "package": "misfortune",
          "signature": "FortuneType -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#defaultFortuneFiles",
          "type": "function"
        },
        "index": {
          "description": "Get list of all fortune files on the configured search path see getFortuneSearchPath",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "defaultFortuneFiles",
          "normalized": "FortuneType-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune Files",
          "signature": "FortuneType-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the default search path for a specified fortune type (ignoring the \u003ccode\u003eMISFORTUNE_PATH\u003c/code\u003e environment variables)\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "defaultFortuneSearchPath",
          "package": "misfortune",
          "signature": "FortuneType -\u003e IO [(FilePath, Bool)]",
          "source": "src/Data-Fortune.html#defaultFortuneSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Get the default search path for specified fortune type ignoring the MISFORTUNE PATH environment variables",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "defaultFortuneSearchPath",
          "normalized": "FortuneType-\u003eIO[(FilePath,Bool)]",
          "package": "misfortune",
          "partial": "Fortune Search Path",
          "signature": "FortuneType-\u003eIO[(FilePath,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "filterFortunes",
          "package": "misfortune",
          "signature": "(IndexEntry -\u003e Bool) -\u003e FortuneFile -\u003e IO [a]",
          "source": "src/Data-Fortune.html#filterFortunes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "filterFortunes",
          "normalized": "(IndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "(IndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "filterFortunesM",
          "package": "misfortune",
          "signature": "(IndexEntry -\u003e IO Bool) -\u003e FortuneFile -\u003e IO [a]",
          "source": "src/Data-Fortune.html#filterFortunesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "filterFortunesM",
          "normalized": "(IndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "(IndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "filterFortunesWithIndex",
          "package": "misfortune",
          "signature": "(a -\u003e IndexEntry -\u003e Bool) -\u003e FortuneFile -\u003e IO [a]",
          "source": "src/Data-Fortune.html#filterFortunesWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "filterFortunesWithIndex",
          "normalized": "(a-\u003eIndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes With Index",
          "signature": "(a-\u003eIndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "filterFortunesWithIndexM",
          "package": "misfortune",
          "signature": "(a -\u003e IndexEntry -\u003e IO Bool) -\u003e FortuneFile -\u003e IO [a]",
          "source": "src/Data-Fortune.html#filterFortunesWithIndexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "filterFortunesWithIndexM",
          "normalized": "(a-\u003eIndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes With Index",
          "signature": "(a-\u003eIndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesWithIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistFortuneFiles\u003c/a\u003e\u003c/code\u003e except only returning paths with the \n specified file name.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "findFortuneFile",
          "package": "misfortune",
          "signature": "Bool -\u003e FilePath -\u003e String -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#findFortuneFile",
          "type": "function"
        },
        "index": {
          "description": "Like listFortuneFiles except only returning paths with the specified file name",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "findFortuneFile",
          "normalized": "Bool-\u003eFilePath-\u003eString-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune File",
          "signature": "Bool-\u003eFilePath-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistFortuneFilesIn\u003c/a\u003e\u003c/code\u003e except only returning paths with the \n specified file name.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "findFortuneFileIn",
          "package": "misfortune",
          "signature": "[(String, Bool)] -\u003e String -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#findFortuneFileIn",
          "type": "function"
        },
        "index": {
          "description": "Like listFortuneFilesIn except only returning paths with the specified file name",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "findFortuneFileIn",
          "normalized": "[(String,Bool)]-\u003eString-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune File In",
          "signature": "[(String,Bool)]-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFileIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindFortuneFileIn\u003c/a\u003e\u003c/code\u003e but searches for multiple files in multiple directories.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "findFortuneFilesIn",
          "package": "misfortune",
          "signature": "[(String, Bool)] -\u003e [String] -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#findFortuneFilesIn",
          "type": "function"
        },
        "index": {
          "description": "Like findFortuneFileIn but searches for multiple files in multiple directories",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "findFortuneFilesIn",
          "normalized": "[(String,Bool)]-\u003e[String]-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune Files In",
          "signature": "[(String,Bool)]-\u003e[String]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFilesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edefaultFortuneDistribution\u003c/a\u003e\u003c/code\u003e, but filtering the fortunes.  In addition to the\n fortune file, the tuples in the distribution include a distribution over the\n matching fortune indices in that file, assigning equal weight to each.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "fortuneDistributionWhere",
          "package": "misfortune",
          "signature": "(FortuneFile -\u003e Int -\u003e IndexEntry -\u003e IO Bool) -\u003e [FortuneFile] -\u003e IO (Categorical Float (FortuneFile, Categorical Float Int))",
          "source": "src/Data-Fortune.html#fortuneDistributionWhere",
          "type": "function"
        },
        "index": {
          "description": "Like defaultFortuneDistribution but filtering the fortunes In addition to the fortune file the tuples in the distribution include distribution over the matching fortune indices in that file assigning equal weight to each",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "fortuneDistributionWhere",
          "normalized": "(FortuneFile-\u003eInt-\u003eIndexEntry-\u003eIO Bool)-\u003e[FortuneFile]-\u003eIO(Categorical Float(FortuneFile,Categorical Float Int))",
          "package": "misfortune",
          "partial": "Distribution Where",
          "signature": "(FortuneFile-\u003eInt-\u003eIndexEntry-\u003eIO Bool)-\u003e[FortuneFile]-\u003eIO(Categorical Float(FortuneFile,Categorical Float Int))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneDistributionWhere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path of the text part of an open fortune database.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "fortuneFilePath",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e FilePath",
          "source": "src/Data-Fortune-FortuneFile.html#fortuneFilePath",
          "type": "function"
        },
        "index": {
          "description": "Get the path of the text part of an open fortune database",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "fortuneFilePath",
          "normalized": "FortuneFile-\u003eFilePath",
          "package": "misfortune",
          "partial": "File Path",
          "signature": "FortuneFile-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path of the index part of an open fortune database.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "fortuneIndexPath",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e FilePath",
          "source": "src/Data-Fortune-FortuneFile.html#fortuneIndexPath",
          "type": "function"
        },
        "index": {
          "description": "Get the path of the index part of an open fortune database",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "fortuneIndexPath",
          "normalized": "FortuneFile-\u003eFilePath",
          "package": "misfortune",
          "partial": "Index Path",
          "signature": "FortuneFile-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneIndexPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead all the entries in an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getEntries",
          "package": "misfortune",
          "signature": "Index -\u003e IO (Vector IndexEntry)",
          "source": "src/Data-Fortune-Index.html#getEntries",
          "type": "function"
        },
        "index": {
          "description": "Read all the entries in an Index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getEntries",
          "normalized": "Index-\u003eIO(Vector IndexEntry)",
          "package": "misfortune",
          "partial": "Entries",
          "signature": "Index-\u003eIO(Vector IndexEntry)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a specified entry from an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getEntry",
          "package": "misfortune",
          "signature": "Index -\u003e Int -\u003e IO IndexEntry",
          "source": "src/Data-Fortune-Index.html#getEntry",
          "type": "function"
        },
        "index": {
          "description": "Read specified entry from an Index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getEntry",
          "normalized": "Index-\u003eInt-\u003eIO IndexEntry",
          "package": "misfortune",
          "partial": "Entry",
          "signature": "Index-\u003eInt-\u003eIO IndexEntry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getEntry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003egetFortune f i\u003c/code\u003e retrieves the text of the \u003ccode\u003ei\u003c/code\u003e'th fortune\n (according to the order in the index file) in the \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getFortune",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e Int -\u003e IO Text",
          "source": "src/Data-Fortune-FortuneFile.html#getFortune",
          "type": "function"
        },
        "index": {
          "description": "getFortune retrieves the text of the th fortune according to the order in the index file in the FortuneFile",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getFortune",
          "normalized": "FortuneFile-\u003eInt-\u003eIO Text",
          "package": "misfortune",
          "partial": "Fortune",
          "signature": "FortuneFile-\u003eInt-\u003eIO Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the path of the directory containing built-in fortunes of the specified type.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getFortuneDir",
          "package": "misfortune",
          "signature": "FortuneType -\u003e IO FilePath",
          "source": "src/Data-Fortune.html#getFortuneDir",
          "type": "function"
        },
        "index": {
          "description": "Get the path of the directory containing built-in fortunes of the specified type",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getFortuneDir",
          "normalized": "FortuneType-\u003eIO FilePath",
          "package": "misfortune",
          "partial": "Fortune Dir",
          "signature": "FortuneType-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortuneDir"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the configured search path for a specified fortune type.\n If the environment variable \u003ccode\u003eMISFORTUNE_PATH_\u003ca\u003eTYPE\u003c/a\u003e\u003c/code\u003e is set, it will be used.\n Otherwise, if \u003ccode\u003eMISFORTUNE_PATH\u003c/code\u003e is set, it will be used.  Otherwise, the\n \u003ccode\u003e\u003ca\u003edefaultFortuneSearchPath\u003c/a\u003e\u003c/code\u003e will be used.\n\u003c/p\u003e\u003cp\u003eEnvironment variables are interpreted by splitting on \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e and checking\n for an optional \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e prefix on each component (where \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e indicates \n recursive search of that directory).  The default is non-recursive search\n for each component.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getFortuneSearchPath",
          "package": "misfortune",
          "signature": "FortuneType -\u003e IO [(FilePath, Bool)]",
          "source": "src/Data-Fortune.html#getFortuneSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Get the configured search path for specified fortune type If the environment variable MISFORTUNE PATH TYPE is set it will be used Otherwise if MISFORTUNE PATH is set it will be used Otherwise the defaultFortuneSearchPath will be used Environment variables are interpreted by splitting on and checking for an optional or prefix on each component where indicates recursive search of that directory The default is non-recursive search for each component",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getFortuneSearchPath",
          "normalized": "FortuneType-\u003eIO[(FilePath,Bool)]",
          "package": "misfortune",
          "partial": "Fortune Search Path",
          "signature": "FortuneType-\u003eIO[(FilePath,Bool)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortuneSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the text of every fortune in a fortune file,\n in the order they occur in the file.  Ignores the index\n entirely.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getFortunes",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e IO [Text]",
          "source": "src/Data-Fortune-FortuneFile.html#getFortunes",
          "type": "function"
        },
        "index": {
          "description": "Get the text of every fortune in fortune file in the order they occur in the file Ignores the index entirely",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getFortunes",
          "normalized": "FortuneFile-\u003eIO[Text]",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "FortuneFile-\u003eIO[Text]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortunes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e, opening it if necessary.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getIndex",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e IO Index",
          "source": "src/Data-Fortune-FortuneFile.html#getIndex",
          "type": "function"
        },
        "index": {
          "description": "Get the Index of FortuneFile opening it if necessary",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getIndex",
          "normalized": "FortuneFile-\u003eIO Index",
          "package": "misfortune",
          "partial": "Index",
          "signature": "FortuneFile-\u003eIO Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the number of fortunes in a fortune file, as recorded\n in the index.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getNumFortunes",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e IO Int",
          "source": "src/Data-Fortune-FortuneFile.html#getNumFortunes",
          "type": "function"
        },
        "index": {
          "description": "Get the number of fortunes in fortune file as recorded in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getNumFortunes",
          "normalized": "FortuneFile-\u003eIO Int",
          "package": "misfortune",
          "partial": "Num Fortunes",
          "signature": "FortuneFile-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getNumFortunes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet some cached stats about the fortunes indexed in this file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "getStats",
          "package": "misfortune",
          "signature": "Index -\u003e IO FortuneStats",
          "source": "src/Data-Fortune-Index.html#getStats",
          "type": "function"
        },
        "index": {
          "description": "Get some cached stats about the fortunes indexed in this file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "getStats",
          "normalized": "Index-\u003eIO FortuneStats",
          "package": "misfortune",
          "partial": "Stats",
          "signature": "Index-\u003eIO FortuneStats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert one index entry to a \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e record describing it.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "indexEntryStats",
          "package": "misfortune",
          "signature": "IndexEntry -\u003e FortuneStats",
          "source": "src/Data-Fortune-Index.html#indexEntryStats",
          "type": "function"
        },
        "index": {
          "description": "Convert one index entry to FortuneStats record describing it",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "indexEntryStats",
          "normalized": "IndexEntry-\u003eFortuneStats",
          "package": "misfortune",
          "partial": "Entry Stats",
          "signature": "IndexEntry-\u003eFortuneStats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:indexEntryStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the fortune files in a directory.  The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value\n specifies whether to search subtrees as well.\n\u003c/p\u003e\u003cp\u003eAny file which does not have an extension of \".ix\" or \".dat\"\n will be reported as a fortune file (\".dat\" is not used by\n misfortune, but is ignored so that misfortune can share fortune\n databases with \u003ccode\u003efortune\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "listFortuneFiles",
          "package": "misfortune",
          "signature": "Bool -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#listFortuneFiles",
          "type": "function"
        },
        "index": {
          "description": "List all the fortune files in directory The Bool value specifies whether to search subtrees as well Any file which does not have an extension of ix or dat will be reported as fortune file dat is not used by misfortune but is ignored so that misfortune can share fortune databases with fortune",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "listFortuneFiles",
          "normalized": "Bool-\u003eFilePath-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune Files",
          "signature": "Bool-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:listFortuneFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList all the fortune files in several directories.  Each directory\n will be searched by \u003ccode\u003e\u003ca\u003elistFortuneFiles\u003c/a\u003e\u003c/code\u003e (using the corresponding \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e \n value to control whether the directory is searched recursively) and all\n results will be combined.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "listFortuneFilesIn",
          "package": "misfortune",
          "signature": "[(FilePath, Bool)] -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#listFortuneFilesIn",
          "type": "function"
        },
        "index": {
          "description": "List all the fortune files in several directories Each directory will be searched by listFortuneFiles using the corresponding Bool value to control whether the directory is searched recursively and all results will be combined",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "listFortuneFilesIn",
          "normalized": "[(FilePath,Bool)]-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune Files In",
          "signature": "[(FilePath,Bool)]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:listFortuneFilesIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "mapFortunes",
          "package": "misfortune",
          "signature": "(IndexEntry -\u003e b) -\u003e FortuneFile -\u003e IO [b]",
          "source": "src/Data-Fortune.html#mapFortunes",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "mapFortunes",
          "normalized": "(IndexEntry-\u003ea)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "(IndexEntry-\u003eb)-\u003eFortuneFile-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "mapFortunesM",
          "package": "misfortune",
          "signature": "(IndexEntry -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
          "source": "src/Data-Fortune.html#mapFortunesM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "mapFortunesM",
          "normalized": "(IndexEntry-\u003eIO a)-\u003eFortuneFile-\u003eIO[a]",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "(IndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "mapFortunesWithIndex",
          "package": "misfortune",
          "signature": "(a -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
          "source": "src/Data-Fortune.html#mapFortunesWithIndex",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "mapFortunesWithIndex",
          "normalized": "(a-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
          "package": "misfortune",
          "partial": "Fortunes With Index",
          "signature": "(a-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesWithIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Fortune",
          "name": "mapFortunesWithIndexM",
          "package": "misfortune",
          "signature": "(a -\u003e IndexEntry -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
          "source": "src/Data-Fortune.html#mapFortunesWithIndexM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "mapFortunesWithIndexM",
          "normalized": "(a-\u003eIndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
          "package": "misfortune",
          "partial": "Fortunes With Index",
          "signature": "(a-\u003eIndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesWithIndexM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe greatest number of lines in any string in the index\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "maxChars",
          "package": "misfortune",
          "signature": "FortuneStats -\u003e Int",
          "source": "src/Data-Fortune.html#maxChars",
          "type": "function"
        },
        "index": {
          "description": "The greatest number of lines in any string in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "maxChars",
          "normalized": "FortuneStats-\u003eInt",
          "package": "misfortune",
          "partial": "Chars",
          "signature": "FortuneStats-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:maxChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe greatest number of characters in any string in the index\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "maxLines",
          "package": "misfortune",
          "signature": "FortuneStats -\u003e Int",
          "source": "src/Data-Fortune.html#maxLines",
          "type": "function"
        },
        "index": {
          "description": "The greatest number of characters in any string in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "maxLines",
          "normalized": "FortuneStats-\u003eInt",
          "package": "misfortune",
          "partial": "Lines",
          "signature": "FortuneStats-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:maxLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smallest number of characters in any string in the index\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "minChars",
          "package": "misfortune",
          "signature": "FortuneStats -\u003e Int",
          "source": "src/Data-Fortune.html#minChars",
          "type": "function"
        },
        "index": {
          "description": "The smallest number of characters in any string in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "minChars",
          "normalized": "FortuneStats-\u003eInt",
          "package": "misfortune",
          "partial": "Chars",
          "signature": "FortuneStats-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:minChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe smallest number of lines in any string in the index\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "minLines",
          "package": "misfortune",
          "signature": "FortuneStats -\u003e Int",
          "source": "src/Data-Fortune.html#minLines",
          "type": "function"
        },
        "index": {
          "description": "The smallest number of lines in any string in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "minLines",
          "normalized": "FortuneStats-\u003eInt",
          "package": "misfortune",
          "partial": "Lines",
          "signature": "FortuneStats-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:minLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of fortune strings in the index\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "numFortunes",
          "package": "misfortune",
          "signature": "FortuneStats -\u003e Int",
          "source": "src/Data-Fortune.html#numFortunes",
          "type": "function"
        },
        "index": {
          "description": "The number of fortune strings in the index",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "numFortunes",
          "normalized": "FortuneStats-\u003eInt",
          "package": "misfortune",
          "partial": "Fortunes",
          "signature": "FortuneStats-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:numFortunes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenFortuneFile path delim writeMode\u003c/code\u003e: Open a fortune file at \u003ccode\u003epath\u003c/code\u003e,\n using \u003ccode\u003edelim\u003c/code\u003e as the character between strings, allowing writing if\n \u003ccode\u003ewriteMode\u003c/code\u003e is set.  If no file exists at the specified path, an error\n will be thrown or the file will be created, depending on \u003ccode\u003ewriteMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "openFortuneFile",
          "package": "misfortune",
          "signature": "Char -\u003e Bool -\u003e FilePath -\u003e IO FortuneFile",
          "source": "src/Data-Fortune-FortuneFile.html#openFortuneFile",
          "type": "function"
        },
        "index": {
          "description": "openFortuneFile path delim writeMode Open fortune file at path using delim as the character between strings allowing writing if writeMode is set If no file exists at the specified path an error will be thrown or the file will be created depending on writeMode",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "openFortuneFile",
          "normalized": "Char-\u003eBool-\u003eFilePath-\u003eIO FortuneFile",
          "package": "misfortune",
          "partial": "Fortune File",
          "signature": "Char-\u003eBool-\u003eFilePath-\u003eIO FortuneFile",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:openFortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eopenIndex path writeMode\u003c/code\u003e: Opens the index file at \u003ccode\u003epath\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e will\n be writable if \u003ccode\u003ewriteMode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  If there is no index file at that path, \n an error will be thrown or the index will be created, depending on \u003ccode\u003ewriteMode\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "openIndex",
          "package": "misfortune",
          "signature": "FilePath -\u003e Bool -\u003e IO Index",
          "source": "src/Data-Fortune-Index.html#openIndex",
          "type": "function"
        },
        "index": {
          "description": "openIndex path writeMode Opens the index file at path The Index will be writable if writeMode is True If there is no index file at that path an error will be thrown or the index will be created depending on writeMode",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "openIndex",
          "normalized": "FilePath-\u003eBool-\u003eIO Index",
          "package": "misfortune",
          "partial": "Index",
          "signature": "FilePath-\u003eBool-\u003eIO Index",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:openIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random fortune from all files matching any of a list of names (or if the \n list is empty, all fortune files on the search path).  Every fortune string will have\n an equal probability of being selected.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "randomFortune",
          "package": "misfortune",
          "signature": "[String] -\u003e IO String",
          "source": "src/Data-Fortune.html#randomFortune",
          "type": "function"
        },
        "index": {
          "description": "Select random fortune from all files matching any of list of names or if the list is empty all fortune files on the search path Every fortune string will have an equal probability of being selected",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "randomFortune",
          "normalized": "[String]-\u003eIO String",
          "package": "misfortune",
          "partial": "Fortune",
          "signature": "[String]-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:randomFortune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect a random fortune file from a specified distribution and then select a\n random fortune from that file (unformly).\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "randomFortuneFromRandomFile",
          "package": "misfortune",
          "signature": "RVar FortuneFile -\u003e IO String",
          "source": "src/Data-Fortune.html#randomFortuneFromRandomFile",
          "type": "function"
        },
        "index": {
          "description": "Select random fortune file from specified distribution and then select random fortune from that file unformly",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "randomFortuneFromRandomFile",
          "normalized": "RVar FortuneFile-\u003eIO String",
          "package": "misfortune",
          "partial": "Fortune From Random File",
          "signature": "RVar FortuneFile-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:randomFortuneFromRandomFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear a \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e and rebuild it from the contents \n of the text file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "rebuildIndex",
          "package": "misfortune",
          "signature": "FortuneFile -\u003e IO ()",
          "source": "src/Data-Fortune-FortuneFile.html#rebuildIndex",
          "type": "function"
        },
        "index": {
          "description": "Clear FortuneFile Index and rebuild it from the contents of the text file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "rebuildIndex",
          "normalized": "FortuneFile-\u003eIO()",
          "package": "misfortune",
          "partial": "Index",
          "signature": "FortuneFile-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:rebuildIndex"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAll the operations here should preserve correctness of stats, but just in case...\n This procedure forces the stats to be recomputed.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "rebuildStats",
          "package": "misfortune",
          "signature": "Index -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#rebuildStats",
          "type": "function"
        },
        "index": {
          "description": "All the operations here should preserve correctness of stats but just in case This procedure forces the stats to be recomputed",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "rebuildStats",
          "normalized": "Index-\u003eIO()",
          "package": "misfortune",
          "partial": "Stats",
          "signature": "Index-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:rebuildStats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for all fortune files in the configured search path with the given name.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "resolveFortuneFile",
          "package": "misfortune",
          "signature": "FortuneType -\u003e String -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#resolveFortuneFile",
          "type": "function"
        },
        "index": {
          "description": "Search for all fortune files in the configured search path with the given name",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "resolveFortuneFile",
          "normalized": "FortuneType-\u003eString-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune File",
          "signature": "FortuneType-\u003eString-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:resolveFortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch for all fortune files in the configured search path with any of the given names.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "resolveFortuneFiles",
          "package": "misfortune",
          "signature": "FortuneType -\u003e [String] -\u003e IO [FilePath]",
          "source": "src/Data-Fortune.html#resolveFortuneFiles",
          "type": "function"
        },
        "index": {
          "description": "Search for all fortune files in the configured search path with any of the given names",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "resolveFortuneFiles",
          "normalized": "FortuneType-\u003e[String]-\u003eIO[FilePath]",
          "package": "misfortune",
          "partial": "Fortune Files",
          "signature": "FortuneType-\u003e[String]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:resolveFortuneFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of bytes the string occupies.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "stringBytes",
          "package": "misfortune",
          "signature": "Int",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "function"
        },
        "index": {
          "description": "The number of bytes the string occupies",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "stringBytes",
          "package": "misfortune",
          "partial": "Bytes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringBytes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of characters in the string.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "stringChars",
          "package": "misfortune",
          "signature": "Int",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "function"
        },
        "index": {
          "description": "The number of characters in the string",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "stringChars",
          "package": "misfortune",
          "partial": "Chars",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe number of lines in the string.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "stringLines",
          "package": "misfortune",
          "signature": "Int",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "function"
        },
        "index": {
          "description": "The number of lines in the string",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "stringLines",
          "package": "misfortune",
          "partial": "Lines",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe location of the string in the file, as a byte offset\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "stringOffset",
          "package": "misfortune",
          "signature": "Int",
          "source": "src/Data-Fortune-Index.html#IndexEntry",
          "type": "function"
        },
        "index": {
          "description": "The location of the string in the file as byte offset",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "stringOffset",
          "package": "misfortune",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRepeatedly invoke a generator for index entries until it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n appending all entries returned to the index file.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "unfoldEntries",
          "package": "misfortune",
          "signature": "Index -\u003e IO (Maybe IndexEntry) -\u003e IO ()",
          "source": "src/Data-Fortune-Index.html#unfoldEntries",
          "type": "function"
        },
        "index": {
          "description": "Repeatedly invoke generator for index entries until it returns Nothing appending all entries returned to the index file",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "unfoldEntries",
          "normalized": "Index-\u003eIO(Maybe IndexEntry)-\u003eIO()",
          "package": "misfortune",
          "partial": "Entries",
          "signature": "Index-\u003eIO(Maybe IndexEntry)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:unfoldEntries"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action with an open \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e, ensuring the file is closed\n when the action finishes.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "withFortuneFile",
          "package": "misfortune",
          "signature": "Char -\u003e Bool -\u003e FilePath -\u003e (FortuneFile -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Fortune.html#withFortuneFile",
          "type": "function"
        },
        "index": {
          "description": "Perform an action with an open FortuneFile ensuring the file is closed when the action finishes",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "withFortuneFile",
          "normalized": "Char-\u003eBool-\u003eFilePath-\u003e(FortuneFile-\u003eIO a)-\u003eIO a",
          "package": "misfortune",
          "partial": "Fortune File",
          "signature": "Char-\u003eBool-\u003eFilePath-\u003e(FortuneFile-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:withFortuneFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerform an action with many open \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es, ensuring the files are closed\n when the action finishes.\n\u003c/p\u003e",
          "module": "Data.Fortune",
          "name": "withFortuneFiles",
          "package": "misfortune",
          "signature": "Char -\u003e Bool -\u003e [FilePath] -\u003e ([FortuneFile] -\u003e IO a) -\u003e IO a",
          "source": "src/Data-Fortune.html#withFortuneFiles",
          "type": "function"
        },
        "index": {
          "description": "Perform an action with many open FortuneFile ensuring the files are closed when the action finishes",
          "hierarchy": "Data Fortune",
          "module": "Data.Fortune",
          "name": "withFortuneFiles",
          "normalized": "Char-\u003eBool-\u003e[FilePath]-\u003e([FortuneFile]-\u003eIO a)-\u003eIO a",
          "package": "misfortune",
          "partial": "Fortune Files",
          "signature": "Char-\u003eBool-\u003e[FilePath]-\u003e([FortuneFile]-\u003eIO a)-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:withFortuneFiles"
      }
    }
  ]
]