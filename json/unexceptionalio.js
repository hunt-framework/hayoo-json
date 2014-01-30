[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWhen you've caught all the exceptions that can be handled safely,\n   this is what you're left with.\n\u003c/p\u003e\u003cpre\u003e runEitherIO . fromIO &#8801; id\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "module",
        "fct-source": "src/UnexceptionalIO.html",
        "fct-type": "module",
        "title": "UnexceptionalIO"
      },
      "index": {
        "description": "When you ve caught all the exceptions that can be handled safely this is what you re left with runEitherIO fromIO id",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "UnexceptionalIO",
        "normalized": "",
        "package": "unexceptionalio",
        "partial": "Unexceptional IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#t:UnexceptionalIO",
      "description": {
        "fct-descr": "\u003cp\u003eIO without any non-error, synchronous exceptions\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "data",
        "fct-source": "src/UnexceptionalIO.html#UnexceptionalIO",
        "fct-type": "data",
        "title": "UnexceptionalIO"
      },
      "index": {
        "description": "IO without any non-error synchronous exceptions",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "UnexceptionalIO",
        "normalized": "",
        "package": "unexceptionalio",
        "partial": "Unexceptional IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#v:fromIO",
      "description": {
        "fct-descr": "\u003cp\u003eCatch any non-error, synchronous exceptions in an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "IO a -\u003e EitherT SomeException UnexceptionalIO a",
        "fct-source": "src/UnexceptionalIO.html#fromIO",
        "fct-type": "function",
        "title": "fromIO"
      },
      "index": {
        "description": "Catch any non-error synchronous exceptions in an IO action",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "fromIO",
        "normalized": "IO a-\u003eEitherT SomeException UnexceptionalIO a",
        "package": "unexceptionalio",
        "partial": "IO",
        "signature": "IO a-\u003eEitherT SomeException UnexceptionalIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#v:fromIO-39-",
      "description": {
        "fct-descr": "\u003cp\u003eYou promise that \u003ccode\u003ee\u003c/code\u003e covers all non-error, synchronous exceptions\n   thrown by this \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e\u003cp\u003eThis function is partial if you lie\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "IO a -\u003e EitherT e UnexceptionalIO a",
        "fct-source": "src/UnexceptionalIO.html#fromIO%27",
        "fct-type": "function",
        "title": "fromIO'"
      },
      "index": {
        "description": "You promise that covers all non-error synchronous exceptions thrown by this IO action This function is partial if you lie",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "fromIO'",
        "normalized": "IO a-\u003eEitherT b UnexceptionalIO a",
        "package": "unexceptionalio",
        "partial": "IO'",
        "signature": "IO a-\u003eEitherT e UnexceptionalIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#v:runEitherIO",
      "description": {
        "fct-descr": "\u003cp\u003eRe-embed \u003ccode\u003e\u003ca\u003eUnexceptionalIO\u003c/a\u003e\u003c/code\u003e and possible exception back into \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "EitherT e UnexceptionalIO a -\u003e m a",
        "fct-source": "src/UnexceptionalIO.html#runEitherIO",
        "fct-type": "function",
        "title": "runEitherIO"
      },
      "index": {
        "description": "Re-embed UnexceptionalIO and possible exception back into IO",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "runEitherIO",
        "normalized": "EitherT a UnexceptionalIO b-\u003ec b",
        "package": "unexceptionalio",
        "partial": "Either IO",
        "signature": "EitherT e UnexceptionalIO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#v:runUnexceptionalIO",
      "description": {
        "fct-descr": "\u003cp\u003eRe-embed \u003ccode\u003e\u003ca\u003eUnexceptionalIO\u003c/a\u003e\u003c/code\u003e into \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "UnexceptionalIO a -\u003e m a",
        "fct-source": "src/UnexceptionalIO.html#runUnexceptionalIO",
        "fct-type": "function",
        "title": "runUnexceptionalIO"
      },
      "index": {
        "description": "Re-embed UnexceptionalIO into IO",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "runUnexceptionalIO",
        "normalized": "UnexceptionalIO a-\u003eb a",
        "package": "unexceptionalio",
        "partial": "Unexceptional IO",
        "signature": "UnexceptionalIO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/unexceptionalio/docs/UnexceptionalIO.html#v:unsafeFromIO",
      "description": {
        "fct-descr": "\u003cp\u003eYou promise there are no exceptions thrown by this \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action\n\u003c/p\u003e",
        "fct-module": "UnexceptionalIO",
        "fct-package": "unexceptionalio",
        "fct-signature": "IO a -\u003e UnexceptionalIO a",
        "fct-source": "src/UnexceptionalIO.html#unsafeFromIO",
        "fct-type": "function",
        "title": "unsafeFromIO"
      },
      "index": {
        "description": "You promise there are no exceptions thrown by this IO action",
        "hierarchy": "UnexceptionalIO",
        "module": "UnexceptionalIO",
        "name": "unsafeFromIO",
        "normalized": "IO a-\u003eUnexceptionalIO a",
        "package": "unexceptionalio",
        "partial": "From IO",
        "signature": "IO a-\u003eUnexceptionalIO a"
      }
    }
  }
]