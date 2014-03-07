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
        "word": "loch"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "A wrapper type for the \u003ctt\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/tt\u003e token.\n",
          "module": "Debug.Trace.Location",
          "name": "Assert",
          "package": "loch",
          "source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#Assert",
          "type": "type"
        },
        "index": {
          "description": "wrapper type for the assert token",
          "hierarchy": "Debug Trace Location",
          "module": "Debug.Trace.Location",
          "name": "Assert",
          "package": "loch",
          "partial": "Assert",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#t:Assert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003echeck\u003c/a\u003e\u003c/tt\u003e wraps a pure, partial function in a location-emitting\n handler, should an exception be thrown. So instead of producing an\n anonymous call to \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, a location will be tagged to the error\n message.\n\u003c/p\u003e\u003cpre\u003e check assert $ head []\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e *** Exception: \u003cinteractive\u003e:1:6-11: Prelude.head: empty list\n\u003c/pre\u003e",
          "module": "Debug.Trace.Location",
          "name": "check",
          "package": "loch",
          "signature": "Assert a -\u003e a -\u003e a",
          "source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#check",
          "type": "function"
        },
        "index": {
          "description": "check wraps pure partial function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message check assert head Will produce Exception interactive Prelude.head empty list",
          "hierarchy": "Debug Trace Location",
          "module": "Debug.Trace.Location",
          "name": "check",
          "normalized": "Assert a-\u003ea-\u003ea",
          "package": "loch",
          "signature": "Assert a-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:check"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ctt\u003e\u003ca\u003echeckIO\u003c/a\u003e\u003c/tt\u003e wraps an IO function in a location-emitting handler,\n should an exception be thrown. So instead of producing an anonymous\n call to \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, a location will be tagged to the error message.\n\u003c/p\u003e\u003cpre\u003e do x \u003c- checkIO assert (readFile \"/foo\")\n    x\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e \"*** Exception: \u003cinteractive\u003e:1:13-18: /foo: openFile: does not exist\n\u003c/pre\u003e",
          "module": "Debug.Trace.Location",
          "name": "checkIO",
          "package": "loch",
          "signature": "Assert a -\u003e IO a -\u003e IO a",
          "source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#checkIO",
          "type": "function"
        },
        "index": {
          "description": "checkIO wraps an IO function in location-emitting handler should an exception be thrown So instead of producing an anonymous call to error location will be tagged to the error message do checkIO assert readFile foo Will produce Exception interactive foo openFile does not exist",
          "hierarchy": "Debug Trace Location",
          "module": "Debug.Trace.Location",
          "name": "checkIO",
          "normalized": "Assert a-\u003eIO a-\u003eIO a",
          "package": "loch",
          "partial": "IO",
          "signature": "Assert a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:checkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location-emitting \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e call. It behaves like \u003ctt\u003e\u003ca\u003eerror\u003c/a\u003e\u003c/tt\u003e, but\n takes an \u003ctt\u003e\u003ca\u003eassert\u003c/a\u003e\u003c/tt\u003e token as an argument, producing a located error\n message.\n\u003c/p\u003e\u003cpre\u003e failure assert \"no such thing.\"\n\u003c/pre\u003e\u003cp\u003eFrom GHCi:\n\u003c/p\u003e\u003cpre\u003e *** Exception: \u003cinteractive\u003e:1:8-13: no such thing.\n\u003c/pre\u003e\u003cp\u003eOr compiled:\n\u003c/p\u003e\u003cpre\u003e a.out: A.hs:18:12-17: no such thing.\n\u003c/pre\u003e",
          "module": "Debug.Trace.Location",
          "name": "failure",
          "package": "loch",
          "signature": "Assert a -\u003e String -\u003e a",
          "source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#failure",
          "type": "function"
        },
        "index": {
          "description": "location-emitting error call It behaves like error but takes an assert token as an argument producing located error message failure assert no such thing From GHCi Exception interactive no such thing Or compiled a.out A.hs no such thing",
          "hierarchy": "Debug Trace Location",
          "module": "Debug.Trace.Location",
          "name": "failure",
          "normalized": "Assert a-\u003eString-\u003ea",
          "package": "loch",
          "signature": "Assert a-\u003eString-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:failure"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA location-emitting \u003ctt\u003e\u003ca\u003etrace\u003c/a\u003e\u003c/tt\u003e call. It returns its third argument,\n emitting a located trace message to stderr as a side effect.\n\u003c/p\u003e\u003cp\u003eFor example:\n\u003c/p\u003e\u003cpre\u003e trace assert \"made it here\" (1+2)\n\u003c/pre\u003e\u003cp\u003eWill produce:\n\u003c/p\u003e\u003cpre\u003e \u003cinteractive\u003e:1:21-26: made it here\n 3\n\u003c/pre\u003e",
          "module": "Debug.Trace.Location",
          "name": "trace",
          "package": "loch",
          "signature": "Assert () -\u003e String -\u003e a -\u003e a",
          "source": "http://hackage.haskell.org/package/loch/docs/src/Debug-Trace-Location.html#trace",
          "type": "function"
        },
        "index": {
          "description": "location-emitting trace call It returns its third argument emitting located trace message to stderr as side effect For example trace assert made it here Will produce interactive made it here",
          "hierarchy": "Debug Trace Location",
          "module": "Debug.Trace.Location",
          "name": "trace",
          "normalized": "Assert()-\u003eString-\u003ea-\u003ea",
          "package": "loch",
          "signature": "Assert()-\u003eString-\u003ea-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/loch/docs/Debug-Trace-Location.html#v:trace"
      }
    }
  ]
]