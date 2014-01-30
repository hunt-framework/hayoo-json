[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ca\u003eTest.Util.Framework\u003c/a\u003e is a super-module that re-exports other modules\n pertaining to TDD, so that they can be imported under a single module.\n\u003c/p\u003e\u003cp\u003eHUnit's \u003ccode\u003eTest\u003c/code\u003e type is renamed to \u003ccode\u003e\u003ca\u003eHTest\u003c/a\u003e\u003c/code\u003e, and test-framework's to \u003ccode\u003e\u003ca\u003eTTest\u003c/a\u003e\u003c/code\u003e.\n The same renaming scheme, with the addition that \u003ccode\u003eQ\u003c/code\u003e is prepended for\n QuickCheck, has been applied to the following names:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e \u003ccode\u003eTest\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eassert\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003eState\u003c/code\u003e\n\u003c/li\u003e\u003cli\u003e \u003ccode\u003etest\u003c/code\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e is renamed to \u003ccode\u003e\u003ca\u003eSingleResult\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003ereason\u003c/a\u003e\u003c/code\u003e\n in this module cannot be renamed, so it is unfortunately not exported.\n\u003c/p\u003e\u003cp\u003eUnfortunately, Haskell's design makes it inconvenient to rename classes.\n In this module, \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e is not re-exported from any module.\n\u003c/p\u003e\u003cp\u003eQuickCheck-2.6's new \u003ca\u003eTest.QuickCheck.Test.interrupted\u003c/a\u003e is not exported\n under a name that does not conflict with\n \u003ca\u003eTest.QuickCheck.Property.interrupted\u003c/a\u003e, from either modules\n (\u003ca\u003eTest.QuickCheck.Test\u003c/a\u003e and \u003ca\u003eTest.QuickCheck\u003c/a\u003e), since its existence would depend on\n the version of QuickCheck.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "module",
        "fct-source": "src/Test-Util-Framework.html",
        "fct-type": "module",
        "title": "Framework"
      },
      "index": {
        "description": "Test.Util.Framework is super-module that re-exports other modules pertaining to TDD so that they can be imported under single module HUnit Test type is renamed to HTest and test-framework to TTest The same renaming scheme with the addition that is prepended for QuickCheck has been applied to the following names Test assert State test Result is renamed to SingleResult reason in this module cannot be renamed so it is unfortunately not exported Unfortunately Haskell design makes it inconvenient to rename classes In this module Testable is not re-exported from any module QuickCheck-2.6 new Test.QuickCheck.Test.interrupted is not exported under name that does not conflict with Test.QuickCheck.Property.interrupted from either modules Test.QuickCheck.Test and Test.QuickCheck since its existence would depend on the version of QuickCheck",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "Framework",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Framework",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:HTest",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "type",
        "fct-source": "src/Test-Util-Framework.html#HTest",
        "fct-type": "type",
        "title": "HTest"
      },
      "index": {
        "description": "Alias for Test",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "HTest",
        "normalized": "",
        "package": "tdd-util",
        "partial": "HTest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:QState",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "type",
        "fct-source": "src/Test-Util-Framework.html#QState",
        "fct-type": "type",
        "title": "QState"
      },
      "index": {
        "description": "Alias for State",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "QState",
        "normalized": "",
        "package": "tdd-util",
        "partial": "QState",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:SingleResult",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eResult\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "type",
        "fct-source": "src/Test-Util-Framework.html#SingleResult",
        "fct-type": "type",
        "title": "SingleResult"
      },
      "index": {
        "description": "Alias for Result",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "SingleResult",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Single Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#t:TTest",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "type",
        "fct-source": "src/Test-Util-Framework.html#TTest",
        "fct-type": "type",
        "title": "TTest"
      },
      "index": {
        "description": "Alias for Test",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "TTest",
        "normalized": "",
        "package": "tdd-util",
        "partial": "TTest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#v:qAssert",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "Bool -\u003e PropertyM m ()",
        "fct-source": "src/Test-Util-Framework.html#qAssert",
        "fct-type": "function",
        "title": "qAssert"
      },
      "index": {
        "description": "Alias for assert",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "qAssert",
        "normalized": "Bool-\u003ePropertyM a()",
        "package": "tdd-util",
        "partial": "Assert",
        "signature": "Bool-\u003ePropertyM m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util-Framework.html#v:qTest",
      "description": {
        "fct-descr": "\u003cp\u003eAlias for \u003ccode\u003e\u003ca\u003etest\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util.Framework",
        "fct-package": "tdd-util",
        "fct-signature": "QState -\u003e (StdGen -\u003e Int -\u003e Prop) -\u003e IO Result",
        "fct-source": "src/Test-Util-Framework.html#qTest",
        "fct-type": "function",
        "title": "qTest"
      },
      "index": {
        "description": "Alias for test",
        "hierarchy": "Test Util Framework",
        "module": "Test.Util.Framework",
        "name": "qTest",
        "normalized": "QState-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result",
        "package": "tdd-util",
        "partial": "Test",
        "signature": "QState-\u003e(StdGen-\u003eInt-\u003eProp)-\u003eIO Result"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA module containing utilities for testing with \u003ccode\u003etest-framework\u003c/code\u003e, \u003ccode\u003eHUnit\u003c/code\u003e,\n and \u003ccode\u003etestable\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "module",
        "fct-source": "src/Test-Util.html",
        "fct-type": "module",
        "title": "Util"
      },
      "index": {
        "description": "module containing utilities for testing with test-framework HUnit and testable",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "Util",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Util",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TestUtilException",
      "description": {
        "fct-descr": "\u003cp\u003eA class of exceptions for \u003ca\u003eTests.Util\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "data",
        "fct-source": "src/Test-Util.html#TestUtilException",
        "fct-type": "data",
        "title": "TestUtilException"
      },
      "index": {
        "description": "class of exceptions for Tests.Util",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TestUtilException",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Test Util Exception",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TimeLimitExceeded",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "data",
        "fct-source": "src/Test-Util.html#TimeLimitExceeded",
        "fct-type": "data",
        "title": "TimeLimitExceeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TimeLimitExceeded",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Time Limit Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#t:TimeoutOverflow",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003etimeoutMicrosoconds\u003c/code\u003e was invoked with an integer that would cause the\n input given to \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e to overflow.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "data",
        "fct-source": "src/Test-Util.html#TimeoutOverflow",
        "fct-type": "data",
        "title": "TimeoutOverflow"
      },
      "index": {
        "description": "timeoutMicrosoconds was invoked with an integer that would cause the input given to timeout to overflow",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TimeoutOverflow",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Timeout Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TestUtilException",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "e -\u003e TestUtilException",
        "fct-source": "src/Test-Util.html#TestUtilException",
        "fct-type": "function",
        "title": "TestUtilException"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TestUtilException",
        "normalized": "a-\u003eTestUtilException",
        "package": "tdd-util",
        "partial": "Test Util Exception",
        "signature": "e-\u003eTestUtilException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TimeLimitExceeded",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "TimeLimitExceeded",
        "fct-source": "src/Test-Util.html#TimeLimitExceeded",
        "fct-type": "function",
        "title": "TimeLimitExceeded"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TimeLimitExceeded",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Time Limit Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:TimeoutOverflow",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "TimeoutOverflow",
        "fct-source": "src/Test-Util.html#TimeoutOverflow",
        "fct-type": "function",
        "title": "TimeoutOverflow"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "TimeoutOverflow",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Timeout Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_callerName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the function that directly threw the exception (\u003ccode\u003e\u003ca\u003eassertMicroseconds\u003c/a\u003e\u003c/code\u003e, etc.)\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "String",
        "fct-source": "src/Test-Util.html#TimeLimitExceeded",
        "fct-type": "function",
        "title": "_timelimitExceeded_callerName"
      },
      "index": {
        "description": "Name of the function that directly threw the exception assertMicroseconds etc",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timelimitExceeded_callerName",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_message",
      "description": {
        "fct-descr": "\u003cp\u003eOptional error message.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Maybe String",
        "fct-source": "src/Test-Util.html#TimeLimitExceeded",
        "fct-type": "function",
        "title": "_timelimitExceeded_message"
      },
      "index": {
        "description": "Optional error message",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timelimitExceeded_message",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timelimitExceeded_microseconds",
      "description": {
        "fct-descr": "\u003cp\u003eThe timelimit.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer",
        "fct-source": "src/Test-Util.html#TimeLimitExceeded",
        "fct-type": "function",
        "title": "_timelimitExceeded_microseconds"
      },
      "index": {
        "description": "The timelimit",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timelimitExceeded_microseconds",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_inputBound",
      "description": {
        "fct-descr": "\u003cp\u003eMaximum bound of \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e as an \u003ccode\u003e\u003ca\u003eInteger\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer",
        "fct-source": "src/Test-Util.html#TimeoutOverflow",
        "fct-type": "function",
        "title": "_timeoutOverflow_inputBound"
      },
      "index": {
        "description": "Maximum bound of Int as an Integer",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timeoutOverflow_inputBound",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_message",
      "description": {
        "fct-descr": "\u003cp\u003eOptional error message.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Maybe String",
        "fct-source": "src/Test-Util.html#TimeoutOverflow",
        "fct-type": "function",
        "title": "_timeoutOverflow_message"
      },
      "index": {
        "description": "Optional error message",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timeoutOverflow_message",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:_timeoutOverflow_microseconds",
      "description": {
        "fct-descr": "\u003cp\u003eInput given to \u003ccode\u003e\u003ca\u003etimeoutMicroseconds\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer",
        "fct-source": "src/Test-Util.html#TimeoutOverflow",
        "fct-type": "function",
        "title": "_timeoutOverflow_microseconds"
      },
      "index": {
        "description": "Input given to timeoutMicroseconds",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "_timeoutOverflow_microseconds",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertMicroseconds",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that a computation runs within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eIf the computation does not finish within the given time limit, a\n \u003ccode\u003e\u003ca\u003eTimeLimitExceeded\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003etimeoutMicroseconds\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer -\u003e IO a -\u003e IO a",
        "fct-source": "src/Test-Util.html#assertMicroseconds",
        "fct-type": "function",
        "title": "assertMicroseconds"
      },
      "index": {
        "description": "Assert that computation runs within an approximate time limit If the computation does not finish within the given time limit TimeLimitExceeded exception is thrown For more control see the more fundamental timeoutMicroseconds function",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "assertMicroseconds",
        "normalized": "Integer-\u003eIO a-\u003eIO a",
        "package": "tdd-util",
        "partial": "Microseconds",
        "signature": "Integer-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertNotThrown",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that an exception is not thrown.\n\u003c/p\u003e\u003cp\u003eWhen an exception is thrown, the input function, or a default one, is\n given the exception and the resulting string is output.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003eisExceptionThrown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Maybe (e -\u003e String) -\u003e m () -\u003e m ()",
        "fct-source": "src/Test-Util.html#assertNotThrown",
        "fct-type": "function",
        "title": "assertNotThrown"
      },
      "index": {
        "description": "Assert that an exception is not thrown When an exception is thrown the input function or default one is given the exception and the resulting string is output For more control see the more fundamental isExceptionThrown",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "assertNotThrown",
        "normalized": "Maybe(a-\u003eString)-\u003eb()-\u003eb()",
        "package": "tdd-util",
        "partial": "Not Thrown",
        "signature": "Maybe(e-\u003eString)-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertProcessMicroseconds",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that a process finishes within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eIf the computation does not finish within the given time limit, a\n \u003ccode\u003e\u003ca\u003eTimeLimitExceeded\u003c/a\u003e\u003c/code\u003e exception is thrown.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003etimeoutProcessMicroseconds\u003c/a\u003e\u003c/code\u003e function.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer -\u003e ProcessHandle -\u003e IO ()",
        "fct-source": "src/Test-Util.html#assertProcessMicroseconds",
        "fct-type": "function",
        "title": "assertProcessMicroseconds"
      },
      "index": {
        "description": "Assert that process finishes within an approximate time limit If the computation does not finish within the given time limit TimeLimitExceeded exception is thrown For more control see the more fundamental timeoutProcessMicroseconds function",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "assertProcessMicroseconds",
        "normalized": "Integer-\u003eProcessHandle-\u003eIO()",
        "package": "tdd-util",
        "partial": "Process Microseconds",
        "signature": "Integer-\u003eProcessHandle-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:assertThrown",
      "description": {
        "fct-descr": "\u003cp\u003eAssert that an exception is thrown.\n\u003c/p\u003e\u003cp\u003eWhen an exception is not thrown, the input \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e, or otherwise a\n default string, is output.\n\u003c/p\u003e\u003cp\u003eFor more control, see the more fundamental \u003ccode\u003e\u003ca\u003eisExceptionThrown\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Maybe String-\u003e Proxy e-\u003e m ()-\u003e m ()",
        "fct-type": "function",
        "title": "assertThrown"
      },
      "index": {
        "description": "Assert that an exception is thrown When an exception is not thrown the input String or otherwise default string is output For more control see the more fundamental isExceptionThrown",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "assertThrown",
        "normalized": "Maybe String-\u003eProxy a-\u003eb()-\u003eb()",
        "package": "tdd-util",
        "partial": "Thrown",
        "signature": "Maybe String-\u003eProxy e-\u003em()-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:catchStderr",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003esystem-posix-riderct\u003c/code\u003e's redirectStderr to redirect\n stdout during the execution of a\n computation and capture the output, restoring the handle upon completion.\n This may be useful for writing unit tests against some parts of a program\n that interface with the outside world, such as logging and the CLI frontend.\n\u003c/p\u003e\u003cp\u003eNB: Since the standard file streams are redirected into a \u003ccode\u003eKnob\u003c/code\u003e, all tests\n that invoke \u003ccode\u003ecatchHandle\u003c/code\u003e must be run in isolation from each other, since\n only one test can read the handle's output at a time.  The author recommends\n structuring tests such that all such tests under a test tree that uses\n test-framework's \u003ccode\u003e\u003ca\u003emutuallyExclusive\u003c/a\u003e\u003c/code\u003e function and whose child nodes all do\n the same.  Both \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e can be captured at the same time,\n however.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "IO a -\u003e IO (a, ByteString)",
        "fct-source": "src/Test-Util.html#catchStderr",
        "fct-type": "function",
        "title": "catchStderr"
      },
      "index": {
        "description": "wrapper around system-posix-riderct redirectStderr to redirect stdout during the execution of computation and capture the output restoring the handle upon completion This may be useful for writing unit tests against some parts of program that interface with the outside world such as logging and the CLI frontend NB Since the standard file streams are redirected into Knob all tests that invoke catchHandle must be run in isolation from each other since only one test can read the handle output at time The author recommends structuring tests such that all such tests under test tree that uses test-framework mutuallyExclusive function and whose child nodes all do the same Both stdout and stderr can be captured at the same time however",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "catchStderr",
        "normalized": "IO a-\u003eIO(a,ByteString)",
        "package": "tdd-util",
        "partial": "Stderr",
        "signature": "IO a-\u003eIO(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:catchStdout",
      "description": {
        "fct-descr": "\u003cp\u003eA wrapper around \u003ccode\u003esystem-posix-riderct\u003c/code\u003e's redirectStdout to redirect\n stdout during the execution of a\n computation and capture the output, restoring the handle upon completion.\n This may be useful for writing unit tests against some parts of a program\n that interface with the outside world, such as logging and the CLI frontend.\n\u003c/p\u003e\u003cp\u003eNB: Since the standard file streams are redirected into a \u003ccode\u003eKnob\u003c/code\u003e, all tests\n that invoke \u003ccode\u003ecatchHandle\u003c/code\u003e must be run in isolation from each other, since\n only one test can read the handle's output at a time.  The author recommends\n structuring tests such that all such tests under a test tree that uses\n test-framework's \u003ccode\u003e\u003ca\u003emutuallyExclusive\u003c/a\u003e\u003c/code\u003e function and whose child nodes all do\n the same.  Both \u003ccode\u003estdout\u003c/code\u003e and \u003ccode\u003estderr\u003c/code\u003e can be captured at the same time,\n however.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "IO a -\u003e IO (a, ByteString)",
        "fct-source": "src/Test-Util.html#catchStdout",
        "fct-type": "function",
        "title": "catchStdout"
      },
      "index": {
        "description": "wrapper around system-posix-riderct redirectStdout to redirect stdout during the execution of computation and capture the output restoring the handle upon completion This may be useful for writing unit tests against some parts of program that interface with the outside world such as logging and the CLI frontend NB Since the standard file streams are redirected into Knob all tests that invoke catchHandle must be run in isolation from each other since only one test can read the handle output at time The author recommends structuring tests such that all such tests under test tree that uses test-framework mutuallyExclusive function and whose child nodes all do the same Both stdout and stderr can be captured at the same time however",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "catchStdout",
        "normalized": "IO a-\u003eIO(a,ByteString)",
        "package": "tdd-util",
        "partial": "Stdout",
        "signature": "IO a-\u003eIO(a,ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:isExceptionThrown",
      "description": {
        "fct-descr": "\u003cp\u003eDetermine whether an exception was caught, and return it if so.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "m a -\u003e m (Either e a)",
        "fct-source": "src/Test-Util.html#isExceptionThrown",
        "fct-type": "function",
        "title": "isExceptionThrown"
      },
      "index": {
        "description": "Determine whether an exception was caught and return it if so",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "isExceptionThrown",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "tdd-util",
        "partial": "Exception Thrown",
        "signature": "m a-\u003em(Either e a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:testUtilExceptionFromException",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "SomeException -\u003e Maybe e",
        "fct-source": "src/Test-Util.html#testUtilExceptionFromException",
        "fct-type": "function",
        "title": "testUtilExceptionFromException"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "testUtilExceptionFromException",
        "normalized": "SomeException-\u003eMaybe a",
        "package": "tdd-util",
        "partial": "Util Exception From Exception",
        "signature": "SomeException-\u003eMaybe e"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:testUtilExceptionToException",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "e -\u003e SomeException",
        "fct-source": "src/Test-Util.html#testUtilExceptionToException",
        "fct-type": "function",
        "title": "testUtilExceptionToException"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "testUtilExceptionToException",
        "normalized": "a-\u003eSomeException",
        "package": "tdd-util",
        "partial": "Util Exception To Exception",
        "signature": "e-\u003eSomeException"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeMicroseconds",
      "description": {
        "fct-descr": "\u003cp\u003eTime a computation.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "m a -\u003e m (a, Integer)",
        "fct-source": "src/Test-Util.html#timeMicroseconds",
        "fct-type": "function",
        "title": "timeMicroseconds"
      },
      "index": {
        "description": "Time computation",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeMicroseconds",
        "normalized": "a b-\u003ea(b,Integer)",
        "package": "tdd-util",
        "partial": "Microseconds",
        "signature": "m a-\u003em(a,Integer)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_callerName",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeLimitExceeded String",
        "fct-source": "src/Test-Util.html#timelimitExceeded_callerName",
        "fct-type": "function",
        "title": "timelimitExceeded_callerName"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timelimitExceeded_callerName",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_message",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeLimitExceeded (Maybe String)",
        "fct-source": "src/Test-Util.html#timelimitExceeded_message",
        "fct-type": "function",
        "title": "timelimitExceeded_message"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timelimitExceeded_message",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timelimitExceeded_microseconds",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeLimitExceeded Integer",
        "fct-source": "src/Test-Util.html#timelimitExceeded_microseconds",
        "fct-type": "function",
        "title": "timelimitExceeded_microseconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timelimitExceeded_microseconds",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Exceeded",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutMicroseconds",
      "description": {
        "fct-descr": "\u003cp\u003eRun a computation within an approximate time limit.\n\u003c/p\u003e\u003cp\u003eThis is currently a wrapper for \u003ccode\u003e\u003ca\u003etimeout\u003c/a\u003e\u003c/code\u003e that checks for\n overflows.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer -\u003e IO a -\u003e IO (Maybe a)",
        "fct-source": "src/Test-Util.html#timeoutMicroseconds",
        "fct-type": "function",
        "title": "timeoutMicroseconds"
      },
      "index": {
        "description": "Run computation within an approximate time limit This is currently wrapper for timeout that checks for overflows",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeoutMicroseconds",
        "normalized": "Integer-\u003eIO a-\u003eIO(Maybe a)",
        "package": "tdd-util",
        "partial": "Microseconds",
        "signature": "Integer-\u003eIO a-\u003eIO(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_inputBound",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeoutOverflow Integer",
        "fct-source": "src/Test-Util.html#timeoutOverflow_inputBound",
        "fct-type": "function",
        "title": "timeoutOverflow_inputBound"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeoutOverflow_inputBound",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow Bound",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_message",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeoutOverflow (Maybe String)",
        "fct-source": "src/Test-Util.html#timeoutOverflow_message",
        "fct-type": "function",
        "title": "timeoutOverflow_message"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeoutOverflow_message",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutOverflow_microseconds",
      "description": {
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Lens' TimeoutOverflow Integer",
        "fct-source": "src/Test-Util.html#timeoutOverflow_microseconds",
        "fct-type": "function",
        "title": "timeoutOverflow_microseconds"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeoutOverflow_microseconds",
        "normalized": "",
        "package": "tdd-util",
        "partial": "Overflow",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/tdd-util/docs/Test-Util.html#v:timeoutProcessMicroseconds",
      "description": {
        "fct-descr": "\u003cp\u003eApply an approximate time limit, from the current time, to a process by\n its handle.\n\u003c/p\u003e\u003cp\u003eIf the process finishes approximately within the given time limit, \u003ccode\u003e\u003ca\u003eJust\u003c/a\u003e\u003c/code\u003e\n its exit code is returned.  Otherwise, it is killed and \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e is\n returned.\n\u003c/p\u003e\u003cp\u003eThis function requires a threaded runtime system to work properly.\n\u003c/p\u003e",
        "fct-module": "Test.Util",
        "fct-package": "tdd-util",
        "fct-signature": "Integer -\u003e ProcessHandle -\u003e IO (Maybe ExitCode)",
        "fct-source": "src/Test-Util.html#timeoutProcessMicroseconds",
        "fct-type": "function",
        "title": "timeoutProcessMicroseconds"
      },
      "index": {
        "description": "Apply an approximate time limit from the current time to process by its handle If the process finishes approximately within the given time limit Just its exit code is returned Otherwise it is killed and Nothing is returned This function requires threaded runtime system to work properly",
        "hierarchy": "Test Util",
        "module": "Test.Util",
        "name": "timeoutProcessMicroseconds",
        "normalized": "Integer-\u003eProcessHandle-\u003eIO(Maybe ExitCode)",
        "package": "tdd-util",
        "partial": "Process Microseconds",
        "signature": "Integer-\u003eProcessHandle-\u003eIO(Maybe ExitCode)"
      }
    }
  }
]