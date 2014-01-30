[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "module",
        "fct-source": "src/Happstack-UrlDisp.html",
        "fct-type": "module",
        "title": "UrlDisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "UrlDisp",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#t:UrlDisp",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "newtype",
        "fct-source": "src/Happstack-UrlDisp.html#UrlDisp",
        "fct-type": "newtype",
        "title": "UrlDisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "UrlDisp",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#t:UrlS",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "data",
        "fct-source": "src/Happstack-UrlDisp.html#UrlS",
        "fct-type": "data",
        "title": "UrlS"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "UrlS",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--47-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that filters on and consumes the next element of the url\n path.\n \u003ccode\u003e h |/ \"dir\" |/ \"subdir\" \u003c/code\u003e will match \"/dir/subdir\".\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e String -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#%7C%2F",
        "fct-type": "function",
        "title": "(|/)"
      },
      "index": {
        "description": "Combinator that filters on and consumes the next element of the url path dir subdir will match dir subdir Consumtion of the path element backtracks on failure",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|/) |/",
        "normalized": "a b-\u003eString-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--47--47-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that filters on the request method.\n \u003ccode\u003e h |// \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e String -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#%7C%2F%2F",
        "fct-type": "function",
        "title": "(|//)"
      },
      "index": {
        "description": "Combinator that filters on the request method GET will match requests made using get",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|//) |//",
        "normalized": "a b-\u003eString-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--63-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that filters on any parameter (via put or get).\n \u003ccode\u003e h |? (\"cmd\",\"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e (String, String) -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#%7C%3F",
        "fct-type": "function",
        "title": "(|?)"
      },
      "index": {
        "description": "Combinator that filters on any parameter via put or get cmd foo will match on cmd foo",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|?) |?",
        "normalized": "a b-\u003e(String,String)-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003e(String,String)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--92-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that matches and consumes the next element of the path\n if path element can be successfully read as the proper type and passed\n to the following lambda expression.\n \u003ccode\u003e h |\\ \\x -\u003e output (x + (1.5::Float)) \u003c/code\u003e will match on \"/12\"\n and output \"13.5\". Consumption of the path element backtracks\n on failure.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e (x -\u003e m b) -\u003e m b",
        "fct-source": "src/Happstack-UrlDisp.html#%7C%5C",
        "fct-type": "function",
        "title": "(|\\)"
      },
      "index": {
        "description": "Combinator that matches and consumes the next element of the path if path element can be successfully read as the proper type and passed to the following lambda expression output Float will match on and output Consumption of the path element backtracks on failure",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|\\) |\\",
        "normalized": "a b-\u003e(c-\u003ea d)-\u003ea d",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003e(x-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124--92--92-",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h |\\\\ \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\"\n and output \"1299\"\n Consumtion of the path element backtracks on failure.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e (String -\u003e m b) -\u003e m b",
        "fct-source": "src/Happstack-UrlDisp.html#%7C%5C%5C",
        "fct-type": "function",
        "title": "(|\\\\)"
      },
      "index": {
        "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression output will match on and output Consumtion of the path element backtracks on failure",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|\\\\) |\\\\",
        "normalized": "a b-\u003e(String-\u003ea c)-\u003ea c",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003e(String-\u003em b)-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:-124-.",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that only matches if the remaining path is empty.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a -\u003e m b -\u003e m b",
        "fct-source": "src/Happstack-UrlDisp.html#%7C.",
        "fct-type": "function",
        "title": "(|.)"
      },
      "index": {
        "description": "Combinator that only matches if the remaining path is empty",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "(|.) |.",
        "normalized": "a b-\u003ea c-\u003ea c",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m a-\u003em b-\u003em b"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:UrlDisp",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "UrlDisp",
        "fct-source": "src/Happstack-UrlDisp.html#UrlDisp",
        "fct-type": "function",
        "title": "UrlDisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "UrlDisp",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url Disp",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:UrlS",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "UrlS",
        "fct-source": "src/Happstack-UrlDisp.html#UrlS",
        "fct-type": "function",
        "title": "UrlS"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "UrlS",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:endPath",
      "description": {
        "fct-descr": "\u003cp\u003eOnly matches if the remaining path is empty.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m ()",
        "fct-source": "src/Happstack-UrlDisp.html#endPath",
        "fct-type": "function",
        "title": "endPath"
      },
      "index": {
        "description": "Only matches if the remaining path is empty",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "endPath",
        "normalized": "a()",
        "package": "urldisp-happstack",
        "partial": "Path",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:getInput",
      "description": {
        "fct-descr": "\u003cp\u003eReturns a string representation of a parameter, if available. Otherwise fails.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "String -\u003e f String",
        "fct-source": "src/Happstack-UrlDisp.html#getInput",
        "fct-type": "function",
        "title": "getInput"
      },
      "index": {
        "description": "Returns string representation of parameter if available Otherwise fails",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "getInput",
        "normalized": "String-\u003ea String",
        "package": "urldisp-happstack",
        "partial": "Input",
        "signature": "String-\u003ef String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:getInputMay",
      "description": {
        "fct-descr": "\u003cp\u003eReturns Just a string representation of a parameter, or Nothing.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "String -\u003e f (Maybe String)",
        "fct-source": "src/Happstack-UrlDisp.html#getInputMay",
        "fct-type": "function",
        "title": "getInputMay"
      },
      "index": {
        "description": "Returns Just string representation of parameter or Nothing",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "getInputMay",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "urldisp-happstack",
        "partial": "Input May",
        "signature": "String-\u003ef(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:h",
      "description": {
        "fct-descr": "\u003cp\u003eA null CGI action, used to begin a string of path combinators\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m ()",
        "fct-source": "src/Happstack-UrlDisp.html#h",
        "fct-type": "function",
        "title": "h"
      },
      "index": {
        "description": "null CGI action used to begin string of path combinators",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "h",
        "normalized": "a()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "m()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:meth",
      "description": {
        "fct-descr": "\u003cp\u003eFilters on the request method.\n \u003ccode\u003e meth \"GET\" \u003c/code\u003e will match requests made using get.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#meth",
        "fct-type": "function",
        "title": "meth"
      },
      "index": {
        "description": "Filters on the request method meth GET will match requests made using get",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "meth",
        "normalized": "String-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:pPath",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "[String]",
        "fct-source": "src/Happstack-UrlDisp.html#UrlS",
        "fct-type": "function",
        "title": "pPath"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "pPath",
        "normalized": "[String]",
        "package": "urldisp-happstack",
        "partial": "Path",
        "signature": "[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:param",
      "description": {
        "fct-descr": "\u003cp\u003eFilters on any parameter (via put or get).\n \u003ccode\u003e param (\"cmd\", \"foo\") \u003c/code\u003e will match on ?cmd=foo\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "(String, String) -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#param",
        "fct-type": "function",
        "title": "param"
      },
      "index": {
        "description": "Filters on any parameter via put or get param cmd foo will match on cmd foo",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "param",
        "normalized": "(String,String)-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "(String,String)-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:path",
      "description": {
        "fct-descr": "\u003cp\u003eFilters on and consumes the next element of the url path.\n \u003ccode\u003e path \"str\" \u003c/code\u003e will match requests whose next path element is \"str\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Happstack-UrlDisp.html#path",
        "fct-type": "function",
        "title": "path"
      },
      "index": {
        "description": "Filters on and consumes the next element of the url path path str will match requests whose next path element is str Consumption of the path element backtracks on failure",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "path",
        "normalized": "String-\u003ea()",
        "package": "urldisp-happstack",
        "partial": "",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:readPath",
      "description": {
        "fct-descr": "\u003cp\u003eMatches and consumes the next element of the path if\n that element can be successfully read as the proper type. The parsed\n element is returned.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m a",
        "fct-source": "src/Happstack-UrlDisp.html#readPath",
        "fct-type": "function",
        "title": "readPath"
      },
      "index": {
        "description": "Matches and consumes the next element of the path if that element can be successfully read as the proper type The parsed element is returned",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "readPath",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:runUrlDisp",
      "description": {
        "fct-descr": "\u003cp\u003eUnpacks a UrlDisp into a plain old ServerMonad. Used as a top-level wrapper.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "UrlDisp m a -\u003e m a",
        "fct-source": "src/Happstack-UrlDisp.html#runUrlDisp",
        "fct-type": "function",
        "title": "runUrlDisp"
      },
      "index": {
        "description": "Unpacks UrlDisp into plain old ServerMonad Used as top-level wrapper",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "runUrlDisp",
        "normalized": "UrlDisp a b-\u003ea b",
        "package": "urldisp-happstack",
        "partial": "Url Disp",
        "signature": "UrlDisp m a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:spCatch",
      "description": {
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "ServerPartT IO a -\u003e (e -\u003e ServerPartT IO a) -\u003e ServerPartT IO a",
        "fct-source": "src/Happstack-UrlDisp.html#spCatch",
        "fct-type": "function",
        "title": "spCatch"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "spCatch",
        "normalized": "ServerPartT IO a-\u003e(b-\u003eServerPartT IO a)-\u003eServerPartT IO a",
        "package": "urldisp-happstack",
        "partial": "Catch",
        "signature": "ServerPartT IO a-\u003e(e-\u003eServerPartT IO a)-\u003eServerPartT IO a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:takePath",
      "description": {
        "fct-descr": "\u003cp\u003eCombinator that consumes the next element of the path and passes it\n as an unparsed string into the following lambda expression.\n \u003ccode\u003e h \u003ccode\u003e\u003ca\u003etakePath\u003c/a\u003e\u003c/code\u003e \\x -\u003e output (x++\"99\") \u003c/code\u003e will match on \"/12\" and\n output \"1299\"\n Consumption of the path element backtracks on failure.\n\u003c/p\u003e",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "m String",
        "fct-source": "src/Happstack-UrlDisp.html#takePath",
        "fct-type": "function",
        "title": "takePath"
      },
      "index": {
        "description": "Combinator that consumes the next element of the path and passes it as an unparsed string into the following lambda expression takePath output will match on and output Consumption of the path element backtracks on failure",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "takePath",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/urldisp-happstack/docs/Happstack-UrlDisp.html#v:unUrlDisp",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Happstack.UrlDisp",
        "fct-package": "urldisp-happstack",
        "fct-signature": "StateT UrlS m a",
        "fct-source": "src/Happstack-UrlDisp.html#UrlDisp",
        "fct-type": "function",
        "title": "unUrlDisp"
      },
      "index": {
        "description": "",
        "hierarchy": "Happstack UrlDisp",
        "module": "Happstack.UrlDisp",
        "name": "unUrlDisp",
        "normalized": "",
        "package": "urldisp-happstack",
        "partial": "Url Disp",
        "signature": ""
      }
    }
  }
]