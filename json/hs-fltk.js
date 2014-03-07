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
        "word": "hs-fltk"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Ask",
          "name": "Ask",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Ask.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "Ask",
          "package": "hs-fltk",
          "partial": "Ask",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAsk a simple question with Ok and Cancel.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "ask",
          "package": "hs-fltk",
          "signature": "String -\u003e IO Bool",
          "source": "src/Graphics-UI-FLTK-Ask.html#ask",
          "type": "function"
        },
        "index": {
          "description": "Ask simple question with Ok and Cancel",
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "ask",
          "normalized": "String-\u003eIO Bool",
          "package": "hs-fltk",
          "signature": "String-\u003eIO Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#v:ask"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a directory. The first argument is the dialog title and the second one the initial location.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "dirChooser",
          "package": "hs-fltk",
          "signature": "String -\u003e FilePath -\u003e IO FilePath",
          "source": "src/Graphics-UI-FLTK-Ask.html#dirChooser",
          "type": "function"
        },
        "index": {
          "description": "Choose directory The first argument is the dialog title and the second one the initial location",
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "dirChooser",
          "normalized": "String-\u003eFilePath-\u003eIO FilePath",
          "package": "hs-fltk",
          "partial": "Chooser",
          "signature": "String-\u003eFilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#v:dirChooser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChoose a file. This first argument is the dialog title. The second one is filename patterns in the format like \"Haskell (*.{hs,lhs})\\tC (*.c)\". The final argument is the start location.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "fileChooser",
          "package": "hs-fltk",
          "signature": "String -\u003e String -\u003e FilePath -\u003e IO FilePath",
          "source": "src/Graphics-UI-FLTK-Ask.html#fileChooser",
          "type": "function"
        },
        "index": {
          "description": "Choose file This first argument is the dialog title The second one is filename patterns in the format like Haskell hs lhs tC The final argument is the start location",
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "fileChooser",
          "normalized": "String-\u003eString-\u003eFilePath-\u003eIO FilePath",
          "package": "hs-fltk",
          "partial": "Chooser",
          "signature": "String-\u003eString-\u003eFilePath-\u003eIO FilePath",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#v:fileChooser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a message with a single line input and return the result.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "input",
          "package": "hs-fltk",
          "signature": "String -\u003e IO String",
          "source": "src/Graphics-UI-FLTK-Ask.html#input",
          "type": "function"
        },
        "index": {
          "description": "Display message with single line input and return the result",
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "input",
          "normalized": "String-\u003eIO String",
          "package": "hs-fltk",
          "signature": "String-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#v:input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a messagebox.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "message",
          "package": "hs-fltk",
          "signature": "String -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Ask.html#message",
          "type": "function"
        },
        "index": {
          "description": "Display messagebox",
          "hierarchy": "Graphics UI FLTK Ask",
          "module": "Graphics.UI.FLTK.Ask",
          "name": "message",
          "normalized": "String-\u003eIO()",
          "package": "hs-fltk",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Ask.html#v:message"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Browser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser",
          "package": "hs-fltk",
          "partial": "Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for Browsers, which is a subtype of Widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Browser.html#Browser",
          "type": "data"
        },
        "index": {
          "description": "The type for Browsers which is subtype of Widget",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser",
          "package": "hs-fltk",
          "partial": "Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#t:Browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for Browsers.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser_C",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Browser.html#Browser_C",
          "type": "class"
        },
        "index": {
          "description": "Class for Browsers",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "Browser_C",
          "package": "hs-fltk",
          "partial": "Browser",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#t:Browser_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "_browser",
          "package": "hs-fltk",
          "signature": "a -\u003e Ptr Browser",
          "source": "src/Graphics-UI-FLTK-Browser.html#_browser",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "_browser",
          "normalized": "a-\u003ePtr Browser",
          "package": "hs-fltk",
          "signature": "a-\u003ePtr Browser",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:_browser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAdd a new row to the browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "add",
          "package": "hs-fltk",
          "signature": "c -\u003e String -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#add",
          "type": "function"
        },
        "index": {
          "description": "Add new row to the browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "add",
          "normalized": "a-\u003eString-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:add"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "bottomline",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#bottomline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "bottomline",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:bottomline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete all rows from the browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "clear",
          "package": "hs-fltk",
          "signature": "c -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#clear",
          "type": "function"
        },
        "index": {
          "description": "Delete all rows from the browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "clear",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:clear"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "columnChar",
          "package": "hs-fltk",
          "signature": "Attr b Char",
          "source": "src/Graphics-UI-FLTK-Browser.html#columnChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "columnChar",
          "package": "hs-fltk",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:columnChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColumn-separator character. The default is '\\t'.\n\u003c/p\u003e\u003cp\u003eFormat character. The default is '@'.\n\u003c/p\u003e\u003cp\u003eColumn widths as pixels.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "columnWidths",
          "package": "hs-fltk",
          "signature": "Attr b [Int]",
          "source": "src/Graphics-UI-FLTK-Browser.html#columnWidths",
          "type": "function"
        },
        "index": {
          "description": "Column-separator character The default is Format character The default is Column widths as pixels",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "columnWidths",
          "normalized": "Attr a[Int]",
          "package": "hs-fltk",
          "partial": "Widths",
          "signature": "Attr b[Int]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:columnWidths"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "formatChar",
          "package": "hs-fltk",
          "signature": "Attr b Char",
          "source": "src/Graphics-UI-FLTK-Browser.html#formatChar",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "formatChar",
          "package": "hs-fltk",
          "partial": "Char",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:formatChar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInsert a new row at the specified position. Indeces start at 1.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "insert",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e String -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#insert",
          "type": "function"
        },
        "index": {
          "description": "Insert new row at the specified position Indeces start at",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "insert",
          "normalized": "a-\u003eInt-\u003eString-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eString-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:insert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "middleline",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#middleline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "middleline",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:middleline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMove a row in the browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "move",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#move",
          "type": "function"
        },
        "index": {
          "description": "Move row in the browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "move",
          "normalized": "a-\u003eInt-\u003eInt-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:move"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "newBrowser",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Browser] -\u003e IO Browser",
          "source": "src/Graphics-UI-FLTK-Browser.html#newBrowser",
          "type": "function"
        },
        "index": {
          "description": "Create new browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "newBrowser",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Browser]-\u003eIO Browser",
          "package": "hs-fltk",
          "partial": "Browser",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Browser]-\u003eIO Browser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:newBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRemove a row in the browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "remove",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#remove",
          "type": "function"
        },
        "index": {
          "description": "Remove row in the browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "remove",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:remove"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn the number of rows in the browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "size",
          "package": "hs-fltk",
          "signature": "c -\u003e IO Int",
          "source": "src/Graphics-UI-FLTK-Browser.html#size",
          "type": "function"
        },
        "index": {
          "description": "Return the number of rows in the browser",
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "size",
          "normalized": "a-\u003eIO Int",
          "package": "hs-fltk",
          "signature": "c-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:size"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Browser",
          "name": "topline",
          "package": "hs-fltk",
          "signature": "c -\u003e Int -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Browser.html#topline",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Browser",
          "module": "Graphics.UI.FLTK.Browser",
          "name": "topline",
          "normalized": "a-\u003eInt-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eInt-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Browser.html#v:topline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Button",
          "name": "Button",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Button.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "Button",
          "package": "hs-fltk",
          "partial": "Button",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe Button type is used for all buttons.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "Button",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Button.html#Button",
          "type": "data"
        },
        "index": {
          "description": "The Button type is used for all buttons",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "Button",
          "package": "hs-fltk",
          "partial": "Button",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#t:Button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new normal button.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newButton",
          "type": "function"
        },
        "index": {
          "description": "Create new normal button",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new checkbox\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newCheckButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newCheckButton",
          "type": "function"
        },
        "index": {
          "description": "Create new checkbox",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newCheckButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Check Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newCheckButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new button with a light showing the current state.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newLightButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newLightButton",
          "type": "function"
        },
        "index": {
          "description": "Create new button with light showing the current state",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newLightButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Light Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newLightButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a button that sends the callback in a repeated fashion.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newRepeatButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newRepeatButton",
          "type": "function"
        },
        "index": {
          "description": "Create button that sends the callback in repeated fashion",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newRepeatButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Repeat Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newRepeatButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new button with a \"Return\" symbol on it (for Ok buttons).\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newReturnButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newReturnButton",
          "type": "function"
        },
        "index": {
          "description": "Create new button with Return symbol on it for Ok buttons",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newReturnButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Return Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newReturnButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new radiobutton.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newRoundButton",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Button] -\u003e IO Button",
          "source": "src/Graphics-UI-FLTK-Button.html#newRoundButton",
          "type": "function"
        },
        "index": {
          "description": "Create new radiobutton",
          "hierarchy": "Graphics UI FLTK Button",
          "module": "Graphics.UI.FLTK.Button",
          "name": "newRoundButton",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "package": "hs-fltk",
          "partial": "Round Button",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Button]-\u003eIO Button",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Button.html#v:newRoundButton"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Group.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group",
          "package": "hs-fltk",
          "partial": "Group",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGroup widgets.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Group.html#Group",
          "type": "data"
        },
        "index": {
          "description": "Group widgets",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group",
          "package": "hs-fltk",
          "partial": "Group",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#t:Group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for Groups.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group_C",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Group.html#Group_C",
          "type": "class"
        },
        "index": {
          "description": "Class for Groups",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Group_C",
          "package": "hs-fltk",
          "partial": "Group",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#t:Group_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTabs Group allows one to display several tabs of widgets.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Tabs",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Group.html#Tabs",
          "type": "data"
        },
        "index": {
          "description": "Tabs Group allows one to display several tabs of widgets",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "Tabs",
          "package": "hs-fltk",
          "partial": "Tabs",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#t:Tabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Group",
          "name": "_group",
          "package": "hs-fltk",
          "signature": "a -\u003e Ptr Group",
          "source": "src/Graphics-UI-FLTK-Group.html#_group",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "_group",
          "normalized": "a-\u003ePtr Group",
          "package": "hs-fltk",
          "signature": "a-\u003ePtr Group",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:_group"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBegin a group for layout. FIXME not thread safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "begin",
          "package": "hs-fltk",
          "signature": "g -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Group.html#begin",
          "type": "function"
        },
        "index": {
          "description": "Begin group for layout FIXME not thread safe",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "begin",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "g-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:begin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEnd a group for layout. FIXME not thread safe.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "end",
          "package": "hs-fltk",
          "signature": "g -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Group.html#end",
          "type": "function"
        },
        "index": {
          "description": "End group for layout FIXME not thread safe",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "end",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "g-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:end"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Group widget\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "newGroup",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Group] -\u003e IO Group",
          "source": "src/Graphics-UI-FLTK-Group.html#newGroup",
          "type": "function"
        },
        "index": {
          "description": "Create new Group widget",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "newGroup",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Group]-\u003eIO Group",
          "package": "hs-fltk",
          "partial": "Group",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Group]-\u003eIO Group",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:newGroup"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new Tabs widget\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "newTabs",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Tabs] -\u003e IO Tabs",
          "source": "src/Graphics-UI-FLTK-Group.html#newTabs",
          "type": "function"
        },
        "index": {
          "description": "Create new Tabs widget",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "newTabs",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Tabs]-\u003eIO Tabs",
          "package": "hs-fltk",
          "partial": "Tabs",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Tabs]-\u003eIO Tabs",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:newTabs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMark a widget resizable in the group. Fixme =\u003e accessor?\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Group",
          "name": "resizable",
          "package": "hs-fltk",
          "signature": "g -\u003e w -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Group.html#resizable",
          "type": "function"
        },
        "index": {
          "description": "Mark widget resizable in the group Fixme accessor",
          "hierarchy": "Graphics UI FLTK Group",
          "module": "Graphics.UI.FLTK.Group",
          "name": "resizable",
          "normalized": "a-\u003eb-\u003eIO()",
          "package": "hs-fltk",
          "signature": "g-\u003ew-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Group.html#v:resizable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Image",
          "name": "Image",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Image.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "Image",
          "package": "hs-fltk",
          "partial": "Image",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for images.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Image",
          "name": "Image",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Image.html#Image",
          "type": "data"
        },
        "index": {
          "description": "Type for images",
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "Image",
          "package": "hs-fltk",
          "partial": "Image",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#t:Image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage for deactived widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Image",
          "name": "deimage",
          "package": "hs-fltk",
          "signature": "Attr w Image",
          "source": "src/Graphics-UI-FLTK-Image.html#deimage",
          "type": "function"
        },
        "index": {
          "description": "Image for deactived widget",
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "deimage",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#v:deimage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Image",
          "name": "height",
          "package": "hs-fltk",
          "signature": "Image -\u003e IO Int",
          "source": "src/Graphics-UI-FLTK-Image.html#height",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "height",
          "normalized": "Image-\u003eIO Int",
          "package": "hs-fltk",
          "signature": "Image-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#v:height"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eImage for actived widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Image",
          "name": "image",
          "package": "hs-fltk",
          "signature": "Attr w Image",
          "source": "src/Graphics-UI-FLTK-Image.html#image",
          "type": "function"
        },
        "index": {
          "description": "Image for actived widget",
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "image",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#v:image"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad new image from a file. Supports bmp, png, jpeg, gif and xpm...\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Image",
          "name": "newImage",
          "package": "hs-fltk",
          "signature": "FilePath -\u003e IO Image",
          "source": "src/Graphics-UI-FLTK-Image.html#newImage",
          "type": "function"
        },
        "index": {
          "description": "Load new image from file Supports bmp png jpeg gif and xpm",
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "newImage",
          "normalized": "FilePath-\u003eIO Image",
          "package": "hs-fltk",
          "partial": "Image",
          "signature": "FilePath-\u003eIO Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#v:newImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Image",
          "name": "width",
          "package": "hs-fltk",
          "signature": "Image -\u003e IO Int",
          "source": "src/Graphics-UI-FLTK-Image.html#width",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Image",
          "module": "Graphics.UI.FLTK.Image",
          "name": "width",
          "normalized": "Image-\u003eIO Int",
          "package": "hs-fltk",
          "signature": "Image-\u003eIO Int",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Image.html#v:width"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Input",
          "name": "Input",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Input.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "Input",
          "package": "hs-fltk",
          "partial": "Input",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Input",
          "name": "Input",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Input.html#Input",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "Input",
          "package": "hs-fltk",
          "partial": "Input",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#t:Input"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew file input field. Graphics.UI.FLTK.ASK's file_chooser is better...\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newFileInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newFileInput",
          "type": "function"
        },
        "index": {
          "description": "New file input field Graphics.UI.FLTK.ASK file chooser is better",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newFileInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "File Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newFileInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew float input field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newFloatInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newFloatInput",
          "type": "function"
        },
        "index": {
          "description": "New float input field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newFloatInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Float Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newFloatInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew text input field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newInput",
          "type": "function"
        },
        "index": {
          "description": "New text input field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew int input field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newIntInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newIntInput",
          "type": "function"
        },
        "index": {
          "description": "New int input field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newIntInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Int Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newIntInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew multiline input field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newMultiInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newMultiInput",
          "type": "function"
        },
        "index": {
          "description": "New multiline input field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newMultiInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Multi Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newMultiInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew multiline output field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newMultiOutput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newMultiOutput",
          "type": "function"
        },
        "index": {
          "description": "New multiline output field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newMultiOutput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Multi Output",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newMultiOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew simple output field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newOutput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newOutput",
          "type": "function"
        },
        "index": {
          "description": "New simple output field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newOutput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Output",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newOutput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew password input field.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newSecretInput",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Input] -\u003e IO Input",
          "source": "src/Graphics-UI-FLTK-Input.html#newSecretInput",
          "type": "function"
        },
        "index": {
          "description": "New password input field",
          "hierarchy": "Graphics UI FLTK Input",
          "module": "Graphics.UI.FLTK.Input",
          "name": "newSecretInput",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "package": "hs-fltk",
          "partial": "Secret Input",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Input]-\u003eIO Input",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Input.html#v:newSecretInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "Menu",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Menu.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "Menu",
          "package": "hs-fltk",
          "partial": "Menu",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "MenuBar",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Menu.html#MenuBar",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "MenuBar",
          "package": "hs-fltk",
          "partial": "Menu Bar",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#t:MenuBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "MenuType",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Menu.html#MenuType",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "MenuType",
          "package": "hs-fltk",
          "partial": "Menu Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#t:MenuType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addC",
          "package": "hs-fltk",
          "signature": "MenuBar -\u003e String -\u003e String -\u003e Act MenuBar -\u003e MenuType -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Menu.html#addC",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addC",
          "normalized": "MenuBar-\u003eString-\u003eString-\u003eAct MenuBar-\u003eMenuType-\u003eIO()",
          "package": "hs-fltk",
          "signature": "MenuBar-\u003eString-\u003eString-\u003eAct MenuBar-\u003eMenuType-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:addC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addL",
          "package": "hs-fltk",
          "signature": "MenuBar -\u003e [(String, Act MenuBar)] -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Menu.html#addL",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addL",
          "normalized": "MenuBar-\u003e[(String,Act MenuBar)]-\u003eIO()",
          "package": "hs-fltk",
          "signature": "MenuBar-\u003e[(String,Act MenuBar)]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:addL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addM",
          "package": "hs-fltk",
          "signature": "MenuBar -\u003e String -\u003e Act MenuBar -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Menu.html#addM",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "addM",
          "normalized": "MenuBar-\u003eString-\u003eAct MenuBar-\u003eIO()",
          "package": "hs-fltk",
          "signature": "MenuBar-\u003eString-\u003eAct MenuBar-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:addM"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mDefault",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mDefault",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mDefault",
          "package": "hs-fltk",
          "partial": "Default",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mDefault"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mDivider",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mDivider",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mDivider",
          "package": "hs-fltk",
          "partial": "Divider",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mDivider"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mInactive",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mInactive",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mInactive",
          "package": "hs-fltk",
          "partial": "Inactive",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mInactive"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mInvisible",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mInvisible",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mInvisible",
          "package": "hs-fltk",
          "partial": "Invisible",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mInvisible"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mRadio",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mRadio",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mRadio",
          "package": "hs-fltk",
          "partial": "Radio",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mRadio"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mToggle",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mToggle",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mToggle",
          "package": "hs-fltk",
          "partial": "Toggle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mToggle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mValue",
          "package": "hs-fltk",
          "signature": "MenuType",
          "source": "src/Graphics-UI-FLTK-Menu.html#mValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "mValue",
          "package": "hs-fltk",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:mValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new menu bar.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "newMenuBar",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop MenuBar] -\u003e IO MenuBar",
          "source": "src/Graphics-UI-FLTK-Menu.html#newMenuBar",
          "type": "function"
        },
        "index": {
          "description": "Create new menu bar",
          "hierarchy": "Graphics UI FLTK Menu",
          "module": "Graphics.UI.FLTK.Menu",
          "name": "newMenuBar",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop MenuBar]-\u003eIO MenuBar",
          "package": "hs-fltk",
          "partial": "Menu Bar",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop MenuBar]-\u003eIO MenuBar",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Menu.html#v:newMenuBar"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "MultiBrowser",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-MultiBrowser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK MultiBrowser",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "MultiBrowser",
          "package": "hs-fltk",
          "partial": "Multi Browser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-MultiBrowser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for MultiBrowsers, which is a subtype of Browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "MultiBrowser",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-MultiBrowser.html#MultiBrowser",
          "type": "data"
        },
        "index": {
          "description": "The type for MultiBrowsers which is subtype of Browser",
          "hierarchy": "Graphics UI FLTK MultiBrowser",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "MultiBrowser",
          "package": "hs-fltk",
          "partial": "Multi Browser",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-MultiBrowser.html#t:MultiBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "deselect",
          "package": "hs-fltk",
          "signature": "MultiBrowser -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-MultiBrowser.html#deselect",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK MultiBrowser",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "deselect",
          "normalized": "MultiBrowser-\u003eIO()",
          "package": "hs-fltk",
          "signature": "MultiBrowser-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-MultiBrowser.html#v:deselect"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new browser.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "newMultiBrowser",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop MultiBrowser] -\u003e IO MultiBrowser",
          "source": "src/Graphics-UI-FLTK-MultiBrowser.html#newMultiBrowser",
          "type": "function"
        },
        "index": {
          "description": "Create new browser",
          "hierarchy": "Graphics UI FLTK MultiBrowser",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "newMultiBrowser",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop MultiBrowser]-\u003eIO MultiBrowser",
          "package": "hs-fltk",
          "partial": "Multi Browser",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop MultiBrowser]-\u003eIO MultiBrowser",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-MultiBrowser.html#v:newMultiBrowser"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggle whether the specified row is selected or not.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "select",
          "package": "hs-fltk",
          "signature": "Int -\u003e Attr MultiBrowser Bool",
          "source": "src/Graphics-UI-FLTK-MultiBrowser.html#select",
          "type": "function"
        },
        "index": {
          "description": "Toggle whether the specified row is selected or not",
          "hierarchy": "Graphics UI FLTK MultiBrowser",
          "module": "Graphics.UI.FLTK.MultiBrowser",
          "name": "select",
          "normalized": "Int-\u003eAttr MultiBrowser Bool",
          "package": "hs-fltk",
          "signature": "Int-\u003eAttr MultiBrowser Bool",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-MultiBrowser.html#v:select"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget",
          "package": "hs-fltk",
          "partial": "Widget",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe type for actions.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Act",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Act",
          "type": "type"
        },
        "index": {
          "description": "The type for actions",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Act",
          "package": "hs-fltk",
          "partial": "Act",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Act"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Align",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Align",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Align",
          "package": "hs-fltk",
          "partial": "Align",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAn attribute is just a getter and a setter function.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Attr",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Attr",
          "type": "data"
        },
        "index": {
          "description": "An attribute is just getter and setter function",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Attr",
          "package": "hs-fltk",
          "partial": "Attr",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "CFlag",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#CFlag",
          "type": "class"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "CFlag",
          "package": "hs-fltk",
          "partial": "CFlag",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:CFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Color",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Color",
          "type": "data"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Color",
          "package": "hs-fltk",
          "partial": "Color",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProperties are the heart of the system.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Prop",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Prop",
          "type": "data"
        },
        "index": {
          "description": "Properties are the heart of the system",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Prop",
          "package": "hs-fltk",
          "partial": "Prop",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Prop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction class to get and set the value of a widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Value_FC",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Value_FC",
          "type": "class"
        },
        "index": {
          "description": "Function class to get and set the value of widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Value_FC",
          "package": "hs-fltk",
          "partial": "Value FC",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Value_FC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhen are actions fired?\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "When",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#When",
          "type": "data"
        },
        "index": {
          "description": "When are actions fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "When",
          "package": "hs-fltk",
          "partial": "When",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:When"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for widgets\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Widget",
          "type": "data"
        },
        "index": {
          "description": "Type for widgets",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget",
          "package": "hs-fltk",
          "partial": "Widget",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eClass for widgets\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget_C",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Widget.html#Widget_C",
          "type": "class"
        },
        "index": {
          "description": "Class for widgets",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Widget_C",
          "package": "hs-fltk",
          "partial": "Widget",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#t:Widget_C"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "(+|+)",
          "package": "hs-fltk",
          "signature": "a -\u003e a -\u003e a",
          "source": "src/Graphics-UI-FLTK-Widget.html#%2B%7C%2B",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "(+|+) +|+",
          "normalized": "a-\u003ea-\u003ea",
          "package": "hs-fltk",
          "signature": "a-\u003ea-\u003ea",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:-43--124--43-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": ":=",
          "package": "hs-fltk",
          "signature": "forall a . (Attr c a) := a",
          "source": "src/Graphics-UI-FLTK-Widget.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": ":=",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": ":=\u003e",
          "package": "hs-fltk",
          "signature": "(a -\u003e a)",
          "source": "src/Graphics-UI-FLTK-Widget.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": ":=\u003e",
          "normalized": "(a-\u003ea)",
          "package": "hs-fltk",
          "signature": "(a-\u003ea)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "::=",
          "package": "hs-fltk",
          "signature": "= (IO a)",
          "source": "src/Graphics-UI-FLTK-Widget.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "::=",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "::=\u003e",
          "package": "hs-fltk",
          "signature": "(a -\u003e IO a)",
          "source": "src/Graphics-UI-FLTK-Widget.html#Prop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "::=\u003e",
          "normalized": "(a-\u003eIO a)",
          "package": "hs-fltk",
          "signature": "(a-\u003eIO a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Attr",
          "package": "hs-fltk",
          "signature": "Attr (c -\u003e IO a) (c -\u003e a -\u003e IO ())",
          "source": "src/Graphics-UI-FLTK-Widget.html#Attr",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "Attr",
          "normalized": "Attr(a-\u003eIO b)(a-\u003eb-\u003eIO())",
          "package": "hs-fltk",
          "partial": "Attr",
          "signature": "Attr(c-\u003eIO a)(c-\u003ea-\u003eIO())",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:Attr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "_widget",
          "package": "hs-fltk",
          "signature": "a -\u003e Ptr Widget",
          "source": "src/Graphics-UI-FLTK-Widget.html#_widget",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "_widget",
          "normalized": "a-\u003ePtr Widget",
          "package": "hs-fltk",
          "signature": "a-\u003ePtr Widget",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:_widget"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aBottom",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aBottom",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aBottom",
          "package": "hs-fltk",
          "partial": "Bottom",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aBottom"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aCenter",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aCenter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aCenter",
          "package": "hs-fltk",
          "partial": "Center",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aCenter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aClip",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aClip",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aClip",
          "package": "hs-fltk",
          "partial": "Clip",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aClip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aInside",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aInside",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aInside",
          "package": "hs-fltk",
          "partial": "Inside",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aInside"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aLeft",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aLeft",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aLeft",
          "package": "hs-fltk",
          "partial": "Left",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aLeft"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aRight",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aRight",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aRight",
          "package": "hs-fltk",
          "partial": "Right",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aRight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aTextOverImage",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aTextOverImage",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aTextOverImage",
          "package": "hs-fltk",
          "partial": "Text Over Image",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aTextOverImage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aTop",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aTop",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aTop",
          "package": "hs-fltk",
          "partial": "Top",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aTop"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aWrap",
          "package": "hs-fltk",
          "signature": "Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#aWrap",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "aWrap",
          "package": "hs-fltk",
          "partial": "Wrap",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:aWrap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "action",
          "package": "hs-fltk",
          "signature": "Attr a (Act a)",
          "source": "src/Graphics-UI-FLTK-Widget.html#action",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "action",
          "package": "hs-fltk",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:action"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange Align the action is fired.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "align",
          "package": "hs-fltk",
          "signature": "Attr c Align",
          "source": "src/Graphics-UI-FLTK-Widget.html#align",
          "type": "function"
        },
        "index": {
          "description": "Change Align the action is fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "align",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:align"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "black",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#black",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "black",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:black"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "blue",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#blue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "blue",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:blue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHas the widget changed?\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "changed",
          "package": "hs-fltk",
          "signature": "Attr c Bool",
          "source": "src/Graphics-UI-FLTK-Widget.html#changed",
          "type": "function"
        },
        "index": {
          "description": "Has the widget changed",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "changed",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:changed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange Color the action is fired.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "color",
          "package": "hs-fltk",
          "signature": "Attr c Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#color",
          "type": "function"
        },
        "index": {
          "description": "Change Color the action is fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "color",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:color"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCoordinates (x,y,width,heigth) of a widget\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "coords",
          "package": "hs-fltk",
          "signature": "Attr c (Int, Int, Int, Int)",
          "source": "src/Graphics-UI-FLTK-Widget.html#coords",
          "type": "function"
        },
        "index": {
          "description": "Coordinates width heigth of widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "coords",
          "normalized": "Attr a(Int,Int,Int,Int)",
          "package": "hs-fltk",
          "signature": "Attr c(Int,Int,Int,Int)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:coords"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "cyan",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#cyan",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "cyan",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:cyan"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDestroy a widget\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "destroy",
          "package": "hs-fltk",
          "signature": "w -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Widget.html#destroy",
          "type": "function"
        },
        "index": {
          "description": "Destroy widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "destroy",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "w-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:destroy"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet an Attr of an object.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "get",
          "package": "hs-fltk",
          "signature": "c -\u003e Attr c a -\u003e IO a",
          "source": "src/Graphics-UI-FLTK-Widget.html#get",
          "type": "function"
        },
        "index": {
          "description": "Get an Attr of an object",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "get",
          "normalized": "a-\u003eAttr a b-\u003eIO b",
          "package": "hs-fltk",
          "signature": "c-\u003eAttr c a-\u003eIO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:get"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "green",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#green",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "green",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:green"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe label of the widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "label",
          "package": "hs-fltk",
          "signature": "Attr c String",
          "source": "src/Graphics-UI-FLTK-Widget.html#label",
          "type": "function"
        },
        "index": {
          "description": "The label of the widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "label",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:label"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange Color the action is fired.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "labelColor",
          "package": "hs-fltk",
          "signature": "Attr c Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#labelColor",
          "type": "function"
        },
        "index": {
          "description": "Change Color the action is fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "labelColor",
          "package": "hs-fltk",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:labelColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSize of label in pt.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "labelSize",
          "package": "hs-fltk",
          "signature": "Attr c Int",
          "source": "src/Graphics-UI-FLTK-Widget.html#labelSize",
          "type": "function"
        },
        "index": {
          "description": "Size of label in pt",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "labelSize",
          "package": "hs-fltk",
          "partial": "Size",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:labelSize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "magenta",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#magenta",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "magenta",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:magenta"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "red",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#red",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "red",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:red"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedraw a widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "redraw",
          "package": "hs-fltk",
          "signature": "w -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Widget.html#redraw",
          "type": "function"
        },
        "index": {
          "description": "Redraw widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "redraw",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "w-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:redraw"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRedraw a widget label\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "redrawLabel",
          "package": "hs-fltk",
          "signature": "w -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Widget.html#redrawLabel",
          "type": "function"
        },
        "index": {
          "description": "Redraw widget label",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "redrawLabel",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "partial": "Label",
          "signature": "w-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:redrawLabel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "rgb",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#rgb",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "rgb",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eColor",
          "package": "hs-fltk",
          "signature": "Int-\u003eInt-\u003eInt-\u003eColor",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:rgb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange Color the action is fired.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "selectionColor",
          "package": "hs-fltk",
          "signature": "Attr c Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#selectionColor",
          "type": "function"
        },
        "index": {
          "description": "Change Color the action is fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "selectionColor",
          "package": "hs-fltk",
          "partial": "Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:selectionColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSet a number of properties for some object.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "set",
          "package": "hs-fltk",
          "signature": "c -\u003e [Prop c] -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Widget.html#set",
          "type": "function"
        },
        "index": {
          "description": "Set number of properties for some object",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "set",
          "normalized": "a-\u003e[Prop a]-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003e[Prop c]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:set"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe tooltip of the widget.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "tooltip",
          "package": "hs-fltk",
          "signature": "Attr c String",
          "source": "src/Graphics-UI-FLTK-Widget.html#tooltip",
          "type": "function"
        },
        "index": {
          "description": "The tooltip of the widget",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "tooltip",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:tooltip"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "value",
          "package": "hs-fltk",
          "signature": "Attr c v",
          "source": "src/Graphics-UI-FLTK-Widget.html#value",
          "type": "method"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "value",
          "package": "hs-fltk",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:value"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wChanged",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wChanged",
          "package": "hs-fltk",
          "partial": "Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnter",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wEnter",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnter",
          "package": "hs-fltk",
          "partial": "Enter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wEnter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnterAllways",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wEnterAllways",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnterAllways",
          "package": "hs-fltk",
          "partial": "Enter Allways",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wEnterAllways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnterChanged",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wEnterChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wEnterChanged",
          "package": "hs-fltk",
          "partial": "Enter Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wEnterChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wNever",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wNever",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wNever",
          "package": "hs-fltk",
          "partial": "Never",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wNever"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wNotChanged",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wNotChanged",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wNotChanged",
          "package": "hs-fltk",
          "partial": "Not Changed",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wNotChanged"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wRelease",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wRelease",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wRelease",
          "package": "hs-fltk",
          "partial": "Release",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wRelease"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wReleaseAllways",
          "package": "hs-fltk",
          "signature": "When",
          "source": "src/Graphics-UI-FLTK-Widget.html#wReleaseAllways",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wReleaseAllways",
          "package": "hs-fltk",
          "partial": "Release Allways",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wReleaseAllways"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wait",
          "package": "hs-fltk",
          "signature": "IO ()",
          "source": "src/Graphics-UI-FLTK-Widget.html#wait",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "wait",
          "normalized": "IO()",
          "package": "hs-fltk",
          "signature": "IO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:wait"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eChange when the action is fired.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "when",
          "package": "hs-fltk",
          "signature": "Attr c When",
          "source": "src/Graphics-UI-FLTK-Widget.html#when",
          "type": "function"
        },
        "index": {
          "description": "Change when the action is fired",
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "when",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:when"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "white",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#white",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "white",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:white"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Widget",
          "name": "yellow",
          "package": "hs-fltk",
          "signature": "Color",
          "source": "src/Graphics-UI-FLTK-Widget.html#yellow",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Widget",
          "module": "Graphics.UI.FLTK.Widget",
          "name": "yellow",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Widget.html#v:yellow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "WidgetMisc",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "WidgetMisc",
          "package": "hs-fltk",
          "partial": "Widget Misc",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePack multiple widgets with layout.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "Pack",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#Pack",
          "type": "data"
        },
        "index": {
          "description": "Pack multiple widgets with layout",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "Pack",
          "package": "hs-fltk",
          "partial": "Pack",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#t:Pack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for progress bars.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "Progress",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#Progress",
          "type": "data"
        },
        "index": {
          "description": "Type for progress bars",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "Progress",
          "package": "hs-fltk",
          "partial": "Progress",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#t:Progress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMaximum value for the progress bar.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "maxValue",
          "package": "hs-fltk",
          "signature": "Attr Progress Float",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#maxValue",
          "type": "function"
        },
        "index": {
          "description": "Maximum value for the progress bar",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "maxValue",
          "package": "hs-fltk",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#v:maxValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMinumum value for the progress bar.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "minValue",
          "package": "hs-fltk",
          "signature": "Attr Progress Float",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#minValue",
          "type": "function"
        },
        "index": {
          "description": "Minumum value for the progress bar",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "minValue",
          "package": "hs-fltk",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#v:minValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003enew Pack for managing multiple widgets with layout.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "newPack",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Pack] -\u003e IO Pack",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#newPack",
          "type": "function"
        },
        "index": {
          "description": "new Pack for managing multiple widgets with layout",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "newPack",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Pack]-\u003eIO Pack",
          "package": "hs-fltk",
          "partial": "Pack",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Pack]-\u003eIO Pack",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#v:newPack"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNew progress bar.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "newProgress",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Progress] -\u003e IO Progress",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#newProgress",
          "type": "function"
        },
        "index": {
          "description": "New progress bar",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "newProgress",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Progress]-\u003eIO Progress",
          "package": "hs-fltk",
          "partial": "Progress",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Progress]-\u003eIO Progress",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#v:newProgress"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSpacing between widgets in a Pack.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "spacing",
          "package": "hs-fltk",
          "signature": "Attr Pack Int",
          "source": "src/Graphics-UI-FLTK-WidgetMisc.html#spacing",
          "type": "function"
        },
        "index": {
          "description": "Spacing between widgets in Pack",
          "hierarchy": "Graphics UI FLTK WidgetMisc",
          "module": "Graphics.UI.FLTK.WidgetMisc",
          "name": "spacing",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-WidgetMisc.html#v:spacing"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Window",
          "name": "Window",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Window.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Window",
          "module": "Graphics.UI.FLTK.Window",
          "name": "Window",
          "package": "hs-fltk",
          "partial": "Window",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Window.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType for top level windows.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Window",
          "name": "Window",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK-Window.html#Window",
          "type": "data"
        },
        "index": {
          "description": "Type for top level windows",
          "hierarchy": "Graphics UI FLTK Window",
          "module": "Graphics.UI.FLTK.Window",
          "name": "Window",
          "package": "hs-fltk",
          "partial": "Window",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Window.html#t:Window"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCreate a new top level window.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Window",
          "name": "newWindow",
          "package": "hs-fltk",
          "signature": "Int -\u003e Int -\u003e Int -\u003e Int -\u003e [Prop Window] -\u003e IO Window",
          "source": "src/Graphics-UI-FLTK-Window.html#newWindow",
          "type": "function"
        },
        "index": {
          "description": "Create new top level window",
          "hierarchy": "Graphics UI FLTK Window",
          "module": "Graphics.UI.FLTK.Window",
          "name": "newWindow",
          "normalized": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Window]-\u003eIO Window",
          "package": "hs-fltk",
          "partial": "Window",
          "signature": "Int-\u003eInt-\u003eInt-\u003eInt-\u003e[Prop Window]-\u003eIO Window",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Window.html#v:newWindow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK.Window",
          "name": "run",
          "package": "hs-fltk",
          "signature": "c -\u003e IO ()",
          "source": "src/Graphics-UI-FLTK-Window.html#run",
          "type": "function"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK Window",
          "module": "Graphics.UI.FLTK.Window",
          "name": "run",
          "normalized": "a-\u003eIO()",
          "package": "hs-fltk",
          "signature": "c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Window.html#v:run"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToggle a whether a window is shown or hidden.\n\u003c/p\u003e",
          "module": "Graphics.UI.FLTK.Window",
          "name": "shown",
          "package": "hs-fltk",
          "signature": "Attr c Bool",
          "source": "src/Graphics-UI-FLTK-Window.html#shown",
          "type": "function"
        },
        "index": {
          "description": "Toggle whether window is shown or hidden",
          "hierarchy": "Graphics UI FLTK Window",
          "module": "Graphics.UI.FLTK.Window",
          "name": "shown",
          "package": "hs-fltk",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK-Window.html#v:shown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Graphics.UI.FLTK",
          "name": "FLTK",
          "package": "hs-fltk",
          "source": "src/Graphics-UI-FLTK.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Graphics UI FLTK",
          "module": "Graphics.UI.FLTK",
          "name": "FLTK",
          "package": "hs-fltk",
          "partial": "FLTK",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hs-fltk/docs/Graphics-UI-FLTK.html#"
      }
    }
  ]
]