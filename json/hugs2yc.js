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
        "word": "hugs2yc"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHugs Core to Yhc Core converter (via parsing).\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "Hugs",
          "package": "hugs2yc",
          "source": "src/Yhc-Core-FrontEnd-Hugs.html",
          "type": "module"
        },
        "index": {
          "description": "Hugs Core to Yhc Core converter via parsing",
          "hierarchy": "Yhc Core FrontEnd Hugs",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "Hugs",
          "package": "hugs2yc",
          "partial": "Hugs",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTable of Hugs primitives mapped to the Normal Set of primitives.\n\u003c/p\u003e",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "hugsPrimTable",
          "package": "hugs2yc",
          "signature": "[(CoreFuncName, CoreFuncName)]",
          "source": "src/Yhc-Core-FrontEnd-Hugs-PrimTable.html#hugsPrimTable",
          "type": "function"
        },
        "index": {
          "description": "Table of Hugs primitives mapped to the Normal Set of primitives",
          "hierarchy": "Yhc Core FrontEnd Hugs",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "hugsPrimTable",
          "normalized": "[(CoreFuncName,CoreFuncName)]",
          "package": "hugs2yc",
          "partial": "Prim Table",
          "signature": "[(CoreFuncName,CoreFuncName)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:hugsPrimTable"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eHugs Core Linker: reads in all *.cor files from the given directories\n and produces a linked .yca object ready to save in a file. \n Names of reachability roots are picked from the arguments,\n and they should be fully qualified names with\n semicolons separating module name from function name.\n If an empty list is provided, all \"main\" functions\n found in all modules will be used as roots. If none exists,\n error will be reported. Error will also be reported if parsing\n of any of the files, or final linking results in an error.\n\u003c/p\u003e",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "linkHugsCore",
          "package": "hugs2yc",
          "signature": "[FilePath]-\u003e [CoreFuncName]-\u003e String-\u003e IO Core",
          "type": "function"
        },
        "index": {
          "description": "Hugs Core Linker reads in all cor files from the given directories and produces linked yca object ready to save in file Names of reachability roots are picked from the arguments and they should be fully qualified names with semicolons separating module name from function name If an empty list is provided all main functions found in all modules will be used as roots If none exists error will be reported Error will also be reported if parsing of any of the files or final linking results in an error",
          "hierarchy": "Yhc Core FrontEnd Hugs",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "linkHugsCore",
          "normalized": "[FilePath]-\u003e[CoreFuncName]-\u003eString-\u003eIO Core",
          "package": "hugs2yc",
          "partial": "Hugs Core",
          "signature": "[FilePath]-\u003e[CoreFuncName]-\u003eString-\u003eIO Core",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:linkHugsCore"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eToplevel parser: reads in a given single Hugs Core file,\n starts the module parser with empty state. The function\n returns either a parse error or an individual Yhc Core in memory.\n Due to the Hugs specifics, individual Yhc Core modules are not\n usable, so it is recommended to use the \u003ccode\u003e\u003ca\u003elinkHugsCore\u003c/a\u003e\u003c/code\u003e function\n unless anything special is needed.\n\u003c/p\u003e",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "parseHugsCore",
          "package": "hugs2yc",
          "signature": "FilePath -\u003e IO (Either ParseError Core)",
          "source": "src/Yhc-Core-FrontEnd-Hugs.html#parseHugsCore",
          "type": "function"
        },
        "index": {
          "description": "Toplevel parser reads in given single Hugs Core file starts the module parser with empty state The function returns either parse error or an individual Yhc Core in memory Due to the Hugs specifics individual Yhc Core modules are not usable so it is recommended to use the linkHugsCore function unless anything special is needed",
          "hierarchy": "Yhc Core FrontEnd Hugs",
          "module": "Yhc.Core.FrontEnd.Hugs",
          "name": "parseHugsCore",
          "normalized": "FilePath-\u003eIO(Either ParseError Core)",
          "package": "hugs2yc",
          "partial": "Hugs Core",
          "signature": "FilePath-\u003eIO(Either ParseError Core)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:parseHugsCore"
      }
    }
  ]
]