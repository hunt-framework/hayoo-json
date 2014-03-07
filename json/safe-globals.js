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
        "word": "safe-globals"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eDeclare safe top-level mutable variables which scope like ordinary values.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Data.Global",
          "name": "Global",
          "package": "safe-globals",
          "source": "src/Data-Global.html",
          "type": "module"
        },
        "index": {
          "description": "Declare safe top-level mutable variables which scope like ordinary values",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "Global",
          "package": "safe-globals",
          "partial": "Global",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of macros for declaring variables.\n\u003c/p\u003e",
          "module": "Data.Global",
          "name": "Declare",
          "package": "safe-globals",
          "source": "src/Data-Global.html#Declare",
          "type": "type"
        },
        "index": {
          "description": "The type of macros for declaring variables",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "Declare",
          "package": "safe-globals",
          "partial": "Declare",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#t:Declare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of macros for declaring variables with initializers.\n\u003c/p\u003e",
          "module": "Data.Global",
          "name": "DeclareInit",
          "package": "safe-globals",
          "source": "src/Data-Global.html#DeclareInit",
          "type": "type"
        },
        "index": {
          "description": "The type of macros for declaring variables with initializers",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "DeclareInit",
          "package": "safe-globals",
          "partial": "Declare Init",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#t:DeclareInit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of macros for declaring semaphores.\n\u003c/p\u003e",
          "module": "Data.Global",
          "name": "DeclareSem",
          "package": "safe-globals",
          "source": "src/Data-Global.html#DeclareSem",
          "type": "type"
        },
        "index": {
          "description": "The type of macros for declaring semaphores",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "DeclareSem",
          "package": "safe-globals",
          "partial": "Declare Sem",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#t:DeclareSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an empty \u003ccode\u003e\u003ccode\u003e\u003ca\u003eChan\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edeclareChan \"foo\" [t| Char |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareChan",
          "package": "safe-globals",
          "signature": "Declare",
          "source": "src/Data-Global.html#declareChan",
          "type": "function"
        },
        "index": {
          "description": "Declare an empty Chan declareChan foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareChan",
          "package": "safe-globals",
          "partial": "Chan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an empty \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edeclareEmptyMVar \"foo\" [t| Char |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareEmptyMVar",
          "package": "safe-globals",
          "signature": "Declare",
          "source": "src/Data-Global.html#declareEmptyMVar",
          "type": "function"
        },
        "index": {
          "description": "Declare an empty MVar declareEmptyMVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareEmptyMVar",
          "package": "safe-globals",
          "partial": "Empty MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareEmptyMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an empty \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edeclareEmptyTMVar \"foo\" [t| Char |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareEmptyTMVar",
          "package": "safe-globals",
          "signature": "Declare",
          "source": "src/Data-Global.html#declareEmptyTMVar",
          "type": "function"
        },
        "index": {
          "description": "Declare an empty TMVar declareEmptyTMVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareEmptyTMVar",
          "package": "safe-globals",
          "partial": "Empty TMVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareEmptyTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eIORef\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with an initial value.\n\u003c/p\u003e\u003cpre\u003edeclareIORef \"foo\" [t| Char |] [e| 'x' |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareIORef",
          "package": "safe-globals",
          "signature": "DeclareInit",
          "source": "src/Data-Global.html#declareIORef",
          "type": "function"
        },
        "index": {
          "description": "Declare an IORef with an initial value declareIORef foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareIORef",
          "package": "safe-globals",
          "partial": "IORef",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareIORef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an \u003ccode\u003e\u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with an initial value.\n\u003c/p\u003e\u003cpre\u003edeclareMVar \"foo\" [t| Char |] [e| 'x' |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareMVar",
          "package": "safe-globals",
          "signature": "DeclareInit",
          "source": "src/Data-Global.html#declareMVar",
          "type": "function"
        },
        "index": {
          "description": "Declare an MVar with an initial value declareMVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareMVar",
          "package": "safe-globals",
          "partial": "MVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eQSem\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with the specified quantity.\n\u003c/p\u003e\u003cpre\u003edeclareQSem \"foo\" [e| 3 |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareQSem",
          "package": "safe-globals",
          "signature": "DeclareSem",
          "source": "src/Data-Global.html#declareQSem",
          "type": "function"
        },
        "index": {
          "description": "Declare QSem with the specified quantity declareQSem foo",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareQSem",
          "package": "safe-globals",
          "partial": "QSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareQSem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eQSemN\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with the specified quantity.\n\u003c/p\u003e\u003cpre\u003edeclareQSemN \"foo\" [e| 3 |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareQSemN",
          "package": "safe-globals",
          "signature": "DeclareSem",
          "source": "src/Data-Global.html#declareQSemN",
          "type": "function"
        },
        "index": {
          "description": "Declare QSemN with the specified quantity declareQSemN foo",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareQSemN",
          "package": "safe-globals",
          "partial": "QSem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareQSemN"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eSampleVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with an initial value.\n\u003c/p\u003e\u003cpre\u003edeclareSampleVar \"foo\" [t| Char |] [e| 'x' |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareSampleVar",
          "package": "safe-globals",
          "signature": "DeclareInit",
          "source": "src/Data-Global.html#declareSampleVar",
          "type": "function"
        },
        "index": {
          "description": "Declare SampleVar with an initial value declareSampleVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareSampleVar",
          "package": "safe-globals",
          "partial": "Sample Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareSampleVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare an empty \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTChan\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cpre\u003edeclareTChan \"foo\" [t| Char |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareTChan",
          "package": "safe-globals",
          "signature": "Declare",
          "source": "src/Data-Global.html#declareTChan",
          "type": "function"
        },
        "index": {
          "description": "Declare an empty TChan declareTChan foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareTChan",
          "package": "safe-globals",
          "partial": "TChan",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareTChan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTMVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with an initial value.\n\u003c/p\u003e\u003cpre\u003edeclareTMVar \"foo\" [t| Char |] [e| 'x' |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareTMVar",
          "package": "safe-globals",
          "signature": "DeclareInit",
          "source": "src/Data-Global.html#declareTMVar",
          "type": "function"
        },
        "index": {
          "description": "Declare TMVar with an initial value declareTMVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareTMVar",
          "package": "safe-globals",
          "partial": "TMVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareTMVar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeclare a \u003ccode\u003e\u003ccode\u003e\u003ca\u003eTVar\u003c/a\u003e\u003c/code\u003e\u003c/code\u003e with an initial value.\n\u003c/p\u003e\u003cpre\u003edeclareTVar \"foo\" [t| Char |] [e| 'x' |]\n\u003c/pre\u003e",
          "module": "Data.Global",
          "name": "declareTVar",
          "package": "safe-globals",
          "signature": "DeclareInit",
          "source": "src/Data-Global.html#declareTVar",
          "type": "function"
        },
        "index": {
          "description": "Declare TVar with an initial value declareTVar foo Char",
          "hierarchy": "Data Global",
          "module": "Data.Global",
          "name": "declareTVar",
          "package": "safe-globals",
          "partial": "TVar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/safe-globals/docs/Data-Global.html#v:declareTVar"
      }
    }
  ]
]