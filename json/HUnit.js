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
        "word": "HUnit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eBasic definitions for the HUnit library.\n\u003c/p\u003e\u003cp\u003eThis module contains what you need to create assertions and test cases and\n   combine them into test suites. \n\u003c/p\u003e\u003cp\u003eThis module also provides infrastructure for \n   implementing test controllers (which are used to execute tests). \n   See \u003ca\u003eTest.HUnit.Text\u003c/a\u003e for a great example of how to implement a test \n   controller.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Base",
          "name": "Base",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html",
          "type": "module"
        },
        "index": {
          "description": "Basic definitions for the HUnit library This module contains what you need to create assertions and test cases and combine them into test suites This module also provides infrastructure for implementing test controllers which are used to execute tests See Test.HUnit.Text for great example of how to implement test controller",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Base",
          "package": "HUnit",
          "partial": "Base",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows the extension of the assertion mechanism.\n\u003c/p\u003e\u003cp\u003eSince an \u003ccode\u003e\u003ca\u003eAssertion\u003c/a\u003e\u003c/code\u003e can be a sequence of \u003ccode\u003eAssertion\u003c/code\u003es and \u003ccode\u003eIO\u003c/code\u003e actions, \n there is a fair amount of flexibility of what can be achieved.  As a rule,\n the resulting \u003ccode\u003eAssertion\u003c/code\u003e should be the body of a \u003ccode\u003e\u003ca\u003eTestCase\u003c/a\u003e\u003c/code\u003e or part of\n a \u003ccode\u003eTestCase\u003c/code\u003e; it should not be used to assert multiple, independent \n conditions.\n\u003c/p\u003e\u003cp\u003eIf more complex arrangements of assertions are needed, \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003es and\n \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e should be used.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Assertable",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Assertable",
          "type": "class"
        },
        "index": {
          "description": "Allows the extension of the assertion mechanism Since an Assertion can be sequence of Assertion and IO actions there is fair amount of flexibility of what can be achieved As rule the resulting Assertion should be the body of TestCase or part of TestCase it should not be used to assert multiple independent conditions If more complex arrangements of assertions are needed Test and Testable should be used",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Assertable",
          "package": "HUnit",
          "partial": "Assertable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Assertable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen an assertion is evaluated, it will output a message if and only if the\n assertion fails.  \n\u003c/p\u003e\u003cp\u003eTest cases are composed of a sequence of one or more assertions.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Assertion",
          "package": "HUnit",
          "source": "src/Test-HUnit-Lang.html#Assertion",
          "type": "type"
        },
        "index": {
          "description": "When an assertion is evaluated it will output message if and only if the assertion fails Test cases are composed of sequence of one or more assertions",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Assertion",
          "package": "HUnit",
          "partial": "Assertion",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Assertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsed to signify that a data type can be converted to an assertion \n predicate.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "AssertionPredicable",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#AssertionPredicable",
          "type": "class"
        },
        "index": {
          "description": "Used to signify that data type can be converted to an assertion predicate",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "AssertionPredicable",
          "package": "HUnit",
          "partial": "Assertion Predicable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:AssertionPredicable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe result of an assertion that hasn't been evaluated yet.\n\u003c/p\u003e\u003cp\u003eMost test cases follow the following steps:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Do some processing or an action.\n\u003c/li\u003e\u003cli\u003e Assert certain conditions.\n\u003c/li\u003e\u003c/ol\u003e\u003cp\u003eHowever, this flow is not always suitable.  \u003ccode\u003eAssertionPredicate\u003c/code\u003e allows for\n additional steps to be inserted without the initial action to be affected\n by side effects.  Additionally, clean-up can be done before the test case\n has a chance to end.  A potential work flow is:\n\u003c/p\u003e\u003col\u003e\u003cli\u003e Write data to a file.\n\u003c/li\u003e\u003cli\u003e Read data from a file, evaluate conditions.\n\u003c/li\u003e\u003cli\u003e Clean up the file.\n\u003c/li\u003e\u003cli\u003e Assert that the side effects of the read operation meet certain conditions.\n\u003c/li\u003e\u003cli\u003e Assert that the conditions evaluated in step 2 are met.\n\u003c/li\u003e\u003c/ol\u003e",
          "module": "Test.HUnit.Base",
          "name": "AssertionPredicate",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#AssertionPredicate",
          "type": "type"
        },
        "index": {
          "description": "The result of an assertion that hasn been evaluated yet Most test cases follow the following steps Do some processing or an action Assert certain conditions However this flow is not always suitable AssertionPredicate allows for additional steps to be inserted without the initial action to be affected by side effects Additionally clean-up can be done before the test case has chance to end potential work flow is Write data to file Read data from file evaluate conditions Clean up the file Assert that the side effects of the read operation meet certain conditions Assert that the conditions evaluated in step are met",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "AssertionPredicate",
          "package": "HUnit",
          "partial": "Assertion Predicate",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:AssertionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA data structure that hold the results of tests that have been performed\n up until this point.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Counts",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "data"
        },
        "index": {
          "description": "data structure that hold the results of tests that have been performed up until this point",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Counts",
          "package": "HUnit",
          "partial": "Counts",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA specialized form of \u003ccode\u003e\u003ca\u003eAssertable\u003c/a\u003e\u003c/code\u003e to handle lists.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "ListAssertable",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#ListAssertable",
          "type": "class"
        },
        "index": {
          "description": "specialized form of Assertable to handle lists",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "ListAssertable",
          "package": "HUnit",
          "partial": "List Assertable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:ListAssertable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eComposed into \u003ccode\u003e\u003ca\u003ePath\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Node",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Node",
          "type": "data"
        },
        "index": {
          "description": "Composed into Path",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Node",
          "package": "HUnit",
          "partial": "Node",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Node"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUniquely describes the location of a test within a test hierarchy.\n Node order is from test case to root.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Path",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Path",
          "type": "type"
        },
        "index": {
          "description": "Uniquely describes the location of test within test hierarchy Node order is from test case to root",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Path",
          "package": "HUnit",
          "partial": "Path",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport generator for reporting problems that have occurred during\n   a test run. Problems may be errors or assertion failures.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "ReportProblem",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#ReportProblem",
          "type": "type"
        },
        "index": {
          "description": "Report generator for reporting problems that have occurred during test run Problems may be errors or assertion failures",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "ReportProblem",
          "package": "HUnit",
          "partial": "Report Problem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:ReportProblem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReport generator for reporting the start of a test run.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "ReportStart",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#ReportStart",
          "type": "type"
        },
        "index": {
          "description": "Report generator for reporting the start of test run",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "ReportStart",
          "package": "HUnit",
          "partial": "Report Start",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:ReportStart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKeeps track of the remaining tests and the results of the performed tests.\n As each test is performed, the path is removed and the counts are\n updated as appropriate.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "State",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#State",
          "type": "data"
        },
        "index": {
          "description": "Keeps track of the remaining tests and the results of the performed tests As each test is performed the path is removed and the counts are updated as appropriate",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "State",
          "package": "HUnit",
          "partial": "State",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe basic structure used to create an annotated tree of test cases.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Test",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Test",
          "type": "data"
        },
        "index": {
          "description": "The basic structure used to create an annotated tree of test cases",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Test",
          "package": "HUnit",
          "partial": "Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides a way to convert data into a \u003ccode\u003eTest\u003c/code\u003e or set of \u003ccode\u003eTest\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "Testable",
          "package": "HUnit",
          "source": "src/Test-HUnit-Base.html#Testable",
          "type": "class"
        },
        "index": {
          "description": "Provides way to convert data into Test or set of Test",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Testable",
          "package": "HUnit",
          "partial": "Testable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#t:Testable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for a test case that asserts equality (with the expected \n   value on the left-hand side, and the actual value on the right-hand\n   side).\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(~=?)",
          "package": "HUnit",
          "signature": "a-\u003e a-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for test case that asserts equality with the expected value on the left-hand side and the actual value on the right-hand side",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(~=?) ~=?",
          "normalized": "a-\u003ea-\u003eTest",
          "package": "HUnit",
          "signature": "a-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-126--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a test case resulting from asserting the condition obtained \n   from the specified \u003ccode\u003e\u003ca\u003eAssertionPredicable\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(~?)",
          "package": "HUnit",
          "signature": "t-\u003e String-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Creates test case resulting from asserting the condition obtained from the specified AssertionPredicable",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(~?) ~?",
          "normalized": "a-\u003eString-\u003eTest",
          "package": "HUnit",
          "signature": "t-\u003eString-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-126--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShorthand for a test case that asserts equality (with the actual \n   value on the left-hand side, and the expected value on the right-hand\n   side).\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(~?=)",
          "package": "HUnit",
          "signature": "a-\u003e a-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "Shorthand for test case that asserts equality with the actual value on the left-hand side and the expected value on the right-hand side",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(~?=) ~?=",
          "normalized": "a-\u003ea-\u003eTest",
          "package": "HUnit",
          "signature": "a-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-126--63--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a test from the specified \u003ccode\u003e\u003ca\u003eTestable\u003c/a\u003e\u003c/code\u003e, with the specified \n   label attached to it.\n\u003c/p\u003e\u003cp\u003eSince \u003ccode\u003e\u003ca\u003eTest\u003c/a\u003e\u003c/code\u003e is \u003ccode\u003eTestable\u003c/code\u003e, this can be used as a shorthand way of attaching\n a \u003ccode\u003e\u003ca\u003eTestLabel\u003c/a\u003e\u003c/code\u003e to one or more tests.  \n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(~:)",
          "package": "HUnit",
          "signature": "String -\u003e t -\u003e Test",
          "source": "src/Test-HUnit-Base.html#~%3A",
          "type": "function"
        },
        "index": {
          "description": "Creates test from the specified Testable with the specified label attached to it Since Test is Testable this can be used as shorthand way of attaching TestLabel to one or more tests",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(~:) ~:",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "HUnit",
          "signature": "String-\u003et-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-126-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value\n   (with the expected value on the left-hand side).\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(@=?)",
          "package": "HUnit",
          "signature": "a-\u003e a-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value with the expected value on the left-hand side",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(@=?) @=?",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "HUnit",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-64--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the condition obtained from the specified\n   \u003ccode\u003e\u003ca\u003eAssertionPredicable\u003c/a\u003e\u003c/code\u003e holds.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(@?)",
          "package": "HUnit",
          "signature": "t-\u003e String-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the condition obtained from the specified AssertionPredicable holds",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(@?) @?",
          "normalized": "a-\u003eString-\u003eAssertion",
          "package": "HUnit",
          "signature": "t-\u003eString-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-64--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value\n   (with the actual value on the left-hand side).\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "(@?=)",
          "package": "HUnit",
          "signature": "a-\u003e a-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value with the actual value on the left-hand side",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "(@?=) @?=",
          "normalized": "a-\u003ea-\u003eAssertion",
          "package": "HUnit",
          "signature": "a-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:-64--63--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "Counts",
          "package": "HUnit",
          "signature": "Counts",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Counts",
          "package": "HUnit",
          "partial": "Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:Counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "Label",
          "package": "HUnit",
          "signature": "Label String",
          "source": "src/Test-HUnit-Base.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "Label",
          "package": "HUnit",
          "partial": "Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "ListItem",
          "package": "HUnit",
          "signature": "ListItem Int",
          "source": "src/Test-HUnit-Base.html#Node",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "ListItem",
          "package": "HUnit",
          "partial": "List Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:ListItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "State",
          "package": "HUnit",
          "signature": "State",
          "source": "src/Test-HUnit-Base.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "State",
          "package": "HUnit",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA single, independent test case composed.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "TestCase",
          "package": "HUnit",
          "signature": "TestCase Assertion",
          "source": "src/Test-HUnit-Base.html#Test",
          "type": "function"
        },
        "index": {
          "description": "single independent test case composed",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "TestCase",
          "package": "HUnit",
          "partial": "Test Case",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:TestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA name or description for a subtree of the \u003ccode\u003eTest\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "TestLabel",
          "package": "HUnit",
          "signature": "TestLabel String Test",
          "source": "src/Test-HUnit-Base.html#Test",
          "type": "function"
        },
        "index": {
          "description": "name or description for subtree of the Test",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "TestLabel",
          "package": "HUnit",
          "partial": "Test Label",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:TestLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA set of \u003ccode\u003eTest\u003c/code\u003es sharing the same level in the hierarchy. \n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "TestList",
          "package": "HUnit",
          "signature": "TestList [Test]",
          "source": "src/Test-HUnit-Base.html#Test",
          "type": "function"
        },
        "index": {
          "description": "set of Test sharing the same level in the hierarchy",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "TestList",
          "normalized": "TestList[Test]",
          "package": "HUnit",
          "partial": "Test List",
          "signature": "TestList[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:TestList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "assert",
          "package": "HUnit",
          "signature": "t -\u003e Assertion",
          "source": "src/Test-HUnit-Base.html#assert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assert",
          "normalized": "a-\u003eAssertion",
          "package": "HUnit",
          "signature": "t-\u003eAssertion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified condition holds.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "assertBool",
          "package": "HUnit",
          "signature": "String-\u003e Bool-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified condition holds",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assertBool",
          "normalized": "String-\u003eBool-\u003eAssertion",
          "package": "HUnit",
          "partial": "Bool",
          "signature": "String-\u003eBool-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertBool"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that the specified actual value is equal to the expected value.\n The output message will contain the prefix, the expected value, and the \n actual value.\n\u003c/p\u003e\u003cp\u003eIf the prefix is the empty string (i.e., \u003ccode\u003e\"\"\u003c/code\u003e), then the prefix is omitted\n and only the expected and actual values are output.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "assertEqual",
          "package": "HUnit",
          "signature": "String-\u003e a-\u003e a-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Asserts that the specified actual value is equal to the expected value The output message will contain the prefix the expected value and the actual value If the prefix is the empty string i.e then the prefix is omitted and only the expected and actual values are output",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assertEqual",
          "normalized": "String-\u003ea-\u003ea-\u003eAssertion",
          "package": "HUnit",
          "partial": "Equal",
          "signature": "String-\u003ea-\u003ea-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnconditionally signals that a failure has occured.  All\n other assertions can be expressed with the form:\n\u003c/p\u003e\u003cpre\u003e\n    if conditionIsMet \n        then IO () \n        else assertFailure msg\n\u003c/pre\u003e",
          "module": "[\"Test.HUnit.Base\",\"Test.HUnit.Lang\"]",
          "name": "assertFailure",
          "package": "HUnit",
          "signature": "String-\u003e Assertion",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertFailure\",\"http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#v:assertFailure\"]"
        },
        "index": {
          "description": "Unconditionally signals that failure has occured All other assertions can be expressed with the form if conditionIsMet then IO else assertFailure msg",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assertFailure",
          "normalized": "String-\u003eAssertion",
          "package": "HUnit",
          "partial": "Failure",
          "signature": "String-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSignals an assertion failure if a non-empty message (i.e., a message\n other than \u003ccode\u003e\"\"\u003c/code\u003e) is passed.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "assertString",
          "package": "HUnit",
          "signature": "String-\u003e Assertion",
          "type": "function"
        },
        "index": {
          "description": "Signals an assertion failure if non-empty message i.e message other than is passed",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assertString",
          "normalized": "String-\u003eAssertion",
          "package": "HUnit",
          "partial": "String",
          "signature": "String-\u003eAssertion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "assertionPredicate",
          "package": "HUnit",
          "signature": "t -\u003e AssertionPredicate",
          "source": "src/Test-HUnit-Base.html#assertionPredicate",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "assertionPredicate",
          "normalized": "a-\u003eAssertionPredicate",
          "package": "HUnit",
          "partial": "Predicate",
          "signature": "t-\u003eAssertionPredicate",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:assertionPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "cases",
          "package": "HUnit",
          "signature": "Int",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "cases",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:cases"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "counts",
          "package": "HUnit",
          "signature": "Counts",
          "source": "src/Test-HUnit-Base.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "counts",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:counts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "errors",
          "package": "HUnit",
          "signature": "Int",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "errors",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:errors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "failures",
          "package": "HUnit",
          "signature": "Int",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "failures",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:failures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "listAssert",
          "package": "HUnit",
          "signature": "[t] -\u003e Assertion",
          "source": "src/Test-HUnit-Base.html#listAssert",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "listAssert",
          "normalized": "[a]-\u003eAssertion",
          "package": "HUnit",
          "partial": "Assert",
          "signature": "[t]-\u003eAssertion",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:listAssert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "path",
          "package": "HUnit",
          "signature": "Path",
          "source": "src/Test-HUnit-Base.html#State",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "path",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a test run with the specified report generators.  \n\u003c/p\u003e\u003cp\u003eThis handles the actual running of the tests.  Most developers will want \n to use \u003ccode\u003eHUnit.Text.runTestTT\u003c/code\u003e instead.  A developer could use this function \n to execute tests via another IO system, such as a GUI, or to output the \n results in a different manner (e.g., upload XML-formatted results to a \n webservice).  \n\u003c/p\u003e\u003cp\u003eNote that the counts in a start report do not include the test case\n being started, whereas the counts in a problem report do include the\n test case just finished.  The principle is that the counts are sampled\n only between test case executions.  As a result, the number of test\n case successes always equals the difference of test cases tried and\n the sum of test case errors and failures.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "performTest",
          "package": "HUnit",
          "signature": "ReportStart us-\u003e ReportProblem us-\u003e ReportProblem us-\u003e us-\u003e Test-\u003e IO (Counts, us)",
          "type": "function"
        },
        "index": {
          "description": "Performs test run with the specified report generators This handles the actual running of the tests Most developers will want to use HUnit.Text.runTestTT instead developer could use this function to execute tests via another IO system such as GUI or to output the results in different manner e.g upload XML-formatted results to webservice Note that the counts in start report do not include the test case being started whereas the counts in problem report do include the test case just finished The principle is that the counts are sampled only between test case executions As result the number of test case successes always equals the difference of test cases tried and the sum of test case errors and failures",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "performTest",
          "normalized": "ReportStart a-\u003eReportProblem a-\u003eReportProblem a-\u003ea-\u003eTest-\u003eIO(Counts,a)",
          "package": "HUnit",
          "partial": "Test",
          "signature": "ReportStart us-\u003eReportProblem us-\u003eReportProblem us-\u003eus-\u003eTest-\u003eIO(Counts,us)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:performTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "test",
          "package": "HUnit",
          "signature": "t -\u003e Test",
          "source": "src/Test-HUnit-Base.html#test",
          "type": "method"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "test",
          "normalized": "a-\u003eTest",
          "package": "HUnit",
          "signature": "t-\u003eTest",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCounts the number of \u003ccode\u003e\u003ca\u003eTestCase\u003c/a\u003e\u003c/code\u003es in a tree of \u003ccode\u003eTest\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "testCaseCount",
          "package": "HUnit",
          "signature": "Test -\u003e Int",
          "source": "src/Test-HUnit-Base.html#testCaseCount",
          "type": "function"
        },
        "index": {
          "description": "Counts the number of TestCase in tree of Test",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "testCaseCount",
          "normalized": "Test-\u003eInt",
          "package": "HUnit",
          "partial": "Case Count",
          "signature": "Test-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:testCaseCount"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDetermines the paths for all \u003ccode\u003e\u003ca\u003eTestCase\u003c/a\u003e\u003c/code\u003es in a tree of \u003ccode\u003eTest\u003c/code\u003es.\n\u003c/p\u003e",
          "module": "Test.HUnit.Base",
          "name": "testCasePaths",
          "package": "HUnit",
          "signature": "Test -\u003e [Path]",
          "source": "src/Test-HUnit-Base.html#testCasePaths",
          "type": "function"
        },
        "index": {
          "description": "Determines the paths for all TestCase in tree of Test",
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "testCasePaths",
          "normalized": "Test-\u003e[Path]",
          "package": "HUnit",
          "partial": "Case Paths",
          "signature": "Test-\u003e[Path]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:testCasePaths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Base",
          "name": "tried",
          "package": "HUnit",
          "signature": "Int",
          "source": "src/Test-HUnit-Base.html#Counts",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Base",
          "module": "Test.HUnit.Base",
          "name": "tried",
          "package": "HUnit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Base.html#v:tried"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module abstracts the differences between implementations of \n Haskell (e.g., GHC, Hugs, and NHC).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Lang",
          "name": "Lang",
          "package": "HUnit",
          "source": "src/Test-HUnit-Lang.html",
          "type": "module"
        },
        "index": {
          "description": "This module abstracts the differences between implementations of Haskell e.g GHC Hugs and NHC",
          "hierarchy": "Test HUnit Lang",
          "module": "Test.HUnit.Lang",
          "name": "Lang",
          "package": "HUnit",
          "partial": "Lang",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen an assertion is evaluated, it will output a message if and only if the\n assertion fails.  \n\u003c/p\u003e\u003cp\u003eTest cases are composed of a sequence of one or more assertions.\n\u003c/p\u003e",
          "module": "Test.HUnit.Lang",
          "name": "Assertion",
          "package": "HUnit",
          "source": "src/Test-HUnit-Lang.html#Assertion",
          "type": "type"
        },
        "index": {
          "description": "When an assertion is evaluated it will output message if and only if the assertion fails Test cases are composed of sequence of one or more assertions",
          "hierarchy": "Test HUnit Lang",
          "module": "Test.HUnit.Lang",
          "name": "Assertion",
          "package": "HUnit",
          "partial": "Assertion",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#t:Assertion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Lang",
          "name": "HUnitFailure",
          "package": "HUnit",
          "source": "src/Test-HUnit-Lang.html#HUnitFailure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test HUnit Lang",
          "module": "Test.HUnit.Lang",
          "name": "HUnitFailure",
          "package": "HUnit",
          "partial": "HUnit Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#t:HUnitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Lang",
          "name": "HUnitFailure",
          "package": "HUnit",
          "signature": "HUnitFailure String",
          "source": "src/Test-HUnit-Lang.html#HUnitFailure",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Lang",
          "module": "Test.HUnit.Lang",
          "name": "HUnitFailure",
          "package": "HUnit",
          "partial": "HUnit Failure",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#v:HUnitFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePerforms a single test case.  The meaning of the result is as follows:\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003e\u003ccode\u003eNothing\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e           test case success\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJust (True,  msg)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e test case failure with the given message\n\u003c/dd\u003e\u003cdt\u003e\u003ccode\u003eJust (False, msg)\u003c/code\u003e\u003c/dt\u003e\u003cdd\u003e test case error with the given message\n\u003c/dd\u003e\u003c/dl\u003e",
          "module": "Test.HUnit.Lang",
          "name": "performTestCase",
          "package": "HUnit",
          "signature": "Assertion-\u003e IO (Maybe (Bool, String))",
          "type": "function"
        },
        "index": {
          "description": "Performs single test case The meaning of the result is as follows Nothing test case success Just True msg test case failure with the given message Just False msg test case error with the given message",
          "hierarchy": "Test HUnit Lang",
          "module": "Test.HUnit.Lang",
          "name": "performTestCase",
          "normalized": "Assertion-\u003eIO(Maybe(Bool,String))",
          "package": "HUnit",
          "partial": "Test Case",
          "signature": "Assertion-\u003eIO(Maybe(Bool,String))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Lang.html#v:performTestCase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module handles the complexities of writing information to the\n terminal, including modifying text in place.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Terminal",
          "name": "Terminal",
          "package": "HUnit",
          "source": "src/Test-HUnit-Terminal.html",
          "type": "module"
        },
        "index": {
          "description": "This module handles the complexities of writing information to the terminal including modifying text in place",
          "hierarchy": "Test HUnit Terminal",
          "module": "Test.HUnit.Terminal",
          "name": "Terminal",
          "package": "HUnit",
          "partial": "Terminal",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Terminal.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimplifies the input string by interpreting \u003ccode\u003e\\r\u003c/code\u003e and \u003ccode\u003e\\b\u003c/code\u003e characters\n specially so that the result string has the same final (or \u003cem\u003eterminal\u003c/em\u003e,\n pun intended) appearance as would the input string when written to a\n terminal that overwrites character positions following carriage\n returns and backspaces.\n\u003c/p\u003e",
          "module": "Test.HUnit.Terminal",
          "name": "terminalAppearance",
          "package": "HUnit",
          "signature": "String -\u003e String",
          "source": "src/Test-HUnit-Terminal.html#terminalAppearance",
          "type": "function"
        },
        "index": {
          "description": "Simplifies the input string by interpreting and characters specially so that the result string has the same final or terminal pun intended appearance as would the input string when written to terminal that overwrites character positions following carriage returns and backspaces",
          "hierarchy": "Test HUnit Terminal",
          "module": "Test.HUnit.Terminal",
          "name": "terminalAppearance",
          "normalized": "String-\u003eString",
          "package": "HUnit",
          "partial": "Appearance",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Terminal.html#v:terminalAppearance"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eText-based test controller for running HUnit tests and reporting\n   results as text, usually to a terminal.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Text",
          "name": "Text",
          "package": "HUnit",
          "source": "src/Test-HUnit-Text.html",
          "type": "module"
        },
        "index": {
          "description": "Text-based test controller for running HUnit tests and reporting results as text usually to terminal",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "Text",
          "package": "HUnit",
          "partial": "Text",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAs the general text-based test controller (\u003ccode\u003e\u003ca\u003erunTestText\u003c/a\u003e\u003c/code\u003e) executes a\n   test, it reports each test case start, error, and failure by\n   constructing a string and passing it to the function embodied in a\n   \u003ccode\u003e\u003ca\u003ePutText\u003c/a\u003e\u003c/code\u003e.  A report string is known as a \"line\", although it includes\n   no line terminator; the function in a \u003ccode\u003e\u003ca\u003ePutText\u003c/a\u003e\u003c/code\u003e is responsible for\n   terminating lines appropriately.  Besides the line, the function\n   receives a flag indicating the intended \"persistence\" of the line:\n   \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e indicates that the line should be part of the final overall\n   report; \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e indicates that the line merely indicates progress of\n   the test execution.  Each progress line shows the current values of\n   the cumulative test execution counts; a final, persistent line shows\n   the final count values.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ePutText\u003c/a\u003e\u003c/code\u003e function is also passed, and returns, an arbitrary state\n   value (called \u003ccode\u003est\u003c/code\u003e here).  The initial state value is given in the\n   \u003ccode\u003e\u003ca\u003ePutText\u003c/a\u003e\u003c/code\u003e; the final value is returned by \u003ccode\u003e\u003ca\u003erunTestText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "PutText",
          "package": "HUnit",
          "source": "src/Test-HUnit-Text.html#PutText",
          "type": "data"
        },
        "index": {
          "description": "As the general text-based test controller runTestText executes test it reports each test case start error and failure by constructing string and passing it to the function embodied in PutText report string is known as line although it includes no line terminator the function in PutText is responsible for terminating lines appropriately Besides the line the function receives flag indicating the intended persistence of the line True indicates that the line should be part of the final overall report False indicates that the line merely indicates progress of the test execution Each progress line shows the current values of the cumulative test execution counts final persistent line shows the final count values The PutText function is also passed and returns an arbitrary state value called st here The initial state value is given in the PutText the final value is returned by runTestText",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "PutText",
          "package": "HUnit",
          "partial": "Put Text",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#t:PutText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Text",
          "name": "PutText",
          "package": "HUnit",
          "signature": "PutText (String -\u003e Bool -\u003e st -\u003e IO st) st",
          "source": "src/Test-HUnit-Text.html#PutText",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "PutText",
          "normalized": "PutText(String-\u003eBool-\u003ea-\u003eIO a)a",
          "package": "HUnit",
          "partial": "Put Text",
          "signature": "PutText(String-\u003eBool-\u003est-\u003eIO st)st",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:PutText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTwo reporting schemes are defined here.  \u003ccode\u003eputTextToHandle\u003c/code\u003e writes\n report lines to a given handle.  \u003ccode\u003e\u003ca\u003eputTextToShowS\u003c/a\u003e\u003c/code\u003e accumulates\n persistent lines for return as a whole by \u003ccode\u003e\u003ca\u003erunTestText\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003eputTextToHandle\u003c/code\u003e writes persistent lines to the given handle,\n following each by a newline character.  In addition, if the given flag\n is \u003ccode\u003eTrue\u003c/code\u003e, it writes progress lines to the handle as well.  A progress\n line is written with no line termination, so that it can be\n overwritten by the next report line.  As overwriting involves writing\n carriage return and blank characters, its proper effect is usually\n only obtained on terminal devices.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "putTextToHandle",
          "package": "HUnit",
          "signature": "Handle-\u003e Bool-\u003e PutText Int",
          "type": "function"
        },
        "index": {
          "description": "Two reporting schemes are defined here putTextToHandle writes report lines to given handle putTextToShowS accumulates persistent lines for return as whole by runTestText putTextToHandle writes persistent lines to the given handle following each by newline character In addition if the given flag is True it writes progress lines to the handle as well progress line is written with no line termination so that it can be overwritten by the next report line As overwriting involves writing carriage return and blank characters its proper effect is usually only obtained on terminal devices",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "putTextToHandle",
          "normalized": "Handle-\u003eBool-\u003ePutText Int",
          "package": "HUnit",
          "partial": "Text To Handle",
          "signature": "Handle-\u003eBool-\u003ePutText Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:putTextToHandle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAccumulates persistent lines (dropping progess lines) for return by \n   \u003ccode\u003e\u003ca\u003erunTestText\u003c/a\u003e\u003c/code\u003e.  The accumulated lines are represented by a \n   \u003ccode\u003e\u003ccode\u003e\u003ca\u003eShowS\u003c/a\u003e\u003c/code\u003e (\u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e)\u003c/code\u003e function whose first argument is the\n   string to be appended to the accumulated report lines.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "putTextToShowS",
          "package": "HUnit",
          "signature": "PutText ShowS",
          "source": "src/Test-HUnit-Text.html#putTextToShowS",
          "type": "function"
        },
        "index": {
          "description": "Accumulates persistent lines dropping progess lines for return by runTestText The accumulated lines are represented by ShowS String String function whose first argument is the string to be appended to the accumulated report lines",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "putTextToShowS",
          "package": "HUnit",
          "partial": "Text To Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:putTextToShowS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProvides the \"standard\" text-based test controller. Reporting is made to\n   standard error, and progress reports are included. For possible \n   programmatic use, the final counts are returned.\n\u003c/p\u003e\u003cp\u003eThe \"TT\" in the name suggests \"Text-based reporting to the Terminal\".\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "runTestTT",
          "package": "HUnit",
          "signature": "Test -\u003e IO Counts",
          "source": "src/Test-HUnit-Text.html#runTestTT",
          "type": "function"
        },
        "index": {
          "description": "Provides the standard text-based test controller Reporting is made to standard error and progress reports are included For possible programmatic use the final counts are returned The TT in the name suggests Text-based reporting to the Terminal",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "runTestTT",
          "normalized": "Test-\u003eIO Counts",
          "package": "HUnit",
          "partial": "Test TT",
          "signature": "Test-\u003eIO Counts",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:runTestTT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecutes a test, processing each report line according to the given \n   reporting scheme.  The reporting scheme's state is threaded through calls \n   to the reporting scheme's function and finally returned, along with final \n   count values.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "runTestText",
          "package": "HUnit",
          "signature": "PutText st -\u003e Test -\u003e IO (Counts, st)",
          "source": "src/Test-HUnit-Text.html#runTestText",
          "type": "function"
        },
        "index": {
          "description": "Executes test processing each report line according to the given reporting scheme The reporting scheme state is threaded through calls to the reporting scheme function and finally returned along with final count values",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "runTestText",
          "normalized": "PutText a-\u003eTest-\u003eIO(Counts,a)",
          "package": "HUnit",
          "partial": "Test Text",
          "signature": "PutText st-\u003eTest-\u003eIO(Counts,st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:runTestText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts test execution counts to a string.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "showCounts",
          "package": "HUnit",
          "signature": "Counts -\u003e String",
          "source": "src/Test-HUnit-Text.html#showCounts",
          "type": "function"
        },
        "index": {
          "description": "Converts test execution counts to string",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "showCounts",
          "normalized": "Counts-\u003eString",
          "package": "HUnit",
          "partial": "Counts",
          "signature": "Counts-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:showCounts"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts a test case path to a string, separating adjacent elements by \n   the colon (':'). An element of the path is quoted (as with \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e) when\n   there is potential ambiguity.\n\u003c/p\u003e",
          "module": "Test.HUnit.Text",
          "name": "showPath",
          "package": "HUnit",
          "signature": "Path -\u003e String",
          "source": "src/Test-HUnit-Text.html#showPath",
          "type": "function"
        },
        "index": {
          "description": "Converts test case path to string separating adjacent elements by the colon An element of the path is quoted as with show when there is potential ambiguity",
          "hierarchy": "Test HUnit Text",
          "module": "Test.HUnit.Text",
          "name": "showPath",
          "normalized": "Path-\u003eString",
          "package": "HUnit",
          "partial": "Path",
          "signature": "Path-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit-Text.html#v:showPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHUnit is a unit testing framework for Haskell, inspired by the JUnit tool \n for Java. This guide describes how to use HUnit, assuming you are familiar \n with Haskell, though not necessarily with JUnit.\n\u003c/p\u003e\u003cp\u003eIn the Haskell module where your tests will reside, import module \n \u003ccode\u003eTest.HUnit\u003c/code\u003e:\n\u003c/p\u003e\u003cpre\u003e\n    import Test.HUnit\n\u003c/pre\u003e\u003cp\u003eDefine test cases as appropriate:\n\u003c/p\u003e\u003cpre\u003e\n    test1 = TestCase (assertEqual \u003ca\u003efor (foo 3),\u003c/a\u003e (1,2) (foo 3))\n    test2 = TestCase (do (x,y) \u003c- partA 3\n                         assertEqual \u003ca\u003efor the first result of partA,\u003c/a\u003e 5 x\n                         b \u003c- partB y\n                         assertBool (\u003ca\u003e(partB \u003c/a\u003e ++ show y ++ \u003ca\u003e) failed\u003c/a\u003e) b)\n\u003c/pre\u003e\u003cp\u003eName the test cases and group them together:\n\u003c/p\u003e\u003cpre\u003e\n    tests = TestList [TestLabel \u003ca\u003etest1\u003c/a\u003e test1, TestLabel \u003ca\u003etest2\u003c/a\u003e test2]\n\u003c/pre\u003e\u003cp\u003eRun the tests as a group. At a Haskell interpreter prompt, apply the function\n \u003ccode\u003erunTestTT\u003c/code\u003e to the collected tests. (The \u003cem\u003eTT\u003c/em\u003e suggests \u003cem\u003eT\u003c/em\u003eext orientation \n with output to the \u003cem\u003eT\u003c/em\u003eerminal.)\n\u003c/p\u003e\u003cpre\u003e\n    \u003e runTestTT tests\n    Cases: 2  Tried: 2  Errors: 0  Failures: 0\n    \u003e\n\u003c/pre\u003e\u003cp\u003eIf the tests are proving their worth, you might see:\n\u003c/p\u003e\u003cpre\u003e\n    \u003e runTestTT tests\n    \u003ca name=\"\"/\u003e# Failure in: 0:test1\n    for (foo 3),\n    expected: (1,2)\n     but got: (1,3)\n    Cases: 2  Tried: 2  Errors: 0  Failures: 1\n    \u003e\n\u003c/pre\u003e\u003cp\u003eYou can specify tests even more succinctly using operators and overloaded \n functions that HUnit provides:\n\u003c/p\u003e\u003cpre\u003e\n    tests = test [ \u003ca\u003etest1\u003c/a\u003e ~: \u003ca\u003e(foo 3)\u003c/a\u003e ~: (1,2) ~=? (foo 3),\n                   \u003ca\u003etest2\u003c/a\u003e ~: do (x, y) \u003c- partA 3\n                                 assertEqual \u003ca\u003efor the first result of partA,\u003c/a\u003e 5 x\n                                 partB y @? \u003ca\u003e(partB \u003c/a\u003e ++ show y ++ \u003ca\u003e) failed\u003c/a\u003e ]\n\u003c/pre\u003e\u003cp\u003eAssuming the same test failures as before, you would see:\n\u003c/p\u003e\u003cpre\u003e\n    \u003e runTestTT tests\n    \u003ca name=\"\"/\u003e# Failure in: 0:test1:(foo 3)\n    expected: (1,2)\n     but got: (1,3)\n    Cases: 2  Tried: 2  Errors: 0  Failures: 1\n    \u003e\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "Test.HUnit",
          "name": "HUnit",
          "package": "HUnit",
          "source": "src/Test-HUnit.html",
          "type": "module"
        },
        "index": {
          "description": "HUnit is unit testing framework for Haskell inspired by the JUnit tool for Java This guide describes how to use HUnit assuming you are familiar with Haskell though not necessarily with JUnit In the Haskell module where your tests will reside import module Test.HUnit import Test.HUnit Define test cases as appropriate test1 TestCase assertEqual for foo foo test2 TestCase do partA assertEqual for the first result of partA partB assertBool partB show failed Name the test cases and group them together tests TestList TestLabel test1 test1 TestLabel test2 test2 Run the tests as group At Haskell interpreter prompt apply the function runTestTT to the collected tests The TT suggests ext orientation with output to the erminal runTestTT tests Cases Tried Errors Failures If the tests are proving their worth you might see runTestTT tests Failure in test1 for foo expected but got Cases Tried Errors Failures You can specify tests even more succinctly using operators and overloaded functions that HUnit provides tests test test1 foo foo test2 do partA assertEqual for the first result of partA partB partB show failed Assuming the same test failures as before you would see runTestTT tests Failure in test1 foo expected but got Cases Tried Errors Failures",
          "hierarchy": "Test HUnit",
          "module": "Test.HUnit",
          "name": "HUnit",
          "package": "HUnit",
          "partial": "HUnit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/HUnit/docs/Test-HUnit.html#"
      }
    }
  ]
]