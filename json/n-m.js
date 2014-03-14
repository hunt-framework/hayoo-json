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
        "word": "n-m"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse the output of \u003ccode\u003eiwlist scan\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.Cell",
          "name": "Cell",
          "package": "n-m",
          "source": "src/Network-Cell.html",
          "type": "module"
        },
        "index": {
          "description": "This module provides functions to parse the output of iwlist scan",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "Cell",
          "package": "n-m",
          "partial": "Cell",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEach available network.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "Cell",
          "package": "n-m",
          "source": "src/Network-Cell.html#Cell",
          "type": "newtype"
        },
        "index": {
          "description": "Each available network",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "Cell",
          "package": "n-m",
          "partial": "Cell",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#t:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.Cell",
          "name": "Cell",
          "package": "n-m",
          "signature": "Cell [String]",
          "source": "src/Network-Cell.html#Cell",
          "type": "function"
        },
        "index": {
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "Cell",
          "normalized": "Cell[String]",
          "package": "n-m",
          "partial": "Cell",
          "signature": "Cell[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:Cell"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet the list of available networks, given the output of \u003ccode\u003eiwlist scan\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "getCells",
          "package": "n-m",
          "signature": "[String]-\u003e [Cell]",
          "type": "function"
        },
        "index": {
          "description": "Get the list of available networks given the output of iwlist scan",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "getCells",
          "normalized": "[String]-\u003e[Cell]",
          "package": "n-m",
          "partial": "Cells",
          "signature": "[String]-\u003e[Cell]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getCells"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the \u003ccode\u003eessid\u003c/code\u003es of networks that don't use encryption.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "getOpenEssids",
          "package": "n-m",
          "signature": "[Cell] -\u003e [String]",
          "source": "src/Network-Cell.html#getOpenEssids",
          "type": "function"
        },
        "index": {
          "description": "Gets the essid of networks that don use encryption",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "getOpenEssids",
          "normalized": "[Cell]-\u003e[String]",
          "package": "n-m",
          "partial": "Open Essids",
          "signature": "[Cell]-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getOpenEssids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the field \u003ccode\u003eQuality\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "getQuality",
          "package": "n-m",
          "signature": "Cell -\u003e Int",
          "source": "src/Network-Cell.html#getQuality",
          "type": "function"
        },
        "index": {
          "description": "Gets the field Quality",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "getQuality",
          "normalized": "Cell-\u003eInt",
          "package": "n-m",
          "partial": "Quality",
          "signature": "Cell-\u003eInt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getQuality"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGets the field with \u003ccode\u003ename\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "getValue",
          "package": "n-m",
          "signature": "String-\u003e Cell-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Gets the field with name",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "getValue",
          "normalized": "String-\u003eCell-\u003eString",
          "package": "n-m",
          "partial": "Value",
          "signature": "String-\u003eCell-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChecks whether the network is open.\n\u003c/p\u003e",
          "module": "Network.Cell",
          "name": "isOpen",
          "package": "n-m",
          "signature": "Cell -\u003e Bool",
          "source": "src/Network-Cell.html#isOpen",
          "type": "function"
        },
        "index": {
          "description": "Checks whether the network is open",
          "hierarchy": "Network Cell",
          "module": "Network.Cell",
          "name": "isOpen",
          "normalized": "Cell-\u003eBool",
          "package": "n-m",
          "partial": "Open",
          "signature": "Cell-\u003eBool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:isOpen"
      }
    }
  ]
]