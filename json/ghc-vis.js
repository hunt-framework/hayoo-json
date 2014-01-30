[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAlthough ghc-vis is meant to be used in GHCi it can also be used as a library\nin regular Haskell programs which are run or compiled by GHC. You can run those\nprograms using \"runghc example.hs\" or \"ghc -threaded example.hs && ./example\".\nWithout the \"-threaded\"-Flag ghc-vis does not work correctly. This is an\nexample using ghc-vis outside of GHCi:\n\u003c/p\u003e\u003cpre\u003e import GHC.Vis\n\n main = do\n   putStrLn \"Start\"\n   let a = \"teeest\"\n   let b = [1..3]\n   let c = b ++ b\n   let d = [1..]\n   putStrLn $ show $ d !! 1\n\n   visualization\n   view a \"a\"\n   view b \"b\"\n   view c \"c\"\n   view d \"d\"\n\n   getChar\n   switch\n\n   getChar\n   putStrLn \"End\"\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "module",
        "fct-source": "src/GHC-Vis.html",
        "fct-type": "module",
        "title": "Vis"
      },
      "index": {
        "description": "Although ghc-vis is meant to be used in GHCi it can also be used as library in regular Haskell programs which are run or compiled by GHC You can run those programs using runghc example.hs or ghc threaded example.hs example Without the threaded Flag ghc-vis does not work correctly This is an example using ghc-vis outside of GHCi import GHC.Vis main do putStrLn Start let teeest let let let putStrLn show visualization view view view view getChar switch getChar putStrLn End",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "Vis",
        "normalized": "",
        "package": "ghc-vis",
        "partial": "Vis",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:clear",
      "description": {
        "fct-descr": "\u003cp\u003eClear the visualization window, removing all expressions from it\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#clear",
        "fct-type": "function",
        "title": "clear"
      },
      "index": {
        "description": "Clear the visualization window removing all expressions from it",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "clear",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:eval",
      "description": {
        "fct-descr": "\u003cp\u003eEvaluate an object that is shown in the visualization. (Names start with \u003ccode\u003et\u003c/code\u003e)\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/GHC-Vis.html#eval",
        "fct-type": "function",
        "title": "eval"
      },
      "index": {
        "description": "Evaluate an object that is shown in the visualization Names start with",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "eval",
        "normalized": "String-\u003eIO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:export",
      "description": {
        "fct-descr": "\u003cp\u003eExport the current visualization view to a file, format depends on the\n   file ending. Currently supported: svg, png, pdf, ps\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/GHC-Vis.html#export",
        "fct-type": "function",
        "title": "export"
      },
      "index": {
        "description": "Export the current visualization view to file format depends on the file ending Currently supported svg png pdf ps",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "export",
        "normalized": "String-\u003eIO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:history",
      "description": {
        "fct-descr": "\u003cp\u003eChange position in history\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "(Int -\u003e Int) -\u003e IO ()",
        "fct-source": "src/GHC-Vis.html#history",
        "fct-type": "function",
        "title": "history"
      },
      "index": {
        "description": "Change position in history",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "history",
        "normalized": "(Int-\u003eInt)-\u003eIO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "(Int-\u003eInt)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:mvis",
      "description": {
        "fct-descr": "\u003cp\u003eA minimalistic version of ghc-vis, without window decorations, help and\n   all that other stuff.\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#mvis",
        "fct-type": "function",
        "title": "mvis"
      },
      "index": {
        "description": "minimalistic version of ghc-vis without window decorations help and all that other stuff",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "mvis",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:restore",
      "description": {
        "fct-descr": "\u003cp\u003eReset the hidden boxes\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#restore",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "Reset the hidden boxes",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "restore",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:setDepth",
      "description": {
        "fct-descr": "\u003cp\u003eSet the maximum depth for following closures on the heap\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/GHC-Vis.html#setDepth",
        "fct-type": "function",
        "title": "setDepth"
      },
      "index": {
        "description": "Set the maximum depth for following closures on the heap",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "setDepth",
        "normalized": "Int-\u003eIO()",
        "package": "ghc-vis",
        "partial": "Depth",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:switch",
      "description": {
        "fct-descr": "\u003cp\u003eSwitch between the list view and the graph view\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#switch",
        "fct-type": "function",
        "title": "switch"
      },
      "index": {
        "description": "Switch between the list view and the graph view",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "switch",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:update",
      "description": {
        "fct-descr": "\u003cp\u003eWhen an object is updated by accessing it, you have to call this to\n   refresh the visualization window. You can also click on an object to force\n   an update.\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#update",
        "fct-type": "function",
        "title": "update"
      },
      "index": {
        "description": "When an object is updated by accessing it you have to call this to refresh the visualization window You can also click on an object to force an update",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "update",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:view",
      "description": {
        "fct-descr": "\u003cp\u003eAdd expressions with a name to the visualization window.\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "a -\u003e String -\u003e IO ()",
        "fct-source": "src/GHC-Vis.html#view",
        "fct-type": "function",
        "title": "view"
      },
      "index": {
        "description": "Add expressions with name to the visualization window",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "view",
        "normalized": "a-\u003eString-\u003eIO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "a-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/ghc-vis/docs/GHC-Vis.html#v:vis",
      "description": {
        "fct-descr": "\u003cp\u003eThis is the main function. It's to be called from GHCi and launches a\n   graphical window in a new thread.\n\u003c/p\u003e",
        "fct-module": "GHC.Vis",
        "fct-package": "ghc-vis",
        "fct-signature": "IO ()",
        "fct-source": "src/GHC-Vis.html#vis",
        "fct-type": "function",
        "title": "vis"
      },
      "index": {
        "description": "This is the main function It to be called from GHCi and launches graphical window in new thread",
        "hierarchy": "GHC Vis",
        "module": "GHC.Vis",
        "name": "vis",
        "normalized": "IO()",
        "package": "ghc-vis",
        "partial": "",
        "signature": "IO()"
      }
    }
  }
]