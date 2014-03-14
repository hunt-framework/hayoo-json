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
        "word": "Hedi"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Command",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Command",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Command",
          "package": "Hedi",
          "partial": "Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Command"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "CompleteCommand",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#CompleteCommand",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "CompleteCommand",
          "package": "Hedi",
          "partial": "Complete Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:CompleteCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "main datatype for the program-- beyond the core state, a simulation layer \u003ctt\u003e\u003ca\u003eSIO\u003c/a\u003e\u003c/tt\u003e can be read \n and errors \u003ctt\u003e\u003ca\u003eErr\u003c/a\u003e\u003c/tt\u003e can be thrown to kill the monad flow\n",
          "module": "Editor",
          "name": "Editor",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Editor",
          "type": "type"
        },
        "index": {
          "description": "main datatype for the program beyond the core state simulation layer SIO can be read and errors Err can be thrown to kill the monad flow",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Editor",
          "package": "Hedi",
          "partial": "Editor",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Editor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Err",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Err",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Err",
          "package": "Hedi",
          "partial": "Err",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Err"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Offset",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Offset",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Offset",
          "package": "Hedi",
          "partial": "Offset",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Offset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "OffsetOrRange",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#OffsetOrRange",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "OffsetOrRange",
          "package": "Hedi",
          "partial": "Offset Or Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:OffsetOrRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Range",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Range",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Range",
          "package": "Hedi",
          "partial": "Range",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Range"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Stato",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Stato",
          "type": "data"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Stato",
          "package": "Hedi",
          "partial": "Stato",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:Stato"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the core editor runs under the state monad with state (Stato) .\n Wrapped around a monad (IO mainly) to permit console input and output of commands with IO\n and testing with State\n",
          "module": "Editor",
          "name": "StatoE",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#StatoE",
          "type": "type"
        },
        "index": {
          "description": "the core editor runs under the state monad with state Stato Wrapped around monad IO mainly to permit console input and output of commands with IO and testing with State",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "StatoE",
          "package": "Hedi",
          "partial": "Stato",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#t:StatoE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "Ctx",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#Ctx",
          "type": "class"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "Ctx",
          "package": "Hedi",
          "partial": "Ctx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:Ctx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "SIO",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#SIO",
          "type": "class"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "SIO",
          "package": "Hedi",
          "partial": "SIO",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:SIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "maybe action\nmonading \n",
          "module": "Editor",
          "name": "backend",
          "package": "Hedi",
          "signature": "Maybe a-\u003e Editor m a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#backend",
          "type": "function"
        },
        "index": {
          "description": "maybe action monading",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "backend",
          "normalized": "Maybe a-\u003eEditor b a",
          "package": "Hedi",
          "signature": "Maybe a-\u003eEditor m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:backend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "commandhelpSIO",
          "package": "Hedi",
          "signature": "m FilePath",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#commandhelpSIO",
          "type": "function"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "commandhelpSIO",
          "package": "Hedi",
          "partial": "SIO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:commandhelpSIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "output an error string\n",
          "module": "Editor",
          "name": "errorSIO",
          "package": "Hedi",
          "signature": "String-\u003e m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#errorSIO",
          "type": "function"
        },
        "index": {
          "description": "output an error string",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "errorSIO",
          "normalized": "String-\u003ea()",
          "package": "Hedi",
          "partial": "SIO",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:errorSIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the errorSIO action lifted to Editor\n",
          "module": "Editor",
          "name": "errorlog",
          "package": "Hedi",
          "signature": "String -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#errorlog",
          "type": "function"
        },
        "index": {
          "description": "the errorSIO action lifted to Editor",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "errorlog",
          "normalized": "String-\u003eEditor a()",
          "package": "Hedi",
          "signature": "String-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:errorlog"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "externalSio",
          "package": "Hedi",
          "signature": "String -\u003e ErrorT String m String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#externalSio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "externalSio",
          "normalized": "String-\u003eErrorT String a String",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003eErrorT String m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:externalSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the historySIO action lifted to Editor \n",
          "module": "Editor",
          "name": "history",
          "package": "Hedi",
          "signature": "String -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#history",
          "type": "function"
        },
        "index": {
          "description": "the historySIO action lifted to Editor",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "history",
          "normalized": "String-\u003eEditor a()",
          "package": "Hedi",
          "signature": "String-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:history"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "put a line in the history (which is global)\n",
          "module": "Editor",
          "name": "historySio",
          "package": "Hedi",
          "signature": "String-\u003e m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#historySio",
          "type": "function"
        },
        "index": {
          "description": "put line in the history which is global",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "historySio",
          "normalized": "String-\u003ea()",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:historySio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "push a new file (data \u003ctt\u003e\u003ca\u003eEngine\u003c/a\u003e\u003c/tt\u003e instance) in the core State, pushing the old state in the undo stack\n",
          "module": "Editor",
          "name": "hputfile",
          "package": "Hedi",
          "signature": "Engine -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#hputfile",
          "type": "function"
        },
        "index": {
          "description": "push new file data Engine instance in the core State pushing the old state in the undo stack",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "hputfile",
          "normalized": "Engine-\u003eEditor a()",
          "package": "Hedi",
          "signature": "Engine-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:hputfile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the inputSio action lifted to Editor with empty prompt\n",
          "module": "Editor",
          "name": "input",
          "package": "Hedi",
          "signature": "Editor m (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#input",
          "type": "function"
        },
        "index": {
          "description": "the inputSio action lifted to Editor with empty prompt",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "input",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "accepts a prompt and should return Nothing on eof else a line of input\n",
          "module": "Editor",
          "name": "inputSio",
          "package": "Hedi",
          "signature": "String -\u003e m (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#inputSio",
          "type": "function"
        },
        "index": {
          "description": "accepts prompt and should return Nothing on eof else line of input",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "inputSio",
          "normalized": "String-\u003ea(Maybe String)",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003em(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:inputSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "liftSio",
          "package": "Hedi",
          "signature": "m a -\u003e Editor m a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#liftSio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "liftSio",
          "normalized": "a b-\u003eEditor a b",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "m a-\u003eEditor m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:liftSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Editor",
          "name": "liftStatoE",
          "package": "Hedi",
          "signature": "StatoE m a -\u003e Editor m a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#liftStatoE",
          "type": "function"
        },
        "index": {
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "liftStatoE",
          "normalized": "StatoE a b-\u003eEditor a b",
          "package": "Hedi",
          "partial": "Stato",
          "signature": "StatoE m a-\u003eEditor m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:liftStatoE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the outputSio action lifted to Editor\n",
          "module": "Editor",
          "name": "output",
          "package": "Hedi",
          "signature": "String -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#output",
          "type": "function"
        },
        "index": {
          "description": "the outputSio action lifted to Editor",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "output",
          "normalized": "String-\u003eEditor a()",
          "package": "Hedi",
          "signature": "String-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "output a normal string\n",
          "module": "Editor",
          "name": "outputSio",
          "package": "Hedi",
          "signature": "String-\u003e m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#outputSio",
          "type": "function"
        },
        "index": {
          "description": "output normal string",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "outputSio",
          "normalized": "String-\u003ea()",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:outputSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the inputSio action lifted to Editor\n",
          "module": "Editor",
          "name": "pinput",
          "package": "Hedi",
          "signature": "String -\u003e Editor m (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#pinput",
          "type": "function"
        },
        "index": {
          "description": "the inputSio action lifted to Editor",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "pinput",
          "normalized": "String-\u003eEditor a(Maybe String)",
          "package": "Hedi",
          "signature": "String-\u003eEditor m(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:pinput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "read a file\n",
          "module": "Editor",
          "name": "readfileSio",
          "package": "Hedi",
          "signature": "String-\u003e ErrorT String m String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#readfileSio",
          "type": "function"
        },
        "index": {
          "description": "read file",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "readfileSio",
          "normalized": "String-\u003eErrorT String a String",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003eErrorT String m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:readfileSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the action to run\nthe initial state \nthe final state wrapped in the monad choosen for the SIO\n",
          "module": "Editor",
          "name": "run",
          "package": "Hedi",
          "signature": "Editor m a-\u003e Stato-\u003e m Stato",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#run",
          "type": "function"
        },
        "index": {
          "description": "the action to run the initial state the final state wrapped in the monad choosen for the SIO",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "run",
          "normalized": "Editor a b-\u003eStato-\u003ea Stato",
          "package": "Hedi",
          "signature": "Editor m a-\u003eStato-\u003em Stato",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "an action from an engine w to a maybe\nthe result from Just in the Editor monad\n",
          "module": "Editor",
          "name": "through",
          "package": "Hedi",
          "signature": "Engine -\u003e Maybe a-\u003e Editor m a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#through",
          "type": "function"
        },
        "index": {
          "description": "an action from an engine to maybe the result from Just in the Editor monad",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "through",
          "normalized": "Engine-\u003eMaybe a-\u003eEditor b a",
          "package": "Hedi",
          "signature": "Engine-\u003eMaybe a-\u003eEditor m a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:through"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "write a file\n | runs an external command , first arg is the command\n the output is returned or an error is signalled in the errort monad\n",
          "module": "Editor",
          "name": "writefileSio",
          "package": "Hedi",
          "signature": "String-\u003e String-\u003e ErrorT String m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Editor.html#writefileSio",
          "type": "function"
        },
        "index": {
          "description": "write file runs an external command first arg is the command the output is returned or an error is signalled in the errort monad",
          "hierarchy": "Editor",
          "module": "Editor",
          "name": "writefileSio",
          "normalized": "String-\u003eString-\u003eErrorT String a()",
          "package": "Hedi",
          "partial": "Sio",
          "signature": "String-\u003eString-\u003eErrorT String m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Editor.html#v:writefileSio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "represent an action, which can fail with Nothing , an index error\n",
          "module": "Engine",
          "name": "Change",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#Change",
          "type": "type"
        },
        "index": {
          "description": "represent an action which can fail with Nothing an index error",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "Change",
          "package": "Hedi",
          "partial": "Change",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#t:Change"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Engine",
          "name": "Engine",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#Engine",
          "type": "data"
        },
        "index": {
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "Engine",
          "package": "Hedi",
          "partial": "Engine",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#t:Engine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Engine",
          "name": "Pos",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#Pos",
          "type": "data"
        },
        "index": {
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "Pos",
          "package": "Hedi",
          "partial": "Pos",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#t:Pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Insert some lines after the addressed line\n",
          "module": "Engine",
          "name": "add",
          "package": "Hedi",
          "signature": "[String] -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#add",
          "type": "function"
        },
        "index": {
          "description": "Insert some lines after the addressed line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "add",
          "normalized": "[String]-\u003eChange Engine",
          "package": "Hedi",
          "signature": "[String]-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "all the prev engines from the addressed prev to itself , wrapping around\n",
          "module": "Engine",
          "name": "bwdcycle",
          "package": "Hedi",
          "signature": "Engine -\u003e [Engine]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#bwdcycle",
          "type": "function"
        },
        "index": {
          "description": "all the prev engines from the addressed prev to itself wrapping around",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "bwdcycle",
          "normalized": "Engine-\u003e[Engine]",
          "package": "Hedi",
          "signature": "Engine-\u003e[Engine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:bwdcycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Delete the addressed line , address the next one\n",
          "module": "Engine",
          "name": "del",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#del",
          "type": "function"
        },
        "index": {
          "description": "Delete the addressed line address the next one",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "del",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:del"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Delete n lines from the addressed position\n",
          "module": "Engine",
          "name": "deln",
          "package": "Hedi",
          "signature": "Int -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#deln",
          "type": "function"
        },
        "index": {
          "description": "Delete lines from the addressed position",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "deln",
          "normalized": "Int-\u003eChange Engine",
          "package": "Hedi",
          "signature": "Int-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:deln"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An empty engine\n",
          "module": "Engine",
          "name": "empty",
          "package": "Hedi",
          "signature": "Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#empty",
          "type": "function"
        },
        "index": {
          "description": "An empty engine",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "empty",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Address an append position\n",
          "module": "Engine",
          "name": "end",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#end",
          "type": "function"
        },
        "index": {
          "description": "Address an append position",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "end",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "first element if present\n",
          "module": "Engine",
          "name": "first",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#first",
          "type": "function"
        },
        "index": {
          "description": "first element if present",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "first",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:first"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create all the engines from the start to the addressed one included\n",
          "module": "Engine",
          "name": "fromstart",
          "package": "Hedi",
          "signature": "Engine -\u003e [Engine]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#fromstart",
          "type": "function"
        },
        "index": {
          "description": "Create all the engines from the start to the addressed one included",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "fromstart",
          "normalized": "Engine-\u003e[Engine]",
          "package": "Hedi",
          "signature": "Engine-\u003e[Engine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:fromstart"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "all the next engines from the addressed next to itself , wrapping around\n",
          "module": "Engine",
          "name": "fwdcycle",
          "package": "Hedi",
          "signature": "Engine -\u003e [Engine]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#fwdcycle",
          "type": "function"
        },
        "index": {
          "description": "all the next engines from the addressed next to itself wrapping around",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "fwdcycle",
          "normalized": "Engine-\u003e[Engine]",
          "package": "Hedi",
          "signature": "Engine-\u003e[Engine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:fwdcycle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Insert some lines before the addressed line\n",
          "module": "Engine",
          "name": "ins",
          "package": "Hedi",
          "signature": "[String] -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#ins",
          "type": "function"
        },
        "index": {
          "description": "Insert some lines before the addressed line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "ins",
          "normalized": "[String]-\u003eChange Engine",
          "package": "Hedi",
          "signature": "[String]-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:ins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Engine",
          "name": "isInside",
          "package": "Hedi",
          "signature": "Engine -\u003e Bool",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#isInside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "isInside",
          "normalized": "Engine-\u003eBool",
          "package": "Hedi",
          "partial": "Inside",
          "signature": "Engine-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:isInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Possibly set the addressed line to the nth line\n",
          "module": "Engine",
          "name": "jump",
          "package": "Hedi",
          "signature": "Int -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#jump",
          "type": "function"
        },
        "index": {
          "description": "Possibly set the addressed line to the nth line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "jump",
          "normalized": "Int-\u003eChange Engine",
          "package": "Hedi",
          "signature": "Int-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:jump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "last element if present\n",
          "module": "Engine",
          "name": "last",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#last",
          "type": "function"
        },
        "index": {
          "description": "last element if present",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "last",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:last"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract the addressed line\n",
          "module": "Engine",
          "name": "line",
          "package": "Hedi",
          "signature": "Engine -\u003e Maybe String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#line",
          "type": "function"
        },
        "index": {
          "description": "Extract the addressed line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "line",
          "normalized": "Engine-\u003eMaybe String",
          "package": "Hedi",
          "signature": "Engine-\u003eMaybe String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract n lines from the position addressed\n",
          "module": "Engine",
          "name": "linen",
          "package": "Hedi",
          "signature": "Int -\u003e Engine -\u003e Maybe [String]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#linen",
          "type": "function"
        },
        "index": {
          "description": "Extract lines from the position addressed",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "linen",
          "normalized": "Int-\u003eEngine-\u003eMaybe[String]",
          "package": "Hedi",
          "signature": "Int-\u003eEngine-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:linen"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "An engine is isomorphic to Engine list\n",
          "module": "Engine",
          "name": "listIn",
          "package": "Hedi",
          "signature": "[String] -\u003e Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#listIn",
          "type": "function"
        },
        "index": {
          "description": "An engine is isomorphic to Engine list",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "listIn",
          "normalized": "[String]-\u003eEngine",
          "package": "Hedi",
          "partial": "In",
          "signature": "[String]-\u003eEngine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:listIn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Extract the list from the engine\n",
          "module": "Engine",
          "name": "listOut",
          "package": "Hedi",
          "signature": "Engine -\u003e Maybe [String]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#listOut",
          "type": "function"
        },
        "index": {
          "description": "Extract the list from the engine",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "listOut",
          "normalized": "Engine-\u003eMaybe[String]",
          "package": "Hedi",
          "partial": "Out",
          "signature": "Engine-\u003eMaybe[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:listOut"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Address the next line\n",
          "module": "Engine",
          "name": "next",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#next",
          "type": "function"
        },
        "index": {
          "description": "Address the next line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "next",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:next"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Jump ahead n lines\n",
          "module": "Engine",
          "name": "nextn",
          "package": "Hedi",
          "signature": "Int -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#nextn",
          "type": "function"
        },
        "index": {
          "description": "Jump ahead lines",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "nextn",
          "normalized": "Int-\u003eChange Engine",
          "package": "Hedi",
          "signature": "Int-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:nextn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The number of the addressed line\n",
          "module": "Engine",
          "name": "pos",
          "package": "Hedi",
          "signature": "Engine -\u003e Pos",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#pos",
          "type": "function"
        },
        "index": {
          "description": "The number of the addressed line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "pos",
          "normalized": "Engine-\u003ePos",
          "package": "Hedi",
          "signature": "Engine-\u003ePos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:pos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Address the prev line\n",
          "module": "Engine",
          "name": "prev",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#prev",
          "type": "function"
        },
        "index": {
          "description": "Address the prev line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "prev",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:prev"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Jump back n lines \n",
          "module": "Engine",
          "name": "prevn",
          "package": "Hedi",
          "signature": "Int -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#prevn",
          "type": "function"
        },
        "index": {
          "description": "Jump back lines",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "prevn",
          "normalized": "Int-\u003eChange Engine",
          "package": "Hedi",
          "signature": "Int-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:prevn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Jump n lines relative to the addredded line\n",
          "module": "Engine",
          "name": "rjump",
          "package": "Hedi",
          "signature": "Int -\u003e Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#rjump",
          "type": "function"
        },
        "index": {
          "description": "Jump lines relative to the addredded line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "rjump",
          "normalized": "Int-\u003eChange Engine",
          "package": "Hedi",
          "signature": "Int-\u003eChange Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:rjump"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Engine",
          "name": "runner",
          "package": "Hedi",
          "signature": "Change Engine -\u003e Engine -\u003e [Engine]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#runner",
          "type": "function"
        },
        "index": {
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "runner",
          "normalized": "Change Engine-\u003eEngine-\u003e[Engine]",
          "package": "Hedi",
          "signature": "Change Engine-\u003eEngine-\u003e[Engine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:runner"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Address before the first line\n",
          "module": "Engine",
          "name": "start",
          "package": "Hedi",
          "signature": "Change Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#start",
          "type": "function"
        },
        "index": {
          "description": "Address before the first line",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "start",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Create all the engines from the addressed one to the last one \n",
          "module": "Engine",
          "name": "tillend",
          "package": "Hedi",
          "signature": "Engine -\u003e [Engine]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Engine.html#tillend",
          "type": "function"
        },
        "index": {
          "description": "Create all the engines from the addressed one to the last one",
          "hierarchy": "Engine",
          "module": "Engine",
          "name": "tillend",
          "normalized": "Engine-\u003e[Engine]",
          "package": "Hedi",
          "signature": "Engine-\u003e[Engine]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Engine.html#v:tillend"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the command to match for execution\nmonading ..\n",
          "module": "Eval",
          "name": "eval",
          "package": "Hedi",
          "signature": "CompleteCommand-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Eval.html#eval",
          "type": "function"
        },
        "index": {
          "description": "the command to match for execution monading",
          "hierarchy": "Eval",
          "module": "Eval",
          "name": "eval",
          "normalized": "CompleteCommand-\u003eEditor a()",
          "package": "Hedi",
          "signature": "CompleteCommand-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Eval.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "get the filename defaulting to some other action to produce one\n",
          "module": "Eval",
          "name": "getname",
          "package": "Hedi",
          "signature": "Editor m String -\u003e Editor m String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Eval.html#getname",
          "type": "function"
        },
        "index": {
          "description": "get the filename defaulting to some other action to produce one",
          "hierarchy": "Eval",
          "module": "Eval",
          "name": "getname",
          "normalized": "Editor a String-\u003eEditor a String",
          "package": "Hedi",
          "signature": "Editor m String-\u003eEditor m String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Eval.html#v:getname"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "filename\nmonading\n",
          "module": "Eval",
          "name": "write",
          "package": "Hedi",
          "signature": "String-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Eval.html#write",
          "type": "function"
        },
        "index": {
          "description": "filename monading",
          "hierarchy": "Eval",
          "module": "Eval",
          "name": "write",
          "normalized": "String-\u003eEditor a()",
          "package": "Hedi",
          "signature": "String-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Eval.html#v:write"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "throw a writerSio error to Editor\n",
          "module": "Eval",
          "name": "writefail",
          "package": "Hedi",
          "signature": "Either String () -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Eval.html#writefail",
          "type": "function"
        },
        "index": {
          "description": "throw writerSio error to Editor",
          "hierarchy": "Eval",
          "module": "Eval",
          "name": "writefail",
          "normalized": "Either String()-\u003eEditor a()",
          "package": "Hedi",
          "signature": "Either String()-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Eval.html#v:writefail"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Helper",
          "name": "CommandHelp",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#CommandHelp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "CommandHelp",
          "package": "Hedi",
          "partial": "Command Help",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#t:CommandHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the command name\nthe string with the help inside\na parse error or (Just the command help or Nothing if the command is missing)\n",
          "module": "Helper",
          "name": "helpCommand",
          "package": "Hedi",
          "signature": "String-\u003e String-\u003e Either String (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#helpCommand",
          "type": "function"
        },
        "index": {
          "description": "the command name the string with the help inside parse error or Just the command help or Nothing if the command is missing",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "helpCommand",
          "normalized": "String-\u003eString-\u003eEither String(Maybe String)",
          "package": "Hedi",
          "partial": "Command",
          "signature": "String-\u003eString-\u003eEither String(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:helpCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the string with the help inside\na parse error or Just a prettyprint of a list of command helps\n",
          "module": "Helper",
          "name": "listOfCommands",
          "package": "Hedi",
          "signature": "String-\u003e Either String (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#listOfCommands",
          "type": "function"
        },
        "index": {
          "description": "the string with the help inside parse error or Just prettyprint of list of command helps",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "listOfCommands",
          "normalized": "String-\u003eEither String(Maybe String)",
          "package": "Hedi",
          "partial": "Of Commands",
          "signature": "String-\u003eEither String(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:listOfCommands"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parses a CommandHelp\t\t\t\n",
          "module": "Helper",
          "name": "parseACommandHelp",
          "package": "Hedi",
          "signature": "CharParser () CommandHelp",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#parseACommandHelp",
          "type": "function"
        },
        "index": {
          "description": "parses CommandHelp",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "parseACommandHelp",
          "normalized": "CharParser()CommandHelp",
          "package": "Hedi",
          "partial": "ACommand Help",
          "signature": "CharParser()CommandHelp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:parseACommandHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parses all commands help\n",
          "module": "Helper",
          "name": "parseCommandsHelp",
          "package": "Hedi",
          "signature": "CharParser () [CommandHelp]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#parseCommandsHelp",
          "type": "function"
        },
        "index": {
          "description": "parses all commands help",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "parseCommandsHelp",
          "normalized": "CharParser()[CommandHelp]",
          "package": "Hedi",
          "partial": "Commands Help",
          "signature": "CharParser()[CommandHelp]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:parseCommandsHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "The string to parse\nthe parser to use\na function to use on the result , if it succed \nthe error showed if it fails or the result closed\n",
          "module": "Helper",
          "name": "run",
          "package": "Hedi",
          "signature": "String-\u003e GenParser Char () a-\u003e a -\u003e Maybe b-\u003e Either String (Maybe b)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#run",
          "type": "function"
        },
        "index": {
          "description": "The string to parse the parser to use function to use on the result if it succed the error showed if it fails or the result closed",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "run",
          "normalized": "String-\u003eGenParser Char()a-\u003ea-\u003eMaybe b-\u003eEither String(Maybe b)",
          "package": "Hedi",
          "signature": "String-\u003eGenParser Char()a-\u003ea-\u003eMaybe b-\u003eEither String(Maybe b)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "create a nice table from lines of words\n",
          "module": "Helper",
          "name": "tabulate",
          "package": "Hedi",
          "signature": "[[String]] -\u003e String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Helper.html#tabulate",
          "type": "function"
        },
        "index": {
          "description": "create nice table from lines of words",
          "hierarchy": "Helper",
          "module": "Helper",
          "name": "tabulate",
          "normalized": "[[String]]-\u003eString",
          "package": "Hedi",
          "signature": "[[String]]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Helper.html#v:tabulate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "launches an external program , catching output and errors, return on exit\n",
          "module": "Main",
          "name": "externalCommand",
          "package": "Hedi",
          "signature": "String -\u003e ErrorT String IO String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Main.html#externalCommand",
          "type": "function"
        },
        "index": {
          "description": "launches an external program catching output and errors return on exit",
          "hierarchy": "Main",
          "module": "Main",
          "name": "externalCommand",
          "normalized": "String-\u003eErrorT String IO String",
          "package": "Hedi",
          "partial": "Command",
          "signature": "String-\u003eErrorT String IO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Main.html#v:externalCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the greetings\n",
          "module": "Main",
          "name": "greetings",
          "package": "Hedi",
          "signature": "IO ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Main.html#greetings",
          "type": "function"
        },
        "index": {
          "description": "the greetings",
          "hierarchy": "Main",
          "module": "Main",
          "name": "greetings",
          "normalized": "IO()",
          "package": "Hedi",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Main.html#v:greetings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main",
          "name": "handleWith",
          "package": "Hedi",
          "signature": "(IOError -\u003e k) -\u003e IO a -\u003e ErrorT k IO a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Main.html#handleWith",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main",
          "module": "Main",
          "name": "handleWith",
          "normalized": "(IOError-\u003ea)-\u003eIO b-\u003eErrorT a IO b",
          "package": "Hedi",
          "partial": "With",
          "signature": "(IOError-\u003ek)-\u003eIO a-\u003eErrorT k IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Main.html#v:handleWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main",
          "name": "main",
          "package": "Hedi",
          "signature": "IO ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Main.html#main",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main",
          "module": "Main",
          "name": "main",
          "normalized": "IO()",
          "package": "Hedi",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Main.html#v:main"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Main",
          "name": "strictReadFile",
          "package": "Hedi",
          "signature": "String -\u003e IO String",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Main.html#strictReadFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "Main",
          "module": "Main",
          "name": "strictReadFile",
          "normalized": "String-\u003eIO String",
          "package": "Hedi",
          "partial": "Read File",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Main.html#v:strictReadFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Offset for the action\nthe final action\nthe backend ation\n..\n",
          "module": "Offset",
          "name": "doOffset",
          "package": "Hedi",
          "signature": "Offset-\u003e a -\u003e Editor m b-\u003e Engine -\u003e Maybe a-\u003e Editor m b",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#doOffset",
          "type": "function"
        },
        "index": {
          "description": "Offset for the action the final action the backend ation",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "doOffset",
          "normalized": "Offset-\u003ea-\u003eEditor b c-\u003eEngine-\u003eMaybe a-\u003eEditor b c",
          "package": "Hedi",
          "partial": "Offset",
          "signature": "Offset-\u003ea-\u003eEditor m b-\u003eEngine-\u003eMaybe a-\u003eEditor m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:doOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the addressed range\nthe closing Editor action\nthe backend action \n... \n",
          "module": "Offset",
          "name": "doRange",
          "package": "Hedi",
          "signature": "Range-\u003e a -\u003e Editor m b-\u003e Int -\u003e Engine -\u003e Maybe a-\u003e Editor m b",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#doRange",
          "type": "function"
        },
        "index": {
          "description": "the addressed range the closing Editor action the backend action",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "doRange",
          "normalized": "Range-\u003ea-\u003eEditor b c-\u003eInt-\u003eEngine-\u003eMaybe a-\u003eEditor b c",
          "package": "Hedi",
          "partial": "Range",
          "signature": "Range-\u003ea-\u003eEditor m b-\u003eInt-\u003eEngine-\u003eMaybe a-\u003eEditor m b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:doRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Offset for the backend action\nthe backend ation\nmodified monad\n",
          "module": "Offset",
          "name": "editOffset",
          "package": "Hedi",
          "signature": "Offset-\u003e Engine -\u003e Maybe Engine-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#editOffset",
          "type": "function"
        },
        "index": {
          "description": "Offset for the backend action the backend ation modified monad",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "editOffset",
          "normalized": "Offset-\u003eEngine-\u003eMaybe Engine-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Offset",
          "signature": "Offset-\u003eEngine-\u003eMaybe Engine-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:editOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the addressed range\nthe backend action \nmodified monad\n",
          "module": "Offset",
          "name": "editRange",
          "package": "Hedi",
          "signature": "Range-\u003e Int -\u003e Engine -\u003e Maybe Engine-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#editRange",
          "type": "function"
        },
        "index": {
          "description": "the addressed range the backend action modified monad",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "editRange",
          "normalized": "Range-\u003eInt-\u003eEngine-\u003eMaybe Engine-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Range",
          "signature": "Range-\u003eInt-\u003eEngine-\u003eMaybe Engine-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:editRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the new position for the cursor\nthe modified engine under the Editor\n",
          "module": "Offset",
          "name": "jumpE",
          "package": "Hedi",
          "signature": "Offset-\u003e Editor m Engine",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#jumpE",
          "type": "function"
        },
        "index": {
          "description": "the new position for the cursor the modified engine under the Editor",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "jumpE",
          "normalized": "Offset-\u003eEditor a Engine",
          "package": "Hedi",
          "signature": "Offset-\u003eEditor m Engine",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:jumpE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the range to focus\nthe tuple (nelements,engine placed\n at first offset of range)\n",
          "module": "Offset",
          "name": "rangeResolve",
          "package": "Hedi",
          "signature": "Range-\u003e Editor m (Int, Engine)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Offset.html#rangeResolve",
          "type": "function"
        },
        "index": {
          "description": "the range to focus the tuple nelements engine placed at first offset of range",
          "hierarchy": "Offset",
          "module": "Offset",
          "name": "rangeResolve",
          "normalized": "Range-\u003eEditor a(Int,Engine)",
          "package": "Hedi",
          "partial": "Resolve",
          "signature": "Range-\u003eEditor m(Int,Engine)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Offset.html#v:rangeResolve"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a wrapper for commands evaluation which cannot discard changes\n",
          "module": "Operation",
          "name": "checkPendings",
          "package": "Hedi",
          "signature": "Editor m () -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#checkPendings",
          "type": "function"
        },
        "index": {
          "description": "wrapper for commands evaluation which cannot discard changes",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "checkPendings",
          "normalized": "Editor a()-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Pendings",
          "signature": "Editor m()-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:checkPendings"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the parser for the command on the line\nthe evaluator for the parsed command\nupdated beast\n",
          "module": "Operation",
          "name": "commandLoop",
          "package": "Hedi",
          "signature": "String -\u003e Either String CompleteCommand-\u003e CompleteCommand -\u003e Editor m ()-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#commandLoop",
          "type": "function"
        },
        "index": {
          "description": "the parser for the command on the line the evaluator for the parsed command updated beast",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "commandLoop",
          "normalized": "String-\u003eEither String CompleteCommand-\u003eCompleteCommand-\u003eEditor a()-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Loop",
          "signature": "String-\u003eEither String CompleteCommand-\u003eCompleteCommand-\u003eEditor m()-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:commandLoop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the parser for the command on the line\nthe evaluator for the parsed command\nupdated beast\n",
          "module": "Operation",
          "name": "commandMode",
          "package": "Hedi",
          "signature": "String -\u003e Either String CompleteCommand-\u003e CompleteCommand -\u003e Editor m ()-\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#commandMode",
          "type": "function"
        },
        "index": {
          "description": "the parser for the command on the line the evaluator for the parsed command updated beast",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "commandMode",
          "normalized": "String-\u003eEither String CompleteCommand-\u003eCompleteCommand-\u003eEditor a()-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Mode",
          "signature": "String-\u003eEither String CompleteCommand-\u003eCompleteCommand-\u003eEditor m()-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:commandMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a wrapper for commands evaluation which can discard changes\n",
          "module": "Operation",
          "name": "evalSensible",
          "package": "Hedi",
          "signature": "Command -\u003e Editor m () -\u003e Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#evalSensible",
          "type": "function"
        },
        "index": {
          "description": "wrapper for commands evaluation which can discard changes",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "evalSensible",
          "normalized": "Command-\u003eEditor a()-\u003eEditor a()",
          "package": "Hedi",
          "partial": "Sensible",
          "signature": "Command-\u003eEditor m()-\u003eEditor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:evalSensible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the secondary mode for the editor where lines are inserted as input. It returns the lines.Use CTRL-D to exit \n",
          "module": "Operation",
          "name": "inputMode",
          "package": "Hedi",
          "signature": "Editor m [String]",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#inputMode",
          "type": "function"
        },
        "index": {
          "description": "the secondary mode for the editor where lines are inserted as input It returns the lines.Use CTRL-D to exit",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "inputMode",
          "normalized": "Editor a[String]",
          "package": "Hedi",
          "partial": "Mode",
          "signature": "Editor m[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:inputMode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a real check for file modification\n",
          "module": "Operation",
          "name": "modified",
          "package": "Hedi",
          "signature": "Editor m Bool",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#modified",
          "type": "function"
        },
        "index": {
          "description": "real check for file modification",
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "modified",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:modified"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Operation",
          "name": "resetpending",
          "package": "Hedi",
          "signature": "Editor m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Operation.html#resetpending",
          "type": "function"
        },
        "index": {
          "hierarchy": "Operation",
          "module": "Operation",
          "name": "resetpending",
          "normalized": "Editor a()",
          "package": "Hedi",
          "signature": "Editor m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Operation.html#v:resetpending"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "shortcut for a parser of chars with no state\n",
          "module": "Parser",
          "name": "ParseE",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#ParseE",
          "type": "type"
        },
        "index": {
          "description": "shortcut for parser of chars with no state",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "ParseE",
          "package": "Hedi",
          "partial": "Parse",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#t:ParseE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "forces a failure for a command if a Range was parsed\n",
          "module": "Parser",
          "name": "acceptOffsetOnly",
          "package": "Hedi",
          "signature": "Command -\u003e OffsetOrRange -\u003e ParseE ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#acceptOffsetOnly",
          "type": "function"
        },
        "index": {
          "description": "forces failure for command if Range was parsed",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "acceptOffsetOnly",
          "normalized": "Command-\u003eOffsetOrRange-\u003eParseE()",
          "package": "Hedi",
          "partial": "Offset Only",
          "signature": "Command-\u003eOffsetOrRange-\u003eParseE()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:acceptOffsetOnly"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "defaults Offset  or Range for the commands\n",
          "module": "Parser",
          "name": "defaultOR",
          "package": "Hedi",
          "signature": "Command -\u003e OffsetOrRange",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#defaultOR",
          "type": "function"
        },
        "index": {
          "description": "defaults Offset or Range for the commands",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "defaultOR",
          "normalized": "Command-\u003eOffsetOrRange",
          "package": "Hedi",
          "partial": "OR",
          "signature": "Command-\u003eOffsetOrRange",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:defaultOR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse an integer  number\n",
          "module": "Parser",
          "name": "numero",
          "package": "Hedi",
          "signature": "ParseE Integer",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#numero",
          "type": "function"
        },
        "index": {
          "description": "parse an integer number",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "numero",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:numero"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the parser from a String to either a String representing an error or a CompleteCommand\n",
          "module": "Parser",
          "name": "parse",
          "package": "Hedi",
          "signature": "String -\u003e Either String CompleteCommand",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parse",
          "type": "function"
        },
        "index": {
          "description": "the parser from String to either String representing an error or CompleteCommand",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parse",
          "normalized": "String-\u003eEither String CompleteCommand",
          "package": "Hedi",
          "signature": "String-\u003eEither String CompleteCommand",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse a function from OffsetOrRange to a parse Command\n",
          "module": "Parser",
          "name": "parseCommand",
          "package": "Hedi",
          "signature": "ParseE (OffsetOrRange -\u003e ParseE Command)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parseCommand",
          "type": "function"
        },
        "index": {
          "description": "parse function from OffsetOrRange to parse Command",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parseCommand",
          "normalized": "ParseE(OffsetOrRange-\u003eParseE Command)",
          "package": "Hedi",
          "partial": "Command",
          "signature": "ParseE(OffsetOrRange-\u003eParseE Command)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parseCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse an Offset\n",
          "module": "Parser",
          "name": "parseOffset",
          "package": "Hedi",
          "signature": "ParseE Offset",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parseOffset",
          "type": "function"
        },
        "index": {
          "description": "parse an Offset",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parseOffset",
          "package": "Hedi",
          "partial": "Offset",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parseOffset"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse an OffsetOrRange\n",
          "module": "Parser",
          "name": "parseOffsetOrRange",
          "package": "Hedi",
          "signature": "ParseE OffsetOrRange",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parseOffsetOrRange",
          "type": "function"
        },
        "index": {
          "description": "parse an OffsetOrRange",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parseOffsetOrRange",
          "package": "Hedi",
          "partial": "Offset Or Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parseOffsetOrRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse a Range\n",
          "module": "Parser",
          "name": "parseRange",
          "package": "Hedi",
          "signature": "ParseE Range",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parseRange",
          "type": "function"
        },
        "index": {
          "description": "parse Range",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parseRange",
          "package": "Hedi",
          "partial": "Range",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parseRange"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "parse a CompleteCommand  made of an OffsetOrRange and a Command\n",
          "module": "Parser",
          "name": "parser",
          "package": "Hedi",
          "signature": "ParseE CompleteCommand",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#parser",
          "type": "function"
        },
        "index": {
          "description": "parse CompleteCommand made of an OffsetOrRange and Command",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "parser",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:parser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "helper for skipping a filter\n",
          "module": "Parser",
          "name": "rconst",
          "package": "Hedi",
          "signature": "Command -\u003e ParseE (OffsetOrRange -\u003e ParseE Command)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Parser.html#rconst",
          "type": "function"
        },
        "index": {
          "description": "helper for skipping filter",
          "hierarchy": "Parser",
          "module": "Parser",
          "name": "rconst",
          "normalized": "Command-\u003eParseE(OffsetOrRange-\u003eParseE Command)",
          "package": "Hedi",
          "signature": "Command-\u003eParseE(OffsetOrRange-\u003eParseE Command)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Parser.html#v:rconst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "CState",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#CState",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "CState",
          "package": "Hedi",
          "partial": "CState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#t:CState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "Emulator",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#Emulator",
          "type": "data"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "Emulator",
          "package": "Hedi",
          "partial": "Emulator",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#t:Emulator"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "Line",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#Line",
          "type": "type"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "Line",
          "package": "Hedi",
          "partial": "Line",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#t:Line"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "errorT",
          "package": "Hedi",
          "signature": "String -\u003e CState ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#errorT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "errorT",
          "normalized": "String-\u003eCState()",
          "package": "Hedi",
          "signature": "String-\u003eCState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#v:errorT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "inputT",
          "package": "Hedi",
          "signature": "String -\u003e CState (Maybe String)",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#inputT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "inputT",
          "normalized": "String-\u003eCState(Maybe String)",
          "package": "Hedi",
          "signature": "String-\u003eCState(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#v:inputT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Test",
          "name": "outputT",
          "package": "Hedi",
          "signature": "String -\u003e CState ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Test.html#outputT",
          "type": "function"
        },
        "index": {
          "hierarchy": "Test",
          "module": "Test",
          "name": "outputT",
          "normalized": "String-\u003eCState()",
          "package": "Hedi",
          "signature": "String-\u003eCState()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Test.html#v:outputT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a state monad transformer with the state history\n",
          "module": "Undo",
          "name": "HStateT",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#HStateT",
          "type": "type"
        },
        "index": {
          "description": "state monad transformer with the state history",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "HStateT",
          "package": "Hedi",
          "partial": "HState",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#t:HStateT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Undo",
          "name": "History",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#History",
          "type": "data"
        },
        "index": {
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "History",
          "package": "Hedi",
          "partial": "History",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#t:History"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Undo",
          "name": "UndoT",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#UndoT",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "UndoT",
          "package": "Hedi",
          "partial": "Undo",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#t:UndoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Undo",
          "name": "HCtx",
          "package": "Hedi",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#HCtx",
          "type": "class"
        },
        "index": {
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "HCtx",
          "package": "Hedi",
          "partial": "HCtx",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:HCtx"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "an History of one state\n",
          "module": "Undo",
          "name": "blank",
          "package": "Hedi",
          "signature": "s -\u003e History s",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#blank",
          "type": "function"
        },
        "index": {
          "description": "an History of one state",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "blank",
          "normalized": "a-\u003eHistory a",
          "package": "Hedi",
          "signature": "s-\u003eHistory s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:blank"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a UndoT action\nthe initial state\nthe result\n",
          "module": "Undo",
          "name": "evalUndoT",
          "package": "Hedi",
          "signature": "UndoT s m a-\u003e s-\u003e m a",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#evalUndoT",
          "type": "function"
        },
        "index": {
          "description": "UndoT action the initial state the result",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "evalUndoT",
          "normalized": "UndoT a b c-\u003ea-\u003eb c",
          "package": "Hedi",
          "partial": "Undo",
          "signature": "UndoT s m a-\u003es-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:evalUndoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "a UndoT action\nthe initial state\nthe final state\n",
          "module": "Undo",
          "name": "execUndoT",
          "package": "Hedi",
          "signature": "UndoT s m a-\u003e s-\u003e m s",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#execUndoT",
          "type": "function"
        },
        "index": {
          "description": "UndoT action the initial state the final state",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "execUndoT",
          "normalized": "UndoT a b c-\u003ea-\u003eb a",
          "package": "Hedi",
          "partial": "Undo",
          "signature": "UndoT s m a-\u003es-\u003em s",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:execUndoT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "the new state to put\nmonading\n",
          "module": "Undo",
          "name": "hput",
          "package": "Hedi",
          "signature": "s-\u003e UndoT s m ()",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#hput",
          "type": "function"
        },
        "index": {
          "description": "the new state to put monading",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "hput",
          "normalized": "a-\u003eUndoT a b()",
          "package": "Hedi",
          "signature": "s-\u003eUndoT s m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:hput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "False if the redo stack was empty\n",
          "module": "Undo",
          "name": "redo",
          "package": "Hedi",
          "signature": "UndoT s m Bool",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#redo",
          "type": "function"
        },
        "index": {
          "description": "False if the redo stack was empty",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "redo",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:redo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "False if the undo stack was empty\n",
          "module": "Undo",
          "name": "undo",
          "package": "Hedi",
          "signature": "UndoT s m Bool",
          "source": "http://hackage.haskell.org/package/Hedi/docs/src/Undo.html#undo",
          "type": "function"
        },
        "index": {
          "description": "False if the undo stack was empty",
          "hierarchy": "Undo",
          "module": "Undo",
          "name": "undo",
          "package": "Hedi",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Hedi/docs/Undo.html#v:undo"
      }
    }
  ]
]