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
        "word": "monad-abort-fd"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "Class",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "Class",
          "package": "monad-abort-fd",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "MonadAbort",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort-Class.html#MonadAbort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "MonadAbort",
          "package": "monad-abort-fd",
          "partial": "Monad Abort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#t:MonadAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "MonadRecover",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort-Class.html#MonadRecover",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "MonadRecover",
          "package": "monad-abort-fd",
          "partial": "Monad Recover",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#t:MonadRecover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "abort",
          "package": "monad-abort-fd",
          "signature": "e -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#abort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "abort",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "e-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "ignore",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ ()",
          "source": "src/Control-Monad-Abort-Class.html#ignore",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "ignore",
          "normalized": "a b-\u003ea()",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:ignore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Abort.Class\",\"Control.Monad.Abort\"]",
          "name": "onError",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (e -\u003e μ β) -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#onError",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:onError\",\"http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:onError\"]"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "onError",
          "normalized": "a b-\u003e(c-\u003ea d)-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Error",
          "signature": "μ α-\u003e(e-\u003eμ β)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:onError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Abort.Class\",\"Control.Monad.Abort\"]",
          "name": "onError_",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ β -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#onError_",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:onError_\",\"http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:onError_\"]"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "onError_",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Error",
          "signature": "μ α-\u003eμ β-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:onError_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort.Class",
          "name": "recover",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (e -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#recover",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort Class",
          "module": "Control.Monad.Abort.Class",
          "name": "recover",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e(e-\u003eμ α)-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort-Class.html#v:recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-abort-fd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "Abort",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#t:Abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-abort-fd",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#t:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "MonadAbort",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort-Class.html#MonadAbort",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "MonadAbort",
          "package": "monad-abort-fd",
          "partial": "Monad Abort",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#t:MonadAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "MonadRecover",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Abort-Class.html#MonadRecover",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "MonadRecover",
          "package": "monad-abort-fd",
          "partial": "Monad Recover",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#t:MonadRecover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-abort-fd",
          "signature": "AbortT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "AbortT",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:AbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "abort",
          "package": "monad-abort-fd",
          "signature": "e -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#abort",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "abort",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "e-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "recover",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (e -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Abort-Class.html#recover",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "recover",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e(e-\u003eμ α)-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:recover"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "runAbort",
          "package": "monad-abort-fd",
          "signature": "Abort e α -\u003e Either e α",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "runAbort",
          "normalized": "Abort a b-\u003eEither a b",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "signature": "Abort e α-\u003eEither e α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:runAbort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Abort",
          "name": "runAbortT",
          "package": "monad-abort-fd",
          "signature": "μ (Either e α)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Abort",
          "module": "Control.Monad.Abort",
          "name": "runAbortT",
          "package": "monad-abort-fd",
          "partial": "Abort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Abort.html#v:runAbortT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "Exception",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Exception.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "Exception",
          "package": "monad-abort-fd",
          "partial": "Exception",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "Handler",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Exception.html#Handler",
          "type": "data"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "Handler",
          "package": "monad-abort-fd",
          "partial": "Handler",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#t:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "MonadFinally",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Exception.html#MonadFinally",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "MonadFinally",
          "package": "monad-abort-fd",
          "partial": "Monad Finally",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#t:MonadFinally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "MonadMask",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Exception.html#MonadMask",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "MonadMask",
          "package": "monad-abort-fd",
          "partial": "Monad Mask",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#t:MonadMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "Handler",
          "package": "monad-abort-fd",
          "signature": "Handler (e -\u003e μ α)",
          "source": "src/Control-Monad-Exception.html#Handler",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "Handler",
          "normalized": "Handler(a-\u003eb c)",
          "package": "monad-abort-fd",
          "partial": "Handler",
          "signature": "Handler(e-\u003eμ α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:Handler"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "bracket",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (α -\u003e μ β) -\u003e (α -\u003e μ γ) -\u003e μ γ",
          "source": "src/Control-Monad-Exception.html#bracket",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e(α-\u003eμ β)-\u003e(α-\u003eμ γ)-\u003eμ γ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "bracketOnError",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (α -\u003e μ β) -\u003e (α -\u003e μ γ) -\u003e μ γ",
          "source": "src/Control-Monad-Exception.html#bracketOnError",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "bracketOnError",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "monad-abort-fd",
          "partial": "On Error",
          "signature": "μ α-\u003e(α-\u003eμ β)-\u003e(α-\u003eμ γ)-\u003eμ γ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:bracketOnError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "bracketOnEscape",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (α -\u003e μ β) -\u003e (α -\u003e μ γ) -\u003e μ γ",
          "source": "src/Control-Monad-Exception.html#bracketOnEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "bracketOnEscape",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "monad-abort-fd",
          "partial": "On Escape",
          "signature": "μ α-\u003e(α-\u003eμ β)-\u003e(α-\u003eμ γ)-\u003eμ γ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:bracketOnEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "bracket_",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ β -\u003e μ γ -\u003e μ γ",
          "source": "src/Control-Monad-Exception.html#bracket_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003eμ β-\u003eμ γ-\u003eμ γ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "catch",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (e -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#catch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "catch",
          "normalized": "a b-\u003e(c-\u003ea b)-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e(e-\u003eμ α)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "catchJust",
          "package": "monad-abort-fd",
          "signature": "(e -\u003e Maybe β) -\u003e μ α -\u003e (β -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#catchJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "catchJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003e(b-\u003ec d)-\u003ec d",
          "package": "monad-abort-fd",
          "partial": "Just",
          "signature": "(e-\u003eMaybe β)-\u003eμ α-\u003e(β-\u003eμ α)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:catchJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "catches",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e [Handler μ α] -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#catches",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "catches",
          "normalized": "a b-\u003e[Handler a b]-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e[Handler μ α]-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:catches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "evaluate",
          "package": "monad-abort-fd",
          "signature": "α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#evaluate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "evaluate",
          "normalized": "a-\u003eb a",
          "package": "monad-abort-fd",
          "signature": "α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:evaluate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "exception",
          "package": "monad-abort-fd",
          "signature": "e -\u003e α",
          "source": "src/Control-Monad-Exception.html#exception",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "exception",
          "normalized": "a-\u003eb",
          "package": "monad-abort-fd",
          "signature": "e-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:exception"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "finally",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ β -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#finally",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003eμ β-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "finally'",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (Maybe α -\u003e μ β) -\u003e μ (α, β)",
          "source": "src/Control-Monad-Exception.html#finally%27",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "finally'",
          "normalized": "a b-\u003e(Maybe b-\u003ea c)-\u003ea(b,c)",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003e(Maybe α-\u003eμ β)-\u003eμ(α,β)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:finally-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "getMaskingState",
          "package": "monad-abort-fd",
          "signature": "μ m",
          "source": "src/Control-Monad-Exception.html#getMaskingState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "getMaskingState",
          "package": "monad-abort-fd",
          "partial": "Masking State",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:getMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "handle",
          "package": "monad-abort-fd",
          "signature": "(e -\u003e μ α) -\u003e μ α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#handle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "handle",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "(e-\u003eμ α)-\u003eμ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "handleJust",
          "package": "monad-abort-fd",
          "signature": "(e -\u003e Maybe β) -\u003e (β -\u003e μ α) -\u003e μ α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#handleJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "handleJust",
          "normalized": "(a-\u003eMaybe b)-\u003e(b-\u003ec d)-\u003ec d-\u003ec d",
          "package": "monad-abort-fd",
          "partial": "Just",
          "signature": "(e-\u003eMaybe β)-\u003e(β-\u003eμ α)-\u003eμ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:handleJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "mask",
          "package": "monad-abort-fd",
          "signature": "η β -\u003e η β) -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#mask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "mask",
          "normalized": "a b-\u003ea b)-\u003ec d)-\u003ec d",
          "package": "monad-abort-fd",
          "signature": "η β-\u003eη β)-\u003eμ α)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:mask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "mask_",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#mask_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "mask_",
          "normalized": "a b-\u003ea b",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:mask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "onEscape",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ β -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#onEscape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "onEscape",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Escape",
          "signature": "μ α-\u003eμ β-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:onEscape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "onException",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e (e -\u003e μ β) -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#onException",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "onException",
          "normalized": "a b-\u003e(c-\u003ea d)-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Exception",
          "signature": "μ α-\u003e(e-\u003eμ β)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:onException"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "onExceptions",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e [Handler μ β] -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#onExceptions",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "onExceptions",
          "normalized": "a b-\u003e[Handler a c]-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Exceptions",
          "signature": "μ α-\u003e[Handler μ β]-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:onExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "setMaskingState",
          "package": "monad-abort-fd",
          "signature": "m -\u003e μ α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#setMaskingState",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "setMaskingState",
          "normalized": "a-\u003eb c-\u003eb c",
          "package": "monad-abort-fd",
          "partial": "Masking State",
          "signature": "m-\u003eμ α-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:setMaskingState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "throw",
          "package": "monad-abort-fd",
          "signature": "e -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#throw",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "throw",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "e-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:throw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "throwIO",
          "package": "monad-abort-fd",
          "signature": "e -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#throwIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "throwIO",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "partial": "IO",
          "signature": "e-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:throwIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "try",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ (Either e α)",
          "source": "src/Control-Monad-Exception.html#try",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "try",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "monad-abort-fd",
          "signature": "μ α-\u003eμ(Either e α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "tryAll",
          "package": "monad-abort-fd",
          "signature": "[μ α] -\u003e μ ()",
          "source": "src/Control-Monad-Exception.html#tryAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "tryAll",
          "normalized": "[a b]-\u003ea()",
          "package": "monad-abort-fd",
          "partial": "All",
          "signature": "[μ α]-\u003eμ()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:tryAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "tryJust",
          "package": "monad-abort-fd",
          "signature": "(e -\u003e Maybe β) -\u003e μ α -\u003e μ (Either β α)",
          "source": "src/Control-Monad-Exception.html#tryJust",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "tryJust",
          "normalized": "(a-\u003eMaybe b)-\u003ec d-\u003ec(Either b d)",
          "package": "monad-abort-fd",
          "partial": "Just",
          "signature": "(e-\u003eMaybe β)-\u003eμ α-\u003eμ(Either β α)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:tryJust"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "uninterruptibleMask",
          "package": "monad-abort-fd",
          "signature": "η β -\u003e η β) -\u003e μ α) -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#uninterruptibleMask",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "uninterruptibleMask",
          "normalized": "a b-\u003ea b)-\u003ec d)-\u003ec d",
          "package": "monad-abort-fd",
          "partial": "Mask",
          "signature": "η β-\u003eη β)-\u003eμ α)-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:uninterruptibleMask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Exception",
          "name": "uninterruptibleMask_",
          "package": "monad-abort-fd",
          "signature": "μ α -\u003e μ α",
          "source": "src/Control-Monad-Exception.html#uninterruptibleMask_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Exception",
          "module": "Control.Monad.Exception",
          "name": "uninterruptibleMask_",
          "normalized": "a b-\u003ea b",
          "package": "monad-abort-fd",
          "partial": "Mask",
          "signature": "μ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Exception.html#v:uninterruptibleMask_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish.Class",
          "name": "Class",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Finish-Class.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Finish Class",
          "module": "Control.Monad.Finish.Class",
          "name": "Class",
          "package": "monad-abort-fd",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish.Class",
          "name": "MonadFinish",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Finish-Class.html#MonadFinish",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Finish Class",
          "module": "Control.Monad.Finish.Class",
          "name": "MonadFinish",
          "package": "monad-abort-fd",
          "partial": "Monad Finish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish-Class.html#t:MonadFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish.Class",
          "name": "finish",
          "package": "monad-abort-fd",
          "signature": "f -\u003e μ α",
          "source": "src/Control-Monad-Finish-Class.html#finish",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Finish Class",
          "module": "Control.Monad.Finish.Class",
          "name": "finish",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "f-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish-Class.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "Finish",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Finish.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "Finish",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "Finish",
          "package": "monad-abort-fd",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "Finish",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#t:Finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "FinishT",
          "package": "monad-abort-fd",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "FinishT",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#t:FinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "MonadFinish",
          "package": "monad-abort-fd",
          "source": "src/Control-Monad-Finish-Class.html#MonadFinish",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "MonadFinish",
          "package": "monad-abort-fd",
          "partial": "Monad Finish",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#t:MonadFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "FinishT",
          "package": "monad-abort-fd",
          "signature": "FinishT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "FinishT",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:FinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "finish",
          "package": "monad-abort-fd",
          "signature": "f -\u003e μ α",
          "source": "src/Control-Monad-Finish-Class.html#finish",
          "type": "method"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "finish",
          "normalized": "a-\u003eb c",
          "package": "monad-abort-fd",
          "signature": "f-\u003eμ α",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:finish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "runFinish",
          "package": "monad-abort-fd",
          "signature": "Finish f α -\u003e Either f α",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "runFinish",
          "normalized": "Finish a b-\u003eEither a b",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "signature": "Finish f α-\u003eEither f α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:runFinish"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "runFinish'",
          "package": "monad-abort-fd",
          "signature": "Finish α α -\u003e α",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "runFinish'",
          "normalized": "Finish a a-\u003ea",
          "package": "monad-abort-fd",
          "partial": "Finish'",
          "signature": "Finish α α-\u003eα",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:runFinish-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "runFinishT",
          "package": "monad-abort-fd",
          "signature": "μ (Either f α)",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "runFinishT",
          "package": "monad-abort-fd",
          "partial": "Finish",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:runFinishT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Finish",
          "name": "runFinishT'",
          "package": "monad-abort-fd",
          "signature": "FinishT α μ α -\u003e μ α",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Finish",
          "module": "Control.Monad.Finish",
          "name": "runFinishT'",
          "normalized": "FinishT a b a-\u003eb a",
          "package": "monad-abort-fd",
          "partial": "Finish T'",
          "signature": "FinishT α μ α-\u003eμ α",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/monad-abort-fd/docs/Control-Monad-Finish.html#v:runFinishT-39-"
      }
    }
  ]
]