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
        "word": "shelly-extra"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA futures implementation that integrates with shelly\n\u003c/p\u003e\u003cpre\u003e jobs 5 (\\job -\u003e background job (sleep 2) \u003e\u003e background job (sleep 1))\n\u003c/pre\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ejobs\u003c/a\u003e\u003c/code\u003e will wait for all concurrent jobs to finish.\n The argument to jobs is the maximum number of concurrent tasks.\n Generally shell scripts contain a lot of quick commands, but when you have the occasional command that is noticeably long and independent of other commands, you can easily run it concurrently.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Shelly.Background",
          "name": "Background",
          "package": "shelly-extra",
          "source": "src/Shelly-Background.html",
          "type": "module"
        },
        "index": {
          "description": "futures implementation that integrates with shelly jobs job background job sleep background job sleep jobs will wait for all concurrent jobs to finish The argument to jobs is the maximum number of concurrent tasks Generally shell scripts contain lot of quick commands but when you have the occasional command that is noticeably long and independent of other commands you can easily run it concurrently",
          "hierarchy": "Shelly Background",
          "module": "Shelly.Background",
          "name": "Background",
          "package": "shelly-extra",
          "partial": "Background",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eSh\u003c/a\u003e\u003c/code\u003e task asynchronously in the background,\n immediately returns the \u003ccode\u003e\u003ca\u003eAsync\u003c/a\u003e\u003c/code\u003e promise.\n The background task will inherit the current Sh context\n The \u003ccode\u003eBgJobManager\u003c/code\u003e ensures the max jobs limit must be sufficient for the parent and all children.\n\u003c/p\u003e",
          "module": "Shelly.Background",
          "name": "background",
          "package": "shelly-extra",
          "signature": "BgJobManager -\u003e Sh a -\u003e Sh (Async a)",
          "source": "src/Shelly-Background.html#background",
          "type": "function"
        },
        "index": {
          "description": "Run the Sh task asynchronously in the background immediately returns the Async promise The background task will inherit the current Sh context The BgJobManager ensures the max jobs limit must be sufficient for the parent and all children",
          "hierarchy": "Shelly Background",
          "module": "Shelly.Background",
          "name": "background",
          "normalized": "BgJobManager-\u003eSh a-\u003eSh(Async a)",
          "package": "shelly-extra",
          "signature": "BgJobManager-\u003eSh a-\u003eSh(Async a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:background"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a \u003ccode\u003eBgJobManager\u003c/code\u003e that has a \u003ccode\u003elimit\u003c/code\u003e on the max number of background tasks.\n an invocation of jobs is independent of any others, and not tied to the Sh monad in any way.\n This blocks the execution of the program until all \u003ccode\u003e\u003ca\u003ebackground\u003c/a\u003e\u003c/code\u003e jobs are finished.\n\u003c/p\u003e",
          "module": "Shelly.Background",
          "name": "jobs",
          "package": "shelly-extra",
          "signature": "Int -\u003e (BgJobManager -\u003e Sh a) -\u003e Sh a",
          "source": "src/Shelly-Background.html#jobs",
          "type": "function"
        },
        "index": {
          "description": "Create BgJobManager that has limit on the max number of background tasks an invocation of jobs is independent of any others and not tied to the Sh monad in any way This blocks the execution of the program until all background jobs are finished",
          "hierarchy": "Shelly Background",
          "module": "Shelly.Background",
          "name": "jobs",
          "normalized": "Int-\u003e(BgJobManager-\u003eSh a)-\u003eSh a",
          "package": "shelly-extra",
          "signature": "Int-\u003e(BgJobManager-\u003eSh a)-\u003eSh a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:jobs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Shelly.Background",
          "name": "killAllJobs",
          "package": "shelly-extra",
          "signature": "BgJobManager -\u003e m ()",
          "source": "src/Shelly-Background.html#killAllJobs",
          "type": "function"
        },
        "index": {
          "hierarchy": "Shelly Background",
          "module": "Shelly.Background",
          "name": "killAllJobs",
          "normalized": "BgJobManager-\u003ea()",
          "package": "shelly-extra",
          "partial": "All Jobs",
          "signature": "BgJobManager-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/shelly-extra/docs/Shelly-Background.html#v:killAllJobs"
      }
    }
  ]
]