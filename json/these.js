[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHybrid error/writer monad class that allows both accumulating outputs and \n aborting computation with a final output.\n\u003c/p\u003e\u003cp\u003eThe expected use case is for computations with a notion of fatal vs. \n non-fatal errors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Chronicle-Class.html",
        "fct-type": "module",
        "title": "Class"
      },
      "index": {
        "description": "Hybrid error writer monad class that allows both accumulating outputs and aborting computation with final output The expected use case is for computations with notion of fatal vs non-fatal errors",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "Class",
        "normalized": "",
        "package": "these",
        "partial": "Class",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#t:ChronicleT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "newtype",
        "title": "ChronicleT"
      },
      "index": {
        "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#t:MonadChronicle",
      "description": {
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#MonadChronicle",
        "fct-type": "class",
        "title": "MonadChronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "MonadChronicle",
        "normalized": "",
        "package": "these",
        "partial": "Monad Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:ChronicleT",
      "description": {
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "ChronicleT",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "ChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:absolve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#absolve",
        "fct-type": "method",
        "title": "absolve"
      },
      "index": {
        "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "absolve",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "these",
        "partial": "",
        "signature": "a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:chronicle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003echronicle\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e lifts a plain 'These c a' value into a \u003ccode\u003e\u003ca\u003eMonadChronicle\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "These c a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#chronicle",
        "fct-type": "method",
        "title": "chronicle"
      },
      "index": {
        "description": "chronicle lifts plain These value into MonadChronicle instance",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "chronicle",
        "normalized": "These a b-\u003ec b",
        "package": "these",
        "partial": "",
        "signature": "These c a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:condemn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#condemn",
        "fct-type": "method",
        "title": "condemn"
      },
      "index": {
        "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "condemn",
        "normalized": "a b-\u003ea b",
        "package": "these",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:confess",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "c -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#confess",
        "fct-type": "method",
        "title": "confess"
      },
      "index": {
        "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "confess",
        "normalized": "a-\u003eb c",
        "package": "these",
        "partial": "",
        "signature": "c-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:dictate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#dictate",
        "fct-type": "method",
        "title": "dictate"
      },
      "index": {
        "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "dictate",
        "normalized": "a-\u003eb()",
        "package": "these",
        "partial": "",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:memento",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "m a -\u003e m (Either c a)",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#memento",
        "fct-type": "method",
        "title": "memento"
      },
      "index": {
        "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "memento",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "these",
        "partial": "",
        "signature": "m a-\u003em(Either c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:retcon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "(c -\u003e c) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#retcon",
        "fct-type": "method",
        "title": "retcon"
      },
      "index": {
        "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "retcon",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "these",
        "partial": "",
        "signature": "(c-\u003ec)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicle",
      "description": {
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "Chronicle c a -\u003e These c a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#runChronicle",
        "fct-type": "function",
        "title": "runChronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "runChronicle",
        "normalized": "Chronicle a b-\u003eThese a b",
        "package": "these",
        "partial": "Chronicle",
        "signature": "Chronicle c a-\u003eThese c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle-Class.html#v:runChronicleT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Chronicle.Class",
        "fct-package": "these",
        "fct-signature": "m (These c a)",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "runChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle Class",
        "module": "Control.Monad.Chronicle.Class",
        "name": "runChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#",
      "description": {
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Chronicle.html",
        "fct-type": "module",
        "title": "Chronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "Chronicle",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:Chronicle",
      "description": {
        "fct-descr": "\u003cp\u003eA chronicle monad parameterized by the output type \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#Chronicle",
        "fct-type": "type",
        "title": "Chronicle"
      },
      "index": {
        "description": "chronicle monad parameterized by the output type The return function produces computation with no output and combines multiple outputs with mappend",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "Chronicle",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:ChronicleT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "newtype",
        "title": "ChronicleT"
      },
      "index": {
        "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#t:MonadChronicle",
      "description": {
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#MonadChronicle",
        "fct-type": "class",
        "title": "MonadChronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "MonadChronicle",
        "normalized": "",
        "package": "these",
        "partial": "Monad Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:ChronicleT",
      "description": {
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "ChronicleT",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "ChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:absolve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#absolve",
        "fct-type": "method",
        "title": "absolve"
      },
      "index": {
        "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "absolve",
        "normalized": "a-\u003eb a-\u003eb a",
        "package": "these",
        "partial": "",
        "signature": "a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:chronicle",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003echronicle\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e lifts a plain 'These c a' value into a \u003ccode\u003e\u003ca\u003eMonadChronicle\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "These c a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#chronicle",
        "fct-type": "method",
        "title": "chronicle"
      },
      "index": {
        "description": "chronicle lifts plain These value into MonadChronicle instance",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "chronicle",
        "normalized": "These a b-\u003ec b",
        "package": "these",
        "partial": "",
        "signature": "These c a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:condemn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#condemn",
        "fct-type": "method",
        "title": "condemn"
      },
      "index": {
        "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "condemn",
        "normalized": "a b-\u003ea b",
        "package": "these",
        "partial": "",
        "signature": "m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:confess",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "c -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#confess",
        "fct-type": "method",
        "title": "confess"
      },
      "index": {
        "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "confess",
        "normalized": "a-\u003eb c",
        "package": "these",
        "partial": "",
        "signature": "c-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:dictate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "c -\u003e m ()",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#dictate",
        "fct-type": "method",
        "title": "dictate"
      },
      "index": {
        "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "dictate",
        "normalized": "a-\u003eb()",
        "package": "these",
        "partial": "",
        "signature": "c-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:memento",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "m a -\u003e m (Either c a)",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#memento",
        "fct-type": "method",
        "title": "memento"
      },
      "index": {
        "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "memento",
        "normalized": "a b-\u003ea(Either c b)",
        "package": "these",
        "partial": "",
        "signature": "m a-\u003em(Either c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:retcon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eWriter\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "(c -\u003e c) -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Monad-Chronicle-Class.html#retcon",
        "fct-type": "method",
        "title": "retcon"
      },
      "index": {
        "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "retcon",
        "normalized": "(a-\u003ea)-\u003eb c-\u003eb c",
        "package": "these",
        "partial": "",
        "signature": "(c-\u003ec)-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:runChronicle",
      "description": {
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "Chronicle c a -\u003e These c a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#runChronicle",
        "fct-type": "function",
        "title": "runChronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "runChronicle",
        "normalized": "Chronicle a b-\u003eThese a b",
        "package": "these",
        "partial": "Chronicle",
        "signature": "Chronicle c a-\u003eThese c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Chronicle.html#v:runChronicleT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Chronicle",
        "fct-package": "these",
        "fct-signature": "m (These c a)",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "runChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Chronicle",
        "module": "Control.Monad.Chronicle",
        "name": "runChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad, a hybrid error/writer monad that allows\n both accumulating outputs and aborting computation with a final\n output.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "module",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html",
        "fct-type": "module",
        "title": "Chronicle"
      },
      "index": {
        "description": "The ChronicleT monad hybrid error writer monad that allows both accumulating outputs and aborting computation with final output",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "Chronicle",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#t:Chronicle",
      "description": {
        "fct-descr": "\u003cp\u003eA chronicle monad parameterized by the output type \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "type",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#Chronicle",
        "fct-type": "type",
        "title": "Chronicle"
      },
      "index": {
        "description": "chronicle monad parameterized by the output type The return function produces computation with no output and combines multiple outputs with mappend",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "Chronicle",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#t:ChronicleT",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eChronicleT\u003c/a\u003e\u003c/code\u003e monad transformer.\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e function produces a computation with no output, and \u003ccode\u003e\u003ca\u003e\u003e\u003e=\u003c/a\u003e\u003c/code\u003e\n   combines multiple outputs with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "newtype",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "newtype",
        "title": "ChronicleT"
      },
      "index": {
        "description": "The ChronicleT monad transformer The return function produces computation with no output and combines multiple outputs with mappend",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:ChronicleT",
      "description": {
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "ChronicleT",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "ChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "ChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:absolve",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eabsolve\u003c/a\u003e\u003c/code\u003e x m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and discards any\n   record it had. The default value \u003ccode\u003ex\u003c/code\u003e will be used if \u003ccode\u003em\u003c/code\u003e ended via \n   \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "a -\u003e ChronicleT c m a -\u003e ChronicleT c m a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#absolve",
        "fct-type": "function",
        "title": "absolve"
      },
      "index": {
        "description": "absolve is an action that executes the action and discards any record it had The default value will be used if ended via confess",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "absolve",
        "normalized": "a-\u003eChronicleT b c a-\u003eChronicleT b c a",
        "package": "these",
        "partial": "",
        "signature": "a-\u003eChronicleT c m a-\u003eChronicleT c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:chronicle",
      "description": {
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "These c a -\u003e Chronicle c a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#chronicle",
        "fct-type": "function",
        "title": "chronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "chronicle",
        "normalized": "These a b-\u003eChronicle a b",
        "package": "these",
        "partial": "",
        "signature": "These c a-\u003eChronicle c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:condemn",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econdemn\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and keeps its value\n   only if it had no record. Otherwise, the value (if any) will be discarded\n   and only the record kept.\n\u003c/p\u003e\u003cp\u003eThis can be seen as converting non-fatal errors into fatal ones.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "ChronicleT c m a -\u003e ChronicleT c m a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#condemn",
        "fct-type": "function",
        "title": "condemn"
      },
      "index": {
        "description": "condemn is an action that executes the action and keeps its value only if it had no record Otherwise the value if any will be discarded and only the record kept This can be seen as converting non-fatal errors into fatal ones",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "condemn",
        "normalized": "ChronicleT a b c-\u003eChronicleT a b c",
        "package": "these",
        "partial": "",
        "signature": "ChronicleT c m a-\u003eChronicleT c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:confess",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that ends with a final output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ethrowError\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "c -\u003e ChronicleT c m a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#confess",
        "fct-type": "function",
        "title": "confess"
      },
      "index": {
        "description": "confess is an action that ends with final output Equivalent to throwError for the Error monad",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "confess",
        "normalized": "a-\u003eChronicleT a b c",
        "package": "these",
        "partial": "",
        "signature": "c-\u003eChronicleT c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:dictate",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003edictate\u003c/a\u003e\u003c/code\u003e c\u003c/code\u003e is an action that records the output \u003ccode\u003ec\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003etell\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003eWriter\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "c -\u003e ChronicleT c m ()",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#dictate",
        "fct-type": "function",
        "title": "dictate"
      },
      "index": {
        "description": "dictate is an action that records the output Equivalent to tell for the Writer monad",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "dictate",
        "normalized": "a-\u003eChronicleT a b()",
        "package": "these",
        "partial": "",
        "signature": "c-\u003eChronicleT c m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:memento",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003ememento\u003c/a\u003e\u003c/code\u003e m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e, returning either\n   its record if it ended with \u003ccode\u003e\u003ca\u003econfess\u003c/a\u003e\u003c/code\u003e, or its final value otherwise, with\n   any record added to the current record.\n\u003c/p\u003e\u003cp\u003eSimilar to \u003ccode\u003e\u003ca\u003ecatchError\u003c/a\u003e\u003c/code\u003e in the \u003ccode\u003e\u003ca\u003eError\u003c/a\u003e\u003c/code\u003e monad, but with a notion of \n   non-fatal errors (which are accumulated) vs. fatal errors (which are caught\n   without accumulating).\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "ChronicleT c m a -\u003e ChronicleT c m (Either c a)",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#memento",
        "fct-type": "function",
        "title": "memento"
      },
      "index": {
        "description": "memento is an action that executes the action returning either its record if it ended with confess or its final value otherwise with any record added to the current record Similar to catchError in the Error monad but with notion of non-fatal errors which are accumulated vs fatal errors which are caught without accumulating",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "memento",
        "normalized": "ChronicleT a b c-\u003eChronicleT a b(Either a c)",
        "package": "these",
        "partial": "",
        "signature": "ChronicleT c m a-\u003eChronicleT c m(Either c a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:retcon",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ccode\u003e\u003ca\u003eretcon\u003c/a\u003e\u003c/code\u003e f m\u003c/code\u003e is an action that executes the action \u003ccode\u003em\u003c/code\u003e and applies the\n   function \u003ccode\u003ef\u003c/code\u003e to its output, leaving the return value unchanged.\n\u003c/p\u003e\u003cp\u003eEquivalent to \u003ccode\u003e\u003ca\u003ecensor\u003c/a\u003e\u003c/code\u003e for the \u003ccode\u003eWriter\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "(c -\u003e c) -\u003e ChronicleT c m a -\u003e ChronicleT c m a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#retcon",
        "fct-type": "function",
        "title": "retcon"
      },
      "index": {
        "description": "retcon is an action that executes the action and applies the function to its output leaving the return value unchanged Equivalent to censor for the Writer monad",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "retcon",
        "normalized": "(a-\u003ea)-\u003eChronicleT a b c-\u003eChronicleT a b c",
        "package": "these",
        "partial": "",
        "signature": "(c-\u003ec)-\u003eChronicleT c m a-\u003eChronicleT c m a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:runChronicle",
      "description": {
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "Chronicle c a -\u003e These c a",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#runChronicle",
        "fct-type": "function",
        "title": "runChronicle"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "runChronicle",
        "normalized": "Chronicle a b-\u003eThese a b",
        "package": "these",
        "partial": "Chronicle",
        "signature": "Chronicle c a-\u003eThese c a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Control-Monad-Trans-Chronicle.html#v:runChronicleT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Control.Monad.Trans.Chronicle",
        "fct-package": "these",
        "fct-signature": "m (These c a)",
        "fct-source": "src/Control-Monad-Trans-Chronicle.html#ChronicleT",
        "fct-type": "function",
        "title": "runChronicleT"
      },
      "index": {
        "description": "",
        "hierarchy": "Control Monad Trans Chronicle",
        "module": "Control.Monad.Trans.Chronicle",
        "name": "runChronicleT",
        "normalized": "",
        "package": "these",
        "partial": "Chronicle",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e-based zipping and unzipping of functors with non-uniform\n shapes, plus traversal of (bi)foldable (bi)functors through said\n functors.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "module",
        "fct-source": "src/Data-Align.html",
        "fct-type": "module",
        "title": "Align"
      },
      "index": {
        "description": "These based zipping and unzipping of functors with non-uniform shapes plus traversal of bi foldable bi functors through said functors",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "Align",
        "normalized": "",
        "package": "these",
        "partial": "Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Align",
      "description": {
        "fct-descr": "\u003cp\u003eFunctors supporting a zip operation that takes the union of\n   non-uniform shapes.\n\u003c/p\u003e\u003cp\u003eIf your functor is actually a functor from \u003ccode\u003eKleisli Maybe\u003c/code\u003e to\n   \u003ccode\u003eHask\u003c/code\u003e (so it supports \u003ccode\u003emaybeMap :: (a -\u003e Maybe b) -\u003e f a -\u003e f\n   b\u003c/code\u003e), then an \u003ccode\u003eAlign\u003c/code\u003e instance is making your functor lax monoidal\n   w.r.t. the cartesian monoidal structure on \u003ccode\u003eKleisli Maybe\u003c/code\u003e,\n   because \u003ccode\u003eThese\u003c/code\u003e is the cartesian product in that category \u003ccode\u003e(a -\u003e\n   Maybe (These b c) ~ (a -\u003e Maybe b, a -\u003e Maybe c))\u003c/code\u003e. This insight\n   is due to rwbarton.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003enil\u003c/code\u003e and either \u003ccode\u003ealign\u003c/code\u003e or \u003ccode\u003ealignWith\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n (`align` nil) = fmap This\n (nil `align`) = fmap That\n join align = fmap (join These)\n align (f \u003c$\u003e x) (g \u003c$\u003e y) = bimap f g \u003c$\u003e align x y\n alignWith f a b = f \u003c$\u003e align a b\n\u003c/pre\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Data-Align.html#Align",
        "fct-type": "class",
        "title": "Align"
      },
      "index": {
        "description": "Functors supporting zip operation that takes the union of non-uniform shapes If your functor is actually functor from Kleisli Maybe to Hask so it supports maybeMap Maybe then an Align instance is making your functor lax monoidal w.r.t the cartesian monoidal structure on Kleisli Maybe because These is the cartesian product in that category Maybe These Maybe Maybe This insight is due to rwbarton Minimal definition nil and either align or alignWith Laws align nil fmap This nil align fmap That join align fmap join These align bimap align alignWith align",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "Align",
        "normalized": "",
        "package": "these",
        "partial": "Align",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Bicrosswalk",
      "description": {
        "fct-descr": "\u003cp\u003eBifoldable bifunctors supporting traversal through an alignable\n   functor.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003ebicrosswalk\u003c/code\u003e or \u003ccode\u003ebisequenceL\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n bicrosswalk (const empty) (const empty) = const empty\n bicrosswalk f g = bisequenceL . bimap f g\n\u003c/pre\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Data-Align.html#Bicrosswalk",
        "fct-type": "class",
        "title": "Bicrosswalk"
      },
      "index": {
        "description": "Bifoldable bifunctors supporting traversal through an alignable functor Minimal definition bicrosswalk or bisequenceL Laws bicrosswalk const empty const empty const empty bicrosswalk bisequenceL bimap",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "Bicrosswalk",
        "normalized": "",
        "package": "these",
        "partial": "Bicrosswalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Crosswalk",
      "description": {
        "fct-descr": "\u003cp\u003eFoldable functors supporting traversal through an alignable\n   functor.\n\u003c/p\u003e\u003cp\u003eMinimal definition: \u003ccode\u003ecrosswalk\u003c/code\u003e or \u003ccode\u003esequenceL\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n crosswalk (const nil) = const nil\n crosswalk f = sequenceL . fmap f\n\u003c/pre\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Data-Align.html#Crosswalk",
        "fct-type": "class",
        "title": "Crosswalk"
      },
      "index": {
        "description": "Foldable functors supporting traversal through an alignable functor Minimal definition crosswalk or sequenceL Laws crosswalk const nil const nil crosswalk sequenceL fmap",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "Crosswalk",
        "normalized": "",
        "package": "these",
        "partial": "Crosswalk",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#t:Unalign",
      "description": {
        "fct-descr": "\u003cp\u003eAlignable functors supporting an \"inverse\" to \u003ccode\u003e\u003ca\u003ealign\u003c/a\u003e\u003c/code\u003e: splitting\n   a union shape into its component parts.\n\u003c/p\u003e\u003cp\u003eMinimal definition: nothing; a default definition is provided,\n   but it may not have the desired definition for all functors. See\n   the source for more information.\n\u003c/p\u003e\u003cp\u003eLaws:\n\u003c/p\u003e\u003cpre\u003e\n unalign nil                 = (nil,           nil)\n unalign (This        \u003c$\u003e x) = (Just    \u003c$\u003e x, Nothing \u003c$  x)\n unalign (That        \u003c$\u003e y) = (Nothing \u003c$  y, Just    \u003c$\u003e y)\n unalign (join These  \u003c$\u003e x) = (Just    \u003c$\u003e x, Just    \u003c$\u003e x)\n unalign ((x `These`) \u003c$\u003e y) = (Just x  \u003c$  y, Just    \u003c$\u003e y)\n unalign ((`These` y) \u003c$\u003e x) = (Just    \u003c$\u003e x, Just y  \u003c$  x)\n\u003c/pre\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "class",
        "fct-source": "src/Data-Align.html#Unalign",
        "fct-type": "class",
        "title": "Unalign"
      },
      "index": {
        "description": "Alignable functors supporting an inverse to align splitting union shape into its component parts Minimal definition nothing default definition is provided but it may not have the desired definition for all functors See the source for more information Laws unalign nil nil nil unalign This Just Nothing unalign That Nothing Just unalign join These Just Just unalign These Just Just unalign These Just Just",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "Unalign",
        "normalized": "",
        "package": "these",
        "partial": "Unalign",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:align",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "f a -\u003e f b -\u003e f (These a b)",
        "fct-source": "src/Data-Align.html#align",
        "fct-type": "method",
        "title": "align"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "align",
        "normalized": "a b-\u003ea c-\u003ea(These b c)",
        "package": "these",
        "partial": "",
        "signature": "f a-\u003ef b-\u003ef(These a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:alignVectorWith",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(These a b -\u003e c) -\u003e v a -\u003e v b -\u003e v c",
        "fct-source": "src/Data-Align.html#alignVectorWith",
        "fct-type": "function",
        "title": "alignVectorWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "alignVectorWith",
        "normalized": "(These a b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "these",
        "partial": "Vector With",
        "signature": "(These a b-\u003ec)-\u003ev a-\u003ev b-\u003ev c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:alignWith",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(These a b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Align.html#alignWith",
        "fct-type": "method",
        "title": "alignWith"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "alignWith",
        "normalized": "(These a b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "these",
        "partial": "With",
        "signature": "(These a b-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:bicrosswalk",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(a -\u003e f c) -\u003e (b -\u003e f d) -\u003e t a b -\u003e f (t c d)",
        "fct-source": "src/Data-Align.html#bicrosswalk",
        "fct-type": "method",
        "title": "bicrosswalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "bicrosswalk",
        "normalized": "(a-\u003eb c)-\u003e(d-\u003eb e)-\u003ef a d-\u003eb(f c e)",
        "package": "these",
        "partial": "",
        "signature": "(a-\u003ef c)-\u003e(b-\u003ef d)-\u003et a b-\u003ef(t c d)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:bisequenceL",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "t (f a) (f b) -\u003e f (t a b)",
        "fct-source": "src/Data-Align.html#bisequenceL",
        "fct-type": "method",
        "title": "bisequenceL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "bisequenceL",
        "normalized": "a(b c)(b d)-\u003eb(a c d)",
        "package": "these",
        "partial": "",
        "signature": "t(f a)(f b)-\u003ef(t a b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:crosswalk",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(a -\u003e f b) -\u003e t a -\u003e f (t b)",
        "fct-source": "src/Data-Align.html#crosswalk",
        "fct-type": "method",
        "title": "crosswalk"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "crosswalk",
        "normalized": "(a-\u003eb c)-\u003ed a-\u003eb(d c)",
        "package": "these",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003et a-\u003ef(t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:lpadZip",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-padded \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "[a] -\u003e [b] -\u003e [(Maybe a, b)]",
        "fct-source": "src/Data-Align.html#lpadZip",
        "fct-type": "function",
        "title": "lpadZip"
      },
      "index": {
        "description": "Left-padded zip",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "lpadZip",
        "normalized": "[a]-\u003e[b]-\u003e[(Maybe a,b)]",
        "package": "these",
        "partial": "Zip",
        "signature": "[a]-\u003e[b]-\u003e[(Maybe a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:lpadZipWith",
      "description": {
        "fct-descr": "\u003cp\u003eLeft-padded \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(Maybe a -\u003e b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Data-Align.html#lpadZipWith",
        "fct-type": "function",
        "title": "lpadZipWith"
      },
      "index": {
        "description": "Left-padded zipWith",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "lpadZipWith",
        "normalized": "(Maybe a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "these",
        "partial": "Zip With",
        "signature": "(Maybe a-\u003eb-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:malign",
      "description": {
        "fct-descr": "\u003cp\u003eAlign two structures and combine with \u003ccode\u003e\u003ca\u003emappend\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "f a -\u003e f a -\u003e f a",
        "fct-source": "src/Data-Align.html#malign",
        "fct-type": "function",
        "title": "malign"
      },
      "index": {
        "description": "Align two structures and combine with mappend",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "malign",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "these",
        "partial": "",
        "signature": "f a-\u003ef a-\u003ef a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:nil",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "f a",
        "fct-source": "src/Data-Align.html#nil",
        "fct-type": "method",
        "title": "nil"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "nil",
        "normalized": "",
        "package": "these",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:padZip",
      "description": {
        "fct-descr": "\u003cp\u003eAlign two structures as in \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e, but filling in blanks with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "f a -\u003e f b -\u003e f (Maybe a, Maybe b)",
        "fct-source": "src/Data-Align.html#padZip",
        "fct-type": "function",
        "title": "padZip"
      },
      "index": {
        "description": "Align two structures as in zip but filling in blanks with Nothing",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "padZip",
        "normalized": "a b-\u003ea c-\u003ea(Maybe b,Maybe c)",
        "package": "these",
        "partial": "Zip",
        "signature": "f a-\u003ef b-\u003ef(Maybe a,Maybe b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:padZipWith",
      "description": {
        "fct-descr": "\u003cp\u003eAlign two structures as in \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e, but filling in blanks with \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(Maybe a -\u003e Maybe b -\u003e c) -\u003e f a -\u003e f b -\u003e f c",
        "fct-source": "src/Data-Align.html#padZipWith",
        "fct-type": "function",
        "title": "padZipWith"
      },
      "index": {
        "description": "Align two structures as in zipWith but filling in blanks with Nothing",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "padZipWith",
        "normalized": "(Maybe a-\u003eMaybe b-\u003ec)-\u003ed a-\u003ed b-\u003ed c",
        "package": "these",
        "partial": "Zip With",
        "signature": "(Maybe a-\u003eMaybe b-\u003ec)-\u003ef a-\u003ef b-\u003ef c"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:rpadZip",
      "description": {
        "fct-descr": "\u003cp\u003eRight-padded \u003ccode\u003e\u003ca\u003ezip\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "[a] -\u003e [b] -\u003e [(a, Maybe b)]",
        "fct-source": "src/Data-Align.html#rpadZip",
        "fct-type": "function",
        "title": "rpadZip"
      },
      "index": {
        "description": "Right-padded zip",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "rpadZip",
        "normalized": "[a]-\u003e[b]-\u003e[(a,Maybe b)]",
        "package": "these",
        "partial": "Zip",
        "signature": "[a]-\u003e[b]-\u003e[(a,Maybe b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:rpadZipWith",
      "description": {
        "fct-descr": "\u003cp\u003eRight-padded \u003ccode\u003e\u003ca\u003ezipWith\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "(a -\u003e Maybe b -\u003e c) -\u003e [a] -\u003e [b] -\u003e [c]",
        "fct-source": "src/Data-Align.html#rpadZipWith",
        "fct-type": "function",
        "title": "rpadZipWith"
      },
      "index": {
        "description": "Right-padded zipWith",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "rpadZipWith",
        "normalized": "(a-\u003eMaybe b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]",
        "package": "these",
        "partial": "Zip With",
        "signature": "(a-\u003eMaybe b-\u003ec)-\u003e[a]-\u003e[b]-\u003e[c]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:sequenceL",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "t (f a) -\u003e f (t a)",
        "fct-source": "src/Data-Align.html#sequenceL",
        "fct-type": "method",
        "title": "sequenceL"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "sequenceL",
        "normalized": "a(b c)-\u003eb(a c)",
        "package": "these",
        "partial": "",
        "signature": "t(f a)-\u003ef(t a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-Align.html#v:unalign",
      "description": {
        "fct-module": "Data.Align",
        "fct-package": "these",
        "fct-signature": "f (These a b) -\u003e (f (Maybe a), f (Maybe b))",
        "fct-source": "src/Data-Align.html#unalign",
        "fct-type": "method",
        "title": "unalign"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Align",
        "module": "Data.Align",
        "name": "unalign",
        "normalized": "a(These b c)-\u003e(a(Maybe b),a(Maybe c))",
        "package": "these",
        "partial": "",
        "signature": "f(These a b)-\u003e(f(Maybe a),f(Maybe b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type and associated operations. Now enhanced with \u003ccode\u003eControl.Lens\u003c/code\u003e magic!\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "module",
        "fct-source": "src/Data-These.html",
        "fct-type": "module",
        "title": "These"
      },
      "index": {
        "description": "The These type and associated operations Now enhanced with Control.Lens magic",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "These",
        "normalized": "",
        "package": "these",
        "partial": "These",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#t:These",
      "description": {
        "fct-descr": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type represents values with two non-exclusive possibilities.\n\u003c/p\u003e\u003cp\u003eThis can be useful to represent combinations of two values, where the \n   combination is defined if either input is. Algebraically, the type \n   \u003ccode\u003eThese A B\u003c/code\u003e represents \u003ccode\u003e(A + B + AB)\u003c/code\u003e, which doesn't factor easily into\n   sums and products--a type like \u003ccode\u003eEither A (B, Maybe A)\u003c/code\u003e is unclear and\n   awkward to use.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e has straightforward instances of \u003ccode\u003e\u003ca\u003eFunctor\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003eMonad\u003c/a\u003e\u003c/code\u003e, &c., and \n   behaves like a hybrid error/writer monad, as would be expected.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "data",
        "fct-source": "src/Data-These.html#These",
        "fct-type": "data",
        "title": "These"
      },
      "index": {
        "description": "The These type represents values with two non-exclusive possibilities This can be useful to represent combinations of two values where the combination is defined if either input is Algebraically the type These represents AB which doesn factor easily into sums and products--a type like Either Maybe is unclear and awkward to use These has straightforward instances of Functor Monad and behaves like hybrid error writer monad as would be expected",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "These",
        "normalized": "",
        "package": "these",
        "partial": "These",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:That",
      "description": {
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "That b",
        "fct-source": "src/Data-These.html#These",
        "fct-type": "function",
        "title": "That"
      },
      "index": {
        "description": "",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "That",
        "normalized": "",
        "package": "these",
        "partial": "That",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:These",
      "description": {
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b",
        "fct-source": "src/Data-These.html#These",
        "fct-type": "function",
        "title": "These"
      },
      "index": {
        "description": "",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "These",
        "normalized": "",
        "package": "these",
        "partial": "These",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:This",
      "description": {
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "This a",
        "fct-source": "src/Data-These.html#These",
        "fct-type": "function",
        "title": "This"
      },
      "index": {
        "description": "",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "This",
        "normalized": "",
        "package": "these",
        "partial": "This",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_That",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThat\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "p b (f b) -\u003e p (These a b) (f (These a b))",
        "fct-source": "src/Data-These.html#_That",
        "fct-type": "function",
        "title": "_That"
      },
      "index": {
        "description": "Prism selecting the That constructor",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "_That",
        "normalized": "a b(c b)-\u003ea(These d b)(c(These d b))",
        "package": "these",
        "partial": "That",
        "signature": "p b(f b)-\u003ep(These a b)(f(These a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_These",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e constructor. \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e names are ridiculous!\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "p (a, b) (f (a, b)) -\u003e p (These a b) (f (These a b))",
        "fct-source": "src/Data-These.html#_These",
        "fct-type": "function",
        "title": "_These"
      },
      "index": {
        "description": "Prism selecting the These constructor These names are ridiculous",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "_These",
        "normalized": "a(b,c)(d(b,c))-\u003ea(These b c)(d(These b c))",
        "package": "these",
        "partial": "These",
        "signature": "p(a,b)(f(a,b))-\u003ep(These a b)(f(These a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:_This",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003ePrism\u003c/code\u003e selecting the \u003ccode\u003e\u003ca\u003eThis\u003c/a\u003e\u003c/code\u003e constructor.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "p a (f a) -\u003e p (These a b) (f (These a b))",
        "fct-source": "src/Data-These.html#_This",
        "fct-type": "function",
        "title": "_This"
      },
      "index": {
        "description": "Prism selecting the This constructor",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "_This",
        "normalized": "a b(c b)-\u003ea(These b d)(c(These b d))",
        "package": "these",
        "partial": "This",
        "signature": "p a(f a)-\u003ep(These a b)(f(These a b))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThat",
      "description": {
        "fct-descr": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThat\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "[These a b] -\u003e [b]",
        "fct-source": "src/Data-These.html#catThat",
        "fct-type": "function",
        "title": "catThat"
      },
      "index": {
        "description": "Select all That constructors from list",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "catThat",
        "normalized": "[These a b]-\u003e[b]",
        "package": "these",
        "partial": "That",
        "signature": "[These a b]-\u003e[b]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThese",
      "description": {
        "fct-descr": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "[These a b] -\u003e [(a, b)]",
        "fct-source": "src/Data-These.html#catThese",
        "fct-type": "function",
        "title": "catThese"
      },
      "index": {
        "description": "Select all These constructors from list",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "catThese",
        "normalized": "[These a b]-\u003e[(a,b)]",
        "package": "these",
        "partial": "These",
        "signature": "[These a b]-\u003e[(a,b)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:catThis",
      "description": {
        "fct-descr": "\u003cp\u003eSelect all \u003ccode\u003e\u003ca\u003eThis\u003c/a\u003e\u003c/code\u003e constructors from a list.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "[These a b] -\u003e [a]",
        "fct-source": "src/Data-These.html#catThis",
        "fct-type": "function",
        "title": "catThis"
      },
      "index": {
        "description": "Select all This constructors from list",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "catThis",
        "normalized": "[These a b]-\u003e[a]",
        "package": "these",
        "partial": "This",
        "signature": "[These a b]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:fromThese",
      "description": {
        "fct-descr": "\u003cp\u003eTakes two default values and produces a tuple.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "a -\u003e b -\u003e These a b -\u003e (a, b)",
        "fct-source": "src/Data-These.html#fromThese",
        "fct-type": "function",
        "title": "fromThese"
      },
      "index": {
        "description": "Takes two default values and produces tuple",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "fromThese",
        "normalized": "a-\u003eb-\u003eThese a b-\u003e(a,b)",
        "package": "these",
        "partial": "These",
        "signature": "a-\u003eb-\u003eThese a b-\u003e(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:here",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eTraversal\u003c/code\u003e of the first half of a \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e, suitable for use with \u003ccode\u003eControl.Lens\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e f b) -\u003e These a t -\u003e f (These b t)",
        "fct-source": "src/Data-These.html#here",
        "fct-type": "function",
        "title": "here"
      },
      "index": {
        "description": "Traversal of the first half of These suitable for use with Control.Lens",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "here",
        "normalized": "(a-\u003eb c)-\u003eThese a d-\u003eb(These c d)",
        "package": "these",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eThese a t-\u003ef(These b t)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThat",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThat\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThat\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Bool",
        "fct-source": "src/Data-These.html#isThat",
        "fct-type": "function",
        "title": "isThat"
      },
      "index": {
        "description": "isThat isJust justThat",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "isThat",
        "normalized": "These a b-\u003eBool",
        "package": "these",
        "partial": "That",
        "signature": "These a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThese",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThese\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThese\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Bool",
        "fct-source": "src/Data-These.html#isThese",
        "fct-type": "function",
        "title": "isThese"
      },
      "index": {
        "description": "isThese isJust justThese",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "isThese",
        "normalized": "These a b-\u003eBool",
        "package": "these",
        "partial": "These",
        "signature": "These a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:isThis",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003eisThis\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003eisJust\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ejustThis\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Bool",
        "fct-source": "src/Data-These.html#isThis",
        "fct-type": "function",
        "title": "isThis"
      },
      "index": {
        "description": "isThis isJust justThis",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "isThis",
        "normalized": "These a b-\u003eBool",
        "package": "these",
        "partial": "This",
        "signature": "These a b-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThat",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThat\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_That\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Maybe b",
        "fct-source": "src/Data-These.html#justThat",
        "fct-type": "function",
        "title": "justThat"
      },
      "index": {
        "description": "justThat preview That",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "justThat",
        "normalized": "These a b-\u003eMaybe b",
        "package": "these",
        "partial": "That",
        "signature": "These a b-\u003eMaybe b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThese",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThese\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_These\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Maybe (a, b)",
        "fct-source": "src/Data-These.html#justThese",
        "fct-type": "function",
        "title": "justThese"
      },
      "index": {
        "description": "justThese preview These",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "justThese",
        "normalized": "These a b-\u003eMaybe(a,b)",
        "package": "these",
        "partial": "These",
        "signature": "These a b-\u003eMaybe(a,b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:justThis",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003ejustThis\u003c/a\u003e\u003c/code\u003e = preview \u003ccode\u003e\u003ca\u003e_This\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "These a b -\u003e Maybe a",
        "fct-source": "src/Data-These.html#justThis",
        "fct-type": "function",
        "title": "justThis"
      },
      "index": {
        "description": "justThis preview This",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "justThis",
        "normalized": "These a b-\u003eMaybe a",
        "package": "these",
        "partial": "This",
        "signature": "These a b-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThat",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003emapThat\u003c/a\u003e\u003c/code\u003e = over \u003ccode\u003e\u003ca\u003ethere\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(b -\u003e d) -\u003e These a b -\u003e These a d",
        "fct-source": "src/Data-These.html#mapThat",
        "fct-type": "function",
        "title": "mapThat"
      },
      "index": {
        "description": "mapThat over there",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "mapThat",
        "normalized": "(a-\u003eb)-\u003eThese c a-\u003eThese c b",
        "package": "these",
        "partial": "That",
        "signature": "(b-\u003ed)-\u003eThese a b-\u003eThese a d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThese",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eBifunctor\u003c/a\u003e\u003c/code\u003e map.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e d) -\u003e These a b -\u003e These c d",
        "fct-source": "src/Data-These.html#mapThese",
        "fct-type": "function",
        "title": "mapThese"
      },
      "index": {
        "description": "Bifunctor map",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "mapThese",
        "normalized": "(a-\u003eb)-\u003e(c-\u003ed)-\u003eThese a c-\u003eThese b d",
        "package": "these",
        "partial": "These",
        "signature": "(a-\u003ec)-\u003e(b-\u003ed)-\u003eThese a b-\u003eThese c d"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mapThis",
      "description": {
        "fct-descr": "\u003cpre\u003e\u003ccode\u003e\u003ca\u003emapThis\u003c/a\u003e\u003c/code\u003e = over \u003ccode\u003e\u003ca\u003ehere\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e c) -\u003e These a b -\u003e These c b",
        "fct-source": "src/Data-These.html#mapThis",
        "fct-type": "function",
        "title": "mapThis"
      },
      "index": {
        "description": "mapThis over here",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "mapThis",
        "normalized": "(a-\u003eb)-\u003eThese a c-\u003eThese b c",
        "package": "these",
        "partial": "This",
        "signature": "(a-\u003ec)-\u003eThese a b-\u003eThese c b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:mergeThese",
      "description": {
        "fct-descr": "\u003cp\u003eCoalesce with the provided operation.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e a -\u003e a) -\u003e These a a -\u003e a",
        "fct-source": "src/Data-These.html#mergeThese",
        "fct-type": "function",
        "title": "mergeThese"
      },
      "index": {
        "description": "Coalesce with the provided operation",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "mergeThese",
        "normalized": "(a-\u003ea-\u003ea)-\u003eThese a a-\u003ea",
        "package": "these",
        "partial": "These",
        "signature": "(a-\u003ea-\u003ea)-\u003eThese a a-\u003ea"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:partitionThese",
      "description": {
        "fct-descr": "\u003cp\u003eSelect each constructor and partition them into separate lists.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "[These a b] -\u003e ([(a, b)], ([a], [b]))",
        "fct-source": "src/Data-These.html#partitionThese",
        "fct-type": "function",
        "title": "partitionThese"
      },
      "index": {
        "description": "Select each constructor and partition them into separate lists",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "partitionThese",
        "normalized": "[These a b]-\u003e([(a,b)],([a],[b]))",
        "package": "these",
        "partial": "These",
        "signature": "[These a b]-\u003e([(a,b)],([a],[b]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:there",
      "description": {
        "fct-descr": "\u003cp\u003eA \u003ccode\u003eTraversal\u003c/code\u003e of the second half of a \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e, suitable for use with \u003ccode\u003eControl.Lens\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e f b) -\u003e These t a -\u003e f (These t b)",
        "fct-source": "src/Data-These.html#there",
        "fct-type": "function",
        "title": "there"
      },
      "index": {
        "description": "Traversal of the second half of These suitable for use with Control.Lens",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "there",
        "normalized": "(a-\u003eb c)-\u003eThese d a-\u003eb(These d c)",
        "package": "these",
        "partial": "",
        "signature": "(a-\u003ef b)-\u003eThese t a-\u003ef(These t b)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/these/docs/Data-These.html#v:these",
      "description": {
        "fct-descr": "\u003cp\u003eCase analysis for the \u003ccode\u003e\u003ca\u003eThese\u003c/a\u003e\u003c/code\u003e type.\n\u003c/p\u003e",
        "fct-module": "Data.These",
        "fct-package": "these",
        "fct-signature": "(a -\u003e c) -\u003e (b -\u003e c) -\u003e (a -\u003e b -\u003e c) -\u003e These a b -\u003e c",
        "fct-source": "src/Data-These.html#these",
        "fct-type": "function",
        "title": "these"
      },
      "index": {
        "description": "Case analysis for the These type",
        "hierarchy": "Data These",
        "module": "Data.These",
        "name": "these",
        "normalized": "(a-\u003eb)-\u003e(c-\u003eb)-\u003e(a-\u003ec-\u003eb)-\u003eThese a c-\u003eb",
        "package": "these",
        "partial": "",
        "signature": "(a-\u003ec)-\u003e(b-\u003ec)-\u003e(a-\u003eb-\u003ec)-\u003eThese a b-\u003ec"
      }
    }
  }
]