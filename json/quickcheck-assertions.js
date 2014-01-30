[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule provides convenient functions to do some assertions in QuickCheck properties with pretty printed reasons.\nFor example you can do something like that:\n\u003c/p\u003e\u003cpre\u003e module Main where\n\n import Test.Hspec\n import Test.Hspec.QuickCheck\n import Test.QuickCheck.Assertions\n import Test.QuickCheck.Property\n\n someProp :: Int -\u003e Int -\u003e Result\n someProp a b = (a ?\u003e b)\n\n someOtherProp :: Double -\u003e Double -\u003e Result\n someOtherProp a b = (a ?== b)\n\n main = hspec $ describe \"failing test\" $ do\n   prop \"must fail\" $ someProp\n   prop \"must fail again\" $ someOtherProp\n\u003c/pre\u003e\u003cp\u003eAnd receive pretty printed fail message when testing:\n\u003c/p\u003e\u003cpre\u003e failing test\n   - must fail FAILED [1]\n   - must fail again FAILED [2]\n\n 1) failing test must fail FAILED\n *** Failed! (after 1 test):\n \u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e the value\n 0\n \u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e should be greater than value\n 0\n 0\n 0\n\n\n 2) failing test must fail again FAILED\n *** Failed! (after 2 tests and 4 shrinks):\n \u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e expected\n 0.0\n \u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e\u003e but got\n 1.0\n 0.0\n 1.0\n\u003c/pre\u003e\u003cp\u003eOk, not very well printed, but better than nothing.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Assertions.html",
        "fct-type": "module",
        "title": "Assertions"
      },
      "index": {
        "description": "Module provides convenient functions to do some assertions in QuickCheck properties with pretty printed reasons For example you can do something like that module Main where import Test.Hspec import Test.Hspec.QuickCheck import Test.QuickCheck.Assertions import Test.QuickCheck.Property someProp Int Int Result someProp someOtherProp Double Double Result someOtherProp main hspec describe failing test do prop must fail someProp prop must fail again someOtherProp And receive pretty printed fail message when testing failing test must fail FAILED must fail again FAILED failing test must fail FAILED Failed after test the value should be greater than value failing test must fail again FAILED Failed after tests and shrinks expected but got Ok not very well printed but better than nothing",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "Assertions",
        "normalized": "",
        "package": "quickcheck-assertions",
        "partial": "Assertions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-126--61--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight value is almost equal to left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#~%3D%3D%3F",
        "fct-type": "function",
        "title": "(~==?)"
      },
      "index": {
        "description": "Right value is almost equal to left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(~==?) ~==?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-47--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument should not equal to left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%2F%3D%3F",
        "fct-type": "function",
        "title": "(/=?)"
      },
      "index": {
        "description": "Right argument should not equal to left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(/=?) /=?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-60--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument is greater or equal to left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3C%3D%3F",
        "fct-type": "function",
        "title": "(\u003c=?)"
      },
      "index": {
        "description": "Right argument is greater or equal to left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(\u003c=?) \u003c=?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-60--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument is greater than left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3C%3F",
        "fct-type": "function",
        "title": "(\u003c?)"
      },
      "index": {
        "description": "Right argument is greater than left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(\u003c?) \u003c?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-61--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument should be equal to left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3D%3D%3F",
        "fct-type": "function",
        "title": "(==?)"
      },
      "index": {
        "description": "Right argument should be equal to left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(==?) ==?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-62--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument is less or equal to left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3E%3D%3F",
        "fct-type": "function",
        "title": "(\u003e=?)"
      },
      "index": {
        "description": "Right argument is less or equal to left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(\u003e=?) \u003e=?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-62--63-",
      "description": {
        "fct-descr": "\u003cp\u003eRight argument is less then left\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3E%3F",
        "fct-type": "function",
        "title": "(\u003e?)"
      },
      "index": {
        "description": "Right argument is less then left",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(\u003e?) \u003e?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--126--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft value is almost equal to right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F~%3D%3D",
        "fct-type": "function",
        "title": "(?~==)"
      },
      "index": {
        "description": "Left value is almost equal to right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?~==) ?~==",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--47--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument should not equal to right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%2F%3D",
        "fct-type": "function",
        "title": "(?/=)"
      },
      "index": {
        "description": "Left argument should not equal to right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?/=) ?/=",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--60-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument is less then right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%3C",
        "fct-type": "function",
        "title": "(?\u003c)"
      },
      "index": {
        "description": "Left argument is less then right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?\u003c) ?\u003c",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--60--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument is less or equal to right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%3C%3D",
        "fct-type": "function",
        "title": "(?\u003c=)"
      },
      "index": {
        "description": "Left argument is less or equal to right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?\u003c=) ?\u003c=",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--61--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument should be equal to right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%3D%3D",
        "fct-type": "function",
        "title": "(?==)"
      },
      "index": {
        "description": "Left argument should be equal to right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?==) ?==",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--62-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument is greater than right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%3E",
        "fct-type": "function",
        "title": "(?\u003e)"
      },
      "index": {
        "description": "Left argument is greater than right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?\u003e) ?\u003e",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:-63--62--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLeft argument is greater or equal to right\n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Assertions.html#%3F%3E%3D",
        "fct-type": "function",
        "title": "(?\u003e=)"
      },
      "index": {
        "description": "Left argument is greater or equal to right",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "(?\u003e=) ?\u003e=",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/quickcheck-assertions/docs/Test-QuickCheck-Assertions.html#v:binAsrt",
      "description": {
        "fct-module": "Test.QuickCheck.Assertions",
        "fct-package": "quickcheck-assertions",
        "fct-signature": "String-\u003e Bool-\u003e Result",
        "fct-type": "function",
        "title": "binAsrt"
      },
      "index": {
        "description": "",
        "hierarchy": "Test QuickCheck Assertions",
        "module": "Test.QuickCheck.Assertions",
        "name": "binAsrt",
        "normalized": "String-\u003eBool-\u003eResult",
        "package": "quickcheck-assertions",
        "partial": "Asrt",
        "signature": "String-\u003eBool-\u003eResult"
      }
    }
  }
]