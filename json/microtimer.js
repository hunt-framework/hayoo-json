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
        "word": "microtimer"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA tiny module for measuring the time taken by an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action.\n\u003c/p\u003e\u003cp\u003eThis module is a almost a direct copy of the\n \u003ccode\u003eCriterion.Measurement\u003c/code\u003e module from the \u003ccode\u003ecriterion\u003c/code\u003e package,\n written by Bryan O'Sullivan.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Microtimer",
          "name": "Microtimer",
          "package": "microtimer",
          "source": "src/System-Microtimer.html",
          "type": "module"
        },
        "index": {
          "description": "tiny module for measuring the time taken by an IO action This module is almost direct copy of the Criterion.Measurement module from the criterion package written by Bryan Sullivan",
          "hierarchy": "System Microtimer",
          "module": "System.Microtimer",
          "name": "Microtimer",
          "package": "microtimer",
          "partial": "Microtimer",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/microtimer/docs/System-Microtimer.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConvert a \u003ccode\u003e\u003ca\u003eDouble\u003c/a\u003e\u003c/code\u003e value into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e which specifies\n how long something took in seconds.\n\u003c/p\u003e",
          "module": "System.Microtimer",
          "name": "formatSeconds",
          "package": "microtimer",
          "signature": "Double -\u003e String",
          "source": "src/System-Microtimer.html#formatSeconds",
          "type": "function"
        },
        "index": {
          "description": "Convert Double value into String which specifies how long something took in seconds",
          "hierarchy": "System Microtimer",
          "module": "System.Microtimer",
          "name": "formatSeconds",
          "normalized": "Double-\u003eString",
          "package": "microtimer",
          "partial": "Seconds",
          "signature": "Double-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/microtimer/docs/System-Microtimer.html#v:formatSeconds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action and return the time taken for execution,\n as well as the return value.\n\u003c/p\u003e",
          "module": "System.Microtimer",
          "name": "time",
          "package": "microtimer",
          "signature": "IO a -\u003e IO (Double, a)",
          "source": "src/System-Microtimer.html#time",
          "type": "function"
        },
        "index": {
          "description": "Time an IO action and return the time taken for execution as well as the return value",
          "hierarchy": "System Microtimer",
          "module": "System.Microtimer",
          "name": "time",
          "normalized": "IO a-\u003eIO(Double,a)",
          "package": "microtimer",
          "signature": "IO a-\u003eIO(Double,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/microtimer/docs/System-Microtimer.html#v:time"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTime an \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e action, throwing away the result and returning\n the time taken for execution.\n\u003c/p\u003e",
          "module": "System.Microtimer",
          "name": "time_",
          "package": "microtimer",
          "signature": "IO a -\u003e IO Double",
          "source": "src/System-Microtimer.html#time_",
          "type": "function"
        },
        "index": {
          "description": "Time an IO action throwing away the result and returning the time taken for execution",
          "hierarchy": "System Microtimer",
          "module": "System.Microtimer",
          "name": "time_",
          "normalized": "IO a-\u003eIO Double",
          "package": "microtimer",
          "signature": "IO a-\u003eIO Double",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/microtimer/docs/System-Microtimer.html#v:time_"
      }
    }
  ]
]