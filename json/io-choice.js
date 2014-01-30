[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides a function to generate a choice operator\n in lifted IO monad by specifying exceptions to be caught.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted.TH",
        "fct-package": "io-choice",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-IOChoice-Lifted-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This package provides function to generate choice operator in lifted IO monad by specifying exceptions to be caught",
        "hierarchy": "Control Exception IOChoice Lifted TH",
        "module": "Control.Exception.IOChoice.Lifted.TH",
        "name": "TH",
        "normalized": "",
        "package": "io-choice",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted-TH.html#v:newIOChoice",
      "description": {
        "fct-descr": "\u003cp\u003eA function to generate a choice operator in lifted IO monad.\n \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e is automatically added to specified exceptions.\n So, \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e can be used with\n the new operator.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.Exception\n import Control.Exception.IOChoice.Lifted.TH\n\n (||\u003e\u003e) :: MonadBaseControl IO m =\u003e m a -\u003e m a -\u003e m a\n (||\u003e\u003e) = $(newIOChoice [''ErrorCall, ''ArithException])\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted.TH",
        "fct-package": "io-choice",
        "fct-signature": "[Name] -\u003e ExpQ",
        "fct-source": "src/Control-Exception-IOChoice-Lifted-TH.html#newIOChoice",
        "fct-type": "function",
        "title": "newIOChoice"
      },
      "index": {
        "description": "function to generate choice operator in lifted IO monad IOException is automatically added to specified exceptions So goNext can be used with the new operator LANGUAGE TemplateHaskell import Control.Exception import Control.Exception.IOChoice.Lifted.TH MonadBaseControl IO newIOChoice ErrorCall ArithException",
        "hierarchy": "Control Exception IOChoice Lifted TH",
        "module": "Control.Exception.IOChoice.Lifted.TH",
        "name": "newIOChoice",
        "normalized": "[Name]-\u003eExpQ",
        "package": "io-choice",
        "partial": "IOChoice",
        "signature": "[Name]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides the choice operator (\u003ccode\u003e\u003ca\u003e||\u003e\u003c/a\u003e\u003c/code\u003e) for\n lifted IO monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted",
        "fct-package": "io-choice",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-IOChoice-Lifted.html",
        "fct-type": "module",
        "title": "Lifted"
      },
      "index": {
        "description": "This package provides the choice operator for lifted IO monad",
        "hierarchy": "Control Exception IOChoice Lifted",
        "module": "Control.Exception.IOChoice.Lifted",
        "name": "Lifted",
        "normalized": "",
        "package": "io-choice",
        "partial": "Lifted",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:-124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used in the left monad,\n then the right monad is performed. Note that \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n throws \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted",
        "fct-package": "io-choice",
        "fct-signature": "m a -\u003e m a -\u003e m a",
        "fct-source": "src/Control-Exception-IOChoice-Lifted.html#%7C%7C%3E",
        "fct-type": "function",
        "title": "(||\u003e)"
      },
      "index": {
        "description": "If IOException occurs or goNext is used in the left monad then the right monad is performed Note that fail throws IOException",
        "hierarchy": "Control Exception IOChoice Lifted",
        "module": "Control.Exception.IOChoice.Lifted",
        "name": "(||\u003e) ||\u003e",
        "normalized": "a b-\u003ea b-\u003ea b",
        "package": "io-choice",
        "partial": "",
        "signature": "m a-\u003em a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:goNext",
      "description": {
        "fct-descr": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted",
        "fct-package": "io-choice",
        "fct-signature": "m a",
        "fct-source": "src/Control-Exception-IOChoice-Lifted.html#goNext",
        "fct-type": "function",
        "title": "goNext"
      },
      "index": {
        "description": "Go to the next IO monad by throwing IOException",
        "hierarchy": "Control Exception IOChoice Lifted",
        "module": "Control.Exception.IOChoice.Lifted",
        "name": "goNext",
        "normalized": "",
        "package": "io-choice",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:runAnyOne",
      "description": {
        "fct-descr": "\u003cp\u003eRun any one lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice.Lifted",
        "fct-package": "io-choice",
        "fct-signature": "[m a] -\u003e m a",
        "fct-source": "src/Control-Exception-IOChoice-Lifted.html#runAnyOne",
        "fct-type": "function",
        "title": "runAnyOne"
      },
      "index": {
        "description": "Run any one lifted IO monad",
        "hierarchy": "Control Exception IOChoice Lifted",
        "module": "Control.Exception.IOChoice.Lifted",
        "name": "runAnyOne",
        "normalized": "[a b]-\u003ea b",
        "package": "io-choice",
        "partial": "Any One",
        "signature": "[m a]-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-TH.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides a function to generate a choice operator\n in IO monad by specifying exceptions to be caught.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.IOChoice.TH",
        "fct-package": "io-choice",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-IOChoice-TH.html",
        "fct-type": "module",
        "title": "TH"
      },
      "index": {
        "description": "This package provides function to generate choice operator in IO monad by specifying exceptions to be caught",
        "hierarchy": "Control Exception IOChoice TH",
        "module": "Control.Exception.IOChoice.TH",
        "name": "TH",
        "normalized": "",
        "package": "io-choice",
        "partial": "TH",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-TH.html#v:newIOChoice",
      "description": {
        "fct-descr": "\u003cp\u003eA function to generate a choice operator in IO monad.\n \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e is automatically added to specified exceptions.\n So, \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e can be used with\n the new operator.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.Exception\n import Control.Exception.IOChoice.TH\n\n (||\u003e\u003e) :: IO a -\u003e IO a -\u003e IO a\n (||\u003e\u003e) = $(newIOChoice [''ErrorCall, ''ArithException])\n\u003c/pre\u003e",
        "fct-module": "Control.Exception.IOChoice.TH",
        "fct-package": "io-choice",
        "fct-signature": "[Name] -\u003e ExpQ",
        "fct-source": "src/Control-Exception-IOChoice-TH.html#newIOChoice",
        "fct-type": "function",
        "title": "newIOChoice"
      },
      "index": {
        "description": "function to generate choice operator in IO monad IOException is automatically added to specified exceptions So goNext can be used with the new operator LANGUAGE TemplateHaskell import Control.Exception import Control.Exception.IOChoice.TH IO IO IO newIOChoice ErrorCall ArithException",
        "hierarchy": "Control Exception IOChoice TH",
        "module": "Control.Exception.IOChoice.TH",
        "name": "newIOChoice",
        "normalized": "[Name]-\u003eExpQ",
        "package": "io-choice",
        "partial": "IOChoice",
        "signature": "[Name]-\u003eExpQ"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides the choice operator (\u003ccode\u003e\u003ca\u003e||\u003e\u003c/a\u003e\u003c/code\u003e) for\n IO monad.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Control.Exception.IOChoice",
        "fct-package": "io-choice",
        "fct-signature": "module",
        "fct-source": "src/Control-Exception-IOChoice.html",
        "fct-type": "module",
        "title": "IOChoice"
      },
      "index": {
        "description": "This package provides the choice operator for IO monad",
        "hierarchy": "Control Exception IOChoice",
        "module": "Control.Exception.IOChoice",
        "name": "IOChoice",
        "normalized": "",
        "package": "io-choice",
        "partial": "IOChoice",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:-124--124--62-",
      "description": {
        "fct-descr": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used in the left IO,\n then the right IO is performed. Note that \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n throws \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice",
        "fct-package": "io-choice",
        "fct-signature": "IO a -\u003e IO a -\u003e IO a",
        "fct-source": "src/Control-Exception-IOChoice.html#%7C%7C%3E",
        "fct-type": "function",
        "title": "(||\u003e)"
      },
      "index": {
        "description": "If IOException occurs or goNext is used in the left IO then the right IO is performed Note that fail throws IOException",
        "hierarchy": "Control Exception IOChoice",
        "module": "Control.Exception.IOChoice",
        "name": "(||\u003e) ||\u003e",
        "normalized": "IO a-\u003eIO a-\u003eIO a",
        "package": "io-choice",
        "partial": "",
        "signature": "IO a-\u003eIO a-\u003eIO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:goNext",
      "description": {
        "fct-descr": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice",
        "fct-package": "io-choice",
        "fct-signature": "IO a",
        "fct-source": "src/Control-Exception-IOChoice.html#goNext",
        "fct-type": "function",
        "title": "goNext"
      },
      "index": {
        "description": "Go to the next IO monad by throwing IOException",
        "hierarchy": "Control Exception IOChoice",
        "module": "Control.Exception.IOChoice",
        "name": "goNext",
        "normalized": "",
        "package": "io-choice",
        "partial": "Next",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:runAnyOne",
      "description": {
        "fct-descr": "\u003cp\u003eRun any one \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Control.Exception.IOChoice",
        "fct-package": "io-choice",
        "fct-signature": "[IO a] -\u003e IO a",
        "fct-source": "src/Control-Exception-IOChoice.html#runAnyOne",
        "fct-type": "function",
        "title": "runAnyOne"
      },
      "index": {
        "description": "Run any one IO monad",
        "hierarchy": "Control Exception IOChoice",
        "module": "Control.Exception.IOChoice",
        "name": "runAnyOne",
        "normalized": "[IO a]-\u003eIO a",
        "package": "io-choice",
        "partial": "Any One",
        "signature": "[IO a]-\u003eIO a"
      }
    }
  }
]