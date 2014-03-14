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
        "word": "readline"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA Haskell binding to the GNU readline library.  The GNU Readline\n library provides a set of functions for use by applications that\n allow users to edit command lines as they are typed in.  By\n default, the line editing commands are similar to those of\n emacs.  A vi-style line editing interface is also available.\n\u003c/p\u003e\u003cp\u003eAn example of a typical use of readline with history functionality\n is illustrated in the following read, eval, print loop:\n\u003c/p\u003e\u003cpre\u003e\n readEvalPrintLoop :: IO ()\n readEvalPrintLoop = do\n   maybeLine \u003c- readline \"% \"\n   case maybeLine of\n    Nothing     -\u003e return () -- EOF / control-d\n    Just \"exit\" -\u003e return ()\n    Just line -\u003e do addHistory line\n                    putStrLn $ \"The user input: \" ++ (show line)\n                    readEvalPrintLoop\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "System.Console.Readline",
          "name": "Readline",
          "package": "readline",
          "source": "src/System-Console-Readline.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell binding to the GNU readline library The GNU Readline library provides set of functions for use by applications that allow users to edit command lines as they are typed in By default the line editing commands are similar to those of emacs vi-style line editing interface is also available An example of typical use of readline with history functionality is illustrated in the following read eval print loop readEvalPrintLoop IO readEvalPrintLoop do maybeLine readline case maybeLine of Nothing return EOF control-d Just exit return Just line do addHistory line putStrLn The user input show line readEvalPrintLoop",
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Readline",
          "package": "readline",
          "partial": "Readline",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Callback",
          "package": "readline",
          "source": "src/System-Console-Readline.html#Callback",
          "type": "type"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Callback",
          "package": "readline",
          "partial": "Callback",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Callback"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Entry",
          "package": "readline",
          "source": "src/System-Console-Readline.html#Entry",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Entry",
          "package": "readline",
          "partial": "Entry",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Entry"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Keymap",
          "package": "readline",
          "source": "src/System-Console-Readline.html#Keymap",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Keymap",
          "package": "readline",
          "partial": "Keymap",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:Keymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "UndoCode",
          "package": "readline",
          "source": "src/System-Console-Readline.html#UndoCode",
          "type": "data"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "UndoCode",
          "package": "readline",
          "partial": "Undo Code",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#t:UndoCode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Function",
          "package": "readline",
          "signature": "Function Callback",
          "source": "src/System-Console-Readline.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Function",
          "package": "readline",
          "partial": "Function",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Function"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Keymap",
          "package": "readline",
          "signature": "Keymap Keymap",
          "source": "src/System-Console-Readline.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Keymap",
          "package": "readline",
          "partial": "Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Keymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "Macro",
          "package": "readline",
          "signature": "Macro String",
          "source": "src/System-Console-Readline.html#Entry",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "Macro",
          "package": "readline",
          "partial": "Macro",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:Macro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "UndoBegin",
          "package": "readline",
          "signature": "UndoBegin",
          "source": "src/System-Console-Readline.html#UndoCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "UndoBegin",
          "package": "readline",
          "partial": "Undo Begin",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoBegin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "UndoDelete",
          "package": "readline",
          "signature": "UndoDelete",
          "source": "src/System-Console-Readline.html#UndoCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "UndoDelete",
          "package": "readline",
          "partial": "Undo Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoDelete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "UndoEnd",
          "package": "readline",
          "signature": "UndoEnd",
          "source": "src/System-Console-Readline.html#UndoCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "UndoEnd",
          "package": "readline",
          "partial": "Undo End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "UndoInsert",
          "package": "readline",
          "signature": "UndoInsert",
          "source": "src/System-Console-Readline.html#UndoCode",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "UndoInsert",
          "package": "readline",
          "partial": "Undo Insert",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:UndoInsert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "addDefun",
          "package": "readline",
          "signature": "String -\u003e Callback -\u003e Maybe Char -\u003e IO ()",
          "source": "src/System-Console-Readline.html#addDefun",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "addDefun",
          "normalized": "String-\u003eCallback-\u003eMaybe Char-\u003eIO()",
          "package": "readline",
          "partial": "Defun",
          "signature": "String-\u003eCallback-\u003eMaybe Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addDefun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd this command to the history.  This allows users to search backward\n through history with C-r and step through with up and down arrows, among\n other things.\n\u003c/p\u003e",
          "module": "System.Console.Readline",
          "name": "addHistory",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#addHistory",
          "type": "function"
        },
        "index": {
          "description": "Add this command to the history This allows users to search backward through history with C-r and step through with up and down arrows among other things",
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "addHistory",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "History",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addHistory"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "addUndo",
          "package": "readline",
          "signature": "UndoCode -\u003e Int -\u003e Int -\u003e String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#addUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "addUndo",
          "normalized": "UndoCode-\u003eInt-\u003eInt-\u003eString-\u003eIO()",
          "package": "readline",
          "partial": "Undo",
          "signature": "UndoCode-\u003eInt-\u003eInt-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:addUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "beginUndoGroup",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#beginUndoGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "beginUndoGroup",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Undo Group",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:beginUndoGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "bindKey",
          "package": "readline",
          "signature": "Char -\u003e Callback -\u003e IO ()",
          "source": "src/System-Console-Readline.html#bindKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "bindKey",
          "normalized": "Char-\u003eCallback-\u003eIO()",
          "package": "readline",
          "partial": "Key",
          "signature": "Char-\u003eCallback-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:bindKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "bindKeyInMap",
          "package": "readline",
          "signature": "Char -\u003e Callback -\u003e Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#bindKeyInMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "bindKeyInMap",
          "normalized": "Char-\u003eCallback-\u003eKeymap-\u003eIO()",
          "package": "readline",
          "partial": "Key In Map",
          "signature": "Char-\u003eCallback-\u003eKeymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:bindKeyInMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "callbackHandlerInstall",
          "package": "readline",
          "signature": "String -\u003e (String -\u003e IO ()) -\u003e IO (IO ())",
          "source": "src/System-Console-Readline.html#callbackHandlerInstall",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "callbackHandlerInstall",
          "normalized": "String-\u003e(String-\u003eIO())-\u003eIO(IO())",
          "package": "readline",
          "partial": "Handler Install",
          "signature": "String-\u003e(String-\u003eIO())-\u003eIO(IO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:callbackHandlerInstall"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "callbackReadChar",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#callbackReadChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "callbackReadChar",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Read Char",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:callbackReadChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "cleanupAfterSignal",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#cleanupAfterSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "cleanupAfterSignal",
          "normalized": "IO()",
          "package": "readline",
          "partial": "After Signal",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:cleanupAfterSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "clearMessage",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#clearMessage",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "clearMessage",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Message",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:clearMessage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "clearSignals",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#clearSignals",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "clearSignals",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Signals",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:clearSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "complete",
          "package": "readline",
          "signature": "Int -\u003e Char -\u003e IO Int",
          "source": "src/System-Console-Readline.html#complete",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "complete",
          "normalized": "Int-\u003eChar-\u003eIO Int",
          "package": "readline",
          "signature": "Int-\u003eChar-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:complete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "completeInternal",
          "package": "readline",
          "signature": "Char -\u003e IO ()",
          "source": "src/System-Console-Readline.html#completeInternal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "completeInternal",
          "normalized": "Char-\u003eIO()",
          "package": "readline",
          "partial": "Internal",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:completeInternal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "completionMatches",
          "package": "readline",
          "signature": "String -\u003e (String -\u003e IO [String]) -\u003e IO (Maybe (String, [String]))",
          "source": "src/System-Console-Readline.html#completionMatches",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "completionMatches",
          "normalized": "String-\u003e(String-\u003eIO[String])-\u003eIO(Maybe(String,[String]))",
          "package": "readline",
          "partial": "Matches",
          "signature": "String-\u003e(String-\u003eIO[String])-\u003eIO(Maybe(String,[String]))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:completionMatches"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "copyKeymap",
          "package": "readline",
          "signature": "Keymap -\u003e IO Keymap",
          "source": "src/System-Console-Readline.html#copyKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "copyKeymap",
          "normalized": "Keymap-\u003eIO Keymap",
          "package": "readline",
          "partial": "Keymap",
          "signature": "Keymap-\u003eIO Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:copyKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "copyText",
          "package": "readline",
          "signature": "Int -\u003e Int -\u003e IO String",
          "source": "src/System-Console-Readline.html#copyText",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "copyText",
          "normalized": "Int-\u003eInt-\u003eIO String",
          "package": "readline",
          "partial": "Text",
          "signature": "Int-\u003eInt-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:copyText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "deleteText",
          "package": "readline",
          "signature": "Int -\u003e Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#deleteText",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "deleteText",
          "normalized": "Int-\u003eInt-\u003eIO()",
          "package": "readline",
          "partial": "Text",
          "signature": "Int-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:deleteText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "ding",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#ding",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "ding",
          "package": "readline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:ding"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "displayMatchList",
          "package": "readline",
          "signature": "[String] -\u003e IO ()",
          "source": "src/System-Console-Readline.html#displayMatchList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "displayMatchList",
          "normalized": "[String]-\u003eIO()",
          "package": "readline",
          "partial": "Match List",
          "signature": "[String]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:displayMatchList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "doUndo",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#doUndo",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "doUndo",
          "package": "readline",
          "partial": "Undo",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:doUndo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "endUndoGroup",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#endUndoGroup",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "endUndoGroup",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Undo Group",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:endUndoGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "filenameCompletionFunction",
          "package": "readline",
          "signature": "String -\u003e IO [String]",
          "source": "src/System-Console-Readline.html#filenameCompletionFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "filenameCompletionFunction",
          "normalized": "String-\u003eIO[String]",
          "package": "readline",
          "partial": "Completion Function",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:filenameCompletionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "forcedUpdateDisplay",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#forcedUpdateDisplay",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "forcedUpdateDisplay",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Update Display",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:forcedUpdateDisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "freeKeymap",
          "package": "readline",
          "signature": "Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#freeKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "freeKeymap",
          "normalized": "Keymap-\u003eIO()",
          "package": "readline",
          "partial": "Keymap",
          "signature": "Keymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "freeLineState",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#freeLineState",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "freeLineState",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Line State",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeLineState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "freeUndoList",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#freeUndoList",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "freeUndoList",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Undo List",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:freeUndoList"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "functionDumper",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#functionDumper",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "functionDumper",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Dumper",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:functionDumper"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "functionOfKeyseq",
          "package": "readline",
          "signature": "String -\u003e Maybe Keymap -\u003e IO Entry",
          "source": "src/System-Console-Readline.html#functionOfKeyseq",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "functionOfKeyseq",
          "normalized": "String-\u003eMaybe Keymap-\u003eIO Entry",
          "package": "readline",
          "partial": "Of Keyseq",
          "signature": "String-\u003eMaybe Keymap-\u003eIO Entry",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:functionOfKeyseq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "funmapNames",
          "package": "readline",
          "signature": "IO [String]",
          "source": "src/System-Console-Readline.html#funmapNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "funmapNames",
          "normalized": "IO[String]",
          "package": "readline",
          "partial": "Names",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:funmapNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "genericBind",
          "package": "readline",
          "signature": "String -\u003e Entry -\u003e Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#genericBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "genericBind",
          "normalized": "String-\u003eEntry-\u003eKeymap-\u003eIO()",
          "package": "readline",
          "partial": "Bind",
          "signature": "String-\u003eEntry-\u003eKeymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:genericBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getAttemptedCompletionOver",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getAttemptedCompletionOver",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getAttemptedCompletionOver",
          "package": "readline",
          "partial": "Attempted Completion Over",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getAttemptedCompletionOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getBasicQuoteCharacters",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getBasicQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getBasicQuoteCharacters",
          "package": "readline",
          "partial": "Basic Quote Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBasicQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getBasicWordBreakCharacters",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getBasicWordBreakCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getBasicWordBreakCharacters",
          "package": "readline",
          "partial": "Basic Word Break Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBasicWordBreakCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getBindingKeymap",
          "package": "readline",
          "signature": "IO Keymap",
          "source": "src/System-Console-Readline.html#getBindingKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getBindingKeymap",
          "package": "readline",
          "partial": "Binding Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getBindingKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCatchSignals",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getCatchSignals",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCatchSignals",
          "package": "readline",
          "partial": "Catch Signals",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCatchSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCatchSigwinch",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getCatchSigwinch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCatchSigwinch",
          "package": "readline",
          "partial": "Catch Sigwinch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCatchSigwinch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCompleterQuoteCharacters",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getCompleterQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCompleterQuoteCharacters",
          "package": "readline",
          "partial": "Completer Quote Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompleterQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCompleterWordBreakCharacters",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getCompleterWordBreakCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCompleterWordBreakCharacters",
          "package": "readline",
          "partial": "Completer Word Break Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompleterWordBreakCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCompletionAppendCharacter",
          "package": "readline",
          "signature": "IO (Maybe Char)",
          "source": "src/System-Console-Readline.html#getCompletionAppendCharacter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCompletionAppendCharacter",
          "package": "readline",
          "partial": "Completion Append Character",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompletionAppendCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getCompletionQueryItems",
          "package": "readline",
          "signature": "IO Int",
          "source": "src/System-Console-Readline.html#getCompletionQueryItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getCompletionQueryItems",
          "package": "readline",
          "partial": "Completion Query Items",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getCompletionQueryItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getEnd",
          "package": "readline",
          "signature": "IO Int",
          "source": "src/System-Console-Readline.html#getEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getEnd",
          "package": "readline",
          "partial": "End",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getExecutingKeymap",
          "package": "readline",
          "signature": "IO Keymap",
          "source": "src/System-Console-Readline.html#getExecutingKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getExecutingKeymap",
          "package": "readline",
          "partial": "Executing Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getExecutingKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getFilenameCompletionDesired",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getFilenameCompletionDesired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getFilenameCompletionDesired",
          "package": "readline",
          "partial": "Filename Completion Desired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameCompletionDesired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getFilenameQuoteCharacters",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getFilenameQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getFilenameQuoteCharacters",
          "package": "readline",
          "partial": "Filename Quote Characters",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getFilenameQuotingDesired",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getFilenameQuotingDesired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getFilenameQuotingDesired",
          "package": "readline",
          "partial": "Filename Quoting Desired",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getFilenameQuotingDesired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getIgnoreCompletionDuplicates",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getIgnoreCompletionDuplicates",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getIgnoreCompletionDuplicates",
          "package": "readline",
          "partial": "Ignore Completion Duplicates",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getIgnoreCompletionDuplicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getInStream",
          "package": "readline",
          "signature": "IO Handle",
          "source": "src/System-Console-Readline.html#getInStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getInStream",
          "package": "readline",
          "partial": "In Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getInStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getInhibitCompletion",
          "package": "readline",
          "signature": "IO Bool",
          "source": "src/System-Console-Readline.html#getInhibitCompletion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getInhibitCompletion",
          "package": "readline",
          "partial": "Inhibit Completion",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getInhibitCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getKeymap",
          "package": "readline",
          "signature": "IO Keymap",
          "source": "src/System-Console-Readline.html#getKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getKeymap",
          "package": "readline",
          "partial": "Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getKeymapByName",
          "package": "readline",
          "signature": "String -\u003e IO Keymap",
          "source": "src/System-Console-Readline.html#getKeymapByName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getKeymapByName",
          "normalized": "String-\u003eIO Keymap",
          "package": "readline",
          "partial": "Keymap By Name",
          "signature": "String-\u003eIO Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymapByName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getKeymapName",
          "package": "readline",
          "signature": "Keymap -\u003e IO (Maybe String)",
          "source": "src/System-Console-Readline.html#getKeymapName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getKeymapName",
          "normalized": "Keymap-\u003eIO(Maybe String)",
          "package": "readline",
          "partial": "Keymap Name",
          "signature": "Keymap-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getKeymapName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getLibraryVersion",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getLibraryVersion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getLibraryVersion",
          "package": "readline",
          "partial": "Library Version",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getLibraryVersion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getLineBuffer",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getLineBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getLineBuffer",
          "package": "readline",
          "partial": "Line Buffer",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getLineBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getMark",
          "package": "readline",
          "signature": "IO Int",
          "source": "src/System-Console-Readline.html#getMark",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getMark",
          "package": "readline",
          "partial": "Mark",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getOutStream",
          "package": "readline",
          "signature": "IO Handle",
          "source": "src/System-Console-Readline.html#getOutStream",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getOutStream",
          "package": "readline",
          "partial": "Out Stream",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getOutStream"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getPoint",
          "package": "readline",
          "signature": "IO Int",
          "source": "src/System-Console-Readline.html#getPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getPoint",
          "package": "readline",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getPrompt",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getPrompt",
          "package": "readline",
          "partial": "Prompt",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getSpecialPrefixes",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getSpecialPrefixes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getSpecialPrefixes",
          "package": "readline",
          "partial": "Special Prefixes",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getSpecialPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "getTerminalName",
          "package": "readline",
          "signature": "IO String",
          "source": "src/System-Console-Readline.html#getTerminalName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "getTerminalName",
          "package": "readline",
          "partial": "Terminal Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:getTerminalName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "initialize",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#initialize",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "initialize",
          "normalized": "IO()",
          "package": "readline",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:initialize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "insertCompletions",
          "package": "readline",
          "signature": "Int -\u003e Char -\u003e IO Int",
          "source": "src/System-Console-Readline.html#insertCompletions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "insertCompletions",
          "normalized": "Int-\u003eChar-\u003eIO Int",
          "package": "readline",
          "partial": "Completions",
          "signature": "Int-\u003eChar-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:insertCompletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "insertText",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#insertText",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "insertText",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Text",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:insertText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "killText",
          "package": "readline",
          "signature": "Int -\u003e Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#killText",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "killText",
          "normalized": "Int-\u003eInt-\u003eIO()",
          "package": "readline",
          "partial": "Text",
          "signature": "Int-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:killText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "listFunmapNames",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#listFunmapNames",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "listFunmapNames",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Funmap Names",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:listFunmapNames"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "message",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#message",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "message",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "modifying",
          "package": "readline",
          "signature": "Int -\u003e Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#modifying",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "modifying",
          "normalized": "Int-\u003eInt-\u003eIO()",
          "package": "readline",
          "signature": "Int-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:modifying"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "namedFunction",
          "package": "readline",
          "signature": "String -\u003e IO (Maybe Callback)",
          "source": "src/System-Console-Readline.html#namedFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "namedFunction",
          "normalized": "String-\u003eIO(Maybe Callback)",
          "package": "readline",
          "partial": "Function",
          "signature": "String-\u003eIO(Maybe Callback)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:namedFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "newBareKeymap",
          "package": "readline",
          "signature": "IO Keymap",
          "source": "src/System-Console-Readline.html#newBareKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "newBareKeymap",
          "package": "readline",
          "partial": "Bare Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:newBareKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "newKeymap",
          "package": "readline",
          "signature": "IO Keymap",
          "source": "src/System-Console-Readline.html#newKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "newKeymap",
          "package": "readline",
          "partial": "Keymap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:newKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "onNewLine",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#onNewLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "onNewLine",
          "normalized": "IO()",
          "package": "readline",
          "partial": "New Line",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:onNewLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "onNewLineWithPrompt",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#onNewLineWithPrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "onNewLineWithPrompt",
          "normalized": "IO()",
          "package": "readline",
          "partial": "New Line With Prompt",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:onNewLineWithPrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "parseAndBind",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#parseAndBind",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "parseAndBind",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "And Bind",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:parseAndBind"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "possibleCompletions",
          "package": "readline",
          "signature": "Int -\u003e Char -\u003e IO Int",
          "source": "src/System-Console-Readline.html#possibleCompletions",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "possibleCompletions",
          "normalized": "Int-\u003eChar-\u003eIO Int",
          "package": "readline",
          "partial": "Completions",
          "signature": "Int-\u003eChar-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:possibleCompletions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "quoteFilename",
          "package": "readline",
          "signature": "String -\u003e Bool -\u003e Ptr CChar -\u003e IO String",
          "source": "src/System-Console-Readline.html#quoteFilename",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "quoteFilename",
          "normalized": "String-\u003eBool-\u003ePtr CChar-\u003eIO String",
          "package": "readline",
          "partial": "Filename",
          "signature": "String-\u003eBool-\u003ePtr CChar-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:quoteFilename"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "readInitFile",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#readInitFile",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "readInitFile",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Init File",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readInitFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "readKey",
          "package": "readline",
          "signature": "IO Char",
          "source": "src/System-Console-Readline.html#readKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "readKey",
          "package": "readline",
          "partial": "Key",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ereadline is similar to \u003ccode\u003e\u003ca\u003egetLine\u003c/a\u003e\u003c/code\u003e, but with rich edit\n functionality and history capability.  readline will read a line\n from the terminal and return it, using \u003cem\u003eprompt\u003c/em\u003e as a prompt.  If\n prompt is the empty string, no prompt is issued.  The line returned\n has the final newline removed, so only the text of the line\n remains.  A blank line returns the empty string.  If EOF is\n encountered while reading a line, and the line is empty, Nothing is\n returned.  If an EOF is read with a non-empty line, it is treated\n as a newline.\n\u003c/p\u003e",
          "module": "System.Console.Readline",
          "name": "readline",
          "package": "readline",
          "signature": "String-\u003e IO (Maybe String)",
          "type": "function"
        },
        "index": {
          "description": "readline is similar to getLine but with rich edit functionality and history capability readline will read line from the terminal and return it using prompt as prompt If prompt is the empty string no prompt is issued The line returned has the final newline removed so only the text of the line remains blank line returns the empty string If EOF is encountered while reading line and the line is empty Nothing is returned If an EOF is read with non-empty line it is treated as newline",
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "readline",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "readline",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:readline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "redisplay",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#redisplay",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "redisplay",
          "normalized": "IO()",
          "package": "readline",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:redisplay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "resetAfterSignal",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#resetAfterSignal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "resetAfterSignal",
          "normalized": "IO()",
          "package": "readline",
          "partial": "After Signal",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetAfterSignal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "resetLineState",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#resetLineState",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "resetLineState",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Line State",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetLineState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "resetTerminal",
          "package": "readline",
          "signature": "Maybe String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#resetTerminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "resetTerminal",
          "normalized": "Maybe String-\u003eIO()",
          "package": "readline",
          "partial": "Terminal",
          "signature": "Maybe String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resetTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "resizeTerminal",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#resizeTerminal",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "resizeTerminal",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Terminal",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:resizeTerminal"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "restorePrompt",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#restorePrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "restorePrompt",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Prompt",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:restorePrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "savePrompt",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#savePrompt",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "savePrompt",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Prompt",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:savePrompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setAlreadyPrompted",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setAlreadyPrompted",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setAlreadyPrompted",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Already Prompted",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAlreadyPrompted"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setAttemptedCompletionFunction",
          "package": "readline",
          "signature": "Maybe (String -\u003e Int -\u003e Int -\u003e IO (Maybe (String, [String]))) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setAttemptedCompletionFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setAttemptedCompletionFunction",
          "normalized": "Maybe(String-\u003eInt-\u003eInt-\u003eIO(Maybe(String,[String])))-\u003eIO()",
          "package": "readline",
          "partial": "Attempted Completion Function",
          "signature": "Maybe(String-\u003eInt-\u003eInt-\u003eIO(Maybe(String,[String])))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAttemptedCompletionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setAttemptedCompletionOver",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setAttemptedCompletionOver",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setAttemptedCompletionOver",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Attempted Completion Over",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setAttemptedCompletionOver"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setBasicQuoteCharacters",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setBasicQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setBasicQuoteCharacters",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Basic Quote Characters",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setBasicQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setBasicWordBreakCharacters",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setBasicWordBreakCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setBasicWordBreakCharacters",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Basic Word Break Characters",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setBasicWordBreakCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCatchSignals",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCatchSignals",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCatchSignals",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Catch Signals",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCatchSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCatchSigwinch",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCatchSigwinch",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCatchSigwinch",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Catch Sigwinch",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCatchSigwinch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCharIsQuotedP",
          "package": "readline",
          "signature": "Maybe (String -\u003e Int -\u003e IO Bool) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCharIsQuotedP",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCharIsQuotedP",
          "normalized": "Maybe(String-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "package": "readline",
          "partial": "Char Is Quoted",
          "signature": "Maybe(String-\u003eInt-\u003eIO Bool)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCharIsQuotedP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompleterQuoteCharacters",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompleterQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompleterQuoteCharacters",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Completer Quote Characters",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompleterQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompleterWordBreakCharacters",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompleterWordBreakCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompleterWordBreakCharacters",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Completer Word Break Characters",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompleterWordBreakCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompletionAppendCharacter",
          "package": "readline",
          "signature": "Maybe Char -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompletionAppendCharacter",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompletionAppendCharacter",
          "normalized": "Maybe Char-\u003eIO()",
          "package": "readline",
          "partial": "Completion Append Character",
          "signature": "Maybe Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionAppendCharacter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompletionDisplayMatchesHook",
          "package": "readline",
          "signature": "Maybe ([String] -\u003e IO ()) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompletionDisplayMatchesHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompletionDisplayMatchesHook",
          "normalized": "Maybe([String]-\u003eIO())-\u003eIO()",
          "package": "readline",
          "partial": "Completion Display Matches Hook",
          "signature": "Maybe([String]-\u003eIO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionDisplayMatchesHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompletionEntryFunction",
          "package": "readline",
          "signature": "Maybe (String -\u003e IO [String]) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompletionEntryFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompletionEntryFunction",
          "normalized": "Maybe(String-\u003eIO[String])-\u003eIO()",
          "package": "readline",
          "partial": "Completion Entry Function",
          "signature": "Maybe(String-\u003eIO[String])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionEntryFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompletionQueryItems",
          "package": "readline",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompletionQueryItems",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompletionQueryItems",
          "normalized": "Int-\u003eIO()",
          "package": "readline",
          "partial": "Completion Query Items",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionQueryItems"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setCompletionWordBreakHook",
          "package": "readline",
          "signature": "Maybe (IO (Maybe String)) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setCompletionWordBreakHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setCompletionWordBreakHook",
          "normalized": "Maybe(IO(Maybe String))-\u003eIO()",
          "package": "readline",
          "partial": "Completion Word Break Hook",
          "signature": "Maybe(IO(Maybe String))-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setCompletionWordBreakHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setDirectoryCompletionHook",
          "package": "readline",
          "signature": "Maybe (String -\u003e IO String) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setDirectoryCompletionHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setDirectoryCompletionHook",
          "normalized": "Maybe(String-\u003eIO String)-\u003eIO()",
          "package": "readline",
          "partial": "Directory Completion Hook",
          "signature": "Maybe(String-\u003eIO String)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setDirectoryCompletionHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setDone",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setDone",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setDone",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Done",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setDone"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setEnd",
          "package": "readline",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setEnd",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setEnd",
          "normalized": "Int-\u003eIO()",
          "package": "readline",
          "partial": "End",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEnd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setEraseEmptyLine",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setEraseEmptyLine",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setEraseEmptyLine",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Erase Empty Line",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEraseEmptyLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setEventHook",
          "package": "readline",
          "signature": "Maybe (IO ()) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setEventHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setEventHook",
          "normalized": "Maybe(IO())-\u003eIO()",
          "package": "readline",
          "partial": "Event Hook",
          "signature": "Maybe(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setEventHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setFilenameCompletionDesired",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setFilenameCompletionDesired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setFilenameCompletionDesired",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Filename Completion Desired",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameCompletionDesired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setFilenameDequotingFunction",
          "package": "readline",
          "signature": "Maybe (String -\u003e Maybe Char -\u003e IO String) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setFilenameDequotingFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setFilenameDequotingFunction",
          "normalized": "Maybe(String-\u003eMaybe Char-\u003eIO String)-\u003eIO()",
          "package": "readline",
          "partial": "Filename Dequoting Function",
          "signature": "Maybe(String-\u003eMaybe Char-\u003eIO String)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameDequotingFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setFilenameQuoteCharacters",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setFilenameQuoteCharacters",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setFilenameQuoteCharacters",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Filename Quote Characters",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuoteCharacters"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setFilenameQuotingDesired",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setFilenameQuotingDesired",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setFilenameQuotingDesired",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Filename Quoting Desired",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuotingDesired"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setFilenameQuotingFunction",
          "package": "readline",
          "signature": "Maybe (String -\u003e Bool -\u003e Ptr CChar -\u003e IO String) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setFilenameQuotingFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setFilenameQuotingFunction",
          "normalized": "Maybe(String-\u003eBool-\u003ePtr CChar-\u003eIO String)-\u003eIO()",
          "package": "readline",
          "partial": "Filename Quoting Function",
          "signature": "Maybe(String-\u003eBool-\u003ePtr CChar-\u003eIO String)-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setFilenameQuotingFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setIgnoreCompletionDuplicates",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setIgnoreCompletionDuplicates",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setIgnoreCompletionDuplicates",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Ignore Completion Duplicates",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setIgnoreCompletionDuplicates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setIgnoreSomeCompletionsFunction",
          "package": "readline",
          "signature": "Maybe ([String] -\u003e IO [String]) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setIgnoreSomeCompletionsFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setIgnoreSomeCompletionsFunction",
          "normalized": "Maybe([String]-\u003eIO[String])-\u003eIO()",
          "package": "readline",
          "partial": "Ignore Some Completions Function",
          "signature": "Maybe([String]-\u003eIO[String])-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setIgnoreSomeCompletionsFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setInhibitCompletion",
          "package": "readline",
          "signature": "Bool -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setInhibitCompletion",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setInhibitCompletion",
          "normalized": "Bool-\u003eIO()",
          "package": "readline",
          "partial": "Inhibit Completion",
          "signature": "Bool-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setInhibitCompletion"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setKeymap",
          "package": "readline",
          "signature": "Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setKeymap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setKeymap",
          "normalized": "Keymap-\u003eIO()",
          "package": "readline",
          "partial": "Keymap",
          "signature": "Keymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setKeymap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setLineBuffer",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setLineBuffer",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setLineBuffer",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Line Buffer",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setLineBuffer"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setMark",
          "package": "readline",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setMark",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setMark",
          "normalized": "Int-\u003eIO()",
          "package": "readline",
          "partial": "Mark",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setMark"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setPendingInput",
          "package": "readline",
          "signature": "Char -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setPendingInput",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setPendingInput",
          "normalized": "Char-\u003eIO()",
          "package": "readline",
          "partial": "Pending Input",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPendingInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setPoint",
          "package": "readline",
          "signature": "Int -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setPoint",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setPoint",
          "normalized": "Int-\u003eIO()",
          "package": "readline",
          "partial": "Point",
          "signature": "Int-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPoint"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setPreInputHook",
          "package": "readline",
          "signature": "Maybe (IO ()) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setPreInputHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setPreInputHook",
          "normalized": "Maybe(IO())-\u003eIO()",
          "package": "readline",
          "partial": "Pre Input Hook",
          "signature": "Maybe(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setPreInputHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setReadlineName",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setReadlineName",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setReadlineName",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Readline Name",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setReadlineName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setRedisplayFunction",
          "package": "readline",
          "signature": "Maybe (IO ()) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setRedisplayFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setRedisplayFunction",
          "normalized": "Maybe(IO())-\u003eIO()",
          "package": "readline",
          "partial": "Redisplay Function",
          "signature": "Maybe(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setRedisplayFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setSignals",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-Readline.html#setSignals",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setSignals",
          "normalized": "IO()",
          "package": "readline",
          "partial": "Signals",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setSignals"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setSpecialPrefixes",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setSpecialPrefixes",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setSpecialPrefixes",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Special Prefixes",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setSpecialPrefixes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "setStartupHook",
          "package": "readline",
          "signature": "Maybe (IO ()) -\u003e IO ()",
          "source": "src/System-Console-Readline.html#setStartupHook",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "setStartupHook",
          "normalized": "Maybe(IO())-\u003eIO()",
          "package": "readline",
          "partial": "Startup Hook",
          "signature": "Maybe(IO())-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:setStartupHook"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "stuffChar",
          "package": "readline",
          "signature": "Char -\u003e IO Bool",
          "source": "src/System-Console-Readline.html#stuffChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "stuffChar",
          "normalized": "Char-\u003eIO Bool",
          "package": "readline",
          "partial": "Char",
          "signature": "Char-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:stuffChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "unbindCommandInMap",
          "package": "readline",
          "signature": "String -\u003e Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#unbindCommandInMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "unbindCommandInMap",
          "normalized": "String-\u003eKeymap-\u003eIO()",
          "package": "readline",
          "partial": "Command In Map",
          "signature": "String-\u003eKeymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindCommandInMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "unbindKey",
          "package": "readline",
          "signature": "Char -\u003e IO ()",
          "source": "src/System-Console-Readline.html#unbindKey",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "unbindKey",
          "normalized": "Char-\u003eIO()",
          "package": "readline",
          "partial": "Key",
          "signature": "Char-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindKey"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "unbindKeyInMap",
          "package": "readline",
          "signature": "Char -\u003e Keymap -\u003e IO ()",
          "source": "src/System-Console-Readline.html#unbindKeyInMap",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "unbindKeyInMap",
          "normalized": "Char-\u003eKeymap-\u003eIO()",
          "package": "readline",
          "partial": "Key In Map",
          "signature": "Char-\u003eKeymap-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:unbindKeyInMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.Readline",
          "name": "usernameCompletionFunction",
          "package": "readline",
          "signature": "String -\u003e IO [String]",
          "source": "src/System-Console-Readline.html#usernameCompletionFunction",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console Readline",
          "module": "System.Console.Readline",
          "name": "usernameCompletionFunction",
          "normalized": "String-\u003eIO[String]",
          "package": "readline",
          "partial": "Completion Function",
          "signature": "String-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-Readline.html#v:usernameCompletionFunction"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA simple line editor, using the GNU readline library if available,\n or a small emulation otherwise.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.SimpleLineEditor",
          "name": "SimpleLineEditor",
          "package": "readline",
          "source": "src/System-Console-SimpleLineEditor.html",
          "type": "module"
        },
        "index": {
          "description": "simple line editor using the GNU readline library if available or small emulation otherwise",
          "hierarchy": "System Console SimpleLineEditor",
          "module": "System.Console.SimpleLineEditor",
          "name": "SimpleLineEditor",
          "package": "readline",
          "partial": "Simple Line Editor",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove the given string from immediately behind (to the left of) the\n   current cursor position.\n\u003c/p\u003e",
          "module": "System.Console.SimpleLineEditor",
          "name": "delChars",
          "package": "readline",
          "signature": "String -\u003e IO ()",
          "source": "src/System-Console-SimpleLineEditor.html#delChars",
          "type": "function"
        },
        "index": {
          "description": "Remove the given string from immediately behind to the left of the current cursor position",
          "hierarchy": "System Console SimpleLineEditor",
          "module": "System.Console.SimpleLineEditor",
          "name": "delChars",
          "normalized": "String-\u003eIO()",
          "package": "readline",
          "partial": "Chars",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:delChars"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.SimpleLineEditor",
          "name": "getLineEdited",
          "package": "readline",
          "signature": "String -\u003e IO (Maybe String)",
          "source": "src/System-Console-SimpleLineEditor.html#getLineEdited",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console SimpleLineEditor",
          "module": "System.Console.SimpleLineEditor",
          "name": "getLineEdited",
          "normalized": "String-\u003eIO(Maybe String)",
          "package": "readline",
          "partial": "Line Edited",
          "signature": "String-\u003eIO(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:getLineEdited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet up the environment so that the terminal passes characters directly\n   into the Haskell program, for immediate interpretation by the line editor.\n\u003c/p\u003e",
          "module": "System.Console.SimpleLineEditor",
          "name": "initialise",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-SimpleLineEditor.html#initialise",
          "type": "function"
        },
        "index": {
          "description": "Set up the environment so that the terminal passes characters directly into the Haskell program for immediate interpretation by the line editor",
          "hierarchy": "System Console SimpleLineEditor",
          "module": "System.Console.SimpleLineEditor",
          "name": "initialise",
          "normalized": "IO()",
          "package": "readline",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:initialise"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRestore the environment so that the terminal is usable in normal\n   mode once again.\n\u003c/p\u003e",
          "module": "System.Console.SimpleLineEditor",
          "name": "restore",
          "package": "readline",
          "signature": "IO ()",
          "source": "src/System-Console-SimpleLineEditor.html#restore",
          "type": "function"
        },
        "index": {
          "description": "Restore the environment so that the terminal is usable in normal mode once again",
          "hierarchy": "System Console SimpleLineEditor",
          "module": "System.Console.SimpleLineEditor",
          "name": "restore",
          "normalized": "IO()",
          "package": "readline",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/readline/docs/System-Console-SimpleLineEditor.html#v:restore"
      }
    }
  ]
]