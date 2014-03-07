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
        "word": "Plot-ho-matic"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plotter",
          "name": "Plotter",
          "package": "Plot-ho-matic",
          "source": "src/Plotter.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Plotter",
          "module": "Plotter",
          "name": "Plotter",
          "package": "Plot-ho-matic",
          "partial": "Plotter",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/Plot-ho-matic/docs/Plotter.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plotter",
          "name": "Channel",
          "package": "Plot-ho-matic",
          "source": "src/PlotTypes.html#Channel",
          "type": "data"
        },
        "index": {
          "hierarchy": "Plotter",
          "module": "Plotter",
          "name": "Channel",
          "package": "Plot-ho-matic",
          "partial": "Channel",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/Plot-ho-matic/docs/Plotter.html#t:Channel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plotter",
          "name": "makeAccessors",
          "package": "Plot-ho-matic",
          "signature": "Name -\u003e Q Exp",
          "source": "src/Accessors.html#makeAccessors",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plotter",
          "module": "Plotter",
          "name": "makeAccessors",
          "normalized": "Name-\u003eQ Exp",
          "package": "Plot-ho-matic",
          "partial": "Accessors",
          "signature": "Name-\u003eQ Exp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plot-ho-matic/docs/Plotter.html#v:makeAccessors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plotter",
          "name": "newChannel",
          "package": "Plot-ho-matic",
          "signature": "String -\u003e PbTree a -\u003e IO (Channel, a -\u003e IO ())",
          "source": "src/Plotter.html#newChannel",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plotter",
          "module": "Plotter",
          "name": "newChannel",
          "normalized": "String-\u003ePbTree a-\u003eIO(Channel,a-\u003eIO())",
          "package": "Plot-ho-matic",
          "partial": "Channel",
          "signature": "String-\u003ePbTree a-\u003eIO(Channel,a-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plot-ho-matic/docs/Plotter.html#v:newChannel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Plotter",
          "name": "runPlotter",
          "package": "Plot-ho-matic",
          "signature": "[Channel] -\u003e [ThreadId] -\u003e IO ()",
          "source": "src/Plotter.html#runPlotter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Plotter",
          "module": "Plotter",
          "name": "runPlotter",
          "normalized": "[Channel]-\u003e[ThreadId]-\u003eIO()",
          "package": "Plot-ho-matic",
          "partial": "Plotter",
          "signature": "[Channel]-\u003e[ThreadId]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/Plot-ho-matic/docs/Plotter.html#v:runPlotter"
      }
    }
  ]
]