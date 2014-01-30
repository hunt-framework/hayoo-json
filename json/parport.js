[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterfacing the parallel port (currently only implemented for linux). This library is supposed to be thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "module",
        "fct-source": "src/System-Hardware-Parport.html",
        "fct-type": "module",
        "title": "Parport"
      },
      "index": {
        "description": "Interfacing the parallel port currently only implemented for linux This library is supposed to be thread-safe",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "Parport",
        "normalized": "",
        "package": "parport",
        "partial": "Parport",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#t:DD",
      "description": {
        "fct-descr": "\u003cp\u003eDescription of the data-direction for the pins of the data register\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Parport.html#DD",
        "fct-type": "data",
        "title": "DD"
      },
      "index": {
        "description": "Description of the data-direction for the pins of the data register",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "DD",
        "normalized": "",
        "package": "parport",
        "partial": "DD",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#t:PP",
      "description": {
        "fct-descr": "\u003cp\u003eThe type of a claimed parallel port. Internally it holds an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\n   for threading.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "data",
        "fct-source": "src/System-Hardware-Parport.html#PP",
        "fct-type": "data",
        "title": "PP"
      },
      "index": {
        "description": "The type of claimed parallel port Internally it holds an MVar for threading",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "PP",
        "normalized": "",
        "package": "parport",
        "partial": "PP",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:Input",
      "description": {
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "Input",
        "fct-source": "src/System-Hardware-Parport.html#DD",
        "fct-type": "function",
        "title": "Input"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "Input",
        "normalized": "",
        "package": "parport",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:Output",
      "description": {
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "Output",
        "fct-source": "src/System-Hardware-Parport.html#DD",
        "fct-type": "function",
        "title": "Output"
      },
      "index": {
        "description": "",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "Output",
        "normalized": "",
        "package": "parport",
        "partial": "Output",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:claim",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003eclaim \"/dev/parport0\"\u003c/code\u003e claims the parallel port exclusively and returns a handle.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "String -\u003e IO PP",
        "fct-source": "src/System-Hardware-Parport.html#claim",
        "fct-type": "function",
        "title": "claim"
      },
      "index": {
        "description": "claim dev parport0 claims the parallel port exclusively and returns handle",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "claim",
        "normalized": "String-\u003eIO PP",
        "package": "parport",
        "partial": "",
        "signature": "String-\u003eIO PP"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:dataDirection",
      "description": {
        "fct-descr": "\u003cp\u003eSet the data direction of the data pins (pin 2-9).\n   On my system, i get an error \"bad address\". Please mail your experiences to me.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e DD -\u003e IO ()",
        "fct-source": "src/System-Hardware-Parport.html#dataDirection",
        "fct-type": "function",
        "title": "dataDirection"
      },
      "index": {
        "description": "Set the data direction of the data pins pin On my system get an error bad address Please mail your experiences to me",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "dataDirection",
        "normalized": "PP-\u003eDD-\u003eIO()",
        "package": "parport",
        "partial": "Direction",
        "signature": "PP-\u003eDD-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:readPin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereadPin pp i\u003c/code\u003e reads the value of pin i on pp and returns it in the IO monad.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e Int -\u003e IO Bool",
        "fct-source": "src/System-Hardware-Parport.html#readPin",
        "fct-type": "function",
        "title": "readPin"
      },
      "index": {
        "description": "readPin pp reads the value of pin on pp and returns it in the IO monad",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "readPin",
        "normalized": "PP-\u003eInt-\u003eIO Bool",
        "package": "parport",
        "partial": "Pin",
        "signature": "PP-\u003eInt-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:readPins",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ereadPins pp l\u003c/code\u003e is equal to \u003ccode\u003esequence (map (readPin pp) l)\u003c/code\u003e\n   but it is faster.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e [Int] -\u003e IO [Bool]",
        "fct-source": "src/System-Hardware-Parport.html#readPins",
        "fct-type": "function",
        "title": "readPins"
      },
      "index": {
        "description": "readPins pp is equal to sequence map readPin pp but it is faster",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "readPins",
        "normalized": "PP-\u003e[Int]-\u003eIO[Bool]",
        "package": "parport",
        "partial": "Pins",
        "signature": "PP-\u003e[Int]-\u003eIO[Bool]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:release",
      "description": {
        "fct-descr": "\u003cp\u003eRelease a previously claimed parport.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e IO ()",
        "fct-source": "src/System-Hardware-Parport.html#release",
        "fct-type": "function",
        "title": "release"
      },
      "index": {
        "description": "Release previously claimed parport",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "release",
        "normalized": "PP-\u003eIO()",
        "package": "parport",
        "partial": "",
        "signature": "PP-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:test",
      "description": {
        "fct-descr": "\u003cp\u003eRun a simple test. View the source for an application example.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Hardware-Parport.html#test",
        "fct-type": "function",
        "title": "test"
      },
      "index": {
        "description": "Run simple test View the source for an application example",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "test",
        "normalized": "IO()",
        "package": "parport",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:writePin",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewritePin pp i b\u003c/code\u003e sets or clears pin i on pp, depending on the value of b.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e Int -\u003e Bool -\u003e IO ()",
        "fct-source": "src/System-Hardware-Parport.html#writePin",
        "fct-type": "function",
        "title": "writePin"
      },
      "index": {
        "description": "writePin pp sets or clears pin on pp depending on the value of",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "writePin",
        "normalized": "PP-\u003eInt-\u003eBool-\u003eIO()",
        "package": "parport",
        "partial": "Pin",
        "signature": "PP-\u003eInt-\u003eBool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:writePins",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003ewritePins pp l\u003c/code\u003e is equal to \u003ccode\u003esequence (map ((i, b) -\u003e writePin pp i b) l)\u003c/code\u003e\n   but it is faster.\n\u003c/p\u003e",
        "fct-module": "System.Hardware.Parport",
        "fct-package": "parport",
        "fct-signature": "PP -\u003e [(Int, Bool)] -\u003e IO ()",
        "fct-source": "src/System-Hardware-Parport.html#writePins",
        "fct-type": "function",
        "title": "writePins"
      },
      "index": {
        "description": "writePins pp is equal to sequence map writePin pp but it is faster",
        "hierarchy": "System Hardware Parport",
        "module": "System.Hardware.Parport",
        "name": "writePins",
        "normalized": "PP-\u003e[(Int,Bool)]-\u003eIO()",
        "package": "parport",
        "partial": "Pins",
        "signature": "PP-\u003e[(Int,Bool)]-\u003eIO()"
      }
    }
  }
]