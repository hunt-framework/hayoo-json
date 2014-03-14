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
        "word": "procrastinating-variable"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eProcrastinating variables (\u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003es) are meant to be used in cases where\n you want to give someone a value that you do not have available yet,\n but will definitely have ready by the time that they need to use it.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003es have the advantage that you do not make the user of your value\n execute some kind of unwrapping routine in order to get access to the\n value within.  For example, this is useful when you are constructing\n closures that you want to go ahead and construct now even though some\n of the values that they contain are not available yet.\n\u003c/p\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003es are implemented with a lazy thunk that reads from an\n \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e; before the \u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e is written to, it contains \u003ccode\u003e_|_\u003c/code\u003e ( in\n the form of an exception with a descriptive error message) so that\n an error is raised in the user code if the variable is accidently\n accessed before the value is ready.\n\u003c/p\u003e\u003cp\u003eNOTE: \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003es are modeled closely on the \u003ccode\u003eIVar\u003c/code\u003e implementation in the\n        ivar-simple package.  The major difference is that if you try\n        to read an \u003ccode\u003eIVar\u003c/code\u003e before it has been given a value, it blocks\n        until the value is available, whereas reading from a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e\n        before it is ready raises an exception.  The reason behind the\n        different symantics for \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e is because if the user accidently\n        accesses the value too early, you want there to be a lot of\n        noise to let him or her know about it, rather than merely\n        blocking the thread indefinitely and causing them to wonder\n        what went wrong.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.PVar",
          "name": "PVar",
          "package": "procrastinating-variable",
          "source": "src/Data-PVar.html",
          "type": "module"
        },
        "index": {
          "description": "Procrastinating variables PVar are meant to be used in cases where you want to give someone value that you do not have available yet but will definitely have ready by the time that they need to use it PVar have the advantage that you do not make the user of your value execute some kind of unwrapping routine in order to get access to the value within For example this is useful when you are constructing closures that you want to go ahead and construct now even though some of the values that they contain are not available yet PVar are implemented with lazy thunk that reads from an IORef before the IORef is written to it contains in the form of an exception with descriptive error message so that an error is raised in the user code if the variable is accidently accessed before the value is ready NOTE PVar are modeled closely on the IVar implementation in the ivar-simple package The major difference is that if you try to read an IVar before it has been given value it blocks until the value is available whereas reading from PVar before it is ready raises an exception The reason behind the different symantics for PVar is because if the user accidently accesses the value too early you want there to be lot of noise to let him or her know about it rather than merely blocking the thread indefinitely and causing them to wonder what went wrong",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "PVar",
          "package": "procrastinating-variable",
          "partial": "PVar",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exception raised when a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e is accessed before it is ready.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "AccessedTooEarly",
          "package": "procrastinating-variable",
          "source": "src/Data-PVar.html#AccessedTooEarly",
          "type": "data"
        },
        "index": {
          "description": "The exception raised when PVar is accessed before it is ready",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "AccessedTooEarly",
          "package": "procrastinating-variable",
          "partial": "Accessed Too Early",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#t:AccessedTooEarly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe exception raised by \u003ccode\u003e\u003ca\u003ewritePVar\u003c/a\u003e\u003c/code\u003e when one attempts to write to a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e\n  after it has already been given a value.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "AlreadyHasAValue",
          "package": "procrastinating-variable",
          "source": "src/Data-PVar.html#AlreadyHasAValue",
          "type": "data"
        },
        "index": {
          "description": "The exception raised by writePVar when one attempts to write to PVar after it has already been given value",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "AlreadyHasAValue",
          "package": "procrastinating-variable",
          "partial": "Already Has AValue",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#t:AlreadyHasAValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA procrastinating variable (\u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e for short).\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "PVar",
          "package": "procrastinating-variable",
          "source": "src/Data-PVar.html#PVar",
          "type": "data"
        },
        "index": {
          "description": "procrastinating variable PVar for short",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "PVar",
          "package": "procrastinating-variable",
          "partial": "PVar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#t:PVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new, empty \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e, and returns both a reference you can\n  use to fill the value later as well as a lazy thunk which you can\n  treat as a normal variable;  the latter evaluates to the value\n  stored in the reference if it is available and to bottom otherwise.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "newPVar",
          "package": "procrastinating-variable",
          "signature": "IO (PVar a, a)",
          "source": "src/Data-PVar.html#newPVar",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty PVar and returns both reference you can use to fill the value later as well as lazy thunk which you can treat as normal variable the latter evaluates to the value stored in the reference if it is available and to bottom otherwise",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "newPVar",
          "normalized": "IO(PVar a,a)",
          "package": "procrastinating-variable",
          "partial": "PVar",
          "signature": "IO(PVar a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#v:newPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreates a new, empty \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e that raises an exception with a custom\n  message.  (Use this if you want to make explicit to the user of this\n  variable exactly when they should expect its value to become\n  available.)\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "newPVarWithCustomMessage",
          "package": "procrastinating-variable",
          "signature": "String -\u003e IO (PVar a, a)",
          "source": "src/Data-PVar.html#newPVarWithCustomMessage",
          "type": "function"
        },
        "index": {
          "description": "Creates new empty PVar that raises an exception with custom message Use this if you want to make explicit to the user of this variable exactly when they should expect its value to become available",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "newPVarWithCustomMessage",
          "normalized": "String-\u003eIO(PVar a,a)",
          "package": "procrastinating-variable",
          "partial": "PVar With Custom Message",
          "signature": "String-\u003eIO(PVar a,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#v:newPVarWithCustomMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTries to read a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e, but does not throw an exception if\n the value is not ready yet;  instead, if the value is ready it\n returns \u003ccode\u003eJust value\u003c/code\u003e and otherwise it returns \u003ccode\u003eNothing\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "tryReadPVar",
          "package": "procrastinating-variable",
          "signature": "PVar a -\u003e IO (Maybe a)",
          "source": "src/Data-PVar.html#tryReadPVar",
          "type": "function"
        },
        "index": {
          "description": "Tries to read PVar but does not throw an exception if the value is not ready yet instead if the value is ready it returns Just value and otherwise it returns Nothing",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "tryReadPVar",
          "normalized": "PVar a-\u003eIO(Maybe a)",
          "package": "procrastinating-variable",
          "partial": "Read PVar",
          "signature": "PVar a-\u003eIO(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#v:tryReadPVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAttempts to a value to a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e, but instead of throwing an exception\n it returns \u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if it was successful and \u003ccode\u003e\u003ca\u003eFalse\u003c/a\u003e\u003c/code\u003e otherwise.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "tryWritePVar",
          "package": "procrastinating-variable",
          "signature": "PVar a -\u003e a -\u003e IO Bool",
          "source": "src/Data-PVar.html#tryWritePVar",
          "type": "function"
        },
        "index": {
          "description": "Attempts to value to PVar but instead of throwing an exception it returns True if it was successful and False otherwise",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "tryWritePVar",
          "normalized": "PVar a-\u003ea-\u003eIO Bool",
          "package": "procrastinating-variable",
          "partial": "Write PVar",
          "signature": "PVar a-\u003ea-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#v:tryWritePVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrites a value to a \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e. Raises an \u003ccode\u003e\u003ca\u003eAlreadyHasAValue\u003c/a\u003e\u003c/code\u003e exception\n if the \u003ccode\u003e\u003ca\u003ePVar\u003c/a\u003e\u003c/code\u003e already has a value.\n\u003c/p\u003e",
          "module": "Data.PVar",
          "name": "writePVar",
          "package": "procrastinating-variable",
          "signature": "PVar a -\u003e a -\u003e IO ()",
          "source": "src/Data-PVar.html#writePVar",
          "type": "function"
        },
        "index": {
          "description": "Writes value to PVar Raises an AlreadyHasAValue exception if the PVar already has value",
          "hierarchy": "Data PVar",
          "module": "Data.PVar",
          "name": "writePVar",
          "normalized": "PVar a-\u003ea-\u003eIO()",
          "package": "procrastinating-variable",
          "partial": "PVar",
          "signature": "PVar a-\u003ea-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/procrastinating-variable/docs/Data-PVar.html#v:writePVar"
      }
    }
  ]
]