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
        "word": "alternative-io"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003eAlternative\u003c/code\u003e instance. Due to technical limitation,\n   Lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is not an instance of \u003ccode\u003eAlternative\u003c/code\u003e. (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) is provided\n   instead.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alternative.IO.Lifted",
          "name": "Lifted",
          "package": "alternative-io",
          "source": "src/Data-Alternative-IO-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "Lifted IO like Alternative instance Due to technical limitation Lifted IO is not an instance of Alternative is provided instead",
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "Lifted",
          "package": "alternative-io",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alternative.IO.Lifted",
          "name": "AltIOLiftedGoNext",
          "package": "alternative-io",
          "source": "src/Data-Alternative-IO-Lifted.html#AltIOLiftedGoNext",
          "type": "data"
        },
        "index": {
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "AltIOLiftedGoNext",
          "package": "alternative-io",
          "partial": "Alt IOLifted Go Next",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#t:AltIOLiftedGoNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf the left \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad of (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) causes an error or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used,\n   the right \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad is executed.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO.Lifted",
          "name": "(\u003c||\u003e)",
          "package": "alternative-io",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Data-Alternative-IO-Lifted.html#%3C%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "If the left IO monad of causes an error or goNext is used the right IO monad is executed",
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "(\u003c||\u003e) \u003c||\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "alternative-io",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:-60--124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alternative.IO.Lifted",
          "name": "AltIOLiftedGoNext",
          "package": "alternative-io",
          "signature": "AltIOLiftedGoNext",
          "source": "src/Data-Alternative-IO-Lifted.html#AltIOLiftedGoNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "AltIOLiftedGoNext",
          "package": "alternative-io",
          "partial": "Alt IOLifted Go Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:AltIOLiftedGoNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eAltIOLiftedGoNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO.Lifted",
          "name": "goNext",
          "package": "alternative-io",
          "signature": "m a",
          "source": "src/Data-Alternative-IO-Lifted.html#goNext",
          "type": "function"
        },
        "index": {
          "description": "Go to the next IO monad by throwing AltIOLiftedGoNext",
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "goNext",
          "package": "alternative-io",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:goNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun any one lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO.Lifted",
          "name": "runAnyOne",
          "package": "alternative-io",
          "signature": "[m a] -\u003e m a",
          "source": "src/Data-Alternative-IO-Lifted.html#runAnyOne",
          "type": "function"
        },
        "index": {
          "description": "Run any one lifted IO monad",
          "hierarchy": "Data Alternative IO Lifted",
          "module": "Data.Alternative.IO.Lifted",
          "name": "runAnyOne",
          "normalized": "[a b]-\u003ea b",
          "package": "alternative-io",
          "partial": "Any One",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:runAnyOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eIf the left \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad of (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) causes an error or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used,\n   the right \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad is executed.\n\u003c/p\u003e\u003cp\u003eOf course, side effects cannot be rolled back. This means\n   that this \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance breaks the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e laws.\n   But it's common in parsers.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Alternative.IO",
          "name": "IO",
          "package": "alternative-io",
          "source": "src/Data-Alternative-IO.html",
          "type": "module"
        },
        "index": {
          "description": "IO as Alternative instance If the left IO monad of causes an error or goNext is used the right IO monad is executed Of course side effects cannot be rolled back This means that this Alternative instance breaks the Alternative laws But it common in parsers",
          "hierarchy": "Data Alternative IO",
          "module": "Data.Alternative.IO",
          "name": "IO",
          "package": "alternative-io",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eException to control \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO",
          "name": "AltIOgoNext",
          "package": "alternative-io",
          "source": "src/Data-Alternative-IO.html#AltIOgoNext",
          "type": "data"
        },
        "index": {
          "description": "Exception to control Alternative IO",
          "hierarchy": "Data Alternative IO",
          "module": "Data.Alternative.IO",
          "name": "AltIOgoNext",
          "package": "alternative-io",
          "partial": "Alt IOgo Next",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#t:AltIOgoNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Data.Alternative.IO",
          "name": "AltIOgoNext",
          "package": "alternative-io",
          "signature": "AltIOgoNext",
          "source": "src/Data-Alternative-IO.html#AltIOgoNext",
          "type": "function"
        },
        "index": {
          "hierarchy": "Data Alternative IO",
          "module": "Data.Alternative.IO",
          "name": "AltIOgoNext",
          "package": "alternative-io",
          "partial": "Alt IOgo Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:AltIOgoNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eAltIOgoNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO",
          "name": "goNext",
          "package": "alternative-io",
          "signature": "IO a",
          "source": "src/Data-Alternative-IO.html#goNext",
          "type": "function"
        },
        "index": {
          "description": "Go to the next IO monad by throwing AltIOgoNext",
          "hierarchy": "Data Alternative IO",
          "module": "Data.Alternative.IO",
          "name": "goNext",
          "package": "alternative-io",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:goNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun any one \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Data.Alternative.IO",
          "name": "runAnyOne",
          "package": "alternative-io",
          "signature": "[IO a] -\u003e IO a",
          "source": "src/Data-Alternative-IO.html#runAnyOne",
          "type": "function"
        },
        "index": {
          "description": "Run any one IO monad",
          "hierarchy": "Data Alternative IO",
          "module": "Data.Alternative.IO",
          "name": "runAnyOne",
          "normalized": "[IO a]-\u003eIO a",
          "package": "alternative-io",
          "partial": "Any One",
          "signature": "[IO a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:runAnyOne"
      }
    }
  ]
]