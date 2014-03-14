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
        "word": "FileManip"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions for traversing a filesystem\n hierarchy.  The \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e function generates a lazy list of matching\n files, while \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e performs a left fold.\n\u003c/p\u003e\u003cp\u003eBoth \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e allow fine control over recursion, using the\n \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e type.  This type is also used to pre-filter the results\n returned by \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e type lets you write filtering and recursion\n control expressions clearly and easily.\n\u003c/p\u003e\u003cp\u003eFor example, this clause matches C source files.\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \".c\" \u003ccode\u003e\u003ca\u003e||?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \".h\"\n\u003c/pre\u003e\u003cp\u003eBecause \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e is a monad, you can use the usual monad\n machinery to, for example, lift pure functions into it.\n\u003c/p\u003e\u003cp\u003eHere's a clause that will return \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e for any file whose\n directory name contains the word \u003ccode\u003e\"temp\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e\n (isInfixOf \"temp\") `liftM` \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.FilePath.Find",
          "name": "Find",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for traversing filesystem hierarchy The find function generates lazy list of matching files while fold performs left fold Both find and fold allow fine control over recursion using the FindClause type This type is also used to pre-filter the results returned by find The FindClause type lets you write filtering and recursion control expressions clearly and easily For example this clause matches source files extension extension Because FindClause is monad you can use the usual monad machinery to for example lift pure functions into it Here clause that will return False for any file whose directory name contains the word temp isInfixOf temp liftM directory",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "Find",
          "package": "FileManip",
          "partial": "Find",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation collected during the traversal of a directory.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "FileInfo",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "Information collected during the traversal of directory",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "FileInfo",
          "package": "FileManip",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "FileType",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "FileType",
          "package": "FileManip",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "FilterPredicate",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html#FilterPredicate",
          "type": "type"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "FilterPredicate",
          "package": "FileManip",
          "partial": "Filter Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#t:FilterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic container for file information, allowing for clean\n construction of combinators.  Wraps the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, but doesn't\n allow \u003ccode\u003eget\u003c/code\u003e or \u003ccode\u003eput\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "FindClause",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html#FindClause",
          "type": "data"
        },
        "index": {
          "description": "Monadic container for file information allowing for clean construction of combinators Wraps the State monad but doesn allow get or put",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "FindClause",
          "package": "FileManip",
          "partial": "Find Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#t:FindClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "RecursionPredicate",
          "package": "FileManip",
          "source": "src/System-FilePath-Find.html#RecursionPredicate",
          "type": "type"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "RecursionPredicate",
          "package": "FileManip",
          "partial": "Recursion Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#t:RecursionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(||?)",
          "package": "FileManip",
          "signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%7C%7C%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(||?) ||?",
          "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-124--124--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current file's name matches the given\n \u003ccode\u003e\u003ca\u003eGlobPattern\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "(~~?)",
          "package": "FileManip",
          "signature": "FindClause FilePath -\u003e GlobPattern -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#~~%3F",
          "type": "function"
        },
        "index": {
          "description": "Return True if the current file name matches the given GlobPattern",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(~~?) ~~?",
          "normalized": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-126--126--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(&&?)",
          "package": "FileManip",
          "signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%26%26%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(&&?) &&?",
          "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-38--38--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current file's name does not match the given\n \u003ccode\u003e\u003ca\u003eGlobPattern\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "(/~?)",
          "package": "FileManip",
          "signature": "FindClause FilePath -\u003e GlobPattern -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%2F~%3F",
          "type": "function"
        },
        "index": {
          "description": "Return True if the current file name does not match the given GlobPattern",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(/~?) /~?",
          "normalized": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause FilePath-\u003eGlobPattern-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-47--126--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(/=?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%2F%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(/=?) /=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-47--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(\u003c=?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%3C%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(\u003c=?) \u003c=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-60--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(\u003c?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%3C%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(\u003c?) \u003c?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(==?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%3D%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(==?) ==?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-61--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(\u003e=?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%3E%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(\u003e=?) \u003e=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-62--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "(\u003e?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#%3E%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(\u003e?) \u003e?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:-62--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator is useful to check if bits are set in a\n \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "(.&.?)",
          "package": "FileManip",
          "signature": "FindClause a -\u003e a -\u003e FindClause a",
          "source": "src/System-FilePath-Find.html#.%26.%3F",
          "type": "function"
        },
        "index": {
          "description": "This operator is useful to check if bits are set in FileMode",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "(.&.?) .&.?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause a",
          "package": "FileManip",
          "signature": "FindClause a-\u003ea-\u003eFindClause a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:.-38-.-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "BlockDevice",
          "package": "FileManip",
          "signature": "BlockDevice",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "BlockDevice",
          "package": "FileManip",
          "partial": "Block Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:BlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "CharacterDevice",
          "package": "FileManip",
          "signature": "CharacterDevice",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "CharacterDevice",
          "package": "FileManip",
          "partial": "Character Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:CharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "Directory",
          "package": "FileManip",
          "signature": "Directory",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "Directory",
          "package": "FileManip",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "FileInfo",
          "package": "FileManip",
          "signature": "FileInfo",
          "source": "src/System-FilePath-Find.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "FileInfo",
          "package": "FileManip",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "NamedPipe",
          "package": "FileManip",
          "signature": "NamedPipe",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "NamedPipe",
          "package": "FileManip",
          "partial": "Named Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "RegularFile",
          "package": "FileManip",
          "signature": "RegularFile",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "RegularFile",
          "package": "FileManip",
          "partial": "Regular File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:RegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "Socket",
          "package": "FileManip",
          "signature": "Socket",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "Socket",
          "package": "FileManip",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "SymbolicLink",
          "package": "FileManip",
          "signature": "SymbolicLink",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "SymbolicLink",
          "package": "FileManip",
          "partial": "Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:SymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "Unknown",
          "package": "FileManip",
          "signature": "Unknown",
          "source": "src/System-FilePath-Find.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "Unknown",
          "package": "FileManip",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "accessTime",
          "package": "FileManip",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-Find.html#accessTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "accessTime",
          "package": "FileManip",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:accessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditionally return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "always",
          "package": "FileManip",
          "signature": "FindClause Bool",
          "source": "src/System-FilePath-Find.html#always",
          "type": "function"
        },
        "index": {
          "description": "Unconditionally return True",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "always",
          "package": "FileManip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any of the given permission bits is set.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eanyPerms\u003c/a\u003e\u003c/code\u003e 0444\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "anyPerms",
          "package": "FileManip",
          "signature": "FileMode -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#anyPerms",
          "type": "function"
        },
        "index": {
          "description": "Return True if any of the given permission bits is set Example anyPerms",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "anyPerms",
          "normalized": "FileMode-\u003eFindClause Bool",
          "package": "FileManip",
          "partial": "Perms",
          "signature": "FileMode-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:anyPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given path exists, relative to the current\n file.  For example, if \u003ccode\u003e\"foo\"\u003c/code\u003e is being visited, and you call\n contains \u003ccode\u003e\"bar\"\u003c/code\u003e, this combinator will return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n \u003ccode\u003e\"foo/bar\"\u003c/code\u003e exists.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "contains",
          "package": "FileManip",
          "signature": "FilePath -\u003e FindClause Bool",
          "source": "src/System-FilePath-Find.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Return True if the given path exists relative to the current file For example if foo is being visited and you call contains bar this combinator will return True if foo bar exists",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "contains",
          "normalized": "FilePath-\u003eFindClause Bool",
          "package": "FileManip",
          "signature": "FilePath-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current recursion depth.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "depth",
          "package": "FileManip",
          "signature": "FindClause Int",
          "source": "src/System-FilePath-Find.html#depth",
          "type": "function"
        },
        "index": {
          "description": "Return the current recursion depth",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "depth",
          "package": "FileManip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "deviceID",
          "package": "FileManip",
          "signature": "FindClause DeviceID",
          "source": "src/System-FilePath-Find.html#deviceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "deviceID",
          "package": "FileManip",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:deviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the directory name, without the file name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"foo\"\n\u003c/pre\u003e\u003cp\u003eExample in a clause:\n\u003c/p\u003e\u003cpre\u003e\n let hasSuffix = \u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eisSuffixOf\u003c/code\u003e\n in directory `hasSuffix` \"tests\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "directory",
          "package": "FileManip",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-Find.html#directory",
          "type": "function"
        },
        "index": {
          "description": "Return the directory name without the file name What this means in practice directory foo bar.txt foo Example in clause let hasSuffix liftOp isSuffixOf in directory hasSuffix tests",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "directory",
          "package": "FileManip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e on the given \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e and return its\n result.  This can be useful if you are writing a function to pass\n to \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n myFoldFunc :: a -\u003e \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e -\u003e a\n myFoldFunc a i = let useThisFile = \u003ccode\u003e\u003ca\u003eevalClause\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"foo\") i\n                  in if useThisFile\n                     then fiddleWith a\n                     else a\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "evalClause",
          "package": "FileManip",
          "signature": "FindClause a -\u003e FileInfo -\u003e a",
          "source": "src/System-FilePath-Find.html#evalClause",
          "type": "function"
        },
        "index": {
          "description": "Run the given FindClause on the given FileInfo and return its result This can be useful if you are writing function to pass to fold Example myFoldFunc FileInfo myFoldFunc let useThisFile evalClause fileName foo in if useThisFile then fiddleWith else",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "evalClause",
          "normalized": "FindClause a-\u003eFileInfo-\u003ea",
          "package": "FileManip",
          "partial": "Clause",
          "signature": "FindClause a-\u003eFileInfo-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:evalClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the file name extension.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \".txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "extension",
          "package": "FileManip",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-Find.html#extension",
          "type": "function"
        },
        "index": {
          "description": "Return the file name extension Example extension foo bar.txt txt",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "extension",
          "package": "FileManip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "fileGroup",
          "package": "FileManip",
          "signature": "FindClause GroupID",
          "source": "src/System-FilePath-Find.html#fileGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileGroup",
          "package": "FileManip",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "fileID",
          "package": "FileManip",
          "signature": "FindClause FileID",
          "source": "src/System-FilePath-Find.html#fileID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileID",
          "package": "FileManip",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "fileInfo",
          "package": "FileManip",
          "signature": "FindClause FileInfo",
          "source": "src/System-FilePath-Find.html#fileInfo",
          "type": "function"
        },
        "index": {
          "description": "Return the current FileInfo",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileInfo",
          "package": "FileManip",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "fileMode",
          "package": "FileManip",
          "signature": "FindClause FileMode",
          "source": "src/System-FilePath-Find.html#fileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileMode",
          "package": "FileManip",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the file name, without the directory name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"bar.txt\"\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"init.c\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "fileName",
          "package": "FileManip",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-Find.html#fileName",
          "type": "function"
        },
        "index": {
          "description": "Return the file name without the directory name What this means in practice fileName foo bar.txt bar.txt Example fileName init.c",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileName",
          "package": "FileManip",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "fileOwner",
          "package": "FileManip",
          "signature": "FindClause UserID",
          "source": "src/System-FilePath-Find.html#fileOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileOwner",
          "package": "FileManip",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of the file being visited.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "filePath",
          "package": "FileManip",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-Find.html#filePath",
          "type": "function"
        },
        "index": {
          "description": "Return the name of the file being visited",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "filePath",
          "package": "FileManip",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the permission bits of the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "filePerms",
          "package": "FileManip",
          "signature": "FindClause FileMode",
          "source": "src/System-FilePath-Find.html#filePerms",
          "type": "function"
        },
        "index": {
          "description": "Return the permission bits of the FileMode",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "filePerms",
          "package": "FileManip",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:filePerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "fileSize",
          "package": "FileManip",
          "signature": "FindClause FileOffset",
          "source": "src/System-FilePath-Find.html#fileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileSize",
          "package": "FileManip",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e for the current file.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "fileStatus",
          "package": "FileManip",
          "signature": "FindClause FileStatus",
          "source": "src/System-FilePath-Find.html#fileStatus",
          "type": "function"
        },
        "index": {
          "description": "Return the FileStatus for the current file",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileStatus",
          "package": "FileManip",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the type of file currently being visited.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "fileType",
          "package": "FileManip",
          "signature": "FindClause FileType",
          "source": "src/System-FilePath-Find.html#fileType",
          "type": "function"
        },
        "index": {
          "description": "Return the type of file currently being visited Example fileType RegularFile",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fileType",
          "package": "FileManip",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "find",
          "package": "FileManip",
          "signature": "RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are ignored with warnings printed to stderr",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "find",
          "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FileManip",
          "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n dealt with by the given handler.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "findWithHandler",
          "package": "FileManip",
          "signature": "(FilePath -\u003e Exception -\u003e IO [FilePath])-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are dealt with by the given handler",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "findWithHandler",
          "normalized": "(FilePath-\u003eException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FileManip",
          "partial": "With Handler",
          "signature": "(FilePath-\u003eException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:findWithHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.  The fold\n function is run from \"left\" to \"right\", so it should be strict\n in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "fold",
          "package": "FileManip",
          "signature": "RecursionPredicate -\u003e (a -\u003e FileInfo -\u003e a) -\u003e a -\u003e FilePath -\u003e IO a",
          "source": "src/System-FilePath-Find.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are ignored with warnings printed to stderr The fold function is run from left to right so it should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "fold",
          "normalized": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "package": "FileManip",
          "signature": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are dealt with by the given handler.  The fold is strict, and\n run from \"left\" to \"right\", so the folded function should be\n strict in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "foldWithHandler",
          "package": "FileManip",
          "signature": "(FilePath -\u003e a -\u003e Exception -\u003e IO a)-\u003e RecursionPredicate-\u003e (a -\u003e FileInfo -\u003e a)-\u003e a-\u003e FilePath-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are dealt with by the given handler The fold is strict and run from left to right so the folded function should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "foldWithHandler",
          "normalized": "(FilePath-\u003ea-\u003eException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "package": "FileManip",
          "partial": "With Handler",
          "signature": "(FilePath-\u003ea-\u003eException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:foldWithHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the status\n of the ultimate endpoint of the link.  Otherwise (including in the\n case of an error), return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003estatusType\u003c/a\u003e\u003c/code\u003e `liftM` \u003ccode\u003e\u003ca\u003efollowStatus\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "System.FilePath.Find",
          "name": "followStatus",
          "package": "FileManip",
          "signature": "FindClause (Maybe FileStatus)",
          "source": "src/System-FilePath-Find.html#followStatus",
          "type": "function"
        },
        "index": {
          "description": "If the current file is symbolic link return Just the status of the ultimate endpoint of the link Otherwise including in the case of an error return Nothing Example statusType liftM followStatus RegularFile",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "followStatus",
          "package": "FileManip",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:followStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent recursion depth\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "infoDepth",
          "package": "FileManip",
          "signature": "Int",
          "source": "src/System-FilePath-Find.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "current recursion depth",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "infoDepth",
          "package": "FileManip",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:infoDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile path\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "infoPath",
          "package": "FileManip",
          "signature": "FilePath",
          "source": "src/System-FilePath-Find.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "file path",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "infoPath",
          "package": "FileManip",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:infoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus of file\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "infoStatus",
          "package": "FileManip",
          "signature": "FileStatus",
          "source": "src/System-FilePath-Find.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "status of file",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "infoStatus",
          "package": "FileManip",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:infoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary operator into the \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e monad, so that it\n becomes a combinator.  The left hand side of the combinator should\n be a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, while the right remains a normal value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "liftOp",
          "package": "FileManip",
          "signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e b -\u003e m c",
          "source": "src/System-FilePath-Find.html#liftOp",
          "type": "function"
        },
        "index": {
          "description": "Lift binary operator into the FindClause monad so that it becomes combinator The left hand side of the combinator should be FindClause while the right remains normal value of type",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "liftOp",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003eb-\u003ed c",
          "package": "FileManip",
          "partial": "Op",
          "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003eb-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:liftOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "linkCount",
          "package": "FileManip",
          "signature": "FindClause LinkCount",
          "source": "src/System-FilePath-Find.html#linkCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "linkCount",
          "package": "FileManip",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:linkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "modificationTime",
          "package": "FileManip",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-Find.html#modificationTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "modificationTime",
          "package": "FileManip",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:modificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the target\n of the link, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "readLink",
          "package": "FileManip",
          "signature": "FindClause (Maybe FilePath)",
          "source": "src/System-FilePath-Find.html#readLink",
          "type": "function"
        },
        "index": {
          "description": "If the current file is symbolic link return Just the target of the link otherwise Nothing",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "readLink",
          "package": "FileManip",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:readLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "specialDeviceID",
          "package": "FileManip",
          "signature": "FindClause DeviceID",
          "source": "src/System-FilePath-Find.html#specialDeviceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "specialDeviceID",
          "package": "FileManip",
          "partial": "Device ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:specialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Find",
          "name": "statusChangeTime",
          "package": "FileManip",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-Find.html#statusChangeTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "statusChangeTime",
          "package": "FileManip",
          "partial": "Change Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:statusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the type of a file.  This is much more useful for case\n analysis than the usual functions on \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "System.FilePath.Find",
          "name": "statusType",
          "package": "FileManip",
          "signature": "FileStatus -\u003e FileType",
          "source": "src/System-FilePath-Find.html#statusType",
          "type": "function"
        },
        "index": {
          "description": "Return the type of file This is much more useful for case analysis than the usual functions on FileStatus values",
          "hierarchy": "System FilePath Find",
          "module": "System.FilePath.Find",
          "name": "statusType",
          "normalized": "FileStatus-\u003eFileType",
          "package": "FileManip",
          "partial": "Type",
          "signature": "FileStatus-\u003eFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Find.html#v:statusType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Glob",
          "name": "Glob",
          "package": "FileManip",
          "source": "src/System-FilePath-Glob.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath Glob",
          "module": "System.FilePath.Glob",
          "name": "Glob",
          "package": "FileManip",
          "partial": "Glob",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Glob.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a list of names matching a glob pattern.  The list is\n generated lazily.\n\u003c/p\u003e",
          "module": "System.FilePath.Glob",
          "name": "namesMatching",
          "package": "FileManip",
          "signature": "String -\u003e IO [FilePath]",
          "source": "src/System-FilePath-Glob.html#namesMatching",
          "type": "function"
        },
        "index": {
          "description": "Return list of names matching glob pattern The list is generated lazily",
          "hierarchy": "System FilePath Glob",
          "module": "System.FilePath.Glob",
          "name": "namesMatching",
          "normalized": "String-\u003eIO[FilePath]",
          "package": "FileManip",
          "partial": "Matching",
          "signature": "String-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Glob.html#v:namesMatching"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.GlobPattern",
          "name": "GlobPattern",
          "package": "FileManip",
          "source": "src/System-FilePath-GlobPattern.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath GlobPattern",
          "module": "System.FilePath.GlobPattern",
          "name": "GlobPattern",
          "package": "FileManip",
          "partial": "Glob Pattern",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-GlobPattern.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGlob pattern type.\n\u003c/p\u003e",
          "module": "System.FilePath.GlobPattern",
          "name": "GlobPattern",
          "package": "FileManip",
          "source": "src/System-FilePath-GlobPattern.html#GlobPattern",
          "type": "type"
        },
        "index": {
          "description": "Glob pattern type",
          "hierarchy": "System FilePath GlobPattern",
          "module": "System.FilePath.GlobPattern",
          "name": "GlobPattern",
          "package": "FileManip",
          "partial": "Glob Pattern",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-GlobPattern.html#t:GlobPattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a file name against a glob pattern.\n\u003c/p\u003e",
          "module": "System.FilePath.GlobPattern",
          "name": "(~~)",
          "package": "FileManip",
          "signature": "FilePath -\u003e GlobPattern -\u003e Bool",
          "source": "src/System-FilePath-GlobPattern.html#~~",
          "type": "function"
        },
        "index": {
          "description": "Match file name against glob pattern",
          "hierarchy": "System FilePath GlobPattern",
          "module": "System.FilePath.GlobPattern",
          "name": "(~~) ~~",
          "normalized": "FilePath-\u003eGlobPattern-\u003eBool",
          "package": "FileManip",
          "signature": "FilePath-\u003eGlobPattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-GlobPattern.html#v:-126--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatch a file name against a glob pattern, but return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n the match \u003cem\u003efail\u003c/em\u003es.\n\u003c/p\u003e",
          "module": "System.FilePath.GlobPattern",
          "name": "(/~)",
          "package": "FileManip",
          "signature": "FilePath -\u003e GlobPattern -\u003e Bool",
          "source": "src/System-FilePath-GlobPattern.html#%2F~",
          "type": "function"
        },
        "index": {
          "description": "Match file name against glob pattern but return True if the match fail",
          "hierarchy": "System FilePath GlobPattern",
          "module": "System.FilePath.GlobPattern",
          "name": "(/~) /~",
          "normalized": "FilePath-\u003eGlobPattern-\u003eBool",
          "package": "FileManip",
          "signature": "FilePath-\u003eGlobPattern-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-GlobPattern.html#v:-47--126-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.Manip",
          "name": "Manip",
          "package": "FileManip",
          "source": "src/System-FilePath-Manip.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "Manip",
          "package": "FileManip",
          "partial": "Manip",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for string manipulation over files.\n\u003c/p\u003e",
          "module": "System.FilePath.Manip",
          "name": "Streamable",
          "package": "FileManip",
          "source": "src/System-FilePath-Manip.html#Streamable",
          "type": "class"
        },
        "index": {
          "description": "Type class for string manipulation over files",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "Streamable",
          "package": "FileManip",
          "partial": "Streamable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#t:Streamable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a file in place using the given function.  This is\n performed by writing to a temporary file, then renaming it on top of\n the existing file when done.\n\u003c/p\u003e",
          "module": "System.FilePath.Manip",
          "name": "modifyInPlace",
          "package": "FileManip",
          "signature": "(a -\u003e a)-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Modify file in place using the given function This is performed by writing to temporary file then renaming it on top of the existing file when done",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "modifyInPlace",
          "normalized": "(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "package": "FileManip",
          "partial": "In Place",
          "signature": "(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:modifyInPlace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a file in place using the given function.  The new content\n is written to a temporary file.  Once this is complete, the file\n manipulation action is called.  Its arguments are the names of the\n original and temporary files.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     \u003ccode\u003e\u003ca\u003emodifyInPlace\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003emodifyWith\u003c/a\u003e\u003c/code\u003e (flip rename)\n\u003c/pre\u003e",
          "module": "System.FilePath.Manip",
          "name": "modifyWith",
          "package": "FileManip",
          "signature": "(FilePath -\u003e FilePath -\u003e IO ())-\u003e (a -\u003e a)-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Modify file in place using the given function The new content is written to temporary file Once this is complete the file manipulation action is called Its arguments are the names of the original and temporary files Example modifyInPlace modifyWith flip rename",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "modifyWith",
          "normalized": "(FilePath-\u003eFilePath-\u003eIO())-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "package": "FileManip",
          "partial": "With",
          "signature": "(FilePath-\u003eFilePath-\u003eIO())-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:modifyWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a file in place using the given function.  The original\n copy of the file is saved under a new name.  This is performed by\n writing to a temporary file; renaming the original file to its new\n name; then renaming the temporary file to the original name.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n     -- save original file with a \".bak\" extension\n     \u003ccode\u003e\u003ca\u003emodifyWithBackup\u003c/a\u003e\u003c/code\u003e (\u003c.\u003e \"bak\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Manip",
          "name": "modifyWithBackup",
          "package": "FileManip",
          "signature": "(FilePath -\u003e FilePath)-\u003e (a -\u003e a)-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Modify file in place using the given function The original copy of the file is saved under new name This is performed by writing to temporary file renaming the original file to its new name then renaming the temporary file to the original name Example save original file with bak extension modifyWithBackup bak",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "modifyWithBackup",
          "normalized": "(FilePath-\u003eFilePath)-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "package": "FileManip",
          "partial": "With Backup",
          "signature": "(FilePath-\u003eFilePath)-\u003e(a-\u003ea)-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:modifyWithBackup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead the entire contents of a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Manip",
          "name": "readAll",
          "package": "FileManip",
          "signature": "Handle -\u003e IO a",
          "source": "src/System-FilePath-Manip.html#readAll",
          "type": "method"
        },
        "index": {
          "description": "Read the entire contents of Handle",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "readAll",
          "normalized": "Handle-\u003eIO a",
          "package": "FileManip",
          "partial": "All",
          "signature": "Handle-\u003eIO a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:readAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUse a renaming function to generate a new name for a file, then\n rename it.\n\u003c/p\u003e",
          "module": "System.FilePath.Manip",
          "name": "renameWith",
          "package": "FileManip",
          "signature": "(FilePath -\u003e FilePath)-\u003e FilePath-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Use renaming function to generate new name for file then rename it",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "renameWith",
          "normalized": "(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO()",
          "package": "FileManip",
          "partial": "With",
          "signature": "(FilePath-\u003eFilePath)-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:renameWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite an entire string to a \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Manip",
          "name": "writeAll",
          "package": "FileManip",
          "signature": "Handle -\u003e a -\u003e IO ()",
          "source": "src/System-FilePath-Manip.html#writeAll",
          "type": "method"
        },
        "index": {
          "description": "Write an entire string to Handle",
          "hierarchy": "System FilePath Manip",
          "module": "System.FilePath.Manip",
          "name": "writeAll",
          "normalized": "Handle-\u003ea-\u003eIO()",
          "package": "FileManip",
          "partial": "All",
          "signature": "Handle-\u003ea-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FileManip/docs/System-FilePath-Manip.html#v:writeAll"
      }
    }
  ]
]