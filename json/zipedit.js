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
        "word": "zipedit"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eA library for creating simple interactive list editors, using a\n zipper to allow the user to navigate forward and back within the\n list and edit the list elements.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ZipEdit",
          "package": "zipedit",
          "source": "src/System-Console-ZipEdit.html",
          "type": "module"
        },
        "index": {
          "description": "library for creating simple interactive list editors using zipper to allow the user to navigate forward and back within the list and edit the list elements",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ZipEdit",
          "package": "zipedit",
          "partial": "Zip Edit",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eActions that can be taken by an editor in response to\n   user input.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Action",
          "package": "zipedit",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "data"
        },
        "index": {
          "description": "Actions that can be taken by an editor in response to user input",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Action",
          "package": "zipedit",
          "partial": "Action",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#t:Action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA configuration record determining the behavior of the editor.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "EditorConf",
          "package": "zipedit",
          "source": "src/System-Console-ZipEdit.html#EditorConf",
          "type": "data"
        },
        "index": {
          "description": "configuration record determining the behavior of the editor",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "EditorConf",
          "package": "zipedit",
          "partial": "Editor Conf",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#t:EditorConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA continuation which can compute more of the list, along with\n   (maybe) another continuation.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "LCont",
          "package": "zipedit",
          "source": "src/System-Console-ZipEdit.html#LCont",
          "type": "data"
        },
        "index": {
          "description": "continuation which can compute more of the list along with maybe another continuation",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "LCont",
          "package": "zipedit",
          "partial": "LCont",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#t:LCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAnnotate a command with a help string.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "(??)",
          "package": "zipedit",
          "signature": "Action a -\u003e String -\u003e Action a",
          "source": "src/System-Console-ZipEdit.html#%3F%3F",
          "type": "function"
        },
        "index": {
          "description": "Annotate command with help string",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "(??) ??",
          "normalized": "Action a-\u003eString-\u003eAction a",
          "package": "zipedit",
          "signature": "Action a-\u003eString-\u003eAction a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:-63--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emove back one item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Back",
          "package": "zipedit",
          "signature": "Back",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "move back one item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Back",
          "package": "zipedit",
          "partial": "Back",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Back"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecancel the editing session.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Cancel",
          "package": "zipedit",
          "signature": "Cancel",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "cancel the editing session",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Cancel",
          "package": "zipedit",
          "partial": "Cancel",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Cancel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003edelete the current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Delete",
          "package": "zipedit",
          "signature": "Delete",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "delete the current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Delete",
          "package": "zipedit",
          "partial": "Delete",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Delete"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecomplete the editing session.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Done",
          "package": "zipedit",
          "signature": "Done",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "complete the editing session",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Done",
          "package": "zipedit",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ZipEdit",
          "name": "EC",
          "package": "zipedit",
          "signature": "EC",
          "source": "src/System-Console-ZipEdit.html#EditorConf",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "EC",
          "package": "zipedit",
          "partial": "EC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:EC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emove forward one item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Fwd",
          "package": "zipedit",
          "signature": "Fwd",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "move forward one item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Fwd",
          "package": "zipedit",
          "partial": "Fwd",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Fwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ean action annotated with a\n   help string.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Help",
          "package": "zipedit",
          "signature": "Help String (Action a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "an action annotated with help string",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Help",
          "package": "zipedit",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to InsFwd, except\n   that the new item is inserted\n   before the old current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "InsBack",
          "package": "zipedit",
          "signature": "InsBack String (String -\u003e a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Similar to InsFwd except that the new item is inserted before the old current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "InsBack",
          "normalized": "InsBack String(String-\u003ea)",
          "package": "zipedit",
          "partial": "Ins Back",
          "signature": "InsBack String(String-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:InsBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the given string as a\n   prompt, obtain a line of user\n   input, and apply the given\n   function to the user input to\n   obtain a new item, which\n   should be inserted forward of\n   the current item.  The\n   inserted item becomes the new\n   current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "InsFwd",
          "package": "zipedit",
          "signature": "InsFwd String (String -\u003e a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Using the given string as prompt obtain line of user input and apply the given function to the user input to obtain new item which should be inserted forward of the current item The inserted item becomes the new current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "InsFwd",
          "normalized": "InsFwd String(String-\u003ea)",
          "package": "zipedit",
          "partial": "Ins Fwd",
          "signature": "InsFwd String(String-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:InsFwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "System.Console.ZipEdit",
          "name": "LC",
          "package": "zipedit",
          "signature": "LC (IO ([a], Maybe (LCont a)))",
          "source": "src/System-Console-ZipEdit.html#LCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "LC",
          "normalized": "LC(IO([a],Maybe(LCont a)))",
          "package": "zipedit",
          "partial": "LC",
          "signature": "LC(IO([a],Maybe(LCont a)))",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:LC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the current item by applying\n   the given function.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Modify",
          "package": "zipedit",
          "signature": "Modify (a -\u003e a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "modify the current item by applying the given function",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Modify",
          "normalized": "Modify(a-\u003ea)",
          "package": "zipedit",
          "partial": "Modify",
          "signature": "Modify(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Modify"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify items before the\n   current item by applying the\n   given function.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ModifyBack",
          "package": "zipedit",
          "signature": "ModifyBack ([a] -\u003e [a])",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "modify items before the current item by applying the given function",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ModifyBack",
          "normalized": "ModifyBack([a]-\u003e[a])",
          "package": "zipedit",
          "partial": "Modify Back",
          "signature": "ModifyBack([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:ModifyBack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify items following\n   the current item by applying\n   the given function.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ModifyFwd",
          "package": "zipedit",
          "signature": "ModifyFwd ([a] -\u003e [a])",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "modify items following the current item by applying the given function",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ModifyFwd",
          "normalized": "ModifyFwd([a]-\u003e[a])",
          "package": "zipedit",
          "partial": "Modify Fwd",
          "signature": "ModifyFwd([a]-\u003e[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:ModifyFwd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003emodify the current item by\n   applying the given function,\n   which gives its result in the\n   IO monad.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ModifyIO",
          "package": "zipedit",
          "signature": "ModifyIO (a -\u003e IO a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "modify the current item by applying the given function which gives its result in the IO monad",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ModifyIO",
          "normalized": "ModifyIO(a-\u003eIO a)",
          "package": "zipedit",
          "partial": "Modify IO",
          "signature": "ModifyIO(a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:ModifyIO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the first function on the\n   current item to produce a\n   string, and open an editor\n   (using the $EDITOR\n   environment variable) on that\n   string.  After the user is\n   done editing, pass the\n   resulting string to the\n   second function to obtain a\n   function for modifying the\n   current element.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ModifyWEditor",
          "package": "zipedit",
          "signature": "ModifyWEditor (a -\u003e String) (String -\u003e a -\u003e a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Run the first function on the current item to produce string and open an editor using the EDITOR environment variable on that string After the user is done editing pass the resulting string to the second function to obtain function for modifying the current element",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ModifyWEditor",
          "normalized": "ModifyWEditor(a-\u003eString)(String-\u003ea-\u003ea)",
          "package": "zipedit",
          "partial": "Modify WEditor",
          "signature": "ModifyWEditor(a-\u003eString)(String-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:ModifyWEditor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsing the given string as a\n   prompt, obtain a line of user\n   input, and apply the given\n   function to the user input to\n   obtain a function for\n   modifying the current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "ModifyWInp",
          "package": "zipedit",
          "signature": "ModifyWInp String (String -\u003e a -\u003e a)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "Using the given string as prompt obtain line of user input and apply the given function to the user input to obtain function for modifying the current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "ModifyWInp",
          "normalized": "ModifyWInp String(String-\u003ea-\u003ea)",
          "package": "zipedit",
          "partial": "Modify WInp",
          "signature": "ModifyWInp String(String-\u003ea-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:ModifyWInp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eoutput a string which is a\n   function of the current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Output",
          "package": "zipedit",
          "signature": "Output (a -\u003e String)",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "output string which is function of the current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Output",
          "normalized": "Output(a-\u003eString)",
          "package": "zipedit",
          "partial": "Output",
          "signature": "Output(a-\u003eString)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Output"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eperform a sequence of actions.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "Seq",
          "package": "zipedit",
          "signature": "Seq [Action a]",
          "source": "src/System-Console-ZipEdit.html#Action",
          "type": "function"
        },
        "index": {
          "description": "perform sequence of actions",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "Seq",
          "normalized": "Seq[Action a]",
          "package": "zipedit",
          "partial": "Seq",
          "signature": "Seq[Action a]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:Seq"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA list specifying the actions to take\n in response to user inputs.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "actions",
          "package": "zipedit",
          "signature": "[(Char, Action a)]",
          "source": "src/System-Console-ZipEdit.html#EditorConf",
          "type": "function"
        },
        "index": {
          "description": "list specifying the actions to take in response to user inputs",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "actions",
          "normalized": "[(Char,Action a)]",
          "package": "zipedit",
          "signature": "[(Char,Action a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:actions"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to display the current item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "display",
          "package": "zipedit",
          "signature": "Maybe a -\u003e String",
          "source": "src/System-Console-ZipEdit.html#EditorConf",
          "type": "function"
        },
        "index": {
          "description": "How to display the current item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "display",
          "normalized": "Maybe a-\u003eString",
          "package": "zipedit",
          "signature": "Maybe a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRun the given editor on the given list, returning \u003ccode\u003eNothing\u003c/code\u003e if\n   the user canceled the editing process, or \u003ccode\u003eJust l\u003c/code\u003e if the editing\n   process completed successfully, where \u003ccode\u003el\u003c/code\u003e is the final state of\n   the list being edited.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "edit",
          "package": "zipedit",
          "signature": "EditorConf a-\u003e [a]-\u003e IO (Maybe [a])",
          "type": "function"
        },
        "index": {
          "description": "Run the given editor on the given list returning Nothing if the user canceled the editing process or Just if the editing process completed successfully where is the final state of the list being edited",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "edit",
          "normalized": "EditorConf a-\u003e[a]-\u003eIO(Maybe[a])",
          "package": "zipedit",
          "signature": "EditorConf a-\u003e[a]-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:edit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eedit\u003c/a\u003e\u003c/code\u003e, but with an additional parameter for a continuation\n | which can be run to compute additional list elements and\n | (optionally) another continuation.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "editWCont",
          "package": "zipedit",
          "signature": "EditorConf a -\u003e [a] -\u003e IO ([a], Maybe (LCont a)) -\u003e IO (Maybe [a])",
          "source": "src/System-Console-ZipEdit.html#editWCont",
          "type": "function"
        },
        "index": {
          "description": "Like edit but with an additional parameter for continuation which can be run to compute additional list elements and optionally another continuation",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "editWCont",
          "normalized": "EditorConf a-\u003e[a]-\u003eIO([a],Maybe(LCont a))-\u003eIO(Maybe[a])",
          "package": "zipedit",
          "partial": "WCont",
          "signature": "EditorConf a-\u003e[a]-\u003eIO([a],Maybe(LCont a))-\u003eIO(Maybe[a])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:editWCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to display a prompt to the user,\n based on the currently focused item.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "prompt",
          "package": "zipedit",
          "signature": "Maybe a -\u003e String",
          "source": "src/System-Console-ZipEdit.html#EditorConf",
          "type": "function"
        },
        "index": {
          "description": "How to display prompt to the user based on the currently focused item",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "prompt",
          "normalized": "Maybe a-\u003eString",
          "package": "zipedit",
          "signature": "Maybe a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:prompt"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome standard actions which can be used in constructing editor\n   configurations. The actions are: j - Fwd, k - Back, x -\n   Delete, q - Cancel, d - Done.\n\u003c/p\u003e",
          "module": "System.Console.ZipEdit",
          "name": "stdActions",
          "package": "zipedit",
          "signature": "[(Char, Action a)]",
          "source": "src/System-Console-ZipEdit.html#stdActions",
          "type": "function"
        },
        "index": {
          "description": "Some standard actions which can be used in constructing editor configurations The actions are Fwd Back Delete Cancel Done",
          "hierarchy": "System Console ZipEdit",
          "module": "System.Console.ZipEdit",
          "name": "stdActions",
          "normalized": "[(Char,Action a)]",
          "package": "zipedit",
          "partial": "Actions",
          "signature": "[(Char,Action a)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/zipedit/docs/System-Console-ZipEdit.html#v:stdActions"
      }
    }
  ]
]