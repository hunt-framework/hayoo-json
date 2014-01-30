[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialisation/deserialisation of \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003es and\n\u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es as binary adjacency matrices.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e may be represented as an adjacency matrix\nof 0s and 1s.  The rows and columns of the matrix correspond to states\nof an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e: a 1 in a cell indicates that the\n\u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e causes a transition from the 'row' state to\nthe 'column' state.  If any of the rows in the matrix contain more\nthan one 1, the corresponding \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e and\n\u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e will be nondeterministic.\n\u003c/p\u003e\u003cp\u003eAn ActionSpecFile is a list of (symbol string, path to ActionMatrix\nfile) pairs.  Its syntax is as follows:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Symbols, and paths, should all be enclosed in double quotes (with\n    the nice side-effect that spaces are thus allowed).\n\u003c/li\u003e\u003cli\u003e A symbol/path pair is separated by whitespace.\n\u003c/li\u003e\u003cli\u003e The list of symbol/path pairs is delimited by semicolons (and\n    optional whitespace).  A trailing semicolon is optional.\n\u003c/li\u003e\u003cli\u003e Line comments, starting with -- (as in Haskell), are allowed\n    anywhere whitespace is allowed.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html",
        "fct-type": "module",
        "title": "ActionMatrix"
      },
      "index": {
        "description": "Serialisation deserialisation of FSM and Action as binary adjacency matrices An Action may be represented as an adjacency matrix of and The rows and columns of the matrix correspond to states of an FSM in cell indicates that the Action causes transition from the row state to the column state If any of the rows in the matrix contain more than one the corresponding Action and FSM will be nondeterministic An ActionSpecFile is list of symbol string path to ActionMatrix file pairs Its syntax is as follows Symbols and paths should all be enclosed in double quotes with the nice side-effect that spaces are thus allowed symbol path pair is separated by whitespace The list of symbol path pairs is delimited by semicolons and optional whitespace trailing semicolon is optional Line comments starting with as in Haskell are allowed anywhere whitespace is allowed",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "ActionMatrix",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Action Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:loadActionMxFsm",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e from action matrices, given a path\n to an ActionSpec file.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FilePath -\u003e IO (FSM String)",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#loadActionMxFsm",
        "fct-type": "function",
        "title": "loadActionMxFsm"
      },
      "index": {
        "description": "Load an FSM from action matrices given path to an ActionSpec file",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "loadActionMxFsm",
        "normalized": "FilePath-\u003eIO(FSM String)",
        "package": "fsmActions",
        "partial": "Action Mx Fsm",
        "signature": "FilePath-\u003eIO(FSM String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:parseActionMx",
      "description": {
        "fct-descr": "\u003cp\u003eParse an action matrix string, and turn it into an\n \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "String -\u003e ReadFsmMonad Action",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#parseActionMx",
        "fct-type": "function",
        "title": "parseActionMx"
      },
      "index": {
        "description": "Parse an action matrix string and turn it into an Action",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "parseActionMx",
        "normalized": "String-\u003eReadFsmMonad Action",
        "package": "fsmActions",
        "partial": "Action Mx",
        "signature": "String-\u003eReadFsmMonad Action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:parseFsmActionMxFiles",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a (symbol, path) association list, compute an\n \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e whose actions are read from action matrices\n in the specified paths, and associated with their corresponding\n symbols.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "[(sy, FilePath)] -\u003e IO (FSM sy)",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#parseFsmActionMxFiles",
        "fct-type": "function",
        "title": "parseFsmActionMxFiles"
      },
      "index": {
        "description": "Given symbol path association list compute an FSM whose actions are read from action matrices in the specified paths and associated with their corresponding symbols",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "parseFsmActionMxFiles",
        "normalized": "[(a,FilePath)]-\u003eIO(FSM a)",
        "package": "fsmActions",
        "partial": "Fsm Action Mx Files",
        "signature": "[(sy,FilePath)]-\u003eIO(FSM sy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:parseFsmActionMxs",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a (symbol, ActionMatrix string) association list, parse the\n strings and construct an FSM.  Includes normalisation and\n well-formedness checks.  Parse errors in individual action strings\n result in an error here (ReadFsmMonad is in the Either monad).\n\u003c/p\u003e\u003cp\u003eNote that if the same symbol appears multiple times, only one\n instance will appear in the \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e; the choice of which\n appears is not defined.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "[(sy, String)] -\u003e ReadFsmMonad (FSM sy)",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#parseFsmActionMxs",
        "fct-type": "function",
        "title": "parseFsmActionMxs"
      },
      "index": {
        "description": "Given symbol ActionMatrix string association list parse the strings and construct an FSM Includes normalisation and well-formedness checks Parse errors in individual action strings result in an error here ReadFsmMonad is in the Either monad Note that if the same symbol appears multiple times only one instance will appear in the FSM the choice of which appears is not defined",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "parseFsmActionMxs",
        "normalized": "[(a,String)]-\u003eReadFsmMonad(FSM a)",
        "package": "fsmActions",
        "partial": "Fsm Action Mxs",
        "signature": "[(sy,String)]-\u003eReadFsmMonad(FSM sy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:printActionMx",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print an action in action matrix format.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "Action -\u003e String",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#printActionMx",
        "fct-type": "function",
        "title": "printActionMx"
      },
      "index": {
        "description": "Pretty-print an action in action matrix format",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "printActionMx",
        "normalized": "Action-\u003eString",
        "package": "fsmActions",
        "partial": "Action Mx",
        "signature": "Action-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:printFsmActionMx",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a string FSM into an ActionSpec string and an\n (ActionMatrix path, ActionMatrix string) association list.  (The\n paths will be interpreted relative to the ActionSpec's location.)\n Filenames (per action label) may be specified by providing a\n (label, path) association list; whenever a lookup in that list\n fails, a default is computed from the label.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e [(String, FilePath)] -\u003e (String, [(FilePath, String)])",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#printFsmActionMx",
        "fct-type": "function",
        "title": "printFsmActionMx"
      },
      "index": {
        "description": "Pretty-print string FSM into an ActionSpec string and an ActionMatrix path ActionMatrix string association list The paths will be interpreted relative to the ActionSpec location Filenames per action label may be specified by providing label path association list whenever lookup in that list fails default is computed from the label",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "printFsmActionMx",
        "normalized": "FSM String-\u003e[(String,FilePath)]-\u003e(String,[(FilePath,String)])",
        "package": "fsmActions",
        "partial": "Fsm Action Mx",
        "signature": "FSM String-\u003e[(String,FilePath)]-\u003e(String,[(FilePath,String)])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-ActionMatrix.html#v:saveActionMxFsm",
      "description": {
        "fct-descr": "\u003cp\u003eSave an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e to an ActionSpec file (whose path\n is specified) and a set of action matrices (whose paths may be\n optionally specified using a (label, path) association list).\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.ActionMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e FilePath -\u003e [(String, FilePath)] -\u003e IO ()",
        "fct-source": "src/Data-FsmActions-ActionMatrix.html#saveActionMxFsm",
        "fct-type": "function",
        "title": "saveActionMxFsm"
      },
      "index": {
        "description": "Save an FSM to an ActionSpec file whose path is specified and set of action matrices whose paths may be optionally specified using label path association list",
        "hierarchy": "Data FsmActions ActionMatrix",
        "module": "Data.FsmActions.ActionMatrix",
        "name": "saveActionMxFsm",
        "normalized": "FSM String-\u003eFilePath-\u003e[(String,FilePath)]-\u003eIO()",
        "package": "fsmActions",
        "partial": "Action Mx Fsm",
        "signature": "FSM String-\u003eFilePath-\u003e[(String,FilePath)]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eError handling for FSMs.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-Error.html",
        "fct-type": "module",
        "title": "Error"
      },
      "index": {
        "description": "Error handling for FSMs",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "Error",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#t:FsmError",
      "description": {
        "fct-descr": "\u003cp\u003eErrors when reading matrices from strings.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "data",
        "fct-source": "src/Data-FsmActions-Error.html#FsmError",
        "fct-type": "data",
        "title": "FsmError"
      },
      "index": {
        "description": "Errors when reading matrices from strings",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "FsmError",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#t:ReadFsmMonad",
      "description": {
        "fct-descr": "\u003cp\u003eError monad for reading FSMs in.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "type",
        "fct-source": "src/Data-FsmActions-Error.html#ReadFsmMonad",
        "fct-type": "type",
        "title": "ReadFsmMonad"
      },
      "index": {
        "description": "Error monad for reading FSMs in",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "ReadFsmMonad",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Read Fsm Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#v:FsmError",
      "description": {
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "FsmError",
        "fct-source": "src/Data-FsmActions-Error.html#FsmError",
        "fct-type": "function",
        "title": "FsmError"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "FsmError",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Error",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#v:msg",
      "description": {
        "fct-descr": "\u003cp\u003eExplanatory message\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "String",
        "fct-source": "src/Data-FsmActions-Error.html#FsmError",
        "fct-type": "function",
        "title": "msg"
      },
      "index": {
        "description": "Explanatory message",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "msg",
        "normalized": "",
        "package": "fsmActions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Error.html#v:value",
      "description": {
        "fct-descr": "\u003cp\u003eOffending value\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Error",
        "fct-package": "fsmActions",
        "fct-signature": "String",
        "fct-source": "src/Data-FsmActions-Error.html#FsmError",
        "fct-type": "function",
        "title": "value"
      },
      "index": {
        "description": "Offending value",
        "hierarchy": "Data FsmActions Error",
        "module": "Data.FsmActions.Error",
        "name": "value",
        "normalized": "",
        "package": "fsmActions",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmEdges.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialisation/deserialisation of \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003es in edge list\nformat.\n\u003c/p\u003e\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e may be represented textually as list of\n{source_state-\u003edestination_state,label} strings, each of which\nrepresents an edge in its directed graph.  (This representation is\ninteresting because it's used by Mathematica for graph I/O.)\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.FsmEdges",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-FsmEdges.html",
        "fct-type": "module",
        "title": "FsmEdges"
      },
      "index": {
        "description": "Serialisation deserialisation of FSM in edge list format An FSM may be represented textually as list of source state destination state label strings each of which represents an edge in its directed graph This representation is interesting because it used by Mathematica for graph",
        "hierarchy": "Data FsmActions FsmEdges",
        "module": "Data.FsmActions.FsmEdges",
        "name": "FsmEdges",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmEdges.html#v:loadFsmEdges",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e from an FsmEdges file.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmEdges",
        "fct-package": "fsmActions",
        "fct-signature": "FilePath -\u003e IO (FSM String)",
        "fct-source": "src/Data-FsmActions-FsmEdges.html#loadFsmEdges",
        "fct-type": "function",
        "title": "loadFsmEdges"
      },
      "index": {
        "description": "Load an FSM from an FsmEdges file",
        "hierarchy": "Data FsmActions FsmEdges",
        "module": "Data.FsmActions.FsmEdges",
        "name": "loadFsmEdges",
        "normalized": "FilePath-\u003eIO(FSM String)",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": "FilePath-\u003eIO(FSM String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmEdges.html#v:parseFsmEdges",
      "description": {
        "fct-descr": "\u003cp\u003eParse an FsmEdges-formatted FSM held in a string.  Includes\n normalisation and well-formedness checks.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmEdges",
        "fct-package": "fsmActions",
        "fct-signature": "String -\u003e ReadFsmMonad (FSM String)",
        "fct-source": "src/Data-FsmActions-FsmEdges.html#parseFsmEdges",
        "fct-type": "function",
        "title": "parseFsmEdges"
      },
      "index": {
        "description": "Parse an FsmEdges-formatted FSM held in string Includes normalisation and well-formedness checks",
        "hierarchy": "Data FsmActions FsmEdges",
        "module": "Data.FsmActions.FsmEdges",
        "name": "parseFsmEdges",
        "normalized": "String-\u003eReadFsmMonad(FSM String)",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": "String-\u003eReadFsmMonad(FSM String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmEdges.html#v:printFsmEdges",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a string FSM in FsmMatrix format.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmEdges",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e String",
        "fct-source": "src/Data-FsmActions-FsmEdges.html#printFsmEdges",
        "fct-type": "function",
        "title": "printFsmEdges"
      },
      "index": {
        "description": "Pretty-print string FSM in FsmMatrix format",
        "hierarchy": "Data FsmActions FsmEdges",
        "module": "Data.FsmActions.FsmEdges",
        "name": "printFsmEdges",
        "normalized": "FSM String-\u003eString",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": "FSM String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmEdges.html#v:saveFsmEdges",
      "description": {
        "fct-descr": "\u003cp\u003eSave an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e to an FsmMatrix file.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmEdges",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Data-FsmActions-FsmEdges.html#saveFsmEdges",
        "fct-type": "function",
        "title": "saveFsmEdges"
      },
      "index": {
        "description": "Save an FSM to an FsmMatrix file",
        "hierarchy": "Data FsmActions FsmEdges",
        "module": "Data.FsmActions.FsmEdges",
        "name": "saveFsmEdges",
        "normalized": "FSM String-\u003eFilePath-\u003eIO()",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": "FSM String-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmMatrix.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSerialisation/deserialisation of \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003es as FSM transition\nmatrices.\n\u003c/p\u003e\u003cp\u003eA \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e may be represented as an transition matrix whose\nrows correspond to states of the FSM, and whose columns correspond to\nits possible actions (labels on its transitions).  A given cell then\nrepresents the transition(s) from some (row) state under some (column)\naction, and contains a comma-separated list of integers: the row\nnumbers of the destination states.  (Of course, for a deterministic\naction, there's just one, and no comma.)  Rows are numbered from 0 and\nincrement strictly.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.FsmMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-FsmMatrix.html",
        "fct-type": "module",
        "title": "FsmMatrix"
      },
      "index": {
        "description": "Serialisation deserialisation of FSM as FSM transition matrices FSM may be represented as an transition matrix whose rows correspond to states of the FSM and whose columns correspond to its possible actions labels on its transitions given cell then represents the transition from some row state under some column action and contains comma-separated list of integers the row numbers of the destination states Of course for deterministic action there just one and no comma Rows are numbered from and increment strictly",
        "hierarchy": "Data FsmActions FsmMatrix",
        "module": "Data.FsmActions.FsmMatrix",
        "name": "FsmMatrix",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmMatrix.html#v:loadFsmMx",
      "description": {
        "fct-descr": "\u003cp\u003eLoad an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e from an FsmMatrix file.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FilePath -\u003e IO (FSM String)",
        "fct-source": "src/Data-FsmActions-FsmMatrix.html#loadFsmMx",
        "fct-type": "function",
        "title": "loadFsmMx"
      },
      "index": {
        "description": "Load an FSM from an FsmMatrix file",
        "hierarchy": "Data FsmActions FsmMatrix",
        "module": "Data.FsmActions.FsmMatrix",
        "name": "loadFsmMx",
        "normalized": "FilePath-\u003eIO(FSM String)",
        "package": "fsmActions",
        "partial": "Fsm Mx",
        "signature": "FilePath-\u003eIO(FSM String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmMatrix.html#v:parseFsmMx",
      "description": {
        "fct-descr": "\u003cp\u003eParse an FsmMatrix-formatted FSM held in a string.  Includes\n normalisation and well-formedness checks.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "String -\u003e ReadFsmMonad (FSM String)",
        "fct-source": "src/Data-FsmActions-FsmMatrix.html#parseFsmMx",
        "fct-type": "function",
        "title": "parseFsmMx"
      },
      "index": {
        "description": "Parse an FsmMatrix-formatted FSM held in string Includes normalisation and well-formedness checks",
        "hierarchy": "Data FsmActions FsmMatrix",
        "module": "Data.FsmActions.FsmMatrix",
        "name": "parseFsmMx",
        "normalized": "String-\u003eReadFsmMonad(FSM String)",
        "package": "fsmActions",
        "partial": "Fsm Mx",
        "signature": "String-\u003eReadFsmMonad(FSM String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmMatrix.html#v:printFsmMx",
      "description": {
        "fct-descr": "\u003cp\u003ePretty-print a string FSM in FsmMatrix format.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e String",
        "fct-source": "src/Data-FsmActions-FsmMatrix.html#printFsmMx",
        "fct-type": "function",
        "title": "printFsmMx"
      },
      "index": {
        "description": "Pretty-print string FSM in FsmMatrix format",
        "hierarchy": "Data FsmActions FsmMatrix",
        "module": "Data.FsmActions.FsmMatrix",
        "name": "printFsmMx",
        "normalized": "FSM String-\u003eString",
        "package": "fsmActions",
        "partial": "Fsm Mx",
        "signature": "FSM String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-FsmMatrix.html#v:saveFsmMx",
      "description": {
        "fct-descr": "\u003cp\u003eSave an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e to an FsmMatrix file.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.FsmMatrix",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e FilePath -\u003e IO ()",
        "fct-source": "src/Data-FsmActions-FsmMatrix.html#saveFsmMx",
        "fct-type": "function",
        "title": "saveFsmMx"
      },
      "index": {
        "description": "Save an FSM to an FsmMatrix file",
        "hierarchy": "Data FsmActions FsmMatrix",
        "module": "Data.FsmActions.FsmMatrix",
        "name": "saveFsmMx",
        "normalized": "FSM String-\u003eFilePath-\u003eIO()",
        "package": "fsmActions",
        "partial": "Fsm Mx",
        "signature": "FSM String-\u003eFilePath-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eGenerating, interpreting, and drawing graphs of FSMs.\n\u003c/p\u003e\u003cp\u003eIncludes:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Interface to fgl graph library for graph input/output\n    (\u003ca\u003ehttp://hackage.haskell.org/package/fgl\u003c/a\u003e).\n\u003c/li\u003e\u003cli\u003e Interface to graphviz library for dot output\n    (\u003ca\u003ehttp://hackage.haskell.org/package/graphviz\u003c/a\u003e).\n\u003c/li\u003e\u003cli\u003e Home-grown GML (Graph Modelling Language) output.\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-Graph.html",
        "fct-type": "module",
        "title": "Graph"
      },
      "index": {
        "description": "Generating interpreting and drawing graphs of FSMs Includes Interface to fgl graph library for graph input output http hackage.haskell.org package fgl Interface to graphviz library for dot output http hackage.haskell.org package graphviz Home-grown GML Graph Modelling Language output",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "Graph",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Graph",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#t:SelfLoops",
      "description": {
        "fct-descr": "\u003cp\u003eWhen converting an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e into a graph, do we keep\n all self-loops, or only those which are sources of nondeterminism?\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "data",
        "fct-source": "src/Data-FsmActions-Graph.html#SelfLoops",
        "fct-type": "data",
        "title": "SelfLoops"
      },
      "index": {
        "description": "When converting an FSM into graph do we keep all self-loops or only those which are sources of nondeterminism",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "SelfLoops",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Self Loops",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:Keep",
      "description": {
        "fct-descr": "\u003cp\u003eKeep them all\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "Keep",
        "fct-source": "src/Data-FsmActions-Graph.html#SelfLoops",
        "fct-type": "function",
        "title": "Keep"
      },
      "index": {
        "description": "Keep them all",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "Keep",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Keep",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:Trim",
      "description": {
        "fct-descr": "\u003cp\u003eTrim any which aren't nondeterminism sources.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "Trim",
        "fct-source": "src/Data-FsmActions-Graph.html#SelfLoops",
        "fct-type": "function",
        "title": "Trim"
      },
      "index": {
        "description": "Trim any which aren nondeterminism sources",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "Trim",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Trim",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:fglDot",
      "description": {
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "gr a b -\u003e DotGraph Int",
        "fct-source": "src/Data-FsmActions-Graph.html#fglDot",
        "fct-type": "function",
        "title": "fglDot"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "fglDot",
        "normalized": "a b c-\u003eDotGraph Int",
        "package": "fsmActions",
        "partial": "Dot",
        "signature": "gr a b-\u003eDotGraph Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:fglToFsm",
      "description": {
        "fct-descr": "\u003cp\u003eTurn an FGL graph (interpreted as being a directed graph) into an\n FSM.  Self-loops are inserted as required.  Also returns a list of\n the graph's labelled nodes, since the labels are discarded by the\n FSM construction.  FSM states are numbered [0..] and thus may be\n used as an index into that list of labelled nodes, in order to\n relate FSM states back to the original graph nodes and their\n labels.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "gr a sy -\u003e ReadFsmMonad (FSM sy, [LNode a])",
        "fct-source": "src/Data-FsmActions-Graph.html#fglToFsm",
        "fct-type": "function",
        "title": "fglToFsm"
      },
      "index": {
        "description": "Turn an FGL graph interpreted as being directed graph into an FSM Self-loops are inserted as required Also returns list of the graph labelled nodes since the labels are discarded by the FSM construction FSM states are numbered and thus may be used as an index into that list of labelled nodes in order to relate FSM states back to the original graph nodes and their labels",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "fglToFsm",
        "normalized": "a b c-\u003eReadFsmMonad(FSM c,[LNode b])",
        "package": "fsmActions",
        "partial": "To Fsm",
        "signature": "gr a sy-\u003eReadFsmMonad(FSM sy,[LNode a])"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:fsmToDot",
      "description": {
        "fct-descr": "\u003cp\u003eTurn an FSM into a \u003ccode\u003e\u003ca\u003eDotGraph\u003c/a\u003e\u003c/code\u003e, trimming any\n self-loops which aren't sources of nondeterminism.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e DotGraph Int",
        "fct-source": "src/Data-FsmActions-Graph.html#fsmToDot",
        "fct-type": "function",
        "title": "fsmToDot"
      },
      "index": {
        "description": "Turn an FSM into DotGraph trimming any self-loops which aren sources of nondeterminism",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "fsmToDot",
        "normalized": "FSM a-\u003eDotGraph Int",
        "package": "fsmActions",
        "partial": "To Dot",
        "signature": "FSM sy-\u003eDotGraph Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:fsmToFGL",
      "description": {
        "fct-descr": "\u003cp\u003eTurn an FSM into an fgl graph with labelled edges.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e SelfLoops -\u003e Gr () sy",
        "fct-source": "src/Data-FsmActions-Graph.html#fsmToFGL",
        "fct-type": "function",
        "title": "fsmToFGL"
      },
      "index": {
        "description": "Turn an FSM into an fgl graph with labelled edges",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "fsmToFGL",
        "normalized": "FSM a-\u003eSelfLoops-\u003eGr()a",
        "package": "fsmActions",
        "partial": "To FGL",
        "signature": "FSM sy-\u003eSelfLoops-\u003eGr()sy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:strongCCs",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an FSM's strongly-connected components.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e [[State]]",
        "fct-source": "src/Data-FsmActions-Graph.html#strongCCs",
        "fct-type": "function",
        "title": "strongCCs"
      },
      "index": {
        "description": "Compute an FSM strongly-connected components",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "strongCCs",
        "normalized": "FSM a-\u003e[[State]]",
        "package": "fsmActions",
        "partial": "CCs",
        "signature": "FSM sy-\u003e[[State]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-Graph.html#v:weakCCs",
      "description": {
        "fct-descr": "\u003cp\u003eCompute an FSM's weakly-connected components.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.Graph",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e [[State]]",
        "fct-source": "src/Data-FsmActions-Graph.html#weakCCs",
        "fct-type": "function",
        "title": "weakCCs"
      },
      "index": {
        "description": "Compute an FSM weakly-connected components",
        "hierarchy": "Data FsmActions Graph",
        "module": "Data.FsmActions.Graph",
        "name": "weakCCs",
        "normalized": "FSM a-\u003e[[State]]",
        "package": "fsmActions",
        "partial": "CCs",
        "signature": "FSM sy-\u003e[[State]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHigh-level input/output interface for finite state machines.\n\u003c/p\u003e\u003cp\u003eThis module allows one to load and save FSMs, where the format to be\nused may be either explicitly specified, or guessed according to the\nfilename's extension.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-IO.html",
        "fct-type": "module",
        "title": "IO"
      },
      "index": {
        "description": "High-level input output interface for finite state machines This module allows one to load and save FSMs where the format to be used may be either explicitly specified or guessed according to the filename extension",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "IO",
        "normalized": "",
        "package": "fsmActions",
        "partial": "IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#t:FsmIO",
      "description": {
        "fct-descr": "\u003cp\u003eKnown FSM I/O formats.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "data",
        "fct-source": "src/Data-FsmActions-IO.html#FsmIO",
        "fct-type": "data",
        "title": "FsmIO"
      },
      "index": {
        "description": "Known FSM formats",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "FsmIO",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:FsmActionMatrices",
      "description": {
        "fct-descr": "\u003cp\u003eActionMatrix format: use\n \u003ccode\u003e\u003ca\u003eloadActionMxFsm\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esaveActionMxFsm\u003c/a\u003e\u003c/code\u003e; filename\n extensions: actions, actionspec, actionmxs,\n actionmatrices, fsmactions.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FsmActionMatrices",
        "fct-source": "src/Data-FsmActions-IO.html#FsmIO",
        "fct-type": "function",
        "title": "FsmActionMatrices"
      },
      "index": {
        "description": "ActionMatrix format use loadActionMxFsm and saveActionMxFsm filename extensions actions actionspec actionmxs actionmatrices fsmactions",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "FsmActionMatrices",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Action Matrices",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:FsmEdges",
      "description": {
        "fct-descr": "\u003cp\u003eFsmEdges format: use\n \u003ccode\u003e\u003ca\u003eloadFsmEdges\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esaveFsmEdges\u003c/a\u003e\u003c/code\u003e; filename\n extensions: edges, fsmedges, graph, mathematica.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FsmEdges",
        "fct-source": "src/Data-FsmActions-IO.html#FsmIO",
        "fct-type": "function",
        "title": "FsmEdges"
      },
      "index": {
        "description": "FsmEdges format use loadFsmEdges and saveFsmEdges filename extensions edges fsmedges graph mathematica",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "FsmEdges",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Edges",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:FsmMatrix",
      "description": {
        "fct-descr": "\u003cp\u003eFsmMatrix format: use\n \u003ccode\u003e\u003ca\u003eloadFsmMx\u003c/a\u003e\u003c/code\u003e and\n \u003ccode\u003e\u003ca\u003esaveFsmMx\u003c/a\u003e\u003c/code\u003e; filename\n extensions: mx, matrix, fsmmx, fsmmatrix, fsm.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FsmMatrix",
        "fct-source": "src/Data-FsmActions-IO.html#FsmIO",
        "fct-type": "function",
        "title": "FsmMatrix"
      },
      "index": {
        "description": "FsmMatrix format use loadFsmMx and saveFsmMx filename extensions mx matrix fsmmx fsmmatrix fsm",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "FsmMatrix",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Matrix",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:fsmFormats",
      "description": {
        "fct-descr": "\u003cp\u003eGiven a path, return a list of all \u003ccode\u003e\u003ca\u003eFsmIO\u003c/a\u003e\u003c/code\u003e formats, with guesses\n (according to the file extension) at the front.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FilePath -\u003e [FsmIO]",
        "fct-source": "src/Data-FsmActions-IO.html#fsmFormats",
        "fct-type": "function",
        "title": "fsmFormats"
      },
      "index": {
        "description": "Given path return list of all FsmIO formats with guesses according to the file extension at the front",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "fsmFormats",
        "normalized": "FilePath-\u003e[FsmIO]",
        "package": "fsmActions",
        "partial": "Formats",
        "signature": "FilePath-\u003e[FsmIO]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:loadFsm",
      "description": {
        "fct-descr": "\u003cp\u003eRead an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e from a file.  If the user specifies\n any \u003ccode\u003e\u003ca\u003eFsmIO\u003c/a\u003e\u003c/code\u003e formats, try each of those in turn; otherwise, try\n every format known, using the filename extension to guess which to\n try first.\n\u003c/p\u003e\u003cp\u003eThe returned value is either the resultant \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e,\n or the error message produced by trying to load it with the _first_\n format (so in the case of guessing formats, if the guess is wrong\n and the file is corrupt, you might get an unhelpful error message).\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FilePath -\u003e [FsmIO] -\u003e IO (Either FsmError (FSM String))",
        "fct-source": "src/Data-FsmActions-IO.html#loadFsm",
        "fct-type": "function",
        "title": "loadFsm"
      },
      "index": {
        "description": "Read an FSM from file If the user specifies any FsmIO formats try each of those in turn otherwise try every format known using the filename extension to guess which to try first The returned value is either the resultant FSM or the error message produced by trying to load it with the first format so in the case of guessing formats if the guess is wrong and the file is corrupt you might get an unhelpful error message",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "loadFsm",
        "normalized": "FilePath-\u003e[FsmIO]-\u003eIO(Either FsmError(FSM String))",
        "package": "fsmActions",
        "partial": "Fsm",
        "signature": "FilePath-\u003e[FsmIO]-\u003eIO(Either FsmError(FSM String))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-IO.html#v:saveFsm",
      "description": {
        "fct-descr": "\u003cp\u003eSave an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e to a file.  If the user specifies\n an \u003ccode\u003e\u003ca\u003eFsmIO\u003c/a\u003e\u003c/code\u003e format, it is used; otherwise, it is guessed from the\n filename extension (and failing that, the first guess, ie\n \u003ccode\u003e\u003ca\u003eFsmActionMatrices\u003c/a\u003e\u003c/code\u003e, is used).\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.IO",
        "fct-package": "fsmActions",
        "fct-signature": "FSM String -\u003e FilePath -\u003e Maybe FsmIO -\u003e IO ()",
        "fct-source": "src/Data-FsmActions-IO.html#saveFsm",
        "fct-type": "function",
        "title": "saveFsm"
      },
      "index": {
        "description": "Save an FSM to file If the user specifies an FsmIO format it is used otherwise it is guessed from the filename extension and failing that the first guess ie FsmActionMatrices is used",
        "hierarchy": "Data FsmActions IO",
        "module": "Data.FsmActions.IO",
        "name": "saveFsm",
        "normalized": "FSM String-\u003eFilePath-\u003eMaybe FsmIO-\u003eIO()",
        "package": "fsmActions",
        "partial": "Fsm",
        "signature": "FSM String-\u003eFilePath-\u003eMaybe FsmIO-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWell-formedness checks for finite state machines.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions-WellFormed.html",
        "fct-type": "module",
        "title": "WellFormed"
      },
      "index": {
        "description": "Well-formedness checks for finite state machines",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "WellFormed",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Well Formed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#t:WellFormed",
      "description": {
        "fct-descr": "\u003cp\u003eAn \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e is well-formed if all its actions are the same length,\n none of its actions contain destinations which are out of range,\n and it is not disjoint.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "data",
        "fct-source": "src/Data-FsmActions-WellFormed.html#WellFormed",
        "fct-type": "data",
        "title": "WellFormed"
      },
      "index": {
        "description": "An FSM is well-formed if all its actions are the same length none of its actions contain destinations which are out of range and it is not disjoint",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "WellFormed",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Well Formed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:BadActions",
      "description": {
        "fct-descr": "\u003cp\u003eSome \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es contain out-of-range (negative or too-high)\n destinations.  Carries a sorted list of all such actions and\n their corresponding symbols.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "BadActions [(sy, Action)]",
        "fct-source": "src/Data-FsmActions-WellFormed.html#WellFormed",
        "fct-type": "function",
        "title": "BadActions"
      },
      "index": {
        "description": "Some Action contain out-of-range negative or too-high destinations Carries sorted list of all such actions and their corresponding symbols",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "BadActions",
        "normalized": "BadActions[(a,Action)]",
        "package": "fsmActions",
        "partial": "Bad Actions",
        "signature": "BadActions[(sy,Action)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:BadLengths",
      "description": {
        "fct-descr": "\u003cp\u003eLengths of Actions in the \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e don't all match.  Carries a\n sorted list of (symbol, \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e length) pairs, one for every\n symbol in the alphabet of the \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "BadLengths [(sy, Int)]",
        "fct-source": "src/Data-FsmActions-WellFormed.html#WellFormed",
        "fct-type": "function",
        "title": "BadLengths"
      },
      "index": {
        "description": "Lengths of Actions in the FSM don all match Carries sorted list of symbol Action length pairs one for every symbol in the alphabet of the FSM",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "BadLengths",
        "normalized": "BadLengths[(a,Int)]",
        "package": "fsmActions",
        "partial": "Bad Lengths",
        "signature": "BadLengths[(sy,Int)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:Disconnected",
      "description": {
        "fct-descr": "\u003cp\u003eThe FSM is disconnected, i.e. not even weakly-connected.\n Carries a list of its weakly-connected components (each is a\n list of \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003es).\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "Disconnected [[State]]",
        "fct-source": "src/Data-FsmActions-WellFormed.html#WellFormed",
        "fct-type": "function",
        "title": "Disconnected"
      },
      "index": {
        "description": "The FSM is disconnected i.e not even weakly-connected Carries list of its weakly-connected components each is list of State",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "Disconnected",
        "normalized": "Disconnected[[State]]",
        "package": "fsmActions",
        "partial": "Disconnected",
        "signature": "Disconnected[[State]]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:WellFormed",
      "description": {
        "fct-descr": "\u003cp\u003eWell-formed.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "WellFormed",
        "fct-source": "src/Data-FsmActions-WellFormed.html#WellFormed",
        "fct-type": "function",
        "title": "WellFormed"
      },
      "index": {
        "description": "Well-formed",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "WellFormed",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Well Formed",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:isWellFormed",
      "description": {
        "fct-descr": "\u003cp\u003eCheck if an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e is well-formed or not.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e WellFormed sy",
        "fct-source": "src/Data-FsmActions-WellFormed.html#isWellFormed",
        "fct-type": "function",
        "title": "isWellFormed"
      },
      "index": {
        "description": "Check if an FSM is well-formed or not",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "isWellFormed",
        "normalized": "FSM a-\u003eWellFormed a",
        "package": "fsmActions",
        "partial": "Well Formed",
        "signature": "FSM sy-\u003eWellFormed sy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions-WellFormed.html#v:polishFSM",
      "description": {
        "fct-descr": "\u003cp\u003eGiven an FSM, normalise it and check it's well-formed.\n\u003c/p\u003e\u003cp\u003eThis should be called whenever an FSM is read/computed from an\n outside source.  If parsing, the right time to call this is\n immediately after you've decided if the parse of the FSM was\n successful or not.  (In other words, here are some static checks!)\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions.WellFormed",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e ReadFsmMonad (FSM sy)",
        "fct-source": "src/Data-FsmActions-WellFormed.html#polishFSM",
        "fct-type": "function",
        "title": "polishFSM"
      },
      "index": {
        "description": "Given an FSM normalise it and check it well-formed This should be called whenever an FSM is read computed from an outside source If parsing the right time to call this is immediately after you ve decided if the parse of the FSM was successful or not In other words here are some static checks",
        "hierarchy": "Data FsmActions WellFormed",
        "module": "Data.FsmActions.WellFormed",
        "name": "polishFSM",
        "normalized": "FSM a-\u003eReadFsmMonad(FSM a)",
        "package": "fsmActions",
        "partial": "FSM",
        "signature": "FSM sy-\u003eReadFsmMonad(FSM sy)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eFinite state machines.\n\u003c/p\u003e\u003cp\u003eHere an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e is a map from symbols to actions.  Symbols are parametric\n(will usually be Strings or Chars).  \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es specify the action of a\nsymbol on each state, and are represented as lists of transitions: one\nper state.  States are just numbers, from 0 to n, corresponding to\nindices on transition lists in \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es.  Then deterministic actions\nare just Ints, identifying the state to transition to under that\naction; nondeterministic actions are lists of Ints: all the states to\npossibly transition to under that action.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "module",
        "fct-source": "src/Data-FsmActions.html",
        "fct-type": "module",
        "title": "FsmActions"
      },
      "index": {
        "description": "Finite state machines Here an FSM is map from symbols to actions Symbols are parametric will usually be Strings or Chars Action specify the action of symbol on each state and are represented as lists of transitions one per state States are just numbers from to corresponding to indices on transition lists in Action Then deterministic actions are just Ints identifying the state to transition to under that action nondeterministic actions are lists of Ints all the states to possibly transition to under that action",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "FsmActions",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Fsm Actions",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#t:Action",
      "description": {
        "fct-descr": "\u003cp\u003eActions are lists of \u003ccode\u003eDestinationSets\u003c/code\u003e, indexed by source\n \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "newtype",
        "fct-source": "src/Data-FsmActions.html#Action",
        "fct-type": "newtype",
        "title": "Action"
      },
      "index": {
        "description": "Actions are lists of DestinationSets indexed by source State",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "Action",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#t:DestinationSet",
      "description": {
        "fct-descr": "\u003cp\u003eDestination sets are just lists of \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "newtype",
        "fct-source": "src/Data-FsmActions.html#DestinationSet",
        "fct-type": "newtype",
        "title": "DestinationSet"
      },
      "index": {
        "description": "Destination sets are just lists of State",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "DestinationSet",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Destination Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#t:FSM",
      "description": {
        "fct-descr": "\u003cp\u003eFinite state machine whose nodes are labelled with type sy.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "data",
        "fct-source": "src/Data-FsmActions.html#FSM",
        "fct-type": "data",
        "title": "FSM"
      },
      "index": {
        "description": "Finite state machine whose nodes are labelled with type sy",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "FSM",
        "normalized": "",
        "package": "fsmActions",
        "partial": "FSM",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#t:State",
      "description": {
        "fct-descr": "\u003cp\u003eStates are integers, counting from zero.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "type",
        "fct-source": "src/Data-FsmActions.html#State",
        "fct-type": "type",
        "title": "State"
      },
      "index": {
        "description": "States are integers counting from zero",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "State",
        "normalized": "",
        "package": "fsmActions",
        "partial": "State",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#t:Word",
      "description": {
        "fct-descr": "\u003cp\u003eWords are lists of symbols.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "newtype",
        "fct-source": "src/Data-FsmActions.html#Word",
        "fct-type": "newtype",
        "title": "Word"
      },
      "index": {
        "description": "Words are lists of symbols",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "Word",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Word",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:Action",
      "description": {
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Action",
        "fct-source": "src/Data-FsmActions.html#Action",
        "fct-type": "function",
        "title": "Action"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "Action",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Action",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:DestinationSet",
      "description": {
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "DestinationSet",
        "fct-source": "src/Data-FsmActions.html#DestinationSet",
        "fct-type": "function",
        "title": "DestinationSet"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "DestinationSet",
        "normalized": "",
        "package": "fsmActions",
        "partial": "Destination Set",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:Word",
      "description": {
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Word [sy]",
        "fct-source": "src/Data-FsmActions.html#Word",
        "fct-type": "function",
        "title": "Word"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "Word",
        "normalized": "Word[a]",
        "package": "fsmActions",
        "partial": "Word",
        "signature": "Word[sy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:action",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e for some \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e over some \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.  The word\n might contain symbols outside the FSM's alphabet, so the result\n could be Nothing.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e Word sy -\u003e Maybe Action",
        "fct-source": "src/Data-FsmActions.html#action",
        "fct-type": "function",
        "title": "action"
      },
      "index": {
        "description": "Compute the Action for some Word over some FSM The word might contain symbols outside the FSM alphabet so the result could be Nothing",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "action",
        "normalized": "FSM a-\u003eWord a-\u003eMaybe Action",
        "package": "fsmActions",
        "partial": "",
        "signature": "FSM sy-\u003eWord sy-\u003eMaybe Action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:actionEquiv",
      "description": {
        "fct-descr": "\u003cp\u003eTest if two \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003es are action-equivalent over some FSM.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e Word sy -\u003e Word sy -\u003e Bool",
        "fct-source": "src/Data-FsmActions.html#actionEquiv",
        "fct-type": "function",
        "title": "actionEquiv"
      },
      "index": {
        "description": "Test if two Word are action-equivalent over some FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "actionEquiv",
        "normalized": "FSM a-\u003eWord a-\u003eWord a-\u003eBool",
        "package": "fsmActions",
        "partial": "Equiv",
        "signature": "FSM sy-\u003eWord sy-\u003eWord sy-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:actionLookup",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003eDestinationSet\u003c/a\u003e\u003c/code\u003e reached by following some \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e\n from some \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Action -\u003e State -\u003e DestinationSet",
        "fct-source": "src/Data-FsmActions.html#actionLookup",
        "fct-type": "function",
        "title": "actionLookup"
      },
      "index": {
        "description": "Compute the DestinationSet reached by following some Action from some State",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "actionLookup",
        "normalized": "Action-\u003eState-\u003eDestinationSet",
        "package": "fsmActions",
        "partial": "Lookup",
        "signature": "Action-\u003eState-\u003eDestinationSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:alphabet",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the alphabet of an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e [sy]",
        "fct-source": "src/Data-FsmActions.html#alphabet",
        "fct-type": "function",
        "title": "alphabet"
      },
      "index": {
        "description": "Compute the alphabet of an FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "alphabet",
        "normalized": "FSM a-\u003e[a]",
        "package": "fsmActions",
        "partial": "",
        "signature": "FSM sy-\u003e[sy]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:append",
      "description": {
        "fct-descr": "\u003cp\u003eAppend two \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003es, ie compute the \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e corresponding to\n the application of the first followed by the second.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Action -\u003e Action -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#append",
        "fct-type": "function",
        "title": "append"
      },
      "index": {
        "description": "Append two Action ie compute the Action corresponding to the application of the first followed by the second",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "append",
        "normalized": "Action-\u003eAction-\u003eAction",
        "package": "fsmActions",
        "partial": "",
        "signature": "Action-\u003eAction-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:delete",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a symbol and its action from an FSM.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "sy -\u003e FSM sy -\u003e FSM sy",
        "fct-source": "src/Data-FsmActions.html#delete",
        "fct-type": "function",
        "title": "delete"
      },
      "index": {
        "description": "Delete symbol and its action from an FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "delete",
        "normalized": "a-\u003eFSM a-\u003eFSM a",
        "package": "fsmActions",
        "partial": "",
        "signature": "sy-\u003eFSM sy-\u003eFSM sy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:destinationEquiv",
      "description": {
        "fct-descr": "\u003cp\u003eTest if two \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003es are destination-equivalent at some \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e of\n an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e State -\u003e Word sy -\u003e Word sy -\u003e Bool",
        "fct-source": "src/Data-FsmActions.html#destinationEquiv",
        "fct-type": "function",
        "title": "destinationEquiv"
      },
      "index": {
        "description": "Test if two Word are destination-equivalent at some State of an FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "destinationEquiv",
        "normalized": "FSM a-\u003eState-\u003eWord a-\u003eWord a-\u003eBool",
        "package": "fsmActions",
        "partial": "Equiv",
        "signature": "FSM sy-\u003eState-\u003eWord sy-\u003eWord sy-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:destinationSet",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the \u003ccode\u003e\u003ca\u003eDestinationSet\u003c/a\u003e\u003c/code\u003e for some \u003ccode\u003e\u003ca\u003eWord\u003c/a\u003e\u003c/code\u003e at some \u003ccode\u003e\u003ca\u003eState\u003c/a\u003e\u003c/code\u003e of\n an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.  The word might contain symbols outside the FSM's\n alphabet, or the state might be out of range, so the result could\n be Nothing.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e State -\u003e Word sy -\u003e Maybe DestinationSet",
        "fct-source": "src/Data-FsmActions.html#destinationSet",
        "fct-type": "function",
        "title": "destinationSet"
      },
      "index": {
        "description": "Compute the DestinationSet for some Word at some State of an FSM The word might contain symbols outside the FSM alphabet or the state might be out of range so the result could be Nothing",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "destinationSet",
        "normalized": "FSM a-\u003eState-\u003eWord a-\u003eMaybe DestinationSet",
        "package": "fsmActions",
        "partial": "Set",
        "signature": "FSM sy-\u003eState-\u003eWord sy-\u003eMaybe DestinationSet"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:destinationSets",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "[DestinationSet]",
        "fct-source": "src/Data-FsmActions.html#Action",
        "fct-type": "function",
        "title": "destinationSets"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "destinationSets",
        "normalized": "[DestinationSet]",
        "package": "fsmActions",
        "partial": "Sets",
        "signature": "[DestinationSet]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:destinations",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "[State]",
        "fct-source": "src/Data-FsmActions.html#DestinationSet",
        "fct-type": "function",
        "title": "destinations"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "destinations",
        "normalized": "[State]",
        "package": "fsmActions",
        "partial": "",
        "signature": "[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:fromList",
      "description": {
        "fct-descr": "\u003cp\u003eCreate an FSM from a list of symbol, Action pairs.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "[(sy, Action)] -\u003e FSM sy",
        "fct-source": "src/Data-FsmActions.html#fromList",
        "fct-type": "function",
        "title": "fromList"
      },
      "index": {
        "description": "Create an FSM from list of symbol Action pairs",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "fromList",
        "normalized": "[(a,Action)]-\u003eFSM a",
        "package": "fsmActions",
        "partial": "List",
        "signature": "[(sy,Action)]-\u003eFSM sy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:fsmIdentity",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the identity action for a given FSM.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#fsmIdentity",
        "fct-type": "function",
        "title": "fsmIdentity"
      },
      "index": {
        "description": "Compute the identity action for given FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "fsmIdentity",
        "normalized": "FSM a-\u003eAction",
        "package": "fsmActions",
        "partial": "Identity",
        "signature": "FSM sy-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:fsmMap",
      "description": {
        "fct-descr": "\u003cp\u003eMap a function over the FSM.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "(sy -\u003e Action -\u003e a) -\u003e FSM sy -\u003e [a]",
        "fct-source": "src/Data-FsmActions.html#fsmMap",
        "fct-type": "function",
        "title": "fsmMap"
      },
      "index": {
        "description": "Map function over the FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "fsmMap",
        "normalized": "(a-\u003eAction-\u003eb)-\u003eFSM a-\u003e[b]",
        "package": "fsmActions",
        "partial": "Map",
        "signature": "(sy-\u003eAction-\u003ea)-\u003eFSM sy-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:identity",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the identity action for a given number of states\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Int -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#identity",
        "fct-type": "function",
        "title": "identity"
      },
      "index": {
        "description": "Compute the identity action for given number of states",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "identity",
        "normalized": "Int-\u003eAction",
        "package": "fsmActions",
        "partial": "",
        "signature": "Int-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:isDAction",
      "description": {
        "fct-descr": "\u003cp\u003eTest if an \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e is deterministic or not.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Action -\u003e Bool",
        "fct-source": "src/Data-FsmActions.html#isDAction",
        "fct-type": "function",
        "title": "isDAction"
      },
      "index": {
        "description": "Test if an Action is deterministic or not",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "isDAction",
        "normalized": "Action-\u003eBool",
        "package": "fsmActions",
        "partial": "DAction",
        "signature": "Action-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:isDFSM",
      "description": {
        "fct-descr": "\u003cp\u003eCompute whether an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e is deterministic or not.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e Bool",
        "fct-source": "src/Data-FsmActions.html#isDFSM",
        "fct-type": "function",
        "title": "isDFSM"
      },
      "index": {
        "description": "Compute whether an FSM is deterministic or not",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "isDFSM",
        "normalized": "FSM a-\u003eBool",
        "package": "fsmActions",
        "partial": "DFSM",
        "signature": "FSM sy-\u003eBool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:lookup",
      "description": {
        "fct-descr": "\u003cp\u003eLook up a symbol's \u003ccode\u003e\u003ca\u003eAction\u003c/a\u003e\u003c/code\u003e in an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "sy -\u003e FSM sy -\u003e Maybe Action",
        "fct-source": "src/Data-FsmActions.html#lookup",
        "fct-type": "function",
        "title": "lookup"
      },
      "index": {
        "description": "Look up symbol Action in an FSM",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "lookup",
        "normalized": "a-\u003eFSM a-\u003eMaybe Action",
        "package": "fsmActions",
        "partial": "",
        "signature": "sy-\u003eFSM sy-\u003eMaybe Action"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:mkAction",
      "description": {
        "fct-descr": "\u003cp\u003eBuild an action given a nested list of destination states.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "[[State]] -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#mkAction",
        "fct-type": "function",
        "title": "mkAction"
      },
      "index": {
        "description": "Build an action given nested list of destination states",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "mkAction",
        "normalized": "[[State]]-\u003eAction",
        "package": "fsmActions",
        "partial": "Action",
        "signature": "[[State]]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:mkDAction",
      "description": {
        "fct-descr": "\u003cp\u003eBuild a deterministic action given a list of destination states.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "[State] -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#mkDAction",
        "fct-type": "function",
        "title": "mkDAction"
      },
      "index": {
        "description": "Build deterministic action given list of destination states",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "mkDAction",
        "normalized": "[State]-\u003eAction",
        "package": "fsmActions",
        "partial": "DAction",
        "signature": "[State]-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:normalise",
      "description": {
        "fct-descr": "\u003cp\u003eNormalise an \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e, i.e. normalise all its \u003ccode\u003eActions\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e FSM sy",
        "fct-source": "src/Data-FsmActions.html#normalise",
        "fct-type": "function",
        "title": "normalise"
      },
      "index": {
        "description": "Normalise an FSM i.e normalise all its Actions",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "normalise",
        "normalized": "FSM a-\u003eFSM a",
        "package": "fsmActions",
        "partial": "",
        "signature": "FSM sy-\u003eFSM sy"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:normaliseAction",
      "description": {
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "Action -\u003e Action",
        "fct-source": "src/Data-FsmActions.html#normaliseAction",
        "fct-type": "function",
        "title": "normaliseAction"
      },
      "index": {
        "description": "",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "normaliseAction",
        "normalized": "Action-\u003eAction",
        "package": "fsmActions",
        "partial": "Action",
        "signature": "Action-\u003eAction"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:states",
      "description": {
        "fct-descr": "\u003cp\u003eCompute the list of states of the \u003ccode\u003e\u003ca\u003eFSM\u003c/a\u003e\u003c/code\u003e.  Only really meaningful\n if the FSM's well-formedness is not \u003ccode\u003eBadLengths\u003c/code\u003e.  With current\n implementation, is just [0..n] for some n (or empty).\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e [State]",
        "fct-source": "src/Data-FsmActions.html#states",
        "fct-type": "function",
        "title": "states"
      },
      "index": {
        "description": "Compute the list of states of the FSM Only really meaningful if the FSM well-formedness is not BadLengths With current implementation is just for some or empty",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "states",
        "normalized": "FSM a-\u003e[State]",
        "package": "fsmActions",
        "partial": "",
        "signature": "FSM sy-\u003e[State]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/fsmActions/docs/Data-FsmActions.html#v:toList",
      "description": {
        "fct-descr": "\u003cp\u003eTurn an FSM into a list of symbol, Action pairs.\n\u003c/p\u003e",
        "fct-module": "Data.FsmActions",
        "fct-package": "fsmActions",
        "fct-signature": "FSM sy -\u003e [(sy, Action)]",
        "fct-source": "src/Data-FsmActions.html#toList",
        "fct-type": "function",
        "title": "toList"
      },
      "index": {
        "description": "Turn an FSM into list of symbol Action pairs",
        "hierarchy": "Data FsmActions",
        "module": "Data.FsmActions",
        "name": "toList",
        "normalized": "FSM a-\u003e[(a,Action)]",
        "package": "fsmActions",
        "partial": "List",
        "signature": "FSM sy-\u003e[(sy,Action)]"
      }
    }
  }
]