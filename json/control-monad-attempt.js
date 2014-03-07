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
        "word": "control-monad-attempt"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProvide a monad transformer for the attempt monad, which allows the\n reporting of errors using extensible exceptions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Attempt",
          "name": "Attempt",
          "package": "control-monad-attempt",
          "source": "src/Control-Monad-Attempt.html",
          "type": "module"
        },
        "index": {
          "description": "Provide monad transformer for the attempt monad which allows the reporting of errors using extensible exceptions",
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "Attempt",
          "package": "control-monad-attempt",
          "partial": "Attempt",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Attempt",
          "name": "AttemptT",
          "package": "control-monad-attempt",
          "source": "src/Control-Monad-Attempt.html#AttemptT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "AttemptT",
          "package": "control-monad-attempt",
          "partial": "Attempt",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#t:AttemptT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Attempt",
          "name": "AttemptT",
          "package": "control-monad-attempt",
          "signature": "AttemptT",
          "source": "src/Control-Monad-Attempt.html#AttemptT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "AttemptT",
          "package": "control-monad-attempt",
          "partial": "Attempt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:AttemptT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe equivalent of \u003ccode\u003e\u003ca\u003eattempt\u003c/a\u003e\u003c/code\u003e for transformers. Given a success and failure\n handler, eliminates the \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e portion of the transformer stack.\n\u003c/p\u003e",
          "module": "Control.Monad.Attempt",
          "name": "attemptT",
          "package": "control-monad-attempt",
          "signature": "e -\u003e b) -\u003e (a -\u003e b) -\u003e AttemptT m a -\u003e m b",
          "source": "src/Control-Monad-Attempt.html#attemptT",
          "type": "function"
        },
        "index": {
          "description": "The equivalent of attempt for transformers Given success and failure handler eliminates the AttemptT portion of the transformer stack",
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "attemptT",
          "normalized": "a-\u003eb)-\u003e(c-\u003eb)-\u003eAttemptT d c-\u003ed b",
          "package": "control-monad-attempt",
          "signature": "e-\u003eb)-\u003e(a-\u003eb)-\u003eAttemptT m a-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:attemptT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatches runtime (ie, IO) exceptions and represents them in an \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e\n transformer.\n\u003c/p\u003e\u003cp\u003eLike \u003ccode\u003ehandle\u003c/code\u003e, the first argument to this function must explicitly state the\n type of its input.\n\u003c/p\u003e",
          "module": "Control.Monad.Attempt",
          "name": "attemptTIO",
          "package": "control-monad-attempt",
          "signature": "(eIn -\u003e eOut) -\u003e IO v -\u003e AttemptT IO v",
          "source": "src/Control-Monad-Attempt.html#attemptTIO",
          "type": "function"
        },
        "index": {
          "description": "Catches runtime ie IO exceptions and represents them in an AttemptT transformer Like handle the first argument to this function must explicitly state the type of its input",
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "attemptTIO",
          "normalized": "(a-\u003eb)-\u003eIO c-\u003eAttemptT IO c",
          "package": "control-monad-attempt",
          "partial": "TIO",
          "signature": "(eIn-\u003eeOut)-\u003eIO v-\u003eAttemptT IO v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:attemptTIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInstances of \u003ccode\u003e\u003ca\u003eFromAttempt\u003c/a\u003e\u003c/code\u003e specify a manner for embedding \u003ccode\u003e\u003ca\u003eAttempt\u003c/a\u003e\u003c/code\u003e\n failures directly into the target data type. For example, the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e instance\n simply throws a runtime error. This is a convenience wrapper when you simply\n want to use that default action.\n\u003c/p\u003e\u003cp\u003eSo given a type \u003ccode\u003e\u003ca\u003eAttemptT\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, this function will convert it to \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e\n \u003ccode\u003e\u003ca\u003eInt\u003c/a\u003e\u003c/code\u003e, throwing any exceptions in the original value.\n\u003c/p\u003e",
          "module": "Control.Monad.Attempt",
          "name": "evalAttemptT",
          "package": "control-monad-attempt",
          "signature": "AttemptT m v -\u003e m v",
          "source": "src/Control-Monad-Attempt.html#evalAttemptT",
          "type": "function"
        },
        "index": {
          "description": "Instances of FromAttempt specify manner for embedding Attempt failures directly into the target data type For example the IO instance simply throws runtime error This is convenience wrapper when you simply want to use that default action So given type AttemptT IO Int this function will convert it to IO Int throwing any exceptions in the original value",
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "evalAttemptT",
          "normalized": "AttemptT a b-\u003ea b",
          "package": "control-monad-attempt",
          "partial": "Attempt",
          "signature": "AttemptT m v-\u003em v",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:evalAttemptT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Attempt",
          "name": "runAttemptT",
          "package": "control-monad-attempt",
          "signature": "m (Attempt v)",
          "source": "src/Control-Monad-Attempt.html#AttemptT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Attempt",
          "module": "Control.Monad.Attempt",
          "name": "runAttemptT",
          "package": "control-monad-attempt",
          "partial": "Attempt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/control-monad-attempt/docs/Control-Monad-Attempt.html#v:runAttemptT"
      }
    }
  ]
]