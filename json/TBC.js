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
        "word": "TBC"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "TBC",
          "package": "TBC",
          "source": "src/Test-TBC.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TBC",
          "package": "TBC",
          "partial": "TBC",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn \u003cem\u003eaction\u003c/em\u003e tells TBC what to do when it (recursively) encounters\n a directory or file.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Action",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Action",
          "type": "data"
        },
        "index": {
          "description": "An action tells TBC what to do when it recursively encounters directory or file",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Action",
          "package": "TBC",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA collection of conventions.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Conventions",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Conventions",
          "type": "data"
        },
        "index": {
          "description": "collection of conventions",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Conventions",
          "package": "TBC",
          "partial": "Conventions",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Conventions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003edirectory convention\u003c/em\u003e maps a directory name into an action.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "DirectoryConvention",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#DirectoryConvention",
          "type": "type"
        },
        "index": {
          "description": "directory convention maps directory name into an action",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "DirectoryConvention",
          "package": "TBC",
          "partial": "Directory Convention",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:DirectoryConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInteraction with a Haskell system.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Driver",
          "package": "TBC",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "data"
        },
        "index": {
          "description": "Interaction with Haskell system",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Driver",
          "package": "TBC",
          "partial": "Driver",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLocation of a \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Location",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Location",
          "type": "data"
        },
        "index": {
          "description": "Location of Test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Location",
          "package": "TBC",
          "partial": "Location",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe collection of rendering functions.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "RenderFns",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "data"
        },
        "index": {
          "description": "The collection of rendering functions",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "RenderFns",
          "package": "TBC",
          "partial": "Render Fns",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:RenderFns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA renderer maps a verbosity level into a bunch of functions that\n tells the user of various events.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Renderer",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Renderer",
          "type": "type"
        },
        "index": {
          "description": "renderer maps verbosity level into bunch of functions that tells the user of various events",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Renderer",
          "package": "TBC",
          "partial": "Renderer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Renderer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of a single \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Result",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "data"
        },
        "index": {
          "description": "The result of single Test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Result",
          "package": "TBC",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single test.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Test",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#Test",
          "type": "data"
        },
        "index": {
          "description": "single test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Test",
          "package": "TBC",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003etest convention\u003c/em\u003e maps a line in a \u003ccode\u003eTestFile\u003c/code\u003e into a function\n that runs the test.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestConvention",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#TestConvention",
          "type": "type"
        },
        "index": {
          "description": "test convention maps line in TestFile into function that runs the test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestConvention",
          "package": "TBC",
          "partial": "Test Convention",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:TestConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003cem\u003etest file convention\u003c/em\u003e maps a file name into an action.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestFileConvention",
          "package": "TBC",
          "source": "src/Test-TBC-Core.html#TestFileConvention",
          "type": "type"
        },
        "index": {
          "description": "test file convention maps file name into an action",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestFileConvention",
          "package": "TBC",
          "partial": "Test File Convention",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:TestFileConvention"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "Verbosity",
          "package": "TBC",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Verbosity",
          "package": "TBC",
          "partial": "Verbosity",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#t:Verbosity"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProcess this file or directory.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Cont",
          "package": "TBC",
          "signature": "Cont",
          "source": "src/Test-TBC-Core.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Process this file or directory",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Cont",
          "package": "TBC",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "Conventions",
          "package": "TBC",
          "signature": "Conventions",
          "source": "src/Test-TBC-Core.html#Conventions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Conventions",
          "package": "TBC",
          "partial": "Conventions",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Conventions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "Location",
          "package": "TBC",
          "signature": "Location",
          "source": "src/Test-TBC-Core.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Location",
          "package": "TBC",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Location"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "MkDriver",
          "package": "TBC",
          "signature": "MkDriver",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "MkDriver",
          "package": "TBC",
          "partial": "Mk Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:MkDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "RenderFns",
          "package": "TBC",
          "signature": "RenderFns",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "RenderFns",
          "package": "TBC",
          "partial": "Render Fns",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:RenderFns"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip this file or directory.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Skip",
          "package": "TBC",
          "signature": "Skip",
          "source": "src/Test-TBC-Core.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Skip this file or directory",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Skip",
          "package": "TBC",
          "partial": "Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Skip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCease testing.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "Stop",
          "package": "TBC",
          "signature": "Stop",
          "source": "src/Test-TBC-Core.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Cease testing",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Stop",
          "package": "TBC",
          "partial": "Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Stop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "Test",
          "package": "TBC",
          "signature": "Test",
          "source": "src/Test-TBC-Core.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "Test",
          "package": "TBC",
          "partial": "Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test failed with this explanation.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestResultFailure",
          "package": "TBC",
          "signature": "TestResultFailure",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The test failed with this explanation",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestResultFailure",
          "package": "TBC",
          "partial": "Test Result Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:TestResultFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip this test.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestResultSkip",
          "package": "TBC",
          "signature": "TestResultSkip",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Skip this test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestResultSkip",
          "package": "TBC",
          "partial": "Test Result Skip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:TestResultSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCease testing.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestResultStop",
          "package": "TBC",
          "signature": "TestResultStop",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "description": "Cease testing",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestResultStop",
          "package": "TBC",
          "partial": "Test Result Stop",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:TestResultStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test succeeded.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestResultSuccess",
          "package": "TBC",
          "signature": "TestResultSuccess",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "description": "The test succeeded",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestResultSuccess",
          "package": "TBC",
          "partial": "Test Result Success",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:TestResultSuccess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis test has not yet been written.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "TestResultToDo",
          "package": "TBC",
          "signature": "TestResultToDo",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "description": "This test has not yet been written",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "TestResultToDo",
          "package": "TBC",
          "partial": "Test Result To Do",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:TestResultToDo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a list of conventions to the guts of a \u003ccode\u003eTestFile\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "applyTestConventions",
          "package": "TBC",
          "signature": "[TestConvention] -\u003e FilePath -\u003e String -\u003e [Test]",
          "source": "src/Test-TBC-Core.html#applyTestConventions",
          "type": "function"
        },
        "index": {
          "description": "Apply list of conventions to the guts of TestFile",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "applyTestConventions",
          "normalized": "[TestConvention]-\u003eFilePath-\u003eString-\u003e[Test]",
          "package": "TBC",
          "partial": "Test Conventions",
          "signature": "[TestConvention]-\u003eFilePath-\u003eString-\u003e[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:applyTestConventions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test should yield the string \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e. This should work for\n tests of type \u003ccode\u003eBool\u003c/code\u003e, \u003ccode\u003eIO Bool\u003c/code\u003e, \u003ccode\u003eIO ()\u003c/code\u003e with a \u003ccode\u003eputStrLn\u003c/code\u003e, ...\n\u003c/p\u003e\u003cp\u003eNote the \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003e in its implementation is not entirely useless: the\n test may use \u003ccode\u003eunsafePerformIO\u003c/code\u003e or \u003ccode\u003etrace\u003c/code\u003e to incidentally output\n things after \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "booltest",
          "package": "TBC",
          "signature": "TestConvention",
          "source": "src/Test-TBC-Convention.html#booltest",
          "type": "function"
        },
        "index": {
          "description": "The test should yield the string True This should work for tests of type Bool IO Bool IO with putStrLn Note the seq in its implementation is not entirely useless the test may use unsafePerformIO or trace to incidentally output things after True",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "booltest",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:booltest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe directory convention.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "cDirectory",
          "package": "TBC",
          "signature": "DirectoryConvention s",
          "source": "src/Test-TBC-Core.html#Conventions",
          "type": "function"
        },
        "index": {
          "description": "The directory convention",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "cDirectory",
          "package": "TBC",
          "partial": "Directory",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:cDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe filename convention.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "cTestFile",
          "package": "TBC",
          "signature": "TestFileConvention s",
          "source": "src/Test-TBC-Core.html#Conventions",
          "type": "function"
        },
        "index": {
          "description": "The filename convention",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "cTestFile",
          "package": "TBC",
          "partial": "Test File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:cTestFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe test conventions.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "cTests",
          "package": "TBC",
          "signature": "[TestConvention]",
          "source": "src/Test-TBC-Core.html#Conventions",
          "type": "function"
        },
        "index": {
          "description": "The test conventions",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "cTests",
          "normalized": "[TestConvention]",
          "package": "TBC",
          "partial": "Tests",
          "signature": "[TestConvention]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:cTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "deafening",
          "package": "TBC",
          "signature": "Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "deafening",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:deafening"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetailed internal debugging information\n\u003c/p\u003e\u003cp\u003eWe display these messages when the verbosity level is \u003ccode\u003e\u003ca\u003edeafening\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "debug",
          "package": "TBC",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Detailed internal debugging information We display these messages when the verbosity level is deafening",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "debug",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "TBC",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:debug"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a drop-in replacement for Cabal's\n \u003ccode\u003e\u003ca\u003edefaultMain\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eHowever the test infrastructure in Cabal has changed since this was\n written, and its use is discouraged. Use the TBC binary instead.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "defaultMain",
          "package": "TBC",
          "signature": "IO ()",
          "source": "src/Test-TBC.html#defaultMain",
          "type": "function"
        },
        "index": {
          "description": "This is drop-in replacement for Cabal defaultMain However the test infrastructure in Cabal has changed since this was written and its use is discouraged Use the TBC binary instead",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "defaultMain",
          "normalized": "IO()",
          "package": "TBC",
          "partial": "Main",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:defaultMain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eseq\u003c/a\u003e\u003c/code\u003eed test should throw an exception.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "exception",
          "package": "TBC",
          "signature": "TestConvention",
          "source": "src/Test-TBC-Convention.html#exception",
          "type": "function"
        },
        "index": {
          "description": "The seq ed test should throw an exception",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "exception",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA driver for \u003ccode\u003eGHCi\u003c/code\u003e using a slave process.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "ghci",
          "package": "TBC",
          "signature": "Verbosity-\u003e String-\u003e [String]-\u003e IO Driver",
          "type": "function"
        },
        "index": {
          "description": "driver for GHCi using slave process",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "ghci",
          "normalized": "Verbosity-\u003eString-\u003e[String]-\u003eIO Driver",
          "package": "TBC",
          "signature": "Verbosity-\u003eString-\u003e[String]-\u003eIO Driver",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:ghci"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClean exit.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "hci_close",
          "package": "TBC",
          "signature": "IO ExitCode",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "function"
        },
        "index": {
          "description": "Clean exit",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "hci_close",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:hci_close"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTerminate with prejudice.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "hci_kill",
          "package": "TBC",
          "signature": "IO ()",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "function"
        },
        "index": {
          "description": "Terminate with prejudice",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "hci_kill",
          "normalized": "IO()",
          "package": "TBC",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:hci_kill"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad a file into the Haskell system.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "hci_load_file",
          "package": "TBC",
          "signature": "String -\u003e IO [String]",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "function"
        },
        "index": {
          "description": "Load file into the Haskell system",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "hci_load_file",
          "normalized": "String-\u003eIO[String]",
          "package": "TBC",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:hci_load_file"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute the given Haskell code and return the response as a list of lines.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "hci_send_cmd",
          "package": "TBC",
          "signature": "String -\u003e IO [String]",
          "source": "src/Test-TBC-Drivers.html#Driver",
          "type": "function"
        },
        "index": {
          "description": "Execute the given Haskell code and return the response as list of lines",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "hci_send_cmd",
          "normalized": "String-\u003eIO[String]",
          "package": "TBC",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:hci_send_cmd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA HUnit unit test.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "hunit",
          "package": "TBC",
          "signature": "TestConvention",
          "source": "src/Test-TBC-Convention.html#hunit",
          "type": "function"
        },
        "index": {
          "description": "HUnit unit test",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "hunit",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:hunit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMore detail on the operation of some action.\n\u003c/p\u003e\u003cp\u003eWe display these messages when the verbosity level is \u003ccode\u003e\u003ca\u003everbose\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "info",
          "package": "TBC",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "More detail on the operation of some action We display these messages when the verbosity level is verbose",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "info",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "TBC",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:info"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "lColumn",
          "package": "TBC",
          "signature": "Int",
          "source": "src/Test-TBC-Core.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "lColumn",
          "package": "TBC",
          "partial": "Column",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:lColumn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "lFile",
          "package": "TBC",
          "signature": "FilePath",
          "source": "src/Test-TBC-Core.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "lFile",
          "package": "TBC",
          "partial": "File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:lFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "lLine",
          "package": "TBC",
          "signature": "Int",
          "source": "src/Test-TBC-Core.html#Location",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "lLine",
          "package": "TBC",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:lLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConstruct a location.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "mkLocation",
          "package": "TBC",
          "signature": "FilePath -\u003e Int -\u003e Int -\u003e Location",
          "source": "src/Test-TBC-Core.html#mkLocation",
          "type": "function"
        },
        "index": {
          "description": "Construct location",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "mkLocation",
          "normalized": "FilePath-\u003eInt-\u003eInt-\u003eLocation",
          "package": "TBC",
          "partial": "Location",
          "signature": "FilePath-\u003eInt-\u003eInt-\u003eLocation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:mkLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDiscern a test name from a string, viz the entirety of the varid\n starting at the start of the string. FIXME this should follow the\n Haskell lexical conventions and perhaps be more robust.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "mkTestName",
          "package": "TBC",
          "signature": "String -\u003e String",
          "source": "src/Test-TBC-Core.html#mkTestName",
          "type": "function"
        },
        "index": {
          "description": "Discern test name from string viz the entirety of the varid starting at the start of the string FIXME this should follow the Haskell lexical conventions and perhaps be more robust",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "mkTestName",
          "normalized": "String-\u003eString",
          "package": "TBC",
          "partial": "Test Name",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:mkTestName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "msg",
          "package": "TBC",
          "signature": "[String]",
          "source": "src/Test-TBC-Core.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "msg",
          "normalized": "[String]",
          "package": "TBC",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:msg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "normal",
          "package": "TBC",
          "signature": "Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "normal",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:normal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUseful status messages.\n\u003c/p\u003e\u003cp\u003eWe display these at the \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e verbosity level.\n\u003c/p\u003e\u003cp\u003eThis is for the ordinary helpful status messages that users see. Just\n enough information to know that things are working but not floods of detail.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "notice",
          "package": "TBC",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Useful status messages We display these at the normal verbosity level This is for the ordinary helpful status messages that users see Just enough information to know that things are working but not floods of detail",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "notice",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "TBC",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:notice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA QuickCheck test. We use the \u003ccode\u003e\u003ca\u003equickCheck\u003c/a\u003e\u003c/code\u003e\n driver, i.e., the default settings.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "quickcheck",
          "package": "TBC",
          "signature": "TestConvention",
          "source": "src/Test-TBC-Convention.html#quickcheck",
          "type": "function"
        },
        "index": {
          "description": "QuickCheck test We use the quickCheck driver i.e the default settings",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "quickcheck",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:quickcheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a compilation failure.\n FIXME refine: skipped a file, skipped some tests, some tests told us to skip, ...\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rCompilationFailure",
          "package": "TBC",
          "signature": "FilePath -\u003e [Test] -\u003e [String] -\u003e s -\u003e IO s",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Render compilation failure FIXME refine skipped file skipped some tests some tests told us to skip",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rCompilationFailure",
          "normalized": "FilePath-\u003e[Test]-\u003e[String]-\u003ea-\u003eIO a",
          "package": "TBC",
          "partial": "Compilation Failure",
          "signature": "FilePath-\u003e[Test]-\u003e[String]-\u003es-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rCompilationFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eYield an \u003ccode\u003e\u003ca\u003eExitCode\u003c/a\u003e\u003c/code\u003e depending on how the tests went.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rFinal",
          "package": "TBC",
          "signature": "s -\u003e IO ExitCode",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Yield an ExitCode depending on how the tests went",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rFinal",
          "normalized": "a-\u003eIO ExitCode",
          "package": "TBC",
          "partial": "Final",
          "signature": "s-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rFinal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllocate a new test state.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rInitialState",
          "package": "TBC",
          "signature": "IO s",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Allocate new test state",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rInitialState",
          "package": "TBC",
          "partial": "Initial State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rInitialState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRender a skipped directory or file.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rSkip",
          "package": "TBC",
          "signature": "FilePath -\u003e s -\u003e IO s",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Render skipped directory or file",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rSkip",
          "normalized": "FilePath-\u003ea-\u003eIO a",
          "package": "TBC",
          "partial": "Skip",
          "signature": "FilePath-\u003es-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rSkip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHandle being told to stop.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rStop",
          "package": "TBC",
          "signature": "FilePath -\u003e s -\u003e IO s",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Handle being told to stop",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rStop",
          "normalized": "FilePath-\u003ea-\u003eIO a",
          "package": "TBC",
          "partial": "Stop",
          "signature": "FilePath-\u003es-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rStop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute a test and render its result.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "rTest",
          "package": "TBC",
          "signature": "Test -\u003e s -\u003e Result -\u003e IO s",
          "source": "src/Test-TBC-Core.html#RenderFns",
          "type": "function"
        },
        "index": {
          "description": "Execute test and render its result",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "rTest",
          "normalized": "Test-\u003ea-\u003eResult-\u003eIO a",
          "package": "TBC",
          "partial": "Test",
          "signature": "Test-\u003es-\u003eResult-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:rTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "setupMessage",
          "package": "TBC",
          "signature": "Verbosity -\u003e String -\u003e PackageIdentifier -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "setupMessage",
          "normalized": "Verbosity-\u003eString-\u003ePackageIdentifier-\u003eIO()",
          "package": "TBC",
          "partial": "Message",
          "signature": "Verbosity-\u003eString-\u003ePackageIdentifier-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:setupMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "silent",
          "package": "TBC",
          "signature": "Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "silent",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:silent"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe standard set of conventions.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "std",
          "package": "TBC",
          "signature": "Conventions s",
          "source": "src/Test-TBC-Convention.html#std",
          "type": "function"
        },
        "index": {
          "description": "The standard set of conventions",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "std",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:std"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip \u003ccode\u003e.darcs\u003c/code\u003e and \u003ccode\u003e.git\u003c/code\u003e directories, and Cabal's \u003ccode\u003edist\u003c/code\u003e\n directory.\n\u003c/p\u003e\u003cp\u003eCould also imagine skipping subproject directories.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "stdDirectoryConv",
          "package": "TBC",
          "signature": "DirectoryConvention s",
          "source": "src/Test-TBC-Convention.html#stdDirectoryConv",
          "type": "function"
        },
        "index": {
          "description": "Skip darcs and git directories and Cabal dist directory Could also imagine skipping subproject directories",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "stdDirectoryConv",
          "package": "TBC",
          "partial": "Directory Conv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:stdDirectoryConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip Cabal's \u003ccode\u003eSetup.hs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "stdTestFileConv",
          "package": "TBC",
          "signature": "TestFileConvention s",
          "source": "src/Test-TBC-Convention.html#stdTestFileConv",
          "type": "function"
        },
        "index": {
          "description": "Skip Cabal Setup.hs",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "stdTestFileConv",
          "package": "TBC",
          "partial": "Test File Conv",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:stdTestFileConv"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "tLocation",
          "package": "TBC",
          "signature": "Location",
          "source": "src/Test-TBC-Core.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tLocation",
          "package": "TBC",
          "partial": "Location",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tLocation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e in a \u003ccode\u003eTestFile\u003c/code\u003e must have a different name.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "tName",
          "package": "TBC",
          "signature": "String",
          "source": "src/Test-TBC-Core.html#Test",
          "type": "function"
        },
        "index": {
          "description": "Each Test in TestFile must have different name",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tName",
          "package": "TBC",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "tRun",
          "package": "TBC",
          "signature": "Driver -\u003e IO Result",
          "source": "src/Test-TBC-Core.html#Test",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tRun",
          "normalized": "Driver-\u003eIO Result",
          "package": "TBC",
          "partial": "Run",
          "signature": "Driver-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA hardwired (conventional) driver.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "tbc",
          "package": "TBC",
          "signature": "Driver -\u003e [FilePath] -\u003e IO ()",
          "source": "src/Test-TBC.html#tbc",
          "type": "function"
        },
        "index": {
          "description": "hardwired conventional driver",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tbc",
          "normalized": "Driver-\u003e[FilePath]-\u003eIO()",
          "package": "TBC",
          "signature": "Driver-\u003e[FilePath]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tbc"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA driver compatible with Cabal's \u003ccode\u003erunTests\u003c/code\u003e hook.\n\u003c/p\u003e\u003cp\u003eHowever the test infrastructure in Cabal has changed since this was\n written, and its use is discouraged. Use the TBC binary instead.\n\u003c/p\u003e\u003cp\u003eThis is used by the TBC binary.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "tbcCabal",
          "package": "TBC",
          "signature": "Verbosity-\u003e Args-\u003e Bool-\u003e PackageDescription-\u003e LocalBuildInfo-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "driver compatible with Cabal runTests hook However the test infrastructure in Cabal has changed since this was written and its use is discouraged Use the TBC binary instead This is used by the TBC binary",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tbcCabal",
          "normalized": "Verbosity-\u003eArgs-\u003eBool-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "package": "TBC",
          "partial": "Cabal",
          "signature": "Verbosity-\u003eArgs-\u003eBool-\u003ePackageDescription-\u003eLocalBuildInfo-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tbcCabal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA parametrised bells-and-whistles driver.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "tbcWithHooks",
          "package": "TBC",
          "signature": "Conventions s -\u003e RenderFns s -\u003e Driver -\u003e [FilePath] -\u003e IO ExitCode",
          "source": "src/Test-TBC.html#tbcWithHooks",
          "type": "function"
        },
        "index": {
          "description": "parametrised bells-and-whistles driver",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "tbcWithHooks",
          "normalized": "Conventions a-\u003eRenderFns a-\u003eDriver-\u003e[FilePath]-\u003eIO ExitCode",
          "package": "TBC",
          "partial": "With Hooks",
          "signature": "Conventions s-\u003eRenderFns s-\u003eDriver-\u003e[FilePath]-\u003eIO ExitCode",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:tbcWithHooks"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eVisit all files in a directory tree.\n FIXME try to eliminate the \u003ca\u003e.\u003c/a\u003e with some refactoring.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "traverseDirectories",
          "package": "TBC",
          "signature": "Conventions s -\u003e Driver -\u003e RenderFns s -\u003e [FilePath] -\u003e s -\u003e IO s",
          "source": "src/Test-TBC-Core.html#traverseDirectories",
          "type": "function"
        },
        "index": {
          "description": "Visit all files in directory tree FIXME try to eliminate the with some refactoring",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "traverseDirectories",
          "normalized": "Conventions a-\u003eDriver-\u003eRenderFns a-\u003e[FilePath]-\u003ea-\u003eIO a",
          "package": "TBC",
          "partial": "Directories",
          "signature": "Conventions s-\u003eDriver-\u003eRenderFns s-\u003e[FilePath]-\u003es-\u003eIO s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:traverseDirectories"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.TBC",
          "name": "verbose",
          "package": "TBC",
          "signature": "Verbosity",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "verbose",
          "package": "TBC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:verbose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNon fatal conditions that may be indicative of an error or problem.\n\u003c/p\u003e\u003cp\u003eWe display these at the \u003ccode\u003e\u003ca\u003enormal\u003c/a\u003e\u003c/code\u003e verbosity level.\n\u003c/p\u003e",
          "module": "Test.TBC",
          "name": "warn",
          "package": "TBC",
          "signature": "Verbosity -\u003e String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Non fatal conditions that may be indicative of an error or problem We display these at the normal verbosity level",
          "hierarchy": "Test TBC",
          "module": "Test.TBC",
          "name": "warn",
          "normalized": "Verbosity-\u003eString-\u003eIO()",
          "package": "TBC",
          "signature": "Verbosity-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/TBC/docs/Test-TBC.html#v:warn"
      }
    }
  ]
]