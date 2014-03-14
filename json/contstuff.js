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
        "word": "contstuff"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the various effect classes supported by\n contstuff.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Classes",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the various effect classes supported by contstuff",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Classes",
          "package": "contstuff",
          "partial": "Classes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads supporting abortion.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Abortable",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Abortable",
          "type": "class"
        },
        "index": {
          "description": "Monads supporting abortion",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Abortable",
          "package": "contstuff",
          "partial": "Abortable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Abortable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads supporting *call-with-current-continuation* (aka callCC).\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "CallCC",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#CallCC",
          "type": "class"
        },
        "index": {
          "description": "Monads supporting call-with-current-continuation aka callCC",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "CallCC",
          "package": "contstuff",
          "partial": "Call CC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:CallCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads with support for forking threads.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Forkable",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Forkable",
          "type": "class"
        },
        "index": {
          "description": "Monads with support for forking threads",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Forkable",
          "package": "contstuff",
          "partial": "Forkable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Forkable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads with exception support.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "HasExceptions",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#HasExceptions",
          "type": "class"
        },
        "index": {
          "description": "Monads with exception support",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "HasExceptions",
          "package": "contstuff",
          "partial": "Has Exceptions",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:HasExceptions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA jump label for \u003ccode\u003e\u003ca\u003elabelCC\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003egoto\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Label",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Label",
          "type": "data"
        },
        "index": {
          "description": "jump label for labelCC and goto",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Label",
          "package": "contstuff",
          "partial": "Label",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType class for lifting functor computations.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "LiftFunctor",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#LiftFunctor",
          "type": "class"
        },
        "index": {
          "description": "Type class for lifting functor computations",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "LiftFunctor",
          "package": "contstuff",
          "partial": "Lift Functor",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:LiftFunctor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads with environment (reader monads).\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Readable",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Readable",
          "type": "class"
        },
        "index": {
          "description": "Monads with environment reader monads",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Readable",
          "package": "contstuff",
          "partial": "Readable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Readable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStateful monads, i.e. having a modifyable environment (stateful monads).\n\u003c/p\u003e\u003cp\u003eMinimal complete definition: \u003ccode\u003e\u003ca\u003eputLazy\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Stateful",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Stateful",
          "type": "class"
        },
        "index": {
          "description": "Stateful monads i.e having modifyable environment stateful monads Minimal complete definition putLazy",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Stateful",
          "package": "contstuff",
          "partial": "Stateful",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Stateful"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonads with support for logging.  Traditionally these are called\n *writer monads*.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "Writable",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Classes.html#Writable",
          "type": "class"
        },
        "index": {
          "description": "Monads with support for logging Traditionally these are called writer monads",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "Writable",
          "package": "contstuff",
          "partial": "Writable",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#t:Writable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIgnore current continuation and abort.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "abort",
          "package": "contstuff",
          "signature": "Result m -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#abort",
          "type": "method"
        },
        "index": {
          "description": "Ignore current continuation and abort",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "abort",
          "normalized": "Result a-\u003ea b",
          "package": "contstuff",
          "signature": "Result m-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:abort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a resource, run a computation, then release the resource, even\n if an exception is raised:\n\u003c/p\u003e\u003cpre\u003e bracket acquire release use\n\u003c/pre\u003e\u003cp\u003ePlease note that this function behaves slightly different from the\n usual \u003ccode\u003eE.bracket\u003c/code\u003e.  If both the user and the releaser throw an\n exception, the user exception is significant.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "bracket",
          "package": "contstuff",
          "signature": "m res -\u003e (res -\u003e m b) -\u003e (res -\u003e m a) -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#bracket",
          "type": "function"
        },
        "index": {
          "description": "Get resource run computation then release the resource even if an exception is raised bracket acquire release use Please note that this function behaves slightly different from the usual E.bracket If both the user and the releaser throw an exception the user exception is significant",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "bracket",
          "normalized": "a b-\u003e(b-\u003ea c)-\u003e(b-\u003ea d)-\u003ea d",
          "package": "contstuff",
          "signature": "m res-\u003e(res-\u003em b)-\u003e(res-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:bracket"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInitialize, then run, then clean up safely, even if an exception is\n raised:\n\u003c/p\u003e\u003cpre\u003e bracket_ init cleanup run\n\u003c/pre\u003e\u003cp\u003ePlease note that this function behaves slightly different from the\n usual \u003ccode\u003eE.bracket_\u003c/code\u003e.  If both the user and the releaser throw an\n exception, the user exception is significant.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "bracket_",
          "package": "contstuff",
          "signature": "m a -\u003e m b -\u003e m c -\u003e m c",
          "source": "src/Control-ContStuff-Classes.html#bracket_",
          "type": "function"
        },
        "index": {
          "description": "Initialize then run then clean up safely even if an exception is raised bracket init cleanup run Please note that this function behaves slightly different from the usual E.bracket If both the user and the releaser throw an exception the user exception is significant",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "bracket_",
          "normalized": "a b-\u003ea c-\u003ea d-\u003ea d",
          "package": "contstuff",
          "signature": "m a-\u003em b-\u003em c-\u003em c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:bracket_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCall with current continuation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "callCC",
          "package": "contstuff",
          "signature": "((a -\u003e m b) -\u003e m a) -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#callCC",
          "type": "method"
        },
        "index": {
          "description": "Call with current continuation",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "callCC",
          "normalized": "((a-\u003eb c)-\u003eb a)-\u003eb a",
          "package": "contstuff",
          "partial": "CC",
          "signature": "((a-\u003em b)-\u003em a)-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:callCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exceptions using an exception handler.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "catch",
          "package": "contstuff",
          "signature": "m a -\u003e (Exception m -\u003e m a) -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#catch",
          "type": "function"
        },
        "index": {
          "description": "Catch exceptions using an exception handler",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "catch",
          "normalized": "a b-\u003e(Exception a-\u003ea b)-\u003ea b",
          "package": "contstuff",
          "signature": "m a-\u003e(Exception m-\u003em a)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:catch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a final computation regardless of whether an exception was\n raised.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "finally",
          "package": "contstuff",
          "signature": "m a -\u003e m b -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#finally",
          "type": "function"
        },
        "index": {
          "description": "Run final computation regardless of whether an exception was raised",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "finally",
          "normalized": "a b-\u003ea c-\u003ea b",
          "package": "contstuff",
          "signature": "m a-\u003em b-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:finally"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail (in the sense of the given transformer), if the given\n underlying computation returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "forbid",
          "package": "contstuff",
          "signature": "m Bool -\u003e t m ()",
          "source": "src/Control-ContStuff-Classes.html#forbid",
          "type": "function"
        },
        "index": {
          "description": "Fail in the sense of the given transformer if the given underlying computation returns True",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "forbid",
          "normalized": "a Bool-\u003eb a()",
          "package": "contstuff",
          "signature": "m Bool-\u003et m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:forbid"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eforkIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "forkIO",
          "package": "contstuff",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-ContStuff-Classes.html#forkIO",
          "type": "method"
        },
        "index": {
          "description": "Generalization of forkIO",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "forkIO",
          "normalized": "a()-\u003ea ThreadId",
          "package": "contstuff",
          "partial": "IO",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:forkIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGeneralization of \u003ccode\u003e\u003ca\u003eforkOS\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "forkOS",
          "package": "contstuff",
          "signature": "m () -\u003e m ThreadId",
          "source": "src/Control-ContStuff-Classes.html#forkOS",
          "type": "method"
        },
        "index": {
          "description": "Generalization of forkOS",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "forkOS",
          "normalized": "a()-\u003ea ThreadId",
          "package": "contstuff",
          "partial": "OS",
          "signature": "m()-\u003em ThreadId",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:forkOS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the current state.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "get",
          "package": "contstuff",
          "signature": "m (StateOf m)",
          "source": "src/Control-ContStuff-Classes.html#get",
          "type": "method"
        },
        "index": {
          "description": "Get the current state",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "get",
          "package": "contstuff",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a certain field.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "getField",
          "package": "contstuff",
          "signature": "(StateOf m -\u003e a) -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#getField",
          "type": "function"
        },
        "index": {
          "description": "Get certain field",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "getField",
          "normalized": "(StateOf a-\u003eb)-\u003ea b",
          "package": "contstuff",
          "partial": "Field",
          "signature": "(StateOf m-\u003ea)-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:getField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJump to a label.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "goto",
          "package": "contstuff",
          "signature": "Label m a -\u003e a -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#goto",
          "type": "function"
        },
        "index": {
          "description": "Jump to label",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "goto",
          "normalized": "Label a b-\u003eb-\u003ea()",
          "package": "contstuff",
          "signature": "Label m a-\u003ea-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:goto"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCatch exceptions using an exception handler (flip \u003ccode\u003e\u003ca\u003ecatch\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "handle",
          "package": "contstuff",
          "signature": "(Exception m -\u003e m a) -\u003e m a -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#handle",
          "type": "function"
        },
        "index": {
          "description": "Catch exceptions using an exception handler flip catch",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "handle",
          "normalized": "(Exception a-\u003ea b)-\u003ea b-\u003ea b",
          "package": "contstuff",
          "signature": "(Exception m-\u003em a)-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:handle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCapture the current continuation for later use.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "labelCC",
          "package": "contstuff",
          "signature": "a -\u003e m (a, Label m a)",
          "source": "src/Control-ContStuff-Classes.html#labelCC",
          "type": "function"
        },
        "index": {
          "description": "Capture the current continuation for later use",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "labelCC",
          "normalized": "a-\u003eb(a,Label b a)",
          "package": "contstuff",
          "partial": "CC",
          "signature": "a-\u003em(a,Label m a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:labelCC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnwrap inner functor.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "liftF",
          "package": "contstuff",
          "signature": "m (InnerFunctor t a) -\u003e t m a",
          "source": "src/Control-ContStuff-Classes.html#liftF",
          "type": "method"
        },
        "index": {
          "description": "Unwrap inner functor",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "liftF",
          "normalized": "a(InnerFunctor b c)-\u003eb a c",
          "package": "contstuff",
          "signature": "m(InnerFunctor t a)-\u003et m a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:liftF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the current state.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "modify",
          "package": "contstuff",
          "signature": "(StateOf m -\u003e StateOf m) -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#modify",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the current state",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "modify",
          "normalized": "(StateOf a-\u003eStateOf a)-\u003ea()",
          "package": "contstuff",
          "signature": "(StateOf m-\u003eStateOf m)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a field and modify the state.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "modifyField",
          "package": "contstuff",
          "signature": "(StateOf m -\u003e a) -\u003e (a -\u003e StateOf m) -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#modifyField",
          "type": "function"
        },
        "index": {
          "description": "Get field and modify the state",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "modifyField",
          "normalized": "(StateOf a-\u003eb)-\u003e(b-\u003eStateOf a)-\u003ea()",
          "package": "contstuff",
          "partial": "Field",
          "signature": "(StateOf m-\u003ea)-\u003e(a-\u003eStateOf m)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:modifyField"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a field and modify the state.  Lazy version.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "modifyFieldLazy",
          "package": "contstuff",
          "signature": "(StateOf m -\u003e a) -\u003e (a -\u003e StateOf m) -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#modifyFieldLazy",
          "type": "function"
        },
        "index": {
          "description": "Get field and modify the state Lazy version",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "modifyFieldLazy",
          "normalized": "(StateOf a-\u003eb)-\u003e(b-\u003eStateOf a)-\u003ea()",
          "package": "contstuff",
          "partial": "Field Lazy",
          "signature": "(StateOf m-\u003ea)-\u003e(a-\u003eStateOf m)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:modifyFieldLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply a function to the current state.  Lazy version.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "modifyLazy",
          "package": "contstuff",
          "signature": "(StateOf m -\u003e StateOf m) -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#modifyLazy",
          "type": "function"
        },
        "index": {
          "description": "Apply function to the current state Lazy version",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "modifyLazy",
          "normalized": "(StateOf a-\u003eStateOf a)-\u003ea()",
          "package": "contstuff",
          "partial": "Lazy",
          "signature": "(StateOf m-\u003eStateOf m)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:modifyLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current state and force it.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "put",
          "package": "contstuff",
          "signature": "StateOf m -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#put",
          "type": "method"
        },
        "index": {
          "description": "Set the current state and force it",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "put",
          "normalized": "StateOf a-\u003ea()",
          "package": "contstuff",
          "signature": "StateOf m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:put"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the current state, but don't force it.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "putLazy",
          "package": "contstuff",
          "signature": "StateOf m -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#putLazy",
          "type": "method"
        },
        "index": {
          "description": "Set the current state but don force it",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "putLazy",
          "normalized": "StateOf a-\u003ea()",
          "package": "contstuff",
          "partial": "Lazy",
          "signature": "StateOf m-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:putLazy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaise an exception.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "raise",
          "package": "contstuff",
          "signature": "Exception m -\u003e m a",
          "source": "src/Control-ContStuff-Classes.html#raise",
          "type": "method"
        },
        "index": {
          "description": "Raise an exception",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "raise",
          "normalized": "Exception a-\u003ea b",
          "package": "contstuff",
          "signature": "Exception m-\u003em a",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:raise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow given exception, if the given computation returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "raiseUnless",
          "package": "contstuff",
          "signature": "Exception m -\u003e m Bool -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#raiseUnless",
          "type": "function"
        },
        "index": {
          "description": "Throw given exception if the given computation returns False",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "raiseUnless",
          "normalized": "Exception a-\u003ea Bool-\u003ea()",
          "package": "contstuff",
          "partial": "Unless",
          "signature": "Exception m-\u003em Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:raiseUnless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThrow given exception, if the given computation returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "raiseWhen",
          "package": "contstuff",
          "signature": "Exception m -\u003e m Bool -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#raiseWhen",
          "type": "function"
        },
        "index": {
          "description": "Throw given exception if the given computation returns True",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "raiseWhen",
          "normalized": "Exception a-\u003ea Bool-\u003ea()",
          "package": "contstuff",
          "partial": "When",
          "signature": "Exception m-\u003em Bool-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:raiseWhen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFail (in the sense of the given transformer), if the given\n underlying computation returns \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "require",
          "package": "contstuff",
          "signature": "m Bool -\u003e t m ()",
          "source": "src/Control-ContStuff-Classes.html#require",
          "type": "function"
        },
        "index": {
          "description": "Fail in the sense of the given transformer if the given underlying computation returns False",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "require",
          "normalized": "a Bool-\u003eb a()",
          "package": "contstuff",
          "signature": "m Bool-\u003et m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:require"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLog a value.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "tell",
          "package": "contstuff",
          "signature": "w -\u003e m ()",
          "source": "src/Control-ContStuff-Classes.html#tell",
          "type": "method"
        },
        "index": {
          "description": "Log value",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "tell",
          "normalized": "a-\u003eb()",
          "package": "contstuff",
          "signature": "w-\u003em()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:tell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun computation catching exceptions.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Classes",
          "name": "try",
          "package": "contstuff",
          "signature": "m a -\u003e m (Either (Exception m) a)",
          "source": "src/Control-ContStuff-Classes.html#try",
          "type": "method"
        },
        "index": {
          "description": "Run computation catching exceptions",
          "hierarchy": "Control ContStuff Classes",
          "module": "Control.ContStuff.Classes",
          "name": "try",
          "normalized": "a b-\u003ea(Either(Exception a)b)",
          "package": "contstuff",
          "signature": "m a-\u003em(Either(Exception m)a)",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Classes.html#v:try"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements some miscellaneous type class instances.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Instances",
          "name": "Instances",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements some miscellaneous type class instances",
          "hierarchy": "Control ContStuff Instances",
          "module": "Control.ContStuff.Instances",
          "name": "Instances",
          "package": "contstuff",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements the non-transformer variants of the monad\n transformers found in \u003ca\u003eControl.ContStuff.Trans\u003c/a\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "Monads",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements the non-transformer variants of the monad transformers found in Control.ContStuff.Trans",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "Monads",
          "package": "contstuff",
          "partial": "Monads",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe choice monad.  Derived from \u003ccode\u003e\u003ca\u003eChoiceT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "Choice",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html#Choice",
          "type": "type"
        },
        "index": {
          "description": "The choice monad Derived from ChoiceT",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "Choice",
          "package": "contstuff",
          "partial": "Choice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#t:Choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure CPS monad derived from ContT.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "Cont",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html#Cont",
          "type": "type"
        },
        "index": {
          "description": "Pure CPS monad derived from ContT",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "Cont",
          "package": "contstuff",
          "partial": "Cont",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#t:Cont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe traditional writer monad.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "OldWriter",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html#OldWriter",
          "type": "type"
        },
        "index": {
          "description": "The traditional writer monad",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "OldWriter",
          "package": "contstuff",
          "partial": "Old Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#t:OldWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure computation with environment.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "Reader",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html#Reader",
          "type": "type"
        },
        "index": {
          "description": "Pure computation with environment",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "Reader",
          "package": "contstuff",
          "partial": "Reader",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#t:Reader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePure state monad derived from StateT.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "State",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Monads.html#State",
          "type": "type"
        },
        "index": {
          "description": "Pure state monad derived from StateT",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "State",
          "package": "contstuff",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#t:State"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a pure CPS computation to its final result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "evalCont",
          "package": "contstuff",
          "signature": "Cont r r -\u003e r",
          "source": "src/Control-ContStuff-Monads.html#evalCont",
          "type": "function"
        },
        "index": {
          "description": "Evaluate pure CPS computation to its final result",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "evalCont",
          "normalized": "Cont a a-\u003ea",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "Cont r r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:evalCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer computation and return its result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "evalOldWriter",
          "package": "contstuff",
          "signature": "OldWriter r w r -\u003e r",
          "source": "src/Control-ContStuff-Monads.html#evalOldWriter",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer computation and return its result",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "evalOldWriter",
          "normalized": "OldWriter a b a-\u003ea",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriter r w r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:evalOldWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a stateful computation returning its result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "evalState",
          "package": "contstuff",
          "signature": "s -\u003e State r s r -\u003e r",
          "source": "src/Control-ContStuff-Monads.html#evalState",
          "type": "function"
        },
        "index": {
          "description": "Run stateful computation returning its result",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "evalState",
          "normalized": "a-\u003eState b a b-\u003eb",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eState r s r-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:evalState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer computation and return its log.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "execOldWriter",
          "package": "contstuff",
          "signature": "OldWriter r w r -\u003e w",
          "source": "src/Control-ContStuff-Monads.html#execOldWriter",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer computation and return its log",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "execOldWriter",
          "normalized": "OldWriter a b a-\u003eb",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriter r w r-\u003ew",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:execOldWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a stateful computation returning its result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "execState",
          "package": "contstuff",
          "signature": "s -\u003e State s s a -\u003e s",
          "source": "src/Control-ContStuff-Monads.html#execState",
          "type": "function"
        },
        "index": {
          "description": "Run stateful computation returning its result",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "execState",
          "normalized": "a-\u003eState a a b-\u003ea",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eState s s a-\u003es",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:execState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of solutions.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "listChoice",
          "package": "contstuff",
          "signature": "Choice [a] [a] a -\u003e [a]",
          "source": "src/Control-ContStuff-Monads.html#listChoice",
          "type": "function"
        },
        "index": {
          "description": "Get list of solutions",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "listChoice",
          "normalized": "Choice[a][a]a-\u003e[a]",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "Choice[a][a]a-\u003e[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:listChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one solution.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "maybeChoice",
          "package": "contstuff",
          "signature": "Choice (Maybe a) (Maybe a) a -\u003e Maybe a",
          "source": "src/Control-ContStuff-Monads.html#maybeChoice",
          "type": "function"
        },
        "index": {
          "description": "Get one solution",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "maybeChoice",
          "normalized": "Choice(Maybe a)(Maybe a)a-\u003eMaybe a",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "Choice(Maybe a)(Maybe a)a-\u003eMaybe a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:maybeChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the result of a CPS computation along the way.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "modifyCont",
          "package": "contstuff",
          "signature": "(r -\u003e r) -\u003e Cont r ()",
          "source": "src/Control-ContStuff-Monads.html#modifyCont",
          "type": "function"
        },
        "index": {
          "description": "Modify the result of CPS computation along the way",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "modifyCont",
          "normalized": "(a-\u003ea)-\u003eCont a()",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "(r-\u003er)-\u003eCont r()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:modifyCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pure CPS computation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "runCont",
          "package": "contstuff",
          "signature": "(a -\u003e r) -\u003e Cont r a -\u003e r",
          "source": "src/Control-ContStuff-Monads.html#runCont",
          "type": "function"
        },
        "index": {
          "description": "Run pure CPS computation",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "runCont",
          "normalized": "(a-\u003eb)-\u003eCont b a-\u003eb",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "(a-\u003er)-\u003eCont r a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:runCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer computation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "runOldWriter",
          "package": "contstuff",
          "signature": "OldWriter r w r -\u003e (r, w)",
          "source": "src/Control-ContStuff-Monads.html#runOldWriter",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer computation",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "runOldWriter",
          "normalized": "OldWriter a b a-\u003e(a,b)",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriter r w r-\u003e(r,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:runOldWriter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a pure computation with environment.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "runReader",
          "package": "contstuff",
          "signature": "e -\u003e Reader e a -\u003e a",
          "source": "src/Control-ContStuff-Monads.html#runReader",
          "type": "function"
        },
        "index": {
          "description": "Run pure computation with environment",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "runReader",
          "normalized": "a-\u003eReader a b-\u003eb",
          "package": "contstuff",
          "partial": "Reader",
          "signature": "e-\u003eReader e a-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:runReader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a stateful computation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Monads",
          "name": "runState",
          "package": "contstuff",
          "signature": "s -\u003e (a -\u003e s -\u003e r) -\u003e State r s a -\u003e r",
          "source": "src/Control-ContStuff-Monads.html#runState",
          "type": "function"
        },
        "index": {
          "description": "Run stateful computation",
          "hierarchy": "Control ContStuff Monads",
          "module": "Control.ContStuff.Monads",
          "name": "runState",
          "normalized": "a-\u003e(b-\u003ea-\u003ec)-\u003eState c a b-\u003ec",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003e(a-\u003es-\u003er)-\u003eState r s a-\u003er",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Monads.html#v:runState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides all the transformers from\n \u003ca\u003eControl.ContStuff.Trans\u003c/a\u003e, but with a simplified interface, hiding\n the underlying CPS machinery.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Simple",
          "name": "Simple",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides all the transformers from Control.ContStuff.Trans but with simplified interface hiding the underlying CPS machinery",
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "Simple",
          "package": "contstuff",
          "partial": "Simple",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "ChoiceT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html#ChoiceT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "ChoiceT",
          "package": "contstuff",
          "partial": "Choice",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:ChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "EitherT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html#EitherT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "EitherT",
          "package": "contstuff",
          "partial": "Either",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:EitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "MaybeT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html#MaybeT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "MaybeT",
          "package": "contstuff",
          "partial": "Maybe",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer for computations with readable environment.\n Unlike the other monad transformers this one allows no CPS effects\n and also hides its constructors, which makes it commutative.\n\u003c/p\u003e\u003cp\u003eIf you need CPS effects, consider using \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Simple",
          "name": "ReaderT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#ReaderT",
          "type": "data"
        },
        "index": {
          "description": "Monad transformer for computations with readable environment Unlike the other monad transformers this one allows no CPS effects and also hides its constructors which makes it commutative If you need CPS effects consider using StateT",
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "ReaderT",
          "package": "contstuff",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "StateT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html#StateT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "StateT",
          "package": "contstuff",
          "partial": "State",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "WriterT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Simple.html#WriterT",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "WriterT",
          "package": "contstuff",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "choice",
          "package": "contstuff",
          "signature": "[a] -\u003e ChoiceT m a",
          "source": "src/Control-ContStuff-Simple.html#choice",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "choice",
          "normalized": "[a]-\u003eChoiceT b a",
          "package": "contstuff",
          "signature": "[a]-\u003eChoiceT m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "evalEitherT",
          "package": "contstuff",
          "signature": "EitherT e m a -\u003e m (Either e a)",
          "source": "src/Control-ContStuff-Simple.html#evalEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "evalEitherT",
          "normalized": "EitherT a b c-\u003eb(Either a c)",
          "package": "contstuff",
          "partial": "Either",
          "signature": "EitherT e m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:evalEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "evalMaybeT",
          "package": "contstuff",
          "signature": "MaybeT m a -\u003e m (Maybe a)",
          "source": "src/Control-ContStuff-Simple.html#evalMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "evalMaybeT",
          "normalized": "MaybeT a b-\u003ea(Maybe b)",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "MaybeT m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:evalMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "evalStateT",
          "package": "contstuff",
          "signature": "s -\u003e StateT s m a -\u003e m a",
          "source": "src/Control-ContStuff-Simple.html#evalStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "evalStateT",
          "normalized": "a-\u003eStateT a b c-\u003eb c",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eStateT s m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "evalWriterT",
          "package": "contstuff",
          "signature": "WriterT w m a -\u003e m a",
          "source": "src/Control-ContStuff-Simple.html#evalWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "evalWriterT",
          "normalized": "WriterT a b c-\u003eb c",
          "package": "contstuff",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:evalWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "execStateT",
          "package": "contstuff",
          "signature": "s -\u003e StateT s m a -\u003e m s",
          "source": "src/Control-ContStuff-Simple.html#execStateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "execStateT",
          "normalized": "a-\u003eStateT a b c-\u003eb a",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eStateT s m a-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "execWriterT",
          "package": "contstuff",
          "signature": "WriterT w m a -\u003e m w",
          "source": "src/Control-ContStuff-Simple.html#execWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "execWriterT",
          "normalized": "WriterT a b c-\u003eb a",
          "package": "contstuff",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:execWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "findAll",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m (f a)",
          "source": "src/Control-ContStuff-Simple.html#findAll",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "findAll",
          "normalized": "ChoiceT a b-\u003ea(c b)",
          "package": "contstuff",
          "partial": "All",
          "signature": "ChoiceT m a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:findAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "findAll_",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m ()",
          "source": "src/Control-ContStuff-Simple.html#findAll_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "findAll_",
          "normalized": "ChoiceT a b-\u003ea()",
          "package": "contstuff",
          "partial": "All",
          "signature": "ChoiceT m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:findAll_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "findFirst",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m (f a)",
          "source": "src/Control-ContStuff-Simple.html#findFirst",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "findFirst",
          "normalized": "ChoiceT a b-\u003ea(c b)",
          "package": "contstuff",
          "partial": "First",
          "signature": "ChoiceT m a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:findFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "findFirst_",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m ()",
          "source": "src/Control-ContStuff-Simple.html#findFirst_",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "findFirst_",
          "normalized": "ChoiceT a b-\u003ea()",
          "package": "contstuff",
          "partial": "First",
          "signature": "ChoiceT m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:findFirst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list into a computation with alternatives.\n\u003c/p\u003e",
          "module": "[\"Control.ContStuff.Simple\",\"Control.ContStuff.Trans\"]",
          "name": "listA",
          "package": "contstuff",
          "signature": "[a] -\u003e f a",
          "source": "src/Control-ContStuff-Trans.html#listA",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:listA\",\"http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:listA\"]"
        },
        "index": {
          "description": "Turn list into computation with alternatives",
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "listA",
          "normalized": "[a]-\u003eb a",
          "package": "contstuff",
          "signature": "[a]-\u003ef a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:listA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "listChoiceT",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m [a]",
          "source": "src/Control-ContStuff-Simple.html#listChoiceT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "listChoiceT",
          "normalized": "ChoiceT a b-\u003ea[b]",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "ChoiceT m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:listChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "maybeChoiceT",
          "package": "contstuff",
          "signature": "ChoiceT m a -\u003e m (Maybe a)",
          "source": "src/Control-ContStuff-Simple.html#maybeChoiceT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "maybeChoiceT",
          "normalized": "ChoiceT a b-\u003ea(Maybe b)",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "ChoiceT m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:maybeChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a computation with environment.\n\u003c/p\u003e",
          "module": "[\"Control.ContStuff.Simple\",\"Control.ContStuff.Trans\"]",
          "name": "runReaderT",
          "package": "contstuff",
          "signature": "e -\u003e ReaderT e m a -\u003e m a",
          "source": "src/Control-ContStuff-Trans.html#runReaderT",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:runReaderT\",\"http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runReaderT\"]"
        },
        "index": {
          "description": "Run computation with environment",
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "runReaderT",
          "normalized": "a-\u003eReaderT a b c-\u003eb c",
          "package": "contstuff",
          "partial": "Reader",
          "signature": "e-\u003eReaderT e m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:runReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "runWriterT",
          "package": "contstuff",
          "signature": "WriterT w m a -\u003e m (a, w)",
          "source": "src/Control-ContStuff-Simple.html#runWriterT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "runWriterT",
          "normalized": "WriterT a b c-\u003eb(c,a)",
          "package": "contstuff",
          "partial": "Writer",
          "signature": "WriterT w m a-\u003em(a,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "testEitherT",
          "package": "contstuff",
          "signature": "EitherT e m a -\u003e m Bool",
          "source": "src/Control-ContStuff-Simple.html#testEitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "testEitherT",
          "normalized": "EitherT a b c-\u003eb Bool",
          "package": "contstuff",
          "partial": "Either",
          "signature": "EitherT e m a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:testEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Simple",
          "name": "testMaybeT",
          "package": "contstuff",
          "signature": "MaybeT m a -\u003e m Bool",
          "source": "src/Control-ContStuff-Simple.html#testMaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Simple",
          "module": "Control.ContStuff.Simple",
          "name": "testMaybeT",
          "normalized": "MaybeT a b-\u003ea Bool",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "MaybeT m a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Simple.html#v:testMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements a number of monad transformers using a CPS\n approach internally.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "Trans",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements number of monad transformers using CPS approach internally",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "Trans",
          "package": "contstuff",
          "partial": "Trans",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe choice monad transformer, which models, as the most common\n interpretation, nondeterminism.  Internally a list of choices is\n represented as a CPS-based left-fold function.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "ChoiceT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#ChoiceT",
          "type": "newtype"
        },
        "index": {
          "description": "The choice monad transformer which models as the most common interpretation nondeterminism Internally list of choices is represented as CPS-based left-fold function",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "ChoiceT",
          "package": "contstuff",
          "partial": "Choice",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:ChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe continuation passing style monad transformer.  This monad\n transformer models the most basic form of CPS.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "ContT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#ContT",
          "type": "newtype"
        },
        "index": {
          "description": "The continuation passing style monad transformer This monad transformer models the most basic form of CPS",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "ContT",
          "package": "contstuff",
          "partial": "Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer for CPS computations with an additional exception\n continuation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "EitherT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#EitherT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad transformer for CPS computations with an additional exception continuation",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "EitherT",
          "package": "contstuff",
          "partial": "Either",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:EitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe trivial monad transformer, which maps a monad to an equivalent monad.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "IdentityT",
          "package": "contstuff",
          "type": "newtype"
        },
        "index": {
          "description": "The trivial monad transformer which maps monad to an equivalent monad",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "IdentityT",
          "package": "contstuff",
          "partial": "Identity",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:IdentityT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer for CPS computations with an additional exception\n continuation with no argument.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "MaybeT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#MaybeT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad transformer for CPS computations with an additional exception continuation with no argument",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "MaybeT",
          "package": "contstuff",
          "partial": "Maybe",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe traditional writer monad transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "OldWriterT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#OldWriterT",
          "type": "type"
        },
        "index": {
          "description": "The traditional writer monad transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "OldWriterT",
          "package": "contstuff",
          "partial": "Old Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:OldWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer for computations with readable environment.\n Unlike the other monad transformers this one allows no CPS effects\n and also hides its constructors, which makes it commutative.\n\u003c/p\u003e\u003cp\u003eIf you need CPS effects, consider using \u003ccode\u003e\u003ca\u003eStateT\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "ReaderT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#ReaderT",
          "type": "data"
        },
        "index": {
          "description": "Monad transformer for computations with readable environment Unlike the other monad transformers this one allows no CPS effects and also hides its constructors which makes it commutative If you need CPS effects consider using StateT",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "ReaderT",
          "package": "contstuff",
          "partial": "Reader",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:ReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMonad transformer for stateful computations.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "StateT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#StateT",
          "type": "newtype"
        },
        "index": {
          "description": "Monad transformer for stateful computations",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "StateT",
          "package": "contstuff",
          "partial": "State",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe writer monad transformer.  Supports logging effects.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "WriterT",
          "package": "contstuff",
          "source": "src/Control-ContStuff-Trans.html#WriterT",
          "type": "type"
        },
        "index": {
          "description": "The writer monad transformer Supports logging effects",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "WriterT",
          "package": "contstuff",
          "partial": "Writer",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#t:WriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "ChoiceT",
          "package": "contstuff",
          "signature": "ChoiceT",
          "source": "src/Control-ContStuff-Trans.html#ChoiceT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "ChoiceT",
          "package": "contstuff",
          "partial": "Choice",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:ChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "ContT",
          "package": "contstuff",
          "signature": "ContT",
          "source": "src/Control-ContStuff-Trans.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "ContT",
          "package": "contstuff",
          "partial": "Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:ContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "EitherT",
          "package": "contstuff",
          "signature": "EitherT",
          "source": "src/Control-ContStuff-Trans.html#EitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "EitherT",
          "package": "contstuff",
          "partial": "Either",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:EitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "IdentityT",
          "package": "contstuff",
          "signature": "IdentityT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "IdentityT",
          "package": "contstuff",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:IdentityT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "MaybeT",
          "package": "contstuff",
          "signature": "MaybeT",
          "source": "src/Control-ContStuff-Trans.html#MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "MaybeT",
          "package": "contstuff",
          "partial": "Maybe",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:MaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "StateT",
          "package": "contstuff",
          "signature": "StateT",
          "source": "src/Control-ContStuff-Trans.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "StateT",
          "package": "contstuff",
          "partial": "State",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:StateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTurn a list into a \u003ccode\u003e\u003ca\u003eChoiceT\u003c/a\u003e\u003c/code\u003e computation efficiently.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "choice",
          "package": "contstuff",
          "signature": "[a] -\u003e ChoiceT r i m a",
          "source": "src/Control-ContStuff-Trans.html#choice",
          "type": "function"
        },
        "index": {
          "description": "Turn list into ChoiceT computation efficiently",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "choice",
          "normalized": "[a]-\u003eChoiceT b c d a",
          "package": "contstuff",
          "signature": "[a]-\u003eChoiceT r i m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:choice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate a CPS-style computation to its final result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "evalContT",
          "package": "contstuff",
          "signature": "ContT r m r -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#evalContT",
          "type": "function"
        },
        "index": {
          "description": "Evaluate CPS-style computation to its final result",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "evalContT",
          "normalized": "ContT a b a-\u003eb a",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "ContT r m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:evalContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e transformer returning an \u003ccode\u003e\u003ca\u003eEither\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "evalEitherT",
          "package": "contstuff",
          "signature": "EitherT (Either e a) e m a -\u003e m (Either e a)",
          "source": "src/Control-ContStuff-Trans.html#evalEitherT",
          "type": "function"
        },
        "index": {
          "description": "Run an EitherT transformer returning an Either result",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "evalEitherT",
          "normalized": "EitherT(Either a b)a c b-\u003ec(Either a b)",
          "package": "contstuff",
          "partial": "Either",
          "signature": "EitherT(Either e a)e m a-\u003em(Either e a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:evalEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e transformer returning a \u003ccode\u003e\u003ca\u003eMaybe\u003c/a\u003e\u003c/code\u003e result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "evalMaybeT",
          "package": "contstuff",
          "signature": "MaybeT (Maybe a) m a -\u003e m (Maybe a)",
          "source": "src/Control-ContStuff-Trans.html#evalMaybeT",
          "type": "function"
        },
        "index": {
          "description": "Run MaybeT transformer returning Maybe result",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "evalMaybeT",
          "normalized": "MaybeT(Maybe a)b a-\u003eb(Maybe a)",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "MaybeT(Maybe a)m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:evalMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer transformer and return its result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "evalOldWriterT",
          "package": "contstuff",
          "signature": "OldWriterT r w m r -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#evalOldWriterT",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer transformer and return its result",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "evalOldWriterT",
          "normalized": "OldWriterT a b c a-\u003ec a",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriterT r w m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:evalOldWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a state transformer returning its result.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "evalStateT",
          "package": "contstuff",
          "signature": "s -\u003e StateT r s m r -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#evalStateT",
          "type": "function"
        },
        "index": {
          "description": "Run state transformer returning its result",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "evalStateT",
          "normalized": "a-\u003eStateT b a c b-\u003ec b",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eStateT r s m r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:evalStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer transformer and return its log.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "execOldWriterT",
          "package": "contstuff",
          "signature": "OldWriterT r w m r -\u003e m w",
          "source": "src/Control-ContStuff-Trans.html#execOldWriterT",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer transformer and return its log",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "execOldWriterT",
          "normalized": "OldWriterT a b c a-\u003ec b",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriterT r w m r-\u003em w",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:execOldWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a state transformer returning its final state.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "execStateT",
          "package": "contstuff",
          "signature": "s -\u003e StateT s s m a -\u003e m s",
          "source": "src/Control-ContStuff-Trans.html#execStateT",
          "type": "function"
        },
        "index": {
          "description": "Run state transformer returning its final state",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "execStateT",
          "normalized": "a-\u003eStateT a a b c-\u003eb a",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003eStateT s s m a-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:execStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all solutions.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "findAll",
          "package": "contstuff",
          "signature": "ChoiceT (f a) (f a) m a -\u003e m (f a)",
          "source": "src/Control-ContStuff-Trans.html#findAll",
          "type": "function"
        },
        "index": {
          "description": "Find all solutions",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "findAll",
          "normalized": "ChoiceT(a b)(a b)c b-\u003ec(a b)",
          "package": "contstuff",
          "partial": "All",
          "signature": "ChoiceT(f a)(f a)m a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:findAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind all solutions and ignore them.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "findAll_",
          "package": "contstuff",
          "signature": "ChoiceT r i m a -\u003e m ()",
          "source": "src/Control-ContStuff-Trans.html#findAll_",
          "type": "function"
        },
        "index": {
          "description": "Find all solutions and ignore them",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "findAll_",
          "normalized": "ChoiceT a b c d-\u003ec()",
          "package": "contstuff",
          "partial": "All",
          "signature": "ChoiceT r i m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:findAll_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first solution.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "findFirst",
          "package": "contstuff",
          "signature": "ChoiceT (f a) (f a) m a -\u003e m (f a)",
          "source": "src/Control-ContStuff-Trans.html#findFirst",
          "type": "function"
        },
        "index": {
          "description": "Find the first solution",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "findFirst",
          "normalized": "ChoiceT(a b)(a b)c b-\u003ec(a b)",
          "package": "contstuff",
          "partial": "First",
          "signature": "ChoiceT(f a)(f a)m a-\u003em(f a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:findFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFind the first solution and ignore it.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "findFirst_",
          "package": "contstuff",
          "signature": "ChoiceT r i m a -\u003e m ()",
          "source": "src/Control-ContStuff-Trans.html#findFirst_",
          "type": "function"
        },
        "index": {
          "description": "Find the first solution and ignore it",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "findFirst_",
          "normalized": "ChoiceT a b c d-\u003ec()",
          "package": "contstuff",
          "partial": "First",
          "signature": "ChoiceT r i m a-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:findFirst_"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFork a concurrent thread for a computation with environment.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "forkReaderT",
          "package": "contstuff",
          "signature": "ReaderT e m () -\u003e ReaderT e m ThreadId",
          "source": "src/Control-ContStuff-Trans.html#forkReaderT",
          "type": "function"
        },
        "index": {
          "description": "Fork concurrent thread for computation with environment",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "forkReaderT",
          "normalized": "ReaderT a b()-\u003eReaderT a b ThreadId",
          "package": "contstuff",
          "partial": "Reader",
          "signature": "ReaderT e m()-\u003eReaderT e m ThreadId",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:forkReaderT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "getChoiceT",
          "package": "contstuff",
          "signature": "(i -\u003e a -\u003e (i -\u003e m r) -\u003e m r) -\u003e i -\u003e (i -\u003e m r) -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#ChoiceT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "getChoiceT",
          "normalized": "(a-\u003eb-\u003e(a-\u003ec d)-\u003ec d)-\u003ea-\u003e(a-\u003ec d)-\u003ec d",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "(i-\u003ea-\u003e(i-\u003em r)-\u003em r)-\u003ei-\u003e(i-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:getChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "getContT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#ContT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "getContT",
          "normalized": "(a-\u003eb c)-\u003eb c",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:getContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "getEitherT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e (e -\u003e m r) -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#EitherT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "getEitherT",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eb c",
          "package": "contstuff",
          "partial": "Either",
          "signature": "(a-\u003em r)-\u003e(e-\u003em r)-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:getEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "getMaybeT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e m r -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#MaybeT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "getMaybeT",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eb c",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "(a-\u003em r)-\u003em r-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:getMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "getStateT",
          "package": "contstuff",
          "signature": "(a -\u003e s -\u003e m r) -\u003e s -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#StateT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "getStateT",
          "normalized": "(a-\u003eb-\u003ec d)-\u003eb-\u003ec d",
          "package": "contstuff",
          "partial": "State",
          "signature": "(a-\u003es-\u003em r)-\u003es-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:getStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet list of solutions (faster than \u003ccode\u003e\u003ca\u003efindAll\u003c/a\u003e\u003c/code\u003e, but returns solutions\n in reversed order).\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "listChoiceT",
          "package": "contstuff",
          "signature": "ChoiceT [a] [a] m a -\u003e m [a]",
          "source": "src/Control-ContStuff-Trans.html#listChoiceT",
          "type": "function"
        },
        "index": {
          "description": "Get list of solutions faster than findAll but returns solutions in reversed order",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "listChoiceT",
          "normalized": "ChoiceT[a][a]b a-\u003eb[a]",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "ChoiceT[a][a]m a-\u003em[a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:listChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet one solution (faster than \u003ccode\u003e\u003ca\u003efindFirst\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "maybeChoiceT",
          "package": "contstuff",
          "signature": "ChoiceT (Maybe a) (Maybe a) m a -\u003e m (Maybe a)",
          "source": "src/Control-ContStuff-Trans.html#maybeChoiceT",
          "type": "function"
        },
        "index": {
          "description": "Get one solution faster than findFirst",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "maybeChoiceT",
          "normalized": "ChoiceT(Maybe a)(Maybe a)b a-\u003eb(Maybe a)",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "ChoiceT(Maybe a)(Maybe a)m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:maybeChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransform the final result along the way.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "modifyContT",
          "package": "contstuff",
          "signature": "(r -\u003e r) -\u003e ContT r m ()",
          "source": "src/Control-ContStuff-Trans.html#modifyContT",
          "type": "function"
        },
        "index": {
          "description": "Transform the final result along the way",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "modifyContT",
          "normalized": "(a-\u003ea)-\u003eContT a b()",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "(r-\u003er)-\u003eContT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:modifyContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the result of an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e computation along the way.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "modifyEitherT",
          "package": "contstuff",
          "signature": "(r -\u003e r) -\u003e EitherT r e m ()",
          "source": "src/Control-ContStuff-Trans.html#modifyEitherT",
          "type": "function"
        },
        "index": {
          "description": "Modify the result of an EitherT computation along the way",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "modifyEitherT",
          "normalized": "(a-\u003ea)-\u003eEitherT a b c()",
          "package": "contstuff",
          "partial": "Either",
          "signature": "(r-\u003er)-\u003eEitherT r e m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:modifyEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify the result of a \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e computation along the way.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "modifyMaybeT",
          "package": "contstuff",
          "signature": "(r -\u003e r) -\u003e MaybeT r m ()",
          "source": "src/Control-ContStuff-Trans.html#modifyMaybeT",
          "type": "function"
        },
        "index": {
          "description": "Modify the result of MaybeT computation along the way",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "modifyMaybeT",
          "normalized": "(a-\u003ea)-\u003eMaybeT a b()",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "(r-\u003er)-\u003eMaybeT r m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:modifyMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a choice computation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runChoiceT",
          "package": "contstuff",
          "signature": "(i -\u003e a -\u003e (i -\u003e m r) -\u003e m r) -\u003e i -\u003e (i -\u003e m r) -\u003e ChoiceT r i m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runChoiceT",
          "type": "function"
        },
        "index": {
          "description": "Run choice computation",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runChoiceT",
          "normalized": "(a-\u003eb-\u003e(a-\u003ec d)-\u003ec d)-\u003ea-\u003e(a-\u003ec d)-\u003eChoiceT d a c b-\u003ec d",
          "package": "contstuff",
          "partial": "Choice",
          "signature": "(i-\u003ea-\u003e(i-\u003em r)-\u003em r)-\u003ei-\u003e(i-\u003em r)-\u003eChoiceT r i m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runChoiceT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a CPS-style computation given the supplied final continuation.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runContT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e ContT r m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runContT",
          "type": "function"
        },
        "index": {
          "description": "Run CPS-style computation given the supplied final continuation",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runContT",
          "normalized": "(a-\u003eb c)-\u003eContT c b a-\u003eb c",
          "package": "contstuff",
          "partial": "Cont",
          "signature": "(a-\u003em r)-\u003eContT r m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runContT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun an \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runEitherT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e (e -\u003e m r) -\u003e EitherT r e m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runEitherT",
          "type": "function"
        },
        "index": {
          "description": "Run an EitherT transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runEitherT",
          "normalized": "(a-\u003eb c)-\u003e(d-\u003eb c)-\u003eEitherT c d b a-\u003eb c",
          "package": "contstuff",
          "partial": "Either",
          "signature": "(a-\u003em r)-\u003e(e-\u003em r)-\u003eEitherT r e m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.ContStuff.Trans",
          "name": "runIdentityT",
          "package": "contstuff",
          "signature": "m a",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runIdentityT",
          "package": "contstuff",
          "partial": "Identity",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runIdentityT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runMaybeT",
          "package": "contstuff",
          "signature": "(a -\u003e m r) -\u003e m r -\u003e MaybeT r m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runMaybeT",
          "type": "function"
        },
        "index": {
          "description": "Run MaybeT transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runMaybeT",
          "normalized": "(a-\u003eb c)-\u003eb c-\u003eMaybeT c b a-\u003eb c",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "(a-\u003em r)-\u003em r-\u003eMaybeT r m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a traditional writer transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runOldWriterT",
          "package": "contstuff",
          "signature": "OldWriterT r w m r -\u003e m (r, w)",
          "source": "src/Control-ContStuff-Trans.html#runOldWriterT",
          "type": "function"
        },
        "index": {
          "description": "Run traditional writer transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runOldWriterT",
          "normalized": "OldWriterT a b c a-\u003ec(a,b)",
          "package": "contstuff",
          "partial": "Old Writer",
          "signature": "OldWriterT r w m r-\u003em(r,w)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runOldWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a state transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runStateT",
          "package": "contstuff",
          "signature": "s -\u003e (a -\u003e s -\u003e m r) -\u003e StateT r s m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runStateT",
          "type": "function"
        },
        "index": {
          "description": "Run state transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runStateT",
          "normalized": "a-\u003e(b-\u003ea-\u003ec d)-\u003eStateT d a c b-\u003ec d",
          "package": "contstuff",
          "partial": "State",
          "signature": "s-\u003e(a-\u003es-\u003em r)-\u003eStateT r s m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a writer transformer.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "runWriterT",
          "package": "contstuff",
          "signature": "WriterT r m a -\u003e m r",
          "source": "src/Control-ContStuff-Trans.html#runWriterT",
          "type": "function"
        },
        "index": {
          "description": "Run writer transformer",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "runWriterT",
          "normalized": "WriterT a b c-\u003eb a",
          "package": "contstuff",
          "partial": "Writer",
          "signature": "WriterT r m a-\u003em r",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:runWriterT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eEitherT\u003c/a\u003e\u003c/code\u003e computation and return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if it results in a\n right value, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "testEitherT",
          "package": "contstuff",
          "signature": "EitherT Bool e m a -\u003e m Bool",
          "source": "src/Control-ContStuff-Trans.html#testEitherT",
          "type": "function"
        },
        "index": {
          "description": "Run the EitherT computation and return True if it results in right value False otherwise",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "testEitherT",
          "normalized": "EitherT Bool a b c-\u003eb Bool",
          "package": "contstuff",
          "partial": "Either",
          "signature": "EitherT Bool e m a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:testEitherT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the \u003ccode\u003e\u003ca\u003eMaybeT\u003c/a\u003e\u003c/code\u003e computation and return \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e, if it results in a\n Just value, \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Control.ContStuff.Trans",
          "name": "testMaybeT",
          "package": "contstuff",
          "signature": "MaybeT Bool m a -\u003e m Bool",
          "source": "src/Control-ContStuff-Trans.html#testMaybeT",
          "type": "function"
        },
        "index": {
          "description": "Run the MaybeT computation and return True if it results in Just value False otherwise",
          "hierarchy": "Control ContStuff Trans",
          "module": "Control.ContStuff.Trans",
          "name": "testMaybeT",
          "normalized": "MaybeT Bool a b-\u003ea Bool",
          "package": "contstuff",
          "partial": "Maybe",
          "signature": "MaybeT Bool m a-\u003em Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff-Trans.html#v:testMaybeT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eConvenience module.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.ContStuff",
          "name": "ContStuff",
          "package": "contstuff",
          "source": "src/Control-ContStuff.html",
          "type": "module"
        },
        "index": {
          "description": "Convenience module",
          "hierarchy": "Control ContStuff",
          "module": "Control.ContStuff",
          "name": "ContStuff",
          "package": "contstuff",
          "partial": "Cont Stuff",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/contstuff/docs/Control-ContStuff.html#"
      }
    }
  ]
]