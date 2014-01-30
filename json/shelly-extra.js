[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA futures implementation that integrates with shelly\n\u003c/p\u003e\u003cpre\u003e jobs 5 (\\job -\u003e background job (sleep 2) \u003e\u003e background job (sleep 1))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ejobs\u003c/a\u003e\u003c/code\u003e will wait for all concurrent jobs to finish.\n The argument to jobs is the maximum number of concurrent tasks.\n Generally shell scripts contain a lot of quick commands, but when you have the occasional command that is noticeably long and independent of other commands, you can easily run it concurrently.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Shelly.Background",
        "fct-package": "shelly-extra",
        "fct-signature": "module",
        "fct-source": "src/Shelly-Background.html",
        "fct-type": "module",
        "title": "Background"
      },
      "index": {
        "description": "futures implementation that integrates with shelly jobs job background job sleep background job sleep jobs will wait for all concurrent jobs to finish The argument to jobs is the maximum number of concurrent tasks Generally shell scripts contain lot of quick commands but when you have the occasional command that is noticeably long and independent of other commands you can easily run it concurrently",
        "hierarchy": "Shelly Background",
        "module": "Shelly.Background",
        "name": "Background",
        "normalized": "",
        "package": "shelly-extra",
        "partial": "Background",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#t:BgResult",
      "description": {
        "fct-descr": "\u003cp\u003eType returned by tasks run asynchronously in the background.\n\u003c/p\u003e",
        "fct-module": "Shelly.Background",
        "fct-package": "shelly-extra",
        "fct-signature": "data",
        "fct-source": "src/Shelly-Background.html#BgResult",
        "fct-type": "data",
        "title": "BgResult"
      },
      "index": {
        "description": "Type returned by tasks run asynchronously in the background",
        "hierarchy": "Shelly Background",
        "module": "Shelly.Background",
        "name": "BgResult",
        "normalized": "",
        "package": "shelly-extra",
        "partial": "Bg Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:background",
      "description": {
        "fct-descr": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e task asynchronously in the background, returns\n the `BgResult a`, a promise immediately. Run \u003ca\u003egetBgResult\u003c/a\u003e to wait for the result.\n The background task will inherit the current Sh context\n The \u003ccode\u003eBgJobManager\u003c/code\u003e ensures the max jobs limit must be sufficient for the parent and all children.\n\u003c/p\u003e",
        "fct-module": "Shelly.Background",
        "fct-package": "shelly-extra",
        "fct-signature": "BgJobManager -\u003e Sh a -\u003e Sh (BgResult a)",
        "fct-source": "src/Shelly-Background.html#background",
        "fct-type": "function",
        "title": "background"
      },
      "index": {
        "description": "Run the Sh task asynchronously in the background returns the BgResult promise immediately Run getBgResult to wait for the result The background task will inherit the current Sh context The BgJobManager ensures the max jobs limit must be sufficient for the parent and all children",
        "hierarchy": "Shelly Background",
        "module": "Shelly.Background",
        "name": "background",
        "normalized": "BgJobManager-\u003eSh a-\u003eSh(BgResult a)",
        "package": "shelly-extra",
        "partial": "",
        "signature": "BgJobManager-\u003eSh a-\u003eSh(BgResult a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:getBgResult",
      "description": {
        "fct-descr": "\u003cp\u003eReturns the promised result from a backgrounded task.  Blocks until\n the task completes.\n\u003c/p\u003e",
        "fct-module": "Shelly.Background",
        "fct-package": "shelly-extra",
        "fct-signature": "BgResult a -\u003e Sh a",
        "fct-source": "src/Shelly-Background.html#getBgResult",
        "fct-type": "function",
        "title": "getBgResult"
      },
      "index": {
        "description": "Returns the promised result from backgrounded task Blocks until the task completes",
        "hierarchy": "Shelly Background",
        "module": "Shelly.Background",
        "name": "getBgResult",
        "normalized": "BgResult a-\u003eSh a",
        "package": "shelly-extra",
        "partial": "Bg Result",
        "signature": "BgResult a-\u003eSh a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:jobs",
      "description": {
        "fct-descr": "\u003cp\u003eCreate a \u003ccode\u003eBgJobManager\u003c/code\u003e that has a \u003ccode\u003elimit\u003c/code\u003e on the max number of background tasks.\n an invocation of jobs is independent of any others, and not tied to the Sh monad in any way.\n This blocks the execution of the program until all \u003ccode\u003e\u003ca\u003ebackground\u003c/a\u003e\u003c/code\u003e jobs are finished.\n\u003c/p\u003e",
        "fct-module": "Shelly.Background",
        "fct-package": "shelly-extra",
        "fct-signature": "Int -\u003e (BgJobManager -\u003e Sh a) -\u003e Sh a",
        "fct-source": "src/Shelly-Background.html#jobs",
        "fct-type": "function",
        "title": "jobs"
      },
      "index": {
        "description": "Create BgJobManager that has limit on the max number of background tasks an invocation of jobs is independent of any others and not tied to the Sh monad in any way This blocks the execution of the program until all background jobs are finished",
        "hierarchy": "Shelly Background",
        "module": "Shelly.Background",
        "name": "jobs",
        "normalized": "Int-\u003e(BgJobManager-\u003eSh a)-\u003eSh a",
        "package": "shelly-extra",
        "partial": "",
        "signature": "Int-\u003e(BgJobManager-\u003eSh a)-\u003eSh a"
      }
    }
  }
]