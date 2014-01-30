[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHugs Core to Yhc Core converter (via parsing).\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Yhc.Core.FrontEnd.Hugs",
        "fct-package": "hugs2yc",
        "fct-signature": "module",
        "fct-source": "src/Yhc-Core-FrontEnd-Hugs.html",
        "fct-type": "module",
        "title": "Hugs"
      },
      "index": {
        "description": "Hugs Core to Yhc Core converter via parsing",
        "hierarchy": "Yhc Core FrontEnd Hugs",
        "module": "Yhc.Core.FrontEnd.Hugs",
        "name": "Hugs",
        "normalized": "",
        "package": "hugs2yc",
        "partial": "Hugs",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:hugsPrimTable",
      "description": {
        "fct-descr": "\u003cp\u003eTable of Hugs primitives mapped to the Normal Set of primitives.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FrontEnd.Hugs",
        "fct-package": "hugs2yc",
        "fct-signature": "[(CoreFuncName, CoreFuncName)]",
        "fct-source": "src/Yhc-Core-FrontEnd-Hugs-PrimTable.html#hugsPrimTable",
        "fct-type": "function",
        "title": "hugsPrimTable"
      },
      "index": {
        "description": "Table of Hugs primitives mapped to the Normal Set of primitives",
        "hierarchy": "Yhc Core FrontEnd Hugs",
        "module": "Yhc.Core.FrontEnd.Hugs",
        "name": "hugsPrimTable",
        "normalized": "[(CoreFuncName,CoreFuncName)]",
        "package": "hugs2yc",
        "partial": "Prim Table",
        "signature": "[(CoreFuncName,CoreFuncName)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:linkHugsCore",
      "description": {
        "fct-descr": "\u003cp\u003eHugs Core Linker: reads in all *.cor files from the given directories\n and produces a linked .yca object ready to save in a file. \n Names of reachability roots are picked from the arguments,\n and they should be fully qualified names with\n semicolons separating module name from function name.\n If an empty list is provided, all \"main\" functions\n found in all modules will be used as roots. If none exists,\n error will be reported. Error will also be reported if parsing\n of any of the files, or final linking results in an error.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FrontEnd.Hugs",
        "fct-package": "hugs2yc",
        "fct-signature": "[FilePath]-\u003e [CoreFuncName]-\u003e String-\u003e IO Core",
        "fct-type": "function",
        "title": "linkHugsCore"
      },
      "index": {
        "description": "Hugs Core Linker reads in all cor files from the given directories and produces linked yca object ready to save in file Names of reachability roots are picked from the arguments and they should be fully qualified names with semicolons separating module name from function name If an empty list is provided all main functions found in all modules will be used as roots If none exists error will be reported Error will also be reported if parsing of any of the files or final linking results in an error",
        "hierarchy": "Yhc Core FrontEnd Hugs",
        "module": "Yhc.Core.FrontEnd.Hugs",
        "name": "linkHugsCore",
        "normalized": "[FilePath]-\u003e[CoreFuncName]-\u003eString-\u003eIO Core",
        "package": "hugs2yc",
        "partial": "Hugs Core",
        "signature": "[FilePath]-\u003e[CoreFuncName]-\u003eString-\u003eIO Core"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/hugs2yc/docs/Yhc-Core-FrontEnd-Hugs.html#v:parseHugsCore",
      "description": {
        "fct-descr": "\u003cp\u003eToplevel parser: reads in a given single Hugs Core file,\n starts the module parser with empty state. The function\n returns either a parse error or an individual Yhc Core in memory.\n Due to the Hugs specifics, individual Yhc Core modules are not\n usable, so it is recommended to use the \u003ccode\u003e\u003ca\u003elinkHugsCore\u003c/a\u003e\u003c/code\u003e function\n unless anything special is needed.\n\u003c/p\u003e",
        "fct-module": "Yhc.Core.FrontEnd.Hugs",
        "fct-package": "hugs2yc",
        "fct-signature": "FilePath -\u003e IO (Either ParseError Core)",
        "fct-source": "src/Yhc-Core-FrontEnd-Hugs.html#parseHugsCore",
        "fct-type": "function",
        "title": "parseHugsCore"
      },
      "index": {
        "description": "Toplevel parser reads in given single Hugs Core file starts the module parser with empty state The function returns either parse error or an individual Yhc Core in memory Due to the Hugs specifics individual Yhc Core modules are not usable so it is recommended to use the linkHugsCore function unless anything special is needed",
        "hierarchy": "Yhc Core FrontEnd Hugs",
        "module": "Yhc.Core.FrontEnd.Hugs",
        "name": "parseHugsCore",
        "normalized": "FilePath-\u003eIO(Either ParseError Core)",
        "package": "hugs2yc",
        "partial": "Hugs Core",
        "signature": "FilePath-\u003eIO(Either ParseError Core)"
      }
    }
  }
]