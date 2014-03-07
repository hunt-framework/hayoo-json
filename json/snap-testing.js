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
        "word": "snap-testing"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library allows you to write tests against handlers, checking\nresponse codes and bodies, modifications of state, etc. The tests are written\nin a hierarchical fashion, with labels to help organize them, and\nvarious ways of reporting on the results of testing are possible.\n\u003c/p\u003e\u003cp\u003eAll of the tests are run in the \u003ca\u003etest\u003c/a\u003e environment, so be sure to\ncreate the corresponding .cfg files and databases, etc.\n\u003c/p\u003e\u003cp\u003eHere is a complete example (where routes are your applications routes, and\napp is your site initializer):\n\u003c/p\u003e\u003cpre\u003e runSnapTests [consoleReport, desktopReport] (route routes) app $ do\n   name \"/auth/new_user\" $ do\n     name \"success\" $\n       succeeds (get \"/auth/new_user\")\n     name \"creates a new account\" $\n       cleanup clearAccounts $\n       changes (+1) countAccounts (post \"/auth/new_user\" $ params\n                                   [ (\"new_user.name\", \"Jane\")\n                                   , (\"new_user.email\", \"jdoe@c.com\")\n                                   , (\"new_user.password\", \"foobar\")])\n\u003c/pre\u003e\u003cp\u003eThere are many different predicates available (and a basic way of\nintegrating QuickCheck), and it is relatively easy to add\nfunctionality on top of what is built in. For example, to add a way of\ncreating users and logging in as them for a block of tests you could\ndo the following (this is using the auth snaplet - if you are doing\nsomethinge else, obviously the `with auth ...` line would be\ndifferent):\n\u003c/p\u003e\u003cpre\u003e withUser :: SnapTesting App a -\u003e SnapTesting App a\n withUser = modifySite $ \\site -\u003e do\n   au \u003c- fmap fromJust getRandomUser\n   with auth $ forceLogin au\n   site\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003egetRandomUser\u003c/code\u003e is a function written in your applications\nhandler (using whatever state needed).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Snap.Test.BDD",
          "name": "BDD",
          "package": "snap-testing",
          "source": "src/Snap-Test-BDD.html",
          "type": "module"
        },
        "index": {
          "description": "This library allows you to write tests against handlers checking response codes and bodies modifications of state etc The tests are written in hierarchical fashion with labels to help organize them and various ways of reporting on the results of testing are possible All of the tests are run in the test environment so be sure to create the corresponding cfg files and databases etc Here is complete example where routes are your applications routes and app is your site initializer runSnapTests consoleReport desktopReport route routes app do name auth new user do name success succeeds get auth new user name creates new account cleanup clearAccounts changes countAccounts post auth new user params new user.name Jane new user.email jdoe@c.com new user.password foobar There are many different predicates available and basic way of integrating QuickCheck and it is relatively easy to add functionality on top of what is built in For example to add way of creating users and logging in as them for block of tests you could do the following this is using the auth snaplet if you are doing somethinge else obviously the with auth line would be different withUser SnapTesting App SnapTesting App withUser modifySite site do au fmap fromJust getRandomUser with auth forceLogin au site Where getRandomUser is function written in your applications handler using whatever state needed",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "BDD",
          "package": "snap-testing",
          "partial": "BDD",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe main type for this library, where \u003ccode\u003eb\u003c/code\u003e is your application state,\n often called \u003ccode\u003eApp\u003c/code\u003e. This is a State and Writer monad on top of IO, where the State carries\n your application (or, more specifically, a top-level handler), and the Writer allows tests\n to be reported as passing or failing.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "SnapTesting",
          "package": "snap-testing",
          "source": "src/Snap-Test-BDD.html#SnapTesting",
          "type": "type"
        },
        "index": {
          "description": "The main type for this library where is your application state often called App This is State and Writer monad on top of IO where the State carries your application or more specifically top-level handler and the Writer allows tests to be reported as passing or failing",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "SnapTesting",
          "package": "snap-testing",
          "partial": "Snap Testing",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:SnapTesting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTestRequests are created with \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "TestRequest",
          "package": "snap-testing",
          "source": "src/Snap-Test-BDD.html#TestRequest",
          "type": "type"
        },
        "index": {
          "description": "TestRequests are created with get and post",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "TestRequest",
          "package": "snap-testing",
          "partial": "Test Request",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:TestRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTestResults are what are used to write report generators (two are included). The result\n is a tree structure.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "TestResult",
          "package": "snap-testing",
          "source": "src/Snap-Test-BDD.html#TestResult",
          "type": "data"
        },
        "index": {
          "description": "TestResults are what are used to write report generators two are included The result is tree structure",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "TestResult",
          "package": "snap-testing",
          "partial": "Test Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:TestResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test.BDD",
          "name": "ResultFail",
          "package": "snap-testing",
          "signature": "ResultFail Text",
          "source": "src/Snap-Test-BDD.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "ResultFail",
          "package": "snap-testing",
          "partial": "Result Fail",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test.BDD",
          "name": "ResultName",
          "package": "snap-testing",
          "signature": "ResultName Text [TestResult]",
          "source": "src/Snap-Test-BDD.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "ResultName",
          "normalized": "ResultName Text[TestResult]",
          "package": "snap-testing",
          "partial": "Result Name",
          "signature": "ResultName Text[TestResult]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Snap.Test.BDD",
          "name": "ResultPass",
          "package": "snap-testing",
          "signature": "ResultPass Text",
          "source": "src/Snap-Test-BDD.html#TestResult",
          "type": "function"
        },
        "index": {
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "ResultPass",
          "package": "snap-testing",
          "partial": "Result Pass",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the monadic value given changes by the function specified after the request is run.\n\u003c/p\u003e\u003cp\u003eFor example, if you wanted to make sure that account creation was creating new accounts:\n\u003c/p\u003e\u003cpre\u003e changes (+1) countAccounts (post \"/auth/new_user\" $ params\n                             [ (\"new_user.name\", \"Jane\")\n                             , (\"new_user.email\", \"jdoe@c.com\")\n                             , (\"new_user.password\", \"foobar\")])\n\u003c/pre\u003e",
          "module": "Snap.Test.BDD",
          "name": "changes",
          "package": "snap-testing",
          "signature": "(a -\u003e a)-\u003e Handler b b a-\u003e TestRequest-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Checks that the monadic value given changes by the function specified after the request is run For example if you wanted to make sure that account creation was creating new accounts changes countAccounts post auth new user params new user.name Jane new user.email jdoe@c.com new user.password foobar",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "changes",
          "normalized": "(a-\u003ea)-\u003eHandler b b a-\u003eTestRequest-\u003eSnapTesting b()",
          "package": "snap-testing",
          "signature": "(a-\u003ea)-\u003eHandler b b a-\u003eTestRequest-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:changes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA more general variant of \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e that allows an arbitrary block instead of a request.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "changes'",
          "package": "snap-testing",
          "signature": "(a -\u003e a)-\u003e Handler b b a-\u003e SnapTesting b c-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "more general variant of changes that allows an arbitrary block instead of request",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "changes'",
          "normalized": "(a-\u003ea)-\u003eHandler b b a-\u003eSnapTesting b c-\u003eSnapTesting b()",
          "package": "snap-testing",
          "signature": "(a-\u003ea)-\u003eHandler b b a-\u003eSnapTesting b c-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:changes-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRuns an action after a block of tests, usually used to remove database state.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "cleanup",
          "package": "snap-testing",
          "signature": "Handler b b ()-\u003e SnapTesting b ()-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Runs an action after block of tests usually used to remove database state",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "cleanup",
          "normalized": "Handler a a()-\u003eSnapTesting a()-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "Handler b b()-\u003eSnapTesting b()-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:cleanup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrints test results to the console. For example:\n\u003c/p\u003e\u003cpre\u003e /auth/new_user\n  success\n    PASSED\n  creates a new account\n    PASSED\n\u003c/pre\u003e",
          "module": "Snap.Test.BDD",
          "name": "consoleReport",
          "package": "snap-testing",
          "signature": "[TestResult] -\u003e IO ()",
          "source": "src/Snap-Test-BDD.html#consoleReport",
          "type": "function"
        },
        "index": {
          "description": "Prints test results to the console For example auth new user success PASSED creates new account PASSED",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "consoleReport",
          "normalized": "[TestResult]-\u003eIO()",
          "package": "snap-testing",
          "partial": "Report",
          "signature": "[TestResult]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:consoleReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the response body of a given request contains some text.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "contains",
          "package": "snap-testing",
          "signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Checks that the response body of given request contains some text",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "contains",
          "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eText-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:contains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the handler evaluates to the given value.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "equals",
          "package": "snap-testing",
          "signature": "a-\u003e Handler b b a-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Checks that the handler evaluates to the given value",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "equals",
          "normalized": "a-\u003eHandler b b a-\u003eSnapTesting b()",
          "package": "snap-testing",
          "signature": "a-\u003eHandler b b a-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:equals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate arbitrary actions\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "eval",
          "package": "snap-testing",
          "signature": "Handler b b a-\u003e SnapTesting b a",
          "type": "function"
        },
        "index": {
          "description": "Evaluate arbitrary actions",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "eval",
          "normalized": "Handler a a b-\u003eSnapTesting a b",
          "package": "snap-testing",
          "signature": "Handler b b a-\u003eSnapTesting b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new GET request.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "get",
          "package": "snap-testing",
          "signature": "ByteString-\u003e TestRequest",
          "type": "function"
        },
        "index": {
          "description": "Creates new GET request",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "get",
          "normalized": "ByteString-\u003eTestRequest",
          "package": "snap-testing",
          "signature": "ByteString-\u003eTestRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSends the test results to desktop notifications on linux. Prints how many tests passed and failed.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "linuxDesktopReport",
          "package": "snap-testing",
          "signature": "[TestResult] -\u003e IO ()",
          "source": "src/Snap-Test-BDD.html#linuxDesktopReport",
          "type": "function"
        },
        "index": {
          "description": "Sends the test results to desktop notifications on linux Prints how many tests passed and failed",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "linuxDesktopReport",
          "normalized": "[TestResult]-\u003eIO()",
          "package": "snap-testing",
          "partial": "Desktop Report",
          "signature": "[TestResult]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:linuxDesktopReport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven a site to site function (like, generating a random user and logging in), run the given block of test with the modified state.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "modifySite",
          "package": "snap-testing",
          "signature": "(Handler b b () -\u003e Handler b b ())-\u003e SnapTesting b a-\u003e SnapTesting b a",
          "type": "function"
        },
        "index": {
          "description": "Given site to site function like generating random user and logging in run the given block of test with the modified state",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "modifySite",
          "normalized": "(Handler a a()-\u003eHandler a a())-\u003eSnapTesting a b-\u003eSnapTesting a b",
          "package": "snap-testing",
          "partial": "Site",
          "signature": "(Handler b b()-\u003eHandler b b())-\u003eSnapTesting b a-\u003eSnapTesting b a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:modifySite"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabels a block of tests with a descriptive name, to be used in report generation.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "name",
          "package": "snap-testing",
          "signature": "Text-\u003e SnapTesting b ()-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Labels block of tests with descriptive name to be used in report generation",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "name",
          "normalized": "Text-\u003eSnapTesting a()-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "Text-\u003eSnapTesting b()-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the response body of a given request does not contain some text.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "notcontains",
          "package": "snap-testing",
          "signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Checks that the response body of given request does not contain some text",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "notcontains",
          "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eText-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:notcontains"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the given request results in a not found (404) code.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "notfound",
          "package": "snap-testing",
          "signature": "TestRequest -\u003e SnapTesting b ()",
          "source": "src/Snap-Test-BDD.html#notfound",
          "type": "function"
        },
        "index": {
          "description": "Checks that the given request results in not found code",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "notfound",
          "normalized": "TestRequest-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:notfound"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA helper to construct parameters.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "params",
          "package": "snap-testing",
          "signature": "[(ByteString, ByteString)]-\u003e Map ByteString [ByteString]",
          "type": "function"
        },
        "index": {
          "description": "helper to construct parameters",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "params",
          "normalized": "[(ByteString,ByteString)]-\u003eMap ByteString[ByteString]",
          "package": "snap-testing",
          "signature": "[(ByteString,ByteString)]-\u003eMap ByteString[ByteString]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:params"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new POST request, with a set of parameters.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "post",
          "package": "snap-testing",
          "signature": "ByteString-\u003e Map ByteString [ByteString]-\u003e TestRequest",
          "type": "function"
        },
        "index": {
          "description": "Creates new POST request with set of parameters",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "post",
          "normalized": "ByteString-\u003eMap ByteString[ByteString]-\u003eTestRequest",
          "package": "snap-testing",
          "signature": "ByteString-\u003eMap ByteString[ByteString]-\u003eTestRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:post"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAllows you to run a quickcheck test. All 100 test passing counts as a pass, any failure a failure.\n Currently the reporting is really bad (you don't see what the failing example is).\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "quickCheck",
          "package": "snap-testing",
          "signature": "prop -\u003e SnapTesting b ()",
          "source": "src/Snap-Test-BDD.html#quickCheck",
          "type": "function"
        },
        "index": {
          "description": "Allows you to run quickcheck test All test passing counts as pass any failure failure Currently the reporting is really bad you don see what the failing example is",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "quickCheck",
          "normalized": "a-\u003eSnapTesting b()",
          "package": "snap-testing",
          "partial": "Check",
          "signature": "prop-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:quickCheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the given request results in a redirect (3**) code.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "redirects",
          "package": "snap-testing",
          "signature": "TestRequest -\u003e SnapTesting b ()",
          "source": "src/Snap-Test-BDD.html#redirects",
          "type": "function"
        },
        "index": {
          "description": "Checks that the given request results in redirect code",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "redirects",
          "normalized": "TestRequest-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:redirects"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the given request results in a redirect to a specific url.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "redirectsto",
          "package": "snap-testing",
          "signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
          "type": "function"
        },
        "index": {
          "description": "Checks that the given request results in redirect to specific url",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "redirectsto",
          "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eText-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:redirectsto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a set of tests, putting the results through the specified report generators\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "runSnapTests",
          "package": "snap-testing",
          "signature": "[[TestResult] -\u003e IO ()]-\u003e Handler b b ()-\u003e SnapletInit b b-\u003e SnapTesting b ()-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Run set of tests putting the results through the specified report generators",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "runSnapTests",
          "normalized": "[[TestResult]-\u003eIO()]-\u003eHandler a a()-\u003eSnapletInit a a-\u003eSnapTesting a()-\u003eIO()",
          "package": "snap-testing",
          "partial": "Snap Tests",
          "signature": "[[TestResult]-\u003eIO()]-\u003eHandler b b()-\u003eSnapletInit b b-\u003eSnapTesting b()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:runSnapTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks that the given request results in a success (200) code.\n\u003c/p\u003e",
          "module": "Snap.Test.BDD",
          "name": "succeeds",
          "package": "snap-testing",
          "signature": "TestRequest -\u003e SnapTesting b ()",
          "source": "src/Snap-Test-BDD.html#succeeds",
          "type": "function"
        },
        "index": {
          "description": "Checks that the given request results in success code",
          "hierarchy": "Snap Test BDD",
          "module": "Snap.Test.BDD",
          "name": "succeeds",
          "normalized": "TestRequest-\u003eSnapTesting a()",
          "package": "snap-testing",
          "signature": "TestRequest-\u003eSnapTesting b()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:succeeds"
      }
    }
  ]
]