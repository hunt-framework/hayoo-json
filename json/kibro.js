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
        "word": "kibro"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Kibro",
          "name": "Kibro",
          "package": "kibro",
          "source": "src/Kibro.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "Kibro",
          "package": "kibro",
          "partial": "Kibro",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eList of (regular expression,page action) pairs\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "PageAssign",
          "package": "kibro",
          "source": "src/Kibro.html#PageAssign",
          "type": "type"
        },
        "index": {
          "description": "List of regular expression page action pairs",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "PageAssign",
          "package": "kibro",
          "partial": "Page Assign",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#t:PageAssign"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eNice operator for removing parentheses.\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "(\u003c\u003c$)",
          "package": "kibro",
          "signature": "(Html -\u003e b) -\u003e a -\u003e b",
          "source": "src/Kibro.html#%3C%3C%24",
          "type": "function"
        },
        "index": {
          "description": "Nice operator for removing parentheses",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "(\u003c\u003c$) \u003c\u003c$",
          "normalized": "(Html-\u003ea)-\u003eb-\u003ea",
          "package": "kibro",
          "signature": "(Html-\u003eb)-\u003ea-\u003eb",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:-60--60--36-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003e\u003ca\u003ea href='x'\u003c/a\u003ey\u003ca\u003e/a\u003c/a\u003e\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "ahref",
          "package": "kibro",
          "signature": "String -\u003e a -\u003e HotLink",
          "source": "src/Kibro.html#ahref",
          "type": "function"
        },
        "index": {
          "description": "href",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "ahref",
          "normalized": "String-\u003ea-\u003eHotLink",
          "package": "kibro",
          "signature": "String-\u003ea-\u003eHotLink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:ahref"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDelete a session value\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "deleteSess",
          "package": "kibro",
          "signature": "String -\u003e Kibro v ()",
          "source": "src/Kibro.html#deleteSess",
          "type": "function"
        },
        "index": {
          "description": "Delete session value",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "deleteSess",
          "normalized": "String-\u003eKibro a()",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003eKibro v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:deleteSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Kibro",
          "name": "getInputDef",
          "package": "kibro",
          "signature": "String -\u003e String -\u003e Kibro v String",
          "source": "src/Kibro.html#getInputDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "getInputDef",
          "normalized": "String-\u003eString-\u003eKibro a String",
          "package": "kibro",
          "partial": "Input Def",
          "signature": "String-\u003eString-\u003eKibro v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:getInputDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet a session value\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "getSess",
          "package": "kibro",
          "signature": "String -\u003e Kibro v (Maybe String)",
          "source": "src/Kibro.html#getSess",
          "type": "function"
        },
        "index": {
          "description": "Get session value",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "getSess",
          "normalized": "String-\u003eKibro a(Maybe String)",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003eKibro v(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:getSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGet session value or return default value\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "getSessDef",
          "package": "kibro",
          "signature": "String -\u003e String -\u003e Kibro v String",
          "source": "src/Kibro.html#getSessDef",
          "type": "function"
        },
        "index": {
          "description": "Get session value or return default value",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "getSessDef",
          "normalized": "String-\u003eString-\u003eKibro a String",
          "package": "kibro",
          "partial": "Sess Def",
          "signature": "String-\u003eString-\u003eKibro v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:getSessDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Kibro",
          "name": "getURIMatch",
          "package": "kibro",
          "signature": "Kibro v MatchResult",
          "source": "src/Kibro.html#getURIMatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "getURIMatch",
          "package": "kibro",
          "partial": "URIMatch",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:getURIMatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Kibro",
          "name": "getValue",
          "package": "kibro",
          "signature": "Kibro v v",
          "source": "src/Kibro.html#getValue",
          "type": "function"
        },
        "index": {
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "getValue",
          "package": "kibro",
          "partial": "Value",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:getValue"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as modifySess, but with Read/Show instance values\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "modifyRSess",
          "package": "kibro",
          "signature": "String -\u003e (a -\u003e a) -\u003e Kibro v (Maybe a)",
          "source": "src/Kibro.html#modifyRSess",
          "type": "function"
        },
        "index": {
          "description": "Same as modifySess but with Read Show instance values",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "modifyRSess",
          "normalized": "String-\u003e(a-\u003ea)-\u003eKibro b(Maybe a)",
          "package": "kibro",
          "partial": "RSess",
          "signature": "String-\u003e(a-\u003ea)-\u003eKibro v(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:modifyRSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as modifySessDef, but with Read/Show instance values\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "modifyRSessDef",
          "package": "kibro",
          "signature": "String -\u003e (a -\u003e a) -\u003e a -\u003e Kibro v a",
          "source": "src/Kibro.html#modifyRSessDef",
          "type": "function"
        },
        "index": {
          "description": "Same as modifySessDef but with Read Show instance values",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "modifyRSessDef",
          "normalized": "String-\u003e(a-\u003ea)-\u003ea-\u003eKibro b a",
          "package": "kibro",
          "partial": "RSess Def",
          "signature": "String-\u003e(a-\u003ea)-\u003ea-\u003eKibro v a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:modifyRSessDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a session value, if the value does not exist, no change occurs\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "modifySess",
          "package": "kibro",
          "signature": "String -\u003e (String -\u003e String) -\u003e Kibro v (Maybe String)",
          "source": "src/Kibro.html#modifySess",
          "type": "function"
        },
        "index": {
          "description": "Modify session value if the value does not exist no change occurs",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "modifySess",
          "normalized": "String-\u003e(String-\u003eString)-\u003eKibro a(Maybe String)",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003e(String-\u003eString)-\u003eKibro v(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:modifySess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eModify a session value, if the value does not exist, the default value\n   is modified and inserted\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "modifySessDef",
          "package": "kibro",
          "signature": "String -\u003e (String -\u003e String) -\u003e String -\u003e Kibro v String",
          "source": "src/Kibro.html#modifySessDef",
          "type": "function"
        },
        "index": {
          "description": "Modify session value if the value does not exist the default value is modified and inserted",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "modifySessDef",
          "normalized": "String-\u003e(String-\u003eString)-\u003eString-\u003eKibro a String",
          "package": "kibro",
          "partial": "Sess Def",
          "signature": "String-\u003e(String-\u003eString)-\u003eString-\u003eKibro v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:modifySessDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003ePut a session value\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "putSess",
          "package": "kibro",
          "signature": "String -\u003e String -\u003e Kibro v ()",
          "source": "src/Kibro.html#putSess",
          "type": "function"
        },
        "index": {
          "description": "Put session value",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "putSess",
          "normalized": "String-\u003eString-\u003eKibro a()",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003eString-\u003eKibro v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:putSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Kibro",
          "name": "readInputDef",
          "package": "kibro",
          "signature": "String -\u003e String -\u003e Kibro v String",
          "source": "src/Kibro.html#readInputDef",
          "type": "function"
        },
        "index": {
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "readInputDef",
          "normalized": "String-\u003eString-\u003eKibro a String",
          "package": "kibro",
          "partial": "Input Def",
          "signature": "String-\u003eString-\u003eKibro v String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:readInputDef"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eRead a session value\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "readSess",
          "package": "kibro",
          "signature": "String -\u003e Kibro v (Maybe a)",
          "source": "src/Kibro.html#readSess",
          "type": "function"
        },
        "index": {
          "description": "Read session value",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "readSess",
          "normalized": "String-\u003eKibro a(Maybe b)",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003eKibro v(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:readSess"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSame as startKibro', but with value as () and uses forkIO to fork\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "startKibro",
          "package": "kibro",
          "signature": "[PageAssign ()] -\u003e IO ()",
          "source": "src/Kibro.html#startKibro",
          "type": "function"
        },
        "index": {
          "description": "Same as startKibro but with value as and uses forkIO to fork",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "startKibro",
          "normalized": "[PageAssign()]-\u003eIO()",
          "package": "kibro",
          "partial": "Kibro",
          "signature": "[PageAssign()]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:startKibro"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eStart Kibro FastCGI server\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "startKibro'",
          "package": "kibro",
          "signature": "v-\u003e (IO () -\u003e IO ThreadId)-\u003e [PageAssign v]-\u003e IO ()",
          "type": "function"
        },
        "index": {
          "description": "Start Kibro FastCGI server",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "startKibro'",
          "normalized": "a-\u003e(IO()-\u003eIO ThreadId)-\u003e[PageAssign a]-\u003eIO()",
          "package": "kibro",
          "partial": "Kibro'",
          "signature": "v-\u003e(IO()-\u003eIO ThreadId)-\u003e[PageAssign v]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:startKibro-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSimple stylesheet element\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "stylesheet",
          "package": "kibro",
          "signature": "String -\u003e Html",
          "source": "src/Kibro.html#stylesheet",
          "type": "function"
        },
        "index": {
          "description": "Simple stylesheet element",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "stylesheet",
          "normalized": "String-\u003eHtml",
          "package": "kibro",
          "signature": "String-\u003eHtml",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:stylesheet"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eShow a session value and put it\n\u003c/p\u003e",
          "module": "Kibro",
          "name": "writeSess",
          "package": "kibro",
          "signature": "String -\u003e a -\u003e Kibro v ()",
          "source": "src/Kibro.html#writeSess",
          "type": "function"
        },
        "index": {
          "description": "Show session value and put it",
          "hierarchy": "Kibro",
          "module": "Kibro",
          "name": "writeSess",
          "normalized": "String-\u003ea-\u003eKibro b()",
          "package": "kibro",
          "partial": "Sess",
          "signature": "String-\u003ea-\u003eKibro v()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/kibro/docs/Kibro.html#v:writeSess"
      }
    }
  ]
]