[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-framework-th/docs/Test-Framework-TH.html#",
      "description": {
        "fct-module": "Test.Framework.TH",
        "fct-package": "test-framework-th",
        "fct-signature": "module",
        "fct-source": "src/Test-Framework-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TH",
        "module": "Test.Framework.TH",
        "name": "TH",
        "normalized": "",
        "package": "test-framework-th",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-framework-th/docs/Test-Framework-TH.html#v:defaultMainGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the usual code and extract the usual functions needed in order to run HUnit\u003cem\u003eQuickcheck\u003c/em\u003eQuickcheck2.\n   All functions beginning with case_, prop_ or test_ will be extracted.\n\u003c/p\u003e\u003cpre\u003e {-# OPTIONS_GHC -fglasgow-exts -XTemplateHaskell #-}\n module MyModuleTest where\n import Test.HUnit\n import MainTestGenerator\n \n main = $(defaultMainGenerator)\n\n case_Foo = do 4 @=? 4\n\n case_Bar = do \"hej\" @=? \"hej\"\n \n prop_Reverse xs = reverse (reverse xs) == xs\n   where types = xs :: [Int]\n\n test_Group =\n     [ testCase \"1\" case_Foo\n     , testProperty \"2\" prop_Reverse\n     ]\n\u003c/pre\u003e\u003cp\u003ewill automagically extract prop_Reverse, case_Foo, case_Bar and test_Group and run them as well as present them as belonging to the testGroup \u003ccode\u003eMyModuleTest\u003c/code\u003e such as\n\u003c/p\u003e\u003cpre\u003e me: runghc MyModuleTest.hs \n MyModuleTest:\n   Reverse: [OK, passed 100 tests]\n   Foo: [OK]\n   Bar: [OK]\n   Group:\n     1: [OK]\n     2: [OK, passed 100 tests]\n \n          Properties  Test Cases   Total       \n  Passed  2           3            5          \n  Failed  0           0            0           \n  Total   2           3            5\n\u003c/pre\u003e",
        "fct-module": "Test.Framework.TH",
        "fct-package": "test-framework-th",
        "fct-signature": "ExpQ",
        "fct-source": "src/Test-Framework-TH.html#defaultMainGenerator",
        "fct-type": "function",
        "title": "defaultMainGenerator"
      },
      "index": {
        "description": "Generate the usual code and extract the usual functions needed in order to run HUnit Quickcheck Quickcheck2 All functions beginning with case prop or test will be extracted OPTIONS GHC fglasgow-exts XTemplateHaskell module MyModuleTest where import Test.HUnit import MainTestGenerator main defaultMainGenerator case Foo do case Bar do hej hej prop Reverse xs reverse reverse xs xs where types xs Int test Group testCase case Foo testProperty prop Reverse will automagically extract prop Reverse case Foo case Bar and test Group and run them as well as present them as belonging to the testGroup MyModuleTest such as me runghc MyModuleTest.hs MyModuleTest Reverse OK passed tests Foo OK Bar OK Group OK OK passed tests Properties Test Cases Total Passed Failed Total",
        "hierarchy": "Test Framework TH",
        "module": "Test.Framework.TH",
        "name": "defaultMainGenerator",
        "normalized": "",
        "package": "test-framework-th",
        "partial": "Main Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-framework-th/docs/Test-Framework-TH.html#v:defaultMainGenerator2",
      "description": {
        "fct-module": "Test.Framework.TH",
        "fct-package": "test-framework-th",
        "fct-signature": "ExpQ",
        "fct-source": "src/Test-Framework-TH.html#defaultMainGenerator2",
        "fct-type": "function",
        "title": "defaultMainGenerator2"
      },
      "index": {
        "description": "",
        "hierarchy": "Test Framework TH",
        "module": "Test.Framework.TH",
        "name": "defaultMainGenerator2",
        "normalized": "",
        "package": "test-framework-th",
        "partial": "Main Generator",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/test-framework-th/docs/Test-Framework-TH.html#v:testGroupGenerator",
      "description": {
        "fct-descr": "\u003cp\u003eGenerate the usual code and extract the usual functions needed for a testGroup in HUnit\u003cem\u003eQuickcheck\u003c/em\u003eQuickcheck2.\n   All functions beginning with case_, prop_ or test_ will be extracted.\n\u003c/p\u003e\u003cpre\u003e -- file SomeModule.hs\n fooTestGroup = $(testGroupGenerator)\n main = defaultMain [fooTestGroup]\n case_1 = do 1 @=? 1\n case_2 = do 2 @=? 2\n prop_p xs = reverse (reverse xs) == xs\n  where types = xs :: [Int]\n\u003c/pre\u003e\u003cp\u003eis the same as\n\u003c/p\u003e\u003cpre\u003e -- file SoomeModule.hs\n fooTestGroup = testGroup \"SomeModule\" [testProperty \"p\" prop_1, testCase \"1\" case_1, testCase \"2\" case_2]\n main = defaultMain [fooTestGroup]\n case_1 = do 1 @=? 1\n case_2 = do 2 @=? 2\n prop_1 xs = reverse (reverse xs) == xs\n  where types = xs :: [Int]\n\u003c/pre\u003e",
        "fct-module": "Test.Framework.TH",
        "fct-package": "test-framework-th",
        "fct-signature": "ExpQ",
        "fct-source": "src/Test-Framework-TH.html#testGroupGenerator",
        "fct-type": "function",
        "title": "testGroupGenerator"
      },
      "index": {
        "description": "Generate the usual code and extract the usual functions needed for testGroup in HUnit Quickcheck Quickcheck2 All functions beginning with case prop or test will be extracted file SomeModule.hs fooTestGroup testGroupGenerator main defaultMain fooTestGroup case do case do prop xs reverse reverse xs xs where types xs Int is the same as file SoomeModule.hs fooTestGroup testGroup SomeModule testProperty prop testCase case testCase case main defaultMain fooTestGroup case do case do prop xs reverse reverse xs xs where types xs Int",
        "hierarchy": "Test Framework TH",
        "module": "Test.Framework.TH",
        "name": "testGroupGenerator",
        "normalized": "",
        "package": "test-framework-th",
        "partial": "Group Generator",
        "signature": ""
      }
    }
  }
]