[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell binding to the GNU readline library.  The GNU Readline\n library provides a set of functions for use by applications that\n allow users to edit command lines as they are typed in.  By\n default, the line editing commands are similar to those of\n emacs.  A vi-style line editing interface is also available.\n\u003c/p\u003e\u003cp\u003eAn example of a typical use of readline with history functionality\n is illustrated in the following read, eval, print loop:\n\u003c/p\u003e\u003cpre\u003e\n readEvalPrintLoop :: IO ()\n readEvalPrintLoop = do\n   maybeLine \u003c- readline \"% \"\n   case maybeLine of\n    Nothing     -\u003e return () -- EOF / control-d\n    Just \"exit\" -\u003e return ()\n    Just line -\u003e do addHistory line\n                    putStrLn $ \"The user input: \" ++ (show line)\n                    readEvalPrintLoop\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "module",
        "fct-source": "src/System-Console-Readline.html",
        "fct-type": "module",
        "title": "Readline"
      },
      "index": {
        "description": "Haskell binding to the GNU readline library The GNU Readline library provides set of functions for use by applications that allow users to edit command lines as they are typed in By default the line editing commands are similar to those of emacs vi-style line editing interface is also available An example of typical use of readline with history functionality is illustrated in the following read eval print loop readEvalPrintLoop IO readEvalPrintLoop do maybeLine readline case maybeLine of Nothing return EOF control-d Just exit return Just line do addHistory line putStrLn The user input show line readEvalPrintLoop",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Readline",
        "normalized": "",
        "package": "readline",
        "partial": "Readline",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Callback",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "type",
        "fct-source": "src/System-Console-Readline.html#Callback",
        "fct-type": "type",
        "title": "Callback"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Callback",
        "normalized": "",
        "package": "readline",
        "partial": "Callback",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Entry",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Readline.html#Entry",
        "fct-type": "data",
        "title": "Entry"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Entry",
        "normalized": "",
        "package": "readline",
        "partial": "Entry",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Keymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Readline.html#Keymap",
        "fct-type": "data",
        "title": "Keymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Keymap",
        "normalized": "",
        "package": "readline",
        "partial": "Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:UndoCode",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "data",
        "fct-source": "src/System-Console-Readline.html#UndoCode",
        "fct-type": "data",
        "title": "UndoCode"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "UndoCode",
        "normalized": "",
        "package": "readline",
        "partial": "Undo Code",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Function",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Function Callback",
        "fct-source": "src/System-Console-Readline.html#Entry",
        "fct-type": "function",
        "title": "Function"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Function",
        "normalized": "",
        "package": "readline",
        "partial": "Function",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Keymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Keymap Keymap",
        "fct-source": "src/System-Console-Readline.html#Entry",
        "fct-type": "function",
        "title": "Keymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Keymap",
        "normalized": "",
        "package": "readline",
        "partial": "Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Macro",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Macro String",
        "fct-source": "src/System-Console-Readline.html#Entry",
        "fct-type": "function",
        "title": "Macro"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "Macro",
        "normalized": "",
        "package": "readline",
        "partial": "Macro",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoBegin",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "UndoBegin",
        "fct-source": "src/System-Console-Readline.html#UndoCode",
        "fct-type": "function",
        "title": "UndoBegin"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "UndoBegin",
        "normalized": "",
        "package": "readline",
        "partial": "Undo Begin",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoDelete",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "UndoDelete",
        "fct-source": "src/System-Console-Readline.html#UndoCode",
        "fct-type": "function",
        "title": "UndoDelete"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "UndoDelete",
        "normalized": "",
        "package": "readline",
        "partial": "Undo Delete",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoEnd",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "UndoEnd",
        "fct-source": "src/System-Console-Readline.html#UndoCode",
        "fct-type": "function",
        "title": "UndoEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "UndoEnd",
        "normalized": "",
        "package": "readline",
        "partial": "Undo End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoInsert",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "UndoInsert",
        "fct-source": "src/System-Console-Readline.html#UndoCode",
        "fct-type": "function",
        "title": "UndoInsert"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "UndoInsert",
        "normalized": "",
        "package": "readline",
        "partial": "Undo Insert",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addDefun",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e Callback -\u003e Maybe Char -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#addDefun",
        "fct-type": "function",
        "title": "addDefun"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "addDefun",
        "normalized": "String-\u003eCallback-\u003eMaybe Char-\u003eIO()",
        "package": "readline",
        "partial": "Defun",
        "signature": "String-\u003eCallback-\u003eMaybe Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addHistory",
      "description": {
        "fct-descr": "\u003cp\u003eAdd this command to the history.  This allows users to search backward\n through history with C-r and step through with up and down arrows, among\n other things.\n\u003c/p\u003e",
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#addHistory",
        "fct-type": "function",
        "title": "addHistory"
      },
      "index": {
        "description": "Add this command to the history This allows users to search backward through history with C-r and step through with up and down arrows among other things",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "addHistory",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "History",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addUndo",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "UndoCode -\u003e Int -\u003e Int -\u003e String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#addUndo",
        "fct-type": "function",
        "title": "addUndo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "addUndo",
        "normalized": "UndoCode-\u003eInt-\u003eInt-\u003eString-\u003eIO()",
        "package": "readline",
        "partial": "Undo",
        "signature": "UndoCode-\u003eInt-\u003eInt-\u003eString-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:beginUndoGroup",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#beginUndoGroup",
        "fct-type": "function",
        "title": "beginUndoGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "beginUndoGroup",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Undo Group",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:bindKey",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e Callback -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#bindKey",
        "fct-type": "function",
        "title": "bindKey"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "bindKey",
        "normalized": "Char-\u003eCallback-\u003eIO()",
        "package": "readline",
        "partial": "Key",
        "signature": "Char-\u003eCallback-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:bindKeyInMap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e Callback -\u003e Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#bindKeyInMap",
        "fct-type": "function",
        "title": "bindKeyInMap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "bindKeyInMap",
        "normalized": "Char-\u003eCallback-\u003eKeymap-\u003eIO()",
        "package": "readline",
        "partial": "Key In Map",
        "signature": "Char-\u003eCallback-\u003eKeymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:callbackHandlerInstall",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e (String -\u003e IO ()) -\u003e IO (IO ())",
        "fct-source": "src/System-Console-Readline.html#callbackHandlerInstall",
        "fct-type": "function",
        "title": "callbackHandlerInstall"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "callbackHandlerInstall",
        "normalized": "String-\u003e(String-\u003eIO())-\u003eIO(IO())",
        "package": "readline",
        "partial": "Handler Install",
        "signature": "String-\u003e(String-\u003eIO())-\u003eIO(IO())"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:callbackReadChar",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#callbackReadChar",
        "fct-type": "function",
        "title": "callbackReadChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "callbackReadChar",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Read Char",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:cleanupAfterSignal",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#cleanupAfterSignal",
        "fct-type": "function",
        "title": "cleanupAfterSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "cleanupAfterSignal",
        "normalized": "IO()",
        "package": "readline",
        "partial": "After Signal",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:clearMessage",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#clearMessage",
        "fct-type": "function",
        "title": "clearMessage"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "clearMessage",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Message",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:clearSignals",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#clearSignals",
        "fct-type": "function",
        "title": "clearSignals"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "clearSignals",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Signals",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:complete",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Char -\u003e IO Int",
        "fct-source": "src/System-Console-Readline.html#complete",
        "fct-type": "function",
        "title": "complete"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "complete",
        "normalized": "Int-\u003eChar-\u003eIO Int",
        "package": "readline",
        "partial": "",
        "signature": "Int-\u003eChar-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:completeInternal",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#completeInternal",
        "fct-type": "function",
        "title": "completeInternal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "completeInternal",
        "normalized": "Char-\u003eIO()",
        "package": "readline",
        "partial": "Internal",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:completionMatches",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e (String -\u003e IO [String]) -\u003e IO (Maybe (String, [String]))",
        "fct-source": "src/System-Console-Readline.html#completionMatches",
        "fct-type": "function",
        "title": "completionMatches"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "completionMatches",
        "normalized": "String-\u003e(String-\u003eIO[String])-\u003eIO(Maybe(String,[String]))",
        "package": "readline",
        "partial": "Matches",
        "signature": "String-\u003e(String-\u003eIO[String])-\u003eIO(Maybe(String,[String]))"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:copyKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Keymap -\u003e IO Keymap",
        "fct-source": "src/System-Console-Readline.html#copyKeymap",
        "fct-type": "function",
        "title": "copyKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "copyKeymap",
        "normalized": "Keymap-\u003eIO Keymap",
        "package": "readline",
        "partial": "Keymap",
        "signature": "Keymap-\u003eIO Keymap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:copyText",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Int -\u003e IO String",
        "fct-source": "src/System-Console-Readline.html#copyText",
        "fct-type": "function",
        "title": "copyText"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "copyText",
        "normalized": "Int-\u003eInt-\u003eIO String",
        "package": "readline",
        "partial": "Text",
        "signature": "Int-\u003eInt-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:deleteText",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#deleteText",
        "fct-type": "function",
        "title": "deleteText"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "deleteText",
        "normalized": "Int-\u003eInt-\u003eIO()",
        "package": "readline",
        "partial": "Text",
        "signature": "Int-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:ding",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#ding",
        "fct-type": "function",
        "title": "ding"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "ding",
        "normalized": "",
        "package": "readline",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:displayMatchList",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "[String] -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#displayMatchList",
        "fct-type": "function",
        "title": "displayMatchList"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "displayMatchList",
        "normalized": "[String]-\u003eIO()",
        "package": "readline",
        "partial": "Match List",
        "signature": "[String]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:doUndo",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#doUndo",
        "fct-type": "function",
        "title": "doUndo"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "doUndo",
        "normalized": "",
        "package": "readline",
        "partial": "Undo",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:endUndoGroup",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#endUndoGroup",
        "fct-type": "function",
        "title": "endUndoGroup"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "endUndoGroup",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Undo Group",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:filenameCompletionFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO [String]",
        "fct-source": "src/System-Console-Readline.html#filenameCompletionFunction",
        "fct-type": "function",
        "title": "filenameCompletionFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "filenameCompletionFunction",
        "normalized": "String-\u003eIO[String]",
        "package": "readline",
        "partial": "Completion Function",
        "signature": "String-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:forcedUpdateDisplay",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#forcedUpdateDisplay",
        "fct-type": "function",
        "title": "forcedUpdateDisplay"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "forcedUpdateDisplay",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Update Display",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#freeKeymap",
        "fct-type": "function",
        "title": "freeKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "freeKeymap",
        "normalized": "Keymap-\u003eIO()",
        "package": "readline",
        "partial": "Keymap",
        "signature": "Keymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeLineState",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#freeLineState",
        "fct-type": "function",
        "title": "freeLineState"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "freeLineState",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Line State",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeUndoList",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#freeUndoList",
        "fct-type": "function",
        "title": "freeUndoList"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "freeUndoList",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Undo List",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:functionDumper",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#functionDumper",
        "fct-type": "function",
        "title": "functionDumper"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "functionDumper",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Dumper",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:functionOfKeyseq",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e Maybe Keymap -\u003e IO Entry",
        "fct-source": "src/System-Console-Readline.html#functionOfKeyseq",
        "fct-type": "function",
        "title": "functionOfKeyseq"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "functionOfKeyseq",
        "normalized": "String-\u003eMaybe Keymap-\u003eIO Entry",
        "package": "readline",
        "partial": "Of Keyseq",
        "signature": "String-\u003eMaybe Keymap-\u003eIO Entry"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:funmapNames",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO [String]",
        "fct-source": "src/System-Console-Readline.html#funmapNames",
        "fct-type": "function",
        "title": "funmapNames"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "funmapNames",
        "normalized": "IO[String]",
        "package": "readline",
        "partial": "Names",
        "signature": "IO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:genericBind",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e Entry -\u003e Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#genericBind",
        "fct-type": "function",
        "title": "genericBind"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "genericBind",
        "normalized": "String-\u003eEntry-\u003eKeymap-\u003eIO()",
        "package": "readline",
        "partial": "Bind",
        "signature": "String-\u003eEntry-\u003eKeymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getAttemptedCompletionOver",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getAttemptedCompletionOver",
        "fct-type": "function",
        "title": "getAttemptedCompletionOver"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getAttemptedCompletionOver",
        "normalized": "",
        "package": "readline",
        "partial": "Attempted Completion Over",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBasicQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getBasicQuoteCharacters",
        "fct-type": "function",
        "title": "getBasicQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getBasicQuoteCharacters",
        "normalized": "",
        "package": "readline",
        "partial": "Basic Quote Characters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBasicWordBreakCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getBasicWordBreakCharacters",
        "fct-type": "function",
        "title": "getBasicWordBreakCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getBasicWordBreakCharacters",
        "normalized": "",
        "package": "readline",
        "partial": "Basic Word Break Characters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBindingKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Keymap",
        "fct-source": "src/System-Console-Readline.html#getBindingKeymap",
        "fct-type": "function",
        "title": "getBindingKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getBindingKeymap",
        "normalized": "",
        "package": "readline",
        "partial": "Binding Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCatchSignals",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getCatchSignals",
        "fct-type": "function",
        "title": "getCatchSignals"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCatchSignals",
        "normalized": "",
        "package": "readline",
        "partial": "Catch Signals",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCatchSigwinch",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getCatchSigwinch",
        "fct-type": "function",
        "title": "getCatchSigwinch"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCatchSigwinch",
        "normalized": "",
        "package": "readline",
        "partial": "Catch Sigwinch",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompleterQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getCompleterQuoteCharacters",
        "fct-type": "function",
        "title": "getCompleterQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCompleterQuoteCharacters",
        "normalized": "",
        "package": "readline",
        "partial": "Completer Quote Characters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompleterWordBreakCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getCompleterWordBreakCharacters",
        "fct-type": "function",
        "title": "getCompleterWordBreakCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCompleterWordBreakCharacters",
        "normalized": "",
        "package": "readline",
        "partial": "Completer Word Break Characters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompletionAppendCharacter",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO (Maybe Char)",
        "fct-source": "src/System-Console-Readline.html#getCompletionAppendCharacter",
        "fct-type": "function",
        "title": "getCompletionAppendCharacter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCompletionAppendCharacter",
        "normalized": "",
        "package": "readline",
        "partial": "Completion Append Character",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompletionQueryItems",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Int",
        "fct-source": "src/System-Console-Readline.html#getCompletionQueryItems",
        "fct-type": "function",
        "title": "getCompletionQueryItems"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getCompletionQueryItems",
        "normalized": "",
        "package": "readline",
        "partial": "Completion Query Items",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getEnd",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Int",
        "fct-source": "src/System-Console-Readline.html#getEnd",
        "fct-type": "function",
        "title": "getEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getEnd",
        "normalized": "",
        "package": "readline",
        "partial": "End",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getExecutingKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Keymap",
        "fct-source": "src/System-Console-Readline.html#getExecutingKeymap",
        "fct-type": "function",
        "title": "getExecutingKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getExecutingKeymap",
        "normalized": "",
        "package": "readline",
        "partial": "Executing Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameCompletionDesired",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getFilenameCompletionDesired",
        "fct-type": "function",
        "title": "getFilenameCompletionDesired"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getFilenameCompletionDesired",
        "normalized": "",
        "package": "readline",
        "partial": "Filename Completion Desired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getFilenameQuoteCharacters",
        "fct-type": "function",
        "title": "getFilenameQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getFilenameQuoteCharacters",
        "normalized": "",
        "package": "readline",
        "partial": "Filename Quote Characters",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameQuotingDesired",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getFilenameQuotingDesired",
        "fct-type": "function",
        "title": "getFilenameQuotingDesired"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getFilenameQuotingDesired",
        "normalized": "",
        "package": "readline",
        "partial": "Filename Quoting Desired",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getIgnoreCompletionDuplicates",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getIgnoreCompletionDuplicates",
        "fct-type": "function",
        "title": "getIgnoreCompletionDuplicates"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getIgnoreCompletionDuplicates",
        "normalized": "",
        "package": "readline",
        "partial": "Ignore Completion Duplicates",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getInStream",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Handle",
        "fct-source": "src/System-Console-Readline.html#getInStream",
        "fct-type": "function",
        "title": "getInStream"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getInStream",
        "normalized": "",
        "package": "readline",
        "partial": "In Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getInhibitCompletion",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Bool",
        "fct-source": "src/System-Console-Readline.html#getInhibitCompletion",
        "fct-type": "function",
        "title": "getInhibitCompletion"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getInhibitCompletion",
        "normalized": "",
        "package": "readline",
        "partial": "Inhibit Completion",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Keymap",
        "fct-source": "src/System-Console-Readline.html#getKeymap",
        "fct-type": "function",
        "title": "getKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getKeymap",
        "normalized": "",
        "package": "readline",
        "partial": "Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymapByName",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO Keymap",
        "fct-source": "src/System-Console-Readline.html#getKeymapByName",
        "fct-type": "function",
        "title": "getKeymapByName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getKeymapByName",
        "normalized": "String-\u003eIO Keymap",
        "package": "readline",
        "partial": "Keymap By Name",
        "signature": "String-\u003eIO Keymap"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymapName",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Keymap -\u003e IO (Maybe String)",
        "fct-source": "src/System-Console-Readline.html#getKeymapName",
        "fct-type": "function",
        "title": "getKeymapName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getKeymapName",
        "normalized": "Keymap-\u003eIO(Maybe String)",
        "package": "readline",
        "partial": "Keymap Name",
        "signature": "Keymap-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getLibraryVersion",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getLibraryVersion",
        "fct-type": "function",
        "title": "getLibraryVersion"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getLibraryVersion",
        "normalized": "",
        "package": "readline",
        "partial": "Library Version",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getLineBuffer",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getLineBuffer",
        "fct-type": "function",
        "title": "getLineBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getLineBuffer",
        "normalized": "",
        "package": "readline",
        "partial": "Line Buffer",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getMark",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Int",
        "fct-source": "src/System-Console-Readline.html#getMark",
        "fct-type": "function",
        "title": "getMark"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getMark",
        "normalized": "",
        "package": "readline",
        "partial": "Mark",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getOutStream",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Handle",
        "fct-source": "src/System-Console-Readline.html#getOutStream",
        "fct-type": "function",
        "title": "getOutStream"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getOutStream",
        "normalized": "",
        "package": "readline",
        "partial": "Out Stream",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getPoint",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Int",
        "fct-source": "src/System-Console-Readline.html#getPoint",
        "fct-type": "function",
        "title": "getPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getPoint",
        "normalized": "",
        "package": "readline",
        "partial": "Point",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getPrompt",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getPrompt",
        "fct-type": "function",
        "title": "getPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getPrompt",
        "normalized": "",
        "package": "readline",
        "partial": "Prompt",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getSpecialPrefixes",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getSpecialPrefixes",
        "fct-type": "function",
        "title": "getSpecialPrefixes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getSpecialPrefixes",
        "normalized": "",
        "package": "readline",
        "partial": "Special Prefixes",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getTerminalName",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO String",
        "fct-source": "src/System-Console-Readline.html#getTerminalName",
        "fct-type": "function",
        "title": "getTerminalName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "getTerminalName",
        "normalized": "",
        "package": "readline",
        "partial": "Terminal Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:initialize",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#initialize",
        "fct-type": "function",
        "title": "initialize"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "initialize",
        "normalized": "IO()",
        "package": "readline",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:insertCompletions",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Char -\u003e IO Int",
        "fct-source": "src/System-Console-Readline.html#insertCompletions",
        "fct-type": "function",
        "title": "insertCompletions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "insertCompletions",
        "normalized": "Int-\u003eChar-\u003eIO Int",
        "package": "readline",
        "partial": "Completions",
        "signature": "Int-\u003eChar-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:insertText",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#insertText",
        "fct-type": "function",
        "title": "insertText"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "insertText",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Text",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:killText",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#killText",
        "fct-type": "function",
        "title": "killText"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "killText",
        "normalized": "Int-\u003eInt-\u003eIO()",
        "package": "readline",
        "partial": "Text",
        "signature": "Int-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:listFunmapNames",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#listFunmapNames",
        "fct-type": "function",
        "title": "listFunmapNames"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "listFunmapNames",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Funmap Names",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:message",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#message",
        "fct-type": "function",
        "title": "message"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "message",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:modifying",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#modifying",
        "fct-type": "function",
        "title": "modifying"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "modifying",
        "normalized": "Int-\u003eInt-\u003eIO()",
        "package": "readline",
        "partial": "",
        "signature": "Int-\u003eInt-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:namedFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO (Maybe Callback)",
        "fct-source": "src/System-Console-Readline.html#namedFunction",
        "fct-type": "function",
        "title": "namedFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "namedFunction",
        "normalized": "String-\u003eIO(Maybe Callback)",
        "package": "readline",
        "partial": "Function",
        "signature": "String-\u003eIO(Maybe Callback)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:newBareKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Keymap",
        "fct-source": "src/System-Console-Readline.html#newBareKeymap",
        "fct-type": "function",
        "title": "newBareKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "newBareKeymap",
        "normalized": "",
        "package": "readline",
        "partial": "Bare Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:newKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Keymap",
        "fct-source": "src/System-Console-Readline.html#newKeymap",
        "fct-type": "function",
        "title": "newKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "newKeymap",
        "normalized": "",
        "package": "readline",
        "partial": "Keymap",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:onNewLine",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#onNewLine",
        "fct-type": "function",
        "title": "onNewLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "onNewLine",
        "normalized": "IO()",
        "package": "readline",
        "partial": "New Line",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:onNewLineWithPrompt",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#onNewLineWithPrompt",
        "fct-type": "function",
        "title": "onNewLineWithPrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "onNewLineWithPrompt",
        "normalized": "IO()",
        "package": "readline",
        "partial": "New Line With Prompt",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:parseAndBind",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#parseAndBind",
        "fct-type": "function",
        "title": "parseAndBind"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "parseAndBind",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "And Bind",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:possibleCompletions",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e Char -\u003e IO Int",
        "fct-source": "src/System-Console-Readline.html#possibleCompletions",
        "fct-type": "function",
        "title": "possibleCompletions"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "possibleCompletions",
        "normalized": "Int-\u003eChar-\u003eIO Int",
        "package": "readline",
        "partial": "Completions",
        "signature": "Int-\u003eChar-\u003eIO Int"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:quoteFilename",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e Bool -\u003e Ptr CChar -\u003e IO String",
        "fct-source": "src/System-Console-Readline.html#quoteFilename",
        "fct-type": "function",
        "title": "quoteFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "quoteFilename",
        "normalized": "String-\u003eBool-\u003ePtr CChar-\u003eIO String",
        "package": "readline",
        "partial": "Filename",
        "signature": "String-\u003eBool-\u003ePtr CChar-\u003eIO String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readInitFile",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#readInitFile",
        "fct-type": "function",
        "title": "readInitFile"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "readInitFile",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Init File",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readKey",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO Char",
        "fct-source": "src/System-Console-Readline.html#readKey",
        "fct-type": "function",
        "title": "readKey"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "readKey",
        "normalized": "",
        "package": "readline",
        "partial": "Key",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readline",
      "description": {
        "fct-descr": "\u003cp\u003ereadline is similar to \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e, but with rich edit\n functionality and history capability.  readline will read a line\n from the terminal and return it, using \u003cem\u003eprompt\u003c/em\u003e as a prompt.  If\n prompt is the empty string, no prompt is issued.  The line returned\n has the final newline removed, so only the text of the line\n remains.  A blank line returns the empty string.  If EOF is\n encountered while reading a line, and the line is empty, Nothing is\n returned.  If an EOF is read with a non-empty line, it is treated\n as a newline.\n\u003c/p\u003e",
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String-\u003e IO (Maybe String)",
        "fct-type": "function",
        "title": "readline"
      },
      "index": {
        "description": "readline is similar to getLine but with rich edit functionality and history capability readline will read line from the terminal and return it using prompt as prompt If prompt is the empty string no prompt is issued The line returned has the final newline removed so only the text of the line remains blank line returns the empty string If EOF is encountered while reading line and the line is empty Nothing is returned If an EOF is read with non-empty line it is treated as newline",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "readline",
        "normalized": "String-\u003eIO(Maybe String)",
        "package": "readline",
        "partial": "",
        "signature": "String-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:redisplay",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#redisplay",
        "fct-type": "function",
        "title": "redisplay"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "redisplay",
        "normalized": "IO()",
        "package": "readline",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetAfterSignal",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#resetAfterSignal",
        "fct-type": "function",
        "title": "resetAfterSignal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "resetAfterSignal",
        "normalized": "IO()",
        "package": "readline",
        "partial": "After Signal",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetLineState",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#resetLineState",
        "fct-type": "function",
        "title": "resetLineState"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "resetLineState",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Line State",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetTerminal",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#resetTerminal",
        "fct-type": "function",
        "title": "resetTerminal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "resetTerminal",
        "normalized": "Maybe String-\u003eIO()",
        "package": "readline",
        "partial": "Terminal",
        "signature": "Maybe String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resizeTerminal",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#resizeTerminal",
        "fct-type": "function",
        "title": "resizeTerminal"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "resizeTerminal",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Terminal",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:restorePrompt",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#restorePrompt",
        "fct-type": "function",
        "title": "restorePrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "restorePrompt",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Prompt",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:savePrompt",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#savePrompt",
        "fct-type": "function",
        "title": "savePrompt"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "savePrompt",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Prompt",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAlreadyPrompted",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setAlreadyPrompted",
        "fct-type": "function",
        "title": "setAlreadyPrompted"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setAlreadyPrompted",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Already Prompted",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAttemptedCompletionFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e Int -\u003e Int -\u003e IO (Maybe (String, [String]))) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setAttemptedCompletionFunction",
        "fct-type": "function",
        "title": "setAttemptedCompletionFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setAttemptedCompletionFunction",
        "normalized": "Maybe(String-\u003eInt-\u003eInt-\u003eIO(Maybe(String,[String])))-\u003eIO()",
        "package": "readline",
        "partial": "Attempted Completion Function",
        "signature": "Maybe(String-\u003eInt-\u003eInt-\u003eIO(Maybe(String,[String])))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAttemptedCompletionOver",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setAttemptedCompletionOver",
        "fct-type": "function",
        "title": "setAttemptedCompletionOver"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setAttemptedCompletionOver",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Attempted Completion Over",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setBasicQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setBasicQuoteCharacters",
        "fct-type": "function",
        "title": "setBasicQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setBasicQuoteCharacters",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Basic Quote Characters",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setBasicWordBreakCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setBasicWordBreakCharacters",
        "fct-type": "function",
        "title": "setBasicWordBreakCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setBasicWordBreakCharacters",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Basic Word Break Characters",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCatchSignals",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCatchSignals",
        "fct-type": "function",
        "title": "setCatchSignals"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCatchSignals",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Catch Signals",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCatchSigwinch",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCatchSigwinch",
        "fct-type": "function",
        "title": "setCatchSigwinch"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCatchSigwinch",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Catch Sigwinch",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCharIsQuotedP",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e Int -\u003e IO Bool) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCharIsQuotedP",
        "fct-type": "function",
        "title": "setCharIsQuotedP"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCharIsQuotedP",
        "normalized": "Maybe(String-\u003eInt-\u003eIO Bool)-\u003eIO()",
        "package": "readline",
        "partial": "Char Is Quoted",
        "signature": "Maybe(String-\u003eInt-\u003eIO Bool)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompleterQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompleterQuoteCharacters",
        "fct-type": "function",
        "title": "setCompleterQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompleterQuoteCharacters",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Completer Quote Characters",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompleterWordBreakCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompleterWordBreakCharacters",
        "fct-type": "function",
        "title": "setCompleterWordBreakCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompleterWordBreakCharacters",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Completer Word Break Characters",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionAppendCharacter",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe Char -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompletionAppendCharacter",
        "fct-type": "function",
        "title": "setCompletionAppendCharacter"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompletionAppendCharacter",
        "normalized": "Maybe Char-\u003eIO()",
        "package": "readline",
        "partial": "Completion Append Character",
        "signature": "Maybe Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionDisplayMatchesHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe ([String] -\u003e IO ()) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompletionDisplayMatchesHook",
        "fct-type": "function",
        "title": "setCompletionDisplayMatchesHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompletionDisplayMatchesHook",
        "normalized": "Maybe([String]-\u003eIO())-\u003eIO()",
        "package": "readline",
        "partial": "Completion Display Matches Hook",
        "signature": "Maybe([String]-\u003eIO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionEntryFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e IO [String]) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompletionEntryFunction",
        "fct-type": "function",
        "title": "setCompletionEntryFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompletionEntryFunction",
        "normalized": "Maybe(String-\u003eIO[String])-\u003eIO()",
        "package": "readline",
        "partial": "Completion Entry Function",
        "signature": "Maybe(String-\u003eIO[String])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionQueryItems",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompletionQueryItems",
        "fct-type": "function",
        "title": "setCompletionQueryItems"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompletionQueryItems",
        "normalized": "Int-\u003eIO()",
        "package": "readline",
        "partial": "Completion Query Items",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionWordBreakHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (IO (Maybe String)) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setCompletionWordBreakHook",
        "fct-type": "function",
        "title": "setCompletionWordBreakHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setCompletionWordBreakHook",
        "normalized": "Maybe(IO(Maybe String))-\u003eIO()",
        "package": "readline",
        "partial": "Completion Word Break Hook",
        "signature": "Maybe(IO(Maybe String))-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setDirectoryCompletionHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e IO String) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setDirectoryCompletionHook",
        "fct-type": "function",
        "title": "setDirectoryCompletionHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setDirectoryCompletionHook",
        "normalized": "Maybe(String-\u003eIO String)-\u003eIO()",
        "package": "readline",
        "partial": "Directory Completion Hook",
        "signature": "Maybe(String-\u003eIO String)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setDone",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setDone",
        "fct-type": "function",
        "title": "setDone"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setDone",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Done",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEnd",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setEnd",
        "fct-type": "function",
        "title": "setEnd"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setEnd",
        "normalized": "Int-\u003eIO()",
        "package": "readline",
        "partial": "End",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEraseEmptyLine",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setEraseEmptyLine",
        "fct-type": "function",
        "title": "setEraseEmptyLine"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setEraseEmptyLine",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Erase Empty Line",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEventHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (IO ()) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setEventHook",
        "fct-type": "function",
        "title": "setEventHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setEventHook",
        "normalized": "Maybe(IO())-\u003eIO()",
        "package": "readline",
        "partial": "Event Hook",
        "signature": "Maybe(IO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameCompletionDesired",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setFilenameCompletionDesired",
        "fct-type": "function",
        "title": "setFilenameCompletionDesired"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setFilenameCompletionDesired",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Filename Completion Desired",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameDequotingFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e Maybe Char -\u003e IO String) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setFilenameDequotingFunction",
        "fct-type": "function",
        "title": "setFilenameDequotingFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setFilenameDequotingFunction",
        "normalized": "Maybe(String-\u003eMaybe Char-\u003eIO String)-\u003eIO()",
        "package": "readline",
        "partial": "Filename Dequoting Function",
        "signature": "Maybe(String-\u003eMaybe Char-\u003eIO String)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuoteCharacters",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setFilenameQuoteCharacters",
        "fct-type": "function",
        "title": "setFilenameQuoteCharacters"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setFilenameQuoteCharacters",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Filename Quote Characters",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuotingDesired",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setFilenameQuotingDesired",
        "fct-type": "function",
        "title": "setFilenameQuotingDesired"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setFilenameQuotingDesired",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Filename Quoting Desired",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuotingFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (String -\u003e Bool -\u003e Ptr CChar -\u003e IO String) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setFilenameQuotingFunction",
        "fct-type": "function",
        "title": "setFilenameQuotingFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setFilenameQuotingFunction",
        "normalized": "Maybe(String-\u003eBool-\u003ePtr CChar-\u003eIO String)-\u003eIO()",
        "package": "readline",
        "partial": "Filename Quoting Function",
        "signature": "Maybe(String-\u003eBool-\u003ePtr CChar-\u003eIO String)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setIgnoreCompletionDuplicates",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setIgnoreCompletionDuplicates",
        "fct-type": "function",
        "title": "setIgnoreCompletionDuplicates"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setIgnoreCompletionDuplicates",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Ignore Completion Duplicates",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setIgnoreSomeCompletionsFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe ([String] -\u003e IO [String]) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setIgnoreSomeCompletionsFunction",
        "fct-type": "function",
        "title": "setIgnoreSomeCompletionsFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setIgnoreSomeCompletionsFunction",
        "normalized": "Maybe([String]-\u003eIO[String])-\u003eIO()",
        "package": "readline",
        "partial": "Ignore Some Completions Function",
        "signature": "Maybe([String]-\u003eIO[String])-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setInhibitCompletion",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Bool -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setInhibitCompletion",
        "fct-type": "function",
        "title": "setInhibitCompletion"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setInhibitCompletion",
        "normalized": "Bool-\u003eIO()",
        "package": "readline",
        "partial": "Inhibit Completion",
        "signature": "Bool-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setKeymap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setKeymap",
        "fct-type": "function",
        "title": "setKeymap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setKeymap",
        "normalized": "Keymap-\u003eIO()",
        "package": "readline",
        "partial": "Keymap",
        "signature": "Keymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setLineBuffer",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setLineBuffer",
        "fct-type": "function",
        "title": "setLineBuffer"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setLineBuffer",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Line Buffer",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setMark",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setMark",
        "fct-type": "function",
        "title": "setMark"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setMark",
        "normalized": "Int-\u003eIO()",
        "package": "readline",
        "partial": "Mark",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPendingInput",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setPendingInput",
        "fct-type": "function",
        "title": "setPendingInput"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setPendingInput",
        "normalized": "Char-\u003eIO()",
        "package": "readline",
        "partial": "Pending Input",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPoint",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Int -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setPoint",
        "fct-type": "function",
        "title": "setPoint"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setPoint",
        "normalized": "Int-\u003eIO()",
        "package": "readline",
        "partial": "Point",
        "signature": "Int-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPreInputHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (IO ()) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setPreInputHook",
        "fct-type": "function",
        "title": "setPreInputHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setPreInputHook",
        "normalized": "Maybe(IO())-\u003eIO()",
        "package": "readline",
        "partial": "Pre Input Hook",
        "signature": "Maybe(IO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setReadlineName",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setReadlineName",
        "fct-type": "function",
        "title": "setReadlineName"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setReadlineName",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Readline Name",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setRedisplayFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (IO ()) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setRedisplayFunction",
        "fct-type": "function",
        "title": "setRedisplayFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setRedisplayFunction",
        "normalized": "Maybe(IO())-\u003eIO()",
        "package": "readline",
        "partial": "Redisplay Function",
        "signature": "Maybe(IO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setSignals",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-Readline.html#setSignals",
        "fct-type": "function",
        "title": "setSignals"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setSignals",
        "normalized": "IO()",
        "package": "readline",
        "partial": "Signals",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setSpecialPrefixes",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setSpecialPrefixes",
        "fct-type": "function",
        "title": "setSpecialPrefixes"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setSpecialPrefixes",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Special Prefixes",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setStartupHook",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Maybe (IO ()) -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#setStartupHook",
        "fct-type": "function",
        "title": "setStartupHook"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "setStartupHook",
        "normalized": "Maybe(IO())-\u003eIO()",
        "package": "readline",
        "partial": "Startup Hook",
        "signature": "Maybe(IO())-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:stuffChar",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e IO Bool",
        "fct-source": "src/System-Console-Readline.html#stuffChar",
        "fct-type": "function",
        "title": "stuffChar"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "stuffChar",
        "normalized": "Char-\u003eIO Bool",
        "package": "readline",
        "partial": "Char",
        "signature": "Char-\u003eIO Bool"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindCommandInMap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#unbindCommandInMap",
        "fct-type": "function",
        "title": "unbindCommandInMap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "unbindCommandInMap",
        "normalized": "String-\u003eKeymap-\u003eIO()",
        "package": "readline",
        "partial": "Command In Map",
        "signature": "String-\u003eKeymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindKey",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#unbindKey",
        "fct-type": "function",
        "title": "unbindKey"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "unbindKey",
        "normalized": "Char-\u003eIO()",
        "package": "readline",
        "partial": "Key",
        "signature": "Char-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindKeyInMap",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "Char -\u003e Keymap -\u003e IO ()",
        "fct-source": "src/System-Console-Readline.html#unbindKeyInMap",
        "fct-type": "function",
        "title": "unbindKeyInMap"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "unbindKeyInMap",
        "normalized": "Char-\u003eKeymap-\u003eIO()",
        "package": "readline",
        "partial": "Key In Map",
        "signature": "Char-\u003eKeymap-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:usernameCompletionFunction",
      "description": {
        "fct-module": "System.Console.Readline",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO [String]",
        "fct-source": "src/System-Console-Readline.html#usernameCompletionFunction",
        "fct-type": "function",
        "title": "usernameCompletionFunction"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console Readline",
        "module": "System.Console.Readline",
        "name": "usernameCompletionFunction",
        "normalized": "String-\u003eIO[String]",
        "package": "readline",
        "partial": "Completion Function",
        "signature": "String-\u003eIO[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple line editor, using the GNU readline library if available,\n or a small emulation otherwise.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "System.Console.SimpleLineEditor",
        "fct-package": "readline",
        "fct-signature": "module",
        "fct-source": "src/System-Console-SimpleLineEditor.html",
        "fct-type": "module",
        "title": "SimpleLineEditor"
      },
      "index": {
        "description": "simple line editor using the GNU readline library if available or small emulation otherwise",
        "hierarchy": "System Console SimpleLineEditor",
        "module": "System.Console.SimpleLineEditor",
        "name": "SimpleLineEditor",
        "normalized": "",
        "package": "readline",
        "partial": "Simple Line Editor",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:delChars",
      "description": {
        "fct-descr": "\u003cp\u003eRemove the given string from immediately behind (to the left of) the\n   current cursor position.\n\u003c/p\u003e",
        "fct-module": "System.Console.SimpleLineEditor",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO ()",
        "fct-source": "src/System-Console-SimpleLineEditor.html#delChars",
        "fct-type": "function",
        "title": "delChars"
      },
      "index": {
        "description": "Remove the given string from immediately behind to the left of the current cursor position",
        "hierarchy": "System Console SimpleLineEditor",
        "module": "System.Console.SimpleLineEditor",
        "name": "delChars",
        "normalized": "String-\u003eIO()",
        "package": "readline",
        "partial": "Chars",
        "signature": "String-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:getLineEdited",
      "description": {
        "fct-module": "System.Console.SimpleLineEditor",
        "fct-package": "readline",
        "fct-signature": "String -\u003e IO (Maybe String)",
        "fct-source": "src/System-Console-SimpleLineEditor.html#getLineEdited",
        "fct-type": "function",
        "title": "getLineEdited"
      },
      "index": {
        "description": "",
        "hierarchy": "System Console SimpleLineEditor",
        "module": "System.Console.SimpleLineEditor",
        "name": "getLineEdited",
        "normalized": "String-\u003eIO(Maybe String)",
        "package": "readline",
        "partial": "Line Edited",
        "signature": "String-\u003eIO(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:initialise",
      "description": {
        "fct-descr": "\u003cp\u003eSet up the environment so that the terminal passes characters directly\n   into the Haskell program, for immediate interpretation by the line editor.\n\u003c/p\u003e",
        "fct-module": "System.Console.SimpleLineEditor",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-SimpleLineEditor.html#initialise",
        "fct-type": "function",
        "title": "initialise"
      },
      "index": {
        "description": "Set up the environment so that the terminal passes characters directly into the Haskell program for immediate interpretation by the line editor",
        "hierarchy": "System Console SimpleLineEditor",
        "module": "System.Console.SimpleLineEditor",
        "name": "initialise",
        "normalized": "IO()",
        "package": "readline",
        "partial": "",
        "signature": "IO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:restore",
      "description": {
        "fct-descr": "\u003cp\u003eRestore the environment so that the terminal is usable in normal\n   mode once again.\n\u003c/p\u003e",
        "fct-module": "System.Console.SimpleLineEditor",
        "fct-package": "readline",
        "fct-signature": "IO ()",
        "fct-source": "src/System-Console-SimpleLineEditor.html#restore",
        "fct-type": "function",
        "title": "restore"
      },
      "index": {
        "description": "Restore the environment so that the terminal is usable in normal mode once again",
        "hierarchy": "System Console SimpleLineEditor",
        "module": "System.Console.SimpleLineEditor",
        "name": "restore",
        "normalized": "IO()",
        "package": "readline",
        "partial": "",
        "signature": "IO()"
      }
    }
  }
]