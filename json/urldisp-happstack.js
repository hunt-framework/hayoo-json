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
        "word": "urldisp-happstack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "source": "src/Happstack-UrlDisp.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "partial": "Url Disp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "source": "src/Happstack-UrlDisp.html#UrlDisp",
          "type": "newtype"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "partial": "Url Disp",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#t:UrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "UrlS",
          "package": "urldisp-happstack",
          "source": "src/Happstack-UrlDisp.html#UrlS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "UrlS",
          "package": "urldisp-happstack",
          "partial": "Url",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#t:UrlS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on and consumes the next element of the url\n path.\n \u003ccode\u003e h |/ \"dir\" |/ \"subdir\" \u003c/code\u003e will match \"/dir/subdir\".\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|/)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e String -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#%7C%2F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on and consumes the next element of the url path dir subdir will match dir subdir Consumtion of the path element backtracks on failure",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|/) |/",
          "normalized": "a b-\u003eString-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "m a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on the request method.\n \u003ccode\u003e h |// \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|//)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e String -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#%7C%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on the request method GET will match requests made using get",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|//) |//",
          "normalized": "a b-\u003eString-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "m a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on any parameter (via put or get).\n \u003ccode\u003e h |? (\"cmd\",\"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|?)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e (String, String) -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#%7C%3F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on any parameter via put or get cmd foo will match on cmd foo",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|?) |?",
          "normalized": "a b-\u003e(String,String)-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "m a-\u003e(String,String)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that matches and consumes the next element of the path\n if path element can be successfully read as the proper type and passed\n to the following lambda expression.\n \u003ccode\u003e h |\\ \\x -\u003e output (x + (1.5::Float)) \u003c/code\u003e will match on \"/12\"\n and output \"13.5\". Consumption of the path element backtracks\n on failure.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|\\)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e (x -\u003e m b) -\u003e m b",
          "source": "src/Happstack-UrlDisp.html#%7C%5C",
          "type": "function"
        },
        "index": {
          "description": "Combinator that matches and consumes the next element of the path if path element can be successfully read as the proper type and passed to the following lambda expression output Float will match on and output Consumption of the path element backtracks on failure",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|\\) |\\",
          "normalized": "a b-\u003e(c-\u003ea d)-\u003ea d",
          "package": "urldisp-happstack",
          "signature": "m a-\u003e(x-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h |\\\\ \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\"\n and output \"1299\"\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|\\\\)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e (String -\u003e m b) -\u003e m b",
          "source": "src/Happstack-UrlDisp.html#%7C%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression output will match on and output Consumtion of the path element backtracks on failure",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|\\\\) |\\\\",
          "normalized": "a b-\u003e(String-\u003ea c)-\u003ea c",
          "package": "urldisp-happstack",
          "signature": "m a-\u003e(String-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that only matches if the remaining path is empty.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "(|.)",
          "package": "urldisp-happstack",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Happstack-UrlDisp.html#%7C.",
          "type": "function"
        },
        "index": {
          "description": "Combinator that only matches if the remaining path is empty",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "(|.) |.",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "urldisp-happstack",
          "signature": "m a-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "signature": "UrlDisp",
          "source": "src/Happstack-UrlDisp.html#UrlDisp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "UrlDisp",
          "package": "urldisp-happstack",
          "partial": "Url Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:UrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "UrlS",
          "package": "urldisp-happstack",
          "signature": "UrlS",
          "source": "src/Happstack-UrlDisp.html#UrlS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "UrlS",
          "package": "urldisp-happstack",
          "partial": "Url",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:UrlS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly matches if the remaining path is empty.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "endPath",
          "package": "urldisp-happstack",
          "signature": "m ()",
          "source": "src/Happstack-UrlDisp.html#endPath",
          "type": "function"
        },
        "index": {
          "description": "Only matches if the remaining path is empty",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "endPath",
          "normalized": "a()",
          "package": "urldisp-happstack",
          "partial": "Path",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:endPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns a string representation of a parameter, if available. Otherwise fails.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "getInput",
          "package": "urldisp-happstack",
          "signature": "String -\u003e f String",
          "source": "src/Happstack-UrlDisp.html#getInput",
          "type": "function"
        },
        "index": {
          "description": "Returns string representation of parameter if available Otherwise fails",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "getInput",
          "normalized": "String-\u003ea String",
          "package": "urldisp-happstack",
          "partial": "Input",
          "signature": "String-\u003ef String",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:getInput"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eReturns Just a string representation of a parameter, or Nothing.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "getInputMay",
          "package": "urldisp-happstack",
          "signature": "String -\u003e f (Maybe String)",
          "source": "src/Happstack-UrlDisp.html#getInputMay",
          "type": "function"
        },
        "index": {
          "description": "Returns Just string representation of parameter or Nothing",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "getInputMay",
          "normalized": "String-\u003ea(Maybe String)",
          "package": "urldisp-happstack",
          "partial": "Input May",
          "signature": "String-\u003ef(Maybe String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:getInputMay"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA null CGI action, used to begin a string of path combinators\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "h",
          "package": "urldisp-happstack",
          "signature": "m ()",
          "source": "src/Happstack-UrlDisp.html#h",
          "type": "function"
        },
        "index": {
          "description": "null CGI action used to begin string of path combinators",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "h",
          "normalized": "a()",
          "package": "urldisp-happstack",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:h"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on the request method.\n \u003ccode\u003e meth \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "meth",
          "package": "urldisp-happstack",
          "signature": "String -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#meth",
          "type": "function"
        },
        "index": {
          "description": "Filters on the request method meth GET will match requests made using get",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "meth",
          "normalized": "String-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:meth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "pPath",
          "package": "urldisp-happstack",
          "signature": "[String]",
          "source": "src/Happstack-UrlDisp.html#UrlS",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "pPath",
          "normalized": "[String]",
          "package": "urldisp-happstack",
          "partial": "Path",
          "signature": "[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:pPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on any parameter (via put or get).\n \u003ccode\u003e param (\"cmd\", \"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "param",
          "package": "urldisp-happstack",
          "signature": "(String, String) -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#param",
          "type": "function"
        },
        "index": {
          "description": "Filters on any parameter via put or get param cmd foo will match on cmd foo",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "param",
          "normalized": "(String,String)-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "(String,String)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on and consumes the next element of the url path.\n \u003ccode\u003e path \"str\" \u003c/code\u003e will match requests whose next path element is \"str\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "path",
          "package": "urldisp-happstack",
          "signature": "String -\u003e m ()",
          "source": "src/Happstack-UrlDisp.html#path",
          "type": "function"
        },
        "index": {
          "description": "Filters on and consumes the next element of the url path path str will match requests whose next path element is str Consumption of the path element backtracks on failure",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "path",
          "normalized": "String-\u003ea()",
          "package": "urldisp-happstack",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches and consumes the next element of the path if\n that element can be successfully read as the proper type. The parsed\n element is returned.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "readPath",
          "package": "urldisp-happstack",
          "signature": "m a",
          "source": "src/Happstack-UrlDisp.html#readPath",
          "type": "function"
        },
        "index": {
          "description": "Matches and consumes the next element of the path if that element can be successfully read as the proper type The parsed element is returned",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "readPath",
          "package": "urldisp-happstack",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:readPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eUnpacks a UrlDisp into a plain old ServerMonad. Used as a top-level wrapper.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "runUrlDisp",
          "package": "urldisp-happstack",
          "signature": "UrlDisp m a -\u003e m a",
          "source": "src/Happstack-UrlDisp.html#runUrlDisp",
          "type": "function"
        },
        "index": {
          "description": "Unpacks UrlDisp into plain old ServerMonad Used as top-level wrapper",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "runUrlDisp",
          "normalized": "UrlDisp a b-\u003ea b",
          "package": "urldisp-happstack",
          "partial": "Url Disp",
          "signature": "UrlDisp m a-\u003em a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:runUrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "spCatch",
          "package": "urldisp-happstack",
          "signature": "ServerPartT IO a -\u003e (e -\u003e ServerPartT IO a) -\u003e ServerPartT IO a",
          "source": "src/Happstack-UrlDisp.html#spCatch",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "spCatch",
          "normalized": "ServerPartT IO a-\u003e(b-\u003eServerPartT IO a)-\u003eServerPartT IO a",
          "package": "urldisp-happstack",
          "partial": "Catch",
          "signature": "ServerPartT IO a-\u003e(e-\u003eServerPartT IO a)-\u003eServerPartT IO a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:spCatch"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h \u003ccode\u003e\u003ca\u003etakePath\u003c/a\u003e\u003c/code\u003e \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\" and\n output \"1299\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Happstack.UrlDisp",
          "name": "takePath",
          "package": "urldisp-happstack",
          "signature": "m String",
          "source": "src/Happstack-UrlDisp.html#takePath",
          "type": "function"
        },
        "index": {
          "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression takePath output will match on and output Consumption of the path element backtracks on failure",
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "takePath",
          "package": "urldisp-happstack",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:takePath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Happstack.UrlDisp",
          "name": "unUrlDisp",
          "package": "urldisp-happstack",
          "signature": "StateT UrlS m a",
          "source": "src/Happstack-UrlDisp.html#UrlDisp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Happstack UrlDisp",
          "module": "Happstack.UrlDisp",
          "name": "unUrlDisp",
          "package": "urldisp-happstack",
          "partial": "Url Disp",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:unUrlDisp"
      }
    }
  ]
]