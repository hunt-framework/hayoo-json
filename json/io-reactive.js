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
        "word": "io-reactive"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn API for generating reactive objects, as used in the TIMBER programming language.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Control.Concurrent.Reactive",
          "name": "Reactive",
          "package": "io-reactive",
          "source": "src/Control-Concurrent-Reactive.html",
          "type": "module"
        },
        "index": {
          "description": "An API for generating reactive objects as used in the TIMBER programming language",
          "hierarchy": "Control Concurrent Reactive",
          "module": "Control.Concurrent.Reactive",
          "name": "Reactive",
          "package": "io-reactive",
          "partial": "Reactive",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/io-reactive/docs/Control-Concurrent-Reactive.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Reactive",
          "name": "Action",
          "package": "io-reactive",
          "source": "src/Control-Concurrent-Reactive.html#Action",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent Reactive",
          "module": "Control.Concurrent.Reactive",
          "name": "Action",
          "package": "io-reactive",
          "partial": "Action",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/io-reactive/docs/Control-Concurrent-Reactive.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Reactive",
          "name": "Request",
          "package": "io-reactive",
          "source": "src/Control-Concurrent-Reactive.html#Request",
          "type": "type"
        },
        "index": {
          "hierarchy": "Control Concurrent Reactive",
          "module": "Control.Concurrent.Reactive",
          "name": "Request",
          "package": "io-reactive",
          "partial": "Request",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/io-reactive/docs/Control-Concurrent-Reactive.html#t:Request"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Control.Concurrent.Reactive",
          "name": "reactiveObjectIO",
          "package": "io-reactive",
          "signature": "state -\u003e (ThreadId -\u003e (forall r.  Request state r -\u003e IO r) -\u003e (Action state -\u003e IO ()) -\u003e IO () -\u003e object) -\u003e IO object",
          "source": "src/Control-Concurrent-Reactive.html#reactiveObjectIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Control Concurrent Reactive",
          "module": "Control.Concurrent.Reactive",
          "name": "reactiveObjectIO",
          "normalized": "a-\u003e(ThreadId-\u003e(b c Request a d-\u003eIO d)-\u003e(Action a-\u003eIO())-\u003eIO()-\u003ee)-\u003eIO e",
          "package": "io-reactive",
          "partial": "Object IO",
          "signature": "state-\u003e(ThreadId-\u003e(forall r. Request state r-\u003eIO r)-\u003e(Action state-\u003eIO())-\u003eIO()-\u003eobject)-\u003eIO object",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/io-reactive/docs/Control-Concurrent-Reactive.html#v:reactiveObjectIO"
      }
    }
  ]
]