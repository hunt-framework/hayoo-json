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
        "word": "testloop"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.TestLoop",
          "name": "TestLoop",
          "package": "testloop",
          "source": "src/System-TestLoop.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "System TestLoop",
          "module": "System.TestLoop",
          "name": "TestLoop",
          "package": "testloop",
          "partial": "Test Loop",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testloop/docs/System-TestLoop.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParses your project's cabal file to find possible test-suites you\n   may have on your project, then it will start a tracking process\n   that listens to changes on files specified on the hs-source-dirs\n   parameter of your testsuite, once a file is changed this process will\n   run the testsuite automatically.\n\u003c/p\u003e\u003cp\u003eUse this function as the main of you testloop executable.\n e.g\n\u003c/p\u003e\u003cp\u003eOn Cabal File\n\u003c/p\u003e\u003cpre\u003e test-suite lib-tests\n   type: exitcode-stdio-1.0\n   main-is: TestSuite.hs\n   hs-source-dirs:\n     src, test\n   build-depends:\n     -- test dependencies\n\n executable testloop\n   main-is: TestLoop.hs\n   hs-source-dirs:\n     src, test\n   build-depends:\n     -- Your lib/app and test dependencies ... + testloop\n     testloop\n\u003c/pre\u003e\u003cp\u003eOn test/TestLoop.hs\n\u003c/p\u003e\u003cpre\u003e module Main where\n\n import System.TestLoop\n\n main :: IO ()\n main = setupTestLoop\n\u003c/pre\u003e",
          "module": "System.TestLoop",
          "name": "setupTestLoop",
          "package": "testloop",
          "signature": "IO ()",
          "source": "src/System-TestLoop.html#setupTestLoop",
          "type": "function"
        },
        "index": {
          "description": "Parses your project cabal file to find possible test-suites you may have on your project then it will start tracking process that listens to changes on files specified on the hs-source-dirs parameter of your testsuite once file is changed this process will run the testsuite automatically Use this function as the main of you testloop executable e.g On Cabal File test-suite lib-tests type exitcode-stdio-1.0 main-is TestSuite.hs hs-source-dirs src test build-depends test dependencies executable testloop main-is TestLoop.hs hs-source-dirs src test build-depends Your lib app and test dependencies testloop testloop On test TestLoop.hs module Main where import System.TestLoop main IO main setupTestLoop",
          "hierarchy": "System TestLoop",
          "module": "System.TestLoop",
          "name": "setupTestLoop",
          "normalized": "IO()",
          "package": "testloop",
          "partial": "Test Loop",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testloop/docs/System-TestLoop.html#v:setupTestLoop"
      }
    }
  ]
]