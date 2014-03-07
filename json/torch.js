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
        "word": "torch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Build",
          "name": "Builder",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#Builder",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "Builder",
          "package": "torch",
          "partial": "Builder",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#t:Builder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Build",
          "name": "addTest",
          "package": "torch",
          "signature": "t -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#addTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "addTest",
          "normalized": "a-\u003eBuilder()",
          "package": "torch",
          "partial": "Test",
          "signature": "t-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:addTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Build",
          "name": "getTests",
          "package": "torch",
          "signature": "Builder a -\u003e IO Tests",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#getTests",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "getTests",
          "normalized": "Builder a-\u003eIO Tests",
          "package": "torch",
          "partial": "Tests",
          "signature": "Builder a-\u003eIO Tests",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:getTests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "is",
          "package": "torch",
          "signature": "a -\u003e a -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#is",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:is\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:is\"]"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "is",
          "normalized": "a-\u003ea-\u003eString-\u003eBuilder()",
          "package": "torch",
          "signature": "a-\u003ea-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "isBottom",
          "package": "torch",
          "signature": "a -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#isBottom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isBottom\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:isBottom\"]"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "isBottom",
          "normalized": "a-\u003eString-\u003eBuilder()",
          "package": "torch",
          "partial": "Bottom",
          "signature": "a-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eis\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eisn't\u003c/a\u003e\u003c/tt\u003e are test for equality. First argument is treated\n  as gotten value, and second is expected value.\n\u003c/p\u003e\u003cpre\u003e is    1 1 \"test that checks 1 == 1\"\n isn't 1 2 \"test that checks 1 /= 2\"\n is (fact 10) 3628800 \"check if factorial function works...\"\n\u003c/pre\u003e",
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "isn't",
          "package": "torch",
          "signature": "a -\u003e a -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#isn%27t",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isn't\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:isn't\"]"
        },
        "index": {
          "description": "is and isn are test for equality First argument is treated as gotten value and second is expected value is test that checks isn test that checks is fact check if factorial function works",
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "isn't",
          "normalized": "a-\u003ea-\u003eString-\u003eBuilder()",
          "package": "torch",
          "signature": "a-\u003ea-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isn't"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eisBottom\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003eisn'tBottom\u003c/a\u003e\u003c/tt\u003e evaluates given value, and check if it\n  is Bottom (undefined, error, or some exeptions).\n\u003c/p\u003e\u003cpre\u003e isBottom undefined \"for example, this test succeeds\"\n\u003c/pre\u003e",
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "isn'tBottom",
          "package": "torch",
          "signature": "a -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#isn%27tBottom",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isn'tBottom\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:isn'tBottom\"]"
        },
        "index": {
          "description": "isBottom and isn tBottom evaluates given value and check if it is Bottom undefined error or some exeptions isBottom undefined for example this test succeeds",
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "isn'tBottom",
          "normalized": "a-\u003eString-\u003eBuilder()",
          "package": "torch",
          "partial": "Bottom",
          "signature": "a-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:isn'tBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003eok\u003c/a\u003e\u003c/tt\u003e and \u003ctt\u003e\u003ca\u003enotOk\u003c/a\u003e\u003c/tt\u003e are test for assertion, take a Bool value, and then\n  check whether the value is equal to True or False.\n\u003c/p\u003e\u003cpre\u003e ok    True  \"'ok' succeeds if given value is True\"\n notOk False \"'notOk' succeeds if given value is False\"\n\u003c/pre\u003e\u003cp\u003eSecond String argument is the test's name, this is used for telling\n  you what test failed if test was failed usually (and every\n  predefined tests in this module, requires test's name).\n\u003c/p\u003e",
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "notOk",
          "package": "torch",
          "signature": "Bool -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#notOk",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:notOk\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:notOk\"]"
        },
        "index": {
          "description": "ok and notOk are test for assertion take Bool value and then check whether the value is equal to True or False ok True ok succeeds if given value is True notOk False notOk succeeds if given value is False Second String argument is the test name this is used for telling you what test failed if test was failed usually and every predefined tests in this module requires test name",
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "notOk",
          "normalized": "Bool-\u003eString-\u003eBuilder()",
          "package": "torch",
          "partial": "Ok",
          "signature": "Bool-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:notOk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Torch.Build\",\"Test.Torch\"]",
          "name": "ok",
          "package": "torch",
          "signature": "Bool -\u003e String -\u003e Builder ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#ok",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:ok\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:ok\"]"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "ok",
          "normalized": "Bool-\u003eString-\u003eBuilder()",
          "package": "torch",
          "signature": "Bool-\u003eString-\u003eBuilder()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Build",
          "name": "runBuilder",
          "package": "torch",
          "signature": "Builder a -\u003e WriterT Tests IO a",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Build.html#runBuilder",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Build",
          "module": "Test.Torch.Build",
          "name": "runBuilder",
          "normalized": "Builder a-\u003eWriterT Tests IO a",
          "package": "torch",
          "partial": "Builder",
          "signature": "Builder a-\u003eWriterT Tests IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Build.html#v:runBuilder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Hook",
          "name": "afterTest",
          "package": "torch",
          "signature": "(Report -\u003e IO ()) -\u003e HookWriter ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#afterTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "afterTest",
          "normalized": "(Report-\u003eIO())-\u003eHookWriter()",
          "package": "torch",
          "partial": "Test",
          "signature": "(Report-\u003eIO())-\u003eHookWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:afterTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Hook",
          "name": "asHook",
          "package": "torch",
          "signature": "HookWriter a -\u003e Hook",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#asHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "asHook",
          "normalized": "HookWriter a-\u003eHook",
          "package": "torch",
          "partial": "Hook",
          "signature": "HookWriter a-\u003eHook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:asHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Hook",
          "name": "beforeTest",
          "package": "torch",
          "signature": "(Tests -\u003e IO ()) -\u003e HookWriter ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#beforeTest",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "beforeTest",
          "normalized": "(Tests-\u003eIO())-\u003eHookWriter()",
          "package": "torch",
          "partial": "Test",
          "signature": "(Tests-\u003eIO())-\u003eHookWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:beforeTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Hook",
          "name": "onFail",
          "package": "torch",
          "signature": "(SomeFailure -\u003e IO ()) -\u003e HookWriter ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#onFail",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "onFail",
          "normalized": "(SomeFailure-\u003eIO())-\u003eHookWriter()",
          "package": "torch",
          "partial": "Fail",
          "signature": "(SomeFailure-\u003eIO())-\u003eHookWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:onFail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Hook",
          "name": "onPass",
          "package": "torch",
          "signature": "IO () -\u003e HookWriter ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#onPass",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "onPass",
          "normalized": "IO()-\u003eHookWriter()",
          "package": "torch",
          "partial": "Pass",
          "signature": "IO()-\u003eHookWriter()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:onPass"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Test.Torch.Hook\",\"Test.Torch.Report\"]",
          "name": "zeroHook",
          "package": "torch",
          "signature": "Hook",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Hook.html#zeroHook",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:zeroHook\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Report.html#v:zeroHook\"]"
        },
        "index": {
          "hierarchy": "Test Torch Hook",
          "module": "Test.Torch.Hook",
          "name": "zeroHook",
          "package": "torch",
          "partial": "Hook",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Hook.html#v:zeroHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Report",
          "name": "Report",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Report",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Report",
          "module": "Test.Torch.Report",
          "name": "Report",
          "package": "torch",
          "partial": "Report",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Report.html#t:Report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Report",
          "name": "makeReportWithHook",
          "package": "torch",
          "signature": "Tests -\u003e Hook -\u003e io Report",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Report.html#makeReportWithHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Report",
          "module": "Test.Torch.Report",
          "name": "makeReportWithHook",
          "normalized": "Tests-\u003eHook-\u003ea Report",
          "package": "torch",
          "partial": "Report With Hook",
          "signature": "Tests-\u003eHook-\u003eio Report",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Report.html#v:makeReportWithHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e takes a builder (do block contains some tests such as is or\n  notOk), and build test from builder, run it, and report to stdout.\n\u003c/p\u003e\u003cp\u003eYou can define your own \u003ctt\u003e\u003ca\u003erun\u003c/a\u003e\u003c/tt\u003e, see \u003ctt\u003e\u003ca\u003emakeReportWithHook\u003c/a\u003e\u003c/tt\u003e.\n\u003c/p\u003e",
          "module": "[\"Test.Torch.Run\",\"Test.Torch\"]",
          "name": "run",
          "package": "torch",
          "signature": "Builder a -\u003e IO ()",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Run.html#run",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/torch/docs/Test-Torch-Run.html#v:run\",\"http://hackage.haskell.org/package/torch/docs/Test-Torch.html#v:run\"]"
        },
        "index": {
          "description": "run takes builder do block contains some tests such as is or notOk and build test from builder run it and report to stdout You can define your own run see makeReportWithHook",
          "hierarchy": "Test Torch Run",
          "module": "Test.Torch.Run",
          "name": "run",
          "normalized": "Builder a-\u003eIO()",
          "package": "torch",
          "signature": "Builder a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Run.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "Bottom",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#Bottom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "Bottom",
          "package": "torch",
          "partial": "Bottom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:Bottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "Is",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#Is",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "Is",
          "package": "torch",
          "partial": "Is",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:Is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "IsBottom",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#IsBottom",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "IsBottom",
          "package": "torch",
          "partial": "Is Bottom",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:IsBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "Named",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#Named",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "Named",
          "package": "torch",
          "partial": "Named",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:Named"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "Ok",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#Ok",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "Ok",
          "package": "torch",
          "partial": "Ok",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:Ok"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "SimpleFailure",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#SimpleFailure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "SimpleFailure",
          "package": "torch",
          "partial": "Simple Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:SimpleFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types.Instances",
          "name": "UnexpectedValue",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types-Instances.html#UnexpectedValue",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types Instances",
          "module": "Test.Torch.Types.Instances",
          "name": "UnexpectedValue",
          "package": "torch",
          "partial": "Unexpected Value",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types-Instances.html#t:UnexpectedValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "FailReason",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#FailReason",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "FailReason",
          "package": "torch",
          "partial": "Fail Reason",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:FailReason"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Failures",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Failures",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Failures",
          "package": "torch",
          "partial": "Failures",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:Failures"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Hook",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Hook",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Hook",
          "package": "torch",
          "partial": "Hook",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:Hook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Report",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Report",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Report",
          "package": "torch",
          "partial": "Report",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:Report"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Result",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Result",
          "package": "torch",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "SomeFailure",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#SomeFailure",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "SomeFailure",
          "package": "torch",
          "partial": "Some Failure",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:SomeFailure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "SomeTest",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#SomeTest",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "SomeTest",
          "package": "torch",
          "partial": "Some Test",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:SomeTest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Tests",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Tests",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Tests",
          "package": "torch",
          "partial": "Tests",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#t:Tests"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Failure",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Failure",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Failure",
          "package": "torch",
          "partial": "Failure",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#v:Failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "Test",
          "package": "torch",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#Test",
          "type": "class"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "Test",
          "package": "torch",
          "partial": "Test",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#v:Test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "describe",
          "package": "torch",
          "signature": "f -\u003e FailReason",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#describe",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "describe",
          "normalized": "a-\u003eFailReason",
          "package": "torch",
          "signature": "f-\u003eFailReason",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#v:describe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test.Torch.Types",
          "name": "run",
          "package": "torch",
          "signature": "t -\u003e io Result",
          "source": "http://hackage.haskell.org/package/torch/docs/src/Test-Torch-Types.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test Torch Types",
          "module": "Test.Torch.Types",
          "name": "run",
          "normalized": "a-\u003eb Result",
          "package": "torch",
          "signature": "t-\u003eio Result",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/torch/docs/Test-Torch-Types.html#v:run"
      }
    }
  ]
]