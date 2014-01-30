[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module provides functions to parse the output of \u003ccode\u003eiwlist scan\u003c/code\u003e.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "module",
        "fct-source": "src/Network-Cell.html",
        "fct-type": "module",
        "title": "Cell"
      },
      "index": {
        "description": "This module provides functions to parse the output of iwlist scan",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "Cell",
        "normalized": "",
        "package": "n-m",
        "partial": "Cell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#t:Cell",
      "description": {
        "fct-descr": "\u003cp\u003eEach available network.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "newtype",
        "fct-source": "src/Network-Cell.html#Cell",
        "fct-type": "newtype",
        "title": "Cell"
      },
      "index": {
        "description": "Each available network",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "Cell",
        "normalized": "",
        "package": "n-m",
        "partial": "Cell",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:Cell",
      "description": {
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "Cell [String]",
        "fct-source": "src/Network-Cell.html#Cell",
        "fct-type": "function",
        "title": "Cell"
      },
      "index": {
        "description": "",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "Cell",
        "normalized": "Cell[String]",
        "package": "n-m",
        "partial": "Cell",
        "signature": "Cell[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getCells",
      "description": {
        "fct-descr": "\u003cp\u003eGet the list of available networks, given the output of \u003ccode\u003eiwlist scan\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "[String]-\u003e [Cell]",
        "fct-type": "function",
        "title": "getCells"
      },
      "index": {
        "description": "Get the list of available networks given the output of iwlist scan",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "getCells",
        "normalized": "[String]-\u003e[Cell]",
        "package": "n-m",
        "partial": "Cells",
        "signature": "[String]-\u003e[Cell]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getOpenEssids",
      "description": {
        "fct-descr": "\u003cp\u003eGets the \u003ccode\u003eessid\u003c/code\u003es of networks that don't use encryption.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "[Cell] -\u003e [String]",
        "fct-source": "src/Network-Cell.html#getOpenEssids",
        "fct-type": "function",
        "title": "getOpenEssids"
      },
      "index": {
        "description": "Gets the essid of networks that don use encryption",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "getOpenEssids",
        "normalized": "[Cell]-\u003e[String]",
        "package": "n-m",
        "partial": "Open Essids",
        "signature": "[Cell]-\u003e[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getQuality",
      "description": {
        "fct-descr": "\u003cp\u003eGets the field \u003ccode\u003eQuality\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "Cell -\u003e Int",
        "fct-source": "src/Network-Cell.html#getQuality",
        "fct-type": "function",
        "title": "getQuality"
      },
      "index": {
        "description": "Gets the field Quality",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "getQuality",
        "normalized": "Cell-\u003eInt",
        "package": "n-m",
        "partial": "Quality",
        "signature": "Cell-\u003eInt"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:getValue",
      "description": {
        "fct-descr": "\u003cp\u003eGets the field with \u003ccode\u003ename\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "String-\u003e Cell-\u003e String",
        "fct-type": "function",
        "title": "getValue"
      },
      "index": {
        "description": "Gets the field with name",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "getValue",
        "normalized": "String-\u003eCell-\u003eString",
        "package": "n-m",
        "partial": "Value",
        "signature": "String-\u003eCell-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/n-m/docs/Network-Cell.html#v:isOpen",
      "description": {
        "fct-descr": "\u003cp\u003eChecks whether the network is open.\n\u003c/p\u003e",
        "fct-module": "Network.Cell",
        "fct-package": "n-m",
        "fct-signature": "Cell -\u003e Bool",
        "fct-source": "src/Network-Cell.html#isOpen",
        "fct-type": "function",
        "title": "isOpen"
      },
      "index": {
        "description": "Checks whether the network is open",
        "hierarchy": "Network Cell",
        "module": "Network.Cell",
        "name": "isOpen",
        "normalized": "Cell-\u003eBool",
        "package": "n-m",
        "partial": "Open",
        "signature": "Cell-\u003eBool"
      }
    }
  }
]