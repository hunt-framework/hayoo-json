[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a monad transformer for the attempt monad, which allows the\n reporting of errors using extensible exceptions.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Attempt.html",
        "fct-type": "module",
        "title": "Attempt"
      },
      "index": {
        "description": "Provide monad transformer for the attempt monad which allows the reporting of errors using extensible exceptions",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "Attempt",
        "normalized": "",
        "package": "control-monad-attempt",
        "partial": "Attempt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#t:AttemptT",
      "description": {
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Attempt.html#AttemptT",
        "fct-type": "newtype",
        "title": "AttemptT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "AttemptT",
        "normalized": "",
        "package": "control-monad-attempt",
        "partial": "Attempt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:AttemptT",
      "description": {
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "AttemptT",
        "fct-source": "src/Control-Monad-Attempt.html#AttemptT",
        "fct-type": "function",
        "title": "AttemptT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "AttemptT",
        "normalized": "",
        "package": "control-monad-attempt",
        "partial": "Attempt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:attemptT",
      "description": {
        "fct-descr": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003eattempt\u003c/a\u003e\u003c/code\u003e for transformers. Given a success and failure\n handler, eliminates the \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e portion of the transformer stack.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "e -\u003e b) -\u003e (a -\u003e b) -\u003e AttemptT m a -\u003e m b",
        "fct-source": "src/Control-Monad-Attempt.html#attemptT",
        "fct-type": "function",
        "title": "attemptT"
      },
      "index": {
        "description": "The equivalent of attempt for transformers Given success and failure handler eliminates the AttemptT portion of the transformer stack",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "attemptT",
        "normalized": "a-\u003eb)-\u003e(c-\u003eb)-\u003eAttemptT d c-\u003ed b",
        "package": "control-monad-attempt",
        "partial": "",
        "signature": "e-\u003eb)-\u003e(a-\u003eb)-\u003eAttemptT m a-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:attemptTIO",
      "description": {
        "fct-descr": "\u003cp\u003eCatches runtime (ie, IO) exceptions and represents them in an \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e\n transformer.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003ehandle\u003c/code\u003e, the first argument to this function must explicitly state the\n type of its input.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "(eIn -\u003e eOut) -\u003e IO v -\u003e AttemptT IO v",
        "fct-source": "src/Control-Monad-Attempt.html#attemptTIO",
        "fct-type": "function",
        "title": "attemptTIO"
      },
      "index": {
        "description": "Catches runtime ie IO exceptions and represents them in an AttemptT transformer Like handle the first argument to this function must explicitly state the type of its input",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "attemptTIO",
        "normalized": "(a-\u003eb)-\u003eIO c-\u003eAttemptT IO c",
        "package": "control-monad-attempt",
        "partial": "TIO",
        "signature": "(eIn-\u003eeOut)-\u003eIO v-\u003eAttemptT IO v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:evalAttemptT",
      "description": {
        "fct-descr": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eFromAttempt\u003c/a\u003e\u003c/code\u003e specify a manner for embedding \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e\n failures directly into the target data type. For example, the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance\n simply throws a runtime error. This is a convenience wrapper when you simply\n want to use that default action.\n\u003c/p\u003e\u003cp\u003eSo given a type \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, this function will convert it to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, throwing any exceptions in the original value.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "AttemptT m v -\u003e m v",
        "fct-source": "src/Control-Monad-Attempt.html#evalAttemptT",
        "fct-type": "function",
        "title": "evalAttemptT"
      },
      "index": {
        "description": "Instances of FromAttempt specify manner for embedding Attempt failures directly into the target data type For example the IO instance simply throws runtime error This is convenience wrapper when you simply want to use that default action So given type AttemptT IO Int this function will convert it to IO Int throwing any exceptions in the original value",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "evalAttemptT",
        "normalized": "AttemptT a b-\u003ea b",
        "package": "control-monad-attempt",
        "partial": "Attempt",
        "signature": "AttemptT m v-\u003em v"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:runAttemptT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Attempt",
        "fct-package": "control-monad-attempt",
        "fct-signature": "m (Attempt v)",
        "fct-source": "src/Control-Monad-Attempt.html#AttemptT",
        "fct-type": "function",
        "title": "runAttemptT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Attempt",
        "module": "Control.Monad.Attempt",
        "name": "runAttemptT",
        "normalized": "",
        "package": "control-monad-attempt",
        "partial": "Attempt",
        "signature": ""
      }
    }
  }
]