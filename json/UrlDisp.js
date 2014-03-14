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
        "word": "UrlDisp"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eURL dispatching (routing) library, based on Sterling Clover's HVAC.\n\u003c/p\u003e\u003c/div\u003e",
          "module": "Network.UrlDisp",
          "name": "UrlDisp",
          "package": "UrlDisp",
          "source": "src/Network-UrlDisp.html",
          "type": "module"
        },
        "index": {
          "description": "URL dispatching routing library based on Sterling Clover HVAC",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "UrlDisp",
          "package": "UrlDisp",
          "partial": "Url Disp",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.UrlDisp",
          "name": "UrlDisp",
          "package": "UrlDisp",
          "source": "src/Network-UrlDisp-Types.html#UrlDisp",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "UrlDisp",
          "package": "UrlDisp",
          "partial": "Url Disp",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#t:UrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Network.UrlDisp",
          "name": "UrlS",
          "package": "UrlDisp",
          "source": "src/Network-UrlDisp-Types.html#UrlS",
          "type": "data"
        },
        "index": {
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "UrlS",
          "package": "UrlDisp",
          "partial": "Url",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#t:UrlS"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on and consumes the next element of the url\n path.\n \u003ccode\u003e h |/ \"dir\" |/ \"subdir\" \u003c/code\u003e will match \"/dir/subdir\".\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|/)",
          "package": "UrlDisp",
          "signature": "m a -\u003e String -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#%7C%2F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on and consumes the next element of the url path dir subdir will match dir subdir Consumtion of the path element backtracks on failure",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|/) |/",
          "normalized": "a b-\u003eString-\u003ea()",
          "package": "UrlDisp",
          "signature": "m a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on the request method.\n \u003ccode\u003e h |// \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|//)",
          "package": "UrlDisp",
          "signature": "m a -\u003e String -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#%7C%2F%2F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on the request method GET will match requests made using get",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|//) |//",
          "normalized": "a b-\u003eString-\u003ea()",
          "package": "UrlDisp",
          "signature": "m a-\u003eString-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124--47--47-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that filters on any parameter (via put or get).\n \u003ccode\u003e h |? (\"cmd\",\"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|?)",
          "package": "UrlDisp",
          "signature": "m a -\u003e (String, String) -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#%7C%3F",
          "type": "function"
        },
        "index": {
          "description": "Combinator that filters on any parameter via put or get cmd foo will match on cmd foo",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|?) |?",
          "normalized": "a b-\u003e(String,String)-\u003ea()",
          "package": "UrlDisp",
          "signature": "m a-\u003e(String,String)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124--63-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that matches and consumes the next element of the path\n if path element can be successfully read as the proper type and passed\n to the following lambda expression.\n \u003ccode\u003e h |\\ \\x -\u003e output (x + (1.5::Float)) \u003c/code\u003e will match on \"/12\"\n and output \"13.5\". Consumption of the path element backtracks\n on failure.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|\\)",
          "package": "UrlDisp",
          "signature": "m a -\u003e (x -\u003e m b) -\u003e m b",
          "source": "src/Network-UrlDisp-Controller.html#%7C%5C",
          "type": "function"
        },
        "index": {
          "description": "Combinator that matches and consumes the next element of the path if path element can be successfully read as the proper type and passed to the following lambda expression output Float will match on and output Consumption of the path element backtracks on failure",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|\\) |\\",
          "normalized": "a b-\u003e(c-\u003ea d)-\u003ea d",
          "package": "UrlDisp",
          "signature": "m a-\u003e(x-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h |\\\\ \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\"\n and output \"1299\"\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|\\\\)",
          "package": "UrlDisp",
          "signature": "m a -\u003e (String -\u003e m b) -\u003e m b",
          "source": "src/Network-UrlDisp-Controller.html#%7C%5C%5C",
          "type": "function"
        },
        "index": {
          "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression output will match on and output Consumtion of the path element backtracks on failure",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|\\\\) |\\\\",
          "normalized": "a b-\u003e(String-\u003ea c)-\u003ea c",
          "package": "UrlDisp",
          "signature": "m a-\u003e(String-\u003em b)-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124--92--92-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that only matches if the remaining path is empty.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "(|.)",
          "package": "UrlDisp",
          "signature": "m a -\u003e m b -\u003e m b",
          "source": "src/Network-UrlDisp-Controller.html#%7C.",
          "type": "function"
        },
        "index": {
          "description": "Combinator that only matches if the remaining path is empty",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "(|.) |.",
          "normalized": "a b-\u003ea c-\u003ea c",
          "package": "UrlDisp",
          "signature": "m a-\u003em b-\u003em b",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:-124-."
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eOnly matches if the remaining path is empty.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "endPath",
          "package": "UrlDisp",
          "signature": "m ()",
          "source": "src/Network-UrlDisp-Controller.html#endPath",
          "type": "function"
        },
        "index": {
          "description": "Only matches if the remaining path is empty",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "endPath",
          "normalized": "a()",
          "package": "UrlDisp",
          "partial": "Path",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:endPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eThe same as runUrlDisp, but yields CGIResult. If URL dispatching\n failed, then a 404 not found error is returned.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "evalUrlDisp",
          "package": "UrlDisp",
          "signature": "UrlDisp m CGIResult -\u003e m CGIResult",
          "source": "src/Network-UrlDisp.html#evalUrlDisp",
          "type": "function"
        },
        "index": {
          "description": "The same as runUrlDisp but yields CGIResult If URL dispatching failed then not found error is returned",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "evalUrlDisp",
          "normalized": "UrlDisp a CGIResult-\u003ea CGIResult",
          "package": "UrlDisp",
          "partial": "Url Disp",
          "signature": "UrlDisp m CGIResult-\u003em CGIResult",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:evalUrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA null CGI action, used to begin a string of path combinators\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "h",
          "package": "UrlDisp",
          "signature": "m ()",
          "source": "src/Network-UrlDisp-Controller.html#h",
          "type": "function"
        },
        "index": {
          "description": "null CGI action used to begin string of path combinators",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "h",
          "normalized": "a()",
          "package": "UrlDisp",
          "signature": "m()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:h"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on the request method.\n \u003ccode\u003e meth \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "meth",
          "package": "UrlDisp",
          "signature": "String -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#meth",
          "type": "function"
        },
        "index": {
          "description": "Filters on the request method meth GET will match requests made using get",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "meth",
          "normalized": "String-\u003ea()",
          "package": "UrlDisp",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:meth"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on any parameter (via put or get).\n \u003ccode\u003e param (\"cmd\", \"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "param",
          "package": "UrlDisp",
          "signature": "(String, String) -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#param",
          "type": "function"
        },
        "index": {
          "description": "Filters on any parameter via put or get param cmd foo will match on cmd foo",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "param",
          "normalized": "(String,String)-\u003ea()",
          "package": "UrlDisp",
          "signature": "(String,String)-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:param"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eFilters on and consumes the next element of the url path.\n \u003ccode\u003e path \"str\" \u003c/code\u003e will match requests whose next path element is \"str\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "path",
          "package": "UrlDisp",
          "signature": "String -\u003e m ()",
          "source": "src/Network-UrlDisp-Controller.html#path",
          "type": "function"
        },
        "index": {
          "description": "Filters on and consumes the next element of the url path path str will match requests whose next path element is str Consumption of the path element backtracks on failure",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "path",
          "normalized": "String-\u003ea()",
          "package": "UrlDisp",
          "signature": "String-\u003em()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:path"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eMatches and consumes the next element of the path if\n that element can be successfully read as the proper type. The parsed\n element is returned.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "readPath",
          "package": "UrlDisp",
          "signature": "m a",
          "source": "src/Network-UrlDisp-Controller.html#readPath",
          "type": "function"
        },
        "index": {
          "description": "Matches and consumes the next element of the path if that element can be successfully read as the proper type The parsed element is returned",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "readPath",
          "package": "UrlDisp",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:readPath"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eGiven path and a sequence of actions chained using combinators\n defined in controller API, run them in the CGI monad.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "runUrlDisp",
          "package": "UrlDisp",
          "signature": "String-\u003e UrlDisp m a-\u003e m (Maybe a)",
          "type": "function"
        },
        "index": {
          "description": "Given path and sequence of actions chained using combinators defined in controller API run them in the CGI monad",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "runUrlDisp",
          "normalized": "String-\u003eUrlDisp a b-\u003ea(Maybe b)",
          "package": "UrlDisp",
          "partial": "Url Disp",
          "signature": "String-\u003eUrlDisp m a-\u003em(Maybe a)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:runUrlDisp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h \u003ccode\u003e\u003ca\u003etakePath\u003c/a\u003e\u003c/code\u003e \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\" and\n output \"1299\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
          "module": "Network.UrlDisp",
          "name": "takePath",
          "package": "UrlDisp",
          "signature": "m String",
          "source": "src/Network-UrlDisp-Controller.html#takePath",
          "type": "function"
        },
        "index": {
          "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression takePath output will match on and output Consumption of the path element backtracks on failure",
          "hierarchy": "Network UrlDisp",
          "module": "Network.UrlDisp",
          "name": "takePath",
          "package": "UrlDisp",
          "partial": "Path",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/UrlDisp/docs/Network-UrlDisp.html#v:takePath"
      }
    }
  ]
]