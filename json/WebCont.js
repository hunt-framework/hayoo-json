[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWebConts allow simple continuation based behavior in Happstack applications through the use of cookies\n    and an IntMap on the server mapping cookie names to continuations. \n    It is based on the paste \u003ca\u003ehttp://gist.github.com/260052\u003c/a\u003e. For the arc challenge:\n\u003c/p\u003e\u003cpre\u003e    arc = do\n        name \u003c- doform' frm\n        display $ samelink \"click here\"\n        display $ \"you said\" ++ name\n\u003c/pre\u003e\u003cp\u003eA more complicated example, creating a User datatype with a different page for each field:\n\u003c/p\u003e\u003cpre\u003e   data User = User {age:: Int, name::String, dead::Bool} deriving (Show)\n   makeUser = liftM3 User age name dead \u003e\u003e= (display . show) where\n       age = doform' $ label \"Age: \" *\u003e frm\n       name = doform' $ label \"Name: \" *\u003e frm\n       dead = doform' $ label \"Dead?: \" *\u003e frm\n\u003c/pre\u003e\u003cp\u003eTo run the continuations in Happstack, use \u003ccode\u003e\u003ca\u003erunStateless\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunWithState\u003c/a\u003e\u003c/code\u003e, giving each continuation in a list\n    as a parameter, depending on whether you want MACID support enabled:\n\u003c/p\u003e\u003cpre\u003e   runStateless nullConf [arc, makeUser] []\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "module",
        "fct-source": "src/WebCont.html",
        "fct-type": "module",
        "title": "WebCont"
      },
      "index": {
        "description": "WebConts allow simple continuation based behavior in Happstack applications through the use of cookies and an IntMap on the server mapping cookie names to continuations It is based on the paste http gist.github.com For the arc challenge arc do name doform frm display samelink click here display you said name more complicated example creating User datatype with different page for each field data User User age Int name String dead Bool deriving Show makeUser liftM3 User age name dead display show where age doform label Age frm name doform label Name frm dead doform label Dead frm To run the continuations in Happstack use runStateless or runWithState giving each continuation in list as parameter depending on whether you want MACID support enabled runStateless nullConf arc makeUser",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "WebCont",
        "normalized": "",
        "package": "WebCont",
        "partial": "Web Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:ContForm",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "type",
        "fct-source": "src/WebCont.html#ContForm",
        "fct-type": "type",
        "title": "ContForm"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "ContForm",
        "normalized": "",
        "package": "WebCont",
        "partial": "Cont Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:DefaultForm",
      "description": {
        "fct-descr": "\u003cp\u003eDefines a normal form style to use for a given type\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "class",
        "fct-source": "src/WebCont.html#DefaultForm",
        "fct-type": "class",
        "title": "DefaultForm"
      },
      "index": {
        "description": "Defines normal form style to use for given type",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "DefaultForm",
        "normalized": "",
        "package": "WebCont",
        "partial": "Default Form",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:Result",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "data",
        "fct-source": "src/WebCont.html#Result",
        "fct-type": "data",
        "title": "Result"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "Result",
        "normalized": "",
        "package": "WebCont",
        "partial": "Result",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:WebCont",
      "description": {
        "fct-descr": "\u003cp\u003eA WebCont is a function from \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e to a value of a,\n   displaying a response of r. Both r and a must be\n   Html for runnable continuations.\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "newtype",
        "fct-source": "src/WebCont.html#WebCont",
        "fct-type": "newtype",
        "title": "WebCont"
      },
      "index": {
        "description": "WebCont is function from Env to value of displaying response of Both and must be Html for runnable continuations",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "WebCont",
        "normalized": "",
        "package": "WebCont",
        "partial": "Web Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:Done",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Done a",
        "fct-source": "src/WebCont.html#Result",
        "fct-type": "function",
        "title": "Done"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "Done",
        "normalized": "",
        "package": "WebCont",
        "partial": "Done",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:Via",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Via r (WebCont r a)",
        "fct-source": "src/WebCont.html#Result",
        "fct-type": "function",
        "title": "Via"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "Via",
        "normalized": "",
        "package": "WebCont",
        "partial": "Via",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:WebCont",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "WebCont",
        "fct-source": "src/WebCont.html#WebCont",
        "fct-type": "function",
        "title": "WebCont"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "WebCont",
        "normalized": "",
        "package": "WebCont",
        "partial": "Web Cont",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:button",
      "description": {
        "fct-descr": "\u003cp\u003eButton with an associated value\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "String -\u003e a -\u003e WebCont Html a",
        "fct-source": "src/WebCont.html#button",
        "fct-type": "function",
        "title": "button"
      },
      "index": {
        "description": "Button with an associated value",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "button",
        "normalized": "String-\u003ea-\u003eWebCont Html a",
        "package": "WebCont",
        "partial": "",
        "signature": "String-\u003ea-\u003eWebCont Html a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:display",
      "description": {
        "fct-descr": "\u003cp\u003eDisplay a page, ignoring the value\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "a -\u003e WebCont Html ()",
        "fct-source": "src/WebCont.html#display",
        "fct-type": "function",
        "title": "display"
      },
      "index": {
        "description": "Display page ignoring the value",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "display",
        "normalized": "a-\u003eWebCont Html()",
        "package": "WebCont",
        "partial": "",
        "signature": "a-\u003eWebCont Html()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:doform",
      "description": {
        "fct-descr": "\u003cp\u003eLift a form into the WebCont monad using a function\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "(Html -\u003e r) -\u003e ([String] -\u003e Html -\u003e r) -\u003e ContForm a -\u003e WebCont r a",
        "fct-source": "src/WebCont.html#doform",
        "fct-type": "function",
        "title": "doform"
      },
      "index": {
        "description": "Lift form into the WebCont monad using function",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "doform",
        "normalized": "(Html-\u003ea)-\u003e([String]-\u003eHtml-\u003ea)-\u003eContForm b-\u003eWebCont a b",
        "package": "WebCont",
        "partial": "",
        "signature": "(Html-\u003er)-\u003e([String]-\u003eHtml-\u003er)-\u003eContForm a-\u003eWebCont r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:doform-39-",
      "description": {
        "fct-descr": "\u003cp\u003eLift a form into the WebCont monad without embellishment, displaying errors inline\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "ContForm a -\u003e WebCont Html a",
        "fct-source": "src/WebCont.html#doform%27",
        "fct-type": "function",
        "title": "doform'"
      },
      "index": {
        "description": "Lift form into the WebCont monad without embellishment displaying errors inline",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "doform'",
        "normalized": "ContForm a-\u003eWebCont Html a",
        "package": "WebCont",
        "partial": "",
        "signature": "ContForm a-\u003eWebCont Html a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:frm",
      "description": {
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Form Html Identity i",
        "fct-source": "src/WebCont.html#frm",
        "fct-type": "method",
        "title": "frm"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "frm",
        "normalized": "",
        "package": "WebCont",
        "partial": "",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:link",
      "description": {
        "fct-descr": "\u003cp\u003eLink with an associated value\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "l -\u003e a -\u003e WebCont Html a",
        "fct-source": "src/WebCont.html#link",
        "fct-type": "function",
        "title": "link"
      },
      "index": {
        "description": "Link with an associated value",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "link",
        "normalized": "a-\u003eb-\u003eWebCont Html b",
        "package": "WebCont",
        "partial": "",
        "signature": "l-\u003ea-\u003eWebCont Html a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:nullConf",
      "description": {
        "fct-descr": "\u003cp\u003eDefault configuration contains no validator and the port is set to 8000\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Conf",
        "fct-type": "function",
        "title": "nullConf"
      },
      "index": {
        "description": "Default configuration contains no validator and the port is set to",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "nullConf",
        "normalized": "",
        "package": "WebCont",
        "partial": "Conf",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runStateless",
      "description": {
        "fct-descr": "\u003cp\u003eEntry point for the continuation server: starts the server without MACID support\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Conf -\u003e [WebCont Html ()] -\u003e [ServerPartT IO Response] -\u003e IO ()",
        "fct-source": "src/WebCont.html#runStateless",
        "fct-type": "function",
        "title": "runStateless"
      },
      "index": {
        "description": "Entry point for the continuation server starts the server without MACID support",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "runStateless",
        "normalized": "Conf-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
        "package": "WebCont",
        "partial": "Stateless",
        "signature": "Conf-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runWeb",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Env -\u003e Result r a",
        "fct-source": "src/WebCont.html#WebCont",
        "fct-type": "function",
        "title": "runWeb"
      },
      "index": {
        "description": "",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "runWeb",
        "normalized": "Env-\u003eResult a b",
        "package": "WebCont",
        "partial": "Web",
        "signature": "Env-\u003eResult r a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runWithState",
      "description": {
        "fct-descr": "\u003cp\u003eEntry point for the continuation server: sets up continuation table, MACID state,\n   and a chron job to add a checkpoint daily\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "Conf -\u003e Proxy a -\u003e [WebCont Html ()] -\u003e [ServerPartT IO Response] -\u003e IO ()",
        "fct-source": "src/WebCont.html#runWithState",
        "fct-type": "function",
        "title": "runWithState"
      },
      "index": {
        "description": "Entry point for the continuation server sets up continuation table MACID state and chron job to add checkpoint daily",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "runWithState",
        "normalized": "Conf-\u003eProxy a-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
        "package": "WebCont",
        "partial": "With State",
        "signature": "Conf-\u003eProxy a-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:samelink",
      "description": {
        "fct-descr": "\u003cp\u003eLinks to the same page, leading to the next step in a continuation\n\u003c/p\u003e",
        "fct-module": "WebCont",
        "fct-package": "WebCont",
        "fct-signature": "a -\u003e HotLink",
        "fct-source": "src/WebCont.html#samelink",
        "fct-type": "function",
        "title": "samelink"
      },
      "index": {
        "description": "Links to the same page leading to the next step in continuation",
        "hierarchy": "WebCont",
        "module": "WebCont",
        "name": "samelink",
        "normalized": "a-\u003eHotLink",
        "package": "WebCont",
        "partial": "",
        "signature": "a-\u003eHotLink"
      }
    }
  }
]