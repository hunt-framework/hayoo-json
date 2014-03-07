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
        "word": "test-framework-program"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Framework.Providers.Program",
          "name": "Program",
          "package": "test-framework-program",
          "source": "src/Test-Framework-Providers-Program.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test Framework Providers Program",
          "module": "Test.Framework.Providers.Program",
          "name": "Program",
          "package": "test-framework-program",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-program/docs/Test-Framework-Providers-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA shorthand for a possible function checking an output stream.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.Program",
          "name": "Checker",
          "package": "test-framework-program",
          "source": "src/Test-Framework-Providers-Program.html#Checker",
          "type": "type"
        },
        "index": {
          "description": "shorthand for possible function checking an output stream",
          "hierarchy": "Test Framework Providers Program",
          "module": "Test.Framework.Providers.Program",
          "name": "Checker",
          "package": "test-framework-program",
          "partial": "Checker",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-program/docs/Test-Framework-Providers-Program.html#t:Checker"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that a given program runs correctly (exits successfully), and that\n its stdout / stderr are acceptable.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.Program",
          "name": "testProgramOutput",
          "package": "test-framework-program",
          "signature": "String -\u003e FilePath -\u003e [String] -\u003e Checker -\u003e Checker -\u003e Test",
          "source": "src/Test-Framework-Providers-Program.html#testProgramOutput",
          "type": "function"
        },
        "index": {
          "description": "Test that given program runs correctly exits successfully and that its stdout stderr are acceptable",
          "hierarchy": "Test Framework Providers Program",
          "module": "Test.Framework.Providers.Program",
          "name": "testProgramOutput",
          "normalized": "String-\u003eFilePath-\u003e[String]-\u003eChecker-\u003eChecker-\u003eTest",
          "package": "test-framework-program",
          "partial": "Program Output",
          "signature": "String-\u003eFilePath-\u003e[String]-\u003eChecker-\u003eChecker-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-program/docs/Test-Framework-Providers-Program.html#v:testProgramOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTest that a given program runs correctly with the given arguments. 'Runs\n correctly' is defined as running and exiting with a successful (0) error\n code.\n\u003c/p\u003e",
          "module": "Test.Framework.Providers.Program",
          "name": "testProgramRuns",
          "package": "test-framework-program",
          "signature": "String -\u003e FilePath -\u003e [String] -\u003e Test",
          "source": "src/Test-Framework-Providers-Program.html#testProgramRuns",
          "type": "function"
        },
        "index": {
          "description": "Test that given program runs correctly with the given arguments Runs correctly is defined as running and exiting with successful error code",
          "hierarchy": "Test Framework Providers Program",
          "module": "Test.Framework.Providers.Program",
          "name": "testProgramRuns",
          "normalized": "String-\u003eFilePath-\u003e[String]-\u003eTest",
          "package": "test-framework-program",
          "partial": "Program Runs",
          "signature": "String-\u003eFilePath-\u003e[String]-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/test-framework-program/docs/Test-Framework-Providers-Program.html#v:testProgramRuns"
      }
    }
  ]
]