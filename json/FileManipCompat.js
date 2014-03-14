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
        "word": "FileManipCompat"
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
          "module": "System.FilePath.FindCompat",
          "name": "FindCompat",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions for traversing filesystem hierarchy The find function generates lazy list of matching files while fold performs left fold Both find and fold allow fine control over recursion using the FindClause type This type is also used to pre-filter the results returned by find The FindClause type lets you write filtering and recursion control expressions clearly and easily For example this clause matches source files extension extension Because FindClause is monad you can use the usual monad machinery to for example lift pure functions into it Here clause that will return False for any file whose directory name contains the word temp isInfixOf temp liftM directory",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FindCompat",
          "package": "FileManipCompat",
          "partial": "Find Compat",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInformation collected during the traversal of a directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "FileInfo",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html#FileInfo",
          "type": "data"
        },
        "index": {
          "description": "Information collected during the traversal of directory",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FileInfo",
          "package": "FileManipCompat",
          "partial": "File Info",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#t:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "FileType",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "data"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FileType",
          "package": "FileManipCompat",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "FilterPredicate",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html#FilterPredicate",
          "type": "type"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FilterPredicate",
          "package": "FileManipCompat",
          "partial": "Filter Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#t:FilterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonadic container for file information, allowing for clean\n construction of combinators.  Wraps the \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e monad, but doesn't\n allow \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003eput\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "FindClause",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html#FindClause",
          "type": "data"
        },
        "index": {
          "description": "Monadic container for file information allowing for clean construction of combinators Wraps the State monad but doesn allow get or put",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FindClause",
          "package": "FileManipCompat",
          "partial": "Find Clause",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#t:FindClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "RecursionPredicate",
          "package": "FileManipCompat",
          "source": "src/System-FilePath-FindCompat.html#RecursionPredicate",
          "type": "type"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "RecursionPredicate",
          "package": "FileManipCompat",
          "partial": "Recursion Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#t:RecursionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(||?)",
          "package": "FileManipCompat",
          "signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%7C%7C%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(||?) ||?",
          "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-124--124--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(&&?)",
          "package": "FileManipCompat",
          "signature": "FindClause Bool -\u003e FindClause Bool -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%26%26%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(&&?) &&?",
          "normalized": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause Bool-\u003eFindClause Bool-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-38--38--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(/=?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%2F%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(/=?) /=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-47--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(\u003c=?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%3C%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(\u003c=?) \u003c=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-60--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(\u003c?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%3C%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(\u003c?) \u003c?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-60--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the current file's name matches the given\n \u003ccode\u003eGlobPattern\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "(==?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%3D%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Return True if the current file name matches the given GlobPattern",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(==?) ==?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-61--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(\u003e=?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%3E%3D%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(\u003e=?) \u003e=?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-62--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "(\u003e?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#%3E%3F",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(\u003e?) \u003e?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:-62--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis operator is useful to check if bits are set in a\n \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "(.&.?)",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e a -\u003e FindClause a",
          "source": "src/System-FilePath-FindCompat.html#.%26.%3F",
          "type": "function"
        },
        "index": {
          "description": "This operator is useful to check if bits are set in FileMode",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "(.&.?) .&.?",
          "normalized": "FindClause a-\u003ea-\u003eFindClause a",
          "package": "FileManipCompat",
          "signature": "FindClause a-\u003ea-\u003eFindClause a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:.-38-.-63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "BlockDevice",
          "package": "FileManipCompat",
          "signature": "BlockDevice",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "BlockDevice",
          "package": "FileManipCompat",
          "partial": "Block Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:BlockDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "CharacterDevice",
          "package": "FileManipCompat",
          "signature": "CharacterDevice",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "CharacterDevice",
          "package": "FileManipCompat",
          "partial": "Character Device",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:CharacterDevice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "Directory",
          "package": "FileManipCompat",
          "signature": "Directory",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "Directory",
          "package": "FileManipCompat",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "FileInfo",
          "package": "FileManipCompat",
          "signature": "FileInfo",
          "source": "src/System-FilePath-FindCompat.html#FileInfo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "FileInfo",
          "package": "FileManipCompat",
          "partial": "File Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:FileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "NamedPipe",
          "package": "FileManipCompat",
          "signature": "NamedPipe",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "NamedPipe",
          "package": "FileManipCompat",
          "partial": "Named Pipe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:NamedPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "RegularFile",
          "package": "FileManipCompat",
          "signature": "RegularFile",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "RegularFile",
          "package": "FileManipCompat",
          "partial": "Regular File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:RegularFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "Socket",
          "package": "FileManipCompat",
          "signature": "Socket",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "Socket",
          "package": "FileManipCompat",
          "partial": "Socket",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:Socket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "SymbolicLink",
          "package": "FileManipCompat",
          "signature": "SymbolicLink",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "SymbolicLink",
          "package": "FileManipCompat",
          "partial": "Symbolic Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:SymbolicLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "Unknown",
          "package": "FileManipCompat",
          "signature": "Unknown",
          "source": "src/System-FilePath-FindCompat.html#FileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "Unknown",
          "package": "FileManipCompat",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "accessTime",
          "package": "FileManipCompat",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-FindCompat.html#accessTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "accessTime",
          "package": "FileManipCompat",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:accessTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditionally return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "always",
          "package": "FileManipCompat",
          "signature": "FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#always",
          "type": "function"
        },
        "index": {
          "description": "Unconditionally return True",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "always",
          "package": "FileManipCompat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if any of the given permission bits is set.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eanyPerms\u003c/a\u003e\u003c/code\u003e 0444\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "anyPerms",
          "package": "FileManipCompat",
          "signature": "FileMode -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#anyPerms",
          "type": "function"
        },
        "index": {
          "description": "Return True if any of the given permission bits is set Example anyPerms",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "anyPerms",
          "normalized": "FileMode-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "partial": "Perms",
          "signature": "FileMode-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:anyPerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if the given path exists, relative to the current\n file.  For example, if \u003ccode\u003e\"foo\"\u003c/code\u003e is being visited, and you call\n contains \u003ccode\u003e\"bar\"\u003c/code\u003e, this combinator will return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if\n \u003ccode\u003e\"foo/bar\"\u003c/code\u003e exists.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "contains",
          "package": "FileManipCompat",
          "signature": "FilePath -\u003e FindClause Bool",
          "source": "src/System-FilePath-FindCompat.html#contains",
          "type": "function"
        },
        "index": {
          "description": "Return True if the given path exists relative to the current file For example if foo is being visited and you call contains bar this combinator will return True if foo bar exists",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "contains",
          "normalized": "FilePath-\u003eFindClause Bool",
          "package": "FileManipCompat",
          "signature": "FilePath-\u003eFindClause Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current recursion depth.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "depth",
          "package": "FileManipCompat",
          "signature": "FindClause Int",
          "source": "src/System-FilePath-FindCompat.html#depth",
          "type": "function"
        },
        "index": {
          "description": "Return the current recursion depth",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "depth",
          "package": "FileManipCompat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:depth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "deviceID",
          "package": "FileManipCompat",
          "signature": "FindClause DeviceID",
          "source": "src/System-FilePath-FindCompat.html#deviceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "deviceID",
          "package": "FileManipCompat",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:deviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the directory name, without the file name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003edirectory\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"foo\"\n\u003c/pre\u003e\u003cp\u003eExample in a clause:\n\u003c/p\u003e\u003cpre\u003e\n let hasSuffix = \u003ccode\u003e\u003ca\u003eliftOp\u003c/a\u003e\u003c/code\u003e \u003ccode\u003eisSuffixOf\u003c/code\u003e\n in directory `hasSuffix` \"tests\"\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "directory",
          "package": "FileManipCompat",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-FindCompat.html#directory",
          "type": "function"
        },
        "index": {
          "description": "Return the directory name without the file name What this means in practice directory foo bar.txt foo Example in clause let hasSuffix liftOp isSuffixOf in directory hasSuffix tests",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "directory",
          "package": "FileManipCompat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e on the given \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e and return its\n result.  This can be useful if you are writing a function to pass\n to \u003ccode\u003e\u003ca\u003efold\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n myFoldFunc :: a -\u003e \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e -\u003e a\n myFoldFunc a i = let useThisFile = \u003ccode\u003e\u003ca\u003eevalClause\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"foo\") i\n                  in if useThisFile\n                     then fiddleWith a\n                     else a\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "evalClause",
          "package": "FileManipCompat",
          "signature": "FindClause a -\u003e FileInfo -\u003e a",
          "source": "src/System-FilePath-FindCompat.html#evalClause",
          "type": "function"
        },
        "index": {
          "description": "Run the given FindClause on the given FileInfo and return its result This can be useful if you are writing function to pass to fold Example myFoldFunc FileInfo myFoldFunc let useThisFile evalClause fileName foo in if useThisFile then fiddleWith else",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "evalClause",
          "normalized": "FindClause a-\u003eFileInfo-\u003ea",
          "package": "FileManipCompat",
          "partial": "Clause",
          "signature": "FindClause a-\u003eFileInfo-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:evalClause"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the file name extension.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003eextension\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \".txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "extension",
          "package": "FileManipCompat",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-FindCompat.html#extension",
          "type": "function"
        },
        "index": {
          "description": "Return the file name extension Example extension foo bar.txt txt",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "extension",
          "package": "FileManipCompat",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "fileGroup",
          "package": "FileManipCompat",
          "signature": "FindClause GroupID",
          "source": "src/System-FilePath-FindCompat.html#fileGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileGroup",
          "package": "FileManipCompat",
          "partial": "Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "fileID",
          "package": "FileManipCompat",
          "signature": "FindClause FileID",
          "source": "src/System-FilePath-FindCompat.html#fileID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileID",
          "package": "FileManipCompat",
          "partial": "ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the current \u003ccode\u003e\u003ca\u003eFileInfo\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "fileInfo",
          "package": "FileManipCompat",
          "signature": "FindClause FileInfo",
          "source": "src/System-FilePath-FindCompat.html#fileInfo",
          "type": "function"
        },
        "index": {
          "description": "Return the current FileInfo",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileInfo",
          "package": "FileManipCompat",
          "partial": "Info",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileInfo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "fileMode",
          "package": "FileManipCompat",
          "signature": "FindClause FileMode",
          "source": "src/System-FilePath-FindCompat.html#fileMode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileMode",
          "package": "FileManipCompat",
          "partial": "Mode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the file name, without the directory name.\n\u003c/p\u003e\u003cp\u003eWhat this means in practice:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \"foo/bar.txt\" =\u003e \"bar.txt\"\n\u003c/pre\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileName\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \"init.c\"\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "fileName",
          "package": "FileManipCompat",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-FindCompat.html#fileName",
          "type": "function"
        },
        "index": {
          "description": "Return the file name without the directory name What this means in practice fileName foo bar.txt bar.txt Example fileName init.c",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileName",
          "package": "FileManipCompat",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "fileOwner",
          "package": "FileManipCompat",
          "signature": "FindClause UserID",
          "source": "src/System-FilePath-FindCompat.html#fileOwner",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileOwner",
          "package": "FileManipCompat",
          "partial": "Owner",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileOwner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the name of the file being visited.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "filePath",
          "package": "FileManipCompat",
          "signature": "FindClause FilePath",
          "source": "src/System-FilePath-FindCompat.html#filePath",
          "type": "function"
        },
        "index": {
          "description": "Return the name of the file being visited",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "filePath",
          "package": "FileManipCompat",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:filePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the permission bits of the \u003ccode\u003e\u003ca\u003eFileMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "filePerms",
          "package": "FileManipCompat",
          "signature": "FindClause FileMode",
          "source": "src/System-FilePath-FindCompat.html#filePerms",
          "type": "function"
        },
        "index": {
          "description": "Return the permission bits of the FileMode",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "filePerms",
          "package": "FileManipCompat",
          "partial": "Perms",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:filePerms"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "fileSize",
          "package": "FileManipCompat",
          "signature": "FindClause FileOffset",
          "source": "src/System-FilePath-FindCompat.html#fileSize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileSize",
          "package": "FileManipCompat",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e for the current file.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "fileStatus",
          "package": "FileManipCompat",
          "signature": "FindClause FileStatus",
          "source": "src/System-FilePath-FindCompat.html#fileStatus",
          "type": "function"
        },
        "index": {
          "description": "Return the FileStatus for the current file",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileStatus",
          "package": "FileManipCompat",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the type of file currently being visited.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003efileType\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "fileType",
          "package": "FileManipCompat",
          "signature": "FindClause FileType",
          "source": "src/System-FilePath-FindCompat.html#fileType",
          "type": "function"
        },
        "index": {
          "description": "Return the type of file currently being visited Example fileType RegularFile",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fileType",
          "package": "FileManipCompat",
          "partial": "Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "find",
          "package": "FileManipCompat",
          "signature": "RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are ignored with warnings printed to stderr",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "find",
          "normalized": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FileManipCompat",
          "signature": "RecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Lazily return a sorted list of all files\n matching the given \u003ccode\u003e\u003ca\u003eFilterPredicate\u003c/a\u003e\u003c/code\u003e.  Any errors that occur are\n dealt with by the given handler.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "findWithHandler",
          "package": "FileManipCompat",
          "signature": "(FilePath -\u003e SomeException -\u003e IO [FilePath])-\u003e RecursionPredicate-\u003e FilterPredicate-\u003e FilePath-\u003e IO [FilePath]",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Lazily return sorted list of all files matching the given FilterPredicate Any errors that occur are dealt with by the given handler",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "findWithHandler",
          "normalized": "(FilePath-\u003eSomeException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FileManipCompat",
          "partial": "With Handler",
          "signature": "(FilePath-\u003eSomeException-\u003eIO[FilePath])-\u003eRecursionPredicate-\u003eFilterPredicate-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:findWithHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are ignored, with warnings printed to \u003ccode\u003e\u003ca\u003estderr\u003c/a\u003e\u003c/code\u003e.  The fold\n function is run from \"left\" to \"right\", so it should be strict\n in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "fold",
          "package": "FileManipCompat",
          "signature": "RecursionPredicate -\u003e (a -\u003e FileInfo -\u003e a) -\u003e a -\u003e FilePath -\u003e IO a",
          "source": "src/System-FilePath-FindCompat.html#fold",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are ignored with warnings printed to stderr The fold function is run from left to right so it should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "fold",
          "normalized": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "package": "FileManipCompat",
          "signature": "RecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:fold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSearch a directory recursively, with recursion controlled by a\n \u003ccode\u003e\u003ca\u003eRecursionPredicate\u003c/a\u003e\u003c/code\u003e.  Fold over all files found.  Any errors that\n occur are dealt with by the given handler.  The fold is strict, and\n run from \"left\" to \"right\", so the folded function should be\n strict in its left argument to avoid space leaks.  If you need a\n right-to-left fold, use \u003ccode\u003e\u003ca\u003efoldr\u003c/a\u003e\u003c/code\u003e on the result of \u003ccode\u003e\u003ca\u003efindWithHandler\u003c/a\u003e\u003c/code\u003e\n instead.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "foldWithHandler",
          "package": "FileManipCompat",
          "signature": "(FilePath -\u003e a -\u003e SomeException -\u003e IO a)-\u003e RecursionPredicate-\u003e (a -\u003e FileInfo -\u003e a)-\u003e a-\u003e FilePath-\u003e IO a",
          "type": "function"
        },
        "index": {
          "description": "Search directory recursively with recursion controlled by RecursionPredicate Fold over all files found Any errors that occur are dealt with by the given handler The fold is strict and run from left to right so the folded function should be strict in its left argument to avoid space leaks If you need right-to-left fold use foldr on the result of findWithHandler instead",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "foldWithHandler",
          "normalized": "(FilePath-\u003ea-\u003eSomeException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "package": "FileManipCompat",
          "partial": "With Handler",
          "signature": "(FilePath-\u003ea-\u003eSomeException-\u003eIO a)-\u003eRecursionPredicate-\u003e(a-\u003eFileInfo-\u003ea)-\u003ea-\u003eFilePath-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:foldWithHandler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the status\n of the ultimate endpoint of the link.  Otherwise (including in the\n case of an error), return \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cpre\u003e\n \u003ccode\u003e\u003ca\u003estatusType\u003c/a\u003e\u003c/code\u003e `liftM` \u003ccode\u003e\u003ca\u003efollowStatus\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003e==?\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eRegularFile\u003c/a\u003e\u003c/code\u003e\n\u003c/pre\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "followStatus",
          "package": "FileManipCompat",
          "signature": "FindClause (Maybe FileStatus)",
          "source": "src/System-FilePath-FindCompat.html#followStatus",
          "type": "function"
        },
        "index": {
          "description": "If the current file is symbolic link return Just the status of the ultimate endpoint of the link Otherwise including in the case of an error return Nothing Example statusType liftM followStatus RegularFile",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "followStatus",
          "package": "FileManipCompat",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:followStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecurrent recursion depth\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "infoDepth",
          "package": "FileManipCompat",
          "signature": "Int",
          "source": "src/System-FilePath-FindCompat.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "current recursion depth",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "infoDepth",
          "package": "FileManipCompat",
          "partial": "Depth",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:infoDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003efile path\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "infoPath",
          "package": "FileManipCompat",
          "signature": "FilePath",
          "source": "src/System-FilePath-FindCompat.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "file path",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "infoPath",
          "package": "FileManipCompat",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:infoPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003estatus of file\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "infoStatus",
          "package": "FileManipCompat",
          "signature": "FileStatus",
          "source": "src/System-FilePath-FindCompat.html#FileInfo",
          "type": "function"
        },
        "index": {
          "description": "status of file",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "infoStatus",
          "package": "FileManipCompat",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:infoStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a binary operator into the \u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e monad, so that it\n becomes a combinator.  The left hand side of the combinator should\n be a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eFindClause\u003c/a\u003e\u003c/code\u003e a\u003c/code\u003e, while the right remains a normal value of\n type \u003ccode\u003ea\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "liftOp",
          "package": "FileManipCompat",
          "signature": "(a -\u003e b -\u003e c) -\u003e m a -\u003e b -\u003e m c",
          "source": "src/System-FilePath-FindCompat.html#liftOp",
          "type": "function"
        },
        "index": {
          "description": "Lift binary operator into the FindClause monad so that it becomes combinator The left hand side of the combinator should be FindClause while the right remains normal value of type",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "liftOp",
          "normalized": "(a-\u003eb-\u003ec)-\u003ed a-\u003eb-\u003ed c",
          "package": "FileManipCompat",
          "partial": "Op",
          "signature": "(a-\u003eb-\u003ec)-\u003em a-\u003eb-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:liftOp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "linkCount",
          "package": "FileManipCompat",
          "signature": "FindClause LinkCount",
          "source": "src/System-FilePath-FindCompat.html#linkCount",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "linkCount",
          "package": "FileManipCompat",
          "partial": "Count",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:linkCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "modificationTime",
          "package": "FileManipCompat",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-FindCompat.html#modificationTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "modificationTime",
          "package": "FileManipCompat",
          "partial": "Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:modificationTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the current file is a symbolic link, return \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e the target\n of the link, otherwise \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "readLink",
          "package": "FileManipCompat",
          "signature": "FindClause (Maybe FilePath)",
          "source": "src/System-FilePath-FindCompat.html#readLink",
          "type": "function"
        },
        "index": {
          "description": "If the current file is symbolic link return Just the target of the link otherwise Nothing",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "readLink",
          "package": "FileManipCompat",
          "partial": "Link",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:readLink"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "specialDeviceID",
          "package": "FileManipCompat",
          "signature": "FindClause DeviceID",
          "source": "src/System-FilePath-FindCompat.html#specialDeviceID",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "specialDeviceID",
          "package": "FileManipCompat",
          "partial": "Device ID",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:specialDeviceID"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FindCompat",
          "name": "statusChangeTime",
          "package": "FileManipCompat",
          "signature": "FindClause EpochTime",
          "source": "src/System-FilePath-FindCompat.html#statusChangeTime",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "statusChangeTime",
          "package": "FileManipCompat",
          "partial": "Change Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:statusChangeTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the type of a file.  This is much more useful for case\n analysis than the usual functions on \u003ccode\u003e\u003ca\u003eFileStatus\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "System.FilePath.FindCompat",
          "name": "statusType",
          "package": "FileManipCompat",
          "signature": "FileStatus -\u003e FileType",
          "source": "src/System-FilePath-FindCompat.html#statusType",
          "type": "function"
        },
        "index": {
          "description": "Return the type of file This is much more useful for case analysis than the usual functions on FileStatus values",
          "hierarchy": "System FilePath FindCompat",
          "module": "System.FilePath.FindCompat",
          "name": "statusType",
          "normalized": "FileStatus-\u003eFileType",
          "package": "FileManipCompat",
          "partial": "Type",
          "signature": "FileStatus-\u003eFileType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FileManipCompat/docs/System-FilePath-FindCompat.html#v:statusType"
      }
    }
  ]
]