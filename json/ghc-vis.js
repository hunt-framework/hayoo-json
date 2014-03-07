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
        "word": "ghc-vis"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlthough ghc-vis is meant to be used in GHCi it can also be used as a library\nin regular Haskell programs which are run or compiled by GHC. You can run those\nprograms using \"runghc example.hs\" or \"ghc -threaded example.hs && ./example\".\nWithout the \"-threaded\"-Flag ghc-vis does not work correctly. This is an\nexample using ghc-vis outside of GHCi:\n\u003c/p\u003e\u003cpre\u003e import GHC.Vis\n\n main = do\n   putStrLn \"Start\"\n   let a = \"teeest\"\n   let b = [1..3]\n   let c = b ++ b\n   let d = [1..]\n   putStrLn $ show $ d !! 1\n\n   visualization\n   view a \"a\"\n   view b \"b\"\n   view c \"c\"\n   view d \"d\"\n\n   getChar\n   switch\n\n   getChar\n   putStrLn \"End\"\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "GHC.Vis",
          "name": "Vis",
          "package": "ghc-vis",
          "source": "src/GHC-Vis.html",
          "type": "module"
        },
        "index": {
          "description": "Although ghc-vis is meant to be used in GHCi it can also be used as library in regular Haskell programs which are run or compiled by GHC You can run those programs using runghc example.hs or ghc threaded example.hs example Without the threaded Flag ghc-vis does not work correctly This is an example using ghc-vis outside of GHCi import GHC.Vis main do putStrLn Start let teeest let let let putStrLn show visualization view view view view getChar switch getChar putStrLn End",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "Vis",
          "package": "ghc-vis",
          "partial": "Vis",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClear the visualization window, removing all expressions from it\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "clear",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Clear the visualization window removing all expressions from it",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "clear",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEvaluate an object that is shown in the visualization. (Names start with \u003ccode\u003et\u003c/code\u003e)\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "eval",
          "package": "ghc-vis",
          "signature": "String -\u003e IO ()",
          "source": "src/GHC-Vis.html#eval",
          "type": "function"
        },
        "index": {
          "description": "Evaluate an object that is shown in the visualization Names start with",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "eval",
          "normalized": "String-\u003eIO()",
          "package": "ghc-vis",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:eval"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExport the current visualization view to a file, format depends on the\n   file ending. Currently supported: svg, png, pdf, ps\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "export",
          "package": "ghc-vis",
          "signature": "String -\u003e IO ()",
          "source": "src/GHC-Vis.html#export",
          "type": "function"
        },
        "index": {
          "description": "Export the current visualization view to file format depends on the file ending Currently supported svg png pdf ps",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "export",
          "normalized": "String-\u003eIO()",
          "package": "ghc-vis",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:export"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange position in history\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "history",
          "package": "ghc-vis",
          "signature": "(Int -\u003e Int) -\u003e IO ()",
          "source": "src/GHC-Vis.html#history",
          "type": "function"
        },
        "index": {
          "description": "Change position in history",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "history",
          "normalized": "(Int-\u003eInt)-\u003eIO()",
          "package": "ghc-vis",
          "signature": "(Int-\u003eInt)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:history"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA minimalistic version of ghc-vis, without window decorations, help and\n   all that other stuff.\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "mvis",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#mvis",
          "type": "function"
        },
        "index": {
          "description": "minimalistic version of ghc-vis without window decorations help and all that other stuff",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "mvis",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:mvis"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReset the hidden boxes\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "restore",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Reset the hidden boxes",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "restore",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:restore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet the maximum depth for following closures on the heap\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "setDepth",
          "package": "ghc-vis",
          "signature": "Int -\u003e IO ()",
          "source": "src/GHC-Vis.html#setDepth",
          "type": "function"
        },
        "index": {
          "description": "Set the maximum depth for following closures on the heap",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "setDepth",
          "normalized": "Int-\u003eIO()",
          "package": "ghc-vis",
          "partial": "Depth",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:setDepth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSwitch between the list view and the graph view\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "switch",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#switch",
          "type": "function"
        },
        "index": {
          "description": "Switch between the list view and the graph view",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "switch",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:switch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen an object is updated by accessing it, you have to call this to\n   refresh the visualization window. You can also click on an object to force\n   an update.\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "update",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#update",
          "type": "function"
        },
        "index": {
          "description": "When an object is updated by accessing it you have to call this to refresh the visualization window You can also click on an object to force an update",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "update",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:update"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd expressions with a name to the visualization window.\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "view",
          "package": "ghc-vis",
          "signature": "a -\u003e String -\u003e IO ()",
          "source": "src/GHC-Vis.html#view",
          "type": "function"
        },
        "index": {
          "description": "Add expressions with name to the visualization window",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "view",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "ghc-vis",
          "signature": "a-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:view"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThis is the main function. It's to be called from GHCi and launches a\n   graphical window in a new thread.\n\u003c/p\u003e",
          "module": "GHC.Vis",
          "name": "vis",
          "package": "ghc-vis",
          "signature": "IO ()",
          "source": "src/GHC-Vis.html#vis",
          "type": "function"
        },
        "index": {
          "description": "This is the main function It to be called from GHCi and launches graphical window in new thread",
          "hierarchy": "GHC Vis",
          "module": "GHC.Vis",
          "name": "vis",
          "normalized": "IO()",
          "package": "ghc-vis",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:vis"
      }
    }
  ]
]