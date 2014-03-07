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
        "word": "test-framework-golden"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Golden.Advanced",
          "name": "Advanced",
          "package": "test-framework-golden",
          "source": "src/Test-Golden-Advanced.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "Advanced",
          "package": "test-framework-golden",
          "partial": "Advanced",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn action that yields a value (either golden or tested).\n\u003c/p\u003e\u003cp\u003eCPS allows closing the file handle when using lazy IO to read data.\n\u003c/p\u003e",
          "module": "Test.Golden.Advanced",
          "name": "ValueGetter",
          "package": "test-framework-golden",
          "source": "src/Test-Golden-Internal.html#ValueGetter",
          "type": "newtype"
        },
        "index": {
          "description": "An action that yields value either golden or tested CPS allows closing the file handle when using lazy IO to read data",
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "ValueGetter",
          "package": "test-framework-golden",
          "partial": "Value Getter",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#t:ValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Golden.Advanced",
          "name": "ValueGetter",
          "package": "test-framework-golden",
          "signature": "ValueGetter",
          "source": "src/Test-Golden-Internal.html#ValueGetter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "ValueGetter",
          "package": "test-framework-golden",
          "partial": "Value Getter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#v:ValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA very general testing function.\n\u003c/p\u003e",
          "module": "Test.Golden.Advanced",
          "name": "goldenTest",
          "package": "test-framework-golden",
          "signature": "TestName-\u003e (forall r.  ValueGetter r a)-\u003e (forall r.  ValueGetter r a)-\u003e (a -\u003e a -\u003e IO (Maybe String))-\u003e (a -\u003e IO ())-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "very general testing function",
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "goldenTest",
          "normalized": "TestName-\u003e(a b ValueGetter c d)-\u003e(a b ValueGetter c d)-\u003e(d-\u003ed-\u003eIO(Maybe String))-\u003e(d-\u003eIO())-\u003eTest",
          "package": "test-framework-golden",
          "partial": "Test",
          "signature": "TestName-\u003e(forall r. ValueGetter r a)-\u003e(forall r. ValueGetter r a)-\u003e(a-\u003ea-\u003eIO(Maybe String))-\u003e(a-\u003eIO())-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#v:goldenTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Golden.Advanced",
          "name": "runValueGetter",
          "package": "test-framework-golden",
          "signature": "ContT r IO a",
          "source": "src/Test-Golden-Internal.html#ValueGetter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "runValueGetter",
          "package": "test-framework-golden",
          "partial": "Value Getter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#v:runValueGetter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLazily read a file. The file handle will be closed after the\n \u003ccode\u003e\u003ca\u003eValueGetter\u003c/a\u003e\u003c/code\u003e action is run.\n\u003c/p\u003e",
          "module": "Test.Golden.Advanced",
          "name": "vgReadFile",
          "package": "test-framework-golden",
          "signature": "FilePath -\u003e ValueGetter r ByteString",
          "source": "src/Test-Golden-Internal.html#vgReadFile",
          "type": "function"
        },
        "index": {
          "description": "Lazily read file The file handle will be closed after the ValueGetter action is run",
          "hierarchy": "Test Golden Advanced",
          "module": "Test.Golden.Advanced",
          "name": "vgReadFile",
          "normalized": "FilePath-\u003eValueGetter a ByteString",
          "package": "test-framework-golden",
          "partial": "Read File",
          "signature": "FilePath-\u003eValueGetter r ByteString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden-Advanced.html#v:vgReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides a simplified interface. If you want more, see\n\u003ca\u003eTest.Golden.Advanced\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Golden",
          "name": "Golden",
          "package": "test-framework-golden",
          "source": "src/Test-Golden.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides simplified interface If you want more see Test.Golden.Advanced",
          "hierarchy": "Test Golden",
          "module": "Test.Golden",
          "name": "Golden",
          "package": "test-framework-golden",
          "partial": "Golden",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare a given file contents against the golden file contents\n\u003c/p\u003e",
          "module": "Test.Golden",
          "name": "goldenVsFile",
          "package": "test-framework-golden",
          "signature": "TestName-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Compare given file contents against the golden file contents",
          "hierarchy": "Test Golden",
          "module": "Test.Golden",
          "name": "goldenVsFile",
          "normalized": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTest",
          "package": "test-framework-golden",
          "partial": "Vs File",
          "signature": "TestName-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden.html#v:goldenVsFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsFile\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
          "module": "Test.Golden",
          "name": "goldenVsFileDiff",
          "package": "test-framework-golden",
          "signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e FilePath-\u003e IO ()-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Same as goldenVsFile but invokes an external diff command",
          "hierarchy": "Test Golden",
          "module": "Test.Golden",
          "name": "goldenVsFileDiff",
          "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTest",
          "package": "test-framework-golden",
          "partial": "Vs File Diff",
          "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eFilePath-\u003eIO()-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden.html#v:goldenVsFileDiff"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare a given string against the golden file contents\n\u003c/p\u003e",
          "module": "Test.Golden",
          "name": "goldenVsString",
          "package": "test-framework-golden",
          "signature": "TestName-\u003e FilePath-\u003e IO ByteString-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Compare given string against the golden file contents",
          "hierarchy": "Test Golden",
          "module": "Test.Golden",
          "name": "goldenVsString",
          "normalized": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTest",
          "package": "test-framework-golden",
          "partial": "Vs String",
          "signature": "TestName-\u003eFilePath-\u003eIO ByteString-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden.html#v:goldenVsString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egoldenVsString\u003c/a\u003e\u003c/code\u003e, but invokes an external diff command.\n\u003c/p\u003e",
          "module": "Test.Golden",
          "name": "goldenVsStringDiff",
          "package": "test-framework-golden",
          "signature": "TestName-\u003e (FilePath -\u003e FilePath -\u003e [String])-\u003e FilePath-\u003e IO ByteString-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Same as goldenVsString but invokes an external diff command",
          "hierarchy": "Test Golden",
          "module": "Test.Golden",
          "name": "goldenVsStringDiff",
          "normalized": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTest",
          "package": "test-framework-golden",
          "partial": "Vs String Diff",
          "signature": "TestName-\u003e(FilePath-\u003eFilePath-\u003e[String])-\u003eFilePath-\u003eIO ByteString-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-golden/docs/Test-Golden.html#v:goldenVsStringDiff"
      }
    }
  ]
]