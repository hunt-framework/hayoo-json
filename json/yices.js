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
        "word": "yices"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eParser for the yices syntax.  Yet incomplete since it does not include\n   bit vectors, and not heavily tested at all.\n   See \u003ca\u003ehttp://yices.csl.sri.com/language.shtml\u003c/a\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "Parser",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Parser.html",
          "type": "module"
        },
        "index": {
          "description": "Parser for the yices syntax Yet incomplete since it does not include bit vectors and not heavily tested at all See http yices.csl.sri.com language.shtml for details",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "Parser",
          "package": "yices",
          "partial": "Parser",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparsec parser for yices command\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "cmdY",
          "package": "yices",
          "signature": "GenParser Char st CmdY",
          "source": "src/Math-SMT-Yices-Parser.html#cmdY",
          "type": "function"
        },
        "index": {
          "description": "parsec parser for yices command",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "cmdY",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:cmdY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparsec parser for yices expressions\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "expY",
          "package": "yices",
          "signature": "GenParser Char st ExpY",
          "source": "src/Math-SMT-Yices-Parser.html#expY",
          "type": "function"
        },
        "index": {
          "description": "parsec parser for yices expressions",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "expY",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:expY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a string of yices command format\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseCmdY",
          "package": "yices",
          "signature": "String -\u003e CmdY",
          "source": "src/Math-SMT-Yices-Parser.html#parseCmdY",
          "type": "function"
        },
        "index": {
          "description": "parse string of yices command format",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseCmdY",
          "normalized": "String-\u003eCmdY",
          "package": "yices",
          "partial": "Cmd",
          "signature": "String-\u003eCmdY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:parseCmdY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a string of yices expression format\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseExpY",
          "package": "yices",
          "signature": "String -\u003e ExpY",
          "source": "src/Math-SMT-Yices-Parser.html#parseExpY",
          "type": "function"
        },
        "index": {
          "description": "parse string of yices expression format",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseExpY",
          "normalized": "String-\u003eExpY",
          "package": "yices",
          "partial": "Exp",
          "signature": "String-\u003eExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:parseExpY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a string of many yices expressions\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseExpYs",
          "package": "yices",
          "signature": "String -\u003e [ExpY]",
          "source": "src/Math-SMT-Yices-Parser.html#parseExpYs",
          "type": "function"
        },
        "index": {
          "description": "parse string of many yices expressions",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseExpYs",
          "normalized": "String-\u003e[ExpY]",
          "package": "yices",
          "partial": "Exp Ys",
          "signature": "String-\u003e[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:parseExpYs"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparse a string of yices type format\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseTypY",
          "package": "yices",
          "signature": "String -\u003e TypY",
          "source": "src/Math-SMT-Yices-Parser.html#parseTypY",
          "type": "function"
        },
        "index": {
          "description": "parse string of yices type format",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "parseTypY",
          "normalized": "String-\u003eTypY",
          "package": "yices",
          "partial": "Typ",
          "signature": "String-\u003eTypY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:parseTypY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eparsec parser for yices types\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Parser",
          "name": "typY",
          "package": "yices",
          "signature": "GenParser Char st TypY",
          "source": "src/Math-SMT-Yices-Parser.html#typY",
          "type": "function"
        },
        "index": {
          "description": "parsec parser for yices types",
          "hierarchy": "Math SMT Yices Parser",
          "module": "Math.SMT.Yices.Parser",
          "name": "typY",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Parser.html#v:typY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInter-process communication to Yices through pipe.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "Pipe",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Pipe.html",
          "type": "module"
        },
        "index": {
          "description": "Inter-process communication to Yices through pipe",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "Pipe",
          "package": "yices",
          "partial": "Pipe",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTo read in the result of the (check) command\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "ResY",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Pipe.html#ResY",
          "type": "data"
        },
        "index": {
          "description": "To read in the result of the check command",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "ResY",
          "package": "yices",
          "partial": "Res",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#t:ResY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003etype abbrevation for IPC handle quadruple\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "YicesIPC",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Pipe.html#YicesIPC",
          "type": "type"
        },
        "index": {
          "description": "type abbrevation for IPC handle quadruple",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "YicesIPC",
          "package": "yices",
          "partial": "Yices IPC",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#t:YicesIPC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Pipe",
          "name": "InCon",
          "package": "yices",
          "signature": "InCon [String]",
          "source": "src/Math-SMT-Yices-Pipe.html#ResY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "InCon",
          "normalized": "InCon[String]",
          "package": "yices",
          "partial": "In Con",
          "signature": "InCon[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:InCon"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Pipe",
          "name": "Sat",
          "package": "yices",
          "signature": "Sat [ExpY]",
          "source": "src/Math-SMT-Yices-Pipe.html#ResY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "Sat",
          "normalized": "Sat[ExpY]",
          "package": "yices",
          "partial": "Sat",
          "signature": "Sat[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:Sat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Pipe",
          "name": "UnSat",
          "package": "yices",
          "signature": "UnSat [Integer]",
          "source": "src/Math-SMT-Yices-Pipe.html#ResY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "UnSat",
          "normalized": "UnSat[Integer]",
          "package": "yices",
          "partial": "Un Sat",
          "signature": "UnSat[Integer]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:UnSat"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Pipe",
          "name": "Unknown",
          "package": "yices",
          "signature": "Unknown [ExpY]",
          "source": "src/Math-SMT-Yices-Pipe.html#ResY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "Unknown",
          "normalized": "Unknown[ExpY]",
          "package": "yices",
          "partial": "Unknown",
          "signature": "Unknown[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:Unknown"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend check command and reads the result\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "checkY",
          "package": "yices",
          "signature": "YicesIPC -\u003e IO ResY",
          "source": "src/Math-SMT-Yices-Pipe.html#checkY",
          "type": "function"
        },
        "index": {
          "description": "send check command and reads the result",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "checkY",
          "normalized": "YicesIPC-\u003eIO ResY",
          "package": "yices",
          "signature": "YicesIPC-\u003eIO ResY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:checkY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart yices on a given path with given options.\n The first argumnet yPath is the path binary file of yices\n (e.g. \u003cem\u003ehome\u003c/em\u003ekyagrd\u003cem\u003eyices-1.0.21\u003c/em\u003ebin/yices).\n By default -i and -e options are already present, and\n yOpts argument appens more options\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "createYicesPipe",
          "package": "yices",
          "signature": "FilePath -\u003e [String] -\u003e IO YicesIPC",
          "source": "src/Math-SMT-Yices-Pipe.html#createYicesPipe",
          "type": "function"
        },
        "index": {
          "description": "Start yices on given path with given options The first argumnet yPath is the path binary file of yices e.g home kyagrd yices-1.0.21 bin yices By default and options are already present and yOpts argument appens more options",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "createYicesPipe",
          "normalized": "FilePath-\u003e[String]-\u003eIO YicesIPC",
          "package": "yices",
          "partial": "Yices Pipe",
          "signature": "FilePath-\u003e[String]-\u003eIO YicesIPC",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:createYicesPipe"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend exit command and flush\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "exitY",
          "package": "yices",
          "signature": "YicesIPC -\u003e IO ()",
          "source": "src/Math-SMT-Yices-Pipe.html#exitY",
          "type": "function"
        },
        "index": {
          "description": "send exit command and flush",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "exitY",
          "normalized": "YicesIPC-\u003eIO()",
          "package": "yices",
          "signature": "YicesIPC-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:exitY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eflush the input pipe to yices (needed after actions like runCmdsY')\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "flushY",
          "package": "yices",
          "signature": "YicesIPC -\u003e IO ()",
          "source": "src/Math-SMT-Yices-Pipe.html#flushY",
          "type": "function"
        },
        "index": {
          "description": "flush the input pipe to yices needed after actions like runCmdsY",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "flushY",
          "normalized": "YicesIPC-\u003eIO()",
          "package": "yices",
          "signature": "YicesIPC-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:flushY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esends a bunch of commands followed by a check command and reads the resulting model.\n   This function should be the preferred option when large expressions are involved.\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "quickCheckY",
          "package": "yices",
          "signature": "String -\u003e [String] -\u003e [CmdY] -\u003e IO ResY",
          "source": "src/Math-SMT-Yices-Pipe.html#quickCheckY",
          "type": "function"
        },
        "index": {
          "description": "sends bunch of commands followed by check command and reads the resulting model This function should be the preferred option when large expressions are involved",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "quickCheckY",
          "normalized": "String-\u003e[String]-\u003e[CmdY]-\u003eIO ResY",
          "package": "yices",
          "partial": "Check",
          "signature": "String-\u003e[String]-\u003e[CmdY]-\u003eIO ResY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:quickCheckY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esends a bunch of commands and reads the result.\n   This function is similar to \u003ccode\u003e\u003ca\u003equickCheckY\u003c/a\u003e\u003c/code\u003e but does not append a check command.\n   It can be useful if you intend to \n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "quickCheckY'",
          "package": "yices",
          "signature": "String -\u003e [String] -\u003e [CmdY] -\u003e IO ResY",
          "source": "src/Math-SMT-Yices-Pipe.html#quickCheckY%27",
          "type": "function"
        },
        "index": {
          "description": "sends bunch of commands and reads the result This function is similar to quickCheckY but does not append check command It can be useful if you intend to",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "quickCheckY'",
          "normalized": "String-\u003e[String]-\u003e[CmdY]-\u003eIO ResY",
          "package": "yices",
          "partial": "Check Y'",
          "signature": "String-\u003e[String]-\u003e[CmdY]-\u003eIO ResY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:quickCheckY-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend yices commands and flush\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "runCmdsY",
          "package": "yices",
          "signature": "YicesIPC -\u003e [CmdY] -\u003e IO ()",
          "source": "src/Math-SMT-Yices-Pipe.html#runCmdsY",
          "type": "function"
        },
        "index": {
          "description": "send yices commands and flush",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "runCmdsY",
          "normalized": "YicesIPC-\u003e[CmdY]-\u003eIO()",
          "package": "yices",
          "partial": "Cmds",
          "signature": "YicesIPC-\u003e[CmdY]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:runCmdsY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003esend yices commands without flushing\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Pipe",
          "name": "runCmdsY'",
          "package": "yices",
          "signature": "YicesIPC -\u003e [CmdY] -\u003e IO ()",
          "source": "src/Math-SMT-Yices-Pipe.html#runCmdsY%27",
          "type": "function"
        },
        "index": {
          "description": "send yices commands without flushing",
          "hierarchy": "Math SMT Yices Pipe",
          "module": "Math.SMT.Yices.Pipe",
          "name": "runCmdsY'",
          "normalized": "YicesIPC-\u003e[CmdY]-\u003eIO()",
          "package": "yices",
          "partial": "Cmds Y'",
          "signature": "YicesIPC-\u003e[CmdY]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Pipe.html#v:runCmdsY-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eHaskell data type definition for the yices syntax.  Yet incomplete since\n   it does not include bit vectors.\n   See \u003ca\u003ehttp://yices.csl.sri.com/language.shtml\u003c/a\u003e for details.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Math.SMT.Yices.Syntax",
          "name": "Syntax",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Syntax.html",
          "type": "module"
        },
        "index": {
          "description": "Haskell data type definition for the yices syntax Yet incomplete since it does not include bit vectors See http yices.csl.sri.com language.shtml for details",
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "Syntax",
          "package": "yices",
          "partial": "Syntax",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyices declarations and commands\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Syntax",
          "name": "CmdY",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "data"
        },
        "index": {
          "description": "yices declarations and commands",
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "CmdY",
          "package": "yices",
          "partial": "Cmd",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#t:CmdY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyices expressions\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ExpY",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "data"
        },
        "index": {
          "description": "yices expressions",
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ExpY",
          "package": "yices",
          "partial": "Exp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#t:ExpY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eyices types\n\u003c/p\u003e",
          "module": "Math.SMT.Yices.Syntax",
          "name": "TypY",
          "package": "yices",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "data"
        },
        "index": {
          "description": "yices types",
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "TypY",
          "package": "yices",
          "partial": "Typ",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#t:TypY"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":*:",
          "package": "yices",
          "signature": "ExpY :*: ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":*:",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-42-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":+:",
          "package": "yices",
          "signature": "ExpY :+: ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":+:",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-43-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":-:",
          "package": "yices",
          "signature": "ExpY :-: ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":-:",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-45-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":/=",
          "package": "yices",
          "signature": "ExpY :/= ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":/=",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-47--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":/:",
          "package": "yices",
          "signature": "ExpY :/: ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":/:",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-47-:"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003c",
          "package": "yices",
          "signature": "ExpY :\u003c ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003c",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-60-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003c=",
          "package": "yices",
          "signature": "ExpY :\u003c= ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003c=",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-60--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":=",
          "package": "yices",
          "signature": "ExpY := ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":=",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":=\u003e",
          "package": "yices",
          "signature": "ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":=\u003e",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-61--62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003e",
          "package": "yices",
          "signature": "ExpY :\u003e ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003e",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-62-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003e=",
          "package": "yices",
          "signature": "ExpY :\u003e= ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": ":\u003e=",
          "package": "yices",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v::-62--61-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "AND",
          "package": "yices",
          "signature": "AND [ExpY]",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "AND",
          "normalized": "AND[ExpY]",
          "package": "yices",
          "partial": "AND",
          "signature": "AND[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:AND"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "APP",
          "package": "yices",
          "signature": "APP ExpY [ExpY]",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "APP",
          "normalized": "APP ExpY[ExpY]",
          "package": "yices",
          "partial": "APP",
          "signature": "APP ExpY[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:APP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "ARR",
          "package": "yices",
          "signature": "ARR [TypY]",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ARR",
          "normalized": "ARR[TypY]",
          "package": "yices",
          "partial": "ARR",
          "signature": "ARR[TypY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:ARR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "ASSERT",
          "package": "yices",
          "signature": "ASSERT ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ASSERT",
          "package": "yices",
          "partial": "ASSERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:ASSERT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "ASSERT_P",
          "package": "yices",
          "signature": "ASSERT_P ExpY (Maybe Integer)",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ASSERT_P",
          "package": "yices",
          "partial": "ASSERT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:ASSERT_P"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "CHECK",
          "package": "yices",
          "signature": "CHECK",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "CHECK",
          "package": "yices",
          "partial": "CHECK",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:CHECK"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DATATYPE",
          "package": "yices",
          "signature": "DATATYPE [(String, [(String, TypY)])]",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DATATYPE",
          "normalized": "DATATYPE[(String,[(String,TypY)])]",
          "package": "yices",
          "partial": "DATATYPE",
          "signature": "DATATYPE[(String,[(String,TypY)])]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DATATYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEFINE",
          "package": "yices",
          "signature": "DEFINE (String, TypY) (Maybe ExpY)",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEFINE",
          "normalized": "DEFINE(String,TypY)(Maybe ExpY)",
          "package": "yices",
          "partial": "DEFINE",
          "signature": "DEFINE(String,TypY)(Maybe ExpY)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DEFINE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEFTYP",
          "package": "yices",
          "signature": "DEFTYP String (Maybe TypY)",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEFTYP",
          "package": "yices",
          "partial": "DEFTYP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DEFTYP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEP",
          "package": "yices",
          "signature": "DEP (String, TypY)",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DEP",
          "normalized": "DEP(String,TypY)",
          "package": "yices",
          "partial": "DEP",
          "signature": "DEP(String,TypY)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DEP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DIV",
          "package": "yices",
          "signature": "DIV ExpY ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DIV",
          "package": "yices",
          "partial": "DIV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DIV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "DUMP",
          "package": "yices",
          "signature": "DUMP",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "DUMP",
          "package": "yices",
          "partial": "DUMP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:DUMP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "ECHO",
          "package": "yices",
          "signature": "ECHO String",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ECHO",
          "package": "yices",
          "partial": "ECHO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:ECHO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "EXISTS",
          "package": "yices",
          "signature": "EXISTS [(String, TypY)] ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "EXISTS",
          "normalized": "EXISTS[(String,TypY)]ExpY",
          "package": "yices",
          "partial": "EXISTS",
          "signature": "EXISTS[(String,TypY)]ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:EXISTS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "EXIT",
          "package": "yices",
          "signature": "EXIT",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "EXIT",
          "package": "yices",
          "partial": "EXIT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:EXIT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "FORALL",
          "package": "yices",
          "signature": "FORALL [(String, TypY)] ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "FORALL",
          "normalized": "FORALL[(String,TypY)]ExpY",
          "package": "yices",
          "partial": "FORALL",
          "signature": "FORALL[(String,TypY)]ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:FORALL"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "IF",
          "package": "yices",
          "signature": "IF ExpY ExpY ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "IF",
          "package": "yices",
          "partial": "IF",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:IF"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "INCLUDE",
          "package": "yices",
          "signature": "INCLUDE String",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "INCLUDE",
          "package": "yices",
          "partial": "INCLUDE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:INCLUDE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "ITE",
          "package": "yices",
          "signature": "ITE ExpY ExpY ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "ITE",
          "package": "yices",
          "partial": "ITE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:ITE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "LAMBDA",
          "package": "yices",
          "signature": "LAMBDA [(String, TypY)] ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "LAMBDA",
          "normalized": "LAMBDA[(String,TypY)]ExpY",
          "package": "yices",
          "partial": "LAMBDA",
          "signature": "LAMBDA[(String,TypY)]ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:LAMBDA"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "LET",
          "package": "yices",
          "signature": "LET [((String, Maybe TypY), ExpY)] ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "LET",
          "normalized": "LET[((String,Maybe TypY),ExpY)]ExpY",
          "package": "yices",
          "partial": "LET",
          "signature": "LET[((String,Maybe TypY),ExpY)]ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:LET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitB",
          "package": "yices",
          "signature": "LitB Bool",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitB",
          "package": "yices",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:LitB"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitI",
          "package": "yices",
          "signature": "LitI Integer",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitI",
          "package": "yices",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:LitI"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitR",
          "package": "yices",
          "signature": "LitR Rational",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "LitR",
          "package": "yices",
          "partial": "Lit",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:LitR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "MAXSAT",
          "package": "yices",
          "signature": "MAXSAT",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "MAXSAT",
          "package": "yices",
          "partial": "MAXSAT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:MAXSAT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "MKREC",
          "package": "yices",
          "signature": "MKREC [(String, ExpY)]",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "MKREC",
          "normalized": "MKREC[(String,ExpY)]",
          "package": "yices",
          "partial": "MKREC",
          "signature": "MKREC[(String,ExpY)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:MKREC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "MKTUP",
          "package": "yices",
          "signature": "MKTUP [ExpY]",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "MKTUP",
          "normalized": "MKTUP[ExpY]",
          "package": "yices",
          "partial": "MKTUP",
          "signature": "MKTUP[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:MKTUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "MOD",
          "package": "yices",
          "signature": "MOD ExpY ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "MOD",
          "package": "yices",
          "partial": "MOD",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:MOD"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "NOT",
          "package": "yices",
          "signature": "NOT ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "NOT",
          "package": "yices",
          "partial": "NOT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:NOT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "OR",
          "package": "yices",
          "signature": "OR [ExpY]",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "OR",
          "normalized": "OR[ExpY]",
          "package": "yices",
          "partial": "OR",
          "signature": "OR[ExpY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:OR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "POP",
          "package": "yices",
          "signature": "POP",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "POP",
          "package": "yices",
          "partial": "POP",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:POP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "PUSH",
          "package": "yices",
          "signature": "PUSH",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "PUSH",
          "package": "yices",
          "partial": "PUSH",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:PUSH"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "REC",
          "package": "yices",
          "signature": "REC [(String, TypY)]",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "REC",
          "normalized": "REC[(String,TypY)]",
          "package": "yices",
          "partial": "REC",
          "signature": "REC[(String,TypY)]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:REC"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "RESET",
          "package": "yices",
          "signature": "RESET",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "RESET",
          "package": "yices",
          "partial": "RESET",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:RESET"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "RETRACT",
          "package": "yices",
          "signature": "RETRACT Integer",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "RETRACT",
          "package": "yices",
          "partial": "RETRACT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:RETRACT"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SCALAR",
          "package": "yices",
          "signature": "SCALAR [String]",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SCALAR",
          "normalized": "SCALAR[String]",
          "package": "yices",
          "partial": "SCALAR",
          "signature": "SCALAR[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SCALAR"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SELECT_R",
          "package": "yices",
          "signature": "SELECT_R ExpY String",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SELECT_R",
          "package": "yices",
          "partial": "SELECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SELECT_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SELECT_T",
          "package": "yices",
          "signature": "SELECT_T ExpY Integer",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SELECT_T",
          "package": "yices",
          "partial": "SELECT",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SELECT_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETAO",
          "package": "yices",
          "signature": "SETAO Bool",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETAO",
          "package": "yices",
          "partial": "SETAO",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SETAO"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETE",
          "package": "yices",
          "signature": "SETE Bool",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETE",
          "package": "yices",
          "partial": "SETE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SETE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETV",
          "package": "yices",
          "signature": "SETV Integer",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SETV",
          "package": "yices",
          "partial": "SETV",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SETV"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "STATUS",
          "package": "yices",
          "signature": "STATUS",
          "source": "src/Math-SMT-Yices-Syntax.html#CmdY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "STATUS",
          "package": "yices",
          "partial": "STATUS",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:STATUS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SUBRANGE",
          "package": "yices",
          "signature": "SUBRANGE ExpY ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SUBRANGE",
          "package": "yices",
          "partial": "SUBRANGE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SUBRANGE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "SUBTYPE",
          "package": "yices",
          "signature": "SUBTYPE (String, TypY) ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "SUBTYPE",
          "normalized": "SUBTYPE(String,TypY)ExpY",
          "package": "yices",
          "partial": "SUBTYPE",
          "signature": "SUBTYPE(String,TypY)ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:SUBTYPE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "TUP",
          "package": "yices",
          "signature": "TUP [TypY]",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "TUP",
          "normalized": "TUP[TypY]",
          "package": "yices",
          "partial": "TUP",
          "signature": "TUP[TypY]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:TUP"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_F",
          "package": "yices",
          "signature": "UPDATE_F ExpY [ExpY] ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_F",
          "normalized": "UPDATE_F ExpY[ExpY]ExpY",
          "package": "yices",
          "partial": "UPDATE",
          "signature": "UPDATE_F ExpY[ExpY]ExpY",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:UPDATE_F"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_R",
          "package": "yices",
          "signature": "UPDATE_R ExpY String ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_R",
          "package": "yices",
          "partial": "UPDATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:UPDATE_R"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_T",
          "package": "yices",
          "signature": "UPDATE_T ExpY Integer ExpY",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "UPDATE_T",
          "package": "yices",
          "partial": "UPDATE",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:UPDATE_T"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "VarE",
          "package": "yices",
          "signature": "VarE String",
          "source": "src/Math-SMT-Yices-Syntax.html#ExpY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "VarE",
          "package": "yices",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:VarE"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Math.SMT.Yices.Syntax",
          "name": "VarT",
          "package": "yices",
          "signature": "VarT String",
          "source": "src/Math-SMT-Yices-Syntax.html#TypY",
          "type": "function"
        },
        "index": {
          "hierarchy": "Math SMT Yices Syntax",
          "module": "Math.SMT.Yices.Syntax",
          "name": "VarT",
          "package": "yices",
          "partial": "Var",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/yices/docs/Math-SMT-Yices-Syntax.html#v:VarT"
      }
    }
  ]
]