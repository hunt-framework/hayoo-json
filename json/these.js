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
        "word": "these"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHybrid error/writer monad class that allows both accumulating outputs and \n aborting computation with a final output.\n\u003c/p\u003e\u003cp\u003eThe expected use case is for computations with a notion of fatal vs. \n non-fatal errors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "Class",
          "package": "these",
          "source": "src/Control-Monad-Chronicle-Class.html",
          "type": "module"
        },
        "index": {
          "description": "Hybrid error writer monad class that allows both accumulating outputs and aborting computation with final output The expected use case is for computations with notion of fatal vs non-fatal errors",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "Class",
          "package": "these",
          "partial": "Class",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "ChronicleT",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
          "type": "newtype"
        },
        "index": {
          "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "ChronicleT",
          "package": "these",
          "partial": "Chronicle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#t:ChronicleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Chronicle.Class",
          "name": "MonadChronicle",
          "package": "these",
          "source": "src/Control-Monad-Chronicle-Class.html#MonadChronicle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "MonadChronicle",
          "package": "these",
          "partial": "Monad Chronicle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#t:MonadChronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Chronicle.Class\",\"Control.Monad.Chronicle\",\"Control.Monad.Trans.Chronicle\"]",
          "name": "ChronicleT",
          "package": "these",
          "signature": "ChronicleT",
          "source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:ChronicleT\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:ChronicleT\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:ChronicleT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "ChronicleT",
          "package": "these",
          "partial": "Chronicle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:ChronicleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "absolve",
          "package": "these",
          "signature": "a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#absolve",
          "type": "method"
        },
        "index": {
          "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "absolve",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "these",
          "signature": "a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:absolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003echronicle\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e lifts a plain 'These c a' value into a \u003ccode\u003e\u003ca\u003eMonadChronicle\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "chronicle",
          "package": "these",
          "signature": "These c a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#chronicle",
          "type": "method"
        },
        "index": {
          "description": "chronicle lifts plain These value into MonadChronicle instance",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "chronicle",
          "normalized": "These a b-\u003ec b",
          "package": "these",
          "signature": "These c a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:chronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "condemn",
          "package": "these",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#condemn",
          "type": "method"
        },
        "index": {
          "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "condemn",
          "normalized": "a b-\u003ea b",
          "package": "these",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:condemn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "confess",
          "package": "these",
          "signature": "c -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#confess",
          "type": "method"
        },
        "index": {
          "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "confess",
          "normalized": "a-\u003eb c",
          "package": "these",
          "signature": "c-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:confess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "dictate",
          "package": "these",
          "signature": "c -\u003e m ()",
          "source": "src/Control-Monad-Chronicle-Class.html#dictate",
          "type": "method"
        },
        "index": {
          "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "dictate",
          "normalized": "a-\u003eb()",
          "package": "these",
          "signature": "c-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:dictate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "memento",
          "package": "these",
          "signature": "m a -\u003e m (Either c a)",
          "source": "src/Control-Monad-Chronicle-Class.html#memento",
          "type": "method"
        },
        "index": {
          "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "memento",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "these",
          "signature": "m a-\u003em(Either c a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:memento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle.Class",
          "name": "retcon",
          "package": "these",
          "signature": "(c -\u003e c) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#retcon",
          "type": "method"
        },
        "index": {
          "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "retcon",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "these",
          "signature": "(c-\u003ec)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:retcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Chronicle.Class\",\"Control.Monad.Chronicle\",\"Control.Monad.Trans.Chronicle\"]",
          "name": "runChronicle",
          "package": "these",
          "signature": "Chronicle c a -\u003e These c a",
          "source": "src/Control-Monad-Trans-Chronicle.html#runChronicle",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicle\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:runChronicle\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:runChronicle\"]"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "runChronicle",
          "normalized": "Chronicle a b-\u003eThese a b",
          "package": "these",
          "partial": "Chronicle",
          "signature": "Chronicle c a-\u003eThese c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "[\"Control.Monad.Chronicle.Class\",\"Control.Monad.Chronicle\",\"Control.Monad.Trans.Chronicle\"]",
          "name": "runChronicleT",
          "package": "these",
          "signature": "m (These c a)",
          "source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicleT\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:runChronicleT\",\"http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:runChronicleT\"]"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle Class",
          "module": "Control.Monad.Chronicle.Class",
          "name": "runChronicleT",
          "package": "these",
          "partial": "Chronicle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "source": "src/Control-Monad-Chronicle.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "partial": "Chronicle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chronicle monad parameterized by the output type \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html#Chronicle",
          "type": "type"
        },
        "index": {
          "description": "chronicle monad parameterized by the output type The return function produces computation with no output and combines multiple outputs with mappend",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "partial": "Chronicle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:Chronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "ChronicleT",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
          "type": "newtype"
        },
        "index": {
          "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "ChronicleT",
          "package": "these",
          "partial": "Chronicle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:ChronicleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Chronicle",
          "name": "MonadChronicle",
          "package": "these",
          "source": "src/Control-Monad-Chronicle-Class.html#MonadChronicle",
          "type": "class"
        },
        "index": {
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "MonadChronicle",
          "package": "these",
          "partial": "Monad Chronicle",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:MonadChronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "absolve",
          "package": "these",
          "signature": "a -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#absolve",
          "type": "method"
        },
        "index": {
          "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "absolve",
          "normalized": "a-\u003eb a-\u003eb a",
          "package": "these",
          "signature": "a-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:absolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003echronicle\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e lifts a plain 'These c a' value into a \u003ccode\u003e\u003ca\u003eMonadChronicle\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "chronicle",
          "package": "these",
          "signature": "These c a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#chronicle",
          "type": "method"
        },
        "index": {
          "description": "chronicle lifts plain These value into MonadChronicle instance",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "chronicle",
          "normalized": "These a b-\u003ec b",
          "package": "these",
          "signature": "These c a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:chronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "condemn",
          "package": "these",
          "signature": "m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#condemn",
          "type": "method"
        },
        "index": {
          "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "condemn",
          "normalized": "a b-\u003ea b",
          "package": "these",
          "signature": "m a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:condemn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "confess",
          "package": "these",
          "signature": "c -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#confess",
          "type": "method"
        },
        "index": {
          "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "confess",
          "normalized": "a-\u003eb c",
          "package": "these",
          "signature": "c-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:confess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "dictate",
          "package": "these",
          "signature": "c -\u003e m ()",
          "source": "src/Control-Monad-Chronicle-Class.html#dictate",
          "type": "method"
        },
        "index": {
          "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "dictate",
          "normalized": "a-\u003eb()",
          "package": "these",
          "signature": "c-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:dictate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "memento",
          "package": "these",
          "signature": "m a -\u003e m (Either c a)",
          "source": "src/Control-Monad-Chronicle-Class.html#memento",
          "type": "method"
        },
        "index": {
          "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "memento",
          "normalized": "a b-\u003ea(Either c b)",
          "package": "these",
          "signature": "m a-\u003em(Either c a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:memento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Chronicle",
          "name": "retcon",
          "package": "these",
          "signature": "(c -\u003e c) -\u003e m a -\u003e m a",
          "source": "src/Control-Monad-Chronicle-Class.html#retcon",
          "type": "method"
        },
        "index": {
          "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
          "hierarchy": "Control Monad Chronicle",
          "module": "Control.Monad.Chronicle",
          "name": "retcon",
          "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
          "package": "these",
          "signature": "(c-\u003ec)-\u003em a-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:retcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad, a hybrid error/writer monad that allows\n both accumulating outputs and aborting computation with a final\n output.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html",
          "type": "module"
        },
        "index": {
          "description": "The ChronicleT monad hybrid error writer monad that allows both accumulating outputs and aborting computation with final output",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "partial": "Chronicle",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA chronicle monad parameterized by the output type \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html#Chronicle",
          "type": "type"
        },
        "index": {
          "description": "chronicle monad parameterized by the output type The return function produces computation with no output and combines multiple outputs with mappend",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "Chronicle",
          "package": "these",
          "partial": "Chronicle",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#t:Chronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "ChronicleT",
          "package": "these",
          "source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
          "type": "newtype"
        },
        "index": {
          "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "ChronicleT",
          "package": "these",
          "partial": "Chronicle",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#t:ChronicleT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "absolve",
          "package": "these",
          "signature": "a -\u003e ChronicleT c m a -\u003e ChronicleT c m a",
          "source": "src/Control-Monad-Trans-Chronicle.html#absolve",
          "type": "function"
        },
        "index": {
          "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "absolve",
          "normalized": "a-\u003eChronicleT b c a-\u003eChronicleT b c a",
          "package": "these",
          "signature": "a-\u003eChronicleT c m a-\u003eChronicleT c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:absolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Monad.Trans.Chronicle",
          "name": "chronicle",
          "package": "these",
          "signature": "These c a -\u003e Chronicle c a",
          "source": "src/Control-Monad-Trans-Chronicle.html#chronicle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "chronicle",
          "normalized": "These a b-\u003eChronicle a b",
          "package": "these",
          "signature": "These c a-\u003eChronicle c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:chronicle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "condemn",
          "package": "these",
          "signature": "ChronicleT c m a -\u003e ChronicleT c m a",
          "source": "src/Control-Monad-Trans-Chronicle.html#condemn",
          "type": "function"
        },
        "index": {
          "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "condemn",
          "normalized": "ChronicleT a b c-\u003eChronicleT a b c",
          "package": "these",
          "signature": "ChronicleT c m a-\u003eChronicleT c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:condemn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "confess",
          "package": "these",
          "signature": "c -\u003e ChronicleT c m a",
          "source": "src/Control-Monad-Trans-Chronicle.html#confess",
          "type": "function"
        },
        "index": {
          "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "confess",
          "normalized": "a-\u003eChronicleT a b c",
          "package": "these",
          "signature": "c-\u003eChronicleT c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:confess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003eWriter\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "dictate",
          "package": "these",
          "signature": "c -\u003e ChronicleT c m ()",
          "source": "src/Control-Monad-Trans-Chronicle.html#dictate",
          "type": "function"
        },
        "index": {
          "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "dictate",
          "normalized": "a-\u003eChronicleT a b()",
          "package": "these",
          "signature": "c-\u003eChronicleT c m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:dictate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "memento",
          "package": "these",
          "signature": "ChronicleT c m a -\u003e ChronicleT c m (Either c a)",
          "source": "src/Control-Monad-Trans-Chronicle.html#memento",
          "type": "function"
        },
        "index": {
          "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "memento",
          "normalized": "ChronicleT a b c-\u003eChronicleT a b(Either a c)",
          "package": "these",
          "signature": "ChronicleT c m a-\u003eChronicleT c m(Either c a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:memento"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003eWriter\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "retcon",
          "package": "these",
          "signature": "(c -\u003e c) -\u003e ChronicleT c m a -\u003e ChronicleT c m a",
          "source": "src/Control-Monad-Trans-Chronicle.html#retcon",
          "type": "function"
        },
        "index": {
          "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
          "hierarchy": "Control Monad Trans Chronicle",
          "module": "Control.Monad.Trans.Chronicle",
          "name": "retcon",
          "normalized": "(a-\u003ea)-\u003eChronicleT a b c-\u003eChronicleT a b c",
          "package": "these",
          "signature": "(c-\u003ec)-\u003eChronicleT c m a-\u003eChronicleT c m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:retcon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e-based zipping and unzipping of functors with non-uniform\n shapes, plus traversal of (bi)foldable (bi)functors through said\n functors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Align",
          "name": "Align",
          "package": "these",
          "source": "src/Data-Align.html",
          "type": "module"
        },
        "index": {
          "description": "These based zipping and unzipping of functors with non-uniform shapes plus traversal of bi foldable bi functors through said functors",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "Align",
          "package": "these",
          "partial": "Align",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunctors supporting a zip operation that takes the union of\n   non-uniform shapes.\n\u003c/p\u003e\u003cp\u003eIf your functor is actually a functor from \u003ccode\u003eKleisli Maybe\u003c/code\u003e to\n   \u003ccode\u003eHask\u003c/code\u003e (so it supports \u003ccode\u003emaybeMap :: (a -\u003e Maybe b) -\u003e f a -\u003e f\n   b\u003c/code\u003e), then an \u003ccode\u003eAlign\u003c/code\u003e instance is making your functor lax monoidal\n   w.r.t. the cartesian monoidal structure on \u003ccode\u003eKleisli Maybe\u003c/code\u003e,\n   because \u003ccode\u003eThese\u003c/code\u003e is the cartesian product in that category \u003ccode\u003e(a -\u003e\n   Maybe (These b c) ~ (a -\u003e Maybe b, a -\u003e Maybe c))\u003c/code\u003e. This insight\n   is due to rwbarton.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003enil\u003c/code\u003e and either \u003ccode\u003ealign\u003c/code\u003e or \u003ccode\u003ealignWith\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n (`align` nil) = fmap This\n (nil `align`) = fmap That\n join align = fmap (join These)\n align (f \u003c$\u003e x) (g \u003c$\u003e y) = bimap f g \u003c$\u003e align x y\n alignWith f a b = f \u003c$\u003e align a b\n\u003c/pre\u003e",
          "module": "Data.Align",
          "name": "Align",
          "package": "these",
          "source": "src/Data-Align.html#Align",
          "type": "class"
        },
        "index": {
          "description": "Functors supporting zip operation that takes the union of non-uniform shapes If your functor is actually functor from Kleisli Maybe to Hask so it supports maybeMap Maybe then an Align instance is making your functor lax monoidal w.r.t the cartesian monoidal structure on Kleisli Maybe because These is the cartesian product in that category Maybe These Maybe Maybe This insight is due to rwbarton Minimal definition nil and either align or alignWith Laws align nil fmap This nil align fmap That join align fmap join These align bimap align alignWith align",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "Align",
          "package": "these",
          "partial": "Align",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBifoldable bifunctors supporting traversal through an alignable\n   functor.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003ebicrosswalk\u003c/code\u003e or \u003ccode\u003ebisequenceL\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n bicrosswalk (const empty) (const empty) = const empty\n bicrosswalk f g = bisequenceL . bimap f g\n\u003c/pre\u003e",
          "module": "Data.Align",
          "name": "Bicrosswalk",
          "package": "these",
          "source": "src/Data-Align.html#Bicrosswalk",
          "type": "class"
        },
        "index": {
          "description": "Bifoldable bifunctors supporting traversal through an alignable functor Minimal definition bicrosswalk or bisequenceL Laws bicrosswalk const empty const empty const empty bicrosswalk bisequenceL bimap",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "Bicrosswalk",
          "package": "these",
          "partial": "Bicrosswalk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Bicrosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFoldable functors supporting traversal through an alignable\n   functor.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003ecrosswalk\u003c/code\u003e or \u003ccode\u003esequenceL\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n crosswalk (const nil) = const nil\n crosswalk f = sequenceL . fmap f\n\u003c/pre\u003e",
          "module": "Data.Align",
          "name": "Crosswalk",
          "package": "these",
          "source": "src/Data-Align.html#Crosswalk",
          "type": "class"
        },
        "index": {
          "description": "Foldable functors supporting traversal through an alignable functor Minimal definition crosswalk or sequenceL Laws crosswalk const nil const nil crosswalk sequenceL fmap",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "Crosswalk",
          "package": "these",
          "partial": "Crosswalk",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Crosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlignable functors supporting an \"inverse\" to \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e: splitting\n   a union shape into its component parts.\n\u003c/p\u003e\u003cp\u003eMinimal definition: nothing; a default definition is provided,\n   but it may not have the desired definition for all functors. See\n   the source for more information.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n unalign nil                 = (nil,           nil)\n unalign (This        \u003c$\u003e x) = (Just    \u003c$\u003e x, Nothing \u003c$  x)\n unalign (That        \u003c$\u003e y) = (Nothing \u003c$  y, Just    \u003c$\u003e y)\n unalign (join These  \u003c$\u003e x) = (Just    \u003c$\u003e x, Just    \u003c$\u003e x)\n unalign ((x `These`) \u003c$\u003e y) = (Just x  \u003c$  y, Just    \u003c$\u003e y)\n unalign ((`These` y) \u003c$\u003e x) = (Just    \u003c$\u003e x, Just y  \u003c$  x)\n\u003c/pre\u003e",
          "module": "Data.Align",
          "name": "Unalign",
          "package": "these",
          "source": "src/Data-Align.html#Unalign",
          "type": "class"
        },
        "index": {
          "description": "Alignable functors supporting an inverse to align splitting union shape into its component parts Minimal definition nothing default definition is provided but it may not have the desired definition for all functors See the source for more information Laws unalign nil nil nil unalign This Just Nothing unalign That Nothing Just unalign join These Just Just unalign These Just Just unalign These Just Just",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "Unalign",
          "package": "these",
          "partial": "Unalign",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Unalign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "align",
          "package": "these",
          "signature": "f a -\u003e f b -\u003e f (These a b)",
          "source": "src/Data-Align.html#align",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "align",
          "normalized": "a b-\u003ea c-\u003ea(These b c)",
          "package": "these",
          "signature": "f a-\u003ef b-\u003ef(These a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "alignVectorWith",
          "package": "these",
          "signature": "(These a b -\u003e c) -\u003e v a -\u003e v b -\u003e v c",
          "source": "src/Data-Align.html#alignVectorWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "alignVectorWith",
          "normalized": "(These a b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "these",
          "partial": "Vector With",
          "signature": "(These a b-\u003ec)-\u003ev a-\u003ev b-\u003ev c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:alignVectorWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "alignWith",
          "package": "these",
          "signature": "(These a b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Align.html#alignWith",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "alignWith",
          "normalized": "(These a b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "these",
          "partial": "With",
          "signature": "(These a b-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:alignWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "bicrosswalk",
          "package": "these",
          "signature": "(a -\u003e f c) -\u003e (b -\u003e f d) -\u003e t a b -\u003e f (t c d)",
          "source": "src/Data-Align.html#bicrosswalk",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "bicrosswalk",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003ef a d-\u003eb(f c e)",
          "package": "these",
          "signature": "(a-\u003ef c)-\u003e(b-\u003ef d)-\u003et a b-\u003ef(t c d)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:bicrosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "bisequenceL",
          "package": "these",
          "signature": "t (f a) (f b) -\u003e f (t a b)",
          "source": "src/Data-Align.html#bisequenceL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "bisequenceL",
          "normalized": "a(b c)(b d)-\u003eb(a c d)",
          "package": "these",
          "signature": "t(f a)(f b)-\u003ef(t a b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:bisequenceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "crosswalk",
          "package": "these",
          "signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
          "source": "src/Data-Align.html#crosswalk",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "crosswalk",
          "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
          "package": "these",
          "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:crosswalk"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-padded \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "lpadZip",
          "package": "these",
          "signature": "[a] -\u003e [b] -\u003e [(Maybe a, b)]",
          "source": "src/Data-Align.html#lpadZip",
          "type": "function"
        },
        "index": {
          "description": "Left-padded zip",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "lpadZip",
          "normalized": "[a]-\u003e[b]-\u003e[(Maybe a,b)]",
          "package": "these",
          "partial": "Zip",
          "signature": "[a]-\u003e[b]-\u003e[(Maybe a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:lpadZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLeft-padded \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "lpadZipWith",
          "package": "these",
          "signature": "(Maybe a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Data-Align.html#lpadZipWith",
          "type": "function"
        },
        "index": {
          "description": "Left-padded zipWith",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "lpadZipWith",
          "normalized": "(Maybe a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "these",
          "partial": "Zip With",
          "signature": "(Maybe a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:lpadZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign two structures and combine with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "malign",
          "package": "these",
          "signature": "f a -\u003e f a -\u003e f a",
          "source": "src/Data-Align.html#malign",
          "type": "function"
        },
        "index": {
          "description": "Align two structures and combine with mappend",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "malign",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "these",
          "signature": "f a-\u003ef a-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:malign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "nil",
          "package": "these",
          "signature": "f a",
          "source": "src/Data-Align.html#nil",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "nil",
          "package": "these",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:nil"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign two structures as in \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, but filling in blanks with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "padZip",
          "package": "these",
          "signature": "f a -\u003e f b -\u003e f (Maybe a, Maybe b)",
          "source": "src/Data-Align.html#padZip",
          "type": "function"
        },
        "index": {
          "description": "Align two structures as in zip but filling in blanks with Nothing",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "padZip",
          "normalized": "a b-\u003ea c-\u003ea(Maybe b,Maybe c)",
          "package": "these",
          "partial": "Zip",
          "signature": "f a-\u003ef b-\u003ef(Maybe a,Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:padZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAlign two structures as in \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, but filling in blanks with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "padZipWith",
          "package": "these",
          "signature": "(Maybe a -\u003e Maybe b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
          "source": "src/Data-Align.html#padZipWith",
          "type": "function"
        },
        "index": {
          "description": "Align two structures as in zipWith but filling in blanks with Nothing",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "padZipWith",
          "normalized": "(Maybe a-\u003eMaybe b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
          "package": "these",
          "partial": "Zip With",
          "signature": "(Maybe a-\u003eMaybe b-\u003ec)-\u003ef a-\u003ef b-\u003ef c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:padZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-padded \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "rpadZip",
          "package": "these",
          "signature": "[a] -\u003e [b] -\u003e [(a, Maybe b)]",
          "source": "src/Data-Align.html#rpadZip",
          "type": "function"
        },
        "index": {
          "description": "Right-padded zip",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "rpadZip",
          "normalized": "[a]-\u003e[b]-\u003e[(a,Maybe b)]",
          "package": "these",
          "partial": "Zip",
          "signature": "[a]-\u003e[b]-\u003e[(a,Maybe b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:rpadZip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRight-padded \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Align",
          "name": "rpadZipWith",
          "package": "these",
          "signature": "(a -\u003e Maybe b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
          "source": "src/Data-Align.html#rpadZipWith",
          "type": "function"
        },
        "index": {
          "description": "Right-padded zipWith",
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "rpadZipWith",
          "normalized": "(a-\u003eMaybe b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "package": "these",
          "partial": "Zip With",
          "signature": "(a-\u003eMaybe b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:rpadZipWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "sequenceL",
          "package": "these",
          "signature": "t (f a) -\u003e f (t a)",
          "source": "src/Data-Align.html#sequenceL",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "sequenceL",
          "normalized": "a(b c)-\u003eb(a c)",
          "package": "these",
          "signature": "t(f a)-\u003ef(t a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:sequenceL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Align",
          "name": "unalign",
          "package": "these",
          "signature": "f (These a b) -\u003e (f (Maybe a), f (Maybe b))",
          "source": "src/Data-Align.html#unalign",
          "type": "method"
        },
        "index": {
          "hierarchy": "Data Align",
          "module": "Data.Align",
          "name": "unalign",
          "normalized": "a(These b c)-\u003e(a(Maybe b),a(Maybe c))",
          "package": "these",
          "signature": "f(These a b)-\u003e(f(Maybe a),f(Maybe b))",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:unalign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type and associated operations. Now enhanced with \u003ccode\u003eControl.Lens\u003c/code\u003e magic!\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "source": "src/Data-These.html",
          "type": "module"
        },
        "index": {
          "description": "The These type and associated operations Now enhanced with Control.Lens magic",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "partial": "These",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type represents values with two non-exclusive possibilities.\n\u003c/p\u003e\u003cp\u003eThis can be useful to represent combinations of two values, where the \n   combination is defined if either input is. Algebraically, the type \n   \u003ccode\u003eThese A B\u003c/code\u003e represents \u003ccode\u003e(A + B + AB)\u003c/code\u003e, which doesn't factor easily into\n   sums and products--a type like \u003ccode\u003eEither A (B, Maybe A)\u003c/code\u003e is unclear and\n   awkward to use.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e has straightforward instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, &c., and \n   behaves like a hybrid error/writer monad, as would be expected.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "source": "src/Data-These.html#These",
          "type": "data"
        },
        "index": {
          "description": "The These type represents values with two non-exclusive possibilities This can be useful to represent combinations of two values where the combination is defined if either input is Algebraically the type These represents AB which doesn factor easily into sums and products--a type like Either Maybe is unclear and awkward to use These has straightforward instances of Functor Monad and behaves like hybrid error writer monad as would be expected",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "partial": "These",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#t:These"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.These",
          "name": "That",
          "package": "these",
          "signature": "That b",
          "source": "src/Data-These.html#These",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "That",
          "package": "these",
          "partial": "That",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:That"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "signature": "These a b",
          "source": "src/Data-These.html#These",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "These",
          "package": "these",
          "partial": "These",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:These"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.These",
          "name": "This",
          "package": "these",
          "signature": "This a",
          "source": "src/Data-These.html#These",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "This",
          "package": "these",
          "partial": "This",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:This"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThat\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "_That",
          "package": "these",
          "signature": "p b (f b) -\u003e p (These a b) (f (These a b))",
          "source": "src/Data-These.html#_That",
          "type": "function"
        },
        "index": {
          "description": "Prism selecting the That constructor",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "_That",
          "normalized": "a b(c b)-\u003ea(These d b)(c(These d b))",
          "package": "these",
          "partial": "That",
          "signature": "p b(f b)-\u003ep(These a b)(f(These a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_That"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e constructor. \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e names are ridiculous!\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "_These",
          "package": "these",
          "signature": "p (a, b) (f (a, b)) -\u003e p (These a b) (f (These a b))",
          "source": "src/Data-These.html#_These",
          "type": "function"
        },
        "index": {
          "description": "Prism selecting the These constructor These names are ridiculous",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "_These",
          "normalized": "a(b,c)(d(b,c))-\u003ea(These b c)(d(These b c))",
          "package": "these",
          "partial": "These",
          "signature": "p(a,b)(f(a,b))-\u003ep(These a b)(f(These a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_These"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThis\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "_This",
          "package": "these",
          "signature": "p a (f a) -\u003e p (These a b) (f (These a b))",
          "source": "src/Data-These.html#_This",
          "type": "function"
        },
        "index": {
          "description": "Prism selecting the This constructor",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "_This",
          "normalized": "a b(c b)-\u003ea(These b d)(c(These b d))",
          "package": "these",
          "partial": "This",
          "signature": "p a(f a)-\u003ep(These a b)(f(These a b))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_This"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThat\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "catThat",
          "package": "these",
          "signature": "[These a b] -\u003e [b]",
          "source": "src/Data-These.html#catThat",
          "type": "function"
        },
        "index": {
          "description": "Select all That constructors from list",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "catThat",
          "normalized": "[These a b]-\u003e[b]",
          "package": "these",
          "partial": "That",
          "signature": "[These a b]-\u003e[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "catThese",
          "package": "these",
          "signature": "[These a b] -\u003e [(a, b)]",
          "source": "src/Data-These.html#catThese",
          "type": "function"
        },
        "index": {
          "description": "Select all These constructors from list",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "catThese",
          "normalized": "[These a b]-\u003e[(a,b)]",
          "package": "these",
          "partial": "These",
          "signature": "[These a b]-\u003e[(a,b)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThis\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "catThis",
          "package": "these",
          "signature": "[These a b] -\u003e [a]",
          "source": "src/Data-These.html#catThis",
          "type": "function"
        },
        "index": {
          "description": "Select all This constructors from list",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "catThis",
          "normalized": "[These a b]-\u003e[a]",
          "package": "these",
          "partial": "This",
          "signature": "[These a b]-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTakes two default values and produces a tuple.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "fromThese",
          "package": "these",
          "signature": "a -\u003e b -\u003e These a b -\u003e (a, b)",
          "source": "src/Data-These.html#fromThese",
          "type": "function"
        },
        "index": {
          "description": "Takes two default values and produces tuple",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "fromThese",
          "normalized": "a-\u003eb-\u003eThese a b-\u003e(a,b)",
          "package": "these",
          "partial": "These",
          "signature": "a-\u003eb-\u003eThese a b-\u003e(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:fromThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTraversal\u003c/code\u003e of the first half of a \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e, suitable for use with \u003ccode\u003eControl.Lens\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "here",
          "package": "these",
          "signature": "(a -\u003e f b) -\u003e These a t -\u003e f (These b t)",
          "source": "src/Data-These.html#here",
          "type": "function"
        },
        "index": {
          "description": "Traversal of the first half of These suitable for use with Control.Lens",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "here",
          "normalized": "(a-\u003eb c)-\u003eThese a d-\u003eb(These c d)",
          "package": "these",
          "signature": "(a-\u003ef b)-\u003eThese a t-\u003ef(These b t)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:here"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThat\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "isThat",
          "package": "these",
          "signature": "These a b -\u003e Bool",
          "source": "src/Data-These.html#isThat",
          "type": "function"
        },
        "index": {
          "description": "isThat isJust justThat",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "isThat",
          "normalized": "These a b-\u003eBool",
          "package": "these",
          "partial": "That",
          "signature": "These a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThese\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThese\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "isThese",
          "package": "these",
          "signature": "These a b -\u003e Bool",
          "source": "src/Data-These.html#isThese",
          "type": "function"
        },
        "index": {
          "description": "isThese isJust justThese",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "isThese",
          "normalized": "These a b-\u003eBool",
          "package": "these",
          "partial": "These",
          "signature": "These a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThis\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThis\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "isThis",
          "package": "these",
          "signature": "These a b -\u003e Bool",
          "source": "src/Data-These.html#isThis",
          "type": "function"
        },
        "index": {
          "description": "isThis isJust justThis",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "isThis",
          "normalized": "These a b-\u003eBool",
          "package": "these",
          "partial": "This",
          "signature": "These a b-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThat\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_That\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "justThat",
          "package": "these",
          "signature": "These a b -\u003e Maybe b",
          "source": "src/Data-These.html#justThat",
          "type": "function"
        },
        "index": {
          "description": "justThat preview That",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "justThat",
          "normalized": "These a b-\u003eMaybe b",
          "package": "these",
          "partial": "That",
          "signature": "These a b-\u003eMaybe b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThese\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_These\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "justThese",
          "package": "these",
          "signature": "These a b -\u003e Maybe (a, b)",
          "source": "src/Data-These.html#justThese",
          "type": "function"
        },
        "index": {
          "description": "justThese preview These",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "justThese",
          "normalized": "These a b-\u003eMaybe(a,b)",
          "package": "these",
          "partial": "These",
          "signature": "These a b-\u003eMaybe(a,b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThis\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_This\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "justThis",
          "package": "these",
          "signature": "These a b -\u003e Maybe a",
          "source": "src/Data-These.html#justThis",
          "type": "function"
        },
        "index": {
          "description": "justThis preview This",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "justThis",
          "normalized": "These a b-\u003eMaybe a",
          "package": "these",
          "partial": "This",
          "signature": "These a b-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003emapThat\u003c/a\u003e\u003c/code\u003e = over \u003ccode\u003e\u003ca\u003ethere\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "mapThat",
          "package": "these",
          "signature": "(b -\u003e d) -\u003e These a b -\u003e These a d",
          "source": "src/Data-These.html#mapThat",
          "type": "function"
        },
        "index": {
          "description": "mapThat over there",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "mapThat",
          "normalized": "(a-\u003eb)-\u003eThese c a-\u003eThese c b",
          "package": "these",
          "partial": "That",
          "signature": "(b-\u003ed)-\u003eThese a b-\u003eThese a d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "mapThese",
          "package": "these",
          "signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e These a b -\u003e These c d",
          "source": "src/Data-These.html#mapThese",
          "type": "function"
        },
        "index": {
          "description": "Bifunctor map",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "mapThese",
          "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eThese a c-\u003eThese b d",
          "package": "these",
          "partial": "These",
          "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eThese a b-\u003eThese c d",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003emapThis\u003c/a\u003e\u003c/code\u003e = over \u003ccode\u003e\u003ca\u003ehere\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
          "module": "Data.These",
          "name": "mapThis",
          "package": "these",
          "signature": "(a -\u003e c) -\u003e These a b -\u003e These c b",
          "source": "src/Data-These.html#mapThis",
          "type": "function"
        },
        "index": {
          "description": "mapThis over here",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "mapThis",
          "normalized": "(a-\u003eb)-\u003eThese a c-\u003eThese b c",
          "package": "these",
          "partial": "This",
          "signature": "(a-\u003ec)-\u003eThese a b-\u003eThese c b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoalesce with the provided operation.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "mergeThese",
          "package": "these",
          "signature": "(a -\u003e a -\u003e a) -\u003e These a a -\u003e a",
          "source": "src/Data-These.html#mergeThese",
          "type": "function"
        },
        "index": {
          "description": "Coalesce with the provided operation",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "mergeThese",
          "normalized": "(a-\u003ea-\u003ea)-\u003eThese a a-\u003ea",
          "package": "these",
          "partial": "These",
          "signature": "(a-\u003ea-\u003ea)-\u003eThese a a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mergeThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSelect each constructor and partition them into separate lists.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "partitionThese",
          "package": "these",
          "signature": "[These a b] -\u003e ([(a, b)], ([a], [b]))",
          "source": "src/Data-These.html#partitionThese",
          "type": "function"
        },
        "index": {
          "description": "Select each constructor and partition them into separate lists",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "partitionThese",
          "normalized": "[These a b]-\u003e([(a,b)],([a],[b]))",
          "package": "these",
          "partial": "These",
          "signature": "[These a b]-\u003e([(a,b)],([a],[b]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:partitionThese"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA \u003ccode\u003eTraversal\u003c/code\u003e of the second half of a \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e, suitable for use with \u003ccode\u003eControl.Lens\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "there",
          "package": "these",
          "signature": "(a -\u003e f b) -\u003e These t a -\u003e f (These t b)",
          "source": "src/Data-These.html#there",
          "type": "function"
        },
        "index": {
          "description": "Traversal of the second half of These suitable for use with Control.Lens",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "there",
          "normalized": "(a-\u003eb c)-\u003eThese d a-\u003eb(These d c)",
          "package": "these",
          "signature": "(a-\u003ef b)-\u003eThese t a-\u003ef(These t b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:there"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
          "module": "Data.These",
          "name": "these",
          "package": "these",
          "signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e c) -\u003e These a b -\u003e c",
          "source": "src/Data-These.html#these",
          "type": "function"
        },
        "index": {
          "description": "Case analysis for the These type",
          "hierarchy": "Data These",
          "module": "Data.These",
          "name": "these",
          "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003eThese a c-\u003eb",
          "package": "these",
          "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003eThese a b-\u003ec",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:these"
      }
    }
  ]
]