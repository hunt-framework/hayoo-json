[
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Compat.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eCompatibility functions for the old Network.CGI API.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI.Compat",
        "fct-package": "cgi",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI-Compat.html",
        "fct-type": "module",
        "title": "Compat"
      },
      "index": {
        "description": "Compatibility functions for the old Network.CGI API",
        "hierarchy": "Network CGI Compat",
        "module": "Network.CGI.Compat",
        "name": "Compat",
        "normalized": "",
        "package": "cgi",
        "partial": "Compat",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Compat.html#t:Html",
      "description": {
        "fct-module": "Network.CGI.Compat",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-type": "data",
        "title": "Html"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Compat",
        "module": "Network.CGI.Compat",
        "name": "Html",
        "normalized": "",
        "package": "cgi",
        "partial": "Html",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Compat.html#v:connectToCGIScript",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the new interface.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eNote: if using Windows, you might need to wrap \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e around main.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Compat",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e PortID -\u003e IO ()",
        "fct-source": "src/Network-CGI-Compat.html#connectToCGIScript",
        "fct-type": "function",
        "title": "connectToCGIScript"
      },
      "index": {
        "description": "Deprecated Use the new interface Note if using Windows you might need to wrap withSocketsDo around main",
        "hierarchy": "Network CGI Compat",
        "module": "Network.CGI.Compat",
        "name": "connectToCGIScript",
        "normalized": "String-\u003ePortID-\u003eIO()",
        "package": "cgi",
        "partial": "To CGIScript",
        "signature": "String-\u003ePortID-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Compat.html#v:pwrapper",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the new interface.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompatibility wrapper for the old CGI interface.\n   Runs a simple CGI server.\n   Note: if using Windows, you might need to wrap \u003ccode\u003e\u003ca\u003ewithSocketsDo\u003c/a\u003e\u003c/code\u003e around main.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Compat",
        "fct-package": "cgi",
        "fct-signature": "PortID-\u003e ([(String, String)] -\u003e IO Html)-\u003e IO ()",
        "fct-type": "function",
        "title": "pwrapper"
      },
      "index": {
        "description": "Deprecated Use the new interface Compatibility wrapper for the old CGI interface Runs simple CGI server Note if using Windows you might need to wrap withSocketsDo around main",
        "hierarchy": "Network CGI Compat",
        "module": "Network.CGI.Compat",
        "name": "pwrapper",
        "normalized": "PortID-\u003e([(String,String)]-\u003eIO Html)-\u003eIO()",
        "package": "cgi",
        "partial": "",
        "signature": "PortID-\u003e([(String,String)]-\u003eIO Html)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Compat.html#v:wrapper",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use the new interface.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eCompatibility wrapper for the old CGI interface.\n   Output the output from a function from CGI environment and\n   input variables to an HTML document.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Compat",
        "fct-package": "cgi",
        "fct-signature": "([(String, String)] -\u003e IO Html) -\u003e IO ()",
        "fct-source": "src/Network-CGI-Compat.html#wrapper",
        "fct-type": "function",
        "title": "wrapper"
      },
      "index": {
        "description": "Deprecated Use the new interface Compatibility wrapper for the old CGI interface Output the output from function from CGI environment and input variables to an HTML document",
        "hierarchy": "Network CGI Compat",
        "module": "Network.CGI.Compat",
        "name": "wrapper",
        "normalized": "([(String,String)]-\u003eIO Html)-\u003eIO()",
        "package": "cgi",
        "partial": "",
        "signature": "([(String,String)]-\u003eIO Html)-\u003eIO()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eTODO\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e Add client side stuff (basically parsing Set-Cookie: value)\n\u003c/li\u003e\u003cli\u003e Update for RFC2109 \u003ca\u003ehttp://www.ietf.org/rfc/rfc2109.txt\u003c/a\u003e\n\u003c/li\u003e\u003c/ul\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI-Cookie.html",
        "fct-type": "module",
        "title": "Cookie"
      },
      "index": {
        "description": "TODO Add client side stuff basically parsing Set-Cookie value Update for RFC2109 http www.ietf.org rfc rfc2109.txt",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "cgi",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003eContains all information about a cookie set by the server.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "Contains all information about cookie set by the server",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "cgi",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:Cookie",
      "description": {
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Cookie",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "Cookie",
        "normalized": "",
        "package": "cgi",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookieDomain",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain suffix to which this cookie will be sent.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieDomain"
      },
      "index": {
        "description": "The domain suffix to which this cookie will be sent",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookieDomain",
        "normalized": "",
        "package": "cgi",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookieExpires",
      "description": {
        "fct-descr": "\u003cp\u003eExpiry date of the cookie. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the\n   cookie expires when the browser sessions ends.\n   If the date is in the past, the client should\n   delete the cookie immediately.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Maybe CalendarTime",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieExpires"
      },
      "index": {
        "description": "Expiry date of the cookie If Nothing the cookie expires when the browser sessions ends If the date is in the past the client should delete the cookie immediately",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookieExpires",
        "normalized": "",
        "package": "cgi",
        "partial": "Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookieName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieName"
      },
      "index": {
        "description": "Name of the cookie",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookieName",
        "normalized": "",
        "package": "cgi",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookiePath",
      "description": {
        "fct-descr": "\u003cp\u003eThe path to which this cookie will be sent.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookiePath"
      },
      "index": {
        "description": "The path to which this cookie will be sent",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookiePath",
        "normalized": "",
        "package": "cgi",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookieSecure",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this cookie should only be sent using\n   secure means.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Bool",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieSecure"
      },
      "index": {
        "description": "True if this cookie should only be sent using secure means",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookieSecure",
        "normalized": "",
        "package": "cgi",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:cookieValue",
      "description": {
        "fct-descr": "\u003cp\u003eValue of the cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieValue"
      },
      "index": {
        "description": "Value of the cookie",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "cookieValue",
        "normalized": "",
        "package": "cgi",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:deleteCookie",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a cookie from the client by setting the cookie expiry date\n   to a date in the past.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Cookie-\u003e Cookie",
        "fct-type": "function",
        "title": "deleteCookie"
      },
      "index": {
        "description": "Delete cookie from the client by setting the cookie expiry date to date in the past",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "deleteCookie",
        "normalized": "Cookie-\u003eCookie",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "Cookie-\u003eCookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:findCookie",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a cookie from a string on the form\n   \u003ccode\u003e\"cookieName1=cookieValue1;...;cookieName2=cookieValue2\"\u003c/code\u003e.\n   This is the format of the \u003ccode\u003eCookie\u003c/code\u003e HTTP header.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e String-\u003e Maybe String",
        "fct-type": "function",
        "title": "findCookie"
      },
      "index": {
        "description": "Get the value of cookie from string on the form cookieName1 cookieValue1 cookieName2 cookieValue2 This is the format of the Cookie HTTP header",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "findCookie",
        "normalized": "String-\u003eString-\u003eMaybe String",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "String-\u003eString-\u003eMaybe String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:newCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a cookie with only name and value set.\n   This client will expire when the browser sessions ends,\n   will only be sent to the server and path which set it\n   and may be sent using any means.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e String-\u003e Cookie",
        "fct-type": "function",
        "title": "newCookie"
      },
      "index": {
        "description": "Construct cookie with only name and value set This client will expire when the browser sessions ends will only be sent to the server and path which set it and may be sent using any means",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "newCookie",
        "normalized": "String-\u003eString-\u003eCookie",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "String-\u003eString-\u003eCookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:readCookies",
      "description": {
        "fct-descr": "\u003cp\u003eGets all the cookies from a Cookie: header value\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e [(String, String)]",
        "fct-type": "function",
        "title": "readCookies"
      },
      "index": {
        "description": "Gets all the cookies from Cookie header value",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "readCookies",
        "normalized": "String-\u003e[(String,String)]",
        "package": "cgi",
        "partial": "Cookies",
        "signature": "String-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Cookie.html#v:showCookie",
      "description": {
        "fct-descr": "\u003cp\u003eShow a cookie on the format used as the value of the Set-Cookie header.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Cookie",
        "fct-package": "cgi",
        "fct-signature": "Cookie -\u003e String",
        "fct-source": "src/Network-CGI-Cookie.html#showCookie",
        "fct-type": "function",
        "title": "showCookie"
      },
      "index": {
        "description": "Show cookie on the format used as the value of the Set-Cookie header",
        "hierarchy": "Network CGI Cookie",
        "module": "Network.CGI.Cookie",
        "name": "showCookie",
        "normalized": "Cookie-\u003eString",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "Cookie-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eInternal stuff that most people shouldn't have to use.\n This module mostly deals with the \n internals of the CGIT monad transformer.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI-Monad.html",
        "fct-type": "module",
        "title": "Monad"
      },
      "index": {
        "description": "Internal stuff that most people shouldn have to use This module mostly deals with the internals of the CGIT monad transformer",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "Monad",
        "normalized": "",
        "package": "cgi",
        "partial": "Monad",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#t:CGI",
      "description": {
        "fct-descr": "\u003cp\u003eA simple CGI monad with just IO.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Monad.html#CGI",
        "fct-type": "type",
        "title": "CGI"
      },
      "index": {
        "description": "simple CGI monad with just IO",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "CGI",
        "normalized": "",
        "package": "cgi",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#t:CGIRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThe input to a CGI action.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "data",
        "title": "CGIRequest"
      },
      "index": {
        "description": "The input to CGI action",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "CGIRequest",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#t:CGIT",
      "description": {
        "fct-descr": "\u003cp\u003eThe CGIT monad transformer.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "newtype",
        "fct-source": "src/Network-CGI-Monad.html#CGIT",
        "fct-type": "newtype",
        "title": "CGIT"
      },
      "index": {
        "description": "The CGIT monad transformer",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "CGIT",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#t:MonadCGI",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of CGI monads. Most CGI actions can be run in\n   any monad which is an instance of this class, which means that\n   you can use your own monad transformers to add extra functionality.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "class",
        "fct-source": "src/Network-CGI-Monad.html#MonadCGI",
        "fct-type": "class",
        "title": "MonadCGI"
      },
      "index": {
        "description": "The class of CGI monads Most CGI actions can be run in any monad which is an instance of this class which means that you can use your own monad transformers to add extra functionality",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "MonadCGI",
        "normalized": "",
        "package": "cgi",
        "partial": "Monad CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:CGIRequest",
      "description": {
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "CGIRequest",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "CGIRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "CGIRequest",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:CGIT",
      "description": {
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "CGIT",
        "fct-source": "src/Network-CGI-Monad.html#CGIT",
        "fct-type": "function",
        "title": "CGIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "CGIT",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:catchCGI",
      "description": {
        "fct-descr": "\u003cp\u003eCatches any expection thrown by a CGI action, and uses the given \n   exception handler if an exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#catchCGI",
        "fct-type": "function",
        "title": "catchCGI"
      },
      "index": {
        "description": "Catches any expection thrown by CGI action and uses the given exception handler if an exception is thrown",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "catchCGI",
        "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
        "package": "cgi",
        "partial": "CGI",
        "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:cgiAddHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a response header.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "HeaderName -\u003e String -\u003e m ()",
        "fct-source": "src/Network-CGI-Monad.html#cgiAddHeader",
        "fct-type": "method",
        "title": "cgiAddHeader"
      },
      "index": {
        "description": "Add response header",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "cgiAddHeader",
        "normalized": "HeaderName-\u003eString-\u003ea()",
        "package": "cgi",
        "partial": "Add Header",
        "signature": "HeaderName-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:cgiGet",
      "description": {
        "fct-descr": "\u003cp\u003eGet something from the CGI request.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "(CGIRequest -\u003e a) -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#cgiGet",
        "fct-type": "method",
        "title": "cgiGet"
      },
      "index": {
        "description": "Get something from the CGI request",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "cgiGet",
        "normalized": "(CGIRequest-\u003ea)-\u003eb a",
        "package": "cgi",
        "partial": "Get",
        "signature": "(CGIRequest-\u003ea)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:cgiInputs",
      "description": {
        "fct-descr": "\u003cp\u003eInput parameters. For better laziness in reading inputs,\n   this is not a Map.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "[(String, Input)]",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiInputs"
      },
      "index": {
        "description": "Input parameters For better laziness in reading inputs this is not Map",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "cgiInputs",
        "normalized": "[(String,Input)]",
        "package": "cgi",
        "partial": "Inputs",
        "signature": "[(String,Input)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:cgiRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eRaw request body. To avoid memory leaks,\n this is the empty string if the request body has been\n interpreted as inputs in\n \u003ca\u003eapplication/x-www-form-urlencoded\u003c/a\u003e or\n \u003ca\u003emultipart/form-data\u003c/a\u003e format.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiRequestBody"
      },
      "index": {
        "description": "Raw request body To avoid memory leaks this is the empty string if the request body has been interpreted as inputs in application x-www-form-urlencoded or multipart form-data format",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "cgiRequestBody",
        "normalized": "",
        "package": "cgi",
        "partial": "Request Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:cgiVars",
      "description": {
        "fct-descr": "\u003cp\u003eEnvironment variables.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "Map String String",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiVars"
      },
      "index": {
        "description": "Environment variables",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "cgiVars",
        "normalized": "",
        "package": "cgi",
        "partial": "Vars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:handleExceptionCGI",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use catchCGI instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated version of \u003ccode\u003e\u003ca\u003ecatchCGI\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003ecatchCGI\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#handleExceptionCGI",
        "fct-type": "function",
        "title": "handleExceptionCGI"
      },
      "index": {
        "description": "Deprecated Use catchCGI instead Deprecated version of catchCGI Use catchCGI instead",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "handleExceptionCGI",
        "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
        "package": "cgi",
        "partial": "Exception CGI",
        "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:runCGIT",
      "description": {
        "fct-descr": "\u003cp\u003eRun a CGI action.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "CGIT m a -\u003e CGIRequest -\u003e m (Headers, a)",
        "fct-source": "src/Network-CGI-Monad.html#runCGIT",
        "fct-type": "function",
        "title": "runCGIT"
      },
      "index": {
        "description": "Run CGI action",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "runCGIT",
        "normalized": "CGIT a b-\u003eCGIRequest-\u003ea(Headers,b)",
        "package": "cgi",
        "partial": "CGIT",
        "signature": "CGIT m a-\u003eCGIRequest-\u003em(Headers,a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:throwCGI",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception in a CGI monad. The monad is required to be\n   a \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, so that we can use \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e to guarantee ordering.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "SomeException -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#throwCGI",
        "fct-type": "function",
        "title": "throwCGI"
      },
      "index": {
        "description": "Throw an exception in CGI monad The monad is required to be MonadIO so that we can use throwIO to guarantee ordering",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "throwCGI",
        "normalized": "SomeException-\u003ea b",
        "package": "cgi",
        "partial": "CGI",
        "signature": "SomeException-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:tryCGI",
      "description": {
        "fct-descr": "\u003cp\u003eCatches any exception thrown by an CGI action, and returns either\n   the exception, or if no exception was raised, the result of the action.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e m (Either SomeException a)",
        "fct-source": "src/Network-CGI-Monad.html#tryCGI",
        "fct-type": "function",
        "title": "tryCGI"
      },
      "index": {
        "description": "Catches any exception thrown by an CGI action and returns either the exception or if no exception was raised the result of the action",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "tryCGI",
        "normalized": "a b-\u003ea(Either SomeException b)",
        "package": "cgi",
        "partial": "CGI",
        "signature": "m a-\u003em(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Monad.html#v:unCGIT",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Monad",
        "fct-package": "cgi",
        "fct-signature": "ReaderT CGIRequest (WriterT Headers m) a",
        "fct-source": "src/Network-CGI-Monad.html#CGIT",
        "fct-type": "function",
        "title": "unCGIT"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Monad",
        "module": "Network.CGI.Monad",
        "name": "unCGIT",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eAn implementation of the program side of the CGI protocol.\n\u003c/p\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI-Protocol.html",
        "fct-type": "module",
        "title": "Protocol"
      },
      "index": {
        "description": "An implementation of the program side of the CGI protocol",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "Protocol",
        "normalized": "",
        "package": "cgi",
        "partial": "Protocol",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#t:CGIRequest",
      "description": {
        "fct-descr": "\u003cp\u003eThe input to a CGI action.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "data",
        "title": "CGIRequest"
      },
      "index": {
        "description": "The input to CGI action",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "CGIRequest",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#t:CGIResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a CGI program.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Protocol.html#CGIResult",
        "fct-type": "data",
        "title": "CGIResult"
      },
      "index": {
        "description": "The result of CGI program",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "CGIResult",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#t:HeaderName",
      "description": {
        "fct-descr": "\u003cp\u003eA string with case insensitive equality and comparisons.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "newtype",
        "fct-source": "src/Network-CGI-Header.html#HeaderName",
        "fct-type": "newtype",
        "title": "HeaderName"
      },
      "index": {
        "description": "string with case insensitive equality and comparisons",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "HeaderName",
        "normalized": "",
        "package": "cgi",
        "partial": "Header Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#t:Headers",
      "description": {
        "fct-descr": "\u003cp\u003eHTTP headers.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Header.html#Headers",
        "fct-type": "type",
        "title": "Headers"
      },
      "index": {
        "description": "HTTP headers",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "Headers",
        "normalized": "",
        "package": "cgi",
        "partial": "Headers",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#t:Input",
      "description": {
        "fct-descr": "\u003cp\u003eThe value of an input parameter, and some metadata.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Protocol.html#Input",
        "fct-type": "data",
        "title": "Input"
      },
      "index": {
        "description": "The value of an input parameter and some metadata",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "Input",
        "normalized": "",
        "package": "cgi",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:CGINothing",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "CGINothing",
        "fct-source": "src/Network-CGI-Protocol.html#CGIResult",
        "fct-type": "function",
        "title": "CGINothing"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "CGINothing",
        "normalized": "",
        "package": "cgi",
        "partial": "CGINothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:CGIOutput",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "CGIOutput ByteString",
        "fct-source": "src/Network-CGI-Protocol.html#CGIResult",
        "fct-type": "function",
        "title": "CGIOutput"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "CGIOutput",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIOutput",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:CGIRequest",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "CGIRequest",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "CGIRequest"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "CGIRequest",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIRequest",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:HeaderName",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "HeaderName String",
        "fct-source": "src/Network-CGI-Header.html#HeaderName",
        "fct-type": "function",
        "title": "HeaderName"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "HeaderName",
        "normalized": "",
        "package": "cgi",
        "partial": "Header Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:Input",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "Input",
        "fct-source": "src/Network-CGI-Protocol.html#Input",
        "fct-type": "function",
        "title": "Input"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "Input",
        "normalized": "",
        "package": "cgi",
        "partial": "Input",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:cgiInputs",
      "description": {
        "fct-descr": "\u003cp\u003eInput parameters. For better laziness in reading inputs,\n   this is not a Map.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, Input)]",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiInputs"
      },
      "index": {
        "description": "Input parameters For better laziness in reading inputs this is not Map",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "cgiInputs",
        "normalized": "[(String,Input)]",
        "package": "cgi",
        "partial": "Inputs",
        "signature": "[(String,Input)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:cgiRequestBody",
      "description": {
        "fct-descr": "\u003cp\u003eRaw request body. To avoid memory leaks,\n this is the empty string if the request body has been\n interpreted as inputs in\n \u003ca\u003eapplication/x-www-form-urlencoded\u003c/a\u003e or\n \u003ca\u003emultipart/form-data\u003c/a\u003e format.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiRequestBody"
      },
      "index": {
        "description": "Raw request body To avoid memory leaks this is the empty string if the request body has been interpreted as inputs in application x-www-form-urlencoded or multipart form-data format",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "cgiRequestBody",
        "normalized": "",
        "package": "cgi",
        "partial": "Request Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:cgiVars",
      "description": {
        "fct-descr": "\u003cp\u003eEnvironment variables.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "Map String String",
        "fct-source": "src/Network-CGI-Protocol.html#CGIRequest",
        "fct-type": "function",
        "title": "cgiVars"
      },
      "index": {
        "description": "Environment variables",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "cgiVars",
        "normalized": "",
        "package": "cgi",
        "partial": "Vars",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:decodeInput",
      "description": {
        "fct-descr": "\u003cp\u003eGets and decodes the input according to the request\n   method and the content-type.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)]-\u003e ByteString-\u003e ([(String, Input)], ByteString)",
        "fct-type": "function",
        "title": "decodeInput"
      },
      "index": {
        "description": "Gets and decodes the input according to the request method and the content-type",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "decodeInput",
        "normalized": "[(String,String)]-\u003eByteString-\u003e([(String,Input)],ByteString)",
        "package": "cgi",
        "partial": "Input",
        "signature": "[(String,String)]-\u003eByteString-\u003e([(String,Input)],ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:formDecode",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name-value pairs from application/x-www-form-urlencoded data.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e [(String, String)]",
        "fct-source": "src/Network-CGI-Protocol.html#formDecode",
        "fct-type": "function",
        "title": "formDecode"
      },
      "index": {
        "description": "Gets the name-value pairs from application x-www-form-urlencoded data",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "formDecode",
        "normalized": "String-\u003e[(String,String)]",
        "package": "cgi",
        "partial": "Decode",
        "signature": "String-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:formEncode",
      "description": {
        "fct-descr": "\u003cp\u003eFormats name-value pairs as application/x-www-form-urlencoded.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)] -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#formEncode",
        "fct-type": "function",
        "title": "formEncode"
      },
      "index": {
        "description": "Formats name-value pairs as application x-www-form-urlencoded",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "formEncode",
        "normalized": "[(String,String)]-\u003eString",
        "package": "cgi",
        "partial": "Encode",
        "signature": "[(String,String)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:getCGIVars",
      "description": {
        "fct-descr": "\u003cp\u003eGets the values of all CGI variables from the program environment.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "m [(String, String)]",
        "fct-source": "src/Network-CGI-Protocol.html#getCGIVars",
        "fct-type": "function",
        "title": "getCGIVars"
      },
      "index": {
        "description": "Gets the values of all CGI variables from the program environment",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "getCGIVars",
        "normalized": "a[(String,String)]",
        "package": "cgi",
        "partial": "CGIVars",
        "signature": "m[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:hRunCGI",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CGI action in a given environment. Uses Handles for input and output. \n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)]-\u003e Handle-\u003e Handle-\u003e (CGIRequest -\u003e m (Headers, CGIResult))-\u003e m ()",
        "fct-type": "function",
        "title": "hRunCGI"
      },
      "index": {
        "description": "Runs CGI action in given environment Uses Handles for input and output",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "hRunCGI",
        "normalized": "[(String,String)]-\u003eHandle-\u003eHandle-\u003e(CGIRequest-\u003ea(Headers,CGIResult))-\u003ea()",
        "package": "cgi",
        "partial": "Run CGI",
        "signature": "[(String,String)]-\u003eHandle-\u003eHandle-\u003e(CGIRequest-\u003em(Headers,CGIResult))-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:inputContentType",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "ContentType",
        "fct-source": "src/Network-CGI-Protocol.html#Input",
        "fct-type": "function",
        "title": "inputContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "inputContentType",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:inputFilename",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-CGI-Protocol.html#Input",
        "fct-type": "function",
        "title": "inputFilename"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "inputFilename",
        "normalized": "",
        "package": "cgi",
        "partial": "Filename",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:inputValue",
      "description": {
        "fct-descr": "&#160;",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "ByteString",
        "fct-source": "src/Network-CGI-Protocol.html#Input",
        "fct-type": "function",
        "title": "inputValue"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "inputValue",
        "normalized": "",
        "package": "cgi",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:logCGI",
      "description": {
        "fct-descr": "\u003cp\u003eLogs some message using the server's logging facility.\n FIXME: does this have to be more general to support\n FastCGI etc? Maybe we should store log messages in the\n CGIState?\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-CGI-Protocol.html#logCGI",
        "fct-type": "function",
        "title": "logCGI"
      },
      "index": {
        "description": "Logs some message using the server logging facility FIXME does this have to be more general to support FastCGI etc Maybe we should store log messages in the CGIState",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "logCGI",
        "normalized": "String-\u003ea()",
        "package": "cgi",
        "partial": "CGI",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:maybeRead",
      "description": {
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e Maybe a",
        "fct-source": "src/Network-CGI-Protocol.html#maybeRead",
        "fct-type": "function",
        "title": "maybeRead"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "maybeRead",
        "normalized": "String-\u003eMaybe a",
        "package": "cgi",
        "partial": "Read",
        "signature": "String-\u003eMaybe a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:replace",
      "description": {
        "fct-descr": "\u003cp\u003eReplaces all instances of a value in a list by another value.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "a-\u003e a-\u003e [a]-\u003e [a]",
        "fct-type": "function",
        "title": "replace"
      },
      "index": {
        "description": "Replaces all instances of value in list by another value",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "replace",
        "normalized": "a-\u003ea-\u003e[a]-\u003e[a]",
        "package": "cgi",
        "partial": "",
        "signature": "a-\u003ea-\u003e[a]-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:runCGIEnvFPS",
      "description": {
        "fct-descr": "\u003cp\u003eRuns a CGI action in a given environment. Uses lazy ByteStrings \n   for input and output.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)]-\u003e ByteString-\u003e (CGIRequest -\u003e m (Headers, CGIResult))-\u003e m ByteString",
        "fct-type": "function",
        "title": "runCGIEnvFPS"
      },
      "index": {
        "description": "Runs CGI action in given environment Uses lazy ByteStrings for input and output",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "runCGIEnvFPS",
        "normalized": "[(String,String)]-\u003eByteString-\u003e(CGIRequest-\u003ea(Headers,CGIResult))-\u003ea ByteString",
        "package": "cgi",
        "partial": "CGIEnv FPS",
        "signature": "[(String,String)]-\u003eByteString-\u003e(CGIRequest-\u003em(Headers,CGIResult))-\u003em ByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:takeInput",
      "description": {
        "fct-descr": "\u003cp\u003eTakes the right number of bytes from the input.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)]-\u003e ByteString-\u003e ByteString",
        "fct-type": "function",
        "title": "takeInput"
      },
      "index": {
        "description": "Takes the right number of bytes from the input",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "takeInput",
        "normalized": "[(String,String)]-\u003eByteString-\u003eByteString",
        "package": "cgi",
        "partial": "Input",
        "signature": "[(String,String)]-\u003eByteString-\u003eByteString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:urlDecode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a single value from the \n   application/x-www-form-urlencoded encoding.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#urlDecode",
        "fct-type": "function",
        "title": "urlDecode"
      },
      "index": {
        "description": "Converts single value from the application x-www-form-urlencoded encoding",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "urlDecode",
        "normalized": "String-\u003eString",
        "package": "cgi",
        "partial": "Decode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI-Protocol.html#v:urlEncode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a single value to the application/x-www-form-urlencoded encoding.\n\u003c/p\u003e",
        "fct-module": "Network.CGI.Protocol",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#urlEncode",
        "fct-type": "function",
        "title": "urlEncode"
      },
      "index": {
        "description": "Converts single value to the application x-www-form-urlencoded encoding",
        "hierarchy": "Network CGI Protocol",
        "module": "Network.CGI.Protocol",
        "name": "urlEncode",
        "normalized": "String-\u003eString",
        "package": "cgi",
        "partial": "Encode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#",
      "description": {
        "fct-descr": "\u003cdiv class=\"doc\"\u003e\u003cp\u003eSimple Library for writing CGI programs.\n See \u003ca\u003ehttp://hoohoo.ncsa.uiuc.edu/cgi/interface.html\u003c/a\u003e for the\n CGI specification.\n\u003c/p\u003e\u003cp\u003eThis version of the library is for systems with version 2.0 or greater\n of the network package. This includes GHC 6.6 and later. For older\n systems, see \u003ca\u003ehttp://www.cs.chalmers.se/~bringert/darcs/cgi-compat/doc/\u003c/a\u003e\n\u003c/p\u003e\u003cp\u003eBased on the original Haskell binding for CGI:\n\u003c/p\u003e\u003cp\u003eOriginal Version by Erik Meijer \u003ca\u003emailto:erik@cs.ruu.nl\u003c/a\u003e.\n Further hacked on by Sven Panne \u003ca\u003emailto:sven.panne@aedion.de\u003c/a\u003e.\n Further hacking by Andy Gill \u003ca\u003emailto:andy@galconn.com\u003c/a\u003e.\n A new, hopefully more flexible, interface\n and support for file uploads by Bjorn Bringert \u003ca\u003emailto:bjorn@bringert.net\u003c/a\u003e.\n\u003c/p\u003e\u003cp\u003eHere is a simple example, including error handling (not that there is \n much that can go wrong with Hello World):\n\u003c/p\u003e\u003cpre\u003e import Network.CGI\n\n cgiMain :: CGI CGIResult\n cgiMain = output \"Hello World!\"\n\n main :: IO ()\n main = runCGI (handleErrors cgiMain)\n\u003c/pre\u003e\u003c/div\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "module",
        "fct-source": "src/Network-CGI.html",
        "fct-type": "module",
        "title": "CGI"
      },
      "index": {
        "description": "Simple Library for writing CGI programs See http hoohoo.ncsa.uiuc.edu cgi interface.html for the CGI specification This version of the library is for systems with version or greater of the network package This includes GHC and later For older systems see http www.cs.chalmers.se bringert darcs cgi-compat doc Based on the original Haskell binding for CGI Original Version by Erik Meijer mailto erik@cs.ruu.nl Further hacked on by Sven Panne mailto sven.panne@aedion.de Further hacking by Andy Gill mailto andy@galconn.com new hopefully more flexible interface and support for file uploads by Bjorn Bringert mailto bjorn@bringert.net Here is simple example including error handling not that there is much that can go wrong with Hello World import Network.CGI cgiMain CGI CGIResult cgiMain output Hello World main IO main runCGI handleErrors cgiMain",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "CGI",
        "normalized": "",
        "package": "cgi",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:Accept",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Accept.html#Accept",
        "fct-type": "data",
        "title": "Accept"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Accept",
        "normalized": "",
        "package": "cgi",
        "partial": "Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:Acceptable",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "class",
        "fct-source": "src/Network-CGI-Accept.html#Acceptable",
        "fct-type": "class",
        "title": "Acceptable"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Acceptable",
        "normalized": "",
        "package": "cgi",
        "partial": "Acceptable",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:CGI",
      "description": {
        "fct-descr": "\u003cp\u003eA simple CGI monad with just IO.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "type",
        "fct-source": "src/Network-CGI-Monad.html#CGI",
        "fct-type": "type",
        "title": "CGI"
      },
      "index": {
        "description": "simple CGI monad with just IO",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "CGI",
        "normalized": "",
        "package": "cgi",
        "partial": "CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:CGIResult",
      "description": {
        "fct-descr": "\u003cp\u003eThe result of a CGI program.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Protocol.html#CGIResult",
        "fct-type": "data",
        "title": "CGIResult"
      },
      "index": {
        "description": "The result of CGI program",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "CGIResult",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIResult",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:CGIT",
      "description": {
        "fct-descr": "\u003cp\u003eThe CGIT monad transformer.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Monad.html#CGIT",
        "fct-type": "data",
        "title": "CGIT"
      },
      "index": {
        "description": "The CGIT monad transformer",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "CGIT",
        "normalized": "",
        "package": "cgi",
        "partial": "CGIT",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:Charset",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "newtype",
        "fct-source": "src/Network-CGI-Accept.html#Charset",
        "fct-type": "newtype",
        "title": "Charset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Charset",
        "normalized": "",
        "package": "cgi",
        "partial": "Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:ContentEncoding",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "newtype",
        "fct-source": "src/Network-CGI-Accept.html#ContentEncoding",
        "fct-type": "newtype",
        "title": "ContentEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ContentEncoding",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:ContentType",
      "description": {
        "fct-descr": "\u003cp\u003eA MIME media type value.\n   The \u003ccode\u003e\u003ca\u003eShow\u003c/a\u003e\u003c/code\u003e instance is derived automatically.\n   Use \u003ccode\u003e\u003ca\u003eshowContentType\u003c/a\u003e\u003c/code\u003e to obtain the standard\n   string representation.\n   See \u003ca\u003ehttp://www.ietf.org/rfc/rfc2046.txt\u003c/a\u003e for more\n   information about MIME media types.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Header.html#ContentType",
        "fct-type": "data",
        "title": "ContentType"
      },
      "index": {
        "description": "MIME media type value The Show instance is derived automatically Use showContentType to obtain the standard string representation See http www.ietf.org rfc rfc2046.txt for more information about MIME media types",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ContentType",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:Cookie",
      "description": {
        "fct-descr": "\u003cp\u003eContains all information about a cookie set by the server.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "data",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "data",
        "title": "Cookie"
      },
      "index": {
        "description": "Contains all information about cookie set by the server",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Cookie",
        "normalized": "",
        "package": "cgi",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:Language",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "newtype",
        "fct-source": "src/Network-CGI-Accept.html#Language",
        "fct-type": "newtype",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Language",
        "normalized": "",
        "package": "cgi",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:MonadCGI",
      "description": {
        "fct-descr": "\u003cp\u003eThe class of CGI monads. Most CGI actions can be run in\n   any monad which is an instance of this class, which means that\n   you can use your own monad transformers to add extra functionality.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "class",
        "fct-source": "src/Network-CGI-Monad.html#MonadCGI",
        "fct-type": "class",
        "title": "MonadCGI"
      },
      "index": {
        "description": "The class of CGI monads Most CGI actions can be run in any monad which is an instance of this class which means that you can use your own monad transformers to add extra functionality",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "MonadCGI",
        "normalized": "",
        "package": "cgi",
        "partial": "Monad CGI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#t:MonadIO",
      "description": {
        "fct-descr": "\u003cp\u003eMonads in which \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e computations may be embedded.\n Any monad built by applying a sequence of monad transformers to the\n \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad will be an instance of this class.\n\u003c/p\u003e\u003cp\u003eInstances should satisfy the following laws, which state that \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e\n is a transformer of monads:\n\u003c/p\u003e\u003cul\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e = \u003ccode\u003e\u003ca\u003ereturn\u003c/a\u003e\u003c/code\u003e\u003c/pre\u003e\u003c/li\u003e\u003cli\u003e\u003cpre\u003e\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e (m \u003e\u003e= f) = \u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e m \u003e\u003e= (\u003ccode\u003e\u003ca\u003eliftIO\u003c/a\u003e\u003c/code\u003e . f)\u003c/pre\u003e\u003c/li\u003e\u003c/ul\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "class",
        "fct-type": "class",
        "title": "MonadIO"
      },
      "index": {
        "description": "Monads in which IO computations may be embedded Any monad built by applying sequence of monad transformers to the IO monad will be an instance of this class Instances should satisfy the following laws which state that liftIO is transformer of monads liftIO return return liftIO liftIO liftIO",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "MonadIO",
        "normalized": "",
        "package": "cgi",
        "partial": "Monad IO",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:Charset",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Charset String",
        "fct-source": "src/Network-CGI-Accept.html#Charset",
        "fct-type": "function",
        "title": "Charset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Charset",
        "normalized": "",
        "package": "cgi",
        "partial": "Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:ContentEncoding",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "ContentEncoding String",
        "fct-source": "src/Network-CGI-Accept.html#ContentEncoding",
        "fct-type": "function",
        "title": "ContentEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ContentEncoding",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:ContentType",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "ContentType",
        "fct-source": "src/Network-CGI-Header.html#ContentType",
        "fct-type": "function",
        "title": "ContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ContentType",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:Cookie",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Cookie",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "Cookie"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Cookie",
        "normalized": "",
        "package": "cgi",
        "partial": "Cookie",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:Language",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Language String",
        "fct-source": "src/Network-CGI-Accept.html#Language",
        "fct-type": "function",
        "title": "Language"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "Language",
        "normalized": "",
        "package": "cgi",
        "partial": "Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:authType",
      "description": {
        "fct-descr": "\u003cp\u003eIf the server supports user authentication, and the script is \n protected, this is the protocol-specific authentication method \n used to validate the user.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe String)",
        "fct-source": "src/Network-CGI.html#authType",
        "fct-type": "function",
        "title": "authType"
      },
      "index": {
        "description": "If the server supports user authentication and the script is protected this is the protocol-specific authentication method used to validate the user",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "authType",
        "normalized": "",
        "package": "cgi",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:catchCGI",
      "description": {
        "fct-descr": "\u003cp\u003eCatches any expection thrown by a CGI action, and uses the given \n   exception handler if an exception is thrown.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#catchCGI",
        "fct-type": "function",
        "title": "catchCGI"
      },
      "index": {
        "description": "Catches any expection thrown by CGI action and uses the given exception handler if an exception is thrown",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "catchCGI",
        "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
        "package": "cgi",
        "partial": "CGI",
        "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookieDomain",
      "description": {
        "fct-descr": "\u003cp\u003eThe domain suffix to which this cookie will be sent.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieDomain"
      },
      "index": {
        "description": "The domain suffix to which this cookie will be sent",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookieDomain",
        "normalized": "",
        "package": "cgi",
        "partial": "Domain",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookieExpires",
      "description": {
        "fct-descr": "\u003cp\u003eExpiry date of the cookie. If \u003ccode\u003e\u003ca\u003eNothing\u003c/a\u003e\u003c/code\u003e, the\n   cookie expires when the browser sessions ends.\n   If the date is in the past, the client should\n   delete the cookie immediately.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Maybe CalendarTime",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieExpires"
      },
      "index": {
        "description": "Expiry date of the cookie If Nothing the cookie expires when the browser sessions ends If the date is in the past the client should delete the cookie immediately",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookieExpires",
        "normalized": "",
        "package": "cgi",
        "partial": "Expires",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookieName",
      "description": {
        "fct-descr": "\u003cp\u003eName of the cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieName"
      },
      "index": {
        "description": "Name of the cookie",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookieName",
        "normalized": "",
        "package": "cgi",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookiePath",
      "description": {
        "fct-descr": "\u003cp\u003eThe path to which this cookie will be sent.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Maybe String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookiePath"
      },
      "index": {
        "description": "The path to which this cookie will be sent",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookiePath",
        "normalized": "",
        "package": "cgi",
        "partial": "Path",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookieSecure",
      "description": {
        "fct-descr": "\u003cp\u003e\u003ccode\u003e\u003ca\u003eTrue\u003c/a\u003e\u003c/code\u003e if this cookie should only be sent using\n   secure means.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Bool",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieSecure"
      },
      "index": {
        "description": "True if this cookie should only be sent using secure means",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookieSecure",
        "normalized": "",
        "package": "cgi",
        "partial": "Secure",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:cookieValue",
      "description": {
        "fct-descr": "\u003cp\u003eValue of the cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Cookie.html#Cookie",
        "fct-type": "function",
        "title": "cookieValue"
      },
      "index": {
        "description": "Value of the cookie",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "cookieValue",
        "normalized": "",
        "package": "cgi",
        "partial": "Value",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:ctParameters",
      "description": {
        "fct-descr": "\u003cp\u003eMedia type parameters. On common example is\n   the charset parameter for the \"text\" \n   top-level type, e.g. \u003ccode\u003e(\"charset\",\"ISO-8859-1\")\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)]",
        "fct-source": "src/Network-CGI-Header.html#ContentType",
        "fct-type": "function",
        "title": "ctParameters"
      },
      "index": {
        "description": "Media type parameters On common example is the charset parameter for the text top-level type e.g charset ISO-8859-1",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ctParameters",
        "normalized": "[(String,String)]",
        "package": "cgi",
        "partial": "Parameters",
        "signature": "[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:ctSubtype",
      "description": {
        "fct-descr": "\u003cp\u003eThe media subtype, the specific data format.\n   Examples include \"plain\", \"html\",\n   \"jpeg\", \"form-data\", etc.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Header.html#ContentType",
        "fct-type": "function",
        "title": "ctSubtype"
      },
      "index": {
        "description": "The media subtype the specific data format Examples include plain html jpeg form-data etc",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ctSubtype",
        "normalized": "",
        "package": "cgi",
        "partial": "Subtype",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:ctType",
      "description": {
        "fct-descr": "\u003cp\u003eThe top-level media type, the general type\n   of the data. Common examples are\n   \"text\", \"image\", \"audio\", \"video\",\n   \"multipart\", and \"application\".\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String",
        "fct-source": "src/Network-CGI-Header.html#ContentType",
        "fct-type": "function",
        "title": "ctType"
      },
      "index": {
        "description": "The top-level media type the general type of the data Common examples are text image audio video multipart and application",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "ctType",
        "normalized": "",
        "package": "cgi",
        "partial": "Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:deleteCookie",
      "description": {
        "fct-descr": "\u003cp\u003eDelete a cookie from the client\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Cookie -\u003e m ()",
        "fct-source": "src/Network-CGI.html#deleteCookie",
        "fct-type": "function",
        "title": "deleteCookie"
      },
      "index": {
        "description": "Delete cookie from the client",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "deleteCookie",
        "normalized": "Cookie-\u003ea()",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "Cookie-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:formDecode",
      "description": {
        "fct-descr": "\u003cp\u003eGets the name-value pairs from application/x-www-form-urlencoded data.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e [(String, String)]",
        "fct-source": "src/Network-CGI-Protocol.html#formDecode",
        "fct-type": "function",
        "title": "formDecode"
      },
      "index": {
        "description": "Gets the name-value pairs from application x-www-form-urlencoded data",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "formDecode",
        "normalized": "String-\u003e[(String,String)]",
        "package": "cgi",
        "partial": "Decode",
        "signature": "String-\u003e[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:formEncode",
      "description": {
        "fct-descr": "\u003cp\u003eFormats name-value pairs as application/x-www-form-urlencoded.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "[(String, String)] -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#formEncode",
        "fct-type": "function",
        "title": "formEncode"
      },
      "index": {
        "description": "Formats name-value pairs as application x-www-form-urlencoded",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "formEncode",
        "normalized": "[(String,String)]-\u003eString",
        "package": "cgi",
        "partial": "Encode",
        "signature": "[(String,String)]-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getBody",
      "description": {
        "fct-descr": "\u003cp\u003eGet the uninterpreted request body as a String\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#getBody",
        "fct-type": "function",
        "title": "getBody"
      },
      "index": {
        "description": "Get the uninterpreted request body as String",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getBody",
        "normalized": "",
        "package": "cgi",
        "partial": "Body",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getBodyFPS",
      "description": {
        "fct-descr": "\u003cp\u003eGet the uninterpreted request body as lazy ByteString\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m ByteString",
        "fct-source": "src/Network-CGI.html#getBodyFPS",
        "fct-type": "function",
        "title": "getBodyFPS"
      },
      "index": {
        "description": "Get the uninterpreted request body as lazy ByteString",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getBodyFPS",
        "normalized": "",
        "package": "cgi",
        "partial": "Body FPS",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getCookie",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getCookie"
      },
      "index": {
        "description": "Get the value of cookie",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getCookie",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInput",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of an input variable, for example from a form.\n   If the variable has multiple values, the first one is returned.\n   Example:\n\u003c/p\u003e\u003cpre\u003e query \u003c- getInput \"query\"\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getInput"
      },
      "index": {
        "description": "Get the value of an input variable for example from form If the variable has multiple values the first one is returned Example query getInput query",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInput",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Input",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputContentType",
      "description": {
        "fct-descr": "\u003cp\u003eGet the content-type of an input, if the input exists, e.g. \u003ca\u003eimage/jpeg\u003c/a\u003e.\n   For non-file inputs, this function returns \u003ca\u003etext/plain\u003c/a\u003e.\n   You can use \u003ccode\u003e\u003ca\u003eparseContentType\u003c/a\u003e\u003c/code\u003e to get a structured\n   representation of the the content-type value.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getInputContentType"
      },
      "index": {
        "description": "Get the content-type of an input if the input exists e.g image jpeg For non-file inputs this function returns text plain You can use parseContentType to get structured representation of the the content-type value",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputContentType",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Input Content Type",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputFPS",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e, but returns a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe ByteString)",
        "fct-type": "function",
        "title": "getInputFPS"
      },
      "index": {
        "description": "Like getInput but returns ByteString",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputFPS",
        "normalized": "String-\u003ea(Maybe ByteString)",
        "package": "cgi",
        "partial": "Input FPS",
        "signature": "String-\u003em(Maybe ByteString)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputFilename",
      "description": {
        "fct-descr": "\u003cp\u003eGet the file name of an input.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getInputFilename"
      },
      "index": {
        "description": "Get the file name of an input",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputFilename",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Input Filename",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputNames",
      "description": {
        "fct-descr": "\u003cp\u003eGet the names of all input variables.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m [String]",
        "fct-source": "src/Network-CGI.html#getInputNames",
        "fct-type": "function",
        "title": "getInputNames"
      },
      "index": {
        "description": "Get the names of all input variables",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputNames",
        "normalized": "a[String]",
        "package": "cgi",
        "partial": "Input Names",
        "signature": "m[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputs",
      "description": {
        "fct-descr": "\u003cp\u003eGet the names and values of all inputs.\n   Note: the same name may occur more than once in the output,\n   if there are several values for the name.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m [(String, String)]",
        "fct-source": "src/Network-CGI.html#getInputs",
        "fct-type": "function",
        "title": "getInputs"
      },
      "index": {
        "description": "Get the names and values of all inputs Note the same name may occur more than once in the output if there are several values for the name",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputs",
        "normalized": "a[(String,String)]",
        "package": "cgi",
        "partial": "Inputs",
        "signature": "m[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getInputsFPS",
      "description": {
        "fct-descr": "\u003cp\u003eGet the names and values of all inputs.\n   Note: the same name may occur more than once in the output,\n   if there are several values for the name.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m [(String, ByteString)]",
        "fct-source": "src/Network-CGI.html#getInputsFPS",
        "fct-type": "function",
        "title": "getInputsFPS"
      },
      "index": {
        "description": "Get the names and values of all inputs Note the same name may occur more than once in the output if there are several values for the name",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getInputsFPS",
        "normalized": "a[(String,ByteString)]",
        "package": "cgi",
        "partial": "Inputs FPS",
        "signature": "m[(String,ByteString)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getMultiInput",
      "description": {
        "fct-descr": "\u003cp\u003eGet all the values of an input variable, for example from a form.\n This can be used to get all the values from form controls\n which allow multiple values to be selected.\n Example:\n\u003c/p\u003e\u003cpre\u003e vals \u003c- getMultiInput \"my_checkboxes\"\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m [String]",
        "fct-type": "function",
        "title": "getMultiInput"
      },
      "index": {
        "description": "Get all the values of an input variable for example from form This can be used to get all the values from form controls which allow multiple values to be selected Example vals getMultiInput my checkboxes",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getMultiInput",
        "normalized": "String-\u003ea[String]",
        "package": "cgi",
        "partial": "Multi Input",
        "signature": "String-\u003em[String]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getMultiInputFPS",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetMultiInput\u003c/a\u003e\u003c/code\u003e but using \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003es.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m [ByteString]",
        "fct-type": "function",
        "title": "getMultiInputFPS"
      },
      "index": {
        "description": "Same as getMultiInput but using ByteString",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getMultiInputFPS",
        "normalized": "String-\u003ea[ByteString]",
        "package": "cgi",
        "partial": "Multi Input FPS",
        "signature": "String-\u003em[ByteString]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getVar",
      "description": {
        "fct-descr": "\u003cp\u003eGet the value of a CGI environment variable. Example:\n\u003c/p\u003e\u003cpre\u003e remoteAddr \u003c- getVar \"REMOTE_ADDR\"\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe String)",
        "fct-type": "function",
        "title": "getVar"
      },
      "index": {
        "description": "Get the value of CGI environment variable Example remoteAddr getVar REMOTE ADDR",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getVar",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Var",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getVarWithDefault",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e String-\u003e m String",
        "fct-type": "function",
        "title": "getVarWithDefault"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getVarWithDefault",
        "normalized": "String-\u003eString-\u003ea String",
        "package": "cgi",
        "partial": "Var With Default",
        "signature": "String-\u003eString-\u003em String"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:getVars",
      "description": {
        "fct-descr": "\u003cp\u003eGet all CGI environment variables and their values.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m [(String, String)]",
        "fct-source": "src/Network-CGI.html#getVars",
        "fct-type": "function",
        "title": "getVars"
      },
      "index": {
        "description": "Get all CGI environment variables and their values",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "getVars",
        "normalized": "a[(String,String)]",
        "package": "cgi",
        "partial": "Vars",
        "signature": "m[(String,String)]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:handleErrors",
      "description": {
        "fct-descr": "\u003cp\u003eCatches any exception thrown by the given CGI action,\n   returns an error page with a 500 Internal Server Error,\n   showing the exception information, and logs the error.\n\u003c/p\u003e\u003cp\u003eTypical usage:\n\u003c/p\u003e\u003cpre\u003e cgiMain :: CGI CGIResult\n cgiMain = ...\n\n main :: IO ()\n main = runCGI (handleErrors cgiMain)\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m CGIResult -\u003e m CGIResult",
        "fct-source": "src/Network-CGI.html#handleErrors",
        "fct-type": "function",
        "title": "handleErrors"
      },
      "index": {
        "description": "Catches any exception thrown by the given CGI action returns an error page with Internal Server Error showing the exception information and logs the error Typical usage cgiMain CGI CGIResult cgiMain main IO main runCGI handleErrors cgiMain",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "handleErrors",
        "normalized": "a CGIResult-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Errors",
        "signature": "m CGIResult-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:handleExceptionCGI",
      "description": {
        "fct-descr": "\u003cdiv class=\"warning\"\u003e\u003cp\u003eDeprecated: Use catchCGI instead.\n\u003c/p\u003e\u003c/div\u003e\u003cp\u003eDeprecated version of \u003ccode\u003e\u003ca\u003ecatchCGI\u003c/a\u003e\u003c/code\u003e. Use \u003ccode\u003e\u003ca\u003ecatchCGI\u003c/a\u003e\u003c/code\u003e instead.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e (SomeException -\u003e m a) -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#handleExceptionCGI",
        "fct-type": "function",
        "title": "handleExceptionCGI"
      },
      "index": {
        "description": "Deprecated Use catchCGI instead Deprecated version of catchCGI Use catchCGI instead",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "handleExceptionCGI",
        "normalized": "a b-\u003e(SomeException-\u003ea b)-\u003ea b",
        "package": "cgi",
        "partial": "Exception CGI",
        "signature": "m a-\u003e(SomeException-\u003em a)-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:liftIO",
      "description": {
        "fct-descr": "\u003cp\u003eLift a computation from the \u003ccode\u003e\u003ca\u003eIO\u003c/a\u003e\u003c/code\u003e monad.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "forall a.  IO a -\u003e m a",
        "fct-type": "function",
        "title": "liftIO"
      },
      "index": {
        "description": "Lift computation from the IO monad",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "liftIO",
        "normalized": "a b IO c-\u003ed c",
        "package": "cgi",
        "partial": "IO",
        "signature": "forall a. IO a-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:logCGI",
      "description": {
        "fct-descr": "\u003cp\u003eLogs some message using the server's logging facility.\n FIXME: does this have to be more general to support\n FastCGI etc? Maybe we should store log messages in the\n CGIState?\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e m ()",
        "fct-source": "src/Network-CGI-Protocol.html#logCGI",
        "fct-type": "function",
        "title": "logCGI"
      },
      "index": {
        "description": "Logs some message using the server logging facility FIXME does this have to be more general to support FastCGI etc Maybe we should store log messages in the CGIState",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "logCGI",
        "normalized": "String-\u003ea()",
        "package": "cgi",
        "partial": "CGI",
        "signature": "String-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:negotiate",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "[a] -\u003e Maybe (Accept a) -\u003e [a]",
        "fct-source": "src/Network-CGI-Accept.html#negotiate",
        "fct-type": "function",
        "title": "negotiate"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "negotiate",
        "normalized": "[a]-\u003eMaybe(Accept a)-\u003e[a]",
        "package": "cgi",
        "partial": "",
        "signature": "[a]-\u003eMaybe(Accept a)-\u003e[a]"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:newCookie",
      "description": {
        "fct-descr": "\u003cp\u003eConstruct a cookie with only name and value set.\n   This client will expire when the browser sessions ends,\n   will only be sent to the server and path which set it\n   and may be sent using any means.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e String-\u003e Cookie",
        "fct-type": "function",
        "title": "newCookie"
      },
      "index": {
        "description": "Construct cookie with only name and value set This client will expire when the browser sessions ends will only be sent to the server and path which set it and may be sent using any means",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "newCookie",
        "normalized": "String-\u003eString-\u003eCookie",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "String-\u003eString-\u003eCookie"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:output",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a \u003ccode\u003e\u003ca\u003eString\u003c/a\u003e\u003c/code\u003e. The output is assumed to be text/html, encoded using\n   ISO-8859-1. To change this, set the Content-type header using\n   \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m CGIResult",
        "fct-type": "function",
        "title": "output"
      },
      "index": {
        "description": "Output String The output is assumed to be text html encoded using ISO-8859-1 To change this set the Content-type header using setHeader",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "output",
        "normalized": "String-\u003ea CGIResult",
        "package": "cgi",
        "partial": "",
        "signature": "String-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputError",
      "description": {
        "fct-descr": "\u003cp\u003eOutput an error page to the user, with the given\n   HTTP status code in the response. Also logs the error information\n   using \u003ccode\u003e\u003ca\u003elogCGI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Int-\u003e String-\u003e [String]-\u003e m CGIResult",
        "fct-type": "function",
        "title": "outputError"
      },
      "index": {
        "description": "Output an error page to the user with the given HTTP status code in the response Also logs the error information using logCGI",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputError",
        "normalized": "Int-\u003eString-\u003e[String]-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Error",
        "signature": "Int-\u003eString-\u003e[String]-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputException",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a 500 Internal Server Error with information from\n   an \u003ccode\u003e\u003ca\u003eException\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "SomeException -\u003e m CGIResult",
        "fct-source": "src/Network-CGI.html#outputException",
        "fct-type": "function",
        "title": "outputException"
      },
      "index": {
        "description": "Output Internal Server Error with information from an Exception",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputException",
        "normalized": "SomeException-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Exception",
        "signature": "SomeException-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputFPS",
      "description": {
        "fct-descr": "\u003cp\u003eOutput a \u003ccode\u003e\u003ca\u003eByteString\u003c/a\u003e\u003c/code\u003e. The output is assumed to be text/html, \n   encoded using ISO-8859-1. To change this, set the \n   Content-type header using \u003ccode\u003e\u003ca\u003esetHeader\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "ByteString-\u003e m CGIResult",
        "fct-type": "function",
        "title": "outputFPS"
      },
      "index": {
        "description": "Output ByteString The output is assumed to be text html encoded using ISO-8859-1 To change this set the Content-type header using setHeader",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputFPS",
        "normalized": "ByteString-\u003ea CGIResult",
        "package": "cgi",
        "partial": "FPS",
        "signature": "ByteString-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputInternalServerError",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eoutputError\u003c/a\u003e\u003c/code\u003e to output and log a 500 Internal Server Error.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "[String]-\u003e m CGIResult",
        "fct-type": "function",
        "title": "outputInternalServerError"
      },
      "index": {
        "description": "Use outputError to output and log Internal Server Error",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputInternalServerError",
        "normalized": "[String]-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Internal Server Error",
        "signature": "[String]-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputMethodNotAllowed",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eoutputError\u003c/a\u003e\u003c/code\u003e to output and log a 405 Method Not Allowed error.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "[String]-\u003e m CGIResult",
        "fct-type": "function",
        "title": "outputMethodNotAllowed"
      },
      "index": {
        "description": "Use outputError to output and log Method Not Allowed error",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputMethodNotAllowed",
        "normalized": "[String]-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Method Not Allowed",
        "signature": "[String]-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputNotFound",
      "description": {
        "fct-descr": "\u003cp\u003eUse \u003ccode\u003e\u003ca\u003eoutputError\u003c/a\u003e\u003c/code\u003e to output and log a 404 Not Found error.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m CGIResult",
        "fct-type": "function",
        "title": "outputNotFound"
      },
      "index": {
        "description": "Use outputError to output and log Not Found error",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputNotFound",
        "normalized": "String-\u003ea CGIResult",
        "package": "cgi",
        "partial": "Not Found",
        "signature": "String-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:outputNothing",
      "description": {
        "fct-descr": "\u003cp\u003eDo not output anything (except headers).\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m CGIResult",
        "fct-source": "src/Network-CGI.html#outputNothing",
        "fct-type": "function",
        "title": "outputNothing"
      },
      "index": {
        "description": "Do not output anything except headers",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "outputNothing",
        "normalized": "",
        "package": "cgi",
        "partial": "Nothing",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:parseContentType",
      "description": {
        "fct-descr": "\u003cp\u003eParse the standard representation of a content-type.\n   If the input cannot be parsed, this function calls\n   \u003ccode\u003e\u003ca\u003efail\u003c/a\u003e\u003c/code\u003e with a (hopefully) informative error message.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e m ContentType",
        "fct-source": "src/Network-CGI-Header.html#parseContentType",
        "fct-type": "function",
        "title": "parseContentType"
      },
      "index": {
        "description": "Parse the standard representation of content-type If the input cannot be parsed this function calls fail with hopefully informative error message",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "parseContentType",
        "normalized": "String-\u003ea ContentType",
        "package": "cgi",
        "partial": "Content Type",
        "signature": "String-\u003em ContentType"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:pathInfo",
      "description": {
        "fct-descr": "\u003cp\u003eThe extra path information, as given by the client.\n   This is any part of the request path that follows the\n   CGI program path.\n   If the string returned by this function is not empty,\n   it is guaranteed to start with a \u003ccode\u003e'/'\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eNote that this function returns an unencoded string.\n Make sure to percent-encode any characters\n that are not allowed in URI paths before using the result of\n this function to construct a URI.\n See \u003ccode\u003e\u003ca\u003eprogURI\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003equeryURI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erequestURI\u003c/a\u003e\u003c/code\u003e for a higher-level\n interface.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#pathInfo",
        "fct-type": "function",
        "title": "pathInfo"
      },
      "index": {
        "description": "The extra path information as given by the client This is any part of the request path that follows the CGI program path If the string returned by this function is not empty it is guaranteed to start with Note that this function returns an unencoded string Make sure to percent-encode any characters that are not allowed in URI paths before using the result of this function to construct URI See progURI queryURI and requestURI for higher-level interface",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "pathInfo",
        "normalized": "",
        "package": "cgi",
        "partial": "Info",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:pathTranslated",
      "description": {
        "fct-descr": "\u003cp\u003eThe path returned by \u003ccode\u003e\u003ca\u003epathInfo\u003c/a\u003e\u003c/code\u003e, but with virtual-to-physical\n   mapping applied to it.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#pathTranslated",
        "fct-type": "function",
        "title": "pathTranslated"
      },
      "index": {
        "description": "The path returned by pathInfo but with virtual-to-physical mapping applied to it",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "pathTranslated",
        "normalized": "",
        "package": "cgi",
        "partial": "Translated",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:progURI",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to reconstruct the absolute URI of this program. \n   This does not include\n   any extra path information or query parameters. See\n   \u003ccode\u003e\u003ca\u003equeryURI\u003c/a\u003e\u003c/code\u003e for that.\n   If the server is rewriting request URIs, this URI can\n   be different from the one requested by the client.\n   See also \u003ccode\u003e\u003ca\u003erequestURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCharacters in the components of the returned URI are escaped \n when needed, as required by \u003ca\u003eNetwork.URI\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m URI",
        "fct-source": "src/Network-CGI.html#progURI",
        "fct-type": "function",
        "title": "progURI"
      },
      "index": {
        "description": "Attempts to reconstruct the absolute URI of this program This does not include any extra path information or query parameters See queryURI for that If the server is rewriting request URIs this URI can be different from the one requested by the client See also requestURI Characters in the components of the returned URI are escaped when needed as required by Network.URI",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "progURI",
        "normalized": "",
        "package": "cgi",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:queryString",
      "description": {
        "fct-descr": "\u003cp\u003eThe information which follows the ? in the URL which referenced \n   this program. This is the percent-encoded query information.\n   For most normal uses, \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e and friends are probably\n   more convenient.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#queryString",
        "fct-type": "function",
        "title": "queryString"
      },
      "index": {
        "description": "The information which follows the in the URL which referenced this program This is the percent-encoded query information For most normal uses getInput and friends are probably more convenient",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "queryString",
        "normalized": "",
        "package": "cgi",
        "partial": "String",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:queryURI",
      "description": {
        "fct-descr": "\u003cp\u003eLike \u003ccode\u003e\u003ca\u003eprogURI\u003c/a\u003e\u003c/code\u003e, but the returned \u003ccode\u003e\u003ca\u003eURI\u003c/a\u003e\u003c/code\u003e also includes\n   any extra path information, and any query parameters.\n   If the server is rewriting request URIs, this URI can\n   be different from the one requested by the client.\n   See also \u003ccode\u003e\u003ca\u003erequestURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCharacters in the components of the returned URI are escaped \n when needed, as required by \u003ca\u003eNetwork.URI\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m URI",
        "fct-source": "src/Network-CGI.html#queryURI",
        "fct-type": "function",
        "title": "queryURI"
      },
      "index": {
        "description": "Like progURI but the returned URI also includes any extra path information and any query parameters If the server is rewriting request URIs this URI can be different from the one requested by the client See also requestURI Characters in the components of the returned URI are escaped when needed as required by Network.URI",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "queryURI",
        "normalized": "",
        "package": "cgi",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:readCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetCookie\u003c/a\u003e\u003c/code\u003e, but tries to read the value to the desired type.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "readCookie"
      },
      "index": {
        "description": "Same as getCookie but tries to read the value to the desired type",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "readCookie",
        "normalized": "String-\u003ea(Maybe b)",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "String-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:readInput",
      "description": {
        "fct-descr": "\u003cp\u003eSame as \u003ccode\u003e\u003ca\u003egetInput\u003c/a\u003e\u003c/code\u003e, but tries to read the value to the desired type.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m (Maybe a)",
        "fct-type": "function",
        "title": "readInput"
      },
      "index": {
        "description": "Same as getInput but tries to read the value to the desired type",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "readInput",
        "normalized": "String-\u003ea(Maybe b)",
        "package": "cgi",
        "partial": "Input",
        "signature": "String-\u003em(Maybe a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:redirect",
      "description": {
        "fct-descr": "\u003cp\u003eRedirect to some location.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e m CGIResult",
        "fct-type": "function",
        "title": "redirect"
      },
      "index": {
        "description": "Redirect to some location",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "redirect",
        "normalized": "String-\u003ea CGIResult",
        "package": "cgi",
        "partial": "",
        "signature": "String-\u003em CGIResult"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:remoteAddr",
      "description": {
        "fct-descr": "\u003cp\u003eThe IP address of the remote host making the request.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#remoteAddr",
        "fct-type": "function",
        "title": "remoteAddr"
      },
      "index": {
        "description": "The IP address of the remote host making the request",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "remoteAddr",
        "normalized": "",
        "package": "cgi",
        "partial": "Addr",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:remoteHost",
      "description": {
        "fct-descr": "\u003cp\u003eThe hostname making the request. If the server does not have\n   this information, Nothing is returned. See also \u003ccode\u003e\u003ca\u003eremoteAddr\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe String)",
        "fct-source": "src/Network-CGI.html#remoteHost",
        "fct-type": "function",
        "title": "remoteHost"
      },
      "index": {
        "description": "The hostname making the request If the server does not have this information Nothing is returned See also remoteAddr",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "remoteHost",
        "normalized": "",
        "package": "cgi",
        "partial": "Host",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:remoteUser",
      "description": {
        "fct-descr": "\u003cp\u003eIf the server supports user authentication, and the script is \n   protected, this is the username they have authenticated as.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe String)",
        "fct-source": "src/Network-CGI.html#remoteUser",
        "fct-type": "function",
        "title": "remoteUser"
      },
      "index": {
        "description": "If the server supports user authentication and the script is protected this is the username they have authenticated as",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "remoteUser",
        "normalized": "",
        "package": "cgi",
        "partial": "User",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestAccept",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe (Accept ContentType))",
        "fct-source": "src/Network-CGI.html#requestAccept",
        "fct-type": "function",
        "title": "requestAccept"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestAccept",
        "normalized": "",
        "package": "cgi",
        "partial": "Accept",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestAcceptCharset",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe (Accept Charset))",
        "fct-source": "src/Network-CGI.html#requestAcceptCharset",
        "fct-type": "function",
        "title": "requestAcceptCharset"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestAcceptCharset",
        "normalized": "",
        "package": "cgi",
        "partial": "Accept Charset",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestAcceptEncoding",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe (Accept ContentEncoding))",
        "fct-source": "src/Network-CGI.html#requestAcceptEncoding",
        "fct-type": "function",
        "title": "requestAcceptEncoding"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestAcceptEncoding",
        "normalized": "",
        "package": "cgi",
        "partial": "Accept Encoding",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestAcceptLanguage",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe (Accept Language))",
        "fct-source": "src/Network-CGI.html#requestAcceptLanguage",
        "fct-type": "function",
        "title": "requestAcceptLanguage"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestAcceptLanguage",
        "normalized": "",
        "package": "cgi",
        "partial": "Accept Language",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestContentLength",
      "description": {
        "fct-descr": "\u003cp\u003eFor queries which have attached information, such as \n   HTTP POST and PUT, this is the length of the content \n   given by the client.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe Int)",
        "fct-source": "src/Network-CGI.html#requestContentLength",
        "fct-type": "function",
        "title": "requestContentLength"
      },
      "index": {
        "description": "For queries which have attached information such as HTTP POST and PUT this is the length of the content given by the client",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestContentLength",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Length",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestContentType",
      "description": {
        "fct-descr": "\u003cp\u003eFor queries which have attached information, such as \n   HTTP POST and PUT, this is the content type of the data.\n   You can use \u003ccode\u003e\u003ca\u003eparseContentType\u003c/a\u003e\u003c/code\u003e to get a structured\n   representation of the the content-type value.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m (Maybe String)",
        "fct-source": "src/Network-CGI.html#requestContentType",
        "fct-type": "function",
        "title": "requestContentType"
      },
      "index": {
        "description": "For queries which have attached information such as HTTP POST and PUT this is the content type of the data You can use parseContentType to get structured representation of the the content-type value",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestContentType",
        "normalized": "",
        "package": "cgi",
        "partial": "Content Type",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestHeader",
      "description": {
        "fct-descr": "\u003cp\u003eGets the value of the request header with the given name.\n   The header name is case-insensitive.\n   Example:\n\u003c/p\u003e\u003cpre\u003e requestHeader \"User-Agent\"\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e m (Maybe String)",
        "fct-source": "src/Network-CGI.html#requestHeader",
        "fct-type": "function",
        "title": "requestHeader"
      },
      "index": {
        "description": "Gets the value of the request header with the given name The header name is case-insensitive Example requestHeader User-Agent",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestHeader",
        "normalized": "String-\u003ea(Maybe String)",
        "package": "cgi",
        "partial": "Header",
        "signature": "String-\u003em(Maybe String)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestMethod",
      "description": {
        "fct-descr": "\u003cp\u003eThe method with which the request was made. \n    For HTTP, this is \"GET\", \"HEAD\", \"POST\", etc.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#requestMethod",
        "fct-type": "function",
        "title": "requestMethod"
      },
      "index": {
        "description": "The method with which the request was made For HTTP this is GET HEAD POST etc",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestMethod",
        "normalized": "",
        "package": "cgi",
        "partial": "Method",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:requestURI",
      "description": {
        "fct-descr": "\u003cp\u003eAttempts to reconstruct the absolute URI requested by the client,\n   including extra path information and query parameters.\n   If no request URI rewriting is done, or if the web server does not\n   provide the information needed to reconstruct the request URI,\n   this function returns the same value as \u003ccode\u003e\u003ca\u003equeryURI\u003c/a\u003e\u003c/code\u003e.\n\u003c/p\u003e\u003cp\u003eCharacters in the components of the returned URI are escaped \n when needed, as required by \u003ca\u003eNetwork.URI\u003c/a\u003e.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m URI",
        "fct-source": "src/Network-CGI.html#requestURI",
        "fct-type": "function",
        "title": "requestURI"
      },
      "index": {
        "description": "Attempts to reconstruct the absolute URI requested by the client including extra path information and query parameters If no request URI rewriting is done or if the web server does not provide the information needed to reconstruct the request URI this function returns the same value as queryURI Characters in the components of the returned URI are escaped when needed as required by Network.URI",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "requestURI",
        "normalized": "",
        "package": "cgi",
        "partial": "URI",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:runCGI",
      "description": {
        "fct-descr": "\u003cp\u003eRun a CGI action. Typically called by the main function.\n   Reads input from stdin and writes to stdout. Gets\n   CGI environment variables from the program environment.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "CGIT m CGIResult -\u003e m ()",
        "fct-source": "src/Network-CGI.html#runCGI",
        "fct-type": "function",
        "title": "runCGI"
      },
      "index": {
        "description": "Run CGI action Typically called by the main function Reads input from stdin and writes to stdout Gets CGI environment variables from the program environment",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "runCGI",
        "normalized": "CGIT a CGIResult-\u003ea()",
        "package": "cgi",
        "partial": "CGI",
        "signature": "CGIT m CGIResult-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:scriptName",
      "description": {
        "fct-descr": "\u003cp\u003eA virtual path to the script being executed,  \n used for self-referencing URIs. \n\u003c/p\u003e\u003cp\u003eNote that this function returns an unencoded string.\n Make sure to percent-encode any characters\n that are not allowed in URI paths before using the result of\n this function to construct a URI.\n See \u003ccode\u003e\u003ca\u003eprogURI\u003c/a\u003e\u003c/code\u003e, \u003ccode\u003e\u003ca\u003equeryURI\u003c/a\u003e\u003c/code\u003e and \u003ccode\u003e\u003ca\u003erequestURI\u003c/a\u003e\u003c/code\u003e for a higher-level\n interface.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#scriptName",
        "fct-type": "function",
        "title": "scriptName"
      },
      "index": {
        "description": "virtual path to the script being executed used for self-referencing URIs Note that this function returns an unencoded string Make sure to percent-encode any characters that are not allowed in URI paths before using the result of this function to construct URI See progURI queryURI and requestURI for higher-level interface",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "scriptName",
        "normalized": "",
        "package": "cgi",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:serverName",
      "description": {
        "fct-descr": "\u003cp\u003eThe server's hostname, DNS alias, or IP address as it would \n   appear in self-referencing URLs.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m String",
        "fct-source": "src/Network-CGI.html#serverName",
        "fct-type": "function",
        "title": "serverName"
      },
      "index": {
        "description": "The server hostname DNS alias or IP address as it would appear in self-referencing URLs",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "serverName",
        "normalized": "",
        "package": "cgi",
        "partial": "Name",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:serverPort",
      "description": {
        "fct-descr": "\u003cp\u003eThe port number to which the request was sent.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m Int",
        "fct-source": "src/Network-CGI.html#serverPort",
        "fct-type": "function",
        "title": "serverPort"
      },
      "index": {
        "description": "The port number to which the request was sent",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "serverPort",
        "normalized": "",
        "package": "cgi",
        "partial": "Port",
        "signature": ""
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:setCookie",
      "description": {
        "fct-descr": "\u003cp\u003eSet a cookie.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Cookie -\u003e m ()",
        "fct-source": "src/Network-CGI.html#setCookie",
        "fct-type": "function",
        "title": "setCookie"
      },
      "index": {
        "description": "Set cookie",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "setCookie",
        "normalized": "Cookie-\u003ea()",
        "package": "cgi",
        "partial": "Cookie",
        "signature": "Cookie-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:setHeader",
      "description": {
        "fct-descr": "\u003cp\u003eAdd a response header. \n   Example:\n\u003c/p\u003e\u003cpre\u003e setHeader \"Content-type\" \"text/plain\"\n\u003c/pre\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String-\u003e String-\u003e m ()",
        "fct-type": "function",
        "title": "setHeader"
      },
      "index": {
        "description": "Add response header Example setHeader Content-type text plain",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "setHeader",
        "normalized": "String-\u003eString-\u003ea()",
        "package": "cgi",
        "partial": "Header",
        "signature": "String-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:setStatus",
      "description": {
        "fct-descr": "\u003cp\u003eSet the HTTP response status.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "Int-\u003e String-\u003e m ()",
        "fct-type": "function",
        "title": "setStatus"
      },
      "index": {
        "description": "Set the HTTP response status",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "setStatus",
        "normalized": "Int-\u003eString-\u003ea()",
        "package": "cgi",
        "partial": "Status",
        "signature": "Int-\u003eString-\u003em()"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:showContentType",
      "description": {
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "ContentType -\u003e String",
        "fct-source": "src/Network-CGI-Header.html#showContentType",
        "fct-type": "function",
        "title": "showContentType"
      },
      "index": {
        "description": "",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "showContentType",
        "normalized": "ContentType-\u003eString",
        "package": "cgi",
        "partial": "Content Type",
        "signature": "ContentType-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:throwCGI",
      "description": {
        "fct-descr": "\u003cp\u003eThrow an exception in a CGI monad. The monad is required to be\n   a \u003ccode\u003e\u003ca\u003eMonadIO\u003c/a\u003e\u003c/code\u003e, so that we can use \u003ccode\u003e\u003ca\u003ethrowIO\u003c/a\u003e\u003c/code\u003e to guarantee ordering.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "SomeException -\u003e m a",
        "fct-source": "src/Network-CGI-Monad.html#throwCGI",
        "fct-type": "function",
        "title": "throwCGI"
      },
      "index": {
        "description": "Throw an exception in CGI monad The monad is required to be MonadIO so that we can use throwIO to guarantee ordering",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "throwCGI",
        "normalized": "SomeException-\u003ea b",
        "package": "cgi",
        "partial": "CGI",
        "signature": "SomeException-\u003em a"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:tryCGI",
      "description": {
        "fct-descr": "\u003cp\u003eCatches any exception thrown by an CGI action, and returns either\n   the exception, or if no exception was raised, the result of the action.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "m a -\u003e m (Either SomeException a)",
        "fct-source": "src/Network-CGI-Monad.html#tryCGI",
        "fct-type": "function",
        "title": "tryCGI"
      },
      "index": {
        "description": "Catches any exception thrown by an CGI action and returns either the exception or if no exception was raised the result of the action",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "tryCGI",
        "normalized": "a b-\u003ea(Either SomeException b)",
        "package": "cgi",
        "partial": "CGI",
        "signature": "m a-\u003em(Either SomeException a)"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:urlDecode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a single value from the \n   application/x-www-form-urlencoded encoding.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#urlDecode",
        "fct-type": "function",
        "title": "urlDecode"
      },
      "index": {
        "description": "Converts single value from the application x-www-form-urlencoded encoding",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "urlDecode",
        "normalized": "String-\u003eString",
        "package": "cgi",
        "partial": "Decode",
        "signature": "String-\u003eString"
      }
    }
  },
  {
    "cmd": "update",
    "document": {
      "uri": "http://hackage.haskell.org/package/cgi/docs/Network-CGI.html#v:urlEncode",
      "description": {
        "fct-descr": "\u003cp\u003eConverts a single value to the application/x-www-form-urlencoded encoding.\n\u003c/p\u003e",
        "fct-module": "Network.CGI",
        "fct-package": "cgi",
        "fct-signature": "String -\u003e String",
        "fct-source": "src/Network-CGI-Protocol.html#urlEncode",
        "fct-type": "function",
        "title": "urlEncode"
      },
      "index": {
        "description": "Converts single value to the application x-www-form-urlencoded encoding",
        "hierarchy": "Network CGI",
        "module": "Network.CGI",
        "name": "urlEncode",
        "normalized": "String-\u003eString",
        "package": "cgi",
        "partial": "Encode",
        "signature": "String-\u003eString"
      }
    }
  }
]