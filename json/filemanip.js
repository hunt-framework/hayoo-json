[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for traversing a filesystem\n hierarchy.  The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function generates a lazy list of matching\n files, while \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e performs a left fold.\n\u003c/p\u003e\u003cp\u003eBoth \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e allow fine control over recursion, using the\n \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e type.  This type is also used to pre-filter the results\n returned by \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e type lets you write filtering and recursion\n control expressions clearly and easily.\n\u003c/p\u003e\u003cp\u003eFor example, this clause matches C source files.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \".c\" \u003ccode\u003e\u003ca\u003e||?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \".h\"\n\u003c/pre\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e is a monad, you can use the usual monad\n machinery to, for example, lift pure functions into it.\n\u003c/p\u003e\u003cp\u003eHere's a clause that will return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for any file whose\n directory name contains the word \u003ccode\u003e\"temp\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n (isInfixOf \"temp\") `liftM` \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-Find.html",
        "fct-type": "module",
        "title": "Find"
      },
      "index": {
        "description": "This module provides functions for traversing filesystem hierarchy The find function generates lazy list of matching files while fold performs left fold Both find and fold allow fine control over recursion using the FindClause type This type is also used to pre-filter the results returned by find The FindClause type lets you write filtering and recursion control expressions clearly and easily For example this clause matches source files extension extension Because FindClause is monad you can use the usual monad machinery to for example lift pure functions into it Here clause that will return False for any file whose directory name contains the word temp isInfixOf temp liftM directory",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "Find",
        "normalized": "",
        "package": "filemanip",
        "partial": "Find",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#t:FileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eInformation collected during the traversal of a directory.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Find.html#FileInfo",
        "fct-type": "data",
        "title": "FileInfo"
      },
      "index": {
        "description": "Information collected during the traversal of directory",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "FileInfo",
        "normalized": "",
        "package": "filemanip",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#t:FileType",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "data",
        "title": "FileType"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "FileType",
        "normalized": "",
        "package": "filemanip",
        "partial": "File Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#t:FilterPredicate",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "type",
        "fct-source": "src/System-FilePath-Find.html#FilterPredicate",
        "fct-type": "type",
        "title": "FilterPredicate"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "FilterPredicate",
        "normalized": "",
        "package": "filemanip",
        "partial": "Filter Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#t:FindClause",
      "description": {
        "fct-descr": "\u003cp\u003eMonadic container for file information, allowing for clean\n construction of combinators.  Wraps the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, but doesn't\n allow \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003eput\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "data",
        "fct-source": "src/System-FilePath-Find.html#FindClause",
        "fct-type": "data",
        "title": "FindClause"
      },
      "index": {
        "description": "Monadic container for file information allowing for clean construction of combinators Wraps the State monad but doesn allow get or put",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "FindClause",
        "normalized": "",
        "package": "filemanip",
        "partial": "Find Clause",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#t:RecursionPredicate",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "type",
        "fct-source": "src/System-FilePath-Find.html#RecursionPredicate",
        "fct-type": "type",
        "title": "RecursionPredicate"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "RecursionPredicate",
        "normalized": "",
        "package": "filemanip",
        "partial": "Recursion Predicate",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-124--124--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%7C%7C%3F",
        "fct-type": "function",
        "title": "(||?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(||?) ||?",
        "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-126--126--63-",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current file's name matches the given\n \u003ccode\u003e\u003ca\u003eGlobPattern\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath -\u003e GlobPattern -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#~~%3F",
        "fct-type": "function",
        "title": "(~~?)"
      },
      "index": {
        "description": "Return True if the current file name matches the given GlobPattern",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(~~?) ~~?",
        "normalized": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-38--38--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%26%26%3F",
        "fct-type": "function",
        "title": "(&&?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(&&?) &&?",
        "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-47--126--63-",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current file's name does not match the given\n \u003ccode\u003e\u003ca\u003eGlobPattern\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath -\u003e GlobPattern -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%2F~%3F",
        "fct-type": "function",
        "title": "(/~?)"
      },
      "index": {
        "description": "Return True if the current file name does not match the given GlobPattern",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(/~?) /~?",
        "normalized": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-47--61--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%2F%3D%3F",
        "fct-type": "function",
        "title": "(/=?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(/=?) /=?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-60--61--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%3C%3D%3F",
        "fct-type": "function",
        "title": "(\u003c=?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(\u003c=?) \u003c=?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-60--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%3C%3F",
        "fct-type": "function",
        "title": "(\u003c?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(\u003c?) \u003c?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-61--61--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%3D%3D%3F",
        "fct-type": "function",
        "title": "(==?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(==?) ==?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-62--61--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%3E%3D%3F",
        "fct-type": "function",
        "title": "(\u003e=?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(\u003e=?) \u003e=?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:-62--63-",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#%3E%3F",
        "fct-type": "function",
        "title": "(\u003e?)"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(\u003e?) \u003e?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:.-38-.-63-",
      "description": {
        "fct-descr": "\u003cp\u003eThis operator is useful to check if bits are set in a\n \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e a -\u003e FindClause a",
        "fct-source": "src/System-FilePath-Find.html#.%26.%3F",
        "fct-type": "function",
        "title": "(.&.?)"
      },
      "index": {
        "description": "This operator is useful to check if bits are set in FileMode",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "(.&.?) .&.?",
        "normalized": "FindClause a-\u003ea-\u003eFindClause a",
        "package": "filemanip",
        "partial": "",
        "signature": "FindClause a-\u003ea-\u003eFindClause a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:BlockDevice",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "BlockDevice",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "BlockDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "BlockDevice",
        "normalized": "",
        "package": "filemanip",
        "partial": "Block Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:CharacterDevice",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "CharacterDevice",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "CharacterDevice"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "CharacterDevice",
        "normalized": "",
        "package": "filemanip",
        "partial": "Character Device",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:Directory",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "Directory",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "Directory"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "Directory",
        "normalized": "",
        "package": "filemanip",
        "partial": "Directory",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:FileInfo",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FileInfo",
        "fct-source": "src/System-FilePath-Find.html#FileInfo",
        "fct-type": "function",
        "title": "FileInfo"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "FileInfo",
        "normalized": "",
        "package": "filemanip",
        "partial": "File Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:NamedPipe",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "NamedPipe",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "NamedPipe"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "NamedPipe",
        "normalized": "",
        "package": "filemanip",
        "partial": "Named Pipe",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:RegularFile",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "RegularFile",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "RegularFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "RegularFile",
        "normalized": "",
        "package": "filemanip",
        "partial": "Regular File",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:Socket",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "Socket",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "Socket"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "Socket",
        "normalized": "",
        "package": "filemanip",
        "partial": "Socket",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:SymbolicLink",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "SymbolicLink",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "SymbolicLink"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "SymbolicLink",
        "normalized": "",
        "package": "filemanip",
        "partial": "Symbolic Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:Unknown",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "Unknown",
        "fct-source": "src/System-FilePath-Find.html#FileType",
        "fct-type": "function",
        "title": "Unknown"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "Unknown",
        "normalized": "",
        "package": "filemanip",
        "partial": "Unknown",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:accessTime",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause EpochTime",
        "fct-source": "src/System-FilePath-Find.html#accessTime",
        "fct-type": "function",
        "title": "accessTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "accessTime",
        "normalized": "",
        "package": "filemanip",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:always",
      "description": {
        "fct-descr": "\u003cp\u003eUnconditionally return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#always",
        "fct-type": "function",
        "title": "always"
      },
      "index": {
        "description": "Unconditionally return True",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "always",
        "normalized": "",
        "package": "filemanip",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:anyPerms",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any of the given permission bits is set.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eanyPerms\u003c/a\u003e\u003c/code\u003e 0444\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FileMode -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#anyPerms",
        "fct-type": "function",
        "title": "anyPerms"
      },
      "index": {
        "description": "Return True if any of the given permission bits is set Example anyPerms",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "anyPerms",
        "normalized": "FileMode-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "Perms",
        "signature": "FileMode-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given path exists, relative to the current\n file.  For example, if \u003ccode\u003e\"foo\"\u003c/code\u003e is being visited, and you call\n contains \u003ccode\u003e\"bar\"\u003c/code\u003e, this combinator will return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n \u003ccode\u003e\"foo/bar\"\u003c/code\u003e exists.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FilePath -\u003e FindClause Bool",
        "fct-source": "src/System-FilePath-Find.html#contains",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Return True if the given path exists relative to the current file For example if foo is being visited and you call contains bar this combinator will return True if foo bar exists",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "contains",
        "normalized": "FilePath-\u003eFindClause Bool",
        "package": "filemanip",
        "partial": "",
        "signature": "FilePath-\u003eFindClause Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:depth",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current recursion depth.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause Int",
        "fct-source": "src/System-FilePath-Find.html#depth",
        "fct-type": "function",
        "title": "depth"
      },
      "index": {
        "description": "Return the current recursion depth",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "depth",
        "normalized": "",
        "package": "filemanip",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:deviceID",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause DeviceID",
        "fct-source": "src/System-FilePath-Find.html#deviceID",
        "fct-type": "function",
        "title": "deviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "deviceID",
        "normalized": "",
        "package": "filemanip",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:directory",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the directory name, without the file name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"foo\"\n\u003c/pre\u003e\u003cp\u003eExample in a clause:\n\u003c/p\u003e\u003cpre\u003e\n let hasSuffix = \u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eisSuffixOf\u003c/code\u003e\n in directory `hasSuffix` \"tests\"\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath",
        "fct-source": "src/System-FilePath-Find.html#directory",
        "fct-type": "function",
        "title": "directory"
      },
      "index": {
        "description": "Return the directory name without the file name What this means in practice directory foo bar.txt foo Example in clause let hasSuffix liftOp isSuffixOf in directory hasSuffix tests",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "directory",
        "normalized": "",
        "package": "filemanip",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:evalClause",
      "description": {
        "fct-descr": "\u003cp\u003eRun the given \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e on the given \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e and return its\n result.  This can be useful if you are writing a function to pass\n to \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n myFoldFunc :: a -\u003e \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e -\u003e a\n myFoldFunc a i = let useThisFile = \u003ccode\u003e\u003ca\u003eevalClause\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"foo\") i\n                  in if useThisFile\n                     then fiddleWith a\n                     else a\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause a -\u003e FileInfo -\u003e a",
        "fct-source": "src/System-FilePath-Find.html#evalClause",
        "fct-type": "function",
        "title": "evalClause"
      },
      "index": {
        "description": "Run the given FindClause on the given FileInfo and return its result This can be useful if you are writing function to pass to fold Example myFoldFunc FileInfo myFoldFunc let useThisFile evalClause fileName foo in if useThisFile then fiddleWith else",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "evalClause",
        "normalized": "FindClause a-\u003eFileInfo-\u003ea",
        "package": "filemanip",
        "partial": "Clause",
        "signature": "FindClause a-\u003eFileInfo-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:extension",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the file name extension.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \".txt\"\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath",
        "fct-source": "src/System-FilePath-Find.html#extension",
        "fct-type": "function",
        "title": "extension"
      },
      "index": {
        "description": "Return the file name extension Example extension foo bar.txt txt",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "extension",
        "normalized": "",
        "package": "filemanip",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileGroup",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause GroupID",
        "fct-source": "src/System-FilePath-Find.html#fileGroup",
        "fct-type": "function",
        "title": "fileGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileGroup",
        "normalized": "",
        "package": "filemanip",
        "partial": "Group",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileID",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileID",
        "fct-source": "src/System-FilePath-Find.html#fileID",
        "fct-type": "function",
        "title": "fileID"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileID",
        "normalized": "",
        "package": "filemanip",
        "partial": "ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileInfo",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileInfo",
        "fct-source": "src/System-FilePath-Find.html#fileInfo",
        "fct-type": "function",
        "title": "fileInfo"
      },
      "index": {
        "description": "Return the current FileInfo",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileInfo",
        "normalized": "",
        "package": "filemanip",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileMode",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileMode",
        "fct-source": "src/System-FilePath-Find.html#fileMode",
        "fct-type": "function",
        "title": "fileMode"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileMode",
        "normalized": "",
        "package": "filemanip",
        "partial": "Mode",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileName",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the file name, without the directory name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"bar.txt\"\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"init.c\"\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath",
        "fct-source": "src/System-FilePath-Find.html#fileName",
        "fct-type": "function",
        "title": "fileName"
      },
      "index": {
        "description": "Return the file name without the directory name What this means in practice fileName foo bar.txt bar.txt Example fileName init.c",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileName",
        "normalized": "",
        "package": "filemanip",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileOwner",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause UserID",
        "fct-source": "src/System-FilePath-Find.html#fileOwner",
        "fct-type": "function",
        "title": "fileOwner"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileOwner",
        "normalized": "",
        "package": "filemanip",
        "partial": "Owner",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:filePath",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the name of the file being visited.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FilePath",
        "fct-source": "src/System-FilePath-Find.html#filePath",
        "fct-type": "function",
        "title": "filePath"
      },
      "index": {
        "description": "Return the name of the file being visited",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "filePath",
        "normalized": "",
        "package": "filemanip",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:filePerms",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the permission bits of the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileMode",
        "fct-source": "src/System-FilePath-Find.html#filePerms",
        "fct-type": "function",
        "title": "filePerms"
      },
      "index": {
        "description": "Return the permission bits of the FileMode",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "filePerms",
        "normalized": "",
        "package": "filemanip",
        "partial": "Perms",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileSize",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileOffset",
        "fct-source": "src/System-FilePath-Find.html#fileSize",
        "fct-type": "function",
        "title": "fileSize"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileSize",
        "normalized": "",
        "package": "filemanip",
        "partial": "Size",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileStatus",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e for the current file.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileStatus",
        "fct-source": "src/System-FilePath-Find.html#fileStatus",
        "fct-type": "function",
        "title": "fileStatus"
      },
      "index": {
        "description": "Return the FileStatus for the current file",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileStatus",
        "normalized": "",
        "package": "filemanip",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fileType",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the type of file currently being visited.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause FileType",
        "fct-source": "src/System-FilePath-Find.html#fileType",
        "fct-type": "function",
        "title": "fileType"
      },
      "index": {
        "description": "Return the type of file currently being visited Example fileType RegularFile",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fileType",
        "normalized": "",
        "package": "filemanip",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:find",
      "description": {
        "fct-descr": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
        "fct-type": "function",
        "title": "find"
      },
      "index": {
        "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are ignored with warnings printed to stderr",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "find",
        "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
        "package": "filemanip",
        "partial": "",
        "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:findWithHandler",
      "description": {
        "fct-descr": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n dealt with by the given handler.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "(FilePath -\u003e IOException -\u003e IO [FilePath])-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
        "fct-type": "function",
        "title": "findWithHandler"
      },
      "index": {
        "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are dealt with by the given handler",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "findWithHandler",
        "normalized": "(FilePath-\u003eIOException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
        "package": "filemanip",
        "partial": "With Handler",
        "signature": "(FilePath-\u003eIOException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:fold",
      "description": {
        "fct-descr": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.  The fold\n function is run from \"left\" to \"right\", so it should be strict\n in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "RecursionPredicate -\u003e (a -\u003e FileInfo -\u003e a) -\u003e a -\u003e FilePath -\u003e IO a",
        "fct-source": "src/System-FilePath-Find.html#fold",
        "fct-type": "function",
        "title": "fold"
      },
      "index": {
        "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are ignored with warnings printed to stderr The fold function is run from left to right so it should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "fold",
        "normalized": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
        "package": "filemanip",
        "partial": "",
        "signature": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:foldWithHandler",
      "description": {
        "fct-descr": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are dealt with by the given handler.  The fold is strict, and\n run from \"left\" to \"right\", so the folded function should be\n strict in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "(FilePath -\u003e a -\u003e IOException -\u003e IO a)-\u003e RecursionPredicate-\u003e (a -\u003e FileInfo -\u003e a)-\u003e a-\u003e FilePath-\u003e IO a",
        "fct-type": "function",
        "title": "foldWithHandler"
      },
      "index": {
        "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are dealt with by the given handler The fold is strict and run from left to right so the folded function should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "foldWithHandler",
        "normalized": "(FilePath-\u003ea-\u003eIOException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
        "package": "filemanip",
        "partial": "With Handler",
        "signature": "(FilePath-\u003ea-\u003eIOException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:followStatus",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the status\n of the ultimate endpoint of the link.  Otherwise (including in the\n case of an error), return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003estatusType\u003c/a\u003e\u003c/code\u003e `liftM` \u003ccode\u003e\u003ca\u003efollowStatus\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause (Maybe FileStatus)",
        "fct-source": "src/System-FilePath-Find.html#followStatus",
        "fct-type": "function",
        "title": "followStatus"
      },
      "index": {
        "description": "If the current file is symbolic link return Just the status of the ultimate endpoint of the link Otherwise including in the case of an error return Nothing Example statusType liftM followStatus RegularFile",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "followStatus",
        "normalized": "",
        "package": "filemanip",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:infoDepth",
      "description": {
        "fct-descr": "\u003cp\u003ecurrent recursion depth\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "Int",
        "fct-source": "src/System-FilePath-Find.html#FileInfo",
        "fct-type": "function",
        "title": "infoDepth"
      },
      "index": {
        "description": "current recursion depth",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "infoDepth",
        "normalized": "",
        "package": "filemanip",
        "partial": "Depth",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:infoPath",
      "description": {
        "fct-descr": "\u003cp\u003efile path\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FilePath",
        "fct-source": "src/System-FilePath-Find.html#FileInfo",
        "fct-type": "function",
        "title": "infoPath"
      },
      "index": {
        "description": "file path",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "infoPath",
        "normalized": "",
        "package": "filemanip",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:infoStatus",
      "description": {
        "fct-descr": "\u003cp\u003estatus of file\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FileStatus",
        "fct-source": "src/System-FilePath-Find.html#FileInfo",
        "fct-type": "function",
        "title": "infoStatus"
      },
      "index": {
        "description": "status of file",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "infoStatus",
        "normalized": "",
        "package": "filemanip",
        "partial": "Status",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:liftOp",
      "description": {
        "fct-descr": "\u003cp\u003eLift a binary operator into the \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e monad, so that it\n becomes a combinator.  The left hand side of the combinator should\n be a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, while the right remains a normal value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e b -\u003e m c",
        "fct-source": "src/System-FilePath-Find.html#liftOp",
        "fct-type": "function",
        "title": "liftOp"
      },
      "index": {
        "description": "Lift binary operator into the FindClause monad so that it becomes combinator The left hand side of the combinator should be FindClause while the right remains normal value of type",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "liftOp",
        "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003eb-\u003ed c",
        "package": "filemanip",
        "partial": "Op",
        "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003eb-\u003em c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:linkCount",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause LinkCount",
        "fct-source": "src/System-FilePath-Find.html#linkCount",
        "fct-type": "function",
        "title": "linkCount"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "linkCount",
        "normalized": "",
        "package": "filemanip",
        "partial": "Count",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:modificationTime",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause EpochTime",
        "fct-source": "src/System-FilePath-Find.html#modificationTime",
        "fct-type": "function",
        "title": "modificationTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "modificationTime",
        "normalized": "",
        "package": "filemanip",
        "partial": "Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:readLink",
      "description": {
        "fct-descr": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the target\n of the link, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause (Maybe FilePath)",
        "fct-source": "src/System-FilePath-Find.html#readLink",
        "fct-type": "function",
        "title": "readLink"
      },
      "index": {
        "description": "If the current file is symbolic link return Just the target of the link otherwise Nothing",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "readLink",
        "normalized": "",
        "package": "filemanip",
        "partial": "Link",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:specialDeviceID",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause DeviceID",
        "fct-source": "src/System-FilePath-Find.html#specialDeviceID",
        "fct-type": "function",
        "title": "specialDeviceID"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "specialDeviceID",
        "normalized": "",
        "package": "filemanip",
        "partial": "Device ID",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:statusChangeTime",
      "description": {
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FindClause EpochTime",
        "fct-source": "src/System-FilePath-Find.html#statusChangeTime",
        "fct-type": "function",
        "title": "statusChangeTime"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "statusChangeTime",
        "normalized": "",
        "package": "filemanip",
        "partial": "Change Time",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Find.html#v:statusType",
      "description": {
        "fct-descr": "\u003cp\u003eReturn the type of a file.  This is much more useful for case\n analysis than the usual functions on \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Find",
        "fct-package": "filemanip",
        "fct-signature": "FileStatus -\u003e FileType",
        "fct-source": "src/System-FilePath-Find.html#statusType",
        "fct-type": "function",
        "title": "statusType"
      },
      "index": {
        "description": "Return the type of file This is much more useful for case analysis than the usual functions on FileStatus values",
        "hierarchy": "System FilePath Find",
        "module": "System.FilePath.Find",
        "name": "statusType",
        "normalized": "FileStatus-\u003eFileType",
        "package": "filemanip",
        "partial": "Type",
        "signature": "FileStatus-\u003eFileType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Glob.html#",
      "description": {
        "fct-module": "System.FilePath.Glob",
        "fct-package": "filemanip",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-Glob.html",
        "fct-type": "module",
        "title": "Glob"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "Glob",
        "normalized": "",
        "package": "filemanip",
        "partial": "Glob",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Glob.html#v:namesMatching",
      "description": {
        "fct-descr": "\u003cp\u003eReturn a list of names matching a glob pattern.  The list is\n generated lazily.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Glob",
        "fct-package": "filemanip",
        "fct-signature": "String -\u003e IO [FilePath]",
        "fct-source": "src/System-FilePath-Glob.html#namesMatching",
        "fct-type": "function",
        "title": "namesMatching"
      },
      "index": {
        "description": "Return list of names matching glob pattern The list is generated lazily",
        "hierarchy": "System FilePath Glob",
        "module": "System.FilePath.Glob",
        "name": "namesMatching",
        "normalized": "String-\u003eIO[FilePath]",
        "package": "filemanip",
        "partial": "Matching",
        "signature": "String-\u003eIO[FilePath]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-GlobPattern.html#",
      "description": {
        "fct-module": "System.FilePath.GlobPattern",
        "fct-package": "filemanip",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-GlobPattern.html",
        "fct-type": "module",
        "title": "GlobPattern"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath GlobPattern",
        "module": "System.FilePath.GlobPattern",
        "name": "GlobPattern",
        "normalized": "",
        "package": "filemanip",
        "partial": "Glob Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-GlobPattern.html#t:GlobPattern",
      "description": {
        "fct-descr": "\u003cp\u003eGlob pattern type.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.GlobPattern",
        "fct-package": "filemanip",
        "fct-signature": "type",
        "fct-source": "src/System-FilePath-GlobPattern.html#GlobPattern",
        "fct-type": "type",
        "title": "GlobPattern"
      },
      "index": {
        "description": "Glob pattern type",
        "hierarchy": "System FilePath GlobPattern",
        "module": "System.FilePath.GlobPattern",
        "name": "GlobPattern",
        "normalized": "",
        "package": "filemanip",
        "partial": "Glob Pattern",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-GlobPattern.html#v:-126--126-",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a file name against a glob pattern.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.GlobPattern",
        "fct-package": "filemanip",
        "fct-signature": "FilePath -\u003e GlobPattern -\u003e Bool",
        "fct-source": "src/System-FilePath-GlobPattern.html#~~",
        "fct-type": "function",
        "title": "(~~)"
      },
      "index": {
        "description": "Match file name against glob pattern",
        "hierarchy": "System FilePath GlobPattern",
        "module": "System.FilePath.GlobPattern",
        "name": "(~~) ~~",
        "normalized": "FilePath-\u003eGlobPattern-\u003eBool",
        "package": "filemanip",
        "partial": "",
        "signature": "FilePath-\u003eGlobPattern-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-GlobPattern.html#v:-47--126-",
      "description": {
        "fct-descr": "\u003cp\u003eMatch a file name against a glob pattern, but return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n the match \u003cem\u003efail\u003c/em\u003es.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.GlobPattern",
        "fct-package": "filemanip",
        "fct-signature": "FilePath -\u003e GlobPattern -\u003e Bool",
        "fct-source": "src/System-FilePath-GlobPattern.html#%2F~",
        "fct-type": "function",
        "title": "(/~)"
      },
      "index": {
        "description": "Match file name against glob pattern but return True if the match fail",
        "hierarchy": "System FilePath GlobPattern",
        "module": "System.FilePath.GlobPattern",
        "name": "(/~) /~",
        "normalized": "FilePath-\u003eGlobPattern-\u003eBool",
        "package": "filemanip",
        "partial": "",
        "signature": "FilePath-\u003eGlobPattern-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#",
      "description": {
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "module",
        "fct-source": "src/System-FilePath-Manip.html",
        "fct-type": "module",
        "title": "Manip"
      },
      "index": {
        "description": "",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "Manip",
        "normalized": "",
        "package": "filemanip",
        "partial": "Manip",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#t:Streamable",
      "description": {
        "fct-descr": "\u003cp\u003eType class for string manipulation over files.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "class",
        "fct-source": "src/System-FilePath-Manip.html#Streamable",
        "fct-type": "class",
        "title": "Streamable"
      },
      "index": {
        "description": "Type class for string manipulation over files",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "Streamable",
        "normalized": "",
        "package": "filemanip",
        "partial": "Streamable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:modifyInPlace",
      "description": {
        "fct-descr": "\u003cp\u003eModify a file in place using the given function.  This is\n performed by writing to a temporary file, then renaming it on top of\n the existing file when done.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "(a -\u003e a)-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "modifyInPlace"
      },
      "index": {
        "description": "Modify file in place using the given function This is performed by writing to temporary file then renaming it on top of the existing file when done",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "modifyInPlace",
        "normalized": "(a-\u003ea)-\u003eFilePath-\u003eIO()",
        "package": "filemanip",
        "partial": "In Place",
        "signature": "(a-\u003ea)-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:modifyWith",
      "description": {
        "fct-descr": "\u003cp\u003eModify a file in place using the given function.  The new content\n is written to a temporary file.  Once this is complete, the file\n manipulation action is called.  Its arguments are the names of the\n original and temporary files.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emodifyInPlace\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emodifyWith\u003c/a\u003e\u003c/code\u003e (flip rename)\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "(FilePath -\u003e FilePath -\u003e IO ())-\u003e (a -\u003e a)-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "modifyWith"
      },
      "index": {
        "description": "Modify file in place using the given function The new content is written to temporary file Once this is complete the file manipulation action is called Its arguments are the names of the original and temporary files Example modifyInPlace modifyWith flip rename",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "modifyWith",
        "normalized": "(FilePath-\u003eFilePath-\u003eIO())-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
        "package": "filemanip",
        "partial": "With",
        "signature": "(FilePath-\u003eFilePath-\u003eIO())-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:modifyWithBackup",
      "description": {
        "fct-descr": "\u003cp\u003eModify a file in place using the given function.  The original\n copy of the file is saved under a new name.  This is performed by\n writing to a temporary file; renaming the original file to its new\n name; then renaming the temporary file to the original name.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     -- save original file with a \".bak\" extension\n     \u003ccode\u003e\u003ca\u003emodifyWithBackup\u003c/a\u003e\u003c/code\u003e (\u003c.\u003e \"bak\")\n\u003c/pre\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "(FilePath -\u003e FilePath)-\u003e (a -\u003e a)-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "modifyWithBackup"
      },
      "index": {
        "description": "Modify file in place using the given function The original copy of the file is saved under new name This is performed by writing to temporary file renaming the original file to its new name then renaming the temporary file to the original name Example save original file with bak extension modifyWithBackup bak",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "modifyWithBackup",
        "normalized": "(FilePath-\u003eFilePath)-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
        "package": "filemanip",
        "partial": "With Backup",
        "signature": "(FilePath-\u003eFilePath)-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:readAll",
      "description": {
        "fct-descr": "\u003cp\u003eRead the entire contents of a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "Handle -\u003e IO a",
        "fct-source": "src/System-FilePath-Manip.html#readAll",
        "fct-type": "method",
        "title": "readAll"
      },
      "index": {
        "description": "Read the entire contents of Handle",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "readAll",
        "normalized": "Handle-\u003eIO a",
        "package": "filemanip",
        "partial": "All",
        "signature": "Handle-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:renameWith",
      "description": {
        "fct-descr": "\u003cp\u003eUse a renaming function to generate a new name for a file, then\n rename it.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "(FilePath -\u003e FilePath)-\u003e FilePath-\u003e IO ()",
        "fct-type": "function",
        "title": "renameWith"
      },
      "index": {
        "description": "Use renaming function to generate new name for file then rename it",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "renameWith",
        "normalized": "(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO()",
        "package": "filemanip",
        "partial": "With",
        "signature": "(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/filemanip/docs/System-FilePath-Manip.html#v:writeAll",
      "description": {
        "fct-descr": "\u003cp\u003eWrite an entire string to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "System.FilePath.Manip",
        "fct-package": "filemanip",
        "fct-signature": "Handle -\u003e a -\u003e IO ()",
        "fct-source": "src/System-FilePath-Manip.html#writeAll",
        "fct-type": "method",
        "title": "writeAll"
      },
      "index": {
        "description": "Write an entire string to Handle",
        "hierarchy": "System FilePath Manip",
        "module": "System.FilePath.Manip",
        "name": "writeAll",
        "normalized": "Handle-\u003ea-\u003eIO()",
        "package": "filemanip",
        "partial": "All",
        "signature": "Handle-\u003ea-\u003eIO()"
      }
    }
  }
]