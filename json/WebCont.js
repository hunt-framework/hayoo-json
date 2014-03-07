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
        "word": "WebCont"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eWebConts allow simple continuation based behavior in Happstack applications through the use of cookies\n    and an IntMap on the server mapping cookie names to continuations. \n    It is based on the paste \u003ca\u003ehttp://gist.github.com/260052\u003c/a\u003e. For the arc challenge:\n\u003c/p\u003e\u003cpre\u003e    arc = do\n        name \u003c- doform' frm\n        display $ samelink \"click here\"\n        display $ \"you said\" ++ name\n\u003c/pre\u003e\u003cp\u003eA more complicated example, creating a User datatype with a different page for each field:\n\u003c/p\u003e\u003cpre\u003e   data User = User {age:: Int, name::String, dead::Bool} deriving (Show)\n   makeUser = liftM3 User age name dead \u003e\u003e= (display . show) where\n       age = doform' $ label \"Age: \" *\u003e frm\n       name = doform' $ label \"Name: \" *\u003e frm\n       dead = doform' $ label \"Dead?: \" *\u003e frm\n\u003c/pre\u003e\u003cp\u003eTo run the continuations in Happstack, use \u003ccode\u003e\u003ca\u003erunStateless\u003c/a\u003e\u003c/code\u003e or \u003ccode\u003e\u003ca\u003erunWithState\u003c/a\u003e\u003c/code\u003e, giving each continuation in a list\n    as a parameter, depending on whether you want MACID support enabled:\n\u003c/p\u003e\u003cpre\u003e   runStateless nullConf [arc, makeUser] []\n\u003c/pre\u003e\u003c/div\u003e",
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "source": "src/WebCont.html",
          "type": "module"
        },
        "index": {
          "description": "WebConts allow simple continuation based behavior in Happstack applications through the use of cookies and an IntMap on the server mapping cookie names to continuations It is based on the paste http gist.github.com For the arc challenge arc do name doform frm display samelink click here display you said name more complicated example creating User datatype with different page for each field data User User age Int name String dead Bool deriving Show makeUser liftM3 User age name dead display show where age doform label Age frm name doform label Name frm dead doform label Dead frm To run the continuations in Happstack use runStateless or runWithState giving each continuation in list as parameter depending on whether you want MACID support enabled runStateless nullConf arc makeUser",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "partial": "Web Cont",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "ContForm",
          "package": "WebCont",
          "source": "src/WebCont.html#ContForm",
          "type": "type"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "ContForm",
          "package": "WebCont",
          "partial": "Cont Form",
          "type": "type"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:ContForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefines a normal form style to use for a given type\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "DefaultForm",
          "package": "WebCont",
          "source": "src/WebCont.html#DefaultForm",
          "type": "class"
        },
        "index": {
          "description": "Defines normal form style to use for given type",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "DefaultForm",
          "package": "WebCont",
          "partial": "Default Form",
          "type": "class"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:DefaultForm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "Result",
          "package": "WebCont",
          "source": "src/WebCont.html#Result",
          "type": "data"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "Result",
          "package": "WebCont",
          "partial": "Result",
          "type": "data"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:Result"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eA WebCont is a function from \u003ccode\u003e\u003ca\u003eEnv\u003c/a\u003e\u003c/code\u003e to a value of a,\n   displaying a response of r. Both r and a must be\n   Html for runnable continuations.\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "source": "src/WebCont.html#WebCont",
          "type": "newtype"
        },
        "index": {
          "description": "WebCont is function from Env to value of displaying response of Both and must be Html for runnable continuations",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "partial": "Web Cont",
          "type": "newtype"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#t:WebCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "Done",
          "package": "WebCont",
          "signature": "Done a",
          "source": "src/WebCont.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "Done",
          "package": "WebCont",
          "partial": "Done",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:Done"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "Via",
          "package": "WebCont",
          "signature": "Via r (WebCont r a)",
          "source": "src/WebCont.html#Result",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "Via",
          "package": "WebCont",
          "partial": "Via",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:Via"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "signature": "WebCont",
          "source": "src/WebCont.html#WebCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "WebCont",
          "package": "WebCont",
          "partial": "Web Cont",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:WebCont"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eButton with an associated value\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "button",
          "package": "WebCont",
          "signature": "String -\u003e a -\u003e WebCont Html a",
          "source": "src/WebCont.html#button",
          "type": "function"
        },
        "index": {
          "description": "Button with an associated value",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "button",
          "normalized": "String-\u003ea-\u003eWebCont Html a",
          "package": "WebCont",
          "signature": "String-\u003ea-\u003eWebCont Html a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:button"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDisplay a page, ignoring the value\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "display",
          "package": "WebCont",
          "signature": "a -\u003e WebCont Html ()",
          "source": "src/WebCont.html#display",
          "type": "function"
        },
        "index": {
          "description": "Display page ignoring the value",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "display",
          "normalized": "a-\u003eWebCont Html()",
          "package": "WebCont",
          "signature": "a-\u003eWebCont Html()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:display"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a form into the WebCont monad using a function\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "doform",
          "package": "WebCont",
          "signature": "(Html -\u003e r) -\u003e ([String] -\u003e Html -\u003e r) -\u003e ContForm a -\u003e WebCont r a",
          "source": "src/WebCont.html#doform",
          "type": "function"
        },
        "index": {
          "description": "Lift form into the WebCont monad using function",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "doform",
          "normalized": "(Html-\u003ea)-\u003e([String]-\u003eHtml-\u003ea)-\u003eContForm b-\u003eWebCont a b",
          "package": "WebCont",
          "signature": "(Html-\u003er)-\u003e([String]-\u003eHtml-\u003er)-\u003eContForm a-\u003eWebCont r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:doform"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLift a form into the WebCont monad without embellishment, displaying errors inline\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "doform'",
          "package": "WebCont",
          "signature": "ContForm a -\u003e WebCont Html a",
          "source": "src/WebCont.html#doform%27",
          "type": "function"
        },
        "index": {
          "description": "Lift form into the WebCont monad without embellishment displaying errors inline",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "doform'",
          "normalized": "ContForm a-\u003eWebCont Html a",
          "package": "WebCont",
          "signature": "ContForm a-\u003eWebCont Html a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:doform-39-"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "frm",
          "package": "WebCont",
          "signature": "Form Html Identity i",
          "source": "src/WebCont.html#frm",
          "type": "method"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "frm",
          "package": "WebCont",
          "type": "method"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:frm"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLink with an associated value\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "link",
          "package": "WebCont",
          "signature": "l -\u003e a -\u003e WebCont Html a",
          "source": "src/WebCont.html#link",
          "type": "function"
        },
        "index": {
          "description": "Link with an associated value",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "link",
          "normalized": "a-\u003eb-\u003eWebCont Html b",
          "package": "WebCont",
          "signature": "l-\u003ea-\u003eWebCont Html a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:link"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eDefault configuration contains no validator and the port is set to 8000\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "nullConf",
          "package": "WebCont",
          "signature": "Conf",
          "type": "function"
        },
        "index": {
          "description": "Default configuration contains no validator and the port is set to",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "nullConf",
          "package": "WebCont",
          "partial": "Conf",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:nullConf"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry point for the continuation server: starts the server without MACID support\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "runStateless",
          "package": "WebCont",
          "signature": "Conf -\u003e [WebCont Html ()] -\u003e [ServerPartT IO Response] -\u003e IO ()",
          "source": "src/WebCont.html#runStateless",
          "type": "function"
        },
        "index": {
          "description": "Entry point for the continuation server starts the server without MACID support",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "runStateless",
          "normalized": "Conf-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
          "package": "WebCont",
          "partial": "Stateless",
          "signature": "Conf-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runStateless"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "WebCont",
          "name": "runWeb",
          "package": "WebCont",
          "signature": "Env -\u003e Result r a",
          "source": "src/WebCont.html#WebCont",
          "type": "function"
        },
        "index": {
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "runWeb",
          "normalized": "Env-\u003eResult a b",
          "package": "WebCont",
          "partial": "Web",
          "signature": "Env-\u003eResult r a",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runWeb"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eEntry point for the continuation server: sets up continuation table, MACID state,\n   and a chron job to add a checkpoint daily\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "runWithState",
          "package": "WebCont",
          "signature": "Conf -\u003e Proxy a -\u003e [WebCont Html ()] -\u003e [ServerPartT IO Response] -\u003e IO ()",
          "source": "src/WebCont.html#runWithState",
          "type": "function"
        },
        "index": {
          "description": "Entry point for the continuation server sets up continuation table MACID state and chron job to add checkpoint daily",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "runWithState",
          "normalized": "Conf-\u003eProxy a-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
          "package": "WebCont",
          "partial": "With State",
          "signature": "Conf-\u003eProxy a-\u003e[WebCont Html()]-\u003e[ServerPartT IO Response]-\u003eIO()",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:runWithState"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eLinks to the same page, leading to the next step in a continuation\n\u003c/p\u003e",
          "module": "WebCont",
          "name": "samelink",
          "package": "WebCont",
          "signature": "a -\u003e HotLink",
          "source": "src/WebCont.html#samelink",
          "type": "function"
        },
        "index": {
          "description": "Links to the same page leading to the next step in continuation",
          "hierarchy": "WebCont",
          "module": "WebCont",
          "name": "samelink",
          "normalized": "a-\u003eHotLink",
          "package": "WebCont",
          "signature": "a-\u003eHotLink",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/WebCont/docs/WebCont.html#v:samelink"
      }
    }
  ]
]