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
        "word": "hack-frontend-happstack"
      },
      "type": "context"
    }
  },
  [
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.Happstack",
          "name": "Happstack",
          "package": "hack-frontend-happstack",
          "source": "src/Hack-Frontend-Happstack.html",
          "type": "module"
        },
        "index": {
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "Happstack",
          "package": "hack-frontend-happstack",
          "partial": "Happstack",
          "type": "module"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.Happstack",
          "name": "convert",
          "package": "hack-frontend-happstack",
          "signature": "(Request -\u003e IO Response) -\u003e Application",
          "source": "src/Hack-Frontend-Happstack.html#convert",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "convert",
          "normalized": "(Request-\u003eIO Response)-\u003eApplication",
          "package": "hack-frontend-happstack",
          "signature": "(Request-\u003eIO Response)-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:convert"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSets all the headers coming from Happstack\n\u003c/p\u003e",
          "module": "Hack.Frontend.Happstack",
          "name": "convertHeader",
          "package": "hack-frontend-happstack",
          "signature": "HeaderPair -\u003e (String, String)",
          "source": "src/Hack-Frontend-Happstack.html#convertHeader",
          "type": "function"
        },
        "index": {
          "description": "Sets all the headers coming from Happstack",
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "convertHeader",
          "normalized": "HeaderPair-\u003e(String,String)",
          "package": "hack-frontend-happstack",
          "partial": "Header",
          "signature": "HeaderPair-\u003e(String,String)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:convertHeader"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.Happstack",
          "name": "cookieWithName",
          "package": "hack-frontend-happstack",
          "signature": "Cookie -\u003e (String, Cookie)",
          "source": "src/Hack-Frontend-Happstack.html#cookieWithName",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "cookieWithName",
          "normalized": "Cookie-\u003e(String,Cookie)",
          "package": "hack-frontend-happstack",
          "partial": "With Name",
          "signature": "Cookie-\u003e(String,Cookie)",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:cookieWithName"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eTransforms a ServerPartT into a function. This is a copy of simpleHTTP'\n\u003c/p\u003e",
          "module": "Hack.Frontend.Happstack",
          "name": "processRequest",
          "package": "hack-frontend-happstack",
          "signature": "ServerPartT m b -\u003e Request -\u003e m Response",
          "source": "src/Hack-Frontend-Happstack.html#processRequest",
          "type": "function"
        },
        "index": {
          "description": "Transforms ServerPartT into function This is copy of simpleHTTP",
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "processRequest",
          "normalized": "ServerPartT a b-\u003eRequest-\u003ea Response",
          "package": "hack-frontend-happstack",
          "partial": "Request",
          "signature": "ServerPartT m b-\u003eRequest-\u003em Response",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:processRequest"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.Happstack",
          "name": "serverPartToApp",
          "package": "hack-frontend-happstack",
          "signature": "ServerPartT IO b -\u003e Application",
          "source": "src/Hack-Frontend-Happstack.html#serverPartToApp",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "serverPartToApp",
          "normalized": "ServerPartT IO a-\u003eApplication",
          "package": "hack-frontend-happstack",
          "partial": "Part To App",
          "signature": "ServerPartT IO b-\u003eApplication",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:serverPartToApp"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eSplits a list by character, the resulting lists don't have the character in them.\n\u003c/p\u003e",
          "module": "Hack.Frontend.Happstack",
          "name": "split",
          "package": "hack-frontend-happstack",
          "signature": "Char -\u003e String -\u003e [String]",
          "source": "src/Hack-Frontend-Happstack.html#split",
          "type": "function"
        },
        "index": {
          "description": "Splits list by character the resulting lists don have the character in them",
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "split",
          "normalized": "Char-\u003eString-\u003e[String]",
          "package": "hack-frontend-happstack",
          "signature": "Char-\u003eString-\u003e[String]",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:split"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "module": "Hack.Frontend.Happstack",
          "name": "toHackResponse",
          "package": "hack-frontend-happstack",
          "signature": "Response -\u003e Response",
          "source": "src/Hack-Frontend-Happstack.html#toHackResponse",
          "type": "function"
        },
        "index": {
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "toHackResponse",
          "normalized": "Response-\u003eResponse",
          "package": "hack-frontend-happstack",
          "partial": "Hack Response",
          "signature": "Response-\u003eResponse",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:toHackResponse"
      }
    },
    {
      "cmd": "insert",
      "document": {
        "description": {
          "description": "\u003cp\u003eConverts one request into another\n\u003c/p\u003e",
          "module": "Hack.Frontend.Happstack",
          "name": "toHappstackRequest",
          "package": "hack-frontend-happstack",
          "signature": "Env -\u003e Request",
          "source": "src/Hack-Frontend-Happstack.html#toHappstackRequest",
          "type": "function"
        },
        "index": {
          "description": "Converts one request into another",
          "hierarchy": "Hack Frontend Happstack",
          "module": "Hack.Frontend.Happstack",
          "name": "toHappstackRequest",
          "normalized": "Env-\u003eRequest",
          "package": "hack-frontend-happstack",
          "partial": "Happstack Request",
          "signature": "Env-\u003eRequest",
          "type": "function"
        },
        "uri": "http://hackage.haskell.org/package/hack-frontend-happstack/docs/Hack-Frontend-Happstack.html#v:toHappstackRequest"
      }
    }
  ]
]