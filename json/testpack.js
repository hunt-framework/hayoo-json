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
        "word": "testpack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for HUnit unit testing.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.HUnit.Tools",
          "name": "Tools",
          "package": "testpack",
          "source": "src/Test-HUnit-Tools.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for HUnit unit testing Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "Tools",
          "package": "testpack",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsserts that a specific exception is raised by a given action. \n\u003c/p\u003e",
          "module": "Test.HUnit.Tools",
          "name": "assertRaises",
          "package": "testpack",
          "signature": "String -\u003e e -\u003e IO a -\u003e IO ()",
          "source": "src/Test-HUnit-Tools.html#assertRaises",
          "type": "function"
        },
        "index": {
          "description": "Asserts that specific exception is raised by given action",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "assertRaises",
          "normalized": "String-\u003ea-\u003eIO b-\u003eIO()",
          "package": "testpack",
          "partial": "Raises",
          "signature": "String-\u003ee-\u003eIO a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:assertRaises"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.HUnit.Tools",
          "name": "mapassertEqual",
          "package": "testpack",
          "signature": "String -\u003e (a -\u003e b) -\u003e [(a, b)] -\u003e [Test]",
          "source": "src/Test-HUnit-Tools.html#mapassertEqual",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "mapassertEqual",
          "normalized": "String-\u003e(a-\u003eb)-\u003e[(a,b)]-\u003e[Test]",
          "package": "testpack",
          "partial": "Equal",
          "signature": "String-\u003e(a-\u003eb)-\u003e[(a,b)]-\u003e[Test]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:mapassertEqual"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert QuickCheck tests to HUnit, with a configurable maximum test count.\nOften used like this:\n\u003c/p\u003e\u003cpre\u003eq :: QC.Testable a =\u003e String -\u003e a -\u003e HU.Test\nq = qc2hu 250\n\nallt = [q \"Int -\u003e Integer\" prop_int_to_integer,\n        q \"Integer -\u003e Int (safe bounds)\" prop_integer_to_int_pass]\n\u003c/pre\u003e",
          "module": "Test.HUnit.Tools",
          "name": "qc2hu",
          "package": "testpack",
          "signature": "Int -\u003e String -\u003e a -\u003e Test",
          "source": "src/Test-HUnit-Tools.html#qc2hu",
          "type": "function"
        },
        "index": {
          "description": "Convert QuickCheck tests to HUnit with configurable maximum test count Often used like this QC.Testable String HU.Test qc2hu allt Int Integer prop int to integer Integer Int safe bounds prop integer to int pass",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "qc2hu",
          "normalized": "Int-\u003eString-\u003ea-\u003eTest",
          "package": "testpack",
          "signature": "Int-\u003eString-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qc2hu"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eqccheck turns the quickcheck test into an hunit test\n\u003c/p\u003e",
          "module": "Test.HUnit.Tools",
          "name": "qccheck",
          "package": "testpack",
          "signature": "Args-\u003e String-\u003e a-\u003e Test",
          "type": "function"
        },
        "index": {
          "description": "qccheck turns the quickcheck test into an hunit test",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "qccheck",
          "normalized": "Args-\u003eString-\u003ea-\u003eTest",
          "package": "testpack",
          "signature": "Args-\u003eString-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qccheck"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eqctest is equivalent to 'qccheck stdArgs'\n\u003c/p\u003e",
          "module": "Test.HUnit.Tools",
          "name": "qctest",
          "package": "testpack",
          "signature": "String -\u003e a -\u003e Test",
          "source": "src/Test-HUnit-Tools.html#qctest",
          "type": "function"
        },
        "index": {
          "description": "qctest is equivalent to qccheck stdArgs",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "qctest",
          "normalized": "String-\u003ea-\u003eTest",
          "package": "testpack",
          "signature": "String-\u003ea-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:qctest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003erunTestText\u003c/code\u003e, but with more verbose output. \n\u003c/p\u003e",
          "module": "Test.HUnit.Tools",
          "name": "runVerbTestText",
          "package": "testpack",
          "signature": "PutText st -\u003e Test -\u003e IO (Counts, st)",
          "source": "src/Test-HUnit-Tools.html#runVerbTestText",
          "type": "function"
        },
        "index": {
          "description": "Like runTestText but with more verbose output",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "runVerbTestText",
          "normalized": "PutText a-\u003eTest-\u003eIO(Counts,a)",
          "package": "testpack",
          "partial": "Verb Test Text",
          "signature": "PutText st-\u003eTest-\u003eIO(Counts,st)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:runVerbTestText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun verbose tests.  Example:\n\u003c/p\u003e\u003cpre\u003etest1 = TestCase (\"x\" @=? \"x\")\n\nalltests = [TestLabel \"test1\" test1,\n            tl \"TestNum\" TestNum.allt,\n            tl \"TestMap\" TestMap.allt,\n            tl \"TestTime\" TestTime.allt]\n\nmain = do runVerboseTests (TestList alltests)\n          return ()\n\u003c/pre\u003e",
          "module": "Test.HUnit.Tools",
          "name": "runVerboseTests",
          "package": "testpack",
          "signature": "Test -\u003e IO (Counts, Int)",
          "source": "src/Test-HUnit-Tools.html#runVerboseTests",
          "type": "function"
        },
        "index": {
          "description": "Run verbose tests Example test1 TestCase alltests TestLabel test1 test1 tl TestNum TestNum.allt tl TestMap TestMap.allt tl TestTime TestTime.allt main do runVerboseTests TestList alltests return",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "runVerboseTests",
          "normalized": "Test-\u003eIO(Counts,Int)",
          "package": "testpack",
          "partial": "Verbose Tests",
          "signature": "Test-\u003eIO(Counts,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:runVerboseTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLabel the tests list.  See example under \u003ccode\u003e\u003ca\u003erunVerboseTests\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Test.HUnit.Tools",
          "name": "tl",
          "package": "testpack",
          "signature": "String -\u003e [Test] -\u003e Test",
          "source": "src/Test-HUnit-Tools.html#tl",
          "type": "function"
        },
        "index": {
          "description": "Label the tests list See example under runVerboseTests",
          "hierarchy": "Test HUnit Tools",
          "module": "Test.HUnit.Tools",
          "name": "tl",
          "normalized": "String-\u003e[Test]-\u003eTest",
          "package": "testpack",
          "signature": "String-\u003e[Test]-\u003eTest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-HUnit-Tools.html#v:tl"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvides Arbitrary instances for:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Map.Map k v\n\u003c/li\u003e\u003cli\u003e Word8 (also a Random instance)\n\u003c/li\u003e\u003c/ul\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Instances",
          "name": "Instances",
          "package": "testpack",
          "source": "src/Test-QuickCheck-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "Provides Arbitrary instances for Map.Map Word8 also Random instance Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Test QuickCheck Instances",
          "module": "Test.QuickCheck.Instances",
          "name": "Instances",
          "package": "testpack",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eUtilities for HUnit unit testing.\n\u003c/p\u003e\u003cp\u003eWritten by John Goerzen, jgoerzen@complete.org\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Test.QuickCheck.Tools",
          "name": "Tools",
          "package": "testpack",
          "source": "src/Test-QuickCheck-Tools.html",
          "type": "module"
        },
        "index": {
          "description": "Utilities for HUnit unit testing Written by John Goerzen jgoerzen@complete.org",
          "hierarchy": "Test QuickCheck Tools",
          "module": "Test.QuickCheck.Tools",
          "name": "Tools",
          "package": "testpack",
          "partial": "Tools",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompare two values.  If same, the test passes.  If different, the result indicates\nwhat was expected and what was received as part of the error. \n\u003c/p\u003e",
          "module": "Test.QuickCheck.Tools",
          "name": "(@=?)",
          "package": "testpack",
          "signature": "a -\u003e a -\u003e Result",
          "source": "src/Test-QuickCheck-Tools.html#%40%3D%3F",
          "type": "function"
        },
        "index": {
          "description": "Compare two values If same the test passes If different the result indicates what was expected and what was received as part of the error",
          "hierarchy": "Test QuickCheck Tools",
          "module": "Test.QuickCheck.Tools",
          "name": "(@=?) @=?",
          "normalized": "a-\u003ea-\u003eResult",
          "package": "testpack",
          "signature": "a-\u003ea-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#v:-64--61--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003e@=?\u003c/a\u003e\u003c/code\u003e, but with args in a different order. \n\u003c/p\u003e",
          "module": "Test.QuickCheck.Tools",
          "name": "(@?=)",
          "package": "testpack",
          "signature": "a -\u003e a -\u003e Result",
          "source": "src/Test-QuickCheck-Tools.html#%40%3F%3D",
          "type": "function"
        },
        "index": {
          "description": "Like but with args in different order",
          "hierarchy": "Test QuickCheck Tools",
          "module": "Test.QuickCheck.Tools",
          "name": "(@?=) @?=",
          "normalized": "a-\u003ea-\u003eResult",
          "package": "testpack",
          "signature": "a-\u003ea-\u003eResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/testpack/docs/Test-QuickCheck-Tools.html#v:-64--63--61-"
      }
    }
  ]
]