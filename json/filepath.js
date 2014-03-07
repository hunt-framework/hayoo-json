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
        "word": "filepath"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for FilePath manipulations, using Posix style paths on\n all platforms. Importing \u003ca\u003eSystem.FilePath\u003c/a\u003e is usually better.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FilePath.Posix",
          "name": "Posix",
          "package": "filepath",
          "source": "src/System-FilePath-Posix.html",
          "type": "module"
        },
        "index": {
          "description": "library for FilePath manipulations using Posix style paths on all platforms Importing System.FilePath is usually better",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "Posix",
          "package": "filepath",
          "partial": "Posix",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.FilePath.Posix",
          "name": "FilePath",
          "package": "filepath",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "FilePath",
          "package": "filepath",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice alias for \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Posix",
          "name": "(\u003c/\u003e)",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "nice alias for combine",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e, for people who like that sort of thing.\n\u003c/p\u003e",
          "module": "System.FilePath.Posix",
          "name": "(\u003c.\u003e)",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Alias to addExtension for people who like that sort of thing",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an extension, even if there is already one there.\n   E.g. \u003ccode\u003eaddExtension \"foo.txt\" \"bat\" -\u003e \"foo.txt.bat\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e addExtension \"file.txt\" \"bib\" == \"file.txt.bib\"\n addExtension \"file.\" \".bib\" == \"file..bib\"\n addExtension \"file\" \".bib\" == \"file.bib\"\n addExtension \"/\" \"x\" == \"/.x\"\n Valid x =\u003e takeFileName (addExtension (addTrailingPathSeparator x) \"ext\") == \".ext\"\n Windows: addExtension \"\\\\\\\\share\" \".txt\" == \"\\\\\\\\share\\\\.txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "addExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#addExtension",
          "type": "function"
        },
        "index": {
          "description": "Add an extension even if there is already one there E.g addExtension foo.txt bat foo.txt.bat addExtension file.txt bib file.txt.bib addExtension file bib file..bib addExtension file bib file.bib addExtension Valid takeFileName addExtension addTrailingPathSeparator ext ext Windows addExtension share txt share txt",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "addExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:addExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a trailing file path separator if one is not already present.\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator (addTrailingPathSeparator x)\n hasTrailingPathSeparator x ==\u003e addTrailingPathSeparator x == x\n Posix:    addTrailingPathSeparator \"test/rest\" == \"test/rest/\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "addTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#addTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Add trailing file path separator if one is not already present hasTrailingPathSeparator addTrailingPathSeparator hasTrailingPathSeparator addTrailingPathSeparator Posix addTrailingPathSeparator test rest test rest",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "addTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:addTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two paths, if the second path \u003ccode\u003e\u003ca\u003eisAbsolute\u003c/a\u003e\u003c/code\u003e, then it returns the second.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e combine (takeDirectory x) (takeFileName x) `equalFilePath` x\n Posix:   combine \"/\" \"test\" == \"/test\"\n Posix:   combine \"home\" \"bob\" == \"home/bob\"\n Windows: combine \"home\" \"bob\" == \"home\\\\bob\"\n Windows: combine \"home\" \"/bob\" == \"/bob\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "combine",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two paths if the second path isAbsolute then it returns the second Valid combine takeDirectory takeFileName equalFilePath Posix combine test test Posix combine home bob home bob Windows combine home bob home bob Windows combine home bob bob",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "combine",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the drive, if it exists.\n\u003c/p\u003e\u003cpre\u003e dropDrive x == snd (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "dropDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#dropDrive",
          "type": "function"
        },
        "index": {
          "description": "Delete the drive if it exists dropDrive snd splitDrive",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "dropDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:dropDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove last extension, and the \".\" preceding it.\n\u003c/p\u003e\u003cpre\u003e dropExtension x == fst (splitExtension x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "dropExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#dropExtension",
          "type": "function"
        },
        "index": {
          "description": "Remove last extension and the preceding it dropExtension fst splitExtension",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "dropExtension",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:dropExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop all extensions\n\u003c/p\u003e\u003cpre\u003e not $ hasExtension (dropExtensions x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "dropExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#dropExtensions",
          "type": "function"
        },
        "index": {
          "description": "Drop all extensions not hasExtension dropExtensions",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "dropExtensions",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:dropExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the filename.\n\u003c/p\u003e\u003cpre\u003e dropFileName x == fst (splitFileName x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "dropFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#dropFileName",
          "type": "function"
        },
        "index": {
          "description": "Drop the filename dropFileName fst splitFileName",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "dropFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:dropFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove any trailing path separators\n\u003c/p\u003e\u003cpre\u003e dropTrailingPathSeparator \"file/test/\" == \"file/test\"\n Posix:    not (hasTrailingPathSeparator (dropTrailingPathSeparator x)) || isDrive x\n Posix:    dropTrailingPathSeparator \"/\" == \"/\"\n Windows:  dropTrailingPathSeparator \"\\\\\" == \"\\\\\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "dropTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#dropTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Remove any trailing path separators dropTrailingPathSeparator file test file test Posix not hasTrailingPathSeparator dropTrailingPathSeparator isDrive Posix dropTrailingPathSeparator Windows dropTrailingPathSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "dropTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:dropTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality of two \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n   If you call \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e\n   first this has a much better chance of working.\n   Note that this doesn't follow symlinks or DOSNAM~1s.\n\u003c/p\u003e\u003cpre\u003e          x == y ==\u003e equalFilePath x y\n          normalise x == normalise y ==\u003e equalFilePath x y\n Posix:   equalFilePath \"foo\" \"foo/\"\n Posix:   not (equalFilePath \"foo\" \"/foo\")\n Posix:   not (equalFilePath \"foo\" \"FOO\")\n Windows: equalFilePath \"foo\" \"FOO\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "equalFilePath",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#equalFilePath",
          "type": "function"
        },
        "index": {
          "description": "Equality of two FilePath If you call System.Directory.canonicalizePath first this has much better chance of working Note that this doesn follow symlinks or DOSNAM equalFilePath normalise normalise equalFilePath Posix equalFilePath foo foo Posix not equalFilePath foo foo Posix not equalFilePath foo FOO Windows equalFilePath foo FOO",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "equalFilePath",
          "normalized": "FilePath-\u003eFilePath-\u003eBool",
          "package": "filepath",
          "partial": "File Path",
          "signature": "FilePath-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:equalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extension character\n\u003c/p\u003e\u003cpre\u003e extSeparator == '.'\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "extSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Posix.html#extSeparator",
          "type": "function"
        },
        "index": {
          "description": "File extension character extSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "extSeparator",
          "package": "filepath",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:extSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of filepaths in the $PATH.\n\u003c/p\u003e",
          "module": "System.FilePath.Posix",
          "name": "getSearchPath",
          "package": "filepath",
          "signature": "IO [FilePath]",
          "source": "src/System-FilePath-Posix.html#getSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Get list of filepaths in the PATH",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "getSearchPath",
          "normalized": "IO[FilePath]",
          "package": "filepath",
          "partial": "Search Path",
          "signature": "IO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:getSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path have a drive.\n\u003c/p\u003e\u003cpre\u003e not (hasDrive x) == null (takeDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "hasDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#hasDrive",
          "type": "function"
        },
        "index": {
          "description": "Does path have drive not hasDrive null takeDrive",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "hasDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:hasDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given filename have an extension?\n\u003c/p\u003e\u003cpre\u003e null (takeExtension x) == not (hasExtension x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "hasExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#hasExtension",
          "type": "function"
        },
        "index": {
          "description": "Does the given filename have an extension null takeExtension not hasExtension",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "hasExtension",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:hasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an item either a directory or the last character a path separator?\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator \"test\" == False\n hasTrailingPathSeparator \"test/\" == True\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "hasTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#hasTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is an item either directory or the last character path separator hasTrailingPathSeparator test False hasTrailingPathSeparator test True",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "hasTrailingPathSeparator",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:hasTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enot . \u003ccode\u003e\u003ca\u003eisRelative\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cpre\u003e isAbsolute x == not (isRelative x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isAbsolute",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isAbsolute",
          "type": "function"
        },
        "index": {
          "description": "not isRelative isAbsolute not isRelative",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isAbsolute",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Absolute",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an element a drive\n\u003c/p\u003e",
          "module": "System.FilePath.Posix",
          "name": "isDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isDrive",
          "type": "function"
        },
        "index": {
          "description": "Is an element drive",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the character an extension character?\n\u003c/p\u003e\u003cpre\u003e isExtSeparator a == (a == extSeparator)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isExtSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isExtSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is the character an extension character isExtSeparator extSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isExtSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Ext Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isExtSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather than using \u003ccode\u003e(== \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, use this. Test if something\n   is a path separator.\n\u003c/p\u003e\u003cpre\u003e isPathSeparator a == (a `elem` pathSeparators)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isPathSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Rather than using pathSeparator use this Test if something is path separator isPathSeparator elem pathSeparators",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isPathSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Path Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a path relative, or is it fixed to the root?\n\u003c/p\u003e\u003cpre\u003e Windows: isRelative \"path\\\\test\" == True\n Windows: isRelative \"c:\\\\test\" == False\n Windows: isRelative \"c:test\" == True\n Windows: isRelative \"c:\" == True\n Windows: isRelative \"\\\\\\\\foo\" == False\n Windows: isRelative \"/foo\" == True\n Posix:   isRelative \"test/path\" == True\n Posix:   isRelative \"/test\" == False\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isRelative",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isRelative",
          "type": "function"
        },
        "index": {
          "description": "Is path relative or is it fixed to the root Windows isRelative path test True Windows isRelative test False Windows isRelative test True Windows isRelative True Windows isRelative foo False Windows isRelative foo True Posix isRelative test path True Posix isRelative test False",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isRelative",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Relative",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the character a file separator?\n\u003c/p\u003e\u003cpre\u003e isSearchPathSeparator a == (a == searchPathSeparator)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isSearchPathSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isSearchPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is the character file separator isSearchPathSeparator searchPathSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isSearchPathSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Search Path Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isSearchPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a FilePath valid, i.e. could you create a file like it?\n\u003c/p\u003e\u003cpre\u003e          isValid \"\" == False\n Posix:   isValid \"/random_ path:*\" == True\n Posix:   isValid x == not (null x)\n Windows: isValid \"c:\\\\test\" == True\n Windows: isValid \"c:\\\\test:of_test\" == False\n Windows: isValid \"test*\" == False\n Windows: isValid \"c:\\\\test\\\\nul\" == False\n Windows: isValid \"c:\\\\test\\\\prn.txt\" == False\n Windows: isValid \"c:\\\\nul\\\\file\" == False\n Windows: isValid \"\\\\\\\\\" == False\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "isValid",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Posix.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Is FilePath valid i.e could you create file like it isValid False Posix isValid random path True Posix isValid not null Windows isValid test True Windows isValid test of test False Windows isValid test False Windows isValid test nul False Windows isValid test prn.txt False Windows isValid nul file False Windows isValid False",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "isValid",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Valid",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a drive and the rest of the path.\n\u003c/p\u003e\u003cpre\u003e          uncurry joinDrive (splitDrive x) == x\n Windows: joinDrive \"C:\" \"foo\" == \"C:foo\"\n Windows: joinDrive \"C:\\\\\" \"bar\" == \"C:\\\\bar\"\n Windows: joinDrive \"\\\\\\\\share\" \"foo\" == \"\\\\\\\\share\\\\foo\"\n Windows: joinDrive \"/:\" \"foo\" == \"/:\\\\foo\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "joinDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#joinDrive",
          "type": "function"
        },
        "index": {
          "description": "Join drive and the rest of the path uncurry joinDrive splitDrive Windows joinDrive foo foo Windows joinDrive bar bar Windows joinDrive share foo share foo Windows joinDrive foo foo",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "joinDrive",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:joinDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin path elements back together.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e joinPath (splitPath x) == x\n joinPath [] == \"\"\n Posix: joinPath [\"test\",\"file\",\"path\"] == \"test/file/path\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "joinPath",
          "package": "filepath",
          "signature": "[FilePath] -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#joinPath",
          "type": "function"
        },
        "index": {
          "description": "Join path elements back together Valid joinPath splitPath joinPath Posix joinPath test file path test file path",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "joinPath",
          "normalized": "[FilePath]-\u003eFilePath",
          "package": "filepath",
          "partial": "Path",
          "signature": "[FilePath]-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:joinPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract a filename, based on a relative path.\n\u003c/p\u003e\u003cp\u003eThere is no corresponding \u003ccode\u003emakeAbsolute\u003c/code\u003e function, instead use\n   \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e which has the same effect.\n\u003c/p\u003e\u003cpre\u003e          Valid y =\u003e equalFilePath x y || (isRelative x && makeRelative y x == x) || equalFilePath (y \u003c/\u003e makeRelative y x) x\n          makeRelative x x == \".\"\n          null y || equalFilePath (makeRelative x (x \u003c/\u003e y)) y || null (takeFileName x)\n Windows: makeRelative \"C:\\\\Home\" \"c:\\\\home\\\\bob\" == \"bob\"\n Windows: makeRelative \"C:\\\\Home\" \"c:/home/bob\" == \"bob\"\n Windows: makeRelative \"C:\\\\Home\" \"D:\\\\Home\\\\Bob\" == \"D:\\\\Home\\\\Bob\"\n Windows: makeRelative \"C:\\\\Home\" \"C:Home\\\\Bob\" == \"C:Home\\\\Bob\"\n Windows: makeRelative \"/Home\" \"/home/bob\" == \"bob\"\n Posix:   makeRelative \"/Home\" \"/home/bob\" == \"/home/bob\"\n Posix:   makeRelative \"/home/\" \"/home/bob/foo/bar\" == \"bob/foo/bar\"\n Posix:   makeRelative \"/fred\" \"bob\" == \"bob\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred\" == \"fred\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred/\" == \"fred/\"\n Posix:   makeRelative \"some/path\" \"some/path/a/b/c\" == \"a/b/c\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "makeRelative",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#makeRelative",
          "type": "function"
        },
        "index": {
          "description": "Contract filename based on relative path There is no corresponding makeAbsolute function instead use System.Directory.canonicalizePath which has the same effect Valid equalFilePath isRelative makeRelative equalFilePath makeRelative makeRelative null equalFilePath makeRelative null takeFileName Windows makeRelative Home home bob bob Windows makeRelative Home home bob bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home home bob bob Posix makeRelative Home home bob home bob Posix makeRelative home home bob foo bar bob foo bar Posix makeRelative fred bob bob Posix makeRelative file test file test fred fred Posix makeRelative file test file test fred fred Posix makeRelative some path some path",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "makeRelative",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Relative",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:makeRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a FilePath and make it valid; does not change already valid FilePaths.\n\u003c/p\u003e\u003cpre\u003e isValid (makeValid x)\n isValid x ==\u003e makeValid x == x\n makeValid \"\" == \"_\"\n Windows: makeValid \"c:\\\\test:of_test\" == \"c:\\\\test_of_test\"\n Windows: makeValid \"test*\" == \"test_\"\n Windows: makeValid \"c:\\\\test\\\\nul\" == \"c:\\\\test\\\\nul_\"\n Windows: makeValid \"c:\\\\test\\\\prn.txt\" == \"c:\\\\test\\\\prn_.txt\"\n Windows: makeValid \"c:\\\\test/prn.txt\" == \"c:\\\\test/prn_.txt\"\n Windows: makeValid \"c:\\\\nul\\\\file\" == \"c:\\\\nul_\\\\file\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "makeValid",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#makeValid",
          "type": "function"
        },
        "index": {
          "description": "Take FilePath and make it valid does not change already valid FilePaths isValid makeValid isValid makeValid makeValid Windows makeValid test of test test of test Windows makeValid test test Windows makeValid test nul test nul Windows makeValid test prn.txt test prn txt Windows makeValid test prn.txt test prn txt Windows makeValid nul file nul file",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "makeValid",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Valid",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:makeValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a file\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e // outside of the drive can be made blank\n\u003c/li\u003e\u003cli\u003e / -\u003e \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e ./ -\u003e \"\"\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Posix:   normalise \"/file/\\\\test////\" == \"/file/\\\\test/\"\n Posix:   normalise \"/file/./test\" == \"/file/test\"\n Posix:   normalise \"/test/file/../bob/fred/\" == \"/test/file/../bob/fred/\"\n Posix:   normalise \"../bob/fred/\" == \"../bob/fred/\"\n Posix:   normalise \"./bob/fred/\" == \"bob/fred/\"\n Windows: normalise \"c:\\\\file/bob\\\\\" == \"C:\\\\file\\\\bob\\\\\"\n Windows: normalise \"c:\\\\\" == \"C:\\\\\"\n Windows: normalise \"\\\\\\\\server\\\\test\" == \"\\\\\\\\server\\\\test\"\n Windows: normalise \"c:/file\" == \"C:\\\\file\"\n          normalise \".\" == \".\"\n Posix:   normalise \"./\" == \"./\"\n Posix:   normalise \"./.\" == \"./\"\n Posix:   normalise \"/\" == \"/\"\n Posix:   normalise \"bob/fred/.\" == \"bob/fred/\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "normalise",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Normalise file outside of the drive can be made blank pathSeparator Posix normalise file test file test Posix normalise file test file test Posix normalise test file bob fred test file bob fred Posix normalise bob fred bob fred Posix normalise bob fred bob fred Windows normalise file bob file bob Windows normalise Windows normalise server test server test Windows normalise file file normalise Posix normalise Posix normalise Posix normalise Posix normalise bob fred bob fred",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "normalise",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character that separates directories. In the case where more than\n   one character is possible, \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e is the 'ideal' one.\n\u003c/p\u003e\u003cpre\u003e Windows: pathSeparator == '\\\\'\n Posix:   pathSeparator ==  '/'\n isPathSeparator pathSeparator\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "pathSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Posix.html#pathSeparator",
          "type": "function"
        },
        "index": {
          "description": "The character that separates directories In the case where more than one character is possible pathSeparator is the ideal one Windows pathSeparator Posix pathSeparator isPathSeparator pathSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "pathSeparator",
          "package": "filepath",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:pathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of all possible separators.\n\u003c/p\u003e\u003cpre\u003e Windows: pathSeparators == ['\\\\', '/']\n Posix:   pathSeparators == ['/']\n pathSeparator `elem` pathSeparators\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "pathSeparators",
          "package": "filepath",
          "signature": "[Char]",
          "source": "src/System-FilePath-Posix.html#pathSeparators",
          "type": "function"
        },
        "index": {
          "description": "The list of all possible separators Windows pathSeparators Posix pathSeparators pathSeparator elem pathSeparators",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "pathSeparators",
          "normalized": "[Char]",
          "package": "filepath",
          "partial": "Separators",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:pathSeparators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the base name.\n\u003c/p\u003e\u003cpre\u003e replaceBaseName \"file/test.txt\" \"bob\" == \"file/bob.txt\"\n replaceBaseName \"fred\" \"bill\" == \"bill\"\n replaceBaseName \"/dave/fred/bob.gz.tar\" \"new\" == \"/dave/fred/new.tar\"\n Valid x =\u003e replaceBaseName x (takeBaseName x) == x\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "replaceBaseName",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#replaceBaseName",
          "type": "function"
        },
        "index": {
          "description": "Set the base name replaceBaseName file test.txt bob file bob.txt replaceBaseName fred bill bill replaceBaseName dave fred bob.gz.tar new dave fred new.tar Valid replaceBaseName takeBaseName",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "replaceBaseName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:replaceBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the directory, keeping the filename the same.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e replaceDirectory x (takeDirectory x) `equalFilePath` x\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "replaceDirectory",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#replaceDirectory",
          "type": "function"
        },
        "index": {
          "description": "Set the directory keeping the filename the same Valid replaceDirectory takeDirectory equalFilePath",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "replaceDirectory",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Directory",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:replaceDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the extension of a file, overwriting one if already present.\n\u003c/p\u003e\u003cpre\u003e replaceExtension \"file.txt\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"bob\" == \"file.bob\"\n replaceExtension \"file\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"\" == \"file\"\n replaceExtension \"file.fred.bob\" \"txt\" == \"file.fred.txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "replaceExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#replaceExtension",
          "type": "function"
        },
        "index": {
          "description": "Set the extension of file overwriting one if already present replaceExtension file.txt bob file.bob replaceExtension file.txt bob file.bob replaceExtension file bob file.bob replaceExtension file.txt file replaceExtension file.fred.bob txt file.fred.txt",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "replaceExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:replaceExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the filename.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e replaceFileName x (takeFileName x) == x\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "replaceFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#replaceFileName",
          "type": "function"
        },
        "index": {
          "description": "Set the filename Valid replaceFileName takeFileName",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "replaceFileName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:replaceFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character that is used to separate the entries in the $PATH environment variable.\n\u003c/p\u003e\u003cpre\u003e Windows: searchPathSeparator == ';'\n Posix:   searchPathSeparator == ':'\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "searchPathSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Posix.html#searchPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "The character that is used to separate the entries in the PATH environment variable Windows searchPathSeparator Posix searchPathSeparator",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "searchPathSeparator",
          "package": "filepath",
          "partial": "Path Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:searchPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust as \u003ccode\u003e\u003ca\u003esplitPath\u003c/a\u003e\u003c/code\u003e, but don't add the trailing slashes to each element.\n\u003c/p\u003e\u003cpre\u003e splitDirectories \"test/file\" == [\"test\",\"file\"]\n splitDirectories \"/test/file\" == [\"/\",\"test\",\"file\"]\n Valid x =\u003e joinPath (splitDirectories x) `equalFilePath` x\n splitDirectories \"\" == []\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitDirectories",
          "package": "filepath",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-FilePath-Posix.html#splitDirectories",
          "type": "function"
        },
        "index": {
          "description": "Just as splitPath but don add the trailing slashes to each element splitDirectories test file test file splitDirectories test file test file Valid joinPath splitDirectories equalFilePath splitDirectories",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitDirectories",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Directories",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path into a drive and a path.\n   On Unix, / is a Drive.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitDrive x) == x\n Windows: splitDrive \"file\" == (\"\",\"file\")\n Windows: splitDrive \"c:/file\" == (\"c:/\",\"file\")\n Windows: splitDrive \"c:\\\\file\" == (\"c:\\\\\",\"file\")\n Windows: splitDrive \"\\\\\\\\shared\\\\test\" == (\"\\\\\\\\shared\\\\\",\"test\")\n Windows: splitDrive \"\\\\\\\\shared\" == (\"\\\\\\\\shared\",\"\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNC\\\\shared\\\\file\" == (\"\\\\\\\\?\\\\UNC\\\\shared\\\\\",\"file\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNCshared\\\\file\" == (\"\\\\\\\\?\\\\\",\"UNCshared\\\\file\")\n Windows: splitDrive \"\\\\\\\\?\\\\d:\\\\file\" == (\"\\\\\\\\?\\\\d:\\\\\",\"file\")\n Windows: splitDrive \"/d\" == (\"\",\"/d\")\n Posix:   splitDrive \"/test\" == (\"/\",\"test\")\n Posix:   splitDrive \"//test\" == (\"//\",\"test\")\n Posix:   splitDrive \"test/file\" == (\"\",\"test/file\")\n Posix:   splitDrive \"file\" == (\"\",\"file\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e (FilePath, FilePath)",
          "source": "src/System-FilePath-Posix.html#splitDrive",
          "type": "function"
        },
        "index": {
          "description": "Split path into drive and path On Unix is Drive uncurry splitDrive Windows splitDrive file file Windows splitDrive file file Windows splitDrive file file Windows splitDrive shared test shared test Windows splitDrive shared shared Windows splitDrive UNC shared file UNC shared file Windows splitDrive UNCshared file UNCshared file Windows splitDrive file file Windows splitDrive Posix splitDrive test test Posix splitDrive test test Posix splitDrive test file test file Posix splitDrive file file",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitDrive",
          "normalized": "FilePath-\u003e(FilePath,FilePath)",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003e(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on the extension. \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitExtension x) == x\n uncurry addExtension (splitExtension x) == x\n splitExtension \"file.txt\" == (\"file\",\".txt\")\n splitExtension \"file\" == (\"file\",\"\")\n splitExtension \"file/file.txt\" == (\"file/file\",\".txt\")\n splitExtension \"file.txt/boris\" == (\"file.txt/boris\",\"\")\n splitExtension \"file.txt/boris.ext\" == (\"file.txt/boris\",\".ext\")\n splitExtension \"file/path.txt.bob.fred\" == (\"file/path.txt.bob\",\".fred\")\n splitExtension \"file/path.txt/\" == (\"file/path.txt/\",\"\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-FilePath-Posix.html#splitExtension",
          "type": "function"
        },
        "index": {
          "description": "Split on the extension addExtension is the inverse uncurry splitExtension uncurry addExtension splitExtension splitExtension file.txt file txt splitExtension file file splitExtension file file.txt file file txt splitExtension file.txt boris file.txt boris splitExtension file.txt boris.ext file.txt boris ext splitExtension file path.txt.bob.fred file path.txt.bob fred splitExtension file path.txt file path.txt",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitExtension",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on all extensions\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitExtensions x) == x\n uncurry addExtension (splitExtensions x) == x\n splitExtensions \"file.tar.gz\" == (\"file\",\".tar.gz\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e (FilePath, String)",
          "source": "src/System-FilePath-Posix.html#splitExtensions",
          "type": "function"
        },
        "index": {
          "description": "Split on all extensions uncurry splitExtensions uncurry addExtension splitExtensions splitExtensions file.tar.gz file tar.gz",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitExtensions",
          "normalized": "FilePath-\u003e(FilePath,String)",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003e(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a filename into directory and file. \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e uncurry (\u003c/\u003e) (splitFileName x) == x || fst (splitFileName x) == \"./\"\n Valid x =\u003e isValid (fst (splitFileName x))\n splitFileName \"file/bob.txt\" == (\"file/\", \"bob.txt\")\n splitFileName \"file/\" == (\"file/\", \"\")\n splitFileName \"bob\" == (\"./\", \"bob\")\n Posix:   splitFileName \"/\" == (\"/\",\"\")\n Windows: splitFileName \"c:\" == (\"c:\",\"\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-FilePath-Posix.html#splitFileName",
          "type": "function"
        },
        "index": {
          "description": "Split filename into directory and file combine is the inverse Valid uncurry splitFileName fst splitFileName Valid isValid fst splitFileName splitFileName file bob.txt file bob.txt splitFileName file file splitFileName bob bob Posix splitFileName Windows splitFileName",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitFileName",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path by the directory separator.\n\u003c/p\u003e\u003cpre\u003e concat (splitPath x) == x\n splitPath \"test//item/\" == [\"test//\",\"item/\"]\n splitPath \"test/item/file\" == [\"test/\",\"item/\",\"file\"]\n splitPath \"\" == []\n Windows: splitPath \"c:\\\\test\\\\path\" == [\"c:\\\\\",\"test\\\\\",\"path\"]\n Posix:   splitPath \"/file/test\" == [\"/\",\"file/\",\"test\"]\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitPath",
          "package": "filepath",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-FilePath-Posix.html#splitPath",
          "type": "function"
        },
        "index": {
          "description": "Split path by the directory separator concat splitPath splitPath test item test item splitPath test item file test item file splitPath Windows splitPath test path test path Posix splitPath file test file test",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitPath",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Path",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a string, split it on the \u003ccode\u003e\u003ca\u003esearchPathSeparator\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e\u003cp\u003eFollows the recommendations in\n   \u003ca\u003ehttp://www.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap08.html\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e Posix:   splitSearchPath \"File1:File2:File3\"  == [\"File1\",\"File2\",\"File3\"]\n Posix:   splitSearchPath \"File1::File2:File3\" == [\"File1\",\".\",\"File2\",\"File3\"]\n Windows: splitSearchPath \"File1;File2;File3\"  == [\"File1\",\"File2\",\"File3\"]\n Windows: splitSearchPath \"File1;;File2;File3\" == [\"File1\",\"File2\",\"File3\"]\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "splitSearchPath",
          "package": "filepath",
          "signature": "String -\u003e [FilePath]",
          "source": "src/System-FilePath-Posix.html#splitSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Take string split it on the searchPathSeparator character Follows the recommendations in http www.opengroup.org onlinepubs basedefs xbd chap08.html Posix splitSearchPath File1 File2 File3 File1 File2 File3 Posix splitSearchPath File1 File2 File3 File1 File2 File3 Windows splitSearchPath File1 File2 File3 File1 File2 File3 Windows splitSearchPath File1 File2 File3 File1 File2 File3",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "splitSearchPath",
          "normalized": "String-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Search Path",
          "signature": "String-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:splitSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the base name, without an extension or path.\n\u003c/p\u003e\u003cpre\u003e takeBaseName \"file/test.txt\" == \"test\"\n takeBaseName \"dave.ext\" == \"dave\"\n takeBaseName \"\" == \"\"\n takeBaseName \"test\" == \"test\"\n takeBaseName (addTrailingPathSeparator x) == \"\"\n takeBaseName \"file/file.tar.gz\" == \"file.tar\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeBaseName",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Posix.html#takeBaseName",
          "type": "function"
        },
        "index": {
          "description": "Get the base name without an extension or path takeBaseName file test.txt test takeBaseName dave.ext dave takeBaseName takeBaseName test test takeBaseName addTrailingPathSeparator takeBaseName file file.tar.gz file.tar",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeBaseName",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory name, move up one level.\n\u003c/p\u003e\u003cpre\u003e           takeDirectory x `isPrefixOf` x || takeDirectory x == \".\"\n           takeDirectory \"foo\" == \".\"\n           takeDirectory \"/foo/bar/baz\" == \"/foo/bar\"\n           takeDirectory \"/foo/bar/baz/\" == \"/foo/bar/baz\"\n           takeDirectory \"foo/bar/baz\" == \"foo/bar\"\n Windows:  takeDirectory \"foo\\\\bar\" == \"foo\"\n Windows:  takeDirectory \"foo\\\\bar\\\\\\\\\" == \"foo\\\\bar\"\n Windows:  takeDirectory \"C:\\\\\" == \"C:\\\\\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeDirectory",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#takeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the directory name move up one level takeDirectory isPrefixOf takeDirectory takeDirectory foo takeDirectory foo bar baz foo bar takeDirectory foo bar baz foo bar baz takeDirectory foo bar baz foo bar Windows takeDirectory foo bar foo Windows takeDirectory foo bar foo bar Windows takeDirectory",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeDirectory",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the drive from a filepath.\n\u003c/p\u003e\u003cpre\u003e takeDrive x == fst (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#takeDrive",
          "type": "function"
        },
        "index": {
          "description": "Get the drive from filepath takeDrive fst splitDrive",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the extension of a file, returns \u003ccode\u003e\"\"\u003c/code\u003e for no extension, \u003ccode\u003e.ext\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cpre\u003e takeExtension x == snd (splitExtension x)\n Valid x =\u003e takeExtension (addExtension x \"ext\") == \".ext\"\n Valid x =\u003e takeExtension (replaceExtension x \"ext\") == \".ext\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Posix.html#takeExtension",
          "type": "function"
        },
        "index": {
          "description": "Get the extension of file returns for no extension ext otherwise takeExtension snd splitExtension Valid takeExtension addExtension ext ext Valid takeExtension replaceExtension ext ext",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeExtension",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all extensions\n\u003c/p\u003e\u003cpre\u003e takeExtensions \"file.tar.gz\" == \".tar.gz\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Posix.html#takeExtensions",
          "type": "function"
        },
        "index": {
          "description": "Get all extensions takeExtensions file.tar.gz tar.gz",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeExtensions",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file name.\n\u003c/p\u003e\u003cpre\u003e takeFileName \"test/\" == \"\"\n takeFileName x `isSuffixOf` x\n takeFileName x == snd (splitFileName x)\n Valid x =\u003e takeFileName (replaceFileName x \"fred\") == \"fred\"\n Valid x =\u003e takeFileName (x \u003c/\u003e \"fred\") == \"fred\"\n Valid x =\u003e isRelative (takeFileName x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Posix",
          "name": "takeFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Posix.html#takeFileName",
          "type": "function"
        },
        "index": {
          "description": "Get the file name takeFileName test takeFileName isSuffixOf takeFileName snd splitFileName Valid takeFileName replaceFileName fred fred Valid takeFileName fred fred Valid isRelative takeFileName",
          "hierarchy": "System FilePath Posix",
          "module": "System.FilePath.Posix",
          "name": "takeFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Posix.html#v:takeFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for FilePath manipulations, using Windows style paths on\n all platforms. Importing \u003ca\u003eSystem.FilePath\u003c/a\u003e is usually better.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FilePath.Windows",
          "name": "Windows",
          "package": "filepath",
          "source": "src/System-FilePath-Windows.html",
          "type": "module"
        },
        "index": {
          "description": "library for FilePath manipulations using Windows style paths on all platforms Importing System.FilePath is usually better",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "Windows",
          "package": "filepath",
          "partial": "Windows",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile and directory names are values of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, whose precise\n meaning is operating system dependent. Files can be opened, yielding a\n handle which can then be used to operate on the contents of that file.\n\u003c/p\u003e",
          "module": "System.FilePath.Windows",
          "name": "FilePath",
          "package": "filepath",
          "type": "type"
        },
        "index": {
          "description": "File and directory names are values of type String whose precise meaning is operating system dependent Files can be opened yielding handle which can then be used to operate on the contents of that file",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "FilePath",
          "package": "filepath",
          "partial": "File Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#t:FilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA nice alias for \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "System.FilePath.Windows",
          "name": "(\u003c/\u003e)",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#%3C%2F%3E",
          "type": "function"
        },
        "index": {
          "description": "nice alias for combine",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "(\u003c/\u003e) \u003c/\u003e",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:-60--47--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias to \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e, for people who like that sort of thing.\n\u003c/p\u003e",
          "module": "System.FilePath.Windows",
          "name": "(\u003c.\u003e)",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#%3C.%3E",
          "type": "function"
        },
        "index": {
          "description": "Alias to addExtension for people who like that sort of thing",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "(\u003c.\u003e) \u003c.\u003e",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:-60-.-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an extension, even if there is already one there.\n   E.g. \u003ccode\u003eaddExtension \"foo.txt\" \"bat\" -\u003e \"foo.txt.bat\"\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e addExtension \"file.txt\" \"bib\" == \"file.txt.bib\"\n addExtension \"file.\" \".bib\" == \"file..bib\"\n addExtension \"file\" \".bib\" == \"file.bib\"\n addExtension \"/\" \"x\" == \"/.x\"\n Valid x =\u003e takeFileName (addExtension (addTrailingPathSeparator x) \"ext\") == \".ext\"\n Windows: addExtension \"\\\\\\\\share\" \".txt\" == \"\\\\\\\\share\\\\.txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "addExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#addExtension",
          "type": "function"
        },
        "index": {
          "description": "Add an extension even if there is already one there E.g addExtension foo.txt bat foo.txt.bat addExtension file.txt bib file.txt.bib addExtension file bib file..bib addExtension file bib file.bib addExtension Valid takeFileName addExtension addTrailingPathSeparator ext ext Windows addExtension share txt share txt",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "addExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:addExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a trailing file path separator if one is not already present.\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator (addTrailingPathSeparator x)\n hasTrailingPathSeparator x ==\u003e addTrailingPathSeparator x == x\n Posix:    addTrailingPathSeparator \"test/rest\" == \"test/rest/\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "addTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#addTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Add trailing file path separator if one is not already present hasTrailingPathSeparator addTrailingPathSeparator hasTrailingPathSeparator addTrailingPathSeparator Posix addTrailingPathSeparator test rest test rest",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "addTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:addTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombine two paths, if the second path \u003ccode\u003e\u003ca\u003eisAbsolute\u003c/a\u003e\u003c/code\u003e, then it returns the second.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e combine (takeDirectory x) (takeFileName x) `equalFilePath` x\n Posix:   combine \"/\" \"test\" == \"/test\"\n Posix:   combine \"home\" \"bob\" == \"home/bob\"\n Windows: combine \"home\" \"bob\" == \"home\\\\bob\"\n Windows: combine \"home\" \"/bob\" == \"/bob\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "combine",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#combine",
          "type": "function"
        },
        "index": {
          "description": "Combine two paths if the second path isAbsolute then it returns the second Valid combine takeDirectory takeFileName equalFilePath Posix combine test test Posix combine home bob home bob Windows combine home bob home bob Windows combine home bob bob",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "combine",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:combine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete the drive, if it exists.\n\u003c/p\u003e\u003cpre\u003e dropDrive x == snd (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "dropDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#dropDrive",
          "type": "function"
        },
        "index": {
          "description": "Delete the drive if it exists dropDrive snd splitDrive",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "dropDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:dropDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove last extension, and the \".\" preceding it.\n\u003c/p\u003e\u003cpre\u003e dropExtension x == fst (splitExtension x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "dropExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#dropExtension",
          "type": "function"
        },
        "index": {
          "description": "Remove last extension and the preceding it dropExtension fst splitExtension",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "dropExtension",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:dropExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop all extensions\n\u003c/p\u003e\u003cpre\u003e not $ hasExtension (dropExtensions x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "dropExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#dropExtensions",
          "type": "function"
        },
        "index": {
          "description": "Drop all extensions not hasExtension dropExtensions",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "dropExtensions",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:dropExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDrop the filename.\n\u003c/p\u003e\u003cpre\u003e dropFileName x == fst (splitFileName x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "dropFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#dropFileName",
          "type": "function"
        },
        "index": {
          "description": "Drop the filename dropFileName fst splitFileName",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "dropFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:dropFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove any trailing path separators\n\u003c/p\u003e\u003cpre\u003e dropTrailingPathSeparator \"file/test/\" == \"file/test\"\n Posix:    not (hasTrailingPathSeparator (dropTrailingPathSeparator x)) || isDrive x\n Posix:    dropTrailingPathSeparator \"/\" == \"/\"\n Windows:  dropTrailingPathSeparator \"\\\\\" == \"\\\\\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "dropTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#dropTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Remove any trailing path separators dropTrailingPathSeparator file test file test Posix not hasTrailingPathSeparator dropTrailingPathSeparator isDrive Posix dropTrailingPathSeparator Windows dropTrailingPathSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "dropTrailingPathSeparator",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:dropTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEquality of two \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003es.\n   If you call \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e\n   first this has a much better chance of working.\n   Note that this doesn't follow symlinks or DOSNAM~1s.\n\u003c/p\u003e\u003cpre\u003e          x == y ==\u003e equalFilePath x y\n          normalise x == normalise y ==\u003e equalFilePath x y\n Posix:   equalFilePath \"foo\" \"foo/\"\n Posix:   not (equalFilePath \"foo\" \"/foo\")\n Posix:   not (equalFilePath \"foo\" \"FOO\")\n Windows: equalFilePath \"foo\" \"FOO\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "equalFilePath",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#equalFilePath",
          "type": "function"
        },
        "index": {
          "description": "Equality of two FilePath If you call System.Directory.canonicalizePath first this has much better chance of working Note that this doesn follow symlinks or DOSNAM equalFilePath normalise normalise equalFilePath Posix equalFilePath foo foo Posix not equalFilePath foo foo Posix not equalFilePath foo FOO Windows equalFilePath foo FOO",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "equalFilePath",
          "normalized": "FilePath-\u003eFilePath-\u003eBool",
          "package": "filepath",
          "partial": "File Path",
          "signature": "FilePath-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:equalFilePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFile extension character\n\u003c/p\u003e\u003cpre\u003e extSeparator == '.'\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "extSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Windows.html#extSeparator",
          "type": "function"
        },
        "index": {
          "description": "File extension character extSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "extSeparator",
          "package": "filepath",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:extSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a list of filepaths in the $PATH.\n\u003c/p\u003e",
          "module": "System.FilePath.Windows",
          "name": "getSearchPath",
          "package": "filepath",
          "signature": "IO [FilePath]",
          "source": "src/System-FilePath-Windows.html#getSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Get list of filepaths in the PATH",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "getSearchPath",
          "normalized": "IO[FilePath]",
          "package": "filepath",
          "partial": "Search Path",
          "signature": "IO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:getSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes a path have a drive.\n\u003c/p\u003e\u003cpre\u003e not (hasDrive x) == null (takeDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "hasDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#hasDrive",
          "type": "function"
        },
        "index": {
          "description": "Does path have drive not hasDrive null takeDrive",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "hasDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:hasDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes the given filename have an extension?\n\u003c/p\u003e\u003cpre\u003e null (takeExtension x) == not (hasExtension x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "hasExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#hasExtension",
          "type": "function"
        },
        "index": {
          "description": "Does the given filename have an extension null takeExtension not hasExtension",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "hasExtension",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:hasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an item either a directory or the last character a path separator?\n\u003c/p\u003e\u003cpre\u003e hasTrailingPathSeparator \"test\" == False\n hasTrailingPathSeparator \"test/\" == True\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "hasTrailingPathSeparator",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#hasTrailingPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is an item either directory or the last character path separator hasTrailingPathSeparator test False hasTrailingPathSeparator test True",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "hasTrailingPathSeparator",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Trailing Path Separator",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:hasTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003enot . \u003ccode\u003e\u003ca\u003eisRelative\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cpre\u003e isAbsolute x == not (isRelative x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isAbsolute",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isAbsolute",
          "type": "function"
        },
        "index": {
          "description": "not isRelative isAbsolute not isRelative",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isAbsolute",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Absolute",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs an element a drive\n\u003c/p\u003e",
          "module": "System.FilePath.Windows",
          "name": "isDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isDrive",
          "type": "function"
        },
        "index": {
          "description": "Is an element drive",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isDrive",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the character an extension character?\n\u003c/p\u003e\u003cpre\u003e isExtSeparator a == (a == extSeparator)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isExtSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isExtSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is the character an extension character isExtSeparator extSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isExtSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Ext Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isExtSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRather than using \u003ccode\u003e(== \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e, use this. Test if something\n   is a path separator.\n\u003c/p\u003e\u003cpre\u003e isPathSeparator a == (a `elem` pathSeparators)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isPathSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Rather than using pathSeparator use this Test if something is path separator isPathSeparator elem pathSeparators",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isPathSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Path Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a path relative, or is it fixed to the root?\n\u003c/p\u003e\u003cpre\u003e Windows: isRelative \"path\\\\test\" == True\n Windows: isRelative \"c:\\\\test\" == False\n Windows: isRelative \"c:test\" == True\n Windows: isRelative \"c:\" == True\n Windows: isRelative \"\\\\\\\\foo\" == False\n Windows: isRelative \"/foo\" == True\n Posix:   isRelative \"test/path\" == True\n Posix:   isRelative \"/test\" == False\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isRelative",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isRelative",
          "type": "function"
        },
        "index": {
          "description": "Is path relative or is it fixed to the root Windows isRelative path test True Windows isRelative test False Windows isRelative test True Windows isRelative True Windows isRelative foo False Windows isRelative foo True Posix isRelative test path True Posix isRelative test False",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isRelative",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Relative",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs the character a file separator?\n\u003c/p\u003e\u003cpre\u003e isSearchPathSeparator a == (a == searchPathSeparator)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isSearchPathSeparator",
          "package": "filepath",
          "signature": "Char -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isSearchPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "Is the character file separator isSearchPathSeparator searchPathSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isSearchPathSeparator",
          "normalized": "Char-\u003eBool",
          "package": "filepath",
          "partial": "Search Path Separator",
          "signature": "Char-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isSearchPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIs a FilePath valid, i.e. could you create a file like it?\n\u003c/p\u003e\u003cpre\u003e          isValid \"\" == False\n Posix:   isValid \"/random_ path:*\" == True\n Posix:   isValid x == not (null x)\n Windows: isValid \"c:\\\\test\" == True\n Windows: isValid \"c:\\\\test:of_test\" == False\n Windows: isValid \"test*\" == False\n Windows: isValid \"c:\\\\test\\\\nul\" == False\n Windows: isValid \"c:\\\\test\\\\prn.txt\" == False\n Windows: isValid \"c:\\\\nul\\\\file\" == False\n Windows: isValid \"\\\\\\\\\" == False\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "isValid",
          "package": "filepath",
          "signature": "FilePath -\u003e Bool",
          "source": "src/System-FilePath-Windows.html#isValid",
          "type": "function"
        },
        "index": {
          "description": "Is FilePath valid i.e could you create file like it isValid False Posix isValid random path True Posix isValid not null Windows isValid test True Windows isValid test of test False Windows isValid test False Windows isValid test nul False Windows isValid test prn.txt False Windows isValid nul file False Windows isValid False",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "isValid",
          "normalized": "FilePath-\u003eBool",
          "package": "filepath",
          "partial": "Valid",
          "signature": "FilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin a drive and the rest of the path.\n\u003c/p\u003e\u003cpre\u003e          uncurry joinDrive (splitDrive x) == x\n Windows: joinDrive \"C:\" \"foo\" == \"C:foo\"\n Windows: joinDrive \"C:\\\\\" \"bar\" == \"C:\\\\bar\"\n Windows: joinDrive \"\\\\\\\\share\" \"foo\" == \"\\\\\\\\share\\\\foo\"\n Windows: joinDrive \"/:\" \"foo\" == \"/:\\\\foo\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "joinDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#joinDrive",
          "type": "function"
        },
        "index": {
          "description": "Join drive and the rest of the path uncurry joinDrive splitDrive Windows joinDrive foo foo Windows joinDrive bar bar Windows joinDrive share foo share foo Windows joinDrive foo foo",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "joinDrive",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:joinDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJoin path elements back together.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e joinPath (splitPath x) == x\n joinPath [] == \"\"\n Posix: joinPath [\"test\",\"file\",\"path\"] == \"test/file/path\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "joinPath",
          "package": "filepath",
          "signature": "[FilePath] -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#joinPath",
          "type": "function"
        },
        "index": {
          "description": "Join path elements back together Valid joinPath splitPath joinPath Posix joinPath test file path test file path",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "joinPath",
          "normalized": "[FilePath]-\u003eFilePath",
          "package": "filepath",
          "partial": "Path",
          "signature": "[FilePath]-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:joinPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eContract a filename, based on a relative path.\n\u003c/p\u003e\u003cp\u003eThere is no corresponding \u003ccode\u003emakeAbsolute\u003c/code\u003e function, instead use\n   \u003ccode\u003eSystem.Directory.canonicalizePath\u003c/code\u003e which has the same effect.\n\u003c/p\u003e\u003cpre\u003e          Valid y =\u003e equalFilePath x y || (isRelative x && makeRelative y x == x) || equalFilePath (y \u003c/\u003e makeRelative y x) x\n          makeRelative x x == \".\"\n          null y || equalFilePath (makeRelative x (x \u003c/\u003e y)) y || null (takeFileName x)\n Windows: makeRelative \"C:\\\\Home\" \"c:\\\\home\\\\bob\" == \"bob\"\n Windows: makeRelative \"C:\\\\Home\" \"c:/home/bob\" == \"bob\"\n Windows: makeRelative \"C:\\\\Home\" \"D:\\\\Home\\\\Bob\" == \"D:\\\\Home\\\\Bob\"\n Windows: makeRelative \"C:\\\\Home\" \"C:Home\\\\Bob\" == \"C:Home\\\\Bob\"\n Windows: makeRelative \"/Home\" \"/home/bob\" == \"bob\"\n Posix:   makeRelative \"/Home\" \"/home/bob\" == \"/home/bob\"\n Posix:   makeRelative \"/home/\" \"/home/bob/foo/bar\" == \"bob/foo/bar\"\n Posix:   makeRelative \"/fred\" \"bob\" == \"bob\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred\" == \"fred\"\n Posix:   makeRelative \"/file/test\" \"/file/test/fred/\" == \"fred/\"\n Posix:   makeRelative \"some/path\" \"some/path/a/b/c\" == \"a/b/c\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "makeRelative",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#makeRelative",
          "type": "function"
        },
        "index": {
          "description": "Contract filename based on relative path There is no corresponding makeAbsolute function instead use System.Directory.canonicalizePath which has the same effect Valid equalFilePath isRelative makeRelative equalFilePath makeRelative makeRelative null equalFilePath makeRelative null takeFileName Windows makeRelative Home home bob bob Windows makeRelative Home home bob bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home Home Bob Home Bob Windows makeRelative Home home bob bob Posix makeRelative Home home bob home bob Posix makeRelative home home bob foo bar bob foo bar Posix makeRelative fred bob bob Posix makeRelative file test file test fred fred Posix makeRelative file test file test fred fred Posix makeRelative some path some path",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "makeRelative",
          "normalized": "FilePath-\u003eFilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Relative",
          "signature": "FilePath-\u003eFilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:makeRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a FilePath and make it valid; does not change already valid FilePaths.\n\u003c/p\u003e\u003cpre\u003e isValid (makeValid x)\n isValid x ==\u003e makeValid x == x\n makeValid \"\" == \"_\"\n Windows: makeValid \"c:\\\\test:of_test\" == \"c:\\\\test_of_test\"\n Windows: makeValid \"test*\" == \"test_\"\n Windows: makeValid \"c:\\\\test\\\\nul\" == \"c:\\\\test\\\\nul_\"\n Windows: makeValid \"c:\\\\test\\\\prn.txt\" == \"c:\\\\test\\\\prn_.txt\"\n Windows: makeValid \"c:\\\\test/prn.txt\" == \"c:\\\\test/prn_.txt\"\n Windows: makeValid \"c:\\\\nul\\\\file\" == \"c:\\\\nul_\\\\file\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "makeValid",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#makeValid",
          "type": "function"
        },
        "index": {
          "description": "Take FilePath and make it valid does not change already valid FilePaths isValid makeValid isValid makeValid makeValid Windows makeValid test of test test of test Windows makeValid test test Windows makeValid test nul test nul Windows makeValid test prn.txt test prn txt Windows makeValid test prn.txt test prn txt Windows makeValid nul file nul file",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "makeValid",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Valid",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:makeValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNormalise a file\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e // outside of the drive can be made blank\n\u003c/li\u003e\u003cli\u003e / -\u003e \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e ./ -\u003e \"\"\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e Posix:   normalise \"/file/\\\\test////\" == \"/file/\\\\test/\"\n Posix:   normalise \"/file/./test\" == \"/file/test\"\n Posix:   normalise \"/test/file/../bob/fred/\" == \"/test/file/../bob/fred/\"\n Posix:   normalise \"../bob/fred/\" == \"../bob/fred/\"\n Posix:   normalise \"./bob/fred/\" == \"bob/fred/\"\n Windows: normalise \"c:\\\\file/bob\\\\\" == \"C:\\\\file\\\\bob\\\\\"\n Windows: normalise \"c:\\\\\" == \"C:\\\\\"\n Windows: normalise \"\\\\\\\\server\\\\test\" == \"\\\\\\\\server\\\\test\"\n Windows: normalise \"c:/file\" == \"C:\\\\file\"\n          normalise \".\" == \".\"\n Posix:   normalise \"./\" == \"./\"\n Posix:   normalise \"./.\" == \"./\"\n Posix:   normalise \"/\" == \"/\"\n Posix:   normalise \"bob/fred/.\" == \"bob/fred/\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "normalise",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#normalise",
          "type": "function"
        },
        "index": {
          "description": "Normalise file outside of the drive can be made blank pathSeparator Posix normalise file test file test Posix normalise file test file test Posix normalise test file bob fred test file bob fred Posix normalise bob fred bob fred Posix normalise bob fred bob fred Windows normalise file bob file bob Windows normalise Windows normalise server test server test Windows normalise file file normalise Posix normalise Posix normalise Posix normalise Posix normalise bob fred bob fred",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "normalise",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character that separates directories. In the case where more than\n   one character is possible, \u003ccode\u003e\u003ca\u003epathSeparator\u003c/a\u003e\u003c/code\u003e is the 'ideal' one.\n\u003c/p\u003e\u003cpre\u003e Windows: pathSeparator == '\\\\'\n Posix:   pathSeparator ==  '/'\n isPathSeparator pathSeparator\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "pathSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Windows.html#pathSeparator",
          "type": "function"
        },
        "index": {
          "description": "The character that separates directories In the case where more than one character is possible pathSeparator is the ideal one Windows pathSeparator Posix pathSeparator isPathSeparator pathSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "pathSeparator",
          "package": "filepath",
          "partial": "Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:pathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe list of all possible separators.\n\u003c/p\u003e\u003cpre\u003e Windows: pathSeparators == ['\\\\', '/']\n Posix:   pathSeparators == ['/']\n pathSeparator `elem` pathSeparators\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "pathSeparators",
          "package": "filepath",
          "signature": "[Char]",
          "source": "src/System-FilePath-Windows.html#pathSeparators",
          "type": "function"
        },
        "index": {
          "description": "The list of all possible separators Windows pathSeparators Posix pathSeparators pathSeparator elem pathSeparators",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "pathSeparators",
          "normalized": "[Char]",
          "package": "filepath",
          "partial": "Separators",
          "signature": "[Char]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:pathSeparators"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the base name.\n\u003c/p\u003e\u003cpre\u003e replaceBaseName \"file/test.txt\" \"bob\" == \"file/bob.txt\"\n replaceBaseName \"fred\" \"bill\" == \"bill\"\n replaceBaseName \"/dave/fred/bob.gz.tar\" \"new\" == \"/dave/fred/new.tar\"\n Valid x =\u003e replaceBaseName x (takeBaseName x) == x\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "replaceBaseName",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#replaceBaseName",
          "type": "function"
        },
        "index": {
          "description": "Set the base name replaceBaseName file test.txt bob file bob.txt replaceBaseName fred bill bill replaceBaseName dave fred bob.gz.tar new dave fred new.tar Valid replaceBaseName takeBaseName",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "replaceBaseName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:replaceBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the directory, keeping the filename the same.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e replaceDirectory x (takeDirectory x) `equalFilePath` x\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "replaceDirectory",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#replaceDirectory",
          "type": "function"
        },
        "index": {
          "description": "Set the directory keeping the filename the same Valid replaceDirectory takeDirectory equalFilePath",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "replaceDirectory",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Directory",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:replaceDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the extension of a file, overwriting one if already present.\n\u003c/p\u003e\u003cpre\u003e replaceExtension \"file.txt\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"bob\" == \"file.bob\"\n replaceExtension \"file\" \".bob\" == \"file.bob\"\n replaceExtension \"file.txt\" \"\" == \"file\"\n replaceExtension \"file.fred.bob\" \"txt\" == \"file.fred.txt\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "replaceExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#replaceExtension",
          "type": "function"
        },
        "index": {
          "description": "Set the extension of file overwriting one if already present replaceExtension file.txt bob file.bob replaceExtension file.txt bob file.bob replaceExtension file bob file.bob replaceExtension file.txt file replaceExtension file.fred.bob txt file.fred.txt",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "replaceExtension",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:replaceExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the filename.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e replaceFileName x (takeFileName x) == x\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "replaceFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e String -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#replaceFileName",
          "type": "function"
        },
        "index": {
          "description": "Set the filename Valid replaceFileName takeFileName",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "replaceFileName",
          "normalized": "FilePath-\u003eString-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eString-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:replaceFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe character that is used to separate the entries in the $PATH environment variable.\n\u003c/p\u003e\u003cpre\u003e Windows: searchPathSeparator == ';'\n Posix:   searchPathSeparator == ':'\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "searchPathSeparator",
          "package": "filepath",
          "signature": "Char",
          "source": "src/System-FilePath-Windows.html#searchPathSeparator",
          "type": "function"
        },
        "index": {
          "description": "The character that is used to separate the entries in the PATH environment variable Windows searchPathSeparator Posix searchPathSeparator",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "searchPathSeparator",
          "package": "filepath",
          "partial": "Path Separator",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:searchPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust as \u003ccode\u003e\u003ca\u003esplitPath\u003c/a\u003e\u003c/code\u003e, but don't add the trailing slashes to each element.\n\u003c/p\u003e\u003cpre\u003e splitDirectories \"test/file\" == [\"test\",\"file\"]\n splitDirectories \"/test/file\" == [\"/\",\"test\",\"file\"]\n Valid x =\u003e joinPath (splitDirectories x) `equalFilePath` x\n splitDirectories \"\" == []\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitDirectories",
          "package": "filepath",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-FilePath-Windows.html#splitDirectories",
          "type": "function"
        },
        "index": {
          "description": "Just as splitPath but don add the trailing slashes to each element splitDirectories test file test file splitDirectories test file test file Valid joinPath splitDirectories equalFilePath splitDirectories",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitDirectories",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Directories",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path into a drive and a path.\n   On Unix, / is a Drive.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitDrive x) == x\n Windows: splitDrive \"file\" == (\"\",\"file\")\n Windows: splitDrive \"c:/file\" == (\"c:/\",\"file\")\n Windows: splitDrive \"c:\\\\file\" == (\"c:\\\\\",\"file\")\n Windows: splitDrive \"\\\\\\\\shared\\\\test\" == (\"\\\\\\\\shared\\\\\",\"test\")\n Windows: splitDrive \"\\\\\\\\shared\" == (\"\\\\\\\\shared\",\"\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNC\\\\shared\\\\file\" == (\"\\\\\\\\?\\\\UNC\\\\shared\\\\\",\"file\")\n Windows: splitDrive \"\\\\\\\\?\\\\UNCshared\\\\file\" == (\"\\\\\\\\?\\\\\",\"UNCshared\\\\file\")\n Windows: splitDrive \"\\\\\\\\?\\\\d:\\\\file\" == (\"\\\\\\\\?\\\\d:\\\\\",\"file\")\n Windows: splitDrive \"/d\" == (\"\",\"/d\")\n Posix:   splitDrive \"/test\" == (\"/\",\"test\")\n Posix:   splitDrive \"//test\" == (\"//\",\"test\")\n Posix:   splitDrive \"test/file\" == (\"\",\"test/file\")\n Posix:   splitDrive \"file\" == (\"\",\"file\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e (FilePath, FilePath)",
          "source": "src/System-FilePath-Windows.html#splitDrive",
          "type": "function"
        },
        "index": {
          "description": "Split path into drive and path On Unix is Drive uncurry splitDrive Windows splitDrive file file Windows splitDrive file file Windows splitDrive file file Windows splitDrive shared test shared test Windows splitDrive shared shared Windows splitDrive UNC shared file UNC shared file Windows splitDrive UNCshared file UNCshared file Windows splitDrive file file Windows splitDrive Posix splitDrive test test Posix splitDrive test test Posix splitDrive test file test file Posix splitDrive file file",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitDrive",
          "normalized": "FilePath-\u003e(FilePath,FilePath)",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003e(FilePath,FilePath)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on the extension. \u003ccode\u003e\u003ca\u003eaddExtension\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitExtension x) == x\n uncurry addExtension (splitExtension x) == x\n splitExtension \"file.txt\" == (\"file\",\".txt\")\n splitExtension \"file\" == (\"file\",\"\")\n splitExtension \"file/file.txt\" == (\"file/file\",\".txt\")\n splitExtension \"file.txt/boris\" == (\"file.txt/boris\",\"\")\n splitExtension \"file.txt/boris.ext\" == (\"file.txt/boris\",\".ext\")\n splitExtension \"file/path.txt.bob.fred\" == (\"file/path.txt.bob\",\".fred\")\n splitExtension \"file/path.txt/\" == (\"file/path.txt/\",\"\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-FilePath-Windows.html#splitExtension",
          "type": "function"
        },
        "index": {
          "description": "Split on the extension addExtension is the inverse uncurry splitExtension uncurry addExtension splitExtension splitExtension file.txt file txt splitExtension file file splitExtension file file.txt file file txt splitExtension file.txt boris file.txt boris splitExtension file.txt boris.ext file.txt boris ext splitExtension file path.txt.bob.fred file path.txt.bob fred splitExtension file path.txt file path.txt",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitExtension",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit on all extensions\n\u003c/p\u003e\u003cpre\u003e uncurry (++) (splitExtensions x) == x\n uncurry addExtension (splitExtensions x) == x\n splitExtensions \"file.tar.gz\" == (\"file\",\".tar.gz\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e (FilePath, String)",
          "source": "src/System-FilePath-Windows.html#splitExtensions",
          "type": "function"
        },
        "index": {
          "description": "Split on all extensions uncurry splitExtensions uncurry addExtension splitExtensions splitExtensions file.tar.gz file tar.gz",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitExtensions",
          "normalized": "FilePath-\u003e(FilePath,String)",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003e(FilePath,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a filename into directory and file. \u003ccode\u003e\u003ca\u003ecombine\u003c/a\u003e\u003c/code\u003e is the inverse.\n\u003c/p\u003e\u003cpre\u003e Valid x =\u003e uncurry (\u003c/\u003e) (splitFileName x) == x || fst (splitFileName x) == \"./\"\n Valid x =\u003e isValid (fst (splitFileName x))\n splitFileName \"file/bob.txt\" == (\"file/\", \"bob.txt\")\n splitFileName \"file/\" == (\"file/\", \"\")\n splitFileName \"bob\" == (\"./\", \"bob\")\n Posix:   splitFileName \"/\" == (\"/\",\"\")\n Windows: splitFileName \"c:\" == (\"c:\",\"\")\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e (String, String)",
          "source": "src/System-FilePath-Windows.html#splitFileName",
          "type": "function"
        },
        "index": {
          "description": "Split filename into directory and file combine is the inverse Valid uncurry splitFileName fst splitFileName Valid isValid fst splitFileName splitFileName file bob.txt file bob.txt splitFileName file file splitFileName bob bob Posix splitFileName Windows splitFileName",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitFileName",
          "normalized": "FilePath-\u003e(String,String)",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplit a path by the directory separator.\n\u003c/p\u003e\u003cpre\u003e concat (splitPath x) == x\n splitPath \"test//item/\" == [\"test//\",\"item/\"]\n splitPath \"test/item/file\" == [\"test/\",\"item/\",\"file\"]\n splitPath \"\" == []\n Windows: splitPath \"c:\\\\test\\\\path\" == [\"c:\\\\\",\"test\\\\\",\"path\"]\n Posix:   splitPath \"/file/test\" == [\"/\",\"file/\",\"test\"]\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitPath",
          "package": "filepath",
          "signature": "FilePath -\u003e [FilePath]",
          "source": "src/System-FilePath-Windows.html#splitPath",
          "type": "function"
        },
        "index": {
          "description": "Split path by the directory separator concat splitPath splitPath test item test item splitPath test item file test item file splitPath Windows splitPath test path test path Posix splitPath file test file test",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitPath",
          "normalized": "FilePath-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Path",
          "signature": "FilePath-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTake a string, split it on the \u003ccode\u003e\u003ca\u003esearchPathSeparator\u003c/a\u003e\u003c/code\u003e character.\n\u003c/p\u003e\u003cp\u003eFollows the recommendations in\n   \u003ca\u003ehttp://www.opengroup.org/onlinepubs/009695399/basedefs/xbd_chap08.html\u003c/a\u003e\n\u003c/p\u003e\u003cpre\u003e Posix:   splitSearchPath \"File1:File2:File3\"  == [\"File1\",\"File2\",\"File3\"]\n Posix:   splitSearchPath \"File1::File2:File3\" == [\"File1\",\".\",\"File2\",\"File3\"]\n Windows: splitSearchPath \"File1;File2;File3\"  == [\"File1\",\"File2\",\"File3\"]\n Windows: splitSearchPath \"File1;;File2;File3\" == [\"File1\",\"File2\",\"File3\"]\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "splitSearchPath",
          "package": "filepath",
          "signature": "String -\u003e [FilePath]",
          "source": "src/System-FilePath-Windows.html#splitSearchPath",
          "type": "function"
        },
        "index": {
          "description": "Take string split it on the searchPathSeparator character Follows the recommendations in http www.opengroup.org onlinepubs basedefs xbd chap08.html Posix splitSearchPath File1 File2 File3 File1 File2 File3 Posix splitSearchPath File1 File2 File3 File1 File2 File3 Windows splitSearchPath File1 File2 File3 File1 File2 File3 Windows splitSearchPath File1 File2 File3 File1 File2 File3",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "splitSearchPath",
          "normalized": "String-\u003e[FilePath]",
          "package": "filepath",
          "partial": "Search Path",
          "signature": "String-\u003e[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:splitSearchPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the base name, without an extension or path.\n\u003c/p\u003e\u003cpre\u003e takeBaseName \"file/test.txt\" == \"test\"\n takeBaseName \"dave.ext\" == \"dave\"\n takeBaseName \"\" == \"\"\n takeBaseName \"test\" == \"test\"\n takeBaseName (addTrailingPathSeparator x) == \"\"\n takeBaseName \"file/file.tar.gz\" == \"file.tar\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeBaseName",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Windows.html#takeBaseName",
          "type": "function"
        },
        "index": {
          "description": "Get the base name without an extension or path takeBaseName file test.txt test takeBaseName dave.ext dave takeBaseName takeBaseName test test takeBaseName addTrailingPathSeparator takeBaseName file file.tar.gz file.tar",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeBaseName",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Base Name",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeBaseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the directory name, move up one level.\n\u003c/p\u003e\u003cpre\u003e           takeDirectory x `isPrefixOf` x || takeDirectory x == \".\"\n           takeDirectory \"foo\" == \".\"\n           takeDirectory \"/foo/bar/baz\" == \"/foo/bar\"\n           takeDirectory \"/foo/bar/baz/\" == \"/foo/bar/baz\"\n           takeDirectory \"foo/bar/baz\" == \"foo/bar\"\n Windows:  takeDirectory \"foo\\\\bar\" == \"foo\"\n Windows:  takeDirectory \"foo\\\\bar\\\\\\\\\" == \"foo\\\\bar\"\n Windows:  takeDirectory \"C:\\\\\" == \"C:\\\\\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeDirectory",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#takeDirectory",
          "type": "function"
        },
        "index": {
          "description": "Get the directory name move up one level takeDirectory isPrefixOf takeDirectory takeDirectory foo takeDirectory foo bar baz foo bar takeDirectory foo bar baz foo bar baz takeDirectory foo bar baz foo bar Windows takeDirectory foo bar foo Windows takeDirectory foo bar foo bar Windows takeDirectory",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeDirectory",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Directory",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the drive from a filepath.\n\u003c/p\u003e\u003cpre\u003e takeDrive x == fst (splitDrive x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeDrive",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#takeDrive",
          "type": "function"
        },
        "index": {
          "description": "Get the drive from filepath takeDrive fst splitDrive",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeDrive",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "Drive",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeDrive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the extension of a file, returns \u003ccode\u003e\"\"\u003c/code\u003e for no extension, \u003ccode\u003e.ext\u003c/code\u003e otherwise.\n\u003c/p\u003e\u003cpre\u003e takeExtension x == snd (splitExtension x)\n Valid x =\u003e takeExtension (addExtension x \"ext\") == \".ext\"\n Valid x =\u003e takeExtension (replaceExtension x \"ext\") == \".ext\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeExtension",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Windows.html#takeExtension",
          "type": "function"
        },
        "index": {
          "description": "Get the extension of file returns for no extension ext otherwise takeExtension snd splitExtension Valid takeExtension addExtension ext ext Valid takeExtension replaceExtension ext ext",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeExtension",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Extension",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet all extensions\n\u003c/p\u003e\u003cpre\u003e takeExtensions \"file.tar.gz\" == \".tar.gz\"\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeExtensions",
          "package": "filepath",
          "signature": "FilePath -\u003e String",
          "source": "src/System-FilePath-Windows.html#takeExtensions",
          "type": "function"
        },
        "index": {
          "description": "Get all extensions takeExtensions file.tar.gz tar.gz",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeExtensions",
          "normalized": "FilePath-\u003eString",
          "package": "filepath",
          "partial": "Extensions",
          "signature": "FilePath-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeExtensions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the file name.\n\u003c/p\u003e\u003cpre\u003e takeFileName \"test/\" == \"\"\n takeFileName x `isSuffixOf` x\n takeFileName x == snd (splitFileName x)\n Valid x =\u003e takeFileName (replaceFileName x \"fred\") == \"fred\"\n Valid x =\u003e takeFileName (x \u003c/\u003e \"fred\") == \"fred\"\n Valid x =\u003e isRelative (takeFileName x)\n\u003c/pre\u003e",
          "module": "System.FilePath.Windows",
          "name": "takeFileName",
          "package": "filepath",
          "signature": "FilePath -\u003e FilePath",
          "source": "src/System-FilePath-Windows.html#takeFileName",
          "type": "function"
        },
        "index": {
          "description": "Get the file name takeFileName test takeFileName isSuffixOf takeFileName snd splitFileName Valid takeFileName replaceFileName fred fred Valid takeFileName fred fred Valid isRelative takeFileName",
          "hierarchy": "System FilePath Windows",
          "module": "System.FilePath.Windows",
          "name": "takeFileName",
          "normalized": "FilePath-\u003eFilePath",
          "package": "filepath",
          "partial": "File Name",
          "signature": "FilePath-\u003eFilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath-Windows.html#v:takeFileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e manipulations, using Posix or Windows filepaths\ndepending on the platform.\n\u003c/p\u003e\u003cp\u003eBoth \u003ca\u003eSystem.FilePath.Posix\u003c/a\u003e and \u003ca\u003eSystem.FilePath.Windows\u003c/a\u003e provide the\nsame interface. See either for examples and a list of the available\nfunctions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.FilePath",
          "name": "FilePath",
          "package": "filepath",
          "source": "src/System-FilePath.html",
          "type": "module"
        },
        "index": {
          "description": "library for FilePath manipulations using Posix or Windows filepaths depending on the platform Both System.FilePath.Posix and System.FilePath.Windows provide the same interface See either for examples and list of the available functions",
          "hierarchy": "System FilePath",
          "module": "System.FilePath",
          "name": "FilePath",
          "package": "filepath",
          "partial": "File Path",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/filepath/docs/System-FilePath.html#"
      }
    }
  ]
]