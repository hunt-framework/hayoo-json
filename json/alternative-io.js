[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eLifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e like \u003ccode\u003eAlternative\u003c/code\u003e instance. Due to technical limitation,\n   Lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e is not an instance of \u003ccode\u003eAlternative\u003c/code\u003e. (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) is provided\n   instead.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Alternative-IO-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "Lifted IO like Alternative instance Due to technical limitation Lifted IO is not an instance of Alternative is provided instead",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#t:AltIOLiftedGoNext",
      "description": {
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "data",
        "fct-source": "src/Data-Alternative-IO-Lifted.html#AltIOLiftedGoNext",
        "fct-type": "data",
        "title": "AltIOLiftedGoNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "AltIOLiftedGoNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Alt IOLifted Go Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:-60--124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIf the left \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad of (\u003ccode\u003e\u003ca\u003e\u003c||\u003e\u003c/a\u003e\u003c/code\u003e) causes an error or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used,\n   the right \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad is executed.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Data-Alternative-IO-Lifted.html#%3C%7C%7C%3E",
        "fct-type": "function",
        "title": "(\u003c||\u003e)"
      },
      "index": {
        "description": "If the left IO monad of causes an error or goNext is used the right IO monad is executed",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "(\u003c||\u003e) \u003c||\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "alternative-io",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:AltIOLiftedGoNext",
      "description": {
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "AltIOLiftedGoNext",
        "fct-source": "src/Data-Alternative-IO-Lifted.html#AltIOLiftedGoNext",
        "fct-type": "function",
        "title": "AltIOLiftedGoNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "AltIOLiftedGoNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Alt IOLifted Go Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:goNext",
      "description": {
        "fct-descr": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eAltIOLiftedGoNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "m a",
        "fct-source": "src/Data-Alternative-IO-Lifted.html#goNext",
        "fct-type": "function",
        "title": "goNext"
      },
      "index": {
        "description": "Go to the next IO monad by throwing AltIOLiftedGoNext",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "goNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO-Lifted.html#v:runAnyOne",
      "description": {
        "fct-descr": "\u003cp\u003eRun any one lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO.Lifted",
        "fct-package": "alternative-io",
        "fct-signature": "[m a] -\u003e m a",
        "fct-source": "src/Data-Alternative-IO-Lifted.html#runAnyOne",
        "fct-type": "function",
        "title": "runAnyOne"
      },
      "index": {
        "description": "Run any one lifted IO monad",
        "hierarchy": "Data Alternative IO Lifted",
        "module": "Data.Alternative.IO.Lifted",
        "name": "runAnyOne",
        "normalized": "[a b]-\u003ea b",
        "package": "alternative-io",
        "partial": "Any One",
        "signature": "[m a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003e\u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e as \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance.\n\u003c/p\u003e\u003cp\u003eIf the left \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad of (\u003ccode\u003e\u003ca\u003e\u003c|\u003e\u003c/a\u003e\u003c/code\u003e) causes an error or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used,\n   the right \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad is executed.\n\u003c/p\u003e\u003cp\u003eOf course, side effects cannot be rolled back. This means\n   that this \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e instance breaks the \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e laws.\n   But it's common in parsers.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.Alternative.IO",
        "fct-package": "alternative-io",
        "fct-signature": "module",
        "fct-source": "src/Data-Alternative-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "IO as Alternative instance If the left IO monad of causes an error or goNext is used the right IO monad is executed Of course side effects cannot be rolled back This means that this Alternative instance breaks the Alternative laws But it common in parsers",
        "hierarchy": "Data Alternative IO",
        "module": "Data.Alternative.IO",
        "name": "IO",
        "normalized": "",
        "package": "alternative-io",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#t:AltIOgoNext",
      "description": {
        "fct-descr": "\u003cp\u003eException to control \u003ccode\u003e\u003ca\u003eAlternative\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO",
        "fct-package": "alternative-io",
        "fct-signature": "data",
        "fct-source": "src/Data-Alternative-IO.html#AltIOgoNext",
        "fct-type": "data",
        "title": "AltIOgoNext"
      },
      "index": {
        "description": "Exception to control Alternative IO",
        "hierarchy": "Data Alternative IO",
        "module": "Data.Alternative.IO",
        "name": "AltIOgoNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Alt IOgo Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:AltIOgoNext",
      "description": {
        "fct-module": "Data.Alternative.IO",
        "fct-package": "alternative-io",
        "fct-signature": "AltIOgoNext",
        "fct-source": "src/Data-Alternative-IO.html#AltIOgoNext",
        "fct-type": "function",
        "title": "AltIOgoNext"
      },
      "index": {
        "description": "",
        "hierarchy": "Data Alternative IO",
        "module": "Data.Alternative.IO",
        "name": "AltIOgoNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Alt IOgo Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:goNext",
      "description": {
        "fct-descr": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eAltIOgoNext\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO",
        "fct-package": "alternative-io",
        "fct-signature": "IO a",
        "fct-source": "src/Data-Alternative-IO.html#goNext",
        "fct-type": "function",
        "title": "goNext"
      },
      "index": {
        "description": "Go to the next IO monad by throwing AltIOgoNext",
        "hierarchy": "Data Alternative IO",
        "module": "Data.Alternative.IO",
        "name": "goNext",
        "normalized": "",
        "package": "alternative-io",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/alternative-io/docs/Data-Alternative-IO.html#v:runAnyOne",
      "description": {
        "fct-descr": "\u003cp\u003eRun any one \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Data.Alternative.IO",
        "fct-package": "alternative-io",
        "fct-signature": "[IO a] -\u003e IO a",
        "fct-source": "src/Data-Alternative-IO.html#runAnyOne",
        "fct-type": "function",
        "title": "runAnyOne"
      },
      "index": {
        "description": "Run any one IO monad",
        "hierarchy": "Data Alternative IO",
        "module": "Data.Alternative.IO",
        "name": "runAnyOne",
        "normalized": "[IO a]-\u003eIO a",
        "package": "alternative-io",
        "partial": "Any One",
        "signature": "[IO a]-\u003eIO a"
      }
    }
  }
]