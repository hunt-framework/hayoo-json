[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for HUnit unit testing.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "module",
        "fct-source": "src/Test-HUnit-Tools.html",
        "fct-type": "module",
        "title": "Tools"
      },
      "index": {
        "description": "Utilities for HUnit unit testing Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "Tools",
        "normalized": "",
        "package": "testpack",
        "partial": "Tools",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:assertRaises",
      "description": {
        "fct-descr": "\u003cp\u003eAsserts that a specific exception is raised by a given action. \n\u003c/p\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "String -\u003e e -\u003e IO a -\u003e IO ()",
        "fct-source": "src/Test-HUnit-Tools.html#assertRaises",
        "fct-type": "function",
        "title": "assertRaises"
      },
      "index": {
        "description": "Asserts that specific exception is raised by given action",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "assertRaises",
        "normalized": "String-\u003ea-\u003eIO b-\u003eIO()",
        "package": "testpack",
        "partial": "Raises",
        "signature": "String-\u003ee-\u003eIO a-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:mapassertEqual",
      "description": {
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "String -\u003e (a -\u003e b) -\u003e [(a, b)] -\u003e [Test]",
        "fct-source": "src/Test-HUnit-Tools.html#mapassertEqual",
        "fct-type": "function",
        "title": "mapassertEqual"
      },
      "index": {
        "description": "",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "mapassertEqual",
        "normalized": "String-\u003e(a-\u003eb)-\u003e[(a,b)]-\u003e[Test]",
        "package": "testpack",
        "partial": "Equal",
        "signature": "String-\u003e(a-\u003eb)-\u003e[(a,b)]-\u003e[Test]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qc2hu",
      "description": {
        "fct-descr": "\u003cp\u003eConvert QuickCheck tests to HUnit, with a configurable maximum test count.\nOften used like this:\n\u003c/p\u003e\u003cpre\u003eq :: QC.Testable a =\u003e String -\u003e a -\u003e HU.Test\nq = qc2hu 250\n\nallt = [q \"Int -\u003e Integer\" prop_int_to_integer,\n        q \"Integer -\u003e Int (safe bounds)\" prop_integer_to_int_pass]\n\u003c/pre\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "Int -\u003e String -\u003e a -\u003e Test",
        "fct-source": "src/Test-HUnit-Tools.html#qc2hu",
        "fct-type": "function",
        "title": "qc2hu"
      },
      "index": {
        "description": "Convert QuickCheck tests to HUnit with configurable maximum test count Often used like this QC.Testable String HU.Test qc2hu allt Int Integer prop int to integer Integer Int safe bounds prop integer to int pass",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "qc2hu",
        "normalized": "Int-\u003eString-\u003ea-\u003eTest",
        "package": "testpack",
        "partial": "",
        "signature": "Int-\u003eString-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qccheck",
      "description": {
        "fct-descr": "\u003cp\u003eqccheck turns the quickcheck test into an hunit test\n\u003c/p\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "Args-\u003e String-\u003e a-\u003e Test",
        "fct-type": "function",
        "title": "qccheck"
      },
      "index": {
        "description": "qccheck turns the quickcheck test into an hunit test",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "qccheck",
        "normalized": "Args-\u003eString-\u003ea-\u003eTest",
        "package": "testpack",
        "partial": "",
        "signature": "Args-\u003eString-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qctest",
      "description": {
        "fct-descr": "\u003cp\u003eqctest is equivalent to 'qccheck stdArgs'\n\u003c/p\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "String -\u003e a -\u003e Test",
        "fct-source": "src/Test-HUnit-Tools.html#qctest",
        "fct-type": "function",
        "title": "qctest"
      },
      "index": {
        "description": "qctest is equivalent to qccheck stdArgs",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "qctest",
        "normalized": "String-\u003ea-\u003eTest",
        "package": "testpack",
        "partial": "",
        "signature": "String-\u003ea-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:runVerbTestText",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003erunTestText\u003c/code\u003e, but with more verbose output. \n\u003c/p\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "PutText st -\u003e Test -\u003e IO (Counts, st)",
        "fct-source": "src/Test-HUnit-Tools.html#runVerbTestText",
        "fct-type": "function",
        "title": "runVerbTestText"
      },
      "index": {
        "description": "Like runTestText but with more verbose output",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "runVerbTestText",
        "normalized": "PutText a-\u003eTest-\u003eIO(Counts,a)",
        "package": "testpack",
        "partial": "Verb Test Text",
        "signature": "PutText st-\u003eTest-\u003eIO(Counts,st)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:runVerboseTests",
      "description": {
        "fct-descr": "\u003cp\u003eRun verbose tests.  Example:\n\u003c/p\u003e\u003cpre\u003etest1 = TestCase (\"x\" @=? \"x\")\n\nalltests = [TestLabel \"test1\" test1,\n            tl \"TestNum\" TestNum.allt,\n            tl \"TestMap\" TestMap.allt,\n            tl \"TestTime\" TestTime.allt]\n\nmain = do runVerboseTests (TestList alltests)\n          return ()\n\u003c/pre\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "Test -\u003e IO (Counts, Int)",
        "fct-source": "src/Test-HUnit-Tools.html#runVerboseTests",
        "fct-type": "function",
        "title": "runVerboseTests"
      },
      "index": {
        "description": "Run verbose tests Example test1 TestCase alltests TestLabel test1 test1 tl TestNum TestNum.allt tl TestMap TestMap.allt tl TestTime TestTime.allt main do runVerboseTests TestList alltests return",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "runVerboseTests",
        "normalized": "Test-\u003eIO(Counts,Int)",
        "package": "testpack",
        "partial": "Verbose Tests",
        "signature": "Test-\u003eIO(Counts,Int)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:tl",
      "description": {
        "fct-descr": "\u003cp\u003eLabel the tests list.  See example under \u003ccode\u003e\u003ca\u003erunVerboseTests\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Test.HUnit.Tools",
        "fct-package": "testpack",
        "fct-signature": "String -\u003e [Test] -\u003e Test",
        "fct-source": "src/Test-HUnit-Tools.html#tl",
        "fct-type": "function",
        "title": "tl"
      },
      "index": {
        "description": "Label the tests list See example under runVerboseTests",
        "hierarchy": "Test HUnit Tools",
        "module": "Test.HUnit.Tools",
        "name": "tl",
        "normalized": "String-\u003e[Test]-\u003eTest",
        "package": "testpack",
        "partial": "",
        "signature": "String-\u003e[Test]-\u003eTest"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Instances.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Arbitrary instances for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Map.Map k v\n\u003c/li\u003e\u003cli\u003e Word8 (also a Random instance)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Instances",
        "fct-package": "testpack",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Instances.html",
        "fct-type": "module",
        "title": "Instances"
      },
      "index": {
        "description": "Provides Arbitrary instances for Map.Map Word8 also Random instance Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Test QuickCheck Instances",
        "module": "Test.QuickCheck.Instances",
        "name": "Instances",
        "normalized": "",
        "package": "testpack",
        "partial": "Instances",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for HUnit unit testing.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Test.QuickCheck.Tools",
        "fct-package": "testpack",
        "fct-signature": "module",
        "fct-source": "src/Test-QuickCheck-Tools.html",
        "fct-type": "module",
        "title": "Tools"
      },
      "index": {
        "description": "Utilities for HUnit unit testing Written by John Goerzen jgoerzen@complete.org",
        "hierarchy": "Test QuickCheck Tools",
        "module": "Test.QuickCheck.Tools",
        "name": "Tools",
        "normalized": "",
        "package": "testpack",
        "partial": "Tools",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#v:-64--61--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCompare two values.  If same, the test passes.  If different, the result indicates\nwhat was expected and what was received as part of the error. \n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Tools",
        "fct-package": "testpack",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Tools.html#%40%3D%3F",
        "fct-type": "function",
        "title": "(@=?)"
      },
      "index": {
        "description": "Compare two values If same the test passes If different the result indicates what was expected and what was received as part of the error",
        "hierarchy": "Test QuickCheck Tools",
        "module": "Test.QuickCheck.Tools",
        "name": "(@=?) @=?",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "testpack",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#v:-64--63--61-",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e@=?\u003c/a\u003e\u003c/code\u003e, but with args in a different order. \n\u003c/p\u003e",
        "fct-module": "Test.QuickCheck.Tools",
        "fct-package": "testpack",
        "fct-signature": "a -\u003e a -\u003e Result",
        "fct-source": "src/Test-QuickCheck-Tools.html#%40%3F%3D",
        "fct-type": "function",
        "title": "(@?=)"
      },
      "index": {
        "description": "Like but with args in different order",
        "hierarchy": "Test QuickCheck Tools",
        "module": "Test.QuickCheck.Tools",
        "name": "(@?=) @?=",
        "normalized": "a-\u003ea-\u003eResult",
        "package": "testpack",
        "partial": "",
        "signature": "a-\u003ea-\u003eResult"
      }
    }
  }
]