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
        "word": "EEConfig"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "ParameterInput is a pair of parameter label and all its valid values.\n",
          "module": "EEConfig",
          "name": "ParameterInput",
          "package": "EEConfig",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#ParameterInput",
          "type": "type"
        },
        "index": {
          "description": "ParameterInput is pair of parameter label and all its valid values",
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "ParameterInput",
          "package": "EEConfig",
          "partial": "Parameter Input",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#t:ParameterInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Parameter's label and its value formated for output.\n",
          "module": "EEConfig",
          "name": "ParameterOutput",
          "package": "EEConfig",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#ParameterOutput",
          "type": "type"
        },
        "index": {
          "description": "Parameter label and its value formated for output",
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "ParameterOutput",
          "package": "EEConfig",
          "partial": "Parameter Output",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#t:ParameterOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Read parameters [ParameterOutput] formated can be transformed into\n binary tree for search purposes.\n",
          "module": "EEConfig",
          "name": "ParameterTree",
          "package": "EEConfig",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#ParameterTree",
          "type": "type"
        },
        "index": {
          "description": "Read parameters ParameterOutput formated can be transformed into binary tree for search purposes",
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "ParameterTree",
          "package": "EEConfig",
          "partial": "Parameter Tree",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#t:ParameterTree"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EEConfig",
          "name": "!",
          "package": "EEConfig",
          "signature": "Map k a -\u003e k -\u003e a",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#%21",
          "type": "function"
        },
        "index": {
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "!",
          "normalized": "Map a b-\u003ea-\u003eb",
          "package": "EEConfig",
          "signature": "Map k a-\u003ek-\u003ea",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#v:!"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "List of parameters' labels and their all possible values\nInput\nOutput - list of matched parameters and values.\n",
          "module": "EEConfig",
          "name": "matchParamsL",
          "package": "EEConfig",
          "signature": "[ParameterInput]-\u003e String-\u003e [ParameterOutput]",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#matchParamsL",
          "type": "function"
        },
        "index": {
          "description": "List of parameters labels and their all possible values Input Output list of matched parameters and values",
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "matchParamsL",
          "normalized": "[ParameterInput]-\u003eString-\u003e[ParameterOutput]",
          "package": "EEConfig",
          "partial": "Params",
          "signature": "[ParameterInput]-\u003eString-\u003e[ParameterOutput]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#v:matchParamsL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "Transfers list of regonized parameters into a tree.\n",
          "module": "EEConfig",
          "name": "matchParamsT",
          "package": "EEConfig",
          "signature": "[ParameterOutput] -\u003e ParameterTree",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#matchParamsT",
          "type": "function"
        },
        "index": {
          "description": "Transfers list of regonized parameters into tree",
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "matchParamsT",
          "normalized": "[ParameterOutput]-\u003eParameterTree",
          "package": "EEConfig",
          "partial": "Params",
          "signature": "[ParameterOutput]-\u003eParameterTree",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#v:matchParamsT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "EEConfig",
          "name": "member",
          "package": "EEConfig",
          "signature": "k -\u003e Map k a -\u003e Bool",
          "source": "http://hackage.haskell.org/package/EEConfig/docs/src/EEConfig.html#member",
          "type": "function"
        },
        "index": {
          "hierarchy": "EEConfig",
          "module": "EEConfig",
          "name": "member",
          "normalized": "a-\u003eMap a b-\u003eBool",
          "package": "EEConfig",
          "signature": "k-\u003eMap k a-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/EEConfig/docs/EEConfig.html#v:member"
      }
    }
  ]
]