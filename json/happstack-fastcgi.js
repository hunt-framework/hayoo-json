[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-fastcgi/docs/Happstack-Server-FastCGI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eRunning Happstack applications using FastCGI\n\u003c/p\u003e\u003cp\u003eYou need to keep a couple things in mind when configuring a FastCGI Happstack application, especially when using Happstack-state.\n\u003c/p\u003e\u003cp\u003eThere are several ways to let Apache + FastCGI handle your application.\n\u003c/p\u003e\u003cdl\u003e\u003cdt\u003eDynamic\u003c/dt\u003e\u003cdd\u003e This is the easy way.  You don't have to configure your server, but can just execute the scripts.  FastCGI will spawn instances of your application if needed and kill them if they're not needed anymore.  \u003cem\u003eThis might break working with Happstack-state!\u003c/em\u003e\n\u003c/dd\u003e\u003cdt\u003eStatic\u003c/dt\u003e\u003cdd\u003e You explicitly need to configure your script in your host config.  By default it will only start one process, on server startup.  If you want to work with Happstack-state, this is the preferable way, although we have not exhaustively tested that it won't break.\n| \n\u003c/dd\u003e\u003c/dl\u003e\u003c/div\u003e",
        "fct-module": "Happstack.Server.FastCGI",
        "fct-package": "happstack-fastcgi",
        "fct-signature": "module",
        "fct-source": "src/Happstack-Server-FastCGI.html",
        "fct-type": "module",
        "title": "FastCGI"
      },
      "index": {
        "description": "Running Happstack applications using FastCGI You need to keep couple things in mind when configuring FastCGI Happstack application especially when using Happstack-state There are several ways to let Apache FastCGI handle your application Dynamic This is the easy way You don have to configure your server but can just execute the scripts FastCGI will spawn instances of your application if needed and kill them if they re not needed anymore This might break working with Happstack-state Static You explicitly need to configure your script in your host config By default it will only start one process on server startup If you want to work with Happstack-state this is the preferable way although we have not exhaustively tested that it won break",
        "hierarchy": "Happstack Server FastCGI",
        "module": "Happstack.Server.FastCGI",
        "name": "FastCGI",
        "normalized": "",
        "package": "happstack-fastcgi",
        "partial": "Fast CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/happstack-fastcgi/docs/Happstack-Server-FastCGI.html#v:serverPartToCGI",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a Happstack ServerPartT to a CGI handling function.\n\u003c/p\u003e",
        "fct-module": "Happstack.Server.FastCGI",
        "fct-package": "happstack-fastcgi",
        "fct-signature": "ServerPartT IO b -\u003e CGI CGIResult",
        "fct-source": "src/Happstack-Server-FastCGI.html#serverPartToCGI",
        "fct-type": "function",
        "title": "serverPartToCGI"
      },
      "index": {
        "description": "Converts Happstack ServerPartT to CGI handling function",
        "hierarchy": "Happstack Server FastCGI",
        "module": "Happstack.Server.FastCGI",
        "name": "serverPartToCGI",
        "normalized": "ServerPartT IO a-\u003eCGI CGIResult",
        "package": "happstack-fastcgi",
        "partial": "Part To CGI",
        "signature": "ServerPartT IO b-\u003eCGI CGIResult"
      }
    }
  }
]