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
        "word": "simple-observer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA synchronous implementation of the \u003ccode\u003e\u003ca\u003eSubject\u003c/a\u003e\u003c/code\u003e\n     typeclass, , based on Observable.hs by Bastiaan Heeren,\n     originally from\n     \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/view/Afp0607/ExerciseWXHaskell\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eSubject\u003c/a\u003e\u003c/code\u003e implementation defined in this module\nuses \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003es to provide a simple and threadsafe synchronous\nimplementation of the Observer design pattern.\n\u003c/p\u003e\u003cp\u003eNote that no constructor for \u003ccode\u003e\u003ca\u003eSub\u003c/a\u003e\u003c/code\u003e is exported: client code must use\nthe \u003ccode\u003e\u003ca\u003ecreateSub\u003c/a\u003e\u003c/code\u003e smart constructor.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Observer.Synchronous",
          "name": "Synchronous",
          "package": "simple-observer",
          "source": "src/Control-Observer-Synchronous.html",
          "type": "module"
        },
        "index": {
          "description": "synchronous implementation of the Subject typeclass based on Observable.hs by Bastiaan Heeren originally from http www.cs.uu.nl wiki bin view Afp0607 ExerciseWXHaskell The Subject implementation defined in this module uses MVar to provide simple and threadsafe synchronous implementation of the Observer design pattern Note that no constructor for Sub is exported client code must use the createSub smart constructor",
          "hierarchy": "Control Observer Synchronous",
          "module": "Control.Observer.Synchronous",
          "name": "Synchronous",
          "package": "simple-observer",
          "partial": "Synchronous",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer-Synchronous.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThreadsafe synchronous Subject implementation.\n\u003c/p\u003e",
          "module": "Control.Observer.Synchronous",
          "name": "Sub",
          "package": "simple-observer",
          "source": "src/Control-Observer-Synchronous.html#Sub",
          "type": "data"
        },
        "index": {
          "description": "Threadsafe synchronous Subject implementation",
          "hierarchy": "Control Observer Synchronous",
          "module": "Control.Observer.Synchronous",
          "name": "Sub",
          "package": "simple-observer",
          "partial": "Sub",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer-Synchronous.html#t:Sub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSmart constructor for Sub.\n\u003c/p\u003e",
          "module": "Control.Observer.Synchronous",
          "name": "createSub",
          "package": "simple-observer",
          "signature": "a -\u003e IO (Sub a)",
          "source": "src/Control-Observer-Synchronous.html#createSub",
          "type": "function"
        },
        "index": {
          "description": "Smart constructor for Sub",
          "hierarchy": "Control Observer Synchronous",
          "module": "Control.Observer.Synchronous",
          "name": "createSub",
          "normalized": "a-\u003eIO(Sub a)",
          "package": "simple-observer",
          "partial": "Sub",
          "signature": "a-\u003eIO(Sub a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer-Synchronous.html#v:createSub"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the Observer pattern, based on Observable.hs\n     by Bastiaan Heeren, originally from\n     \u003ca\u003ehttp://www.cs.uu.nl/wiki/bin/view/Afp0607/ExerciseWXHaskell\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eThis module defines the \u003ccode\u003e\u003ca\u003eSubject\u003c/a\u003e\u003c/code\u003e typeclass, specifying the\ncapabilities of an observable value.  See other modules in the package\nfor example implementations of this typeclass.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Observer",
          "name": "Observer",
          "package": "simple-observer",
          "source": "src/Control-Observer.html",
          "type": "module"
        },
        "index": {
          "description": "An implementation of the Observer pattern based on Observable.hs by Bastiaan Heeren originally from http www.cs.uu.nl wiki bin view Afp0607 ExerciseWXHaskell This module defines the Subject typeclass specifying the capabilities of an observable value See other modules in the package for example implementations of this typeclass",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "Observer",
          "package": "simple-observer",
          "partial": "Observer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA type class for observable objects.  A minimal implementation\n implements all of these functions.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "Subject",
          "package": "simple-observer",
          "source": "src/Control-Observer.html#Subject",
          "type": "class"
        },
        "index": {
          "description": "type class for observable objects minimal implementation implements all of these functions",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "Subject",
          "package": "simple-observer",
          "partial": "Subject",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#t:Subject"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an observer which doesn't care about the subject's value,\n only that it's changed.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "addConstObserver",
          "package": "simple-observer",
          "signature": "sub -\u003e IO () -\u003e IO ()",
          "source": "src/Control-Observer.html#addConstObserver",
          "type": "function"
        },
        "index": {
          "description": "Add an observer which doesn care about the subject value only that it changed",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "addConstObserver",
          "normalized": "a-\u003eIO()-\u003eIO()",
          "package": "simple-observer",
          "partial": "Const Observer",
          "signature": "sub-\u003eIO()-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:addConstObserver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd an observer function.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "addObserver",
          "package": "simple-observer",
          "signature": "sub -\u003e (val -\u003e IO ()) -\u003e IO ()",
          "source": "src/Control-Observer.html#addObserver",
          "type": "method"
        },
        "index": {
          "description": "Add an observer function",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "addObserver",
          "normalized": "a-\u003e(b-\u003eIO())-\u003eIO()",
          "package": "simple-observer",
          "partial": "Observer",
          "signature": "sub-\u003e(val-\u003eIO())-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:addObserver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eApply an update function to the subject value, and notify\n observers.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "changeValue",
          "package": "simple-observer",
          "signature": "sub -\u003e (val -\u003e val) -\u003e IO ()",
          "source": "src/Control-Observer.html#changeValue",
          "type": "function"
        },
        "index": {
          "description": "Apply an update function to the subject value and notify observers",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "changeValue",
          "normalized": "a-\u003e(b-\u003eb)-\u003eIO()",
          "package": "simple-observer",
          "partial": "Value",
          "signature": "sub-\u003e(val-\u003eval)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:changeValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of observers.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "getObservers",
          "package": "simple-observer",
          "signature": "sub -\u003e IO [val -\u003e IO ()]",
          "source": "src/Control-Observer.html#getObservers",
          "type": "method"
        },
        "index": {
          "description": "Get the list of observers",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "getObservers",
          "normalized": "a-\u003eIO[b-\u003eIO()]",
          "package": "simple-observer",
          "partial": "Observers",
          "signature": "sub-\u003eIO[val-\u003eIO()]",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:getObservers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the subject's current value.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "getValue",
          "package": "simple-observer",
          "signature": "sub -\u003e IO val",
          "source": "src/Control-Observer.html#getValue",
          "type": "method"
        },
        "index": {
          "description": "Get the subject current value",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "getValue",
          "normalized": "a-\u003eIO b",
          "package": "simple-observer",
          "partial": "Value",
          "signature": "sub-\u003eIO val",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNotify observers that the subject's value has changed.  Rarely\n called explicitly: usually called via \u003ccode\u003e\u003ca\u003esetValue\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "notifyObservers",
          "package": "simple-observer",
          "signature": "sub -\u003e IO ()",
          "source": "src/Control-Observer.html#notifyObservers",
          "type": "function"
        },
        "index": {
          "description": "Notify observers that the subject value has changed Rarely called explicitly usually called via setValue",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "notifyObservers",
          "normalized": "a-\u003eIO()",
          "package": "simple-observer",
          "partial": "Observers",
          "signature": "sub-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:notifyObservers"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the subject value, and notify observers.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "setValue",
          "package": "simple-observer",
          "signature": "sub -\u003e val -\u003e IO ()",
          "source": "src/Control-Observer.html#setValue",
          "type": "function"
        },
        "index": {
          "description": "Update the subject value and notify observers",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "setValue",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "simple-observer",
          "partial": "Value",
          "signature": "sub-\u003eval-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:setValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUpdate the subject's value quietly; should NOT call\n notifyObservers.  Rarely called; usually you want \u003ccode\u003e\u003ca\u003esetValue\u003c/a\u003e\u003c/code\u003e,\n which does notify the subject's observers of the change.\n\u003c/p\u003e",
          "module": "Control.Observer",
          "name": "setValue'",
          "package": "simple-observer",
          "signature": "sub -\u003e val -\u003e IO ()",
          "source": "src/Control-Observer.html#setValue%27",
          "type": "method"
        },
        "index": {
          "description": "Update the subject value quietly should NOT call notifyObservers Rarely called usually you want setValue which does notify the subject observers of the change",
          "hierarchy": "Control Observer",
          "module": "Control.Observer",
          "name": "setValue'",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "simple-observer",
          "partial": "Value'",
          "signature": "sub-\u003eval-\u003eIO()",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/simple-observer/docs/Control-Observer.html#v:setValue-39-"
      }
    }
  ]
]