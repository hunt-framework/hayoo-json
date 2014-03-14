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
        "word": "todos"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.CommandParser",
          "name": "CommandParser",
          "package": "todos",
          "source": "src/Todos-CommandParser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos CommandParser",
          "module": "Todos.CommandParser",
          "name": "CommandParser",
          "package": "todos",
          "partial": "Command Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-CommandParser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFormat item info\n\u003c/p\u003e",
          "module": "Todos.CommandParser",
          "name": "printfItem",
          "package": "todos",
          "signature": "String-\u003e TodoItem-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Format item info",
          "hierarchy": "Todos CommandParser",
          "module": "Todos.CommandParser",
          "name": "printfItem",
          "normalized": "String-\u003eTodoItem-\u003eString",
          "package": "todos",
          "partial": "Item",
          "signature": "String-\u003eTodoItem-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-CommandParser.html#v:printfItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "Config",
          "package": "todos",
          "source": "src/Todos-Config.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "Config",
          "package": "todos",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny user-specified runtime config type should include at least this properties\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "BaseConfig",
          "package": "todos",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "data"
        },
        "index": {
          "description": "Any user-specified runtime config type should include at least this properties",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "BaseConfig",
          "package": "todos",
          "partial": "Base Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#t:BaseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of parsing command line\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "CmdLineParseResult",
          "package": "todos",
          "source": "src/Todos-Config.html#CmdLineParseResult",
          "type": "data"
        },
        "index": {
          "description": "Result of parsing command line",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "CmdLineParseResult",
          "package": "todos",
          "partial": "Cmd Line Parse Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#t:CmdLineParseResult"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConfiguration for console output. Is generated in runtime from TodosConfig and Config.\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "PrintConfig",
          "package": "todos",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "data"
        },
        "index": {
          "description": "Configuration for console output Is generated in runtime from TodosConfig and Config",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "PrintConfig",
          "package": "todos",
          "partial": "Print Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#t:PrintConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny user-specified runtime config type should belong to this class\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "RuntimeConfig",
          "package": "todos",
          "source": "src/Todos-Config.html#RuntimeConfig",
          "type": "class"
        },
        "index": {
          "description": "Any user-specified runtime config type should belong to this class",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "RuntimeConfig",
          "package": "todos",
          "partial": "Runtime Config",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#t:RuntimeConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser Todos config. User can specify it in \u003ccode\u003e~\u003cem\u003e.config\u003c/em\u003etodos/todos.hs\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "TodosConfig",
          "package": "todos",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "data"
        },
        "index": {
          "description": "User Todos config User can specify it in config todos todos.hs",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "TodosConfig",
          "package": "todos",
          "partial": "Todos Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#t:TodosConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "BConfig",
          "package": "todos",
          "signature": "BConfig",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "BConfig",
          "package": "todos",
          "partial": "BConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:BConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser asked for help\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "CmdLineHelp",
          "package": "todos",
          "signature": "CmdLineHelp",
          "source": "src/Todos-Config.html#CmdLineParseResult",
          "type": "function"
        },
        "index": {
          "description": "User asked for help",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "CmdLineHelp",
          "package": "todos",
          "partial": "Cmd Line Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:CmdLineHelp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "PConfig",
          "package": "todos",
          "signature": "PConfig",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "PConfig",
          "package": "todos",
          "partial": "PConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:PConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSome error occured\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "ParseError",
          "package": "todos",
          "signature": "ParseError String",
          "source": "src/Todos-Config.html#CmdLineParseResult",
          "type": "function"
        },
        "index": {
          "description": "Some error occured",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "ParseError",
          "package": "todos",
          "partial": "Parse Error",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:ParseError"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParsed successfully, got Config and list of source files\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "Parsed",
          "package": "todos",
          "signature": "Parsed c [FilePath]",
          "source": "src/Todos-Config.html#CmdLineParseResult",
          "type": "function"
        },
        "index": {
          "description": "Parsed successfully got Config and list of source files",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "Parsed",
          "normalized": "Parsed a[FilePath]",
          "package": "todos",
          "partial": "Parsed",
          "signature": "Parsed c[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:Parsed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "Todos",
          "package": "todos",
          "signature": "Todos",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "Todos",
          "package": "todos",
          "partial": "Todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:Todos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eask field from BaseConfig\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "askBase",
          "package": "todos",
          "signature": "(BaseConfig -\u003e a) -\u003e Reader c a",
          "source": "src/Todos-Config.html#askBase",
          "type": "function"
        },
        "index": {
          "description": "ask field from BaseConfig",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "askBase",
          "normalized": "(BaseConfig-\u003ea)-\u003eReader b a",
          "package": "todos",
          "partial": "Base",
          "signature": "(BaseConfig-\u003ea)-\u003eReader c a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:askBase"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "commandToRun",
          "package": "todos",
          "signature": "TodoCommand",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "commandToRun",
          "package": "todos",
          "partial": "To Run",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:commandToRun"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhether to highlight given item\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "doHighlight",
          "package": "todos",
          "signature": "TodoItem -\u003e 𝔹",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "description": "Whether to highlight given item",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "doHighlight",
          "normalized": "TodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Highlight",
          "signature": "TodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:doHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny function to be run to transform read TODOs tree\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "filterTodos",
          "package": "todos",
          "signature": "DateTime -\u003e c -\u003e [Todo] -\u003e [Todo]",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Any function to be run to transform read TODOs tree",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "filterTodos",
          "normalized": "DateTime-\u003ea-\u003e[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Todos",
          "signature": "DateTime-\u003ec-\u003e[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:filterTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "forcedStatus",
          "package": "todos",
          "signature": "Maybe String",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "forcedStatus",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:forcedStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDoes given TODO item match query?\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "getPredicate",
          "package": "todos",
          "signature": "DateTime -\u003e c -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Config.html#getPredicate",
          "type": "method"
        },
        "index": {
          "description": "Does given TODO item match query",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "getPredicate",
          "normalized": "DateTime-\u003ea-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Predicate",
          "signature": "DateTime-\u003ec-\u003eTodoItem-\u003e𝔹",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:getPredicate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "groupByFile",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "groupByFile",
          "package": "todos",
          "partial": "By File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:groupByFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "groupByStatus",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "groupByStatus",
          "package": "todos",
          "partial": "By Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:groupByStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "groupByTag",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "groupByTag",
          "package": "todos",
          "partial": "By Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:groupByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor to use for highlighting\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "highlightColor",
          "package": "todos",
          "signature": "(ColorIntensity, Color)",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Color to use for highlighting",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "highlightColor",
          "normalized": "(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Color",
          "signature": "(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:highlightColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eString to use for output tree indenting (two spaces by default)\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "indentString",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "String to use for output tree indenting two spaces by default",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "indentString",
          "package": "todos",
          "partial": "String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:indentString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to select color for item's node in DOT output\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "itemColor",
          "package": "todos",
          "signature": "TodoItem -\u003e HSV",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to select color for item node in DOT output",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "itemColor",
          "normalized": "TodoItem-\u003eHSV",
          "package": "todos",
          "partial": "Color",
          "signature": "TodoItem-\u003eHSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:itemColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to select a color of item's name in console output\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "itemConsoleColor",
          "package": "todos",
          "signature": "TodoItem -\u003e Maybe (ColorIntensity, Color)",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to select color of item name in console output",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "itemConsoleColor",
          "normalized": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Console Color",
          "signature": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:itemConsoleColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to select shape for item's node in DOT output\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "itemShape",
          "package": "todos",
          "signature": "TodoItem -\u003e Shape",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to select shape for item node in DOT output",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "itemShape",
          "normalized": "TodoItem-\u003eShape",
          "package": "todos",
          "partial": "Shape",
          "signature": "TodoItem-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:itemShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "minL",
          "package": "todos",
          "signature": "Limit",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "minL",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:minL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Config (to be used without any options in command line and configs)\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "nullConfig",
          "package": "todos",
          "signature": "c",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Default Config to be used without any options in command line and configs",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "nullConfig",
          "package": "todos",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:nullConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow colored output\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "outColors",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Show colored output",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "outColors",
          "package": "todos",
          "partial": "Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:outColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHighlight matching items\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "outHighlight",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Highlight matching items",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "outHighlight",
          "package": "todos",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:outHighlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow IDs\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "outIds",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Show IDs",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "outIds",
          "package": "todos",
          "partial": "Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:outIds"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput only first matching entry\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "outOnlyFirst",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Output only first matching entry",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "outOnlyFirst",
          "package": "todos",
          "partial": "Only First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:outOnlyFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "outputFormat",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "outputFormat",
          "package": "todos",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:outputFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to parse command line\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "parseCommandLine",
          "package": "todos",
          "signature": "DateTime -\u003e c -\u003e [String] -\u003e CmdLineParseResult c",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to parse command line",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "parseCommandLine",
          "normalized": "DateTime-\u003ea-\u003e[String]-\u003eCmdLineParseResult a",
          "package": "todos",
          "partial": "Command Line",
          "signature": "DateTime-\u003ec-\u003e[String]-\u003eCmdLineParseResult c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:parseCommandLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNothing &#8212; use default parser, Just p &#8212; use alternate parser with prefix &#171;p&#187;\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "prefix",
          "package": "todos",
          "signature": "Maybe String",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Nothing use default parser Just use alternate parser with prefix",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "prefix",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "printConfig",
          "package": "todos",
          "signature": "c",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "printConfig",
          "package": "todos",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:printConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor to use for highlighting\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "printHighlightColor",
          "package": "todos",
          "signature": "(ColorIntensity, Color)",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "description": "Color to use for highlighting",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "printHighlightColor",
          "normalized": "(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Highlight Color",
          "signature": "(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:printHighlightColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor of item name\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "printItemColor",
          "package": "todos",
          "signature": "TodoItem -\u003e Maybe (ColorIntensity, Color)",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "description": "Color of item name",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "printItemColor",
          "normalized": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Item Color",
          "signature": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:printItemColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor of status field from status\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "printStatusColor",
          "package": "todos",
          "signature": "String -\u003e (ColorIntensity, Color)",
          "source": "src/Todos-Config.html#PrintConfig",
          "type": "function"
        },
        "index": {
          "description": "Color of status field from status",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "printStatusColor",
          "normalized": "String-\u003e(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Status Color",
          "signature": "String-\u003e(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:printStatusColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eAny function to output TODOs list\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "printTodos",
          "package": "todos",
          "signature": "PrintConfig c -\u003e [Todo] -\u003e IO ()",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Any function to output TODOs list",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "printTodos",
          "normalized": "PrintConfig a-\u003e[Todo]-\u003eIO()",
          "package": "todos",
          "partial": "Todos",
          "signature": "PrintConfig c-\u003e[Todo]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:printTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "pruneL",
          "package": "todos",
          "signature": "Limit",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "pruneL",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:pruneL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSkip status field in input\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "skipStatus",
          "package": "todos",
          "signature": "𝔹",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Skip status field in input",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "skipStatus",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:skipStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHow to sort items\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "sorting",
          "package": "todos",
          "signature": "SortingType",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "description": "How to sort items",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "sorting",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:sorting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFunction to select a color of item's status field in console output\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "statusConsoleColor",
          "package": "todos",
          "signature": "String -\u003e (ColorIntensity, Color)",
          "source": "src/Todos-Config.html#TodosConfig",
          "type": "function"
        },
        "index": {
          "description": "Function to select color of item status field in console output",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "statusConsoleColor",
          "normalized": "String-\u003e(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Console Color",
          "signature": "String-\u003e(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:statusConsoleColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet basic configuration\n\u003c/p\u003e",
          "module": "Todos.Config",
          "name": "toBaseConfig",
          "package": "todos",
          "signature": "c -\u003e BaseConfig",
          "source": "src/Todos-Config.html#toBaseConfig",
          "type": "method"
        },
        "index": {
          "description": "Get basic configuration",
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "toBaseConfig",
          "normalized": "a-\u003eBaseConfig",
          "package": "todos",
          "partial": "Base Config",
          "signature": "c-\u003eBaseConfig",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:toBaseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Config",
          "name": "topStatus",
          "package": "todos",
          "signature": "Maybe String",
          "source": "src/Todos-Config.html#BaseConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Config",
          "module": "Todos.Config",
          "name": "topStatus",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Config.html#v:topStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOperations with dates\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Dates",
          "name": "Dates",
          "package": "todos",
          "source": "src/Todos-Dates.html",
          "type": "module"
        },
        "index": {
          "description": "Operations with dates",
          "hierarchy": "Todos Dates",
          "module": "Todos.Dates",
          "name": "Dates",
          "package": "todos",
          "partial": "Dates",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dates.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet current date and time.\n\u003c/p\u003e",
          "module": "[\"Todos.Dates\",\"Todos\"]",
          "name": "getCurrentDateTime",
          "package": "todos",
          "signature": "IO DateTime",
          "type": "function",
          "uris": "[\"http://hackage.haskell.org/package/todos/docs/Todos-Dates.html#v:getCurrentDateTime\",\"http://hackage.haskell.org/package/todos/docs/Todos.html#v:getCurrentDateTime\"]"
        },
        "index": {
          "description": "Get current date and time",
          "hierarchy": "Todos Dates",
          "module": "Todos.Dates",
          "name": "getCurrentDateTime",
          "package": "todos",
          "partial": "Current Date Time",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dates.html#v:getCurrentDateTime"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse set of dates with types (in parenthesis)\n\u003c/p\u003e",
          "module": "Todos.Dates",
          "name": "pSpecDates",
          "package": "todos",
          "signature": "DateTime -\u003e Parsec String st [(DateType, DateTime)]",
          "source": "src/Todos-Dates.html#pSpecDates",
          "type": "function"
        },
        "index": {
          "description": "Parse set of dates with types in parenthesis",
          "hierarchy": "Todos Dates",
          "module": "Todos.Dates",
          "name": "pSpecDates",
          "normalized": "DateTime-\u003eParsec String a[(DateType,DateTime)]",
          "package": "todos",
          "partial": "Spec Dates",
          "signature": "DateTime-\u003eParsec String st[(DateType,DateTime)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dates.html#v:pSpecDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse date/time\n\u003c/p\u003e",
          "module": "Todos.Dates",
          "name": "parseDate",
          "package": "todos",
          "signature": "DateTime-\u003e String-\u003e Either ParseError DateTime",
          "type": "function"
        },
        "index": {
          "description": "Parse date time",
          "hierarchy": "Todos Dates",
          "module": "Todos.Dates",
          "name": "parseDate",
          "normalized": "DateTime-\u003eString-\u003eEither ParseError DateTime",
          "package": "todos",
          "partial": "Date",
          "signature": "DateTime-\u003eString-\u003eEither ParseError DateTime",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dates.html#v:parseDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for parsing command line options and build queries. These functions\n are used by default, but user can supply his own functions.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "CmdLine",
          "package": "todos",
          "source": "src/Todos-Default-CmdLine.html",
          "type": "module"
        },
        "index": {
          "description": "Module for parsing command line options and build queries These functions are used by default but user can supply his own functions",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "CmdLine",
          "package": "todos",
          "partial": "Cmd Line",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eBuild DefaultConfig (with query etc) from Options\n\u003c/p\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "buildQuery",
          "package": "todos",
          "signature": "BaseConfig-\u003e Options-\u003e DefaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Build DefaultConfig with query etc from Options",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "buildQuery",
          "normalized": "BaseConfig-\u003eOptions-\u003eDefaultConfig",
          "package": "todos",
          "partial": "Query",
          "signature": "BaseConfig-\u003eOptions-\u003eDefaultConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#v:buildQuery"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCompose predicate from Composed\n\u003c/p\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "compose",
          "package": "todos",
          "signature": "DateTime-\u003e Composed-\u003e TodoItem -\u003e 𝔹",
          "type": "function"
        },
        "index": {
          "description": "Compose predicate from Composed",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "compose",
          "normalized": "DateTime-\u003eComposed-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "signature": "DateTime-\u003eComposed-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#v:compose"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor given list of glob masks, return list of matching files\n\u003c/p\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "glob",
          "package": "todos",
          "signature": "[FilePath] -\u003e IO [FilePath]",
          "source": "src/Todos-Default-CmdLine.html#glob",
          "type": "function"
        },
        "index": {
          "description": "For given list of glob masks return list of matching files",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "glob",
          "normalized": "[FilePath]-\u003eIO[FilePath]",
          "package": "todos",
          "signature": "[FilePath]-\u003eIO[FilePath]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#v:glob"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse command line\n\u003c/p\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "parseCmdLine'",
          "package": "todos",
          "signature": "DateTime-\u003e [String]-\u003e Either String (Options, [FilePath])",
          "type": "function"
        },
        "index": {
          "description": "Parse command line",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "parseCmdLine'",
          "normalized": "DateTime-\u003e[String]-\u003eEither String(Options,[FilePath])",
          "package": "todos",
          "partial": "Cmd Line'",
          "signature": "DateTime-\u003e[String]-\u003eEither String(Options,[FilePath])",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#v:parseCmdLine-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUsage help for default command line options\n\u003c/p\u003e",
          "module": "Todos.Default.CmdLine",
          "name": "usage",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Default-CmdLine.html#usage",
          "type": "function"
        },
        "index": {
          "description": "Usage help for default command line options",
          "hierarchy": "Todos Default CmdLine",
          "module": "Todos.Default.CmdLine",
          "name": "usage",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-CmdLine.html#v:usage"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains declaration of DefaultConfig data type, which is used\n by default to store runtime config.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default.Config",
          "name": "Config",
          "package": "todos",
          "source": "src/Todos-Default-Config.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains declaration of DefaultConfig data type which is used by default to store runtime config",
          "hierarchy": "Todos Default Config",
          "module": "Todos.Default.Config",
          "name": "Config",
          "package": "todos",
          "partial": "Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Config.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault runtime configuration type. Is read from command line and configs.\n\u003c/p\u003e",
          "module": "Todos.Default.Config",
          "name": "DefaultConfig",
          "package": "todos",
          "source": "src/Todos-Default-Config.html#DefaultConfig",
          "type": "data"
        },
        "index": {
          "description": "Default runtime configuration type Is read from command line and configs",
          "hierarchy": "Todos Default Config",
          "module": "Todos.Default.Config",
          "name": "DefaultConfig",
          "package": "todos",
          "partial": "Default Config",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Config.html#t:DefaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Default.Config",
          "name": "DConfig",
          "package": "todos",
          "signature": "DConfig",
          "source": "src/Todos-Default-Config.html#DefaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Default Config",
          "module": "Todos.Default.Config",
          "name": "DConfig",
          "package": "todos",
          "partial": "DConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Config.html#v:DConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Default.Config",
          "name": "baseConfig",
          "package": "todos",
          "signature": "BaseConfig",
          "source": "src/Todos-Default-Config.html#DefaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Default Config",
          "module": "Todos.Default.Config",
          "name": "baseConfig",
          "package": "todos",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Config.html#v:baseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Default.Config",
          "name": "query",
          "package": "todos",
          "signature": "Composed",
          "source": "src/Todos-Default-Config.html#DefaultConfig",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Default Config",
          "module": "Todos.Default.Config",
          "name": "query",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Config.html#v:query"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains instances of RuntimeConfig class for DefaultConfig and PrintConfig\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default.Instances",
          "name": "Instances",
          "package": "todos",
          "source": "src/Todos-Default-Instances.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains instances of RuntimeConfig class for DefaultConfig and PrintConfig",
          "hierarchy": "Todos Default Instances",
          "module": "Todos.Default.Instances",
          "name": "Instances",
          "package": "todos",
          "partial": "Instances",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Instances.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module implements printing TODOs tree to console. Here is default\n function, but user can supply his own.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default.Print",
          "name": "Print",
          "package": "todos",
          "source": "src/Todos-Default-Print.html",
          "type": "module"
        },
        "index": {
          "description": "This module implements printing TODOs tree to console Here is default function but user can supply his own",
          "hierarchy": "Todos Default Print",
          "module": "Todos.Default.Print",
          "name": "Print",
          "package": "todos",
          "partial": "Print",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Print.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault function to output TODOs to console\n\u003c/p\u003e",
          "module": "Todos.Default.Print",
          "name": "defaultPrintTodos",
          "package": "todos",
          "signature": "PrintConfig DefaultConfig -\u003e [Todo] -\u003e IO ()",
          "source": "src/Todos-Default-Print.html#defaultPrintTodos",
          "type": "function"
        },
        "index": {
          "description": "Default function to output TODOs to console",
          "hierarchy": "Todos Default Print",
          "module": "Todos.Default.Print",
          "name": "defaultPrintTodos",
          "normalized": "PrintConfig DefaultConfig-\u003e[Todo]-\u003eIO()",
          "package": "todos",
          "partial": "Print Todos",
          "signature": "PrintConfig DefaultConfig-\u003e[Todo]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Print.html#v:defaultPrintTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare TODOs for console output\n\u003c/p\u003e",
          "module": "Todos.Default.Print",
          "name": "showTodos",
          "package": "todos",
          "signature": "[Todo] -\u003e Formatter DefaultConfig",
          "source": "src/Todos-Default-Print.html#showTodos",
          "type": "function"
        },
        "index": {
          "description": "Prepare TODOs for console output",
          "hierarchy": "Todos Default Print",
          "module": "Todos.Default.Print",
          "name": "showTodos",
          "normalized": "[Todo]-\u003eFormatter DefaultConfig",
          "package": "todos",
          "partial": "Todos",
          "signature": "[Todo]-\u003eFormatter DefaultConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Print.html#v:showTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains some empty configs definitions and some function fields of defaultConfig\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default.Utils",
          "name": "Utils",
          "package": "todos",
          "source": "src/Todos-Default-Utils.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains some empty configs definitions and some function fields of defaultConfig",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "Utils",
          "package": "todos",
          "partial": "Utils",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake a list transformer\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "composeAll",
          "package": "todos",
          "signature": "DateTime -\u003e DefaultConfig -\u003e Todo -\u003e [Todo]",
          "source": "src/Todos-Default-Utils.html#composeAll",
          "type": "function"
        },
        "index": {
          "description": "Make list transformer",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "composeAll",
          "normalized": "DateTime-\u003eDefaultConfig-\u003eTodo-\u003e[Todo]",
          "package": "todos",
          "partial": "All",
          "signature": "DateTime-\u003eDefaultConfig-\u003eTodo-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:composeAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault Todos config\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "defaultConfig",
          "package": "todos",
          "signature": "TodosConfig DefaultConfig",
          "source": "src/Todos-Default-Utils.html#defaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Default Todos config",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "defaultConfig",
          "package": "todos",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:defaultConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault filter for TODOs (filterTodos field of defaultConfig)\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "defaultTodosFilter",
          "package": "todos",
          "signature": "DateTime -\u003e DefaultConfig -\u003e [Todo] -\u003e [Todo]",
          "source": "src/Todos-Default-Utils.html#defaultTodosFilter",
          "type": "function"
        },
        "index": {
          "description": "Default filter for TODOs filterTodos field of defaultConfig",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "defaultTodosFilter",
          "normalized": "DateTime-\u003eDefaultConfig-\u003e[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Todos Filter",
          "signature": "DateTime-\u003eDefaultConfig-\u003e[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:defaultTodosFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty BaseConfig\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "emptyBaseConfig",
          "package": "todos",
          "signature": "BaseConfig",
          "source": "src/Todos-Default-Utils.html#emptyBaseConfig",
          "type": "function"
        },
        "index": {
          "description": "Empty BaseConfig",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "emptyBaseConfig",
          "package": "todos",
          "partial": "Base Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:emptyBaseConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault empty DefaultConfig (nullConfig field of defaultConfig)\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "emptyConfig",
          "package": "todos",
          "signature": "DefaultConfig",
          "source": "src/Todos-Default-Utils.html#emptyConfig",
          "type": "function"
        },
        "index": {
          "description": "Default empty DefaultConfig nullConfig field of defaultConfig",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "emptyConfig",
          "package": "todos",
          "partial": "Config",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:emptyConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrepare PrintConfig for console output functions. Is called from realTodos.\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "mkPrintConfig",
          "package": "todos",
          "signature": "DateTime -\u003e c -\u003e TodosConfig c -\u003e PrintConfig c",
          "source": "src/Todos-Default-Utils.html#mkPrintConfig",
          "type": "function"
        },
        "index": {
          "description": "Prepare PrintConfig for console output functions Is called from realTodos",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "mkPrintConfig",
          "normalized": "DateTime-\u003ea-\u003eTodosConfig a-\u003ePrintConfig a",
          "package": "todos",
          "partial": "Print Config",
          "signature": "DateTime-\u003ec-\u003eTodosConfig c-\u003ePrintConfig c",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:mkPrintConfig"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eParse command line (default function)\n\u003c/p\u003e",
          "module": "Todos.Default.Utils",
          "name": "parseCmdLine",
          "package": "todos",
          "signature": "DateTime-\u003e DefaultConfig-\u003e [String]-\u003e CmdLineParseResult DefaultConfig",
          "type": "function"
        },
        "index": {
          "description": "Parse command line default function",
          "hierarchy": "Todos Default Utils",
          "module": "Todos.Default.Utils",
          "name": "parseCmdLine",
          "normalized": "DateTime-\u003eDefaultConfig-\u003e[String]-\u003eCmdLineParseResult DefaultConfig",
          "package": "todos",
          "partial": "Cmd Line",
          "signature": "DateTime-\u003eDefaultConfig-\u003e[String]-\u003eCmdLineParseResult DefaultConfig",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default-Utils.html#v:parseCmdLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTodos.Default.* modules contain implementation of RuntimeConfig instance for DefaultConfig type.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Default",
          "name": "Default",
          "package": "todos",
          "source": "src/Todos-Default.html",
          "type": "module"
        },
        "index": {
          "description": "Todos.Default modules contain implementation of RuntimeConfig instance for DefaultConfig type",
          "hierarchy": "Todos Default",
          "module": "Todos.Default",
          "name": "Default",
          "package": "todos",
          "partial": "Default",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Default.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eThis module contains data type for storing HSV color, used in DOT output,\n and some default functions to calculate items' colors.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Dot.Color",
          "name": "Color",
          "package": "todos",
          "source": "src/Todos-Dot-Color.html",
          "type": "module"
        },
        "index": {
          "description": "This module contains data type for storing HSV color used in DOT output and some default functions to calculate items colors",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "Color",
          "package": "todos",
          "partial": "Color",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHue, saturation and value; all are in [0; 1] range.\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "HSV",
          "package": "todos",
          "source": "src/Todos-Dot-Color.html#HSV",
          "type": "data"
        },
        "index": {
          "description": "Hue saturation and value all are in range",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "HSV",
          "package": "todos",
          "partial": "HSV",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#t:HSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Color",
          "name": "HSV",
          "package": "todos",
          "signature": "HSV",
          "source": "src/Todos-Dot-Color.html#HSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "HSV",
          "package": "todos",
          "partial": "HSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:HSV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Color",
          "name": "colorHue",
          "package": "todos",
          "signature": "Double",
          "source": "src/Todos-Dot-Color.html#HSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "colorHue",
          "package": "todos",
          "partial": "Hue",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:colorHue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Color",
          "name": "colorSaturation",
          "package": "todos",
          "signature": "Double",
          "source": "src/Todos-Dot-Color.html#HSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "colorSaturation",
          "package": "todos",
          "partial": "Saturation",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:colorSaturation"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Color",
          "name": "colorValue",
          "package": "todos",
          "signature": "Double",
          "source": "src/Todos-Dot-Color.html#HSV",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "colorValue",
          "package": "todos",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:colorValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet console color which is nearest to given HSV color\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "consoleColor",
          "package": "todos",
          "signature": "HSV -\u003e (ColorIntensity, Color)",
          "source": "src/Todos-Dot-Color.html#consoleColor",
          "type": "function"
        },
        "index": {
          "description": "Get console color which is nearest to given HSV color",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "consoleColor",
          "normalized": "HSV-\u003e(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Color",
          "signature": "HSV-\u003e(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:consoleColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCorrespondence between console colors and HSV colors\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "consoleColors",
          "package": "todos",
          "signature": "[((ColorIntensity, Color), HSV)]",
          "source": "src/Todos-Dot-Color.html#consoleColors",
          "type": "function"
        },
        "index": {
          "description": "Correspondence between console colors and HSV colors",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "consoleColors",
          "normalized": "[((ColorIntensity,Color),HSV)]",
          "package": "todos",
          "partial": "Colors",
          "signature": "[((ColorIntensity,Color),HSV)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:consoleColors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet console color for item name (this is const Nothing)\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "defItemConsoleColor",
          "package": "todos",
          "signature": "TodoItem -\u003e Maybe (ColorIntensity, Color)",
          "source": "src/Todos-Dot-Color.html#defItemConsoleColor",
          "type": "function"
        },
        "index": {
          "description": "Get console color for item name this is const Nothing",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "defItemConsoleColor",
          "normalized": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Item Console Color",
          "signature": "TodoItem-\u003eMaybe(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:defItemConsoleColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet color for item (this is used in DOT output)\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "getColor",
          "package": "todos",
          "signature": "TodoItem -\u003e HSV",
          "source": "src/Todos-Dot-Color.html#getColor",
          "type": "function"
        },
        "index": {
          "description": "Get color for item this is used in DOT output",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "getColor",
          "normalized": "TodoItem-\u003eHSV",
          "package": "todos",
          "partial": "Color",
          "signature": "TodoItem-\u003eHSV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:getColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Color",
          "name": "hashAsDouble",
          "package": "todos",
          "signature": "a -\u003e Double",
          "source": "src/Todos-Dot-Color.html#hashAsDouble",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "hashAsDouble",
          "normalized": "a-\u003eDouble",
          "package": "todos",
          "partial": "As Double",
          "signature": "a-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:hashAsDouble"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet console color for item status\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "statusColor",
          "package": "todos",
          "signature": "String -\u003e (ColorIntensity, Color)",
          "source": "src/Todos-Dot-Color.html#statusColor",
          "type": "function"
        },
        "index": {
          "description": "Get console color for item status",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "statusColor",
          "normalized": "String-\u003e(ColorIntensity,Color)",
          "package": "todos",
          "partial": "Color",
          "signature": "String-\u003e(ColorIntensity,Color)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:statusColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet color hue from item status\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "statusHue",
          "package": "todos",
          "signature": "String -\u003e Double",
          "source": "src/Todos-Dot-Color.html#statusHue",
          "type": "function"
        },
        "index": {
          "description": "Get color hue from item status",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "statusHue",
          "normalized": "String-\u003eDouble",
          "package": "todos",
          "partial": "Hue",
          "signature": "String-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:statusHue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor hue values for some common item statuses\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "statusHues",
          "package": "todos",
          "signature": "Map String Double",
          "source": "src/Todos-Dot-Color.html#statusHues",
          "type": "function"
        },
        "index": {
          "description": "Color hue values for some common item statuses",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "statusHues",
          "package": "todos",
          "partial": "Hues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:statusHues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet color saturation from item status\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "statusSat",
          "package": "todos",
          "signature": "String -\u003e Double",
          "source": "src/Todos-Dot-Color.html#statusSat",
          "type": "function"
        },
        "index": {
          "description": "Get color saturation from item status",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "statusSat",
          "normalized": "String-\u003eDouble",
          "package": "todos",
          "partial": "Sat",
          "signature": "String-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:statusSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eColor saturation values for some common statuses\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "statusSats",
          "package": "todos",
          "signature": "Map String Double",
          "source": "src/Todos-Dot-Color.html#statusSats",
          "type": "function"
        },
        "index": {
          "description": "Color saturation values for some common statuses",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "statusSats",
          "package": "todos",
          "partial": "Sats",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:statusSats"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet color hue from tag name\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "tagHue",
          "package": "todos",
          "signature": "String -\u003e Double",
          "source": "src/Todos-Dot-Color.html#tagHue",
          "type": "function"
        },
        "index": {
          "description": "Get color hue from tag name",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "tagHue",
          "normalized": "String-\u003eDouble",
          "package": "todos",
          "partial": "Hue",
          "signature": "String-\u003eDouble",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:tagHue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHue values for some common tags\n\u003c/p\u003e",
          "module": "Todos.Dot.Color",
          "name": "tagHues",
          "package": "todos",
          "signature": "Map String Double",
          "source": "src/Todos-Dot-Color.html#tagHues",
          "type": "function"
        },
        "index": {
          "description": "Hue values for some common tags",
          "hierarchy": "Todos Dot Color",
          "module": "Todos.Dot.Color",
          "name": "tagHues",
          "package": "todos",
          "partial": "Hues",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Color.html#v:tagHues"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eOutput TODOs tree as DOT graph\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Dot.Render",
          "name": "Render",
          "package": "todos",
          "source": "src/Todos-Dot-Render.html",
          "type": "module"
        },
        "index": {
          "description": "Output TODOs tree as DOT graph",
          "hierarchy": "Todos Dot Render",
          "module": "Todos.Dot.Render",
          "name": "Render",
          "package": "todos",
          "partial": "Render",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Render.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturn DOT output for Todos\n\u003c/p\u003e",
          "module": "Todos.Dot.Render",
          "name": "showAsDot",
          "package": "todos",
          "signature": "(TodoItem -\u003e HSV)-\u003e (TodoItem -\u003e Shape)-\u003e [Todo]-\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Return DOT output for Todos",
          "hierarchy": "Todos Dot Render",
          "module": "Todos.Dot.Render",
          "name": "showAsDot",
          "normalized": "(TodoItem-\u003eHSV)-\u003e(TodoItem-\u003eShape)-\u003e[Todo]-\u003eString",
          "package": "todos",
          "partial": "As Dot",
          "signature": "(TodoItem-\u003eHSV)-\u003e(TodoItem-\u003eShape)-\u003e[Todo]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Render.html#v:showAsDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSupport for DOT node shapes\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "Shapes",
          "package": "todos",
          "source": "src/Todos-Dot-Shapes.html",
          "type": "module"
        },
        "index": {
          "description": "Support for DOT node shapes",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Shapes",
          "package": "todos",
          "partial": "Shapes",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSupported node shapes for DOT output\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "Shape",
          "package": "todos",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "data"
        },
        "index": {
          "description": "Supported node shapes for DOT output",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Shape",
          "package": "todos",
          "partial": "Shape",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#t:Shape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Box",
          "package": "todos",
          "signature": "Box",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Box",
          "package": "todos",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Box"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Box3D",
          "package": "todos",
          "signature": "Box3D",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Box3D",
          "package": "todos",
          "partial": "Box",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Box3D"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Circle",
          "package": "todos",
          "signature": "Circle",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Circle",
          "package": "todos",
          "partial": "Circle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Circle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Component",
          "package": "todos",
          "signature": "Component",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Component",
          "package": "todos",
          "partial": "Component",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Component"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "DCircle",
          "package": "todos",
          "signature": "DCircle",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "DCircle",
          "package": "todos",
          "partial": "DCircle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:DCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Diamond",
          "package": "todos",
          "signature": "Diamond",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Diamond",
          "package": "todos",
          "partial": "Diamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Diamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Egg",
          "package": "todos",
          "signature": "Egg",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Egg",
          "package": "todos",
          "partial": "Egg",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Egg"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Ellipse",
          "package": "todos",
          "signature": "Ellipse",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Ellipse",
          "package": "todos",
          "partial": "Ellipse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Ellipse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Folder",
          "package": "todos",
          "signature": "Folder",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Folder",
          "package": "todos",
          "partial": "Folder",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Folder"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Hexagon",
          "package": "todos",
          "signature": "Hexagon",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Hexagon",
          "package": "todos",
          "partial": "Hexagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Hexagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverted?\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "House",
          "package": "todos",
          "signature": "House Bool",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Inverted",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "House",
          "package": "todos",
          "partial": "House",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:House"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "MCircle",
          "package": "todos",
          "signature": "MCircle",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "MCircle",
          "package": "todos",
          "partial": "MCircle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:MCircle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "MDiamond",
          "package": "todos",
          "signature": "MDiamond",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "MDiamond",
          "package": "todos",
          "partial": "MDiamond",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:MDiamond"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "MSquare",
          "package": "todos",
          "signature": "MSquare",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "MSquare",
          "package": "todos",
          "partial": "MSquare",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:MSquare"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Note",
          "package": "todos",
          "signature": "Note",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Note",
          "package": "todos",
          "partial": "Note",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Note"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple, double, triple?\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "Octagon",
          "package": "todos",
          "signature": "Octagon Int",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Simple double triple",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Octagon",
          "package": "todos",
          "partial": "Octagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Octagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Parallelogram",
          "package": "todos",
          "signature": "Parallelogram",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Parallelogram",
          "package": "todos",
          "partial": "Parallelogram",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Parallelogram"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Pentagon",
          "package": "todos",
          "signature": "Pentagon",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Pentagon",
          "package": "todos",
          "partial": "Pentagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Pentagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "PlainText",
          "package": "todos",
          "signature": "PlainText",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "PlainText",
          "package": "todos",
          "partial": "Plain Text",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:PlainText"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Point",
          "package": "todos",
          "signature": "Point",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Point",
          "package": "todos",
          "partial": "Point",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Point"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Polygon",
          "package": "todos",
          "signature": "Polygon Int",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Polygon",
          "package": "todos",
          "partial": "Polygon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Polygon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Septagon",
          "package": "todos",
          "signature": "Septagon",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Septagon",
          "package": "todos",
          "partial": "Septagon",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Septagon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Square",
          "package": "todos",
          "signature": "Square",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Square",
          "package": "todos",
          "partial": "Square",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Square"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Dot.Shapes",
          "name": "Tab",
          "package": "todos",
          "signature": "Tab",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Tab",
          "package": "todos",
          "partial": "Tab",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Tab"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverted?\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "Trapezium",
          "package": "todos",
          "signature": "Trapezium Bool",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Inverted",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Trapezium",
          "package": "todos",
          "partial": "Trapezium",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Trapezium"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eInverted?\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "Triangle",
          "package": "todos",
          "signature": "Triangle Bool",
          "source": "src/Todos-Dot-Shapes.html#Shape",
          "type": "function"
        },
        "index": {
          "description": "Inverted",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "Triangle",
          "package": "todos",
          "partial": "Triangle",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:Triangle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet item shape for this item (default funciton)\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "getShape",
          "package": "todos",
          "signature": "TodoItem -\u003e Shape",
          "source": "src/Todos-Dot-Shapes.html#getShape",
          "type": "function"
        },
        "index": {
          "description": "Get item shape for this item default funciton",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "getShape",
          "normalized": "TodoItem-\u003eShape",
          "package": "todos",
          "partial": "Shape",
          "signature": "TodoItem-\u003eShape",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:getShape"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNode shapes for some common item statuses\n\u003c/p\u003e",
          "module": "Todos.Dot.Shapes",
          "name": "shapes",
          "package": "todos",
          "signature": "Map String Shape",
          "source": "src/Todos-Dot-Shapes.html#shapes",
          "type": "function"
        },
        "index": {
          "description": "Node shapes for some common item statuses",
          "hierarchy": "Todos Dot Shapes",
          "module": "Todos.Dot.Shapes",
          "name": "shapes",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot-Shapes.html#v:shapes"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTodos.Dot.* modules implement output of TODOs trees as DOT graph\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Dot",
          "name": "Dot",
          "package": "todos",
          "source": "src/Todos-Dot.html",
          "type": "module"
        },
        "index": {
          "description": "Todos.Dot modules implement output of TODOs trees as DOT graph",
          "hierarchy": "Todos Dot",
          "module": "Todos.Dot",
          "name": "Dot",
          "package": "todos",
          "partial": "Dot",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Dot.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "Formatters",
          "package": "todos",
          "source": "src/Todos-Formatters.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "Formatters",
          "package": "todos",
          "partial": "Formatters",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "ConfigAdd",
          "package": "todos",
          "source": "src/Todos-Formatters.html#ConfigAdd",
          "type": "class"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "ConfigAdd",
          "package": "todos",
          "partial": "Config Add",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#t:ConfigAdd"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to Show, but output can depend on PrintConfig\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "ConfigShow",
          "package": "todos",
          "source": "src/Todos-Formatters.html#ConfigShow",
          "type": "class"
        },
        "index": {
          "description": "Similar to Show but output can depend on PrintConfig",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "ConfigShow",
          "package": "todos",
          "partial": "Config Show",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#t:ConfigShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eProduce a list of OutItem's depending on PrintConfig\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "Formatter",
          "package": "todos",
          "source": "src/Todos-Formatters.html#Formatter",
          "type": "type"
        },
        "index": {
          "description": "Produce list of OutItem depending on PrintConfig",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "Formatter",
          "package": "todos",
          "partial": "Formatter",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#t:Formatter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eItem which could be printed to the console\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "OutItem",
          "package": "todos",
          "source": "src/Todos-Formatters.html#OutItem",
          "type": "data"
        },
        "index": {
          "description": "Item which could be printed to the console",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "OutItem",
          "package": "todos",
          "partial": "Out Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#t:OutItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute Formatter and a consequently\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "(\u003c++\u003e)",
          "package": "todos",
          "signature": "Formatter c -\u003e a -\u003e Formatter c",
          "source": "src/Todos-Formatters.html#%3C%2B%2B%3E",
          "type": "method"
        },
        "index": {
          "description": "Execute Formatter and consequently",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "(\u003c++\u003e) \u003c++\u003e",
          "normalized": "Formatter a-\u003eb-\u003eFormatter a",
          "package": "todos",
          "signature": "Formatter c-\u003ea-\u003eFormatter c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:-60--43--43--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "OutSetColor",
          "package": "todos",
          "signature": "OutSetColor ColorIntensity Color",
          "source": "src/Todos-Formatters.html#OutItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "OutSetColor",
          "package": "todos",
          "partial": "Out Set Color",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:OutSetColor"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "OutString",
          "package": "todos",
          "signature": "OutString String",
          "source": "src/Todos-Formatters.html#OutItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "OutString",
          "package": "todos",
          "partial": "Out String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:OutString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "ResetAll",
          "package": "todos",
          "signature": "ResetAll",
          "source": "src/Todos-Formatters.html#OutItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "ResetAll",
          "package": "todos",
          "partial": "Reset All",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:ResetAll"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "SetBold",
          "package": "todos",
          "signature": "SetBold",
          "source": "src/Todos-Formatters.html#OutItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "SetBold",
          "package": "todos",
          "partial": "Set Bold",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:SetBold"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Formatters",
          "name": "configShow",
          "package": "todos",
          "signature": "s -\u003e Formatter c",
          "source": "src/Todos-Formatters.html#configShow",
          "type": "method"
        },
        "index": {
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "configShow",
          "normalized": "a-\u003eFormatter b",
          "package": "todos",
          "partial": "Show",
          "signature": "s-\u003eFormatter c",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:configShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput new line\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "newLine",
          "package": "todos",
          "signature": "Formatter c",
          "source": "src/Todos-Formatters.html#newLine",
          "type": "function"
        },
        "index": {
          "description": "Output new line",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "newLine",
          "package": "todos",
          "partial": "Line",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:newLine"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePrint OutItem to console\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "outItem",
          "package": "todos",
          "signature": "OutItem -\u003e IO ()",
          "source": "src/Todos-Formatters.html#outItem",
          "type": "function"
        },
        "index": {
          "description": "Print OutItem to console",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "outItem",
          "normalized": "OutItem-\u003eIO()",
          "package": "todos",
          "partial": "Item",
          "signature": "OutItem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:outItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty Formatter\n\u003c/p\u003e",
          "module": "Todos.Formatters",
          "name": "startFormat",
          "package": "todos",
          "signature": "Formatter c",
          "source": "src/Todos-Formatters.html#startFormat",
          "type": "function"
        },
        "index": {
          "description": "Empty Formatter",
          "hierarchy": "Todos Formatters",
          "module": "Todos.Formatters",
          "name": "startFormat",
          "package": "todos",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Formatters.html#v:startFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWrapper to support unicode IO with GHC 6.10 and 6.12\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.IO",
          "name": "IO",
          "package": "todos",
          "source": "src/Todos-IO.html",
          "type": "module"
        },
        "index": {
          "description": "Wrapper to support unicode IO with GHC and",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "IO",
          "package": "todos",
          "partial": "IO",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDecode a string using \u003ccode\u003e\u003ca\u003edecode\u003c/a\u003e\u003c/code\u003e using a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e as input.\n | This is not safe but it is necessary if UTF-8 encoded text\n | has been loaded into a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e prior to being decoded.\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "decodeString",
          "package": "todos",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Decode string using decode using String as input This is not safe but it is necessary if UTF-8 encoded text has been loaded into String prior to being decoded",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "decodeString",
          "normalized": "String-\u003eString",
          "package": "todos",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:decodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEncode a string using \u003ccode\u003e\u003ca\u003eencode\u003c/a\u003e\u003c/code\u003e and store the result in a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "encodeString",
          "package": "todos",
          "signature": "String -\u003e String",
          "type": "function"
        },
        "index": {
          "description": "Encode string using encode and store the result in String",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "encodeString",
          "normalized": "String-\u003eString",
          "package": "todos",
          "partial": "String",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:encodeString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.IO",
          "name": "ensureUnicode",
          "package": "todos",
          "signature": "String -\u003e String",
          "source": "src/Todos-IO.html#ensureUnicode",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "ensureUnicode",
          "normalized": "String-\u003eString",
          "package": "todos",
          "partial": "Unicode",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:ensureUnicode"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e operation returns all user input as a single string,\n which is read lazily as it is needed\n (same as \u003ccode\u003e\u003ca\u003ehGetContents\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdin\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "getContents",
          "package": "todos",
          "signature": "IO String",
          "type": "function"
        },
        "index": {
          "description": "The getContents operation returns all user input as single string which is read lazily as it is needed same as hGetContents stdin",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "getContents",
          "package": "todos",
          "partial": "Contents",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:getContents"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e function outputs a value of any printable type to the\n standard output device.\n Printable types are those that are instances of class \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e; \u003ccode\u003e\u003ca\u003eprint\u003c/a\u003e\u003c/code\u003e\n converts values to strings for output using the \u003ccode\u003e\u003ca\u003eshow\u003c/a\u003e\u003c/code\u003e operation and\n adds a newline.\n\u003c/p\u003e\u003cp\u003eFor example, a program to print the first 20 integers and their\n powers of 2 could be written as:\n\u003c/p\u003e\u003cpre\u003e main = print ([(n, 2^n) | n \u003c- [0..19]])\n\u003c/pre\u003e",
          "module": "Todos.IO",
          "name": "print",
          "package": "todos",
          "signature": "a -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The print function outputs value of any printable type to the standard output device Printable types are those that are instances of class Show print converts values to strings for output using the show operation and adds newline For example program to print the first integers and their powers of could be written as main print",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "print",
          "normalized": "a-\u003eIO()",
          "package": "todos",
          "signature": "a-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:print"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWrite a string to the standard output device\n (same as \u003ccode\u003e\u003ca\u003ehPutStr\u003c/a\u003e\u003c/code\u003e \u003ccode\u003e\u003ca\u003estdout\u003c/a\u003e\u003c/code\u003e).\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "putStr",
          "package": "todos",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Write string to the standard output device same as hPutStr stdout",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "putStr",
          "normalized": "String-\u003eIO()",
          "package": "todos",
          "partial": "Str",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:putStr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as \u003ccode\u003e\u003ca\u003eputStr\u003c/a\u003e\u003c/code\u003e, but adds a newline character.\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "putStrLn",
          "package": "todos",
          "signature": "String -\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "The same as putStr but adds newline character",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "putStrLn",
          "normalized": "String-\u003eIO()",
          "package": "todos",
          "partial": "Str Ln",
          "signature": "String-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:putStrLn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe \u003ccode\u003e\u003ca\u003ereadFile\u003c/a\u003e\u003c/code\u003e function reads a file and\n returns the contents of the file as a string.\n The file is read lazily, on demand, as with \u003ccode\u003e\u003ca\u003egetContents\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
          "module": "Todos.IO",
          "name": "readFile",
          "package": "todos",
          "signature": "FilePath -\u003e IO String",
          "type": "function"
        },
        "index": {
          "description": "The readFile function reads file and returns the contents of the file as string The file is read lazily on demand as with getContents",
          "hierarchy": "Todos IO",
          "module": "Todos.IO",
          "name": "readFile",
          "normalized": "FilePath-\u003eIO String",
          "package": "todos",
          "partial": "File",
          "signature": "FilePath-\u003eIO String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-IO.html#v:readFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRead TODOs from files and construct corresponding ADTs.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.Loader",
          "name": "Loader",
          "package": "todos",
          "source": "src/Todos-Loader.html",
          "type": "module"
        },
        "index": {
          "description": "Read TODOs from files and construct corresponding ADTs",
          "hierarchy": "Todos Loader",
          "module": "Todos.Loader",
          "name": "Loader",
          "package": "todos",
          "partial": "Loader",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Loader.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLoad list of TODO trees from files\n\u003c/p\u003e",
          "module": "Todos.Loader",
          "name": "loadTodo",
          "package": "todos",
          "signature": "BaseConfig-\u003e DateTime-\u003e [FilePath]-\u003e IO [Todo]",
          "type": "function"
        },
        "index": {
          "description": "Load list of TODO trees from files",
          "hierarchy": "Todos Loader",
          "module": "Todos.Loader",
          "name": "loadTodo",
          "normalized": "BaseConfig-\u003eDateTime-\u003e[FilePath]-\u003eIO[Todo]",
          "package": "todos",
          "partial": "Todo",
          "signature": "BaseConfig-\u003eDateTime-\u003e[FilePath]-\u003eIO[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Loader.html#v:loadTodo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Main",
          "name": "Main",
          "package": "todos",
          "source": "src/Todos-Main.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Main",
          "module": "Todos.Main",
          "name": "Main",
          "package": "todos",
          "partial": "Main",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Main.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMain function to run. User can specify TodosConfig with any runtime config\n type. By default (in todos.hs) defaultConfig is used, which uses DefaultConfig type.\n\u003c/p\u003e",
          "module": "Todos.Main",
          "name": "todos",
          "package": "todos",
          "signature": "TodosConfig c -\u003e IO ()",
          "source": "src/Todos-Main.html#todos",
          "type": "function"
        },
        "index": {
          "description": "Main function to run User can specify TodosConfig with any runtime config type By default in todos.hs defaultConfig is used which uses DefaultConfig type",
          "hierarchy": "Todos Main",
          "module": "Todos.Main",
          "name": "todos",
          "normalized": "TodosConfig a-\u003eIO()",
          "package": "todos",
          "signature": "TodosConfig c-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Main.html#v:todos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Parser",
          "name": "Parser",
          "package": "todos",
          "source": "src/Todos-Parser.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Parser",
          "module": "Todos.Parser",
          "name": "Parser",
          "package": "todos",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead list of TODO items from alternate format\n\u003c/p\u003e",
          "module": "Todos.Parser",
          "name": "parseAlternate",
          "package": "todos",
          "signature": "BaseConfig-\u003e Int-\u003e String-\u003e DateTime-\u003e SourceName-\u003e String-\u003e [TodoItem]",
          "type": "function"
        },
        "index": {
          "description": "Read list of TODO items from alternate format",
          "hierarchy": "Todos Parser",
          "module": "Todos.Parser",
          "name": "parseAlternate",
          "normalized": "BaseConfig-\u003eInt-\u003eString-\u003eDateTime-\u003eSourceName-\u003eString-\u003e[TodoItem]",
          "package": "todos",
          "partial": "Alternate",
          "signature": "BaseConfig-\u003eInt-\u003eString-\u003eDateTime-\u003eSourceName-\u003eString-\u003e[TodoItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Parser.html#v:parseAlternate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead list of TODO items from plain format \n\u003c/p\u003e",
          "module": "Todos.Parser",
          "name": "parsePlain",
          "package": "todos",
          "signature": "BaseConfig-\u003e DateTime-\u003e SourceName-\u003e String-\u003e [TodoItem]",
          "type": "function"
        },
        "index": {
          "description": "Read list of TODO items from plain format",
          "hierarchy": "Todos Parser",
          "module": "Todos.Parser",
          "name": "parsePlain",
          "normalized": "BaseConfig-\u003eDateTime-\u003eSourceName-\u003eString-\u003e[TodoItem]",
          "package": "todos",
          "partial": "Plain",
          "signature": "BaseConfig-\u003eDateTime-\u003eSourceName-\u003eString-\u003e[TodoItem]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Parser.html#v:parsePlain"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eModule for parsing config files\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Todos.ReadConfig",
          "name": "ReadConfig",
          "package": "todos",
          "source": "src/Todos-ReadConfig.html",
          "type": "module"
        },
        "index": {
          "description": "Module for parsing config files",
          "hierarchy": "Todos ReadConfig",
          "module": "Todos.ReadConfig",
          "name": "ReadConfig",
          "package": "todos",
          "partial": "Read Config",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-ReadConfig.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead list of options from config files\n\u003c/p\u003e",
          "module": "Todos.ReadConfig",
          "name": "readAllConfigs",
          "package": "todos",
          "signature": "IO [String]",
          "source": "src/Todos-ReadConfig.html#readAllConfigs",
          "type": "function"
        },
        "index": {
          "description": "Read list of options from config files",
          "hierarchy": "Todos ReadConfig",
          "module": "Todos.ReadConfig",
          "name": "readAllConfigs",
          "normalized": "IO[String]",
          "package": "todos",
          "partial": "All Configs",
          "signature": "IO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-ReadConfig.html#v:readAllConfigs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead list of options from given config file\n\u003c/p\u003e",
          "module": "Todos.ReadConfig",
          "name": "readConfigFile",
          "package": "todos",
          "signature": "FilePath -\u003e IO [String]",
          "source": "src/Todos-ReadConfig.html#readConfigFile",
          "type": "function"
        },
        "index": {
          "description": "Read list of options from given config file",
          "hierarchy": "Todos ReadConfig",
          "module": "Todos.ReadConfig",
          "name": "readConfigFile",
          "normalized": "FilePath-\u003eIO[String]",
          "package": "todos",
          "partial": "Config File",
          "signature": "FilePath-\u003eIO[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-ReadConfig.html#v:readConfigFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "Tree",
          "package": "todos",
          "source": "src/Todos-Tree.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "Tree",
          "package": "todos",
          "partial": "Tree",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "addTag",
          "package": "todos",
          "signature": "String -\u003e [Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#addTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "addTag",
          "normalized": "String-\u003e[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Tag",
          "signature": "String-\u003e[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:addTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "datePred",
          "package": "todos",
          "signature": "(t -\u003e Maybe a) -\u003e a -\u003e a -\u003e t -\u003e 𝔹",
          "source": "src/Todos-Tree.html#datePred",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "datePred",
          "normalized": "(a-\u003eMaybe b)-\u003eb-\u003eb-\u003ea-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "(t-\u003eMaybe a)-\u003ea-\u003ea-\u003et-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:datePred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "delTag",
          "package": "todos",
          "signature": "String -\u003e [Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#delTag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "delTag",
          "normalized": "String-\u003e[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Tag",
          "signature": "String-\u003e[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:delTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if item's description matches to given regexp\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "descPred",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Tree.html#descPred",
          "type": "function"
        },
        "index": {
          "description": "Check if item description matches to given regexp",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "descPred",
          "normalized": "String-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "String-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:descPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "enumerateTodos",
          "package": "todos",
          "signature": "[Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#enumerateTodos",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "enumerateTodos",
          "normalized": "[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Todos",
          "signature": "[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:enumerateTodos"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlattern the tree\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "flattern",
          "package": "todos",
          "signature": "[Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#flattern",
          "type": "function"
        },
        "index": {
          "description": "Flattern the tree",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "flattern",
          "normalized": "[Todo]-\u003e[Todo]",
          "package": "todos",
          "signature": "[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:flattern"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFor each item in the tree, execute given monadic action (this is similar\n to forM, but for trees instead of lists).\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "forT",
          "package": "todos",
          "signature": "[Tree t] -\u003e (t -\u003e m a) -\u003e m [b]",
          "source": "src/Todos-Tree.html#forT",
          "type": "function"
        },
        "index": {
          "description": "For each item in the tree execute given monadic action this is similar to forM but for trees instead of lists",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "forT",
          "normalized": "[Tree a]-\u003e(a-\u003eb c)-\u003eb[d]",
          "package": "todos",
          "signature": "[Tree t]-\u003e(t-\u003em a)-\u003em[b]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:forT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if item's title matches to given regexp\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "grepPred",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Tree.html#grepPred",
          "type": "function"
        },
        "index": {
          "description": "Check if item title matches to given regexp",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "grepPred",
          "normalized": "String-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "String-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:grepPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if trees contain cycles\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "hasCycles",
          "package": "todos",
          "signature": "[Tree a] -\u003e 𝔹",
          "source": "src/Todos-Tree.html#hasCycles",
          "type": "function"
        },
        "index": {
          "description": "Check if trees contain cycles",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "hasCycles",
          "normalized": "[Tree a]-\u003e𝔹",
          "package": "todos",
          "partial": "Cycles",
          "signature": "[Tree a]-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:hasCycles"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if item has given ID\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "idPred",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Tree.html#idPred",
          "type": "function"
        },
        "index": {
          "description": "Check if item has given ID",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "idPred",
          "normalized": "String-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "String-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:idPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "itemByNumber",
          "package": "todos",
          "signature": "[Todo] -\u003e ℤ -\u003e Maybe TodoItem",
          "source": "src/Todos-Tree.html#itemByNumber",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "itemByNumber",
          "normalized": "[Todo]-\u003eℤ-\u003eMaybe TodoItem",
          "package": "todos",
          "partial": "By Number",
          "signature": "[Todo]-\u003eℤ-\u003eMaybe TodoItem",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:itemByNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimilar to map, but for trees instead of lists.\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "mapT",
          "package": "todos",
          "signature": "(t -\u003e t) -\u003e [Tree t] -\u003e [Tree t]",
          "source": "src/Todos-Tree.html#mapT",
          "type": "function"
        },
        "index": {
          "description": "Similar to map but for trees instead of lists",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "mapT",
          "normalized": "(a-\u003ea)-\u003e[Tree a]-\u003e[Tree a]",
          "package": "todos",
          "signature": "(t-\u003et)-\u003e[Tree t]-\u003e[Tree t]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:mapT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "mapTags",
          "package": "todos",
          "signature": "([String] -\u003e [String]) -\u003e [Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#mapTags",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "mapTags",
          "normalized": "([String]-\u003e[String])-\u003e[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Tags",
          "signature": "([String]-\u003e[String])-\u003e[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:mapTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "markLevels",
          "package": "todos",
          "signature": "[Todo] -\u003e [Todo]",
          "source": "src/Todos-Tree.html#markLevels",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "markLevels",
          "normalized": "[Todo]-\u003e[Todo]",
          "package": "todos",
          "partial": "Levels",
          "signature": "[Todo]-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:markLevels"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "pruneSelector",
          "package": "todos",
          "signature": "BaseConfig -\u003e (TodoItem -\u003e 𝔹) -\u003e Todo -\u003e [Todo]",
          "source": "src/Todos-Tree.html#pruneSelector",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "pruneSelector",
          "normalized": "BaseConfig-\u003e(TodoItem-\u003e𝔹)-\u003eTodo-\u003e[Todo]",
          "package": "todos",
          "partial": "Selector",
          "signature": "BaseConfig-\u003e(TodoItem-\u003e𝔹)-\u003eTodo-\u003e[Todo]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:pruneSelector"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "spawn",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e IO ()",
          "source": "src/Todos-Tree.html#spawn",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "spawn",
          "normalized": "String-\u003eTodoItem-\u003eIO()",
          "package": "todos",
          "signature": "String-\u003eTodoItem-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:spawn"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if item has given status\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "statusPred",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Tree.html#statusPred",
          "type": "function"
        },
        "index": {
          "description": "Check if item has given status",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "statusPred",
          "normalized": "String-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "String-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:statusPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCheck if item has given tag\n | Check if item has given tag\n\u003c/p\u003e",
          "module": "Todos.Tree",
          "name": "tagPred",
          "package": "todos",
          "signature": "String -\u003e TodoItem -\u003e 𝔹",
          "source": "src/Todos-Tree.html#tagPred",
          "type": "function"
        },
        "index": {
          "description": "Check if item has given tag Check if item has given tag",
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "tagPred",
          "normalized": "String-\u003eTodoItem-\u003e𝔹",
          "package": "todos",
          "partial": "Pred",
          "signature": "String-\u003eTodoItem-\u003e𝔹",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:tagPred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Tree",
          "name": "treeLines",
          "package": "todos",
          "signature": "[Tree t] -\u003e ℤ",
          "source": "src/Todos-Tree.html#treeLines",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Tree",
          "module": "Todos.Tree",
          "name": "treeLines",
          "normalized": "[Tree a]-\u003eℤ",
          "package": "todos",
          "partial": "Lines",
          "signature": "[Tree t]-\u003eℤ",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Tree.html#v:treeLines"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Types",
          "package": "todos",
          "source": "src/Todos-Types.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Types",
          "package": "todos",
          "partial": "Types",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "𝔹",
          "package": "todos",
          "source": "src/Todos-Types.html#%1D539",
          "type": "type"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "𝔹",
          "package": "todos",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:-120121-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCommand line flag\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "CmdLineFlag",
          "package": "todos",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "data"
        },
        "index": {
          "description": "Command line flag",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "CmdLineFlag",
          "package": "todos",
          "partial": "Cmd Line Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:CmdLineFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eData type to store complex queries\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Composed",
          "package": "todos",
          "source": "src/Todos-Types.html#Composed",
          "type": "data"
        },
        "index": {
          "description": "Data type to store complex queries",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Composed",
          "package": "todos",
          "partial": "Composed",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:Composed"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eKind of date\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "DateType",
          "package": "todos",
          "source": "src/Todos-Types.html#DateType",
          "type": "data"
        },
        "index": {
          "description": "Kind of date",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "DateType",
          "package": "todos",
          "partial": "Date Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:DateType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Limit",
          "package": "todos",
          "source": "src/Todos-Types.html#Limit",
          "type": "data"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Limit",
          "package": "todos",
          "partial": "Limit",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "LimitFlag",
          "package": "todos",
          "source": "src/Todos-Types.html#LimitFlag",
          "type": "data"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "LimitFlag",
          "package": "todos",
          "partial": "Limit Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:LimitFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to specify parsing mode\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "ModeFlag",
          "package": "todos",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "data"
        },
        "index": {
          "description": "Flags to specify parsing mode",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ModeFlag",
          "package": "todos",
          "partial": "Mode Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:ModeFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eResult of parsing command line\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Options",
          "package": "todos",
          "source": "src/Todos-Types.html#Options",
          "type": "data"
        },
        "index": {
          "description": "Result of parsing command line",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Options",
          "package": "todos",
          "partial": "Options",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:Options"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to control output\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "OutFlag",
          "package": "todos",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "data"
        },
        "index": {
          "description": "Flags to control output",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "OutFlag",
          "package": "todos",
          "partial": "Out Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:OutFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFlags to specify query\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "QueryFlag",
          "package": "todos",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "data"
        },
        "index": {
          "description": "Flags to specify query",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "QueryFlag",
          "package": "todos",
          "partial": "Query Flag",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:QueryFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eType of sorting\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "SortingType",
          "package": "todos",
          "source": "src/Todos-Types.html#SortingType",
          "type": "data"
        },
        "index": {
          "description": "Type of sorting",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "SortingType",
          "package": "todos",
          "partial": "Sorting Type",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:SortingType"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTree of TODO items.\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Todo",
          "package": "todos",
          "source": "src/Todos-Types.html#Todo",
          "type": "type"
        },
        "index": {
          "description": "Tree of TODO items",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Todo",
          "package": "todos",
          "partial": "Todo",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:Todo"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eWhat to do with selected items\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "TodoCommand",
          "package": "todos",
          "source": "src/Todos-Types.html#TodoCommand",
          "type": "data"
        },
        "index": {
          "description": "What to do with selected items",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "TodoCommand",
          "package": "todos",
          "partial": "Todo Command",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:TodoCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTODO item itself.\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "TodoItem",
          "package": "todos",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "data"
        },
        "index": {
          "description": "TODO item itself",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "TodoItem",
          "package": "todos",
          "partial": "Todo Item",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:TodoItem"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "TodoMap",
          "package": "todos",
          "source": "src/Todos-Types.html#TodoMap",
          "type": "type"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "TodoMap",
          "package": "todos",
          "partial": "Todo Map",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#t:TodoMap"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical AND\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "And",
          "package": "todos",
          "signature": "And Composed Composed",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "Logical AND",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "And",
          "package": "todos",
          "partial": "And",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:And"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "AndCons",
          "package": "todos",
          "signature": "AndCons",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "AndCons",
          "package": "todos",
          "partial": "And Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:AndCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByDeadline",
          "package": "todos",
          "signature": "ByDeadline",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByDeadline",
          "package": "todos",
          "partial": "By Deadline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByDeadline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByEndDate",
          "package": "todos",
          "signature": "ByEndDate",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByEndDate",
          "package": "todos",
          "partial": "By End Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByEndDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByStartDate",
          "package": "todos",
          "signature": "ByStartDate",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByStartDate",
          "package": "todos",
          "partial": "By Start Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByStartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByStatus",
          "package": "todos",
          "signature": "ByStatus",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByStatus",
          "package": "todos",
          "partial": "By Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByTags",
          "package": "todos",
          "signature": "ByTags",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByTags",
          "package": "todos",
          "partial": "By Tags",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "ByTitle",
          "package": "todos",
          "signature": "ByTitle",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ByTitle",
          "package": "todos",
          "partial": "By Title",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ByTitle"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Colors",
          "package": "todos",
          "signature": "Colors",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Colors",
          "package": "todos",
          "partial": "Colors",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Colors"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Deadline",
          "package": "todos",
          "signature": "Deadline",
          "source": "src/Todos-Types.html#DateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Deadline",
          "package": "todos",
          "partial": "Deadline",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Deadline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "DeadlineIs",
          "package": "todos",
          "signature": "DeadlineIs DateTime",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "DeadlineIs",
          "package": "todos",
          "partial": "Deadline Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:DeadlineIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Description",
          "package": "todos",
          "signature": "Description String",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Description",
          "package": "todos",
          "partial": "Description",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Description"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "DoNotReadStatus",
          "package": "todos",
          "signature": "DoNotReadStatus",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "DoNotReadStatus",
          "package": "todos",
          "partial": "Do Not Read Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:DoNotReadStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "DoNotSort",
          "package": "todos",
          "signature": "DoNotSort",
          "source": "src/Todos-Types.html#SortingType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "DoNotSort",
          "package": "todos",
          "partial": "Do Not Sort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:DoNotSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "DotExport",
          "package": "todos",
          "signature": "DotExport",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "DotExport",
          "package": "todos",
          "partial": "Dot Export",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:DotExport"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEmpty query\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Empty",
          "package": "todos",
          "signature": "Empty",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "Empty query",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Empty",
          "package": "todos",
          "partial": "Empty",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Empty"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "EndDate",
          "package": "todos",
          "signature": "EndDate",
          "source": "src/Todos-Types.html#DateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "EndDate",
          "package": "todos",
          "partial": "End Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:EndDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "EndDateIs",
          "package": "todos",
          "signature": "EndDateIs DateTime",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "EndDateIs",
          "package": "todos",
          "partial": "End Date Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:EndDateIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Execute",
          "package": "todos",
          "signature": "Execute",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Execute",
          "package": "todos",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Execute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Format",
          "package": "todos",
          "signature": "Format",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Format",
          "package": "todos",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Format"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "GroupByFile",
          "package": "todos",
          "signature": "GroupByFile",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "GroupByFile",
          "package": "todos",
          "partial": "Group By File",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:GroupByFile"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "GroupByStatus",
          "package": "todos",
          "signature": "GroupByStatus",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "GroupByStatus",
          "package": "todos",
          "partial": "Group By Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:GroupByStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "GroupByTag",
          "package": "todos",
          "signature": "GroupByTag",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "GroupByTag",
          "package": "todos",
          "partial": "Group By Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:GroupByTag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Help",
          "package": "todos",
          "signature": "Help",
          "source": "src/Todos-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Help",
          "package": "todos",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Help"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUser requests help\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "HelpC",
          "package": "todos",
          "signature": "HelpC",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "User requests help",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "HelpC",
          "package": "todos",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:HelpC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "HelpF",
          "package": "todos",
          "signature": "HelpF",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "HelpF",
          "package": "todos",
          "partial": "Help",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:HelpF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Highlight",
          "package": "todos",
          "signature": "Highlight",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Highlight",
          "package": "todos",
          "partial": "Highlight",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Highlight"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "IdIs",
          "package": "todos",
          "signature": "IdIs String",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "IdIs",
          "package": "todos",
          "partial": "Id Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:IdIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Ids",
          "package": "todos",
          "signature": "Ids",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Ids",
          "package": "todos",
          "partial": "Ids",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Ids"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "IndentWith",
          "package": "todos",
          "signature": "IndentWith",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "IndentWith",
          "package": "todos",
          "partial": "Indent With",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:IndentWith"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Item",
          "package": "todos",
          "signature": "Item",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Item",
          "package": "todos",
          "partial": "Item",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Item"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eJust output items to console\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "JustShow",
          "package": "todos",
          "signature": "JustShow",
          "source": "src/Todos-Types.html#TodoCommand",
          "type": "function"
        },
        "index": {
          "description": "Just output items to console",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "JustShow",
          "package": "todos",
          "partial": "Just Show",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:JustShow"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "LF",
          "package": "todos",
          "signature": "LF",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "LF",
          "package": "todos",
          "partial": "LF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:LF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Limit",
          "package": "todos",
          "signature": "Limit",
          "source": "src/Todos-Types.html#Limit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Limit",
          "package": "todos",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Limit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "MF",
          "package": "todos",
          "signature": "MF",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "MF",
          "package": "todos",
          "partial": "MF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:MF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Name",
          "package": "todos",
          "signature": "Name",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Name",
          "package": "todos",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Name"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "NoFilter",
          "package": "todos",
          "signature": "NoFilter",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "NoFilter",
          "package": "todos",
          "partial": "No Filter",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:NoFilter"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical NOT\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Not",
          "package": "todos",
          "signature": "Not Composed",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "Logical NOT",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Not",
          "package": "todos",
          "partial": "Not",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Not"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "NotCons",
          "package": "todos",
          "signature": "NotCons",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "NotCons",
          "package": "todos",
          "partial": "Not Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:NotCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "O",
          "package": "todos",
          "signature": "O [QueryFlag] [ModeFlag] [OutFlag] [LimitFlag]",
          "source": "src/Todos-Types.html#Options",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "O",
          "normalized": "O[QueryFlag][ModeFlag][OutFlag][LimitFlag]",
          "package": "todos",
          "signature": "O[QueryFlag][ModeFlag][OutFlag][LimitFlag]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:O"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "OF",
          "package": "todos",
          "signature": "OF",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "OF",
          "package": "todos",
          "partial": "OF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:OF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "OnlyFirst",
          "package": "todos",
          "signature": "OnlyFirst",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "OnlyFirst",
          "package": "todos",
          "partial": "Only First",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:OnlyFirst"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLogical OR\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Or",
          "package": "todos",
          "signature": "Or Composed Composed",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "Logical OR",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Or",
          "package": "todos",
          "partial": "Or",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Or"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "OrCons",
          "package": "todos",
          "signature": "OrCons",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "OrCons",
          "package": "todos",
          "partial": "Or Cons",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:OrCons"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple query\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "Pred",
          "package": "todos",
          "signature": "Pred QueryFlag",
          "source": "src/Todos-Types.html#Composed",
          "type": "function"
        },
        "index": {
          "description": "Simple query",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Pred",
          "package": "todos",
          "partial": "Pred",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Pred"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Prefix",
          "package": "todos",
          "signature": "Prefix",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Prefix",
          "package": "todos",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Prefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Prune",
          "package": "todos",
          "signature": "Prune",
          "source": "src/Todos-Types.html#LimitFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Prune",
          "package": "todos",
          "partial": "Prune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Prune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "QF",
          "package": "todos",
          "signature": "QF",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "QF",
          "package": "todos",
          "partial": "QF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:QF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "SetStatus",
          "package": "todos",
          "signature": "SetStatus",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "SetStatus",
          "package": "todos",
          "partial": "Set Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:SetStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "SetTopStatus",
          "package": "todos",
          "signature": "SetTopStatus",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "SetTopStatus",
          "package": "todos",
          "partial": "Set Top Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:SetTopStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOutput graph in DOT format\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "ShowAsDot",
          "package": "todos",
          "signature": "ShowAsDot",
          "source": "src/Todos-Types.html#TodoCommand",
          "type": "function"
        },
        "index": {
          "description": "Output graph in DOT format",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "ShowAsDot",
          "package": "todos",
          "partial": "Show As Dot",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:ShowAsDot"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Sort",
          "package": "todos",
          "signature": "Sort",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Sort",
          "package": "todos",
          "partial": "Sort",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Sort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Start",
          "package": "todos",
          "signature": "Start",
          "source": "src/Todos-Types.html#LimitFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Start",
          "package": "todos",
          "partial": "Start",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Start"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "StartDate",
          "package": "todos",
          "signature": "StartDate",
          "source": "src/Todos-Types.html#DateType",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "StartDate",
          "package": "todos",
          "partial": "Start Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:StartDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "StartDateIs",
          "package": "todos",
          "signature": "StartDateIs DateTime",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "StartDateIs",
          "package": "todos",
          "partial": "Start Date Is",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:StartDateIs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Status",
          "package": "todos",
          "signature": "Status String",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Status",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Status"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eExecute this system command for each item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "SystemCommand",
          "package": "todos",
          "signature": "SystemCommand String",
          "source": "src/Todos-Types.html#TodoCommand",
          "type": "function"
        },
        "index": {
          "description": "Execute this system command for each item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "SystemCommand",
          "package": "todos",
          "partial": "System Command",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:SystemCommand"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Tag",
          "package": "todos",
          "signature": "Tag String",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Tag",
          "package": "todos",
          "partial": "Tag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Tag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "Unlimited",
          "package": "todos",
          "signature": "Unlimited",
          "source": "src/Todos-Types.html#Limit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "Unlimited",
          "package": "todos",
          "partial": "Unlimited",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:Unlimited"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ecapitalize first letter of the string\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "capitalize",
          "package": "todos",
          "signature": "String -\u003e String",
          "source": "src/Todos-Types.html#capitalize",
          "type": "function"
        },
        "index": {
          "description": "capitalize first letter of the string",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "capitalize",
          "normalized": "String-\u003eString",
          "package": "todos",
          "signature": "String-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:capitalize"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDeadline for this TODO\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "deadline",
          "package": "todos",
          "signature": "Maybe DateTime",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Deadline for this TODO",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "deadline",
          "package": "todos",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:deadline"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNames (titles) of item's depends\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "depends",
          "package": "todos",
          "signature": "[String]",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Names titles of item depends",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "depends",
          "normalized": "[String]",
          "package": "todos",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:depends"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate when TODO is planned to end\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "endDate",
          "package": "todos",
          "signature": "Maybe DateTime",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Date when TODO is planned to end",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "endDate",
          "package": "todos",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:endDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePath to the source file\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "fileName",
          "package": "todos",
          "signature": "FilePath",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Path to the source file",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "fileName",
          "package": "todos",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:fileName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "getFormat",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "getFormat",
          "package": "todos",
          "partial": "Format",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:getFormat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "getIndentString",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "getIndentString",
          "package": "todos",
          "partial": "Indent String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:getIndentString"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "getSorting",
          "package": "todos",
          "signature": "SortingType",
          "source": "src/Todos-Types.html#OutFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "getSorting",
          "package": "todos",
          "partial": "Sorting",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:getSorting"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "is",
          "package": "todos",
          "signature": "t -\u003e f a -\u003e f (t, a)",
          "source": "src/Todos-Types.html#is",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "is",
          "normalized": "a-\u003eb c-\u003eb(a,c)",
          "package": "todos",
          "signature": "t-\u003ef a-\u003ef(t,a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:is"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDescription of the item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemDescr",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Description of the item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemDescr",
          "package": "todos",
          "partial": "Descr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemDescr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eIndentation level (from source file)\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemLevel",
          "package": "todos",
          "signature": "ℤ",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Indentation level from source file",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemLevel",
          "package": "todos",
          "partial": "Level",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemLevel"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eName (title) of the item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemName",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Name title of the item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemName",
          "package": "todos",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRaw number of item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemNumber",
          "package": "todos",
          "signature": "ℤ",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Raw number of item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemNumber",
          "package": "todos",
          "partial": "Number",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemNumber"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA prefix before item in source file (or empty string)\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemPrefix",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "prefix before item in source file or empty string",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemPrefix",
          "package": "todos",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStatus of the item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemStatus",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Status of the item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemStatus",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTags of the item\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "itemTags",
          "package": "todos",
          "signature": "[String]",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Tags of the item",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "itemTags",
          "normalized": "[String]",
          "package": "todos",
          "partial": "Tags",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:itemTags"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "limFlag",
          "package": "todos",
          "signature": "LimitFlag",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "limFlag",
          "package": "todos",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:limFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLine in the source file, where this item was defined\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "lineNr",
          "package": "todos",
          "signature": "Line",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Line in the source file where this item was defined",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "lineNr",
          "package": "todos",
          "partial": "Nr",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:lineNr"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMake an ID for any hashable item. 16 hexadecimal digits.\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "makeId",
          "package": "todos",
          "signature": "a -\u003e String",
          "source": "src/Todos-Types.html#makeId",
          "type": "function"
        },
        "index": {
          "description": "Make an ID for any hashable item hexadecimal digits",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "makeId",
          "normalized": "a-\u003eString",
          "package": "todos",
          "partial": "Id",
          "signature": "a-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:makeId"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "modeFlag",
          "package": "todos",
          "signature": "ModeFlag",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "modeFlag",
          "package": "todos",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:modeFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "newStatus",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "newStatus",
          "package": "todos",
          "partial": "Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:newStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "newTopStatus",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "newTopStatus",
          "package": "todos",
          "partial": "Top Status",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:newTopStatus"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "outFlag",
          "package": "todos",
          "signature": "OutFlag",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "outFlag",
          "package": "todos",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:outFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "queryFlag",
          "package": "todos",
          "signature": "QueryFlag",
          "source": "src/Todos-Types.html#CmdLineFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "queryFlag",
          "package": "todos",
          "partial": "Flag",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:queryFlag"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "readSort",
          "package": "todos",
          "signature": "String -\u003e SortingType",
          "source": "src/Todos-Types.html#readSort",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "readSort",
          "normalized": "String-\u003eSortingType",
          "package": "todos",
          "partial": "Sort",
          "signature": "String-\u003eSortingType",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:readSort"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "showDate",
          "package": "todos",
          "signature": "(DateType, DateTime) -\u003e String",
          "source": "src/Todos-Types.html#showDate",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "showDate",
          "normalized": "(DateType,DateTime)-\u003eString",
          "package": "todos",
          "partial": "Date",
          "signature": "(DateType,DateTime)-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:showDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "showDates",
          "package": "todos",
          "signature": "[Maybe (DateType, DateTime)] -\u003e String",
          "source": "src/Todos-Types.html#showDates",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "showDates",
          "normalized": "[Maybe(DateType,DateTime)]-\u003eString",
          "package": "todos",
          "partial": "Dates",
          "signature": "[Maybe(DateType,DateTime)]-\u003eString",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:showDates"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDate when TODO is planned to start\n\u003c/p\u003e",
          "module": "Todos.Types",
          "name": "startDate",
          "package": "todos",
          "signature": "Maybe DateTime",
          "source": "src/Todos-Types.html#TodoItem",
          "type": "function"
        },
        "index": {
          "description": "Date when TODO is planned to start",
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "startDate",
          "package": "todos",
          "partial": "Date",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:startDate"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unExecute",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unExecute",
          "package": "todos",
          "partial": "Execute",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unExecute"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unLimit",
          "package": "todos",
          "signature": "ℤ",
          "source": "src/Todos-Types.html#Limit",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unLimit",
          "package": "todos",
          "partial": "Limit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unLimit"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unMin",
          "package": "todos",
          "signature": "ℤ",
          "source": "src/Todos-Types.html#LimitFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unMin",
          "package": "todos",
          "partial": "Min",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unMin"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unName",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#QueryFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unName",
          "package": "todos",
          "partial": "Name",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unPrefix",
          "package": "todos",
          "signature": "String",
          "source": "src/Todos-Types.html#ModeFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unPrefix",
          "package": "todos",
          "partial": "Prefix",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unPrefix"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos.Types",
          "name": "unPrune",
          "package": "todos",
          "signature": "ℤ",
          "source": "src/Todos-Types.html#LimitFlag",
          "type": "function"
        },
        "index": {
          "hierarchy": "Todos Types",
          "module": "Todos.Types",
          "name": "unPrune",
          "package": "todos",
          "partial": "Prune",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos-Types.html#v:unPrune"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Todos",
          "name": "Todos",
          "package": "todos",
          "source": "src/Todos.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Todos",
          "module": "Todos",
          "name": "Todos",
          "package": "todos",
          "partial": "Todos",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/todos/docs/Todos.html#"
      }
    }
  ]
]