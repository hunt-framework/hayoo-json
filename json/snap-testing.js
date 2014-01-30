[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis library allows you to write tests against handlers, checking\nresponse codes and bodies, modifications of state, etc. The tests are written\nin a hierarchical fashion, with labels to help organize them, and\nvarious ways of reporting on the results of testing are possible.\n\u003c/p\u003e\u003cp\u003eAll of the tests are run in the \u003ca\u003etest\u003c/a\u003e environment, so be sure to\ncreate the corresponding .cfg files and databases, etc.\n\u003c/p\u003e\u003cp\u003eHere is a complete example (where routes are your applications routes, and\napp is your site initializer):\n\u003c/p\u003e\u003cpre\u003e runSnapTests [consoleReport, desktopReport] (route routes) app $ do\n   name \"/auth/new_user\" $ do\n     name \"success\" $\n       succeeds (get \"/auth/new_user\")\n     name \"creates a new account\" $\n       cleanup clearAccounts $\n       changes (+1) countAccounts (post \"/auth/new_user\" $ params\n                                   [ (\"new_user.name\", \"Jane\")\n                                   , (\"new_user.email\", \"jdoe@c.com\")\n                                   , (\"new_user.password\", \"foobar\")])\n\u003c/pre\u003e\u003cp\u003eThere are many different predicates available (and a basic way of\nintegrating QuickCheck), and it is relatively easy to add\nfunctionality on top of what is built in. For example, to add a way of\ncreating users and logging in as them for a block of tests you could\ndo the following (this is using the auth snaplet - if you are doing\nsomethinge else, obviously the `with auth ...` line would be\ndifferent):\n\u003c/p\u003e\u003cpre\u003e withUser :: SnapTesting App a -\u003e SnapTesting App a\n withUser = modifySite $ \\site -\u003e do\n   au \u003c- fmap fromJust getRandomUser\n   with auth $ forceLogin au\n   site\n\u003c/pre\u003e\u003cp\u003eWhere \u003ccode\u003egetRandomUser\u003c/code\u003e is a function written in your applications\nhandler (using whatever state needed).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "module",
        "fct-source": "src/Snap-Test-BDD.html",
        "fct-type": "module",
        "title": "BDD"
      },
      "index": {
        "description": "This library allows you to write tests against handlers checking response codes and bodies modifications of state etc The tests are written in hierarchical fashion with labels to help organize them and various ways of reporting on the results of testing are possible All of the tests are run in the test environment so be sure to create the corresponding cfg files and databases etc Here is complete example where routes are your applications routes and app is your site initializer runSnapTests consoleReport desktopReport route routes app do name auth new user do name success succeeds get auth new user name creates new account cleanup clearAccounts changes countAccounts post auth new user params new user.name Jane new user.email jdoe@c.com new user.password foobar There are many different predicates available and basic way of integrating QuickCheck and it is relatively easy to add functionality on top of what is built in For example to add way of creating users and logging in as them for block of tests you could do the following this is using the auth snaplet if you are doing somethinge else obviously the with auth line would be different withUser SnapTesting App SnapTesting App withUser modifySite site do au fmap fromJust getRandomUser with auth forceLogin au site Where getRandomUser is function written in your applications handler using whatever state needed",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "BDD",
        "normalized": "",
        "package": "snap-testing",
        "partial": "BDD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:SnapTesting",
      "description": {
        "fct-descr": "\u003cp\u003eThe main type for this library, where \u003ccode\u003eb\u003c/code\u003e is your application state,\n often called \u003ccode\u003eApp\u003c/code\u003e. This is a State and Writer monad on top of IO, where the State carries\n your application (or, more specifically, a top-level handler), and the Writer allows tests\n to be reported as passing or failing.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "type",
        "fct-source": "src/Snap-Test-BDD.html#SnapTesting",
        "fct-type": "type",
        "title": "SnapTesting"
      },
      "index": {
        "description": "The main type for this library where is your application state often called App This is State and Writer monad on top of IO where the State carries your application or more specifically top-level handler and the Writer allows tests to be reported as passing or failing",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "SnapTesting",
        "normalized": "",
        "package": "snap-testing",
        "partial": "Snap Testing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:TestRequest",
      "description": {
        "fct-descr": "\u003cp\u003eTestRequests are created with \u003ccode\u003e\u003ca\u003eget\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003epost\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "type",
        "fct-source": "src/Snap-Test-BDD.html#TestRequest",
        "fct-type": "type",
        "title": "TestRequest"
      },
      "index": {
        "description": "TestRequests are created with get and post",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "TestRequest",
        "normalized": "",
        "package": "snap-testing",
        "partial": "Test Request",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#t:TestResult",
      "description": {
        "fct-descr": "\u003cp\u003eTestResults are what are used to write report generators (two are included). The result\n is a tree structure.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "data",
        "fct-source": "src/Snap-Test-BDD.html#TestResult",
        "fct-type": "data",
        "title": "TestResult"
      },
      "index": {
        "description": "TestResults are what are used to write report generators two are included The result is tree structure",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "TestResult",
        "normalized": "",
        "package": "snap-testing",
        "partial": "Test Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultFail",
      "description": {
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "ResultFail Text",
        "fct-source": "src/Snap-Test-BDD.html#TestResult",
        "fct-type": "function",
        "title": "ResultFail"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "ResultFail",
        "normalized": "",
        "package": "snap-testing",
        "partial": "Result Fail",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultName",
      "description": {
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "ResultName Text [TestResult]",
        "fct-source": "src/Snap-Test-BDD.html#TestResult",
        "fct-type": "function",
        "title": "ResultName"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "ResultName",
        "normalized": "ResultName Text[TestResult]",
        "package": "snap-testing",
        "partial": "Result Name",
        "signature": "ResultName Text[TestResult]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:ResultPass",
      "description": {
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "ResultPass Text",
        "fct-source": "src/Snap-Test-BDD.html#TestResult",
        "fct-type": "function",
        "title": "ResultPass"
      },
      "index": {
        "description": "",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "ResultPass",
        "normalized": "",
        "package": "snap-testing",
        "partial": "Result Pass",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:changes",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the monadic value given changes by the function specified after the request is run.\n\u003c/p\u003e\u003cp\u003eFor example, if you wanted to make sure that account creation was creating new accounts:\n\u003c/p\u003e\u003cpre\u003e changes (+1) countAccounts (post \"/auth/new_user\" $ params\n                             [ (\"new_user.name\", \"Jane\")\n                             , (\"new_user.email\", \"jdoe@c.com\")\n                             , (\"new_user.password\", \"foobar\")])\n\u003c/pre\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "(a -\u003e a)-\u003e Handler b b a-\u003e TestRequest-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "changes"
      },
      "index": {
        "description": "Checks that the monadic value given changes by the function specified after the request is run For example if you wanted to make sure that account creation was creating new accounts changes countAccounts post auth new user params new user.name Jane new user.email jdoe@c.com new user.password foobar",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "changes",
        "normalized": "(a-\u003ea)-\u003eHandler b b a-\u003eTestRequest-\u003eSnapTesting b()",
        "package": "snap-testing",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eHandler b b a-\u003eTestRequest-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:changes-39-",
      "description": {
        "fct-descr": "\u003cp\u003eA more general variant of \u003ccode\u003e\u003ca\u003echanges\u003c/a\u003e\u003c/code\u003e that allows an arbitrary block instead of a request.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "(a -\u003e a)-\u003e Handler b b a-\u003e SnapTesting b c-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "changes'"
      },
      "index": {
        "description": "more general variant of changes that allows an arbitrary block instead of request",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "changes'",
        "normalized": "(a-\u003ea)-\u003eHandler b b a-\u003eSnapTesting b c-\u003eSnapTesting b()",
        "package": "snap-testing",
        "partial": "",
        "signature": "(a-\u003ea)-\u003eHandler b b a-\u003eSnapTesting b c-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:cleanup",
      "description": {
        "fct-descr": "\u003cp\u003eRuns an action after a block of tests, usually used to remove database state.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "Handler b b ()-\u003e SnapTesting b ()-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "cleanup"
      },
      "index": {
        "description": "Runs an action after block of tests usually used to remove database state",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "cleanup",
        "normalized": "Handler a a()-\u003eSnapTesting a()-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "Handler b b()-\u003eSnapTesting b()-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:consoleReport",
      "description": {
        "fct-descr": "\u003cp\u003ePrints test results to the console. For example:\n\u003c/p\u003e\u003cpre\u003e /auth/new_user\n  success\n    PASSED\n  creates a new account\n    PASSED\n\u003c/pre\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "[TestResult] -\u003e IO ()",
        "fct-source": "src/Snap-Test-BDD.html#consoleReport",
        "fct-type": "function",
        "title": "consoleReport"
      },
      "index": {
        "description": "Prints test results to the console For example auth new user success PASSED creates new account PASSED",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "consoleReport",
        "normalized": "[TestResult]-\u003eIO()",
        "package": "snap-testing",
        "partial": "Report",
        "signature": "[TestResult]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:contains",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the response body of a given request contains some text.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "contains"
      },
      "index": {
        "description": "Checks that the response body of given request contains some text",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "contains",
        "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eText-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:equals",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the handler evaluates to the given value.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "a-\u003e Handler b b a-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "equals"
      },
      "index": {
        "description": "Checks that the handler evaluates to the given value",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "equals",
        "normalized": "a-\u003eHandler b b a-\u003eSnapTesting b()",
        "package": "snap-testing",
        "partial": "",
        "signature": "a-\u003eHandler b b a-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate arbitrary actions\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "Handler b b a-\u003e SnapTesting b a",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "Evaluate arbitrary actions",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "eval",
        "normalized": "Handler a a b-\u003eSnapTesting a b",
        "package": "snap-testing",
        "partial": "",
        "signature": "Handler b b a-\u003eSnapTesting b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:get",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new GET request.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "ByteString-\u003e TestRequest",
        "fct-type": "function",
        "title": "get"
      },
      "index": {
        "description": "Creates new GET request",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "get",
        "normalized": "ByteString-\u003eTestRequest",
        "package": "snap-testing",
        "partial": "",
        "signature": "ByteString-\u003eTestRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:linuxDesktopReport",
      "description": {
        "fct-descr": "\u003cp\u003eSends the test results to desktop notifications on linux. Prints how many tests passed and failed.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "[TestResult] -\u003e IO ()",
        "fct-source": "src/Snap-Test-BDD.html#linuxDesktopReport",
        "fct-type": "function",
        "title": "linuxDesktopReport"
      },
      "index": {
        "description": "Sends the test results to desktop notifications on linux Prints how many tests passed and failed",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "linuxDesktopReport",
        "normalized": "[TestResult]-\u003eIO()",
        "package": "snap-testing",
        "partial": "Desktop Report",
        "signature": "[TestResult]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:modifySite",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a site to site function (like, generating a random user and logging in), run the given block of test with the modified state.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "(Handler b b () -\u003e Handler b b ())-\u003e SnapTesting b a-\u003e SnapTesting b a",
        "fct-type": "function",
        "title": "modifySite"
      },
      "index": {
        "description": "Given site to site function like generating random user and logging in run the given block of test with the modified state",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "modifySite",
        "normalized": "(Handler a a()-\u003eHandler a a())-\u003eSnapTesting a b-\u003eSnapTesting a b",
        "package": "snap-testing",
        "partial": "Site",
        "signature": "(Handler b b()-\u003eHandler b b())-\u003eSnapTesting b a-\u003eSnapTesting b a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:name",
      "description": {
        "fct-descr": "\u003cp\u003eLabels a block of tests with a descriptive name, to be used in report generation.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "Text-\u003e SnapTesting b ()-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "name"
      },
      "index": {
        "description": "Labels block of tests with descriptive name to be used in report generation",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "name",
        "normalized": "Text-\u003eSnapTesting a()-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "Text-\u003eSnapTesting b()-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:notcontains",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the response body of a given request does not contain some text.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "notcontains"
      },
      "index": {
        "description": "Checks that the response body of given request does not contain some text",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "notcontains",
        "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eText-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:notfound",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given request results in a not found (404) code.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest -\u003e SnapTesting b ()",
        "fct-source": "src/Snap-Test-BDD.html#notfound",
        "fct-type": "function",
        "title": "notfound"
      },
      "index": {
        "description": "Checks that the given request results in not found code",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "notfound",
        "normalized": "TestRequest-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:params",
      "description": {
        "fct-descr": "\u003cp\u003eA helper to construct parameters.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "[(ByteString, ByteString)]-\u003e Map ByteString [ByteString]",
        "fct-type": "function",
        "title": "params"
      },
      "index": {
        "description": "helper to construct parameters",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "params",
        "normalized": "[(ByteString,ByteString)]-\u003eMap ByteString[ByteString]",
        "package": "snap-testing",
        "partial": "",
        "signature": "[(ByteString,ByteString)]-\u003eMap ByteString[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:post",
      "description": {
        "fct-descr": "\u003cp\u003eCreates a new POST request, with a set of parameters.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "ByteString-\u003e Map ByteString [ByteString]-\u003e TestRequest",
        "fct-type": "function",
        "title": "post"
      },
      "index": {
        "description": "Creates new POST request with set of parameters",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "post",
        "normalized": "ByteString-\u003eMap ByteString[ByteString]-\u003eTestRequest",
        "package": "snap-testing",
        "partial": "",
        "signature": "ByteString-\u003eMap ByteString[ByteString]-\u003eTestRequest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:quickCheck",
      "description": {
        "fct-descr": "\u003cp\u003eAllows you to run a quickcheck test. All 100 test passing counts as a pass, any failure a failure.\n Currently the reporting is really bad (you don't see what the failing example is).\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "prop -\u003e SnapTesting b ()",
        "fct-source": "src/Snap-Test-BDD.html#quickCheck",
        "fct-type": "function",
        "title": "quickCheck"
      },
      "index": {
        "description": "Allows you to run quickcheck test All test passing counts as pass any failure failure Currently the reporting is really bad you don see what the failing example is",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "quickCheck",
        "normalized": "a-\u003eSnapTesting b()",
        "package": "snap-testing",
        "partial": "Check",
        "signature": "prop-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:redirects",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given request results in a redirect (3**) code.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest -\u003e SnapTesting b ()",
        "fct-source": "src/Snap-Test-BDD.html#redirects",
        "fct-type": "function",
        "title": "redirects"
      },
      "index": {
        "description": "Checks that the given request results in redirect code",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "redirects",
        "normalized": "TestRequest-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:redirectsto",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given request results in a redirect to a specific url.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest-\u003e Text-\u003e SnapTesting b ()",
        "fct-type": "function",
        "title": "redirectsto"
      },
      "index": {
        "description": "Checks that the given request results in redirect to specific url",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "redirectsto",
        "normalized": "TestRequest-\u003eText-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eText-\u003eSnapTesting b()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:runSnapTests",
      "description": {
        "fct-descr": "\u003cp\u003eRun a set of tests, putting the results through the specified report generators\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "[[TestResult] -\u003e IO ()]-\u003e Handler b b ()-\u003e SnapletInit b b-\u003e SnapTesting b ()-\u003e IO ()",
        "fct-type": "function",
        "title": "runSnapTests"
      },
      "index": {
        "description": "Run set of tests putting the results through the specified report generators",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "runSnapTests",
        "normalized": "[[TestResult]-\u003eIO()]-\u003eHandler a a()-\u003eSnapletInit a a-\u003eSnapTesting a()-\u003eIO()",
        "package": "snap-testing",
        "partial": "Snap Tests",
        "signature": "[[TestResult]-\u003eIO()]-\u003eHandler b b()-\u003eSnapletInit b b-\u003eSnapTesting b()-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/snap-testing/docs/Snap-Test-BDD.html#v:succeeds",
      "description": {
        "fct-descr": "\u003cp\u003eChecks that the given request results in a success (200) code.\n\u003c/p\u003e",
        "fct-module": "Snap.Test.BDD",
        "fct-package": "snap-testing",
        "fct-signature": "TestRequest -\u003e SnapTesting b ()",
        "fct-source": "src/Snap-Test-BDD.html#succeeds",
        "fct-type": "function",
        "title": "succeeds"
      },
      "index": {
        "description": "Checks that the given request results in success code",
        "hierarchy": "Snap Test BDD",
        "module": "Snap.Test.BDD",
        "name": "succeeds",
        "normalized": "TestRequest-\u003eSnapTesting a()",
        "package": "snap-testing",
        "partial": "",
        "signature": "TestRequest-\u003eSnapTesting b()"
      }
    }
  }
]