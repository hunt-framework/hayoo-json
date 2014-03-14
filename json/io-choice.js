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
        "word": "io-choice"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides a function to generate a choice operator\n in lifted IO monad by specifying exceptions to be caught.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.IOChoice.Lifted.TH",
          "name": "TH",
          "package": "io-choice",
          "source": "src/Control-Exception-IOChoice-Lifted-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides function to generate choice operator in lifted IO monad by specifying exceptions to be caught",
          "hierarchy": "Control Exception IOChoice Lifted TH",
          "module": "Control.Exception.IOChoice.Lifted.TH",
          "name": "TH",
          "package": "io-choice",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to generate a choice operator in lifted IO monad.\n \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e is automatically added to specified exceptions.\n So, \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e can be used with\n the new operator.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.Exception\n import Control.Exception.IOChoice.Lifted.TH\n\n (||\u003e\u003e) :: MonadBaseControl IO m =\u003e m a -\u003e m a -\u003e m a\n (||\u003e\u003e) = $(newIOChoice [''ErrorCall, ''ArithException])\n\u003c/pre\u003e",
          "module": "Control.Exception.IOChoice.Lifted.TH",
          "name": "newIOChoice",
          "package": "io-choice",
          "signature": "[Name] -\u003e ExpQ",
          "source": "src/Control-Exception-IOChoice-Lifted-TH.html#newIOChoice",
          "type": "function"
        },
        "index": {
          "description": "function to generate choice operator in lifted IO monad IOException is automatically added to specified exceptions So goNext can be used with the new operator LANGUAGE TemplateHaskell import Control.Exception import Control.Exception.IOChoice.Lifted.TH MonadBaseControl IO newIOChoice ErrorCall ArithException",
          "hierarchy": "Control Exception IOChoice Lifted TH",
          "module": "Control.Exception.IOChoice.Lifted.TH",
          "name": "newIOChoice",
          "normalized": "[Name]-\u003eExpQ",
          "package": "io-choice",
          "partial": "IOChoice",
          "signature": "[Name]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted-TH.html#v:newIOChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides the choice operator (\u003ccode\u003e\u003ca\u003e||\u003e\u003c/a\u003e\u003c/code\u003e) for\n lifted IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "Lifted",
          "package": "io-choice",
          "source": "src/Control-Exception-IOChoice-Lifted.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides the choice operator for lifted IO monad",
          "hierarchy": "Control Exception IOChoice Lifted",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "Lifted",
          "package": "io-choice",
          "partial": "Lifted",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used in the left monad,\n then the right monad is performed. Note that \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n throws \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "(||\u003e)",
          "package": "io-choice",
          "signature": "m a -\u003e m a -\u003e m a",
          "source": "src/Control-Exception-IOChoice-Lifted.html#%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "If IOException occurs or goNext is used in the left monad then the right monad is performed Note that fail throws IOException",
          "hierarchy": "Control Exception IOChoice Lifted",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "(||\u003e) ||\u003e",
          "normalized": "a b-\u003ea b-\u003ea b",
          "package": "io-choice",
          "signature": "m a-\u003em a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:-124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "goNext",
          "package": "io-choice",
          "signature": "m a",
          "source": "src/Control-Exception-IOChoice-Lifted.html#goNext",
          "type": "function"
        },
        "index": {
          "description": "Go to the next IO monad by throwing IOException",
          "hierarchy": "Control Exception IOChoice Lifted",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "goNext",
          "package": "io-choice",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:goNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun any one lifted \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "runAnyOne",
          "package": "io-choice",
          "signature": "[m a] -\u003e m a",
          "source": "src/Control-Exception-IOChoice-Lifted.html#runAnyOne",
          "type": "function"
        },
        "index": {
          "description": "Run any one lifted IO monad",
          "hierarchy": "Control Exception IOChoice Lifted",
          "module": "Control.Exception.IOChoice.Lifted",
          "name": "runAnyOne",
          "normalized": "[a b]-\u003ea b",
          "package": "io-choice",
          "partial": "Any One",
          "signature": "[m a]-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-Lifted.html#v:runAnyOne"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides a function to generate a choice operator\n in IO monad by specifying exceptions to be caught.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.IOChoice.TH",
          "name": "TH",
          "package": "io-choice",
          "source": "src/Control-Exception-IOChoice-TH.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides function to generate choice operator in IO monad by specifying exceptions to be caught",
          "hierarchy": "Control Exception IOChoice TH",
          "module": "Control.Exception.IOChoice.TH",
          "name": "TH",
          "package": "io-choice",
          "partial": "TH",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-TH.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA function to generate a choice operator in IO monad.\n \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e is automatically added to specified exceptions.\n So, \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e can be used with\n the new operator.\n\u003c/p\u003e\u003cpre\u003e {-# LANGUAGE TemplateHaskell #-}\n import Control.Exception\n import Control.Exception.IOChoice.TH\n\n (||\u003e\u003e) :: IO a -\u003e IO a -\u003e IO a\n (||\u003e\u003e) = $(newIOChoice [''ErrorCall, ''ArithException])\n\u003c/pre\u003e",
          "module": "Control.Exception.IOChoice.TH",
          "name": "newIOChoice",
          "package": "io-choice",
          "signature": "[Name] -\u003e ExpQ",
          "source": "src/Control-Exception-IOChoice-TH.html#newIOChoice",
          "type": "function"
        },
        "index": {
          "description": "function to generate choice operator in IO monad IOException is automatically added to specified exceptions So goNext can be used with the new operator LANGUAGE TemplateHaskell import Control.Exception import Control.Exception.IOChoice.TH IO IO IO newIOChoice ErrorCall ArithException",
          "hierarchy": "Control Exception IOChoice TH",
          "module": "Control.Exception.IOChoice.TH",
          "name": "newIOChoice",
          "normalized": "[Name]-\u003eExpQ",
          "package": "io-choice",
          "partial": "IOChoice",
          "signature": "[Name]-\u003eExpQ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice-TH.html#v:newIOChoice"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis package provides the choice operator (\u003ccode\u003e\u003ca\u003e||\u003e\u003c/a\u003e\u003c/code\u003e) for\n IO monad.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Exception.IOChoice",
          "name": "IOChoice",
          "package": "io-choice",
          "source": "src/Control-Exception-IOChoice.html",
          "type": "module"
        },
        "index": {
          "description": "This package provides the choice operator for IO monad",
          "hierarchy": "Control Exception IOChoice",
          "module": "Control.Exception.IOChoice",
          "name": "IOChoice",
          "package": "io-choice",
          "partial": "IOChoice",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIf \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e occurs or \u003ccode\u003e\u003ca\u003egoNext\u003c/a\u003e\u003c/code\u003e is used in the left IO,\n then the right IO is performed. Note that \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e\n throws \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice",
          "name": "(||\u003e)",
          "package": "io-choice",
          "signature": "IO a -\u003e IO a -\u003e IO a",
          "source": "src/Control-Exception-IOChoice.html#%7C%7C%3E",
          "type": "function"
        },
        "index": {
          "description": "If IOException occurs or goNext is used in the left IO then the right IO is performed Note that fail throws IOException",
          "hierarchy": "Control Exception IOChoice",
          "module": "Control.Exception.IOChoice",
          "name": "(||\u003e) ||\u003e",
          "normalized": "IO a-\u003eIO a-\u003eIO a",
          "package": "io-choice",
          "signature": "IO a-\u003eIO a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:-124--124--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGo to the next \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad by throwing \u003ccode\u003e\u003ca\u003eIOException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice",
          "name": "goNext",
          "package": "io-choice",
          "signature": "IO a",
          "source": "src/Control-Exception-IOChoice.html#goNext",
          "type": "function"
        },
        "index": {
          "description": "Go to the next IO monad by throwing IOException",
          "hierarchy": "Control Exception IOChoice",
          "module": "Control.Exception.IOChoice",
          "name": "goNext",
          "package": "io-choice",
          "partial": "Next",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:goNext"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun any one \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
          "module": "Control.Exception.IOChoice",
          "name": "runAnyOne",
          "package": "io-choice",
          "signature": "[IO a] -\u003e IO a",
          "source": "src/Control-Exception-IOChoice.html#runAnyOne",
          "type": "function"
        },
        "index": {
          "description": "Run any one IO monad",
          "hierarchy": "Control Exception IOChoice",
          "module": "Control.Exception.IOChoice",
          "name": "runAnyOne",
          "normalized": "[IO a]-\u003eIO a",
          "package": "io-choice",
          "partial": "Any One",
          "signature": "[IO a]-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-choice/docs/Control-Exception-IOChoice.html#v:runAnyOne"
      }
    }
  ]
]