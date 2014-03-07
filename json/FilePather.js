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
        "word": "FilePather"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "FilePathPredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "FilePathPredicate",
          "package": "FilePather",
          "partial": "File Path Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctions that are common to predicates that work on \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e values.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "FilePathPredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#FilePathPredicate",
          "type": "class"
        },
        "index": {
          "description": "Functions that are common to predicates that work on FilePath values",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "FilePathPredicate",
          "package": "FilePather",
          "partial": "File Path Predicate",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#t:FilePathPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a predicate that succeeds if any of the two given predicates succeed.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.||.)",
          "package": "FilePather",
          "signature": "f g -\u003e f g -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#.%7C%7C.",
          "type": "method"
        },
        "index": {
          "description": "Return predicate that succeeds if any of the two given predicates succeed",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.||.) .||.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "FilePather",
          "signature": "f g-\u003ef g-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:.-124--124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNegates the given predicate.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.!.)",
          "package": "FilePather",
          "signature": "f g -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#.%21.",
          "type": "method"
        },
        "index": {
          "description": "Negates the given predicate",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.!.) .!.",
          "normalized": "a b-\u003ea b",
          "package": "FilePather",
          "signature": "f g-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:.-33-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn a predicate that succeeds only if the two given predicates succeed.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.&&.)",
          "package": "FilePather",
          "signature": "f g -\u003e f g -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#.%26%26.",
          "type": "method"
        },
        "index": {
          "description": "Return predicate that succeeds only if the two given predicates succeed",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "(.&&.) .&&.",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "FilePather",
          "signature": "f g-\u003ef g-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:.-38--38-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "allof",
          "package": "FilePather",
          "signature": "t (f g) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#allof",
          "type": "method"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "allof",
          "normalized": "a(b c)-\u003eb c",
          "package": "FilePather",
          "signature": "t(f g)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:allof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that always succeeds.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "always",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#always",
          "type": "method"
        },
        "index": {
          "description": "predicate that always succeeds",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "always",
          "package": "FilePather",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:always"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFolds the predicates on disjunction.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "anyof",
          "package": "FilePather",
          "signature": "t (f g) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#anyof",
          "type": "method"
        },
        "index": {
          "description": "Folds the predicates on disjunction",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "anyof",
          "normalized": "a(b c)-\u003eb c",
          "package": "FilePather",
          "signature": "t(f g)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:anyof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the base name.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "baseName",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#baseName",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the base name",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "baseName",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "partial": "Name",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:baseName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on a directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "directory",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#directory",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on directory",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "directory",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on a file name extension.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extension",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#extension",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on file name extension",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extension",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:extension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on equivalence to a file name extension. This function matches with and without the preceding extension separator (.).\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionEq",
          "package": "FilePather",
          "signature": "FilePath -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#extensionEq",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on equivalence to file name extension This function matches with and without the preceding extension separator",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionEq",
          "normalized": "FilePath-\u003ea b",
          "package": "FilePather",
          "partial": "Eq",
          "signature": "FilePath-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:extensionEq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on inequivalence to any of a list of file name extensions.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionNoneof",
          "package": "FilePather",
          "signature": "t FilePath -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#extensionNoneof",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on inequivalence to any of list of file name extensions",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionNoneof",
          "normalized": "a FilePath-\u003eb c",
          "package": "FilePather",
          "partial": "Noneof",
          "signature": "t FilePath-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:extensionNoneof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on equivalence to one of a list of file name extensions.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionOneof",
          "package": "FilePather",
          "signature": "t FilePath -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#extensionOneof",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on equivalence to one of list of file name extensions",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "extensionOneof",
          "normalized": "a FilePath-\u003eb c",
          "package": "FilePather",
          "partial": "Oneof",
          "signature": "t FilePath-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:extensionOneof"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the file name.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "fileName",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#fileName",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the file name",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "fileName",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "partial": "Name",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e has an extension.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "hasExtension",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#hasExtension",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath has an extension",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "hasExtension",
          "package": "FilePather",
          "partial": "Extension",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:hasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e has a trailing path separator.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "hasTrailingPathSeparator",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#hasTrailingPathSeparator",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath has trailing path separator",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "hasTrailingPathSeparator",
          "package": "FilePather",
          "partial": "Trailing Path Separator",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:hasTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is absolute.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isAbsolute",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isAbsolute",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is absolute",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isAbsolute",
          "package": "FilePather",
          "partial": "Absolute",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is not absolute.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotAbsolute",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isNotAbsolute",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is not absolute",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotAbsolute",
          "package": "FilePather",
          "partial": "Not Absolute",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isNotAbsolute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is not relative.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotRelative",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isNotRelative",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is not relative",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotRelative",
          "package": "FilePather",
          "partial": "Not Relative",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isNotRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is not valid.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotValid",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isNotValid",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is not valid",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isNotValid",
          "package": "FilePather",
          "partial": "Not Valid",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isNotValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is relative.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isRelative",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isRelative",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is relative",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isRelative",
          "package": "FilePather",
          "partial": "Relative",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isRelative"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e is valid.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isValid",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#isValid",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath is valid",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "isValid",
          "package": "FilePather",
          "partial": "Valid",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:isValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the file name having been made valid.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "makeValid",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#makeValid",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the file name having been made valid",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "makeValid",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "partial": "Valid",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:makeValid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that always fails.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "never",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#never",
          "type": "method"
        },
        "index": {
          "description": "predicate that always fails",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "never",
          "package": "FilePather",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:never"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the normalised file name.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "normalise",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#normalise",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the normalised file name",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "normalise",
          "normalized": "(FilePath-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "signature": "(FilePath-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:normalise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e does not have an extension.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "notHasExtension",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#notHasExtension",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath does not have an extension",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "notHasExtension",
          "package": "FilePather",
          "partial": "Has Extension",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:notHasExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that succeeds if its \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e does not have a trailing path separator.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "notHasTrailingPathSeparator",
          "package": "FilePather",
          "signature": "f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#notHasTrailingPathSeparator",
          "type": "method"
        },
        "index": {
          "description": "predicate that succeeds if its FilePath does not have trailing path separator",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "notHasTrailingPathSeparator",
          "package": "FilePather",
          "partial": "Has Trailing Path Separator",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:notHasTrailingPathSeparator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the splitting of a name into directories.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "splitDirectories",
          "package": "FilePather",
          "signature": "([FilePath] -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#splitDirectories",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the splitting of name into directories",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "splitDirectories",
          "normalized": "([FilePath]-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "partial": "Directories",
          "signature": "([FilePath]-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:splitDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA predicate that computes its result based on the splitting of a name and extension.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "splitExtension",
          "package": "FilePather",
          "signature": "(String -\u003e String -\u003e Bool) -\u003e f g",
          "source": "src/System-FilePath-FilePather-FilePathPredicate.html#splitExtension",
          "type": "method"
        },
        "index": {
          "description": "predicate that computes its result based on the splitting of name and extension",
          "hierarchy": "System FilePath FilePather FilePathPredicate",
          "module": "System.FilePath.FilePather.FilePathPredicate",
          "name": "splitExtension",
          "normalized": "(String-\u003eString-\u003eBool)-\u003ea b",
          "package": "FilePather",
          "partial": "Extension",
          "signature": "(String-\u003eString-\u003eBool)-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilePathPredicate.html#v:splitExtension"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FileType",
          "name": "FileType",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FileType.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "FileType",
          "package": "FilePather",
          "partial": "File Type",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe possible types of a file.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FileType",
          "name": "FileType",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FileType.html#FileType",
          "type": "data"
        },
        "index": {
          "description": "The possible types of file",
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "FileType",
          "package": "FilePather",
          "partial": "File Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#t:FileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type is a directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FileType",
          "name": "Directory",
          "package": "FilePather",
          "signature": "Directory",
          "source": "src/System-FilePath-FilePather-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "description": "The type is directory",
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "Directory",
          "package": "FilePather",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:Directory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type is a normal file.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FileType",
          "name": "File",
          "package": "FilePather",
          "signature": "File",
          "source": "src/System-FilePath-FilePather-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "description": "The type is normal file",
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "File",
          "package": "FilePather",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:File"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type is unknown.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FileType",
          "name": "Unknown",
          "package": "FilePather",
          "signature": "Unknown",
          "source": "src/System-FilePath-FilePather-FileType.html#FileType",
          "type": "function"
        },
        "index": {
          "description": "The type is unknown",
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "Unknown",
          "package": "FilePather",
          "partial": "Unknown",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FileType",
          "name": "isDirectory",
          "package": "FilePather",
          "signature": "FileType -\u003e Bool",
          "source": "src/System-FilePath-FilePather-FileType.html#isDirectory",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "isDirectory",
          "normalized": "FileType-\u003eBool",
          "package": "FilePather",
          "partial": "Directory",
          "signature": "FileType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:isDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FileType",
          "name": "isFile",
          "package": "FilePather",
          "signature": "FileType -\u003e Bool",
          "source": "src/System-FilePath-FilePather-FileType.html#isFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "isFile",
          "normalized": "FileType-\u003eBool",
          "package": "FilePather",
          "partial": "File",
          "signature": "FileType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:isFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FileType",
          "name": "isUnknown",
          "package": "FilePather",
          "signature": "FileType -\u003e Bool",
          "source": "src/System-FilePath-FilePather-FileType.html#isUnknown",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FileType",
          "module": "System.FilePath.FilePather.FileType",
          "name": "isUnknown",
          "normalized": "FileType-\u003eBool",
          "package": "FilePather",
          "partial": "Unknown",
          "signature": "FileType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FileType.html#v:isUnknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicate",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#FilterPredicate",
          "type": "type"
        },
        "index": {
          "description": "filter predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicate",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#t:FilterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicateT",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#FilterPredicateT",
          "type": "data"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "FilterPredicateT",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#t:FilterPredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a filter predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicate",
          "package": "FilePather",
          "signature": "(FilePath -\u003e FileType -\u003e Bool) -\u003e FilterPredicate",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#filterPredicate",
          "type": "function"
        },
        "index": {
          "description": "Construct filter predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicate",
          "normalized": "(FilePath-\u003eFileType-\u003eBool)-\u003eFilterPredicate",
          "package": "FilePather",
          "partial": "Predicate",
          "signature": "(FilePath-\u003eFileType-\u003eBool)-\u003eFilterPredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:filterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a filter predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicate'",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e FilterPredicate",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#filterPredicate%27",
          "type": "function"
        },
        "index": {
          "description": "Construct filter predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicate'",
          "normalized": "(FilePath-\u003eBool)-\u003eFilterPredicate",
          "package": "FilePather",
          "partial": "Predicate'",
          "signature": "(FilePath-\u003eBool)-\u003eFilterPredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:filterPredicate-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter predicate takes a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and a file type and returns whether or not to filter the value.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicateT",
          "package": "FilePather",
          "signature": "(FilePath -\u003e FileType -\u003e f Bool) -\u003e FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#filterPredicateT",
          "type": "function"
        },
        "index": {
          "description": "filter predicate takes FilePath and file type and returns whether or not to filter the value",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicateT",
          "normalized": "(FilePath-\u003eFileType-\u003ea Bool)-\u003eFilterPredicateT a",
          "package": "FilePather",
          "partial": "Predicate",
          "signature": "(FilePath-\u003eFileType-\u003ef Bool)-\u003eFilterPredicateT f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:filterPredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA filter predicate takes a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e and returns whether or not to filter the value.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicateT'",
          "package": "FilePather",
          "signature": "(FilePath -\u003e f Bool) -\u003e FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#filterPredicateT%27",
          "type": "function"
        },
        "index": {
          "description": "filter predicate takes FilePath and returns whether or not to filter the value",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "filterPredicateT'",
          "normalized": "(FilePath-\u003ea Bool)-\u003eFilterPredicateT a",
          "package": "FilePather",
          "partial": "Predicate T'",
          "signature": "(FilePath-\u003ef Bool)-\u003eFilterPredicateT f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:filterPredicateT-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isDirectoryType",
          "package": "FilePather",
          "signature": "FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#isDirectoryType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isDirectoryType",
          "package": "FilePather",
          "partial": "Directory Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:isDirectoryType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isFileType",
          "package": "FilePather",
          "signature": "FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#isFileType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isFileType",
          "package": "FilePather",
          "partial": "File Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:isFileType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isUnknownType",
          "package": "FilePather",
          "signature": "FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#isUnknownType",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "isUnknownType",
          "package": "FilePather",
          "partial": "Unknown Type",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:isUnknownType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a filter predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "runFilterPredicate",
          "package": "FilePather",
          "signature": "FilterPredicate -\u003e FilePath -\u003e FileType -\u003e Bool",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#runFilterPredicate",
          "type": "function"
        },
        "index": {
          "description": "Construct filter predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "runFilterPredicate",
          "normalized": "FilterPredicate-\u003eFilePath-\u003eFileType-\u003eBool",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "signature": "FilterPredicate-\u003eFilePath-\u003eFileType-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:runFilterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the filter predicate function.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "runFilterPredicateT",
          "package": "FilePather",
          "signature": "FilterPredicateT f -\u003e FilePath -\u003e FileType -\u003e f Bool",
          "source": "src/System-FilePath-FilePather-FilterPredicate.html#runFilterPredicateT",
          "type": "function"
        },
        "index": {
          "description": "Extract the filter predicate function",
          "hierarchy": "System FilePath FilePather FilterPredicate",
          "module": "System.FilePath.FilePather.FilterPredicate",
          "name": "runFilterPredicateT",
          "normalized": "FilterPredicateT a-\u003eFilePath-\u003eFileType-\u003ea Bool",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "signature": "FilterPredicateT f-\u003eFilePath-\u003eFileType-\u003ef Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-FilterPredicate.html#v:runFilterPredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "Find",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-Find.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "Find",
          "package": "FilePather",
          "partial": "Find",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "Find",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-Find.html#Find",
          "type": "class"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "Find",
          "package": "FilePather",
          "partial": "Find",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#t:Find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe results of a path find. One of\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003efound\u003c/code\u003e with the file path name and file type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003e\u003ca\u003edrop\u003c/a\u003e\u003c/code\u003e with the file path name and file type.\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003erecurse\u003c/code\u003e with the file path (the file type is always directory).\n\u003c/li\u003e\u003cli\u003e `no-recurse` with the file path (the file type is always directory).\n\u003c/li\u003e\u003c/ul\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "FindR",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-Find.html#FindR",
          "type": "data"
        },
        "index": {
          "description": "The results of path find One of found with the file path name and file type drop with the file path name and file type recurse with the file path the file type is always directory no-recurse with the file path the file type is always directory",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "FindR",
          "package": "FilePather",
          "partial": "Find",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#t:FindR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "dropL",
          "package": "FilePather",
          "signature": "PartialLens FindR (FilePath, FileType)",
          "source": "src/System-FilePath-FilePather-Find.html#dropL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "dropL",
          "normalized": "PartialLens FindR(FilePath,FileType)",
          "package": "FilePather",
          "signature": "PartialLens FindR(FilePath,FileType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:dropL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "dropR",
          "package": "FilePather",
          "signature": "FilePath -\u003e FileType -\u003e FindR",
          "source": "src/System-FilePath-FilePather-Find.html#dropR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "dropR",
          "normalized": "FilePath-\u003eFileType-\u003eFindR",
          "package": "FilePather",
          "signature": "FilePath-\u003eFileType-\u003eFindR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:dropR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all files using the given recurse predicate and filter predicate in the given file path.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "find",
          "package": "FilePather",
          "signature": "FilterPredicateT f -\u003e RecursePredicateT f -\u003e FilePath -\u003e IO [FindR]",
          "source": "src/System-FilePath-FilePather-Find.html#find",
          "type": "method"
        },
        "index": {
          "description": "Finds all files using the given recurse predicate and filter predicate in the given file path",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "find",
          "normalized": "FilterPredicateT a-\u003eRecursePredicateT a-\u003eFilePath-\u003eIO[FindR]",
          "package": "FilePather",
          "signature": "FilterPredicateT f-\u003eRecursePredicateT f-\u003eFilePath-\u003eIO[FindR]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:find"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind files in the current directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "findHere",
          "package": "FilePather",
          "signature": "FilterPredicateT f -\u003e RecursePredicateT f -\u003e IO [FindR]",
          "source": "src/System-FilePath-FilePather-Find.html#findHere",
          "type": "method"
        },
        "index": {
          "description": "Find files in the current directory",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "findHere",
          "normalized": "FilterPredicateT a-\u003eRecursePredicateT a-\u003eIO[FindR]",
          "package": "FilePather",
          "partial": "Here",
          "signature": "FilterPredicateT f-\u003eRecursePredicateT f-\u003eIO[FindR]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:findHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialisation of \u003ccode\u003e\u003ca\u003efind\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad. Useful in assisting type-inference.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "findi",
          "package": "FilePather",
          "signature": "FilterPredicate -\u003e RecursePredicate -\u003e FilePath -\u003e IO [FindR]",
          "source": "src/System-FilePath-FilePather-Find.html#findi",
          "type": "function"
        },
        "index": {
          "description": "specialisation of find to the Identity monad Useful in assisting type-inference",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "findi",
          "normalized": "FilterPredicate-\u003eRecursePredicate-\u003eFilePath-\u003eIO[FindR]",
          "package": "FilePather",
          "signature": "FilterPredicate-\u003eRecursePredicate-\u003eFilePath-\u003eIO[FindR]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:findi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFinds all files using the given recurse predicate and filter predicate in the given file path.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "findp",
          "package": "FilePather",
          "signature": "FilterPredicateT f -\u003e RecursePredicateT f -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/System-FilePath-FilePather-Find.html#findp",
          "type": "method"
        },
        "index": {
          "description": "Finds all files using the given recurse predicate and filter predicate in the given file path",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "findp",
          "normalized": "FilterPredicateT a-\u003eRecursePredicateT a-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FilePather",
          "signature": "FilterPredicateT f-\u003eRecursePredicateT f-\u003eFilePath-\u003eIO[FilePath]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:findp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind files in the current directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "findpHere",
          "package": "FilePather",
          "signature": "FilterPredicateT f -\u003e RecursePredicateT f -\u003e IO [FilePath]",
          "source": "src/System-FilePath-FilePather-Find.html#findpHere",
          "type": "method"
        },
        "index": {
          "description": "Find files in the current directory",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "findpHere",
          "normalized": "FilterPredicateT a-\u003eRecursePredicateT a-\u003eIO[FilePath]",
          "package": "FilePather",
          "partial": "Here",
          "signature": "FilterPredicateT f-\u003eRecursePredicateT f-\u003eIO[FilePath]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:findpHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialisation of \u003ccode\u003e\u003ca\u003efindp\u003c/a\u003e\u003c/code\u003e to the \u003ccode\u003e\u003ca\u003eIdentity\u003c/a\u003e\u003c/code\u003e monad. Useful in assisting type-inference.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.Find",
          "name": "findpi",
          "package": "FilePather",
          "signature": "FilterPredicate -\u003e RecursePredicate -\u003e FilePath -\u003e IO [FilePath]",
          "source": "src/System-FilePath-FilePather-Find.html#findpi",
          "type": "function"
        },
        "index": {
          "description": "specialisation of findp to the Identity monad Useful in assisting type-inference",
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "findpi",
          "normalized": "FilterPredicate-\u003eRecursePredicate-\u003eFilePath-\u003eIO[FilePath]",
          "package": "FilePather",
          "signature": "FilterPredicate-\u003eRecursePredicate-\u003eFilePath-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:findpi"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "foundL",
          "package": "FilePather",
          "signature": "PartialLens FindR (FilePath, FileType)",
          "source": "src/System-FilePath-FilePather-Find.html#foundL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "foundL",
          "normalized": "PartialLens FindR(FilePath,FileType)",
          "package": "FilePather",
          "signature": "PartialLens FindR(FilePath,FileType)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:foundL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "foundR",
          "package": "FilePather",
          "signature": "FilePath -\u003e FileType -\u003e FindR",
          "source": "src/System-FilePath-FilePather-Find.html#foundR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "foundR",
          "normalized": "FilePath-\u003eFileType-\u003eFindR",
          "package": "FilePather",
          "signature": "FilePath-\u003eFileType-\u003eFindR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:foundR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "noRecurseL",
          "package": "FilePather",
          "signature": "PartialLens FindR FilePath",
          "source": "src/System-FilePath-FilePather-Find.html#noRecurseL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "noRecurseL",
          "package": "FilePather",
          "partial": "Recurse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:noRecurseL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "noRecurseR",
          "package": "FilePather",
          "signature": "FilePath -\u003e FindR",
          "source": "src/System-FilePath-FilePather-Find.html#noRecurseR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "noRecurseR",
          "normalized": "FilePath-\u003eFindR",
          "package": "FilePather",
          "partial": "Recurse",
          "signature": "FilePath-\u003eFindR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:noRecurseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "recurseL",
          "package": "FilePather",
          "signature": "PartialLens FindR FilePath",
          "source": "src/System-FilePath-FilePather-Find.html#recurseL",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "recurseL",
          "package": "FilePather",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:recurseL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.Find",
          "name": "recurseR",
          "package": "FilePather",
          "signature": "FilePath -\u003e FindR",
          "source": "src/System-FilePath-FilePather-Find.html#recurseR",
          "type": "function"
        },
        "index": {
          "hierarchy": "System FilePath FilePather Find",
          "module": "System.FilePath.FilePather.Find",
          "name": "recurseR",
          "normalized": "FilePath-\u003eFindR",
          "package": "FilePather",
          "signature": "FilePath-\u003eFindR",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-Find.html#v:recurseR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.LiftI",
          "name": "LiftI",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-LiftI.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather LiftI",
          "module": "System.FilePath.FilePather.LiftI",
          "name": "LiftI",
          "package": "FilePather",
          "partial": "Lift",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-LiftI.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type-class for lifting a value.\n This type-class probably belongs elsewhere (pointers appreciated!).\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.LiftI",
          "name": "LiftI",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-LiftI.html#LiftI",
          "type": "class"
        },
        "index": {
          "description": "type-class for lifting value This type-class probably belongs elsewhere pointers appreciated",
          "hierarchy": "System FilePath FilePather LiftI",
          "module": "System.FilePath.FilePather.LiftI",
          "name": "LiftI",
          "package": "FilePather",
          "partial": "Lift",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-LiftI.html#t:LiftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.LiftI",
          "name": "liftI",
          "package": "FilePather",
          "signature": "g a -\u003e f g",
          "source": "src/System-FilePath-FilePather-LiftI.html#liftI",
          "type": "method"
        },
        "index": {
          "hierarchy": "System FilePath FilePather LiftI",
          "module": "System.FilePath.FilePather.LiftI",
          "name": "liftI",
          "normalized": "a b-\u003ec a",
          "package": "FilePather",
          "signature": "g a-\u003ef g",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-LiftI.html#v:liftI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicate",
          "package": "FilePather",
          "partial": "Recurse Predicate",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recurse predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicate",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#RecursePredicate",
          "type": "type"
        },
        "index": {
          "description": "recurse predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicate",
          "package": "FilePather",
          "partial": "Recurse Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#t:RecursePredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA recurse predicate takes a \u003ccode\u003e\u003ca\u003eFilePath\u003c/a\u003e\u003c/code\u003e, which is a directory, and returns whether or not to continue recursing down on that directory.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicateT",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#RecursePredicateT",
          "type": "data"
        },
        "index": {
          "description": "recurse predicate takes FilePath which is directory and returns whether or not to continue recursing down on that directory",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "RecursePredicateT",
          "package": "FilePather",
          "partial": "Recurse Predicate",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#t:RecursePredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a recurse predicate that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "recursePredicate",
          "package": "FilePather",
          "signature": "(FilePath -\u003e Bool) -\u003e RecursePredicate",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#recursePredicate",
          "type": "function"
        },
        "index": {
          "description": "Construct recurse predicate that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "recursePredicate",
          "normalized": "(FilePath-\u003eBool)-\u003eRecursePredicate",
          "package": "FilePather",
          "partial": "Predicate",
          "signature": "(FilePath-\u003eBool)-\u003eRecursePredicate",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#v:recursePredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a recurse predicate. The most general construction function.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "recursePredicateT",
          "package": "FilePather",
          "signature": "(FilePath -\u003e f Bool) -\u003e RecursePredicateT f",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#recursePredicateT",
          "type": "function"
        },
        "index": {
          "description": "Construct recurse predicate The most general construction function",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "recursePredicateT",
          "normalized": "(FilePath-\u003ea Bool)-\u003eRecursePredicateT a",
          "package": "FilePather",
          "partial": "Predicate",
          "signature": "(FilePath-\u003ef Bool)-\u003eRecursePredicateT f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#v:recursePredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the recurse predicate function that does not require effects to compute its result.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "runRecursePredicate",
          "package": "FilePather",
          "signature": "RecursePredicate -\u003e FilePath -\u003e Bool",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#runRecursePredicate",
          "type": "function"
        },
        "index": {
          "description": "Extract the recurse predicate function that does not require effects to compute its result",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "runRecursePredicate",
          "normalized": "RecursePredicate-\u003eFilePath-\u003eBool",
          "package": "FilePather",
          "partial": "Recurse Predicate",
          "signature": "RecursePredicate-\u003eFilePath-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#v:runRecursePredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExtract the recurse predicate function.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "runRecursePredicateT",
          "package": "FilePather",
          "signature": "RecursePredicateT f -\u003e FilePath -\u003e f Bool",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#runRecursePredicateT",
          "type": "function"
        },
        "index": {
          "description": "Extract the recurse predicate function",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "runRecursePredicateT",
          "normalized": "RecursePredicateT a-\u003eFilePath-\u003ea Bool",
          "package": "FilePather",
          "partial": "Recurse Predicate",
          "signature": "RecursePredicateT f-\u003eFilePath-\u003ef Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#v:runRecursePredicateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert the recurse predicate to a filter predicate.\n\u003c/p\u003e",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "toFilterPredicate",
          "package": "FilePather",
          "signature": "RecursePredicateT f -\u003e FilterPredicateT f",
          "source": "src/System-FilePath-FilePather-RecursePredicate.html#toFilterPredicate",
          "type": "function"
        },
        "index": {
          "description": "Convert the recurse predicate to filter predicate",
          "hierarchy": "System FilePath FilePather RecursePredicate",
          "module": "System.FilePath.FilePather.RecursePredicate",
          "name": "toFilterPredicate",
          "normalized": "RecursePredicateT a-\u003eFilterPredicateT a",
          "package": "FilePather",
          "partial": "Filter Predicate",
          "signature": "RecursePredicateT f-\u003eFilterPredicateT f",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather-RecursePredicate.html#v:toFilterPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.FilePath.FilePather",
          "name": "FilePather",
          "package": "FilePather",
          "source": "src/System-FilePath-FilePather.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System FilePath FilePather",
          "module": "System.FilePath.FilePather",
          "name": "FilePather",
          "package": "FilePather",
          "partial": "File Pather",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/FilePather/docs/System-FilePath-FilePather.html#"
      }
    }
  ]
]