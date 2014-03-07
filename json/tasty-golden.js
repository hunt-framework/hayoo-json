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
        "word": "tasty-golden"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Golden.Advanced",
          "name": "Advanced",
          "package": "tasty-golden",
          "source": "src/Test-Tasty-Golden-Advanced.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "Advanced",
          "package": "tasty-golden",
          "partial": "Advanced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action that yields a value (either golden or tested).\n\u003c/p\u003e\u003cp\u003eCPS allows closing the file handle when using lazy IO to read data.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "ValueGetter",
          "package": "tasty-golden",
          "source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
          "type": "newtype"
        },
        "index": {
          "description": "An action that yields value either golden or tested CPS allows closing the file handle when using lazy IO to read data",
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "ValueGetter",
          "package": "tasty-golden",
          "partial": "Value Getter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#t:ValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Golden.Advanced",
          "name": "ValueGetter",
          "package": "tasty-golden",
          "signature": "ValueGetter",
          "source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "ValueGetter",
          "package": "tasty-golden",
          "partial": "Value Getter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:ValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA very general testing function.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "goldenTest",
          "package": "tasty-golden",
          "signature": "TestName-\u003e (forall r.  ValueGetter r a)-\u003e (forall r.  ValueGetter r a)-\u003e (a -\u003e a -\u003e IO (Maybe String))-\u003e (a -\u003e IO ())-\u003e TestTree",
          "type": "function"
        },
        "index": {
          "description": "very general testing function",
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "goldenTest",
          "normalized": "TestName-\u003e(a b ValueGetter c d)-\u003e(a b ValueGetter c d)-\u003e(d-\u003ed-\u003eIO(Maybe String))-\u003e(d-\u003eIO())-\u003eTestTree",
          "package": "tasty-golden",
          "partial": "Test",
          "signature": "TestName-\u003e(forall r. ValueGetter r a)-\u003e(forall r. ValueGetter r a)-\u003e(a-\u003ea-\u003eIO(Maybe String))-\u003e(a-\u003eIO())-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:goldenTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Golden.Advanced",
          "name": "runValueGetter",
          "package": "tasty-golden",
          "signature": "ContT r IO a",
          "source": "src/Test-Tasty-Golden-Internal.html#ValueGetter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "runValueGetter",
          "package": "tasty-golden",
          "partial": "Value Getter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:runValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a file. The file handle will be closed after the\n \u003ccode\u003e\u003ca\u003eValueGetter\u003c/a\u003e\u003c/code\u003e action is run.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "vgReadFile",
          "package": "tasty-golden",
          "signature": "FilePath -\u003e ValueGetter r ByteString",
          "source": "src/Test-Tasty-Golden-Internal.html#vgReadFile",
          "type": "function"
        },
        "index": {
          "description": "Lazily read file The file handle will be closed after the ValueGetter action is run",
          "hierarchy": "Test Tasty Golden Advanced",
          "module": "Test.Tasty.Golden.Advanced",
          "name": "vgReadFile",
          "normalized": "FilePath-\u003eValueGetter a ByteString",
          "package": "tasty-golden",
          "partial": "Read File",
          "signature": "FilePath-\u003eValueGetter r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Advanced.html#v:vgReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGolden test management\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Tasty.Golden.Manage",
          "name": "Manage",
          "package": "tasty-golden",
          "source": "src/Test-Tasty-Golden-Manage.html",
          "type": "module"
        },
        "index": {
          "description": "Golden test management",
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "Manage",
          "package": "tasty-golden",
          "partial": "Manage",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis option, when set to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, specifies that we should run in the\n &#171;accept tests&#187; mod\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Manage",
          "name": "AcceptTests",
          "package": "tasty-golden",
          "source": "src/Test-Tasty-Golden-Manage.html#AcceptTests",
          "type": "newtype"
        },
        "index": {
          "description": "This option when set to True specifies that we should run in the accept tests mod",
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "AcceptTests",
          "package": "tasty-golden",
          "partial": "Accept Tests",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#t:AcceptTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Golden.Manage",
          "name": "AcceptTests",
          "package": "tasty-golden",
          "signature": "AcceptTests Bool",
          "source": "src/Test-Tasty-Golden-Manage.html#AcceptTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "AcceptTests",
          "package": "tasty-golden",
          "partial": "Accept Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:AcceptTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccept all golden tests in the test tree\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Manage",
          "name": "acceptGoldenTests",
          "package": "tasty-golden",
          "signature": "OptionSet -\u003e TestTree -\u003e IO ()",
          "source": "src/Test-Tasty-Golden-Manage.html#acceptGoldenTests",
          "type": "function"
        },
        "index": {
          "description": "Accept all golden tests in the test tree",
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "acceptGoldenTests",
          "normalized": "OptionSet-\u003eTestTree-\u003eIO()",
          "package": "tasty-golden",
          "partial": "Golden Tests",
          "signature": "OptionSet-\u003eTestTree-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:acceptGoldenTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Tasty.Golden.Manage",
          "name": "acceptingTests",
          "package": "tasty-golden",
          "signature": "Ingredient",
          "source": "src/Test-Tasty-Golden-Manage.html#acceptingTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "acceptingTests",
          "package": "tasty-golden",
          "partial": "Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:acceptingTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003edefaultMain\u003c/code\u003e from the main tasty package, but also includes the\n golden test management capabilities.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden.Manage",
          "name": "defaultMain",
          "package": "tasty-golden",
          "signature": "TestTree -\u003e IO ()",
          "source": "src/Test-Tasty-Golden-Manage.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "Like defaultMain from the main tasty package but also includes the golden test management capabilities",
          "hierarchy": "Test Tasty Golden Manage",
          "module": "Test.Tasty.Golden.Manage",
          "name": "defaultMain",
          "normalized": "TestTree-\u003eIO()",
          "package": "tasty-golden",
          "partial": "Main",
          "signature": "TestTree-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden-Manage.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simplified interface. If you want more, see\n\u003ca\u003eTest.Tasty.Golden.Advanced\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eNote about filenames. They are looked up in the usual way, thus relative\nnames are relative to the processes current working directory.\nIt is common to run tests from the package's root directory (via \u003ccode\u003ecabal\ntest\u003c/code\u003e or \u003ccode\u003ecabal install --enable-tests\u003c/code\u003e), so if your test files are under\nthe \u003ccode\u003etests/\u003c/code\u003e subdirectory, your relative file names should start with\n\u003ccode\u003etests/\u003c/code\u003e (even if your \u003ccode\u003etest.hs\u003c/code\u003e is itself under \u003ccode\u003etests/\u003c/code\u003e, too).\n\u003c/p\u003e\u003cp\u003eNote about line endings. The best way to avoid headaches with line endings\n(when running tests both on UNIX and Windows) is to treat your golden files\nas binary, even when they are actually textual.\n\u003c/p\u003e\u003cp\u003eThis means:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e When writing output files from Haskell code, open them in binary mode\n(see \u003ccode\u003e\u003ca\u003eopenBinaryFile\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003ewithBinaryFile\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003ehSetBinaryMode\u003c/a\u003e\u003c/code\u003e). This will\ndisable automatic \u003ccode\u003e\\n -\u003e \\r\\n\u003c/code\u003e conversion on Windows. For convenience, this\nmodule exports \u003ccode\u003e\u003ca\u003ewriteBinaryFile\u003c/a\u003e\u003c/code\u003e which is just like \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e but opens\nthe file in binary mode. When using \u003ccode\u003eByteString\u003c/code\u003es note that\n\u003ca\u003eData.ByteString\u003c/a\u003e and \u003ca\u003eData.ByteString.Lazy\u003c/a\u003e use binary mode for\n\u003ccode\u003ewriteFile\u003c/code\u003e, while \u003ca\u003eData.ByteString.Char8\u003c/a\u003e and \u003ca\u003eData.ByteString.Lazy.Char8\u003c/a\u003e\nuse text mode.\n\u003c/li\u003e\u003cli\u003e Tell your VCS not to do any newline conversion for golden files. For\n git check in a \u003ccode\u003e.gitattributes\u003c/code\u003e file with the following contents (assuming\n your golden files have \u003ccode\u003e.golden\u003c/code\u003e extension):\n\u003c/li\u003e\u003c/ul\u003e\u003cpre\u003e*.golden\t-text\n\u003c/pre\u003e\u003cp\u003eOn its side, tasty-golden reads and writes files in binary mode, too.\n\u003c/p\u003e\u003cp\u003eWhy not let Haskell/git do automatic conversion on Windows? Well, for\ninstance, \u003ccode\u003etar\u003c/code\u003e will not do the conversion for you when unpacking a release\ntarball, so when you run \u003ccode\u003ecabal install your-package --enable-tests\u003c/code\u003e, the\ntests will be broken.\n\u003c/p\u003e\u003cp\u003eAs a last resort, you can strip all \u003ccode\u003e\\r\u003c/code\u003es from both arguments in your\ncomparison function when necessary. But most of the time treating the files\nas binary does the job.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Tasty.Golden",
          "name": "Golden",
          "package": "tasty-golden",
          "source": "src/Test-Tasty-Golden.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides simplified interface If you want more see Test.Tasty.Golden.Advanced Note about filenames They are looked up in the usual way thus relative names are relative to the processes current working directory It is common to run tests from the package root directory via cabal test or cabal install enable-tests so if your test files are under the tests subdirectory your relative file names should start with tests even if your test.hs is itself under tests too Note about line endings The best way to avoid headaches with line endings when running tests both on UNIX and Windows is to treat your golden files as binary even when they are actually textual This means When writing output files from Haskell code open them in binary mode see openBinaryFile withBinaryFile and hSetBinaryMode This will disable automatic conversion on Windows For convenience this module exports writeBinaryFile which is just like writeFile but opens the file in binary mode When using ByteString note that Data.ByteString and Data.ByteString.Lazy use binary mode for writeFile while Data.ByteString.Char8 and Data.ByteString.Lazy.Char8 use text mode Tell your VCS not to do any newline conversion for golden files For git check in gitattributes file with the following contents assuming your golden files have golden extension golden text On its side tasty-golden reads and writes files in binary mode too Why not let Haskell git do automatic conversion on Windows Well for instance tar will not do the conversion for you when unpacking release tarball so when you run cabal install your-package enable-tests the tests will be broken As last resort you can strip all from both arguments in your comparison function when necessary But most of the time treating the files as binary does the job",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "Golden",
          "package": "tasty-golden",
          "partial": "Golden",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare a given file contents against the golden file contents\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsFile",
          "package": "tasty-golden",
          "signature": "TestName-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e TestTree",
          "type": "function"
        },
        "index": {
          "description": "Compare given file contents against the golden file contents",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsFile",
          "normalized": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
          "package": "tasty-golden",
          "partial": "Vs File",
          "signature": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsFile\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsFileDiff",
          "package": "tasty-golden",
          "signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e TestTree",
          "type": "function"
        },
        "index": {
          "description": "Same as goldenVsFile but invokes an external diff command",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsFileDiff",
          "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
          "package": "tasty-golden",
          "partial": "Vs File Diff",
          "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsFileDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare a given string against the golden file contents\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsString",
          "package": "tasty-golden",
          "signature": "TestName-\u003e FilePath-\u003e IO ByteString-\u003e TestTree",
          "type": "function"
        },
        "index": {
          "description": "Compare given string against the golden file contents",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsString",
          "normalized": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
          "package": "tasty-golden",
          "partial": "Vs String",
          "signature": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsString\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsStringDiff",
          "package": "tasty-golden",
          "signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e IO ByteString-\u003e TestTree",
          "type": "function"
        },
        "index": {
          "description": "Same as goldenVsString but invokes an external diff command",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "goldenVsStringDiff",
          "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
          "package": "tasty-golden",
          "partial": "Vs String Diff",
          "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:goldenVsStringDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003ewriteFile\u003c/a\u003e\u003c/code\u003e, but uses binary mode\n\u003c/p\u003e",
          "module": "Test.Tasty.Golden",
          "name": "writeBinaryFile",
          "package": "tasty-golden",
          "signature": "FilePath -\u003e String -\u003e IO ()",
          "source": "src/Test-Tasty-Golden.html#writeBinaryFile",
          "type": "function"
        },
        "index": {
          "description": "Like writeFile but uses binary mode",
          "hierarchy": "Test Tasty Golden",
          "module": "Test.Tasty.Golden",
          "name": "writeBinaryFile",
          "normalized": "FilePath-\u003eString-\u003eIO()",
          "package": "tasty-golden",
          "partial": "Binary File",
          "signature": "FilePath-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tasty-golden/docs/Test-Tasty-Golden.html#v:writeBinaryFile"
      }
    }
  ]
]