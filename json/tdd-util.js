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
        "word": "tdd-util"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eTest.Util.Framework\u003c/a\u003e is a super-module that re-exports other modules\n pertaining to TDD, so that they can be imported under a single module.\n\u003c/p\u003e\u003cp\u003eHUnit's \u003ccode\u003eTest\u003c/code\u003e type is renamed to \u003ccode\u003e\u003ca\u003eHTest\u003c/a\u003e\u003c/code\u003e, and test-framework's to \u003ccode\u003e\u003ca\u003eTTest\u003c/a\u003e\u003c/code\u003e.\n The same renaming scheme, with the addition that \u003ccode\u003eQ\u003c/code\u003e is prepended for\n QuickCheck, has been applied to the following names:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eassert\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eState\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etest\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is renamed to \u003ccode\u003e\u003ca\u003eSingleResult\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003ereason\u003c/a\u003e\u003c/code\u003e\n in this module cannot be renamed, so it is unfortunately not exported.\n\u003c/p\u003e\u003cp\u003eUnfortunately, Haskell's design makes it inconvenient to rename classes.\n In this module, \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e is not re-exported from any module.\n\u003c/p\u003e\u003cp\u003eQuickCheck-2.6's new \u003ca\u003eTest.QuickCheck.Test.interrupted\u003c/a\u003e is not exported\n under a name that does not conflict with\n \u003ca\u003eTest.QuickCheck.Property.interrupted\u003c/a\u003e, from either modules\n (\u003ca\u003eTest.QuickCheck.Test\u003c/a\u003e and \u003ca\u003eTest.QuickCheck\u003c/a\u003e), since its existence would depend on\n the version of QuickCheck.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Util.Framework",
          "name": "Framework",
          "package": "tdd-util",
          "source": "src/Test-Util-Framework.html",
          "type": "module"
        },
        "index": {
          "description": "Test.Util.Framework is super-module that re-exports other modules pertaining to TDD so that they can be imported under single module HUnit Test type is renamed to HTest and test-framework to TTest The same renaming scheme with the addition that is prepended for QuickCheck has been applied to the following names Test assert State test Result is renamed to SingleResult reason in this module cannot be renamed so it is unfortunately not exported Unfortunately Haskell design makes it inconvenient to rename classes In this module Testable is not re-exported from any module QuickCheck-2.6 new Test.QuickCheck.Test.interrupted is not exported under name that does not conflict with Test.QuickCheck.Property.interrupted from either modules Test.QuickCheck.Test and Test.QuickCheck since its existence would depend on the version of QuickCheck",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "Framework",
          "package": "tdd-util",
          "partial": "Framework",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "HTest",
          "package": "tdd-util",
          "source": "src/Test-Util-Framework.html#HTest",
          "type": "type"
        },
        "index": {
          "description": "Alias for Test",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "HTest",
          "package": "tdd-util",
          "partial": "HTest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:HTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "QState",
          "package": "tdd-util",
          "source": "src/Test-Util-Framework.html#QState",
          "type": "type"
        },
        "index": {
          "description": "Alias for State",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "QState",
          "package": "tdd-util",
          "partial": "QState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:QState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "SingleResult",
          "package": "tdd-util",
          "source": "src/Test-Util-Framework.html#SingleResult",
          "type": "type"
        },
        "index": {
          "description": "Alias for Result",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "SingleResult",
          "package": "tdd-util",
          "partial": "Single Result",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:SingleResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "TTest",
          "package": "tdd-util",
          "source": "src/Test-Util-Framework.html#TTest",
          "type": "type"
        },
        "index": {
          "description": "Alias for Test",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "TTest",
          "package": "tdd-util",
          "partial": "TTest",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:TTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "qAssert",
          "package": "tdd-util",
          "signature": "Bool -\u003e PropertyM m ()",
          "source": "src/Test-Util-Framework.html#qAssert",
          "type": "function"
        },
        "index": {
          "description": "Alias for assert",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "qAssert",
          "normalized": "Bool-\u003ePropertyM a()",
          "package": "tdd-util",
          "partial": "Assert",
          "signature": "Bool-\u003ePropertyM m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#v:qAssert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003etest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util.Framework",
          "name": "qTest",
          "package": "tdd-util",
          "signature": "QState -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
          "source": "src/Test-Util-Framework.html#qTest",
          "type": "function"
        },
        "index": {
          "description": "Alias for test",
          "hierarchy": "Test Util Framework",
          "module": "Test.Util.Framework",
          "name": "qTest",
          "normalized": "QState-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "package": "tdd-util",
          "partial": "Test",
          "signature": "QState-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#v:qTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing utilities for testing with \u003ccode\u003etest-framework\u003c/code\u003e, \u003ccode\u003eHUnit\u003c/code\u003e,\n and \u003ccode\u003etestable\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.Util",
          "name": "Util",
          "package": "tdd-util",
          "source": "src/Test-Util.html",
          "type": "module"
        },
        "index": {
          "description": "module containing utilities for testing with test-framework HUnit and testable",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "Util",
          "package": "tdd-util",
          "partial": "Util",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA class of exceptions for \u003ca\u003eTests.Util\u003c/a\u003e.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "TestUtilException",
          "package": "tdd-util",
          "source": "src/Test-Util.html#TestUtilException",
          "type": "data"
        },
        "index": {
          "description": "class of exceptions for Tests.Util",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TestUtilException",
          "package": "tdd-util",
          "partial": "Test Util Exception",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TestUtilException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "TimeLimitExceeded",
          "package": "tdd-util",
          "source": "src/Test-Util.html#TimeLimitExceeded",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TimeLimitExceeded",
          "package": "tdd-util",
          "partial": "Time Limit Exceeded",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TimeLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003etimeoutMicrosoconds\u003c/code\u003e was invoked with an integer that would cause the\n input given to \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e to overflow.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "TimeoutOverflow",
          "package": "tdd-util",
          "source": "src/Test-Util.html#TimeoutOverflow",
          "type": "data"
        },
        "index": {
          "description": "timeoutMicrosoconds was invoked with an integer that would cause the input given to timeout to overflow",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TimeoutOverflow",
          "package": "tdd-util",
          "partial": "Timeout Overflow",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TimeoutOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "TestUtilException",
          "package": "tdd-util",
          "signature": "e -\u003e TestUtilException",
          "source": "src/Test-Util.html#TestUtilException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TestUtilException",
          "normalized": "a-\u003eTestUtilException",
          "package": "tdd-util",
          "partial": "Test Util Exception",
          "signature": "e-\u003eTestUtilException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TestUtilException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "TimeLimitExceeded",
          "package": "tdd-util",
          "signature": "TimeLimitExceeded",
          "source": "src/Test-Util.html#TimeLimitExceeded",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TimeLimitExceeded",
          "package": "tdd-util",
          "partial": "Time Limit Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TimeLimitExceeded"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "TimeoutOverflow",
          "package": "tdd-util",
          "signature": "TimeoutOverflow",
          "source": "src/Test-Util.html#TimeoutOverflow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "TimeoutOverflow",
          "package": "tdd-util",
          "partial": "Timeout Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TimeoutOverflow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName of the function that directly threw the exception (\u003ccode\u003e\u003ca\u003eassertMicroseconds\u003c/a\u003e\u003c/code\u003e, etc.)\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timelimitExceeded_callerName",
          "package": "tdd-util",
          "signature": "String",
          "source": "src/Test-Util.html#TimeLimitExceeded",
          "type": "function"
        },
        "index": {
          "description": "Name of the function that directly threw the exception assertMicroseconds etc",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timelimitExceeded_callerName",
          "package": "tdd-util",
          "partial": "Exceeded Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_callerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional error message.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timelimitExceeded_message",
          "package": "tdd-util",
          "signature": "Maybe String",
          "source": "src/Test-Util.html#TimeLimitExceeded",
          "type": "function"
        },
        "index": {
          "description": "Optional error message",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timelimitExceeded_message",
          "package": "tdd-util",
          "partial": "Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe timelimit.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timelimitExceeded_microseconds",
          "package": "tdd-util",
          "signature": "Integer",
          "source": "src/Test-Util.html#TimeLimitExceeded",
          "type": "function"
        },
        "index": {
          "description": "The timelimit",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timelimitExceeded_microseconds",
          "package": "tdd-util",
          "partial": "Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum bound of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timeoutOverflow_inputBound",
          "package": "tdd-util",
          "signature": "Integer",
          "source": "src/Test-Util.html#TimeoutOverflow",
          "type": "function"
        },
        "index": {
          "description": "Maximum bound of Int as an Integer",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timeoutOverflow_inputBound",
          "package": "tdd-util",
          "partial": "Overflow Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_inputBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOptional error message.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timeoutOverflow_message",
          "package": "tdd-util",
          "signature": "Maybe String",
          "source": "src/Test-Util.html#TimeoutOverflow",
          "type": "function"
        },
        "index": {
          "description": "Optional error message",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timeoutOverflow_message",
          "package": "tdd-util",
          "partial": "Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInput given to \u003ccode\u003e\u003ca\u003etimeoutMicroseconds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "_timeoutOverflow_microseconds",
          "package": "tdd-util",
          "signature": "Integer",
          "source": "src/Test-Util.html#TimeoutOverflow",
          "type": "function"
        },
        "index": {
          "description": "Input given to timeoutMicroseconds",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "_timeoutOverflow_microseconds",
          "package": "tdd-util",
          "partial": "Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that a computation runs within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eIf the computation does not finish within the given time limit, a\n \u003ccode\u003e\u003ca\u003eTimeLimitExceeded\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003etimeoutMicroseconds\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "assertMicroseconds",
          "package": "tdd-util",
          "signature": "Integer -\u003e IO a -\u003e IO a",
          "source": "src/Test-Util.html#assertMicroseconds",
          "type": "function"
        },
        "index": {
          "description": "Assert that computation runs within an approximate time limit If the computation does not finish within the given time limit TimeLimitExceeded exception is thrown For more control see the more fundamental timeoutMicroseconds function",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "assertMicroseconds",
          "normalized": "Integer-\u003eIO a-\u003eIO a",
          "package": "tdd-util",
          "partial": "Microseconds",
          "signature": "Integer-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that an exception is not thrown.\n\u003c/p\u003e\u003cp\u003eWhen an exception is thrown, the input function, or a default one, is\n given the exception and the resulting string is output.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003eisExceptionThrown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "assertNotThrown",
          "package": "tdd-util",
          "signature": "Maybe (e -\u003e String) -\u003e m () -\u003e m ()",
          "source": "src/Test-Util.html#assertNotThrown",
          "type": "function"
        },
        "index": {
          "description": "Assert that an exception is not thrown When an exception is thrown the input function or default one is given the exception and the resulting string is output For more control see the more fundamental isExceptionThrown",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "assertNotThrown",
          "normalized": "Maybe(a-\u003eString)-\u003eb()-\u003eb()",
          "package": "tdd-util",
          "partial": "Not Thrown",
          "signature": "Maybe(e-\u003eString)-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertNotThrown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that a process finishes within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eIf the computation does not finish within the given time limit, a\n \u003ccode\u003e\u003ca\u003eTimeLimitExceeded\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003etimeoutProcessMicroseconds\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "assertProcessMicroseconds",
          "package": "tdd-util",
          "signature": "Integer -\u003e ProcessHandle -\u003e IO ()",
          "source": "src/Test-Util.html#assertProcessMicroseconds",
          "type": "function"
        },
        "index": {
          "description": "Assert that process finishes within an approximate time limit If the computation does not finish within the given time limit TimeLimitExceeded exception is thrown For more control see the more fundamental timeoutProcessMicroseconds function",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "assertProcessMicroseconds",
          "normalized": "Integer-\u003eProcessHandle-\u003eIO()",
          "package": "tdd-util",
          "partial": "Process Microseconds",
          "signature": "Integer-\u003eProcessHandle-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertProcessMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAssert that an exception is thrown.\n\u003c/p\u003e\u003cp\u003eWhen an exception is not thrown, the input \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, or otherwise a\n default string, is output.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003eisExceptionThrown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "assertThrown",
          "package": "tdd-util",
          "signature": "Maybe String-\u003e Proxy e-\u003e m ()-\u003e m ()",
          "type": "function"
        },
        "index": {
          "description": "Assert that an exception is thrown When an exception is not thrown the input String or otherwise default string is output For more control see the more fundamental isExceptionThrown",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "assertThrown",
          "normalized": "Maybe String-\u003eProxy a-\u003eb()-\u003eb()",
          "package": "tdd-util",
          "partial": "Thrown",
          "signature": "Maybe String-\u003eProxy e-\u003em()-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertThrown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003esystem-posix-riderct\u003c/code\u003e's redirectStderr to redirect\n stdout during the execution of a\n computation and capture the output, restoring the handle upon completion.\n This may be useful for writing unit tests against some parts of a program\n that interface with the outside world, such as logging and the CLI frontend.\n\u003c/p\u003e\u003cp\u003eNB: Since the standard file streams are redirected into a \u003ccode\u003eKnob\u003c/code\u003e, all tests\n that invoke \u003ccode\u003ecatchHandle\u003c/code\u003e must be run in isolation from each other, since\n only one test can read the handle's output at a time.  The author recommends\n structuring tests such that all such tests under a test tree that uses\n test-framework's \u003ccode\u003e\u003ca\u003emutuallyExclusive\u003c/a\u003e\u003c/code\u003e function and whose child nodes all do\n the same.  Both \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e can be captured at the same time,\n however.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "catchStderr",
          "package": "tdd-util",
          "signature": "IO a -\u003e IO (a, ByteString)",
          "source": "src/Test-Util.html#catchStderr",
          "type": "function"
        },
        "index": {
          "description": "wrapper around system-posix-riderct redirectStderr to redirect stdout during the execution of computation and capture the output restoring the handle upon completion This may be useful for writing unit tests against some parts of program that interface with the outside world such as logging and the CLI frontend NB Since the standard file streams are redirected into Knob all tests that invoke catchHandle must be run in isolation from each other since only one test can read the handle output at time The author recommends structuring tests such that all such tests under test tree that uses test-framework mutuallyExclusive function and whose child nodes all do the same Both stdout and stderr can be captured at the same time however",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "catchStderr",
          "normalized": "IO a-\u003eIO(a,ByteString)",
          "package": "tdd-util",
          "partial": "Stderr",
          "signature": "IO a-\u003eIO(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:catchStderr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA wrapper around \u003ccode\u003esystem-posix-riderct\u003c/code\u003e's redirectStdout to redirect\n stdout during the execution of a\n computation and capture the output, restoring the handle upon completion.\n This may be useful for writing unit tests against some parts of a program\n that interface with the outside world, such as logging and the CLI frontend.\n\u003c/p\u003e\u003cp\u003eNB: Since the standard file streams are redirected into a \u003ccode\u003eKnob\u003c/code\u003e, all tests\n that invoke \u003ccode\u003ecatchHandle\u003c/code\u003e must be run in isolation from each other, since\n only one test can read the handle's output at a time.  The author recommends\n structuring tests such that all such tests under a test tree that uses\n test-framework's \u003ccode\u003e\u003ca\u003emutuallyExclusive\u003c/a\u003e\u003c/code\u003e function and whose child nodes all do\n the same.  Both \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e can be captured at the same time,\n however.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "catchStdout",
          "package": "tdd-util",
          "signature": "IO a -\u003e IO (a, ByteString)",
          "source": "src/Test-Util.html#catchStdout",
          "type": "function"
        },
        "index": {
          "description": "wrapper around system-posix-riderct redirectStdout to redirect stdout during the execution of computation and capture the output restoring the handle upon completion This may be useful for writing unit tests against some parts of program that interface with the outside world such as logging and the CLI frontend NB Since the standard file streams are redirected into Knob all tests that invoke catchHandle must be run in isolation from each other since only one test can read the handle output at time The author recommends structuring tests such that all such tests under test tree that uses test-framework mutuallyExclusive function and whose child nodes all do the same Both stdout and stderr can be captured at the same time however",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "catchStdout",
          "normalized": "IO a-\u003eIO(a,ByteString)",
          "package": "tdd-util",
          "partial": "Stdout",
          "signature": "IO a-\u003eIO(a,ByteString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:catchStdout"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermine whether an exception was caught, and return it if so.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "isExceptionThrown",
          "package": "tdd-util",
          "signature": "m a -\u003e m (Either e a)",
          "source": "src/Test-Util.html#isExceptionThrown",
          "type": "function"
        },
        "index": {
          "description": "Determine whether an exception was caught and return it if so",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "isExceptionThrown",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "tdd-util",
          "partial": "Exception Thrown",
          "signature": "m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:isExceptionThrown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "testUtilExceptionFromException",
          "package": "tdd-util",
          "signature": "SomeException -\u003e Maybe e",
          "source": "src/Test-Util.html#testUtilExceptionFromException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "testUtilExceptionFromException",
          "normalized": "SomeException-\u003eMaybe a",
          "package": "tdd-util",
          "partial": "Util Exception From Exception",
          "signature": "SomeException-\u003eMaybe e",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:testUtilExceptionFromException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "testUtilExceptionToException",
          "package": "tdd-util",
          "signature": "e -\u003e SomeException",
          "source": "src/Test-Util.html#testUtilExceptionToException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "testUtilExceptionToException",
          "normalized": "a-\u003eSomeException",
          "package": "tdd-util",
          "partial": "Util Exception To Exception",
          "signature": "e-\u003eSomeException",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:testUtilExceptionToException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime a computation.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "timeMicroseconds",
          "package": "tdd-util",
          "signature": "m a -\u003e m (a, Integer)",
          "source": "src/Test-Util.html#timeMicroseconds",
          "type": "function"
        },
        "index": {
          "description": "Time computation",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeMicroseconds",
          "normalized": "a b-\u003ea(b,Integer)",
          "package": "tdd-util",
          "partial": "Microseconds",
          "signature": "m a-\u003em(a,Integer)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timelimitExceeded_callerName",
          "package": "tdd-util",
          "signature": "Lens' TimeLimitExceeded String",
          "source": "src/Test-Util.html#timelimitExceeded_callerName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timelimitExceeded_callerName",
          "package": "tdd-util",
          "partial": "Exceeded Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_callerName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timelimitExceeded_message",
          "package": "tdd-util",
          "signature": "Lens' TimeLimitExceeded (Maybe String)",
          "source": "src/Test-Util.html#timelimitExceeded_message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timelimitExceeded_message",
          "package": "tdd-util",
          "partial": "Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timelimitExceeded_microseconds",
          "package": "tdd-util",
          "signature": "Lens' TimeLimitExceeded Integer",
          "source": "src/Test-Util.html#timelimitExceeded_microseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timelimitExceeded_microseconds",
          "package": "tdd-util",
          "partial": "Exceeded",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eThis is currently a wrapper for \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e that checks for\n overflows.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "timeoutMicroseconds",
          "package": "tdd-util",
          "signature": "Integer -\u003e IO a -\u003e IO (Maybe a)",
          "source": "src/Test-Util.html#timeoutMicroseconds",
          "type": "function"
        },
        "index": {
          "description": "Run computation within an approximate time limit This is currently wrapper for timeout that checks for overflows",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeoutMicroseconds",
          "normalized": "Integer-\u003eIO a-\u003eIO(Maybe a)",
          "package": "tdd-util",
          "partial": "Microseconds",
          "signature": "Integer-\u003eIO a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutMicroseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timeoutOverflow_inputBound",
          "package": "tdd-util",
          "signature": "Lens' TimeoutOverflow Integer",
          "source": "src/Test-Util.html#timeoutOverflow_inputBound",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeoutOverflow_inputBound",
          "package": "tdd-util",
          "partial": "Overflow Bound",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_inputBound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timeoutOverflow_message",
          "package": "tdd-util",
          "signature": "Lens' TimeoutOverflow (Maybe String)",
          "source": "src/Test-Util.html#timeoutOverflow_message",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeoutOverflow_message",
          "package": "tdd-util",
          "partial": "Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Util",
          "name": "timeoutOverflow_microseconds",
          "package": "tdd-util",
          "signature": "Lens' TimeoutOverflow Integer",
          "source": "src/Test-Util.html#timeoutOverflow_microseconds",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeoutOverflow_microseconds",
          "package": "tdd-util",
          "partial": "Overflow",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_microseconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an approximate time limit, from the current time, to a process by\n its handle.\n\u003c/p\u003e\u003cp\u003eIf the process finishes approximately within the given time limit, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n its exit code is returned.  Otherwise, it is killed and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function requires a threaded runtime system to work properly.\n\u003c/p\u003e",
          "module": "Test.Util",
          "name": "timeoutProcessMicroseconds",
          "package": "tdd-util",
          "signature": "Integer -\u003e ProcessHandle -\u003e IO (Maybe ExitCode)",
          "source": "src/Test-Util.html#timeoutProcessMicroseconds",
          "type": "function"
        },
        "index": {
          "description": "Apply an approximate time limit from the current time to process by its handle If the process finishes approximately within the given time limit Just its exit code is returned Otherwise it is killed and Nothing is returned This function requires threaded runtime system to work properly",
          "hierarchy": "Test Util",
          "module": "Test.Util",
          "name": "timeoutProcessMicroseconds",
          "normalized": "Integer-\u003eProcessHandle-\u003eIO(Maybe ExitCode)",
          "package": "tdd-util",
          "partial": "Process Microseconds",
          "signature": "Integer-\u003eProcessHandle-\u003eIO(Maybe ExitCode)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutProcessMicroseconds"
      }
    }
  ]
]