[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#t:Assert",
      "description": {
        "fct-descr": "A wrapper type for the \u003ctt\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/tt\u003e token.\n",
        "fct-module": "Debug.Trace.Location",
        "fct-package": "loch",
        "fct-signature": "type",
        "fct-source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#Assert",
        "fct-type": "unknown",
        "title": "Assert"
      },
      "index": {
        "description": "wrapper type for the assert token",
        "hierarchy": "Debug Trace Location",
        "module": "Debug.Trace.Location",
        "name": "Assert",
        "normalized": "",
        "package": "loch",
        "partial": "Assert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:check",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ctt\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/tt\u003e wraps a pure, partial function in a location-emitting\n handler, should an exception be thrown. So instead of producing an\n anonymous call to \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, a location will be tagged to the error\n message.\n\u003c/p\u003e\u003cpre\u003e check assert $ head []\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e *** Exception: \u003cinteractive\u003e:1:6-11: Prelude.head: empty list\n\u003c/pre\u003e",
        "fct-module": "Debug.Trace.Location",
        "fct-package": "loch",
        "fct-signature": "Assert a -\u003e a -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#check",
        "fct-type": "unknown",
        "title": "check"
      },
      "index": {
        "description": "check wraps pure partial function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message check assert head Will produce Exception interactive Prelude.head empty list",
        "hierarchy": "Debug Trace Location",
        "module": "Debug.Trace.Location",
        "name": "check",
        "normalized": "Assert a-\u003ea-\u003ea",
        "package": "loch",
        "partial": "",
        "signature": "Assert a-\u003ea-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:checkIO",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ctt\u003e\u003ca\u003echeckIO\u003c/a\u003e\u003c/tt\u003e wraps an IO function in a location-emitting handler,\n should an exception be thrown. So instead of producing an anonymous\n call to \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, a location will be tagged to the error message.\n\u003c/p\u003e\u003cpre\u003e do x \u003c- checkIO assert (readFile \"/foo\")\n    x\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e \"*** Exception: \u003cinteractive\u003e:1:13-18: /foo: openFile: does not exist\n\u003c/pre\u003e",
        "fct-module": "Debug.Trace.Location",
        "fct-package": "loch",
        "fct-signature": "Assert a -\u003e IO a -\u003e IO a",
        "fct-source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#checkIO",
        "fct-type": "unknown",
        "title": "checkIO"
      },
      "index": {
        "description": "checkIO wraps an IO function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message do checkIO assert readFile foo Will produce Exception interactive foo openFile does not exist",
        "hierarchy": "Debug Trace Location",
        "module": "Debug.Trace.Location",
        "name": "checkIO",
        "normalized": "Assert a-\u003eIO a-\u003eIO a",
        "package": "loch",
        "partial": "IO",
        "signature": "Assert a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:failure",
      "description": {
        "fct-descr": "\u003cp\u003eA location-emitting \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e call. It behaves like \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, but\n takes an \u003ctt\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/tt\u003e token as an argument, producing a located error\n message.\n\u003c/p\u003e\u003cpre\u003e failure assert \"no such thing.\"\n\u003c/pre\u003e\u003cp\u003eFrom GHCi:\n\u003c/p\u003e\u003cpre\u003e *** Exception: \u003cinteractive\u003e:1:8-13: no such thing.\n\u003c/pre\u003e\u003cp\u003eOr compiled:\n\u003c/p\u003e\u003cpre\u003e a.out: A.hs:18:12-17: no such thing.\n\u003c/pre\u003e",
        "fct-module": "Debug.Trace.Location",
        "fct-package": "loch",
        "fct-signature": "Assert a -\u003e String -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#failure",
        "fct-type": "unknown",
        "title": "failure"
      },
      "index": {
        "description": "location-emitting error call It behaves like error but takes an assert token as an argument producing located error message failure assert no such thing From GHCi Exception interactive no such thing Or compiled a.out A.hs no such thing",
        "hierarchy": "Debug Trace Location",
        "module": "Debug.Trace.Location",
        "name": "failure",
        "normalized": "Assert a-\u003eString-\u003ea",
        "package": "loch",
        "partial": "",
        "signature": "Assert a-\u003eString-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:trace",
      "description": {
        "fct-descr": "\u003cp\u003eA location-emitting \u003ctt\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/tt\u003e call. It returns its third argument,\n emitting a located trace message to stderr as a side effect.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e trace assert \"made it here\" (1+2)\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e \u003cinteractive\u003e:1:21-26: made it here\n 3\n\u003c/pre\u003e",
        "fct-module": "Debug.Trace.Location",
        "fct-package": "loch",
        "fct-signature": "Assert () -\u003e String -\u003e a -\u003e a",
        "fct-source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#trace",
        "fct-type": "unknown",
        "title": "trace"
      },
      "index": {
        "description": "location-emitting trace call It returns its third argument emitting located trace message to stderr as side effect For example trace assert made it here Will produce interactive made it here",
        "hierarchy": "Debug Trace Location",
        "module": "Debug.Trace.Location",
        "name": "trace",
        "normalized": "Assert()-\u003eString-\u003ea-\u003ea",
        "package": "loch",
        "partial": "",
        "signature": "Assert()-\u003eString-\u003ea-\u003ea"
      }
    }
  }
]