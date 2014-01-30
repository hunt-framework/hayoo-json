[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest-Assertions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHelpers for asserting certain things for programs, using HUnit.\n\u003c/p\u003e\u003cp\u003eAll of the assertions in this module throw HUnit exceptions on failure\nusing \u003ccode\u003e\u003ca\u003eassertFailure\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Proctest.Assertions",
        "fct-package": "proctest",
        "fct-signature": "module",
        "fct-source": "src/Test-Proctest-Assertions.html",
        "fct-type": "module",
        "title": "Assertions"
      },
      "index": {
        "description": "Helpers for asserting certain things for programs using HUnit All of the assertions in this module throw HUnit exceptions on failure using assertFailure",
        "hierarchy": "Test Proctest Assertions",
        "module": "Test.Proctest.Assertions",
        "name": "Assertions",
        "normalized": "",
        "package": "proctest",
        "partial": "Assertions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest-Assertions.html#v:_PROCTEST_POLL_TIMEOUT",
      "description": {
        "fct-descr": "\u003cp\u003eHow often to poll in waiting functions with maximum timeout.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest.Assertions",
        "fct-package": "proctest",
        "fct-signature": "Timeout",
        "fct-source": "src/Test-Proctest-Assertions.html#_PROCTEST_POLL_TIMEOUT",
        "fct-type": "function",
        "title": "_PROCTEST_POLL_TIMEOUT"
      },
      "index": {
        "description": "How often to poll in waiting functions with maximum timeout",
        "hierarchy": "Test Proctest Assertions",
        "module": "Test.Proctest.Assertions",
        "name": "_PROCTEST_POLL_TIMEOUT",
        "normalized": "",
        "package": "proctest",
        "partial": "PROCTEST POLL TIMEOUT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest-Assertions.html#v:assertExited",
      "description": {
        "fct-descr": "\u003cp\u003eAsserts that the given process has shut down.\n\u003c/p\u003e\u003cp\u003eYou might need to \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003e before to give the process time to exit.\n It is usually better to use \u003ccode\u003e\u003ca\u003eassertExitedTimeout\u003c/a\u003e\u003c/code\u003e in those cases.\n\u003c/p\u003e\u003cp\u003eIf the process is still running, a HUnit \u003ccode\u003e\u003ca\u003eassertFailure\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest.Assertions",
        "fct-package": "proctest",
        "fct-signature": "ProcessHandle -\u003e IO ()",
        "fct-source": "src/Test-Proctest-Assertions.html#assertExited",
        "fct-type": "function",
        "title": "assertExited"
      },
      "index": {
        "description": "Asserts that the given process has shut down You might need to sleep before to give the process time to exit It is usually better to use assertExitedTimeout in those cases If the process is still running HUnit assertFailure exception is thrown",
        "hierarchy": "Test Proctest Assertions",
        "module": "Test.Proctest.Assertions",
        "name": "assertExited",
        "normalized": "ProcessHandle-\u003eIO()",
        "package": "proctest",
        "partial": "Exited",
        "signature": "ProcessHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest-Assertions.html#v:assertExitedTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eAsserts that the given process has shut down in *at most* the given timeout.\n\u003c/p\u003e\u003cp\u003ePeriodically polling with \u003ccode\u003e\u003ca\u003e_PROCTEST_POLL_TIMEOUT\u003c/a\u003e\u003c/code\u003e,\n returns as soon as the application has terminated or the timeout is exceeded.\n\u003c/p\u003e\u003cp\u003eUse this to write faster tests than with manual \u003ccode\u003e\u003ca\u003esleep\u003c/a\u003e\u003c/code\u003eing:\n For most tests, the application will actually finish way before the timeout.\n\u003c/p\u003e\u003cp\u003eIf the process is still running, a HUnit \u003ccode\u003e\u003ca\u003eassertFailure\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest.Assertions",
        "fct-package": "proctest",
        "fct-signature": "Timeout -\u003e ProcessHandle -\u003e IO ExitCode",
        "fct-source": "src/Test-Proctest-Assertions.html#assertExitedTimeout",
        "fct-type": "function",
        "title": "assertExitedTimeout"
      },
      "index": {
        "description": "Asserts that the given process has shut down in at most the given timeout Periodically polling with PROCTEST POLL TIMEOUT returns as soon as the application has terminated or the timeout is exceeded Use this to write faster tests than with manual sleep ing For most tests the application will actually finish way before the timeout If the process is still running HUnit assertFailure exception is thrown",
        "hierarchy": "Test Proctest Assertions",
        "module": "Test.Proctest.Assertions",
        "name": "assertExitedTimeout",
        "normalized": "Timeout-\u003eProcessHandle-\u003eIO ExitCode",
        "package": "proctest",
        "partial": "Exited Timeout",
        "signature": "Timeout-\u003eProcessHandle-\u003eIO ExitCode"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest-Assertions.html#v:runAssert",
      "description": {
        "fct-descr": "\u003cp\u003eRuns the given program with \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e and asserts that it is still running\n after the given timeout.\n\u003c/p\u003e\u003cp\u003eDon't choose the timeout too high as this function will block for it.\n\u003c/p\u003e\u003cp\u003eIf the timeout is exceeded, a HUnit \u003ccode\u003e\u003ca\u003eassertFailure\u003c/a\u003e\u003c/code\u003e exception is thrown,\n showing the command line to be invoked, the exit code, and the standard\n error output of the program.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest.Assertions",
        "fct-package": "proctest",
        "fct-signature": "Timeout -\u003e FilePath -\u003e [String] -\u003e IO (Handle, Handle, Handle, ProcessHandle)",
        "fct-source": "src/Test-Proctest-Assertions.html#runAssert",
        "fct-type": "function",
        "title": "runAssert"
      },
      "index": {
        "description": "Runs the given program with run and asserts that it is still running after the given timeout Don choose the timeout too high as this function will block for it If the timeout is exceeded HUnit assertFailure exception is thrown showing the command line to be invoked the exit code and the standard error output of the program",
        "hierarchy": "Test Proctest Assertions",
        "module": "Test.Proctest.Assertions",
        "name": "runAssert",
        "normalized": "Timeout-\u003eFilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
        "package": "proctest",
        "partial": "Assert",
        "signature": "Timeout-\u003eFilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle,ProcessHandle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn IO library for testing interactive command line programs.\n\u003c/p\u003e\u003cp\u003eRead this first:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Tests using Proctests need to be compiled with \u003ccode\u003e-threaded\u003c/code\u003e for not blocking on process spawns.\n\u003c/li\u003e\u003cli\u003e Beware that the Haskell GC closes process \u003ccode\u003e\u003ca\u003eHandle\u003c/a\u003e\u003c/code\u003es after their last use.\n    If you don't want to be surprised by this, use \u003ccode\u003e\u003ca\u003ehClose\u003c/a\u003e\u003c/code\u003e where you want\n    them to be closed (convenience: \u003ccode\u003e\u003ca\u003ecloseHandles\u003c/a\u003e\u003c/code\u003e).\n    Really do this for EVERY process you create, the behaviour of a program\n    writing to a closed handle is undefined. For example,\n    \u003ccode\u003e\u003ca\u003egetProcessExitCode\u003c/a\u003e\u003c/code\u003e run on such a program somtimes seems to\n    always return \u003ccode\u003e\u003ca\u003eExitSuccess\u003c/a\u003e\u003c/code\u003e, no matter what the program actually does.\n\u003c/li\u003e\u003cli\u003e Make sure handle buffering is set appropriately.\n    \u003ccode\u003e\u003ca\u003erun\u003c/a\u003e\u003c/code\u003e sets \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e by default.\n    Change it with \u003ccode\u003e\u003ca\u003esetBuffering\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003ehSetBuffering\u003c/a\u003e\u003c/code\u003e.\n\u003c/li\u003e\u003cli\u003e Do not run the program in a shell (e.g. \u003ccode\u003e\u003ca\u003erunInteractiveCommand\u003c/a\u003e\u003c/code\u003e) if you want to\n    be able to terminate it reliably (\u003ccode\u003e\u003ca\u003eterminateProcess\u003c/a\u003e\u003c/code\u003e). Use processes without shells\n    (\u003ccode\u003e\u003ca\u003erunInteractiveProcess\u003c/a\u003e\u003c/code\u003e) instead.\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eExample:\n\u003c/p\u003e\u003cp\u003eLet's say you want to test an interactive command line program like \u003ccode\u003ecat\u003c/code\u003e,\nand integrate your test into a test framework like \u003ca\u003eTest.HSpec\u003c/a\u003e,\nusing \u003ca\u003eTest.HSpec.HUnit\u003c/a\u003e for the IO parts (remember that Proctest \u003cem\u003eis\u003c/em\u003e stateful IO).\n\u003c/p\u003e\u003cpre\u003e main = hspec $ describe \"cat\" $ do\n\n   it \"prints out what we put in\" $ do\n\n     -- Start up the program to test\n     (hIn, hOut, hErr, p) \u003c- run \"cat\" []\n\n     -- Make sure buffering doesn't prevent us from reading what we expect\n     -- ('run' sets LineBuffering by default)\n     setBuffering NoBuffering [hIn, hOut]\n\n     -- Communicate with the program\n     hPutStrLn hIn \"hello world\"\n\n     -- Define a convenient wrapper around 'waitOutput'.\n     --\n     -- It specifies how long we have to wait\n     -- (malfunctioning programs shall not block automated testing for too long)\n     -- and how many bytes we are sure the expected response fits into\n     -- (malfunctioning programs shall not flood us with garbage either).\n     let catWait h = asUtf8Str \u003c$\u003e waitOutput (seconds 0.01) 1000 h -- Wait max 10 ms, 1000 bytes\n\n     -- Wait a little to allow `cat` processing the input\n     sleep (seconds 0.00001)\n\n     -- Read the response\n     response \u003c- catWait hOut\n\n     -- Test if it is what we want (here using HUnit's 'expectEqual')\n     response @?= \"hello world\\n\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "module",
        "fct-source": "src/Test-Proctest.html",
        "fct-type": "module",
        "title": "Proctest"
      },
      "index": {
        "description": "An IO library for testing interactive command line programs Read this first Tests using Proctests need to be compiled with threaded for not blocking on process spawns Beware that the Haskell GC closes process Handle after their last use If you don want to be surprised by this use hClose where you want them to be closed convenience closeHandles Really do this for EVERY process you create the behaviour of program writing to closed handle is undefined For example getProcessExitCode run on such program somtimes seems to always return ExitSuccess no matter what the program actually does Make sure handle buffering is set appropriately run sets LineBuffering by default Change it with setBuffering or hSetBuffering Do not run the program in shell e.g runInteractiveCommand if you want to be able to terminate it reliably terminateProcess Use processes without shells runInteractiveProcess instead Example Let say you want to test an interactive command line program like cat and integrate your test into test framework like Test.HSpec using Test.HSpec.HUnit for the IO parts remember that Proctest is stateful IO main hspec describe cat do it prints out what we put in do Start up the program to test hIn hOut hErr run cat Make sure buffering doesn prevent us from reading what we expect run sets LineBuffering by default setBuffering NoBuffering hIn hOut Communicate with the program hPutStrLn hIn hello world Define convenient wrapper around waitOutput It specifies how long we have to wait malfunctioning programs shall not block automated testing for too long and how many bytes we are sure the expected response fits into malfunctioning programs shall not flood us with garbage either let catWait asUtf8Str waitOutput seconds Wait max ms bytes Wait little to allow cat processing the input sleep seconds Read the response response catWait hOut Test if it is what we want here using HUnit expectEqual response hello world",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "Proctest",
        "normalized": "",
        "package": "proctest",
        "partial": "Proctest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#t:InvalidTimeoutError",
      "description": {
        "fct-descr": "\u003cp\u003eAn error to be thrown if something is to be converted into \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e\n that does not fit into \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "data",
        "fct-source": "src/Test-Proctest.html#InvalidTimeoutError",
        "fct-type": "data",
        "title": "InvalidTimeoutError"
      },
      "index": {
        "description": "An error to be thrown if something is to be converted into Timeout that does not fit into Int",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "InvalidTimeoutError",
        "normalized": "",
        "package": "proctest",
        "partial": "Invalid Timeout Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#t:ProcessHandles",
      "description": {
        "fct-descr": "\u003cp\u003eShort cut. ALWAYS use the order stdin, stdout, stderr, process handle.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "type",
        "fct-source": "src/Test-Proctest.html#ProcessHandles",
        "fct-type": "type",
        "title": "ProcessHandles"
      },
      "index": {
        "description": "Short cut ALWAYS use the order stdin stdout stderr process handle",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "ProcessHandles",
        "normalized": "",
        "package": "proctest",
        "partial": "Process Handles",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#t:RunException",
      "description": {
        "fct-descr": "\u003cp\u003eException to be thrown when a program could not be started.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "data",
        "fct-source": "src/Test-Proctest.html#RunException",
        "fct-type": "data",
        "title": "RunException"
      },
      "index": {
        "description": "Exception to be thrown when program could not be started",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "RunException",
        "normalized": "",
        "package": "proctest",
        "partial": "Run Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#t:Timeout",
      "description": {
        "fct-descr": "\u003cp\u003eA microsecond timeout, or \u003ccode\u003e\u003ca\u003eNoTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "data",
        "fct-source": "src/Test-Proctest.html#Timeout",
        "fct-type": "data",
        "title": "Timeout"
      },
      "index": {
        "description": "microsecond timeout or NoTimeout",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "Timeout",
        "normalized": "",
        "package": "proctest",
        "partial": "Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#t:TimeoutException",
      "description": {
        "fct-descr": "\u003cp\u003eException to be thrown when a program did not terminate\n within the expected time.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "data",
        "fct-source": "src/Test-Proctest.html#TimeoutException",
        "fct-type": "data",
        "title": "TimeoutException"
      },
      "index": {
        "description": "Exception to be thrown when program did not terminate within the expected time",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "TimeoutException",
        "normalized": "",
        "package": "proctest",
        "partial": "Timeout Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:CommandNotFound",
      "description": {
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "CommandNotFound String",
        "fct-source": "src/Test-Proctest.html#RunException",
        "fct-type": "function",
        "title": "CommandNotFound"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "CommandNotFound",
        "normalized": "",
        "package": "proctest",
        "partial": "Command Not Found",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:NoTimeout",
      "description": {
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "NoTimeout",
        "fct-source": "src/Test-Proctest.html#Timeout",
        "fct-type": "function",
        "title": "NoTimeout"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "NoTimeout",
        "normalized": "",
        "package": "proctest",
        "partial": "No Timeout",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:asUtf8",
      "description": {
        "fct-descr": "\u003cp\u003eTreats a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as UTF-8 decoded \u003ccode\u003e\u003ca\u003eText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "ByteString -\u003e Text",
        "fct-source": "src/Test-Proctest.html#asUtf8",
        "fct-type": "function",
        "title": "asUtf8"
      },
      "index": {
        "description": "Treats ByteString as UTF-8 decoded Text",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "asUtf8",
        "normalized": "ByteString-\u003eText",
        "package": "proctest",
        "partial": "Utf",
        "signature": "ByteString-\u003eText"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:asUtf8Str",
      "description": {
        "fct-descr": "\u003cp\u003eTreats a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e as UTF-8 decoded \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "ByteString -\u003e String",
        "fct-source": "src/Test-Proctest.html#asUtf8Str",
        "fct-type": "function",
        "title": "asUtf8Str"
      },
      "index": {
        "description": "Treats ByteString as UTF-8 decoded String",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "asUtf8Str",
        "normalized": "ByteString-\u003eString",
        "package": "proctest",
        "partial": "Utf Str",
        "signature": "ByteString-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:closeHandles",
      "description": {
        "fct-descr": "\u003cp\u003eCloses all handles in the list.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "[Handle] -\u003e IO ()",
        "fct-source": "src/Test-Proctest.html#closeHandles",
        "fct-type": "function",
        "title": "closeHandles"
      },
      "index": {
        "description": "Closes all handles in the list",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "closeHandles",
        "normalized": "[Handle]-\u003eIO()",
        "package": "proctest",
        "partial": "Handles",
        "signature": "[Handle]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:closeProcessHandles",
      "description": {
        "fct-descr": "\u003cp\u003eCloses all file handles to all given handle-process-tuples.\n\u003c/p\u003e\u003cp\u003eUse this to make sure that handles are not closed due to garbage\n collection (see \u003ca\u003eSystem.IO\u003c/a\u003e) while your processes are still running.\n\u003c/p\u003e\u003cp\u003eIt is safe to call this on processes which have already exited.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "[ProcessHandles] -\u003e IO ()",
        "fct-source": "src/Test-Proctest.html#closeProcessHandles",
        "fct-type": "function",
        "title": "closeProcessHandles"
      },
      "index": {
        "description": "Closes all file handles to all given handle-process-tuples Use this to make sure that handles are not closed due to garbage collection see System.IO while your processes are still running It is safe to call this on processes which have already exited",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "closeProcessHandles",
        "normalized": "[ProcessHandles]-\u003eIO()",
        "package": "proctest",
        "partial": "Process Handles",
        "signature": "[ProcessHandles]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:isRunning",
      "description": {
        "fct-descr": "\u003cp\u003eTells whether the given process is still running.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "ProcessHandle -\u003e IO Bool",
        "fct-source": "src/Test-Proctest.html#isRunning",
        "fct-type": "function",
        "title": "isRunning"
      },
      "index": {
        "description": "Tells whether the given process is still running",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "isRunning",
        "normalized": "ProcessHandle-\u003eIO Bool",
        "package": "proctest",
        "partial": "Running",
        "signature": "ProcessHandle-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:mkTimeoutMs",
      "description": {
        "fct-descr": "\u003cp\u003eTurns the given number of milliseconds into a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows an exception on \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e overflow.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "a -\u003e Timeout",
        "fct-source": "src/Test-Proctest.html#mkTimeoutMs",
        "fct-type": "function",
        "title": "mkTimeoutMs"
      },
      "index": {
        "description": "Turns the given number of milliseconds into Timeout Throws an exception on Int overflow",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "mkTimeoutMs",
        "normalized": "a-\u003eTimeout",
        "package": "proctest",
        "partial": "Timeout Ms",
        "signature": "a-\u003eTimeout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:mkTimeoutS",
      "description": {
        "fct-descr": "\u003cp\u003eTurns the given number of seconds into a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows an exception on \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e overflow.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "a -\u003e Timeout",
        "fct-source": "src/Test-Proctest.html#mkTimeoutS",
        "fct-type": "function",
        "title": "mkTimeoutS"
      },
      "index": {
        "description": "Turns the given number of seconds into Timeout Throws an exception on Int overflow",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "mkTimeoutS",
        "normalized": "a-\u003eTimeout",
        "package": "proctest",
        "partial": "Timeout",
        "signature": "a-\u003eTimeout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:mkTimeoutUs",
      "description": {
        "fct-descr": "\u003cp\u003eTurns the given number of microseconds into a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows an exception on \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e overflow.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Integer -\u003e Timeout",
        "fct-source": "src/Test-Proctest.html#mkTimeoutUs",
        "fct-type": "function",
        "title": "mkTimeoutUs"
      },
      "index": {
        "description": "Turns the given number of microseconds into Timeout Throws an exception on Int overflow",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "mkTimeoutUs",
        "normalized": "Integer-\u003eTimeout",
        "package": "proctest",
        "partial": "Timeout Us",
        "signature": "Integer-\u003eTimeout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:run",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a program with the given arguemtns.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e(stdout, stderr, stdin, process)\u003c/code\u003e. See \u003ccode\u003e\u003ca\u003erunInteractiveProcess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eDirectly runs the process, does not use a shell.\n\u003c/p\u003e\u003cp\u003eSets the 'BufferMode to \u003ccode\u003e\u003ca\u003eLineBuffering\u003c/a\u003e\u003c/code\u003e if successful.\n\u003c/p\u003e\u003cp\u003eThrows \u003ccode\u003e\u003ca\u003eCommandNotFound\u003c/a\u003e\u003c/code\u003e if the command doesn't exist.\n Due to \u003ccode\u003e\u003ca\u003ecreateProcess\u003c/a\u003e\u003c/code\u003e not throwing an exception\n (\u003ca\u003ehttp://www.haskell.org/pipermail/haskell-cafe/2012-August/102824.html\u003c/a\u003e),\n this is currently implemented by checking if the program\n returns early with error code 127.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "FilePath -\u003e [String] -\u003e IO (Handle, Handle, Handle, ProcessHandle)",
        "fct-source": "src/Test-Proctest.html#run",
        "fct-type": "function",
        "title": "run"
      },
      "index": {
        "description": "Runs program with the given arguemtns Returns stdout stderr stdin process See runInteractiveProcess Directly runs the process does not use shell Sets the BufferMode to LineBuffering if successful Throws CommandNotFound if the command doesn exist Due to createProcess not throwing an exception http www.haskell.org pipermail haskell-cafe August html this is currently implemented by checking if the program returns early with error code",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "run",
        "normalized": "FilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle,ProcessHandle)",
        "package": "proctest",
        "partial": "",
        "signature": "FilePath-\u003e[String]-\u003eIO(Handle,Handle,Handle,ProcessHandle)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:seconds",
      "description": {
        "fct-descr": "\u003cp\u003eTurns floating seconds into a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThrows an exception on \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e overflow.\n\u003c/p\u003e\u003cp\u003eExample: \u003ccode\u003e(seconds 0.2)\u003c/code\u003e are roughly \u003ccode\u003eMicros 200000\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Double -\u003e Timeout",
        "fct-source": "src/Test-Proctest.html#seconds",
        "fct-type": "function",
        "title": "seconds"
      },
      "index": {
        "description": "Turns floating seconds into Timeout Throws an exception on Int overflow Example seconds are roughly Micros",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "seconds",
        "normalized": "Double-\u003eTimeout",
        "package": "proctest",
        "partial": "",
        "signature": "Double-\u003eTimeout"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:setBuffering",
      "description": {
        "fct-descr": "\u003cp\u003eSets the buffering of the all given handles to the given \u003ccode\u003e\u003ca\u003eBufferMode\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "BufferMode -\u003e [Handle] -\u003e IO ()",
        "fct-source": "src/Test-Proctest.html#setBuffering",
        "fct-type": "function",
        "title": "setBuffering"
      },
      "index": {
        "description": "Sets the buffering of the all given handles to the given BufferMode",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "setBuffering",
        "normalized": "BufferMode-\u003e[Handle]-\u003eIO()",
        "package": "proctest",
        "partial": "Buffering",
        "signature": "BufferMode-\u003e[Handle]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:sleep",
      "description": {
        "fct-descr": "\u003cp\u003eSuspends execution for the given timeout; uses \u003ccode\u003e\u003ca\u003ethreadDelay\u003c/a\u003e\u003c/code\u003e internally.\n For \u003ccode\u003e\u003ca\u003eNoTimeout\u003c/a\u003e\u003c/code\u003e, threadDelay will not be called.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Timeout -\u003e IO ()",
        "fct-source": "src/Test-Proctest.html#sleep",
        "fct-type": "function",
        "title": "sleep"
      },
      "index": {
        "description": "Suspends execution for the given timeout uses threadDelay internally For NoTimeout threadDelay will not be called",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "sleep",
        "normalized": "Timeout-\u003eIO()",
        "package": "proctest",
        "partial": "",
        "signature": "Timeout-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:terminateProcesses",
      "description": {
        "fct-descr": "\u003cp\u003eTerminates all processes in the list.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "[ProcessHandle] -\u003e IO ()",
        "fct-source": "src/Test-Proctest.html#terminateProcesses",
        "fct-type": "function",
        "title": "terminateProcesses"
      },
      "index": {
        "description": "Terminates all processes in the list",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "terminateProcesses",
        "normalized": "[ProcessHandle]-\u003eIO()",
        "package": "proctest",
        "partial": "Processes",
        "signature": "[ProcessHandle]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:timeoutToSystemTimeoutArg",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e milliseconds suitable to be passed into \u003ccode\u003etimeout\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Timeout -\u003e Int",
        "fct-source": "src/Test-Proctest.html#timeoutToSystemTimeoutArg",
        "fct-type": "function",
        "title": "timeoutToSystemTimeoutArg"
      },
      "index": {
        "description": "Converts Timeout milliseconds suitable to be passed into timeout",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "timeoutToSystemTimeoutArg",
        "normalized": "Timeout-\u003eInt",
        "package": "proctest",
        "partial": "To System Timeout Arg",
        "signature": "Timeout-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:waitOutput",
      "description": {
        "fct-descr": "\u003cp\u003eBlocking wait for output on the given handle.\n\u003c/p\u003e\u003cp\u003eThrows a \u003ccode\u003e\u003ca\u003eTimeoutException\u003c/a\u003e\u003c/code\u003e if the timeout is exceeded.\n\u003c/p\u003e\u003cp\u003eBased on \u003ccode\u003e\u003ca\u003ewaitOutputNoEx\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Timeout-\u003e Int-\u003e Handle-\u003e IO ByteString",
        "fct-type": "function",
        "title": "waitOutput"
      },
      "index": {
        "description": "Blocking wait for output on the given handle Throws TimeoutException if the timeout is exceeded Based on waitOutputNoEx",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "waitOutput",
        "normalized": "Timeout-\u003eInt-\u003eHandle-\u003eIO ByteString",
        "package": "proctest",
        "partial": "Output",
        "signature": "Timeout-\u003eInt-\u003eHandle-\u003eIO ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:waitOutputNoEx",
      "description": {
        "fct-descr": "\u003cp\u003eBlocking wait for output on the given handle.\n\u003c/p\u003e\u003cp\u003eReturns \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e timeout is exceeded.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Timeout-\u003e Int-\u003e Handle-\u003e IO (Maybe ByteString)",
        "fct-type": "function",
        "title": "waitOutputNoEx"
      },
      "index": {
        "description": "Blocking wait for output on the given handle Returns Nothing timeout is exceeded",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "waitOutputNoEx",
        "normalized": "Timeout-\u003eInt-\u003eHandle-\u003eIO(Maybe ByteString)",
        "package": "proctest",
        "partial": "Output No Ex",
        "signature": "Timeout-\u003eInt-\u003eHandle-\u003eIO(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/proctest/docs/Test-Proctest.html#v:withTimeout",
      "description": {
        "fct-descr": "\u003cp\u003eOverflow-safe version of \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e, using \u003ccode\u003e\u003ca\u003eTimeout\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Proctest",
        "fct-package": "proctest",
        "fct-signature": "Timeout -\u003e IO a -\u003e IO (Maybe a)",
        "fct-source": "src/Test-Proctest.html#withTimeout",
        "fct-type": "function",
        "title": "withTimeout"
      },
      "index": {
        "description": "Overflow-safe version of timeout using Timeout",
        "hierarchy": "Test Proctest",
        "module": "Test.Proctest",
        "name": "withTimeout",
        "normalized": "Timeout-\u003eIO a-\u003eIO(Maybe a)",
        "package": "proctest",
        "partial": "Timeout",
        "signature": "Timeout-\u003eIO a-\u003eIO(Maybe a)"
      }
    }
  }
]