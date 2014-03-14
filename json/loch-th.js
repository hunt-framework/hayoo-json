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
        "word": "loch-th"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTested      : GHC 7.0.3\n\u003c/p\u003e\u003cp\u003eThis module provides a Template Haskell based mechanism to tag failures\n with the location of the failure call. The location message includes the\n file name, line and column numbers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "LocationTH",
          "package": "loch-th",
          "source": "src/Debug-Trace-LocationTH.html",
          "type": "module"
        },
        "index": {
          "description": "Tested GHC This module provides Template Haskell based mechanism to tag failures with the location of the failure call The location message includes the file name line and column numbers",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "LocationTH",
          "package": "loch-th",
          "partial": "Location TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the location of current splice as a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e$__LOCATION__ :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$__LOCATION__\n\u003c/code\u003e\u003c/strong\u003e\"\u003cinteractive\u003e:1:1-13\"\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "__LOCATION__",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#__LOCATION__",
          "type": "function"
        },
        "index": {
          "description": "Get the location of current splice as String LOCATION String LOCATION interactive",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "__LOCATION__",
          "package": "loch-th",
          "partial": "LOCATION",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:__LOCATION__"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the first argument evaluates to \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, then the result is the second\n argument. Otherwise an \u003ccode\u003e\u003ca\u003eAssertionFailed\u003c/a\u003e\u003c/code\u003e exception is raised, containing a\n \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e with the source file and line number of the call to \u003ccode\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/code\u003e. \n\u003c/p\u003e\u003cpre\u003e$(assert [| \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e |]) :: a -\u003e a\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$(assert [| 5 + 5 == 9 |]) \"foo\"\n\u003c/code\u003e\u003c/strong\u003e\"*** Exception: \u003cinteractive\u003e:1:3-25: Assertion `(5 GHC.Num.+ 5) GHC.Classes.== 9' failed\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "assert",
          "package": "loch-th",
          "signature": "Q Exp -\u003e Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#assert",
          "type": "function"
        },
        "index": {
          "description": "If the first argument evaluates to True then the result is the second argument Otherwise an AssertionFailed exception is raised containing String with the source file and line number of the call to assert assert False assert foo Exception interactive Assertion GHC.Num GHC.Classes failed",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "assert",
          "normalized": "Q Exp-\u003eQ Exp",
          "package": "loch-th",
          "signature": "Q Exp-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e wraps a pure, partial function in a location-emitting\n handler, should an exception be thrown. So instead of producing an\n anonymous call to \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, a location will be tagged to the error\n message.\n\u003c/p\u003e\u003cpre\u003e$check :: c -\u003e c\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$check $ head []\n\u003c/code\u003e\u003c/strong\u003e*** Exception: \u003cinteractive\u003e:1:1-6: Prelude.head: empty list\n\u003c/pre\u003e\u003cp\u003eBe careful with laziness as the argument is only evaluated to weak head\n normal form:\n\u003c/p\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$check $ Just $ head \"\"\n\u003c/code\u003e\u003c/strong\u003eJust *** Exception: Prelude.head: empty list\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003eJust $ $check $ head \"\"\n\u003c/code\u003e\u003c/strong\u003eJust *** Exception: \u003cinteractive\u003e:9:8-13: Prelude.head: empty list\n\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$check $ join deepseq $ Just $ head \"\"\n\u003c/code\u003e\u003c/strong\u003e*** Exception: \u003cinteractive\u003e:1:1-6: Prelude.head: empty list\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "check",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#check",
          "type": "function"
        },
        "index": {
          "description": "check wraps pure partial function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message check check head Exception interactive Prelude.head empty list Be careful with laziness as the argument is only evaluated to weak head normal form check Just head Just Exception Prelude.head empty list Just check head Just Exception interactive Prelude.head empty list check join deepseq Just head Exception interactive Prelude.head empty list",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "check",
          "package": "loch-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckIO\u003c/a\u003e\u003c/code\u003e wraps an IO function in a location-emitting handler,\n should an exception be thrown. So instead of producing an anonymous\n call to \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e, a location will be tagged to the error message.\n\u003c/p\u003e\u003cpre\u003e$checkIO :: IO a -\u003e IO a\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$checkIO $ readFile \"/foo\"\n\u003c/code\u003e\u003c/strong\u003e\"*** Exception: \u003cinteractive\u003e:1:1-8: /foo: openFile: does not exist (No such file or directory)\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "checkIO",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#checkIO",
          "type": "function"
        },
        "index": {
          "description": "checkIO wraps an IO function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message checkIO IO IO checkIO readFile foo Exception interactive foo openFile does not exist No such file or directory",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "checkIO",
          "package": "loch-th",
          "partial": "IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:checkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckTrace\u003c/a\u003e\u003c/code\u003e extends \u003ccode\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/code\u003e with the ability to add a custom string\n to the error message.\n\u003c/p\u003e\u003cpre\u003e$checkTrace :: String -\u003e c -\u003e c\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$checkTrace \"XXX\" $ head []\n\u003c/code\u003e\u003c/strong\u003e*** Exception: \u003cinteractive\u003e:1:1-6 XXX: Prelude.head: empty list\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "checkTrace",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#checkTrace",
          "type": "function"
        },
        "index": {
          "description": "checkTrace extends check with the ability to add custom string to the error message checkTrace String checkTrace XXX head Exception interactive XXX Prelude.head empty list",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "checkTrace",
          "package": "loch-th",
          "partial": "Trace",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:checkTrace"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003echeckTraceIO\u003c/a\u003e\u003c/code\u003e extends \u003ccode\u003e\u003ca\u003echeckIO\u003c/a\u003e\u003c/code\u003e with the ability to add a custom\n string to the error message.\n\u003c/p\u003e\u003cpre\u003e$checkTraceIO :: String -\u003e IO a -\u003e IO a\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$checkTraceIO \"XXX\" $ readFile \"/foo\"\n\u003c/code\u003e\u003c/strong\u003e\"*** Exception: \u003cinteractive\u003e:1:1-8 XXX: /foo: openFile: does not exist (No such file or directory)\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "checkTraceIO",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#checkTraceIO",
          "type": "function"
        },
        "index": {
          "description": "checkTraceIO extends checkIO with the ability to add custom string to the error message checkTraceIO String IO IO checkTraceIO XXX readFile foo Exception interactive XXX foo openFile does not exist No such file or directory",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "checkTraceIO",
          "package": "loch-th",
          "partial": "Trace IO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:checkTraceIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location-emitting \u003ccode\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/code\u003e call.\n\u003c/p\u003e\u003cpre\u003e$failure :: \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e -\u003e a\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$failure \"no such thing.\"\n\u003c/code\u003e\u003c/strong\u003e*** Exception: \u003cinteractive\u003e:1:1-8: no such thing.\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "failure",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#failure",
          "type": "function"
        },
        "index": {
          "description": "location-emitting error call failure String failure no such thing Exception interactive no such thing",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "failure",
          "package": "loch-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location-emitting \u003ccode\u003e\u003ca\u003eundefined\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003e$undef :: a\u003c/pre\u003e\u003cpre class=\"screen\"\u003e\u003ccode class=\"prompt\"\u003e\u003e\u003e\u003e \u003c/code\u003e\u003cstrong class=\"userinput\"\u003e\u003ccode\u003e$undef\n\u003c/code\u003e\u003c/strong\u003e*** Exception: \u003cinteractive\u003e:1:1-6: undefined\n\u003c/pre\u003e",
          "module": "Debug.Trace.LocationTH",
          "name": "undef",
          "package": "loch-th",
          "signature": "Q Exp",
          "source": "src/Debug-Trace-LocationTH.html#undef",
          "type": "function"
        },
        "index": {
          "description": "location-emitting undefined undef undef Exception interactive undefined",
          "hierarchy": "Debug Trace LocationTH",
          "module": "Debug.Trace.LocationTH",
          "name": "undef",
          "package": "loch-th",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch-th/docs/Debug-Trace-LocationTH.html#v:undef"
      }
    }
  ]
]