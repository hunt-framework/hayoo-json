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
        "word": "hcltest"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module defines the basic test type, HClTest, which is a monad. It also provides functions\n for creating and running tests. \n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HClTest.Monad",
          "name": "Monad",
          "package": "hcltest",
          "source": "src/Test-HClTest-Monad.html",
          "type": "module"
        },
        "index": {
          "description": "This module defines the basic test type HClTest which is monad It also provides functions for creating and running tests",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "Monad",
          "package": "hcltest",
          "partial": "Monad",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe config is passed in a Reader to the test cases. \n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "Config",
          "package": "hcltest",
          "source": "src/Test-HClTest-Monad.html#Config",
          "type": "data"
        },
        "index": {
          "description": "The config is passed in Reader to the test cases",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "Config",
          "package": "hcltest",
          "partial": "Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#t:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe HClTest monad. A HClTest action describes a single test case. The first argument is the type\n of the trace entries. For tests, this should be \u003ccode\u003e\u003ca\u003eTrace\u003c/a\u003e\u003c/code\u003e. For a single test step, this should be \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "HClTest",
          "package": "hcltest",
          "source": "src/Test-HClTest-Monad.html#HClTest",
          "type": "newtype"
        },
        "index": {
          "description": "The HClTest monad HClTest action describes single test case The first argument is the type of the trace entries For tests this should be Trace For single test step this should be String",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "HClTest",
          "package": "hcltest",
          "partial": "HCl Test",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#t:HClTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "Config",
          "package": "hcltest",
          "signature": "Config",
          "source": "src/Test-HClTest-Monad.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "Config",
          "package": "hcltest",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:Config"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "HClTest",
          "package": "hcltest",
          "signature": "HClTest",
          "source": "src/Test-HClTest-Monad.html#HClTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "HClTest",
          "package": "hcltest",
          "partial": "HCl Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:HClTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "_timeoutFactor",
          "package": "hcltest",
          "signature": "Double",
          "source": "src/Test-HClTest-Monad.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "_timeoutFactor",
          "package": "hcltest",
          "partial": "Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:_timeoutFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "_wdLock",
          "package": "hcltest",
          "signature": "RLock",
          "source": "src/Test-HClTest-Monad.html#Config",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "_wdLock",
          "package": "hcltest",
          "partial": "Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:_wdLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is a HClTest action that always fails. The first argument is the trace to leave.\n If you want to fail without leaving a trace, you can just use \u003ccode\u003e\u003ca\u003emzero\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "failTest",
          "package": "hcltest",
          "signature": "a -\u003e HClTest a b",
          "source": "src/Test-HClTest-Monad.html#failTest",
          "type": "function"
        },
        "index": {
          "description": "This is HClTest action that always fails The first argument is the trace to leave If you want to fail without leaving trace you can just use mzero",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "failTest",
          "normalized": "a-\u003eHClTest a b",
          "package": "hcltest",
          "partial": "Test",
          "signature": "a-\u003eHClTest a b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:failTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a number of tests in parallel, in random order. The first argument is the number of threads\n to use. Note that if the test cases require different working directories, some of the threads\n may block.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "randomParallel",
          "package": "hcltest",
          "signature": "Int -\u003e [HClTest Trace ()] -\u003e HClTest Trace ()",
          "source": "src/Test-HClTest-Monad.html#randomParallel",
          "type": "function"
        },
        "index": {
          "description": "Run number of tests in parallel in random order The first argument is the number of threads to use Note that if the test cases require different working directories some of the threads may block",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "randomParallel",
          "normalized": "Int-\u003e[HClTest Trace()]-\u003eHClTest Trace()",
          "package": "hcltest",
          "partial": "Parallel",
          "signature": "Int-\u003e[HClTest Trace()]-\u003eHClTest Trace()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:randomParallel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike runHClTestTrace, but already shows the trace so that you get a string.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "runHClTest",
          "package": "hcltest",
          "signature": "Double -\u003e HClTest Trace () -\u003e IO (Bool, String)",
          "source": "src/Test-HClTest-Monad.html#runHClTest",
          "type": "function"
        },
        "index": {
          "description": "Like runHClTestTrace but already shows the trace so that you get string",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "runHClTest",
          "normalized": "Double-\u003eHClTest Trace()-\u003eIO(Bool,String)",
          "package": "hcltest",
          "partial": "HCl Test",
          "signature": "Double-\u003eHClTest Trace()-\u003eIO(Bool,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:runHClTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a HClTest. The first argument is the timeout for waiting for output\n of the process, in milliseconds. The second argument is the test case.\n\u003c/p\u003e\u003cp\u003eThis will run the test in a temporary working directory. Use the functions\n in Test.HClTest.Setup to setup the environment.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "runHClTestTrace",
          "package": "hcltest",
          "signature": "Double -\u003e HClTest Trace () -\u003e IO (Bool, DList Trace)",
          "source": "src/Test-HClTest-Monad.html#runHClTestTrace",
          "type": "function"
        },
        "index": {
          "description": "Run HClTest The first argument is the timeout for waiting for output of the process in milliseconds The second argument is the test case This will run the test in temporary working directory Use the functions in Test.HClTest.Setup to setup the environment",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "runHClTestTrace",
          "normalized": "Double-\u003eHClTest Trace()-\u003eIO(Bool,DList Trace)",
          "package": "hcltest",
          "partial": "HCl Test Trace",
          "signature": "Double-\u003eHClTest Trace()-\u003eIO(Bool,DList Trace)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:runHClTestTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an IO action, and fail if that action returns false. The first argument\n is a description of the IO action which will be used for the trace messages.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "testIO",
          "package": "hcltest",
          "signature": "String -\u003e IO Bool -\u003e HClTest Trace ()",
          "source": "src/Test-HClTest-Monad.html#testIO",
          "type": "function"
        },
        "index": {
          "description": "Run an IO action and fail if that action returns false The first argument is description of the IO action which will be used for the trace messages",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "testIO",
          "normalized": "String-\u003eIO Bool-\u003eHClTest Trace()",
          "package": "hcltest",
          "partial": "IO",
          "signature": "String-\u003eIO Bool-\u003eHClTest Trace()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:testIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single test step. The first argument is a description of the step. The test step\n can produce trace messages of type \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. Those will be collected an exactly one\n \u003ccode\u003e\u003ca\u003eTrace\u003c/a\u003e\u003c/code\u003e will be emitted.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "testStep",
          "package": "hcltest",
          "signature": "String -\u003e HClTest String a -\u003e HClTest Trace a",
          "source": "src/Test-HClTest-Monad.html#testStep",
          "type": "function"
        },
        "index": {
          "description": "single test step The first argument is description of the step The test step can produce trace messages of type String Those will be collected an exactly one Trace will be emitted",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "testStep",
          "normalized": "String-\u003eHClTest String a-\u003eHClTest Trace a",
          "package": "hcltest",
          "partial": "Step",
          "signature": "String-\u003eHClTest String a-\u003eHClTest Trace a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:testStep"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "timeoutFactor",
          "package": "hcltest",
          "signature": "Lens' Config Double",
          "source": "src/Test-HClTest-Monad.html#timeoutFactor",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "timeoutFactor",
          "package": "hcltest",
          "partial": "Factor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:timeoutFactor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a message to the log.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "traceMsg",
          "package": "hcltest",
          "signature": "a -\u003e HClTest a ()",
          "source": "src/Test-HClTest-Monad.html#traceMsg",
          "type": "function"
        },
        "index": {
          "description": "Add message to the log",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "traceMsg",
          "normalized": "a-\u003eHClTest a()",
          "package": "hcltest",
          "partial": "Msg",
          "signature": "a-\u003eHClTest a()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:traceMsg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "unHClTest",
          "package": "hcltest",
          "signature": "ReaderT Config (MaybeT (WriterT (DList w) IO)) a",
          "source": "src/Test-HClTest-Monad.html#HClTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "unHClTest",
          "package": "hcltest",
          "partial": "HCl Test",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:unHClTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Monad",
          "name": "wdLock",
          "package": "hcltest",
          "signature": "Lens' Config RLock",
          "source": "src/Test-HClTest-Monad.html#wdLock",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "wdLock",
          "package": "hcltest",
          "partial": "Lock",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:wdLock"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a test in the given directory.\n\u003c/p\u003e",
          "module": "Test.HClTest.Monad",
          "name": "withWorkingDirectory",
          "package": "hcltest",
          "signature": "FilePath -\u003e HClTest Trace a -\u003e HClTest Trace a",
          "source": "src/Test-HClTest-Monad.html#withWorkingDirectory",
          "type": "function"
        },
        "index": {
          "description": "Run test in the given directory",
          "hierarchy": "Test HClTest Monad",
          "module": "Test.HClTest.Monad",
          "name": "withWorkingDirectory",
          "normalized": "FilePath-\u003eHClTest Trace a-\u003eHClTest Trace a",
          "package": "hcltest",
          "partial": "Working Directory",
          "signature": "FilePath-\u003eHClTest Trace a-\u003eHClTest Trace a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Monad.html#v:withWorkingDirectory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eIn this module there are functions for creating test cases that run\n programs. It also provides functions for running programs that require input.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HClTest.Program",
          "name": "Program",
          "package": "hcltest",
          "source": "src/Test-HClTest-Program.html",
          "type": "module"
        },
        "index": {
          "description": "In this module there are functions for creating test cases that run programs It also provides functions for running programs that require input",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "Program",
          "package": "hcltest",
          "partial": "Program",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe driver monad. The driver monad is used to run programs that require input. It allows\n you to specify a \u003ca\u003escript\u003c/a\u003e of actions, like \u003ca\u003esend input\u003c/a\u003e or \u003ca\u003eexpect output\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "Driver",
          "package": "hcltest",
          "source": "src/Test-HClTest-Program.html#Driver",
          "type": "type"
        },
        "index": {
          "description": "The driver monad The driver monad is used to run programs that require input It allows you to specify script of actions like send input or expect output",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "Driver",
          "package": "hcltest",
          "partial": "Driver",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#t:Driver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA output stream. \n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "Stream",
          "package": "hcltest",
          "source": "src/Test-HClTest-Program.html#Stream",
          "type": "data"
        },
        "index": {
          "description": "output stream",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "Stream",
          "package": "hcltest",
          "partial": "Stream",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#t:Stream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Program",
          "name": "Stderr",
          "package": "hcltest",
          "signature": "Stderr",
          "source": "src/Test-HClTest-Program.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "Stderr",
          "package": "hcltest",
          "partial": "Stderr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:Stderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Program",
          "name": "Stdout",
          "package": "hcltest",
          "signature": "Stdout",
          "source": "src/Test-HClTest-Program.html#Stream",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "Stdout",
          "package": "hcltest",
          "partial": "Stdout",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:Stdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the process outputs the given text on the given output stream. This only\n matches a prefix, so it also succeeds if the process produces more output. If you want\n to check that this is the only output, use expectEOF.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "expect",
          "package": "hcltest",
          "signature": "Stream -\u003e Text -\u003e Driver ()",
          "source": "src/Test-HClTest-Program.html#expect",
          "type": "function"
        },
        "index": {
          "description": "Check that the process outputs the given text on the given output stream This only matches prefix so it also succeeds if the process produces more output If you want to check that this is the only output use expectEOF",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "expect",
          "normalized": "Stream-\u003eText-\u003eDriver()",
          "package": "hcltest",
          "signature": "Stream-\u003eText-\u003eDriver()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:expect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck that the process' output ended.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "expectEOF",
          "package": "hcltest",
          "signature": "Stream -\u003e Driver ()",
          "source": "src/Test-HClTest-Program.html#expectEOF",
          "type": "function"
        },
        "index": {
          "description": "Check that the process output ended",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "expectEOF",
          "normalized": "Stream-\u003eDriver()",
          "package": "hcltest",
          "partial": "EOF",
          "signature": "Stream-\u003eDriver()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:expectEOF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a driver. The first argument is the timeout for waiting for output of the process.\n The second argument are handles to stdin, stdout and stderr of the process. The third\n argument is the driver to run. This produces a test step.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "runDriver",
          "package": "hcltest",
          "signature": "Int -\u003e (Handle, Handle, Handle) -\u003e Driver a -\u003e HClTest String a",
          "source": "src/Test-HClTest-Program.html#runDriver",
          "type": "function"
        },
        "index": {
          "description": "Run driver The first argument is the timeout for waiting for output of the process The second argument are handles to stdin stdout and stderr of the process The third argument is the driver to run This produces test step",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "runDriver",
          "normalized": "Int-\u003e(Handle,Handle,Handle)-\u003eDriver a-\u003eHClTest String a",
          "package": "hcltest",
          "partial": "Driver",
          "signature": "Int-\u003e(Handle,Handle,Handle)-\u003eDriver a-\u003eHClTest String a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:runDriver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSend some text to the process. The text will be encoded as UTF-8.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "send",
          "package": "hcltest",
          "signature": "Text -\u003e Driver ()",
          "source": "src/Test-HClTest-Program.html#send",
          "type": "function"
        },
        "index": {
          "description": "Send some text to the process The text will be encoded as UTF-8",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "send",
          "normalized": "Text-\u003eDriver()",
          "package": "hcltest",
          "signature": "Text-\u003eDriver()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:send"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA restricted form of testInteractive that only tests that the process exits with the given exit code.\n See \u003ccode\u003e\u003ca\u003etestInteractive\u003c/a\u003e\u003c/code\u003e for a description of the arguments.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "testExitCode",
          "package": "hcltest",
          "signature": "Maybe FilePath -\u003e Int -\u003e FilePath -\u003e [String] -\u003e ExitCode -\u003e HClTest Trace ()",
          "source": "src/Test-HClTest-Program.html#testExitCode",
          "type": "function"
        },
        "index": {
          "description": "restricted form of testInteractive that only tests that the process exits with the given exit code See testInteractive for description of the arguments",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "testExitCode",
          "normalized": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eExitCode-\u003eHClTest Trace()",
          "package": "hcltest",
          "partial": "Exit Code",
          "signature": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eExitCode-\u003eHClTest Trace()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:testExitCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a test step for an interactive program. The first argument is either the working directory\n or Nothing, which doesn't change the working directory. The second argument is the timeout in seconds \n for waiting for output of the process. The third argument is the executable file. The forth argument\n are the arguments for the executable and the fifth is the driver to use. The driver should return\n the expected exit code.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "testInteractive",
          "package": "hcltest",
          "signature": "Maybe FilePath -\u003e Int -\u003e FilePath -\u003e [String] -\u003e Driver ExitCode -\u003e HClTest Trace ()",
          "source": "src/Test-HClTest-Program.html#testInteractive",
          "type": "function"
        },
        "index": {
          "description": "Make test step for an interactive program The first argument is either the working directory or Nothing which doesn change the working directory The second argument is the timeout in seconds for waiting for output of the process The third argument is the executable file The forth argument are the arguments for the executable and the fifth is the driver to use The driver should return the expected exit code",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "testInteractive",
          "normalized": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eDriver ExitCode-\u003eHClTest Trace()",
          "package": "hcltest",
          "partial": "Interactive",
          "signature": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eDriver ExitCode-\u003eHClTest Trace()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:testInteractive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA restricted form of testInteractive that Only tests that the process produces the given output on stderr, and no more. See \n \u003ccode\u003e\u003ca\u003etestInteractive\u003c/a\u003e\u003c/code\u003e for a description of the arguments.\n\u003c/p\u003e",
          "module": "Test.HClTest.Program",
          "name": "testStdout",
          "package": "hcltest",
          "signature": "Maybe FilePath -\u003e Int -\u003e FilePath -\u003e [String] -\u003e ExitCode -\u003e Text -\u003e HClTest Trace ()",
          "source": "src/Test-HClTest-Program.html#testStdout",
          "type": "function"
        },
        "index": {
          "description": "restricted form of testInteractive that Only tests that the process produces the given output on stderr and no more See testInteractive for description of the arguments",
          "hierarchy": "Test HClTest Program",
          "module": "Test.HClTest.Program",
          "name": "testStdout",
          "normalized": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eExitCode-\u003eText-\u003eHClTest Trace()",
          "package": "hcltest",
          "partial": "Stdout",
          "signature": "Maybe FilePath-\u003eInt-\u003eFilePath-\u003e[String]-\u003eExitCode-\u003eText-\u003eHClTest Trace()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Program.html#v:testStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Setup",
          "name": "Setup",
          "package": "hcltest",
          "source": "src/Test-HClTest-Setup.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test HClTest Setup",
          "module": "Test.HClTest.Setup",
          "name": "Setup",
          "package": "hcltest",
          "partial": "Setup",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Setup.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyFiles source target\u003c/code\u003e copies all the files in the \u003ccode\u003esource\u003c/code\u003e directory to the directory \u003ccode\u003etarget\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HClTest.Setup",
          "name": "copyFiles",
          "package": "hcltest",
          "signature": "FilePath -\u003e FilePath -\u003e IO ()",
          "source": "src/Test-HClTest-Setup.html#copyFiles",
          "type": "function"
        },
        "index": {
          "description": "copyFiles source target copies all the files in the source directory to the directory target",
          "hierarchy": "Test HClTest Setup",
          "module": "Test.HClTest.Setup",
          "name": "copyFiles",
          "normalized": "FilePath-\u003eFilePath-\u003eIO()",
          "package": "hcltest",
          "partial": "Files",
          "signature": "FilePath-\u003eFilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Setup.html#v:copyFiles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ecopyFilesHere source\u003c/code\u003e copies all the files from source to the current directory.\n\u003c/p\u003e",
          "module": "Test.HClTest.Setup",
          "name": "copyFilesHere",
          "package": "hcltest",
          "signature": "FilePath -\u003e IO ()",
          "source": "src/Test-HClTest-Setup.html#copyFilesHere",
          "type": "function"
        },
        "index": {
          "description": "copyFilesHere source copies all the files from source to the current directory",
          "hierarchy": "Test HClTest Setup",
          "module": "Test.HClTest.Setup",
          "name": "copyFilesHere",
          "normalized": "FilePath-\u003eIO()",
          "package": "hcltest",
          "partial": "Files Here",
          "signature": "FilePath-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Setup.html#v:copyFilesHere"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Trace is a log entry for a single test step.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "source": "src/Test-HClTest-Trace.html",
          "type": "module"
        },
        "index": {
          "description": "Trace is log entry for single test step",
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "partial": "Trace",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA trace has a step description and some messages produced by that step in it.\n\u003c/p\u003e",
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "source": "src/Test-HClTest-Trace.html#Trace",
          "type": "data"
        },
        "index": {
          "description": "trace has step description and some messages produced by that step in it",
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "partial": "Trace",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#t:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "signature": "Trace",
          "source": "src/Test-HClTest-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "Trace",
          "package": "hcltest",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#v:Trace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Trace",
          "name": "messages",
          "package": "hcltest",
          "signature": "[String]",
          "source": "src/Test-HClTest-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "messages",
          "normalized": "[String]",
          "package": "hcltest",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#v:messages"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePretty print a trace. \n\u003c/p\u003e",
          "module": "Test.HClTest.Trace",
          "name": "showTrace",
          "package": "hcltest",
          "signature": "Trace -\u003e String",
          "source": "src/Test-HClTest-Trace.html#showTrace",
          "type": "function"
        },
        "index": {
          "description": "Pretty print trace",
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "showTrace",
          "normalized": "Trace-\u003eString",
          "package": "hcltest",
          "partial": "Trace",
          "signature": "Trace-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#v:showTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest.Trace",
          "name": "stepDescription",
          "package": "hcltest",
          "signature": "String",
          "source": "src/Test-HClTest-Trace.html#Trace",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HClTest Trace",
          "module": "Test.HClTest.Trace",
          "name": "stepDescription",
          "package": "hcltest",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest-Trace.html#v:stepDescription"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HClTest",
          "name": "HClTest",
          "package": "hcltest",
          "source": "src/Test-HClTest.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Test HClTest",
          "module": "Test.HClTest",
          "name": "HClTest",
          "package": "hcltest",
          "partial": "HCl Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-HClTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides support for running hcltest cases using tasty.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Tasty.HClTest",
          "name": "HClTest",
          "package": "hcltest",
          "source": "src/Test-Tasty-HClTest.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides support for running hcltest cases using tasty",
          "hierarchy": "Test Tasty HClTest",
          "module": "Test.Tasty.HClTest",
          "name": "HClTest",
          "package": "hcltest",
          "partial": "HCl Test",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-Tasty-HClTest.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a new test case with the given name using a HClTest for testing.\n\u003c/p\u003e",
          "module": "Test.Tasty.HClTest",
          "name": "hcltest",
          "package": "hcltest",
          "signature": "TestName -\u003e HClTest Trace () -\u003e TestTree",
          "source": "src/Test-Tasty-HClTest.html#hcltest",
          "type": "function"
        },
        "index": {
          "description": "Make new test case with the given name using HClTest for testing",
          "hierarchy": "Test Tasty HClTest",
          "module": "Test.Tasty.HClTest",
          "name": "hcltest",
          "normalized": "TestName-\u003eHClTest Trace()-\u003eTestTree",
          "package": "hcltest",
          "signature": "TestName-\u003eHClTest Trace()-\u003eTestTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hcltest/docs/Test-Tasty-HClTest.html#v:hcltest"
      }
    }
  ]
]