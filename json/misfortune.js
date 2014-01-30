[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "module",
        "fct-source": "src/Data-Fortune.html",
        "fct-type": "module",
        "title": "Fortune"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "Fortune",
        "normalized": "",
        "package": "misfortune",
        "partial": "Fortune",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to an open fortune database.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-FortuneFile.html#FortuneFile",
        "fct-type": "data",
        "title": "FortuneFile"
      },
      "index": {
        "description": "handle to an open fortune database",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "FortuneFile",
        "normalized": "",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneStats",
      "description": {
        "fct-descr": "\u003cp\u003eSome statistics about the fortunes in a database.  These are stored in \n the index file and used to speed up various calculations that would otherwise\n require re-reading lots of files.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Stats.html#FortuneStats",
        "fct-type": "data",
        "title": "FortuneStats"
      },
      "index": {
        "description": "Some statistics about the fortunes in database These are stored in the index file and used to speed up various calculations that would otherwise require re-reading lots of files",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "FortuneStats",
        "normalized": "",
        "package": "misfortune",
        "partial": "Fortune Stats",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:FortuneType",
      "description": {
        "fct-descr": "\u003cp\u003eThree different search paths are supported, depending on the \"type\" of fortune\n requested.  These are the types that can be requested.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune.html#FortuneType",
        "fct-type": "data",
        "title": "FortuneType"
      },
      "index": {
        "description": "Three different search paths are supported depending on the type of fortune requested These are the types that can be requested",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "FortuneType",
        "normalized": "",
        "package": "misfortune",
        "partial": "Fortune Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:HeaderProblem",
      "description": {
        "fct-descr": "\u003cp\u003eAn exception type indicating things that can be wrong about an index file's header.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Index.html#HeaderProblem",
        "fct-type": "data",
        "title": "HeaderProblem"
      },
      "index": {
        "description": "An exception type indicating things that can be wrong about an index file header",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "HeaderProblem",
        "normalized": "",
        "package": "misfortune",
        "partial": "Header Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:Index",
      "description": {
        "fct-descr": "\u003cp\u003eA handle to an open fortune index file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Index.html#Index",
        "fct-type": "data",
        "title": "Index"
      },
      "index": {
        "description": "handle to an open fortune index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "Index",
        "normalized": "",
        "package": "misfortune",
        "partial": "Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:IndexEntry",
      "description": {
        "fct-descr": "\u003cp\u003eConceptually, an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file is just a header containing \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e and an array of these entries.\n An \u003ccode\u003e\u003ca\u003eIndexEntry\u003c/a\u003e\u003c/code\u003e stores the information needed to locate one string in the fortune fiel, as well as some\n basic stats about that one file (from which the \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e will be derived).\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "data",
        "title": "IndexEntry"
      },
      "index": {
        "description": "Conceptually an Index file is just header containing FortuneStats and an array of these entries An IndexEntry stores the information needed to locate one string in the fortune fiel as well as some basic stats about that one file from which the FortuneStats will be derived",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "IndexEntry",
        "normalized": "",
        "package": "misfortune",
        "partial": "Index Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:IndexProblem",
      "description": {
        "fct-descr": "\u003cp\u003eErrors that can be thrown indicating a problem with an index file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Index.html#IndexProblem",
        "fct-type": "data",
        "title": "IndexProblem"
      },
      "index": {
        "description": "Errors that can be thrown indicating problem with an index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "IndexProblem",
        "normalized": "",
        "package": "misfortune",
        "partial": "Index Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#t:StatsProblem",
      "description": {
        "fct-descr": "\u003cp\u003eErrors that can be thrown when stats are read from an index file.\n These errors describe various logical inconsistencies that generally\n indicate that the index file is corrupted somehow.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "data",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "data",
        "title": "StatsProblem"
      },
      "index": {
        "description": "Errors that can be thrown when stats are read from an index file These errors describe various logical inconsistencies that generally indicate that the index file is corrupted somehow",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "StatsProblem",
        "normalized": "",
        "package": "misfortune",
        "partial": "Stats Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:AccessToClosedIndex",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "AccessToClosedIndex",
        "fct-source": "src/Data-Fortune-Index.html#IndexProblem",
        "fct-type": "function",
        "title": "AccessToClosedIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "AccessToClosedIndex",
        "normalized": "",
        "package": "misfortune",
        "partial": "Access To Closed Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:All",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "All",
        "fct-source": "src/Data-Fortune.html#FortuneType",
        "fct-type": "function",
        "title": "All"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "All",
        "normalized": "",
        "package": "misfortune",
        "partial": "All",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:BadMagicNumber",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "BadMagicNumber !Word32",
        "fct-source": "src/Data-Fortune-Index.html#HeaderProblem",
        "fct-type": "function",
        "title": "BadMagicNumber"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "BadMagicNumber",
        "normalized": "",
        "package": "misfortune",
        "partial": "Bad Magic Number",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:EntriesWithoutLengths",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "EntriesWithoutLengths",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "EntriesWithoutLengths"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "EntriesWithoutLengths",
        "normalized": "",
        "package": "misfortune",
        "partial": "Entries Without Lengths",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:HeaderProblem",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "HeaderProblem !HeaderProblem",
        "fct-source": "src/Data-Fortune-Index.html#IndexProblem",
        "fct-type": "function",
        "title": "HeaderProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "HeaderProblem",
        "normalized": "",
        "package": "misfortune",
        "partial": "Header Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:InconsistentLengthsForOneEntry",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "InconsistentLengthsForOneEntry",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "InconsistentLengthsForOneEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "InconsistentLengthsForOneEntry",
        "normalized": "",
        "package": "misfortune",
        "partial": "Inconsistent Lengths For One Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:IndexEntry",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "IndexEntry",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "function",
        "title": "IndexEntry"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "IndexEntry",
        "normalized": "",
        "package": "misfortune",
        "partial": "Index Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:LengthsWithoutEntries",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "LengthsWithoutEntries",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "LengthsWithoutEntries"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "LengthsWithoutEntries",
        "normalized": "",
        "package": "misfortune",
        "partial": "Lengths Without Entries",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:MaxLengthLessThanMinLength",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "MaxLengthLessThanMinLength",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "MaxLengthLessThanMinLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "MaxLengthLessThanMinLength",
        "normalized": "",
        "package": "misfortune",
        "partial": "Max Length Less Than Min Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeCount",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "NegativeCount !Int",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "NegativeCount"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "NegativeCount",
        "normalized": "",
        "package": "misfortune",
        "partial": "Negative Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeLength",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "NegativeLength !Int",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "NegativeLength"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "NegativeLength",
        "normalized": "",
        "package": "misfortune",
        "partial": "Negative Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:NegativeOffset",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "NegativeOffset !Int",
        "fct-source": "src/Data-Fortune-Stats.html#StatsProblem",
        "fct-type": "function",
        "title": "NegativeOffset"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "NegativeOffset",
        "normalized": "",
        "package": "misfortune",
        "partial": "Negative Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:Normal",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Normal",
        "fct-source": "src/Data-Fortune.html#FortuneType",
        "fct-type": "function",
        "title": "Normal"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "Normal",
        "normalized": "",
        "package": "misfortune",
        "partial": "Normal",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:Offensive",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Offensive",
        "fct-source": "src/Data-Fortune.html#FortuneType",
        "fct-type": "function",
        "title": "Offensive"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "Offensive",
        "normalized": "",
        "package": "misfortune",
        "partial": "Offensive",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:StatsProblem",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "StatsProblem !StatsProblem",
        "fct-source": "src/Data-Fortune-Index.html#HeaderProblem",
        "fct-type": "function",
        "title": "StatsProblem"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "StatsProblem",
        "normalized": "",
        "package": "misfortune",
        "partial": "Stats Problem",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:TableLongerThanFile",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "TableLongerThanFile",
        "fct-source": "src/Data-Fortune-Index.html#IndexProblem",
        "fct-type": "function",
        "title": "TableLongerThanFile"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "TableLongerThanFile",
        "normalized": "",
        "package": "misfortune",
        "partial": "Table Longer Than File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:TableStartsBeforeHeaderEnds",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "TableStartsBeforeHeaderEnds",
        "fct-source": "src/Data-Fortune-Index.html#HeaderProblem",
        "fct-type": "function",
        "title": "TableStartsBeforeHeaderEnds"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "TableStartsBeforeHeaderEnds",
        "normalized": "",
        "package": "misfortune",
        "partial": "Table Starts Before Header Ends",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:UnsupportedVersion",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "UnsupportedVersion !Word32",
        "fct-source": "src/Data-Fortune-Index.html#HeaderProblem",
        "fct-type": "function",
        "title": "UnsupportedVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "UnsupportedVersion",
        "normalized": "",
        "package": "misfortune",
        "partial": "Unsupported Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendEntries",
      "description": {
        "fct-descr": "\u003cp\u003eAppend all the given entries to the \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e Vector IndexEntry -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#appendEntries",
        "fct-type": "function",
        "title": "appendEntries"
      },
      "index": {
        "description": "Append all the given entries to the Index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "appendEntries",
        "normalized": "Index-\u003eVector IndexEntry-\u003eIO()",
        "package": "misfortune",
        "partial": "Entries",
        "signature": "Index-\u003eVector IndexEntry-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendEntry",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a single \u003ccode\u003e\u003ca\u003eIndexEntry\u003c/a\u003e\u003c/code\u003e to an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IndexEntry -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#appendEntry",
        "fct-type": "function",
        "title": "appendEntry"
      },
      "index": {
        "description": "Append single IndexEntry to an Index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "appendEntry",
        "normalized": "Index-\u003eIndexEntry-\u003eIO()",
        "package": "misfortune",
        "partial": "Entry",
        "signature": "Index-\u003eIndexEntry-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:appendFortune",
      "description": {
        "fct-descr": "\u003cp\u003eAppend a fortune to a fortune file, inserting a delimiter if\n needed and updating the index.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e Text -\u003e IO ()",
        "fct-source": "src/Data-Fortune-FortuneFile.html#appendFortune",
        "fct-type": "function",
        "title": "appendFortune"
      },
      "index": {
        "description": "Append fortune to fortune file inserting delimiter if needed and updating the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "appendFortune",
        "normalized": "FortuneFile-\u003eText-\u003eIO()",
        "package": "misfortune",
        "partial": "Fortune",
        "signature": "FortuneFile-\u003eText-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:checkIndex",
      "description": {
        "fct-descr": "\u003cp\u003eForce a consistency check on an index file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO (Maybe IndexProblem)",
        "fct-source": "src/Data-Fortune-Index.html#checkIndex",
        "fct-type": "function",
        "title": "checkIndex"
      },
      "index": {
        "description": "Force consistency check on an index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "checkIndex",
        "normalized": "Index-\u003eIO(Maybe IndexProblem)",
        "package": "misfortune",
        "partial": "Index",
        "signature": "Index-\u003eIO(Maybe IndexProblem)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:clearIndex",
      "description": {
        "fct-descr": "\u003cp\u003eDelete all entries from an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#clearIndex",
        "fct-type": "function",
        "title": "clearIndex"
      },
      "index": {
        "description": "Delete all entries from an Index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "clearIndex",
        "normalized": "Index-\u003eIO()",
        "package": "misfortune",
        "partial": "Index",
        "signature": "Index-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:closeFortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003eClose a fortune file. Subsequent accesses will fail.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e IO ()",
        "fct-source": "src/Data-Fortune-FortuneFile.html#closeFortuneFile",
        "fct-type": "function",
        "title": "closeFortuneFile"
      },
      "index": {
        "description": "Close fortune file Subsequent accesses will fail",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "closeFortuneFile",
        "normalized": "FortuneFile-\u003eIO()",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": "FortuneFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:closeIndex",
      "description": {
        "fct-descr": "\u003cp\u003eClose an index file.  Subsequent accesses will fail.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#closeIndex",
        "fct-type": "function",
        "title": "closeIndex"
      },
      "index": {
        "description": "Close an index file Subsequent accesses will fail",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "closeIndex",
        "normalized": "Index-\u003eIO()",
        "package": "misfortune",
        "partial": "Index",
        "signature": "Index-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:createVirtualIndex",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an in-memory index - useful for working with files when, for whatever reason,\n you cannot create a valid index.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "IO Index",
        "fct-source": "src/Data-Fortune-Index.html#createVirtualIndex",
        "fct-type": "function",
        "title": "createVirtualIndex"
      },
      "index": {
        "description": "Create an in-memory index useful for working with files when for whatever reason you cannot create valid index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "createVirtualIndex",
        "normalized": "",
        "package": "misfortune",
        "partial": "Virtual Index",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneDistribution",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a list of \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es, compute a distrubution over them weighted by the number\n of fortunes in each.  If this distribution is used with \u003ccode\u003e\u003ca\u003erandomFortuneFromRandomFile\u003c/a\u003e\u003c/code\u003e,\n the result will be a uniform selection over all the fortunes in all the files.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "[FortuneFile] -\u003e IO (Categorical Float FortuneFile)",
        "fct-source": "src/Data-Fortune.html#defaultFortuneDistribution",
        "fct-type": "function",
        "title": "defaultFortuneDistribution"
      },
      "index": {
        "description": "Given list of FortuneFile compute distrubution over them weighted by the number of fortunes in each If this distribution is used with randomFortuneFromRandomFile the result will be uniform selection over all the fortunes in all the files",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "defaultFortuneDistribution",
        "normalized": "[FortuneFile]-\u003eIO(Categorical Float FortuneFile)",
        "package": "misfortune",
        "partial": "Fortune Distribution",
        "signature": "[FortuneFile]-\u003eIO(Categorical Float FortuneFile)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneFiles",
      "description": {
        "fct-descr": "\u003cp\u003eGet a list of all fortune files on the configured search path (see \u003ccode\u003e\u003ca\u003egetFortuneSearchPath\u003c/a\u003e\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#defaultFortuneFiles",
        "fct-type": "function",
        "title": "defaultFortuneFiles"
      },
      "index": {
        "description": "Get list of all fortune files on the configured search path see getFortuneSearchPath",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "defaultFortuneFiles",
        "normalized": "FortuneType-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune Files",
        "signature": "FortuneType-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:defaultFortuneSearchPath",
      "description": {
        "fct-descr": "\u003cp\u003eGet the default search path for a specified fortune type (ignoring the \u003ccode\u003eMISFORTUNE_PATH\u003c/code\u003e environment variables)\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e IO [(FilePath, Bool)]",
        "fct-source": "src/Data-Fortune.html#defaultFortuneSearchPath",
        "fct-type": "function",
        "title": "defaultFortuneSearchPath"
      },
      "index": {
        "description": "Get the default search path for specified fortune type ignoring the MISFORTUNE PATH environment variables",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "defaultFortuneSearchPath",
        "normalized": "FortuneType-\u003eIO[(FilePath,Bool)]",
        "package": "misfortune",
        "partial": "Fortune Search Path",
        "signature": "FortuneType-\u003eIO[(FilePath,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunes",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(IndexEntry -\u003e Bool) -\u003e FortuneFile -\u003e IO [a]",
        "fct-source": "src/Data-Fortune.html#filterFortunes",
        "fct-type": "function",
        "title": "filterFortunes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "filterFortunes",
        "normalized": "(IndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "(IndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesM",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(IndexEntry -\u003e IO Bool) -\u003e FortuneFile -\u003e IO [a]",
        "fct-source": "src/Data-Fortune.html#filterFortunesM",
        "fct-type": "function",
        "title": "filterFortunesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "filterFortunesM",
        "normalized": "(IndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "(IndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesWithIndex",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(a -\u003e IndexEntry -\u003e Bool) -\u003e FortuneFile -\u003e IO [a]",
        "fct-source": "src/Data-Fortune.html#filterFortunesWithIndex",
        "fct-type": "function",
        "title": "filterFortunesWithIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "filterFortunesWithIndex",
        "normalized": "(a-\u003eIndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes With Index",
        "signature": "(a-\u003eIndexEntry-\u003eBool)-\u003eFortuneFile-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:filterFortunesWithIndexM",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(a -\u003e IndexEntry -\u003e IO Bool) -\u003e FortuneFile -\u003e IO [a]",
        "fct-source": "src/Data-Fortune.html#filterFortunesWithIndexM",
        "fct-type": "function",
        "title": "filterFortunesWithIndexM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "filterFortunesWithIndexM",
        "normalized": "(a-\u003eIndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes With Index",
        "signature": "(a-\u003eIndexEntry-\u003eIO Bool)-\u003eFortuneFile-\u003eIO[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistFortuneFiles\u003c/a\u003e\u003c/code\u003e except only returning paths with the \n specified file name.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Bool -\u003e FilePath -\u003e String -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#findFortuneFile",
        "fct-type": "function",
        "title": "findFortuneFile"
      },
      "index": {
        "description": "Like listFortuneFiles except only returning paths with the specified file name",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "findFortuneFile",
        "normalized": "Bool-\u003eFilePath-\u003eString-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": "Bool-\u003eFilePath-\u003eString-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFileIn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003elistFortuneFilesIn\u003c/a\u003e\u003c/code\u003e except only returning paths with the \n specified file name.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "[(String, Bool)] -\u003e String -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#findFortuneFileIn",
        "fct-type": "function",
        "title": "findFortuneFileIn"
      },
      "index": {
        "description": "Like listFortuneFilesIn except only returning paths with the specified file name",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "findFortuneFileIn",
        "normalized": "[(String,Bool)]-\u003eString-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune File In",
        "signature": "[(String,Bool)]-\u003eString-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:findFortuneFilesIn",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003efindFortuneFileIn\u003c/a\u003e\u003c/code\u003e but searches for multiple files in multiple directories.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "[(String, Bool)] -\u003e [String] -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#findFortuneFilesIn",
        "fct-type": "function",
        "title": "findFortuneFilesIn"
      },
      "index": {
        "description": "Like findFortuneFileIn but searches for multiple files in multiple directories",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "findFortuneFilesIn",
        "normalized": "[(String,Bool)]-\u003e[String]-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune Files In",
        "signature": "[(String,Bool)]-\u003e[String]-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneDistributionWhere",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003edefaultFortuneDistribution\u003c/a\u003e\u003c/code\u003e, but filtering the fortunes.  In addition to the\n fortune file, the tuples in the distribution include a distribution over the\n matching fortune indices in that file, assigning equal weight to each.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(FortuneFile -\u003e Int -\u003e IndexEntry -\u003e IO Bool) -\u003e [FortuneFile] -\u003e IO (Categorical Float (FortuneFile, Categorical Float Int))",
        "fct-source": "src/Data-Fortune.html#fortuneDistributionWhere",
        "fct-type": "function",
        "title": "fortuneDistributionWhere"
      },
      "index": {
        "description": "Like defaultFortuneDistribution but filtering the fortunes In addition to the fortune file the tuples in the distribution include distribution over the matching fortune indices in that file assigning equal weight to each",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "fortuneDistributionWhere",
        "normalized": "(FortuneFile-\u003eInt-\u003eIndexEntry-\u003eIO Bool)-\u003e[FortuneFile]-\u003eIO(Categorical Float(FortuneFile,Categorical Float Int))",
        "package": "misfortune",
        "partial": "Distribution Where",
        "signature": "(FortuneFile-\u003eInt-\u003eIndexEntry-\u003eIO Bool)-\u003e[FortuneFile]-\u003eIO(Categorical Float(FortuneFile,Categorical Float Int))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneFilePath",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path of the text part of an open fortune database.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e FilePath",
        "fct-source": "src/Data-Fortune-FortuneFile.html#fortuneFilePath",
        "fct-type": "function",
        "title": "fortuneFilePath"
      },
      "index": {
        "description": "Get the path of the text part of an open fortune database",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "fortuneFilePath",
        "normalized": "FortuneFile-\u003eFilePath",
        "package": "misfortune",
        "partial": "File Path",
        "signature": "FortuneFile-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:fortuneIndexPath",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path of the index part of an open fortune database.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e FilePath",
        "fct-source": "src/Data-Fortune-FortuneFile.html#fortuneIndexPath",
        "fct-type": "function",
        "title": "fortuneIndexPath"
      },
      "index": {
        "description": "Get the path of the index part of an open fortune database",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "fortuneIndexPath",
        "normalized": "FortuneFile-\u003eFilePath",
        "package": "misfortune",
        "partial": "Index Path",
        "signature": "FortuneFile-\u003eFilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getEntries",
      "description": {
        "fct-descr": "\u003cp\u003eRead all the entries in an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO (Vector IndexEntry)",
        "fct-source": "src/Data-Fortune-Index.html#getEntries",
        "fct-type": "function",
        "title": "getEntries"
      },
      "index": {
        "description": "Read all the entries in an Index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getEntries",
        "normalized": "Index-\u003eIO(Vector IndexEntry)",
        "package": "misfortune",
        "partial": "Entries",
        "signature": "Index-\u003eIO(Vector IndexEntry)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getEntry",
      "description": {
        "fct-descr": "\u003cp\u003eRead a specified entry from an \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e Int -\u003e IO IndexEntry",
        "fct-source": "src/Data-Fortune-Index.html#getEntry",
        "fct-type": "function",
        "title": "getEntry"
      },
      "index": {
        "description": "Read specified entry from an Index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getEntry",
        "normalized": "Index-\u003eInt-\u003eIO IndexEntry",
        "package": "misfortune",
        "partial": "Entry",
        "signature": "Index-\u003eInt-\u003eIO IndexEntry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortune",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003egetFortune f i\u003c/code\u003e retrieves the text of the \u003ccode\u003ei\u003c/code\u003e'th fortune\n (according to the order in the index file) in the \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e \u003ccode\u003ef\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e Int -\u003e IO Text",
        "fct-source": "src/Data-Fortune-FortuneFile.html#getFortune",
        "fct-type": "function",
        "title": "getFortune"
      },
      "index": {
        "description": "getFortune retrieves the text of the th fortune according to the order in the index file in the FortuneFile",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getFortune",
        "normalized": "FortuneFile-\u003eInt-\u003eIO Text",
        "package": "misfortune",
        "partial": "Fortune",
        "signature": "FortuneFile-\u003eInt-\u003eIO Text"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortuneDir",
      "description": {
        "fct-descr": "\u003cp\u003eGet the path of the directory containing built-in fortunes of the specified type.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e IO FilePath",
        "fct-source": "src/Data-Fortune.html#getFortuneDir",
        "fct-type": "function",
        "title": "getFortuneDir"
      },
      "index": {
        "description": "Get the path of the directory containing built-in fortunes of the specified type",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getFortuneDir",
        "normalized": "FortuneType-\u003eIO FilePath",
        "package": "misfortune",
        "partial": "Fortune Dir",
        "signature": "FortuneType-\u003eIO FilePath"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortuneSearchPath",
      "description": {
        "fct-descr": "\u003cp\u003eGet the configured search path for a specified fortune type.\n If the environment variable \u003ccode\u003eMISFORTUNE_PATH_\u003ca\u003eTYPE\u003c/a\u003e\u003c/code\u003e is set, it will be used.\n Otherwise, if \u003ccode\u003eMISFORTUNE_PATH\u003c/code\u003e is set, it will be used.  Otherwise, the\n \u003ccode\u003e\u003ca\u003edefaultFortuneSearchPath\u003c/a\u003e\u003c/code\u003e will be used.\n\u003c/p\u003e\u003cp\u003eEnvironment variables are interpreted by splitting on \u003ccode\u003e\u003ccode\u003e:\u003c/code\u003e\u003c/code\u003e and checking\n for an optional \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003e-\u003c/a\u003e\u003c/code\u003e prefix on each component (where \u003ccode\u003e\u003ca\u003e+\u003c/a\u003e\u003c/code\u003e indicates \n recursive search of that directory).  The default is non-recursive search\n for each component.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e IO [(FilePath, Bool)]",
        "fct-source": "src/Data-Fortune.html#getFortuneSearchPath",
        "fct-type": "function",
        "title": "getFortuneSearchPath"
      },
      "index": {
        "description": "Get the configured search path for specified fortune type If the environment variable MISFORTUNE PATH TYPE is set it will be used Otherwise if MISFORTUNE PATH is set it will be used Otherwise the defaultFortuneSearchPath will be used Environment variables are interpreted by splitting on and checking for an optional or prefix on each component where indicates recursive search of that directory The default is non-recursive search for each component",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getFortuneSearchPath",
        "normalized": "FortuneType-\u003eIO[(FilePath,Bool)]",
        "package": "misfortune",
        "partial": "Fortune Search Path",
        "signature": "FortuneType-\u003eIO[(FilePath,Bool)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getFortunes",
      "description": {
        "fct-descr": "\u003cp\u003eGet the text of every fortune in a fortune file,\n in the order they occur in the file.  Ignores the index\n entirely.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e IO [Text]",
        "fct-source": "src/Data-Fortune-FortuneFile.html#getFortunes",
        "fct-type": "function",
        "title": "getFortunes"
      },
      "index": {
        "description": "Get the text of every fortune in fortune file in the order they occur in the file Ignores the index entirely",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getFortunes",
        "normalized": "FortuneFile-\u003eIO[Text]",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "FortuneFile-\u003eIO[Text]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getIndex",
      "description": {
        "fct-descr": "\u003cp\u003eGet the \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e of a \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e, opening it if necessary.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e IO Index",
        "fct-source": "src/Data-Fortune-FortuneFile.html#getIndex",
        "fct-type": "function",
        "title": "getIndex"
      },
      "index": {
        "description": "Get the Index of FortuneFile opening it if necessary",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getIndex",
        "normalized": "FortuneFile-\u003eIO Index",
        "package": "misfortune",
        "partial": "Index",
        "signature": "FortuneFile-\u003eIO Index"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getNumFortunes",
      "description": {
        "fct-descr": "\u003cp\u003eGet the number of fortunes in a fortune file, as recorded\n in the index.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e IO Int",
        "fct-source": "src/Data-Fortune-FortuneFile.html#getNumFortunes",
        "fct-type": "function",
        "title": "getNumFortunes"
      },
      "index": {
        "description": "Get the number of fortunes in fortune file as recorded in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getNumFortunes",
        "normalized": "FortuneFile-\u003eIO Int",
        "package": "misfortune",
        "partial": "Num Fortunes",
        "signature": "FortuneFile-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:getStats",
      "description": {
        "fct-descr": "\u003cp\u003eGet some cached stats about the fortunes indexed in this file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO FortuneStats",
        "fct-source": "src/Data-Fortune-Index.html#getStats",
        "fct-type": "function",
        "title": "getStats"
      },
      "index": {
        "description": "Get some cached stats about the fortunes indexed in this file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "getStats",
        "normalized": "Index-\u003eIO FortuneStats",
        "package": "misfortune",
        "partial": "Stats",
        "signature": "Index-\u003eIO FortuneStats"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:indexEntryStats",
      "description": {
        "fct-descr": "\u003cp\u003eConvert one index entry to a \u003ccode\u003e\u003ca\u003eFortuneStats\u003c/a\u003e\u003c/code\u003e record describing it.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "IndexEntry -\u003e FortuneStats",
        "fct-source": "src/Data-Fortune-Index.html#indexEntryStats",
        "fct-type": "function",
        "title": "indexEntryStats"
      },
      "index": {
        "description": "Convert one index entry to FortuneStats record describing it",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "indexEntryStats",
        "normalized": "IndexEntry-\u003eFortuneStats",
        "package": "misfortune",
        "partial": "Entry Stats",
        "signature": "IndexEntry-\u003eFortuneStats"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:listFortuneFiles",
      "description": {
        "fct-descr": "\u003cp\u003eList all the fortune files in a directory.  The \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e value\n specifies whether to search subtrees as well.\n\u003c/p\u003e\u003cp\u003eAny file which does not have an extension of \".ix\" or \".dat\"\n will be reported as a fortune file (\".dat\" is not used by\n misfortune, but is ignored so that misfortune can share fortune\n databases with \u003ccode\u003efortune\u003c/code\u003e).\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Bool -\u003e FilePath -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#listFortuneFiles",
        "fct-type": "function",
        "title": "listFortuneFiles"
      },
      "index": {
        "description": "List all the fortune files in directory The Bool value specifies whether to search subtrees as well Any file which does not have an extension of ix or dat will be reported as fortune file dat is not used by misfortune but is ignored so that misfortune can share fortune databases with fortune",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "listFortuneFiles",
        "normalized": "Bool-\u003eFilePath-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune Files",
        "signature": "Bool-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:listFortuneFilesIn",
      "description": {
        "fct-descr": "\u003cp\u003eList all the fortune files in several directories.  Each directory\n will be searched by \u003ccode\u003e\u003ca\u003elistFortuneFiles\u003c/a\u003e\u003c/code\u003e (using the corresponding \u003ccode\u003e\u003ca\u003eBool\u003c/a\u003e\u003c/code\u003e \n value to control whether the directory is searched recursively) and all\n results will be combined.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "[(FilePath, Bool)] -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#listFortuneFilesIn",
        "fct-type": "function",
        "title": "listFortuneFilesIn"
      },
      "index": {
        "description": "List all the fortune files in several directories Each directory will be searched by listFortuneFiles using the corresponding Bool value to control whether the directory is searched recursively and all results will be combined",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "listFortuneFilesIn",
        "normalized": "[(FilePath,Bool)]-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune Files In",
        "signature": "[(FilePath,Bool)]-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunes",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(IndexEntry -\u003e b) -\u003e FortuneFile -\u003e IO [b]",
        "fct-source": "src/Data-Fortune.html#mapFortunes",
        "fct-type": "function",
        "title": "mapFortunes"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "mapFortunes",
        "normalized": "(IndexEntry-\u003ea)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "(IndexEntry-\u003eb)-\u003eFortuneFile-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesM",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(IndexEntry -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
        "fct-source": "src/Data-Fortune.html#mapFortunesM",
        "fct-type": "function",
        "title": "mapFortunesM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "mapFortunesM",
        "normalized": "(IndexEntry-\u003eIO a)-\u003eFortuneFile-\u003eIO[a]",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "(IndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesWithIndex",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(a -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
        "fct-source": "src/Data-Fortune.html#mapFortunesWithIndex",
        "fct-type": "function",
        "title": "mapFortunesWithIndex"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "mapFortunesWithIndex",
        "normalized": "(a-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
        "package": "misfortune",
        "partial": "Fortunes With Index",
        "signature": "(a-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:mapFortunesWithIndexM",
      "description": {
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "(a -\u003e IndexEntry -\u003e IO b) -\u003e FortuneFile -\u003e IO [b]",
        "fct-source": "src/Data-Fortune.html#mapFortunesWithIndexM",
        "fct-type": "function",
        "title": "mapFortunesWithIndexM"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "mapFortunesWithIndexM",
        "normalized": "(a-\u003eIndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]",
        "package": "misfortune",
        "partial": "Fortunes With Index",
        "signature": "(a-\u003eIndexEntry-\u003eIO b)-\u003eFortuneFile-\u003eIO[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:maxChars",
      "description": {
        "fct-descr": "\u003cp\u003eThe greatest number of lines in any string in the index\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneStats -\u003e Int",
        "fct-source": "src/Data-Fortune.html#maxChars",
        "fct-type": "function",
        "title": "maxChars"
      },
      "index": {
        "description": "The greatest number of lines in any string in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "maxChars",
        "normalized": "FortuneStats-\u003eInt",
        "package": "misfortune",
        "partial": "Chars",
        "signature": "FortuneStats-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:maxLines",
      "description": {
        "fct-descr": "\u003cp\u003eThe greatest number of characters in any string in the index\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneStats -\u003e Int",
        "fct-source": "src/Data-Fortune.html#maxLines",
        "fct-type": "function",
        "title": "maxLines"
      },
      "index": {
        "description": "The greatest number of characters in any string in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "maxLines",
        "normalized": "FortuneStats-\u003eInt",
        "package": "misfortune",
        "partial": "Lines",
        "signature": "FortuneStats-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:minChars",
      "description": {
        "fct-descr": "\u003cp\u003eThe smallest number of characters in any string in the index\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneStats -\u003e Int",
        "fct-source": "src/Data-Fortune.html#minChars",
        "fct-type": "function",
        "title": "minChars"
      },
      "index": {
        "description": "The smallest number of characters in any string in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "minChars",
        "normalized": "FortuneStats-\u003eInt",
        "package": "misfortune",
        "partial": "Chars",
        "signature": "FortuneStats-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:minLines",
      "description": {
        "fct-descr": "\u003cp\u003eThe smallest number of lines in any string in the index\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneStats -\u003e Int",
        "fct-source": "src/Data-Fortune.html#minLines",
        "fct-type": "function",
        "title": "minLines"
      },
      "index": {
        "description": "The smallest number of lines in any string in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "minLines",
        "normalized": "FortuneStats-\u003eInt",
        "package": "misfortune",
        "partial": "Lines",
        "signature": "FortuneStats-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:numFortunes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of fortune strings in the index\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneStats -\u003e Int",
        "fct-source": "src/Data-Fortune.html#numFortunes",
        "fct-type": "function",
        "title": "numFortunes"
      },
      "index": {
        "description": "The number of fortune strings in the index",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "numFortunes",
        "normalized": "FortuneStats-\u003eInt",
        "package": "misfortune",
        "partial": "Fortunes",
        "signature": "FortuneStats-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:openFortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenFortuneFile path delim writeMode\u003c/code\u003e: Open a fortune file at \u003ccode\u003epath\u003c/code\u003e,\n using \u003ccode\u003edelim\u003c/code\u003e as the character between strings, allowing writing if\n \u003ccode\u003ewriteMode\u003c/code\u003e is set.  If no file exists at the specified path, an error\n will be thrown or the file will be created, depending on \u003ccode\u003ewriteMode\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Char -\u003e Bool -\u003e FilePath -\u003e IO FortuneFile",
        "fct-source": "src/Data-Fortune-FortuneFile.html#openFortuneFile",
        "fct-type": "function",
        "title": "openFortuneFile"
      },
      "index": {
        "description": "openFortuneFile path delim writeMode Open fortune file at path using delim as the character between strings allowing writing if writeMode is set If no file exists at the specified path an error will be thrown or the file will be created depending on writeMode",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "openFortuneFile",
        "normalized": "Char-\u003eBool-\u003eFilePath-\u003eIO FortuneFile",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": "Char-\u003eBool-\u003eFilePath-\u003eIO FortuneFile"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:openIndex",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eopenIndex path writeMode\u003c/code\u003e: Opens the index file at \u003ccode\u003epath\u003c/code\u003e.  The \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e will\n be writable if \u003ccode\u003ewriteMode\u003c/code\u003e is \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.  If there is no index file at that path, \n an error will be thrown or the index will be created, depending on \u003ccode\u003ewriteMode\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FilePath -\u003e Bool -\u003e IO Index",
        "fct-source": "src/Data-Fortune-Index.html#openIndex",
        "fct-type": "function",
        "title": "openIndex"
      },
      "index": {
        "description": "openIndex path writeMode Opens the index file at path The Index will be writable if writeMode is True If there is no index file at that path an error will be thrown or the index will be created depending on writeMode",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "openIndex",
        "normalized": "FilePath-\u003eBool-\u003eIO Index",
        "package": "misfortune",
        "partial": "Index",
        "signature": "FilePath-\u003eBool-\u003eIO Index"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:randomFortune",
      "description": {
        "fct-descr": "\u003cp\u003eSelect a random fortune from all files matching any of a list of names (or if the \n list is empty, all fortune files on the search path).  Every fortune string will have\n an equal probability of being selected.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "[String] -\u003e IO String",
        "fct-source": "src/Data-Fortune.html#randomFortune",
        "fct-type": "function",
        "title": "randomFortune"
      },
      "index": {
        "description": "Select random fortune from all files matching any of list of names or if the list is empty all fortune files on the search path Every fortune string will have an equal probability of being selected",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "randomFortune",
        "normalized": "[String]-\u003eIO String",
        "package": "misfortune",
        "partial": "Fortune",
        "signature": "[String]-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:randomFortuneFromRandomFile",
      "description": {
        "fct-descr": "\u003cp\u003eSelect a random fortune file from a specified distribution and then select a\n random fortune from that file (unformly).\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "RVar FortuneFile -\u003e IO String",
        "fct-source": "src/Data-Fortune.html#randomFortuneFromRandomFile",
        "fct-type": "function",
        "title": "randomFortuneFromRandomFile"
      },
      "index": {
        "description": "Select random fortune file from specified distribution and then select random fortune from that file unformly",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "randomFortuneFromRandomFile",
        "normalized": "RVar FortuneFile-\u003eIO String",
        "package": "misfortune",
        "partial": "Fortune From Random File",
        "signature": "RVar FortuneFile-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:rebuildIndex",
      "description": {
        "fct-descr": "\u003cp\u003eClear a \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es \u003ccode\u003e\u003ca\u003eIndex\u003c/a\u003e\u003c/code\u003e and rebuild it from the contents \n of the text file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneFile -\u003e IO ()",
        "fct-source": "src/Data-Fortune-FortuneFile.html#rebuildIndex",
        "fct-type": "function",
        "title": "rebuildIndex"
      },
      "index": {
        "description": "Clear FortuneFile Index and rebuild it from the contents of the text file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "rebuildIndex",
        "normalized": "FortuneFile-\u003eIO()",
        "package": "misfortune",
        "partial": "Index",
        "signature": "FortuneFile-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:rebuildStats",
      "description": {
        "fct-descr": "\u003cp\u003eAll the operations here should preserve correctness of stats, but just in case...\n This procedure forces the stats to be recomputed.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#rebuildStats",
        "fct-type": "function",
        "title": "rebuildStats"
      },
      "index": {
        "description": "All the operations here should preserve correctness of stats but just in case This procedure forces the stats to be recomputed",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "rebuildStats",
        "normalized": "Index-\u003eIO()",
        "package": "misfortune",
        "partial": "Stats",
        "signature": "Index-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:resolveFortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for all fortune files in the configured search path with the given name.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e String -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#resolveFortuneFile",
        "fct-type": "function",
        "title": "resolveFortuneFile"
      },
      "index": {
        "description": "Search for all fortune files in the configured search path with the given name",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "resolveFortuneFile",
        "normalized": "FortuneType-\u003eString-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": "FortuneType-\u003eString-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:resolveFortuneFiles",
      "description": {
        "fct-descr": "\u003cp\u003eSearch for all fortune files in the configured search path with any of the given names.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "FortuneType -\u003e [String] -\u003e IO [FilePath]",
        "fct-source": "src/Data-Fortune.html#resolveFortuneFiles",
        "fct-type": "function",
        "title": "resolveFortuneFiles"
      },
      "index": {
        "description": "Search for all fortune files in the configured search path with any of the given names",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "resolveFortuneFiles",
        "normalized": "FortuneType-\u003e[String]-\u003eIO[FilePath]",
        "package": "misfortune",
        "partial": "Fortune Files",
        "signature": "FortuneType-\u003e[String]-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringBytes",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of bytes the string occupies.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "function",
        "title": "stringBytes"
      },
      "index": {
        "description": "The number of bytes the string occupies",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "stringBytes",
        "normalized": "",
        "package": "misfortune",
        "partial": "Bytes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringChars",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of characters in the string.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "function",
        "title": "stringChars"
      },
      "index": {
        "description": "The number of characters in the string",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "stringChars",
        "normalized": "",
        "package": "misfortune",
        "partial": "Chars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringLines",
      "description": {
        "fct-descr": "\u003cp\u003eThe number of lines in the string.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "function",
        "title": "stringLines"
      },
      "index": {
        "description": "The number of lines in the string",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "stringLines",
        "normalized": "",
        "package": "misfortune",
        "partial": "Lines",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:stringOffset",
      "description": {
        "fct-descr": "\u003cp\u003eThe location of the string in the file, as a byte offset\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "!Int",
        "fct-source": "src/Data-Fortune-Index.html#IndexEntry",
        "fct-type": "function",
        "title": "stringOffset"
      },
      "index": {
        "description": "The location of the string in the file as byte offset",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "stringOffset",
        "normalized": "",
        "package": "misfortune",
        "partial": "Offset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:unfoldEntries",
      "description": {
        "fct-descr": "\u003cp\u003eRepeatedly invoke a generator for index entries until it returns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e,\n appending all entries returned to the index file.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Index -\u003e IO (Maybe IndexEntry) -\u003e IO ()",
        "fct-source": "src/Data-Fortune-Index.html#unfoldEntries",
        "fct-type": "function",
        "title": "unfoldEntries"
      },
      "index": {
        "description": "Repeatedly invoke generator for index entries until it returns Nothing appending all entries returned to the index file",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "unfoldEntries",
        "normalized": "Index-\u003eIO(Maybe IndexEntry)-\u003eIO()",
        "package": "misfortune",
        "partial": "Entries",
        "signature": "Index-\u003eIO(Maybe IndexEntry)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:withFortuneFile",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action with an open \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003e, ensuring the file is closed\n when the action finishes.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Char -\u003e Bool -\u003e FilePath -\u003e (FortuneFile -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Fortune.html#withFortuneFile",
        "fct-type": "function",
        "title": "withFortuneFile"
      },
      "index": {
        "description": "Perform an action with an open FortuneFile ensuring the file is closed when the action finishes",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "withFortuneFile",
        "normalized": "Char-\u003eBool-\u003eFilePath-\u003e(FortuneFile-\u003eIO a)-\u003eIO a",
        "package": "misfortune",
        "partial": "Fortune File",
        "signature": "Char-\u003eBool-\u003eFilePath-\u003e(FortuneFile-\u003eIO a)-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/misfortune/docs/Data-Fortune.html#v:withFortuneFiles",
      "description": {
        "fct-descr": "\u003cp\u003ePerform an action with many open \u003ccode\u003e\u003ca\u003eFortuneFile\u003c/a\u003e\u003c/code\u003es, ensuring the files are closed\n when the action finishes.\n\u003c/p\u003e",
        "fct-module": "Data.Fortune",
        "fct-package": "misfortune",
        "fct-signature": "Char -\u003e Bool -\u003e [FilePath] -\u003e ([FortuneFile] -\u003e IO a) -\u003e IO a",
        "fct-source": "src/Data-Fortune.html#withFortuneFiles",
        "fct-type": "function",
        "title": "withFortuneFiles"
      },
      "index": {
        "description": "Perform an action with many open FortuneFile ensuring the files are closed when the action finishes",
        "hierarchy": "Data Fortune",
        "module": "Data.Fortune",
        "name": "withFortuneFiles",
        "normalized": "Char-\u003eBool-\u003e[FilePath]-\u003e([FortuneFile]-\u003eIO a)-\u003eIO a",
        "package": "misfortune",
        "partial": "Fortune Files",
        "signature": "Char-\u003eBool-\u003e[FilePath]-\u003e([FortuneFile]-\u003eIO a)-\u003eIO a"
      }
    }
  }
]