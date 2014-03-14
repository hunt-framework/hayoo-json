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
        "word": "parport"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInterfacing the parallel port (currently only implemented for linux). This library is supposed to be thread-safe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Hardware.Parport",
          "name": "Parport",
          "package": "parport",
          "source": "src/System-Hardware-Parport.html",
          "type": "module"
        },
        "index": {
          "description": "Interfacing the parallel port currently only implemented for linux This library is supposed to be thread-safe",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "Parport",
          "package": "parport",
          "partial": "Parport",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the data-direction for the pins of the data register\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "DD",
          "package": "parport",
          "source": "src/System-Hardware-Parport.html#DD",
          "type": "data"
        },
        "index": {
          "description": "Description of the data-direction for the pins of the data register",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "DD",
          "package": "parport",
          "partial": "DD",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#t:DD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type of a claimed parallel port. Internally it holds an \u003ccode\u003e\u003ca\u003eMVar\u003c/a\u003e\u003c/code\u003e\n   for threading.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "PP",
          "package": "parport",
          "source": "src/System-Hardware-Parport.html#PP",
          "type": "data"
        },
        "index": {
          "description": "The type of claimed parallel port Internally it holds an MVar for threading",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "PP",
          "package": "parport",
          "partial": "PP",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#t:PP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Parport",
          "name": "Input",
          "package": "parport",
          "signature": "Input",
          "source": "src/System-Hardware-Parport.html#DD",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "Input",
          "package": "parport",
          "partial": "Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Hardware.Parport",
          "name": "Output",
          "package": "parport",
          "signature": "Output",
          "source": "src/System-Hardware-Parport.html#DD",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "Output",
          "package": "parport",
          "partial": "Output",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003eclaim \"/dev/parport0\"\u003c/code\u003e claims the parallel port exclusively and returns a handle.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "claim",
          "package": "parport",
          "signature": "String -\u003e IO PP",
          "source": "src/System-Hardware-Parport.html#claim",
          "type": "function"
        },
        "index": {
          "description": "claim dev parport0 claims the parallel port exclusively and returns handle",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "claim",
          "normalized": "String-\u003eIO PP",
          "package": "parport",
          "signature": "String-\u003eIO PP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:claim"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the data direction of the data pins (pin 2-9).\n   On my system, i get an error \"bad address\". Please mail your experiences to me.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "dataDirection",
          "package": "parport",
          "signature": "PP -\u003e DD -\u003e IO ()",
          "source": "src/System-Hardware-Parport.html#dataDirection",
          "type": "function"
        },
        "index": {
          "description": "Set the data direction of the data pins pin On my system get an error bad address Please mail your experiences to me",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "dataDirection",
          "normalized": "PP-\u003eDD-\u003eIO()",
          "package": "parport",
          "partial": "Direction",
          "signature": "PP-\u003eDD-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:dataDirection"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadPin pp i\u003c/code\u003e reads the value of pin i on pp and returns it in the IO monad.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "readPin",
          "package": "parport",
          "signature": "PP -\u003e Int -\u003e IO Bool",
          "source": "src/System-Hardware-Parport.html#readPin",
          "type": "function"
        },
        "index": {
          "description": "readPin pp reads the value of pin on pp and returns it in the IO monad",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "readPin",
          "normalized": "PP-\u003eInt-\u003eIO Bool",
          "package": "parport",
          "partial": "Pin",
          "signature": "PP-\u003eInt-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:readPin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ereadPins pp l\u003c/code\u003e is equal to \u003ccode\u003esequence (map (readPin pp) l)\u003c/code\u003e\n   but it is faster.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "readPins",
          "package": "parport",
          "signature": "PP -\u003e [Int] -\u003e IO [Bool]",
          "source": "src/System-Hardware-Parport.html#readPins",
          "type": "function"
        },
        "index": {
          "description": "readPins pp is equal to sequence map readPin pp but it is faster",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "readPins",
          "normalized": "PP-\u003e[Int]-\u003eIO[Bool]",
          "package": "parport",
          "partial": "Pins",
          "signature": "PP-\u003e[Int]-\u003eIO[Bool]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:readPins"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRelease a previously claimed parport.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "release",
          "package": "parport",
          "signature": "PP -\u003e IO ()",
          "source": "src/System-Hardware-Parport.html#release",
          "type": "function"
        },
        "index": {
          "description": "Release previously claimed parport",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "release",
          "normalized": "PP-\u003eIO()",
          "package": "parport",
          "signature": "PP-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:release"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun a simple test. View the source for an application example.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "test",
          "package": "parport",
          "signature": "IO ()",
          "source": "src/System-Hardware-Parport.html#test",
          "type": "function"
        },
        "index": {
          "description": "Run simple test View the source for an application example",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "test",
          "normalized": "IO()",
          "package": "parport",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:test"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewritePin pp i b\u003c/code\u003e sets or clears pin i on pp, depending on the value of b.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "writePin",
          "package": "parport",
          "signature": "PP -\u003e Int -\u003e Bool -\u003e IO ()",
          "source": "src/System-Hardware-Parport.html#writePin",
          "type": "function"
        },
        "index": {
          "description": "writePin pp sets or clears pin on pp depending on the value of",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "writePin",
          "normalized": "PP-\u003eInt-\u003eBool-\u003eIO()",
          "package": "parport",
          "partial": "Pin",
          "signature": "PP-\u003eInt-\u003eBool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:writePin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ccode\u003ewritePins pp l\u003c/code\u003e is equal to \u003ccode\u003esequence (map ((i, b) -\u003e writePin pp i b) l)\u003c/code\u003e\n   but it is faster.\n\u003c/p\u003e",
          "module": "System.Hardware.Parport",
          "name": "writePins",
          "package": "parport",
          "signature": "PP -\u003e [(Int, Bool)] -\u003e IO ()",
          "source": "src/System-Hardware-Parport.html#writePins",
          "type": "function"
        },
        "index": {
          "description": "writePins pp is equal to sequence map writePin pp but it is faster",
          "hierarchy": "System Hardware Parport",
          "module": "System.Hardware.Parport",
          "name": "writePins",
          "normalized": "PP-\u003e[(Int,Bool)]-\u003eIO()",
          "package": "parport",
          "partial": "Pins",
          "signature": "PP-\u003e[(Int,Bool)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/parport/docs/System-Hardware-Parport.html#v:writePins"
      }
    }
  ]
]